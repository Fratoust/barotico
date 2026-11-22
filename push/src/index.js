/* Barotico push service (Cloudflare Worker + KV).
   Stores, for each device that taps "Follow", an anonymous Web Push address and the countries and topics it follows.
   No name, no e-mail, no IP address is stored, and nothing is logged (observability is off in wrangler.toml).
   Inactive devices expire after about 13 months; only the month of the last visit is kept. Notifications carry no payload: the app fetches the public list of
   recent events (/recent) and shows the ones that match what the device follows.
   KV keys:
     vapid            {pub, jwk}            generated on first use, the private key never leaves Cloudflare
     sub:<id>         {endpoint, lang, follows:{country:[topics]}, d:"YYYY-MM"}   expires ~13 months after the last visit
     q:<time>-<rand>  event                 written by the GitHub workflow, processed by the cron
     recent           [event...]            last 30 events, public
     elections        {country:{date,slug,name}}  snapshot written by the workflow, used for reminders
*/
const ORIGINS=["https://barotico.com","https://www.barotico.com"];
const TOPICS=["elec","fiche","gov"];
const b64u=buf=>btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
const enc=new TextEncoder();
async function sha(s){return b64u(await crypto.subtle.digest("SHA-256",enc.encode(s))).slice(0,32)}
function cors(req){const o=req.headers.get("Origin")||"";return {"Access-Control-Allow-Origin":ORIGINS.includes(o)?o:ORIGINS[0],"Access-Control-Allow-Methods":"GET,POST,OPTIONS","Access-Control-Allow-Headers":"Content-Type","Vary":"Origin"}}
const json=(req,obj,status=200)=>new Response(JSON.stringify(obj),{status,headers:{"Content-Type":"application/json",...cors(req)}});

async function vapid(env){
  let v=await env.PUSH.get("vapid","json");if(v)return v;
  const kp=await crypto.subtle.generateKey({name:"ECDSA",namedCurve:"P-256"},true,["sign","verify"]);
  v={pub:b64u(await crypto.subtle.exportKey("raw",kp.publicKey)),jwk:await crypto.subtle.exportKey("jwk",kp.privateKey)};
  await env.PUSH.put("vapid",JSON.stringify(v));return v;
}
async function vapidHeader(env,endpoint){
  const v=await vapid(env),aud=new URL(endpoint).origin;
  const h=b64u(enc.encode(JSON.stringify({typ:"JWT",alg:"ES256"}))),c=b64u(enc.encode(JSON.stringify({aud,exp:Math.floor(Date.now()/1000)+12*3600,sub:"mailto:contact@barotico.com"})));
  const key=await crypto.subtle.importKey("jwk",v.jwk,{name:"ECDSA",namedCurve:"P-256"},false,["sign"]);
  const sig=await crypto.subtle.sign({name:"ECDSA",hash:"SHA-256"},key,enc.encode(h+"."+c));
  return `vapid t=${h}.${c}.${b64u(sig)}, k=${v.pub}`;
}
async function sendPush(env,id,sub){
  try{
    const r=await fetch(sub.endpoint,{method:"POST",headers:{Authorization:await vapidHeader(env,sub.endpoint),TTL:"86400",Urgency:"normal","Content-Length":"0"}});
    if(r.status===404||r.status===410)await env.PUSH.delete("sub:"+id);
    return r.status;
  }catch(e){return 0}
}
function cleanFollows(f){const out={};if(f&&typeof f==="object")for(const k of Object.keys(f).slice(0,60)){if(!/^[a-z]{2,20}$/.test(k))continue;const t=(Array.isArray(f[k])?f[k]:[]).filter(x=>TOPICS.includes(x));if(t.length)out[k]=t}return out}
/* Only the browsers' own push services are accepted, so the service can never be made to call any other address. */
const PUSH_HOSTS=[/^fcm\.googleapis\.com$/,/^android\.googleapis\.com$/,/^updates\.push\.services\.mozilla\.com$/,/^web\.push\.apple\.com$/,/(^|\.)push\.apple\.com$/,/\.notify\.windows\.com$/,/^wns2-[a-z0-9-]+\.notify\.windows\.com$/];
const okEndpoint=u=>{try{const x=new URL(u);return x.protocol==="https:"&&u.length<1000&&!x.username&&!x.password&&PUSH_HOSTS.some(r=>r.test(x.hostname))}catch(e){return false}};
const TTL=400*864e2; // a device that never comes back is forgotten after about 13 months

