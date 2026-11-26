import sys,re,os
from playwright.sync_api import sync_playwright
ROOT=__import__("os").environ.get("BAROTICO_ROOT","/home/claude/barotico-v2")
def pages():
    out=[]
    for lang in ["en","fr","es"]:
        for slug in ["france","united-states"]:
            base=f"{lang}/{slug}"
            for dp,dn,fn in os.walk(os.path.join(ROOT,base)):
                if "index.html" in fn: out.append(os.path.relpath(os.path.join(dp,"index.html"),ROOT))
    return sorted(out)
def render(paths,write):
    with sync_playwright() as p:
        b=p.chromium.launch(**({"executable_path":"/usr/bin/google-chrome"} if os.path.exists("/usr/bin/google-chrome") else {}))
        for rel in paths:
            url="http://localhost:8766/"+rel[:-len("index.html")]
            pg=b.new_page(viewport={"width":1200,"height":900}); errs=[]
            pg.on("pageerror",lambda e:errs.append(str(e)))
            pg.goto(url,wait_until="networkidle"); pg.wait_for_timeout(900)
            inner=pg.evaluate(r"""()=>{const v=document.getElementById('view');
              v.querySelectorAll('.panel[hidden]').forEach(p=>p.innerHTML='');v.querySelectorAll('.follow').forEach(x=>x.remove());
              const o=v.querySelector('.pcard.open');
              if(o&&/\/parties\/[^/]+\/$/.test(location.pathname)){v.querySelectorAll('.pgrid .pcard').forEach(c=>{if(c!==o)c.remove()});const h=v.querySelector('#p-par .ph2');if(h)h.textContent=o.querySelector('h3').textContent}
              return v.innerHTML}""")
            pg.close()
            f=os.path.join(ROOT,rel); h=open(f,encoding="utf8").read()
            m=re.search(r'(<main class="wrap" id="view">)(.*?)(</main>)',h,re.S)
            old=m.group(2)
            print(rel,len(old),len(inner),"ERR" if errs else "",errs[:1])
            if write:
                h=h[:m.start(2)]+inner+h[m.end(2):]
                open(f,"w",encoding="utf8").write(h)
            else:
                open("/tmp/old.html","w").write(old); open("/tmp/new.html","w").write(inner)
        b.close()
if __name__=="__main__":
    if sys.argv[1]=="test": render([sys.argv[2]],False)
    else: render(pages(),True)
