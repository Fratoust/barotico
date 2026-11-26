import asyncio,json,sys
from playwright.async_api import async_playwright
B="http://127.0.0.2:8766"
K="argentina australia austria azerbaijan belarus belgium benin brazil china colombia czechia dr-congo egypt france germany greece hungary indonesia ireland israel italy morocco netherlands new-zealand north-korea poland portugal romania russia senegal serbia singapore south-africa south-korea spain sweden switzerland thailand tunisia turkey ukraine united-kingdom united-states venezuela vietnam".split()
SUB=["","government/","figures/","parties/","vote/","media/"]
if len(sys.argv)>1: K=[k for k in K if k in sys.argv[1:]]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch();pg=await b.new_page(viewport={"width":1366,"height":900});errs=[];bad=[]
    pg.on("pageerror",lambda e:errs.append((pg.url,str(e)[:140])))
    for k in K:
      for s in SUB:
        u=f"{B}/fr/{k}/{s}"
        r=await pg.goto(u);await pg.wait_for_timeout(350)
        if r.status!=200: bad.append((u,r.status));continue
        x=await pg.evaluate("""(()=>{const v=document.querySelector('#view');const t=v?v.innerText:'';return {v2:!!document.querySelector('.v2wrap'),und:/undefined|\\[object|NaN/.test(t),ov:document.documentElement.scrollWidth>innerWidth+1,nav:document.querySelectorAll('.v2-btn').length,act:(document.querySelector('.panel:not([hidden])')||{}).id||''}})()""")
        if not x["v2"] or x["und"] or x["ov"]: bad.append((u,x))
      print(k,flush=True,end=" ")
    print("\nBAD",len(bad));[print(z) for z in bad[:40]]
    print("ERR",len(errs));[print(z) for z in errs[:20]]
    await b.close()
asyncio.run(main())
