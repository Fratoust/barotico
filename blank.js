// Blank vote explainer, per country. France = pilot (14 Nov 2026).
// Neutral: explains rules, effects and the debate; never recommends voting blank or not.
var BLANK = {};
(function(){
var U={
 law2014:"https://questions.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE1516.pdf",
 rap2023:"https://www.assemblee-nationale.fr/dyn/16/rapports/cion_lois/l16b1291_rapport-fond.pdf",
 ppl1251:"https://www.assemblee-nationale.fr/dyn/16/dossiers/conferer_reconnaissance_vote_blanc",
 ps2017:"https://www.publicsenat.fr/article/politique/un-nombre-de-bulletins-blancs-et-nuls-sans-precedent-pour-une-presidentielle-60195",
 ps2022:"https://www.publicsenat.fr/actualites/politique/presidentielle-quel-serait-le-score-du-second-tour-en-prenant-en-compte-les-votes",
 psWhy:"https://www.publicsenat.fr/actualites/non-classe/vote-blanc-vote-gris-et-deuxieme-bulletin-face-au-choix-macron-le-pen-60132",
 novlaw:"https://www.vie-publique.fr/fiches/23931-vote-blanc-vote-nul-quelles-differences",
 co258:"https://leyes.co/constitucion/258.htm",
 pe184:"https://peru.justia.com/federales/constitucion-politica-del-peru-de-1993/titulo-iv/capitulo-xiii",
 esPub:"https://maldita.es/malditateexplica/20230723/escribir-papeleta-nombre-voto-nulo/",
 esJec:"https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672",
 inNota:"https://www.eci.gov.in/EBooks/Leap_of_faith_Second_Edition/files/basic-html/page126.html",
 anDep:"https://questions.assemblee-nationale.fr/contenu/telechargement/625543/file/Fiche%203%20-%20Election%20des%20d%C3%A9put%C3%A9s.pdf"
};
BLANK.france={
 sum:L3("Blank vote: what it says, what it changes","Vote blanc : ce qu'il dit, ce qu'il change","Voto en blanco: lo que dice, lo que cambia"),
 lead:L3("You go to the polling station, but you choose none of the candidates. Some see it as a protest, others as a refusal of the choice on offer, others as a way to vote without deciding. Here is what it means in practice in France.",
   "On se déplace, mais on ne choisit aucun candidat. Certains y voient une protestation, d'autres un refus de l'offre, d'autres une façon de voter sans trancher. Voici ce que cela veut dire concrètement en France.",
   "Uno acude a votar, pero no elige a ningún candidato. Algunos lo ven como una protesta, otros como un rechazo de la oferta, otros como una forma de votar sin decidir. Esto es lo que significa en la práctica en Francia."),
 what:[
  L3("Blank vote: an empty envelope, or a blank sheet of paper in the envelope. No blank ballot is provided at the polling station.","Vote blanc : une enveloppe vide, ou une feuille blanche glissée dans l'enveloppe. Aucun bulletin blanc n'est fourni au bureau de vote.","Voto en blanco: un sobre vacío, o una hoja en blanco dentro del sobre. En el colegio electoral no se facilita ninguna papeleta en blanco."),
  L3("Spoilt vote: a ballot that is annotated, torn, or not valid.","Vote nul : un bulletin annoté, déchiré ou non conforme.","Voto nulo: una papeleta anotada, rota o no válida."),
  L3("Abstention: not voting at all.","Abstention : ne pas voter du tout.","Abstención: no votar."),
  L3("What the three have in common: none of them counts for a candidate.","Point commun aux trois : aucun ne compte pour un candidat.","Lo que tienen en común: ninguno cuenta para un candidato."),
  [L3("Careful: a word, a crossing-out, a drawing or a sign on the paper, or a torn ballot, makes it spoilt, not blank. To vote blank, use an empty envelope or a sheet with nothing written on it.","Attention : un mot, une rature, un dessin ou un signe sur le papier, ou un bulletin déchiré, le rendent nul, pas blanc. Pour voter blanc : une enveloppe vide, ou une feuille sans aucune inscription.","Atención: una palabra, un tachón, un dibujo o una señal en el papel, o una papeleta rota, lo convierten en nulo, no en blanco. Para votar en blanco: un sobre vacío, o una hoja sin nada escrito."),U.novlaw]
 ],
 count:[
  [L3("Since the law of 21 February 2014 (in force since 1 April 2014), blank votes are counted separately from spoilt votes and published with the results. The presidential election has applied the same rule since 2017.","Depuis la loi du 21 février 2014 (en vigueur au 1er avril 2014), les bulletins blancs sont comptés à part des nuls et publiés avec les résultats. La présidentielle applique la même règle depuis 2017.","Desde la ley del 21 de febrero de 2014 (en vigor desde el 1 de abril de 2014), los votos en blanco se cuentan aparte de los nulos y se publican con los resultados. Las presidenciales aplican la misma regla desde 2017."),U.law2014],
  [L3("But they stay outside the “votes cast” (suffrages exprimés): percentages, majorities and the 5% threshold for campaign reimbursement are all calculated without them.","Mais ils restent hors des « suffrages exprimés » : les pourcentages, la majorité et le seuil de 5 % pour le remboursement des campagnes se calculent sans eux.","Pero quedan fuera de los «votos emitidos» (suffrages exprimés): los porcentajes, la mayoría y el umbral del 5 % para el reembolso de campaña se calculan sin ellos."),U.rap2023],
  [L3("The President is elected “by an absolute majority of the votes cast” (Constitution, art. 7). Counting blank votes as votes cast could leave the second round with no winner: that would require a constitutional amendment.","Le président est élu « à la majorité absolue des suffrages exprimés » (Constitution, art. 7). Compter les blancs dans les exprimés pourrait laisser le second tour sans vainqueur : il faudrait réviser la Constitution.","El presidente es elegido «por mayoría absoluta de los votos emitidos» (Constitución, art. 7). Contar los votos en blanco como emitidos podría dejar la segunda vuelta sin ganador: haría falta reformar la Constitución."),U.rap2023],
  [L3("In parliamentary elections, two thresholds are calculated on registered voters: a quarter of them to win in the first round, 12.5% to stay in the second. On those thresholds, a blank vote weighs the same as an abstention.","Aux législatives, deux seuils se calculent sur les inscrits : un quart pour être élu au premier tour, 12,5 % pour se maintenir au second. Sur ces seuils, un vote blanc pèse comme une abstention.","En las legislativas, dos umbrales se calculan sobre los inscritos: una cuarta parte para ser elegido en la primera vuelta, el 12,5 % para mantenerse en la segunda. Para esos umbrales, un voto en blanco pesa lo mismo que una abstención."),U.anDep]
 ],
 nums:[
  [8.5,L3("of voters cast a blank ballot in the 2017 presidential run-off: about 3 million, a record under the Fifth Republic.","des votants ont voté blanc au second tour de la présidentielle 2017 : environ 3 millions, un record sous la Ve République.","de los votantes votaron en blanco en la segunda vuelta de las presidenciales de 2017: unos 3 millones, un récord en la Quinta República."),U.ps2017],
  [6.4,L3("in the 2022 run-off: 2.2 million blank ballots.","au second tour de 2022 : 2,2 millions de bulletins blancs.","en la segunda vuelta de 2022: 2,2 millones de votos en blanco."),U.rap2023],
  [1.5,L3("in the first round of 2022. Blank votes rise when the choice narrows to two names.","au premier tour de 2022. Le blanc monte quand le choix se réduit à deux noms.","en la primera vuelta de 2022. El voto en blanco sube cuando la elección se reduce a dos nombres."),U.rap2023],
  [86,L3("of French people supported counting blank votes as votes cast (Ifop, 2017, cited by the National Assembly report).","des Français étaient favorables à compter le blanc dans les suffrages exprimés (Ifop, 2017, cité par le rapport de l'Assemblée).","de los franceses apoyaban contar el voto en blanco como voto emitido (Ifop, 2017, citado por el informe de la Asamblea)."),U.rap2023]
 ],
 impact:[
  [L3("An example: in the 2022 run-off, Emmanuel Macron won 58.55% of votes cast and Marine Le Pen 41.45%. Had the 2.2 million blank ballots been counted, it would have been 54.8% and 38.8%. The winner does not change; the percentage does.","Un exemple : au second tour 2022, Emmanuel Macron obtient 58,55 % des suffrages exprimés et Marine Le Pen 41,45 %. Si les 2,2 millions de bulletins blancs avaient été comptés, cela aurait donné 54,8 % et 38,8 %. Le vainqueur ne change pas ; le pourcentage, oui.","Un ejemplo: en la segunda vuelta de 2022, Emmanuel Macron obtuvo el 58,55 % de los votos emitidos y Marine Le Pen el 41,45 %. Si se hubieran contado los 2,2 millones de votos en blanco, habría sido un 54,8 % y un 38,8 %. El ganador no cambia; el porcentaje, sí."),U.rap2023],
  [L3("In 2012, François Hollande would have fallen to 48.6%, below half, with blank votes counted (an argument raised in the 2023 committee debate).","En 2012, François Hollande serait tombé à 48,6 %, sous la moitié, avec les blancs comptés (argument avancé lors du débat en commission en 2023).","En 2012, François Hollande habría bajado al 48,6 %, por debajo de la mitad, contando los votos en blanco (argumento planteado en el debate en comisión de 2023)."),U.rap2023],
  [L3("In a run-off, the gap between A and B is made only of votes cast for A or B. A blank ballot adds to neither: it leaves the decision to those who chose. The closer the race, the more each vote cast weighs on the outcome.","Dans un duel, l'écart entre A et B se fait uniquement avec les voix données à A ou à B. Un bulletin blanc ne s'ajoute à aucun des deux : il laisse la décision à ceux qui ont choisi. Plus le scrutin est serré, plus chaque voix exprimée pèse sur l'issue.","En una segunda vuelta, la diferencia entre A y B se hace solo con los votos dados a A o a B. Un voto en blanco no se suma a ninguno: deja la decisión a quienes eligieron. Cuanto más reñida la elección, más pesa cada voto emitido en el resultado."),null]
 ],
 why:[
  L3("Rejecting both finalists, even while fearing one of them.","Rejeter les deux finalistes, tout en craignant l'un d'eux.","Rechazar a los dos finalistas, aun temiendo a uno de ellos."),
  L3("Refusing the “useful vote” after having made it before.","Refuser le « vote utile » après l'avoir déjà pratiqué.","Negarse al «voto útil» después de haberlo practicado."),
  L3("Preferring blank to abstention, so as not to look indifferent.","Préférer le blanc à l'abstention, pour ne pas paraître indifférent.","Preferir el voto en blanco a la abstención, para no parecer indiferente."),
  L3("A narrower choice in the second round, says political sociologist Jérémie Moualek: blank votes rise at every run-off.","Une offre réduite au second tour, selon le sociologue Jérémie Moualek : le blanc progresse à chaque second tour.","Una oferta reducida en la segunda vuelta, según el sociólogo Jérémie Moualek: el voto en blanco sube en cada segunda vuelta.")
 ],
 whySrc:U.psWhy,
 pro:[
  L3("Tell a refusal of the candidates apart from indifference, and bring voters back to the polls (arguments of the LIOT group's 2023 bill).","Distinguer le refus de l'offre de l'indifférence, et ramener des électeurs aux urnes (arguments de la proposition de loi du groupe LIOT, 2023).","Distinguir el rechazo de la oferta de la indiferencia, y devolver votantes a las urnas (argumentos de la proposición de ley del grupo LIOT, 2023)."),
  L3("Give an effect to a disagreement that the 2014 law publishes but does not count; its supporters say that law changed little.","Donner un effet à un désaccord que la loi de 2014 publie sans le compter ; ses partisans jugent que cette loi a peu changé les choses.","Dar efecto a un desacuerdo que la ley de 2014 publica sin contarlo; sus partidarios consideran que esa ley cambió poco.")
 ],
 con:[
  L3("No absolute majority in the presidential run-off (art. 7); if blank votes passed 50%, elections would have to be rerun, leaving seats empty (arguments of Renaissance and the RN in committee).","Pas de majorité absolue au second tour de la présidentielle (art. 7) ; si les blancs dépassaient 50 %, il faudrait refaire l'élection et laisser des sièges vacants (arguments de Renaissance et du RN en commission).","Sin mayoría absoluta en la segunda vuelta presidencial (art. 7); si los votos en blanco superaran el 50 %, habría que repetir la elección y dejar escaños vacantes (argumentos de Renaissance y del RN en comisión)."),
  L3("Thresholds such as 5% become harder to reach, and seat calculations under proportional representation more complex (points raised in committee, citing the Constitutional Council).","Des seuils comme celui de 5 % deviennent plus difficiles à atteindre, et le calcul des sièges à la proportionnelle plus complexe (points soulevés en commission, citant le Conseil constitutionnel).","Umbrales como el del 5 % se vuelven más difíciles de alcanzar, y el cálculo de escaños en la proporcional más complejo (puntos planteados en comisión, citando al Consejo Constitucional).")
 ],
 status:[L3("Where it stands: the blank-vote article of the LIOT bill was rejected in committee in May 2023; another bill (no. 1251, May 2023) was referred to committee with no vote recorded. In Europe, only Spain counts blank votes as valid votes.","Où en est-on : l'article sur le vote blanc de la proposition LIOT a été rejeté en commission en mai 2023 ; un autre texte (n° 1251, mai 2023) a été renvoyé en commission sans vote enregistré. En Europe, seule l'Espagne compte le blanc parmi les votes valides.","Situación: el artículo sobre el voto en blanco de la proposición LIOT fue rechazado en comisión en mayo de 2023; otro texto (n.º 1251, mayo de 2023) fue enviado a comisión sin votación registrada. En Europa, solo España cuenta el voto en blanco entre los votos válidos."),U.ppl1251],
 elsewhere:[
  [L3("Spain","Espagne","España"),L3("Blank votes count as valid votes. They raise the number of votes a list needs to pass the 3% bar for seats. Only an empty envelope is blank: a blank sheet inside is spoilt.","Le blanc compte parmi les votes valides : il relève le nombre de voix nécessaire pour franchir la barre de 3 % donnant accès aux sièges. Seule une enveloppe vide vaut vote blanc ; une feuille blanche glissée dedans est nulle.","El voto en blanco cuenta como voto válido: eleva el número de votos que necesita una lista para superar la barrera del 3 % que da acceso a escaños. Solo un sobre vacío es voto en blanco; una hoja en blanco dentro es nulo."),[U.esPub,U.esJec]],
  [L3("Colombia","Colombie","Colombia"),L3("If blank votes win a majority of valid votes (first presidential round, governors, mayors, assemblies), the election is held again once, without the same candidates.","Si le blanc obtient la majorité des votes valides (premier tour de la présidentielle, gouverneurs, maires, assemblées), l'élection est refaite une fois, sans les mêmes candidats.","Si el voto en blanco obtiene la mayoría de los votos válidos (primera vuelta presidencial, gobernaciones, alcaldías, corporaciones), la elección se repite una vez, sin los mismos candidatos."),[U.co258]],
  [L3("Peru","Pérou","Perú"),L3("If spoilt and blank votes, together or separately, exceed two thirds of votes cast, the election is annulled.","Si les votes nuls et blancs, ensemble ou séparément, dépassent les deux tiers des votes émis, l'élection est annulée.","Si los votos nulos y en blanco, sumados o por separado, superan los dos tercios de los votos emitidos, la elección se anula."),[U.pe184]],
  [L3("India","Inde","India"),L3("Since a 2013 Supreme Court ruling, voting machines offer “None of the above”. It cannot cancel an election: the candidate with the most votes still wins.","Depuis un arrêt de la Cour suprême de 2013, les machines proposent « Aucun des candidats ». Cette option ne peut pas annuler une élection : le candidat arrivé en tête l'emporte.","Desde una sentencia del Tribunal Supremo de 2013, las máquinas ofrecen «Ninguno de los anteriores». Esa opción no puede anular una elección: gana el candidato más votado."),[U.inNota]]
 ],
 elseNote:L3("For lawmakers and citizens who want to change the rule: each model has a cost. Rerunning an election takes time and money, a low threshold can leave seats empty, and counting blank votes changes majorities and thresholds.","Pour les élus et les citoyens qui veulent changer la règle : chaque modèle a un coût. Refaire une élection prend du temps et de l'argent, un seuil bas peut laisser des sièges vacants, et compter les blancs modifie majorités et seuils.","Para los legisladores y ciudadanos que quieran cambiar la regla: cada modelo tiene un coste. Repetir una elección lleva tiempo y dinero, un umbral bajo puede dejar escaños vacantes y contar los votos en blanco modifica mayorías y umbrales."),
 think:[
  L3("If no option represents me, do I want that refusal to be counted? In France, blank is the only way to make it appear in the results.","Si aucune option ne me représente, est-ce que je veux que ce refus soit compté ? En France, le blanc est le seul moyen de le faire apparaître dans les résultats.","Si ninguna opción me representa, ¿quiero que ese rechazo se cuente? En Francia, el voto en blanco es la única manera de que aparezca en los resultados."),
  L3("Do I reject every option, or is one of them less far from my ideas than the other?","Est-ce que je rejette toutes les options, ou l'une d'elles est-elle moins éloignée de mes idées que l'autre ?","¿Rechazo todas las opciones, o una de ellas está menos lejos de mis ideas que la otra?"),
  L3("Do I want to weigh on the result, or to make a refusal count? A blank vote does the second, not the first.","Est-ce que je veux peser sur le résultat, ou faire compter un refus ? Le vote blanc fait le second, pas le premier.","¿Quiero influir en el resultado, o que cuente un rechazo? El voto en blanco hace lo segundo, no lo primero."),
  L3("Is the race close? The smaller the expected gap, the more the outcome rests on the votes cast alone.","Le scrutin s'annonce-t-il serré ? Plus l'écart attendu est faible, plus l'issue repose sur les seuls suffrages exprimés.","¿Se anuncia reñida la elección? Cuanto menor sea la diferencia esperada, más depende el resultado solo de los votos emitidos."),
  L3("Is the country going through a crisis, or could the election tip one way or the other? Then a blank vote leaves the other voters to decide in your place.","Le pays traverse-t-il une crise, ou l'élection peut-elle basculer d'un côté comme de l'autre ? Un vote blanc laisse alors les autres électeurs trancher à votre place.","¿Atraviesa el país una crisis, o puede la elección inclinarse hacia un lado o hacia el otro? Entonces un voto en blanco deja que los demás votantes decidan por usted."),
  L3("First or second round? The first round offers a wide choice; blank votes are most frequent in the second.","Premier ou second tour ? Le premier offre un large choix ; c'est au second que le blanc est le plus fréquent.","¿Primera o segunda vuelta? La primera ofrece una amplia elección; es en la segunda donde el voto en blanco es más frecuente."),
  L3("Who will read my message? The blank-vote rate is published and discussed on election night; an abstention is not told apart from indifference or being unable to vote.","Qui lira mon message ? Le taux de blancs est publié et commenté le soir de l'élection ; une abstention, elle, n'est pas distinguée de l'indifférence ou de l'empêchement.","¿Quién leerá mi mensaje? La tasa de votos en blanco se publica y se comenta la noche electoral; una abstención, en cambio, no se distingue de la indiferencia o de la imposibilidad de votar."),
  L3("Blank, spoilt or abstention: all three leave the decision to those who vote for a candidate. Only blank is counted as a deliberate choice not to choose.","Blanc, nul ou abstention : les trois laissent la décision à ceux qui votent pour un candidat. Seul le blanc est compté comme un choix délibéré de ne pas choisir.","En blanco, nulo o abstención: los tres dejan la decisión a quienes votan por un candidato. Solo el blanco se cuenta como una elección deliberada de no elegir.")
 ],
 note:L3("Barotico does not recommend voting blank, nor avoiding it. These questions are there to help you decide with the facts in hand.","Barotico ne recommande ni de voter blanc ni de l'éviter. Ces questions sont là pour décider en connaissance de cause.","Barotico no recomienda votar en blanco ni evitarlo. Estas preguntas están para decidir con conocimiento de causa.")
};
})();
// ---- shared parts + rollout batch 1 (14 Nov 2026): Belgium, Spain, USA, Italy, Colombia ----
(function(){
var U={
 fr2014:"https://questions.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE1516.pdf",
 esPub:"https://maldita.es/malditateexplica/20230723/escribir-papeleta-nombre-voto-nulo/",
 esJec:"https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672",
 es23:"https://www.ultimahora.es/elecciones/23j/congreso.html",
 co258:"https://leyes.co/constitucion/258.htm",
 coV2:"https://occidente.co/colombia/es-cierto-que-el-voto-en-blanco-no-tiene-ningun-efecto-en-la-segunda-vuelta/",
 co26:"https://www.larepublica.co/especiales/elecciones-presidenciales-2026/votos-en-blanco-y-nulos-superaron-la-votacion-de-ocho-candidatos-presidenciales-4404849",
 pe184:"https://peru.justia.com/federales/constitucion-politica-del-peru-de-1993/titulo-iv/capitulo-xiii",
 inNota:"https://www.eci.gov.in/EBooks/Leap_of_faith_Second_Edition/files/basic-html/page126.html",
 nv24:"https://www.nvsos.gov/SOSelectionPages/results/2024PPP/ElectionSummary.aspx",
 nvPbs:"https://www.fec.gov/resources/cms-content/documents/FederalElections98_SenateResults.pdf",
 usUnder:"https://elections.sbcounty.gov/faqs/what-happens-if-i-leave-something-blank-on-my-ballot-will-the-rest-of-my-ballot-be-counted/",
 itPag:"https://pagellapolitica.it/articoli/numero-schede-bianche-elezioni-politiche-europee",
 itQuo:"https://pagellapolitica.it/articoli/come-si-vota-referendum-cittadinanza-lavoro",
 beRtbf:"https://www.rtbf.be/article/votes-blancs-ou-nuls-quelles-differences-ces-voix-vont-elles-vraiment-a-la-majorite-11365892",
 be24:"https://www.rtbf.be/article/au-dela-du-million-d-electeurs-le-taux-d-abstention-a-battu-ce-dimanche-son-record-de-2019-11386769",
 beFl:"https://www.vrt.be/vrtnws/fr/2024/09/10/la-flandre-lance-une-campagne-pour-inciter-ses-citoyens-a-aller/"
};
BLANK._common={
 sum:L3("Blank vote: what it says, what it changes","Vote blanc : ce qu'il dit, ce qu'il change","Voto en blanco: lo que dice, lo que cambia"),
 elsewhere:[
  [L3("France","France","Francia"),L3("Counted separately and published since 2014, but outside the votes cast: no effect on the result or on thresholds.","Compté à part et publié depuis 2014, mais hors des suffrages exprimés : sans effet sur le résultat ni sur les seuils.","Se cuenta aparte y se publica desde 2014, pero fuera de los votos emitidos: sin efecto en el resultado ni en los umbrales."),[U.fr2014],"france"],
  [L3("Spain","Espagne","España"),L3("Blank votes count as valid votes. They raise the number of votes a list needs to pass the 3% bar for seats. Only an empty envelope is blank: a blank sheet inside is spoilt.","Le blanc compte parmi les votes valides : il relève le nombre de voix nécessaire pour franchir la barre de 3 % donnant accès aux sièges. Seule une enveloppe vide vaut vote blanc ; une feuille blanche glissée dedans est nulle.","El voto en blanco cuenta como voto válido: eleva el número de votos que necesita una lista para superar la barrera del 3 % que da acceso a escaños. Solo un sobre vacío es voto en blanco; una hoja en blanco dentro es nulo."),[U.esPub,U.esJec],"espagne"],
  [L3("Colombia","Colombie","Colombia"),L3("If blank votes win a majority of valid votes (first presidential round, governors, mayors, assemblies), the election is held again once, without the same candidates.","Si le blanc obtient la majorité des votes valides (premier tour de la présidentielle, gouverneurs, maires, assemblées), l'élection est refaite une fois, sans les mêmes candidats.","Si el voto en blanco obtiene la mayoría de los votos válidos (primera vuelta presidencial, gobernaciones, alcaldías, corporaciones), la elección se repite una vez, sin los mismos candidatos."),[U.co258],"colombia"],
  [L3("Peru","Pérou","Perú"),L3("If spoilt and blank votes, together or separately, exceed two thirds of votes cast, the election is annulled.","Si les votes nuls et blancs, ensemble ou séparément, dépassent les deux tiers des votes émis, l'élection est annulée.","Si los votos nulos y en blanco, sumados o por separado, superan los dos tercios de los votos emitidos, la elección se anula."),[U.pe184],"peru"],
  [L3("Italy","Italie","Italia"),L3("Blank ballots do not count as valid votes, but in abrogative referendums they count towards the turnout quorum: voting blank helps reach it, abstaining helps defeat it.","La scheda bianca ne compte pas parmi les votes valides, mais aux référendums abrogatifs elle compte pour le quorum de participation : voter blanc aide à l'atteindre, s'abstenir aide à le faire échouer.","La papeleta en blanco no cuenta como voto válido, pero en los referendos derogatorios cuenta para el quórum de participación: votar en blanco ayuda a alcanzarlo, abstenerse ayuda a que fracase."),[U.itQuo],"italy"],
  [L3("Nevada (United States)","Nevada (États-Unis)","Nevada (Estados Unidos)"),L3("Since 1975, ballots offer “None of these candidates” in statewide and presidential races. It can come first, but it never wins: the candidate with the most votes is elected.","Depuis 1975, le bulletin propose « Aucun de ces candidats » pour les élections à l'échelle de l'État et la présidentielle. Cette option peut arriver en tête, mais ne gagne jamais : le candidat qui a le plus de voix est élu.","Desde 1975, la papeleta ofrece «Ninguno de estos candidatos» en las elecciones estatales y presidenciales. Puede quedar primera, pero nunca gana: resulta elegido el candidato con más votos."),[U.nv24],"usa"],
  [L3("India","Inde","India"),L3("Since a 2013 Supreme Court ruling, voting machines offer “None of the above”. It cannot cancel an election: the candidate with the most votes still wins.","Depuis un arrêt de la Cour suprême de 2013, les machines proposent « Aucun des candidats ». Cette option ne peut pas annuler une élection : le candidat arrivé en tête l'emporte.","Desde una sentencia del Tribunal Supremo de 2013, las máquinas ofrecen «Ninguno de los anteriores». Esa opción no puede anular una elección: gana el candidato más votado."),[U.inNota],"india"]
 ],
 elseNote:BLANK.france.elseNote,
 think:[
  L3("If no option represents me, do I want that refusal to be counted? Check above how it is counted here.","Si aucune option ne me représente, est-ce que je veux que ce refus soit compté ? Regardez plus haut comment il l'est ici.","Si ninguna opción me representa, ¿quiero que ese rechazo se cuente? Mire más arriba cómo se cuenta aquí."),
  L3("Do I reject every option, or is one of them less far from my ideas than the others?","Est-ce que je rejette toutes les options, ou l'une d'elles est-elle moins éloignée de mes idées que les autres ?","¿Rechazo todas las opciones, o una de ellas está menos lejos de mis ideas que las demás?"),
  L3("Do I want to weigh on the result, or to make a refusal count?","Est-ce que je veux peser sur le résultat, ou faire compter un refus ?","¿Quiero influir en el resultado, o que cuente un rechazo?"),
  L3("Is the race close, is the country going through a crisis, could the election tip one way or the other? The closer it is, the more the outcome rests on the votes given to candidates.","Le scrutin est-il serré, le pays traverse-t-il une crise, l'élection peut-elle basculer d'un côté comme de l'autre ? Plus c'est serré, plus l'issue repose sur les voix données aux candidats.","¿Está reñida la elección, atraviesa el país una crisis, puede inclinarse hacia un lado o hacia el otro? Cuanto más reñida, más depende el resultado de los votos dados a los candidatos."),
  L3("Blank, spoilt or abstention: what does the law of this country do with each one?","Blanc, nul ou abstention : que fait la loi de ce pays de chacun ?","En blanco, nulo o abstención: ¿qué hace la ley de este país con cada uno?")
 ],
 note:BLANK.france.note
};
delete BLANK.france.elsewhere;delete BLANK.france.elseNote;

BLANK.belgique={
 lead:L3("In Belgium, voting is compulsory (except in Flemish local elections since 2024). A blank vote is often the only legal way to choose no one.","En Belgique, voter est obligatoire (sauf aux élections communales en Flandre depuis 2024). Le vote blanc est souvent la seule manière légale de ne choisir personne.","En Bélgica, votar es obligatorio (salvo en las elecciones municipales de Flandes desde 2024). El voto en blanco es a menudo la única forma legal de no elegir a nadie."),
 what:[
  [L3("Blank vote: a paper ballot with no mark at all. With electronic voting (as in Brussels), you tick the “blank vote” box.","Vote blanc : un bulletin papier sans aucune marque. Avec le vote électronique (comme à Bruxelles), on coche la case « vote blanc ».","Voto en blanco: una papeleta de papel sin ninguna marca. Con el voto electrónico (como en Bruselas), se marca la casilla «voto en blanco»."),U.beRtbf],
  [L3("Spoilt vote: an invalid answer, such as a drawing on the paper. Electronic voting does not allow spoilt votes.","Vote nul : une réponse non valable, par exemple un dessin sur le bulletin. Le vote électronique ne permet pas de voter nul.","Voto nulo: una respuesta no válida, por ejemplo un dibujo en la papeleta. El voto electrónico no permite votar nulo."),U.beRtbf],
  [L3("Compulsory voting: adults must vote in federal, regional and (in Wallonia and Brussels) local elections. Flanders abolished the obligation for its local elections by a 2021 decree, applied in October 2024.","Obligation de vote : les adultes doivent voter aux élections fédérales, régionales et (en Wallonie et à Bruxelles) communales. La Flandre a supprimé l'obligation pour ses communales par un décret de 2021, appliqué en octobre 2024.","Voto obligatorio: los adultos deben votar en las elecciones federales, regionales y (en Valonia y Bruselas) municipales. Flandes suprimió la obligación en sus municipales por un decreto de 2021, aplicado en octubre de 2024."),U.beFl]
 ],
 count:[
  [L3("Blank and spoilt votes are counted but not taken into account: seats are shared out among valid votes only.","Les votes blancs et nuls sont comptés mais pas pris en compte : les sièges se répartissent sur les seuls votes valides.","Los votos en blanco y nulos se cuentan pero no se tienen en cuenta: los escaños se reparten solo entre los votos válidos."),U.beRtbf],
  [L3("They do not “go to the majority”: they go to no party. But by reducing the number of valid votes, they raise every party's share. A party with 40% of all ballots reaches 50% of valid votes if 20% are blank or spoilt.","Ils ne « vont pas à la majorité » : ils ne vont à aucun parti. Mais en réduisant le nombre de votes valides, ils augmentent la part de chacun. Un parti à 40 % des bulletins atteint 50 % des votes valides si 20 % sont blancs ou nuls.","No «van a la mayoría»: no van a ningún partido. Pero al reducir el número de votos válidos, aumentan la cuota de cada uno. Un partido con el 40 % de las papeletas alcanza el 50 % de los votos válidos si el 20 % son en blanco o nulos."),U.beRtbf]
 ],
 nums:[
  [5.4,L3("of voters cast a blank or spoilt ballot in 2019; almost 12% did not vote at all.","des électeurs ont voté blanc ou nul en 2019 ; près de 12 % n'ont pas voté du tout.","de los electores votaron en blanco o nulo en 2019; casi el 12 % no votó."),U.beRtbf],
  [12.5,L3("of voters stayed away in 2024 (over 1,050,000), a record; blank votes fell slightly, from 438,098 to 415,912.","des électeurs se sont abstenus en 2024 (plus de 1 050 000), un record ; les votes blancs ont légèrement baissé, de 438 098 à 415 912.","de los electores se abstuvieron en 2024 (más de 1 050 000), un récord; los votos en blanco bajaron ligeramente, de 438 098 a 415 912."),U.be24]
 ],
 impact:[
  [L3("Where voting is compulsory, a blank ballot respects the law; staying home does not.","Là où le vote est obligatoire, voter blanc respecte la loi ; rester chez soi, non.","Donde el voto es obligatorio, votar en blanco respeta la ley; quedarse en casa, no."),U.beRtbf],
  [L3("Seats are allocated on valid votes only: blank and spoilt ballots change no party's seat count directly, but they make each valid vote weigh a little more.","Les sièges se calculent sur les seuls votes valides : blancs et nuls ne changent directement les sièges d'aucun parti, mais ils font peser un peu plus chaque vote valide.","Los escaños se calculan solo sobre los votos válidos: blancos y nulos no cambian directamente los escaños de ningún partido, pero hacen pesar un poco más cada voto válido."),U.beRtbf]
 ]
};

BLANK.espagne={
 lead:L3("In Spain, a blank vote is a valid vote: it enters the percentages and the bar that gives access to seats. But it must be cast the right way.","En Espagne, le vote blanc est un vote valide : il entre dans les pourcentages et dans la barre d'accès aux sièges. Encore faut-il le déposer correctement.","En España, el voto en blanco es un voto válido: entra en los porcentajes y en la barrera de acceso a los escaños. Eso sí, hay que emitirlo correctamente."),
 what:[
  [L3("Blank vote: an empty envelope. “An envelope containing no ballot is considered a blank but valid vote” (electoral law, art. 96.5).","Vote blanc : une enveloppe vide. « Est considérée comme vote blanc, mais valide, l'enveloppe qui ne contient pas de bulletin » (loi électorale, art. 96.5).","Voto en blanco: un sobre vacío. «Se considera voto en blanco, pero válido, el sobre que no contenga papeleta» (LOREG, art. 96.5)."),U.esJec],
  [L3("Careful: a blank sheet of paper inside the envelope is a spoilt vote, as the Central Electoral Board recalled in 2021.","Attention : une feuille blanche glissée dans l'enveloppe est un vote nul, comme l'a rappelé la Junta Electoral Central en 2021.","Atención: una hoja en blanco dentro del sobre es voto nulo, como recordó la Junta Electoral Central en 2021."),U.esJec],
  [L3("Spoilt vote: for example, ballots of different lists in the same envelope, or a ballot marked or altered.","Vote nul : par exemple des bulletins de listes différentes dans la même enveloppe, ou un bulletin annoté ou modifié.","Voto nulo: por ejemplo, papeletas de distintas candidaturas en el mismo sobre, o una papeleta marcada o alterada."),U.esPub]
 ],
 count:[
  [L3("Blank votes are counted with the valid votes. A list needs at least 3% of valid votes in its constituency to win Congress seats, so blank votes raise the number of votes it needs.","Les blancs sont comptés avec les votes valides. Une liste doit obtenir au moins 3 % des votes valides de sa circonscription pour avoir des sièges au Congrès : les blancs relèvent donc le nombre de voix nécessaire.","Los votos en blanco se cuentan con los válidos. Una candidatura necesita al menos el 3 % de los votos válidos de su circunscripción para obtener escaños en el Congreso: los blancos elevan, por tanto, el número de votos necesario."),U.esPub],
  [L3("In theory this penalises small parties; in practice, says political scientist Manuel Arias, it rarely changes anything, as few parties sit right at the 3% line.","En théorie, cela pénalise les petits partis ; en pratique, selon le politologue Manuel Arias, cela change rarement quelque chose, peu de partis étant juste à la limite des 3 %.","En teoría, esto perjudica a los partidos pequeños; en la práctica, según el politólogo Manuel Arias, rara vez cambia algo, porque pocos partidos están justo en el límite del 3 %."),U.esPub]
 ],
 nums:[
  [0.81,L3("of voters cast a blank vote in the 2023 general election: 199,392 envelopes.","des votants ont voté blanc aux législatives de 2023 : 199 392 enveloppes.","de los votantes votaron en blanco en las generales de 2023: 199 392 sobres."),U.es23],
  [1.06,L3("cast a spoilt vote (261,078), more than blank votes.","ont voté nul (261 078), plus que de votes blancs.","votaron nulo (261 078), más que en blanco."),U.es23]
 ],
 impact:[
  [L3("Unlike in France, a Spanish blank vote is in the denominator: it lowers every party's percentage a little and raises the 3% bar.","Contrairement à la France, le blanc espagnol est dans le dénominateur : il baisse un peu le pourcentage de chaque parti et relève la barre des 3 %.","A diferencia de Francia, el voto en blanco español está en el denominador: baja un poco el porcentaje de cada partido y eleva la barrera del 3 %."),U.esPub],
  [L3("It still elects no one: seats go only to lists. A blank vote does not leave a seat empty.","Il n'élit toutefois personne : les sièges vont seulement aux listes. Un vote blanc ne laisse aucun siège vide.","Aun así, no elige a nadie: los escaños solo van a las candidaturas. Un voto en blanco no deja ningún escaño vacío."),U.esPub]
 ]
};

BLANK.usa={
 lead:L3("In the United States there is no blank ballot as such: a ballot often lists dozens of races, and you can leave any of them empty.","Aux États-Unis, il n'existe pas de bulletin blanc à proprement parler : un bulletin compte souvent des dizaines d'élections, et on peut en laisser n'importe laquelle vide.","En Estados Unidos no existe la papeleta en blanco como tal: una papeleta suele incluir decenas de contiendas, y se puede dejar cualquiera vacía."),
 what:[
  [L3("Undervote: you skip a race, on purpose or by mistake. Your other choices on the ballot are still counted.","« Undervote » : on saute une élection, volontairement ou par erreur. Les autres choix du bulletin sont tout de même comptés.","«Undervote»: se deja una contienda sin marcar, a propósito o por error. Las demás elecciones de la papeleta se cuentan igualmente."),U.usUnder],
  [L3("In Nevada only, since 1975: a “None of these candidates” option in statewide and presidential races.","Au Nevada seulement, depuis 1975 : une option « Aucun de ces candidats » pour les élections à l'échelle de l'État et la présidentielle.","Solo en Nevada, desde 1975: una opción «Ninguno de estos candidatos» en las elecciones estatales y presidenciales."),U.nv24]
 ],
 count:[
  [L3("A skipped race adds to no candidate. The result is decided by the votes given to candidates.","Une élection laissée vide ne s'ajoute à aucun candidat. Le résultat se décide sur les voix données aux candidats.","Una contienda en blanco no suma a ningún candidato. El resultado se decide con los votos dados a los candidatos."),U.usUnder],
  [L3("In Nevada, “None of these candidates” can come first but cannot win: the candidate with the most votes is declared the winner.","Au Nevada, « Aucun de ces candidats » peut arriver en tête mais ne peut pas gagner : le candidat qui a le plus de voix est déclaré élu.","En Nevada, «Ninguno de estos candidatos» puede quedar primero pero no puede ganar: se declara ganador al candidato con más votos."),U.nv24]
 ],
 nums:[
  [63,L3("for “None of these candidates” in Nevada's 2024 Republican presidential primary, against 30% for Nikki Haley, who was still recorded as the winner.","pour « Aucun de ces candidats » à la primaire républicaine du Nevada en 2024, contre 30 % pour Nikki Haley, déclarée gagnante malgré tout.","para «Ninguno de estos candidatos» en las primarias republicanas de Nevada en 2024, frente al 30 % de Nikki Haley, que figuró igualmente como ganadora."),U.nv24],
 ],
 impact:[
  [L3("In 1998, “None of these candidates” got 8,125 votes in Nevada's Senate race, decided by 428 votes after a recount. Refusals outnumbered the margin nineteen times over.","En 1998, « Aucun de ces candidats » a obtenu 8 125 voix au Nevada pour un siège de sénateur gagné avec 428 voix d'avance après recomptage. Les refus pesaient dix-neuf fois l'écart.","En 1998, «Ninguno de estos candidatos» obtuvo 8 125 votos en Nevada en una elección al Senado decidida por 428 votos tras el recuento. Los rechazos multiplicaban por diecinueve la diferencia."),U.nvPbs],
  [L3("In a first-past-the-post race, the gap between candidates is made only of votes for them: a skipped race leaves the decision to others.","Dans une élection à un tour où le premier l'emporte, l'écart entre candidats ne se fait qu'avec leurs voix : une élection laissée vide laisse la décision aux autres.","En una elección a una vuelta en la que gana el primero, la diferencia entre candidatos solo se hace con sus votos: una contienda en blanco deja la decisión a los demás."),null]
 ]
};

BLANK.italy={
 lead:L3("In Italy, a blank ballot (scheda bianca) counts among voters but not among valid votes. Its real weight shows in referendums.","En Italie, la scheda bianca compte parmi les votants mais pas parmi les votes valides. Son vrai poids se voit aux référendums.","En Italia, la papeleta en blanco (scheda bianca) cuenta entre los votantes pero no entre los votos válidos. Su verdadero peso se ve en los referendos."),
 what:[
  [L3("Blank ballot: a ballot handed in with no mark.","Scheda bianca : un bulletin rendu sans aucune marque.","Scheda bianca: una papeleta entregada sin ninguna marca."),U.itPag],
  [L3("Spoilt ballot (scheda nulla): a ballot with invalid marks; it counts neither for yes nor for no in a referendum.","Scheda nulla : un bulletin avec des marques non valables ; il ne compte ni pour le oui ni pour le non à un référendum.","Scheda nulla: una papeleta con marcas no válidas; no cuenta ni para el sí ni para el no en un referendo."),U.itQuo]
 ],
 count:[
  [L3("Blank ballots count in turnout, because the voter went to the polls, but are excluded from the valid votes used to allocate seats: no effect on results.","Les blancs comptent dans la participation, puisque l'électeur s'est déplacé, mais sont exclus des votes valides qui servent à répartir les sièges : sans effet sur le résultat.","Los blancos cuentan en la participación, porque el elector acudió a votar, pero se excluyen de los votos válidos que sirven para repartir escaños: sin efecto en el resultado."),U.itPag],
  [L3("Abrogative referendums are valid only if more than half of voters take part. Blank and spoilt ballots count towards that quorum.","Un référendum abrogatif n'est valable que si plus de la moitié des électeurs participent. Les bulletins blancs et nuls comptent pour ce quorum.","Un referendo derogatorio solo es válido si participa más de la mitad de los electores. Las papeletas en blanco y nulas cuentan para ese quórum."),U.itQuo]
 ],
 nums:[
  [1.7,L3("of Chamber voters cast a blank ballot in 2022, almost half a million; 2.8% cast a spoilt one (822,000).","des votants à la Chambre ont voté blanc en 2022, près d'un demi-million ; 2,8 % ont voté nul (822 000).","de los votantes de la Cámara votaron en blanco en 2022, casi medio millón; el 2,8 % votó nulo (822 000)."),U.itPag],
  [4.2,L3("the record for blank ballots in a general election, in 2001.","le record de bulletins blancs à des élections législatives, en 2001.","el récord de papeletas en blanco en unas elecciones generales, en 2001."),U.itPag]
 ],
 impact:[
  [L3("In a referendum, a voter opposed to the question who votes blank helps reach the quorum; one who abstains helps make it fail. Blank and abstention do not have the same effect.","À un référendum, un électeur opposé à la question qui vote blanc aide à atteindre le quorum ; celui qui s'abstient aide à le faire échouer. Blanc et abstention n'ont pas le même effet.","En un referendo, un elector contrario a la pregunta que vota en blanco ayuda a alcanzar el quórum; el que se abstiene ayuda a que fracase. El blanco y la abstención no tienen el mismo efecto."),U.itQuo],
  [L3("In general elections, blank ballots weigh on turnout figures, not on seats.","Aux élections législatives, les blancs pèsent sur les chiffres de participation, pas sur les sièges.","En las elecciones generales, los blancos pesan en las cifras de participación, no en los escaños."),U.itPag]
 ]
};

BLANK.colombia={
 lead:L3("In Colombia, the blank vote is a box on the ballot and a valid vote. If it wins the first round, the election is held again with other candidates.","En Colombie, le vote blanc est une case du bulletin et un vote valide. S'il gagne au premier tour, l'élection est refaite avec d'autres candidats.","En Colombia, el voto en blanco es una casilla del tarjetón y un voto válido. Si gana en primera vuelta, la elección se repite con otros candidatos."),
 what:[
  [L3("Blank vote: a dedicated box on the ballot, counted separately and added to no candidate.","Vote blanc : une case dédiée sur le bulletin, comptée à part et ajoutée à aucun candidat.","Voto en blanco: una casilla propia en el tarjetón, que se cuenta aparte y no se suma a ningún candidato."),U.coV2],
  [L3("Unlike France or Italy, it is a valid vote: it counts in the total of valid votes.","Contrairement à la France ou à l'Italie, c'est un vote valide : il compte dans le total des votes valides.","A diferencia de Francia o Italia, es un voto válido: cuenta en el total de votos válidos."),U.co258]
 ],
 count:[
  [L3("If blank votes are a majority of valid votes, the election is held again once: in the first presidential round, and for governors, mayors and elected bodies. In single-seat races the same candidates cannot run again; lists below the threshold cannot either.","Si les blancs sont majoritaires parmi les votes valides, l'élection est refaite une fois : au premier tour de la présidentielle, et pour les gouverneurs, les maires et les assemblées élues. Pour un poste unique, les mêmes candidats ne peuvent pas se représenter ; les listes sous le seuil non plus.","Si los votos en blanco son mayoría entre los válidos, la elección se repite una vez: en la primera vuelta presidencial, y para gobernaciones, alcaldías y corporaciones públicas. En los cargos unipersonales no pueden presentarse los mismos candidatos; tampoco las listas que no alcanzaron el umbral."),U.co258],
  [L3("In the presidential run-off the box is still there, but it is symbolic: there is no rerun, the candidate with the most votes wins.","Au second tour de la présidentielle, la case existe toujours, mais elle est symbolique : pas de nouvelle élection, le candidat qui a le plus de voix l'emporte.","En la segunda vuelta presidencial la casilla sigue existiendo, pero es simbólica: no hay repetición, gana el candidato con más votos."),U.coV2]
 ],
 nums:[
  [1.71,L3("of valid votes went blank in the first presidential round of 31 May 2026: 406,830 votes, more than eight candidates each received.","des votes valides sont allés au blanc au premier tour de la présidentielle du 31 mai 2026 : 406 830 voix, plus que huit candidats.","de los votos válidos fueron en blanco en la primera vuelta presidencial del 31 de mayo de 2026: 406 830 votos, más que ocho candidatos."),U.co26],
  [1.02,L3("of votes were spoilt in that round (245,339).","des votes étaient nuls à ce même tour (245 339).","de los votos fueron nulos en esa vuelta (245 339)."),U.co26]
 ],
 impact:[
  [L3("Here, a blank vote can do more than send a message: if it wins a majority, it removes every candidate from the rerun.","Ici, un vote blanc peut faire plus qu'envoyer un message : s'il est majoritaire, il écarte tous les candidats de l'élection suivante.","Aquí, un voto en blanco puede hacer algo más que enviar un mensaje: si es mayoritario, aparta a todos los candidatos de la nueva elección."),U.co258],
  [L3("Below a majority, it changes no winner: in the run-off and in most races, the person with the most votes is elected.","En dessous de la majorité, il ne change aucun vainqueur : au second tour et dans la plupart des élections, la personne qui a le plus de voix est élue.","Por debajo de la mayoría, no cambia a ningún ganador: en la segunda vuelta y en la mayoría de elecciones, resulta elegida la persona con más votos."),U.coV2]
 ],
 think:[
  L3("First round or run-off? In the first round, a majority of blank votes forces a new election with other candidates; in the run-off, the blank box is symbolic.","Premier tour ou second tour ? Au premier tour, une majorité de blancs oblige à refaire l'élection avec d'autres candidats ; au second, la case blanche est symbolique.","¿Primera o segunda vuelta? En la primera, una mayoría de votos en blanco obliga a repetir la elección con otros candidatos; en la segunda, la casilla en blanco es simbólica."),
  L3("Do I reject every option, or is one of them less far from my ideas than the others?","Est-ce que je rejette toutes les options, ou l'une d'elles est-elle moins éloignée de mes idées que les autres ?","¿Rechazo todas las opciones, o una de ellas está menos lejos de mis ideas que las demás?"),
  L3("Is the race close, is the country going through a crisis? Below a majority of blank votes, the outcome rests on the votes given to candidates.","Le scrutin est-il serré, le pays traverse-t-il une crise ? Tant que le blanc n'est pas majoritaire, l'issue repose sur les voix données aux candidats.","¿Está reñida la elección, atraviesa el país una crisis? Mientras el blanco no sea mayoritario, el resultado depende de los votos dados a los candidatos.")
 ]
};
})();
// ---- rollout batch 2 (14 Nov 2026): Germany, United Kingdom, Portugal, Netherlands, Austria ----
(function(){
var U={
 deGl:"https://bundeswahlleiterin.de/service/glossar/u/ungueltige-stimmabgabe.html",
 de25:"https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html",
 ukR47:"https://legislation.gov.uk/ukpga/1983/2/schedule/1/paragraph/47/2021-03-20/data.html",
 ukEd:"https://www.edinburgh.gov.uk/documents/uk-parliament-election-2024-guidance-count-procedures-candidates-election-agents-counting-agents/9",
 ptDef:"https://portaldaqueixa.com/news/branco-nulo-ou-abstencao-que-tipos-de-voto-existem",
 pt26:"https://www.sabado.pt/portugal/amp/votos-nulos-nas-presidenciais-aumentaram-cne-esclarece-papel-dos-candidatos-excluidos",
 nlNos:"https://nos.nl/artikel/2163232-wat-is-een-blanco-stem-en-andere-weetjes-rond-de-verkiezingen",
 nlHvn:"https://www.hartvannederland.nl/politiek/verkiezingen/artikelen/zo-werkt-blanco-stemmen-stembiljet-verkiezingen",
 nl25:"https://www.parlement.com/tweede-kamerverkiezingen-2025",
 at81:"https://www.jusline.at/gesetz/nrwo/paragraf/81",
 at24:"https://www.salzburg24.at/themen/wahlen-in-salzburg/nationalratswahl/endergebnis-der-nationalratswahl-2024-ist-amtlich-art-281011"
};
BLANK.germany={
 lead:L3("In Germany, there is no separate blank vote: a ballot left empty is an invalid vote, counted with the other invalid votes.","En Allemagne, il n'existe pas de vote blanc à part : un bulletin laissé vide est un vote invalide, compté avec les autres votes invalides.","En Alemania no existe un voto en blanco separado: una papeleta vacía es un voto nulo, contado con los demás votos nulos."),
 what:[
  [L3("Each voter has two votes on the same ballot: a first vote for a local candidate and a second vote for a party list.","Chaque électeur a deux voix sur le même bulletin : une première voix pour un candidat local, une seconde voix pour une liste de parti.","Cada elector tiene dos votos en la misma papeleta: un primer voto para un candidato local y un segundo voto para una lista de partido."),U.deGl],
  [L3("A ballot with no mark at all, or not officially issued, makes both votes invalid. So does a ballot whose intention is unclear, or that carries an addition or a reservation.","Un bulletin sans aucune marque, ou non officiel, rend les deux voix invalides. De même pour un bulletin dont l'intention n'est pas claire, ou qui porte un ajout ou une réserve.","Una papeleta sin ninguna marca, o no oficial, anula los dos votos. Lo mismo ocurre con una papeleta cuya intención no está clara o que lleva un añadido o una reserva."),U.deGl]
 ],
 count:[
  [L3("Invalid votes are published but go to no party: seats are shared out among valid votes.","Les votes invalides sont publiés mais ne vont à aucun parti : les sièges se répartissent sur les votes valides.","Los votos nulos se publican pero no van a ningún partido: los escaños se reparten entre los votos válidos."),U.de25]
 ],
 nums:[
  [0.6,L3("of second votes were invalid in February 2025 (0.9% in 2021), with a turnout of 82.5%.","des secondes voix étaient invalides en février 2025 (0,9 % en 2021), pour une participation de 82,5 %.","de los segundos votos fueron nulos en febrero de 2025 (0,9 % en 2021), con una participación del 82,5 %."),U.de25],
  [0.8,L3("of first votes were invalid in 2025 (1.0% in 2021).","des premières voix étaient invalides en 2025 (1,0 % en 2021).","de los primeros votos fueron nulos en 2025 (1,0 % en 2021)."),U.de25]
 ],
 impact:[
  [L3("Because a blank ballot is simply invalid, an empty ballot and a spoilt one carry the same weight in the results: none.","Comme un bulletin vide est simplement invalide, un bulletin vide et un bulletin raturé pèsent la même chose dans les résultats : rien.","Como una papeleta vacía es simplemente nula, una papeleta vacía y una tachada pesan lo mismo en los resultados: nada."),U.deGl]
 ]
};
BLANK.uk={
 lead:L3("In the United Kingdom, there is no blank vote: a ballot left unmarked is one of the rejected ballots, counted and announced at each count.","Au Royaume-Uni, il n'existe pas de vote blanc : un bulletin laissé vide fait partie des bulletins rejetés, comptés et annoncés à chaque dépouillement.","En el Reino Unido no existe el voto en blanco: una papeleta sin marcar forma parte de las papeletas rechazadas, que se cuentan y anuncian en cada escrutinio."),
 what:[
  [L3("A ballot is rejected if it has no official mark, votes for more than one candidate, carries writing that could identify the voter, or is unmarked or void for uncertainty.","Un bulletin est rejeté s'il n'a pas la marque officielle, s'il vote pour plusieurs candidats, s'il porte une inscription qui pourrait identifier l'électeur, ou s'il est vide ou incertain.","Una papeleta se rechaza si no lleva la marca oficial, vota por más de un candidato, lleva escritos que podrían identificar al elector o está sin marcar o es incierta."),U.ukR47],
  [L3("A ballot marked in the wrong place or with something other than a cross is still counted if the voter's choice is clear.","Un bulletin marqué au mauvais endroit, ou autrement que par une croix, reste compté si le choix de l'électeur est clair.","Una papeleta marcada en un lugar equivocado, o con algo distinto de una cruz, se cuenta igualmente si la elección del elector está clara."),U.ukR47]
 ],
 count:[
  [L3("The returning officer publishes the number of rejected ballots under four headings, including “unmarked or void for uncertainty”. They go to no candidate.","Le responsable du scrutin publie le nombre de bulletins rejetés sous quatre rubriques, dont « vide ou incertain ». Ils ne vont à aucun candidat.","El responsable del escrutinio publica el número de papeletas rechazadas en cuatro apartados, entre ellos «sin marcar o incierta». No van a ningún candidato."),U.ukR47],
  [L3("Each MP is elected in one round: the candidate with the most votes wins, whatever the share of rejected ballots.","Chaque député est élu en un seul tour : le candidat qui a le plus de voix l'emporte, quelle que soit la part de bulletins rejetés.","Cada diputado se elige en una sola vuelta: gana el candidato con más votos, sea cual sea la proporción de papeletas rechazadas."),U.ukEd]
 ],
 impact:[
  [L3("In a single-round race, the gap between the first two is made only of votes for them: an unmarked ballot leaves the decision to others.","Dans une élection à un tour, l'écart entre les deux premiers ne se fait qu'avec leurs voix : un bulletin vide laisse la décision aux autres.","En una elección a una vuelta, la diferencia entre los dos primeros solo se hace con sus votos: una papeleta sin marcar deja la decisión a los demás."),null]
 ]
};
BLANK.portugal={
 lead:L3("In Portugal, a blank vote is counted separately and counts in turnout, but not among the valid votes used to share out seats.","Au Portugal, le vote blanc est compté à part et entre dans la participation, mais pas parmi les votes valides qui servent à répartir les sièges.","En Portugal, el voto en blanco se cuenta aparte y entra en la participación, pero no entre los votos válidos que sirven para repartir los escaños."),
 what:[
  [L3("Blank vote: a ballot handed in with no mark or sign at all.","Vote blanc : un bulletin remis sans aucune marque ni signe.","Voto en blanco: una papeleta entregada sin ninguna marca ni señal."),U.ptDef],
  [L3("Spoilt vote: more than one box marked, writing or crossings-out; also a mark for a withdrawn or non-admitted candidate still printed on the ballot.","Vote nul : plus d'une case cochée, des inscriptions ou des ratures ; ou encore une croix pour un candidat retiré ou non admis encore imprimé sur le bulletin.","Voto nulo: más de una casilla marcada, escritos o tachones; o una cruz para un candidato retirado o no admitido que sigue impreso en la papeleta."),U.pt26]
 ],
 count:[
  [L3("Only valid votes count for seats: blank and spoilt votes neither help nor harm any list directly.","Seuls les votes valides comptent pour les sièges : blancs et nuls ne favorisent ni ne pénalisent directement aucune liste.","Solo los votos válidos cuentan para los escaños: blancos y nulos no favorecen ni perjudican directamente a ninguna candidatura."),U.ptDef]
 ],
 nums:[
  [1.06,L3("of votes were blank in the first round of the January 2026 presidential election (61,226), fewer than spoilt votes (65,381, 1.13%).","des votes étaient blancs au premier tour de la présidentielle de janvier 2026 (61 226), moins que les nuls (65 381, soit 1,13 %).","de los votos fueron en blanco en la primera vuelta de las presidenciales de enero de 2026 (61 226), menos que los nulos (65 381, el 1,13 %)."),U.pt26]
 ],
 impact:[
  [L3("Blank votes are published and discussed, but a candidate or a list wins with valid votes alone.","Les blancs sont publiés et commentés, mais un candidat ou une liste l'emporte avec les seuls votes valides.","Los votos en blanco se publican y se comentan, pero un candidato o una lista gana solo con los votos válidos."),U.ptDef]
 ]
};
BLANK.netherlands={
 lead:L3("In the Netherlands, a blank vote counts in turnout but not for seats. It must be handed in with nothing written on it.","Aux Pays-Bas, le vote blanc compte dans la participation mais pas pour les sièges. Il faut le déposer sans rien écrire dessus.","En los Países Bajos, el voto en blanco cuenta en la participación pero no para los escaños. Hay que depositarlo sin escribir nada."),
 what:[
  [L3("Blank vote: the ballot put in the box with nothing filled in.","Vote blanc : le bulletin glissé dans l'urne sans rien remplir.","Voto en blanco: la papeleta depositada en la urna sin rellenar nada."),U.nlHvn],
  [L3("Careful: writing anything on it, even “blank”, or a name or signature, makes the vote invalid, not blank. A mark other than a red-filled box is also invalid.","Attention : écrire quoi que ce soit, même « blanc », ou un nom ou une signature, rend le vote invalide, pas blanc. Une marque autre que la case coloriée en rouge l'est aussi.","Atención: escribir cualquier cosa, incluso «en blanco», o un nombre o una firma, convierte el voto en nulo, no en blanco. Una marca distinta de la casilla coloreada en rojo también lo es."),U.nlNos]
 ],
 count:[
  [L3("Blank votes are listed separately in the official result. They count in turnout but are not shared out among parties.","Les blancs figurent à part dans le résultat officiel. Ils comptent dans la participation mais ne sont pas répartis entre les partis.","Los votos en blanco figuran aparte en el resultado oficial. Cuentan en la participación pero no se reparten entre los partidos."),U.nlNos]
 ],
 nums:[
  [0.38,L3("of votes cast were blank in October 2025: 40,128, against 28,206 invalid votes, with a turnout of 78.3%.","des votes exprimés étaient blancs en octobre 2025 : 40 128, contre 28 206 votes invalides, pour une participation de 78,3 %.","de los votos emitidos fueron en blanco en octubre de 2025: 40 128, frente a 28 206 nulos, con una participación del 78,3 %."),U.nl25],
  [0.19,L3("of valid votes were blank in 2023 (19,655): blank votes doubled in two years.","des votes valides étaient blancs en 2023 (19 655) : les blancs ont doublé en deux ans.","de los votos válidos fueron en blanco en 2023 (19 655): los votos en blanco se duplicaron en dos años."),U.nlHvn]
 ],
 impact:[
  [L3("With proportional representation, every valid vote counts towards the sharing of seats; a blank vote counts only in turnout.","Avec la proportionnelle, chaque vote valide pèse sur la répartition des sièges ; un vote blanc ne compte que dans la participation.","Con la representación proporcional, cada voto válido pesa en el reparto de escaños; un voto en blanco solo cuenta en la participación."),U.nlNos]
 ]
};
BLANK.austria={
 lead:L3("In Austria, there is no separate blank vote: a ballot with no party or candidate marked is invalid.","En Autriche, il n'existe pas de vote blanc à part : un bulletin sans parti ni candidat coché est invalide.","En Austria no existe un voto en blanco separado: una papeleta sin partido ni candidato marcado es nula."),
 what:[
  [L3("A ballot is invalid if no party or candidate is marked, if two or more parties are marked, or if the mark does not clearly show the choice. An empty envelope counts as an invalid ballot.","Un bulletin est invalide si aucun parti ni candidat n'est coché, si deux partis ou plus le sont, ou si la marque ne montre pas clairement le choix. Une enveloppe vide compte comme un bulletin invalide.","Una papeleta es nula si no se marca ningún partido ni candidato, si se marcan dos o más partidos o si la marca no muestra claramente la elección. Un sobre vacío cuenta como papeleta nula."),U.at81],
  [L3("Words or signs on the ballot that are not party or candidate marks do not by themselves make it invalid.","Des mots ou des signes sur le bulletin qui ne désignent ni parti ni candidat ne le rendent pas invalide à eux seuls.","Palabras o signos en la papeleta que no designan partido ni candidato no la anulan por sí solos."),U.at81]
 ],
 count:[
  [L3("Invalid votes count in turnout but go to no party: seats are shared out among valid votes.","Les votes invalides comptent dans la participation mais ne vont à aucun parti : les sièges se répartissent sur les votes valides.","Los votos nulos cuentan en la participación pero no van a ningún partido: los escaños se reparten entre los votos válidos."),U.at24]
 ],
 nums:[
  [0.95,L3("of votes cast were invalid in the September 2024 general election (about 46,900 of 4,929,745), with a turnout of 77.68%.","des votes exprimés étaient invalides aux législatives de septembre 2024 (environ 46 900 sur 4 929 745), pour une participation de 77,68 %.","de los votos emitidos fueron nulos en las legislativas de septiembre de 2024 (unos 46 900 de 4 929 745), con una participación del 77,68 %."),U.at24]
 ],
 impact:[
  [L3("An empty ballot and a spoilt one end up in the same category: they show up in turnout, not in seats.","Un bulletin vide et un bulletin raté finissent dans la même catégorie : ils apparaissent dans la participation, pas dans les sièges.","Una papeleta vacía y una mal rellenada acaban en la misma categoría: aparecen en la participación, no en los escaños."),U.at24]
 ]
};
})();
// ---- rollout batch 3 (14 Nov 2026): Ireland, Greece, Sweden, Switzerland, Poland ----
(function(){
var U={
 ieLL:"https://www.leinsterleader.ie/news/national-news/1668186/beware-people-are-spoiling-their-vote-in-general-election-2024-with-honest-mistake.html",
 ie25:"https://www.rte.ie/news/2025/1025/1540616-election-result-in-numbers",
 ieWhy:"https://analysis.irelandthinks.ie/who-are-the-people-who-spoiled-their-ballot-and-why/",
 grYpes:"https://www.powergame.gr/politiki/468634/ypes-20-erotiseis-apantiseis-gia-tis-ekloges-tis-kyriakis",
 gr23:"https://www.iefimerida.gr/ekloges/ekloges-2023-telika-apotelesmata",
 seVpn:"https://www.riksdagen.se/sv/dokument-och-lagar/dokument/valprovningsnamndens-beslut/avsaknad-av-blanka-valsedlar-har-inte-ansetts_had34ec7ee/",
 seHb:"https://hurbra.se/rosta-blankt-2026/",
 chLdp:"https://www.droit-bilingue.ch/en-fr/1/16/161.1-12-17.html",
 ch12:"https://swissvotes.ch/vote/558.00/erwahrung-fr.pdf",
 plPkw:"https://eli.gov.pl/api/acts/DU/2023/2234/text.html",
 plRef:"https://www.infor.pl/prawo/nowosci-prawne/6340048,wynik-referendum-nie-jest-wiazacy-pkw-podala-frekwencje.html"
};
BLANK.ireland={
 lead:L3("In Ireland, there is no blank vote: an unmarked ballot is a spoilt vote. In 2025, spoiling became a protest on a scale never seen before.","En Irlande, il n'existe pas de vote blanc : un bulletin laissé vide est un vote « gâché » (spoilt). En 2025, ce geste est devenu une protestation d'une ampleur inédite.","En Irlanda no existe el voto en blanco: una papeleta sin marcar es un voto «estropeado» (spoilt). En 2025, ese gesto se convirtió en una protesta de una magnitud inédita."),
 what:[
  [L3("You rank candidates: 1 for your first choice, 2 for the next, and so on. You may stop after one choice.","On classe les candidats : 1 pour le premier choix, 2 pour le suivant, et ainsi de suite. On peut s'arrêter après un seul choix.","Se ordena a los candidatos: 1 para la primera opción, 2 para la siguiente, y así sucesivamente. Se puede parar tras una sola opción."),U.ieLL],
  [L3("Spoilt votes: blank ballots, ticks or crosses instead of a “1”, an unclear order, illegible writing, unstamped ballots, or marks that identify the voter.","Votes gâchés : bulletins vides, coches ou croix au lieu d'un « 1 », ordre peu clair, écriture illisible, bulletin non tamponné, ou marques qui identifient l'électeur.","Votos estropeados: papeletas vacías, marcas o cruces en lugar de un «1», orden poco claro, escritura ilegible, papeletas sin sellar o marcas que identifican al elector."),U.ieLL]
 ],
 count:[
  [L3("Spoilt votes are counted and published, but do not count towards the result.","Les votes gâchés sont comptés et publiés, mais ne comptent pas pour le résultat.","Los votos estropeados se cuentan y se publican, pero no cuentan para el resultado."),U.ieLL]
 ],
 nums:[
  [12.9,L3("of ballots were spoilt in the October 2025 presidential election (213,738), against 1.2% in 2018: a record.","des bulletins ont été gâchés à la présidentielle d'octobre 2025 (213 738), contre 1,2 % en 2018 : un record.","de las papeletas fueron estropeadas en las presidenciales de octubre de 2025 (213 738), frente al 1,2 % en 2018: un récord."),U.ie25]
 ],
 impact:[
  [L3("A polling-day survey linked most of those spoilt ballots to a lack of choice, protest, or support for a would-be candidate who was not on the ballot. A campaign to spoil had spread online.","Un sondage du jour du vote a relié la plupart de ces bulletins gâchés à un manque de choix, à la protestation, ou au soutien à une candidate absente du bulletin. Une campagne pour gâcher son vote s'était diffusée en ligne.","Una encuesta del día de la votación vinculó la mayoría de esas papeletas estropeadas a la falta de opciones, a la protesta o al apoyo a una aspirante que no figuraba en la papeleta. Una campaña para estropear el voto se había difundido en internet."),U.ieWhy],
  [L3("The winner was still elected with the valid votes alone: a spoilt ballot sends a message but changes no result.","La gagnante a été élue avec les seuls votes valides : un bulletin gâché envoie un message mais ne change aucun résultat.","La ganadora fue elegida solo con los votos válidos: una papeleta estropeada envía un mensaje pero no cambia ningún resultado."),U.ie25]
 ]
};
BLANK.greece={
 lead:L3("In Greece, voting is compulsory under the electoral law, and blank ballots are counted separately from invalid ones.","En Grèce, voter est obligatoire selon la loi électorale, et les bulletins blancs sont comptés à part des bulletins invalides.","En Grecia, votar es obligatorio según la ley electoral, y las papeletas en blanco se cuentan aparte de las nulas."),
 what:[
  [L3("Compulsory voting: voters abroad on election day and those over 70 are exempt. The Interior Ministry's guide does not mention any penalty.","Vote obligatoire : les électeurs à l'étranger le jour du vote et les plus de 70 ans en sont dispensés. Le guide du ministère de l'Intérieur ne mentionne aucune sanction.","Voto obligatorio: los electores en el extranjero el día de la votación y los mayores de 70 años están exentos. La guía del Ministerio del Interior no menciona ninguna sanción."),U.grYpes],
  [L3("The ballot goes into a sealed, stamped envelope. In the June 2023 election, lists were closed, with no preference vote.","Le bulletin va dans une enveloppe fermée et tamponnée. Aux législatives de juin 2023, les listes étaient bloquées, sans vote de préférence.","La papeleta va en un sobre cerrado y sellado. En las legislativas de junio de 2023, las listas eran cerradas, sin voto preferencial."),U.grYpes]
 ],
 count:[
  [L3("Results list valid, invalid and blank ballots separately; only valid ballots go to parties.","Les résultats distinguent bulletins valides, invalides et blancs ; seuls les valides vont aux partis.","Los resultados distinguen papeletas válidas, nulas y en blanco; solo las válidas van a los partidos."),U.gr23]
 ],
 nums:[
  [0.57,L3("of ballots were blank in May 2023 (34,760), against 2.04% invalid (123,488).","des bulletins étaient blancs en mai 2023 (34 760), contre 2,04 % d'invalides (123 488).","de las papeletas fueron en blanco en mayo de 2023 (34 760), frente al 2,04 % de nulas (123 488)."),U.gr23],
  [39.06,L3("of voters abstained in May 2023, despite compulsory voting.","des électeurs se sont abstenus en mai 2023, malgré le vote obligatoire.","de los electores se abstuvieron en mayo de 2023, pese al voto obligatorio."),U.gr23]
 ],
 impact:[
  [L3("Where voting is compulsory but not enforced, a blank ballot and staying home lead to the same place in the results: neither counts for a party.","Là où le vote est obligatoire sans sanction appliquée, un bulletin blanc et l'abstention mènent au même endroit dans les résultats : ni l'un ni l'autre ne compte pour un parti.","Donde el voto es obligatorio sin sanción aplicada, una papeleta en blanco y la abstención llevan al mismo lugar en los resultados: ninguna cuenta para un partido."),U.gr23]
 ]
};
BLANK.sweden={
 lead:L3("In Sweden, you vote blank with a blank ballot paper put alone in the envelope. Blank votes are published, but they are invalid votes.","En Suède, on vote blanc avec un bulletin vierge glissé seul dans l'enveloppe. Les votes blancs sont publiés, mais ce sont des votes invalides.","En Suecia, se vota en blanco con una papeleta en blanco colocada sola en el sobre. Los votos en blanco se publican, pero son votos no válidos."),
 what:[
  [L3("Polling stations must offer ballot papers with only the election name on them: you can write a party on them, or leave them empty to vote blank.","Les bureaux de vote doivent proposer des bulletins qui ne portent que le nom de l'élection : on peut y écrire un parti, ou les laisser vides pour voter blanc.","Los colegios electorales deben ofrecer papeletas que solo llevan el nombre de la elección: se puede escribir un partido en ellas o dejarlas vacías para votar en blanco."),U.seVpn],
  [L3("Careful: an envelope with no ballot inside is not a blank vote; it is recorded as “invalid – other”.","Attention : une enveloppe sans bulletin n'est pas un vote blanc ; elle est enregistrée comme « invalide – autre ».","Atención: un sobre sin papeleta no es un voto en blanco; se registra como «no válido – otro»."),U.seHb]
 ],
 count:[
  [L3("A ballot without a party name is invalid. Blank votes count in turnout but not among valid votes, so they do not affect the 4% threshold.","Un bulletin sans nom de parti est invalide. Les blancs comptent dans la participation mais pas parmi les votes valides : ils ne touchent donc pas au seuil de 4 %.","Una papeleta sin nombre de partido no es válida. Los votos en blanco cuentan en la participación pero no entre los votos válidos: no afectan, por tanto, al umbral del 4 %."),U.seHb]
 ],
 nums:[
  [0.95,L3("of the 6.55 million votes in the 2022 Riksdag election were blank: just over 62,000 of the 70,000 invalid votes.","des 6,55 millions de votes des législatives de 2022 étaient blancs : un peu plus de 62 000 des 70 000 votes invalides.","de los 6,55 millones de votos de las legislativas de 2022 fueron en blanco: algo más de 62 000 de los 70 000 votos no válidos."),U.seHb]
 ],
 impact:[
  [L3("Since blank votes stay outside valid votes, a party's share and the 4% bar are calculated without them.","Comme les blancs restent hors des votes valides, la part de chaque parti et la barre des 4 % se calculent sans eux.","Como los votos en blanco quedan fuera de los válidos, la cuota de cada partido y la barrera del 4 % se calculan sin ellos."),U.seHb]
 ]
};
BLANK.switzerland={
 lead:L3("In Switzerland, people vote several times a year on laws and initiatives. Blank ballots are counted, but they do not enter the yes-no result.","En Suisse, on vote plusieurs fois par an sur des lois et des initiatives. Les bulletins blancs sont comptés, mais n'entrent pas dans le résultat oui-non.","En Suiza se vota varias veces al año sobre leyes e iniciativas. Las papeletas en blanco se cuentan, pero no entran en el resultado sí-no."),
 what:[
  [L3("Blank ballot: a ballot handed in without a yes or a no.","Bulletin blanc : un bulletin rendu sans oui ni non.","Papeleta en blanco: una papeleta entregada sin sí ni no."),U.ch12],
  [L3("Void ballot: not official, not filled in by hand, intention not clearly recognisable, or carrying defamatory remarks or obviously irrelevant markings.","Bulletin nul : non officiel, non rempli à la main, intention pas clairement reconnaissable, ou portant des remarques injurieuses ou des marques manifestement étrangères au vote.","Papeleta nula: no oficial, no rellenada a mano, intención no reconocible con claridad, o con comentarios injuriosos o marcas manifiestamente ajenas a la votación."),U.chLdp]
 ],
 count:[
  [L3("In the official results, blank and void ballots are listed as “not taken into account”; only valid ballots, the yes and the no, decide.","Dans les résultats officiels, les bulletins blancs et nuls sont classés « n'entrant pas en ligne de compte » ; seuls les bulletins valables, les oui et les non, décident.","En los resultados oficiales, las papeletas en blanco y nulas figuran como «que no se tienen en cuenta»; solo deciden las válidas, el sí y el no."),U.ch12]
 ],
 nums:[
  [1.7,L3("of ballots were blank in the March 2012 vote on second homes (38,798), more than the margin by which the initiative passed (28,796 votes).","des bulletins étaient blancs à la votation de mars 2012 sur les résidences secondaires (38 798), plus que l'écart avec lequel l'initiative est passée (28 796 voix).","de las papeletas fueron en blanco en la votación de marzo de 2012 sobre las segundas residencias (38 798), más que la diferencia con la que se aprobó la iniciativa (28 796 votos)."),U.ch12]
 ],
 impact:[
  [L3("In 2012, the second-homes initiative passed with 1,152,598 yes against 1,123,802 no. The blank ballots outnumbered the gap: on a close vote, those who decide are those who choose yes or no.","En 2012, l'initiative sur les résidences secondaires est passée avec 1 152 598 oui contre 1 123 802 non. Les bulletins blancs dépassaient l'écart : sur un vote serré, ceux qui décident sont ceux qui choisissent oui ou non.","En 2012, la iniciativa sobre las segundas residencias se aprobó con 1 152 598 síes frente a 1 123 802 noes. Las papeletas en blanco superaban la diferencia: en una votación reñida, deciden quienes eligen sí o no."),U.ch12]
 ]
};
BLANK.poland={
 lead:L3("In Poland, there is no blank vote: a ballot without any cross is an invalid vote, counted with the others.","En Pologne, il n'existe pas de vote blanc : un bulletin sans aucune croix est un vote invalide, compté avec les autres.","En Polonia no existe el voto en blanco: una papeleta sin ninguna cruz es un voto nulo, contado con los demás."),
 what:[
  [L3("Invalid vote: no cross next to any candidate, crosses next to candidates of different lists, or a cross only for a list whose registration was cancelled.","Vote invalide : aucune croix devant un candidat, des croix devant des candidats de listes différentes, ou une croix seulement pour une liste dont l'enregistrement a été annulé.","Voto nulo: ninguna cruz junto a un candidato, cruces junto a candidatos de listas distintas, o una cruz solo para una lista cuyo registro fue anulado."),U.plPkw]
 ],
 count:[
  [L3("The electoral commission publishes invalid votes by reason; they go to no list.","La commission électorale publie les votes invalides par motif ; ils ne vont à aucune liste.","La comisión electoral publica los votos nulos por motivo; no van a ninguna lista."),U.plPkw],
  [L3("A national referendum is binding only if more than half of the voters take part.","Un référendum national n'est contraignant que si plus de la moitié des électeurs y participent.","Un referéndum nacional solo es vinculante si participa más de la mitad de los electores."),U.plRef]
 ],
 nums:[
  [1.69,L3("of votes were invalid in the October 2023 Sejm election (370,217), including 144,870 ballots with no cross at all, with a turnout of 74.38%.","des votes étaient invalides aux législatives d'octobre 2023 (370 217), dont 144 870 bulletins sans aucune croix, pour une participation de 74,38 %.","de los votos fueron nulos en las legislativas de octubre de 2023 (370 217), entre ellos 144 870 papeletas sin ninguna cruz, con una participación del 74,38 %."),U.plPkw],
  [40.91,L3("turnout in the referendum held the same day: below 50%, so the result was not binding.","de participation au référendum organisé le même jour : sous les 50 %, le résultat n'était donc pas contraignant.","de participación en el referéndum celebrado el mismo día: por debajo del 50 %, el resultado no fue vinculante."),U.plRef]
 ],
 impact:[
  [L3("In 2023 the same voters received a Sejm ballot and a referendum ballot: in a referendum with a turnout quorum, not taking part and taking part do not have the same effect.","En 2023, les mêmes électeurs recevaient un bulletin pour la Diète et un pour le référendum : dans un référendum à quorum, ne pas participer et participer n'ont pas le même effet.","En 2023, los mismos electores recibían una papeleta para el Sejm y otra para el referéndum: en un referéndum con quórum, no participar y participar no tienen el mismo efecto."),U.plRef]
 ]
};
})();
// ---- rollout batch 4 (14 Nov 2026): Czechia, Romania, Serbia, Australia, New Zealand ----
(function(){
var U={
 czFin:"https://www.finance.cz/553389-kdy-se-vas-hlas-v-parlamentnich-volbach-nezapocte-a-propadne",
 czSez:"https://www.seznamzpravy.cz/clanek/propadl-milion-hlasu-petina-volicu-nerozhodovala-o-slozeni-snemovny-177285",
 roBec:"https://www.g4media.ro/cand-un-vot-este-valabil-exprimat-si-cand-este-considerat-nul-precizari-ale-biroului-electoral-central.html",
 roRes:"https://www.digi24.ro/alegeri-parlamentare-2024/biroul-electoral-central-a-prezentat-rezultatele-finale-la-alegerile-parlamentare-3037971",
 rs26:"https://n1info.rs/english/news/election-commission-announces-final-results-of-parliamentary-elections/",
 auInf:"https://www.aec.gov.au/About_AEC/research/files/analysis-informal-voting-2025-election.pdf",
 auPart:"https://aec.gov.au/election/fe25/participation-rates.htm",
 nz23:"https://elections.nz/media-and-news/2023/official-results-for-the-2023-general-election/"
};
BLANK.czechia={
 lead:L3("In Czechia, there is no blank vote: an envelope left empty is a lost vote.","En Tchéquie, il n'existe pas de vote blanc : une enveloppe laissée vide est un vote perdu.","En Chequia no existe el voto en blanco: un sobre vacío es un voto perdido."),
 what:[
  [L3("Each voter receives one ballot per party list and puts one of them in the official envelope.","Chaque électeur reçoit un bulletin par liste et en glisse un seul dans l'enveloppe officielle.","Cada elector recibe una papeleta por lista y mete una sola en el sobre oficial."),U.czFin],
  [L3("Lost or invalid vote: an empty envelope, more than one ballot, another envelope than the official one, or a torn or glued ballot. Circling more than four candidates only cancels the preference votes; the vote for the party still counts.","Vote perdu ou invalide : enveloppe vide, plus d'un bulletin, autre enveloppe que l'officielle, bulletin déchiré ou collé. Entourer plus de quatre candidats annule seulement les voix de préférence ; la voix pour le parti compte toujours.","Voto perdido o nulo: sobre vacío, más de una papeleta, otro sobre que el oficial, papeleta rota o pegada. Rodear a más de cuatro candidatos solo anula los votos preferenciales; el voto al partido sigue contando."),U.czFin]
 ],
 count:[
  [L3("Only valid votes are shared out, and only among parties above the 5% threshold.","Seuls les votes valides sont répartis, et seulement entre les partis au-dessus du seuil de 5 %.","Solo se reparten los votos válidos, y solo entre los partidos por encima del umbral del 5 %."),U.czSez]
 ],
 nums:[
  [19.9,L3("of valid votes in 2021 went to parties below the 5% threshold: about 1.07 million votes that elected no one.","des votes valides de 2021 sont allés à des partis sous le seuil de 5 % : environ 1,07 million de voix qui n'ont élu personne.","de los votos válidos de 2021 fueron a partidos por debajo del umbral del 5 %: cerca de 1,07 millones de votos que no eligieron a nadie."),U.czSez]
 ],
 impact:[
  [L3("Besides empty envelopes, a vote can also weigh nothing in seats when it goes to a party that stays below 5%. Both kinds of “lost” votes leave the seats to the others.","En plus des enveloppes vides, un vote peut aussi ne peser sur aucun siège quand il va à un parti qui reste sous les 5 %. Ces deux sortes de voix « perdues » laissent les sièges aux autres.","Además de los sobres vacíos, un voto tampoco pesa en los escaños cuando va a un partido que queda por debajo del 5 %. Esos dos tipos de votos «perdidos» dejan los escaños a los demás."),U.czSez]
 ]
};
BLANK.romania={
 lead:L3("In Romania, there is no blank vote: you vote with a “VOTAT” stamp, and a ballot without it is null.","En Roumanie, il n'existe pas de vote blanc : on vote avec un tampon « VOTAT », et un bulletin sans tampon est nul.","En Rumanía no existe el voto en blanco: se vota con un sello «VOTAT», y una papeleta sin sello es nula."),
 what:[
  [L3("Valid vote: the stamp inside a single box. A stamp that slightly overflows without touching another box still counts, and handwritten notes do not cancel a vote that has a stamp inside a box.","Vote valable : le tampon dans une seule case. Un tampon qui déborde sans toucher une autre case compte quand même, et des mots écrits à la main n'annulent pas un vote tamponné dans une case.","Voto válido: el sello dentro de una sola casilla. Un sello que desborda sin tocar otra casilla cuenta igualmente, y las notas a mano no anulan un voto con sello dentro de una casilla."),U.roBec],
  [L3("Null vote: no stamp at all, a stamp touching another box, stamps on several boxes or outside them, or a ballot without the polling station's control stamp.","Vote nul : aucun tampon, un tampon qui touche une autre case, des tampons sur plusieurs cases ou hors des cases, ou un bulletin sans le cachet de contrôle du bureau.","Voto nulo: ningún sello, un sello que toca otra casilla, sellos en varias casillas o fuera de ellas, o una papeleta sin el sello de control de la mesa."),U.roBec]
 ],
 count:[
  [L3("Seats are shared out among valid votes; the seven parties that entered the Chamber in December 2024 each had more than 5% of them.","Les sièges se répartissent sur les votes valides ; les sept partis entrés à la Chambre en décembre 2024 en avaient chacun plus de 5 %.","Los escaños se reparten sobre los votos válidos; los siete partidos que entraron en la Cámara en diciembre de 2024 tenían cada uno más del 5 %."),U.roRes]
 ],
 impact:[
  [L3("Choosing no one means handing in a ballot without a valid stamp: it is counted as null, in the same category as mistakes.","Ne choisir personne revient à rendre un bulletin sans tampon valable : il est compté nul, dans la même catégorie que les erreurs.","No elegir a nadie equivale a entregar una papeleta sin sello válido: se cuenta como nula, en la misma categoría que los errores."),U.roBec]
 ]
};
BLANK.serbia={
 lead:L3("In Serbia, the official results show no separate blank vote: only valid and invalid ballots.","En Serbie, les résultats officiels ne distinguent pas de vote blanc : seulement des bulletins valables et invalides.","En Serbia, los resultados oficiales no distinguen un voto en blanco: solo papeletas válidas y nulas."),
 what:[
  [L3("Official results give registered voters, ballots cast and valid ballots; the difference is the invalid ballots.","Les résultats officiels donnent les inscrits, les bulletins déposés et les bulletins valables ; la différence correspond aux bulletins invalides.","Los resultados oficiales dan los inscritos, las papeletas depositadas y las válidas; la diferencia corresponde a las nulas."),U.rs26]
 ],
 count:[
  [L3("Seats are shared out among the lists on valid ballots only.","Les sièges se répartissent entre les listes sur les seuls bulletins valables.","Los escaños se reparten entre las listas solo sobre las papeletas válidas."),U.rs26]
 ],
 nums:[
  [1.27,L3("of ballots cast were invalid in the 2026 parliamentary election (56,571 of 4,441,636), with a turnout of about 68.9%.","des bulletins déposés étaient invalides aux législatives de 2026 (56 571 sur 4 441 636), pour une participation d'environ 68,9 %.","de las papeletas depositadas fueron nulas en las legislativas de 2026 (56 571 de 4 441 636), con una participación de cerca del 68,9 %."),U.rs26]
 ],
 impact:[
  [L3("An invalid ballot is counted in turnout but not in any list's share.","Un bulletin invalide compte dans la participation mais dans la part d'aucune liste.","Una papeleta nula cuenta en la participación pero en la cuota de ninguna lista."),U.rs26]
 ]
};
BLANK.australia={
 lead:L3("In Australia, voting is compulsory. Turning up and handing in a blank ballot is what the electoral commission calls an “intentionally informal” vote.","En Australie, voter est obligatoire. Se présenter et rendre un bulletin vide, c'est ce que la commission électorale appelle un vote « informel volontaire ».","En Australia votar es obligatorio. Presentarse y entregar una papeleta vacía es lo que la comisión electoral llama un voto «informal intencionado»."),
 what:[
  [L3("Voters number the candidates in order of preference. An informal vote is one that cannot count: blank, only a “1” where all boxes must be numbered, wrong numbering, or a ballot that identifies the voter.","On numérote les candidats par ordre de préférence. Un vote « informel » est un vote qui ne peut pas compter : vide, un seul « 1 » là où toutes les cases doivent être numérotées, numérotation erronée, ou bulletin qui identifie l'électeur.","Se numeran los candidatos por orden de preferencia. Un voto «informal» es el que no puede contar: vacío, un solo «1» donde hay que numerar todas las casillas, numeración errónea o papeleta que identifica al elector."),U.auInf],
  [L3("The commission notes that a compulsory voting system always has some deliberate informality: people attend, are marked off, and return a ballot without a formal vote.","La commission note qu'un système de vote obligatoire comporte toujours une part d'informalité volontaire : des électeurs se présentent, sont pointés, et rendent un bulletin sans vote valable.","La comisión señala que un sistema de voto obligatorio siempre tiene cierta informalidad deliberada: los electores acuden, se les marca en el censo y devuelven una papeleta sin voto válido."),U.auInf]
 ],
 count:[
  [L3("Informal votes count for no candidate and are excluded from the preference count.","Les votes informels ne comptent pour aucun candidat et sont exclus du décompte des préférences.","Los votos informales no cuentan para ningún candidato y quedan fuera del recuento de preferencias."),U.auInf]
 ],
 nums:[
  [5.6,L3("of House of Representatives ballots were informal in 2025 (919,512), for a turnout of 90.7% of enrolled voters.","des bulletins pour la Chambre des représentants étaient informels en 2025 (919 512), pour une participation de 90,7 % des inscrits.","de las papeletas para la Cámara de Representantes fueron informales en 2025 (919 512), con una participación del 90,7 % de los inscritos."),U.auPart],
  [25.2,L3("of informal ballots examined in the commission's sample were blank; the others were mostly numbering mistakes.","des bulletins informels examinés dans l'échantillon de la commission étaient vides ; les autres étaient surtout des erreurs de numérotation.","de las papeletas informales examinadas en la muestra de la comisión estaban vacías; las demás eran sobre todo errores de numeración."),U.auInf]
 ],
 impact:[
  [L3("With compulsory voting, blank ballots are mixed with honest mistakes in the same informal pile: most informal votes are errors, not protests.","Avec le vote obligatoire, les bulletins vides se mêlent aux erreurs sincères dans la même pile « informelle » : la plupart des votes informels sont des erreurs, pas des protestations.","Con el voto obligatorio, las papeletas vacías se mezclan con los errores sinceros en el mismo montón «informal»: la mayoría de los votos informales son errores, no protestas."),U.auInf]
 ]
};
BLANK.newzealand={
 lead:L3("In New Zealand, each voter has two votes, one for a party and one for a local candidate. A party vote that cannot count is “informal”.","En Nouvelle-Zélande, chaque électeur a deux voix, l'une pour un parti, l'autre pour un candidat local. Une voix de parti qui ne peut pas compter est dite « informelle ».","En Nueva Zelanda, cada elector tiene dos votos, uno para un partido y otro para un candidato local. Un voto de partido que no puede contar se llama «informal»."),
 what:[
  [L3("Informal party votes are published separately from valid ones and go to no party.","Les voix de parti informelles sont publiées à part des voix valables et ne vont à aucun parti.","Los votos de partido informales se publican aparte de los válidos y no van a ningún partido."),U.nz23]
 ],
 count:[
  [L3("Seats in Parliament are shared out according to the valid party votes.","Les sièges au Parlement se répartissent selon les voix de parti valables.","Los escaños del Parlamento se reparten según los votos de partido válidos."),U.nz23]
 ],
 nums:[
  [0.56,L3("of votes cast were informal party votes in 2023 (16,252 of 2,883,412), for a turnout of 78.2% of enrolled voters.","des votes exprimés étaient des voix de parti informelles en 2023 (16 252 sur 2 883 412), pour une participation de 78,2 % des inscrits.","de los votos emitidos fueron votos de partido informales en 2023 (16 252 de 2 883 412), con una participación del 78,2 % de los inscritos."),U.nz23]
 ],
 impact:[
  [L3("Because the party vote decides the shape of Parliament, a party vote left informal weighs on no party's seats.","Comme la voix de parti décide de la composition du Parlement, une voix de parti laissée informelle ne pèse sur les sièges d'aucun parti.","Como el voto de partido decide la composición del Parlamento, un voto de partido informal no pesa en los escaños de ningún partido."),U.nz23]
 ]
};
})();
// ---- rollout batch 5 (14 Nov 2026): Argentina, Brazil, South Africa, Senegal ----
(function(){
var U={
 arChq:"https://chequeado.com/el-explicador/elecciones-2025-que-se-considera-voto-afirmativo-en-blanco-nulo-y-recurrido-con-la-boleta-unica-de-papel/",
 arOb:"https://www.econoblog.com.ar/151025/ciudadanos-pueden-justificar-su-falta-de-voto-para-no-pagar-la-multa/",
 brTse:"https://www.tse.jus.br/comunicacao/noticias/2026/Setembro/faltam-17-dias-votos-nulos-e-brancos-nao-anulam-a-eleicao",
 br26:"https://www.congressoemfoco.com.br/noticia/122744/saldo-das-urnas-abstencoes-nulos-e-brancos-na-eleicao-de-2026",
 za24:"https://theoutlier.co.za/politics/2024-06-03/87478/voter-enthusiasm-dips",
 snDge:"https://dge.sn/wp-content/uploads/2024/11/OK-Guide-bureau-de-vote-legislatives-17-novembre-2024.pdf"
};
BLANK.argentina={
 lead:L3("In Argentina, voting is compulsory from 18 to 70. Since 2025, with the single paper ballot, a blank vote means leaving a category unmarked.","En Argentine, voter est obligatoire de 18 à 70 ans. Depuis 2025, avec le bulletin unique en papier, voter blanc consiste à ne rien cocher dans une catégorie.","En Argentina, votar es obligatorio de 18 a 70 años. Desde 2025, con la boleta única de papel, votar en blanco es no marcar nada en una categoría."),
 what:[
  [L3("Blank vote: no preference marked in one or more categories of the ballot.","Vote blanc : aucune préférence cochée dans une ou plusieurs catégories du bulletin.","Voto en blanco: ninguna preferencia marcada en una o más categorías de la boleta."),U.arChq],
  [L3("Null vote: marks for different lists in the same category, a ballot torn so the choice cannot be read, writing that hides the choice, or foreign objects inside.","Vote nul : des marques pour des listes différentes dans la même catégorie, un bulletin déchiré au point que le choix est illisible, des inscriptions qui empêchent d'identifier le choix, ou des objets glissés à l'intérieur.","Voto nulo: marcas para distintas agrupaciones en la misma categoría, una boleta rota de modo que no se puede leer la opción, inscripciones que impiden identificarla u objetos extraños dentro."),U.arChq],
  [L3("Not voting without a valid reason brings a fine of 50 to 500 pesos and, if unpaid, restrictions such as being barred from public posts for three years.","Ne pas voter sans motif valable expose à une amende de 50 à 500 pesos et, si elle n'est pas payée, à des restrictions, comme l'interdiction d'occuper un emploi public pendant trois ans.","No votar sin motivo válido supone una multa de 50 a 500 pesos y, si no se paga, restricciones como la inhabilitación para cargos públicos durante tres años."),U.arOb]
 ],
 count:[
  [L3("Blank votes are counted separately from null votes. Because the ballot lists several categories, a voter can choose in one and leave another blank.","Les votes blancs sont comptés à part des votes nuls. Comme le bulletin compte plusieurs catégories, on peut choisir dans l'une et laisser l'autre en blanc.","Los votos en blanco se cuentan aparte de los nulos. Como la boleta tiene varias categorías, se puede elegir en una y dejar otra en blanco."),U.arChq]
 ],
 impact:[
  [L3("Where voting is compulsory, a blank vote is the legal way to go to the polls without choosing; staying home exposes you to a fine.","Là où le vote est obligatoire, voter blanc est la façon légale de se rendre aux urnes sans choisir ; rester chez soi expose à une amende.","Donde el voto es obligatorio, votar en blanco es la forma legal de ir a votar sin elegir; quedarse en casa expone a una multa."),U.arOb]
 ]
};
BLANK.brazil={
 lead:L3("In Brazil, voting is compulsory and electronic: the machine has a “BRANCO” key. Blank and null votes are not valid votes, and they do not cancel the election.","Au Brésil, le vote est obligatoire et électronique : la machine a une touche « BRANCO ». Les votes blancs et nuls ne sont pas des votes valides, et ils n'annulent pas l'élection.","En Brasil, el voto es obligatorio y electrónico: la urna tiene una tecla «BRANCO». Los votos en blanco y nulos no son votos válidos y no anulan la elección."),
 what:[
  [L3("Blank vote: press the BRANCO key on the voting machine.","Vote blanc : appuyer sur la touche BRANCO de l'urne électronique.","Voto en blanco: pulsar la tecla BRANCO de la urna electrónica."),U.brTse],
  [L3("Null vote: type a number that matches no candidate.","Vote nul : taper un numéro qui ne correspond à aucun candidat.","Voto nulo: teclear un número que no corresponde a ningún candidato."),U.brTse]
 ],
 count:[
  [L3("Neither blank nor null votes count as valid votes, and a high number of them does not cancel the election, contrary to a widespread rumour.","Ni les blancs ni les nuls ne comptent comme votes valides, et leur grand nombre n'annule pas l'élection, contrairement à une rumeur répandue.","Ni los votos en blanco ni los nulos cuentan como válidos, y un número elevado no anula la elección, contrariamente a un rumor muy extendido."),U.brTse],
  [L3("The president is elected with a majority of valid votes: blank and null votes are left out of that calculation.","Le président est élu à la majorité des votes valides : blancs et nuls restent hors de ce calcul.","El presidente se elige por mayoría de votos válidos: blancos y nulos quedan fuera de ese cálculo."),U.br26]
 ],
 nums:[
  [1.84,L3("of presidential votes were blank in the first round of October 2026 (2.3 million), and 2.93% null (3.7 million).","des votes pour la présidentielle étaient blancs au premier tour d'octobre 2026 (2,3 millions), et 2,93 % nuls (3,7 millions).","de los votos presidenciales fueron en blanco en la primera vuelta de octubre de 2026 (2,3 millones), y el 2,93 % nulos (3,7 millones)."),U.br26],
  [21.08,L3("of voters abstained, despite compulsory voting (33.5 million).","des électeurs se sont abstenus, malgré le vote obligatoire (33,5 millions).","de los electores se abstuvieron, pese al voto obligatorio (33,5 millones)."),U.br26]
 ],
 impact:[
  [L3("Because they stay out of the valid votes, blank and null votes make it slightly easier to reach the majority of valid votes: they decide nothing themselves.","Comme ils restent hors des votes valides, blancs et nuls rendent un peu plus facile d'atteindre la majorité des votes valides : eux-mêmes ne décident rien.","Como quedan fuera de los votos válidos, blancos y nulos facilitan algo alcanzar la mayoría de votos válidos: por sí mismos no deciden nada."),U.br26]
 ]
};
BLANK.southafrica={
 lead:L3("In South Africa, there is no blank vote: a ballot that cannot count is a spoilt ballot.","En Afrique du Sud, il n'existe pas de vote blanc : un bulletin qui ne peut pas compter est un bulletin gâché (spoilt).","En Sudáfrica no existe el voto en blanco: una papeleta que no puede contar es una papeleta anulada (spoilt)."),
 what:[
  [L3("Spoilt ballots are counted and published separately from valid votes.","Les bulletins gâchés sont comptés et publiés à part des votes valides.","Las papeletas anuladas se cuentan y publican aparte de los votos válidos."),U.za24]
 ],
 count:[
  [L3("Seats in the National Assembly are shared out in proportion to valid votes.","Les sièges de l'Assemblée nationale se répartissent à la proportionnelle des votes valides.","Los escaños de la Asamblea Nacional se reparten en proporción a los votos válidos."),U.za24]
 ],
 nums:[
  [1.3,L3("of votes were spoilt on the national ballot in 2024 (213,437 of 16.3 million), with a turnout below 60% for the first time since 1994 (58.6%).","des votes ont été gâchés sur le bulletin national en 2024 (213 437 sur 16,3 millions), pour une participation passée sous les 60 % pour la première fois depuis 1994 (58,6 %).","de los votos fueron anulados en la papeleta nacional en 2024 (213 437 de 16,3 millones), con una participación por debajo del 60 % por primera vez desde 1994 (58,6 %)."),U.za24]
 ],
 impact:[
  [L3("With pure proportional representation, every valid vote moves the share of seats; a spoilt ballot moves none.","Avec une proportionnelle intégrale, chaque vote valide fait bouger la répartition des sièges ; un bulletin gâché n'en fait bouger aucun.","Con una representación proporcional pura, cada voto válido mueve el reparto de escaños; una papeleta anulada no mueve ninguno."),U.za24]
 ]
};
BLANK.senegal={
 lead:L3("In Senegal, the voter takes several list ballots and puts only one in the envelope. The official guide provides for no blank vote.","Au Sénégal, l'électeur prend plusieurs bulletins de listes et n'en glisse qu'un dans l'enveloppe. Le guide officiel ne prévoit pas de vote blanc.","En Senegal, el elector toma varias papeletas de listas y solo mete una en el sobre. La guía oficial no prevé el voto en blanco."),
 what:[
  [L3("Voting: take one envelope and at least five ballots (when five or more lists compete), put one ballot in the envelope in the booth, throw the others away.","Pour voter : prendre une enveloppe et au moins cinq bulletins (quand au moins cinq listes sont en lice), glisser un bulletin dans l'enveloppe dans l'isoloir, jeter les autres.","Para votar: tomar un sobre y al menos cinco papeletas (cuando compiten cinco listas o más), meter una papeleta en el sobre en la cabina y tirar las demás."),U.snDge],
  [L3("Null ballots, in a list the guide calls exhaustive: ballots of different lists in one envelope, ballots on which the voter made himself known, ballots without an envelope or in a non-regulation one, identifying marks, non-regulation ballots. A simple stain is not grounds for nullity.","Bulletins nuls, selon une liste que le guide dit limitative : bulletins de listes différentes dans la même enveloppe, bulletins où l'électeur s'est fait connaître, bulletins sans enveloppe ou dans une enveloppe non réglementaire, signes de reconnaissance, bulletins non réglementaires. Une simple tache n'est pas une cause de nullité.","Papeletas nulas, según una lista que la guía considera cerrada: papeletas de listas distintas en un mismo sobre, papeletas en las que el elector se dio a conocer, papeletas sin sobre o en un sobre no reglamentario, señales de reconocimiento, papeletas no reglamentarias. Una simple mancha no es causa de nulidad."),U.snDge]
 ],
 count:[
  [L3("The guide does not say how an empty envelope is treated: it is neither in the list of null ballots nor described as a blank vote.","Le guide ne dit pas comment est traitée une enveloppe vide : elle ne figure ni dans la liste des bulletins nuls, ni comme vote blanc.","La guía no dice cómo se trata un sobre vacío: no figura en la lista de papeletas nulas ni como voto en blanco."),U.snDge]
 ],
 impact:[
  [L3("Without a recognised blank vote, choosing no one leaves no trace in the results other than turnout.","Sans vote blanc reconnu, ne choisir personne ne laisse aucune trace dans les résultats, sinon dans la participation.","Sin voto en blanco reconocido, no elegir a nadie no deja rastro en los resultados, salvo en la participación."),U.snDge]
 ]
};
})();
(function(){
BLANK.singapore={
 lead:L3("In Singapore, voting is compulsory but there is no blank-vote option: an unmarked ballot is rejected. Rejected votes count in turnout, not in the result.","À Singapour, le vote est obligatoire mais il n’existe pas de vote blanc : un bulletin non rempli est rejeté. Les votes rejetés comptent dans la participation, pas dans le résultat.","En Singapur el voto es obligatorio, pero no existe el voto en blanco: una papeleta sin marcar se rechaza. Los votos rechazados cuentan en la participación, no en el resultado."),
 what:[
  [L3("How to vote: mark one box clearly with an “X”. Do not sign or write anything that could identify you.","Pour voter : cocher clairement une case d’une croix (« X »). Ne pas signer ni écrire quoi que ce soit qui permette de vous identifier.","Cómo votar: marcar claramente una casilla con una «X». No firmar ni escribir nada que permita identificarle."),"https://www.eld.gov.sg/voters_how.html"],
  [L3("A ballot is rejected if it is unmarked, marks more than one candidate or team, carries writing that identifies the voter (a signature, an NRIC number), lacks the complete official mark, or is void for uncertainty. A mark other than a cross still counts if the choice is clear.","Un bulletin est rejeté s’il n’est pas rempli, s’il désigne plus d’un candidat ou d’une équipe, s’il porte une écriture permettant d’identifier l’électeur (signature, numéro NRIC), s’il n’a pas le cachet officiel complet ou s’il est nul pour incertitude. Une marque autre qu’une croix compte quand même si le choix est clair.","Una papeleta se rechaza si está sin marcar, si señala a más de un candidato o equipo, si lleva escritura que identifique al votante (firma, número NRIC), si le falta el sello oficial completo o si es nula por incertidumbre. Una marca distinta de una cruz cuenta igualmente si la elección es clara."),"https://www.eld.gov.sg/candidate_parliamentary_counting.html"]
 ],
 count:[
  [L3("Rejected votes are part of the votes cast but not of the result: the PAP’s 65.57% in 2025 is a share of the 2,395,665 valid votes, not of the 2,438,610 votes cast. The 2% recount threshold is also calculated without rejected votes.","Les votes rejetés font partie des votes exprimés mais pas du résultat : les 65,57 % du PAP en 2025 sont une part des 2 395 665 votes valides, et non des 2 438 610 votes exprimés. Le seuil de 2 % qui déclenche un recomptage est lui aussi calculé sans les votes rejetés.","Los votos rechazados forman parte de los votos emitidos pero no del resultado: el 65,57 % del PAP en 2025 es una parte de los 2.395.665 votos válidos, no de los 2.438.610 votos emitidos. El umbral del 2 % para un recuento también se calcula sin los votos rechazados."),"https://www.eld.gov.sg/candidate_parliamentary_counting.html"],
  [L3("Voting is compulsory: non-voters are struck off the register and can neither vote nor stand in later elections until restored. Restoration is free with a valid reason (work or study abroad, holiday overseas, illness, childbirth); otherwise it costs a $50 fee.","Le vote est obligatoire : les abstentionnistes sont rayés des listes et ne peuvent plus voter ni se présenter aux élections suivantes avant leur réinscription. Celle-ci est gratuite avec un motif valable (travail ou études à l’étranger, vacances à l’étranger, maladie, accouchement) ; sinon elle coûte 50 $.","El voto es obligatorio: quienes no votan son borrados del censo y no pueden votar ni presentarse en las elecciones siguientes hasta reinscribirse. La reinscripción es gratuita con un motivo válido (trabajo o estudios en el extranjero, vacaciones fuera, enfermedad, parto); si no, cuesta 50 $."),"https://www.eld.gov.sg/voters_compulsory.html"]
 ],
 nums:[
  [1.76,L3("of votes cast were rejected in the general election of May 2025 (42,945 of 2,438,610), with a turnout of 92.83% in contested constituencies.","des votes exprimés ont été rejetés aux législatives de mai 2025 (42 945 sur 2 438 610), pour une participation de 92,83 % dans les circonscriptions disputées.","de los votos emitidos fueron rechazados en las elecciones generales de mayo de 2025 (42.945 de 2.438.610), con una participación del 92,83 % en las circunscripciones disputadas."),"https://www.eld.gov.sg/press/2025/Media Release on Total Votes Cast for GE2025.pdf"]
 ],
 impact:[
  [L3("With first-past-the-post, a rejected ballot changes no seat: the candidate or team with the most valid votes wins the constituency.","Avec le scrutin majoritaire à un tour, un bulletin rejeté ne change aucun siège : le candidat ou l’équipe qui a le plus de votes valides remporte la circonscription.","Con el sistema de mayoría simple, una papeleta rechazada no cambia ningún escaño: el candidato o el equipo con más votos válidos gana la circunscripción."),"https://www.eld.gov.sg/candidate_parliamentary_counting.html"],
  [L3("Where only one team is nominated there is no poll at all: in 2025, the 131,820 electors of Marine Parade-Braddell Heights GRC could cast neither a valid nor a rejected vote.","Quand une seule équipe est déposée, il n’y a pas de scrutin du tout : en 2025, les 131 820 électeurs du GRC de Marine Parade-Braddell Heights n’ont pu déposer ni vote valide ni vote rejeté.","Cuando solo se inscribe un equipo, no hay votación: en 2025, los 131.820 electores del GRC de Marine Parade-Braddell Heights no pudieron emitir ni un voto válido ni uno rechazado."),"https://www.eld.gov.sg/finalresults2025.html"]
 ]
};
})();
(function(){
BLANK.indonesia={
 lead:L3("In Indonesia, national ballots have no blank-vote box, and only valid votes count towards seats and thresholds. The one place where voters can pick 'nobody' is a local election with a single candidate: the empty box (kotak kosong) can win, and the vote is then held again.","En Indonésie, les bulletins nationaux n'ont pas de case « vote blanc », et seuls les votes valides comptent pour les sièges et les seuils. Le seul endroit où l'on peut choisir « personne » est une élection locale à candidat unique : la case vide (kotak kosong) peut gagner, et le scrutin est alors refait.","En Indonesia, las papeletas nacionales no tienen casilla de voto en blanco, y solo los votos válidos cuentan para los escaños y los umbrales. El único lugar donde se puede elegir «nadie» es una elección local con un solo candidato: la casilla vacía (kotak kosong) puede ganar, y entonces se repite la votación."),
 what:[
  [L3("Whether a ballot is valid or invalid is decided by the election commission (KPU), which records invalid ballots as a separate figure.","La validité d'un bulletin est tranchée par la commission électorale (KPU), qui enregistre les bulletins invalides à part.","La validez de una papeleta la decide la comisión electoral (KPU), que registra las papeletas nulas por separado."),"https://siparmas.kpu.go.id/SiparmasFILE/DokumenModul/Dokumen-Modul-1107WIB171627.pdf"],
  [L3("In a single-candidate local election, the ballot shows the candidate next to an empty box; when the empty box wins, the KPU organises a new election.","Dans une élection locale à candidat unique, le bulletin montre le candidat à côté d'une case vide ; si la case vide l'emporte, la KPU organise une nouvelle élection.","En una elección local con candidato único, la papeleta muestra al candidato junto a una casilla vacía; si gana la casilla vacía, la KPU organiza una nueva elección."),"https://www.antaranews.com/berita/4511329/kpu-ri-luar-biasa-partisipasi-pemilih-pilkada-capai-68-persen"]
 ],
 count:[
  [L3("The 4% threshold for DPR seats is calculated on national valid votes only (Art. 414, Law 7/2017): invalid ballots are left out of the base.","Le seuil de 4 % pour les sièges de la DPR se calcule sur les seuls suffrages valides nationaux (art. 414, loi 7/2017) : les bulletins invalides sont exclus de la base.","El umbral del 4 % para los escaños de la DPR se calcula solo sobre los votos válidos nacionales (art. 414, Ley 7/2017): las papeletas nulas quedan fuera de la base."),"https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-6-II-P3DI-Maret-2024-212.pdf"],
  [L3("Voting is presented as a right that citizens choose to use: the KPU measures participation as the share of voters who use their right to vote.","Le vote est présenté comme un droit que les citoyens choisissent d'exercer : la KPU mesure la participation comme la part des électeurs qui usent de leur droit de vote.","El voto se presenta como un derecho que los ciudadanos deciden ejercer: la KPU mide la participación como la proporción de electores que usan su derecho a votar."),"https://siparmas.kpu.go.id/SiparmasFILE/DokumenModul/Dokumen-Modul-1107WIB171627.pdf"]
 ],
 nums:[
  [81.14,L3("turnout in the February 2024 DPR election (KPU).","de participation à l'élection de la DPR de février 2024 (KPU).","de participación en la elección de la DPR de febrero de 2024 (KPU)."),"https://news.detik.com/berita/d-7771375/kpu-partisipasi-pemilu-2024-82-lebih-tinggi-dibanding-banyak-negara-lain"],
  [68,L3("average turnout in the November 2024 local elections, lower than in the general election (KPU).","de participation moyenne aux élections locales de novembre 2024, moins qu'aux élections générales (KPU).","de participación media en las elecciones locales de noviembre de 2024, menos que en las generales (KPU)."),"https://www.antaranews.com/berita/4511329/kpu-ri-luar-biasa-partisipasi-pemilih-pilkada-capai-68-persen"]
 ],
 impact:[
  [L3("Votes for parties under 4% also elect nobody: in 2024 the 5.88 million PPP votes (3.87%) and 4.26 million PSI votes (2.80%) produced no seat.","Les voix des partis sous 4 % n'élisent personne non plus : en 2024, les 5,88 millions de voix du PPP (3,87 %) et les 4,26 millions du PSI (2,80 %) n'ont produit aucun siège.","Los votos a partidos por debajo del 4 % tampoco eligen a nadie: en 2024 los 5,88 millones de votos del PPP (3,87 %) y los 4,26 millones del PSI (2,80 %) no dieron ningún escaño."),"https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVI-6-II-P3DI-Maret-2024-212.pdf"]
 ]
};
})();
(function(){
BLANK.vietnam={
 lead:L3("In Vietnam there is no blank vote: a ballot with every name struck out is invalid, and with no competitive national election and no party other than the Communist Party allowed, no ballot choice changes who holds power.","Au Viêt Nam, il n'existe pas de vote blanc : un bulletin dont tous les noms sont rayés est nul, et faute d'élection nationale concurrentielle et d'autre parti que le Parti communiste, aucun choix sur le bulletin ne change qui détient le pouvoir.","En Vietnam no existe el voto en blanco: una papeleta con todos los nombres tachados es nula, y sin elecciones nacionales competitivas ni otro partido que el Partido Comunista, ninguna opción en la papeleta cambia quién ejerce el poder."),
 what:[
  [L3("Voters choose among candidates vetted through Fatherland Front consultations; the UN Human Rights Committee notes the ban on other parties and that independent candidates must go through 'multiple rounds of negotiations' with the Front.","Les électeurs choisissent parmi des candidats filtrés par les consultations du Front de la patrie ; le Comité des droits de l'homme de l'ONU relève l'interdiction des autres partis et l'obligation pour les candidats indépendants de passer par « plusieurs cycles de négociations » avec le Front.","Los electores eligen entre candidatos filtrados en las consultas del Frente de la Patria; el Comité de Derechos Humanos de la ONU señala la prohibición de otros partidos y que los candidatos independientes deben pasar por «múltiples rondas de negociaciones» con el Frente."),"https://digitallibrary.un.org/record/4087052/files/CCPR_C_VNM_CO_4-EN.pdf"],
  [L3("There is no blank vote. Voters strike through the full name of each candidate they reject; a ballot on which every candidate's name is struck out is invalid (Election Law, art. 74, and Home Affairs Circular 21/2025/TT-BNV).","Il n'existe pas de vote blanc. L'électeur raye le nom complet de chaque candidat qu'il rejette ; un bulletin sur lequel tous les noms sont rayés est nul (loi électorale, art. 74, et circulaire 21/2025/TT-BNV du ministère de l'Intérieur).","No existe el voto en blanco. El elector tacha el nombre completo de cada candidato que rechaza; una papeleta con todos los nombres tachados es nula (Ley Electoral, art. 74, y Circular 21/2025/TT-BNV del Ministerio del Interior)."),"https://pbgdpl.cantho.gov.vn/quy-dinh-ve-viec-xac-dinh-phieu-bau-hop-le-phieu-bau-khong-hop-le-phieu-bau-hoac-khong-bau-cho-nguoi-ung-cu-dai-bieu-quoc-hoi-va-dai-bieu-hoi-dong-nhan-dan-cac-cap"],
  [L3("Also invalid: a ballot not issued by the polling team or without its stamp, one leaving more names than there are seats (so an untouched ballot with surplus candidates is invalid), and one with an added name, mark or any other content. Striking out only part of a name still counts as a vote for that candidate.","Sont aussi nuls : un bulletin non remis par le bureau de vote ou sans son cachet, un bulletin laissant plus de noms que de sièges (un bulletin intact avec des candidats en surnombre est donc nul), et un bulletin portant un nom ajouté, une marque ou tout autre ajout. Rayer seulement une partie d'un nom compte encore comme un vote pour ce candidat.","También son nulas: la papeleta no entregada por la mesa o sin su sello, la que deja más nombres que escaños (así que una papeleta intacta con candidatos de más es nula) y la que lleva un nombre añadido, una marca o cualquier otro añadido. Tachar solo una parte de un nombre sigue contando como voto para ese candidato."),"https://tapchitoaan.vn/index.php/nhung-quy-dinh-cu-tri-can-biet-truoc-ngay-bau-cu-dai-bieu-quoc-hoi-va-hoi-dong-nhan-dan-153202615100.html"],
  [L3("Voters must vote in person and may not ask anyone to vote for them; doubtful ballots are decided by the whole polling team, which may not alter them.","L'électeur doit voter en personne et ne peut demander à personne de voter à sa place ; les bulletins douteux sont tranchés par l'ensemble du bureau de vote, qui ne peut pas les modifier.","El elector debe votar en persona y no puede pedir a nadie que vote por él; las papeletas dudosas las decide toda la mesa electoral, que no puede modificarlas."),"https://tapchicongthuong.vn/bau-cu-dai-bieu-quoc-hoi-va-hdnd--phan-biet-phieu-bau-hop-le-va-phieu-bau-khong-hop-le-483408.htm"]
 ],
 count:[
  [L3("Results are announced as turnout and the list of those elected: 500 deputies from 863 candidates in March 2026. No breakdown of votes by party exists, since candidates do not run under party labels, and no count of invalid ballots was published with the 2026 results.","Les résultats sont annoncés sous forme de participation et de liste des élus : 500 députés sur 863 candidats en mars 2026. Il n'existe aucune répartition des voix par parti, les candidats ne se présentant pas sous une étiquette, et aucun décompte des bulletins nuls n'a été publié avec les résultats de 2026.","Los resultados se anuncian como participación y lista de elegidos: 500 diputados de 863 candidatos en marzo de 2026. No existe reparto de votos por partido, ya que los candidatos no se presentan con etiqueta partidista, y no se publicó ningún recuento de papeletas nulas con los resultados de 2026."),"https://daibieunhandan.vn/print/10410737.html"]
 ],
 nums:[
  [99.70,L3("of 76,423,940 registered voters took part in the National Assembly election of 15 March 2026, according to the official result.","des 76 423 940 inscrits ont pris part à l'élection de l'Assemblée nationale du 15 mars 2026, selon le résultat officiel.","de los 76.423.940 inscritos participaron en la elección de la Asamblea Nacional del 15 de marzo de 2026, según el resultado oficial."),"https://daibieunhandan.vn/print/10410737.html"]
 ],
 impact:[
  [L3("Freedom House scores Vietnam 0 out of 4 for the election of the head of government, of the legislature and for the electoral framework; a blank vote, like any other, does not decide who governs.","Freedom House attribue au Viêt Nam 0 sur 4 pour l'élection du chef de l'exécutif, du parlement et pour le cadre électoral ; un vote blanc, comme tout autre vote, ne décide pas de qui gouverne.","Freedom House da a Vietnam 0 sobre 4 en la elección del jefe del Ejecutivo, del legislativo y en el marco electoral; un voto en blanco, como cualquier otro, no decide quién gobierna."),"https://freedomhouse.org/country/vietnam/freedom-world/2026"],
  [L3("The UN Human Rights Committee asks Vietnam to 'redouble its efforts to combat proxy voting', which it says weighs on women's participation.","Le Comité des droits de l'homme de l'ONU demande au Viêt Nam de « redoubler d'efforts pour lutter contre le vote par procuration », qui pèse selon lui sur la participation des femmes.","El Comité de Derechos Humanos de la ONU pide a Vietnam «redoblar sus esfuerzos para combatir el voto delegado», que según él pesa sobre la participación de las mujeres."),"https://digitallibrary.un.org/record/4087052/files/CCPR_C_VNM_CO_4-EN.pdf"]
 ]
};
})();
(function(){
// South Korea (15 Nov 2026). Factual only; no recommendation. Ballot rules: YTN explainer citing the NEC; election rules: Ministry of Government Legislation guide.
(function(){
var U={
 ytn:"https://www.ytn.co.kr/_ln/0102_202004140016184187",
 easylaw:"https://www.easylaw.go.kr/CSP/CsmMain.laf?csmSeq=636",
 sbs25:"https://biz.sbs.co.kr/amp/article/20000238404"
};
BLANK.southkorea={
 lead:L3("In South Korea a ballot counts only if it carries the official stamp, used inside the booth, in a single box; small mistakes make it invalid. Voting is a right, not an obligation.","En Corée du Sud, un bulletin ne compte que s'il porte le tampon officiel, utilisé dans l'isoloir, dans une seule case ; de petites erreurs le rendent nul. Voter est un droit, pas une obligation.","En Corea del Sur una papeleta solo cuenta si lleva el sello oficial, usado en la cabina, en una sola casilla; pequeños errores la anulan. Votar es un derecho, no una obligación."),
 what:[
  [L3("Invalid: a personal stamp, a thumbprint or a handwritten name instead of the official stamp; marks for two candidates or parties; a mark on the line between two boxes.","Nul : un tampon personnel, une empreinte de pouce ou un nom écrit à la main au lieu du tampon officiel ; des marques pour deux candidats ou partis ; une marque sur la ligne entre deux cases.","Nula: un sello personal, una huella dactilar o un nombre escrito a mano en lugar del sello oficial; marcas para dos candidatos o partidos; una marca sobre la línea entre dos casillas."),U.ytn],
  [L3("Photographing your marked ballot in the booth is a criminal offence (up to 2 years in prison or a 4 million won fine).","Photographier son bulletin dans l'isoloir est un délit (jusqu'à 2 ans de prison ou 4 millions de wons d'amende).","Fotografiar la papeleta marcada en la cabina es delito (hasta 2 años de prisión o 4 millones de wones de multa)."),U.ytn]
 ],
 count:[
  [L3("Only ballots marked for a candidate or party count towards the result: the president and constituency members are elected by plurality, on the votes for candidates.","Seuls les bulletins marqués pour un candidat ou un parti comptent dans le résultat : le président et les députés de circonscription sont élus à la majorité relative, sur les voix des candidats.","Solo las papeletas marcadas para un candidato o partido cuentan en el resultado: el presidente y los diputados de distrito se eligen por mayoría relativa, con los votos a candidatos."),U.sbs25]
 ],
 impact:[
  [L3("In June 2025 Lee Jae-myung was elected with 49.42%, under half of the votes: under plurality rules, invalid ballots change neither the order nor the winner.","En juin 2025, Lee Jae-myung a été élu avec 49,42 %, moins de la moitié des voix : avec la majorité relative, les bulletins nuls ne changent ni l'ordre ni le vainqueur.","En junio de 2025 Lee Jae-myung fue elegido con el 49,42 %, menos de la mitad de los votos: con la mayoría relativa, las papeletas nulas no cambian ni el orden ni el ganador."),U.sbs25]
 ]
};
})();
})();
(function(){
BLANK.thailand={
 lead:L3("In Thailand, each ballot has a box to reject every option (‘vote no’, ไม่ประสงค์ลงคะแนน). These ballots are counted and published separately from spoilt ballots; seats go to candidates and parties according to their votes.","En Thaïlande, chaque bulletin comporte une case pour refuser toutes les options (« vote no », ไม่ประสงค์ลงคะแนน). Ces bulletins sont comptés et publiés à part des bulletins nuls ; les sièges vont aux candidats et partis selon leurs voix.","En Tailandia, cada papeleta tiene una casilla para rechazar todas las opciones («vote no», ไม่ประสงค์ลงคะแนน). Esas papeletas se cuentan y publican aparte de las nulas; los escaños van a los candidatos y partidos según sus votos."),
 what:[
  [L3("‘Vote no’: tick the dedicated box on the constituency ballot, the party-list ballot, or both.","« Vote no » : cocher la case prévue sur le bulletin de circonscription, sur le bulletin de liste, ou sur les deux.","«Vote no»: marcar la casilla prevista en la papeleta de distrito, en la de lista, o en ambas."),"https://www.thairath.co.th/scoop/infographic/2913227"],
  [L3("Spoilt ballots are counted separately from ‘vote no’ ballots.","Les bulletins nuls sont comptés à part des « vote no ».","Las papeletas nulas se cuentan aparte de los «vote no»."),"https://www.thairath.co.th/scoop/infographic/2913227"],
  [L3("In the February 2026 constitutional referendum the ballot offered three options: approve, disapprove and ‘no opinion’.","Au référendum constitutionnel de février 2026, le bulletin offrait trois options : approuver, désapprouver et « sans opinion ».","En el referendo constitucional de febrero de 2026 la papeleta ofrecía tres opciones: aprobar, desaprobar y «sin opinión»."),"https://www.amarintv.com/news/politic/540127"]
 ],
 count:[
  [L3("‘Vote no’ ballots are published in the official results but no seat goes to them: in 2026 the 400 constituency seats and 100 list seats were all shared among candidates and parties.","Les « vote no » figurent dans les résultats officiels mais aucun siège ne leur revient : en 2026, les 400 sièges de circonscription et les 100 sièges de liste ont tous été répartis entre candidats et partis.","Los «vote no» figuran en los resultados oficiales pero no se les asigna ningún escaño: en 2026 los 400 escaños de distrito y los 100 de lista se repartieron todos entre candidatos y partidos."),"https://www.thaipbs.or.th/election69"]
 ],
 nums:[
  [4.25,L3("of constituency ballots were ‘vote no’ in February 2026 (1,608,174), and 3.54% were spoilt (1,337,396).","des bulletins de circonscription étaient des « vote no » en février 2026 (1 608 174), et 3,54 % étaient nuls (1 337 396).","de las papeletas de distrito fueron «vote no» en febrero de 2026 (1.608.174), y el 3,54 % fueron nulas (1.337.396)."),"https://www.thairath.co.th/scoop/infographic/2913227"],
  [2.93,L3("of party-list ballots were ‘vote no’ (1,108,051), and 4.41% were spoilt (1,669,006).","des bulletins de liste étaient des « vote no » (1 108 051), et 4,41 % étaient nuls (1 669 006).","de las papeletas de lista fueron «vote no» (1.108.051), y el 4,41 % fueron nulas (1.669.006)."),"https://www.thairath.co.th/scoop/infographic/2913227"],
  [3.97,L3("of respondents said they would tick ‘vote no’ on the list ballot in an IFD Poll of 21–24 January 2026, against 1.29% recorded in 2023, according to the pollster.","des personnes interrogées comptaient cocher « vote no » sur le bulletin de liste dans un sondage IFD Poll des 21-24 janvier 2026, contre 1,29 % relevé en 2023, selon l'institut.","de los encuestados pensaban marcar «vote no» en la papeleta de lista en un sondeo de IFD Poll del 21 al 24 de enero de 2026, frente al 1,29 % registrado en 2023, según el instituto."),"https://ifd.or.th/wp-content/uploads/2026/01/Info-IFD-Poll_จับขั้วรัฐบาล-28.1.69.pdf"]
 ],
 impact:[
  [L3("In local elections, when ‘vote no’ beats every candidate, the Election Commission orders a new election and the original candidates cannot stand again: this happened in several places after the 11 January 2026 local polls.","Aux élections locales, quand le « vote no » devance tous les candidats, la Commission électorale ordonne un nouveau scrutin et les candidats d'origine ne peuvent pas se représenter : c'est arrivé à plusieurs endroits après les élections locales du 11 janvier 2026.","En las elecciones locales, cuando el «vote no» supera a todos los candidatos, la Comisión Electoral ordena una nueva elección y los candidatos originales no pueden volver a presentarse: ocurrió en varios lugares tras las elecciones locales del 11 de enero de 2026."),"https://www.thaipbs.or.th/news/content/501004"],
  [L3("Voting is a duty. Anyone who neither votes nor gives an accepted reason (deadline 15 February 2026 for the last election) loses for two years the right to stand for the House, the Senate or local office, to hold political posts and to file election objections. ‘Vote no’ counts as voting.","Voter est un devoir. Qui ne vote pas et ne donne pas de motif accepté (date limite : 15 février 2026 pour le dernier scrutin) perd pendant deux ans le droit de se présenter à la Chambre, au Sénat ou aux élections locales, d'occuper des postes politiques et de contester une élection. Le « vote no » compte comme un vote.","Votar es un deber. Quien no vota ni da un motivo aceptado (plazo: 15 de febrero de 2026 para la última elección) pierde durante dos años el derecho a presentarse a la Cámara, al Senado o a cargos locales, a ocupar puestos políticos y a impugnar elecciones. El «vote no» cuenta como voto."),"https://www.thairath.co.th/news/politic/2911818"],
  [L3("In the 2026 referendum, 2,876,260 ‘no opinion’ ballots were reported at the 90% count, against 19,857,202 in favour and 10,486,451 against: they did not decide the result.","Au référendum de 2026, 2 876 260 bulletins « sans opinion » ont été recensés à 90 % du dépouillement, contre 19 857 202 pour et 10 486 451 contre : ils n'ont pas décidé du résultat.","En el referendo de 2026 se contabilizaron 2.876.260 papeletas «sin opinión» con el 90 % escrutado, frente a 19.857.202 a favor y 10.486.451 en contra: no decidieron el resultado."),"https://www.khaosodenglish.com/politics/2026/02/09/thai-election-bhumjaithai-leads-as-count-hits-94/"]
 ]
};
})();
(function(){
BLANK.northkorea={
 lead:L3("In North Korea, each constituency has a single pre-approved candidate whom voters approve or reject. With no choice between candidates, a blank vote in the sense used elsewhere has nothing to weigh on.","En Corée du Nord, chaque circonscription a un seul candidat préapprouvé, que les électeurs approuvent ou rejettent. Sans choix entre candidats, un vote blanc au sens où on l'entend ailleurs n'a rien sur quoi peser.","En Corea del Norte, cada circunscripción tiene un solo candidato preaprobado, al que los electores aprueban o rechazan. Sin elección entre candidatos, un voto en blanco en el sentido habitual no tiene nada sobre lo que influir."),
 what:[
  [L3("The ballot carries one pre-approved name per constituency; the only options are to approve or reject it. There was no competition between candidates or platforms in March 2026.","Le bulletin porte un seul nom préapprouvé par circonscription ; les seules options sont de l'approuver ou de le rejeter. Il n'y avait aucune concurrence entre candidats ou programmes en mars 2026.","La papeleta lleva un solo nombre preaprobado por circunscripción; las únicas opciones son aprobarlo o rechazarlo. No hubo competencia entre candidatos ni programas en marzo de 2026."),"https://www.idea.int/democracytracker/report/democratic-peoples-republic-korea/march-2026"],
  [L3("We found no published official rule on what makes a ballot blank or invalid; the official returns report only votes for and against, abstentions and voters who were abroad or at sea.","Nous n'avons trouvé aucune règle officielle publiée sur ce qui rend un bulletin blanc ou nul ; les résultats officiels ne donnent que les voix pour et contre, les abstentions et les électeurs qui étaient à l'étranger ou en mer.","No encontramos ninguna norma oficial publicada sobre qué hace que una papeleta sea en blanco o nula; los resultados oficiales solo dan los votos a favor y en contra, las abstenciones y los electores que estaban en el extranjero o en el mar."),"https://kcnawatch.org/newstream/1773699222-90719754/press-release-of-central-election-committee-on-returns-of-election-for-deputies-to-15th-spa-of-dprk/"]
 ],
 count:[
  [L3("No blank category appears in the official returns: they list 99.93% for and 0.07% against, with a turnout of 99.99%.","Aucune catégorie « blanc » n'apparaît dans les résultats officiels : ils indiquent 99,93 % pour et 0,07 % contre, avec une participation de 99,99 %.","No aparece ninguna categoría «en blanco» en los resultados oficiales: indican un 99,93 % a favor y un 0,07 % en contra, con una participación del 99,99 %."),"https://kcnawatch.org/newstream/1773699222-90719754/press-release-of-central-election-committee-on-returns-of-election-for-deputies-to-15th-spa-of-dprk/"],
  [L3("Whether voting is compulsory, and with what sanction, is not set out in any official text we could open.","Le caractère obligatoire du vote, et la sanction éventuelle, ne figurent dans aucun texte officiel que nous ayons pu consulter.","Si el voto es obligatorio, y con qué sanción, no figura en ningún texto oficial que hayamos podido consultar."),null]
 ],
 nums:[
  [0.07,L3("of voters voted against the single candidates in the 15 March 2026 assembly election, according to the official returns (99.93% for); 0.00003% abstained.","des électeurs ont voté contre les candidats uniques lors de l'élection de l'assemblée du 15 mars 2026, selon les résultats officiels (99,93 % pour) ; 0,00003 % se sont abstenus.","de los electores votó en contra de los candidatos únicos en la elección de la asamblea del 15 de marzo de 2026, según los resultados oficiales (99,93 % a favor); el 0,00003 % se abstuvo."),"https://kcnawatch.org/newstream/1773699222-90719754/press-release-of-central-election-committee-on-returns-of-election-for-deputies-to-15th-spa-of-dprk/"]
 ],
 impact:[
  [L3("All 687 candidates were elected: neither a vote against nor any other ballot changed who sits in the assembly.","Les 687 candidats ont tous été élus : ni un vote contre ni aucun autre bulletin n'a changé la composition de l'assemblée.","Los 687 candidatos resultaron elegidos: ni un voto en contra ni ninguna otra papeleta cambió la composición de la asamblea."),"https://www.idea.int/democracytracker/report/democratic-peoples-republic-korea/march-2026"],
  [L3("Freedom House scores the electoral framework 0 out of 4 and rates the country Not Free.","Freedom House note le cadre électoral 0 sur 4 et classe le pays comme non libre.","Freedom House califica el marco electoral con 0 sobre 4 y considera al país no libre."),"https://www.ecoi.net/en/document/2129090.html"]
 ],
 think:[
  L3("What can a single-candidate vote tell an outside observer, and what can it not tell?","Que peut dire un vote à candidat unique à un observateur extérieur, et que ne peut-il pas dire ?","¿Qué puede decir una votación con candidato único a un observador externo, y qué no puede decir?"),
  L3("Who publishes the figures, and who could check them?","Qui publie les chiffres, et qui pourrait les vérifier ?","¿Quién publica las cifras, y quién podría comprobarlas?"),
  L3("How do other countries count a vote against, a blank vote or an abstention? See below.","Comment d'autres pays comptent-ils un vote contre, un vote blanc ou une abstention ? Voir plus bas.","¿Cómo cuentan otros países un voto en contra, un voto en blanco o una abstención? Véase más abajo.")
 ],
 note:L3("Barotico recommends no way of voting. This block only describes the rules and the official figures.","Barotico ne recommande aucune façon de voter. Ce bloc décrit seulement les règles et les chiffres officiels.","Barotico no recomienda ninguna forma de votar. Este bloque solo describe las normas y las cifras oficiales.")
};
})();
