import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch();pg=await b.new_page();errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)[:120]))
    for u in ["/fr/","/fr/france/","/fr/france/parties/","/fr/values-mirror/","/fr/spain/","/fr/germany/parties/","/fr/brazil/vote/","/fr/north-korea/","/fr/after-the-vote/","/fr/belgium/","/fr/russia/parties/","/en/","/en/france/","/es/","/fr/why-vote/"]:
      r=await pg.goto("http://127.0.0.2:8766"+u);await pg.wait_for_timeout(900)
      print(u,r.status,await pg.evaluate("[!!document.querySelector('.v2-ribbon'),!!document.querySelector('footer.v2foot'),!!document.querySelector('.v2wrap'),document.title.slice(0,50)]"))
    print("errors",errs);await b.close()
asyncio.run(main())
