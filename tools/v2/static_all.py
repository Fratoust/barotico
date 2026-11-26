import re,glob,html
R=__import__("os").environ.get("BAROTICO_ROOT","/home/claude/barotico-v2")+"/"
pages_pilot=["fr/index.html","fr/why-vote/index.html","fr/take-back-control/index.html","fr/values-mirror/index.html","fr/compare/index.html","fr/media/index.html"]+sorted(p.replace(R,"") for p in glob.glob(R+"fr/france/**/index.html",recursive=True) if "/watch/" not in p)
pages=sorted(p.replace(R,'') for p in glob.glob(R+'fr/**/index.html',recursive=True) if '/watch/' not in p)
TOOLS=[("Pourquoi voter ?","/fr/why-vote/",""),("On vous consulte. Et après ?","/fr/after-the-vote/",""),("Sortir de ma bulle","/fr/take-back-control/",""),("Le miroir des valeurs","/fr/values-mirror/",""),("Comparer les pays","/fr/compare/","outil avancé"),("Médias du monde","/fr/media/","référence")]
links="".join(f'<a href="{u}">{h}{f" <small>· {t}</small>" if t else ""}</a>' for h,u,t in TOOLS)
DD=f'<noscript><a class="navlink" href="/fr/#pays">Choisir un pays</a></noscript><details class="v2tools-dd"><summary class="navlink">Outils et guides <span aria-hidden="true">▾</span></summary><div class="v2tools-p">{links}</div></details>'
SH=f'<details class="sheet-dd v2tools-sh"><summary class="navlink">Outils et guides</summary><div class="v2tools-p">{links}</div></details>'
NOJS='<noscript><nav class="v2-nojs" aria-label="Menu sans JavaScript"><a href="/fr/">Accueil</a> · <a href="/fr/#pays">Choisir un pays</a> · '+" · ".join(f'<a href="{u}">{h}</a>' for h,u,t in TOOLS)+' · <a href="/fr/about/">À propos</a></nav></noscript>'
RIB='<div class="v2-ribbon" id="v2rib" role="note">Version de travail V2 — non publiée, pour relecture uniquement. Le pilote porte sur l’accueil, le menu et la fiche France, en français.</div>'
T={"fr/index.html":("Barotico : comprendre la politique, pays par pays","Comprendre la politique d’un pays, comparer les partis à partir de leurs engagements et de leurs actes sourcés, et explorer comment un fil d’actualité choisit ce que vous voyez. Barotico ne recommande aucun vote."),
 "fr/why-vote/index.html":("Pourquoi voter ? Ce que change une voix, et l’abstention | Barotico","Des faits sourcés sur le poids de quelques voix et de l’abstention, des explications sur le vote blanc, et des questions de réflexion. Sans consigne de vote."),
 "fr/take-back-control/index.html":("Sortir de ma bulle : reprendre la main sur son fil d’actualité | Barotico","Une simulation de fil d’actualité, puis des explications sourcées sur les recommandations et des gestes pour remettre son fil à zéro. Rien n’est enregistré."),
 "fr/values-mirror/index.html":("Le miroir des valeurs : vers où penchent vos valeurs | Barotico","Choisissez jusqu’à 7 valeurs et voyez leur direction moyenne sur un axe gauche-droite simplifié. Un repère éditorial : aucun parti ne vous est attribué."),
 "fr/compare/index.html":("Comparer les pays : libertés, santé, salaires, élections | Barotico","Choisissez de 2 à 5 pays et les indicateurs à afficher : mêmes sources pour tous, avec l’année de chaque donnée."),
 "fr/media/index.html":("Médias du monde : répertoire des médias par pays | Barotico","Un répertoire de référence des principaux médias de chaque pays et de leurs propriétaires, sans classement."),
 "fr/france/index.html":("Comprendre la politique en France : institutions, gouvernement, chiffres | Barotico","Qui décide et qui gouverne en France, les chiffres clés, les partis, le vote et les médias, avec une source pour chaque information. Barotico ne recommande aucun vote."),
 "fr/france/government/index.html":("Qui gouverne en France ? Gouvernement, majorité, popularité | Barotico",None),
 "fr/france/figures/index.html":("Chiffres clés de la France : santé, école, libertés, salaires, argent public | Barotico",None),
 "fr/france/parties/index.html":("Comparer les partis en France : engagements, actes et sources | Barotico","Les 8 partis retenus selon une règle publique (groupe à l’Assemblée ou 3 % aux européennes de 2024) : ce que chacun dit, ce qu’il a fait, avec les sources."),
 "fr/france/vote/index.html":("Comprendre le vote en France : s’inscrire, voter, prochaines élections | Barotico","Comment s’inscrire et voter en France, la prochaine élection nationale avec sa source, le mode de scrutin et le vote blanc."),
 "fr/france/media/index.html":("Comprendre les médias en France : qui possède quoi | Barotico","Les principaux médias en France, à qui ils appartiennent, et comment s’informer de façon fiable, avec les sources.")}
