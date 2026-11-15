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
// Ireland (15 Nov 2026). Seats: official 2024 results (Oireachtas results volume) adjusted for the 22 May 2026 bye-elections. Parliamentary system.
POWER.ireland={asOf:"2026-11-15",
 chamber:{
  name:L3("Dáil Éireann (34th Dáil)","Dáil Éireann (34e Dáil)","Dáil Éireann (34.º Dáil)"),total:174,majority:88,
  src:"https://www.oireachtas.ie/en/members",
  // [label, seats, party card id or null, "gov"|"out"|"vac"|"sup"]
  groups:[
   [L3("People Before Profit–Solidarity","People Before Profit–Solidarity","People Before Profit–Solidarity"),3,null,"out"],
   [L3("Sinn Féin","Sinn Féin","Sinn Féin"),39,"sf","out"],
   [L3("Social Democrats","Social Democrats","Social Democrats"),12,"sd","out"],
   [L3("Green Party","Green Party","Green Party"),1,"greens","out"],
   [L3("Labour","Labour","Labour"),11,"lab","out"],
   [L3("Other independents (incl. Ceann Comhairle Verona Murphy and the two Healy-Raes)","Autres indépendants (dont la présidente du Dáil Verona Murphy et les deux Healy-Rae)","Otros independientes (incl. la presidenta del Dáil Verona Murphy y los dos Healy-Rae)"),8,null,"out"],
   [L3("100% Redress","100% Redress","100% Redress"),1,null,"out"],
   [L3("Fianna Fáil","Fianna Fáil","Fianna Fáil"),48,"ff","gov"],
   [L3("Fine Gael","Fine Gael","Fine Gael"),38,"fg","gov"],
   [L3("Independents backing the Government (Regional Independent Group)","Indépendants soutenant le gouvernement (Regional Independent Group)","Independientes que apoyan al Gobierno (Regional Independent Group)"),7,null,"sup"],
   [L3("Aontú","Aontú","Aontú"),2,"aontu","out"],
   [L3("Independent Ireland","Independent Ireland","Independent Ireland"),4,"ii","out"]
  ]
 },
 head:L3("President: Catherine Connolly (elected as an independent). Taoiseach: Micheál Martin (Fianna Fáil). Tánaiste and Minister for Finance: Simon Harris (Fine Gael), due to become Taoiseach in November 2027 under the coalition deal.","Présidente : Catherine Connolly (élue comme indépendante). Taoiseach : Micheál Martin (Fianna Fáil). Tánaiste et ministre des Finances : Simon Harris (Fine Gael), qui doit devenir Taoiseach en novembre 2027 selon l'accord de coalition.","Presidenta: Catherine Connolly (elegida como independiente). Taoiseach: Micheál Martin (Fianna Fáil). Tánaiste y ministro de Finanzas: Simon Harris (Fine Gael), que debe convertirse en Taoiseach en noviembre de 2027 según el pacto de coalición."),
 govNote:L3("The cabinet is made up of Fianna Fáil and Fine Gael ministers. Nine independent TDs backed the coalition in January 2025 and five of them became ministers of state, a junior rank outside the cabinet; Michael Healy-Rae resigned that post in April 2026, and he and Danny Healy-Rae voted against the Government in the confidence vote it won 92–78.","Le gouvernement est composé de ministres du Fianna Fáil et du Fine Gael. Neuf TD indépendants ont soutenu la coalition en janvier 2025 et cinq d'entre eux sont devenus ministres d'État, un rang subalterne hors du conseil des ministres ; Michael Healy-Rae a quitté ce poste en avril 2026, et lui et Danny Healy-Rae ont voté contre le gouvernement lors du vote de confiance que celui-ci a gagné par 92 voix contre 78.","El gabinete está formado por ministros de Fianna Fáil y Fine Gael. Nueve TD independientes apoyaron la coalición en enero de 2025 y cinco de ellos pasaron a ser ministros de Estado, un rango subalterno fuera del gabinete; Michael Healy-Rae dejó ese cargo en abril de 2026, y él y Danny Healy-Rae votaron contra el Gobierno en la votación de confianza que este ganó por 92 a 78."),
 notes:[
  L3("The Oireachtas members page (consulted on 15 November 2026) gives 174 TDs in 43 constituencies but no count by party. Party seats are the official November 2024 results (Oireachtas results volume: Sinn Féin 39, Labour 11, Social Democrats 11, Independent Ireland 4, People Before Profit–Solidarity 3, Aontú 2, Greens 1, 100% Redress 1, 16 non-party; Fianna Fáil and Fine Gael 86 between them, 48 and 38), adjusted for the 22 May 2026 bye-elections: Fine Gael's Seán Kyne took the Galway West seat left by independent Catherine Connolly on becoming President, and the Social Democrats' Daniel Ennis the Dublin Central seat left by Fine Gael's Paschal Donohoe (Electoral Commission, RTÉ). Changes of party whip since then were not checked one by one.","La page des membres de l'Oireachtas (consultée le 15 novembre 2026) indique 174 TD dans 43 circonscriptions, sans décompte par parti. Les sièges sont les résultats officiels de novembre 2024 (volume des résultats de l'Oireachtas : Sinn Féin 39, Labour 11, Social Democrats 11, Independent Ireland 4, People Before Profit–Solidarity 3, Aontú 2, Verts 1, 100% Redress 1, 16 sans parti ; Fianna Fáil et Fine Gael 86 à eux deux, 48 et 38), corrigés des partielles du 22 mai 2026 : Seán Kyne (Fine Gael) a pris le siège de Galway West laissé par l'indépendante Catherine Connolly devenue présidente, et Daniel Ennis (Social Democrats) celui de Dublin Central laissé par Paschal Donohoe (Fine Gael) (Commission électorale, RTÉ). Les changements d'affiliation depuis n'ont pas été vérifiés un par un.","La página de miembros del Oireachtas (consultada el 15 de noviembre de 2026) da 174 TD en 43 circunscripciones, sin recuento por partido. Los escaños son los resultados oficiales de noviembre de 2024 (volumen de resultados del Oireachtas: Sinn Féin 39, Labour 11, Social Democrats 11, Independent Ireland 4, People Before Profit–Solidarity 3, Aontú 2, Verdes 1, 100% Redress 1, 16 sin partido; Fianna Fáil y Fine Gael 86 entre ambos, 48 y 38), ajustados por las parciales del 22 de mayo de 2026: Seán Kyne (Fine Gael) ganó el escaño de Galway West que dejó la independiente Catherine Connolly al ser elegida presidenta, y Daniel Ennis (Social Democrats) el de Dublin Central que dejó Paschal Donohoe (Fine Gael) (Comisión Electoral, RTÉ). No se comprobaron uno a uno los cambios de afiliación posteriores."),
  L3("The split of the 15 independents is derived: the 7 backing the Government are the nine who backed it in January 2025 (The Irish Times) minus the two Healy-Raes (April 2026). The Ceann Comhairle chairs the Dáil and votes only to break a tie. Groups without a card are placed by our judgement; independents sit in the middle of the chart for display only.","La répartition des 15 indépendants est déduite : les 7 qui soutiennent le gouvernement sont les neuf soutiens de janvier 2025 (The Irish Times) moins les deux Healy-Rae (avril 2026). La présidente du Dáil (Ceann Comhairle) dirige les débats et ne vote qu'en cas d'égalité. Les groupes sans fiche sont placés selon notre jugement ; les indépendants figurent au centre du schéma pour l'affichage seulement.","El reparto de los 15 independientes es deducido: los 7 que apoyan al Gobierno son los nueve apoyos de enero de 2025 (The Irish Times) menos los dos Healy-Rae (abril de 2026). La presidenta del Dáil (Ceann Comhairle) dirige los debates y solo vota para deshacer un empate. Los grupos sin ficha se sitúan según nuestro criterio; los independientes figuran en el centro del gráfico solo a efectos de presentación.")
 ]
};
// Greece (15 Nov 2026). Seats: Parliament figures reported by ERT on 3 Nov 2026, updated for the 9 Nov resignation (ERT) and the 13 Nov swearing-in (thebest.gr). Parliamentary system.
POWER.greece={asOf:"2026-11-15",
 chamber:{
  name:L3("Hellenic Parliament","Parlement hellénique","Parlamento helénico"),total:300,majority:151,
  src:"https://www.hellenicparliament.gr/Vouleftes/Ana-Koinovouleftiki-Omada/",
  // [label, seats, party card id or null, "gov"|"out"|"vac"], ordered left to right by the cards' pos
  groups:[
   [L3("KKE","KKE","KKE"),21,"kke","out"],
   [L3("SYRIZA","SYRIZA","SYRIZA"),13,"syriza","out"],
   [L3("Plefsi Eleftherias","Plefsi Eleftherias","Plefsi Eleftherias"),5,"plefsi","out"],
   [L3("PASOK","PASOK","PASOK"),36,"pasok","out"],
   [L3("Independents","Indépendants","Independientes"),47,null,"out"],
   [L3("New Democracy","Nouvelle Démocratie","Nueva Democracia"),156,"nd","gov"],
   [L3("Niki","Niki","Niki"),8,"niki","out"],
   [L3("Elliniki Lysi","Elliniki Lysi","Elliniki Lysi"),11,"el","out"],
   [L3("Vacant (seats annulled in June 2025)","Vacants (sièges annulés en juin 2025)","Vacantes (escaños anulados en junio de 2025)"),3,null,"vac"]
  ]
 },
 head:L3("President of the Republic: Konstantinos Tasoulas, sworn in on 13 March 2025. Prime Minister: Kyriakos Mitsotakis (New Democracy), since July 2019, re-elected in June 2023.","Président de la République : Konstantinos Tasoulas, investi le 13 mars 2025. Premier ministre : Kyriakos Mitsotakis (Nouvelle Démocratie), depuis juillet 2019, réélu en juin 2023.","Presidente de la República: Konstantinos Tasoulas, investido el 13 de marzo de 2025. Primer ministro: Kyriakos Mitsotakis (Nueva Democracia), desde julio de 2019, reelegido en junio de 2023."),
 govNote:L3("Single-party government: New Democracy holds 156 seats, above the 151 needed for a majority of the 300-seat chamber.","Gouvernement d'un seul parti : Nouvelle Démocratie détient 156 sièges, au-dessus des 151 nécessaires pour la majorité d'une chambre de 300 sièges.","Gobierno de un solo partido: Nueva Democracia tiene 156 escaños, por encima de los 151 necesarios para la mayoría de una cámara de 300."),
 notes:[
  L3("The Parliament's list by group could not be opened on 15 November 2026. ERT reported on 3 November 2026: New Democracy 156, PASOK 36, KKE 21, SYRIZA 12, Elliniki Lysi 11, Niki 8, Plefsi Eleftherias 5, independents 48. On 9 November independent MP Andreas Panagiotopoulos (elected for SYRIZA) resigned his seat; on 13 November his successor was sworn in as a SYRIZA MP, bringing SYRIZA to 13 and the independents to 47.","La liste du Parlement par groupe n'a pas pu être ouverte le 15 novembre 2026. ERT donnait le 3 novembre 2026 : Nouvelle Démocratie 156, PASOK 36, KKE 21, SYRIZA 12, Elliniki Lysi 11, Niki 8, Plefsi Eleftherias 5, indépendants 48. Le 9 novembre, le député indépendant Andreas Panagiotopoulos (élu sous l'étiquette SYRIZA) a démissionné ; le 13 novembre, son successeur a prêté serment comme député SYRIZA, ce qui porte SYRIZA à 13 et les indépendants à 47.","La lista del Parlamento por grupos no pudo abrirse el 15 de noviembre de 2026. ERT daba el 3 de noviembre de 2026: Nueva Democracia 156, PASOK 36, KKE 21, SYRIZA 12, Elliniki Lysi 11, Niki 8, Plefsi Eleftherias 5, independientes 48. El 9 de noviembre el diputado independiente Andreas Panagiotopoulos (elegido por SYRIZA) renunció a su escaño; el 13 de noviembre su sucesor juró como diputado de SYRIZA, con lo que SYRIZA pasa a 13 y los independientes a 47."),
  L3("Three Spartiates seats annulled by the Supreme Special Court in June 2025 have not been refilled, so 297 MPs sit. Independents are placed in the middle of the chart for display only; they have no common position.","Trois sièges des Spartiates annulés par la Cour suprême spéciale en juin 2025 n'ont pas été repourvus : 297 députés siègent. Les indépendants sont placés au centre du graphique pour l'affichage seulement ; ils n'ont pas de position commune.","Tres escaños de Espartanos anulados por el Tribunal Especial Supremo en junio de 2025 no se han cubierto: se sientan 297 diputados. Los independientes se sitúan en el centro del gráfico solo a efectos de presentación; no tienen una posición común.")
 ]
};
POWER.sweden={asOf:"2026-11-15",
 chamber:{name:L3("Riksdag","Riksdag","Riksdag"),total:349,majority:175,
  src:"https://www.riksdagen.se/sv/aktuellt/valet-2026/",
  groups:[
   [L3("Left Party (V)","Parti de gauche (V)","Partido de la Izquierda (V)"),30,"v","out"],
   [L3("Green Party (MP)","Parti de l'environnement - Les Verts (MP)","Partido Verde (MP)"),22,"mp","out"],
   [L3("Social Democrats (S)","Sociaux-démocrates (S)","Socialdemócratas (S)"),99,"s","out"],
   [L3("Centre Party (C)","Parti du centre (C)","Partido del Centro (C)"),25,"c","out"],
   [L3("Liberals (L)","Libéraux (L)","Liberales (L)"),19,"l","gov"],
   [L3("Moderates (M)","Modérés (M)","Moderados (M)"),70,"m","gov"],
   [L3("Christian Democrats (KD)","Chrétiens-démocrates (KD)","Cristianodemócratas (KD)"),22,"kd","gov"],
   [L3("Sweden Democrats (SD)","Démocrates de Suède (SD)","Demócratas de Suecia (SD)"),62,"sd","sup"]
  ]},
 head:L3("Head of state: the King, with no political power. Prime Minister: Ulf Kristersson (M), at the head of a caretaker government since 17 September 2026.","Chef de l'État : le roi, sans pouvoir politique. Premier ministre : Ulf Kristersson (M), à la tête d'un gouvernement intérimaire depuis le 17 septembre 2026.","Jefe del Estado: el rey, sin poder político. Primer ministro: Ulf Kristersson (M), al frente de un gobierno en funciones desde el 17 de septiembre de 2026."),
 govNote:L3("Caretaker government of M, KD and L: Ulf Kristersson resigned after the 13 September 2026 election and stays on for current business until the Riksdag approves a new prime minister. Two proposals have been rejected (15 October and 3 November 2026); after four rejections an extra election must be held within three months. SD is shown as support because it backed the same three parties under the Tidö agreement from October 2022 until the election; no new agreement had been announced by 15 November 2026.","Gouvernement intérimaire de M, KD et L : Ulf Kristersson a démissionné après les élections du 13 septembre 2026 et expédie les affaires courantes jusqu'à ce que le Riksdag approuve un nouveau Premier ministre. Deux propositions ont été rejetées (15 octobre et 3 novembre 2026) ; après quatre rejets, des élections extraordinaires doivent avoir lieu dans les trois mois. Le SD figure comme soutien parce qu'il a soutenu ces trois partis dans le cadre de l'accord de Tidö d'octobre 2022 jusqu'aux élections ; aucun nouvel accord n'avait été annoncé au 15 novembre 2026.","Gobierno en funciones de M, KD y L: Ulf Kristersson dimitió tras las elecciones del 13 de septiembre de 2026 y sigue con los asuntos corrientes hasta que el Riksdag apruebe un nuevo primer ministro. Se han rechazado dos propuestas (15 de octubre y 3 de noviembre de 2026); tras cuatro rechazos deben celebrarse elecciones extraordinarias en un plazo de tres meses. SD figura como apoyo porque respaldó a esos tres partidos con el acuerdo de Tidö desde octubre de 2022 hasta las elecciones; a 15 de noviembre de 2026 no se había anunciado un nuevo acuerdo."),
 notes:[
  L3("Seats from the Riksdag's page on the 2026 election (final result confirmed on 19 September 2026), consulted on 15 November 2026. Groups are ordered by the left-right positions used on the party cards.","Sièges tirés de la page du Riksdag sur les élections de 2026 (résultat définitif confirmé le 19 septembre 2026), consultée le 15 novembre 2026. Les groupes sont classés selon les positions gauche-droite des fiches partis.","Escaños tomados de la página del Riksdag sobre las elecciones de 2026 (resultado definitivo confirmado el 19 de septiembre de 2026), consultada el 15 de noviembre de 2026. Los grupos se ordenan según las posiciones izquierda-derecha de las fichas de partidos."),
  L3("No breakdown of the caretaker ministers by party was checked, so no cabinet chart is shown. Ulf Kristersson was due to report to the Speaker on 17 November 2026.","La répartition des ministres intérimaires par parti n'a pas été vérifiée : aucun schéma du gouvernement n'est donc affiché. Ulf Kristersson devait rendre compte au président du Riksdag le 17 novembre 2026.","No se comprobó el reparto de los ministros en funciones por partido, por lo que no se muestra el gráfico del gabinete. Ulf Kristersson debía informar al presidente del Riksdag el 17 de noviembre de 2026.")
 ]
};
POWER.switzerland={asOf:"2026-11-15",
 chamber:{name:L3("National Council (52nd legislature)","Conseil national (52e législature)","Consejo Nacional (52.ª legislatura)"),total:200,majority:101,
  src:"https://www.parlament.ch/de/organe/fraktionen",
  groups:[
   [L3("Green group","Groupe des Verts","Grupo de los Verdes"),23,"gruene","out"],
   [L3("SP group","Groupe socialiste","Grupo socialista"),41,"sp","gov"],
   [L3("Green Liberal group","Groupe vert'libéral","Grupo verde liberal"),11,"glp","out"],
   [L3("Die Mitte group (Mitte and EVP)","Groupe du Centre (Centre et PEV)","Grupo de Die Mitte (Mitte y EVP)"),31,"mitte","gov"],
   [L3("FDP-Liberal group","Groupe libéral-radical","Grupo liberal-radical"),27,"fdp","gov"],
   [L3("SVP group (incl. MCG, EDU and Lega)","Groupe UDC (dont MCG, UDF et Lega)","Grupo de la SVP (incl. MCG, EDU y Lega)"),67,"svp","gov"]
  ]},
 cabinet:{name:L3("Federal Council (seven members, elected by parliament)","Conseil fédéral (sept membres élus par le Parlement)","Consejo Federal (siete miembros elegidos por el Parlamento)"),total:7,
  src:"https://www.admin.ch/de/bundesrat-mitglieder",
  parts:[
   [L3("SP: Elisabeth Baume-Schneider, Beat Jans","PS : Elisabeth Baume-Schneider, Beat Jans","SP: Elisabeth Baume-Schneider, Beat Jans"),2,"sp","gov"],
   [L3("Die Mitte: Martin Pfister","Le Centre : Martin Pfister","Die Mitte: Martin Pfister"),1,"mitte","gov"],
   [L3("FDP: Karin Keller-Sutter, Ignazio Cassis","PLR : Karin Keller-Sutter, Ignazio Cassis","FDP: Karin Keller-Sutter, Ignazio Cassis"),2,"fdp","gov"],
   [L3("SVP: Guy Parmelin (leaves at the end of 2026), Albert Rösti","UDC : Guy Parmelin (part fin 2026), Albert Rösti","SVP: Guy Parmelin (se va a finales de 2026), Albert Rösti"),2,"svp","gov"]
  ]},
 head:L3("No head of government: the seven Federal Councillors decide together as equals. Guy Parmelin (SVP) is President of the Confederation for 2026, a one-year role elected by parliament.","Pas de chef de gouvernement : les sept conseillers fédéraux décident ensemble, à égalité. Guy Parmelin (UDC) est président de la Confédération pour 2026, une fonction d'un an attribuée par le Parlement.","Sin jefe de Gobierno: los siete consejeros federales deciden juntos, en pie de igualdad. Guy Parmelin (SVP) es presidente de la Confederación en 2026, un cargo de un año que otorga el Parlamento."),
 govNote:L3("Concordance: since 1959 the largest parties have shared the seven seats in line with their electoral strength (the 'magic formula', 2 SVP, 2 SP, 2 FDP and 1 Mitte since 2003). There is no coalition agreement and no vote of no confidence, and parties in the Federal Council can campaign against its proposals, as the FDP and SVP do against the VAT rise for the 13th pension voted on 29 November 2026. 'In government' here means only that a party holds a Federal Council seat; the Greens and Green Liberals hold none, and no party is officially designated as the opposition.","Concordance : depuis 1959, les plus grands partis se partagent les sept sièges selon leur force électorale (la « formule magique », 2 UDC, 2 PS, 2 PLR et 1 Centre depuis 2003). Il n'y a ni accord de coalition ni motion de censure, et les partis représentés au Conseil fédéral peuvent faire campagne contre ses projets, comme le PLR et l'UDC contre la hausse de la TVA pour la 13e rente soumise au vote le 29 novembre 2026. « Au gouvernement » signifie ici seulement qu'un parti occupe un siège au Conseil fédéral ; les Verts et les Vert'libéraux n'en ont aucun, et aucun parti n'est officiellement désigné comme opposition.","Concordancia: desde 1959 los mayores partidos se reparten los siete puestos según su fuerza electoral (la «fórmula mágica», 2 SVP, 2 SP, 2 FDP y 1 Mitte desde 2003). No hay pacto de coalición ni moción de censura, y los partidos del Consejo Federal pueden hacer campaña contra sus propuestas, como el FDP y la SVP contra la subida del IVA para la 13.ª pensión que se vota el 29 de noviembre de 2026. «En el Gobierno» significa aquí solo que un partido tiene un puesto en el Consejo Federal; los Verdes y los Verdes Liberales no tienen ninguno, y ningún partido está designado oficialmente como oposición."),
 notes:[
  L3("Group sizes are derived, not read from one table: parliament's group pages give no current count. They combine the official 2023 seats (Federal Statistical Office: SVP 62, SP 41, Mitte 29, FDP 28, Greens 23, GLP 10, EVP 2, EDU 2, MCG 2, Lega 1) with the group changes parliament lists: the SVP group includes the MCG, EDU and Lega members, the Mitte group includes the EVP, and National Councillor Matthias Samuel Jauslin moved from the FDP to the Green Liberals in January 2025. Parliament's page was consulted on 15 November 2026.","Les effectifs des groupes sont déduits, pas lus dans un tableau : les pages des groupes du Parlement ne donnent pas d'effectif actuel. Ils combinent les sièges officiels de 2023 (Office fédéral de la statistique : UDC 62, PS 41, Centre 29, PLR 28, Verts 23, PVL 10, PEV 2, UDF 2, MCG 2, Lega 1) et les changements de groupe recensés par le Parlement : le groupe UDC comprend les élus MCG, UDF et Lega, le groupe du Centre comprend le PEV, et le conseiller national Matthias Samuel Jauslin est passé du PLR aux Vert'libéraux en janvier 2025. Page du Parlement consultée le 15 novembre 2026.","Los tamaños de los grupos se deducen, no se leen en una tabla: las páginas de los grupos del Parlamento no dan el número actual. Combinan los escaños oficiales de 2023 (Oficina Federal de Estadística: SVP 62, SP 41, Mitte 29, FDP 28, Verdes 23, GLP 10, EVP 2, EDU 2, MCG 2, Lega 1) con los cambios de grupo que registra el Parlamento: el grupo de la SVP incluye a los diputados del MCG, la EDU y la Lega, el grupo del Mitte incluye a la EVP, y el consejero nacional Matthias Samuel Jauslin pasó del FDP a los Verdes Liberales en enero de 2025. Página del Parlamento consultada el 15 de noviembre de 2026."),
  L3("Only the National Council is shown. The Council of States (46 seats) has only informal groups; there, Daniel Jositsch left the SP and its group in June 2026. Guy Parmelin's successor is due to be elected on 9 December 2026.","Seul le Conseil national est représenté. Le Conseil des États (46 sièges) ne connaît que des groupes informels ; Daniel Jositsch y a quitté le PS et son groupe en juin 2026. Le successeur de Guy Parmelin doit être élu le 9 décembre 2026.","Solo se muestra el Consejo Nacional. El Consejo de los Estados (46 escaños) solo tiene grupos informales; allí Daniel Jositsch dejó el SP y su grupo en junio de 2026. El sucesor de Guy Parmelin debe elegirse el 9 de diciembre de 2026.")
 ]
};
// Poland: who holds power (15 Nov 2026). Parliamentary system: no presidential flag.
POWER.poland={asOf:"2026-11-15",
 chamber:{name:L3("Sejm","Diète (Sejm)","Sejm"),total:460,majority:231,
  src:"https://www.polsatnews.pl/wiadomosc/2026-07-29/nowy-uklad-sil-w-sejmie-znaczne-przetasowania-po-decyzji-morawieckiego/",
  groups:[
   [L3("Razem (circle)","Razem (cercle)","Razem (círculo)"),4,"razem","out"],
   [L3("Lewica","Lewica","Lewica"),21,"lewica","gov"],
   [L3("KO","KO","KO"),156,"ko","gov"],
   [L3("Centrum","Centrum","Centrum"),15,"centrum","gov"],
   [L3("Polska 2050","Polska 2050","Polska 2050"),15,"pl2050","gov"],
   [L3("PSL","PSL","PSL"),32,"psl","gov"],
   [L3("Rozwój Plus","Rozwój Plus","Rozwój Plus"),40,"rozwoj","out"],
   [L3("PiS","PiS","PiS"),146,"pis","out"],
   [L3("Konfederacja","Konfederacja","Konfederacja"),16,"konf","out"],
   [L3("Konfederacja Korony Polskiej (circle)","Konfederacja Korony Polskiej (cercle)","Konfederacja Korony Polskiej (círculo)"),3,null,"out"],
   [L3("Unaffiliated MPs","Députés non inscrits","Diputados no adscritos"),8,null,"out"],
   [L3("Not assigned in the source count","Non attribués dans le décompte source","No asignados en el recuento de origen"),4,null,"vac"]
  ]},
 head:L3("President: Karol Nawrocki (backed by PiS, in office since 6 August 2025). Prime Minister: Donald Tusk (KO, since December 2023).",
  "Président : Karol Nawrocki (soutenu par le PiS, en fonction depuis le 6 août 2025). Premier ministre : Donald Tusk (KO, depuis décembre 2023).",
  "Presidente: Karol Nawrocki (apoyado por el PiS, en el cargo desde el 6 de agosto de 2025). Primer ministro: Donald Tusk (KO, desde diciembre de 2023)."),
 govNote:L3("The Council of Ministers led by Donald Tusk rests on KO, PSL, Lewica and Polska 2050; the Centrum club, formed in February 2026 by MPs who left Polska 2050, kept the climate ministry (PAP). The official composition page could not be read for this update, so no count of ministers by party is shown.",
  "Le Conseil des ministres dirigé par Donald Tusk repose sur la KO, le PSL, Lewica et Polska 2050 ; le groupe Centrum, formé en février 2026 par des députés partis de Polska 2050, a gardé le ministère du Climat (PAP). La page officielle de composition n'a pas pu être lue pour cette mise à jour : aucun décompte des ministres par parti n'est donc affiché.",
  "El Consejo de Ministros encabezado por Donald Tusk se apoya en la KO, el PSL, Lewica y Polska 2050; el grupo Centrum, formado en febrero de 2026 por diputados que dejaron Polska 2050, conservó el Ministerio del Clima (PAP). La página oficial de composición no pudo leerse para esta actualización, así que no se muestra un recuento de ministros por partido."),
 notes:[
  L3("Seats: Polsat News count of 29 July 2026, after Rozwój Plus left PiS; the Sejm's own club page (sejm.gov.pl) could not be read for this update, so later moves of single MPs are not shown. The groups listed add up to 456; the 4 remaining seats (460 minus the groups) are not assigned in that count and are shown separately.",
   "Sièges : décompte de Polsat News du 29 juillet 2026, après le départ de Rozwój Plus du PiS ; la page des groupes de la Diète (sejm.gov.pl) n'a pas pu être lue pour cette mise à jour, les changements ultérieurs de députés isolés n'apparaissent donc pas. Les groupes listés totalisent 456 sièges ; les 4 restants (460 moins les groupes) ne sont pas attribués dans ce décompte et figurent à part.",
   "Escaños: recuento de Polsat News del 29 de julio de 2026, tras la salida de Rozwój Plus del PiS; la página de grupos del Sejm (sejm.gov.pl) no pudo leerse para esta actualización, así que no se muestran cambios posteriores de diputados sueltos. Los grupos listados suman 456; los 4 restantes (460 menos los grupos) no están asignados en ese recuento y se muestran aparte."),
  L3("Centrum is counted with the government because it kept the climate ministry, although it has not signed the 2023 coalition agreement. Konfederacja Korony Polskiej and the unaffiliated MPs have no card; their place in the chart is indicative. A veto override needs three-fifths of the votes cast: 276 if all 460 MPs vote.",
   "Centrum est compté avec le gouvernement parce qu'il a gardé le ministère du Climat, bien qu'il n'ait pas signé l'accord de coalition de 2023. La Konfederacja Korony Polskiej et les non-inscrits n'ont pas de fiche ; leur place dans le graphique est indicative. Lever un veto exige les trois cinquièmes des suffrages exprimés : 276 si les 460 députés votent.",
   "Centrum se cuenta con el Gobierno porque conservó el Ministerio del Clima, aunque no ha firmado el acuerdo de coalición de 2023. La Konfederacja Korony Polskiej y los no adscritos no tienen ficha; su lugar en el gráfico es indicativo. Superar un veto exige tres quintos de los votos emitidos: 276 si votan los 460 diputados.")
 ]
};
// Germany: who holds power (15 Nov 2026). Parliamentary system: no presidential flag.
POWER.germany={asOf:"2026-11-15",
 chamber:{name:L3("Bundestag (21st term)","Bundestag (21e législature)","Bundestag (21.ª legislatura)"),total:630,majority:316,
  src:"https://www.bundestag.de/parlament/plenum/sitzverteilung",
  groups:[
   [L3("Die Linke","Die Linke","Die Linke"),64,"linke","out"],
   [L3("Bündnis 90/Die Grünen","Bündnis 90/Die Grünen","Bündnis 90/Die Grünen"),85,"gruene","out"],
   [L3("SPD","SPD","SPD"),120,"spd","gov"],
   [L3("CDU/CSU","CDU/CSU","CDU/CSU"),208,"cducsu","gov"],
   [L3("AfD","AfD","AfD"),150,"afd","out"],
   [L3("Non-attached (1 SSW, 2 former AfD)","Non-inscrits (1 SSW, 2 ex-AfD)","No adscritos (1 SSW, 2 ex-AfD)"),3,null,"out"]
  ]},
 cabinet:{name:L3("Merz government (CDU/CSU-SPD, since May 2025)","Gouvernement Merz (CDU/CSU-SPD, depuis mai 2025)","Gobierno Merz (CDU/CSU-SPD, desde mayo de 2025)"),total:18,
  src:"https://www.bundesregierung.de/breg-de/leichte-sprache/bundesregierung-2344462",
  parts:[
   [L3("SPD (incl. Vice-Chancellor Lars Klingbeil)","SPD (dont le vice-chancelier Lars Klingbeil)","SPD (incl. el vicecanciller Lars Klingbeil)"),7,"spd","gov"],
   [L3("CDU (incl. Chancellor Friedrich Merz)","CDU (dont le chancelier Friedrich Merz)","CDU (incl. el canciller Friedrich Merz)"),7,"cducsu","gov"],
   [L3("CSU","CSU","CSU"),3,"cducsu","gov"],
   [L3("No party (digital affairs, nominated by the CDU)","Sans parti (numérique, proposé par la CDU)","Sin partido (asuntos digitales, propuesto por la CDU)"),1,null,"gov"]
  ]},
 head:L3("Federal President: Frank-Walter Steinmeier, with a mainly representative role. Chancellor: Friedrich Merz (CDU), elected by the Bundestag on 6 May 2025.",
  "Président fédéral : Frank-Walter Steinmeier, au rôle surtout représentatif. Chancelier : Friedrich Merz (CDU), élu par le Bundestag le 6 mai 2025.",
  "Presidente federal: Frank-Walter Steinmeier, con un papel sobre todo representativo. Canciller: Friedrich Merz (CDU), elegido por el Bundestag el 6 de mayo de 2025."),
 govNote:L3("Coalition of CDU, CSU and SPD with 328 of 630 seats, 12 more than the absolute majority of 316 needed to elect a chancellor. Changes since May 2025: on 29 July 2026 Nina Warken (CDU) moved from health to head the Chancellery, Carsten Linnemann (CDU) became health minister and Steffen Bilger (CDU) transport minister; Alexander Schweitzer (SPD) succeeded Bärbel Bas (SPD) as labour minister on 13 October 2026. The party balance of the cabinet did not change.",
  "Coalition de la CDU, de la CSU et du SPD avec 328 sièges sur 630, 12 de plus que la majorité absolue de 316 nécessaire pour élire un chancelier. Changements depuis mai 2025 : le 29 juillet 2026, Nina Warken (CDU) est passée de la Santé à la direction de la Chancellerie, Carsten Linnemann (CDU) est devenu ministre de la Santé et Steffen Bilger (CDU) ministre des Transports ; Alexander Schweitzer (SPD) a succédé à Bärbel Bas (SPD) au Travail le 13 octobre 2026. L'équilibre entre partis au gouvernement n'a pas changé.",
  "Coalición de CDU, CSU y SPD con 328 de 630 escaños, 12 más que la mayoría absoluta de 316 necesaria para elegir canciller. Cambios desde mayo de 2025: el 29 de julio de 2026 Nina Warken (CDU) pasó de Sanidad a dirigir la Cancillería, Carsten Linnemann (CDU) se convirtió en ministro de Sanidad y Steffen Bilger (CDU) en ministro de Transportes; Alexander Schweitzer (SPD) sucedió a Bärbel Bas (SPD) en Trabajo el 13 de octubre de 2026. El equilibrio entre partidos en el gabinete no cambió."),
 notes:[
  L3("Seats are derived, not read from one table: the Bundestag's seat page could not be opened for this update. They start from the official 2025 result (CDU/CSU 208, AfD 152, SPD 120, Greens 85, Left 64, SSW 1) and take out the two MPs whom the Bundestag's own biographies list as non-attached: Sieghard Knodel, who left the AfD party and group on 5 May 2025, and Jan Wenzel Schmidt, expelled from the AfD group on 3 March 2026. The SSW member sits as non-attached. The total of 630 matches the legal size of the chamber; consulted on 15 November 2026.",
   "Les sièges sont déduits, pas lus dans un tableau : la page des sièges du Bundestag n'a pas pu être ouverte pour cette mise à jour. Ils partent du résultat officiel de 2025 (CDU/CSU 208, AfD 152, SPD 120, Verts 85, Gauche 64, SSW 1) et retirent les deux députés que les biographies du Bundestag indiquent comme non inscrits : Sieghard Knodel, qui a quitté le parti et le groupe AfD le 5 mai 2025, et Jan Wenzel Schmidt, exclu du groupe AfD le 3 mars 2026. L'élu du SSW siège comme non-inscrit. Le total de 630 correspond à la taille légale de la chambre ; consulté le 15 novembre 2026.",
   "Los escaños se deducen, no se leen en una tabla: no pudo abrirse la página de escaños del Bundestag para esta actualización. Parten del resultado oficial de 2025 (CDU/CSU 208, AfD 152, SPD 120, Verdes 85, La Izquierda 64, SSW 1) y restan los dos diputados que las biografías del propio Bundestag registran como no adscritos: Sieghard Knodel, que dejó el partido y el grupo de la AfD el 5 de mayo de 2025, y Jan Wenzel Schmidt, expulsado del grupo de la AfD el 3 de marzo de 2026. El diputado del SSW se sienta como no adscrito. El total de 630 coincide con el tamaño legal de la cámara; consultado el 15 de noviembre de 2026."),
  L3("Cabinet: 18 members listed by the federal government (page dated 13 October 2026), party labels from the Bundestag's May 2025 cabinet page and the government's July 2026 announcements. Karsten Wildberger (digital affairs) has no party. CDU and CSU sit as one group and share one card. The non-attached members have no card; their place in the chart is indicative.",
   "Gouvernement : 18 membres listés par le gouvernement fédéral (page datée du 13 octobre 2026), étiquettes de parti tirées de la page du Bundestag sur le cabinet de mai 2025 et des annonces gouvernementales de juillet 2026. Karsten Wildberger (numérique) n'a pas de parti. CDU et CSU forment un seul groupe et partagent une fiche. Les non-inscrits n'ont pas de fiche ; leur place dans le graphique est indicative.",
   "Gabinete: 18 miembros listados por el Gobierno federal (página fechada el 13 de octubre de 2026), etiquetas de partido tomadas de la página del Bundestag sobre el gabinete de mayo de 2025 y de los anuncios del Gobierno de julio de 2026. Karsten Wildberger (asuntos digitales) no tiene partido. CDU y CSU forman un solo grupo y comparten ficha. Los no adscritos no tienen ficha; su lugar en el gráfico es indicativo.")
 ]
};
// Italy: who holds power (15 Nov 2026). Parliamentary system: no presidential flag.
POWER.italy={asOf:"2026-11-15",
 chamber:{name:L3("Chamber of Deputies","Chambre des députés","Cámara de Diputados"),total:400,majority:201,
  src:"https://www.camera.it/leg19/46",
  groups:[
   [L3("Alleanza Verdi e Sinistra (AVS)","Alleanza Verdi e Sinistra (AVS)","Alleanza Verdi e Sinistra (AVS)"),9,"avs","out"],
   [L3("Partito Democratico (PD)","Partito Democratico (PD)","Partito Democratico (PD)"),68,"pd","out"],
   [L3("Movimento 5 Stelle (M5S)","Movimento 5 Stelle (M5S)","Movimento 5 Stelle (M5S)"),48,"m5s","out"],
   [L3("Mixed group: +Europa","Groupe mixte : +Europa","Grupo mixto: +Europa"),3,null,"out"],
   [L3("Italia Viva-Casa Riformista","Italia Viva-Casa Riformista","Italia Viva-Casa Riformista"),7,"iv","out"],
   [L3("Azione-Popolari europeisti riformatori-Renew Europe","Azione-Popolari europeisti riformatori-Renew Europe","Azione-Popolari europeisti riformatori-Renew Europe"),10,"azione","out"],
   [L3("Mixed group: linguistic minorities","Groupe mixte : minorités linguistiques","Grupo mixto: minorías lingüísticas"),4,null,"out"],
   [L3("Mixed group: Sud chiama Nord","Groupe mixte : Sud chiama Nord","Grupo mixto: Sud chiama Nord"),3,null,"out"],
   [L3("Noi Moderati-MAIE-Centro Popolare","Noi Moderati-MAIE-Centro Popolare","Noi Moderati-MAIE-Centro Popolare"),8,"nm","gov"],
   [L3("Forza Italia - Berlusconi Presidente - PPE","Forza Italia - Berlusconi Presidente - PPE","Forza Italia - Berlusconi Presidente - PPE"),52,"fi","gov"],
   [L3("Fratelli d'Italia (FdI)","Fratelli d'Italia (FdI)","Fratelli d'Italia (FdI)"),117,"fdi","gov"],
   [L3("Lega - Salvini Premier","Lega - Salvini Premier","Lega - Salvini Premier"),54,"lega","gov"],
   [L3("Mixed group: Futuro Nazionale Vannacci","Groupe mixte : Futuro Nazionale Vannacci","Grupo mixto: Futuro Nazionale Vannacci"),9,null,"out"],
   [L3("Mixed group: deputies in no component","Groupe mixte : députés sans composante","Grupo mixto: diputados sin componente"),6,null,"out"],
   [L3("Vacant (derived)","Vacants (déduit)","Vacantes (deducido)"),2,null,"vac"]
  ]},
 head:L3("President of the Republic: Sergio Mattarella. Prime Minister (President of the Council of Ministers): Giorgia Meloni (FdI), since 22 October 2022.",
  "Président de la République : Sergio Mattarella. Présidente du Conseil des ministres : Giorgia Meloni (FdI), depuis le 22 octobre 2022.",
  "Presidente de la República: Sergio Mattarella. Presidenta del Consejo de Ministros: Giorgia Meloni (FdI), desde el 22 de octubre de 2022."),
 govNote:L3("The Meloni government rests on a coalition of Fratelli d'Italia, Lega, Forza Italia and Noi Moderati, formed after the September 2022 election; with 231 of the 400 deputies listed, the four coalition groups hold a majority in the Chamber. Futuro Nazionale, the party Roberto Vannacci launched in 2026, sits as a component of the Mixed group and is shown here as not in government. No count of ministers by party was checked, so no cabinet chart is shown.",
  "Le gouvernement Meloni repose sur une coalition de Fratelli d'Italia, de la Lega, de Forza Italia et de Noi Moderati, formée après les élections de septembre 2022 ; avec 231 des 400 députés recensés, les quatre groupes de la coalition détiennent la majorité à la Chambre. Futuro Nazionale, le parti lancé en 2026 par Roberto Vannacci, siège comme composante du groupe mixte et figure ici comme hors du gouvernement. La répartition des ministres par parti n'a pas été vérifiée : aucun schéma du gouvernement n'est donc affiché.",
  "El gobierno Meloni se apoya en una coalición de Fratelli d'Italia, Lega, Forza Italia y Noi Moderati, formada tras las elecciones de septiembre de 2022; con 231 de los 400 diputados registrados, los cuatro grupos de la coalición tienen mayoría en la Cámara. Futuro Nazionale, el partido que Roberto Vannacci lanzó en 2026, figura como componente del grupo mixto y se muestra aquí como fuera del gobierno. No se comprobó el reparto de ministros por partido, por lo que no se muestra el gráfico del gabinete."),
 notes:[
  L3("Seats by group from the Chamber's official group composition page (XIX legislature), consulted on 15 November 2026; the page gives no update date. The groups and Mixed-group components listed add up to 398 deputies; the 2 remaining seats (400 minus 398) are shown as vacant, a figure derived by us, not read on the page.",
   "Sièges par groupe tirés de la page officielle de la Chambre sur la composition des groupes (XIXe législature), consultée le 15 novembre 2026 ; la page ne donne pas de date de mise à jour. Les groupes et composantes du groupe mixte totalisent 398 députés ; les 2 sièges restants (400 moins 398) figurent comme vacants, un chiffre que nous avons déduit et non lu sur la page.",
   "Escaños por grupo tomados de la página oficial de la Cámara sobre la composición de los grupos (XIX legislatura), consultada el 15 de noviembre de 2026; la página no indica fecha de actualización. Los grupos y componentes del grupo mixto suman 398 diputados; los 2 escaños restantes (400 menos 398) se muestran como vacantes, una cifra deducida por nosotros, no leída en la página."),
  L3("Groups are ordered by the left-right positions used on the party cards. Italia Viva and Azione share the same position; the Mixed-group components (25 deputies in all) have no card, and their place in the chart is indicative. Only the Chamber is shown; the Senate (200 elected senators plus senators for life) is not.",
   "Les groupes sont classés selon les positions gauche-droite des fiches partis. Italia Viva et Azione ont la même position ; les composantes du groupe mixte (25 députés au total) n'ont pas de fiche et leur place dans le graphique est indicative. Seule la Chambre est représentée ; le Sénat (200 sénateurs élus plus les sénateurs à vie) ne l'est pas.",
   "Los grupos se ordenan según las posiciones izquierda-derecha de las fichas de partidos. Italia Viva y Azione comparten posición; los componentes del grupo mixto (25 diputados en total) no tienen ficha y su lugar en el gráfico es indicativo. Solo se muestra la Cámara; el Senado (200 senadores electos más los senadores vitalicios) no.")
 ]
};
POWER.netherlands={asOf:"2026-11-15",
 chamber:{name:L3("Tweede Kamer (House of Representatives)","Tweede Kamer (Chambre des représentants)","Tweede Kamer (Cámara de Representantes)"),total:150,majority:76,
  src:"https://www.tweedekamer.nl/kamerleden/fracties",
  // [label, seats, party card id or null, "gov"|"out"|"vac"|"sup"], left to right by the cards' pos; groups without a card placed by editorial estimate
  groups:[
   [L3("SP","SP","SP"),3,null,"out"],
   [L3("Partij voor de Dieren","Partij voor de Dieren","Partij voor de Dieren"),3,null,"out"],
   [L3("Progressief Nederland (PRO, former GroenLinks-PvdA)","Progressief Nederland (PRO, ex-GroenLinks-PvdA)","Progressief Nederland (PRO, antiguo GroenLinks-PvdA)"),20,"pro","out"],
   [L3("DENK","DENK","DENK"),3,null,"out"],
   [L3("Volt","Volt","Volt"),1,null,"out"],
   [L3("D66","D66","D66"),26,"d66","gov"],
   [L3("50PLUS","50PLUS","50PLUS"),2,null,"out"],
   [L3("ChristenUnie","ChristenUnie","ChristenUnie"),3,null,"out"],
   [L3("CDA","CDA","CDA"),18,"cda","gov"],
   [L3("BBB","BBB","BBB"),3,"bbb","out"],
   [L3("Lid Keijzer (one MP, left BBB in February 2026)","Lid Keijzer (une élue, partie du BBB en février 2026)","Lid Keijzer (una diputada, salió del BBB en febrero de 2026)"),1,null,"out"],
   [L3("VVD","VVD","VVD"),22,"vvd","gov"],
   [L3("SGP","SGP","SGP"),3,null,"out"],
   [L3("JA21","JA21","JA21"),9,"ja21","out"],
   [L3("PVV","PVV","PVV"),19,"pvv","out"],
   [L3("Groep Markuszower (DNA)","Groupe Markuszower (DNA)","Grupo Markuszower (DNA)"),7,"dna","out"],
   [L3("Forum voor Democratie (FVD)","Forum voor Democratie (FVD)","Forum voor Democratie (FVD)"),7,"fvd","out"]
  ]},
 cabinet:{name:L3("Jetten cabinet (sworn in 23 February 2026)","Gouvernement Jetten (assermenté le 23 février 2026)","Gobierno Jetten (juramento el 23 de febrero de 2026)"),total:28,
  src:"https://www.rijksoverheid.nl/regering/over-de-regering/kabinetten-sinds-1945/kabinet-jetten",
  // [label, members, party card id or null, "gov"|"out"]
  parts:[
   [L3("D66: 7 ministers, 3 state secretaries","D66 : 7 ministres, 3 secrétaires d'État","D66: 7 ministros, 3 secretarios de Estado"),10,"d66","gov"],
   [L3("VVD: 6 ministers, 3 state secretaries","VVD : 6 ministres, 3 secrétaires d'État","VVD: 6 ministros, 3 secretarios de Estado"),9,"vvd","gov"],
   [L3("CDA: 5 ministers, 3 state secretaries","CDA : 5 ministres, 3 secrétaires d'État","CDA: 5 ministros, 3 secretarios de Estado"),8,"cda","gov"],
   [L3("No party: 1 state secretary (Herstel Toeslagen, benefits redress)","Sans parti : 1 secrétaire d'État (Herstel Toeslagen, réparation du scandale des allocations)","Sin partido: 1 secretaria de Estado (Herstel Toeslagen, reparación del escándalo de las ayudas)"),1,null,"out"]
  ]},
 head:L3("Head of state: the King, with no political power. Prime Minister: Rob Jetten (D66), since 23 February 2026.","Chef de l'État : le roi, sans pouvoir politique. Premier ministre : Rob Jetten (D66), depuis le 23 février 2026.","Jefe del Estado: el rey, sin poder político. Primer ministro: Rob Jetten (D66), desde el 23 de febrero de 2026."),
 govNote:L3("Minority cabinet of D66, VVD and CDA: 66 of 150 seats in the Tweede Kamer and 22 of 75 in the Eerste Kamer, so every law needs opposition votes in both chambers. The coalition looks for majorities bill by bill: for the 2027 Tax Plan, talks with PRO, Volt, JA21, SGP and BBB had produced no agreement by 10 November 2026, while ChristenUnie, 50PLUS and Groep Markuszower could give a majority in the Tweede Kamer but not yet in the Eerste Kamer (Tweede Kamer).","Gouvernement minoritaire de D66, du VVD et du CDA : 66 sièges sur 150 à la Tweede Kamer et 22 sur 75 à l'Eerste Kamer, si bien que chaque loi exige des voix de l'opposition dans les deux chambres. La coalition cherche des majorités texte par texte : pour le plan fiscal 2027, les discussions avec PRO, Volt, JA21, le SGP et le BBB n'avaient abouti à aucun accord au 10 novembre 2026, tandis que ChristenUnie, 50PLUS et le groupe Markuszower pourraient donner une majorité à la Tweede Kamer, mais pas encore à l'Eerste Kamer (Tweede Kamer).","Gobierno en minoría de D66, VVD y CDA: 66 de 150 escaños en la Tweede Kamer y 22 de 75 en la Eerste Kamer, de modo que cada ley necesita votos de la oposición en ambas cámaras. La coalición busca mayorías ley por ley: para el plan fiscal de 2027, las conversaciones con PRO, Volt, JA21, SGP y BBB no habían dado acuerdo a 10 de noviembre de 2026, mientras que ChristenUnie, 50PLUS y el grupo Markuszower podrían dar una mayoría en la Tweede Kamer, pero aún no en la Eerste Kamer (Tweede Kamer)."),
 notes:[
  L3("Seats from the Tweede Kamer's group page, which gives no date; consulted on 15 November 2026. The 17 groups add up to 150. Groups with a party card are ordered by the left-right positions on the cards; the eight groups without a card are placed by our own estimate.","Sièges tirés de la page des groupes de la Tweede Kamer, qui n'indique pas de date ; consultée le 15 novembre 2026. Les 17 groupes totalisent 150 sièges. Les groupes dotés d'une fiche sont classés selon les positions gauche-droite des fiches ; les huit groupes sans fiche sont placés selon notre propre estimation.","Escaños tomados de la página de grupos de la Tweede Kamer, que no indica fecha; consultada el 15 de noviembre de 2026. Los 17 grupos suman 150. Los grupos con ficha se ordenan según las posiciones izquierda-derecha de las fichas; los ocho grupos sin ficha se sitúan según nuestra propia estimación."),
  L3("Groep Markuszower is the seven MPs who left the PVV group in January 2026 (party card DNA); Lid Keijzer is Mona Keijzer, elected for BBB. Cabinet members by party from the government's page on the Jetten cabinet (last modified 23 March 2026); no later change was found.","Le groupe Markuszower réunit les sept députés partis du groupe PVV en janvier 2026 (fiche DNA) ; Lid Keijzer est Mona Keijzer, élue sur la liste du BBB. Membres du gouvernement par parti d'après la page officielle du gouvernement Jetten (modifiée le 23 mars 2026) ; aucun changement ultérieur n'a été trouvé.","El grupo Markuszower son los siete diputados que dejaron el grupo del PVV en enero de 2026 (ficha DNA); Lid Keijzer es Mona Keijzer, elegida en la lista del BBB. Miembros del gobierno por partido según la página oficial del gobierno Jetten (modificada el 23 de marzo de 2026); no se encontró ningún cambio posterior.")
 ]
};
POWER.portugal={asOf:"2026-11-15",
 chamber:{name:L3("Assembly of the Republic (XVII legislature)","Assemblée de la République (XVIIe législature)","Asamblea de la República (XVII legislatura)"),total:230,majority:116,
  src:"https://www.noticiasaominuto.com/politica/2799019/cds-regressa-ao-andar-nobre-da-ar-e-fica-com-espaco-entre-ps-e-livre",
  groups:[
   [L3("PCP","PCP","PCP"),3,"pcp","out"],
   [L3("Left Bloc (BE), one seat","Bloc de gauche (BE), un siège","Bloco de Esquerda (BE), un escaño"),1,null,"out"],
   [L3("Livre","Livre","Livre"),6,"livre","out"],
   [L3("PAN, one seat","PAN, un siège","PAN, un escaño"),1,null,"out"],
   [L3("PS","PS","PS"),58,"ps","out"],
   [L3("JPP (Madeira), one seat","JPP (Madère), un siège","JPP (Madeira), un escaño"),1,null,"out"],
   [L3("PSD","PSD","PSD"),89,"psd","gov"],
   [L3("CDS-PP","CDS-PP","CDS-PP"),2,"cds","gov"],
   [L3("Iniciativa Liberal (IL)","Iniciativa Liberal (IL)","Iniciativa Liberal (IL)"),9,"il","out"],
   [L3("Chega","Chega","Chega"),60,"chega","out"]
  ]},
 head:L3("President: António José Seguro, elected on 8 February 2026 with 66.8% and in office since 9 March 2026. Prime Minister: Luís Montenegro (PSD), heading the XXV Constitutional Government sworn in on 5 June 2025.","Président : António José Seguro, élu le 8 février 2026 avec 66,8 % et en fonctions depuis le 9 mars 2026. Premier ministre : Luís Montenegro (PSD), à la tête du XXVe gouvernement constitutionnel investi le 5 juin 2025.","Presidente: António José Seguro, elegido el 8 de febrero de 2026 con el 66,8 % y en el cargo desde el 9 de marzo de 2026. Primer ministro: Luís Montenegro (PSD), al frente del XXV Gobierno Constitucional, investido el 5 de junio de 2025."),
 govNote:L3("Minority government of PSD and CDS-PP, which ran together as the Aliança Democrática (AD): 91 of 230 seats, 25 short of a majority. There is no written support agreement with any other party; bills pass with votes found case by case. The PS abstained on the 2026 budget and on the 2027 budget at first reading (28 October 2026), with PAN and JPP also abstaining on the latter; the final vote on the 2027 budget is scheduled for 24 November 2026.","Gouvernement minoritaire du PSD et du CDS-PP, qui se sont présentés ensemble sous le nom d'Aliança Democrática (AD) : 91 sièges sur 230, à 25 sièges de la majorité. Il n'existe aucun accord écrit de soutien avec un autre parti ; les textes passent avec des voix trouvées au cas par cas. Le PS s'est abstenu sur le budget 2026 et sur le budget 2027 en première lecture (28 octobre 2026), le PAN et JPP s'abstenant aussi sur ce dernier ; le vote final du budget 2027 est prévu le 24 novembre 2026.","Gobierno en minoría de PSD y CDS-PP, que concurrieron juntos como Aliança Democrática (AD): 91 de 230 escaños, a 25 de la mayoría. No hay acuerdo escrito de apoyo con ningún otro partido; las leyes salen con votos buscados caso por caso. El PS se abstuvo en el presupuesto de 2026 y en el de 2027 en la generalidad (28 de octubre de 2026), con la abstención también de PAN y JPP en este último; la votación final del presupuesto de 2027 está prevista el 24 de noviembre de 2026."),
 notes:[
  L3("Seats by group are the Lusa count published at the start of the legislature (June 2025), which matches the final 2025 results; the parliament's own composition page could not be opened for this update. No change of group was found up to 15 November 2026: a Chega MP who asked on 8 July 2026 to sit as non-attached withdrew the request three hours later and stayed in the group.","Les sièges par groupe sont le décompte de Lusa publié au début de la législature (juin 2025), conforme aux résultats définitifs de 2025 ; la page de composition du parlement lui-même n'a pas pu être consultée pour cette mise à jour. Aucun changement de groupe n'a été relevé jusqu'au 15 novembre 2026 : un député Chega qui avait demandé le 8 juillet 2026 à siéger comme non-inscrit a retiré sa demande trois heures plus tard et est resté dans le groupe.","Los escaños por grupo son el recuento de Lusa publicado al inicio de la legislatura (junio de 2025), que coincide con los resultados definitivos de 2025; no se pudo consultar la página de composición del propio parlamento para esta actualización. No se halló ningún cambio de grupo hasta el 15 de noviembre de 2026: un diputado de Chega que pidió el 8 de julio de 2026 pasar a no adscrito retiró la petición tres horas después y siguió en el grupo."),
  L3("Groups are ordered by the left-right positions used on the party cards. BE, PAN and JPP have no card; their place in the chart is a judgement. No breakdown of ministers by party was checked, so no cabinet chart is shown.","Les groupes sont classés selon les positions gauche-droite des fiches partis. Le BE, le PAN et JPP n'ont pas de fiche ; leur place dans le graphique relève du jugement. La répartition des ministres par parti n'a pas été vérifiée : aucun schéma du gouvernement n'est donc affiché.","Los grupos se ordenan según las posiciones izquierda-derecha de las fichas de partidos. BE, PAN y JPP no tienen ficha; su lugar en el gráfico es una estimación propia. No se comprobó el reparto de ministros por partido, por lo que no se muestra el gráfico del gabinete.")
 ]
};
// United Kingdom: who holds power (15 Nov 2026). Parliamentary system: no presidential flag.
POWER.uk={asOf:"2026-11-15",
 chamber:{name:L3("House of Commons","Chambre des communes","Cámara de los Comunes"),total:650,majority:326,
  src:"https://members.parliament.uk/parties/Commons",
  groups:[
   [L3("Your Party","Your Party","Your Party"),1,null,"out"],
   [L3("Green Party","Parti vert","Partido Verde"),5,"green","out"],
   [L3("Sinn Féin (does not take its seats)","Sinn Féin (ne siège pas)","Sinn Féin (no ocupa sus escaños)"),7,"sf","out"],
   [L3("Plaid Cymru","Plaid Cymru","Plaid Cymru"),4,"plaid","out"],
   [L3("SNP","SNP","SNP"),7,"snp","out"],
   [L3("SDLP","SDLP","SDLP"),2,null,"out"],
   [L3("Labour","Labour","Laboristas"),402,"lab","gov"],
   [L3("Liberal Democrats","Libéraux-démocrates","Liberal Demócratas"),72,"ld","out"],
   [L3("Alliance","Alliance","Alliance"),1,null,"out"],
   [L3("Ulster Unionist Party","Parti unioniste d'Ulster","Partido Unionista del Úlster"),1,null,"out"],
   [L3("Conservatives","Conservateurs","Conservadores"),116,"con","out"],
   [L3("DUP","DUP","DUP"),5,"dup","out"],
   [L3("Reform UK","Reform UK","Reform UK"),8,"reform","out"],
   [L3("Traditional Unionist Voice","Traditional Unionist Voice","Traditional Unionist Voice"),1,null,"out"],
   [L3("Restore Britain","Restore Britain","Restore Britain"),1,null,"out"],
   [L3("Independents","Indépendants","Independientes"),13,null,"out"],
   [L3("Speaker (does not vote, except to break a tie)","Président de la Chambre (ne vote pas, sauf en cas d'égalité)","Presidente de la Cámara (no vota, salvo en caso de empate)"),1,null,"out"],
   [L3("Vacant","Vacants","Vacantes"),3,null,"vac"]
  ]},
 head:L3("Head of state: King Charles III, with no political power. Prime Minister: Andy Burnham (Labour), since 20 July 2026.",
  "Chef de l'État : le roi Charles III, sans pouvoir politique. Premier ministre : Andy Burnham (Labour), depuis le 20 juillet 2026.",
  "Jefe del Estado: el rey Carlos III, sin poder político. Primer ministro: Andy Burnham (laborista), desde el 20 de julio de 2026."),
 govNote:L3("Single-party Labour government: Andy Burnham succeeded Keir Starmer as party leader and Prime Minister in July 2026 without a general election. No other party holds a ministerial post, so no cabinet chart is shown.",
  "Gouvernement travailliste homogène : Andy Burnham a succédé à Keir Starmer à la tête du parti et du gouvernement en juillet 2026, sans élections générales. Aucun autre parti n'occupe de poste ministériel : aucun schéma du gouvernement n'est donc affiché.",
  "Gobierno laborista en solitario: Andy Burnham sucedió a Keir Starmer al frente del partido y del Gobierno en julio de 2026, sin elecciones generales. Ningún otro partido ocupa cargos ministeriales, así que no se muestra el gráfico del gabinete."),
 notes:[
  L3("Seats from the official House of Commons 'state of the parties' page, consulted on 15 November 2026; the page carries no date. It does not name the 13 independents or the 3 vacant seats, and this update could not identify the vacancies. The independents include MPs who lost or gave up their party whip.",
   "Sièges tirés de la page officielle « state of the parties » de la Chambre des communes, consultée le 15 novembre 2026 ; la page n'est pas datée. Elle ne nomme ni les 13 indépendants ni les 3 sièges vacants, et cette mise à jour n'a pas pu identifier les sièges vacants. Les indépendants comprennent des députés privés de l'investiture de leur parti ou qui y ont renoncé.",
   "Escaños tomados de la página oficial «state of the parties» de la Cámara de los Comunes, consultada el 15 de noviembre de 2026; la página no lleva fecha. No nombra a los 13 independientes ni los 3 escaños vacantes, y esta actualización no pudo identificar las vacantes. Entre los independientes hay diputados que perdieron o dejaron la disciplina de su partido."),
  L3("Groups are ordered by the left-right positions used on the party cards; Your Party, the SDLP, Alliance, the UUP, the TUV, Restore Britain and the independents have no card, so their place in the chart is indicative. The majority shown is half of 650 plus one; in practice fewer votes suffice, because Sinn Féin's seven MPs do not sit and the Speaker and three deputy speakers do not normally vote.",
   "Les groupes sont classés selon les positions gauche-droite des fiches partis ; Your Party, le SDLP, Alliance, l'UUP, la TUV, Restore Britain et les indépendants n'ont pas de fiche, leur place dans le graphique est donc indicative. La majorité indiquée est la moitié de 650 plus un ; en pratique, il faut moins de voix, car les sept députés du Sinn Féin ne siègent pas et le président de la Chambre et ses trois vice-présidents ne votent normalement pas.",
   "Los grupos se ordenan según las posiciones izquierda-derecha de las fichas de partido; Your Party, el SDLP, Alliance, el UUP, la TUV, Restore Britain y los independientes no tienen ficha, así que su lugar en el gráfico es indicativo. La mayoría indicada es la mitad de 650 más uno; en la práctica bastan menos votos, porque los siete diputados del Sinn Féin no ocupan sus escaños y el presidente de la Cámara y sus tres vicepresidentes no suelen votar.")
 ]
};
