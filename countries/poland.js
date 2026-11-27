/* Barotico, Poland. Created 31 Oct 2026; updated 15 Nov 2026 (press rule: press links only from media.rec; srcs; method; events to 15 Nov 2026). */
BAROTICO.add("poland", {
  iso: "PL",
  continent: "europe",
  region: "eu",
  updated: "2026-11-15",
  name: L3("Poland",
    "Pologne",
    "Polonia"),
  sub: L3("Parliamentary republic with a directly elected president · EU member since 2004",
    "République parlementaire avec un président élu au suffrage direct · membre de l'UE depuis 2004",
    "República parlamentaria con un presidente elegido por voto directo · miembro de la UE desde 2004"),
  elec: {
    date: "2027-10-24",
    approx: true,
    none: false,
    label: L3("Next Sejm and Senate election: autumn 2027, on a Sunday chosen by the President",
      "Prochaines élections à la Diète et au Sénat : automne 2027, un dimanche choisi par le président",
      "Próximas elecciones al Sejm y al Senado: otoño de 2027, un domingo elegido por el presidente"),
    detail: L3("The Sejm elected on 15 October 2023 sits for four years from its first sitting in November 2023. Under Article 98 of the Constitution the President orders the election at least 90 days before the term ends, for a non-working day within the last 30 days of the term, so between mid-October and early November 2027. The date shown is our estimate. The President who will set it, Karol Nawrocki, was backed by the opposition PiS.",
      "La Diète élue le 15 octobre 2023 siège quatre ans à compter de sa première séance en novembre 2023. Selon l'article 98 de la Constitution, le président convoque l'élection au moins 90 jours avant la fin du mandat, pour un jour non ouvré situé dans ses 30 derniers jours, donc entre la mi-octobre et début novembre 2027. La date affichée est notre estimation. Le président qui la fixera, Karol Nawrocki, a été soutenu par le PiS, dans l'opposition.",
      "El Sejm elegido el 15 de octubre de 2023 tiene un mandato de cuatro años desde su primera sesión en noviembre de 2023. Según el artículo 98 de la Constitución, el presidente convoca las elecciones al menos 90 días antes del fin del mandato, en un día no laborable dentro de sus últimos 30 días, es decir, entre mediados de octubre y principios de noviembre de 2027. La fecha indicada es nuestra estimación. El presidente que la fijará, Karol Nawrocki, contó con el apoyo del PiS, en la oposición."),
    short: L3("Autumn 2027",
      "Automne 2027",
      "Otoño de 2027"),
    src: { t: "Konstytucja RP, art. 98 (lexlege.pl)", u: "https://lexlege.pl/konstytucja-rzeczypospolitej-polskiej/art-98/" }
  },
  val: {
    life: 78.6,
    school: 16.7,
    hdi: [35, 0.906],
    hom: [0.8, 2023],
    rsf: [27, 75.52],
    fh: [82, "F"],
    cpi: [53, 52]
  },
  valSrc: {
    life: { t: "UNDP, Human Development Report 2025, statistical annex (life expectancy 78.6)", u: "https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Statistical_Annex_HDI_Table.pdf" },
    school: { t: "UNDP, Human Development Report 2025, statistical annex (16.7 expected years of schooling)", u: "https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Statistical_Annex_HDI_Table.pdf" },
    hdi: { t: "UNDP, Human Development Report 2025: rank 35, HDI 0.906", u: "https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Statistical_Annex_HDI_Table.pdf" },
    hom: { t: "UNODC data via World Bank WDI (statisticsoftheworld.com): 0.8 intentional homicides per 100,000 in 2023", u: "https://statisticsoftheworld.com/country/poland/homicide-rate" },
    rsf: { t: "RSF, World Press Freedom Index 2026: Poland 27th, 75.52 (31st in 2025)", u: "https://rsf.org/en/country/poland" },
    fh: { t: "Freedom House, Freedom in the World 2026: Poland 82/100, Free", u: "https://freedomhouse.org/country/poland/freedom-world/2026" },
    cpi: { t: "Transparency International, Corruption Perceptions Index 2025: Poland 53 points, 52nd of 182", u: "https://www.transparency.org/en/countries/poland" }
  },
  sat: {
    v: "32 %",
    label: L3("Support for government",
      "Soutien au gouvernement",
      "Apoyo al Gobierno"),
    u: L3("support the government (CBOS, June 2026; 42% oppose it, 23% indifferent)",
      "soutiennent le gouvernement (CBOS, juin 2026 ; 42 % s'y opposent, 23 % indifférents)",
      "apoyan al Gobierno (CBOS, junio de 2026; el 42 % se opone, el 23 % indiferente)"),
    src: { t: "CBOS, Stosunek do rządu w czerwcu (raport 65/2026)", u: "https://www.cbos.pl/PL/publikacje/raporty/open_file.php?id=7225" }
  },
  fun: L3("<span class=\"mono\">2</span> rival heads for one Constitutional Tribunal: since 30 October 2026, judge Anna Korwin-Piotrowska has run it after suspending its president, whom President Nawrocki still recognises.",
    "<span class=\"mono\">2</span> chefs rivaux pour un seul Tribunal constitutionnel : depuis le 30 octobre 2026, la juge Anna Korwin-Piotrowska le dirige après avoir suspendu son président, que le président Nawrocki continue de reconnaître.",
    "<span class=\"mono\">2</span> jefes rivales para un solo Tribunal Constitucional: desde el 30 de octubre de 2026, la jueza Anna Korwin-Piotrowska lo dirige tras suspender a su presidente, al que el presidente Nawrocki sigue reconociendo."),
  funNote: L3("On 30 October 2026 the longest-serving of the judges elected by the current Sejm, Anna Korwin-Piotrowska, suspended Tribunal president Bogdan Święczkowski and vice-president Bartłomiej Sochański for a month, accusing the president among other things of barring judges from ruling; the Prosecutor General asked the Tribunal to lift both men's immunity. Around 1 a.m. President Nawrocki, back early from Senegal, walked into the building telling the judges they were not judges of the Tribunal; she says he pushed her, and his office reported her to prosecutors. A plenary assembly of the judges is due on 17 November 2026 to consider the immunity requests.",
    "Le 30 octobre 2026, la doyenne des juges élus par l'actuelle Diète, Anna Korwin-Piotrowska, a suspendu pour un mois le président du Tribunal, Bogdan Święczkowski, et son vice-président, Bartłomiej Sochański, reprochant notamment au premier d'avoir empêché des juges de siéger ; le procureur général a demandé au Tribunal de lever l'immunité des deux hommes. Vers 1 heure du matin, le président Nawrocki, rentré plus tôt du Sénégal, est entré dans le bâtiment en lançant aux juges qu'ils n'étaient pas juges du Tribunal ; elle affirme qu'il l'a bousculée, et sa chancellerie l'a signalée au parquet. Une assemblée plénière des juges doit examiner les demandes de levée d'immunité le 17 novembre 2026.",
    "El 30 de octubre de 2026, la jueza más antigua de las elegidas por el actual Sejm, Anna Korwin-Piotrowska, suspendió durante un mes al presidente del Tribunal, Bogdan Święczkowski, y al vicepresidente, Bartłomiej Sochański, acusando al primero, entre otras cosas, de impedir juzgar a algunos jueces; el fiscal general pidió al Tribunal levantar la inmunidad de ambos. Hacia la 1 de la madrugada, el presidente Nawrocki, de vuelta antes de tiempo de Senegal, entró en el edificio diciendo a los jueces que no eran jueces del Tribunal; ella afirma que la empujó, y su cancillería la denunció ante la fiscalía. Una asamblea plenaria de los jueces debe examinar las peticiones de levantamiento de inmunidad el 17 de noviembre de 2026."),
  levels: [
    [
      L3("President",
        "Président",
        "Presidente"),
      L3("Elected directly for five years, two terms at most. Karol Nawrocki, backed by PiS, won the 1 June 2025 run-off with 50.89% against Rafał Trzaskowski (KO) and took office on 6 August 2025. He can veto laws, refer them to the Constitutional Tribunal and appoints judges proposed by the National Council of the Judiciary.",
        "Élu au suffrage direct pour cinq ans, deux mandats au plus. Karol Nawrocki, soutenu par le PiS, a remporté le second tour du 1er juin 2025 avec 50,89 % face à Rafał Trzaskowski (KO) et a pris ses fonctions le 6 août 2025. Il peut opposer son veto aux lois, les renvoyer au Tribunal constitutionnel et nomme les juges proposés par le Conseil national de la magistrature.",
        "Elegido por voto directo para cinco años, dos mandatos como máximo. Karol Nawrocki, apoyado por el PiS, ganó la segunda vuelta del 1 de junio de 2025 con el 50,89 % frente a Rafał Trzaskowski (KO) y asumió el 6 de agosto de 2025. Puede vetar leyes, remitirlas al Tribunal Constitucional y nombra a los jueces propuestos por el Consejo Nacional del Poder Judicial.")
    ],
    [
      L3("Council of Ministers",
        "Conseil des ministres",
        "Consejo de Ministros"),
      L3("Led by Prime Minister Donald Tusk (KO) since December 2023 and answerable to the Sejm, which can only remove it by electing a new Prime Minister (constructive vote of no confidence).",
        "Dirigé par le Premier ministre Donald Tusk (KO) depuis décembre 2023 et responsable devant la Diète, qui ne peut le renverser qu'en élisant un nouveau Premier ministre (motion de censure constructive).",
        "Encabezado por el primer ministro Donald Tusk (KO) desde diciembre de 2023 y responsable ante el Sejm, que solo puede destituirlo eligiendo a un nuevo primer ministro (moción de censura constructiva).")
    ],
    [
      L3("Sejm and Senate",
        "Diète et Sénat",
        "Sejm y Senado"),
      L3("The Sejm (460 MPs, four years) passes laws and the budget; its Marshal (Speaker) has been Włodzimierz Czarzasty (Lewica) since November 2025, under the coalition's rotation deal. The Senate (100 senators) can amend or reject bills; the Sejm overrules it by an absolute majority.",
        "La Diète (460 députés, quatre ans) vote les lois et le budget ; son maréchal (président) est Włodzimierz Czarzasty (Lewica) depuis novembre 2025, selon l'accord de rotation de la coalition. Le Sénat (100 sénateurs) peut amender ou rejeter les textes ; la Diète passe outre à la majorité absolue.",
        "El Sejm (460 diputados, cuatro años) aprueba las leyes y el presupuesto; su mariscal (presidente) es Włodzimierz Czarzasty (Lewica) desde noviembre de 2025, según el acuerdo de rotación de la coalición. El Senado (100 senadores) puede enmendar o rechazar proyectos; el Sejm lo supera por mayoría absoluta.")
    ],
    [
      L3("Courts",
        "Juridictions",
        "Tribunales"),
      L3("The Constitutional Tribunal (15 judges elected by the Sejm) reviews laws; the Supreme Court and Supreme Administrative Court top the court system. Who may legitimately sit in these bodies has been disputed since the 2015-2018 reforms. On 30 October 2026 a judge elected by the current Sejm suspended the Tribunal's president; President Nawrocki contests her authority.",
        "Le Tribunal constitutionnel (15 juges élus par la Diète) contrôle les lois ; la Cour suprême et la Cour administrative suprême coiffent les juridictions. Qui peut légitimement y siéger est contesté depuis les réformes de 2015-2018. Le 30 octobre 2026, une juge élue par l'actuelle Diète a suspendu le président du Tribunal ; le président Nawrocki conteste son autorité.",
        "El Tribunal Constitucional (15 jueces elegidos por el Sejm) controla las leyes; el Tribunal Supremo y el Supremo Administrativo encabezan la justicia. Quién puede ocupar legítimamente estos órganos está en disputa desde las reformas de 2015-2018. El 30 de octubre de 2026, una jueza elegida por el actual Sejm suspendió al presidente del Tribunal; el presidente Nawrocki impugna su autoridad.")
    ],
    [
      L3("Regions and municipalities",
        "Régions et communes",
        "Regiones y municipios"),
      L3("16 voivodeships with elected assemblies, about 380 counties (powiaty) and about 2,477 municipalities (gminy) with directly elected mayors.",
        "16 voïvodies dotées d'assemblées élues, environ 380 districts (powiaty) et environ 2 477 communes (gminy) aux maires élus au suffrage direct.",
        "16 voivodatos con asambleas electas, unos 380 distritos (powiaty) y unos 2.477 municipios (gminy) con alcaldes elegidos directamente.")
    ]
  ],
  vote: [
    L3("Voting is voluntary from 18. The Sejm is elected by proportional representation (D'Hondt) in 41 constituencies, with a 5% threshold for parties and 8% for coalitions; national-minority lists are exempt.",
      "Le vote est facultatif dès 18 ans. La Diète est élue à la proportionnelle (D'Hondt) dans 41 circonscriptions, avec un seuil de 5 % pour les partis et de 8 % pour les coalitions ; les listes des minorités nationales en sont exemptées.",
      "El voto es voluntario desde los 18 años. El Sejm se elige por representación proporcional (D'Hondt) en 41 circunscripciones, con un umbral del 5 % para partidos y del 8 % para coaliciones; las listas de minorías nacionales están exentas."),
    L3("The 100 senators are elected by first-past-the-post in single-member districts.",
      "Les 100 sénateurs sont élus au scrutin majoritaire à un tour dans des circonscriptions uninominales.",
      "Los 100 senadores se eligen por mayoría simple en distritos uninominales."),
    L3("The President is elected in two rounds; in 2025 Nawrocki won the run-off by 369,591 votes, with 71.63% turnout.",
      "Le président est élu à deux tours ; en 2025, Nawrocki a gagné le second tour avec 369 591 voix d'avance et 71,63 % de participation.",
      "El presidente se elige a dos vueltas; en 2025 Nawrocki ganó la segunda por 369.591 votos, con un 71,63 % de participación.")
  ],
  law: [
    L3("Bills come from MPs, the Senate, the President, the Council of Ministers or 100,000 citizens.",
      "Les textes viennent des députés, du Sénat, du président, du Conseil des ministres ou de 100 000 citoyens.",
      "Los proyectos proceden de los diputados, el Senado, el presidente, el Consejo de Ministros o 100.000 ciudadanos."),
    L3("The Sejm debates them in three readings and passes them by simple majority; the Senate then has 30 days to amend or reject them.",
      "La Diète les examine en trois lectures et les adopte à la majorité simple ; le Sénat dispose ensuite de 30 jours pour les amender ou les rejeter.",
      "El Sejm los debate en tres lecturas y los aprueba por mayoría simple; después el Senado tiene 30 días para enmendarlos o rechazarlos."),
    L3("The President signs within 21 days, vetoes or refers the law to the Constitutional Tribunal. A veto falls only with three-fifths of the votes, at least half of MPs present.",
      "Le président promulgue sous 21 jours, oppose son veto ou saisit le Tribunal constitutionnel. Un veto ne tombe qu'aux trois cinquièmes des voix, avec au moins la moitié des députés présents.",
      "El presidente firma en 21 días, veta o remite la ley al Tribunal Constitucional. Un veto solo cae con tres quintos de los votos y al menos la mitad de los diputados presentes."),
    L3("Changing the Constitution takes two-thirds of the Sejm and an absolute majority of the Senate.",
      "Modifier la Constitution exige les deux tiers de la Diète et la majorité absolue du Sénat.",
      "Reformar la Constitución exige dos tercios del Sejm y mayoría absoluta del Senado.")
  ],
  hard: L3("Poland has a government and a President from opposing camps. Donald Tusk's coalition governs with about 239 of 460 MPs, far from the 276 needed to override Karol Nawrocki's vetoes: on 15 October 2026 alone he vetoed three laws, one of them on carrying out European Court of Human Rights judgments, and on 13 November the bill implementing the EU Digital Services Act. The rule-of-law dispute has reached the Constitutional Tribunal itself: on 30 October 2026 a judge elected by the current Sejm suspended its president, and the President of the Republic went to the building that night to contest it. The public broadcasters have been 'in liquidation' since December 2023, which the regulator KRRiT calls a sham. Prosecutors are pursuing members of the previous government: in July 2026 Poland asked the United States to extradite former justice minister Zbigniew Ziobro over the Justice Fund, and his former deputy Marcin Romanowski is under a European arrest warrant (both deny wrongdoing; presumption of innocence applies). The right has split: in July 2026 former Prime Minister Mateusz Morawiecki took about 40 MPs out of PiS into his own club, Rozwój Plus, and Grzegorz Braun, removed from Konfederacja in January 2025, won 6.34% in the 2025 presidential first round; his Konfederacja Korony Polskiej polled 11.6% in November 2026. Meanwhile the deficit reached 7.2% of GDP in 2025.",
    "La Pologne a un gouvernement et un président issus de camps opposés. La coalition de Donald Tusk gouverne avec environ 239 députés sur 460, loin des 276 nécessaires pour passer outre les vetos de Karol Nawrocki : le seul 15 octobre 2026, il a bloqué trois lois, dont une sur l'exécution des arrêts de la Cour européenne des droits de l'homme, et le 13 novembre le texte transposant le règlement européen sur les services numériques. Le conflit sur l'État de droit a gagné le Tribunal constitutionnel lui-même : le 30 octobre 2026, une juge élue par l'actuelle Diète a suspendu son président, et le président de la République s'est rendu dans le bâtiment en pleine nuit pour le contester. Les médias publics sont « en liquidation » depuis décembre 2023, ce que le régulateur KRRiT qualifie de simulacre. Le parquet poursuit des membres de l'ancien gouvernement : en juillet 2026, la Pologne a demandé aux États-Unis l'extradition de l'ex-ministre de la Justice Zbigniew Ziobro dans l'affaire du Fonds de justice, et son ancien adjoint Marcin Romanowski fait l'objet d'un mandat d'arrêt européen (tous deux contestent ; présomption d'innocence). La droite s'est fracturée : en juillet 2026, l'ancien Premier ministre Mateusz Morawiecki a emmené une quarantaine de députés du PiS dans son propre groupe, Rozwój Plus, et Grzegorz Braun, exclu de Konfederacja en janvier 2025, a obtenu 6,34 % au premier tour de la présidentielle de 2025 ; sa Konfederacja Korony Polskiej était à 11,6 % dans un sondage de novembre 2026. Entre-temps, le déficit a atteint 7,2 % du PIB en 2025.",
    "Polonia tiene un Gobierno y un presidente de bandos opuestos. La coalición de Donald Tusk gobierna con unos 239 de 460 diputados, lejos de los 276 necesarios para superar los vetos de Karol Nawrocki: solo el 15 de octubre de 2026 vetó tres leyes, una de ellas sobre la ejecución de sentencias del Tribunal Europeo de Derechos Humanos, y el 13 de noviembre la ley que aplica el Reglamento europeo de servicios digitales. La disputa sobre el Estado de derecho ha llegado al propio Tribunal Constitucional: el 30 de octubre de 2026 una jueza elegida por el actual Sejm suspendió a su presidente, y el presidente de la República acudió al edificio esa misma noche para impugnarlo. Los medios públicos están «en liquidación» desde diciembre de 2023, algo que el regulador KRRiT califica de ficticio. La fiscalía persigue a miembros del anterior Gobierno: en julio de 2026 Polonia pidió a Estados Unidos la extradición del exministro de Justicia Zbigniew Ziobro por el Fondo de Justicia, y su exviceministro Marcin Romanowski tiene una orden de detención europea (ambos lo niegan; presunción de inocencia). La derecha se ha dividido: en julio de 2026 el ex primer ministro Mateusz Morawiecki se llevó a unos 40 diputados del PiS a su propio grupo, Rozwój Plus, y Grzegorz Braun, expulsado de Konfederacja en enero de 2025, logró el 6,34 % en la primera vuelta presidencial de 2025; su Konfederacja Korony Polskiej marcaba el 11,6 % en un sondeo de noviembre de 2026. Mientras tanto, el déficit llegó al 7,2 % del PIB en 2025."),
  why: L3("The 1989 Round Table negotiated the end of communist rule, and the 1997 Constitution spread power to prevent its return: a government answerable to the Sejm, a directly elected President with a strong veto, a Constitutional Tribunal and a council that proposes judges. Between 2015 and 2023, PiS governments changed the Tribunal, the National Council of the Judiciary and the Supreme Court; the European Commission opened its Article 7 rule-of-law procedure in December 2017 announced on 6 May 2024 that there was no longer a clear risk of a serious breach, and closed it on 29 May. The veto meant as a safeguard is now the main brake on the government.",
    "La Table ronde de 1989 a négocié la fin du régime communiste, et la Constitution de 1997 a réparti le pouvoir pour empêcher son retour : un gouvernement responsable devant la Diète, un président élu au suffrage direct doté d'un veto fort, un Tribunal constitutionnel et un conseil qui propose les juges. Entre 2015 et 2023, les gouvernements du PiS ont modifié le Tribunal, le Conseil national de la magistrature et la Cour suprême ; la Commission européenne a ouvert sa procédure de l'article 7 sur l'État de droit en décembre 2017 a estimé le 6 mai 2024 qu'il n'existait plus de risque clair de violation grave, puis l'a close le 29 mai. Le veto conçu comme garde-fou est devenu le principal frein du gouvernement.",
    "La Mesa Redonda de 1989 negoció el fin del régimen comunista, y la Constitución de 1997 repartió el poder para evitar su regreso: un Gobierno responsable ante el Sejm, un presidente elegido directamente con un veto fuerte, un Tribunal Constitucional y un consejo que propone a los jueces. Entre 2015 y 2023 los gobiernos del PiS cambiaron el Tribunal, el Consejo Nacional del Poder Judicial y el Tribunal Supremo; la Comisión Europea abrió su procedimiento del artículo 7 sobre el Estado de derecho en diciembre de 2017 consideró el 6 de mayo de 2024 que ya no había un riesgo claro de violación grave y lo cerró el 29 de mayo. El veto concebido como salvaguarda es hoy el principal freno del Gobierno."),
  srcs: {
    fun: [
      [
        L3("TVN24: what happened in and around the Constitutional Tribunal (1 Nov 2026)",
          "TVN24 : ce qui s'est passé au Tribunal constitutionnel (1er nov. 2026)",
          "TVN24: qué pasó en el Tribunal Constitucional (1 nov. 2026)"),
        "https://tvn24.pl/polska/co-wydarzylo-sie-w-trybunale-konstytucyjnym-i-wokol-niego-najwazniejsze-informacje-st9317148"
      ],
      [
        L3("TVN24: new statement by judge Korwin-Piotrowska (13 Nov 2026)",
          "TVN24 : nouvelle déclaration de la juge Korwin-Piotrowska (13 nov. 2026)",
          "TVN24: nueva declaración de la jueza Korwin-Piotrowska (13 nov. 2026)"),
        "https://tvn24.pl/polska/nowe-oswiadczenie-sedzi-korwin-piotrowskiej-tak-dziala-trybunal-konstytucyjny-st9337984"
      ]
    ],
    levels: [
      [
        L3("Constitution, chapter IV: Sejm and Senate (president.pl)",
          "Constitution, chapitre IV : Diète et Sénat (prezydent.pl)",
          "Constitución, capítulo IV: Sejm y Senado (prezydent.pl)"),
        "https://www.prezydent.pl/prawo/konstytucja-rp/rozdzial-iv-sejm-i-senat"
      ],
      [
        L3("Constitution, chapter V: the President (sejm.gov.pl)",
          "Constitution, chapitre V : le président (sejm.gov.pl)",
          "Constitución, capítulo V: el presidente (sejm.gov.pl)"),
        "https://www.sejm.gov.pl/prawo/konst/polski/5.htm"
      ],
      [
        L3("Gov.pl: the Council of Ministers",
          "Gov.pl : le Conseil des ministres",
          "Gov.pl: el Consejo de Ministros"),
        "https://www.gov.pl/web/gov/rada-ministrow"
      ],
      [
        L3("PKW: 2025 presidential election",
          "PKW : élection présidentielle de 2025",
          "PKW: elección presidencial de 2025"),
        "https://pkw.gov.pl/wybory-i-referenda/wybory-prezydenta-rzeczypospolitej-polskiej/wybory-prezydenta-rp-w-2025-r/informacje-ogolne"
      ],
      [
        L3("TVN24: the Constitutional Tribunal crisis (1 Nov 2026)",
          "TVN24 : la crise du Tribunal constitutionnel (1er nov. 2026)",
          "TVN24: la crisis del Tribunal Constitucional (1 nov. 2026)"),
        "https://tvn24.pl/polska/co-wydarzylo-sie-w-trybunale-konstytucyjnym-i-wokol-niego-najwazniejsze-informacje-st9317148"
      ]
    ],
    law: [
      [
        L3("Constitution, art. 118: who may table bills",
          "Constitution, art. 118 : qui peut déposer un texte",
          "Constitución, art. 118: quién puede presentar proyectos"),
        "https://lexlege.pl/konstytucja-rzeczypospolitej-polskiej/art-118/"
      ],
      [
        L3("Constitution, art. 122: signature, veto and referral by the President",
          "Constitution, art. 122 : promulgation, veto et saisine par le président",
          "Constitución, art. 122: firma, veto y remisión por el presidente"),
        "https://lexlege.pl/konstytucja-rzeczypospolitej-polskiej/art-122/"
      ],
      [
        L3("Constitution, chapter IV: Sejm and Senate",
          "Constitution, chapitre IV : Diète et Sénat",
          "Constitución, capítulo IV: Sejm y Senado"),
        "https://www.prezydent.pl/prawo/konstytucja-rp/rozdzial-iv-sejm-i-senat"
      ],
      [
        L3("Sejm: act on citizens' legislative initiative",
          "Diète : loi sur l'initiative législative citoyenne",
          "Sejm: ley de iniciativa legislativa ciudadana"),
        "https://www.sejm.gov.pl/prawo/inicjat.htm"
      ]
    ],
    hard: [
      [
        L3("Polsat News: seats by club (29 July 2026)",
          "Polsat News : sièges par groupe (29 juillet 2026)",
          "Polsat News: escaños por grupo (29 de julio de 2026)"),
        "https://www.polsatnews.pl/wiadomosc/2026-07-29/nowy-uklad-sil-w-sejmie-znaczne-przetasowania-po-decyzji-morawieckiego/"
      ],
      [
        L3("Polsat News: three vetoes on 15 October 2026",
          "Polsat News : trois vetos le 15 octobre 2026",
          "Polsat News: tres vetos el 15 de octubre de 2026"),
        "https://www.polsatnews.pl/wiadomosc/2026-10-15/oswiadczenie-prezydenta-nawrocki-zawetowal-trzy-ustawy/"
      ],
      [
        L3("Polsat News: veto of the digital services bill (13 Nov 2026)",
          "Polsat News : veto de la loi sur les services numériques (13 nov. 2026)",
          "Polsat News: veto de la ley de servicios digitales (13 nov. 2026)"),
        "https://www.polsatnews.pl/wiadomosc/2026-11-13/ustawa-o-uslugach-cyfrowych-prezydent-podjal-decyzje/"
      ],
      [
        L3("TVN24: the Constitutional Tribunal crisis",
          "TVN24 : la crise du Tribunal constitutionnel",
          "TVN24: la crisis del Tribunal Constitucional"),
        "https://tvn24.pl/polska/co-wydarzylo-sie-w-trybunale-konstytucyjnym-i-wokol-niego-najwazniejsze-informacje-st9317148"
      ],
      [
        L3("KRRiT: public media in the first half of 2026",
          "KRRiT : les médias publics au premier semestre 2026",
          "KRRiT: los medios públicos en el primer semestre de 2026"),
        "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych"
      ],
      [
        L3("TVN24: extradition request for Zbigniew Ziobro",
          "TVN24 : demande d'extradition de Zbigniew Ziobro",
          "TVN24: solicitud de extradición de Zbigniew Ziobro"),
        "https://tvn24.pl/polska/ekstradycja-zbigniewa-ziobry-nieoficjalnie-jest-wniosek-do-usa-st9160450"
      ],
      [
        L3("TVN24: Marcin Romanowski's whereabouts",
          "TVN24 : où se trouve Marcin Romanowski",
          "TVN24: el paradero de Marcin Romanowski"),
        "https://tvn24.pl/polska/gdzie-jest-marcin-romanowski-lokal-w-budapeszcie-wyczyszczony-st9040454?source=rss"
      ],
      [
        L3("RMF24: Konfederacja's party court removes Grzegorz Braun (Jan 2025)",
          "RMF24 : le tribunal du parti Konfederacja exclut Grzegorz Braun (janv. 2025)",
          "RMF24: el tribunal del partido Konfederacja expulsa a Grzegorz Braun (ene. 2025)"),
        "https://www.rmf24.pl/raporty/raport-wybory-prezydenckie-2025/news-sad-partyjny-konfederacji-zadecydowal-ws-grzegorza-brauna,nId,7895018"
      ],
      [
        L3("PKW: first-round results, 2025 presidential election",
          "PKW : résultats du premier tour de la présidentielle 2025",
          "PKW: resultados de la primera vuelta presidencial de 2025"),
        "https://pkw.gov.pl/uploaded_files/1747706738_obwieszczenie-pkw-wyniki.pdf"
      ],
      [
        L3("RMF24: United Surveys poll for WP (2 Nov 2026)",
          "RMF24 : sondage United Surveys pour WP (2 nov. 2026)",
          "RMF24: sondeo de United Surveys para WP (2 nov. 2026)"),
        "https://www.rmf24.pl/fakty/polityka/news-prawica-rosnie-w-sile-nowy-sondaz-po-wydarzeniach-wokol-tryb,nIdn,1024177"
      ],
      [
        L3("GUS: deficit and debt 2022-2025 (October 2026)",
          "GUS : déficit et dette 2022-2025 (octobre 2026)",
          "GUS: déficit y deuda 2022-2025 (octubre de 2026)"),
        "https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/statystyka-sektora-instytucji-rzadowych-i-samorzadowych/deficyt-i-dlug-sektora-instytucji-rzadowych-i-samorzadowych-w-latach-2022-2025,1,43.html"
      ]
    ],
    why: [
      [
        L3("Constitution of 2 April 1997 (lexlege.pl)",
          "Constitution du 2 avril 1997 (lexlege.pl)",
          "Constitución del 2 de abril de 1997 (lexlege.pl)"),
        "https://lexlege.pl/konstytucja-rzeczypospolitej-polskiej/"
      ],
      [
        L3("European Commission: Article 7 procedure opened (December 2017)",
          "Commission européenne : ouverture de la procédure de l'article 7 (décembre 2017)",
          "Comisión Europea: apertura del procedimiento del artículo 7 (diciembre de 2017)"),
        "https://ec.europa.eu/commission/presscorner/detail/cs/ip_17_5367"
      ],
      [
        L3("European Commission: intention to close the Article 7 procedure (6 May 2024)",
          "Commission européenne : intention de clore la procédure de l'article 7 (6 mai 2024)",
          "Comisión Europea: intención de cerrar el procedimiento del artículo 7 (6 de mayo de 2024)"),
        "https://ec.europa.eu/commission/presscorner/api/files/document/print/es/ip_24_2461/IP_24_2461_EN.pdf"
      ],
      [
        L3("European Commission: Article 7 procedure closed (29 May 2024)",
          "Commission européenne : procédure de l'article 7 close (29 mai 2024)",
          "Comisión Europea: procedimiento del artículo 7 cerrado (29 de mayo de 2024)"),
        "https://ec.europa.eu/commission/presscorner/detail/en/mex_24_2986"
      ]
    ],
    vote: [
      [
        L3("PKW: official results of the 2023 Sejm election (41 constituencies)",
          "PKW : résultats officiels des législatives 2023 (41 circonscriptions)",
          "PKW: resultados oficiales de las legislativas de 2023 (41 circunscripciones)"),
        "https://pkw.gov.pl/uploaded_files/1697617008_obwieszczenie-sejm.pdf"
      ],
      [
        L3("Constitution, art. 98 and chapter IV",
          "Constitution, art. 98 et chapitre IV",
          "Constitución, art. 98 y capítulo IV"),
        "https://www.prezydent.pl/prawo/konstytucja-rp/rozdzial-iv-sejm-i-senat"
      ],
      [
        L3("PKW: 2025 presidential election",
          "PKW : élection présidentielle de 2025",
          "PKW: elección presidencial de 2025"),
        "https://pkw.gov.pl/wybory-i-referenda/wybory-prezydenta-rzeczypospolitej-polskiej/wybory-prezydenta-rp-w-2025-r/informacje-ogolne"
      ],
      [
        L3("PKW: first-round results 2025",
          "PKW : résultats du premier tour 2025",
          "PKW: resultados de la primera vuelta de 2025"),
        "https://pkw.gov.pl/uploaded_files/1747706738_obwieszczenie-pkw-wyniki.pdf"
      ]
    ],
    gov: [
      [
        L3("Gov.pl: composition of the Council of Ministers",
          "Gov.pl : composition du Conseil des ministres",
          "Gov.pl: composición del Consejo de Ministros"),
        "https://www.gov.pl/web/premier/sklad-rady-ministrow"
      ],
      [
        L3("Coalition agreement, 10 November 2023 (RMF FM)",
          "Accord de coalition, 10 novembre 2023 (RMF FM)",
          "Acuerdo de coalición, 10 de noviembre de 2023 (RMF FM)"),
        "https://www.rmf24.pl/fakty/news-umowa-koalicyjna-publikujemy-caly-tekst,nId,7140751"
      ],
      [
        L3("PAP: Polska 2050 after the split, Centrum keeps the climate ministry",
          "PAP : Polska 2050 après la scission, Centrum garde le Climat",
          "PAP: Polska 2050 tras la escisión, Centrum conserva Clima"),
        "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow"
      ],
      [
        L3("PKW: official results of the 2023 Sejm election",
          "PKW : résultats officiels des législatives 2023",
          "PKW: resultados oficiales de las legislativas de 2023"),
        "https://pkw.gov.pl/uploaded_files/1697617008_obwieszczenie-sejm.pdf"
      ],
      [
        L3("Polsat News: seats by club (29 July 2026)",
          "Polsat News : sièges par groupe (29 juillet 2026)",
          "Polsat News: escaños por grupo (29 de julio de 2026)"),
        "https://www.polsatnews.pl/wiadomosc/2026-07-29/nowy-uklad-sil-w-sejmie-znaczne-przetasowania-po-decyzji-morawieckiego/"
      ],
      [
        L3("CBOS: attitudes to the government, June 2026",
          "CBOS : attitude envers le gouvernement, juin 2026",
          "CBOS: actitud ante el Gobierno, junio de 2026"),
        "https://www.cbos.pl/PL/publikacje/raporty/open_file.php?id=7225"
      ]
    ]
  },
  method: L3("Seats by club are the Polsat News count of 29 July 2026: the Sejm's club page and the government's cabinet page could not be read for this update, so later moves of single MPs are not shown, and the four seats that count leaves unassigned appear as such in the seat chart. Nine groups are shown, by seats; Konfederacja Korony Polskiej (three MPs) is left out under the nine-card cap.\n\nLeft-right positions are our estimate of the Chapel Hill Expert Survey 2024, which could not be opened; Rozwój Plus and Centrum are too new to be in it. PiS and Razem are labelled far right and far left because The PopuList classifies them so. Rozwój Plus is an association and Centrum a club: neither has a programme or audited accounts yet, and party finance is broken down only where we opened the PKW resolution (PiS, PSL).\n\nPress links come only from the validated list in the media panel: the news agency PAP, the EFCSN fact-checker Demagog and the most trusted broadcasters (Polsat News, RMF FM, TVN24). The 2026 Reuters brand-trust table could not be read, so its 2023 figures are used. Claims that only other outlets reported were rewritten from official sources or dropped, among them a count of presidential vetoes, a newspaper's tally of the '100 concretes' and one 2025 first-instance conviction.\n\nNo independent promise tally could be opened, so the tracker shows none. The homicide rate comes from a data site republishing UNODC figures. Cases are listed only with an official act (charge, indictment, ruling, immunity vote); allegations alone are left out.",
    "Les sièges par groupe sont ceux du décompte de Polsat News du 29 juillet 2026 : la page des groupes de la Diète et celle du gouvernement n'ont pas pu être lues pour cette mise à jour ; les changements ultérieurs de députés isolés n'apparaissent donc pas, et les quatre sièges que ce décompte n'attribue pas figurent comme tels dans le graphique. Neuf groupes sont présentés, par nombre de sièges ; la Konfederacja Korony Polskiej (trois députés) est écartée par le plafond de neuf fiches.\n\nLes positions gauche-droite sont notre estimation du Chapel Hill Expert Survey 2024, qui n'a pas pu être ouvert ; Rozwój Plus et Centrum sont trop récents pour y figurer. Le PiS et Razem sont classés extrême droite et extrême gauche parce que The PopuList les classe ainsi. Rozwój Plus est une association et Centrum un groupe : aucun n'a encore de programme ni de comptes contrôlés, et le financement n'est ventilé que là où nous avons ouvert la résolution de la PKW (PiS, PSL).\n\nLes liens de presse proviennent uniquement de la liste validée du panneau médias : l'agence PAP, le vérificateur EFCSN Demagog et les diffuseurs les plus fiables (Polsat News, RMF FM, TVN24). Le tableau 2026 de confiance par marque du Reuters Institute n'a pas pu être lu ; ses chiffres de 2023 sont utilisés. Les faits rapportés seulement par d'autres titres ont été réécrits à partir de sources officielles ou retirés, dont un décompte des vetos présidentiels, le bilan d'un journal sur les « 100 engagements » et une condamnation de première instance de 2025.\n\nAucun bilan indépendant des promesses n'a pu être ouvert : le suivi n'en affiche pas. Le taux d'homicides vient d'un site de données reprenant les chiffres de l'ONUDC. Les affaires ne figurent qu'avec un acte officiel (mise en cause, renvoi, jugement, vote sur l'immunité) ; les simples allégations sont écartées.",
    "Los escaños por grupo son el recuento de Polsat News del 29 de julio de 2026: la página de grupos del Sejm y la del Gobierno no pudieron leerse para esta actualización, así que no se muestran cambios posteriores de diputados sueltos, y los cuatro escaños que ese recuento no asigna figuran como tales en el gráfico. Se muestran nueve grupos, por escaños; la Konfederacja Korony Polskiej (tres diputados) queda fuera por el límite de nueve fichas.\n\nLas posiciones izquierda-derecha son nuestra estimación del Chapel Hill Expert Survey 2024, que no pudo abrirse; Rozwój Plus y Centrum son demasiado recientes para figurar en él. El PiS y Razem figuran como extrema derecha y extrema izquierda porque The PopuList los clasifica así. Rozwój Plus es una asociación y Centrum un grupo: ninguno tiene aún programa ni cuentas auditadas, y la financiación solo se desglosa donde abrimos la resolución de la PKW (PiS, PSL).\n\nLos enlaces de prensa proceden solo de la lista validada del panel de medios: la agencia PAP, el verificador EFCSN Demagog y las emisoras más fiables (Polsat News, RMF FM, TVN24). La tabla de confianza por marca de 2026 del Reuters Institute no pudo leerse, así que se usan sus cifras de 2023. Los hechos publicados solo por otros medios se reescribieron a partir de fuentes oficiales o se retiraron, entre ellos un recuento de vetos presidenciales, el balance de un diario sobre los «100 compromisos» y una condena en primera instancia de 2025.\n\nNo pudo abrirse ningún balance independiente de promesas, así que el seguimiento no muestra ninguno. La tasa de homicidios procede de un sitio de datos que reproduce cifras de la ONUDD. Los casos solo figuran con un acto oficial (imputación, acusación, sentencia, votación de inmunidad); las meras alegaciones quedan fuera."),
  gov: {
    who: L3("Prime Minister Donald Tusk (KO) since December 2023, governing with PSL, Polska 2050 and Lewica; the Centrum club, formed from a split of Polska 2050 in February 2026, keeps the climate ministry. President Karol Nawrocki (backed by PiS) since 6 August 2025.",
      "Le Premier ministre Donald Tusk (KO) depuis décembre 2023, qui gouverne avec le PSL, Polska 2050 et Lewica ; le groupe Centrum, né d'une scission de Polska 2050 en février 2026, conserve le ministère du Climat. Le président Karol Nawrocki (soutenu par le PiS) depuis le 6 août 2025.",
      "El primer ministro Donald Tusk (KO) desde diciembre de 2023, que gobierna con el PSL, Polska 2050 y Lewica; el grupo Centrum, surgido de una escisión de Polska 2050 en febrero de 2026, conserva el Ministerio del Clima. El presidente Karol Nawrocki (apoyado por el PiS) desde el 6 de agosto de 2025."),
    how: L3("In October 2023 PiS came first (35.38%, 194 seats) but lost its majority; KO (157 seats), Trzecia Droga (65) and Lewica (26) together won 248 of 460 seats, with 74.38% turnout. After the 2024 Razem exit and the 2026 splits, the coalition clubs total about 239 MPs (Polsat News count, July 2026).",
      "En octobre 2023, le PiS est arrivé en tête (35,38 %, 194 sièges) mais a perdu sa majorité ; la KO (157 sièges), Trzecia Droga (65) et Lewica (26) ont obtenu ensemble 248 sièges sur 460, avec 74,38 % de participation. Après le départ de Razem en 2024 et les scissions de 2026, les groupes de la coalition comptent environ 239 députés (décompte de Polsat News, juillet 2026).",
      "En octubre de 2023 el PiS quedó primero (35,38 %, 194 escaños) pero perdió la mayoría; la KO (157 escaños), Trzecia Droga (65) y Lewica (26) sumaron 248 de 460, con un 74,38 % de participación. Tras la salida de Razem en 2024 y las escisiones de 2026, los grupos de la coalición suman unos 239 diputados (recuento de Polsat News, julio de 2026)."),
    sat: L3("CBOS (991 people, 11-21 June 2026): 32% support the government, 42% oppose it and 23% are indifferent; 33% rate its work as good and 54% as bad; 35% are satisfied that Tusk is Prime Minister, 54% are not.",
      "CBOS (991 personnes, 11-21 juin 2026) : 32 % soutiennent le gouvernement, 42 % s'y opposent et 23 % sont indifférents ; 33 % jugent son action bonne et 54 % mauvaise ; 35 % sont satisfaits que Tusk soit Premier ministre, 54 % non.",
      "CBOS (991 personas, 11-21 de junio de 2026): el 32 % apoya al Gobierno, el 42 % se opone y el 23 % es indiferente; el 33 % valora bien su trabajo y el 54 % mal; el 35 % está satisfecho con Tusk como primer ministro y el 54 % no."),
    satSrc: { t: "CBOS, Stosunek do rządu w czerwcu (raport 65/2026)", u: "https://www.cbos.pl/PL/publikacje/raporty/open_file.php?id=7225" },
    prog: [
      [
        L3("Coalition agreement of KO, Trzecia Droga (PSL and Polska 2050) and Lewica, signed 10 November 2023 (full text published by RMF FM)",
          "Accord de coalition entre la KO, Trzecia Droga (PSL et Polska 2050) et Lewica, signé le 10 novembre 2023 (texte intégral publié par RMF FM)",
          "Acuerdo de coalición de la KO, Trzecia Droga (PSL y Polska 2050) y Lewica, firmado el 10 de noviembre de 2023 (texto completo publicado por RMF FM)"),
        "https://www.rmf24.pl/fakty/news-umowa-koalicyjna-publikujemy-caly-tekst,nId,7140751"
      ],
      [
        L3("KO's '100 concretes for the first 100 days' (2023 campaign), listed by Demagog",
          "Les « 100 engagements concrets pour les 100 premiers jours » de la KO (campagne 2023), recensés par Demagog",
          "Los «100 compromisos concretos para los primeros 100 días» de la KO (campaña de 2023), recogidos por Demagog"),
        "https://demagog.org.pl/obietnice-wyborcze/100-konkretow-obietnice-rzadu-donalda-tuska/"
      ]
    ],
    track: [
      [
        L3("Demagog, an EFCSN-verified fact-checker, reviews the '100 concretes' promise by promise; its two-year review (December 2025) and live tracker could not be opened for this update, so no figure is shown. We found no other independent tally in a validated source.",
          "Demagog, vérificateur certifié par l'EFCSN, passe en revue les « 100 engagements » un par un ; son bilan à deux ans (décembre 2025) et son suivi en ligne n'ont pas pu être ouverts pour cette mise à jour, aucun chiffre n'est donc affiché. Nous n'avons trouvé aucun autre bilan indépendant dans une source validée.",
          "Demagog, verificador certificado por la EFCSN, revisa los «100 compromisos» uno por uno; su balance a dos años (diciembre de 2025) y su seguimiento en línea no pudieron abrirse para esta actualización, así que no se muestra ninguna cifra. No encontramos otro balance independiente en una fuente validada."),
        "https://demagog.org.pl/analizy_i_raporty/100-konkretow-po-dwoch-latach-ile-zrealizowano/"
      ],
      [
        L3("Not independent: on 19 August 2026 Donald Tusk said the PLN 60,000 tax-free allowance, one of the 100 concretes, was 'hardly realistic' in 2027 and 2028 because of the defence effort, while 'not giving it up' (Polsat News).",
          "Non indépendant : le 19 août 2026, Donald Tusk a jugé l'abattement de 60 000 zł, l'un des 100 engagements, « peu réaliste » en 2027 et 2028 à cause de l'effort de défense, tout en assurant « ne pas y renoncer » (Polsat News).",
          "No independiente: el 19 de agosto de 2026 Donald Tusk calificó el mínimo exento de 60.000 zł, uno de los 100 compromisos, de «poco realista» en 2027 y 2028 por el esfuerzo de defensa, aunque «sin renunciar a él» (Polsat News)."),
        "https://www.polsatnews.pl/wiadomosc/2026-08-19/zmiany-w-progu-podatkowym-tusk-oglosil-decyzje/"
      ]
    ],
    fx: [
      [
        L3("Statistics Poland (GUS): real GDP grew 3.6% in 2025; consumer prices were 2.2% higher year on year in January 2026; registered unemployment was 6.0%.",
          "Office statistique (GUS) : PIB réel en hausse de 3,6 % en 2025 ; prix à la consommation en hausse de 2,2 % sur un an en janvier 2026 ; chômage enregistré à 6,0 %.",
          "Oficina de Estadística (GUS): el PIB real creció un 3,6 % en 2025; los precios al consumo subieron un 2,2 % interanual en enero de 2026; el paro registrado fue del 6,0 %."),
        "https://ssgk.stat.gov.pl/Sytuacja_spo%C5%82eczno-gospodarcza_kraju_01.2026.pdf"
      ],
      [
        L3("GUS (October 2026 notification): general government deficit of 7.2% of GDP in 2025 (PLN 283.6 billion); public debt at 59.6% of GDP.",
          "GUS (notification d'octobre 2026) : déficit public de 7,2 % du PIB en 2025 (283,6 milliards de zł) ; dette publique à 59,6 % du PIB.",
          "GUS (notificación de octubre de 2026): déficit público del 7,2 % del PIB en 2025 (283.600 millones de zł); deuda pública del 59,6 % del PIB."),
        "https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/statystyka-sektora-instytucji-rzadowych-i-samorzadowych/deficyt-i-dlug-sektora-instytucji-rzadowych-i-samorzadowych-w-latach-2022-2025,1,43.html"
      ],
      [
        L3("Energy regulator (URE, December 2025): household electricity averages PLN 495.16/MWh net in 2026, about 1% below the frozen 2025 price; with distribution charges, a typical bill rises about 3% a month.",
          "Régulateur de l'énergie (URE, décembre 2025) : l'électricité des ménages coûte en moyenne 495,16 zł/MWh hors taxes en 2026, environ 1 % sous le prix gelé de 2025 ; avec la distribution, une facture type augmente d'environ 3 % par mois.",
          "Regulador de la energía (URE, diciembre de 2025): la electricidad de los hogares cuesta de media 495,16 zł/MWh netos en 2026, en torno a un 1 % por debajo del precio congelado de 2025; con la distribución, una factura típica sube cerca de un 3 % al mes."),
        "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html"
      ]
    ]
  },
  watch: [
    [
      "2027-10-24",
      L3("Sejm and Senate election (estimated date; the President sets it, between mid-October and early November 2027).",
        "Élections à la Diète et au Sénat (date estimée ; le président la fixe, entre la mi-octobre et début novembre 2027).",
        "Elecciones al Sejm y al Senado (fecha estimada; la fija el presidente, entre mediados de octubre y principios de noviembre de 2027)."),
      "https://lexlege.pl/konstytucja-rzeczypospolitej-polskiej/art-98/"
    ],
    [
      null,
      L3("Zbigniew Ziobro: in July 2026 Poland sent the United States an extradition and arrest request covering 19 of the 26 acts in the Justice Fund case; the US Justice Department and, if it goes ahead, a federal judge must now rule. He denies wrongdoing.",
        "Zbigniew Ziobro : en juillet 2026, la Pologne a transmis aux États-Unis une demande d'extradition et d'arrestation portant sur 19 des 26 faits du dossier du Fonds de justice ; le département américain de la Justice puis, le cas échéant, un juge fédéral doivent statuer. Il conteste.",
        "Zbigniew Ziobro: en julio de 2026 Polonia envió a Estados Unidos una solicitud de extradición y detención por 19 de los 26 hechos del caso del Fondo de Justicia; ahora deben pronunciarse el Departamento de Justicia estadounidense y, si sigue adelante, un juez federal. Él lo niega."),
      "https://tvn24.pl/polska/ekstradycja-zbigniewa-ziobry-nieoficjalnie-jest-wniosek-do-usa-st9160450"
    ],
    [
      null,
      L3("Marcin Romanowski: European arrest warrant reissued in February 2026; his whereabouts have been unknown since he left his Budapest flat in April 2026.",
        "Marcin Romanowski : mandat d'arrêt européen réémis en février 2026 ; on ignore où il se trouve depuis qu'il a quitté son appartement de Budapest en avril 2026.",
        "Marcin Romanowski: orden de detención europea reemitida en febrero de 2026; se desconoce su paradero desde que dejó su piso de Budapest en abril de 2026."),
      "https://tvn24.pl/polska/gdzie-jest-marcin-romanowski-lokal-w-budapeszcie-wyczyszczony-st9040454?source=rss"
    ],
    [
      "2026-11-17",
      L3("Constitutional Tribunal: plenary assembly of judges on the requests to lift the immunity of its suspended president Bogdan Święczkowski, including consent to his temporary arrest, and of vice-president Bartłomiej Sochański.",
        "Tribunal constitutionnel : assemblée plénière des juges sur les demandes de levée d'immunité de son président suspendu, Bogdan Święczkowski, y compris l'accord à sa détention provisoire, et du vice-président Bartłomiej Sochański.",
        "Tribunal Constitucional: asamblea plenaria de jueces sobre las peticiones de levantar la inmunidad de su presidente suspendido, Bogdan Święczkowski, incluido el permiso para su detención provisional, y del vicepresidente Bartłomiej Sochański."),
      "https://tvn24.pl/polska/nowe-oswiadczenie-sedzi-korwin-piotrowskiej-tak-dziala-trybunal-konstytucyjny-st9337984"
    ],
    [
      null,
      L3("Former Prime Minister Mateusz Morawiecki (Rozwój Plus): charged in February 2025 over the decisions behind the 2020 postal election; prosecutors had planned an indictment by the end of 2025.",
        "L'ex-Premier ministre Mateusz Morawiecki (Rozwój Plus) : mis en cause en février 2025 pour les décisions liées à l'élection par correspondance de 2020 ; le parquet prévoyait un acte d'accusation fin 2025.",
        "El ex primer ministro Mateusz Morawiecki (Rozwój Plus): imputado en febrero de 2025 por las decisiones de la elección por correo de 2020; la fiscalía preveía una acusación formal a finales de 2025."),
      "https://www.rmf24.pl/fakty/polityka/news-mateusz-morawiecki-w-prokuraturze-ws-wyborow-kopertowych-ust,nId,8024142"
    ],
    [
      null,
      L3("MP Wojciech Król (KO, suspended by his club): held in pre-trial detention for 88 days from 5 November 2026, on the European Public Prosecutor's appeal, in a corruption case over EU-funded tram projects in Silesia; he says he is innocent.",
        "Le député Wojciech Król (KO, suspendu par son groupe) : placé en détention provisoire pour 88 jours le 5 novembre 2026, sur appel du Parquet européen, dans un dossier de corruption lié à des projets de tramway financés par l'UE en Silésie ; il se dit innocent.",
        "El diputado Wojciech Król (KO, suspendido por su grupo): en prisión provisional durante 88 días desde el 5 de noviembre de 2026, tras el recurso de la Fiscalía Europea, en un caso de corrupción ligado a proyectos de tranvía financiados por la UE en Silesia; dice ser inocente."),
      "https://www.polsatnews.pl/wiadomosc/2026-11-05/posel-wojciech-krol-aresztowany-na-sali-sadowej-sad-zdecydowal/"
    ],
    [
      null,
      L3("EU Digital Services Act: President Nawrocki vetoed the implementing bill on 13 November 2026, saying parts of it amounted to preventive censorship; the government had tied it to an EU obligation.",
        "Règlement européen sur les services numériques : le président Nawrocki a mis son veto au texte d'application le 13 novembre 2026, estimant que certaines dispositions relevaient de la censure préventive ; le gouvernement le présentait comme une obligation européenne.",
        "Reglamento europeo de servicios digitales: el presidente Nawrocki vetó la ley de aplicación el 13 de noviembre de 2026, al considerar que parte de ella equivalía a censura preventiva; el Gobierno la presentaba como una obligación europea."),
      "https://www.polsatnews.pl/wiadomosc/2026-11-13/ustawa-o-uslugach-cyfrowych-prezydent-podjal-decyzje/"
    ],
    [
      null,
      L3("Public media: the government's reform bill has not reached the Sejm; a court case on TVP's supervisory board is pending.",
        "Médias publics : le projet de réforme du gouvernement n'est pas arrivé à la Diète ; un litige sur le conseil de surveillance de TVP est en cours.",
        "Medios públicos: el proyecto de reforma del Gobierno no ha llegado al Sejm; está pendiente un litigio sobre el consejo de supervisión de TVP."),
      "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych"
    ]
  ],
  turnout: {
    last: L3("74.38% in the October 2023 Sejm election, the highest since 1989; 71.63% in the June 2025 presidential run-off",
      "74,38 % aux législatives d'octobre 2023, record depuis 1989 ; 71,63 % au second tour de la présidentielle de juin 2025",
      "74,38 % en las legislativas de octubre de 2023, récord desde 1989; 71,63 % en la segunda vuelta presidencial de junio de 2025"),
    src: "https://pkw.gov.pl/uploaded_files/1697617008_obwieszczenie-sejm.pdf",
    how: L3("Citizens aged 18 and over are registered automatically at their permanent address. To vote elsewhere in Poland you can ask to be added to the register where you are staying (also online, via gov.pl) or obtain a certificate to vote at any polling station. Poles abroad register with a consulate before each election. Voters with disabilities can vote by post or by proxy.",
      "Les citoyens de 18 ans et plus sont inscrits d'office à leur adresse permanente. Pour voter ailleurs en Pologne, on peut demander son inscription là où l'on séjourne (aussi en ligne, sur gov.pl) ou obtenir un certificat permettant de voter dans n'importe quel bureau. Les Polonais de l'étranger s'inscrivent auprès d'un consulat avant chaque scrutin. Les électeurs handicapés peuvent voter par correspondance ou par procuration.",
      "Los ciudadanos de 18 años o más figuran de oficio en su domicilio permanente. Para votar en otro lugar de Polonia se puede pedir la inscripción donde se reside (también en línea, en gov.pl) u obtener un certificado para votar en cualquier colegio. Los polacos en el extranjero se inscriben en un consulado antes de cada elección. Los votantes con discapacidad pueden votar por correo o por poder.")
  },
  progNote: L3("Seats are the Polsat News count of 29 July 2026 (the Sejm's own page could not be read for this update). Rozwój Plus is an association, not yet a party (on 13 November 2026 Mateusz Morawiecki said it would run alone), and Centrum is a club since February 2026; neither has an election programme or audited accounts yet. Konfederacja Korony Polskiej (Grzegorz Braun, a three-MP circle) is not shown because the site lists at most nine groups by seats. See the method note for positions and sources.",
    "Les sièges sont ceux du décompte de Polsat News du 29 juillet 2026 (la page de la Diète n'a pas pu être lue pour cette mise à jour). Rozwój Plus est une association, pas encore un parti (le 13 novembre 2026, Mateusz Morawiecki a annoncé qu'elle se présenterait seule), et Centrum un groupe depuis février 2026 ; aucun des deux n'a encore de programme électoral ni de comptes contrôlés. La Konfederacja Korony Polskiej (Grzegorz Braun, cercle de trois députés) n'apparaît pas, car le site affiche au plus neuf groupes par nombre de sièges. Voir la note de méthode pour les positions et les sources.",
    "Los escaños son el recuento de Polsat News del 29 de julio de 2026 (la página del Sejm no pudo leerse para esta actualización). Rozwój Plus es una asociación, aún no un partido (el 13 de noviembre de 2026 Mateusz Morawiecki anunció que concurriría en solitario), y Centrum es un grupo desde febrero de 2026; ninguno tiene aún programa electoral ni cuentas auditadas. La Konfederacja Korony Polskiej (Grzegorz Braun, círculo de tres diputados) no aparece porque el sitio muestra como máximo nueve grupos por escaños. Véase la nota de método sobre posiciones y fuentes."),
  parties: [
    {
      id: "ko",
      born: { y: 2001, old: "Platforma Obywatelska", re: 2025, gov: "lead", u: "https://www.pap.pl/aktualnosci/platforma-obywatelska-formalnie-staje-sie-koalicja-obywatelska-sad-zarejestrowal-zmiane" },
      name: "KO",
      full: "Koalicja Obywatelska",
      leader: "Donald Tusk",
      seats: L3("156 of 460 MPs (July 2026) · 30.70% and 157 seats in 2023",
        "156 députés sur 460 (juillet 2026) · 30,70 % et 157 sièges en 2023",
        "156 de 460 diputados (julio de 2026) · 30,70 % y 157 escaños en 2023"),
      role: "gov",
      pos: 0.2,
      style: "lean",
      dit: [
        L3("Restore the rule of law and hold the PiS years to account",
          "Rétablir l'État de droit et demander des comptes sur les années PiS",
          "Restablecer el Estado de derecho y pedir cuentas por los años del PiS"),
        L3("Lower taxes: a PLN 60,000 tax-free allowance",
          "Baisser les impôts : un abattement de 60 000 zł",
          "Bajar impuestos: un mínimo exento de 60.000 zł"),
        L3("Housing: 0% mortgages for first homes",
          "Logement : un crédit à 0 % pour le premier achat",
          "Vivienda: hipotecas al 0 % para la primera casa"),
        L3("Women's rights: legal abortion up to 12 weeks",
          "Droits des femmes : l'avortement légal jusqu'à 12 semaines",
          "Derechos de las mujeres: aborto legal hasta las 12 semanas")
      ],
      fait: [
        [
          L3("Promised to raise the tax-free allowance to PLN 60,000; it is still PLN 30,000. On 19 August 2026 Donald Tusk called it 'hardly realistic' in 2027 and 2028 because of the 'great defence effort', and 'certainly' impossible within a year and a half, while saying 'we are not giving it up'.",
            "Promettait de porter l'abattement fiscal à 60 000 zł ; il est toujours de 30 000 zł. Le 19 août 2026, Donald Tusk l'a jugé « peu réaliste » en 2027 et 2028 en raison du « grand effort de défense », et « certainement » impossible d'ici un an et demi, tout en assurant : « nous n'y renonçons pas ».",
            "Prometió subir el mínimo exento a 60.000 zł; sigue en 30.000 zł. El 19 de agosto de 2026 Donald Tusk lo calificó de «poco realista» en 2027 y 2028 por el «gran esfuerzo de defensa», y «seguramente» imposible en año y medio, aunque aseguró: «no renunciamos a ello»."),
          "https://www.polsatnews.pl/wiadomosc/2026-08-19/zmiany-w-progu-podatkowym-tusk-oglosil-decyzje/"
        ],
        [
          L3("Promised public media free of political control; in December 2023 its culture minister put TVP and Polskie Radio into liquidation. In July 2026 the regulator KRRiT called it a sham: the companies still broadcast and hire, received PLN 1.2 billion of budget money in six months, and the reform bill has not reached the Sejm.",
            "Promettait des médias publics libérés du contrôle politique ; en décembre 2023, son ministre de la Culture a mis TVP et Polskie Radio en liquidation. En juillet 2026, le régulateur KRRiT a parlé de simulacre : les sociétés diffusent et recrutent toujours, ont reçu 1,2 milliard de zł du budget en six mois, et le projet de réforme n'est pas arrivé à la Diète.",
            "Prometió medios públicos libres de control político; en diciembre de 2023 su ministro de Cultura puso TVP y Polskie Radio en liquidación. En julio de 2026 el regulador KRRiT habló de liquidación ficticia: las empresas siguen emitiendo y contratando, recibieron 1.200 millones de zł del presupuesto en seis meses y la reforma no ha llegado al Sejm."),
          "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych"
        ],
        [
          L3("Promised legal abortion up to 12 weeks; even the narrower bill decriminalising help with abortion failed 215 to 218 in July 2024, with three KO MPs not voting, among them Roman Giertych.",
            "Promettait l'avortement légal jusqu'à 12 semaines ; même le texte plus limité dépénalisant l'aide à l'avortement a échoué par 215 voix contre 218 en juillet 2024, trois députés KO n'ayant pas voté, dont Roman Giertych.",
            "Prometió el aborto legal hasta las 12 semanas; incluso el proyecto más limitado que despenalizaba la ayuda al aborto fracasó por 215 a 218 en julio de 2024, con tres diputados de la KO sin votar, entre ellos Roman Giertych."),
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886"
        ]
      ],
      ok: [
        L3("The European Commission closed its Article 7 rule-of-law procedure against Poland in May 2024, citing the new government's measures",
          "La Commission européenne a clos en mai 2024 sa procédure de l'article 7 contre la Pologne, en citant les mesures du nouveau gouvernement",
          "La Comisión Europea cerró en mayo de 2024 su procedimiento del artículo 7 contra Polonia, citando las medidas del nuevo Gobierno"),
        L3("Its 'Active Parent' benefit had paid families about PLN 1.15 billion by February 2025, four months after its launch (ZUS)",
          "Son allocation « Parent actif » avait versé environ 1,15 milliard de zł aux familles en février 2025, quatre mois après son lancement (ZUS)",
          "Su prestación «Padre activo» había pagado unos 1.150 millones de zł a las familias en febrero de 2025, cuatro meses después de su puesta en marcha (ZUS)"),
        L3("Under its government Poland rose from 31st to 27th in RSF's World Press Freedom Index (2026)",
          "Sous son gouvernement, la Pologne est passée de la 31e à la 27e place du classement RSF de la liberté de la presse (2026)",
          "Bajo su Gobierno, Polonia pasó del puesto 31 al 27 en la Clasificación de la Libertad de Prensa de RSF (2026)")
      ],
      casier: [
        [
          "inv",
          L3("Wojciech Król (MP): charged in 2026 with four corruption-related offences in a European Public Prosecutor's case over EU-funded tram projects in Silesia; the Sejm lifted his immunity; suspended by the KO club; on 5 November 2026 the Katowice regional court ordered 88 days of pre-trial detention; he says he is innocent (2026)",
            "Wojciech Król (député) : mis en cause en 2026 pour quatre infractions liées à la corruption dans un dossier du Parquet européen sur des projets de tramway financés par l'UE en Silésie ; la Diète a levé son immunité ; suspendu par le groupe KO ; le 5 novembre 2026, le tribunal régional de Katowice a ordonné 88 jours de détention provisoire ; il se dit innocent (2026)",
            "Wojciech Król (diputado): imputado en 2026 por cuatro delitos ligados a la corrupción en un caso de la Fiscalía Europea sobre proyectos de tranvía financiados por la UE en Silesia; el Sejm levantó su inmunidad; suspendido por el grupo de la KO; el 5 de noviembre de 2026 el tribunal regional de Katowice ordenó 88 días de prisión provisional; dice ser inocente (2026)"),
          "https://www.polsatnews.pl/wiadomosc/2026-11-05/posel-wojciech-krol-aresztowany-na-sali-sadowej-sad-zdecydowal/",
          "A"
        ]
      ],
      chute: L3("If you vote KO, know that the PLN 60,000 tax-free allowance promised among its '100 concretes for the first 100 days' is still PLN 30,000, and Donald Tusk calls it 'hardly realistic' in 2027 and 2028.",
        "Si vous votez KO, sachez que l'abattement de 60 000 zł promis parmi ses « 100 engagements pour les 100 premiers jours » est toujours de 30 000 zł, et que Donald Tusk le juge « peu réaliste » en 2027 et 2028.",
        "Si votas a KO, debes saber que el mínimo exento de 60.000 zł prometido entre sus «100 compromisos para los primeros 100 días» sigue en 30.000 zł, y que Donald Tusk lo considera «poco realista» en 2027 y 2028."),
      prom: [
        [
          L3("PLN 60,000 tax-free allowance (100 concretes): still PLN 30,000; in August 2026 Tusk called it 'hardly realistic' before 2029",
            "Abattement de 60 000 zł (100 engagements) : toujours 30 000 zł ; en août 2026, Tusk l'a jugé « peu réaliste » avant 2029",
            "Mínimo exento de 60.000 zł (100 compromisos): sigue en 30.000 zł; en agosto de 2026 Tusk lo calificó de «poco realista» antes de 2029"),
          "broken",
          "https://www.polsatnews.pl/wiadomosc/2026-08-19/zmiany-w-progu-podatkowym-tusk-oglosil-decyzje/"
        ],
        [
          L3("Lower health contribution for entrepreneurs (2023 campaign): passed with KO votes in April 2025, vetoed by President Duda in May 2025",
            "Cotisation santé plus basse pour les entrepreneurs (campagne 2023) : votée avec les voix de la KO en avril 2025, veto du président Duda en mai 2025",
            "Cotización sanitaria más baja para autónomos (campaña de 2023): aprobada con los votos de la KO en abril de 2025, vetada por el presidente Duda en mayo de 2025"),
          "partial",
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("'Active Parent' (babciowe) benefit: in force since October 2024; about PLN 1.15 billion paid by February 2025, including 228,100 payments to working parents",
            "Allocation « Parent actif » (babciowe) : en vigueur depuis octobre 2024 ; environ 1,15 milliard de zł versés en février 2025, dont 228 100 versements à des parents actifs",
            "Prestación «Padre activo» (babciowe): vigente desde octubre de 2024; unos 1.150 millones de zł pagados en febrero de 2025, de ellos 228.100 pagos a padres trabajadores"),
          "kept",
          "https://www.zus.pl/en/-/oko%C5%82o-1-mld-153-mln-z%C5%82-%C5%9Bwiadcze%C5%84-w-ramach-programu-aktywny-rodzic",
          "https://www.zus.pl/en/-/oko%C5%82o-1-mld-153-mln-z%C5%82-%C5%9Bwiadcze%C5%84-w-ramach-programu-aktywny-rodzic"
        ],
        [
          L3("Legal abortion up to 12 weeks: no law; even decriminalising assistance failed 215-218, with partners PSL largely against",
            "Avortement légal jusqu'à 12 semaines : pas de loi ; même la dépénalisation de l'aide a échoué à 215 contre 218, le partenaire PSL votant surtout contre",
            "Aborto legal hasta las 12 semanas: sin ley; incluso despenalizar la ayuda fracasó por 215 a 218, con el socio PSL votando mayoritariamente en contra"),
          "partial",
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886"
        ]
      ],
      pairs: [
        [
          L3("'Active Parent' benefit: PLN 1,500 a month for working parents of toddlers (100 concretes)",
            "Allocation « Parent actif » : 1 500 zł par mois pour les parents actifs de jeunes enfants (100 engagements)",
            "Prestación «Padre activo»: 1.500 zł al mes para padres trabajadores de niños pequeños (100 compromisos)"),
          L3("In force since October 2024. By February 2025 the social insurer ZUS had paid about PLN 1.15 billion under the programme's three strands, including PLN 362.7 million in 228,100 payments to working parents of toddlers.",
            "En vigueur depuis octobre 2024. En février 2025, l'assureur social ZUS avait versé environ 1,15 milliard de zł au titre des trois volets du programme, dont 362,7 millions en 228 100 versements à des parents actifs de jeunes enfants.",
            "Vigente desde octubre de 2024. En febrero de 2025 la Seguridad Social (ZUS) había pagado unos 1.150 millones de zł en las tres líneas del programa, de ellos 362,7 millones en 228.100 pagos a padres trabajadores de niños pequeños."),
          "https://www.zus.pl/en/-/oko%C5%82o-1-mld-153-mln-z%C5%82-%C5%9Bwiadcze%C5%84-w-ramach-programu-aktywny-rodzic",
          "kept"
        ],
        [
          L3("Women's rights: legal abortion up to the 12th week (100 concretes)",
            "Droits des femmes : l'avortement légal jusqu'à la 12e semaine (100 engagements)",
            "Derechos de las mujeres: aborto legal hasta la semana 12 (100 compromisos)"),
          L3("No law. On 12 July 2024 even Lewica's narrower bill decriminalising help with abortion failed 215 to 218: KO voted for, but three of its MPs, including Roman Giertych, did not vote, and most PSL MPs voted against.",
            "Pas de loi. Le 12 juillet 2024, même le texte plus limité de Lewica dépénalisant l'aide à l'avortement a échoué par 215 voix contre 218 : la KO a voté pour, mais trois de ses députés, dont Roman Giertych, n'ont pas voté, et la plupart des députés PSL ont voté contre.",
            "Ninguna ley. El 12 de julio de 2024 incluso el proyecto más limitado de Lewica para despenalizar la ayuda al aborto fracasó por 215 votos a 218: la KO votó a favor, pero tres de sus diputados, entre ellos Roman Giertych, no votaron, y la mayoría de los diputados del PSL votó en contra."),
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886",
          "mixed",
          ["https://demagog.org.pl/analizy_i_raporty/co-dzieje-sie-z-projektami-aborcyjnymi-sprawdzamy/"]
        ],
        [
          L3("Public media free of political control",
            "Des médias publics libérés du contrôle politique",
            "Medios públicos libres de control político"),
          L3("In December 2023, after President Duda vetoed the PLN 3 billion set aside for them, its culture minister put TVP and Polskie Radio into liquidation, saying it would keep them running. Nearly three years on they are still 'in liquidation', received PLN 1.2 billion from the budget in the first half of 2026, and the promised reform bill has not reached the Sejm (KRRiT, July 2026). In June 2026, 18% of Poles found public TV news credible and 35% did not (CBOS).",
            "En décembre 2023, après le veto du président Duda sur les 3 milliards de zł qui leur étaient destinés, son ministre de la Culture a mis TVP et Polskie Radio en liquidation, pour, disait-il, assurer leur fonctionnement. Près de trois ans plus tard, elles sont toujours « en liquidation », ont reçu 1,2 milliard de zł du budget au premier semestre 2026, et le projet de réforme promis n'est pas arrivé à la Diète (KRRiT, juillet 2026). En juin 2026, 18 % des Polonais jugeaient crédible l'information de la télévision publique et 35 % non (CBOS).",
            "En diciembre de 2023, después de que el presidente Duda vetara los 3.000 millones de zł previstos para ellos, su ministro de Cultura puso TVP y Polskie Radio en liquidación, para, según dijo, asegurar su funcionamiento. Casi tres años después siguen «en liquidación», recibieron 1.200 millones de zł del presupuesto en el primer semestre de 2026 y la reforma prometida no ha llegado al Sejm (KRRiT, julio de 2026). En junio de 2026, el 18 % de los polacos consideraba creíbles las noticias de la televisión pública y el 35 % no (CBOS)."),
          "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych",
          "mixed",
          ["https://www.pap.pl/en/news/culture-minister-decides-put-public-mass-media-companies-liquidation", "https://www.cbos.pl/PL/publikacje/raporty_tekst.php?id=7273"]
        ],
        [
          L3("Restore the rule of law",
            "Rétablir l'État de droit",
            "Restablecer el Estado de derecho"),
          L3("On 29 May 2024 the European Commission closed its Article 7 procedure, having found on 6 May that there was no longer a clear risk of a serious breach of the rule of law. The repair of the courts is stuck: on 30 October 2026 the dispute over the Constitutional Tribunal escalated, when a judge elected by the current Sejm suspended its president and President Nawrocki went to the building to contest it.",
            "Le 29 mai 2024, la Commission européenne a clos sa procédure de l'article 7, après avoir estimé le 6 mai qu'il n'existait plus de risque clair de violation grave de l'État de droit. La réparation des juridictions est bloquée : le 30 octobre 2026, le conflit sur le Tribunal constitutionnel s'est envenimé quand une juge élue par l'actuelle Diète a suspendu son président et que le président Nawrocki s'est rendu dans le bâtiment pour le contester.",
            "El 29 de mayo de 2024 la Comisión Europea cerró su procedimiento del artículo 7, tras considerar el 6 de mayo que ya no había un riesgo claro de violación grave del Estado de derecho. La reparación de los tribunales está atascada: el 30 de octubre de 2026 la disputa sobre el Tribunal Constitucional se agravó cuando una jueza elegida por el actual Sejm suspendió a su presidente y el presidente Nawrocki acudió al edificio para impugnarlo."),
          "https://ec.europa.eu/commission/presscorner/detail/en/mex_24_2986",
          "mixed",
          ["https://ec.europa.eu/commission/presscorner/api/files/document/print/es/ip_24_2461/IP_24_2461_EN.pdf", "https://tvn24.pl/polska/co-wydarzylo-sie-w-trybunale-konstytucyjnym-i-wokol-niego-najwazniejsze-informacje-st9317148"]
        ]
      ],
      verdict: L3("If you're considering voting for KO, it's worth looking beyond the slogans.\n\nIt promised a PLN 60,000 tax-free allowance among its '100 concretes for the first 100 days'. Three years on, it is still PLN 30,000. In August 2026 Donald Tusk called it 'hardly realistic' in 2027 and 2028 because of the defence effort, while insisting 'we are not giving it up'.\n\nIt promised public media free of political control. Its culture minister put TVP and Polskie Radio into liquidation in December 2023; in July 2026 the regulator KRRiT called that liquidation a sham. The promised reform bill has not reached the Sejm.\n\nTo be fair, its 'Active Parent' benefit had paid families about PLN 1.15 billion by February 2025, four months after its launch (ZUS), and the EU closed its rule-of-law procedure against Poland in May 2024.",
        "Si vous envisagez de voter KO, mieux vaut regarder au-delà des slogans.\n\nElle promettait un abattement fiscal de 60 000 zł parmi ses « 100 engagements pour les 100 premiers jours ». Trois ans plus tard, il est toujours de 30 000 zł. En août 2026, Donald Tusk l'a jugé « peu réaliste » en 2027 et 2028 à cause de l'effort de défense, tout en assurant : « nous n'y renonçons pas ».\n\nElle promettait des médias publics libérés du contrôle politique. Son ministre de la Culture a mis TVP et Polskie Radio en liquidation en décembre 2023 ; en juillet 2026, le régulateur KRRiT a qualifié cette liquidation de simulacre. Le projet de réforme promis n'est pas arrivé à la Diète.\n\nPour être juste, son allocation « Parent actif » avait versé environ 1,15 milliard de zł aux familles en février 2025, quatre mois après son lancement (ZUS), et l'UE a clos en mai 2024 sa procédure sur l'État de droit contre la Pologne.",
        "Si estás pensando en votar a KO, conviene mirar más allá de los eslóganes.\n\nPrometió un mínimo exento de 60.000 zł entre sus «100 compromisos para los primeros 100 días». Tres años después sigue en 30.000 zł. En agosto de 2026 Donald Tusk lo calificó de «poco realista» en 2027 y 2028 por el esfuerzo de defensa, aunque insistió: «no renunciamos a ello».\n\nPrometió medios públicos libres de control político. Su ministro de Cultura puso TVP y Polskie Radio en liquidación en diciembre de 2023; en julio de 2026 el regulador KRRiT calificó esa liquidación de ficticia. La reforma prometida no ha llegado al Sejm.\n\nPara ser justos, su prestación «Padre activo» había pagado unos 1.150 millones de zł a las familias en febrero de 2025, cuatro meses después de su puesta en marcha (ZUS), y la UE cerró en mayo de 2024 su procedimiento sobre el Estado de derecho contra Polonia."),
      fin: {
        y: "2025",
        s: "PKW, financial reports of political parties",
        src: "https://kbw.gov.pl/prawo-wyborcze/uchwaly-pkw/2025-r/8",
        p: null,
        n: L3("PKW publishes each party's audited annual report; we could not open the 2025 reports of KO's member parties, so no breakdown is shown.",
          "La PKW publie le rapport annuel contrôlé de chaque parti ; nous n'avons pas pu ouvrir les rapports 2025 des partis membres de la KO, d'où l'absence de ventilation.",
          "La PKW publica el informe anual auditado de cada partido; no pudimos abrir los informes de 2025 de los partidos miembros de la KO, así que no se muestra desglose.")
      },
      prog: [["2023 · 100 konkretów", "https://100konkretow.pl/wszystkie-konkrety/"]]
    },
    {
      id: "pis",
      born: { y: 2001, m: 6, gov: "lead", u: "https://tvn24.pl/polska/10-lat-prawa-i-sprawiedliwosci-ra174454-ls3529218" },
      name: "PiS",
      full: "Prawo i Sprawiedliwość",
      leader: "Jarosław Kaczyński",
      seats: L3("146 of 460 MPs (29 July 2026), down from 194 after the Rozwój Plus split · 35.38% in 2023",
        "146 députés sur 460 (29 juillet 2026), contre 194 avant la scission de Rozwój Plus · 35,38 % en 2023",
        "146 de 460 diputados (29 de julio de 2026), frente a 194 antes de la escisión de Rozwój Plus · 35,38 % en 2023"),
      role: "opp",
      pos: 1.2,
      edge: true,
      style: "lean",
      dit: [
        L3("Generous family benefits: 500+, then 800+",
          "Des aides familiales généreuses : 500+, puis 800+",
          "Ayudas familiares generosas: 500+ y luego 800+"),
        L3("Sovereignty within the EU",
          "La souveraineté au sein de l'UE",
          "La soberanía dentro de la UE"),
        L3("Security, a strong army and protected borders",
          "La sécurité, une armée forte et des frontières protégées",
          "Seguridad, un ejército fuerte y fronteras protegidas"),
        L3("Fighting corruption and the 'old elites'",
          "La lutte contre la corruption et les « anciennes élites »",
          "La lucha contra la corrupción y las «viejas élites»")
      ],
      fait: [
        [
          L3("Its Justice Fund, meant for victims of crime, paid PLN 25 million to the anti-corruption bureau CBA in 2017 for Pegasus spyware. In October 2025 prosecutors indicted the deputy minister who signed the agreement, now PiS MP Michał Woś, saying he knew the CBA did not qualify for such funding; he calls the case political repression and says the funding was legal.",
            "Son Fonds de justice, destiné aux victimes d'infractions, a versé 25 millions de zł au bureau anticorruption CBA en 2017 pour le logiciel espion Pegasus. En octobre 2025, le parquet a renvoyé devant le tribunal le vice-ministre signataire, aujourd'hui député PiS, Michał Woś, estimant qu'il savait que le CBA ne pouvait pas recevoir ces fonds ; il parle de répression politique et affirme que le financement était légal.",
            "Su Fondo de Justicia, destinado a las víctimas de delitos, pagó 25 millones de zł a la oficina anticorrupción CBA en 2017 por el programa espía Pegasus. En octubre de 2025 la fiscalía acusó formalmente al viceministro que firmó el acuerdo, hoy diputado del PiS, Michał Woś, por saber que la CBA no podía recibir esos fondos; él habla de represión política y sostiene que la financiación fue legal."),
          "https://www.polsatnews.pl/wiadomosc/2025-10-21/afera-wokol-funduszu-sprawiedliwosci-byly-wiceminister-z-zarzutami/"
        ],
        [
          L3("Promised 100,000 'Mieszkanie Plus' flats by 2019; the Supreme Audit Office NIK counted about 15,000 completed by October 2021 and judged the programme a failure.",
            "Promettait 100 000 logements « Mieszkanie Plus » d'ici 2019 ; la Cour des comptes NIK en a compté environ 15 000 achevés en octobre 2021 et a jugé le programme en échec.",
            "Prometió 100.000 viviendas «Mieszkanie Plus» para 2019; el Tribunal de Cuentas NIK contó unas 15.000 terminadas en octubre de 2021 y calificó el programa de fracaso."),
          "https://www.nik.gov.pl/aktualnosci/sprawy-spoleczne/program-mieszkanie-plus.html"
        ],
        [
          L3("In August 2024 PKW rejected its 2023 campaign accounts over about PLN 3.6 million of irregular spending; its 2025 subsidy was cut by just under PLN 11 million. A Supreme Court chamber whose status is disputed upheld its appeal.",
            "En août 2024, la PKW a rejeté ses comptes de campagne 2023 pour environ 3,6 millions de zł de dépenses irrégulières ; sa subvention 2025 a été réduite d'un peu moins de 11 millions. Une chambre de la Cour suprême au statut contesté a accueilli son recours.",
            "En agosto de 2024 la PKW rechazó sus cuentas de campaña de 2023 por unos 3,6 millones de zł de gastos irregulares; su subvención de 2025 se recortó en algo menos de 11 millones. Una sala del Tribunal Supremo de estatus discutido aceptó su recurso."),
          "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala"
        ]
      ],
      ok: [
        L3("Raised the child benefit to PLN 800 a month from January 2024; GUS measured extreme poverty falling from 6.6% in 2023 to 5.2% in 2024",
          "A porté l'allocation familiale à 800 zł par mois dès janvier 2024 ; le GUS a mesuré une baisse de l'extrême pauvreté de 6,6 % en 2023 à 5,2 % en 2024",
          "Subió la prestación por hijo a 800 zł al mes desde enero de 2024; el GUS midió una caída de la pobreza extrema del 6,6 % en 2023 al 5,2 % en 2024"),
        L3("Most of its MPs voted for the February 2025 law allowing asylum to be suspended at the Belarus border (386 for, 38 against)",
          "La plupart de ses députés ont voté la loi de février 2025 permettant de suspendre l'asile à la frontière biélorusse (386 pour, 38 contre)",
          "La mayoría de sus diputados votó la ley de febrero de 2025 que permite suspender el asilo en la frontera con Bielorrusia (386 a favor, 38 en contra)"),
        L3("Raised PLN 11.3 million in cash donations in 2025, about a third of its income, after the subsidy cut (PKW)",
          "A recueilli 11,3 millions de zł de dons en 2025, environ un tiers de ses recettes, après la baisse de sa subvention (PKW)",
          "Recaudó 11,3 millones de zł en donaciones en 2025, cerca de un tercio de sus ingresos, tras el recorte de la subvención (PKW)")
      ],
      casier: [
        [
          "enq",
          L3("Zbigniew Ziobro (MP, justice minister 2015-2023): prosecutors seek to charge him with 26 offences linked to the Justice Fund; the charges have not been formally presented as he is abroad (in the United States since May 2026); in July 2026 Poland sent the US an extradition and arrest request covering 19 of the 26 acts, after a Warsaw court found seven less likely; he denies wrongdoing (2026)",
            "Zbigniew Ziobro (député, ministre de la Justice 2015-2023) : le parquet veut le mettre en cause pour 26 infractions liées au Fonds de justice ; les charges ne lui ont pas été formellement notifiées car il est à l'étranger (aux États-Unis depuis mai 2026) ; en juillet 2026, la Pologne a transmis aux États-Unis une demande d'extradition et d'arrestation portant sur 19 des 26 faits, un tribunal de Varsovie ayant jugé sept d'entre eux moins probables ; il conteste (2026)",
            "Zbigniew Ziobro (diputado, ministro de Justicia 2015-2023): la fiscalía quiere imputarle 26 delitos ligados al Fondo de Justicia; los cargos no se le han notificado formalmente porque está en el extranjero (en EE. UU. desde mayo de 2026); en julio de 2026 Polonia envió a EE. UU. una solicitud de extradición y detención por 19 de los 26 hechos, después de que un tribunal de Varsovia considerara siete menos probables; lo niega (2026)"),
          "https://tvn24.pl/polska/ekstradycja-zbigniewa-ziobry-nieoficjalnie-jest-wniosek-do-usa-st9160450",
          "A"
        ],
        [
          "inv",
          L3("Marcin Romanowski (MP, deputy justice minister 2019-2023): 11 charges over the Justice Fund, including taking part in an organised group and rigging grant competitions; European arrest warrant reissued in February 2026; granted protection in Hungary; whereabouts unknown (2026)",
            "Marcin Romanowski (député, vice-ministre de la Justice 2019-2023) : 11 chefs d'accusation liés au Fonds de justice, dont la participation à un groupe organisé et le trucage de concours de subventions ; mandat d'arrêt européen réémis en février 2026 ; protection accordée en Hongrie ; lieu de séjour inconnu (2026)",
            "Marcin Romanowski (diputado, viceministro de Justicia 2019-2023): 11 cargos por el Fondo de Justicia, entre ellos participar en un grupo organizado y amañar concursos de subvenciones; orden de detención europea reemitida en febrero de 2026; protección concedida en Hungría; paradero desconocido (2026)"),
          "https://tvn24.pl/polska/gdzie-jest-marcin-romanowski-lokal-w-budapeszcie-wyczyszczony-st9040454?source=rss",
          "A"
        ],
        [
          "proc",
          L3("Michał Woś (MP, deputy justice minister): indicted in October 2025 for exceeding his powers and failing in his duties by transferring PLN 25 million from the Justice Fund to the CBA for Pegasus in 2017; he calls it political repression",
            "Michał Woś (député, vice-ministre de la Justice) : renvoyé devant le tribunal en octobre 2025 pour abus de pouvoir et manquement à ses devoirs, pour le transfert de 25 millions de zł du Fonds de justice au CBA pour Pegasus en 2017 ; il parle de répression politique",
            "Michał Woś (diputado, viceministro de Justicia): acusado formalmente en octubre de 2025 de extralimitación e incumplimiento de deberes por transferir 25 millones de zł del Fondo de Justicia a la CBA para Pegasus en 2017; habla de represión política"),
          "https://www.polsatnews.pl/wiadomosc/2025-10-21/afera-wokol-funduszu-sprawiedliwosci-byly-wiceminister-z-zarzutami/",
          "A"
        ],
        [
          "adm",
          L3("PiS (party): PKW rejected its 2023 parliamentary campaign accounts over about PLN 3.6 million of irregular spending (2024); subsidy cut by about PLN 11 million in 2025; its complaint was upheld by a Supreme Court chamber whose status the government disputes",
            "PiS (parti) : la PKW a rejeté ses comptes de campagne des législatives 2023 pour environ 3,6 millions de zł de dépenses irrégulières (2024) ; subvention réduite d'environ 11 millions en 2025 ; son recours a été accueilli par une chambre de la Cour suprême dont le gouvernement conteste le statut",
            "PiS (partido): la PKW rechazó sus cuentas de la campaña legislativa de 2023 por unos 3,6 millones de zł de gastos irregulares (2024); subvención recortada en unos 11 millones en 2025; su recurso fue aceptado por una sala del Tribunal Supremo cuyo estatus el Gobierno discute"),
          "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala",
          "A"
        ],
        [
          "enq",
          L3("Mariusz Kamiński and Maciej Wąsik (MEPs, former interior minister and deputy): European Parliament lifted their immunity so prosecutors can charge them with ignoring a final court ban on holding public office; they argue the 2024 presidential pardon covers it (2025)",
            "Mariusz Kamiński et Maciej Wąsik (eurodéputés, ancien ministre de l'Intérieur et son adjoint) : le Parlement européen a levé leur immunité pour que le parquet puisse les poursuivre pour non-respect d'une interdiction définitive d'exercer des fonctions publiques ; ils estiment que la grâce présidentielle de 2024 la couvre (2025)",
            "Mariusz Kamiński y Maciej Wąsik (eurodiputados, exministro del Interior y su adjunto): el Parlamento Europeo levantó su inmunidad para que la fiscalía pueda acusarlos de incumplir una prohibición firme de ejercer cargos públicos; alegan que el indulto presidencial de 2024 la cubre (2025)"),
          "https://www.polsatnews.pl/wiadomosc/2025-04-01/mariusz-kaminski-i-maciej-wasik-bez-immunitetow-europoslowie-zdecydowali/",
          "C"
        ],
        [
          "enq",
          L3("Daniel Obajtek (MEP): European Parliament lifted his immunity for a case over his order, as Orlen chief executive, to withdraw the weekly 'NIE' from Orlen stations and Ruch kiosks (2026)",
            "Daniel Obajtek (eurodéputé) : le Parlement européen a levé son immunité pour une affaire liée à son ordre, en tant que PDG d'Orlen, de retirer l'hebdomadaire « NIE » des stations Orlen et des kiosques Ruch (2026)",
            "Daniel Obajtek (eurodiputado): el Parlamento Europeo levantó su inmunidad por un caso sobre su orden, como consejero delegado de Orlen, de retirar el semanario «NIE» de las gasolineras Orlen y los quioscos Ruch (2026)"),
          "https://tvn24.pl/polska/immunitety-polskich-europoslow-uchylone-daniel-obajtek-patryk-jaki-grzegorz-braun-tomasz-buczek-st9020648",
          "C"
        ],
        [
          "enq",
          L3("Patryk Jaki (MEP): European Parliament lifted his immunity in a private suit by judge Igor Tuleya, who says Jaki violated his personal rights (2026)",
            "Patryk Jaki (eurodéputé) : le Parlement européen a levé son immunité dans une action privée du juge Igor Tuleya, qui l'accuse d'atteinte à ses droits personnels (2026)",
            "Patryk Jaki (eurodiputado): el Parlamento Europeo levantó su inmunidad en una querella privada del juez Igor Tuleya, que le acusa de vulnerar sus derechos personales (2026)"),
          "https://tvn24.pl/polska/immunitety-polskich-europoslow-uchylone-daniel-obajtek-patryk-jaki-grzegorz-braun-tomasz-buczek-st9020648",
          "C"
        ]
      ],
      chute: L3("If you vote PiS, know that the fund it ran for victims of crime paid PLN 25 million for the anti-corruption bureau's Pegasus spyware.",
        "Si vous votez PiS, sachez que le fonds qu'il gérait pour les victimes d'infractions a payé 25 millions de zł le logiciel espion Pegasus du bureau anticorruption.",
        "Si votas a PiS, debes saber que el fondo que gestionaba para las víctimas de delitos pagó 25 millones de zł por el programa espía Pegasus de la oficina anticorrupción."),
      prom: [
        [
          L3("800+ child benefit (2023 campaign): in force since January 2024; extreme poverty fell from 6.6% to 5.2% that year (GUS)",
            "Allocation 800+ (campagne 2023) : en vigueur depuis janvier 2024 ; l'extrême pauvreté est passée de 6,6 % à 5,2 % cette année-là (GUS)",
            "Prestación 800+ (campaña de 2023): vigente desde enero de 2024; la pobreza extrema bajó del 6,6 % al 5,2 % ese año (GUS)"),
          "kept",
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf",
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf"
        ],
        [
          L3("100,000 'Mieszkanie Plus' flats by 2019: about 15,000 completed by October 2021 (NIK)",
            "100 000 logements « Mieszkanie Plus » d'ici 2019 : environ 15 000 achevés en octobre 2021 (NIK)",
            "100.000 viviendas «Mieszkanie Plus» para 2019: unas 15.000 terminadas en octubre de 2021 (NIK)"),
          "broken",
          "https://www.nik.gov.pl/aktualnosci/sprawy-spoleczne/program-mieszkanie-plus.html"
        ],
        [
          L3("Help victims of crime through the reformed Justice Fund: the fund also paid PLN 25 million for the CBA's Pegasus spyware; the deputy minister who signed it was indicted in 2025",
            "Aider les victimes grâce au Fonds de justice réformé : le fonds a aussi payé 25 millions de zł le Pegasus du CBA ; le vice-ministre signataire a été renvoyé devant le tribunal en 2025",
            "Ayudar a las víctimas con el Fondo de Justicia reformado: el fondo también pagó 25 millones de zł por el Pegasus de la CBA; el viceministro que lo firmó fue acusado en 2025"),
          "token",
          "https://www.polsatnews.pl/wiadomosc/2025-10-21/afera-wokol-funduszu-sprawiedliwosci-byly-wiceminister-z-zarzutami/"
        ]
      ],
      pairs: [
        [
          L3("Generous family benefits: 800+ (2023 campaign)",
            "Des aides familiales généreuses : le 800+ (campagne 2023)",
            "Ayudas familiares generosas: el 800+ (campaña de 2023)"),
          L3("Its government raised the child benefit from PLN 500 to 800 a month from January 2024. Extreme poverty fell from 6.6% of people in 2023 to 5.2% in 2024, as household incomes rose (GUS), then edged up to 5.3% in 2025.",
            "Son gouvernement a porté l'allocation familiale de 500 à 800 zł par mois à partir de janvier 2024. L'extrême pauvreté est passée de 6,6 % de la population en 2023 à 5,2 % en 2024, sur fond de hausse des revenus des ménages (GUS), avant de remonter légèrement à 5,3 % en 2025.",
            "Su Gobierno subió la prestación por hijo de 500 a 800 zł al mes desde enero de 2024. La pobreza extrema bajó del 6,6 % de la población en 2023 al 5,2 % en 2024, con ingresos de los hogares en alza (GUS), y repuntó ligeramente al 5,3 % en 2025."),
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf",
          "kept",
          ["https://stat.gov.pl/obszary-tematyczne/warunki-zycia/ubostwo-pomoc-spoleczna/zasieg-zagrozenia-ubostwem-ekonomicznym-w-polsce-w-2025-r-,14,13.html"]
        ],
        [
          L3("Help victims of crime through the Justice Fund",
            "Aider les victimes d'infractions grâce au Fonds de justice",
            "Ayudar a las víctimas de delitos con el Fondo de Justicia"),
          L3("In 2017 its justice ministry moved PLN 25 million from the fund for victims of crime to the anti-corruption bureau CBA, which bought Pegasus spyware. In October 2025 prosecutors indicted the deputy minister who signed it, now PiS MP Michał Woś, saying he knew the CBA did not qualify for such funding. Woś says the CBA could legally be funded from outside the state budget and calls the case political repression; the indictment rests on exactly that point, and a court has yet to rule.",
            "En 2017, son ministère de la Justice a transféré 25 millions de zł du fonds pour les victimes d'infractions au bureau anticorruption CBA, qui a acheté le logiciel espion Pegasus. En octobre 2025, le parquet a renvoyé devant le tribunal le vice-ministre signataire, aujourd'hui député PiS, Michał Woś, estimant qu'il savait que le CBA ne pouvait pas recevoir ces fonds. Woś affirme que le CBA pouvait légalement être financé hors du budget de l'État et parle de répression politique ; l'acte d'accusation porte précisément sur ce point, et le tribunal n'a pas encore statué.",
            "En 2017 su Ministerio de Justicia trasladó 25 millones de zł del fondo para víctimas de delitos a la oficina anticorrupción CBA, que compró el programa espía Pegasus. En octubre de 2025 la fiscalía acusó formalmente al viceministro que lo firmó, hoy diputado del PiS, Michał Woś, por saber que la CBA no podía recibir esos fondos. Woś sostiene que la CBA podía financiarse legalmente fuera del presupuesto del Estado y habla de represión política; la acusación versa justamente sobre ese punto, y el tribunal aún no se ha pronunciado."),
          "https://www.polsatnews.pl/wiadomosc/2025-10-21/afera-wokol-funduszu-sprawiedliwosci-byly-wiceminister-z-zarzutami/",
          "gap",
          ["https://www.pap.pl/aktualnosci/michal-wos-jestem-scigany-bo-zostalo-przekazane-legalne-dofinansowanie-dla-cba", "https://www.gov.pl/web/prokuratura-krajowa/informacja-o-skierowaniu-aktu-oskarzenia-przeciwko-poslowi-na-sejm-rp-michalowi-wosiowi"]
        ],
        [
          L3("Repair the courts: a 'good change' in the judiciary",
            "Réparer la justice : un « bon changement » dans les tribunaux",
            "Reparar la justicia: un «buen cambio» en los tribunales"),
          L3("Its laws let the Sejm choose the judges on the judicial council KRS and created a Disciplinary Chamber at the Supreme Court. On 22 July 2021 the European Court of Human Rights (Reczkowicz v. Poland) found that the Disciplinary Chamber was not a tribunal established by law, in breach of the right to a fair trial (Art. 6). The European Commission had opened its Article 7 rule-of-law procedure in December 2017, and in December 2021 it started infringement proceedings over serious concerns about the Constitutional Tribunal and its case law.",
            "Ses lois ont confié à la Diète le choix des juges du Conseil de la magistrature KRS et créé une chambre disciplinaire à la Cour suprême. Le 22 juillet 2021, la Cour européenne des droits de l'homme (Reczkowicz c. Pologne) a jugé que cette chambre n'était pas un tribunal établi par la loi, en violation du droit à un procès équitable (art. 6). La Commission européenne avait ouvert sa procédure de l'article 7 sur l'État de droit en décembre 2017 et, en décembre 2021, elle a engagé une procédure d'infraction en raison de graves préoccupations sur le Tribunal constitutionnel et sa jurisprudence.",
            "Sus leyes dieron al Sejm la elección de los jueces del consejo judicial KRS y crearon una Sala Disciplinaria en el Tribunal Supremo. El 22 de julio de 2021 el Tribunal Europeo de Derechos Humanos (Reczkowicz contra Polonia) dictaminó que esa sala no era un tribunal establecido por la ley, en violación del derecho a un juicio justo (art. 6). La Comisión Europea había abierto su procedimiento del artículo 7 sobre el Estado de derecho en diciembre de 2017 y, en diciembre de 2021, inició un procedimiento de infracción por graves dudas sobre el Tribunal Constitucional y su jurisprudencia."),
          "https://tvn24.pl/polska/europejski-trybunal-praw-czlowieka-o-izby-dyscyplinarnej-sprawa-joanny-reczkowicz-5154827",
          "rights",
          ["https://ec.europa.eu/commission/presscorner/detail/en/ip_21_7070", "https://ec.europa.eu/commission/presscorner/detail/cs/ip_17_5367"]
        ],
        [
          L3("Protect unborn life",
            "Protéger la vie à naître",
            "Proteger la vida del no nacido"),
          L3("On 22 October 2020, on a motion signed by 119 MPs, about 106 of them from PiS, the Constitutional Tribunal struck out the ground allowing abortion for severe foetal defects. On 14 December 2023 the ECtHR (M.L. v. Poland) found a breach of the right to respect for private and family life (Art. 8) of a woman who had to travel abroad, noting that the Tribunal panel included judges appointed with serious irregularities; Poland was ordered to pay her €16,004.",
            "Le 22 octobre 2020, saisi par 119 députés, dont environ 106 du PiS, le Tribunal constitutionnel a supprimé le motif autorisant l'avortement en cas de malformation grave du fœtus. Le 14 décembre 2023, la CEDH (M.L. c. Pologne) a constaté une violation du droit au respect de la vie privée et familiale (art. 8) d'une femme contrainte d'avorter à l'étranger, en relevant que le collège du Tribunal comprenait des juges nommés au prix de graves irrégularités ; la Pologne doit lui verser 16 004 €.",
            "El 22 de octubre de 2020, a petición de 119 diputados, unos 106 de ellos del PiS, el Tribunal Constitucional suprimió el supuesto que permitía abortar por malformaciones graves del feto. El 14 de diciembre de 2023 el TEDH (M.L. contra Polonia) constató una violación del derecho al respeto de la vida privada y familiar (art. 8) de una mujer que tuvo que abortar en el extranjero, señalando que la sala del Tribunal incluía jueces nombrados con graves irregularidades; Polonia debe pagarle 16.004 €."),
          "https://www.polsatnews.pl/wiadomosc/2023-12-14/aborcja-w-polsce-wyrok-europejskiego-trybunalu-praw-czlowieka-w-strasburgu/",
          "rights",
          ["https://demagog.org.pl/wypowiedzi/ktorzy-poslowie-poparli-wniosek-do-tk-w-sprawie-aborcji/", "https://www.pap.pl/aktualnosci/etpcz-w-sprawie-przeciwko-polsce-dot-aborcji-uznal-naruszenie-art-8-europejskiej"]
        ],
        [
          L3("Protected borders",
            "Des frontières protégées",
            "Fronteras protegidas"),
          L3("In 2016-2017, under its government, border guards at the Terespol crossing turned back Chechen families dozens of times without registering their asylum requests, sending them back to Belarus. On 23 July 2020 the ECtHR (M.K. and Others v. Poland) found breaches of the ban on inhuman treatment (Art. 3), the ban on collective expulsion and the right to an effective remedy, and that Poland had ignored the Court's interim measures. The authorities had argued that the applicants were seeking work, not protection.",
            "En 2016-2017, sous son gouvernement, les gardes-frontières du poste de Terespol ont refoulé des dizaines de fois des familles tchétchènes sans enregistrer leurs demandes d'asile, en les renvoyant en Biélorussie. Le 23 juillet 2020, la CEDH (M.K. et autres c. Pologne) a constaté des violations de l'interdiction des traitements inhumains (art. 3), de l'interdiction des expulsions collectives et du droit à un recours effectif, et le non-respect par la Pologne des mesures provisoires de la Cour. Les autorités soutenaient que les requérants cherchaient du travail, pas une protection.",
            "En 2016-2017, bajo su Gobierno, los guardias del paso fronterizo de Terespol rechazaron decenas de veces a familias chechenas sin registrar sus solicitudes de asilo, devolviéndolas a Bielorrusia. El 23 de julio de 2020 el TEDH (M.K. y otros contra Polonia) constató violaciones de la prohibición de tratos inhumanos (art. 3), de la prohibición de expulsiones colectivas y del derecho a un recurso efectivo, y que Polonia había ignorado las medidas cautelares del Tribunal. Las autoridades alegaban que los demandantes buscaban trabajo, no protección."),
          "https://etpcz.ms.gov.pl/etpccontent/$N/990000000000001_I_ETPC_040503_2017_Wy_2020-07-23_001",
          "rights",
          ["https://hfhr.pl/en/news/chechen-refugees-unlawfully-refused-entry-at-the-terespol-border-crossing-rules-the-ecthr", "https://bip.brpo.gov.pl/pl/content/rpo-negatywna-ocena-etpc-braku-dostepu-do-procedur-uchodzczych"]
        ]
      ],
      verdict: L3("If you're considering voting for PiS, it's worth looking beyond the slogans.\n\nIt promised 100,000 affordable 'Mieszkanie Plus' flats by 2019. The audit office NIK counted about 15,000 completed by October 2021.\n\nIn 2017, its fund for victims of crime paid PLN 25 million for the anti-corruption bureau's Pegasus spyware. In October 2025 prosecutors indicted the deputy minister who signed it; he calls the case political repression and says the funding was legal.\n\nIn 2024 the national electoral commission rejected its 2023 campaign accounts over about PLN 3.6 million of irregular spending, and cut its subsidy.\n\nIts 800+ child benefit is in force: extreme poverty fell from 6.6% to 5.2% the year it began (GUS).\n\nBefore voting, it's worth asking: do the party's actions match its promises?",
        "Si vous envisagez de voter PiS, mieux vaut regarder au-delà des slogans.\n\nIl promettait 100 000 logements abordables « Mieszkanie Plus » d'ici 2019. La Cour des comptes NIK en a compté environ 15 000 achevés en octobre 2021.\n\nEn 2017, son fonds pour les victimes d'infractions a payé 25 millions de zł le logiciel espion Pegasus du bureau anticorruption. En octobre 2025, le parquet a renvoyé devant le tribunal le vice-ministre signataire ; il parle de répression politique et affirme que le financement était légal.\n\nEn 2024, la commission électorale nationale a rejeté ses comptes de campagne 2023 pour environ 3,6 millions de zł de dépenses irrégulières, et réduit sa subvention.\n\nSon allocation 800+ est en vigueur : l'extrême pauvreté est passée de 6,6 % à 5,2 % l'année de son lancement (GUS).\n\nAvant de voter, posez-vous la question : ses actes sont-ils à la hauteur de ses promesses ?",
        "Si estás pensando en votar a PiS, conviene mirar más allá de los eslóganes.\n\nPrometió 100.000 viviendas asequibles «Mieszkanie Plus» para 2019. El Tribunal de Cuentas NIK contó unas 15.000 terminadas en octubre de 2021.\n\nEn 2017, su fondo para víctimas de delitos pagó 25 millones de zł por el programa espía Pegasus de la oficina anticorrupción. En octubre de 2025 la fiscalía acusó formalmente al viceministro que la firmó; él habla de represión política y sostiene que la financiación fue legal.\n\nEn 2024 la comisión electoral nacional rechazó sus cuentas de la campaña de 2023 por unos 3,6 millones de zł de gastos irregulares, y recortó su subvención.\n\nSu prestación 800+ está vigente: la pobreza extrema bajó del 6,6 % al 5,2 % el año en que empezó (GUS).\n\nAntes de votar, conviene preguntarse: ¿sus actos están a la altura de sus promesas?"),
      fin: {
        y: "2025",
        s: "PKW resolution on the PiS financial report for 2025 (6 August 2026)",
        src: "https://www.kbw.gov.pl/uploaded_files/1786051570_ewp-124-prawo-i-sprawiedliwosc.pdf",
        p: { pub: 55.3, elu: 0, cot: 7.7, don: 35, aut: 2 },
        n: L3("Income 2025: PLN 32.3 million, of which state subsidy 13.4m and budget grant 4.5m, cash donations 11.3m, membership dues 2.5m. The report does not separate payments from elected officials.",
          "Recettes 2025 : 32,3 millions de zł, dont subvention de l'État 13,4 millions et dotation budgétaire 4,5 millions, dons 11,3 millions, cotisations 2,5 millions. Le rapport ne distingue pas les versements des élus.",
          "Ingresos 2025: 32,3 millones de zł, de ellos subvención estatal 13,4 millones y asignación presupuestaria 4,5 millones, donaciones 11,3 millones, cuotas 2,5 millones. El informe no separa las aportaciones de los cargos electos.")
      },
      prog: [["2023", "https://pis.org.pl/wp-content/uploads/2023/09/Program-PiS-Bezpieczna-Przyszlosc-Polakow.pdf"]]
    },
    {
      id: "rozwoj",
      born: { y: 2026, gov: "never", u: "https://www.polsatnews.pl/wiadomosc/2026-07-29/nowy-uklad-sil-w-sejmie-znaczne-przetasowania-po-decyzji-morawieckiego/" },
      name: "Rozwój Plus",
      full: "Rozwój Plus (association; Sejm club since July 2026)",
      leader: "Mateusz Morawiecki",
      seats: L3("40 of 460 MPs (club registered July 2026), elected in 2023 on the PiS list",
        "40 députés sur 460 (groupe enregistré en juillet 2026), élus en 2023 sur la liste du PiS",
        "40 de 460 diputados (grupo registrado en julio de 2026), elegidos en 2023 en la lista del PiS"),
      role: "opp",
      pos: 1,
      style: "lean",
      dit: [
        L3("Economic development before 'ideological disputes'",
          "Le développement économique avant les « querelles idéologiques »",
          "El desarrollo económico antes que las «disputas ideológicas»"),
        L3("A parental salary equal to the minimum wage for children aged 0 to 3",
          "Un salaire parental égal au salaire minimum pour les enfants de 0 à 3 ans",
          "Un salario parental igual al salario mínimo para hijos de 0 a 3 años"),
        L3("Pensions partly paid by one's children's contributions",
          "Des retraites financées en partie par les cotisations de ses enfants",
          "Pensiones financiadas en parte por las cotizaciones de los hijos"),
        L3("No cooperation with Donald Tusk",
          "Aucune coopération avec Donald Tusk",
          "Ninguna cooperación con Donald Tusk")
      ],
      fait: [
        [
          L3("Its leader brought in the 800+ benefit as Prime Minister; in 2026 Rozwój Plus proposes replacing it, until a child's third birthday, with a parental salary equal to the minimum wage (PLN 4,806 gross a month), with 800+ resuming after that.",
            "Son chef a instauré l'allocation 800+ comme Premier ministre ; en 2026, Rozwój Plus propose de la remplacer, jusqu'aux trois ans de l'enfant, par un salaire parental égal au salaire minimum (4 806 zł brut par mois), le 800+ reprenant ensuite.",
            "Su líder implantó la prestación 800+ como primer ministro; en 2026 Rozwój Plus propone sustituirla, hasta que el niño cumpla tres años, por un salario parental igual al salario mínimo (4.806 zł brutos al mes), y retomar después el 800+."),
          "https://www.polsatnews.pl/wiadomosc/2026-08-05/goraco-w-studiu-o-pomysle-rozwoj-plus-no-gratulacje/"
        ],
        [
          L3("On 17 September 2026, 35 of its MPs voted with PiS against overriding the President's veto of the 'closest person' law; the override won 232 votes, 27 short of the 259 needed.",
            "Le 17 septembre 2026, 35 de ses députés ont voté avec le PiS contre la levée du veto présidentiel sur la loi sur la « personne la plus proche » ; la levée a obtenu 232 voix, 27 de moins que les 259 nécessaires.",
            "El 17 de septiembre de 2026, 35 de sus diputados votaron con el PiS contra superar el veto presidencial a la ley de la «persona más cercana»; la superación obtuvo 232 votos, 27 menos de los 259 necesarios."),
          "https://tvn24.pl/polska/sejm-nie-odrzucil-weta-w-sprawie-ustawy-o-statusie-osoby-najblizszej-st9242772"
        ],
        [
          L3("As Prime Minister in 2020, Morawiecki ordered the postal operator to prepare a postal presidential election, bypassing the electoral commission; the vote never took place. In June 2024 the Supreme Administrative Court made final a ruling that his decision had no legal basis and grossly violated the law; he called the ruling 'detached from the threat of that time'.",
            "Premier ministre en 2020, Morawiecki a ordonné à la Poste de préparer une présidentielle par correspondance, en contournant la commission électorale ; le scrutin n'a jamais eu lieu. En juin 2024, la Cour administrative suprême a rendu définitif un jugement selon lequel sa décision était dépourvue de base légale et violait gravement la loi ; il a jugé ce verdict « coupé de la menace de l'époque ».",
            "Como primer ministro en 2020, Morawiecki ordenó a Correos preparar una elección presidencial por correo, sorteando a la comisión electoral; la votación nunca se celebró. En junio de 2024 el Tribunal Supremo Administrativo hizo firme una sentencia según la cual su decisión carecía de base legal y vulneraba gravemente la ley; él la calificó de «desconectada de la amenaza de entonces»."),
          "https://www.rmf24.pl/polityka/news-morawiecki-skomentowal-wyrok-nsa-oderwany-od-tamtych-czasow,nId,7612353"
        ]
      ],
      ok: [
        L3("Its leader's government passed the 800+ child benefit, paid since January 2024",
          "Le gouvernement de son chef a fait voter l'allocation 800+, versée depuis janvier 2024",
          "El Gobierno de su líder aprobó la prestación 800+, pagada desde enero de 2024"),
        L3("Published a detailed family proposal within weeks of forming its club: a minimum-wage parental salary with social contributions paid",
          "A publié une proposition détaillée pour les familles quelques semaines après la création de son groupe : un salaire parental au niveau du salaire minimum, cotisations sociales comprises",
          "Publicó una propuesta detallada para las familias semanas después de crear su grupo: un salario parental igual al salario mínimo, con cotizaciones sociales pagadas"),
        L3("Its leader waived his parliamentary immunity in January 2025 so that the postal-election case could proceed",
          "Son chef a renoncé à son immunité parlementaire en janvier 2025 pour que l'affaire de l'élection par correspondance puisse avancer",
          "Su líder renunció a su inmunidad parlamentaria en enero de 2025 para que el caso de la elección por correo pudiera avanzar")
      ],
      casier: [
        [
          "inv",
          L3("Mateusz Morawiecki (club leader, Prime Minister 2017-2023): charged in February 2025 with exceeding his powers and failing in his duties over the decisions ordering preparation of the 2020 postal election; indictment announced for late 2025, not confirmed by us; he rejects the charges (2025)",
            "Mateusz Morawiecki (chef du groupe, Premier ministre 2017-2023) : mis en cause en février 2025 pour abus de pouvoir et manquement à ses devoirs pour les décisions ordonnant de préparer l'élection par correspondance de 2020 ; acte d'accusation annoncé pour fin 2025, non confirmé par nous ; il conteste (2025)",
            "Mateusz Morawiecki (líder del grupo, primer ministro 2017-2023): imputado en febrero de 2025 por extralimitación e incumplimiento de deberes por las decisiones que ordenaron preparar la elección por correo de 2020; acusación formal anunciada para finales de 2025, no confirmada por nosotros; rechaza los cargos (2025)"),
          "https://www.rmf24.pl/fakty/polityka/news-mateusz-morawiecki-w-prokuraturze-ws-wyborow-kopertowych-ust,nId,8024142",
          "C"
        ]
      ],
      chute: L3("If you vote Rozwój Plus, know that the man who brought in 800+ now proposes replacing it, until a child turns three, with a parental salary at the minimum wage.",
        "Si vous votez Rozwój Plus, sachez que l'homme qui a instauré le 800+ propose désormais de le remplacer, jusqu'aux trois ans de l'enfant, par un salaire parental au niveau du salaire minimum.",
        "Si votas a Rozwój Plus, debes saber que el hombre que implantó el 800+ propone ahora sustituirlo, hasta que el niño cumpla tres años, por un salario parental igual al salario mínimo."),
      prom: [
        [
          L3("Parental salary equal to the minimum wage for parents of children aged 0 to 3: never in government as Rozwój Plus, untested",
            "Salaire parental égal au salaire minimum pour les parents d'enfants de 0 à 3 ans : jamais au gouvernement sous ce nom, non testé",
            "Salario parental igual al salario mínimo para padres de niños de 0 a 3 años: nunca en el Gobierno como Rozwój Plus, sin probar"),
          "untested",
          null
        ],
        [
          L3("A quarter of each worker's pension contribution paid to his or her parents: untested",
            "Un quart de la cotisation retraite de chaque actif versé à ses parents : non testé",
            "Una cuarta parte de la cotización de cada trabajador pagada a sus padres: sin probar"),
          "untested",
          null
        ],
        [
          L3("Replace 800+ with the parental salary until the child's third birthday, 800+ resuming after: untested",
            "Remplacer le 800+ par le salaire parental jusqu'aux trois ans de l'enfant, puis reprendre le 800+ : non testé",
            "Sustituir el 800+ por el salario parental hasta los tres años del niño y retomarlo después: sin probar"),
          "untested",
          null
        ]
      ],
      pairs: [
        [
          L3("Family support: the 800+ child benefit (its leader's government, 2023)",
            "Soutien aux familles : l'allocation 800+ (gouvernement de son chef, 2023)",
            "Apoyo a las familias: la prestación 800+ (Gobierno de su líder, 2023)"),
          L3("Passed by Mateusz Morawiecki's government and paid since January 2024; extreme poverty fell from 6.6% in 2023 to 5.2% in 2024 (GUS), then edged up to 5.3% in 2025. Rozwój Plus now proposes replacing it, until a child's third birthday, with a minimum-wage parental salary.",
            "Votée par le gouvernement de Mateusz Morawiecki et versée depuis janvier 2024 ; l'extrême pauvreté est passée de 6,6 % en 2023 à 5,2 % en 2024 (GUS), avant de remonter légèrement à 5,3 % en 2025. Rozwój Plus propose désormais de la remplacer, jusqu'aux trois ans de l'enfant, par un salaire parental au niveau du salaire minimum.",
            "Aprobada por el Gobierno de Mateusz Morawiecki y pagada desde enero de 2024; la pobreza extrema bajó del 6,6 % en 2023 al 5,2 % en 2024 (GUS) y repuntó ligeramente al 5,3 % en 2025. Rozwój Plus propone ahora sustituirla, hasta que el niño cumpla tres años, por un salario parental igual al salario mínimo."),
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf",
          "kept",
          ["https://stat.gov.pl/obszary-tematyczne/warunki-zycia/ubostwo-pomoc-spoleczna/zasieg-zagrozenia-ubostwem-ekonomicznym-w-polsce-w-2025-r-,14,13.html", "https://www.polsatnews.pl/wiadomosc/2026-08-05/goraco-w-studiu-o-pomysle-rozwoj-plus-no-gratulacje/"]
        ],
        [
          L3("Sound public finances (its leader as Prime Minister, 2017-2023)",
            "Des finances publiques saines (son chef Premier ministre, 2017-2023)",
            "Unas finanzas públicas saneadas (su líder como primer ministro, 2017-2023)"),
          L3("The audit office NIK found that in 2021, under his government, at least PLN 64.3 billion was kept out of the state budget, through bonds issued by the BGK and PFR funds and Treasury bonds handed to state bodies, so the reported PLN 26.4 billion deficit understated the real one; NIK called the operations legal but harmful to budget transparency. Under his successors, the general government deficit reached 7.2% of GDP in 2025 (GUS).",
            "La Cour des comptes NIK a établi qu'en 2021, sous son gouvernement, au moins 64,3 milliards de zł avaient été tenus hors du budget de l'État, par des obligations émises par les fonds BGK et PFR et des obligations du Trésor remises à des organismes publics, si bien que le déficit affiché de 26,4 milliards sous-estimait le déficit réel ; la NIK a jugé ces opérations légales mais nuisibles à la transparence budgétaire. Sous ses successeurs, le déficit public a atteint 7,2 % du PIB en 2025 (GUS).",
            "El Tribunal de Cuentas NIK constató que en 2021, bajo su Gobierno, al menos 64.300 millones de zł quedaron fuera del presupuesto del Estado, mediante bonos emitidos por los fondos BGK y PFR y bonos del Tesoro entregados a entidades públicas, de modo que el déficit declarado de 26.400 millones subestimaba el real; la NIK consideró esas operaciones legales pero perjudiciales para la transparencia presupuestaria. Con sus sucesores, el déficit público llegó al 7,2 % del PIB en 2025 (GUS)."),
          "https://demagog.org.pl/wypowiedzi/deficyt-poza-kontrola-w-jaki-sposob-wyprowadzono-srodki/",
          "mixed",
          ["https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/statystyka-sektora-instytucji-rzadowych-i-samorzadowych/deficyt-i-dlug-sektora-instytucji-rzadowych-i-samorzadowych-w-latach-2022-2025,1,43.html"]
        ]
      ],
      verdict: L3("If you're considering voting for Rozwój Plus, it's worth looking beyond the slogans.\n\nAs Prime Minister, its leader Mateusz Morawiecki brought in the 800+ benefit. Rozwój Plus now proposes replacing it, until a child turns three, with a parental salary equal to the minimum wage.\n\nOn 17 September 2026, 35 of its MPs voted with PiS against overriding the President's veto of the 'closest person' law. The override fell 27 votes short.\n\nIts programme has never been tested under its own name.\n\nTo be fair, the year the 800+ his government passed came into force, extreme poverty fell from 6.6% to 5.2% (GUS).",
        "Si vous envisagez de voter Rozwój Plus, mieux vaut regarder au-delà des slogans.\n\nComme Premier ministre, son chef, Mateusz Morawiecki, a instauré l'allocation 800+. Rozwój Plus propose désormais de la remplacer, jusqu'aux trois ans de l'enfant, par un salaire parental égal au salaire minimum.\n\nLe 17 septembre 2026, 35 de ses députés ont voté avec le PiS contre la levée du veto présidentiel sur la loi sur la « personne la plus proche ». La levée a échoué à 27 voix près.\n\nSon programme n'a jamais été testé sous ce nom.\n\nPour être juste, l'année où le 800+ voté par son gouvernement est entré en vigueur, l'extrême pauvreté est passée de 6,6 % à 5,2 % (GUS).",
        "Si estás pensando en votar a Rozwój Plus, conviene mirar más allá de los eslóganes.\n\nComo primer ministro, su líder, Mateusz Morawiecki, implantó la prestación 800+. Rozwój Plus propone ahora sustituirla, hasta que el niño cumpla tres años, por un salario parental igual al salario mínimo.\n\nEl 17 de septiembre de 2026, 35 de sus diputados votaron con el PiS contra superar el veto presidencial a la ley de la «persona más cercana». La votación se quedó a 27 votos.\n\nSu programa nunca se ha probado con ese nombre.\n\nPara ser justos, el año en que entró en vigor el 800+ aprobado por su Gobierno, la pobreza extrema bajó del 6,6 % al 5,2 % (GUS)."),
      fin: {
        y: "2026",
        s: "No PKW report yet (association created in 2026)",
        src: "https://kbw.gov.pl/prawo-wyborcze/uchwaly-pkw/2025-r/8",
        p: null,
        n: L3("Rozwój Plus is an association, not a registered party, so it files no party financial report with PKW; its funding is not public.",
          "Rozwój Plus est une association et non un parti enregistré : elle ne dépose pas de rapport financier de parti à la PKW ; son financement n'est pas public.",
          "Rozwój Plus es una asociación, no un partido registrado, así que no presenta informe financiero de partido a la PKW; su financiación no es pública.")
      },
      prog: []
    },
    {
      id: "psl",
      born: { y: 1990, m: 5, gov: "lead", u: "https://dzieje.pl/node/115461" },
      name: "PSL",
      full: "Polskie Stronnictwo Ludowe",
      leader: "Władysław Kosiniak-Kamysz",
      seats: L3("32 of 460 MPs (2026) · elected on the Trzecia Droga list with Polska 2050 (14.40%, 65 seats in 2023)",
        "32 députés sur 460 (2026) · élus sur la liste Trzecia Droga avec Polska 2050 (14,40 %, 65 sièges en 2023)",
        "32 de 460 diputados (2026) · elegidos en la lista Trzecia Droga con Polska 2050 (14,40 %, 65 escaños en 2023)"),
      role: "gov",
      pos: 0.4,
      style: "lean",
      dit: [
        L3("Farmers and rural Poland",
          "Les agriculteurs et la Pologne rurale",
          "Los agricultores y la Polonia rural"),
        L3("A lower health contribution for entrepreneurs",
          "Une cotisation santé plus basse pour les entrepreneurs",
          "Una cotización sanitaria más baja para los autónomos"),
        L3("Family and Christian-democratic values",
          "La famille et les valeurs démocrates-chrétiennes",
          "La familia y los valores democristianos"),
        L3("A strong army",
          "Une armée forte",
          "Un ejército fuerte")
      ],
      fait: [
        [
          L3("Most of its MPs voted against the July 2024 bill decriminalising help with abortion, backed by its coalition partners KO and Lewica; it failed 215 to 218.",
            "La plupart de ses députés ont voté contre le texte de juillet 2024 dépénalisant l'aide à l'avortement, soutenu par ses partenaires de coalition KO et Lewica ; il a échoué par 215 voix contre 218.",
            "La mayoría de sus diputados votó contra el proyecto de julio de 2024 que despenalizaba la ayuda al aborto, apoyado por sus socios de coalición KO y Lewica; fracasó por 215 votos a 218."),
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886"
        ],
        [
          L3("Promised entrepreneurs a lower health contribution; the cut it voted for in April 2025, worth PLN 4.6 billion for about 2.5 million entrepreneurs, was vetoed by President Duda in May 2025, so the promise remains unmet.",
            "Promettait aux entrepreneurs une cotisation santé plus basse ; la baisse votée en avril 2025, d'un montant de 4,6 milliards de zł pour environ 2,5 millions d'entrepreneurs, a subi le veto du président Duda en mai 2025 : la promesse reste à tenir.",
            "Prometió a los autónomos una cotización sanitaria más baja; la rebaja que votó en abril de 2025, de 4.600 millones de zł para unos 2,5 millones de autónomos, fue vetada por el presidente Duda en mayo de 2025, así que la promesa sigue sin cumplirse."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("PKW accepted its 2025 accounts but found it had not kept the legally required online register of donations and contracts for part of the year.",
            "La PKW a accepté ses comptes 2025 mais a constaté qu'il n'avait pas tenu une partie de l'année le registre en ligne des dons et des contrats exigé par la loi.",
            "La PKW aceptó sus cuentas de 2025 pero constató que no llevó durante parte del año el registro en línea de donaciones y contratos que exige la ley."),
          "https://www.kbw.gov.pl/uploaded_files/1786097619_ewp-34-polskie-stronnictwo-ludowe.pdf"
        ]
      ],
      ok: [
        L3("Contribution holidays it campaigned for: 3.28 million applications and PLN 4.27 billion of social contributions waived for small firms by June 2026 (ZUS)",
          "Vacances de cotisations qu'il a défendues : 3,28 millions de demandes et 4,27 milliards de zł de cotisations sociales annulées pour les petites entreprises en juin 2026 (ZUS)",
          "Vacaciones de cotizaciones que defendió: 3,28 millones de solicitudes y 4.270 millones de zł de cotizaciones sociales condonadas a pequeñas empresas en junio de 2026 (ZUS)"),
        L3("Voted for the April 2025 health-contribution cut for about 2.5 million entrepreneurs, later vetoed",
          "A voté la baisse de la cotisation santé d'avril 2025 pour environ 2,5 millions d'entrepreneurs, ensuite frappée de veto",
          "Votó la rebaja de la cotización sanitaria de abril de 2025 para unos 2,5 millones de autónomos, luego vetada"),
        L3("Backed keeping the 800+ child benefit in government; extreme poverty fell from 6.6% to 5.2% in 2024 (GUS)",
          "A soutenu le maintien de l'allocation 800+ au gouvernement ; l'extrême pauvreté est passée de 6,6 % à 5,2 % en 2024 (GUS)",
          "Apoyó mantener la prestación 800+ en el Gobierno; la pobreza extrema bajó del 6,6 % al 5,2 % en 2024 (GUS)")
      ],
      casier: [
        [
          "enq",
          L3("Władysław Teofil Bartoszewski (MP, deputy foreign minister): prosecutors asked the Sejm in July 2026 to lift his immunity over suspected misappropriation of entrusted funds and flats bought with them, and selling assets to frustrate a court ruling; Sejm decision not found; presumption of innocence (2026)",
            "Władysław Teofil Bartoszewski (député, vice-ministre des Affaires étrangères) : le parquet a demandé en juillet 2026 à la Diète de lever son immunité pour détournement présumé de fonds confiés et de logements achetés avec, et vente de biens pour faire échec à un jugement ; décision de la Diète non trouvée ; présomption d'innocence (2026)",
            "Władysław Teofil Bartoszewski (diputado, viceministro de Exteriores): la fiscalía pidió al Sejm en julio de 2026 levantar su inmunidad por presunta apropiación de fondos confiados y pisos comprados con ellos, y venta de bienes para frustrar una sentencia; no encontramos decisión del Sejm; presunción de inocencia (2026)"),
          "https://www.gov.pl/web/prokuratura-krajowa/wnioski-o-uchylenie-immunitet-wobec-poslow-katarzyny-ueberhan-wladyslawa-teofila-bartoszewskiego-i-tadeusza-chrzana",
          "A"
        ]
      ],
      chute: L3("If you vote PSL, know that most of its MPs voted against its partner Lewica's bill on help with abortion, which then failed by three votes.",
        "Si vous votez PSL, sachez que la plupart de ses députés ont voté contre le texte de son partenaire Lewica sur l'aide à l'avortement, qui a échoué à trois voix près.",
        "Si votas a PSL, debes saber que la mayoría de sus diputados votó contra el proyecto de su socio Lewica sobre la ayuda al aborto, que fracasó por tres votos."),
      prom: [
        [
          L3("Contribution holidays for small firms: in force since November 2024; 3.28 million applications and PLN 4.27 billion waived by June 2026",
            "Vacances de cotisations pour les petites entreprises : en vigueur depuis novembre 2024 ; 3,28 millions de demandes et 4,27 milliards de zł annulés en juin 2026",
            "Vacaciones de cotizaciones para pequeñas empresas: vigentes desde noviembre de 2024; 3,28 millones de solicitudes y 4.270 millones de zł condonados en junio de 2026"),
          "kept",
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi",
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi"
        ],
        [
          L3("Lower health contribution for entrepreneurs: passed in April 2025, vetoed by President Duda in May 2025",
            "Cotisation santé plus basse pour les entrepreneurs : votée en avril 2025, veto du président Duda en mai 2025",
            "Cotización sanitaria más baja para autónomos: aprobada en abril de 2025, vetada por el presidente Duda en mayo de 2025"),
          "partial",
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("Keep the 800+ child benefit: kept; extreme poverty fell from 6.6% to 5.2% in 2024 (GUS)",
            "Garder l'allocation 800+ : tenu ; l'extrême pauvreté est passée de 6,6 % à 5,2 % en 2024 (GUS)",
            "Mantener la prestación 800+: cumplido; la pobreza extrema bajó del 6,6 % al 5,2 % en 2024 (GUS)"),
          "kept",
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf",
          "https://stat.gov.pl/files/gfx/portalinformacyjny/pl/defaultaktualnosci/5487/14/12/1/zasieg_zagrozenia_ubostwem_ekonomicznym_w_polsce_w_2024_r.pdf"
        ]
      ],
      pairs: [
        [
          L3("Contribution holidays for small firms (Trzecia Droga, 2023)",
            "Vacances de cotisations pour les petites entreprises (Trzecia Droga, 2023)",
            "Vacaciones de cotizaciones para pequeñas empresas (Trzecia Droga, 2023)"),
          L3("In force since November 2024. By June 2026 ZUS had received 3,283,825 applications, and PLN 4.27 billion of contributions that small firms would otherwise have paid had been waived.",
            "En vigueur depuis novembre 2024. En juin 2026, la ZUS avait reçu 3 283 825 demandes, et 4,27 milliards de zł de cotisations que les petites entreprises auraient dû payer avaient été annulés.",
            "Vigentes desde noviembre de 2024. En junio de 2026 la ZUS había recibido 3.283.825 solicitudes y se habían condonado 4.270 millones de zł de cotizaciones que las pequeñas empresas habrían tenido que pagar."),
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi",
          "kept"
        ],
        [
          L3("A lower health contribution for entrepreneurs (Trzecia Droga, 2023)",
            "Une cotisation santé plus basse pour les entrepreneurs (Trzecia Droga, 2023)",
            "Una cotización sanitaria más baja para los autónomos (Trzecia Droga, 2023)"),
          L3("Pushed, not delivered. Its MPs voted for the cut passed on 4 April 2025, worth PLN 4.6 billion for about 2.5 million entrepreneurs; President Duda vetoed it on 6 May 2025, citing doubts about social justice.",
            "Défendue, pas obtenue. Ses députés ont voté la baisse adoptée le 4 avril 2025, d'un montant de 4,6 milliards de zł pour environ 2,5 millions d'entrepreneurs ; le président Duda y a opposé son veto le 6 mai 2025, invoquant des doutes sur la justice sociale.",
            "Impulsada, no lograda. Sus diputados votaron la rebaja aprobada el 4 de abril de 2025, de 4.600 millones de zł para unos 2,5 millones de autónomos; el presidente Duda la vetó el 6 de mayo de 2025, alegando dudas sobre la justicia social."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/",
          "mixed",
          null
        ]
      ],
      verdict: L3("If you're considering voting for PSL, it's worth looking beyond the slogans.\n\nIt promised entrepreneurs a lower health contribution. The cut it voted for in April 2025 was vetoed by President Duda, and the promise remains unmet.\n\nIn July 2024, in line with its Christian-democratic stance, most of its MPs voted against Lewica's bill decriminalising help with abortion. The bill failed by three votes.\n\nThe electoral commission accepted its 2025 accounts, but found it had not kept its legally required online register of donations and contracts for part of the year.\n\nTo be fair, the contribution holidays it campaigned for had waived PLN 4.27 billion of small firms' social contributions by June 2026, on 3.28 million applications (ZUS).",
        "Si vous envisagez de voter PSL, mieux vaut regarder au-delà des slogans.\n\nIl promettait aux entrepreneurs une cotisation santé plus basse. La baisse qu'il a votée en avril 2025 a subi le veto du président Duda, et la promesse reste à tenir.\n\nEn juillet 2024, conformément à sa ligne démocrate-chrétienne, la plupart de ses députés ont voté contre le texte de Lewica dépénalisant l'aide à l'avortement. Le texte a échoué à trois voix près.\n\nLa commission électorale a accepté ses comptes 2025, tout en constatant qu'il n'avait pas tenu une partie de l'année le registre en ligne des dons et contrats exigé par la loi.\n\nPour être juste, les vacances de cotisations qu'il a défendues avaient annulé 4,27 milliards de zł de cotisations sociales des petites entreprises en juin 2026, pour 3,28 millions de demandes (ZUS).",
        "Si estás pensando en votar al PSL, conviene mirar más allá de los eslóganes.\n\nPrometió a los autónomos una cotización sanitaria más baja. La rebaja que votó en abril de 2025 fue vetada por el presidente Duda, y la promesa sigue sin cumplirse.\n\nEn julio de 2024, en línea con su postura democristiana, la mayoría de sus diputados votó contra el proyecto de Lewica que despenalizaba la ayuda al aborto. El proyecto fracasó por tres votos.\n\nLa comisión electoral aceptó sus cuentas de 2025, pero constató que durante parte del año no llevó el registro en línea de donaciones y contratos que exige la ley.\n\nPara ser justos, las vacaciones de cotizaciones que defendió habían condonado 4.270 millones de zł de cotizaciones sociales de pequeñas empresas en junio de 2026, con 3,28 millones de solicitudes (ZUS)."),
      fin: {
        y: "2025",
        s: "PKW resolution on the PSL financial report for 2025 (6 August 2026)",
        src: "https://www.kbw.gov.pl/uploaded_files/1786097619_ewp-34-polskie-stronnictwo-ludowe.pdf",
        p: { pub: 65.7, elu: 0, cot: 1, don: 32.7, aut: 0.6 },
        n: L3("Income 2025: PLN 12.1 million, of which state subsidy 7.5m and budget grant 0.4m, donations 3.9m, membership dues 0.1m. Report accepted with noted breaches of the donation and contract registers.",
          "Recettes 2025 : 12,1 millions de zł, dont subvention de l'État 7,5 millions et dotation budgétaire 0,4 million, dons 3,9 millions, cotisations 0,1 million. Rapport accepté avec des manquements relevés sur les registres de dons et de contrats.",
          "Ingresos 2025: 12,1 millones de zł, de ellos subvención estatal 7,5 millones y asignación presupuestaria 0,4 millones, donaciones 3,9 millones, cuotas 0,1 millones. Informe aceptado con incumplimientos señalados en los registros de donaciones y contratos.")
      },
      prog: [["2023 · Trzecia Droga (PSL + Polska 2050)", "https://www.psl.pl/wp-content/uploads/2023/10/12-gwarancji-1.pdf"]]
    },
    {
      id: "lewica",
      born: { y: 1999, old: "Sojusz Lewicy Demokratycznej", re: 2021, gov: "lead", u: "https://www.pap.pl/aktualnosci/news%2C839297%2Cnowa-lewica-zamiast-sld-zmiana-partyjnego-szyldu-potwierdzona-prawomocnie" },
      name: "Lewica",
      full: "Nowa Lewica (Koalicyjny Klub Parlamentarny Lewicy)",
      leader: "Włodzimierz Czarzasty",
      seats: L3("21 of 460 MPs (2026) · 8.61% and 26 seats in 2023, including the Razem MPs who left in 2024",
        "21 députés sur 460 (2026) · 8,61 % et 26 sièges en 2023, y compris les députés de Razem partis en 2024",
        "21 de 460 diputados (2026) · 8,61 % y 26 escaños en 2023, incluidos los diputados de Razem que se fueron en 2024"),
      role: "gov",
      pos: -1,
      style: "lean",
      dit: [
        L3("Legal abortion up to 12 weeks",
          "L'avortement légal jusqu'à 12 semaines",
          "Aborto legal hasta las 12 semanas"),
        L3("Civil partnerships, including for same-sex couples",
          "Des unions civiles, y compris pour les couples de même sexe",
          "Uniones civiles, también para parejas del mismo sexo"),
        L3("A widow's pension and stronger public services",
          "Une pension de veuvage et des services publics renforcés",
          "Una pensión de viudedad y servicios públicos más fuertes"),
        L3("Affordable housing to rent",
          "Des logements abordables à louer",
          "Vivienda asequible en alquiler")
      ],
      fait: [
        [
          L3("Promised civil partnerships; accepted a narrower 'closest person' status law, which the President vetoed anyway; the override fell 27 votes short in September 2026.",
            "Promettait des unions civiles ; a accepté une loi plus limitée sur le statut de « personne la plus proche », que le président a tout de même rejetée ; la levée du veto a échoué à 27 voix près en septembre 2026.",
            "Prometió uniones civiles; aceptó una ley más limitada sobre el estatus de «persona más cercana», que el presidente vetó igualmente; la superación del veto se quedó a 27 votos en septiembre de 2026."),
          "https://tvn24.pl/polska/sejm-nie-odrzucil-weta-w-sprawie-ustawy-o-statusie-osoby-najblizszej-st9242772"
        ],
        [
          L3("In April 2025 it voted against the health-contribution cut for entrepreneurs that its coalition partners KO, PSL and Polska 2050 passed; President Duda then vetoed it.",
            "En avril 2025, elle a voté contre la baisse de la cotisation santé des entrepreneurs adoptée par ses partenaires de coalition KO, PSL et Polska 2050 ; le président Duda y a ensuite opposé son veto.",
            "En abril de 2025 votó contra la rebaja de la cotización sanitaria de los autónomos que aprobaron sus socios de coalición KO, PSL y Polska 2050; después la vetó el presidente Duda."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("Promised legal abortion; seven months into the coalition, even its bill decriminalising help with abortion failed by 215 votes to 218 (July 2024), and no abortion law has passed since.",
            "Promettait l'avortement légal ; sept mois après l'entrée dans la coalition, même son texte dépénalisant l'aide à l'avortement a échoué par 215 voix contre 218 (juillet 2024), et aucune loi sur l'avortement n'a été adoptée depuis.",
            "Prometió el aborto legal; siete meses después de entrar en la coalición, incluso su proyecto para despenalizar la ayuda al aborto fracasó por 215 votos a 218 (julio de 2024), y desde entonces no se ha aprobado ninguna ley sobre el aborto."),
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886"
        ]
      ],
      ok: [
        L3("Widow's pension: paid since July 2025; over 715,000 people received it in its first month, PLN 355.58 a month more on average (ZUS)",
          "Pension de veuvage : versée depuis juillet 2025 ; plus de 715 000 personnes l'ont perçue dès le premier mois, 355,58 zł de plus par mois en moyenne (ZUS)",
          "Pensión de viudedad: pagada desde julio de 2025; más de 715.000 personas la recibieron el primer mes, 355,58 zł más al mes de media (ZUS)"),
        L3("Its government equality envoy Katarzyna Kotula steered the 'closest person' law through parliament",
          "Sa plénipotentiaire du gouvernement pour l'égalité, Katarzyna Kotula, a fait adopter la loi sur la « personne la plus proche » par le parlement",
          "Su plenipotenciaria del Gobierno para la igualdad, Katarzyna Kotula, sacó adelante en el Parlamento la ley de la «persona más cercana»"),
        L3("Its leader took over as Sejm Marshal in November 2025, as the 2023 rotation deal provided",
          "Son chef est devenu maréchal de la Diète en novembre 2025, comme le prévoyait l'accord de rotation de 2023",
          "Su líder pasó a ser mariscal del Sejm en noviembre de 2025, como preveía el acuerdo de rotación de 2023")
      ],
      casier: [
        [
          "enq",
          L3("Katarzyna Ueberhan (MP): prosecutors asked the Sejm in July 2026 to lift her immunity over suspected false or incomplete asset declarations (2019-2023) and misappropriation of a leased car; Sejm decision not found; presumption of innocence (2026)",
            "Katarzyna Ueberhan (députée) : le parquet a demandé en juillet 2026 à la Diète de lever son immunité pour des déclarations de patrimoine présumées fausses ou incomplètes (2019-2023) et le détournement d'une voiture en location ; décision de la Diète non trouvée ; présomption d'innocence (2026)",
            "Katarzyna Ueberhan (diputada): la fiscalía pidió al Sejm en julio de 2026 levantar su inmunidad por presuntas declaraciones patrimoniales falsas o incompletas (2019-2023) y apropiación de un coche en leasing; no encontramos decisión del Sejm; presunción de inocencia (2026)"),
          "https://www.gov.pl/web/prokuratura-krajowa/wnioski-o-uchylenie-immunitet-wobec-poslow-katarzyny-ueberhan-wladyslawa-teofila-bartoszewskiego-i-tadeusza-chrzana",
          "A"
        ]
      ],
      chute: L3("If you vote Lewica, know that it promised civil partnerships, accepted a narrower 'closest person' status instead, and still saw it vetoed.",
        "Si vous votez Lewica, sachez qu'il promettait des unions civiles, s'est contenté d'un statut plus limité de « personne la plus proche », et l'a quand même vu rejeté par veto.",
        "Si votas a Lewica, debes saber que prometió uniones civiles, aceptó en su lugar un estatus más limitado de «persona más cercana» y aun así lo vio vetado."),
      prom: [
        [
          L3("Widow's pension: in force since July 2025; over 715,000 recipients in its first month, PLN 355.58 a month extra on average",
            "Pension de veuvage : en vigueur depuis juillet 2025 ; plus de 715 000 bénéficiaires dès le premier mois, 355,58 zł de plus par mois en moyenne",
            "Pensión de viudedad: vigente desde julio de 2025; más de 715.000 beneficiarios el primer mes, 355,58 zł más al mes de media"),
          "kept",
          "https://www.zus.pl/en/-/zus-715-tys.-os%C3%B3b-z-wyp%C5%82atami-w-ramach-renty-wdowiej",
          "https://www.zus.pl/en/-/zus-715-tys.-os%C3%B3b-z-wyp%C5%82atami-w-ramach-renty-wdowiej"
        ],
        [
          L3("Civil partnerships: watered down to a 'closest person' status, vetoed; override failed by 27 votes",
            "Unions civiles : réduites à un statut de « personne la plus proche », veto ; levée du veto manquée à 27 voix",
            "Uniones civiles: rebajadas a un estatus de «persona más cercana», vetado; superación fallida por 27 votos"),
          "partial",
          "https://tvn24.pl/polska/sejm-nie-odrzucil-weta-w-sprawie-ustawy-o-statusie-osoby-najblizszej-st9242772"
        ],
        [
          L3("Legal abortion up to 12 weeks: pushed, but blocked in the Sejm by coalition partners and opposition (215-218 on decriminalising help)",
            "Avortement légal jusqu'à 12 semaines : poussé, mais bloqué à la Diète par des partenaires et l'opposition (215-218 sur la dépénalisation de l'aide)",
            "Aborto legal hasta las 12 semanas: impulsado, pero bloqueado en el Sejm por socios y oposición (215-218 sobre despenalizar la ayuda)"),
          "partial",
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886"
        ]
      ],
      pairs: [
        [
          L3("A widow's pension: keep part of a late spouse's pension",
            "Une pension de veuvage : garder une partie de la pension du conjoint décédé",
            "Una pensión de viudedad: conservar parte de la pensión del cónyuge fallecido"),
          L3("Paid since July 2025: widows and widowers can now combine part of the late spouse's pension with their own. By 25 July 2025 over 715,000 people had received it, PLN 355.58 a month more on average (ZUS).",
            "Versée depuis juillet 2025 : veufs et veuves peuvent désormais cumuler une partie de la pension du conjoint décédé avec la leur. Au 25 juillet 2025, plus de 715 000 personnes l'avaient perçue, 355,58 zł de plus par mois en moyenne (ZUS).",
            "Pagada desde julio de 2025: viudas y viudos pueden ahora sumar parte de la pensión del cónyuge fallecido a la suya. A 25 de julio de 2025, más de 715.000 personas la habían recibido, 355,58 zł más al mes de media (ZUS)."),
          "https://www.zus.pl/en/-/zus-715-tys.-os%C3%B3b-z-wyp%C5%82atami-w-ramach-renty-wdowiej",
          "kept"
        ],
        [
          L3("Civil partnerships, including for same-sex couples",
            "Des unions civiles, y compris pour les couples de même sexe",
            "Uniones civiles, también para parejas del mismo sexo"),
          L3("The coalition settled for a narrower 'closest person' status instead of civil partnerships, and the Sejm passed it in 2026. President Nawrocki vetoed it; on 17 September 2026 the override won 232 votes to 199, 27 short of the 259 needed, with 20 Lewica MPs voting for it.",
            "La coalition s'est contentée d'un statut plus limité de « personne la plus proche » au lieu d'unions civiles, adopté par la Diète en 2026. Le président Nawrocki y a opposé son veto ; le 17 septembre 2026, la levée du veto a obtenu 232 voix contre 199, 27 de moins que les 259 nécessaires, avec le vote favorable de 20 députés de Lewica.",
            "La coalición se conformó con un estatus más limitado de «persona más cercana» en lugar de uniones civiles, aprobado por el Sejm en 2026. El presidente Nawrocki lo vetó; el 17 de septiembre de 2026 la superación del veto obtuvo 232 votos contra 199, 27 menos de los 259 necesarios, con el voto a favor de 20 diputados de Lewica."),
          "https://tvn24.pl/polska/sejm-nie-odrzucil-weta-w-sprawie-ustawy-o-statusie-osoby-najblizszej-st9242772",
          "mixed",
          ["https://www.rmf24.pl/fakty/polityka/news-sejm-nie-odrzucil-weta-prezydenta-ustawa-o-statusie-osoby-na,nIdn,1018144"]
        ],
        [
          L3("Legal abortion up to the 12th week",
            "L'avortement légal jusqu'à la 12e semaine",
            "Aborto legal hasta la semana 12"),
          L3("Its bills went to a special Sejm committee in April 2024. The narrowest, decriminalising help with abortion, failed 215 to 218 on 12 July 2024: all Lewica MPs voted for it, most PSL MPs, PiS and Konfederacja against, and three KO MPs did not vote. Lewica said it would table it again.",
            "Ses propositions sont parties en commission spéciale de la Diète en avril 2024. La plus limitée, dépénalisant l'aide à l'avortement, a échoué par 215 voix contre 218 le 12 juillet 2024 : tous les députés Lewica ont voté pour, la plupart des députés PSL, le PiS et Konfederacja contre, et trois députés KO n'ont pas voté. Lewica a annoncé un nouveau dépôt.",
            "Sus proyectos fueron a una comisión especial del Sejm en abril de 2024. El más limitado, que despenalizaba la ayuda al aborto, fracasó por 215 votos a 218 el 12 de julio de 2024: todos los diputados de Lewica votaron a favor, la mayoría del PSL, el PiS y Konfederacja en contra, y tres diputados de la KO no votaron. Lewica anunció que volvería a presentarlo."),
          "https://tvn24.pl/polska/sejm-przeciw-nowelizacji-dotyczacej-dekryminalizacji-pomocy-w-aborcji-lewica-ponownie-zlozy-projekt-st8000886",
          "mixed",
          ["https://demagog.org.pl/analizy_i_raporty/co-dzieje-sie-z-projektami-aborcyjnymi-sprawdzamy/"]
        ]
      ],
      verdict: L3("If you're considering voting for Lewica, it's worth looking beyond the slogans.\n\nIt promised legal abortion up to 12 weeks. Three years into government, there is none: even its bill decriminalising help with abortion failed, by 215 votes to 218, in July 2024.\n\nIt promised civil partnerships, and accepted a narrower 'closest person' status instead. President Nawrocki vetoed even that; the override fell 27 votes short in September 2026.\n\nIn April 2025 it voted against its partners' health-contribution cut for entrepreneurs. President Duda vetoed it anyway.\n\nTo be fair, its widow's pension reached over 715,000 people in its first month, July 2025, adding PLN 355.58 a month on average (ZUS).",
        "Si vous envisagez de voter Lewica, mieux vaut regarder au-delà des slogans.\n\nIl promettait l'avortement légal jusqu'à 12 semaines. Après trois ans au gouvernement, il n'y en a pas : même son texte dépénalisant l'aide à l'avortement a échoué, par 215 voix contre 218, en juillet 2024.\n\nIl promettait des unions civiles, et a accepté à la place un statut plus limité de « personne la plus proche ». Le président Nawrocki y a quand même opposé son veto ; la levée a échoué à 27 voix près en septembre 2026.\n\nEn avril 2025, il a voté contre la baisse de la cotisation santé des entrepreneurs voulue par ses partenaires. Le président Duda y a de toute façon opposé son veto.\n\nPour être juste, sa pension de veuvage a touché plus de 715 000 personnes dès son premier mois, en juillet 2025, avec 355,58 zł de plus par mois en moyenne (ZUS).",
        "Si estás pensando en votar a Lewica, conviene mirar más allá de los eslóganes.\n\nPrometió el aborto legal hasta las 12 semanas. Tras tres años en el Gobierno no lo hay: incluso su proyecto para despenalizar la ayuda al aborto fracasó, por 215 votos a 218, en julio de 2024.\n\nPrometió uniones civiles y aceptó en su lugar un estatus más limitado de «persona más cercana». El presidente Nawrocki lo vetó igualmente; la superación del veto se quedó a 27 votos en septiembre de 2026.\n\nEn abril de 2025 votó contra la rebaja de la cotización sanitaria de los autónomos que querían sus socios. El presidente Duda la vetó de todos modos.\n\nPara ser justos, su pensión de viudedad llegó a más de 715.000 personas en su primer mes, julio de 2025, con 355,58 zł más al mes de media (ZUS)."),
      fin: {
        y: "2025",
        s: "PKW, financial reports of political parties",
        src: "https://kbw.gov.pl/prawo-wyborcze/uchwaly-pkw/2025-r/8",
        p: null,
        n: L3("We could not open PKW's resolution on Nowa Lewica's 2025 report, so no breakdown is shown.",
          "Nous n'avons pas pu ouvrir la résolution de la PKW sur le rapport 2025 de Nowa Lewica, d'où l'absence de ventilation.",
          "No pudimos abrir la resolución de la PKW sobre el informe de 2025 de Nowa Lewica, así que no se muestra desglose.")
      },
      prog: [["2025 · Nowa Lewica, program do 2030", "https://lewica.org.pl/program-i-polityka/program-glowny/"]]
    },
    {
      id: "konf",
      born: { y: 2019, gov: "never", u: "https://info.pkw.gov.pl/uploaded_files/1601461521_ewp-400-konfederacja-wolnosc-i-niepodleglosc.pdf" },
      name: "Konfederacja",
      full: "Konfederacja Wolność i Niepodległość (Nowa Nadzieja, Ruch Narodowy)",
      leader: "Sławomir Mentzen · Krzysztof Bosak",
      seats: L3("16 of 460 MPs (2026) · 7.16% and 18 seats in 2023, then including Grzegorz Braun's party",
        "16 députés sur 460 (2026) · 7,16 % et 18 sièges en 2023, avec alors le parti de Grzegorz Braun",
        "16 de 460 diputados (2026) · 7,16 % y 18 escaños en 2023, entonces con el partido de Grzegorz Braun"),
      role: "opp",
      pos: 1.6,
      style: "lean",
      dit: [
        L3("Lower taxes and a smaller state",
          "Moins d'impôts et un État plus léger",
          "Menos impuestos y un Estado más pequeño"),
        L3("Sovereignty against EU centralisation",
          "La souveraineté face à la centralisation européenne",
          "La soberanía frente a la centralización de la UE"),
        L3("Freedom for entrepreneurs",
          "La liberté des entrepreneurs",
          "Libertad para los emprendedores"),
        L3("Clean, frugal public money",
          "Un argent public propre et économe",
          "Dinero público limpio y austero")
      ],
      fait: [
        [
          L3("Abstained when the Sejm voted in April 2025 to cut the health contribution for about 2.5 million entrepreneurs, a cut that President Duda then vetoed.",
            "S'est abstenue quand la Diète a voté en avril 2025 la baisse de la cotisation santé d'environ 2,5 millions d'entrepreneurs, ensuite frappée du veto du président Duda.",
            "Se abstuvo cuando el Sejm votó en abril de 2025 rebajar la cotización sanitaria de unos 2,5 millones de autónomos, rebaja que luego vetó el presidente Duda."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("Promises clean public money; in March 2025 PKW rejected its 2024 European election committee's accounts, partly for late filing, and its 2025 subsidy was cut by over PLN 87,000, three times the sum found to be obtained unlawfully.",
            "Promet un argent public propre ; en mars 2025, la PKW a rejeté les comptes de son comité pour les européennes de 2024, notamment pour dépôt tardif, et sa subvention 2025 a été réduite de plus de 87 000 zł, trois fois la somme jugée obtenue illégalement.",
            "Promete dinero público limpio; en marzo de 2025 la PKW rechazó las cuentas de su comité para las europeas de 2024, en parte por presentarlas tarde, y su subvención de 2025 se recortó en más de 87.000 zł, el triple de la suma obtenida ilegalmente."),
          "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala"
        ],
        [
          L3("After Grzegorz Braun put out the Sejm's Hanukkah candles with a fire extinguisher in December 2023, its club suspended him, then unanimously restored his full rights on 24 January 2024.",
            "Après que Grzegorz Braun a éteint à l'extincteur les bougies de Hanoukka à la Diète en décembre 2023, son groupe l'a suspendu, puis lui a rendu à l'unanimité tous ses droits le 24 janvier 2024.",
            "Después de que Grzegorz Braun apagara con un extintor las velas de Janucá en el Sejm en diciembre de 2023, su grupo lo suspendió y luego le devolvió por unanimidad todos sus derechos el 24 de enero de 2024."),
          "https://tvn24.pl/polska/grzegorz-braun-odwieszony-w-klubie-konfederacji-jednoglosna-decyzja-st7754235"
        ]
      ],
      ok: [
        L3("Its party court removed Grzegorz Braun from the alliance in January 2025",
          "Son tribunal interne a écarté Grzegorz Braun de l'alliance en janvier 2025",
          "Su tribunal interno apartó a Grzegorz Braun de la alianza en enero de 2025"),
        L3("Its candidate Sławomir Mentzen came third in the 2025 presidential first round with 14.81% (2.9 million votes)",
          "Son candidat Sławomir Mentzen est arrivé troisième au premier tour de la présidentielle 2025 avec 14,81 % (2,9 millions de voix)",
          "Su candidato Sławomir Mentzen quedó tercero en la primera vuelta presidencial de 2025 con el 14,81 % (2,9 millones de votos)"),
        L3("Has never held government office, so no ministerial record is attached to it",
          "N'a jamais exercé le pouvoir, aucun bilan ministériel ne lui est donc attaché",
          "Nunca ha gobernado, así que no tiene balance ministerial")
      ],
      casier: [
        [
          "adm",
          L3("Konfederacja (party): PKW rejected the accounts of its 2024 European election committee (March 2025) and cut its 2025 subsidy by over PLN 87,000; appeal lodged with a Supreme Court chamber whose status is disputed",
            "Konfederacja (parti) : la PKW a rejeté les comptes de son comité pour les européennes de 2024 (mars 2025) et réduit sa subvention 2025 de plus de 87 000 zł ; recours déposé devant une chambre de la Cour suprême au statut contesté",
            "Konfederacja (partido): la PKW rechazó las cuentas de su comité para las europeas de 2024 (marzo de 2025) y recortó su subvención de 2025 en más de 87.000 zł; recurso ante una sala del Tribunal Supremo de estatus discutido"),
          "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala",
          "A"
        ],
        [
          "enq",
          L3("Grzegorz Braun (no longer a member; MEP, now leads Konfederacja Korony Polskiej): the European Parliament lifted his immunity in April 2026, together with three other Polish MEPs, so prosecutors can charge him (2026)",
            "Grzegorz Braun (n'est plus membre ; eurodéputé, dirige la Konfederacja Korony Polskiej) : le Parlement européen a levé son immunité en avril 2026, avec celle de trois autres eurodéputés polonais, pour que le parquet puisse le poursuivre (2026)",
            "Grzegorz Braun (ya no es miembro; eurodiputado, dirige la Konfederacja Korony Polskiej): el Parlamento Europeo levantó su inmunidad en abril de 2026, junto con la de otros tres eurodiputados polacos, para que la fiscalía pueda imputarle (2026)"),
          "https://tvn24.pl/polska/immunitety-polskich-europoslow-uchylone-daniel-obajtek-patryk-jaki-grzegorz-braun-tomasz-buczek-st9020648",
          "B"
        ],
        [
          "enq",
          L3("Tomasz Buczek (MEP): European Parliament lifted his immunity in a private suit by a woman who says he snatched her megaphone on election night (2026)",
            "Tomasz Buczek (eurodéputé) : le Parlement européen a levé son immunité dans une action privée d'une femme qui l'accuse de lui avoir arraché son mégaphone un soir d'élection (2026)",
            "Tomasz Buczek (eurodiputado): el Parlamento Europeo levantó su inmunidad en una querella privada de una mujer que le acusa de arrebatarle el megáfono una noche electoral (2026)"),
          "https://tvn24.pl/polska/immunitety-polskich-europoslow-uchylone-daniel-obajtek-patryk-jaki-grzegorz-braun-tomasz-buczek-st9020648",
          "C"
        ]
      ],
      chute: L3("If you vote Konfederacja, know that the alliance promising clean, frugal public money had its 2024 European campaign accounts rejected by the electoral commission, which cut its subsidy by over PLN 87,000.",
        "Si vous votez Konfederacja, sachez que l'alliance qui promet un argent public propre et économe a vu les comptes de sa campagne européenne de 2024 rejetés par la commission électorale, qui a réduit sa subvention de plus de 87 000 zł.",
        "Si votas a Konfederacja, debes saber que la alianza que promete un dinero público limpio y austero vio rechazadas por la comisión electoral las cuentas de su campaña europea de 2024, y su subvención recortada en más de 87.000 zł."),
      prom: [
        [
          L3("Lower taxes and a smaller state: never in government, untested",
            "Moins d'impôts et un État plus léger : jamais au gouvernement, non testé",
            "Menos impuestos y un Estado más pequeño: nunca en el Gobierno, sin probar"),
          "untested",
          null
        ],
        [
          L3("Reject EU climate and migration rules at national level: untested",
            "Rejeter au niveau national les règles européennes sur le climat et les migrations : non testé",
            "Rechazar a nivel nacional las normas europeas de clima y migración: sin probar"),
          "untested",
          null
        ],
        [
          L3("Freedom for entrepreneurs, less red tape: untested",
            "Liberté des entrepreneurs, moins de bureaucratie : non testé",
            "Libertad para emprendedores, menos burocracia: sin probar"),
          "untested",
          null
        ]
      ],
      pairs: [
        [
          L3("Sovereignty against EU centralisation",
            "La souveraineté face à la centralisation européenne",
            "La soberanía frente a la centralización de la UE"),
          L3("Voted with PiS against the law implementing the EU's SAFE defence loans, citing the conditionality that could let the Commission interfere in defence policy; it passed the Sejm 236 to 199 on 13 February 2026.",
            "A voté avec le PiS contre la loi transposant les prêts européens de défense SAFE, invoquant une conditionnalité qui permettrait à la Commission d'intervenir dans la politique de défense ; elle a été adoptée par la Diète par 236 voix contre 199 le 13 février 2026.",
            "Votó con el PiS contra la ley que aplicaba los préstamos europeos de defensa SAFE, alegando una condicionalidad que permitiría a la Comisión inmiscuirse en la política de defensa; el Sejm la aprobó por 236 votos a 199 el 13 de febrero de 2026."),
          "https://tvn24.pl/polska/pis-i-konfederacja-przeciwko-ustawie-wdrazajacej-program-safe-tusk-maski-opadly-st8899254",
          "consistent",
          null
        ],
        [
          L3("Lower taxes: back to a flat health contribution, deductible from tax",
            "Moins d'impôts : revenir à une cotisation santé forfaitaire, déductible de l'impôt",
            "Menos impuestos: volver a una cotización sanitaria fija, deducible del impuesto"),
          L3("When the Sejm passed the coalition's narrower cut, worth PLN 4.6 billion for about 2.5 million entrepreneurs, on 4 April 2025, its MPs abstained; we found no stated reason. President Duda vetoed the cut.",
            "Quand la Diète a adopté la baisse plus limitée de la coalition, d'un montant de 4,6 milliards de zł pour environ 2,5 millions d'entrepreneurs, le 4 avril 2025, ses députés se sont abstenus ; nous n'avons trouvé aucune explication. Le président Duda y a opposé son veto.",
            "Cuando el Sejm aprobó la rebaja más limitada de la coalición, de 4.600 millones de zł para unos 2,5 millones de autónomos, el 4 de abril de 2025, sus diputados se abstuvieron; no encontramos ninguna explicación. El presidente Duda la vetó."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/",
          "mixed",
          null
        ]
      ],
      verdict: L3("If you're considering voting for Konfederacja, it's worth looking beyond the slogans.\n\nIt promises clean, frugal public money. In March 2025 the electoral commission rejected the accounts of its 2024 European election committee, partly for late filing, and cut its subsidy by over PLN 87,000, three times the sum found to be obtained unlawfully.\n\nAfter Grzegorz Braun put out the Sejm's Hanukkah candles with a fire extinguisher in December 2023, its club suspended him, then unanimously restored his rights a month later. Its party court removed him only in January 2025, when he was running for president against Konfederacja's own candidate.\n\nIts programme of lower taxes and a smaller state has never been tested in government.\n\nBefore voting, it's worth asking: do the party's actions match its promises?",
        "Si vous envisagez de voter Konfederacja, mieux vaut regarder au-delà des slogans.\n\nElle promet un argent public propre et économe. En mars 2025, la commission électorale a rejeté les comptes de son comité pour les européennes de 2024, notamment pour dépôt tardif, et réduit sa subvention de plus de 87 000 zł, trois fois la somme jugée obtenue illégalement.\n\nAprès que Grzegorz Braun a éteint les bougies de Hanoukka de la Diète avec un extincteur en décembre 2023, son groupe l'a suspendu, puis lui a rendu ses droits à l'unanimité un mois plus tard. Son tribunal interne ne l'a écarté qu'en janvier 2025, alors qu'il se présentait à la présidentielle contre le candidat de Konfederacja.\n\nSon programme de baisses d'impôts et d'État plus léger n'a jamais été testé au gouvernement.\n\nAvant de voter, posez-vous la question : ses actes sont-ils à la hauteur de ses promesses ?",
        "Si estás pensando en votar a Konfederacja, conviene mirar más allá de los eslóganes.\n\nPromete un dinero público limpio y austero. En marzo de 2025 la comisión electoral rechazó las cuentas de su comité para las europeas de 2024, en parte por presentarlas tarde, y recortó su subvención en más de 87.000 zł, el triple de la suma obtenida ilegalmente.\n\nDespués de que Grzegorz Braun apagara con un extintor las velas de Janucá del Sejm en diciembre de 2023, su grupo lo suspendió y un mes después le devolvió sus derechos por unanimidad. Su tribunal interno no lo apartó hasta enero de 2025, cuando se presentaba a la presidencia contra el candidato de Konfederacja.\n\nSu programa de menos impuestos y un Estado más pequeño nunca se ha probado en el Gobierno.\n\nAntes de votar, conviene preguntarse: ¿sus actos están a la altura de sus promesas?"),
      fin: {
        y: "2025",
        s: "PKW decision on subsidies (May 2025)",
        src: "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala",
        p: null,
        n: L3("Its 2025 subsidy was set at about PLN 8 million after the PKW cut; we could not open its annual financial report, so no breakdown is shown.",
          "Sa subvention 2025 a été fixée à environ 8 millions de zł après la réduction décidée par la PKW ; nous n'avons pas pu ouvrir son rapport financier annuel, d'où l'absence de ventilation.",
          "Su subvención de 2025 quedó en unos 8 millones de zł tras el recorte de la PKW; no pudimos abrir su informe financiero anual, así que no se muestra desglose.")
      },
      prog: [["2023", "https://konfederacja.pl/app/uploads/Konfederacja_WiN_Program_2023.pdf"]]
    },
    {
      id: "centrum",
      born: { y: 2026, m: 2, gov: "partner", u: "https://www.rmf24.pl/fakty/polityka/news-rozlam-w-polsce-2050-klub-parlamentarny-centrum-wybral-lider,nId,8068117" },
      name: "Centrum",
      full: "Klub Parlamentarny Centrum",
      leader: "Paulina Hennig-Kloska",
      seats: L3("15 of 460 MPs (club since February 2026) · elected in 2023 on the Trzecia Droga list",
        "15 députés sur 460 (groupe depuis février 2026) · élus en 2023 sur la liste Trzecia Droga",
        "15 de 460 diputados (grupo desde febrero de 2026) · elegidos en 2023 en la lista Trzecia Droga"),
      role: "gov",
      pos: 0.2,
      style: "lean",
      dit: [
        L3("The political centre, away from the PiS-KO war",
          "Le centre politique, loin de la guerre PiS-KO",
          "El centro político, lejos de la guerra PiS-KO"),
        L3("Energy transition and affordable electricity",
          "La transition énergétique et une électricité abordable",
          "La transición energética y una electricidad asequible"),
        L3("Support for the Tusk government",
          "Le soutien au gouvernement Tusk",
          "Apoyo al Gobierno de Tusk"),
        L3("A pro-European Poland",
          "Une Pologne pro-européenne",
          "Una Polonia proeuropea")
      ],
      fait: [
        [
          L3("Its MPs were elected for Polska 2050, which promised a new kind of stable politics; in February 2026 they split from it and took the climate ministry with them.",
            "Ses députés ont été élus pour Polska 2050, qui promettait une politique nouvelle et stable ; en février 2026, ils l'ont quittée en emportant le ministère du Climat.",
            "Sus diputados fueron elegidos por Polska 2050, que prometía una política nueva y estable; en febrero de 2026 se separaron y se llevaron el Ministerio del Clima."),
          "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow"
        ],
        [
          L3("Wants to be a coalition partner but has not signed the coalition agreement; the government spokesman said he knew of no planned change to it.",
            "Veut être partenaire de la coalition mais n'a pas signé l'accord de coalition ; le porte-parole du gouvernement a dit n'avoir connaissance d'aucun changement prévu.",
            "Quiere ser socio de la coalición pero no ha firmado el acuerdo de coalición; el portavoz del Gobierno dijo no saber de ningún cambio previsto."),
          "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow"
        ],
        [
          L3("Its minister tied the household electricity price freeze to looser wind-farm rules (500 m from homes) in a single bill; the President vetoed it in August 2025, calling it blackmail.",
            "Sa ministre a lié dans un même texte le gel des prix de l'électricité des ménages et l'assouplissement des règles éoliennes (500 m des habitations) ; le président y a opposé son veto en août 2025, parlant de chantage.",
            "Su ministra unió en un solo proyecto la congelación del precio eléctrico de los hogares y la flexibilización de las normas eólicas (500 m de las viviendas); el presidente lo vetó en agosto de 2025, hablando de chantaje."),
          "https://www.polsatnews.pl/wiadomosc/2025-08-21/prezydent-zawetowal-ustawe-wiatrakowa-rodzaj-szantazu/"
        ]
      ],
      ok: [
        L3("Household electricity stayed frozen at PLN 500/MWh net until the end of 2025",
          "L'électricité des ménages est restée gelée à 500 zł/MWh hors taxes jusqu'à fin 2025",
          "La electricidad de los hogares siguió congelada a 500 zł/MWh netos hasta finales de 2025"),
        L3("The freeze ended without a price jump: URE's 2026 tariff averages PLN 495.16/MWh, typical bills up about 3%",
          "Le gel a pris fin sans flambée : le tarif 2026 de l'URE est en moyenne de 495,16 zł/MWh, factures types en hausse d'environ 3 %",
          "La congelación terminó sin subida brusca: la tarifa 2026 de la URE es de 495,16 zł/MWh de media, facturas típicas un 3 % más altas"),
        L3("Brought a liberalised onshore wind law through both chambers before the veto",
          "A fait adopter par les deux chambres une loi libéralisant l'éolien terrestre avant le veto",
          "Sacó adelante en ambas cámaras una ley que liberalizaba la eólica terrestre antes del veto")
      ],
      casier: [],
      chute: L3("If you vote Centrum, know that it was born in February 2026 by splitting from the party its MPs were elected for.",
        "Si vous votez Centrum, sachez qu'il est né en février 2026 d'une scission du parti pour lequel ses députés avaient été élus.",
        "Si votas a Centrum, debes saber que nació en febrero de 2026 al separarse del partido por el que fueron elegidos sus diputados."),
      prom: [
        [
          L3("Keep household electricity frozen until market prices fall (as Polska 2050 ministers): kept to end 2025; the 2026 tariff came in about 1% below the frozen price",
            "Garder l'électricité des ménages gelée jusqu'à la baisse des prix (en tant que ministres de Polska 2050) : tenu jusqu'à fin 2025 ; le tarif 2026 est environ 1 % sous le prix gelé",
            "Mantener congelada la electricidad de los hogares hasta que bajen los precios (como ministros de Polska 2050): cumplido hasta finales de 2025; la tarifa de 2026 quedó en torno a un 1 % por debajo"),
          "kept",
          "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html",
          "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html"
        ],
        [
          L3("Liberalise onshore wind (500 m rule): passed, vetoed in August 2025",
            "Libéraliser l'éolien terrestre (règle des 500 m) : voté, veto en août 2025",
            "Liberalizar la eólica terrestre (regla de 500 m): aprobada, vetada en agosto de 2025"),
          "partial",
          "https://www.polsatnews.pl/wiadomosc/2025-08-21/prezydent-zawetowal-ustawe-wiatrakowa-rodzaj-szantazu/"
        ],
        [
          L3("Lower health contribution for entrepreneurs (Trzecia Droga 2023): passed, vetoed in May 2025",
            "Cotisation santé plus basse pour les entrepreneurs (Trzecia Droga 2023) : votée, veto en mai 2025",
            "Cotización sanitaria más baja para autónomos (Trzecia Droga 2023): aprobada, vetada en mayo de 2025"),
          "partial",
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ]
      ],
      pairs: [
        [
          L3("Affordable electricity for households (its climate minister, Paulina Hennig-Kloska)",
            "Une électricité abordable pour les ménages (sa ministre du Climat, Paulina Hennig-Kloska)",
            "Electricidad asequible para los hogares (su ministra de Clima, Paulina Hennig-Kloska)"),
          L3("Household electricity stayed frozen at PLN 500/MWh net to the end of 2025. After the freeze ended, URE's 2026 tariff averaged PLN 495.16 net, about 1% below the frozen price, with typical bills up about 3% a month because of distribution charges.",
            "L'électricité des ménages est restée gelée à 500 zł/MWh hors taxes jusqu'à fin 2025. Après la fin du gel, le tarif 2026 de l'URE s'élève en moyenne à 495,16 zł hors taxes, environ 1 % sous le prix gelé, les factures types augmentant d'environ 3 % par mois à cause de la distribution.",
            "La electricidad de los hogares siguió congelada a 500 zł/MWh netos hasta finales de 2025. Tras el fin de la congelación, la tarifa de 2026 de la URE quedó de media en 495,16 zł netos, en torno a un 1 % por debajo del precio congelado, con facturas típicas un 3 % más altas al mes por la distribución."),
          "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html",
          "kept",
          ["https://konkret24.tvn24.pl/polska/zamrozenie-cen-energii-co-podpisal-a-czego-nie-podpisal-nawrocki-st8609540"]
        ],
        [
          L3("Energy transition: more onshore wind",
            "Transition énergétique : plus d'éolien terrestre",
            "Transición energética: más eólica terrestre"),
          L3("Its minister's bill cutting the minimum distance between new turbines and homes to 500 m passed both chambers in 2025, bundled with the extension of the price freeze. President Nawrocki vetoed it on 21 August 2025, calling it 'blackmail' and saying it was about wind farms, not electricity prices.",
            "Le projet de sa ministre ramenant à 500 m la distance minimale entre nouvelles éoliennes et habitations a été adopté par les deux chambres en 2025, couplé à la prolongation du gel des prix. Le président Nawrocki y a opposé son veto le 21 août 2025, parlant de « chantage » et estimant que le texte portait sur les éoliennes, pas sur le prix de l'électricité.",
            "El proyecto de su ministra que reducía a 500 m la distancia mínima entre nuevos aerogeneradores y viviendas fue aprobado por ambas cámaras en 2025, junto con la prórroga de la congelación de precios. El presidente Nawrocki lo vetó el 21 de agosto de 2025, hablando de «chantaje» y alegando que trataba de aerogeneradores, no del precio de la electricidad."),
          "https://www.polsatnews.pl/wiadomosc/2025-08-21/prezydent-zawetowal-ustawe-wiatrakowa-rodzaj-szantazu/",
          "mixed"
        ]
      ],
      verdict: L3("If you're considering voting for Centrum, it's worth looking beyond the slogans.\n\nIts MPs were elected in 2023 for Polska 2050. In February 2026 they split from it, taking the climate ministry with them. The club wants to be a coalition partner, but has not signed the coalition agreement.\n\nIts minister tied the household electricity freeze to looser wind-farm rules in a single bill. President Nawrocki vetoed it in August 2025, calling it blackmail.\n\nTo be fair, household electricity stayed frozen at PLN 500/MWh net through 2025, and the 2026 tariff came in about 1% lower still, at PLN 495.16 (URE).",
        "Si vous envisagez de voter Centrum, mieux vaut regarder au-delà des slogans.\n\nSes députés ont été élus en 2023 pour Polska 2050. En février 2026, ils l'ont quittée en emportant le ministère du Climat. Le groupe veut être partenaire de la coalition, mais n'a pas signé l'accord de coalition.\n\nSa ministre a lié dans un même texte le gel des prix de l'électricité des ménages et l'assouplissement des règles éoliennes. Le président Nawrocki y a opposé son veto en août 2025, parlant de chantage.\n\nPour être juste, l'électricité des ménages est restée gelée à 500 zł/MWh hors taxes jusqu'à fin 2025, et le tarif 2026 est encore environ 1 % plus bas, à 495,16 zł (URE).",
        "Si estás pensando en votar a Centrum, conviene mirar más allá de los eslóganes.\n\nSus diputados fueron elegidos en 2023 por Polska 2050. En febrero de 2026 se separaron y se llevaron el Ministerio del Clima. El grupo quiere ser socio de la coalición, pero no ha firmado el acuerdo de coalición.\n\nSu ministra unió en un solo proyecto la congelación del precio eléctrico de los hogares y la flexibilización de las normas eólicas. El presidente Nawrocki lo vetó en agosto de 2025, hablando de chantaje.\n\nPara ser justos, la electricidad de los hogares siguió congelada a 500 zł/MWh netos hasta finales de 2025, y la tarifa de 2026 es aún un 1 % más baja, de 495,16 zł (URE)."),
      fin: {
        y: "2026",
        s: "No PKW report yet (club formed in February 2026)",
        src: "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow",
        p: null,
        n: L3("Centrum is a parliamentary club formed in 2026; no party financial report has been published for it.",
          "Centrum est un groupe parlementaire créé en 2026 ; aucun rapport financier de parti n'a été publié pour lui.",
          "Centrum es un grupo parlamentario creado en 2026; no se ha publicado ningún informe financiero de partido.")
      },
      prog: []
    },
    {
      id: "pl2050",
      born: { y: 2020, m: 9, gov: "partner", u: "https://www.rmf24.pl/fakty/polska/news-holownia-zaklada-partie-nie-bedzie-jej-szefem,nId,4762140" },
      name: "Polska 2050",
      full: "Polska 2050",
      leader: "Katarzyna Pełczyńska-Nałęcz",
      seats: L3("15 of 460 MPs (2026), down from 33 before the February 2026 split · elected on the Trzecia Droga list (14.40% with PSL)",
        "15 députés sur 460 (2026), contre 33 avant la scission de février 2026 · élus sur la liste Trzecia Droga (14,40 % avec le PSL)",
        "15 de 460 diputados (2026), frente a 33 antes de la escisión de febrero de 2026 · elegidos en la lista Trzecia Droga (14,40 % con el PSL)"),
      role: "gov",
      pos: 0.2,
      style: "lean",
      dit: [
        L3("A new politics beyond the PiS-PO duopoly",
          "Une politique nouvelle au-delà du duopole PiS-PO",
          "Una política nueva más allá del duopolio PiS-PO"),
        L3("A transparent Sejm that works",
          "Une Diète transparente et efficace",
          "Un Sejm transparente que funcione"),
        L3("A lower health contribution for entrepreneurs",
          "Une cotisation santé plus basse pour les entrepreneurs",
          "Una cotización sanitaria más baja para los autónomos"),
        L3("Climate, energy and EU funds",
          "Le climat, l'énergie et les fonds européens",
          "Clima, energía y fondos europeos")
      ],
      fait: [
        [
          L3("Promised to end the Sejm Marshal's 'freezer' for bills; after Szymon Hołownia's first year as Marshal, 39 bills still had no print number, 28 of them from the opposition. He said he had kept every promise of his first day; the fact-checker Demagog counted 7 clearly kept out of a dozen-plus and rated the claim false (February 2025).",
            "Promettait d'en finir avec le « congélateur » du maréchal de la Diète ; après la première année de Szymon Hołownia à ce poste, 39 propositions de loi n'avaient toujours pas de numéro d'impression, dont 28 de l'opposition. Il affirmait avoir tenu toutes les promesses de son premier jour ; le vérificateur Demagog en a compté 7 clairement tenues sur une douzaine et a jugé l'affirmation fausse (février 2025).",
            "Prometió acabar con el «congelador» del mariscal del Sejm; tras el primer año de Szymon Hołownia en el cargo, 39 proyectos seguían sin número de impresión, 28 de ellos de la oposición. Aseguró haber cumplido todas las promesas de su primer día; el verificador Demagog contó 7 claramente cumplidas de una docena larga y calificó la afirmación de falsa (febrero de 2025)."),
          "https://demagog.org.pl/wypowiedzi/czy-marszalek-holownia-dotrzymal-wszystkich-obietnic/"
        ],
        [
          L3("Promised a stable centre; in February 2026, half its MPs and most of its senators left to form Centrum, and it lost the climate ministry.",
            "Promettait un centre stable ; en février 2026, la moitié de ses députés et la plupart de ses sénateurs sont partis former Centrum, et il a perdu le ministère du Climat.",
            "Prometió un centro estable; en febrero de 2026, la mitad de sus diputados y la mayoría de sus senadores se fueron a formar Centrum, y perdió el Ministerio del Clima."),
          "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow"
        ],
        [
          L3("Promised a lower health contribution; the cut it voted for in April 2025 was vetoed by President Duda in May 2025, so the promise remains unmet.",
            "Promettait une cotisation santé plus basse ; la baisse votée en avril 2025 a subi le veto du président Duda en mai 2025 : la promesse reste à tenir.",
            "Prometió una cotización sanitaria más baja; la rebaja que votó en abril de 2025 fue vetada por el presidente Duda en mayo de 2025, así que la promesa sigue sin cumplirse."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ]
      ],
      ok: [
        L3("Hołownia handed the Sejm Marshal's office to Lewica's Czarzasty in November 2025, as the 2023 coalition deal said",
          "Hołownia a cédé la présidence de la Diète à Czarzasty (Lewica) en novembre 2025, comme le prévoyait l'accord de 2023",
          "Hołownia cedió la presidencia del Sejm a Czarzasty (Lewica) en noviembre de 2025, como decía el acuerdo de 2023"),
        L3("Contribution holidays it campaigned for with PSL: PLN 4.27 billion waived for small firms by June 2026 (ZUS)",
          "Vacances de cotisations défendues avec le PSL : 4,27 milliards de zł annulés pour les petites entreprises en juin 2026 (ZUS)",
          "Vacaciones de cotizaciones defendidas con el PSL: 4.270 millones de zł condonados a pequeñas empresas en junio de 2026 (ZUS)"),
        L3("While it held the climate ministry, household electricity stayed frozen at PLN 500/MWh",
          "Tant qu'il détenait le ministère du Climat, l'électricité des ménages est restée gelée à 500 zł/MWh",
          "Mientras tuvo el Ministerio del Clima, la electricidad de los hogares siguió congelada a 500 zł/MWh")
      ],
      casier: [],
      chute: L3("If you vote Polska 2050, know that its leader said that as Sejm Marshal he had kept every promise of his first day, and the fact-checker Demagog rated that claim false.",
        "Si vous votez Polska 2050, sachez que son chef a affirmé avoir tenu, comme maréchal de la Diète, toutes les promesses de son premier jour, et que le vérificateur Demagog a jugé cette affirmation fausse.",
        "Si votas a Polska 2050, debes saber que su líder aseguró haber cumplido como mariscal del Sejm todas las promesas de su primer día, y que el verificador Demagog calificó esa afirmación de falsa."),
      prom: [
        [
          L3("Lower health contribution for entrepreneurs: passed in April 2025, vetoed by President Duda in May 2025",
            "Cotisation santé plus basse pour les entrepreneurs : votée en avril 2025, veto du président Duda en mai 2025",
            "Cotización sanitaria más baja para autónomos: aprobada en abril de 2025, vetada por el presidente Duda en mayo de 2025"),
          "partial",
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ],
        [
          L3("Contribution holidays for small firms: in force since November 2024; 3.28 million applications and PLN 4.27 billion waived by June 2026",
            "Vacances de cotisations pour les petites entreprises : en vigueur depuis novembre 2024 ; 3,28 millions de demandes et 4,27 milliards de zł annulés en juin 2026",
            "Vacaciones de cotizaciones para pequeñas empresas: vigentes desde noviembre de 2024; 3,28 millones de solicitudes y 4.270 millones de zł condonados en junio de 2026"),
          "kept",
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi",
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi"
        ],
        [
          L3("Keep electricity affordable: freeze kept to end 2025; 2026 tariff below the frozen price",
            "Garder une électricité abordable : gel maintenu jusqu'à fin 2025 ; tarif 2026 sous le prix gelé",
            "Mantener la electricidad asequible: congelación hasta finales de 2025; tarifa 2026 por debajo del precio congelado"),
          "kept",
          "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html",
          "https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13002,Prezes-Urzedu-Regulacji-Energetyki-zatwierdzil-taryfy-na-sprzedaz-i-dystrybucje-.html"
        ]
      ],
      pairs: [
        [
          L3("A transparent Sejm that works: no more Marshal's 'freezer'",
            "Une Diète transparente et efficace : fini le « congélateur » du maréchal",
            "Un Sejm transparente que funcione: se acabó el «congelador» del mariscal"),
          L3("Partly kept. As Marshal from November 2023, Szymon Hołownia removed the police barriers around the Sejm and started press breakfasts and a video podcast; Demagog counted 7 of a dozen-plus first-day promises clearly kept. But after his first year 39 bills still had no print number, 28 of them from the opposition; he cited formal reasons, which Demagog said do not excuse the slow handling. Demagog rated false his claim to have kept every first-day promise.",
            "En partie tenu. Maréchal à partir de novembre 2023, Szymon Hołownia a retiré les barrières policières autour de la Diète et lancé des petits-déjeuners de presse et un podcast vidéo ; Demagog compte 7 promesses de son premier jour clairement tenues sur une douzaine. Mais après sa première année, 39 propositions de loi n'avaient toujours pas de numéro d'impression, dont 28 de l'opposition ; il a invoqué des raisons formelles, qui, selon Demagog, n'excusent pas la lenteur. Demagog a jugé fausse son affirmation d'avoir tenu toutes les promesses de son premier jour.",
            "Cumplido en parte. Mariscal desde noviembre de 2023, Szymon Hołownia retiró las vallas policiales en torno al Sejm y puso en marcha desayunos de prensa y un pódcast en vídeo; Demagog cuenta 7 promesas de su primer día claramente cumplidas de una docena larga. Pero tras su primer año 39 proyectos seguían sin número de impresión, 28 de ellos de la oposición; alegó motivos formales, que según Demagog no justifican la lentitud. Demagog calificó de falsa su afirmación de haber cumplido todas las promesas de su primer día."),
          "https://demagog.org.pl/wypowiedzi/czy-marszalek-holownia-dotrzymal-wszystkich-obietnic/",
          "mixed"
        ],
        [
          L3("A lower health contribution for entrepreneurs (Trzecia Droga, 2023)",
            "Une cotisation santé plus basse pour les entrepreneurs (Trzecia Droga, 2023)",
            "Una cotización sanitaria más baja para los autónomos (Trzecia Droga, 2023)"),
          L3("Pushed, not delivered. Its MPs voted for the cut passed on 4 April 2025, worth PLN 4.6 billion for about 2.5 million entrepreneurs; President Duda vetoed it on 6 May 2025, citing doubts about social justice.",
            "Défendue, pas obtenue. Ses députés ont voté la baisse adoptée le 4 avril 2025, d'un montant de 4,6 milliards de zł pour environ 2,5 millions d'entrepreneurs ; le président Duda y a opposé son veto le 6 mai 2025, invoquant des doutes sur la justice sociale.",
            "Impulsada, no lograda. Sus diputados votaron la rebaja aprobada el 4 de abril de 2025, de 4.600 millones de zł para unos 2,5 millones de autónomos; el presidente Duda la vetó el 6 de mayo de 2025, alegando dudas sobre la justicia social."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/",
          "mixed",
          null
        ],
        [
          L3("Contribution holidays for small firms (Trzecia Droga, 2023)",
            "Vacances de cotisations pour les petites entreprises (Trzecia Droga, 2023)",
            "Vacaciones de cotizaciones para pequeñas empresas (Trzecia Droga, 2023)"),
          L3("In force since November 2024. By June 2026 ZUS had received 3,283,825 applications, and PLN 4.27 billion of contributions that small firms would otherwise have paid had been waived.",
            "En vigueur depuis novembre 2024. En juin 2026, la ZUS avait reçu 3 283 825 demandes, et 4,27 milliards de zł de cotisations que les petites entreprises auraient dû payer avaient été annulés.",
            "Vigentes desde noviembre de 2024. En junio de 2026 la ZUS había recibido 3.283.825 solicitudes y se habían condonado 4.270 millones de zł de cotizaciones que las pequeñas empresas habrían tenido que pagar."),
          "https://www.zus.pl/en/-/wakacje-sk%C5%82adkowe-podsumowanie-20-miesi%C4%99cy-trwania-ulgi",
          "kept"
        ]
      ],
      verdict: L3("If you're considering voting for Polska 2050, it's worth looking beyond the slogans.\n\nIt promised a Sejm without the Marshal's 'freezer'. After Szymon Hołownia's first year as Marshal, 39 bills still had no print number, 28 of them from the opposition. Demagog rated false his claim to have kept every first-day promise.\n\nIt promised a stable centre. In February 2026, half its MPs and most of its senators left to form Centrum, taking the climate ministry with them.\n\nIts health-contribution cut for entrepreneurs was vetoed in May 2025.\n\nTo be fair, the contribution holidays it campaigned for with PSL had waived PLN 4.27 billion of small firms' social contributions by June 2026 (ZUS).",
        "Si vous envisagez de voter Polska 2050, mieux vaut regarder au-delà des slogans.\n\nIl promettait une Diète sans le « congélateur » du maréchal. Après la première année de Szymon Hołownia à ce poste, 39 propositions de loi n'avaient toujours pas de numéro d'impression, dont 28 de l'opposition. Demagog a jugé fausse son affirmation d'avoir tenu toutes les promesses de son premier jour.\n\nIl promettait un centre stable. En février 2026, la moitié de ses députés et la plupart de ses sénateurs sont partis former Centrum, en emportant le ministère du Climat.\n\nSa baisse de la cotisation santé des entrepreneurs a subi un veto en mai 2025.\n\nPour être juste, les vacances de cotisations qu'il défendait avec le PSL avaient annulé 4,27 milliards de zł de cotisations sociales des petites entreprises en juin 2026 (ZUS).",
        "Si estás pensando en votar a Polska 2050, conviene mirar más allá de los eslóganes.\n\nPrometió un Sejm sin el «congelador» del mariscal. Tras el primer año de Szymon Hołownia en el cargo, 39 proyectos seguían sin número de impresión, 28 de ellos de la oposición. Demagog calificó de falsa su afirmación de haber cumplido todas las promesas de su primer día.\n\nPrometió un centro estable. En febrero de 2026 la mitad de sus diputados y la mayoría de sus senadores se fueron a formar Centrum, llevándose el Ministerio del Clima.\n\nSu rebaja de la cotización sanitaria de los autónomos fue vetada en mayo de 2025.\n\nPara ser justos, las vacaciones de cotizaciones que defendió con el PSL habían condonado 4.270 millones de zł de cotizaciones sociales de pequeñas empresas en junio de 2026 (ZUS)."),
      fin: {
        y: "2025",
        s: "PKW, financial reports of political parties",
        src: "https://kbw.gov.pl/prawo-wyborcze/uchwaly-pkw/2025-r/8",
        p: null,
        n: L3("We could not open PKW's resolution on Polska 2050's 2025 report, so no breakdown is shown.",
          "Nous n'avons pas pu ouvrir la résolution de la PKW sur le rapport 2025 de Polska 2050, d'où l'absence de ventilation.",
          "No pudimos abrir la resolución de la PKW sobre el informe de 2025 de Polska 2050, así que no se muestra desglose.")
      },
      prog: [["2023 · Trzecia Droga (PSL + Polska 2050)", "https://www.psl.pl/wp-content/uploads/2023/10/12-gwarancji-1.pdf"]]
    },
    {
      id: "razem",
      born: { y: 2015, gov: "never", u: "https://partiarazem.pl/home-en" },
      name: "Razem",
      full: "Partia Razem (koło poselskie)",
      leader: "Adrian Zandberg",
      seats: L3("4 of 460 MPs (a circle, 2026) · elected in 2023 on the Lewica list (8.61%)",
        "4 députés sur 460 (un cercle, 2026) · élus en 2023 sur la liste Lewica (8,61 %)",
        "4 de 460 diputados (un círculo, 2026) · elegidos en 2023 en la lista de Lewica (8,61 %)"),
      role: "opp",
      pos: -1.5,
      edge: true,
      style: "lean",
      dit: [
        L3("Strong public services: health care, housing, transport",
          "Des services publics forts : santé, logement, transports",
          "Servicios públicos fuertes: sanidad, vivienda, transporte"),
        L3("Fair taxes and workers' rights",
          "Une fiscalité juste et les droits des salariés",
          "Impuestos justos y derechos laborales"),
        L3("Pro-European and pro-Ukrainian",
          "Pro-européen et pro-ukrainien",
          "Proeuropeo y proucraniano"),
        L3("Government 'not at any cost'",
          "Gouverner, « mais pas à n'importe quel prix »",
          "Gobernar, «pero no a cualquier precio»")
      ],
      fait: [
        [
          L3("Voted for the change of government in 2023; in October 2024 it left the Lewica club, saying the government it had helped install had failed, and kept the seats won on Lewica's list.",
            "A voté pour l'alternance en 2023 ; en octobre 2024, il a quitté le groupe Lewica en disant que le gouvernement qu'il avait aidé à installer avait échoué, et a gardé les sièges gagnés sur la liste Lewica.",
            "Votó por el cambio de Gobierno en 2023; en octubre de 2024 dejó el grupo de Lewica diciendo que el Gobierno que ayudó a formar había fracasado, y se quedó con los escaños ganados en la lista de Lewica."),
          "https://www.polsatnews.pl/wiadomosc/2024-10-27/partia-razem-podjela-decyzje-w-sejmie-zajda-zmiany/"
        ],
        [
          L3("Calls itself the party of collective decisions; when it left, five of its parliamentarians, including co-founder Magdalena Biejat, quit Razem to stay with Lewica.",
            "Se dit le parti des décisions collectives ; lors de son départ, cinq de ses parlementaires, dont la cofondatrice Magdalena Biejat, ont quitté Razem pour rester avec Lewica.",
            "Se presenta como el partido de las decisiones colectivas; al irse, cinco de sus parlamentarias, entre ellas la cofundadora Magdalena Biejat, dejaron Razem para quedarse con Lewica."),
          "https://www.polsatnews.pl/wiadomosc/2024-10-27/partia-razem-podjela-decyzje-w-sejmie-zajda-zmiany/"
        ],
        [
          L3("In April 2025 it voted against the health-contribution cut for about 2.5 million entrepreneurs, worth PLN 4.6 billion to them, which KO, PSL and Polska 2050 passed; PiS and Lewica also voted against.",
            "En avril 2025, il a voté contre la baisse de la cotisation santé d'environ 2,5 millions d'entrepreneurs, d'un montant de 4,6 milliards de zł pour eux, adoptée par la KO, le PSL et Polska 2050 ; le PiS et Lewica ont aussi voté contre.",
            "En abril de 2025 votó contra la rebaja de la cotización sanitaria de unos 2,5 millones de autónomos, por valor de 4.600 millones de zł para ellos, que aprobaron la KO, el PSL y Polska 2050; el PiS y Lewica también votaron en contra."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/"
        ]
      ],
      ok: [
        L3("Voted against the February 2025 law allowing asylum to be suspended, one of 38 votes against",
          "A voté contre la loi de février 2025 permettant de suspendre l'asile, parmi 38 voix contre",
          "Votó contra la ley de febrero de 2025 que permite suspender el asilo, entre 38 votos en contra"),
        L3("Tabled amendments on health, housing and science to the 2025 budget before opposing it",
          "A déposé des amendements sur la santé, le logement et la science au budget 2025 avant de s'y opposer",
          "Presentó enmiendas sobre sanidad, vivienda y ciencia al presupuesto de 2025 antes de oponerse"),
        L3("Its leader Adrian Zandberg won 4.86% (952,821 votes) in the 2025 presidential first round",
          "Son chef Adrian Zandberg a obtenu 4,86 % (952 821 voix) au premier tour de la présidentielle 2025",
          "Su líder Adrian Zandberg obtuvo el 4,86 % (952.821 votos) en la primera vuelta presidencial de 2025")
      ],
      casier: [],
      chute: L3("If you vote Razem, know that it backed the change of government in 2023 and left the coalition club a year later, keeping the seats won on Lewica's list.",
        "Si vous votez Razem, sachez qu'il a soutenu l'alternance en 2023 et quitté le groupe de la coalition un an plus tard, en gardant les sièges gagnés sur la liste Lewica.",
        "Si votas a Razem, debes saber que apoyó el cambio de Gobierno en 2023 y dejó el grupo de la coalición un año después, quedándose con los escaños ganados en la lista de Lewica."),
      prom: [
        [
          L3("Large public rental housing programme: never in government, untested",
            "Grand programme de logements publics à louer : jamais au gouvernement, non testé",
            "Gran programa de vivienda pública en alquiler: nunca en el Gobierno, sin probar"),
          "untested",
          null
        ],
        [
          L3("Much higher public health spending: untested",
            "Des dépenses de santé publiques bien plus élevées : non testé",
            "Mucho más gasto sanitario público: sin probar"),
          "untested",
          null
        ],
        [
          L3("Higher taxes on top incomes and wealth: untested",
            "Plus d'impôts sur les hauts revenus et le patrimoine : non testé",
            "Más impuestos a las rentas altas y al patrimonio: sin probar"),
          "untested",
          null
        ]
      ],
      pairs: [
        [
          L3("Fair taxes and well-funded public health care",
            "Une fiscalité juste et une santé publique bien financée",
            "Impuestos justos y una sanidad pública bien financiada"),
          L3("Its circle voted against the cut in entrepreneurs' health contributions, worth PLN 4.6 billion in lost health-fund revenue; it passed the Sejm on 4 April 2025 with KO, PSL and Polska 2050. President Duda later vetoed it.",
            "Son cercle a voté contre la baisse des cotisations santé des entrepreneurs, soit 4,6 milliards de zł de recettes en moins pour l'assurance maladie ; elle a été adoptée par la Diète le 4 avril 2025 avec la KO, le PSL et Polska 2050. Le président Duda y a ensuite opposé son veto.",
            "Su círculo votó contra la rebaja de las cotizaciones sanitarias de los autónomos, 4.600 millones de zł menos para el fondo de salud; el Sejm la aprobó el 4 de abril de 2025 con la KO, el PSL y Polska 2050. El presidente Duda la vetó después."),
          "https://www.polsatnews.pl/wiadomosc/2025-05-06/prezydent-zdecydowal-ws-obnizenia-skladki-zdrowotnej-przedsiebiorcom/",
          "consistent",
          null
        ],
        [
          L3("No suspension of the right to asylum",
            "Pas de suspension du droit d'asile",
            "Ninguna suspensión del derecho de asilo"),
          L3("Its MPs voted against the law allowing the government to suspend asylum applications at the Belarus border; it passed 386 to 38 on 21 February 2025, with five Razem and 18 Lewica MPs among those against.",
            "Ses députés ont voté contre la loi permettant au gouvernement de suspendre les demandes d'asile à la frontière biélorusse ; elle a été adoptée par 386 voix contre 38 le 21 février 2025, cinq députés de Razem et 18 de Lewica figurant parmi les opposants.",
            "Sus diputados votaron contra la ley que permite al Gobierno suspender las solicitudes de asilo en la frontera con Bielorrusia; se aprobó por 386 votos a 38 el 21 de febrero de 2025, con cinco diputados de Razem y 18 de Lewica entre los que votaron en contra."),
          "https://www.polsatnews.pl/wiadomosc/2025-02-21/ustawa-o-ograniczeniu-prawa-do-azylu-sejm-zdecydowal/",
          "consistent",
          ["https://bip.brpo.gov.pl/pl/content/rpo-cudzoziemcy-wniosek-ochrona-miedzynarodowa-zawieszenie-mswia"]
        ]
      ],
      verdict: L3("If you're considering voting for Razem, it's worth looking beyond the slogans.\n\nIn 2023 it helped install the coalition. In October 2024 it left the Lewica club, saying the government it had helped install had failed, and kept the seats its MPs had won on Lewica's list.\n\nAs it left, five of its own parliamentarians, including co-founder Magdalena Biejat, quit Razem to stay with Lewica.\n\nIn opposition, it voted against the April 2025 health-contribution cut for entrepreneurs, alongside PiS and Lewica, and against the February 2025 asylum-suspension law. Both passed. Its programme has never been tested in government.\n\nBefore voting, it's worth asking: do the party's actions match its promises?",
        "Si vous envisagez de voter Razem, mieux vaut regarder au-delà des slogans.\n\nEn 2023, il a aidé à installer la coalition. En octobre 2024, il a quitté le groupe Lewica en disant que le gouvernement qu'il avait aidé à installer avait échoué, et a gardé les sièges gagnés par ses députés sur la liste Lewica.\n\nLors de ce départ, cinq de ses propres parlementaires, dont la cofondatrice Magdalena Biejat, ont quitté Razem pour rester avec Lewica.\n\nDans l'opposition, il a voté contre la baisse de la cotisation santé des entrepreneurs d'avril 2025, comme le PiS et Lewica, et contre la loi de février 2025 sur la suspension de l'asile. Les deux ont été adoptées. Son programme n'a jamais été testé au gouvernement.\n\nAvant de voter, posez-vous la question : ses actes sont-ils à la hauteur de ses promesses ?",
        "Si estás pensando en votar a Razem, conviene mirar más allá de los eslóganes.\n\nEn 2023 ayudó a formar la coalición. En octubre de 2024 dejó el grupo de Lewica diciendo que el Gobierno que había ayudado a formar había fracasado, y se quedó con los escaños que sus diputados ganaron en la lista de Lewica.\n\nAl irse, cinco de sus propias parlamentarias, entre ellas la cofundadora Magdalena Biejat, dejaron Razem para quedarse con Lewica.\n\nEn la oposición votó contra la rebaja de la cotización sanitaria de los autónomos de abril de 2025, como el PiS y Lewica, y contra la ley de febrero de 2025 que suspende el asilo. Ambas se aprobaron. Su programa nunca se ha probado en el Gobierno.\n\nAntes de votar, conviene preguntarse: ¿sus actos están a la altura de sus promesas?"),
      fin: {
        y: "2025",
        s: "PKW, financial reports of political parties",
        src: "https://kbw.gov.pl/prawo-wyborcze/uchwaly-pkw/2025-r/8",
        p: null,
        n: L3("We could not open PKW's resolution on Razem's 2025 report, so no breakdown is shown.",
          "Nous n'avons pas pu ouvrir la résolution de la PKW sur le rapport 2025 de Razem, d'où l'absence de ventilation.",
          "No pudimos abrir la resolución de la PKW sobre el informe de 2025 de Razem, así que no se muestra desglose.")
      },
      prog: [["2025 · Deklaracja programowa", "https://partiarazem.pl/deklaracja-programowa"]]
    }
  ],
  media: {
    ctx: L3("Reuters Institute Digital News Report 2026: 39% of Poles trust most news most of the time, down 8 points in a year; TVN leads television news, and Kanał Zero is the most visible digital challenger. CBOS (June 2026, 991 people): television is the main news source for 59% and news websites for 50%; Polsat and Polsat News are the most credible TV brand (32% credible, 17% not), TVN and TVN24 are split (28% against 30%), public TV news is trusted by 18% and distrusted by 35%, TV Republika by 11% against 31%.",
      "Digital News Report 2026 du Reuters Institute : 39 % des Polonais font confiance à la plupart des informations la plupart du temps, 8 points de moins en un an ; TVN domine l'information télévisée et Kanał Zero est le concurrent numérique le plus visible. CBOS (juin 2026, 991 personnes) : la télévision est la première source d'information pour 59 % et les sites d'information pour 50 % ; Polsat et Polsat News sont la marque télé la plus crédible (32 % crédible, 17 % non), TVN et TVN24 sont partagés (28 % contre 30 %), l'information de la télévision publique inspire confiance à 18 % et méfiance à 35 %, TV Republika à 11 % contre 31 %.",
      "Digital News Report 2026 del Reuters Institute: el 39 % de los polacos confía en la mayoría de las noticias la mayor parte del tiempo, 8 puntos menos en un año; TVN lidera la información televisiva y Kanał Zero es el competidor digital más visible. CBOS (junio de 2026, 991 personas): la televisión es la principal fuente de noticias para el 59 % y los portales para el 50 %; Polsat y Polsat News son la marca televisiva más creíble (32 % creíble, 17 % no), TVN y TVN24 están divididos (28 % frente a 30 %), las noticias de la televisión pública inspiran confianza al 18 % y desconfianza al 35 %, TV Republika al 11 % frente al 31 %."),
    ctxSrc: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/poland",
    rec: [
      [
        "PAP (Polska Agencja Prasowa)",
        L3("National news agency, state-owned; detailed coverage of PKW decisions, coalition splits and party funding",
          "Agence de presse nationale, propriété de l'État ; couverture détaillée des décisions de la PKW, des scissions de la coalition et du financement des partis",
          "Agencia de noticias nacional, de propiedad estatal; cobertura detallada de las decisiones de la PKW, las escisiones de la coalición y la financiación de los partidos"),
        "https://www.pap.pl/aktualnosci/subwencje-dla-pis-i-konfederacji-pkw-zdecydowala"
      ],
      [
        "Demagog",
        L3("Independent fact-checking association, verified member of the European Fact-Checking Standards Network (valid to May 2027); tracks the government's promises",
          "Association indépendante de vérification, membre vérifié du réseau européen EFCSN (valable jusqu'en mai 2027) ; suit les promesses du gouvernement",
          "Asociación independiente de verificación, miembro verificado de la red europea EFCSN (válido hasta mayo de 2027); sigue las promesas del Gobierno"),
        "https://members.efcsn.com/organization/demagog"
      ],
      [
        "Polsat News",
        L3("Private news channel of the Polsat group; the most credible TV news brand in CBOS's June 2026 survey (32% credible, 17% not), trusted by 51% of those who know it in the Digital News Report 2023, the latest brand figures we could open.",
          "Chaîne d'information privée du groupe Polsat ; la marque d'information télévisée la plus crédible dans l'enquête CBOS de juin 2026 (32 % crédible, 17 % non), jugée fiable par 51 % de ceux qui la connaissent dans le Digital News Report 2023, derniers chiffres par marque que nous avons pu ouvrir.",
          "Canal de noticias privado del grupo Polsat; la marca de noticias televisivas más creíble en la encuesta de CBOS de junio de 2026 (32 % creíble, 17 % no), fiable para el 51 % de quienes la conocen en el Digital News Report 2023, las últimas cifras por marca que pudimos abrir."),
        "https://www.cbos.pl/PL/publikacje/raporty_tekst.php?id=7273"
      ],
      [
        "RMF FM / RMF24",
        L3("Private radio station and its news site; the most trusted news brand in Poland in the Digital News Report 2023 (55% of those who know it) and 2021 (68%). Added on 15 November 2026: the 2026 brand table could not be read.",
          "Radio privée et son site d'information ; la marque d'information la plus fiable de Pologne dans le Digital News Report 2023 (55 % de ceux qui la connaissent) et 2021 (68 %). Ajoutée le 15 novembre 2026 : le tableau 2026 par marque n'a pas pu être lu.",
          "Radio privada y su portal de noticias; la marca informativa más fiable de Polonia en el Digital News Report 2023 (55 % de quienes la conocen) y 2021 (68 %). Añadida el 15 de noviembre de 2026: la tabla de marcas de 2026 no pudo leerse."),
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2023/poland"
      ],
      [
        "TVN / TVN24 (incl. Konkret24)",
        L3("Private broadcaster owned by Warner Bros. Discovery, with its fact-checking unit Konkret24; trusted by 47% of those who know it (Digital News Report 2023) and the leading TV news provider in 2026 (Digital News Report 2026), while CBOS finds its credibility split in June 2026 (28% credible, 30% not). Added on 15 November 2026.",
          "Chaîne privée détenue par Warner Bros. Discovery, avec sa cellule de vérification Konkret24 ; jugée fiable par 47 % de ceux qui la connaissent (Digital News Report 2023) et premier fournisseur d'information télévisée en 2026 (Digital News Report 2026), alors que la CBOS trouve sa crédibilité partagée en juin 2026 (28 % crédible, 30 % non). Ajoutée le 15 novembre 2026.",
          "Cadena privada propiedad de Warner Bros. Discovery, con su unidad de verificación Konkret24; fiable para el 47 % de quienes la conocen (Digital News Report 2023) y principal proveedor de noticias televisivas en 2026 (Digital News Report 2026), aunque CBOS encuentra su credibilidad dividida en junio de 2026 (28 % creíble, 30 % no). Añadida el 15 de noviembre de 2026."),
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/poland"
      ]
    ],
    vid: [
      [
        "Kanał Zero",
        L3("YouTube channel run by Krzysztof Stanowski (himself a 2025 presidential candidate), with long interviews of politicians from every camp; the most visible digital challenger to established media (Digital News Report 2026) and rated slightly more positively than negatively in CBOS's June 2026 survey.",
          "Chaîne YouTube dirigée par Krzysztof Stanowski (lui-même candidat à la présidentielle 2025), avec de longues interviews de responsables de tous bords ; le concurrent numérique le plus visible des médias établis (Digital News Report 2026), un peu plus d'avis positifs que négatifs dans l'enquête CBOS de juin 2026.",
          "Canal de YouTube dirigido por Krzysztof Stanowski (él mismo candidato presidencial en 2025), con largas entrevistas a políticos de todos los bandos; el competidor digital más visible de los medios establecidos (Digital News Report 2026) y con algo más de valoraciones positivas que negativas en la encuesta de CBOS de junio de 2026."),
        "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/poland"
      ]
    ],
    own: [
      L3("State: public broadcasters TVP and Polskie Radio (in liquidation since December 2023, PLN 1.2 billion of budget money in the first half of 2026) and the news agency PAP",
        "État : les médias publics TVP et Polskie Radio (en liquidation depuis décembre 2023, 1,2 milliard de zł du budget au premier semestre 2026) et l'agence PAP",
        "Estado: los medios públicos TVP y Polskie Radio (en liquidación desde diciembre de 2023, 1.200 millones de zł del presupuesto en el primer semestre de 2026) y la agencia PAP"),
      L3("State-controlled energy group Orlen: majority of the Polska Press network of local papers, bought under the previous government",
        "Groupe énergétique Orlen, contrôlé par l'État : majorité du réseau de journaux locaux Polska Press, acheté sous le gouvernement précédent",
        "Grupo energético Orlen, controlado por el Estado: mayoría de la red de diarios locales Polska Press, comprada bajo el Gobierno anterior"),
      L3("Warner Bros. Discovery (US): TVN and TVN24; RSF warns that a takeover by Paramount Skydance could put TVN24's independence at risk",
        "Warner Bros. Discovery (États-Unis) : TVN et TVN24 ; RSF avertit qu'un rachat par Paramount Skydance pourrait menacer l'indépendance de TVN24",
        "Warner Bros. Discovery (EE. UU.): TVN y TVN24; RSF advierte de que una compra por Paramount Skydance podría poner en riesgo la independencia de TVN24"),
      L3("Private Polish groups: Polsat (Polsat, Polsat News); the government designated TVN and Polsat companies of strategic importance to shield them from hostile takeovers",
        "Groupes privés polonais : Polsat (Polsat, Polsat News) ; le gouvernement a désigné TVN et Polsat sociétés d'importance stratégique pour les protéger des rachats hostiles",
        "Grupos privados polacos: Polsat (Polsat, Polsat News); el Gobierno declaró a TVN y Polsat empresas de importancia estratégica para protegerlas de compras hostiles")
    ],
    ownSrc: "https://rsf.org/en/country/poland",
    facts: [
      [
        L3("RSF 2026: Poland 27th of 180 (75.52), up from 31st. RSF says public media served as propaganda tools for the former majority in 2015-2023 and are struggling to rebuild credibility, and that verbal attacks and SLAPPs against private outlets have decreased since 2024.",
          "RSF 2026 : Pologne 27e sur 180 (75,52), contre 31e. RSF estime que les médias publics ont servi d'outils de propagande à l'ancienne majorité en 2015-2023 et peinent à regagner leur crédibilité, et que les attaques verbales et procédures-bâillons contre les médias privés ont diminué depuis 2024.",
          "RSF 2026: Polonia 27.ª de 180 (75,52), frente a 31.ª. RSF considera que los medios públicos sirvieron de herramienta de propaganda a la anterior mayoría en 2015-2023 y les cuesta recuperar la credibilidad, y que los ataques verbales y demandas SLAPP contra medios privados han disminuido desde 2024."),
        "https://rsf.org/en/country/poland"
      ],
      [
        L3("National Broadcasting Council KRRiT (July 2026): calls the public media liquidation a sham; it refused the 2025 public-mission reports of TVP and Polskie Radio and transferred PLN 241.3 million of licence fees to public broadcasters in the first half of 2026.",
          "Conseil national de l'audiovisuel KRRiT (juillet 2026) : qualifie de simulacre la liquidation des médias publics ; il a refusé les rapports 2025 de mission publique de TVP et Polskie Radio et versé 241,3 millions de zł de redevance aux médias publics au premier semestre 2026.",
          "Consejo Nacional de Radiodifusión KRRiT (julio de 2026): califica de ficticia la liquidación de los medios públicos; rechazó los informes de misión pública de 2025 de TVP y Polskie Radio y transfirió 241,3 millones de zł del canon a los medios públicos en el primer semestre de 2026."),
        "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych"
      ],
      [
        L3("CBOS (June 2026): credibility balance of +15 points for Polsat, -2 for TVN, -17 for public TV news and -20 for TV Republika.",
          "CBOS (juin 2026) : solde de crédibilité de +15 points pour Polsat, -2 pour TVN, -17 pour l'information de la télévision publique et -20 pour TV Republika.",
          "CBOS (junio de 2026): saldo de credibilidad de +15 puntos para Polsat, -2 para TVN, -17 para las noticias de la televisión pública y -20 para TV Republika."),
        "https://www.cbos.pl/PL/publikacje/raporty_tekst.php?id=7273"
      ],
      [
        L3("Freedom House 2026: Poland scores 3 of 4 for free and independent media and 2 of 4 for judicial independence.",
          "Freedom House 2026 : la Pologne obtient 3 sur 4 pour la liberté et l'indépendance des médias et 2 sur 4 pour l'indépendance de la justice.",
          "Freedom House 2026: Polonia obtiene 3 de 4 en medios libres e independientes y 2 de 4 en independencia judicial."),
        "https://freedomhouse.org/country/poland/freedom-world/2026"
      ]
    ]
  },
  sources: [
    { t: "PKW: obwieszczenie o wynikach wyborów do Sejmu 2023", u: "https://pkw.gov.pl/uploaded_files/1697617008_obwieszczenie-sejm.pdf" },
    { t: "PKW: obwieszczenie o wynikach I tury wyborów prezydenckich 2025", u: "https://pkw.gov.pl/uploaded_files/1747706738_obwieszczenie-pkw-wyniki.pdf" },
    { t: "Polsat News: nowy układ sił w Sejmie (29.07.2026)", u: "https://www.polsatnews.pl/wiadomosc/2026-07-29/nowy-uklad-sil-w-sejmie-znaczne-przetasowania-po-decyzji-morawieckiego/" },
    { t: "PAP: Polska 2050 po rozłamie, klub Centrum (20.02.2026)", u: "https://www.pap.pl/aktualnosci/polska-2050-po-rozlamie-traci-jedno-ministerstwo-z-klubu-odeszla-wiekszosc-senatorow" },
    { t: "TVN24: co wydarzyło się w Trybunale Konstytucyjnym (01.11.2026)", u: "https://tvn24.pl/polska/co-wydarzylo-sie-w-trybunale-konstytucyjnym-i-wokol-niego-najwazniejsze-informacje-st9317148" },
    { t: "Polsat News: weto ustawy o usługach cyfrowych (13.11.2026)", u: "https://www.polsatnews.pl/wiadomosc/2026-11-13/ustawa-o-uslugach-cyfrowych-prezydent-podjal-decyzje/" },
    { t: "CBOS: Stosunek do rządu w czerwcu 2026", u: "https://www.cbos.pl/PL/publikacje/raporty/open_file.php?id=7225" },
    { t: "GUS: deficyt i dług sektora instytucji rządowych i samorządowych 2022-2025 (21.10.2026)", u: "https://stat.gov.pl/obszary-tematyczne/rachunki-narodowe/statystyka-sektora-instytucji-rzadowych-i-samorzadowych/deficyt-i-dlug-sektora-instytucji-rzadowych-i-samorzadowych-w-latach-2022-2025,1,43.html" },
    { t: "TVN24: wniosek o ekstradycję Zbigniewa Ziobry do USA (27.07.2026)", u: "https://tvn24.pl/polska/ekstradycja-zbigniewa-ziobry-nieoficjalnie-jest-wniosek-do-usa-st9160450" },
    { t: "KRRiT: podsumowanie I półrocza 2026 w mediach publicznych", u: "https://www.gov.pl/web/krrit/utrzymujacy-sie-stan-pozornej-likwidacji-i-nierozwiazane-problemy--podsumowanie-i-polrocza-2026-w-mediach-publicznych" },
    { t: "PKW: uchwała w sprawie sprawozdania finansowego PiS za 2025", u: "https://www.kbw.gov.pl/uploaded_files/1786051570_ewp-124-prawo-i-sprawiedliwosc.pdf" },
    { t: "Reuters Institute: Digital News Report 2026, Poland", u: "https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2026/poland" }
  ]
});
