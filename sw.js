/* Barotico service worker: makes the site installable and readable offline.
   Network first, so updates always arrive; the cache is only a fallback. */
const CACHE="barotico-v2";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(["/","/en/","/fr/","/es/"]).catch(()=>{})))});
self.addEventListener("activate",e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{if(res.ok&&res.type==="basic"){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res})
    .catch(()=>caches.match(r).then(m=>m||(r.mode==="navigate"?caches.match("/"):undefined))));
});
/* Push notifications (v169). The push carries no data: we fetch the public list of recent events and show
   those that match the countries and topics followed on this device (saved by the page in Cache Storage). */
const PT={
  fiche:{en:(n)=>[`${n}: profile updated`,`Barotico has updated the ${n} profile.`],fr:(n)=>[`${n} : fiche mise à jour`,`Barotico a mis à jour la fiche ${n}.`],es:(n)=>[`${n}: ficha actualizada`,`Barotico ha actualizado la ficha de ${n}.`]},
  gov:{en:(n,e)=>[`${n}: change of government`,e.cab?e.cab.en:""],fr:(n,e)=>[`${n} : changement de gouvernement`,e.cab?e.cab.fr:""],es:(n,e)=>[`${n}: cambio de gobierno`,e.cab?e.cab.es:""]},
  date:{en:(n,e)=>[`${n}: election date set`,`${e.label?e.label.en+" · ":""}${e.date}`],fr:(n,e)=>[`${n} : date d'élection fixée`,`${e.label?e.label.fr+" · ":""}${e.date}`],es:(n,e)=>[`${n}: fecha electoral fijada`,`${e.label?e.label.es+" · ":""}${e.date}`]},
  remind:{en:(n,e)=>[`${n}: ${e.days===0?"election today":e.days===1?"election tomorrow":"election in "+e.days+" days"}`,e.label?e.label.en:""],fr:(n,e)=>[`${n} : ${e.days===0?"élection aujourd'hui":e.days===1?"élection demain":"élection dans "+e.days+" jours"}`,e.label?e.label.fr:""],es:(n,e)=>[`${n}: ${e.days===0?"elecciones hoy":e.days===1?"elecciones mañana":"elecciones en "+e.days+" días"}`,e.label?e.label.es:""]},
  test:{en:(n)=>["Barotico: notifications are on",n?`You will be notified about ${n}.`:""],fr:(n)=>["Barotico : notifications activées",n?`Vous serez alerté pour ${n}.`:""],es:(n)=>["Barotico: notificaciones activadas",n?`Recibirás avisos sobre ${n}.`:""]}
};
async function pushState(){try{const c=await caches.open("barotico-state");const r=await c.match("/state");return r?await r.json():{}}catch(e){return {}}}
async function saveSeen(t){try{const c=await caches.open("barotico-state");await c.put("/seen",new Response(String(t)))}catch(e){}}
async function lastSeen(){try{const c=await caches.open("barotico-state");const r=await c.match("/seen");return r?+(await r.text()):0}catch(e){return 0}}
self.addEventListener("push",e=>e.waitUntil((async()=>{
  const st=await pushState(),L=["en","fr","es"].includes(st.lang)?st.lang:"en",f=st.follows||{};
  let evs=[];try{if(st.api)evs=await (await fetch(st.api+"/recent",{cache:"no-store"})).json()}catch(x){}
  const seen=await lastSeen();
  const mine=evs.filter(v=>v.t>seen&&(v.kind==="test"||(f[v.k]||[]).includes(v.topic))).slice(0,3);
  if(evs.length)await saveSeen(Math.max(seen,...evs.map(v=>v.t||0)));
  if(!mine.length){await self.registration.showNotification("Barotico",{body:{en:"New information on the countries you follow.",fr:"Du nouveau sur les pays que vous suivez.",es:"Novedades sobre los países que sigues."}[L],icon:"/icons/icon-192.png",data:{url:"/"+L+"/"}});return}
  for(const v of mine){const n=v.name?(v.name[L]||v.name.en):"",fn=(PT[v.kind]||PT.fiche)[L],[title,body]=fn(n,v);
    await self.registration.showNotification(title,{body,icon:"/icons/icon-192.png",badge:"/icons/icon-192.png",tag:v.id||v.k+"-"+v.kind,data:{url:v.slug?`/${L}/${v.slug}/`:`/${L}/`}})}
})()));
self.addEventListener("notificationclick",e=>{e.notification.close();const u=(e.notification.data&&e.notification.data.url)||"/";
  e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(ws=>{for(const w of ws){if("focus" in w){w.navigate(u);return w.focus()}}return clients.openWindow(u)}))});
