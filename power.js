// Who holds power: seats in the lower house and the make-up of the government. France = pilot (14 Nov 2026).
// Neutral: colours show only the status (in government / outside), never party colours. Groups ordered left to right by the card's position.
var POWER = {};
POWER.france={
 asOf:"2026-11-14",
 chamber:{
  name:L3("National Assembly","Assemblée nationale","Asamblea Nacional"),total:577,majority:289,
  src:"https://www2.assemblee-nationale.fr/instances/liste/groupes_politiques/effectif",
  // [label, seats, party card id or null, "gov"|"out"|"vac"]
  groups:[
   [L3("LFI-NFP","LFI-NFP","LFI-NFP"),70,"lfi","out"],
   [L3("GDR (incl. PCF)","GDR (dont PCF)","GDR (incl. PCF)"),17,"pcf","out"],
   [L3("Ecologists (EcoS)","Écologistes (EcoS)","Ecologistas (EcoS)"),38,"ecologistes","out"],
   [L3("Socialists (SOC)","Socialistes (SOC)","Socialistas (SOC)"),68,"ps","out"],
   [L3("LIOT","LIOT","LIOT"),24,null,"out"],
   [L3("Les Démocrates (MoDem)","Les Démocrates (MoDem)","Les Démocrates (MoDem)"),37,"ensemble","gov"],
   [L3("EPR (Renaissance)","EPR (Renaissance)","EPR (Renaissance)"),90,"ensemble","gov"],
   [L3("Horizons","Horizons","Horizons"),35,"ensemble","gov"],
   [L3("Droite républicaine (LR)","Droite républicaine (LR)","Droite républicaine (LR)"),46,"lr","out"],
   [L3("RN","RN","RN"),121,"rn","out"],
   [L3("UDR (Ciotti, allied with RN)","UDR (Ciotti, allié du RN)","UDR (Ciotti, aliado del RN)"),17,null,"out"],
   [L3("Non-attached","Non-inscrits","No adscritos"),11,null,"out"],
   [L3("Vacant","Vacants","Vacantes"),3,null,"vac"]
  ]
 },
 cabinet:{
  name:L3("Lecornu II government (since October 2025)","Gouvernement Lecornu II (depuis octobre 2025)","Gobierno Lecornu II (desde octubre de 2025)"),total:34,
  src:"https://www.publicsenat.fr/actualites/politique/lecornu-ii-decouvrez-la-composition-du-nouveau-gouvernement",
  // [label, members, party card id or null, "gov"|"out"]
  parts:[
   [L3("Renaissance","Renaissance","Renaissance"),11,"ensemble","gov"],
   [L3("MoDem","MoDem","MoDem"),3,"ensemble","gov"],
   [L3("Horizons","Horizons","Horizons"),3,"ensemble","gov"],
   [L3("LR members, without their party's approval","Membres LR, sans l'accord de leur parti","Miembros de LR, sin el acuerdo de su partido"),6,"lr","out"],
   [L3("UDI","UDI","UDI"),1,null,"out"],
   [L3("Former PS, now LIOT group","Ex-PS, groupe LIOT","Ex-PS, grupo LIOT"),1,null,"out"],
   [L3("Civil society","Société civile","Sociedad civil"),8,null,"out"],
   [L3("No party label given","Sans étiquette indiquée","Sin etiqueta indicada"),1,null,"out"]
  ]
 },
 head:L3("President: Emmanuel Macron (Renaissance). Prime Minister: Sébastien Lecornu (Renaissance).","Président : Emmanuel Macron (Renaissance). Premier ministre : Sébastien Lecornu (Renaissance).","Presidente: Emmanuel Macron (Renaissance). Primer ministro: Sébastien Lecornu (Renaissance)."),
 notes:[
  L3("Les Républicains did not officially take part: the party's president had barred members from joining, and the party said the six who did would be excluded.","Les Républicains n'ont pas participé officiellement : le président du parti avait interdit à ses membres d'entrer au gouvernement, et le parti a annoncé l'exclusion des six qui l'ont fait.","Los Republicanos no participaron oficialmente: el presidente del partido había prohibido a sus miembros entrar en el gobierno, y el partido anunció la expulsión de los seis que lo hicieron."),
  L3("The Assembly page gives no date for its figures; it was consulted on 14 November 2026.","La page de l'Assemblée ne date pas ses chiffres ; elle a été consultée le 14 novembre 2026.","La página de la Asamblea no fecha sus cifras; se consultó el 14 de noviembre de 2026.")
 ]
};
POWER.belgique={
 asOf:"2026-11-14",
 chamber:{
  name:L3("Chamber of Representatives","Chambre des représentants","Cámara de Representantes"),total:150,majority:76,
  src:"https://www.lachambre.be/FLWB/Pdf/56/0001/56K0001009.pdf",
  groups:[
   [L3("PVDA-PTB","PVDA-PTB","PVDA-PTB"),15,"ptb","out"],
   [L3("PS","PS","PS"),16,"ps","out"],
   [L3("Ecolo-Groen","Ecolo-Groen","Ecolo-Groen"),9,["ecolo","groen"],"out"],
   [L3("Vooruit","Vooruit","Vooruit"),13,"vooruit","gov"],
   [L3("Les Engagés","Les Engagés","Les Engagés"),14,"engages","gov"],
   [L3("cd&v","cd&v","cd&v"),11,"cdv","gov"],
   [L3("DéFI","DéFI","DéFI"),1,null,"out"],
   [L3("Anders (ex-Open Vld)","Anders (ex-Open Vld)","Anders (ex-Open Vld)"),8,"anders","out"],
   [L3("N-VA","N-VA","N-VA"),24,"nva","gov"],
   [L3("MR","MR","MR"),19,"mr","gov"],
   [L3("Vlaams Belang","Vlaams Belang","Vlaams Belang"),20,"vb","out"]
  ]
 },
 cabinet:{
  name:L3("De Wever government (since 3 February 2025)","Gouvernement De Wever (depuis le 3 février 2025)","Gobierno De Wever (desde el 3 de febrero de 2025)"),total:15,
  src:"https://www.belgium.be/en/about_belgium/government/federal_authorities/federal_government/composition_government",
  parts:[
   [L3("N-VA (incl. the Prime Minister)","N-VA (dont le Premier ministre)","N-VA (incl. el primer ministro)"),4,"nva","gov"],
   [L3("MR","MR","MR"),4,"mr","gov"],
   [L3("Les Engagés","Les Engagés","Les Engagés"),3,"engages","gov"],
   [L3("Vooruit","Vooruit","Vooruit"),2,"vooruit","gov"],
   [L3("cd&v","cd&v","cd&v"),2,"cdv","gov"]
  ]
 },
 head:L3("Head of State: King Philippe. Prime Minister: Bart De Wever (N-VA), at the head of the “Arizona” coalition of five parties, Flemish and French-speaking.","Chef de l'État : le roi Philippe. Premier ministre : Bart De Wever (N-VA), à la tête de la coalition « Arizona » de cinq partis, flamands et francophones.","Jefe del Estado: el rey Felipe. Primer ministro: Bart De Wever (N-VA), al frente de la coalición «Arizona» de cinco partidos, flamencos y francófonos."),
 notes:[
  L3("Seats: official list of members of the Chamber of 29 May 2026. Ecolo and Groen sit in one group. The single DéFI member is not in a recognised group (at least five members are needed); its place in the chart is indicative.","Sièges : liste officielle des membres de la Chambre du 29 mai 2026. Ecolo et Groen forment un seul groupe. L'unique élu DéFI n'appartient à aucun groupe reconnu (il faut au moins cinq membres) ; sa place dans le schéma est indicative.","Escaños: lista oficial de miembros de la Cámara del 29 de mayo de 2026. Ecolo y Groen forman un solo grupo. El único electo de DéFI no pertenece a ningún grupo reconocido (hacen falta al menos cinco miembros); su lugar en el gráfico es indicativo."),
  L3("Government: composition at its swearing-in on 3 February 2025, Prime Minister and 14 ministers.","Gouvernement : composition à sa prestation de serment le 3 février 2025, Premier ministre et 14 ministres.","Gobierno: composición en su juramento el 3 de febrero de 2025, primer ministro y 14 ministros.")
 ]
};
// ---- batch (14 Nov 2026): Argentina, Brazil, South Africa, Morocco, Senegal. Seats from the country cards (sourced), remainder grouped as "other". "sup" = party card role "support".
POWER.argentina={asOf:"2026-11-14",presidential:1,
 chamber:{name:L3("Chamber of Deputies","Chambre des députés","Cámara de Diputados"),total:257,majority:129,
  src:"https://www.letrap.com.ar/politica/la-camara-diputados-que-viene-dos-interbloques-y-19-bancadas-pujaran-las-leyes-javier-milei-n5420609",
  groups:[[L3("FIT-U","FIT-U","FIT-U"),4,"fitu","out"],[L3("Unión por la Patria","Unión por la Patria","Unión por la Patria"),93,"uxp","out"],[L3("Provincias Unidas","Provincias Unidas","Provincias Unidas"),18,"pu","out"],[L3("UCR","UCR","UCR"),6,"ucr","out"],[L3("PRO","PRO","PRO"),12,"pro","sup"],[L3("La Libertad Avanza","La Libertad Avanza","La Libertad Avanza"),95,"lla","gov"],[L3("Other blocs","Autres blocs","Otros bloques"),29,null,"out"]]},
 notes:[L3("Seats as of December 2025, when the deputies elected in October 2025 took office. “Other blocs” groups the provincial and smaller blocs not on a card.","Sièges en décembre 2025, à l'entrée en fonction des députés élus en octobre 2025. « Autres blocs » regroupe les blocs provinciaux et plus petits sans fiche.","Escaños en diciembre de 2025, al asumir los diputados electos en octubre de 2025. «Otros bloques» agrupa los bloques provinciales y menores sin ficha.")]
};
POWER.brazil={asOf:"2026-11-14",presidential:1,
 chamber:{name:L3("Chamber of Deputies (elected October 2026, sits from February 2027)","Chambre des députés (élue en octobre 2026, siège à partir de février 2027)","Cámara de Diputados (elegida en octubre de 2026, en funciones desde febrero de 2027)"),total:513,majority:257,
  src:"https://www.congressoemfoco.com.br/noticia/122897/pl-elege-121-deputados-e-faz-a-maior-bancada-eleita-em-40-anos",
  groups:[[L3("PT","PT","PT"),70,"pt","gov"],[L3("PSB","PSB","PSB"),15,"psb","gov"],[L3("MDB","MDB","MDB"),36,"mdb","sup"],[L3("PSD","PSD","PSD"),43,"psd","sup"],[L3("Podemos","Podemos","Podemos"),27,"podemos","out"],[L3("União Brasil","União Brasil","União Brasil"),46,"uniao","out"],[L3("PP","PP","PP"),41,"pp","out"],[L3("Republicanos","Republicanos","Republicanos"),41,"republicanos","out"],[L3("PL","PL","PL"),121,"pl","out"],[L3("Other parties","Autres partis","Otros partidos"),73,null,"out"]]},
 notes:[L3("The chamber shown is the one elected on 4 October 2026, which takes office in February 2027; the outgoing chamber sits until then. “Other parties” groups the parties without a card, including the PT's federation partners PCdoB and PV.","La chambre affichée est celle élue le 4 octobre 2026, qui entre en fonction en février 2027 ; la chambre sortante siège jusque-là. « Autres partis » regroupe les partis sans fiche, dont les partenaires de fédération du PT, PCdoB et PV.","La cámara mostrada es la elegida el 4 de octubre de 2026, que asume en febrero de 2027; la saliente sesiona hasta entonces. «Otros partidos» agrupa los partidos sin ficha, entre ellos los socios de federación del PT, PCdoB y PV.")]
};
POWER.southafrica={asOf:"2026-11-14",
 chamber:{name:L3("National Assembly","Assemblée nationale","Asamblea Nacional"),total:400,majority:201,
  src:"https://pmg.org.za/blog/Election%20Results%20and%20Allocation%20of%20Seats%20in%20Parliament%20National%20Assembly%20and%20Provincial%20Legislatures%202024",
  groups:[[L3("EFF","EFF","EFF"),39,"eff","out"],[L3("MK","MK","MK"),58,"mk","out"],[L3("ANC","ANC","ANC"),159,"anc","gov"],[L3("IFP","IFP","IFP"),17,"ifp","gov"],[L3("Other GNU members","Autres membres du GNU","Otros miembros del GNU"),9,null,"gov"],[L3("ActionSA","ActionSA","ActionSA"),6,"actionsa","out"],[L3("PA","PA","PA"),9,"pa","gov"],[L3("DA","DA","DA"),87,"da","gov"],[L3("FF Plus","FF Plus","FF Plus"),6,"ffplus","gov"],[L3("Other parties","Autres partis","Otros partidos"),10,null,"out"]]},
 notes:[L3("Seats from the 2024 election. The Government of National Unity brings together ten parties with 287 seats; “Other GNU members” are the smaller partners without a card, and their place in the chart is indicative.","Sièges issus des élections de 2024. Le gouvernement d'unité nationale (GNU) réunit dix partis totalisant 287 sièges ; « Autres membres du GNU » désigne les petits partenaires sans fiche, dont la place dans le schéma est indicative.","Escaños de las elecciones de 2024. El Gobierno de Unidad Nacional (GNU) reúne a diez partidos con 287 escaños; «Otros miembros del GNU» son los socios pequeños sin ficha, y su lugar en el gráfico es indicativo.")]
};
POWER.morocco={asOf:"2026-11-14",
 chamber:{name:L3("House of Representatives","Chambre des représentants","Cámara de Representantes"),total:395,majority:198,
  src:"https://ecoactu.ma/elections-legislatives-2026-resultats-definitifs/",
  groups:[[L3("PPS","PPS","PPS"),19,"pps","gov"],[L3("USFP","USFP","USFP"),26,"usfp","gov"],[L3("PAM","PAM","PAM"),97,"pam","gov"],[L3("MP","MP","MP"),29,"mp","out"],[L3("Istiqlal","Istiqlal","Istiqlal"),65,"istiqlal","gov"],[L3("UC","UC","UC"),17,"uc","sup"],[L3("RNI","RNI","RNI"),66,"rni","out"],[L3("PJD","PJD","PJD"),54,"pjd","out"],[L3("Other parties","Autres partis","Otros partidos"),22,null,"out"]]},
 notes:[L3("Seats from the 23 September 2026 election. The four-party alliance (PAM, Istiqlal, USFP, PPS) was announced on 12 October; on 22 October the House approved its programme by 204 votes to 127.","Sièges issus des élections du 23 septembre 2026. L'alliance à quatre (PAM, Istiqlal, USFP, PPS) a été annoncée le 12 octobre ; le 22 octobre, la Chambre a approuvé son programme par 204 voix contre 127.","Escaños de las elecciones del 23 de septiembre de 2026. La alianza de cuatro (PAM, Istiqlal, USFP, PPS) se anunció el 12 de octubre; el 22 de octubre la Cámara aprobó su programa por 204 votos contra 127.")]
};
POWER.senegal={asOf:"2026-11-14",
 chamber:{name:L3("National Assembly","Assemblée nationale","Asamblea Nacional"),total:165,majority:83,
  src:"https://seneweb.com/fr/news/Politique/-lections-legislatives-le-point-sur-les-resultats-complets_n_456482.html",
  groups:[[L3("Pastef","Pastef","Pastef"),130,"pastef","out"],[L3("Sàmm Sa Kaddu","Sàmm Sa Kaddu","Sàmm Sa Kaddu"),3,"samm","out"],[L3("Jamm ak Njariñ","Jamm ak Njariñ","Jamm ak Njariñ"),7,"jamm","out"],[L3("Takku Wallu","Takku Wallu","Takku Wallu"),16,"takkuwallu","out"],[L3("Other lists","Autres listes","Otras listas"),9,null,"out"]]},
 govNote:L3("No party on our cards sits in the government of Prime Minister Lô: Pastef, which holds 130 of 165 seats, refused to take part after President Faye dismissed Ousmane Sonko in May 2026. The government therefore has no party majority of its own in the Assembly.","Aucun parti présent sur nos fiches ne siège au gouvernement du Premier ministre Lô : le Pastef, qui détient 130 sièges sur 165, a refusé d'y participer après le limogeage d'Ousmane Sonko par le président Faye en mai 2026. Le gouvernement n'a donc pas de majorité partisane propre à l'Assemblée.","Ningún partido de nuestras fichas forma parte del gobierno del primer ministro Lô: el Pastef, que tiene 130 de 165 escaños, se negó a participar tras la destitución de Ousmane Sonko por el presidente Faye en mayo de 2026. El gobierno no tiene, por tanto, una mayoría partidista propia en la Asamblea."),
 notes:[L3("Seats from the early legislative election of 17 November 2024.","Sièges issus des législatives anticipées du 17 novembre 2024.","Escaños de las legislativas anticipadas del 17 de noviembre de 2024.")]
};
POWER.singapore={asOf:"2026-11-15",
 chamber:{name:L3("Parliament (15th Parliament)","Parlement (15e législature)","Parlamento (15.ª legislatura)"),total:108,majority:55,
  src:"https://www.parliament.gov.sg/about-us/structure/members-of-parliament",
  groups:[
   [L3("Workers’ Party (elected MPs)","Workers’ Party (députés élus)","Workers’ Party (diputados electos)"),10,"wp","out"],
   [L3("Workers’ Party (Non-Constituency MPs)","Workers’ Party (députés hors circonscription, NCMP)","Workers’ Party (diputados sin circunscripción, NCMP)"),2,"wp","out"],
   [L3("Nominated MPs (non-partisan)","Députés nommés (sans étiquette)","Diputados nombrados (sin partido)"),9,null,"out"],
   [L3("PAP","PAP","PAP"),86,"pap","gov"],
   [L3("Vacant elected seat (Marine Parade-Braddell Heights GRC)","Siège élu vacant (GRC de Marine Parade-Braddell Heights)","Escaño electo vacante (GRC de Marine Parade-Braddell Heights)"),1,null,"vac"]
  ]},
 head:L3("Prime Minister: Lawrence Wong (PAP), also Minister for Finance.","Premier ministre : Lawrence Wong (PAP), également ministre des Finances.","Primer ministro: Lawrence Wong (PAP), también ministro de Finanzas."),
 notes:[
  L3("Parliament’s page, consulted on 15 November 2026, lists 107 MPs: 96 elected, 2 Non-Constituency MPs and 9 Nominated MPs. The PAP won 87 of the 97 elected seats on 3 May 2025; one seat of Marine Parade-Braddell Heights GRC has been vacant since 20 July 2026, and the remaining MPs of the GRC serve the ward (PMO).","La page du Parlement, consultée le 15 novembre 2026, compte 107 députés : 96 élus, 2 députés hors circonscription et 9 députés nommés. Le PAP a remporté 87 des 97 sièges élus le 3 mai 2025 ; un siège du GRC de Marine Parade-Braddell Heights est vacant depuis le 20 juillet 2026, et les autres députés du GRC s’occupent du quartier (services du Premier ministre).","La página del Parlamento, consultada el 15 de noviembre de 2026, recoge 107 diputados: 96 electos, 2 diputados sin circunscripción y 9 diputados nombrados. El PAP ganó 87 de los 97 escaños electos el 3 de mayo de 2025; un escaño del GRC de Marine Parade-Braddell Heights está vacante desde el 20 de julio de 2026, y los demás diputados del GRC atienden el barrio (Oficina del Primer Ministro)."),
  L3("The majority line is drawn on all 108 seats for illustration. Nominated MPs are non-partisan, so their place in the middle of the chart is indicative. The Progress Singapore Party (4.88% in 2025), Red Dot United (3.96%) and the Singapore Democratic Party (3.72%) won no seat.","La barre de majorité est tracée sur les 108 sièges, à titre indicatif. Les députés nommés n’ont pas d’étiquette : leur place au centre du schéma est indicative. Le Progress Singapore Party (4,88 % en 2025), Red Dot United (3,96 %) et le Singapore Democratic Party (3,72 %) n’ont obtenu aucun siège.","La línea de mayoría se traza sobre los 108 escaños, a título indicativo. Los diputados nombrados no tienen partido: su lugar en el centro del gráfico es indicativo. El Progress Singapore Party (4,88 % en 2025), Red Dot United (3,96 %) y el Singapore Democratic Party (3,72 %) no obtuvieron ningún escaño.")
 ]
};
POWER.indonesia={asOf:"2026-11-15",presidential:1,
 chamber:{name:L3("House of Representatives (DPR)","Chambre des représentants (DPR)","Cámara de Representantes (DPR)"),total:580,majority:291,
  src:"https://infopublik.id/kategori/nasional-politik-hukum/864012/kpu-tetapkan-delapan-parpol-yang-peroleh-kursi-dpr-ri",
  groups:[[L3("PKS","PKS","PKS"),53,"pks","gov"],[L3("PKB","PKB","PKB"),68,"pkb","gov"],[L3("PAN","PAN","PAN"),48,"pan","gov"],[L3("PDI-P","PDI-P","PDI-P"),110,"pdip","out"],[L3("Gerindra","Gerindra","Gerindra"),86,"gerindra","gov"],[L3("Golkar","Golkar","Golkar"),102,"golkar","gov"],[L3("Demokrat","Demokrat","Demokrat"),44,"demokrat","gov"],[L3("NasDem","NasDem","NasDem"),69,"nasdem","out"]]},
 head:L3("President: Prabowo Subianto (Gerindra). Vice-President: Gibran Rakabuming Raka.","Président : Prabowo Subianto (Gerindra). Vice-président : Gibran Rakabuming Raka.","Presidente: Prabowo Subianto (Gerindra). Vicepresidente: Gibran Rakabuming Raka."),
 notes:[
  L3("Seats as set by the KPU on 25 August 2024 for 2024-2029 (official government portal Infopublik), consulted on 15 November 2026. Groups are ordered by the cards' left-right position (V-Party economic scale), which places most Indonesian parties close together.","Sièges fixés par la KPU le 25 août 2024 pour 2024-2029 (portail officiel Infopublik), consultés le 15 novembre 2026. Les groupes sont classés selon la position gauche-droite des fiches (échelle économique V-Party), qui place la plupart des partis indonésiens près les uns des autres.","Escaños fijados por la KPU el 25 de agosto de 2024 para 2024-2029 (portal oficial Infopublik), consultados el 15 de noviembre de 2026. Los grupos se ordenan según la posición izquierda-derecha de las fichas (escala económica V-Party), que sitúa a la mayoría de los partidos indonesios muy cerca unos de otros."),
  L3("NasDem has no ministers but declared its support for the government; PDI-P has no ministers and calls itself a balancing force. Both are shown as outside the government.","NasDem n'a pas de ministre mais a déclaré soutenir le gouvernement ; le PDI-P n'a pas de ministre et se dit force d'équilibre. Tous deux figurent hors du gouvernement.","NasDem no tiene ministros pero declaró su apoyo al gobierno; el PDI-P no tiene ministros y se define como fuerza de equilibrio. Ambos figuran fuera del gobierno."),
  L3("The cabinet started with 48 ministers and 56 deputy ministers (October 2024); no official breakdown by party was found, so the cabinet block is not shown.","Le gouvernement a démarré avec 48 ministres et 56 vice-ministres (octobre 2024) ; aucune répartition officielle par parti n'a été trouvée, le bloc gouvernement n'est donc pas affiché.","El gabinete empezó con 48 ministros y 56 viceministros (octubre de 2024); no se encontró un reparto oficial por partido, así que no se muestra el bloque del gabinete.")
 ]
};
POWER.vietnam={asOf:"2026-11-15",
 chamber:{name:L3("National Assembly (16th legislature, elected 15 March 2026)","Assemblée nationale (16e législature, élue le 15 mars 2026)","Asamblea Nacional (XVI legislatura, elegida el 15 de marzo de 2026)"),total:500,majority:251,
  src:"https://daibieunhandan.vn/infographic-286-500-dai-bieu-do-dia-phuong-gioi-thieu-trung-cu-quoc-hoi-khoa-xvi-10411107.html",
  // [label, seats, party card id or null, "gov"|"out"|"vac"]
  groups:[
   [L3("Communist Party members","Membres du Parti communiste","Militantes del Partido Comunista"),482,"cpv","gov"],
   [L3("Non-Party deputies","Députés non membres du Parti","Diputados no afiliados al Partido"),18,null,"out"]
  ]},
 cabinet:{
  name:L3("Lê Minh Hưng government (2026-2031 term, approved on 8 April 2026)","Gouvernement Lê Minh Hưng (mandat 2026-2031, approuvé le 8 avril 2026)","Gobierno de Lê Minh Hưng (mandato 2026-2031, aprobado el 8 de abril de 2026)"),total:23,
  src:"https://tapchitoaan.vn/infographics-danh-sach-thanh-vien-chinh-phu-nhiem-ky-2026-203115324.html",
  // [label, members, party card id or null, "gov"|"out"]
  parts:[
   [L3("Prime Minister","Premier ministre","Primer ministro"),1,null,"gov"],
   [L3("Deputy Prime Ministers (one is also Minister of Defence)","Vice-Premiers ministres (l'un est aussi ministre de la Défense)","Vice primeros ministros (uno es también ministro de Defensa)"),6,null,"gov"],
   [L3("Other ministers and heads of ministerial-level agencies","Autres ministres et chefs d'organismes de rang ministériel","Otros ministros y jefes de organismos de rango ministerial"),16,null,"gov"]
  ]
 },
 head:L3("General Secretary of the Communist Party and President of the State: Tô Lâm. Prime Minister: Lê Minh Hưng. Chair of the National Assembly: Trần Thanh Mẫn.","Secrétaire général du Parti communiste et président de l'État : Tô Lâm. Premier ministre : Lê Minh Hưng. Président de l'Assemblée nationale : Trần Thanh Mẫn.","Secretario general del Partido Comunista y presidente del Estado: Tô Lâm. Primer ministro: Lê Minh Hưng. Presidente de la Asamblea Nacional: Trần Thanh Mẫn."),
 notes:[
  L3("The National Election Council announced on 21 March 2026 that 18 of the 500 deputies elected (3.6%) are not Party members; the 482 Party members are derived from that figure. Deputies are not organised in party groups and the 18 non-Party deputies are not an opposition: all candidates went through Fatherland Front consultations.","Le Conseil électoral national a annoncé le 21 mars 2026 que 18 des 500 députés élus (3,6 %) ne sont pas membres du Parti ; les 482 membres du Parti en sont déduits. Les députés ne forment pas de groupes de partis et les 18 non-membres ne sont pas une opposition : tous les candidats sont passés par les consultations du Front de la patrie.","El Consejo Electoral Nacional anunció el 21 de marzo de 2026 que 18 de los 500 diputados elegidos (3,6 %) no son militantes del Partido; los 482 militantes se deducen de esa cifra. Los diputados no se organizan en grupos de partido y los 18 no afiliados no son una oposición: todos los candidatos pasaron por las consultas del Frente de la Patria."),
  L3("The official list of the Government (14 ministers and 3 heads of ministerial-level agencies, plus the Prime Minister and 6 Deputy Prime Ministers) does not give party membership, so no member is linked to a party card; 23 people hold the 24 posts.","La liste officielle du gouvernement (14 ministres et 3 chefs d'organismes de rang ministériel, plus le Premier ministre et 6 vice-Premiers ministres) n'indique pas l'appartenance au Parti : aucun membre n'est donc relié à une fiche de parti ; 23 personnes occupent les 24 postes.","La lista oficial del gobierno (14 ministros y 3 jefes de organismos de rango ministerial, más el primer ministro y 6 vice primeros ministros) no indica la afiliación al Partido, por lo que ningún miembro se vincula a una ficha de partido; 23 personas ocupan los 24 puestos."),
  L3("The source pages were consulted on 15 November 2026.","Les pages sources ont été consultées le 15 novembre 2026.","Las páginas de origen se consultaron el 15 de noviembre de 2026.")
 ]
};
// South Korea (15 Nov 2026). Seats: SBS after the 3 June 2026 by-elections, adjusted for Kweon Seong-dong's loss of seat (YTN, 16 July 2026). Presidential system.
POWER.southkorea={asOf:"2026-11-15",presidential:1,
 chamber:{
  name:L3("National Assembly","Assemblée nationale","Asamblea Nacional"),total:300,majority:151,
  src:"https://news.sbs.co.kr/news/endPage.do?news_id=N1008593957",
  groups:[
   [L3("Progressive Party","Parti progressiste","Partido Progresista"),4,null,"out"],
   [L3("Basic Income Party","Parti du revenu de base","Partido de la Renta Básica"),1,null,"out"],
   [L3("Social Democratic Party","Parti social-démocrate","Partido Socialdemócrata"),1,null,"out"],
   [L3("Rebuilding Korea Party","Parti de la reconstruction de la Corée","Partido de la Reconstrucción de Corea"),12,"rkp","out"],
   [L3("Democratic Party","Parti démocrate","Partido Democrático"),161,"dp","gov"],
   [L3("Independents (incl. the Speaker)","Indépendants (dont le président de l'Assemblée)","Independientes (incl. el presidente de la Asamblea)"),8,null,"out"],
   [L3("Reform Party","Parti de la réforme","Partido Reformista"),3,"reform","out"],
   [L3("People Power Party","Parti du pouvoir du peuple","Partido del Poder Popular"),109,"ppp","out"],
   [L3("Vacant","Vacant","Vacante"),1,null,"vac"]
  ]
 },
 head:L3("President: Lee Jae-myung (Democratic Party). Prime Minister: Han Seong-sook, confirmed by the National Assembly on 30 June 2026.","Président : Lee Jae-myung (Parti démocrate). Première ministre : Han Seong-sook, confirmée par l'Assemblée nationale le 30 juin 2026.","Presidente: Lee Jae-myung (Partido Democrático). Primera ministra: Han Seong-sook, confirmada por la Asamblea Nacional el 30 de junio de 2026."),
 notes:[
  L3("SBS gives the seats after the 3 June 2026 by-elections: Democratic Party 161, People Power Party 110, Rebuilding Korea Party 12, Progressive Party 4, Basic Income Party 1, Social Democratic Party 1. People Power Party MP Kweon Seong-dong lost his seat on 16 July 2026 (final conviction); it stays vacant until a by-election.","SBS donne les sièges après les partielles du 3 juin 2026 : Parti démocrate 161, Parti du pouvoir du peuple 110, Parti de la reconstruction de la Corée 12, Parti progressiste 4, Parti du revenu de base 1, Parti social-démocrate 1. Le député du Parti du pouvoir du peuple Kweon Seong-dong a perdu son siège le 16 juillet 2026 (condamnation définitive) ; il reste vacant jusqu'à une élection partielle.","SBS da los escaños tras las parciales del 3 de junio de 2026: Partido Democrático 161, Partido del Poder Popular 110, Partido de la Reconstrucción de Corea 12, Partido Progresista 4, Partido de la Renta Básica 1, Partido Socialdemócrata 1. El diputado del Partido del Poder Popular Kweon Seong-dong perdió su escaño el 16 de julio de 2026 (condena firme); sigue vacante hasta una elección parcial."),
  L3("The Reform Party's 3 seats come from the April 2024 result (1 constituency, 2 list seats, YTN); the 8 independents, including Speaker Cho Jeong-sik, are worked out from the 300 total: the National Assembly site could not be opened on 15 November 2026. Small parties without a card are placed by their usual position; their place in the chart is indicative.","Les 3 sièges du Parti de la réforme viennent du résultat d'avril 2024 (1 circonscription, 2 sièges de liste, YTN) ; les 8 indépendants, dont le président de l'Assemblée Cho Jeong-sik, sont déduits du total de 300 : le site de l'Assemblée nationale était inaccessible le 15 novembre 2026. Les petits partis sans fiche sont placés selon leur position habituelle ; leur place dans le schéma est indicative.","Los 3 escaños del Partido Reformista proceden del resultado de abril de 2024 (1 distrito, 2 escaños de lista, YTN); los 8 independientes, incluido el presidente de la Asamblea Cho Jeong-sik, se deducen del total de 300: el sitio de la Asamblea Nacional no pudo abrirse el 15 de noviembre de 2026. Los partidos pequeños sin ficha se sitúan según su posición habitual; su lugar en el gráfico es indicativo.")
 ]
};
POWER.thailand={asOf:"2026-11-15",
 chamber:{name:L3("House of Representatives","Chambre des représentants","Cámara de Representantes"),total:500,majority:251,
  src:"https://www.thaipbs.or.th/election69",
  groups:[
   [L3("People's Party","Parti du peuple","Partido del Pueblo"),120,"pp","out"],
   [L3("Pheu Thai","Pheu Thai","Pheu Thai"),74,"pt","gov"],
   [L3("Democrat Party","Parti démocrate","Partido Demócrata"),21,"dem","out"],
   [L3("Bhumjaithai","Bhumjaithai","Bhumjaithai"),191,"bjt","gov"],
   [L3("Kla Tham","Kla Tham","Kla Tham"),58,"klatham","out"],
   [L3("Setthakij","Setthakij","Setthakij"),3,"setthakij","gov"],
   [L3("Other coalition parties (incl. Palang Pracharath, Prachachat, United Thai Nation)","Autres partis de la coalition (dont Palang Pracharath, Prachachat, Ruam Thai Sang Chart)","Otros partidos de la coalición (incl. Palang Pracharath, Prachachat, Ruam Thai Sang Chart)"),24,null,"gov"],
   [L3("Other parties outside the coalition (incl. Thai Ruam Phalang)","Autres partis hors coalition (dont Thai Ruam Phalang)","Otros partidos fuera de la coalición (incl. Thai Ruam Phalang)"),8,null,"out"],
   [L3("Not certified (March 2026)","Non certifié (mars 2026)","No certificado (marzo de 2026)"),1,null,"vac"]
  ]},
 head:L3("Head of state: the King. Prime Minister: Anutin Charnvirakul (Bhumjaithai), also Minister of the Interior.","Chef de l'État : le roi. Premier ministre : Anutin Charnvirakul (Bhumjaithai), également ministre de l'Intérieur.","Jefe del Estado: el rey. Primer ministro: Anutin Charnvirakul (Bhumjaithai), también ministro del Interior."),
 notes:[
  L3("Seats from the 8 February 2026 election as published by Thai PBS after the Election Commission's certification (499 seats; one Suphan Buri seat was still under investigation in March 2026). Changes since then (by-elections, disqualifications) were not checked.","Sièges issus de l'élection du 8 février 2026 tels que publiés par Thai PBS après la certification de la Commission électorale (499 sièges ; un siège de Suphan Buri faisait encore l'objet d'une enquête en mars 2026). Les changements intervenus depuis (élections partielles, invalidations) n'ont pas été vérifiés.","Escaños de las elecciones del 8 de febrero de 2026 publicados por Thai PBS tras la certificación de la Comisión Electoral (499 escaños; un escaño de Suphan Buri seguía investigado en marzo de 2026). No se han comprobado los cambios posteriores (elecciones parciales, inhabilitaciones)."),
  L3("The coalition line-up was put at 292 votes in March 2026 (PPTV); the House elected Anutin by 293 votes on 19 March (Thairath). The 24 seats of the smaller coalition parties are an estimate from that total (Thairath lists 15 partner parties), and the cabinet of 35 named on 23 March 2026 (Thai PBS) was not broken down by party in the sources consulted.","La coalition était évaluée à 292 voix en mars 2026 (PPTV) ; la Chambre a élu Anutin par 293 voix le 19 mars (Thairath). Les 24 sièges des petits partis de la coalition sont une estimation tirée de ce total (Thairath cite 15 partis partenaires), et le gouvernement de 35 membres publié le 23 mars 2026 (Thai PBS) n'était pas ventilé par parti dans les sources consultées.","La coalición se cifraba en 292 votos en marzo de 2026 (PPTV); la Cámara eligió a Anutin por 293 votos el 19 de marzo (Thairath). Los 24 escaños de los partidos pequeños de la coalición son una estimación a partir de ese total (Thairath cita 15 partidos socios), y el gabinete de 35 miembros publicado el 23 de marzo de 2026 (Thai PBS) no aparecía desglosado por partido en las fuentes consultadas."),
  L3("Page consulted on 15 November 2026.","Page consultée le 15 novembre 2026.","Página consultada el 15 de noviembre de 2026.")
 ]
};
POWER.northkorea={asOf:"2026-11-15",
 chamber:{name:L3("Supreme People's Assembly (15th, elected 15 March 2026)","Assemblée populaire suprême (15e, élue le 15 mars 2026)","Asamblea Popular Suprema (XV, elegida el 15 de marzo de 2026)"),total:687,majority:344,
  src:"https://data.ipu.org/parliament/KP",
  groups:[[L3("All 687 deputies: Workers' Party and the two satellite parties (no breakdown by party published)","Les 687 députés : Parti du travail et les deux partis satellites (aucune répartition par parti publiée)","Los 687 diputados: Partido del Trabajo y los dos partidos satélite (no se publicó el reparto por partido)"),687,null,"gov"]]},
 govNote:L3("No count by party is published: each of the 687 deputies was elected as the single pre-approved candidate of a constituency (International IDEA), so the chart shows one block. Workers' Party General Secretary Kim Jong Un is President of State Affairs; Pak Thae Song is Premier.","Aucun décompte par parti n'est publié : chacun des 687 députés a été élu comme candidat unique préapprouvé d'une circonscription (International IDEA), d'où un seul bloc dans le schéma. Le secrétaire général du Parti du travail, Kim Jong-un, est président des Affaires d'État ; Pak Thae-song est Premier ministre.","No se publica ningún recuento por partido: cada uno de los 687 diputados fue elegido como candidato único preaprobado de una circunscripción (International IDEA), por eso el gráfico muestra un solo bloque. El secretario general del Partido del Trabajo, Kim Jong-un, es presidente de Asuntos de Estado; Pak Thae-song es primer ministro."),
 notes:[
  L3("Seat total from the Inter-Parliamentary Union (consulted 15 November 2026); 108 of the 687 deputies are women (International IDEA, March 2026). The Korean Social Democratic Party and the Chondoist Chongu Party both elect deputies (38 North), but their seat numbers are not published.","Nombre de sièges selon l'Union interparlementaire (consultée le 15 novembre 2026) ; 108 des 687 députés sont des femmes (International IDEA, mars 2026). Le Parti social-démocrate de Corée et le parti Chongu chondoïste élisent tous deux des députés (38 North), mais leur nombre de sièges n'est pas publié.","Total de escaños según la Unión Interparlamentaria (consultada el 15 de noviembre de 2026); 108 de los 687 diputados son mujeres (International IDEA, marzo de 2026). El Partido Socialdemócrata de Corea y el Partido Chongu Chondoísta eligen diputados (38 North), pero no se publica su número de escaños."),
  L3("No cabinet breakdown by party is published, so no government block is shown.","Aucune répartition du gouvernement par parti n'est publiée : aucun bloc gouvernement n'est affiché.","No se publica el reparto del gobierno por partido, así que no se muestra ningún bloque de gobierno.")
 ]
};
