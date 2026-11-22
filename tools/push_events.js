/* Barotico: detect notification events between two versions of the site data.
   Usage: node tools/push_events.js <old-dir> <new-dir> <out-dir>
   Each dir holds countries/registry.js, countries/meta.js and power.js (old ones may be missing).
   Writes <out>/events.json (fiche updated, government changed, election date set or changed) and <out>/elections.json. */
const fs=require("fs"),path=require("path"),vm=require("vm");
const [oldDir,newDir,out]=process.argv.slice(2);
const slugify=x=>String(x).normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
function load(dir){
  const ctx={window:{},console};vm.createContext(ctx);
  const run=f=>{const p=path.join(dir,f);if(fs.existsSync(p))try{vm.runInContext(fs.readFileSync(p,"utf8"),ctx)}catch(e){console.error("skip",f,e.message)}};
  run("countries/registry.js");run("countries/meta.js");
  vm.runInContext("var L3=L3||function(a,b,c){return{en:a,fr:b,es:c}};",ctx);
  const pw=path.join(dir,"power.js");if(fs.existsSync(pw))try{vm.runInContext(fs.readFileSync(pw,"utf8")+";this.__P=POWER;",ctx)}catch(e){console.error("power",e.message)}
  const B=ctx.BAROTICO||{meta:{}},P=ctx.__P||{},res={};
  for(const [k,m] of Object.entries(B.meta||{})){
    const name=m.name&&(m.name.en?m.name:{en:m.name,fr:m.name,es:m.name});
    res[k]={updated:m.updated||null,elec:m.elec&&m.elec.date&&!m.elec.none?{date:m.elec.date,approx:!!m.elec.approx,label:m.elec.label||null}:null,
      cab:P[k]&&P[k].cabinet&&P[k].cabinet.name?P[k].cabinet.name:null,name,slug:slugify(String((name&&name.en)||k).replace(/\s*\(.*?\)/g,""))};
  }
  // France, Spain and Belgium live in main.js (const C={...}), not in meta.js
  const mj=path.join(dir,"main.js");
  if(fs.existsSync(mj)){const s=fs.readFileSync(mj,"utf8"),c=s.indexOf("const C={");
    const keys=["france","espagne","belgique"];
    keys.forEach((k,i)=>{if(res[k]||c<0)return;const a=s.indexOf("\n "+k+":{",c);if(a<0)return;const nx=keys[i+1]?s.indexOf("\n "+keys[i+1]+":{",a+5):-1;const blk=s.slice(a,nx>0?nx:a+60000);
      const up=(blk.match(/updated:"([\d-]+)"/)||[])[1]||null,el=blk.match(/elec:\{date:"([\d-]+)"(,approx:true)?,label:L3\("((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)","((?:[^"\\]|\\.)*)"\)/);
      const pl=(B.planned||[]).find(x=>x[0]===k),name=pl?pl[3]:{en:k,fr:k,es:k};
      res[k]={updated:up,elec:el?{date:el[1],approx:!!el[2],label:{en:el[3],fr:el[4],es:el[5]}}:null,cab:P[k]&&P[k].cabinet&&P[k].cabinet.name?P[k].cabinet.name:null,name,slug:slugify(String(name.en).replace(/\s*\(.*?\)/g,""))};
    });
  }
  return res;
}
const A=fs.existsSync(oldDir)?load(oldDir):{},Bn=load(newDir),ev=[],elections={};
for(const [k,n] of Object.entries(Bn)){
  const o=A[k];const base={k,slug:n.slug,name:n.name};
  if(n.elec&&!n.elec.approx)elections[k]={date:n.elec.date,slug:n.slug,name:n.name,label:n.elec.label};
  if(!o)continue;
  if(n.cab&&o.cab&&n.cab.en!==o.cab.en)ev.push({...base,topic:"gov",kind:"gov",cab:n.cab});
  if(n.elec&&!n.elec.approx&&(!o.elec||o.elec.approx||o.elec.date!==n.elec.date))ev.push({...base,topic:"elec",kind:"date",date:n.elec.date,label:n.elec.label});
  if(n.updated&&o.updated&&n.updated>o.updated)ev.push({...base,topic:"fiche",kind:"fiche",updated:n.updated});
}
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,"events.json"),JSON.stringify(ev));
fs.writeFileSync(path.join(out,"elections.json"),JSON.stringify(elections));
console.log(ev.length+" event(s):",ev.map(e=>e.k+"/"+e.kind).join(", ")||"none","·",Object.keys(elections).length,"election date(s)");
