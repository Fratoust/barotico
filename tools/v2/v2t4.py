import asyncio
from playwright.async_api import async_playwright
B="http://localhost:8766"
PAGES=["/fr/","/fr/france/","/fr/france/parties/","/fr/france/vote/","/fr/france/media/","/fr/values-mirror/","/fr/#voter","/fr/#reprendre","/fr/#comparer","/fr/#medias","/fr/#apropos"]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch();bad=0
    for w in (390,768,1024,1366):
      for dark in (False,True):
        pg=await b.new_page(viewport={"width":w,"height":800},color_scheme="dark" if dark else "light")
        for u in PAGES:
          await pg.goto(B+u);await pg.wait_for_timeout(700)
          o=await pg.evaluate("document.documentElement.scrollWidth>innerWidth+1");await pg.mouse.wheel(0,1200);await pg.wait_for_timeout(400)
          r=await pg.evaluate("""(()=>{const top=document.querySelector('.top')||document.querySelector('header'),rib=document.querySelector('.v2-ribbon');if(!top)return {o:false,cover:false,meds:0,ext:false,notop:location.href};const tr=top.getBoundingClientRect(),rr=rib?rib.getBoundingClientRect():null;
          const cover=!!(rr&&rr.bottom>0&&rr.bottom>tr.top+1&&rr.top<tr.bottom);
          const meds=[...document.querySelectorAll('.v2page .ccard .mono')].filter(m=>m.getClientRects().length>1||m.offsetHeight>28).length;
          const ext=[...document.querySelectorAll('a[target=_blank]')].some(a=>/↗/.test(a.textContent)&&a.closest('.v2page,#exemple'));
          return {cover,meds,ext,topy:Math.round(tr.top),sy:scrollY}})()""");r["o"]=o
          if r.get("notop") or r["o"] or r["cover"] or r["meds"] or r["ext"]: bad+=1;print(w,dark,u,r)
        await pg.close()
    pg=await b.new_page();await pg.goto(B+"/fr/#reprendre");await pg.wait_for_timeout(800)
    t=await pg.evaluate("document.querySelector('#view').innerText");print("algo old:", "change ce que vous pensez" in t, "new:", "peut influencer vos opinions" in t)
    await pg.goto(B+"/fr/");await pg.wait_for_timeout(800)
    print(await pg.evaluate("document.querySelector('#exemple').innerText.slice(0,260)"))
    print("bad",bad);await b.close()
asyncio.run(main())
