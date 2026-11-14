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
  src:"https://www.maire-info.com/gouvernement/un-nouveau-gouvernement-largement-domine-par-lancien-socle-commun-article-30083",
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
  src:"https://fr.businessam.be/?p=139563",
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