def setattr_(s,pat,val):
    return re.sub(pat,lambda m:m.group(1)+html.escape(val,quote=True)+m.group(2),s,count=1)
n=0
for p in pages:
    f=R+p;s=open(f,encoding="utf8").read();o=s
    cm=re.search(r'<nav class="v2crumb"[^>]*>.*?› <a[^>]*>Pays</a> › <span>([^<]+)</span>',s)
    fr_country=bool(cm)
    # desktop nav
    i=s.find('<nav class="nav"');j=s.find('</nav>',i)
    nav=s[i:j]
    if 'v2tools-dd' not in nav:
        for r in ["comparer","voter","reprendre","medias"]:
            nav=re.sub(r'<a class="navlink" (href="[^"]*" data-r="%s")'%r,r'<a class="navlink" hidden \1',nav)
        k=nav.find('<a class="navlink" hidden href="/fr/compare/"')
        nav=nav[:k]+DD+nav[k:]
        if fr_country: nav=nav.replace('<span data-t="nav_countries">Pays</span>','<span data-t="nav_countries">Pays : '+cm.group(1)+'</span>',1)
        s=s[:i]+nav+s[j:]
    # sheet nav
    i=s.find('<nav class="sheet-nav"');j=s.find('</nav>',i);sh=s[i:j]
    if 'v2tools-sh' not in sh:
        for r in ["comparer","voter","reprendre","medias"]:
            sh=re.sub(r'<a class="navlink" (href="[^"]*" data-r="%s")'%r,r'<a class="navlink" hidden \1',sh)
        k=sh.find('<a class="navlink" hidden href="/fr/compare/"')
        sh=sh[:k]+SH+sh[k:]
        s=s[:i]+sh+s[j:]
    if 'class="v2-nojs"' not in s: s=s.replace('</header>','</header>\n'+NOJS,1)
    if p in T:
        t,d=T[p]
        s=re.sub(r'<title>[^<]*</title>','<title>'+html.escape(t,quote=False)+'</title>',s,count=1)
        for pat in [r'(<meta property="og:title" content=")[^"]*(">)',r'(<meta name="twitter:title" content=")[^"]*(">)']: s=setattr_(s,pat,t)
        if d:
            for pat in [r'(<meta name="description" content=")[^"]*(">)',r'(<meta property="og:description" content=")[^"]*(">)',r'(<meta name="twitter:description" content=")[^"]*(">)']: s=setattr_(s,pat,d)
    if p=="fr/values-mirror/index.html":
        s=s.replace('<link rel="canonical" href="https://barotico.com/fr/">','<link rel="canonical" href="https://barotico.com/fr/values-mirror/">')
        s=re.sub(r'(<meta property="og:url" content=")[^"]*(">)',r'\1https://barotico.com/fr/values-mirror/\2',s,count=1)
        for L in ["en","fr","es"]: s=s.replace(f'hreflang="{L}" href="https://barotico.com/{L}/"',f'hreflang="{L}" href="https://barotico.com/{L}/values-mirror/"')
        s=s.replace('hreflang="x-default" href="https://barotico.com/en/"','hreflang="x-default" href="https://barotico.com/en/values-mirror/"')
    if s!=o: open(f,"w",encoding="utf8").write(s);n+=1
FOOT=re.search(r'<footer class="wrap v2foot"[^>]*>.*?</footer>',open(R+"fr/index.html",encoding="utf8").read(),re.S).group(0)
nf=0
for p in pages:
    f=R+p;s=open(f,encoding="utf8").read()
    if 'v2foot' in s: continue
    s2,k=re.subn(r'<footer class="wrap">.*?</footer>',lambda m:FOOT,s,count=1,flags=re.S)
    if k: open(f,"w",encoding="utf8").write(s2);nf+=1
print("pages updated",n,"of",len(pages),"footers",nf)
