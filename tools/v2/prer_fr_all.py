import glob,sys,prer2 as prer
R=prer.ROOT+"/"
ps=sorted(p.replace(R,"") for p in glob.glob(R+"fr/*/**/index.html",recursive=True) if "/watch/" not in p and not p.replace(R,"").split("/")[1] in ("france","why-vote","take-back-control","values-mirror","compare","media","about","legal"))
if len(sys.argv)>1: ps=[p for p in ps if p.split("/")[1] in sys.argv[1:]]
print(len(ps),flush=True)
prer.render(ps,True)
print("DONE",flush=True)
