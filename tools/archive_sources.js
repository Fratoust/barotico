/* Archive Barotico's sources in the Internet Archive (Wayback Machine).
   Priority 1: every source of a "court proceedings / official acts" entry (casier).
   Priority 2: every other source URL found in the data files.
   State is kept in archive/wayback.json: {url: {snap, t}}. Each run archives at most MAX new URLs,
   then URLs whose last copy is older than REFRESH_DAYS (casier sources only).
   Run by .github/workflows/archive-sources.yml. Usage: node tools/archive_sources.js [MAX] */
const fs=require("fs"),path=require("path");
const ROOT=path.join(__dirname,"..");
const MAX=+(process.argv[2]||250),REFRESH_DAYS=180,PAUSE=6000,DEADLINE=Date.now()+95*60e3;
const STATE=path.join(ROOT,"archive/wayback.json");
const state=fs.existsSync(STATE)?JSON.parse(fs.readFileSync(STATE,"utf8")):{};
global.window=global;global.L3=(en,fr,es)=>({en,fr,es});global.P3=global.L3;
const D={};global.BAROTICO={add:(k,o)=>{D[k]=o},meta:{}};
for(const f of fs.readdirSync(path.join(ROOT,"countries")))if(/^[a-z]+\.js$/.test(f)&&!["registry.js","refs.js","meta.js"].includes(f)){try{require(path.join(ROOT,"countries",f))}catch(e){console.log("skip",f,e.message)}}
let P={};try{P=new Function(fs.readFileSync(path.join(ROOT,"parties.js"),"utf8")+";return PARTIES")()}catch(e){console.log("parties.js:",e.message)}
const prio=new Set();
const take=c=>{for(const p of (c.parties||c||[]))for(const x of (p.casier||[]))if(typeof x[2]==="string"&&/^https?:/.test(x[2]))prio.add(x[2])};
Object.values(D).forEach(take);Object.values(P).forEach(take);
const all=new Set();
for(const f of ["parties.js","pairs.js","main.js","power.js","gbdata.js","blank.js","media.js","verdicts.js","verdicts-france.js","verdicts-belgique.js",...fs.readdirSync(path.join(ROOT,"countries")).map(x=>"countries/"+x)]){
  const p=path.join(ROOT,f);if(!fs.existsSync(p)||!f.endsWith(".js"))continue;
  for(const m of fs.readFileSync(p,"utf8").matchAll(/https?:\/\/[^"'`\s<>\\)]+/g)){const u=m[0].replace(/[.,;]+$/,"");if(!/barotico\.com|web\.archive\.org|localhost|schema\.org|w3\.org/.test(u))all.add(u)}}
const old=u=>!state[u]||(prio.has(u)&&Date.now()-state[u].t>REFRESH_DAYS*864e5);
const queue=[...[...prio].filter(u=>!state[u]),...[...all].filter(u=>!prio.has(u)&&!state[u]),...[...prio].filter(u=>state[u]&&old(u))].slice(0,MAX);
console.log(`casier sources: ${prio.size}, all sources: ${all.size}, archived: ${Object.keys(state).length}, this run: ${queue.length}`);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{let ok=0,fail=0;
  for(const u of queue){
    if(Date.now()>DEADLINE){console.log("time budget used, stopping");break}
    try{
      const r=await fetch("https://web.archive.org/save/"+u,{method:"GET",redirect:"manual",signal:AbortSignal.timeout(60000),headers:{"User-Agent":"barotico-source-archiver (contact@barotico.com)"}});
      let loc=r.headers.get("content-location")||r.headers.get("location")||"";
      if(r.status===429){console.log("rate limited, stopping");break}
      if(!loc){const a=await fetch("https://archive.org/wayback/available?url="+encodeURIComponent(u),{signal:AbortSignal.timeout(30000)}).then(x=>x.json()).catch(()=>null);loc=a&&a.archived_snapshots&&a.archived_snapshots.closest?a.archived_snapshots.closest.url:""}
      if(loc){state[u]={snap:loc.startsWith("http")?loc:"https://web.archive.org"+loc,t:Date.now()};ok++}else fail++;
    }catch(e){fail++}
    if((ok+fail)%20===0)fs.writeFileSync(STATE,JSON.stringify(state,null,0));
    await sleep(PAUSE);
  }
  fs.writeFileSync(STATE,JSON.stringify(state,null,0));
  console.log(`done: ${ok} archived, ${fail} failed`);
})();
