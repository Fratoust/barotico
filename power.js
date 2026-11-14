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
