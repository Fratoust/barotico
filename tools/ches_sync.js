// Chapel Hill Expert Survey (CHES) sync: free, openly downloadable expert estimates of party positions (Europe, and Canada since 2024).
// Finds the latest CHES Europe CSV linked from chesdata.eu (or uses CHES_CSV_URL), and writes data/ches/<ISO2>.json:
// for each party, its CHES id, abbreviation, name and every numeric position/salience column (0-10 scales, see the CHES codebook).
// These are expert evaluations, not measures taken from manifestos: Barotico must always present them as such, with the citation.
const fs=require("fs"),path=require("path");
const PAGES=["https://www.chesdata.eu/2024-chapel-hill-expert-survey","https://www.chesdata.eu/ches-europe","https://www.chesdata.eu/our-surveys"];
async function get(u){const r=await fetch(u,{redirect:"follow",headers:{"user-agent":"barotico-bot (contact@barotico.com)"}});if(!r.ok)throw new Error(u+" "+r.status);return r}
async function findCsv(){
  if(process.env.CHES_CSV_URL)return process.env.CHES_CSV_URL;
  for(const p of PAGES){try{const h=await (await get(p)).text();
    const links=[...h.matchAll(/href="([^"]+?\.csv[^"]*)"/gi)].map(m=>new URL(m[1].replace(/&amp;/g,"&"),p).href);
    const best=links.filter(l=>/2024/.test(l)&&!/trend|candidate|expert[-_]?level|ca[_-]?20|latin|israel|canada/i.test(l))[0]||links.filter(l=>/2024/.test(l))[0];
    if(best)return best}catch(e){console.log("skip",p,e.message)}}
  throw new Error("No CHES CSV link found: set CHES_CSV_URL")}
function parseCsv(t){const rows=[];let row=[],f="",q=false;for(let i=0;i<t.length;i++){const c=t[i];
  if(q){if(c=='"'){if(t[i+1]=='"'){f+='"';i++}else q=false}else f+=c}
  else if(c=='"')q=true;else if(c==","){row.push(f);f=""}else if(c=="\n"||c=="\r"){if(c=="\r"&&t[i+1]=="\n")i++;row.push(f);rows.push(row);row=[];f=""}else f+=c}
  if(f||row.length){row.push(f);rows.push(row)}return rows.filter(r=>r.length>1)}
// CHES numeric country codes -> ISO 3166-1 alpha-2 (to check against the CHES codebook after the first run; the raw code is kept as ches_country).
const CC={1:"BE",2:"DK",3:"DE",4:"GR",5:"ES",6:"FR",7:"IE",8:"IT",10:"NL",11:"GB",12:"PT",13:"AT",14:"FI",16:"SE",20:"BG",21:"CZ",22:"EE",23:"HU",24:"LV",25:"LT",26:"PL",27:"RO",28:"SK",29:"SI",31:"HR",34:"TR",35:"NO",36:"CH",37:"MT",38:"LU",39:"CY",40:"IS",41:"AL",42:"BA",43:"ME",44:"MK",45:"RS",46:"XK",47:"MD",48:"UA",49:"GE"};
(async()=>{
  const url=await findCsv();console.log("CSV",url);
  const rows=parseCsv(await (await get(url)).text()),H=rows[0].map(x=>x.trim());
  const ix=n=>H.indexOf(n),iC=ix("country"),iP=ix("party_id"),iA=ix("party"),iN=["party_name","party_name_english","partyname"].map(ix).find(i=>i>=0);
  if(iC<0||iP<0)throw new Error("Unexpected columns: "+H.slice(0,12).join(","));
  const num=H.map((h,i)=>i).filter(i=>![iC,iP,iA,iN].includes(i)&&rows.slice(1).some(r=>r[i]!==""&&!isNaN(+r[i])));
  const out={};
  for(const r of rows.slice(1)){const cc=CC[+r[iC]]||String(r[iC]).toUpperCase();const p={ches_country:+r[iC],id:+r[iP],abbr:iA>=0?r[iA]:"",name:iN>=0?r[iN]:""};
    for(const i of num)if(r[i]!==""&&!isNaN(+r[i]))p[H[i]]=+(+r[i]).toFixed(2);
    (out[cc]=out[cc]||[]).push(p)}
  const dir=path.join(__dirname,"..","data","ches");fs.mkdirSync(dir,{recursive:true});
  const meta={source:"Chapel Hill Expert Survey (CHES), Europe",url,retrieved:new Date().toISOString().slice(0,10),
    citation:"Rovny, Polk, Bakker, Hooghe, Jolly, Marks, Steenbergen, Vachudova (2025). The 2024 Chapel Hill Expert Survey on Political Party Positioning in Europe. Electoral Studies. https://doi.org/10.1016/j.electstud.2025.102981",
    note:"Expert estimates of party positions, not measures taken from party manifestos."};
  for(const [cc,ps] of Object.entries(out))fs.writeFileSync(path.join(dir,cc+".json"),JSON.stringify({meta,parties:ps})+"\n");
  fs.writeFileSync(path.join(dir,"index.json"),JSON.stringify({meta,countries:Object.keys(out).sort(),columns:num.map(i=>H[i])})+"\n");
  console.log("countries",Object.keys(out).length,"columns",num.length);
})().catch(e=>{console.error(e.message);process.exit(1)});
