# Outils V2 (pré-rendu et contrôles des pages en français)

Serveur local : `python3 -m http.server 8766 --bind 0.0.0.0` à la racine du dépôt.
Variable `BAROTICO_ROOT` = racine du dépôt (par défaut `/home/claude/barotico-v2`).

1. `python3 prer_fr_all.py [slug ...]` : pré-rend les pages pays en français (toutes, ou les pays donnés par leur slug d'URL, ex. `spain`).
   La France et les pages outils : `prer2.render([...], True)` sur leurs chemins.
2. `python3 static_all.py` : menu sans JavaScript, « Pays : <nom> », pied de page V2 et balises head, sur toutes les pages en français. Idempotent.
3. Contrôles :
   - `allc.py` : toutes les pages pays en français sur l'hôte 127.0.0.2 (structure V2 présente, aucune erreur, aucun « undefined », aucun débordement) ;
   - `v2t4.py` : 11 pages × 4 largeurs × clair/sombre ;
   - `links.py` : liens internes ;
   - `prod.py` : hôte de production simulé (pas de bandeau d'aperçu).
4. Mettre à jour `?v=` sur tous les fichiers HTML, puis pousser sur `preview-v2` (aperçu). Ne jamais pousser sur `main` sans le « publie » de François.
