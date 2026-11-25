/* Barotico — monthly sync with the Manifesto Project (WZB Berlin / University of Göttingen).
   Needs the secret MANIFESTO_API_KEY (free account on manifesto-project.wzb.eu). Without it, the script stops quietly.
   What it writes: data/manifesto/<country>.json with, for each party's latest manifesto, the categories it stresses most
   (ranks only, no percentages) and, for each pair of parties, the categories they share in the same direction and in opposite
   directions. The manifesto texts themselves are never stored or republished (Manifesto Project terms); only these derived lists.
   Run: MANIFESTO_API_KEY=... node tools/manifesto_sync.js */
const fs=require("fs"),path=require("path"),vm=require("vm");
const KEY=process.env.MANIFESTO_API_KEY;
if(!KEY){console.log("MANIFESTO_API_KEY missing: nothing to do.");process.exit(0)}
const ROOT=path.join(__dirname,".."),OUT=path.join(ROOT,"data","manifesto");
const API="https://manifesto-project.wzb.eu/api/v1/";
const TOP=10,MAX_AGE_YEARS=10;
const CAT=JSON.parse(fs.readFileSync(path.join(__dirname,"manifesto_categories.json"),"utf8"));
const ALIAS={"Czechia":"Czech Republic","United States":"United States","South Korea":"South Korea","North Macedonia":"North Macedonia","DR Congo":"Democratic Republic of the Congo","Türkiye":"Turkey"};

async function api(endpoint,params){
  const u=new URL(API+endpoint);u.searchParams.set("api_key",KEY);for(const[k,v]of Object.entries(params||{}))u.searchParams.set(k,v);
  /* Current API: /api/v1/<endpoint>; older one (used by manifestoR before 2024): /tools/api_<endpoint>.json */
  const legacy=new URL(`https://manifesto-project.wzb.eu/tools/api_${endpoint}.json`);legacy.search=u.search;
  for(let i=0;i<3;i++){
    for(const url of [u,legacy]){const r=await fetch(url);if(r.ok)return r.json();if(r.status===401||r.status===403)throw new Error(`${endpoint}: API key refused (HTTP ${r.status})`)}
    await new Promise(s=>setTimeout(s,5000));
  }
  throw new Error(`${endpoint}: server unavailable`);
}
function countries(){
  const ctx={window:undefined};vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT,"countries","registry.js"),"utf8")+";this.B=BAROTICO;",ctx);
  return (ctx.B.planned||[]).map(([k,iso,cont,n])=>({key:k,iso,name:n.en}));
}
(async()=>{
  const v=await api("list_core_versions");
  const ids=(v.datasets||[]).map(d=>d.id).filter(id=>/^MPDS\d{4}[a-z]$/.test(id)).sort();
  const version=ids[ids.length-1];if(!version)throw new Error("no dataset version found");
  const core=await api("get_core",{key:version});
  const [head,...rows]=core,ix=Object.fromEntries(head.map((h,i)=>[h,i]));
  const codes=Object.keys(CAT).filter(c=>!c.startsWith("_")&&ix["per"+c]!=null);
  const cutoff=new Date().getFullYear()-MAX_AGE_YEARS;
  fs.mkdirSync(OUT,{recursive:true});
  const summary=[];
  for(const c of countries()){
    const mpName=ALIAS[c.name]||c.name;
    const mine=rows.filter(r=>r[ix.countryname]===mpName);
    if(!mine.length){summary.push(`${c.key}: not covered`);continue}
    const latest={};
    for(const r of mine){const p=r[ix.party],d=String(r[ix.date]);if(+d.slice(0,4)<cutoff)continue;if(!latest[p]||d>latest[p][ix.date]+"")latest[p]=r}
    const parties=Object.values(latest).map(r=>{
      const scored=codes.map(code=>[code,+r[ix["per"+code]]||0]).filter(([,s])=>s>0).sort((a,b)=>b[1]-a[1]);
      return {mp_party:r[ix.party],name:r[ix.partyname],abbrev:r[ix.partyabbrev]||"",date:String(r[ix.date]),top:scored.slice(0,TOP).map(([code])=>code)};
    }).filter(p=>p.top.length).sort((a,b)=>a.name.localeCompare(b.name));
    const pairs=[];
    for(let i=0;i<parties.length;i++)for(let j=i+1;j<parties.length;j++){
      const A=parties[i],B=parties[j],sb=new Set(B.top);
      const same=A.top.filter(x=>sb.has(x));
      const opp=A.top.filter(x=>CAT[x].pair&&sb.has(CAT[x].pair));
      pairs.push({a:A.mp_party,b:B.mp_party,same,opp});
    }
    const out={source:"Manifesto Project Dataset",version,updated:new Date().toISOString().slice(0,10),
      citation:`Manifesto Project (MRG/CMP/MARPOR), dataset ${version}, WZB Berlin / IfDem Göttingen, https://manifesto-project.wzb.eu`,
      rule:`For each party, its latest manifesto from the last ${MAX_AGE_YEARS} years; the ${TOP} categories it stresses most, ranked; shared = same category in both top lists; opposed = opposite categories on the same issue.`,
      parties,pairs};
    fs.writeFileSync(path.join(OUT,`${c.key}.json`),JSON.stringify(out,null,1)+"\n");
    summary.push(`${c.key}: ${parties.length} parties`);
  }
  fs.writeFileSync(path.join(OUT,"_summary.txt"),`${version}\n`+summary.join("\n")+"\n");
  console.log(version);console.log(summary.join("\n"));
})().catch(e=>{console.error(e.message);process.exit(1)});