async function fanout(env,events){
  if(!events.length)return;
  const rec=(await env.PUSH.get("recent","json"))||[];
  const stamped=events.map(e=>({...e,t:e.t||Date.now(),id:e.id||crypto.randomUUID().slice(0,8)}));
  await env.PUSH.put("recent",JSON.stringify(stamped.concat(rec).slice(0,30)));
  let cursor;do{
    const l=await env.PUSH.list({prefix:"sub:",cursor});cursor=l.list_complete?null:l.cursor;
    for(const k of l.keys){const sub=await env.PUSH.get(k.name,"json");if(!sub)continue;
      if(stamped.some(e=>(sub.follows[e.k]||[]).includes(e.topic)))await sendPush(env,k.name.slice(4),sub)}
  }while(cursor);
}
async function cron(env,when){
  const events=[];
  let cursor;do{const l=await env.PUSH.list({prefix:"q:",cursor});cursor=l.list_complete?null:l.cursor;
    for(const k of l.keys){const e=await env.PUSH.get(k.name,"json");if(e)events.push(e);await env.PUSH.delete(k.name)}}while(cursor);
  const d=new Date(when);
  if(d.getUTCHours()===8&&d.getUTCMinutes()<10){
    const el=(await env.PUSH.get("elections","json"))||{},today=Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate());
    for(const [k,x] of Object.entries(el)){if(!x.date)continue;const [y,m,dd]=x.date.split("-").map(Number);const days=Math.round((Date.UTC(y,m-1,dd)-today)/864e5);
      if([30,7,1,0].includes(days))events.push({k,slug:x.slug,name:x.name,topic:"elec",kind:"remind",days,label:x.label,date:x.date})}
  }
  await fanout(env,events);
}
export default{
  async fetch(req,env){
    if(req.method==="OPTIONS")return new Response(null,{headers:cors(req)});
    const u=new URL(req.url);
    if(u.pathname==="/config")return json(req,{vapid:(await vapid(env)).pub,topics:TOPICS});
    if(u.pathname==="/recent")return json(req,(await env.PUSH.get("recent","json"))||[]);
    if(req.method!=="POST")return json(req,{ok:true,service:"barotico-push"});
    let b;try{b=await req.json()}catch(e){return json(req,{error:"bad json"},400)}
    const ep=b.endpoint||(b.subscription&&b.subscription.endpoint);if(!okEndpoint(ep))return json(req,{error:"bad endpoint"},400);
    const id=await sha(ep);
    if(u.pathname==="/subscribe"){
      const follows=cleanFollows(b.follows);
      if(!Object.keys(follows).length){await env.PUSH.delete("sub:"+id);return json(req,{ok:true,id,following:0})}
      await env.PUSH.put("sub:"+id,JSON.stringify({endpoint:ep,lang:["en","fr","es"].includes(b.lang)?b.lang:"en",follows,d:new Date().toISOString().slice(0,7)}),{expirationTtl:TTL});
      return json(req,{ok:true,id,following:Object.keys(follows).length});
    }
    if(u.pathname==="/unsubscribe"){await env.PUSH.delete("sub:"+id);return json(req,{ok:true})}
    return json(req,{error:"not found"},404);
  },
  async scheduled(ev,env,ctx){ctx.waitUntil(cron(env,ev.scheduledTime))}
};
