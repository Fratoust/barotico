from playwright.sync_api import sync_playwright
import urllib.parse
B="http://localhost:8766"
PAGES=["/fr/","/fr/france/","/fr/france/government/","/fr/france/figures/","/fr/france/parties/","/fr/france/parties/rn/","/fr/france/vote/","/fr/france/media/","/fr/why-vote/","/fr/take-back-control/","/fr/values-mirror/","/fr/compare/","/fr/media/"]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path="/usr/bin/google-chrome")
    pg=b.new_page(viewport={"width":1280,"height":900}); errs=[]
    pg.on("pageerror",lambda e:errs.append(str(e)))
    internal=set();external=set()
    for u in PAGES:
        pg.goto(B+u,wait_until="networkidle"); pg.wait_for_timeout(900)
        hrefs=pg.evaluate("[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'))")
        for h in hrefs:
            if h.startswith('http') and not h.startswith(B): external.add(h)
            elif h.startswith('/') : internal.add(h.split('#')[0])
    bad=[]
    for h in sorted(internal):
        if not h.startswith('/fr/'): continue
        r=pg.goto(B+h,wait_until="networkidle"); pg.wait_for_timeout(500)
        st=r.status if r else None
        txt=pg.evaluate("(document.getElementById('view')||{innerText:''}).innerText.length")
        if st!=200 or txt<200: bad.append((h,st,txt))
    print("internal checked",len([h for h in internal if h.startswith('/fr/')]),"bad",bad)
    print("external count",len(external),"undefined",[h for h in external if 'undefined' in h])
    # specific destinations
    pg.goto(B+"/fr/france/",wait_until="networkidle"); pg.wait_for_timeout(800); pg.click('.v2crumb a >> nth=0'); pg.wait_for_timeout(1200); print("crumb ->",pg.url, pg.evaluate("!!document.getElementById('guide')"))
    pg.goto(B+"/fr/take-back-control/",wait_until="networkidle"); pg.wait_for_timeout(800); pg.click('.v2back a.v2ctx'); pg.wait_for_timeout(1500); print("algo ->",pg.url, pg.evaluate("document.getElementById('p-med')&&!document.getElementById('p-med').hidden"))
    pg.goto(B+"/fr/take-back-control/",wait_until="networkidle"); pg.wait_for_timeout(800); print("meta href",pg.evaluate("[...document.querySelectorAll('a')].filter(a=>/Meta, “Ending/.test(a.textContent)).map(a=>a.getAttribute('href'))"))
    print("errors",errs)
    # no-JS
    ctx=b.new_context(java_script_enabled=False,viewport={"width":390,"height":844}); q=ctx.new_page()
    q.goto(B+"/fr/france/"); print("nojs nav",q.evaluate("1") if False else q.inner_text('.v2-nojs')[:200]); q.screenshot(path="nojs_fr.png")
    q.goto(B+"/fr/values-mirror/"); print("nojs mirror h1",q.inner_text('h1')[:80], "| lim", 'Les limites du miroir' in q.content())
    ctx.close(); b.close()
