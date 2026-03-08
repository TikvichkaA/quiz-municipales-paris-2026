// Données du quiz municipales Paris 2026
// Extraites du fichier Excel VP_municipales 2026

const CANDIDATES = [
  { id: "dati", name: "Rachida Dati", color: "#8B5CF6", party: "LR / Renaissance" },
  { id: "gregoire", name: "Emmanuel Grégoire", color: "#EF4444", party: "PS / NFP" },
  { id: "chikirou", name: "Sophia Chikirou", color: "#F97316", party: "LFI / NFP" },
  { id: "bournazel", name: "Pierre-Yves Bournazel", color: "#3B82F6", party: "Horizons / Renaissance" },
  { id: "knafo", name: "Sarah Knafo", color: "#1E3A5F", party: "Reconquête" },
  { id: "mariani", name: "Thierry Mariani", color: "#0D2B45", party: "RN / UDR" },
  { id: "npa", name: "Blandine Chauvel", color: "#DC2626", party: "NPA-Révolutionnaires" }
];

const THEMES = [
  "Alimentation",
  "Associations et vie de quartier",
  "Culture et loisirs",
  "Défense des droits",
  "Economie locale & commerces",
  "Education",
  "Espaces verts, végétalisation & biodiversité",
  "Finance et gestion budgétaire",
  "Immigration",
  "Jeunesse",
  "Logement",
  "Patrimoine & Beauté de la ville",
  "Petite enfance / protection de l'enfance",
  "Probité",
  "Propreté et gestion des déchets",
  "Périscolaire",
  "Recherche & Innovation",
  "Santé",
  "Services publics",
  "Solidarité, inclusion & accessibilité",
  "Sport",
  "Sécurité",
  "Séniors",
  "Tourisme",
  "Transports & Mobilités",
  "Vie démocratique",
];

const PROPOSITIONS = [
  // === ALIMENTATION ===
  { id: 1, theme: "Alimentation", text: "Articuler l’ensemble des acteurs autour d’un Projet Alimentaire Territorial (PAT)", candidateId: "chikirou" },
  { id: 2, theme: "Alimentation", text: "Promouvoir l’alimentation d’origine végétale dans la politique alimentaire municipale", candidateId: "chikirou" },
  { id: 3, theme: "Alimentation", text: "Lancer une filière publique de production de champignons, en s’appuyant sur le potentiel parisien", candidateId: "chikirou" },
  { id: 4, theme: "Alimentation", text: "Droit à l'alimentation saine et durable et sécurité sociale de l'alimentation : soutien aux coopératives, caisses et associations d'aide alimentaire, réseau municipal d'épiceries, halles et supermarchés bios et solidaires, ouverture de nouveaux restaurants municipaux aux publics précaires ou isolés.", candidateId: "gregoire" },
  { id: 5, theme: "Alimentation", text: "100% d'alimentation bio, locale et durable dans les cantines et les crèches municipales, avec un goûter équilibré et gratuit pour tous les enfants", candidateId: "gregoire" },

  // === ASSOCIATIONS ET VIE DE QUARTIER ===
  { id: 6, theme: "Associations et vie de quartier", text: "Création d'un permis de piétonisation temporaire, pour permettre à chacun d'organiser, sous réserve que la rue s'y prête, un événement associatif, sportif, festif ou familial en bas de chez soi", candidateId: "gregoire" },
  { id: 7, theme: "Associations et vie de quartier", text: "Une place pour les animaux de compagnie: ouverture des parcs aux chiens tenus en laisse dans certaines zones, des consultations vétérinaires solidaires dans la Maison de l'Animal en Ville et un jardin du souvenir", candidateId: "gregoire" },
  { id: 8, theme: "Associations et vie de quartier", text: "Ouvrir l'Hôtel de Ville toute l'année aux associations, pour en faire un cœur battant de la vie citoyenne parisienne", candidateId: "gregoire" },
  { id: 9, theme: "Associations et vie de quartier", text: "Faciliter l'accès aux bâtiments municipaux et la mutualisation des locaux pour l'organisation d'événements et réunions", candidateId: "gregoire" },
  { id: 10, theme: "Associations et vie de quartier", text: "Sécuriser les subventions par des conventions de financement pluriannuelles et créer un fonds d'urgence pour les associations en difficulté", candidateId: "gregoire" },
  { id: 11, theme: "Associations et vie de quartier", text: "Structurer un parcours de formation gratuit pour les dirigeantes et dirigeants associatifs", candidateId: "gregoire" },
  { id: 12, theme: "Associations et vie de quartier", text: "Soutenir les associations qui font vivre les quartiers populaires (accompagnement scolaire, accès à la culture, aide aux familles monoparentales…) et défendre les actions de « politique de la ville » face à l'État qui réduit son soutien", candidateId: "gregoire" },
  { id: 13, theme: "Associations et vie de quartier", text: "Développer les Volontaires de Paris, faciliter leur mise en relation avec les associations grâce à une application citoyenne et valoriser le bénévolat ainsi que les aidants (accès prioritaire « coupe-file » aux équipements municipaux pour valoriser le temps donné à autrui, accès à des certifications valorisant les compétences acquises).", candidateId: "gregoire" },
  { id: 14, theme: "Associations et vie de quartier", text: "Ouvrir un réseau de salles des fêtes municipales à tarifs abordables et de 100 cours d'école, une par quartier, pour offrir à toutes les familles des lieux de rencontre et de convivialité", candidateId: "gregoire" },
  { id: 15, theme: "Associations et vie de quartier", text: "Face à la solitude et à l'isolement, créer « Paris à vos côtés » pour mettre en place, dans chaque quartier, un réseau structuré d'acteurs et de lieux de proximité, pour trouver près de chez soi un lieu de sociabilité", candidateId: "gregoire" },
  { id: 16, theme: "Associations et vie de quartier", text: "Organiser dans tous les arrondissements un accueil systématique des nouveaux résidents, combinant information sur les services locaux et temps conviviaux réguliers, afin de prévenir l'isolement et de faciliter la création de premiers liens de voisinage.", candidateId: "gregoire" },
  { id: 17, theme: "Associations et vie de quartier", text: "Prioriser les investissements publics dans les quartiers populaires: nouveaux équipements culturels, équipements de propreté et embellissement des rues, nouvelles structures de santé, épiceries bio et solidaires…", candidateId: "gregoire" },
  { id: 18, theme: "Associations et vie de quartier", text: "Un nouveau site de baignade et de loisirs dans le port de l'Arsenal: la Plage de la Bastille", candidateId: "gregoire" },

  // === CULTURE ET LOISIRS ===
  { id: 19, theme: "Culture et loisirs", text: "Je créerai un grand orchestre parisien des collèges avec 1 000 collégiens parisiens, issus de tous les arrondissements. Le recrutement se fera sur motivation et les instruments seront fournis.", candidateId: "dati" },
  { id: 20, theme: "Culture et loisirs", text: "Mettre fin à la mainmise d’entreprises et d’acteurs privés sur le patrimoine culturel parisien, comme LVMH", candidateId: "chikirou" },
  { id: 21, theme: "Culture et loisirs", text: "Je créerai une « villa Médicis » du design sur le site de l’ex-Mairie du 1er arrondissement, qui intégrera des événements culturels ouverts le soir à tous les Parisiens.", candidateId: "dati" },
  { id: 22, theme: "Culture et loisirs", text: "Déclarer les librairies indépendantes « commerce essentiel » et les soutenir contre la pression immobilière, la concurrence du e-commerce international et les menaces à la liberté d’expression", candidateId: "chikirou" },
  { id: 23, theme: "Culture et loisirs", text: "Soutenir les cinémas indépendants parisiens et agir contre des fermetures en mobilisant des leviers tels que la transformation en SCIC (coopérative d’intérêt collectif) voire la municipalisation", candidateId: "chikirou" },
  { id: 24, theme: "Culture et loisirs", text: "Créer un fonds de garantie pour les loyers des artistes non salariés", candidateId: "chikirou" },
  { id: 25, theme: "Culture et loisirs", text: "Favoriser la gratuité et la tarification sociale des équipements culturels avec une politique de médiation ambitieuse pour sensibiliser celles et ceux qui en sont éloignés", candidateId: "chikirou" },
  { id: 26, theme: "Culture et loisirs", text: "Créer et soutenir les lieux d’éducation populaire et de pratiques artistiques, comme les Centres Paris Anim’, la Maison des Pratiques Artistiques Amateurs et les Maisons des Jeunes et de la Culture", candidateId: "chikirou" },
  { id: 27, theme: "Culture et loisirs", text: "Permettre à toutes et tous d’accéder à un enseignement et à une pratique artistiques en développant les conservatoires : augmentation des places pour mettre fin au tirage au sort, renforcement de la tarification sociale, prêt de matériel et élargissement des disciplines enseignées", candidateId: "chikirou" },
  { id: 28, theme: "Culture et loisirs", text: "Étendre les horaires des bibliothèques et des musées municipaux", candidateId: "gregoire" },
  { id: 29, theme: "Culture et loisirs", text: "Carte de bibliothèque automatique pour tous les enfants et adolescents parisiens", candidateId: "gregoire" },
  { id: 30, theme: "Culture et loisirs", text: "Créer une Maison des Arts et des Cultures Féministes", candidateId: "gregoire" },
  { id: 31, theme: "Culture et loisirs", text: "Tarifs réduits dans les grands musées nationaux pour tous les Parisiens en négociant avec l'État", candidateId: "gregoire" },
  { id: 32, theme: "Culture et loisirs", text: "Garantir des loyers adaptés et un fonds de soutien aux librairies, cinémas et commerces culturels indépendants", candidateId: "gregoire" },
  { id: 33, theme: "Culture et loisirs", text: "Installer des artistes en résidence dans tous les quartiers, priorité aux quartiers populaires", candidateId: "gregoire" },
  { id: 34, theme: "Culture et loisirs", text: "Faire de Paris la capitale mondiale du E-Sport", candidateId: "gregoire" },
  { id: 35, theme: "Culture et loisirs", text: "Créer un réseau des Maisons des Pratiques Artistiques Amateurs métropolitaines, pour développer la pratique amateur et la soutenir à l'échelle du Grand Paris", candidateId: "gregoire" },
  { id: 36, theme: "Culture et loisirs", text: "Créer Paris Culture, un portail et une application répertoriant les offres des institutions culturelles parisiennes à prix négociés et adaptés pour tous les publics", candidateId: "gregoire" },
  { id: 37, theme: "Culture et loisirs", text: "Aménager un grand parc dédié à la culture et à l'art dans l'espace public allant des Champs-Elysées aux Tuileries en passant par la Concorde", candidateId: "gregoire" },
  { id: 38, theme: "Culture et loisirs", text: "Réserver un jour par an la Tour Eiffel aux visites des écoliers parisiens et franciliens", candidateId: "gregoire" },
  { id: 39, theme: "Culture et loisirs", text: "Développer un réseau d'ateliers, de lieux de répétition et de création", candidateId: "gregoire" },
  { id: 40, theme: "Culture et loisirs", text: "Soutenir la diversité culturelle, notamment à travers un accompagnement renforcé de la culture hip-hop à l'échelle du Grand Paris pour les artistes, les associations et les projets d'éducation populaire", candidateId: "gregoire" },
  { id: 41, theme: "Culture et loisirs", text: "Créer un grand rendez-vous international de l'image, des arts numériques et des jeux vidéo, mêlant salons professionnels et événements festifs et gratuits partout dans Paris", candidateId: "gregoire" },
  { id: 42, theme: "Culture et loisirs", text: "Organiser chaque année un grand festival culturel des Portes de Paris", candidateId: "gregoire" },
  { id: 43, theme: "Culture et loisirs", text: "Favoriser l'accessibilité des lieux festifs au plus grand nombre en travaillant avec les établissements et les festivals pour faire du Grand Paris une référence en matière de fête populaire et inclusive", candidateId: "gregoire" },
  { id: 44, theme: "Culture et loisirs", text: "Restaurer le patrimoine historique de Paris et recentrer le budget culture sur le patrimoine", candidateId: "mariani" },
  { id: 45, theme: "Culture et loisirs", text: "Ouvrir les musées municipaux en nocturne deux soirs par semaine et les bibliothèques le dimanche", candidateId: "knafo" },
  { id: 46, theme: "Culture et loisirs", text: "Consacrer 300 millions d'euros à la restauration des églises parisiennes sur le mandat", candidateId: "knafo" },
  { id: 47, theme: "Culture et loisirs", text: "Proposer des cours de musique collectifs sans concours ni prérequis dans tous les conservatoires", candidateId: "knafo" },

  // === DÉFENSE DES DROITS ===
  { id: 48, theme: "Défense des droits", text: "Organiser, en lien avec l'UNESCO, une semaine internationale de l'éducation, qui fédérera chaque année à Paris l'ensemble des acteurs de l'éducation autour de conférences, rencontres professionnelles et événements ouverts au public", candidateId: "gregoire" },
  { id: 49, theme: "Défense des droits", text: "Soutenir la liberté de la presse en accueillant et protégeant les journalistes exilés", candidateId: "gregoire" },
  { id: 50, theme: "Défense des droits", text: "Créer un Prix international de la Ville de Paris pour la défense des droits humains", candidateId: "gregoire" },
  { id: 51, theme: "Défense des droits", text: "Soutenir activement les associations et la pluralité des lieux LGBTQIA+ dans tous les arrondissements", candidateId: "gregoire" },
  { id: 52, theme: "Défense des droits", text: "Créer des lieux refuges LGBTQIA+ jeunes: des espaces sûrs dans les centres d'animation pour écouter, protéger et accompagner les jeunes face aux violences et aux discriminations", candidateId: "gregoire" },
  { id: 53, theme: "Défense des droits", text: "Assurer une égalité d'accès réelle aux services publics pour les familles LGBTQIA+, en prenant notamment mieux en compte les réalités des familles trans et homoparentales et en simplifiant et accélérant les démarches de changement d'état civil", candidateId: "gregoire" },
  { id: 54, theme: "Défense des droits", text: "Accompagner les LGBTQIA+ séniors, en garantissant des services séniors inclusifs, avec formation des professionnels et labellisation des établissements, pour permettre aux aînés de vieillir dignement sans renoncer à leur identité.", candidateId: "gregoire" },
  { id: 55, theme: "Défense des droits", text: "Protéger les femmes victimes de violences: création de nouvelles Maisons des femmes permettant une prise en charge médicale, psychologique, sociale et juridique 24h sur 24, et d'hébergements d'urgence disponibles dans tous les arrondissements", candidateId: "gregoire" },
  { id: 56, theme: "Défense des droits", text: "Déployer un plan « IVG sans entrave », pour défendre et garantir le droit à l'avortement", candidateId: "gregoire" },
  { id: 57, theme: "Défense des droits", text: "Mettre en place une expérimentation sur le récépissé de contrôle d'identité pour lutter contre les discriminations, en lien avec la Préfecture de Police.", candidateId: "gregoire" },
  { id: 58, theme: "Défense des droits", text: "Généraliser les « lieux refuges » dans tous les événements organisés à Paris (espaces permettant d'accueillir les personnes se sentant exposées à des comportements violents et/ou discriminants).", candidateId: "gregoire" },

  // === ECONOMIE LOCALE & COMMERCES ===
  { id: 59, theme: "Economie locale & commerces", text: "Je veux un choc de simplification dans toutes les relations entre les commerces et entreprises et la Ville de Paris. J’instaurerai des démarches allégées et plus rapides. Le principe du « dites-le-nous une fois » sera généralisé : un seul dossier, partagé entre services, sans demande inutile de justificatifs.", candidateId: "dati" },
  { id: 60, theme: "Economie locale & commerces", text: "Je mettrai en place l’obligation de réaliser une étude d’impact sur le commerce à l’occasion de chaque grand projet d’aménagement urbain, car un simple changement de circulation peut avoir des effets délétères sur le commerce.", candidateId: "dati" },
  { id: 61, theme: "Economie locale & commerces", text: "Je mettrai en place des marchés commerçants éphémères (soirées, week-ends) pour mettre en valeur les commerces de quartier et l’artisanat local.", candidateId: "dati" },
  { id: 62, theme: "Economie locale & commerces", text: "Encadrement des loyers commerciaux pour lutter contre la spéculation via la foncière Paris Commerces", candidateId: "gregoire" },
  { id: 63, theme: "Economie locale & commerces", text: "Instaurer un Small Business Act : 50% de la commande publique orientée vers les PME et l'ESS", candidateId: "gregoire" },
  { id: 64, theme: "Economie locale & commerces", text: "Guichet numérique unique pour faciliter toutes les démarches des commerçants", candidateId: "gregoire" },
  { id: 65, theme: "Economie locale & commerces", text: "Ressourcerie solidaire et ateliers de réparation dans chaque quartier", candidateId: "gregoire" },
  { id: 66, theme: "Economie locale & commerces", text: "Soutien à la diversité commerciale, aux marchés alimentaires, à l'artisanat et à l'économie sociale et solidaire grâce à l'animation des quartiers (événements locaux, illuminations de Noël…)", candidateId: "gregoire" },
  { id: 67, theme: "Economie locale & commerces", text: "Création d'un fonds participatif pour permettre aux Parisiennes et aux Parisiens de mettre leur épargne au service des commerces de quartier, avec une sécurisation par la Ville", candidateId: "gregoire" },
  { id: 68, theme: "Economie locale & commerces", text: "Un service de collecte des déchets alimentaires et des cartons proposé aux petits commerces, plus compétitif que les tarifs élevés des prestataires privés", candidateId: "gregoire" },
  { id: 69, theme: "Economie locale & commerces", text: "Une grande braderie parisienne solidaire et festive chaque année pour faire vivre nos quartiers en favorisant l'économie circulaire", candidateId: "gregoire" },
  { id: 70, theme: "Economie locale & commerces", text: "Piloter une stratégie de développement économique avec les professionnels rassemblés en comités de filière (immobilier et foncier, emploi, innovation…)", candidateId: "gregoire" },
  { id: 71, theme: "Economie locale & commerces", text: "Créer un « Pacte de Responsabilité Territoriale des Entreprises » pour mobiliser toutes les entreprises du territoire parisien, petites et grandes, en faveur d'objectifs d'intérêt général: formation et insertion professionnelle, partage de données et de connaissances, co-financement de projets…", candidateId: "gregoire" },
  { id: 72, theme: "Economie locale & commerces", text: "Développer les liens avec des territoires partenaires pour structurer des filières d'approvisionnement en circuit court.", candidateId: "gregoire" },
  { id: 73, theme: "Economie locale & commerces", text: "Soutenir les artisans et commerçants parisiens avec des allègements fiscaux", candidateId: "mariani" },
  { id: 74, theme: "Economie locale & commerces", text: "Privilégier les PME et TPE locales dans les marchés publics municipaux", candidateId: "mariani" },
  { id: 75, theme: "Economie locale & commerces", text: "Promouvoir le Made in France et les produits locaux dans les cantines et marchés publics", candidateId: "mariani" },
  { id: 76, theme: "Economie locale & commerces", text: "Interdire les licenciements et augmenter tous les salaires d'au moins 400 euros par mois", candidateId: "npa" },
  { id: 77, theme: "Economie locale & commerces", text: "Mettre fin à la sous-traitance et titulariser tous les travailleurs précaires (contractuels, sous-traitants)", candidateId: "npa" },
  { id: 78, theme: "Economie locale & commerces", text: "Partager le temps de travail entre tous pour éliminer le chômage", candidateId: "npa" },
  { id: 79, theme: "Economie locale & commerces", text: "Embaucher et titulariser tous les agents municipaux (ATSEM, jardiniers, bibliothécaires, animateurs)", candidateId: "npa" },
  { id: 80, theme: "Economie locale & commerces", text: "Arrêter les dérogations au repos dominical", candidateId: "npa" },
  { id: 81, theme: "Economie locale & commerces", text: "Lancer un programme « 1 000 commerces » pour revitaliser les rues commerçantes de Paris", candidateId: "mariani" },

  // === EDUCATION ===
  { id: 82, theme: "Education", text: "Renforcer les moyens des écoles et des collèges publics", candidateId: "chikirou" },
  { id: 83, theme: "Education", text: "Plan 100 % écoles rénovées et accessibles d’ici 2032", candidateId: "bournazel" },
  { id: 84, theme: "Education", text: "Instaurer la gratuité de la cantine pour les trois premières tranches du quotient familial et rendre plus progressifs les tarifs suivants", candidateId: "chikirou" },
  { id: 85, theme: "Education", text: "Dès l’été 2026, je ferai adopter un budget rectificatif pour 2026 pour doubler les investissements annuels dans l’Ecole publique, ainsi qu’un fonds d’urgence de 200 millions d’euros pour les rénovations les plus prioritaires financé par la réallocation de crédits existants et des économies.", candidateId: "bournazel" },
  { id: 86, theme: "Education", text: "Adapter 100 % des collèges et écoles publics aux défis sanitaires et climatiques", candidateId: "chikirou" },
  { id: 87, theme: "Education", text: "Mettre en place un vrai service minimum dans les écoles les jours de grève", candidateId: "bournazel" },
  { id: 88, theme: "Education", text: "Garantir une ATSEM par classe en maternelle", candidateId: "chikirou" },
  { id: 89, theme: "Education", text: "Éveiller les enfants au codage et à l’intelligence artificielle dès l’école primaire", candidateId: "bournazel" },
  { id: 90, theme: "Education", text: "Former les animateurs et intervenants sur le temps périscolaire et extrascolaire à la prévention contre les violences éducatives", candidateId: "chikirou" },
  { id: 91, theme: "Education", text: "Faire démarrer les cours au collège à 9h pour respecter le sommeil des adolescents et y faire respecter l’interdiction des smartphones", candidateId: "bournazel" },
  { id: 92, theme: "Education", text: "Aller vers la gratuité de l’école publique à Paris (fournitures, sorties scolaires, goûters, périscolaire)", candidateId: "chikirou" },
  { id: 93, theme: "Education", text: "Défendre l'école publique en luttant contre les fermetures de classe imposées par l'État", candidateId: "gregoire" },
  { id: 94, theme: "Education", text: "Moduler les dotations financières aux établissements privés en fonction de critères de mixité sociale", candidateId: "gregoire" },
  { id: 95, theme: "Education", text: "Exiger de l'État un véritable statut pour les AESH et des moyens à la hauteur de l'inclusion", candidateId: "gregoire" },
  { id: 96, theme: "Education", text: "Ouvrir 50 nouvelles unités d'enseignement adaptées pour les enfants en situation de handicap", candidateId: "gregoire" },
  { id: 97, theme: "Education", text: "Soulager le budget des familles grâce au gel des tarifs de cantine et à la gratuité progressive", candidateId: "gregoire" },
  { id: 98, theme: "Education", text: "Mettre en œuvre un grand plan de rénovation et de végétalisation des écoles parisiennes", candidateId: "gregoire" },
  { id: 99, theme: "Education", text: "Lutter contre les inégalités scolaires dans les quartiers populaires en défendant l'excellence de nos écoles publiques et en mettant en place un accompagnement renforcé pour les élèves qui en ont besoin.", candidateId: "gregoire" },
  { id: 100, theme: "Education", text: "Servir uniquement des produits issus de l'agriculture française dans les cantines scolaires", candidateId: "knafo" },
  { id: 101, theme: "Education", text: "Instaurer l'uniforme scolaire dès l'école primaire", candidateId: "mariani" },
  { id: 102, theme: "Education", text: "S'opposer aux fermetures de classes et aux suppressions de postes dans l'Éducation nationale, exiger le remplacement systématique des enseignants absents", candidateId: "npa" },
  { id: 103, theme: "Education", text: "Nommer un chef étoilé pour refondre les cantines scolaires avec des recettes à base de produits frais français", candidateId: "knafo" },
  { id: 104, theme: "Education", text: "Garantir un service minimum d'accueil dans les crèches, écoles et cantines les jours de grève", candidateId: "mariani" },
  { id: 105, theme: "Education", text: "Créer 100 centres de soutien scolaire gratuits dans les quartiers de Paris", candidateId: "mariani" },

  // === ESPACES VERTS, VÉGÉTALISATION & BIODIVERSITÉ ===
  { id: 106, theme: "Espaces verts, végétalisation & biodiversité", text: "J’établirai un principe de préservation des 200 000 arbres de Paris et des 300 000 arbres de nos bois avec une méthode simple : sauf exception publiquement motivée, aucun arbre mature ne sera abattu si son état phytosanitaire est bon.", candidateId: "dati" },
  { id: 107, theme: "Espaces verts, végétalisation & biodiversité", text: "Désimperméabiliser et végétaliser 40 % du territoire parisien à horizon 2032", candidateId: "chikirou" },
  { id: 108, theme: "Espaces verts, végétalisation & biodiversité", text: "Lancer un bouclier anti-bruit pour Paris je déploierai 300 capteurs acoustiques de type « Méduses », installerai 50 nouveaux radars anti-nuisances sonores ces deux premiers dispositifs utiles et concrets pour les Parisiens sera entièrement financée (environ 2,5 M€) par la seule suppression du magazine papier de la Ville « À Paris », qui coûte 2,7 millions d’euros par mandat aux contribuables et que personne ne lit.", candidateId: "bournazel" },
  { id: 109, theme: "Espaces verts, végétalisation & biodiversité", text: "Je créerai 500 nouvelles bandes végétalisées à Paris. Les nouvelles plantations seront là pour durer avec des opérations d’arrosage, de désherbage et de soins ciblées.", candidateId: "dati" },
  { id: 110, theme: "Espaces verts, végétalisation & biodiversité", text: "Mettre en place une règle verte municipale : plus aucun mètre carré de pleine terre ne pourra être artificialisé", candidateId: "chikirou" },
  { id: 111, theme: "Espaces verts, végétalisation & biodiversité", text: "je demanderai au législateur une évolution des compétences pour Paris afin de permettre à la Ville d’intervenir rapidement sur l’ensemble des nuisances sonores", candidateId: "bournazel" },
  { id: 112, theme: "Espaces verts, végétalisation & biodiversité", text: "Je débitumerai Paris pour créer des îlots de fraîcheur et lutter contre le risque d’inondation.", candidateId: "dati" },
  { id: 113, theme: "Espaces verts, végétalisation & biodiversité", text: "Protéger et enrichir le patrimoine naturel parisien : sanctuariser les arbres existants (sauf maladie ou risque majeur) et diversifier les essences", candidateId: "chikirou" },
  { id: 114, theme: "Espaces verts, végétalisation & biodiversité", text: "je déploierai 1 000 rues apaisées, avec de nouveaux bitumes anti-bruit et anti-îlots de chaleur,", candidateId: "bournazel" },
  { id: 115, theme: "Espaces verts, végétalisation & biodiversité", text: "Je mènerai des projets de réaménagement, comme par exemple place de la République ou avenue de la Grande Armée, privilégiant les parterres végétalisés, les pavés enherbés et revêtements infiltrants.", candidateId: "dati" },
  { id: 116, theme: "Espaces verts, végétalisation & biodiversité", text: "Renforcer le plan canicule : systématiser les exercices de prévention des fortes chaleurs et ouvrir des lieux d’accueil dès le niveau 2", candidateId: "chikirou" },
  { id: 117, theme: "Espaces verts, végétalisation & biodiversité", text: "je piétonniserai toutes les rues des 626 écoles", candidateId: "bournazel" },
  { id: 118, theme: "Espaces verts, végétalisation & biodiversité", text: "J’instaurerai dès la première année de mandat un plan « grand chaud » pour rafraîchir les sites accueillant des publics fragiles via le raccordement au réseau Fraîcheur de Paris et des dispositifs tels que des volets, stores, végétalisation des toits et façades.", candidateId: "dati" },
  { id: 119, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la végétalisation citoyenne en augmentant le nombre de jardins partagés, en élargissant l’octroi de permis de débitumisation aux collectifs d’habitants et en développant la végétalisation des toitures", candidateId: "chikirou" },
  { id: 120, theme: "Espaces verts, végétalisation & biodiversité", text: "Les horaires de chantier seront rendus compatibles avec la vie des riverains ; dispositif spécifique d’aide à l’insonorisation des bars, restaurants et établissements festifs, opéré via la SEM Paris Commerces.", candidateId: "bournazel" },
  { id: 121, theme: "Espaces verts, végétalisation & biodiversité", text: "Généraliser les cours oasis dans les écoles et les collèges parisiens et à leurs abords afin d’atteindre l’objectif de 100 % d’établissements dotés de cours oasis à horizon 2040", candidateId: "chikirou" },
  { id: 122, theme: "Espaces verts, végétalisation & biodiversité", text: "J’interdirai également les cars de tourisme non électriques dans Paris", candidateId: "bournazel" },
  { id: 123, theme: "Espaces verts, végétalisation & biodiversité", text: "Pour lutter contre la pollution sonore, je donnerai aux maires d’arrondissement un vrai pouvoir de police locale pour mieux encadrer les établissements festifs et les débits de boisson. Je systématiserai la pose de revêtements phoniques pour les artères les plus fréquentées y compris sur le boulevard périphérique.", candidateId: "dati" },
  { id: 124, theme: "Espaces verts, végétalisation & biodiversité", text: "Soutenir les collectifs s’opposant à l’artificialisation des sols dans le cadre de projets inutiles à Paris et en Île-de-France (triangle de Gonesse, Jardin d’Aubervilliers, Plateau de Saclay, etc.)", candidateId: "chikirou" },
  { id: 125, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la couverture du périphérique : opérations autour des portes d’Orléans, de Brancion, de la Chapelle, d’Aubervilliers, de Saint-Cloud et des Lilas.", candidateId: "bournazel" },
  { id: 126, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la renaturation en végétalisant en priorité les îlots de chaleur urbains (places fortement minéralisées comme l’Opéra ou République, quartiers les moins dotés)", candidateId: "chikirou" },
  { id: 127, theme: "Espaces verts, végétalisation & biodiversité", text: "Engager une renaturation massive, créer de grands espaces verts et ouvrir au public des espaces verts aujourd’hui fermés, afin de produire plus de 300 hectares d’espaces verts accessibles et d’atteindre 10 m² d’espaces verts par habitant, conformément aux recommandations de l’Organisation mondiale de la santé", candidateId: "chikirou" },
  { id: 128, theme: "Espaces verts, végétalisation & biodiversité", text: "Renforcer les moyens humains et la maîtrise publique de la Direction des Espaces verts et de l’Environnement en mettant fin à l’externalisation (sauf exception pour certaines structures d’insertion par l’activité économique) et en augmentant les recrutements", candidateId: "chikirou" },
  { id: 129, theme: "Espaces verts, végétalisation & biodiversité", text: "Fixer un objectif de « zéro dégradation nette » des sols forestiers, avec un plan anti-tassement et la restauration des zones déjà dégradées", candidateId: "chikirou" },
  { id: 130, theme: "Espaces verts, végétalisation & biodiversité", text: "Décréter un moratoire immédiat sur les coupes rases et engager une transition vers une sylviculture irrégulière à couvert continu, c’est-à-dire qui privilégie la régénération naturelle et des interventions plus diffuses, moins destructrices pour les sols et le microclimat", candidateId: "chikirou" },
  { id: 131, theme: "Espaces verts, végétalisation & biodiversité", text: "Faire réellement appliquer la charte en faveur du bien-être animal et produire un bilan annuel public de sa mise en œuvre", candidateId: "chikirou" },
  { id: 132, theme: "Espaces verts, végétalisation & biodiversité", text: "Créer une régie agricole publique parisienne ou intercommunale digne de ce nom, chargée de développer des sites de production et de contractualiser des débouchés solidaires et durables", candidateId: "chikirou" },
  { id: 133, theme: "Espaces verts, végétalisation & biodiversité", text: "Encadrer strictement les événements se tenant dans les bois, via une charte exigeante et des contrôles effectifs", candidateId: "chikirou" },
  { id: 134, theme: "Espaces verts, végétalisation & biodiversité", text: "Amplifier et accélérer les programmes d’ouverture partielle et de renaturation de la Bièvre et du canal Saint-Martin", candidateId: "chikirou" },
  { id: 135, theme: "Espaces verts, végétalisation & biodiversité", text: "25 km de promenade continue et végétalisée le long des berges de Seine, rive gauche et rive droite", candidateId: "gregoire" },
  { id: 136, theme: "Espaces verts, végétalisation & biodiversité", text: "Poursuite de l'ouverture de la Petite Ceinture avec 10 km supplémentaires de promenade", candidateId: "gregoire" },
  { id: 137, theme: "Espaces verts, végétalisation & biodiversité", text: "300 nouveaux hectares de jardins ouverts au public avec horaires étendus toute l'année", candidateId: "gregoire" },
  { id: 138, theme: "Espaces verts, végétalisation & biodiversité", text: "10 nouveaux parcs à la place de voies de circulation sur certains boulevards parisiens", candidateId: "gregoire" },
  { id: 139, theme: "Espaces verts, végétalisation & biodiversité", text: "Objectif au moins un trottoir ombragé dans chaque rue pour anticiper les canicules", candidateId: "gregoire" },
  { id: 140, theme: "Espaces verts, végétalisation & biodiversité", text: "Plan de protection des oiseaux et de la biodiversité lors des rénovations d'immeubles", candidateId: "gregoire" },
  { id: 141, theme: "Espaces verts, végétalisation & biodiversité", text: "Transformation du périphérique en boulevard urbain relié par une grande ceinture verte", candidateId: "gregoire" },
  { id: 142, theme: "Espaces verts, végétalisation & biodiversité", text: "Transformation des places de la République, du Trocadéro, de la Concorde, d'Italie, de la Bataille de Stalingrad et Gambetta, cœurs battants de leurs quartiers comme des grands événements de la vie parisienne", candidateId: "gregoire" },
  { id: 143, theme: "Espaces verts, végétalisation & biodiversité", text: "Renaissance de la Bièvre et poursuite de la coulée verte le long de son tracé", candidateId: "gregoire" },
  { id: 144, theme: "Espaces verts, végétalisation & biodiversité", text: "Transformer le Parc des Princes et la Porte de Saint-Cloud en un quartier de vie ouvert, vert et populaire, avec un stade agrandi, des équipements sportifs de proximité, un espace muséographique et un cadre de vie apaisé: végétalisation massive des abords du Parc et couverture partielle du périphérique pour créer un grand espace métropolitain", candidateId: "gregoire" },
  { id: 145, theme: "Espaces verts, végétalisation & biodiversité", text: "Embellir les parcs et jardins en replantant des fleurs", candidateId: "knafo" },
  { id: 146, theme: "Espaces verts, végétalisation & biodiversité", text: "Rendre tous les espaces verts accessibles aux chiens tenus en laisse (sauf aires de jeux enfants)", candidateId: "knafo" },
  { id: 147, theme: "Espaces verts, végétalisation & biodiversité", text: "Planter 50 000 arbres supplémentaires à Paris", candidateId: "mariani" },

  // === FINANCE ET GESTION BUDGÉTAIRE ===
  { id: 148, theme: "Finance et gestion budgétaire", text: "Dès ma première année, je reprendrai en main la gestion de l’Hôtel de Ville, dans son organisation et par une revue de toutes les dépenses et par la mise en place de dispositifs de contrôle interne et d’évaluation de la performance.", candidateId: "dati" },
  { id: 149, theme: "Finance et gestion budgétaire", text: "Porter progressivement à 15 % la part du budget d’investissement de la Ville de Paris réellement consacrée au budget participatif, en excluant explicitement les investissements obligatoires ou déjà programmés (écoles, bâtiments municipaux, mises aux normes)", candidateId: "chikirou" },
  { id: 150, theme: "Finance et gestion budgétaire", text: "je diviserai par deux la dette des Parisiens au cours du prochain mandat d’ici 2032, je veux que Paris soit une ville autofinancée pour ne plus être soumise à l’incertitude des marchés Je conduirai ce plan avec 100 % d’économies et zéro hausse d’impôt", candidateId: "bournazel" },
  { id: 151, theme: "Finance et gestion budgétaire", text: "Je rétablirai les 35h réelles et lutterai contre l’absentéisme dans les services municipaux.", candidateId: "dati" },
  { id: 152, theme: "Finance et gestion budgétaire", text: "Publier chaque année un rapport accessible à tous les Parisiens sur l’état de la dette, sa composition, son coût et son évolution", candidateId: "chikirou" },
  { id: 153, theme: "Finance et gestion budgétaire", text: "Je mènerai une opération « mains propres » pour assainir et moraliser la gestion de la Ville", candidateId: "bournazel" },
  { id: 154, theme: "Finance et gestion budgétaire", text: "Je mettrai fin aux 250 millions dépensés chaque année en préemptions pour faire du logement social à un coût exorbitant. J’établirai immédiatement un moratoire sur les projets d’aménagement coûteux et contestés par les riverains.", candidateId: "dati" },
  { id: 155, theme: "Finance et gestion budgétaire", text: "Exiger une compensation équitable de l’État pour les charges spécifiques de Paris en tant que capitale (cérémonies nationales, entretien d’un patrimoine mondial, accueil touristique, services rendus aux usagers franciliens, prêt gratuit de bâtiments municipaux comme par exemple l’Université de la Sorbonne)", candidateId: "chikirou" },
  { id: 156, theme: "Finance et gestion budgétaire", text: "Faire respecter les 35h – seul un tiers des agents de la Ville est vraiment aux 35h et 270 agents sont même aux 31,5h –, soit environ 2 000 ETP regagnés pour renforcer les effectifs sur le terrain comme la police municipale", candidateId: "bournazel" },
  { id: 157, theme: "Finance et gestion budgétaire", text: "Je lancerai un contrôle de toutes les subventions, avec pour objet d’en réduire le volume en les recentrant sur les priorités locales et en supprimant les subventions militantes ou sans lien avec les Parisiens.", candidateId: "dati" },
  { id: 158, theme: "Finance et gestion budgétaire", text: "Réaliser un audit complet des contrats de concessions, délégations de service public et marchés publics de long terme conclus avec des opérateurs privés par les majorités précédentes afin d’établir un plan de retour en gestion publique ou non lucrative", candidateId: "chikirou" },
  { id: 159, theme: "Finance et gestion budgétaire", text: "120 millions d’économies par l’encadrement des frais de mandat, la division par deux du nombre de collaborateurs de cabinet et d’adjoints au Maire, la fin des jetons de présence, des logements de fonction et des véhicules de fonction avec chauffeurs", candidateId: "bournazel" },
  { id: 160, theme: "Finance et gestion budgétaire", text: "Je réduirai le train de vie de la mairie, notamment les dépenses des cabinets d’élus et de communication et je contrôlerai strictement les notes de frais comme les déplacements des élus.", candidateId: "dati" },
  { id: 161, theme: "Finance et gestion budgétaire", text: "Agir pour que l’État laisse à la Ville la liberté d’augmenter davantage le taux de la taxe d’habitation sur les résidences secondaires et de la taxe sur les logements vacants, afin de dégager des recettes supplémentaires et de mettre en place une fiscalité comportementale en faveur du logement pour les Parisiens", candidateId: "chikirou" },
  { id: 162, theme: "Finance et gestion budgétaire", text: "Plan de lutte contre la fraude au RSA en coopération avec la CAF de Paris : 90 millions d’économies", candidateId: "bournazel" },
  { id: 163, theme: "Finance et gestion budgétaire", text: "Je m’engage à la stabilité de la taxe foncière et des autres impôts locaux.", candidateId: "dati" },
  { id: 164, theme: "Finance et gestion budgétaire", text: "Refuser toute logique d’austérité et de réduction des dépenses publiques au détriment des Parisiens", candidateId: "chikirou" },
  { id: 165, theme: "Finance et gestion budgétaire", text: "Externalisation de la propreté : 740 millions d’économies Baisse des subventions : 350 millions d’économies Baisse de l’absentéisme : 190 millions d’économies", candidateId: "bournazel" },
  { id: 166, theme: "Finance et gestion budgétaire", text: "La masse salariale sera réduite par le non-remplacement ciblé des départs : les efforts seront mis sur les missions prioritaires, comme la propreté, la sécurité ou la petite enfance.", candidateId: "dati" },
  { id: 167, theme: "Finance et gestion budgétaire", text: "Réaliser un audit des surcoûts sur un échantillon représentatif de fournitures courantes en comparant les prix des marchés publics avec les prix pratiqués dans le commerce", candidateId: "chikirou" },
  { id: 168, theme: "Finance et gestion budgétaire", text: "je propose que les bailleurs sociaux parisiens vendent les 20 000 logements qu’ils détiennent hors de Paris. Cela représentera une recette de l’ordre de 3 milliards d’euros.", candidateId: "bournazel" },
  { id: 169, theme: "Finance et gestion budgétaire", text: "Plan d'économies de 10 milliards d'euros sur 10 ans sur la gestion municipale", candidateId: "knafo" },
  { id: 170, theme: "Finance et gestion budgétaire", text: "Diviser la taxe foncière par deux dès le premier budget", candidateId: "knafo" },
  { id: 171, theme: "Finance et gestion budgétaire", text: "Diviser par deux la taxe d'enlèvement des ordures ménagères et la taxe de balayage", candidateId: "knafo" },
  { id: 172, theme: "Finance et gestion budgétaire", text: "Réduire de moitié les effectifs municipaux sur 10 ans (55 000 agents) en ne remplaçant pas les départs naturels", candidateId: "knafo" },
  { id: 173, theme: "Finance et gestion budgétaire", text: "Plan massif d'économies et de réduction de la dette municipale", candidateId: "mariani" },
  { id: 174, theme: "Finance et gestion budgétaire", text: "S'opposer à toute augmentation des taux d'imposition locale pendant toute la durée du mandat", candidateId: "mariani" },
  { id: 175, theme: "Finance et gestion budgétaire", text: "Confier le contrôle de la bonne gestion à une association de défense des contribuables", candidateId: "mariani" },
  { id: 176, theme: "Finance et gestion budgétaire", text: "Encadrer les frais de réception de la Ville pour éviter les abus", candidateId: "mariani" },
  { id: 177, theme: "Finance et gestion budgétaire", text: "Mettre en place une taxation sur les entreprises et ménages fortunés pour financer les services publics", candidateId: "npa" },
  { id: 178, theme: "Finance et gestion budgétaire", text: "S'opposer à la hausse du budget militaire et rediriger les dépenses vers la santé, l'éducation et les services publics", candidateId: "npa" },
  { id: 179, theme: "Finance et gestion budgétaire", text: "Supprimer plus de 100 millions d'euros par an de subventions aux associations politisées et militantes", candidateId: "knafo" },
  { id: 180, theme: "Finance et gestion budgétaire", text: "Réduire le nombre d'adjoints au maire à 10 et diviser par cinq le cabinet du maire", candidateId: "knafo" },

  // === IMMIGRATION ===
  { id: 181, theme: "Immigration", text: "Interdire toute occupation illégale de gymnases ou lieux publics par des personnes en situation irrégulière", candidateId: "knafo" },
  { id: 182, theme: "Immigration", text: "Fermer le centre d'hébergement de migrants du Bois de Boulogne", candidateId: "knafo" },
  { id: 183, theme: "Immigration", text: "Auditer les 99 centres de migrants parisiens gérés par des associations et financés par le contribuable", candidateId: "knafo" },
  { id: 184, theme: "Immigration", text: "Créer une brigade anti-campements clandestins pour démanteler les camps illicites", candidateId: "mariani" },
  { id: 185, theme: "Immigration", text: "Refuser l'immigration de masse et mettre fin aux occupations et réquisitions pour les migrants en situation irrégulière", candidateId: "mariani" },

  // === JEUNESSE ===
  { id: 186, theme: "Jeunesse", text: "Former systématiquement les agents municipaux et les forces de l’ordre municipales à la détection et à la prise en charge des victimes de VSS", candidateId: "chikirou" },
  { id: 187, theme: "Jeunesse", text: "Lancer un programme municipal de « Colos pour tous »", candidateId: "bournazel" },
  { id: 188, theme: "Jeunesse", text: "Porter la gratuité des transports pour tous les Parisiens de moins de 25 ans sans condition de ressources et sans avance de frais via un mécanisme municipal de prise en charge", candidateId: "chikirou" },
  { id: 189, theme: "Jeunesse", text: "Abaisser l’âge de participation à la vie politique à 16 ans en œuvrant pour la participation des jeunes à l’ensemble des votations et consultations citoyennes, et plaider au niveau national pour abaisser l’âge légal de vote à 16 ans", candidateId: "chikirou" },
  { id: 190, theme: "Jeunesse", text: "Réformer le Conseil Parisien de la Jeunesse pour en faire une instance réellement représentative, avec une composition fondée sur des quotas par arrondissement et un double mode d’entrée mêlant tirage au sort et associations jeunesse, dotée d’un budget autonome et d’un droit de saisine du Conseil de Paris", candidateId: "chikirou" },
  { id: 191, theme: "Jeunesse", text: "Expérimenter l’ouverture d’équipements publics en soirée (gymnases, Maisons de quartier, etc.)", candidateId: "chikirou" },
  { id: 192, theme: "Jeunesse", text: "Réserver au moins 5 % des nouvelles acquisitions ou constructions de logements sociaux par la ville et des logements gérés par la Régie publique de gestion locative1 aux étudiants parisiens, aux jeunes en formation ou en lycée professionnel", candidateId: "chikirou" },
  { id: 193, theme: "Jeunesse", text: "Mettre à disposition de manière pérenne des locaux municipaux pour les associations étudiantes, afin de garantir des lieux stables d’engagement et de solidarité, avec possibilité de stockage sécurisé de matériel", candidateId: "chikirou" },
  { id: 194, theme: "Jeunesse", text: "Créer des « Quartiers Jeunes » avec des espaces dédiés à la culture, au sport et à l'orientation", candidateId: "gregoire" },
  { id: 195, theme: "Jeunesse", text: "Développer le tutorat et le mentorat entre étudiants et collégiens ou lycéens", candidateId: "gregoire" },
  { id: 196, theme: "Jeunesse", text: "Augmenter l'offre de logements étudiants abordables avec la Ville et les bailleurs sociaux", candidateId: "gregoire" },
  { id: 197, theme: "Jeunesse", text: "Garantir un droit aux vacances pour tous les jeunes Parisiens avec des séjours aidés", candidateId: "gregoire" },
  { id: 198, theme: "Jeunesse", text: "10 nouvelles aires de jeux XXL avec rénovation des aires de jeux de quartier", candidateId: "gregoire" },
  { id: 199, theme: "Jeunesse", text: "Un Quartier Jeunes par arrondissement : accompagnement personnalisé, accès aux droits et à la santé", candidateId: "gregoire" },
  { id: 200, theme: "Jeunesse", text: "Des mini mobiliers urbains à hauteur d'enfant dans les rues aux écoles.", candidateId: "gregoire" },
  { id: 201, theme: "Jeunesse", text: "Pérenniser les Olympiades d'arrondissement et faire du sport une fête populaire toute l'année grâce à de grands jeux interscolaires", candidateId: "gregoire" },
  { id: 202, theme: "Jeunesse", text: "Créer une résidence étudiante pour les meilleurs étudiants de France et les apprentis", candidateId: "knafo" },

  // === LOGEMENT ===
  { id: 203, theme: "Logement", text: "Je remettrai le logement social au service de ceux qui font vivre Paris. Les travailleurs parisiens et essentiels (auxiliaires de puériculture, enseignants, personnels soignants, policiers) seront prioritaires, les critères d’attribution clairement redéfinis, et un rééquilibrage du parc sera assumé en faveur des familles et de la mixité sociale.", candidateId: "dati" },
  { id: 204, theme: "Logement", text: "Agir sur le marché privé de la location et de la propriété en créant les conditions pour une remise sur le marché de 80 000 biens retirés depuis 10 ans", candidateId: "chikirou" },
  { id: 205, theme: "Logement", text: "Proposer un pacte de confiance aux propriétaires Ce cadre reposera sur un fonds de garanties contre les impayés de loyers, les dégradations et de cautions solidaires apportées par la Municipalité pour la location de biens vacants à des travailleurs, jeunes actifs ou étudiants.", candidateId: "bournazel" },
  { id: 206, theme: "Logement", text: "Mettre en place une aide municipale directe au logement, ciblée sur les 50 000 foyers parisiens les plus vulnérables, cumulable avec les APL/ALS", candidateId: "chikirou" },
  { id: 207, theme: "Logement", text: "Je souhaite stabiliser à 25 % la part de logements sociaux à Paris ; j’instaurerai des baux limités dans le temps ; je fusionnerai les trois principaux bailleurs parisiens pour réaliser à terme 6 % d’économies structurelles", candidateId: "bournazel" },
  { id: 208, theme: "Logement", text: "je fixerai un critère prioritaire d’attribution aux Parisiens qui bossent", candidateId: "bournazel" },
  { id: 209, theme: "Logement", text: "Je donnerai un signal de confiance aux propriétaires pour les inciter à remettre leur bien sur le marché en location longue durée. J’assouplirai les plafonds d’encadrement des loyers lorsqu’un logement revient sur le marché de la location longue durée après une période de vacance.", candidateId: "dati" },
  { id: 210, theme: "Logement", text: "je propose qu’à Paris, la location Airbnb soit limitée à 30 jours dans l’année Je renforcerai par des outils d’intelligence artificielle et de webscrapping l’efficacité des contrôles", candidateId: "bournazel" },
  { id: 211, theme: "Logement", text: "Je ferai de la rénovation thermique du bâti le « chantier du siècle » parisien. J’assouplirai les plafonds d’encadrement des loyers pour les logements ayant fait l’objet d’une rénovation énergétique d’ampleur les faisant sortir des étiquettes F ou G (gain de 2 échelons). Je pose l’objectif de 10 000 logements rénovés thermiquement par an dans le logement social.", candidateId: "dati" },
  { id: 212, theme: "Logement", text: "Je propose de tripler le rythme actuel de rénovation des logements sociaux pour passer à 12 000 rénovations par an afin de rénover l’intégralité du parc social d’ici 10 ans ; Financer la rénovation de 90 000 passoires thermiques dans le logement privé ; Un fonds de 15 millions d’euros sera dédié à l’expérimentation d’un plan d’autonomie énergétique des copropriétés privées pour viser l’installation de milliers de panneaux photovoltaïques sur les toits parisiens.", candidateId: "bournazel" },
  { id: 213, theme: "Logement", text: "Je créerai également une plateforme dédiée permettant aux locataires de signaler anonymement les malfaçons ou problèmes d’entretien dans les résidences.", candidateId: "bournazel" },
  { id: 214, theme: "Logement", text: "Instaurer un bail étudiant parisien pour aider les jeunes à se loger ; Créer 3 nouveaux quartiers étudiants, avec 7 000 logements supplémentaires d’ici 2030", candidateId: "bournazel" },
  { id: 215, theme: "Logement", text: "Construire 60 000 nouveaux logements publics abordables sur le mandat", candidateId: "gregoire" },
  { id: 216, theme: "Logement", text: "Lutter contre la spéculation immobilière avec un encadrement renforcé des loyers", candidateId: "gregoire" },
  { id: 217, theme: "Logement", text: "Créer une brigade de protection du logement pour lutter contre les marchands de sommeil", candidateId: "gregoire" },
  { id: 218, theme: "Logement", text: "Proposer une assurance municipale contre les impayés de loyer pour rassurer les propriétaires", candidateId: "gregoire" },
  { id: 219, theme: "Logement", text: "Mettre en place une garantie municipale de loyer pour faciliter l'accès au logement", candidateId: "gregoire" },
  { id: 220, theme: "Logement", text: "Adapter les logements au vieillissement avec des aides à l'aménagement", candidateId: "gregoire" },
  { id: 221, theme: "Logement", text: "Créer un service inter-bailleurs d'intervention rapide pour les réparations urgentes", candidateId: "gregoire" },
  { id: 222, theme: "Logement", text: "Rénover 35 000 logements sociaux pour améliorer le confort et la performance énergétique", candidateId: "gregoire" },
  { id: 223, theme: "Logement", text: "Accompagner la rénovation de 200 000 logements privés avec des aides municipales", candidateId: "gregoire" },
  { id: 224, theme: "Logement", text: "Mise en sécurité climatique des bâtiments : plan volets et toits végétalisés protégés de la chaleur", candidateId: "gregoire" },
  { id: 225, theme: "Logement", text: "Rénover les grands ensembles de logements sociaux des quartiers populaires avec animation des rez-de-chaussée", candidateId: "gregoire" },
  { id: 226, theme: "Logement", text: "La lutte contre la spéculation, avec la taxation et la réquisition des logements restés vacants depuis plus de 5 ans, l'interdiction de nouvelles résidences secondaires et des meublés touristiques permanents de type Airbnb", candidateId: "gregoire" },
  { id: 227, theme: "Logement", text: "Une assurance habitation municipale accessible à toutes et à tous, incluant une protection contre les punaises de lit", candidateId: "gregoire" },
  { id: 228, theme: "Logement", text: "Supprimer l'encadrement des loyers", candidateId: "knafo" },
  { id: 229, theme: "Logement", text: "Moratoire sur la construction de logements sociaux et sur les préemptions foncières", candidateId: "knafo" },
  { id: 230, theme: "Logement", text: "Vendre des logements sociaux (HLM) avec priorité aux occupants actuels, exonérés de frais de notaire", candidateId: "knafo" },
  { id: 231, theme: "Logement", text: "Plan d'accession à la propriété pour les classes moyennes avec réduction des frais de notaire", candidateId: "knafo" },
  { id: 232, theme: "Logement", text: "Attribuer les logements sociaux via une plateforme en ligne transparente", candidateId: "knafo" },
  { id: 233, theme: "Logement", text: "Instaurer la priorité nationale pour l'accès au logement social, en privilégiant les familles et les travailleurs", candidateId: "mariani" },
  { id: 234, theme: "Logement", text: "Rénover massivement le parc de logements sociaux et privés", candidateId: "mariani" },
  { id: 235, theme: "Logement", text: "Proposer des aides au déménagement adapté pour les locataires, combinées à une réduction de loyer", candidateId: "mariani" },
  { id: 236, theme: "Logement", text: "Développer l'habitat intergénérationnel (étudiants-seniors) pour lutter contre l'isolement", candidateId: "mariani" },
  { id: 237, theme: "Logement", text: "Réquisitionner sans indemnité les logements et bureaux vacants pour les transformer en logements", candidateId: "npa" },
  { id: 238, theme: "Logement", text: "Arrêter toutes les expulsions locatives et d'hébergement", candidateId: "npa" },
  { id: 239, theme: "Logement", text: "Construire massivement des logements sociaux, encadrer, geler et baisser les loyers", candidateId: "npa" },
  { id: 240, theme: "Logement", text: "Plan massif de rénovation des logements et résidences universitaires", candidateId: "npa" },
  { id: 241, theme: "Logement", text: "Baisser les frais de notaire (droits de mutation) de 10% pour faciliter l'accession à la propriété", candidateId: "knafo" },
  { id: 242, theme: "Logement", text: "Convertir des bureaux vacants en 6 000 logements pour les familles parisiennes", candidateId: "mariani" },
  { id: 243, theme: "Logement", text: "Limiter les locations Airbnb à 60 nuits par an (contre 120 actuellement)", candidateId: "mariani" },
  { id: 244, theme: "Logement", text: "Permettre à 40 000 familles parisiennes d'accéder à la propriété via un plan d'accession", candidateId: "mariani" },

  // === PATRIMOINE & BEAUTÉ DE LA VILLE ===
  { id: 245, theme: "Patrimoine & Beauté de la ville", text: "Je ferai retirer les palissades des chantiers finis, les plots en béton ou en plastique, les palettes en bois, etc. Je mettrai fin au provisoire qui dure et aux réparations de fortune. Avec moi, ce sera la fin du bricolage et le retour de la qualité.", candidateId: "dati" },
  { id: 246, theme: "Patrimoine & Beauté de la ville", text: "Je mettrai en place un plan d’urgence pour sauver le patrimoine de Paris avec un volet dédié aux églises.", candidateId: "dati" },
  { id: 247, theme: "Patrimoine & Beauté de la ville", text: "Je ferai appliquer une charte « Paris du beau », charte esthétique de la Ville applicable aux espaces publics. Elle définira les matériaux et mobiliers à utiliser en conformité avec l’histoire patrimoniale de Paris. Dans les lieux patrimoniaux, une charte esthétique sera applicable aux commerces (toile écrue/gris chaud, etc.).", candidateId: "dati" },
  { id: 248, theme: "Patrimoine & Beauté de la ville", text: "Manifeste pour une nouvelle esthétique parisienne avec un directeur artistique de la Ville", candidateId: "gregoire" },
  { id: 249, theme: "Patrimoine & Beauté de la ville", text: "Refonte de la signalétique : suppression des panneaux obsolètes et indications 100% accessibles", candidateId: "gregoire" },
  { id: 250, theme: "Patrimoine & Beauté de la ville", text: "Abroger le PLU bioclimatique et revenir à un PLU garantissant l'harmonie architecturale", candidateId: "knafo" },
  { id: 251, theme: "Patrimoine & Beauté de la ville", text: "Réautoriser l'éclairage des vitrines des commerces la nuit", candidateId: "knafo" },
  { id: 252, theme: "Patrimoine & Beauté de la ville", text: "Réautoriser les terrasses chauffées", candidateId: "knafo" },
  { id: 253, theme: "Patrimoine & Beauté de la ville", text: "Créer une charte renforcée de respect de l'urbanisme parisien et des immeubles haussmanniens", candidateId: "mariani" },
  { id: 254, theme: "Patrimoine & Beauté de la ville", text: "Restaurer le mobilier urbain historique de Paris : bancs Davioud, réverbères classiques, grilles d'arbres en fonte", candidateId: "knafo" },
  { id: 255, theme: "Patrimoine & Beauté de la ville", text: "Prolonger l'éclairage ornemental des monuments parisiens jusqu'à minuit", candidateId: "knafo" },

  // === PETITE ENFANCE / PROTECTION DE L'ENFANCE ===
  { id: 256, theme: "Petite enfance / protection de l'enfance", text: "Je veux que 100% des places en crèche soient pourvues et que les horaires d’accueil soient élargis. Pour y parvenir, les personnels des crèches deviendront prioritaires pour l’accès au logement social.", candidateId: "dati" },
  { id: 257, theme: "Petite enfance / protection de l'enfance", text: "Créer 6 500 places en crèche publique d’ici 2032 pour répondre aux besoins", candidateId: "chikirou" },
  { id: 258, theme: "Petite enfance / protection de l'enfance", text: "j’instaurerai un screening systématique et obligatoire des références et du casier judiciaire avant tout recrutement d’un nouvel animateur périscolaire. Je ferai également scanner l’intégralité des 12 000 personnels en poste et renverrai sur le champ les agents concernés par toute irrégularité.", candidateId: "bournazel" },
  { id: 259, theme: "Petite enfance / protection de l'enfance", text: "J’instaurerai un prêt à taux zéro en cas de déménagement pour accueillir un nouvel enfant.", candidateId: "dati" },
  { id: 260, theme: "Petite enfance / protection de l'enfance", text: "Ouvrir les dix centres de protection maternelle et infantile communaux les plus fréquentés jusqu’à 19h30 trois soirs par semaine et le samedi matin", candidateId: "chikirou" },
  { id: 261, theme: "Petite enfance / protection de l'enfance", text: "je créerai 10 000 solutions supplémentaires de modes de garde, notamment de nouvelles places en crèche mais aussi de garde à domicile.", candidateId: "bournazel" },
  { id: 262, theme: "Petite enfance / protection de l'enfance", text: "Je clarifierai les rythmes scolaires : les élèves auront classe les lundi, mardi, jeudi et vendredi, de 8H30 à 16H30, soit 4 jours pleins par semaine. Le mercredi sera sanctuarisé pour un temps périscolaire de qualité, qui mobilisera des animateurs diplômés et contrôlés. Je créerai également un temps d’études dirigées après l’école.", candidateId: "dati" },
  { id: 263, theme: "Petite enfance / protection de l'enfance", text: "Organiser, dans chaque arrondissement, des ateliers municipaux de découverte de lieux culturels et de la nature à destination des tout-petits", candidateId: "chikirou" },
  { id: 264, theme: "Petite enfance / protection de l'enfance", text: "Développer le réseau des « Maisons des Nounous » pour redonner du temps aux familles le soir en semaine et le week-end", candidateId: "bournazel" },
  { id: 265, theme: "Petite enfance / protection de l'enfance", text: "Je créerai des maisons de la parentalité. Dans le cadre du droit à l’expérimentation des collectivités locales, j’étendrai les compétences des PMI pour mieux accompagner les parents : informations-conseils, aides dans la recherche de professionnels de santé ou paramédicaux, etc.", candidateId: "dati" },
  { id: 266, theme: "Petite enfance / protection de l'enfance", text: "Mettre en place des crèches de garde ouvertes le samedi (voire le dimanche), accessibles en priorité aux familles monoparentales et soutenir les initiatives de garde visant à libérer du temps pour les parents isolés", candidateId: "chikirou" },
  { id: 267, theme: "Petite enfance / protection de l'enfance", text: "Déployer la carte « parent solo »", candidateId: "bournazel" },
  { id: 268, theme: "Petite enfance / protection de l'enfance", text: "Renforcer la protection de l'enfance avec des moyens humains et financiers supplémentaires", candidateId: "gregoire" },
  { id: 269, theme: "Petite enfance / protection de l'enfance", text: "Organiser une convention citoyenne sur l'enfance et la parentalité à Paris", candidateId: "gregoire" },
  { id: 270, theme: "Petite enfance / protection de l'enfance", text: "Recruter massivement du personnel en crèche pour améliorer le taux d'encadrement", candidateId: "gregoire" },
  { id: 271, theme: "Petite enfance / protection de l'enfance", text: "Développer les crèches Oasis avec des espaces verts et un accueil en plein air", candidateId: "gregoire" },
  { id: 272, theme: "Petite enfance / protection de l'enfance", text: "Créer un parcours d'accompagnement spécifique pour les familles monoparentales", candidateId: "gregoire" },
  { id: 273, theme: "Petite enfance / protection de l'enfance", text: "Lancer un grand plan de protection de la petite enfance avec tolérance zéro contre la maltraitance", candidateId: "mariani" },
  { id: 274, theme: "Petite enfance / protection de l'enfance", text: "Réserver en priorité les places en crèches municipales aux familles françaises", candidateId: "mariani" },
  { id: 275, theme: "Petite enfance / protection de l'enfance", text: "Créer davantage de crèches, de bibliothèques et de maisons de la jeunesse dans les quartiers populaires", candidateId: "npa" },
  { id: 276, theme: "Petite enfance / protection de l'enfance", text: "Ouvrir des crèches la nuit pour les parents travaillant en horaires décalés", candidateId: "mariani" },
  { id: 277, theme: "Petite enfance / protection de l'enfance", text: "Instaurer la gratuité de la crèche à partir du 3ème enfant", candidateId: "mariani" },

  // === PROBITÉ ===
  { id: 278, theme: "Probité", text: "Garantir la probité et l’éthique des élus municipaux dans l’exercice de leurs fonctions pour prévenir toute forme de privilège, d’abus ou de favoritisme et rétablir la confiance des Parisiens envers leurs élus ;", candidateId: "bournazel" },
  { id: 279, theme: "Probité", text: "Instaurer une gouvernance citoyenne, transparente et contrôlée afin que les Parisiens sachent exactement comment l’argent de leurs impôts locaux est utilisé, pour mettre fin à l’opacité administrative et garantir une transparence complète sur la gestion de la Ville de Paris.", candidateId: "bournazel" },

  // === PROPRETÉ ET GESTION DES DÉCHETS ===
  { id: 280, theme: "Propreté et gestion des déchets", text: "Je réorganiserai la direction de la propreté en changeant les méthodes de travail et donnerai aux maires d’arrondissement de véritables leviers d’action : effectifs et équipements pour agir au plus vite.", candidateId: "dati" },
  { id: 281, theme: "Propreté et gestion des déchets", text: "Remunicipaliser l’ensemble du service public de la propreté : auditer l’ensemble des délégations de service public (DSP) en cours dès le début de la mandature et programmer leur non-renouvellement, avec préparation en amont de la transition vers les équipes publiques, afin d’atteindre 100 % de gestion en régie municipale à horizon 2030", candidateId: "chikirou" },
  { id: 282, theme: "Propreté et gestion des déchets", text: "je privatiserai la collecte des déchets et le nettoiement des rues (La privatisation dégagera ainsi 742 millions d’euros d’économies sur la mandature)", candidateId: "bournazel" },
  { id: 283, theme: "Propreté et gestion des déchets", text: "Je mettrai en place des brigades d’intervention d’urgence, prêtes à agir plusieurs fois par jour là où la saleté s’accumule.", candidateId: "dati" },
  { id: 284, theme: "Propreté et gestion des déchets", text: "Recruter 300 agents supplémentaires à horizon 2032 et intégrer le personnel volontaire des DSP comme agents municipaux", candidateId: "chikirou" },
  { id: 285, theme: "Propreté et gestion des déchets", text: "j’associerai les communes limitrophes volontaires pour mutualiser ce service public, permettant des économies d’échelle et une meilleure qualité de service aux portes de Paris.‍", candidateId: "bournazel" },
  { id: 286, theme: "Propreté et gestion des déchets", text: "Nous mènerons avec la Police municipale des actions coups de poing de verbalisation contre ceux qui dégradent notre cadre de vie au quotidien (tags, dépôts sauvages, etc.).", candidateId: "dati" },
  { id: 287, theme: "Propreté et gestion des déchets", text: "Investir 30 à 40 millions d’euros supplémentaires sur la mandature, grâce notamment aux économies que permettra la remunicipalisation", candidateId: "chikirou" },
  { id: 288, theme: "Propreté et gestion des déchets", text: "Je confierai la collecte à des opérateurs privés sélectionnés sur des critères stricts de performance et de continuité de service public.", candidateId: "dati" },
  { id: 289, theme: "Propreté et gestion des déchets", text: "Créer un référent de quartier parmi les agents municipaux, identifié par les habitants comme point de contact privilégié pour toutes les questions de propreté", candidateId: "chikirou" },
  { id: 290, theme: "Propreté et gestion des déchets", text: "Je lancerai un grand plan de lutte contre la prolifération des rats : utilisation de la glace carbonique ou de pièges écologiques connectés.", candidateId: "dati" },
  { id: 291, theme: "Propreté et gestion des déchets", text: "Renforcer le modèle des régies de quartier et créer au moins une régie par arrondissement, via une augmentation des conventionnements et subventions", candidateId: "chikirou" },
  { id: 292, theme: "Propreté et gestion des déchets", text: "Réorganiser la restauration collective afin de réduire de 75 % le gaspillage alimentaire et d’éliminer le plastique", candidateId: "chikirou" },
  { id: 293, theme: "Propreté et gestion des déchets", text: "Déployer un réseau municipal de consigne pour les bouteilles en verre dans les commerces alimentaires, afin de reprendre en main la collecte, le recyclage, la valorisation et la réutilisation du verre à Paris", candidateId: "chikirou" },
  { id: 294, theme: "Propreté et gestion des déchets", text: "Mener une politique active auprès de la restauration privée et de loisirs pour atteindre l’objectif « zéro plastique », et accompagner les entreprises et commerçants dans leur bifurcation vers le zéro déchet", candidateId: "chikirou" },
  { id: 295, theme: "Propreté et gestion des déchets", text: "Déployer des dispositifs de partage des aliments encore consommables, en soutenant les associations de collecte des invendus et en développant des actions d’éducation à la réduction du gaspillage, notamment dans les cantines", candidateId: "chikirou" },
  { id: 296, theme: "Propreté et gestion des déchets", text: "Déployer un maillage important de points de collecte du quotidien (mairies, écoles, équipements municipaux, bibliothèques, etc.) ainsi qu’un circuit pour professionnels permettant d’assurer des collectes régulières", candidateId: "chikirou" },
  { id: 297, theme: "Propreté et gestion des déchets", text: "Installer des bacs sécurisés pour le « petit numérique » (téléphones, tablettes, accessoires) afin d’éviter la casse et les pertes", candidateId: "chikirou" },
  { id: 298, theme: "Propreté et gestion des déchets", text: "Faire de la commande publique un levier de changement d’échelle, en donnant la priorité au reconditionné sur le neuf, avec des critères exigeants (réparabilité, disponibilité des pièces, éco-conception)", candidateId: "chikirou" },
  { id: 299, theme: "Propreté et gestion des déchets", text: "Renégocier le contrat d’objectifs Paris-Syctom pour y intégrer l’objectif « zéro incinération » et des trajectoires contraignantes sur les biodéchets, le recyclage et le tri", candidateId: "chikirou" },
  { id: 300, theme: "Propreté et gestion des déchets", text: "Porter le budget dédié à 15 millions d’euros par an et intervenir dans les 24h après signalement effectué sur le site internet de la Ville (espace « Alerte rongeurs »)", candidateId: "chikirou" },
  { id: 301, theme: "Propreté et gestion des déchets", text: "Tendre vers l’objectif « zéro déchet » à l’échelle municipale", candidateId: "chikirou" },
  { id: 302, theme: "Propreté et gestion des déchets", text: "Brigades anti-incivilités au sein de la police municipale contre les infractions de propreté", candidateId: "gregoire" },
  { id: 303, theme: "Propreté et gestion des déchets", text: "Objectif zéro dépôt sur les trottoirs : collecte à domicile des encombrants et amendes renforcées", candidateId: "gregoire" },
  { id: 304, theme: "Propreté et gestion des déchets", text: "Moins 100 000 tonnes de déchets : compostage dans tous les quartiers et tri dans l'espace public", candidateId: "gregoire" },
  { id: 305, theme: "Propreté et gestion des déchets", text: "Nommer des référents propreté et travaux dans chaque quartier pour traiter rapidement les problèmes", candidateId: "gregoire" },
  { id: 306, theme: "Propreté et gestion des déchets", text: "La propreté, l'affaire de tous: une application «Dans Ma Rue » toujours plus efficace, la responsabilisation des propriétaires de locaux vacants pour lutter contre les tags et des moyens renforcés pour le service public de la propreté, avec notamment une flotte de véhicules 100% électrique pour réduire le bruit", candidateId: "gregoire" },
  { id: 307, theme: "Propreté et gestion des déchets", text: "Développement des emballages réemployables et consignés, en débutant par les chaînes de vente à emporter pour réduire les déchets et améliorer la propreté.", candidateId: "gregoire" },
  { id: 308, theme: "Propreté et gestion des déchets", text: "Privatiser la collecte des ordures et le balayage via appels d'offres, avec reprise garantie de 80% des agents", candidateId: "knafo" },
  { id: 309, theme: "Propreté et gestion des déchets", text: "Externaliser totalement la collecte des déchets et laisser chaque arrondissement choisir son prestataire", candidateId: "mariani" },
  { id: 310, theme: "Propreté et gestion des déchets", text: "Assurer la propreté 24h/24 par le redéploiement des agents municipaux sur le terrain", candidateId: "mariani" },
  { id: 311, theme: "Propreté et gestion des déchets", text: "Lancer un plan massif de dératisation dans tout Paris", candidateId: "mariani" },
  { id: 312, theme: "Propreté et gestion des déchets", text: "Appliquer la théorie des « vitres cassées » : tolérance zéro sur les incivilités, verbalisation systématique", candidateId: "mariani" },

  // === PÉRISCOLAIRE ===
  { id: 313, theme: "Périscolaire", text: "Respecter le taux d’encadrement national de 1 pour 8 pour les enfants de moins de 6 ans et de 1 pour 12 pour les plus de 6 ans en recrutant pour atteindre 10 000 animateurs périscolaires permanents à la fin de la mandature", candidateId: "chikirou" },
  { id: 314, theme: "Périscolaire", text: "offrir un accueil « tout-en-un » : aide aux devoirs, sport, arts et culture", candidateId: "bournazel" },
  { id: 315, theme: "Périscolaire", text: "je revaloriserai ces métiers avec des primes de reconnaissance de l’engagement professionnel pouvant s’élever jusqu’à 500 €", candidateId: "bournazel" },
  { id: 316, theme: "Périscolaire", text: "Je créerai une inspection municipale du périscolaire, chargée de contrôler chaque année 100 % des structures", candidateId: "bournazel" },
  { id: 317, theme: "Périscolaire", text: "Je m’appuierai sur les professeurs de la Ville de Paris, qui interviennent déjà en arts plastiques, musique ou sport, pour renforcer les ateliers de qualité au sein du périscolaire", candidateId: "bournazel" },
  { id: 318, theme: "Périscolaire", text: "Garantir la qualité de l'accueil périscolaire avec un encadrement renforcé et des activités variées", candidateId: "gregoire" },
  { id: 319, theme: "Périscolaire", text: "Développer les classes de découverte pour que chaque enfant parte au moins une fois en séjour", candidateId: "gregoire" },
  { id: 320, theme: "Périscolaire", text: "Revaloriser le secteur de l'animation avec de meilleures conditions de travail et de rémunération", candidateId: "gregoire" },

  // === RECHERCHE & INNOVATION ===
  { id: 321, theme: "Recherche & Innovation", text: "Faire du Grand Paris la première région universitaire et de recherche du monde, en soutenant les Universités parisiennes, notamment dans leurs projets urbains, et en ouvrant les campus sur la ville", candidateId: "gregoire" },
  { id: 322, theme: "Recherche & Innovation", text: "Placer la science au cœur du débat et des politiques publiques, en associant les laboratoires et chercheurs parisiens à l'action municipale à travers un comité scientifique", candidateId: "gregoire" },
  { id: 323, theme: "Recherche & Innovation", text: "Créer un service public de la donnée d'intérêt général, alliant Open Data et souveraineté numérique, et fixer un objectif «Ville Zéro délai, Zéro Formulaire » grâce au déploiement d'une Intelligence Artificielle de service public", candidateId: "gregoire" },
  { id: 324, theme: "Recherche & Innovation", text: "Développer l'Université permanente de Paris: rendre la connaissance accessible à toutes et à tous, qu'il s'agisse d'acquérir les savoirs fondamentaux, de se former en continu face aux grandes mutations technologiques, de se reconvertir tout simplement pour le plaisir d'apprendre", candidateId: "gregoire" },
  { id: 325, theme: "Recherche & Innovation", text: "Créer une deuxième « Station F » dédiée à l'IA, à la fois incubateur, campus et lieu de formation pour toutes et tous", candidateId: "gregoire" },
  { id: 326, theme: "Recherche & Innovation", text: "Proposer une offre de logements de courte durée à prix abordables pour accueillir étudiants, doctorants et chercheurs", candidateId: "gregoire" },
  { id: 327, theme: "Recherche & Innovation", text: "Instaurer un guichet unique pour faciliter l'accueil et les démarches des chercheurs étrangers réfugiés, en exil ou en coopération.", candidateId: "gregoire" },

  // === SANTÉ ===
  { id: 328, theme: "Santé", text: "Comme Maire de Paris, en ma qualité de présidente de l’AP-HP, je lancerai un plan de désengorgement des urgences en aidant à l’installation de maisons de santé et de centres de soins non programmés.", candidateId: "dati" },
  { id: 329, theme: "Santé", text: "Densifier le réseau de centres de santé municipaux polyvalents avec ouverture, en coopération avec le personnel médical de l’AP-HP, de centres de santé dans l’Est parisien pour y pallier la crise de l’offre médicale, et atteindre à horizon 2032 l’objectif d’au moins un centre de santé par arrondissement", candidateId: "chikirou" },
  { id: 330, theme: "Santé", text: "Créer un service de bus itinérants santé dans les zones d’intervention prioritaire (ZIP) afin de renforcer la prévention, l’accompagnement et l’orientation parmi les Parisiennes et les Parisiens les plus vulnérables", candidateId: "chikirou" },
  { id: 331, theme: "Santé", text: "Recruter dans les centres de santé municipaux polyvalents des psychologues pratiquant le tiers payant intégral pour répondre aux besoins de prise en charge des Parisiennes et des Parisiens, avec pour objectif d’atteindre à horizon 2032 au moins deux psychologues par centre de santé municipal, et pour ambition d’étendre le dispositif aux antennes de santé d’arrondissement", candidateId: "chikirou" },
  { id: 332, theme: "Santé", text: "Développer un réseau Haltes Soins Addictions sur la base de structures de petite taille pour la prévention, l’accompagnement et la prise en charge dans les quartiers où les besoins se font sentir, accueillant un nombre de personnes limité afin de garantir aux usagers et aux structures une insertion harmonieuse dans le tissu urbain.", candidateId: "chikirou" },
  { id: 333, theme: "Santé", text: "Une mutuelle municipale parisienne abordable et de qualité pour tous les Parisiens", candidateId: "gregoire" },
  { id: 334, theme: "Santé", text: "Objectif 100 nouveaux lieux de soin de proximité en secteur 1 ou 2 conventionné", candidateId: "gregoire" },
  { id: 335, theme: "Santé", text: "Un service de santé scolaire renforcé avec des bilans de santé réguliers pour tous les enfants", candidateId: "gregoire" },
  { id: 336, theme: "Santé", text: "Un plan ambitieux pour la santé sexuelle et reproductive", candidateId: "gregoire" },
  { id: 337, theme: "Santé", text: "Des équipes pluridisciplinaires et des lieux dédiés à la réduction des risques liés aux addictions", candidateId: "gregoire" },
  { id: 338, theme: "Santé", text: "Un parcours d'accompagnement spécifique et personnalisé pour les femmes souffrant d'endométriose", candidateId: "gregoire" },
  { id: 339, theme: "Santé", text: "Lutte à la source contre les pollutions de l'eau et de l'air (PFAS, pesticides, particules fines, perturbateurs endocriniens)", candidateId: "gregoire" },
  { id: 340, theme: "Santé", text: "100% d'alimentation bio, locale et durable dans les cantines et crèches municipales avec goûter gratuit", candidateId: "gregoire" },
  { id: 341, theme: "Santé", text: "Droit à l'alimentation saine et durable et sécurité sociale de l'alimentation: soutien aux coopératives, caisses et associations d'aide alimentaire, réseau municipal d'épiceries, halles et supermarchés bios et solidaires, ouverture de nouveaux restaurants municipaux aux publics précaires ou isolés.", candidateId: "gregoire" },
  { id: 342, theme: "Santé", text: "Défendre l'hôpital public contre les coupes budgétaires et garantir l'accès à la santé pour tous", candidateId: "npa" },
  { id: 343, theme: "Santé", text: "Supprimer les salles de shoot et créer un centre de soin unique pour traiter la toxicomanie", candidateId: "mariani" },
  { id: 344, theme: "Santé", text: "Instaurer une prévention scolaire obligatoire sur les dangers des stupéfiants", candidateId: "mariani" },
  { id: 345, theme: "Santé", text: "Lancer un plan de prévention des maladies mentales dans les écoles et collèges", candidateId: "mariani" },

  // === SERVICES PUBLICS ===
  { id: 346, theme: "Services publics", text: "Créer un guichet physique unique pour toutes les démarches administratives de la Ville", candidateId: "gregoire" },
  { id: 347, theme: "Services publics", text: "Garantir un service public universel accessible à tous, y compris aux personnes éloignées du numérique", candidateId: "gregoire" },
  { id: 348, theme: "Services publics", text: "Développer une application 100% numérique pour simplifier toutes les démarches parisiennes", candidateId: "gregoire" },
  { id: 349, theme: "Services publics", text: "Dématérialiser le dossier scolaire pour simplifier les inscriptions et le suivi", candidateId: "gregoire" },
  { id: 350, theme: "Services publics", text: "Étendre les horaires d'ouverture des équipements publics en soirée et le week-end", candidateId: "gregoire" },
  { id: 351, theme: "Services publics", text: "Davantage de toilettes publiques accessibles à tous, avec tables à langer", candidateId: "gregoire" },
  { id: 352, theme: "Services publics", text: "Réorganiser les services municipaux à l'échelle des quartiers pour travailler en hyper-proximité", candidateId: "gregoire" },
  { id: 353, theme: "Services publics", text: "Un service public solidaire de la naissance à la mort, notamment avec une prise en charge du coût et des démarches funéraires pour les plus précaires et le développement de nouveaux lieux pour les cérémonies funéraires.", candidateId: "gregoire" },
  { id: 354, theme: "Services publics", text: "Arrêter toutes les privatisations et fermetures de classes, municipaliser les services publics", candidateId: "npa" },
  { id: 355, theme: "Services publics", text: "Rendre gratuits l'eau (premiers m³), les transports en commun, les centres de santé et les cantines", candidateId: "npa" },
  { id: 356, theme: "Services publics", text: "Exproprier les groupes privés gérant des crèches, EHPAD et centres de soins et les municipaliser", candidateId: "npa" },

  // === SOLIDARITÉ, INCLUSION & ACCESSIBILITÉ ===
  { id: 357, theme: "Solidarité, inclusion & accessibilité", text: "J’instaurerai la logique du guichet unique pour la Maison départementale des personnes handicapées (MDPH), dont la complexité des démarches conduit beaucoup de parents à renoncer.", candidateId: "dati" },
  { id: 358, theme: "Solidarité, inclusion & accessibilité", text: "Adopter une délibération du Conseil de Paris visant à l’engager à ne pas voter un projet d’aménagement de l’espace public sans avis favorable du Conseil départemental de la citoyenneté et de l’autonomie (CDCA), avec obligation de médiation publique en cas de désaccord", candidateId: "chikirou" },
  { id: 359, theme: "Solidarité, inclusion & accessibilité", text: "Rendre 100 % des équipements municipaux accessibles avant la fin de la mandature, avec un plan pluriannuel de travaux et un suivi public annuel", candidateId: "chikirou" },
  { id: 360, theme: "Solidarité, inclusion & accessibilité", text: "Créer un guichet unique handicap dans chaque mairie d’arrondissement, en lien avec la Maison départementale des personnes handicapées, pour l’orientation, l’accompagnement et la lutte contre le non-recours", candidateId: "chikirou" },
  { id: 361, theme: "Solidarité, inclusion & accessibilité", text: "Renforcer l’accessibilité dans les logements sociaux gérés par les bailleurs sociaux parisiens pour atteindre l’objectif de 70 % de logements accessibles à horizon 2032", candidateId: "chikirou" },
  { id: 362, theme: "Solidarité, inclusion & accessibilité", text: "Faire de la Ville un employeur exemplaire en visant 10 % d’agents municipaux handicapés et au moins 6 % dans les catégories A+ et A, à horizon 2032", candidateId: "chikirou" },
  { id: 363, theme: "Solidarité, inclusion & accessibilité", text: "Je mettrai en place un système de veille solidaire permettant aux agents publics, professionnels de santé, gardiens d’immeuble, commerçants ou voisins de relayer les situations d’isolement et accompagner les personnes isolées.", candidateId: "dati" },
  { id: 364, theme: "Solidarité, inclusion & accessibilité", text: "Création de 4 000 places d'hébergement d'urgence et réquisition des logements vides depuis plus de 5 ans", candidateId: "gregoire" },
  { id: 365, theme: "Solidarité, inclusion & accessibilité", text: "Objectif zéro enfant à la rue avec obligation de mise à l'abri pour les mineurs non accompagnés", candidateId: "gregoire" },
  { id: 366, theme: "Solidarité, inclusion & accessibilité", text: "Un Revenu Solidarité Jeunesse sous condition de ressources pour les jeunes de l'Aide Sociale à l'Enfance", candidateId: "gregoire" },
  { id: 367, theme: "Solidarité, inclusion & accessibilité", text: "100% de recours aux droits grâce à des permanences mobiles dans chaque quartier", candidateId: "gregoire" },
  { id: 368, theme: "Solidarité, inclusion & accessibilité", text: "Distribuer gratuitement des protections périodiques dans les équipements publics parisiens", candidateId: "gregoire" },
  { id: 369, theme: "Solidarité, inclusion & accessibilité", text: "Nouveaux quartiers d'accessibilité augmentée prenant en compte les handicaps visibles et invisibles", candidateId: "gregoire" },
  { id: 370, theme: "Solidarité, inclusion & accessibilité", text: "100% des rues accessibles aux personnes à mobilité réduite grâce au désencombrement des trottoirs", candidateId: "gregoire" },
  { id: 371, theme: "Solidarité, inclusion & accessibilité", text: "100% des bâtiments municipaux accessibles d'ici 2030 avec balises sonores pour malvoyants", candidateId: "gregoire" },
  { id: 372, theme: "Solidarité, inclusion & accessibilité", text: "Renforcement des permanences délocalisées de la MDPH dans tous les arrondissements", candidateId: "gregoire" },
  { id: 373, theme: "Solidarité, inclusion & accessibilité", text: "Un accompagnement personnalisé de tous les allocataires du RSA, favorisant l'accès à la formation et aux métiers en tension, notamment ceux du service public municipal.", candidateId: "gregoire" },
  { id: 374, theme: "Solidarité, inclusion & accessibilité", text: "La prise en compte du genre dans l'aménagement de l'espace public, en associant les usagères à chaque étape", candidateId: "gregoire" },
  { id: 375, theme: "Solidarité, inclusion & accessibilité", text: "Soutien à la mise en accessibilité, pour des commerces inclusifs", candidateId: "gregoire" },
  { id: 376, theme: "Solidarité, inclusion & accessibilité", text: "Créer une mission municipale en charge de la lutte contre le racisme, l'antisémitisme, et la haine anti-LGBTQIA+, dotée de référents dans chaque arrondissement pouvant être saisis par les usagers et chargée de superviser la formation des agents municipaux pour assurer les standards les plus élevés en la matière", candidateId: "gregoire" },
  { id: 377, theme: "Solidarité, inclusion & accessibilité", text: "Réaliser de grandes campagnes de testing pour lutter contre les discriminations dans tous les domaines (logement, emploi, accès aux établissements privés et publics…) et démultiplier l'offre de permanences juridiques pour soutenir les victimes de discriminations", candidateId: "gregoire" },
  { id: 378, theme: "Solidarité, inclusion & accessibilité", text: "Accélérer le rééquilibrage dans la représentation des femmes et de la diversité des cultures qui font Paris dans nos rues et nos avenues, et notamment renommer les avenues Léopold II dans le 16e et Lamoricière dans le 12e", candidateId: "gregoire" },
  { id: 379, theme: "Solidarité, inclusion & accessibilité", text: "Créer des résidences sécurisées pour les victimes de violences conjugales", candidateId: "mariani" },
  { id: 380, theme: "Solidarité, inclusion & accessibilité", text: "Développer l'hébergement d'urgence dans des conditions dignes et salubres", candidateId: "npa" },
  { id: 381, theme: "Solidarité, inclusion & accessibilité", text: "Régulariser tous les sans-papiers et garantir la liberté de circulation et d'installation pour tous", candidateId: "npa" },
  { id: 382, theme: "Solidarité, inclusion & accessibilité", text: "Fermer les centres de rétention administrative (CRA) et mettre fin aux expulsions de migrants", candidateId: "npa" },
  { id: 383, theme: "Solidarité, inclusion & accessibilité", text: "Créer des lieux d'accueil et d'hébergement pour les femmes victimes de violences sexistes et les victimes de violences homophobes ou transphobes", candidateId: "npa" },

  // === SPORT ===
  { id: 384, theme: "Sport", text: "Nous ouvrirons plus de créneaux sportifs sur des plages horaires élargies tout au long de l’année. Des créneaux plus nombreux seront réservés au sport adapté.", candidateId: "dati" },
  { id: 385, theme: "Sport", text: "Mettre en place la gratuité des activités sportives municipales pour tous les moins de 25 ans et une tarification sociale au-delà de cet âge", candidateId: "chikirou" },
  { id: 386, theme: "Sport", text: "Je remettrai de l’ordre sur les pistes cyclables et les trottoirs.", candidateId: "bournazel" },
  { id: 387, theme: "Sport", text: "Je ferai de la natation la grande cause sportive de mon mandat : nous prioriserons la rénovation des piscines municipales dont la vétusté occasionne trop de fermetures.", candidateId: "dati" },
  { id: 388, theme: "Sport", text: "Isoler thermiquement l’ensemble des infrastructures sportives et privilégier la rénovation à la construction, avec des matériaux bas-carbone", candidateId: "chikirou" },
  { id: 389, theme: "Sport", text: "Je mettrai fin au tirage au sort dans les conservatoires avec la création de 2 000 places supplémentaires d’ici 2027, en priorité dans les arrondissements sous-dotés.", candidateId: "dati" },
  { id: 390, theme: "Sport", text: "Mobiliser les temps périscolaires et extra-scolaires pour des stages de natation pour les enfants scolarisés à Paris et atteindre un objectif de 100 % des enfants sachant nager avant l’entrée au collège", candidateId: "chikirou" },
  { id: 391, theme: "Sport", text: "Les bibliothèques et médiathèques de quartier seront ouvertes systématiquement le dimanche et leurs horaires seront élargis.", candidateId: "dati" },
  { id: 392, theme: "Sport", text: "Créer une Assemblée parisienne du sport dotée d’un budget participatif annuel de 10 millions d’euros", candidateId: "chikirou" },
  { id: 393, theme: "Sport", text: "Je ferai rester le PSG à Paris, et créerai un projet de grande cité sportive moderne pour faire rayonner mondialement le sport parisien ! Je négocierai la vente du Parc des Princes au PSG en contrepartie de la création d’un village sportif et culturel « parc PSG » autour du stade, en lien avec les associations sportives du secteur, pour que le club reste à Paris et que cela bénéficie aux Parisiens.", candidateId: "dati" },
  { id: 394, theme: "Sport", text: "Développer des équipements sportifs publics de proximité (stades, piscines, gymnases, équipements extérieurs en libre accès)", candidateId: "chikirou" },
  { id: 395, theme: "Sport", text: "Je mettrai fin aux réquisitions intempestives des gymnases.", candidateId: "dati" },
  { id: 396, theme: "Sport", text: "Renforcer l’offre de sport pour les personnes âgées à l’échelle des arrondissements, en privilégiant des pratiques douces et régulières", candidateId: "chikirou" },
  { id: 397, theme: "Sport", text: "Créer des continuités piétonnes reliant des parcs entre eux pour favoriser la marche et la course à pied sur de longues distances, en dehors de la circulation automobile", candidateId: "chikirou" },
  { id: 398, theme: "Sport", text: "Planifier une sortie des chaudières au fioul et au gaz dans les équipements sportifs", candidateId: "chikirou" },
  { id: 399, theme: "Sport", text: "Faire des associations sportives scolaires des lieux de découverte d’activités rarement proposées et peu médiatisées", candidateId: "chikirou" },
  { id: 400, theme: "Sport", text: "Créer un site internet municipal recensant l’ensemble des offres par discipline et par arrondissement", candidateId: "chikirou" },
  { id: 401, theme: "Sport", text: "Prendre en charge les frais d'inscription à une activité sportive par enfant et par an à tarifs progressifs", candidateId: "gregoire" },
  { id: 402, theme: "Sport", text: "Étendre les horaires des gymnases et piscines municipales et poursuivre leur rénovation", candidateId: "gregoire" },
  { id: 403, theme: "Sport", text: "Promouvoir la pratique sportive féminine en doublant les créneaux dédiés et les subventions aux clubs", candidateId: "gregoire" },
  { id: 404, theme: "Sport", text: "Instaurer une tolérance zéro face aux violences et discriminations dans le sport", candidateId: "gregoire" },
  { id: 405, theme: "Sport", text: "Faire du sport un droit tout au long de la vie en garantissant à chaque enfant un accès aux savoirs sportifs fondamentaux (savoir nager, savoir rouler), en renforçant les Maisons Sport Santé pour lutter contre la sédentarité, et en développant Paris Sport Seniors", candidateId: "gregoire" },
  { id: 406, theme: "Sport", text: "Faciliter le sport dans l'espace public à travers des installations dédiées, pour une pratique en plein air accessible et gratuite", candidateId: "gregoire" },
  { id: 407, theme: "Sport", text: "Développer l'héritage des Jeux Paralympiques à travers le soutien et le développement de nouveaux clubs para-accueillants et grâce à des créneaux 100% inclusifs pour favoriser la pratique du handisport", candidateId: "gregoire" },
  { id: 408, theme: "Sport", text: "Développer le sport grand-parisien, avec plus d'équipements mutualisés entre les différentes communes, pour accroître les possibilités de créneaux et de disciplines", candidateId: "gregoire" },
  { id: 409, theme: "Sport", text: "Généraliser le jeu et le sport mixtes dans toutes les écoles en aménageant les cours, organisant des temps de jeux collectifs et mixtes, et formant le personnel éducatif pour favoriser l'égalité et la mixité dès la maternelle", candidateId: "gregoire" },
  { id: 410, theme: "Sport", text: "Sanctuariser les subventions aux associations féministes et appliquer l'éga-conditionnalité dans le sport et la culture pour garantir entre les femmes et les hommes.", candidateId: "gregoire" },
  { id: 411, theme: "Sport", text: "Installer des terrains de sport (football, basketball, padel) sous les viaducs du métro aérien", candidateId: "knafo" },

  // === SÉCURITÉ ===
  { id: 412, theme: "Sécurité", text: "Je bâtirai un corps de 5 000 agents de police municipale armés et formés, déployés jour et nuit et chargés de lutter contre la délinquance du quotidien. J’élargirai leurs compétences : contrôle des identités, accès aux fichiers nationaux, traitement rapide et ciblé de la petite délinquance et des incivilités.", candidateId: "dati" },
  { id: 413, theme: "Sécurité", text: "Mettre en œuvre un plan municipal de lutte contre les violences sexistes et sexuelles, incluant la création de 200 nouvelles places d’hébergement d’urgence dédiées", candidateId: "chikirou" },
  { id: 414, theme: "Sécurité", text: "Nouvelle police municipale de 6 000 agents, soit un triplement des effectifs au cours de la prochaine mandature (+100 millions d’euros par an, équipement compris), financé par les baisses d’effectifs dans les bureaux de la Mairie de Paris", candidateId: "bournazel" },
  { id: 415, theme: "Sécurité", text: "Je renforcerai la sécurité dans les zones de nondroit : création d’équipes de sécurité rattachées aux bailleurs sociaux ; aide au financement de la vidéoprotection et des alarmes dans les commerces et cabinets médicaux, sécurisation des tunnels, dessous des ponts, portes de Paris.", candidateId: "dati" },
  { id: 416, theme: "Sécurité", text: "Créer des antennes de proximité réunissant police municipale, médiateurs, éducateurs et assistants sociaux, au sein des Maisons de quartier", candidateId: "chikirou" },
  { id: 417, theme: "Sécurité", text: "Policiers armés (révolvers et gilets pare-balles) et formés au sein d’une académie de la police municipale parisienne", candidateId: "bournazel" },
  { id: 418, theme: "Sécurité", text: "Le réseau de vidéoprotection sera doublé pour atteindre 8 000 caméras, toutes reliées à un Centre de Supervision Urbain unique, décliné dans les arrondissements, véritable coeur opérationnel de la sécurité parisienne.", candidateId: "dati" },
  { id: 419, theme: "Sécurité", text: "Augmenter le nombre d’agents de police municipale afin d’atteindre l’objectif de 3 500 agents réellement formés et déployés", candidateId: "chikirou" },
  { id: 420, theme: "Sécurité", text: "J’attribuerai aux policiers municipaux parisiens, comme aux autres agents publics essentiels, une priorité dans l’accès aux logements sociaux", candidateId: "bournazel" },
  { id: 421, theme: "Sécurité", text: "Je renforcerai la sécurité aux abords des écoles, collèges et équipements de proximité : vidéoprotection et Brigades Municipales de Sécurité devant les collèges.", candidateId: "dati" },
  { id: 422, theme: "Sécurité", text: "Créer trois unités de police municipale spécialisées respectivement dans le tourisme, la santé mentale et les addictions, et la lutte contre les violences sexistes et sexuelles, formées spécifiquement à la prévention et à la médiation dans ces domaines précis", candidateId: "chikirou" },
  { id: 423, theme: "Sécurité", text: "Je souhaite également qu'ils voient leurs compétences étendues pour constater des délits, facturer des amendes, consulter des images de vidéoprotection, faire passer des tests d'alcoolémie ou de stupéfiants ou utiliser des dispositifs de lecture automatisée de plaques d'immatriculation", candidateId: "bournazel" },
  { id: 424, theme: "Sécurité", text: "Je lutterai contre le trafic et la consommation de crack par la création de centres de soins en dehors des zones densément peuplées et tournés vers la sortie de l’addiction.", candidateId: "dati" },
  { id: 425, theme: "Sécurité", text: "Doubler le nombre d’éducateurs spécialisés à horizon 2029, renforcer la filière par la formation diplômante interne et par des bourses aux étudiants, et revaloriser les grilles salariales et indemnités, notamment l’attribution de la NBI (Nouvelle Bonification Indiciaire)", candidateId: "chikirou" },
  { id: 426, theme: "Sécurité", text: "je signerai une convention avec le ministère des Armées et de l’Intérieur afin de faciliter le recrutement d’anciens militaires ou de fonctionnaires de la Police nationale ou de la Gendarmerie nationale", candidateId: "bournazel" },
  { id: 427, theme: "Sécurité", text: "Je créerai des dispositifs spécifiques de sécurisation des bois ainsi que des grands parcs et jardins : antennes de police dotées de brigades équestres ; installation de caméras et d’éclairage aux abords et sur les axes principaux.", candidateId: "dati" },
  { id: 428, theme: "Sécurité", text: "J’installerai enfin au moins une caméra de vidéoprotection aux abords de chaque école et de chaque collège", candidateId: "bournazel" },
  { id: 429, theme: "Sécurité", text: "Créer des brigades nocturnes renforcées et des patrouilles équestres dans les Bois de Boulogne et Vincennes", candidateId: "gregoire" },
  { id: 430, theme: "Sécurité", text: "Un droit à la nuit pour les femmes : éclairage public renforcé, dispositif d'alerte sur les abribus", candidateId: "gregoire" },
  { id: 431, theme: "Sécurité", text: "Co-produire la politique de sécurité avec les maires d'arrondissement, la police nationale et les acteurs associatifs", candidateId: "gregoire" },
  { id: 432, theme: "Sécurité", text: "Une police municipale plus nombreuse (+1000 policiers), mieux équipée, présente sur le terrain 24h sur 24, et plus accessible, grâce à l'installation de kiosques dans chaque arrondissement et sur les points chauds", candidateId: "gregoire" },
  { id: 433, theme: "Sécurité", text: "Recours ciblé à la vidéoprotection, avec 500 nouvelles caméras actives mobiles", candidateId: "gregoire" },
  { id: 434, theme: "Sécurité", text: "Lutte contre les discriminations et le sexisme dans l'espace public avec une formation spécifique de la police municipale", candidateId: "gregoire" },
  { id: 435, theme: "Sécurité", text: "Une stratégie de prévention renforcée, grâce à des médiateurs référents dans chaque établissement scolaire et équipement sportif.", candidateId: "gregoire" },
  { id: 436, theme: "Sécurité", text: "Doubler les effectifs de la police municipale pour atteindre 8 000 agents", candidateId: "knafo" },
  { id: 437, theme: "Sécurité", text: "Armer la police municipale avec des armes à feu", candidateId: "knafo" },
  { id: 438, theme: "Sécurité", text: "Plan de reconquête des zones de non-droit avec interpellations massives (Champs-Élysées, Barbès, La Chapelle)", candidateId: "knafo" },
  { id: 439, theme: "Sécurité", text: "Créer une brigade équestre municipale (40 chevaux, 60 cavaliers)", candidateId: "knafo" },
  { id: 440, theme: "Sécurité", text: "Créer une brigade canine municipale (30 chiens)", candidateId: "knafo" },
  { id: 441, theme: "Sécurité", text: "Équiper les caméras de vidéosurveillance d'intelligence artificielle", candidateId: "knafo" },
  { id: 442, theme: "Sécurité", text: "Équiper les réverbères de capteurs sonores IA capables de reconnaître des cris d'agression ou des bruits de vitre cassée", candidateId: "knafo" },
  { id: 443, theme: "Sécurité", text: "Renforcer l'éclairage public nocturne dans tous les quartiers", candidateId: "knafo" },
  { id: 444, theme: "Sécurité", text: "Tripler les effectifs de la police municipale pour atteindre 8 350 agents (ratio de 4 policiers pour 1 000 habitants)", candidateId: "mariani" },
  { id: 445, theme: "Sécurité", text: "Armer la police municipale et élargir ses prérogatives", candidateId: "mariani" },
  { id: 446, theme: "Sécurité", text: "Patrouilles de police municipale 24h/24 dans tous les quartiers", candidateId: "mariani" },
  { id: 447, theme: "Sécurité", text: "Créer 7 brigades spécialisées : anti-squats, anti-drogue, anti-campements, transports, circulation, action rapide, quartier", candidateId: "mariani" },
  { id: 448, theme: "Sécurité", text: "Tripler le réseau de vidéoprotection pour atteindre 5 000 caméras", candidateId: "mariani" },
  { id: 449, theme: "Sécurité", text: "Déployer la vidéosurveillance augmentée par intelligence artificielle", candidateId: "mariani" },
  { id: 450, theme: "Sécurité", text: "Installer systématiquement des caméras de surveillance devant les écoles et collèges", candidateId: "mariani" },
  { id: 451, theme: "Sécurité", text: "Créer un numéro de téléphone dédié à la police municipale, opérationnel 24h/24", candidateId: "mariani" },
  { id: 452, theme: "Sécurité", text: "Dissoudre la police municipale et démanteler la vidéosurveillance", candidateId: "npa" },
  { id: 453, theme: "Sécurité", text: "Lutter contre le racisme policier et exiger justice pour les victimes de violences policières", candidateId: "npa" },
  { id: 454, theme: "Sécurité", text: "Combattre le trafic de drogue en s'attaquant aux inégalités sociales et au chômage, non par la répression policière", candidateId: "npa" },
  { id: 455, theme: "Sécurité", text: "Déployer 500 policiers municipaux sur le réseau de transport en commun parisien", candidateId: "knafo" },
  { id: 456, theme: "Sécurité", text: "Installer des caméras de vidéoprotection dans les parties communes des HLM", candidateId: "mariani" },

  // === SÉNIORS ===
  { id: 457, theme: "Séniors", text: "Toute opération d’aménagement de l’espace public prendra en compte les besoins des personnes âgées (intégration d’assises, îlots de fraîcheur…) et veillera aux facteurs accidentogènes pour prévenir les chutes, en particulier à proximité des EHPAD.", candidateId: "dati" },
  { id: 458, theme: "Séniors", text: "Développer les activités et services de proximité pour les personnes âgées isolées", candidateId: "gregoire" },
  { id: 459, theme: "Séniors", text: "Créer des résidences autonomie pour permettre aux seniors de vivre chez eux plus longtemps", candidateId: "gregoire" },
  { id: 460, theme: "Séniors", text: "Aménager l'espace public avec plus de bancs, toilettes et espaces de repos pour les aînés", candidateId: "gregoire" },
  { id: 461, theme: "Séniors", text: "Instaurer une « Journée du lien » annuelle pour lutter contre l'isolement des personnes âgées", candidateId: "gregoire" },
  { id: 462, theme: "Séniors", text: "Créer un droit au répit pour les aidants familiaux avec des solutions de relais", candidateId: "gregoire" },
  { id: 463, theme: "Séniors", text: "Des résidences autonomie transformées en véritable chez soi avec des lieux ouverts sur le quartier", candidateId: "gregoire" },
  { id: 464, theme: "Séniors", text: "Un espace public adapté aux seniors : bancs à intervalles réguliers, trottoirs désencombrés", candidateId: "gregoire" },
  { id: 465, theme: "Séniors", text: "Journée annuelle du Lien pour identifier et aller à la rencontre des personnes âgées isolées", candidateId: "gregoire" },
  { id: 466, theme: "Séniors", text: "Droit au répit pour les aidants avec un service public d'appui", candidateId: "gregoire" },
  { id: 467, theme: "Séniors", text: "Sport, culture, loisirs, santé: des activités et des services publics pensés par et pour les seniors grâce à des comités d'usagers dédiés, et un engagement facilité dans le bénévolat et la vie associative", candidateId: "gregoire" },

  // === TOURISME ===
  { id: 468, theme: "Tourisme", text: "Mettre en valeur la diversité du patrimoine et des événements parisiens et métropolitains, pour équilibrer les flux touristiques et éviter le surtourisme dans certains quartiers", candidateId: "gregoire" },
  { id: 469, theme: "Tourisme", text: "Créer un pack de bienvenue (réductions dans les musées, monuments, etc.) pour les visiteurs qui arrivent à Paris en train ou par un autre mode de transport durable", candidateId: "gregoire" },
  { id: 470, theme: "Tourisme", text: "Développer le cyclo-tourisme francilien, avec la Grande Boucle Verte de Paris au Havre pour achever les 500 km de continuités marchables et cyclables longeant les boucles de la Seine en coopération avec l'ensemble des communes concernées, la continuité cyclable le long des canaux et la jonction Seine-et-Marne", candidateId: "gregoire" },
  { id: 471, theme: "Tourisme", text: "Obliger les cars de tourisme à stationner dans des parkings dédiés pour désengorger la chaussée, renforcer la sécurité et éviter les conflits.", candidateId: "gregoire" },

  // === TRANSPORTS & MOBILITÉS ===
  { id: 472, theme: "Transports & Mobilités", text: "Je définirai un schéma de circulation global, pensé à l’échelle de Paris, prenant en compte tous les modes de déplacement. Je supprimerai les aménagements de voirie inefficaces qui compliquent la circulation et génèrent de la pollution et du stress.", candidateId: "dati" },
  { id: 473, theme: "Transports & Mobilités", text: "Engager le rapport de force avec la Région Île-de-France et Île-de-France Mobilités pour permettre le gel des tarifs de l’ensemble des titres et abonnements de transport", candidateId: "chikirou" },
  { id: 474, theme: "Transports & Mobilités", text: "L’essor des véhicules électriques sera encouragé par des aides à l’achat et un plan d’installation de bornes de recharge dans chaque quartier.", candidateId: "dati" },
  { id: 475, theme: "Transports & Mobilités", text: "Déployer et renforcer le réseau actuel des Traverses présents dans les arrondissements périphériques de Paris", candidateId: "chikirou" },
  { id: 476, theme: "Transports & Mobilités", text: "Aux carrefours les plus bouchonnés, j’installerai des feux intelligents qui donneront automatiquement la priorité aux bus", candidateId: "bournazel" },
  { id: 477, theme: "Transports & Mobilités", text: "Je mettrai fin à la zone à trafic limité (ZTL) de Paris-Centre, qui est inapplicable et n’a pas démontré son efficacité.", candidateId: "dati" },
  { id: 478, theme: "Transports & Mobilités", text: "Porter l’accessibilité universelle du réseau de transports francilien en négociant avec Île-de-France Mobilités un calendrier accéléré et un cofinancement augmenté", candidateId: "chikirou" },
  { id: 479, theme: "Transports & Mobilités", text: "Je créerai aussi trois grandes lignes de bus express", candidateId: "bournazel" },
  { id: 480, theme: "Transports & Mobilités", text: "Je créerai de grands cheminements urbains réservés aux piétons, par la rénovation et l’élargissement de trottoirs, car tous les Parisiens sont piétons à un moment de la journée : la marche reste leur principal mode de déplacement et le plus écologique.", candidateId: "dati" },
  { id: 481, theme: "Transports & Mobilités", text: "Mieux réguler la circulation pour réduire durablement les embouteillages, en développant davantage le pilotage intelligent des feux de circulation, en repensant les plans de circulation aux points noirs de congestion et en développant des rues à usages et horaires modulables selon les besoins des quartiers", candidateId: "chikirou" },
  { id: 482, theme: "Transports & Mobilités", text: "je garantirai que dès 2026, il n’y ait plus un bus qui roule au diesel dans Paris", candidateId: "bournazel" },
  { id: 483, theme: "Transports & Mobilités", text: "Je préserverai la place du vélo à Paris, en renforçant et sécurisant les pistes cyclables sur les axes sous-dotés. Nous développerons, avec la Région, un réseau de pistes cyclables qui connecte Paris au reste de l’Îlede- France.", candidateId: "dati" },
  { id: 484, theme: "Transports & Mobilités", text: "Créer une régie publique du vélo, en agissant pour mettre fin au contrat actuel de Vélib’ Métropole, afin d’en faire un véritable service public : baisse des tarifs, développement d’une tarification sociale, garantie de vélos fiables, de stations pleinement opérationnelles et d’une meilleure sécurité des usagers", candidateId: "chikirou" },
  { id: 485, theme: "Transports & Mobilités", text: "Dès la fin 2026, j’ouvrirai la nuit les lignes 1, 4 et 14 Je serai aussi le Maire qui accélérera l’automatisation du métro, en commençant par les lignes 7, 8 et 9", candidateId: "bournazel" },
  { id: 486, theme: "Transports & Mobilités", text: "J’instaurerai un nouveau tarif résident unique. Il permettra aux Parisiens et aux entreprises parisiennes de stationner partout dans Paris à un tarif abordable. Il faut que les Parisiens puissent se garer à un tarif qui ne soit pas confiscatoire au-delà des quelques rues autour de leur domicile.", candidateId: "dati" },
  { id: 487, theme: "Transports & Mobilités", text: "Soutenir les Maisons des Livreurs par un financement public pérenne et exiger une contribution financière des employeurs, afin de garantir un accès à l’assistance juridique, à la prévention routière, aux consultations médicales et à la formation", candidateId: "chikirou" },
  { id: 488, theme: "Transports & Mobilités", text: "je doublerai le nombre de places de livraison Je déploierai aussi une application de stationnement intelligent pour tout Paris, permettant de localiser en temps réel les places disponibles", candidateId: "bournazel" },
  { id: 489, theme: "Transports & Mobilités", text: "Je reviendrai au stationnement gratuit pour les deux-roues motorisés sur les emplacements dédiés.", candidateId: "dati" },
  { id: 490, theme: "Transports & Mobilités", text: "Créer une école municipale du vélo, ouverte à tous les âges, et généraliser l’apprentissage du « savoir rouler » dans toutes les écoles municipales afin d’apprendre, pratiquer et gagner en autonomie", candidateId: "chikirou" },
  { id: 491, theme: "Transports & Mobilités", text: "un agent de sécurité dans la première voiture de chaque métro, tous les jours, de 20h jusqu’à la fin du service", candidateId: "bournazel" },
  { id: 492, theme: "Transports & Mobilités", text: "Je développerai des parkings relais sur les terrains délaissés aux portes de Paris, reliés aux lignes de métros et soumis à un tarif unique et abordable.", candidateId: "dati" },
  { id: 493, theme: "Transports & Mobilités", text: "Augmenter les aides municipales à l’achat de vélos et soutenir les ateliers de réparation de proximité et les bourses aux vélos", candidateId: "chikirou" },
  { id: 494, theme: "Transports & Mobilités", text: "Je sécuriserai en priorité les 200 carrefours les plus accidentogènes. Une brigade spécialisée de la police municipale verbalisera systématiquement les infractions, à l’aide de caméras de vidéoprotection.", candidateId: "bournazel" },
  { id: 495, theme: "Transports & Mobilités", text: "Créer des « Quartiers libres » : îlots de vie végétalisés, rues et placettes conviviales, conçus avec les habitants via une révision du plan de circulation", candidateId: "chikirou" },
  { id: 496, theme: "Transports & Mobilités", text: "Tous les passages piétons seront accessibles aux personnes en situation de handicap et aux poussettes", candidateId: "bournazel" },
  { id: 497, theme: "Transports & Mobilités", text: "Mettre en place une plateforme publique et centralisée de réservation de stationnement pour réduire la congestion et les circulations inutiles", candidateId: "chikirou" },
  { id: 498, theme: "Transports & Mobilités", text: "je déploierai 1 000 rues apaisées, en commençant par les rues aux écoles", candidateId: "bournazel" },
  { id: 499, theme: "Transports & Mobilités", text: "Soutenir les luttes syndicales des travailleurs du vélo, y compris au sein des opérateurs soutenus par la Ville", candidateId: "chikirou" },
  { id: 500, theme: "Transports & Mobilités", text: "Je rendrai la signalisation lisible et j’unifierai les pistes cyclables avec un revêtement de couleur unique pour mieux s’intégrer dans la beauté de l’espace public parisien. j’inventerai l’offre Vélib’ 2.0.", candidateId: "bournazel" },
  { id: 501, theme: "Transports & Mobilités", text: "Créer 15 lignes de bus express pour relier rapidement les quartiers de Paris", candidateId: "gregoire" },
  { id: 502, theme: "Transports & Mobilités", text: "Obtenir le métro 24h/24 le week-end pour une ville qui ne dort jamais", candidateId: "gregoire" },
  { id: 503, theme: "Transports & Mobilités", text: "Rendre le Navigo gratuit pour tous les enfants et adolescents parisiens", candidateId: "gregoire" },
  { id: 504, theme: "Transports & Mobilités", text: "Rendre 100% des transports en commun accessibles aux personnes à mobilité réduite", candidateId: "gregoire" },
  { id: 505, theme: "Transports & Mobilités", text: "Améliorer les performances et la couverture du service Vélib'", candidateId: "gregoire" },
  { id: 506, theme: "Transports & Mobilités", text: "Réguler les horaires et itinéraires de livraison pour réduire les nuisances", candidateId: "gregoire" },
  { id: 507, theme: "Transports & Mobilités", text: "Créer des places de stationnement réservées aux artisans et professionnels mobiles", candidateId: "gregoire" },
  { id: 508, theme: "Transports & Mobilités", text: "Baisser le tarif du stationnement résidentiel pour les Parisiens qui ont besoin de leur véhicule", candidateId: "gregoire" },
  { id: 509, theme: "Transports & Mobilités", text: "Création d'une vélo-école dans chaque arrondissement pour apprendre à rouler en sécurité", candidateId: "gregoire" },
  { id: 510, theme: "Transports & Mobilités", text: "1 000 rues piétonnes et de nouveaux cœurs piétons végétalisés dans chaque quartier", candidateId: "gregoire" },
  { id: 511, theme: "Transports & Mobilités", text: "Déploiement de capteurs et radars sonores pour réduire le bruit à l'échelle de chaque quartier", candidateId: "gregoire" },
  { id: 512, theme: "Transports & Mobilités", text: "Créer une Coopérative vélo permettant à ses adhérents de disposer d'un vélo sur longue durée avec assurance à prix abordable, et d'en changer selon ses besoins (vélo-cargo, places enfants, vélo adapté PMR)", candidateId: "gregoire" },
  { id: 513, theme: "Transports & Mobilités", text: "Un plan de sécurité routière « zéro mort, zéro blessé grave » avec priorité à la protection des usagers vulnérables, nouveaux radars sur les grands axes accidentogènes et généralisation de la vidéoverbalisation", candidateId: "gregoire" },
  { id: 514, theme: "Transports & Mobilités", text: "Réouvrir les voies sur berges à la circulation automobile avec une promenade piétonne et cycliste sur pilotis au-dessus", candidateId: "knafo" },
  { id: 515, theme: "Transports & Mobilités", text: "Relever la vitesse maximale sur le périphérique de 50 à 80 km/h", candidateId: "knafo" },
  { id: 516, theme: "Transports & Mobilités", text: "Piloter les feux tricolores par intelligence artificielle pour fluidifier le trafic", candidateId: "knafo" },
  { id: 517, theme: "Transports & Mobilités", text: "Réduire le tarif du stationnement à 5 euros de l'heure pour tous (contre 37€/h pour les SUV actuellement)", candidateId: "knafo" },
  { id: 518, theme: "Transports & Mobilités", text: "Créer un jumeau numérique de Paris pour simuler l'impact de chaque projet d'aménagement avant réalisation", candidateId: "knafo" },
  { id: 519, theme: "Transports & Mobilités", text: "Augmenter la vitesse sur le périphérique à 90 km/h sur certains tronçons et la nuit", candidateId: "mariani" },
  { id: 520, theme: "Transports & Mobilités", text: "Adapter le plan de circulation pour protéger piétons, cyclistes et automobilistes de manière équilibrée", candidateId: "mariani" },
  { id: 521, theme: "Transports & Mobilités", text: "Faciliter les livraisons pour les commerçants en révisant le plan de circulation", candidateId: "mariani" },
  { id: 522, theme: "Transports & Mobilités", text: "Rétablir l'égalité des tarifs de stationnement en supprimant le zonage discriminatoire", candidateId: "mariani" },
  { id: 523, theme: "Transports & Mobilités", text: "Rendre les transports en commun gratuits et fiables pour tous", candidateId: "npa" },
  { id: 524, theme: "Transports & Mobilités", text: "S'opposer à la privatisation du réseau de bus RATP et défendre le service public des transports", candidateId: "npa" },
  { id: 525, theme: "Transports & Mobilités", text: "Offrir la première heure de stationnement gratuite pour les professionnels (infirmières, artisans, commerciaux)", candidateId: "knafo" },
  { id: 526, theme: "Transports & Mobilités", text: "Créer 20 000 places de stationnement supplémentaires en parking souterrain", candidateId: "mariani" },
  { id: 527, theme: "Transports & Mobilités", text: "Ouvrir le métro la nuit sur les lignes automatiques le week-end", candidateId: "mariani" },
  { id: 528, theme: "Transports & Mobilités", text: "Rétablir la gratuité du stationnement pour les deux-roues motorisés", candidateId: "mariani" },
  { id: 529, theme: "Transports & Mobilités", text: "Supprimer la Zone à Trafic Limité (ZTL) du centre de Paris", candidateId: "mariani" },

  // === VIE DÉMOCRATIQUE ===
  { id: 530, theme: "Vie démocratique", text: "Élire à terme un Maire du Grand Paris pour une action coordonnée en logement, transports, énergie", candidateId: "gregoire" },
  { id: 531, theme: "Vie démocratique", text: "Référendums et votations locales d'initiative partagée ouverts à tous quelle que soit la nationalité", candidateId: "gregoire" },
  { id: 532, theme: "Vie démocratique", text: "Laboratoire de conception partagée des politiques publiques associant usagers, citoyens et chercheurs", candidateId: "gregoire" },
  { id: 533, theme: "Vie démocratique", text: "Comptes-rendus annuels de mandat à l'échelle des quartiers", candidateId: "gregoire" },
  { id: 534, theme: "Vie démocratique", text: "Une nouvelle ère des conseils de quartier, avec des modalités de concertation et de contribution diversifiées pour faciliter la participation du plus grand nombre", candidateId: "gregoire" },
  { id: 535, theme: "Vie démocratique", text: "Organiser au minimum deux référendums locaux par an", candidateId: "knafo" },
  { id: 536, theme: "Vie démocratique", text: "Référendum obligatoire pour tout projet municipal dépassant 10 millions d'euros", candidateId: "knafo" },
  { id: 537, theme: "Vie démocratique", text: "Donner une valeur exécutoire aux résultats de référendum (le résultat s'impose à la mairie)", candidateId: "knafo" },
  { id: 538, theme: "Vie démocratique", text: "Organiser un référendum chaque fois que 5% du corps électoral en fait la demande", candidateId: "mariani" },
  { id: 539, theme: "Vie démocratique", text: "Élire tous les conseils de quartier tous les 3 ans et les consulter pour tout projet les concernant", candidateId: "mariani" },
  { id: 540, theme: "Vie démocratique", text: "Renforcer l'e-démocratie avec des outils numériques protégeant les données personnelles", candidateId: "mariani" },
  { id: 541, theme: "Vie démocratique", text: "Instaurer le droit de vote pour les étrangers aux élections municipales", candidateId: "npa" },
  { id: 542, theme: "Vie démocratique", text: "Mettre fin aux jumelages et partenariats municipaux avec des villes israéliennes", candidateId: "npa" },

];

const DUELS = [
  // --- TRANSPORT ---
  {
    id: 1,
    theme: "Transports & Mobilités",
    subtopic: "Stationnement résidentiel",
    propA: { candidateId: "dati", text: "Créer un tarif de stationnement résidentiel vraiment avantageux pour les Parisiens" },
    propB: { candidateId: "knafo", text: "Réduire le tarif du stationnement à 5€/h pour tous (contre 37€/h pour les SUV actuellement)" }
  },
  {
    id: 2,
    theme: "Transports & Mobilités",
    subtopic: "Stationnement résidentiel",
    propA: { candidateId: "gregoire", text: "Baisser le tarif du stationnement résidentiel pour les Parisiens qui ont besoin de leur véhicule" },
    propB: { candidateId: "mariani", text: "Rétablir l'égalité des tarifs de stationnement en supprimant le zonage discriminatoire" }
  },
  {
    id: 3,
    theme: "Transports & Mobilités",
    subtopic: "Bus express",
    propA: { candidateId: "gregoire", text: "Créer 15 lignes de bus express pour relier rapidement les quartiers de Paris" },
    propB: { candidateId: "bournazel", text: "Créer 3 lignes de bus express traversant Paris du nord au sud et d'est en ouest" }
  },
  {
    id: 4,
    theme: "Transports & Mobilités",
    subtopic: "Métro la nuit",
    propA: { candidateId: "gregoire", text: "Obtenir le métro 24h/24 le week-end pour une ville qui ne dort jamais" },
    propB: { candidateId: "bournazel", text: "Obtenir l'ouverture nocturne des lignes de métro 1, 4 et 14 le week-end" }
  },
  {
    id: 5,
    theme: "Transports & Mobilités",
    subtopic: "Périphérique",
    propA: { candidateId: "knafo", text: "Relever la vitesse maximale sur le périphérique de 50 à 80 km/h" },
    propB: { candidateId: "mariani", text: "Augmenter la vitesse sur le périphérique à 90 km/h sur certains tronçons et la nuit" }
  },
  {
    id: 6,
    theme: "Transports & Mobilités",
    subtopic: "Périphérique",
    propA: { candidateId: "bournazel", text: "Couvrir des tronçons du périphérique pour créer de nouveaux espaces verts" },
    propB: { candidateId: "mariani", text: "Augmenter la vitesse sur le périphérique à 90 km/h sur certains tronçons et la nuit" }
  },
  {
    id: 7,
    theme: "Transports & Mobilités",
    subtopic: "Feux intelligents",
    propA: { candidateId: "bournazel", text: "Installer des feux intelligents pour fluidifier la circulation et réduire la pollution" },
    propB: { candidateId: "knafo", text: "Piloter les feux tricolores par intelligence artificielle pour fluidifier le trafic" }
  },
  {
    id: 8,
    theme: "Transports & Mobilités",
    subtopic: "Accessibilité transports",
    propA: { candidateId: "gregoire", text: "Rendre 100% des transports en commun accessibles aux personnes à mobilité réduite" },
    propB: { candidateId: "chikirou", text: "Rendre l'ensemble des transports et de la voirie universellement accessibles" }
  },
  {
    id: 9,
    theme: "Transports & Mobilités",
    subtopic: "Vélo",
    propA: { candidateId: "gregoire", text: "Achever le réseau cyclable parisien pour couvrir l'ensemble des arrondissements" },
    propB: { candidateId: "chikirou", text: "Créer une régie publique du vélo pour remplacer le modèle Vélib' actuel" }
  },
  {
    id: 10,
    theme: "Transports & Mobilités",
    subtopic: "Livraisons",
    propA: { candidateId: "gregoire", text: "Réguler les horaires et itinéraires de livraison pour réduire les nuisances" },
    propB: { candidateId: "bournazel", text: "Doubler le nombre de places de livraison pour réduire le stationnement en double file" }
  },
  {
    id: 11,
    theme: "Transports & Mobilités",
    subtopic: "Transports gratuits",
    propA: { candidateId: "gregoire", text: "Rendre le Navigo gratuit pour tous les enfants et adolescents parisiens" },
    propB: { candidateId: "npa", text: "Rendre les transports en commun gratuits et fiables pour tous" }
  },

  // --- SÉCURITÉ ---
  {
    id: 12,
    theme: "Sécurité",
    subtopic: "Police municipale",
    propA: { candidateId: "bournazel", text: "Créer une force de 6 000 policiers municipaux pour sécuriser les rues de Paris" },
    propB: { candidateId: "mariani", text: "Tripler les effectifs de la police municipale pour atteindre 8 350 agents" }
  },
  {
    id: 13,
    theme: "Sécurité",
    subtopic: "Police municipale",
    propA: { candidateId: "dati", text: "Recruter 5 000 policiers municipaux armés pour sécuriser Paris" },
    propB: { candidateId: "knafo", text: "Doubler les effectifs de la police municipale pour atteindre 8 000 agents" }
  },
  {
    id: 14,
    theme: "Sécurité",
    subtopic: "Police municipale",
    propA: { candidateId: "dati", text: "Recruter 5 000 policiers municipaux armés pour sécuriser Paris" },
    propB: { candidateId: "npa", text: "Dissoudre la police municipale et démanteler la vidéosurveillance" }
  },
  {
    id: 15,
    theme: "Sécurité",
    subtopic: "Armement police",
    propA: { candidateId: "bournazel", text: "Armer les agents de sécurité de la Ville pour une réponse crédible sur le terrain" },
    propB: { candidateId: "knafo", text: "Armer la police municipale avec des armes à feu" }
  },
  {
    id: 16,
    theme: "Sécurité",
    subtopic: "Vidéosurveillance",
    propA: { candidateId: "dati", text: "Doubler le nombre de caméras de vidéoprotection sur l'ensemble de la capitale" },
    propB: { candidateId: "mariani", text: "Tripler le réseau de vidéoprotection pour atteindre 5 000 caméras" }
  },
  {
    id: 17,
    theme: "Sécurité",
    subtopic: "Vidéosurveillance IA",
    propA: { candidateId: "knafo", text: "Équiper les caméras de vidéosurveillance d'intelligence artificielle" },
    propB: { candidateId: "mariani", text: "Déployer la vidéosurveillance augmentée par intelligence artificielle" }
  },
  {
    id: 18,
    theme: "Sécurité",
    subtopic: "Zones de non-droit",
    propA: { candidateId: "dati", text: "Rétablir la sécurité dans les zones de non-droit et les quartiers sensibles" },
    propB: { candidateId: "knafo", text: "Plan de reconquête des zones de non-droit avec interpellations massives (Champs-Élysées, Barbès, La Chapelle)" }
  },
  {
    id: 19,
    theme: "Sécurité",
    subtopic: "Sécurité des femmes",
    propA: { candidateId: "chikirou", text: "Mettre en place un plan global de lutte contre les violences faites aux femmes dans l'espace public" },
    propB: { candidateId: "knafo", text: "Renforcer l'éclairage public nocturne dans tous les quartiers" }
  },

  // --- LOGEMENT ---
  {
    id: 20,
    theme: "Logement",
    subtopic: "Encadrement des loyers",
    propA: { candidateId: "gregoire", text: "Lutter contre la spéculation immobilière avec un encadrement renforcé des loyers" },
    propB: { candidateId: "knafo", text: "Supprimer l'encadrement des loyers" }
  },
  {
    id: 21,
    theme: "Logement",
    subtopic: "Logements sociaux",
    propA: { candidateId: "gregoire", text: "Construire 60 000 nouveaux logements publics abordables sur le mandat" },
    propB: { candidateId: "knafo", text: "Moratoire sur la construction de logements sociaux et sur les préemptions foncières" }
  },
  {
    id: 22,
    theme: "Logement",
    subtopic: "Logements sociaux",
    propA: { candidateId: "npa", text: "Construire massivement des logements sociaux, encadrer, geler et baisser les loyers" },
    propB: { candidateId: "bournazel", text: "Fixer un objectif de 25% de logements sociaux et pas au-delà pour maintenir la mixité" }
  },
  {
    id: 23,
    theme: "Logement",
    subtopic: "Vente HLM",
    propA: { candidateId: "knafo", text: "Vendre des logements sociaux (HLM) avec priorité aux occupants actuels, exonérés de frais de notaire" },
    propB: { candidateId: "bournazel", text: "Vendre une partie du parc de logements sociaux pour désendetter la Ville" }
  },
  {
    id: 24,
    theme: "Logement",
    subtopic: "Rénovation énergétique",
    propA: { candidateId: "gregoire", text: "Accompagner la rénovation de 200 000 logements privés avec des aides municipales" },
    propB: { candidateId: "bournazel", text: "Tripler le rythme de rénovation énergétique des logements parisiens" }
  },
  {
    id: 25,
    theme: "Logement",
    subtopic: "Attribution logements sociaux",
    propA: { candidateId: "dati", text: "Réformer l'attribution des logements sociaux pour plus de transparence et d'équité" },
    propB: { candidateId: "mariani", text: "Instaurer la priorité nationale pour l'accès au logement social, en privilégiant les familles et les travailleurs" }
  },
  {
    id: 26,
    theme: "Logement",
    subtopic: "Logements vacants",
    propA: { candidateId: "npa", text: "Réquisitionner sans indemnité les logements et bureaux vacants pour les transformer en logements" },
    propB: { candidateId: "dati", text: "Restaurer la confiance des propriétaires bailleurs avec des garanties municipales" }
  },
  {
    id: 27,
    theme: "Logement",
    subtopic: "Airbnb",
    propA: { candidateId: "bournazel", text: "Limiter les locations Airbnb à 30 jours par an au lieu de 120 actuellement" },
    propB: { candidateId: "gregoire", text: "Lutter contre la spéculation immobilière avec un encadrement renforcé des loyers" }
  },

  // --- FINANCE ET GESTION BUDGÉTAIRE ---
  {
    id: 28,
    theme: "Finance et gestion budgétaire",
    subtopic: "Audit budgétaire",
    propA: { candidateId: "dati", text: "Mener un audit complet de la gestion budgétaire de la Ville et publier les résultats" },
    propB: { candidateId: "chikirou", text: "Réaliser un audit citoyen de tous les contrats de la Ville avec les entreprises privées" }
  },
  {
    id: 29,
    theme: "Finance et gestion budgétaire",
    subtopic: "Impôts locaux",
    propA: { candidateId: "dati", text: "Garantir la stabilité fiscale : pas de hausse d'impôts locaux pendant le mandat" },
    propB: { candidateId: "knafo", text: "Diviser la taxe foncière par deux dès le premier budget" }
  },
  {
    id: 30,
    theme: "Finance et gestion budgétaire",
    subtopic: "Impôts locaux",
    propA: { candidateId: "mariani", text: "S'opposer à toute augmentation des taux d'imposition locale pendant toute la durée du mandat" },
    propB: { candidateId: "npa", text: "Mettre en place une taxation sur les entreprises et ménages fortunés pour financer les services publics" }
  },
  {
    id: 31,
    theme: "Finance et gestion budgétaire",
    subtopic: "35 heures",
    propA: { candidateId: "dati", text: "Faire appliquer les 35 heures effectives dans l'administration parisienne" },
    propB: { candidateId: "bournazel", text: "Appliquer strictement les 35 heures dans toute l'administration parisienne" }
  },
  {
    id: 32,
    theme: "Finance et gestion budgétaire",
    subtopic: "Économies budgétaires",
    propA: { candidateId: "bournazel", text: "Réaliser 120 millions d'euros d'économies annuelles sur le fonctionnement" },
    propB: { candidateId: "knafo", text: "Plan d'économies de 10 milliards d'euros sur 10 ans sur la gestion municipale" }
  },
  {
    id: 33,
    theme: "Finance et gestion budgétaire",
    subtopic: "Effectifs municipaux",
    propA: { candidateId: "dati", text: "Réduire la masse salariale par le non-remplacement d'une partie des départs en retraite" },
    propB: { candidateId: "knafo", text: "Réduire de moitié les effectifs municipaux sur 10 ans (55 000 agents) en ne remplaçant pas les départs naturels" }
  },
  {
    id: 34,
    theme: "Finance et gestion budgétaire",
    subtopic: "Austérité vs services publics",
    propA: { candidateId: "chikirou", text: "Refuser toute politique d'austérité et maintenir un haut niveau de services publics" },
    propB: { candidateId: "bournazel", text: "Diviser par deux la dette de Paris en six ans grâce à une gestion rigoureuse" }
  },

  // --- ÉDUCATION ---
  {
    id: 35,
    theme: "Education",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "chikirou", text: "Instaurer la gratuité de la cantine pour les trois premières tranches du quotient familial" },
    propB: { candidateId: "knafo", text: "Servir uniquement des produits issus de l'agriculture française dans les cantines scolaires" }
  },
  {
    id: 36,
    theme: "Education",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "gregoire", text: "Soulager le budget des familles grâce au gel des tarifs de cantine et à la gratuité progressive" },
    propB: { candidateId: "mariani", text: "Instaurer l'uniforme scolaire dès l'école primaire" }
  },
  {
    id: 37,
    theme: "Education",
    subtopic: "Rénovation des écoles",
    propA: { candidateId: "bournazel", text: "Plan 100% écoles rénovées et accessibles d'ici 2032" },
    propB: { candidateId: "chikirou", text: "Adapter 100% des collèges et écoles publics aux défis sanitaires et climatiques" }
  },
  {
    id: 38,
    theme: "Education",
    subtopic: "Mixité scolaire",
    propA: { candidateId: "gregoire", text: "Moduler les dotations financières aux établissements privés en fonction de critères de mixité sociale" },
    propB: { candidateId: "chikirou", text: "Renforcer les moyens des écoles et des collèges publics parisiens" }
  },

  // --- PROPRETÉ ---
  {
    id: 39,
    theme: "Propreté et gestion des déchets",
    subtopic: "Privatisation collecte",
    propA: { candidateId: "bournazel", text: "Privatiser la collecte des déchets pour diviser les coûts et améliorer la qualité" },
    propB: { candidateId: "mariani", text: "Externaliser totalement la collecte des déchets et laisser chaque arrondissement choisir son prestataire" }
  },
  {
    id: 40,
    theme: "Propreté et gestion des déchets",
    subtopic: "Privatisation collecte",
    propA: { candidateId: "dati", text: "Externaliser une partie de la collecte des déchets pour améliorer le service" },
    propB: { candidateId: "knafo", text: "Privatiser la collecte des ordures et le balayage via appels d'offres, avec reprise garantie de 80% des agents" }
  },

  // --- ÉCOLOGIE ET VÉGÉTALISATION ---
  {
    id: 41,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Anti-bruit",
    propA: { candidateId: "dati", text: "Lutter contre les nuisances sonores avec un plan anti-bruit ambitieux" },
    propB: { candidateId: "bournazel", text: "Créer un bouclier anti-bruit pour protéger les riverains des grands axes" }
  },
  {
    id: 42,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Végétalisation",
    propA: { candidateId: "dati", text: "Créer 500 bandes végétalisées dans les rues parisiennes" },
    propB: { candidateId: "knafo", text: "Embellir les parcs et jardins en replantant des fleurs" }
  },
  {
    id: 43,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Urbanisme vert",
    propA: { candidateId: "knafo", text: "Abroger le PLU bioclimatique et revenir à un PLU garantissant l'harmonie architecturale" },
    propB: { candidateId: "dati", text: "Désasphalter massivement Paris pour créer des îlots de fraîcheur" }
  },

  // --- PETITE ENFANCE ---
  {
    id: 44,
    theme: "Petite enfance / protection de l'enfance",
    subtopic: "Places en crèche",
    propA: { candidateId: "dati", text: "Créer 5 000 nouvelles places en crèche sur le mandat" },
    propB: { candidateId: "chikirou", text: "Ouvrir 6 500 nouvelles places en crèche publique sur le mandat" }
  },
  {
    id: 45,
    theme: "Petite enfance / protection de l'enfance",
    subtopic: "Places en crèche",
    propA: { candidateId: "bournazel", text: "10 000 solutions de garde supplémentaires grâce aux crèches et assistantes maternelles" },
    propB: { candidateId: "mariani", text: "Réserver en priorité les places en crèches municipales aux familles françaises" }
  },

  // --- DÉMOCRATIE LOCALE ---
  {
    id: 46,
    theme: "Vie démocratique",
    subtopic: "Référendums locaux",
    propA: { candidateId: "knafo", text: "Organiser au minimum deux référendums locaux par an" },
    propB: { candidateId: "mariani", text: "Organiser un référendum chaque fois que 5% du corps électoral en fait la demande" }
  },
  {
    id: 47,
    theme: "Vie démocratique",
    subtopic: "Conseils de quartier",
    propA: { candidateId: "bournazel", text: "Instaurer une gouvernance citoyenne avec des conseils de quartier renforcés et décisionnaires" },
    propB: { candidateId: "mariani", text: "Élire tous les conseils de quartier tous les 3 ans et les consulter pour tout projet les concernant" }
  },

  // --- SERVICES PUBLICS ---
  {
    id: 48,
    theme: "Services publics",
    subtopic: "Gratuité services",
    propA: { candidateId: "npa", text: "Rendre gratuits l'eau (premiers m³), les transports en commun, les centres de santé et les cantines" },
    propB: { candidateId: "gregoire", text: "Garantir un service public universel accessible à tous, y compris aux personnes éloignées du numérique" }
  },
  {
    id: 49,
    theme: "Services publics",
    subtopic: "Privatisation vs municipalisation",
    propA: { candidateId: "npa", text: "Arrêter toutes les privatisations et fermetures de classes, municipaliser les services publics" },
    propB: { candidateId: "bournazel", text: "Externaliser la collecte des déchets pour économiser 740 millions d'euros sur le mandat" }
  },

  // --- IMMIGRATION ---
  {
    id: 50,
    theme: "Immigration",
    subtopic: "Hébergement migrants",
    propA: { candidateId: "knafo", text: "Fermer le centre d'hébergement de migrants du Bois de Boulogne" },
    propB: { candidateId: "mariani", text: "Créer une brigade anti-campements clandestins pour démanteler les camps illicites" }
  },

  // --- SPORT ---
  {
    id: 51,
    theme: "Sport",
    subtopic: "Infrastructures sportives",
    propA: { candidateId: "chikirou", text: "Rendre gratuit l'accès aux infrastructures sportives municipales pour tous les Parisiens" },
    propB: { candidateId: "dati", text: "Augmenter les créneaux sportifs disponibles pour les associations et les scolaires" }
  },

  // --- DUELS AJOUTÉS (vérification programmes) ---

  // --- TRANSPORT (ajouts) ---
  {
    id: 52,
    theme: "Transports & Mobilités",
    subtopic: "Parking",
    propA: { candidateId: "mariani", text: "Créer 20 000 places de stationnement supplémentaires en parking souterrain" },
    propB: { candidateId: "bournazel", text: "Créer 30 000 places de parking-relais gratuites aux portes de Paris" }
  },
  {
    id: 53,
    theme: "Transports & Mobilités",
    subtopic: "Avenir du périphérique",
    propA: { candidateId: "bournazel", text: "Adapter les vitesses du périphérique selon les horaires : 50 km/h en pointe, 70 km/h en heures creuses" },
    propB: { candidateId: "chikirou", text: "Transformer le périphérique en boulevard urbain végétalisé" }
  },
  {
    id: 54,
    theme: "Transports & Mobilités",
    subtopic: "Métro la nuit",
    propA: { candidateId: "mariani", text: "Ouvrir le métro la nuit sur les lignes automatiques le week-end" },
    propB: { candidateId: "gregoire", text: "Obtenir le métro 24h/24 le week-end pour une ville qui ne dort jamais" }
  },
  {
    id: 55,
    theme: "Transports & Mobilités",
    subtopic: "ZTL centre de Paris",
    propA: { candidateId: "dati", text: "Mettre fin à la Zone à Trafic Limité (ZTL) du centre de Paris" },
    propB: { candidateId: "mariani", text: "Supprimer la Zone à Trafic Limité (ZTL) du centre de Paris" }
  },

  // --- SÉCURITÉ (ajouts) ---
  {
    id: 56,
    theme: "Sécurité",
    subtopic: "Police dans les transports",
    propA: { candidateId: "knafo", text: "Déployer 500 policiers municipaux sur le réseau de transport en commun parisien" },
    propB: { candidateId: "bournazel", text: "Déployer la police municipale dans le métro le soir contre les violences et agressions" }
  },
  {
    id: 57,
    theme: "Sécurité",
    subtopic: "Vidéosurveillance HLM",
    propA: { candidateId: "mariani", text: "Installer des caméras de vidéoprotection dans les parties communes des HLM" },
    propB: { candidateId: "npa", text: "Dissoudre la police municipale et démanteler la vidéosurveillance" }
  },
  {
    id: 58,
    theme: "Sécurité",
    subtopic: "Approche sécuritaire",
    propA: { candidateId: "chikirou", text: "Porter la police municipale à 3 500 agents avec une charte interdisant les contrôles au faciès" },
    propB: { candidateId: "knafo", text: "Doubler les effectifs de la police municipale pour atteindre 8 000 agents" }
  },

  // --- LOGEMENT (ajouts) ---
  {
    id: 59,
    theme: "Logement",
    subtopic: "Conversion bureaux",
    propA: { candidateId: "mariani", text: "Convertir des bureaux vacants en 6 000 logements pour les familles parisiennes" },
    propB: { candidateId: "bournazel", text: "Transformer les bureaux vacants en logements pour les classes moyennes" }
  },
  {
    id: 60,
    theme: "Logement",
    subtopic: "Régulation Airbnb",
    propA: { candidateId: "mariani", text: "Limiter les locations Airbnb à 60 nuits par an (contre 120 actuellement)" },
    propB: { candidateId: "bournazel", text: "Limiter les locations Airbnb à 30 jours par an au lieu de 120 actuellement" }
  },
  {
    id: 61,
    theme: "Logement",
    subtopic: "Accession à la propriété",
    propA: { candidateId: "knafo", text: "Baisser les frais de notaire (droits de mutation) de 10% pour faciliter l'accession à la propriété" },
    propB: { candidateId: "mariani", text: "Permettre à 40 000 familles parisiennes d'accéder à la propriété via un plan d'accession" }
  },
  {
    id: 62,
    theme: "Logement",
    subtopic: "Production de logements",
    propA: { candidateId: "chikirou", text: "Créer 80 000 logements publics supplémentaires, en majorité sociaux" },
    propB: { candidateId: "bournazel", text: "Remettre 60 000 logements sur le marché locatif grâce à un pacte avec les propriétaires" }
  },

  // --- SANTÉ (ajouts) ---
  {
    id: 63,
    theme: "Santé",
    subtopic: "Politique drogues",
    propA: { candidateId: "mariani", text: "Supprimer les salles de shoot et créer un centre de soin unique pour traiter la toxicomanie" },
    propB: { candidateId: "gregoire", text: "Des équipes pluridisciplinaires et des lieux dédiés à la réduction des risques liés aux addictions" }
  },
  {
    id: 64,
    theme: "Santé",
    subtopic: "Centres de santé",
    propA: { candidateId: "bournazel", text: "Ouvrir un centre municipal de santé sans dépassement d'honoraires dans chaque arrondissement d'ici 2032" },
    propB: { candidateId: "chikirou", text: "Densifier le réseau de centres de santé municipaux polyvalents dans tous les arrondissements" }
  },
  {
    id: 65,
    theme: "Santé",
    subtopic: "Santé mentale",
    propA: { candidateId: "chikirou", text: "Instaurer un chèque psy de 20€ par séance de psychothérapie pour les Parisiens" },
    propB: { candidateId: "mariani", text: "Lancer un plan de prévention des maladies mentales dans les écoles et collèges" }
  },
  {
    id: 66,
    theme: "Santé",
    subtopic: "Mutuelle / accès soins",
    propA: { candidateId: "chikirou", text: "Créer une mutuelle municipale populaire à tarif solidaire pour tous les Parisiens" },
    propB: { candidateId: "gregoire", text: "Une mutuelle municipale parisienne abordable et de qualité pour tous les Parisiens" }
  },
  {
    id: 67,
    theme: "Santé",
    subtopic: "Santé mobile",
    propA: { candidateId: "bournazel", text: "Déployer un bus de santé mobile dans les quartiers mal desservis médicalement" },
    propB: { candidateId: "chikirou", text: "Créer un service de bus itinérants santé dans les zones d'intervention prioritaire" }
  },

  // --- FINANCE (ajouts) ---
  {
    id: 68,
    theme: "Finance et gestion budgétaire",
    subtopic: "Taxe foncière",
    propA: { candidateId: "knafo", text: "Diviser la taxe foncière par deux dès le premier budget" },
    propB: { candidateId: "chikirou", text: "Augmenter la taxe foncière de 20,5% à 23% pour financer le logement et l'éducation" }
  },
  {
    id: 69,
    theme: "Finance et gestion budgétaire",
    subtopic: "Subventions associations",
    propA: { candidateId: "knafo", text: "Supprimer plus de 100 millions d'euros par an de subventions aux associations politisées et militantes" },
    propB: { candidateId: "dati", text: "Contrôler strictement les subventions aux associations et en publier le bilan" }
  },
  {
    id: 70,
    theme: "Finance et gestion budgétaire",
    subtopic: "Train de vie des élus",
    propA: { candidateId: "knafo", text: "Réduire le nombre d'adjoints au maire à 10 et diviser par cinq le cabinet du maire" },
    propB: { candidateId: "bournazel", text: "Supprimer toutes les voitures avec chauffeur des élus et cadres de la Ville" }
  },
  {
    id: 71,
    theme: "Finance et gestion budgétaire",
    subtopic: "Désendettement",
    propA: { candidateId: "bournazel", text: "Vendre 20 000 propriétés municipales situées hors de Paris pour rembourser 3 milliards de dette" },
    propB: { candidateId: "knafo", text: "Plan d'économies de 10 milliards d'euros sur 10 ans sur la gestion municipale" }
  },

  // --- ÉDUCATION (ajouts) ---
  {
    id: 72,
    theme: "Education",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "knafo", text: "Nommer un chef étoilé pour refondre les cantines scolaires avec des recettes à base de produits frais français" },
    propB: { candidateId: "chikirou", text: "Instaurer la cantine bio à 1 euro pour tous les écoliers parisiens" }
  },
  {
    id: 73,
    theme: "Education",
    subtopic: "Service minimum grève",
    propA: { candidateId: "mariani", text: "Garantir un service minimum d'accueil dans les crèches, écoles et cantines les jours de grève" },
    propB: { candidateId: "bournazel", text: "Mettre en place un vrai service minimum dans les écoles les jours de grève" }
  },
  {
    id: 74,
    theme: "Education",
    subtopic: "Soutien périscolaire",
    propA: { candidateId: "mariani", text: "Créer 100 centres de soutien scolaire gratuits dans les quartiers de Paris" },
    propB: { candidateId: "chikirou", text: "Recruter 2 000 animateurs périscolaires supplémentaires et titulariser les 4 000 contractuels actuels" }
  },

  // --- PATRIMOINE / CULTURE (ajouts) ---
  {
    id: 75,
    theme: "Patrimoine & Beauté de la ville",
    subtopic: "Embellissement",
    propA: { candidateId: "knafo", text: "Restaurer le mobilier urbain historique de Paris : bancs Davioud, réverbères classiques, grilles d'arbres en fonte" },
    propB: { candidateId: "dati", text: "Adopter une charte « Paris du beau » pour garantir l'esthétique des aménagements urbains" }
  },
  {
    id: 76,
    theme: "Culture et loisirs",
    subtopic: "Horaires culturels",
    propA: { candidateId: "knafo", text: "Ouvrir les musées municipaux en nocturne deux soirs par semaine et les bibliothèques le dimanche" },
    propB: { candidateId: "dati", text: "Ouvrir les bibliothèques municipales le dimanche et en soirée" }
  },

  // --- ÉCOLOGIE (ajouts) ---
  {
    id: 77,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Plantation d'arbres",
    propA: { candidateId: "mariani", text: "Planter 50 000 arbres supplémentaires à Paris" },
    propB: { candidateId: "chikirou", text: "Végétaliser 300 hectares et déimperméabiliser 40% du territoire parisien d'ici 2032" }
  },
  {
    id: 78,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Nouveaux espaces verts",
    propA: { candidateId: "bournazel", text: "Transformer la Petite Ceinture en poumon vert continu : promenades, jardins potagers et espaces sportifs" },
    propB: { candidateId: "dati", text: "Désasphalter massivement Paris pour créer des îlots de fraîcheur" }
  },

  // --- COMMERCE (ajouts) ---
  {
    id: 79,
    theme: "Economie locale & commerces",
    subtopic: "Revitalisation commerces",
    propA: { candidateId: "mariani", text: "Lancer un programme « 1 000 commerces » pour revitaliser les rues commerçantes de Paris" },
    propB: { candidateId: "chikirou", text: "Tripler les locaux commerciaux publics avec des loyers abaissés pour les commerces de proximité" }
  },
  {
    id: 80,
    theme: "Economie locale & commerces",
    subtopic: "Ouverture dominicale",
    propA: { candidateId: "bournazel", text: "Faire de Paris une Zone Touristique Unique pour autoriser l'ouverture dominicale des commerces" },
    propB: { candidateId: "npa", text: "Arrêter les dérogations au repos dominical" }
  },

  // --- PROPRETÉ (ajouts) ---
  {
    id: 81,
    theme: "Propreté et gestion des déchets",
    subtopic: "Lutte contre les nuisibles",
    propA: { candidateId: "chikirou", text: "Porter le budget de lutte contre les rats à 15 millions d'euros par an" },
    propB: { candidateId: "dati", text: "Mettre en place un plan anti-prolifération des nuisibles (rats, punaises de lit)" }
  },

  // --- SOLIDARITÉ (ajouts) ---
  {
    id: 82,
    theme: "Solidarité, inclusion & accessibilité",
    subtopic: "Sans-abri",
    propA: { candidateId: "chikirou", text: "Atteindre l'objectif zéro sans-abri à Paris avant la fin du mandat" },
    propB: { candidateId: "npa", text: "Développer l'hébergement d'urgence dans des conditions dignes et salubres" }
  },

  // --- PETITE ENFANCE (ajouts) ---
  {
    id: 83,
    theme: "Petite enfance / protection de l'enfance",
    subtopic: "Horaires de crèche",
    propA: { candidateId: "mariani", text: "Ouvrir des crèches la nuit pour les parents travaillant en horaires décalés" },
    propB: { candidateId: "bournazel", text: "Étendre les horaires des crèches jusqu'à 19h30 pour les parents aux horaires décalés" }
  },
  {
    id: 84,
    theme: "Petite enfance / protection de l'enfance",
    subtopic: "Gratuité crèche",
    propA: { candidateId: "mariani", text: "Instaurer la gratuité de la crèche à partir du 3ème enfant" },
    propB: { candidateId: "gregoire", text: "Recruter massivement du personnel en crèche pour améliorer le taux d'encadrement" }
  },

  // --- DÉMOCRATIE LOCALE (ajouts) ---
  {
    id: 85,
    theme: "Vie démocratique",
    subtopic: "Participation citoyenne",
    propA: { candidateId: "chikirou", text: "Augmenter le budget participatif de 5% à 15% du budget d'investissement (300 millions d'euros)" },
    propB: { candidateId: "knafo", text: "Référendum obligatoire pour tout projet municipal dépassant 10 millions d'euros" }
  },

  // --- ÉCOLOGIE (nouveaux duels Grégoire/Dati) ---
  {
    id: 86,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Lutte contre la chaleur",
    propA: { candidateId: "dati", text: "Plan Grand Chaud : rafraîchissement des rues, brumisateurs, fontaines, ombrages" },
    propB: { candidateId: "gregoire", text: "Objectif au moins un trottoir ombragé dans chaque rue pour anticiper les canicules" }
  },
  {
    id: 87,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Végétalisation",
    propA: { candidateId: "dati", text: "Créer 500 nouvelles bandes végétalisées durables avec arrosage et désherbage garantis" },
    propB: { candidateId: "gregoire", text: "300 nouveaux hectares de jardins ouverts au public avec horaires étendus toute l'année" }
  },
  {
    id: 88,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Périphérique",
    propA: { candidateId: "gregoire", text: "Transformation du périphérique en boulevard urbain relié par une grande ceinture verte" },
    propB: { candidateId: "bournazel", text: "Transformer les portes de Paris en véritables places urbaines végétalisées" }
  },
  {
    id: 89,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Bruit urbain",
    propA: { candidateId: "dati", text: "Plan de lutte contre la pollution sonore avec radars anti-bruit et zones apaisées" },
    propB: { candidateId: "gregoire", text: "Déploiement de capteurs et radars sonores pour réduire le bruit à l'échelle de chaque quartier" }
  },
  {
    id: 90,
    theme: "Espaces verts, végétalisation & biodiversité",
    subtopic: "Promenades vertes",
    propA: { candidateId: "gregoire", text: "25 km de promenade continue et végétalisée le long des berges de Seine" },
    propB: { candidateId: "dati", text: "Débitumer 100 hectares de sols parisiens pour lutter contre les îlots de chaleur" }
  },

  // --- PROPRETÉ (nouveaux duels Grégoire) ---
  {
    id: 91,
    theme: "Propreté et gestion des déchets",
    subtopic: "Méthode de nettoyage",
    propA: { candidateId: "gregoire", text: "Brigades anti-incivilités au sein de la police municipale contre les infractions de propreté" },
    propB: { candidateId: "bournazel", text: "Privatiser la collecte des déchets et le nettoiement des rues pour économiser 742 millions" }
  },
  {
    id: 92,
    theme: "Propreté et gestion des déchets",
    subtopic: "Réduction des déchets",
    propA: { candidateId: "gregoire", text: "Moins 100 000 tonnes de déchets : compostage dans tous les quartiers et tri dans l'espace public" },
    propB: { candidateId: "dati", text: "Brigades d'intervention d'urgence propreté prêtes à agir plusieurs fois par jour" }
  },

  // --- SOLIDARITÉ (nouveaux duels Grégoire) ---
  {
    id: 93,
    theme: "Solidarité, inclusion & accessibilité",
    subtopic: "Sans-abri",
    propA: { candidateId: "gregoire", text: "Création de 4 000 places d'hébergement d'urgence et réquisition des logements vides depuis 5 ans" },
    propB: { candidateId: "chikirou", text: "Atteindre l'objectif zéro sans-abri à Paris avant la fin du mandat" }
  },
  {
    id: 94,
    theme: "Solidarité, inclusion & accessibilité",
    subtopic: "Précarité menstruelle",
    propA: { candidateId: "gregoire", text: "Distribuer gratuitement des protections périodiques dans les équipements publics parisiens" },
    propB: { candidateId: "chikirou", text: "Ouvrir des restaurants populaires avec des menus bio et locaux à prix solidaires" }
  },

  // --- CULTURE (nouveaux duels Grégoire) ---
  {
    id: 95,
    theme: "Culture et loisirs",
    subtopic: "Accès aux musées",
    propA: { candidateId: "gregoire", text: "Tarifs réduits dans les grands musées nationaux pour tous les Parisiens en négociant avec l'État" },
    propB: { candidateId: "dati", text: "Créer un grand orchestre parisien des collèges avec 1 000 collégiens de tous les arrondissements" }
  },
  {
    id: 96,
    theme: "Culture et loisirs",
    subtopic: "Bibliothèques",
    propA: { candidateId: "gregoire", text: "Étendre les horaires des bibliothèques et des musées municipaux" },
    propB: { candidateId: "knafo", text: "Investir massivement dans la restauration du patrimoine architectural de Paris" }
  },

  // --- SPORT (nouveaux duels Grégoire) ---
  {
    id: 97,
    theme: "Sport",
    subtopic: "Sport féminin",
    propA: { candidateId: "gregoire", text: "Promouvoir la pratique sportive féminine en doublant les créneaux dédiés" },
    propB: { candidateId: "chikirou", text: "Gratuité des activités sportives municipales pour tous les moins de 25 ans" }
  },
  {
    id: 98,
    theme: "Sport",
    subtopic: "Horaires sportifs",
    propA: { candidateId: "gregoire", text: "Étendre les horaires des gymnases et piscines municipales et poursuivre leur rénovation" },
    propB: { candidateId: "dati", text: "Ouvrir plus de créneaux sportifs sur des plages horaires élargies toute l'année" }
  },

  // --- COMMERCE (nouveaux duels Grégoire) ---
  {
    id: 99,
    theme: "Economie locale & commerces",
    subtopic: "Locaux vacants",
    propA: { candidateId: "gregoire", text: "Mise aux enchères des locaux commerciaux vacants depuis plus de 12 mois" },
    propB: { candidateId: "dati", text: "Obligation d'une étude d'impact sur le commerce pour chaque grand projet d'aménagement" }
  },
  {
    id: 100,
    theme: "Economie locale & commerces",
    subtopic: "PME et ESS",
    propA: { candidateId: "gregoire", text: "Small Business Act : 50% de la commande publique orientée vers les PME et l'ESS" },
    propB: { candidateId: "bournazel", text: "Lancer un plan zéro boutique fermée dans les quartiers parisiens" }
  },

  // --- DÉMOCRATIE LOCALE (nouveaux duels Grégoire) ---
  {
    id: 101,
    theme: "Vie démocratique",
    subtopic: "Référendums locaux",
    propA: { candidateId: "gregoire", text: "Référendums et votations locales d'initiative partagée ouverts à tous quelle que soit la nationalité" },
    propB: { candidateId: "mariani", text: "Organiser des référendums municipaux sur les grands projets d'urbanisme" }
  },
  {
    id: 102,
    theme: "Vie démocratique",
    subtopic: "Grand Paris",
    propA: { candidateId: "gregoire", text: "Élire à terme un Maire du Grand Paris pour une action coordonnée" },
    propB: { candidateId: "bournazel", text: "Créer un conseil de quartier avec un vrai budget pour les riverains" }
  },

  // --- SÉCURITÉ (nouveaux duels Grégoire) ---
  {
    id: 103,
    theme: "Sécurité",
    subtopic: "Sécurité nocturne",
    propA: { candidateId: "gregoire", text: "Un droit à la nuit pour les femmes : éclairage renforcé et dispositif d'alerte sur les abribus" },
    propB: { candidateId: "mariani", text: "Rétablir un couvre-feu pour les mineurs de moins de 16 ans dans certains quartiers" }
  },

  // --- VIEILLESSE (nouveaux duels) ---
  {
    id: 104,
    theme: "Séniors",
    subtopic: "Aménagement seniors",
    propA: { candidateId: "dati", text: "Aménager l'espace public pour les personnes âgées : assises, îlots de fraîcheur, prévention des chutes" },
    propB: { candidateId: "gregoire", text: "Un espace public adapté aux seniors : bancs à intervalles réguliers, trottoirs désencombrés" }
  },

  // --- SANTÉ (nouveaux duels) ---
  {
    id: 105,
    theme: "Santé",
    subtopic: "Urgences",
    propA: { candidateId: "dati", text: "Plan de désengorgement des urgences avec maisons de santé dans chaque arrondissement" },
    propB: { candidateId: "gregoire", text: "100% d'alimentation bio et locale dans les cantines et crèches municipales" }
  },

  // --- HANDICAP (nouveau duel) ---
  {
    id: 106,
    theme: "Solidarité, inclusion & accessibilité",
    subtopic: "Accessibilité bâtiments",
    propA: { candidateId: "gregoire", text: "100% des bâtiments municipaux accessibles d'ici 2030 avec balises sonores pour malvoyants" },
    propB: { candidateId: "chikirou", text: "Rendre 100% des équipements municipaux accessibles avant la fin de la mandature" }
  }
];

const QUESTIONNAIRE_DATA = [
  {
    question: "Comment implique-t-on les parisiens dans les décisions pour Paris ?",
    theme: "Démocratie locale",
    context: null,
    choices: [
      { candidateId: "gregoire", text: "Référendums d'initiative partagé déclenché par les habitants quelque soit leur nationalité (pas de précision du seuil) + un laboratoire de conception partagée (usagers, citoyen.nes, monde de la recherche) mais pas de contrôle citoyen réel sur les politiques publiques mises en oeuvres" },
      { candidateId: "mariani", text: "Référendum déclenché si 5 % du corps électoral le demandent (≈70 000 électeurs), réservé aux électeurs inscrits, sans assemblées citoyennes." },
      { candidateId: "knafo", text: "Deux référendums par an maximum, ou référendum pour les projets municipaux dépassant 10 M€." },
      { candidateId: "chikirou", text: "Référendum d'initiative citoyenne déclenché par les habitants quelque soit leur nationalité (seuil de 100 000 signature), création d'assemblées citoyennes, garantir un véritable contrôle citoyen, et mesures sur la probité et limitation des frais et salaires des élus" },
      { candidateId: "dati", text: "Pas d'implication des citoyens" },
      { candidateId: "bournazel", text: "Pas de proposition sur ce sujet" },
      { candidateId: "npa", text: "Droit de vote des étrangers aux élections municipales et assemblées générales de travailleurs et d'usagers pour décider collectivement des besoins en services publics" },
    ]
  },
  {
    question: "Le nombre de logements sociaux doit :",
    theme: "Logement social",
    context: null,
    choices: [
      { candidateId: "gregoire", text: "être augmenté, avec priorité aux familles mono-parentales, jeunes, et travailleurs" },
      { candidateId: "mariani", text: "être réservé aux français, aux familles, et aux personnes qui travaillent" },
      { candidateId: "dati", text: "être réduit" },
      { candidateId: "chikirou", text: "être augmenté, notamment les logements très sociaux (PLAI)" },
      { candidateId: "bournazel", text: "être augmenté et réservé aux personnes qui travaillent" },
      { candidateId: "knafo", text: "être réduit" },
      { candidateId: "npa", text: "être massivement augmenté, en réquisitionnant les logements et bureaux vacants et en interdisant toutes les expulsions" },
    ]
  },
  {
    question: "La police doit :",
    theme: "Sécurité",
    context: "Il y a aujourd'hui 2 200 policiers municipaux à Paris",
    choices: [
      { candidateId: "bournazel", text: "être armée" },
      { candidateId: "knafo", text: "être armée" },
      { candidateId: "dati", text: "être armée" },
      { candidateId: "chikirou", text: "être formée, notamment aux violences sexistes et sexuelles" },
      { candidateId: "gregoire", text: "être formée, notamment aux violences sexistes et sexuelles" },
      { candidateId: "mariani", text: "être armée" },
      { candidateId: "npa", text: "être dissoute : la sécurité doit passer par la lutte contre les inégalités sociales, pas par la répression policière" },
    ]
  },
  {
    question: "On fait quoi du boulevard périphérique ?",
    theme: "Boulevard périphérique",
    context: null,
    choices: [
      { candidateId: "bournazel", text: "On augmente la vitesse" },
      { candidateId: "dati", text: "On augmente la vitesse" },
      { candidateId: "mariani", text: "On augmente la vitesse" },
      { candidateId: "chikirou", text: "On l'apaise pour pouvoir le franchir plus facilement et réduire les nuisances des riverains" },
      { candidateId: "gregoire", text: "On l'apaise pour pouvoir le franchir plus facilement et réduire les nuisances des riverains" },
      { candidateId: "knafo", text: "On augmente la vitesse" },
      { candidateId: "npa", text: "Pas de proposition spécifique sur le périphérique, mais la priorité est de rendre les transports en commun gratuits pour réduire la dépendance à la voiture" },
    ]
  },
  {
    question: "On fait quoi de l'encadrement des loyers ?",
    theme: "Encadrement des loyers",
    context: null,
    choices: [
      { candidateId: "gregoire", text: "On se donne les moyens pour le faire respecter" },
      { candidateId: "bournazel", text: "On reste comme maintenant" },
      { candidateId: "dati", text: "On l'assouplit" },
      { candidateId: "chikirou", text: "On le renforce" },
      { candidateId: "knafo", text: "On le supprime" },
      { candidateId: "mariani", text: "On le supprime" },
      { candidateId: "npa", text: "On va plus loin : on encadre, on gèle et on baisse les loyers pour mettre fin à la spéculation immobilière" },
    ]
  },
  {
    question: "Faut-il renforcer ou réduire les services et biens publics ?",
    theme: "Services publics",
    context: null,
    choices: [
      { candidateId: "dati", text: "On vend le patrimoine non-stratégique de la Ville (dont logements sociaux et parc des princes) et on réduit le nombre de fonctionnaires." },
      { candidateId: "bournazel", text: "On vend le patrimoine non-stratégique de la Ville (dont logements sociaux) et on privatise le service public de la propreté" },
      { candidateId: "knafo", text: "On vend les logements sociaux et on réduit le nombre de fonctionnaires" },
      { candidateId: "gregoire", text: "On vend le patrimoine non-stratégique de la Ville et on renforce les services publics municipaux" },
      { candidateId: "chikirou", text: "On refuse la vente du patrimoine public et crée de nouveaux services publics municipaux" },
      { candidateId: "mariani", text: "On vend les logements sociaux" },
      { candidateId: "npa", text: "On arrête toutes les privatisations, on municipalise les services essentiels et on rend gratuits l'eau, les transports, les centres de santé et les cantines" },
    ]
  },
  {
    question: "Que fait-on vis-à-vis des personnes sans-abris ?",
    theme: "Lutte contre le sans-abrisme",
    context: "3 507 personnes sans solution d'hébergement ont été recensées à Paris en janvier 2025, dont 2 200 enfants, tandis que 264 000 logements sont vacants",
    choices: [
      { candidateId: "chikirou", text: "On réquisitionne les bâtiments vacants depuis 18 mois pour mettre à l'abri les personnes à la rue et on développe des dispositifs d'accompagnement, notamment pour les familles et les enfants" },
      { candidateId: "bournazel", text: "On crée de nouvelles places d'hébergement d'urgence et on rachète des hôtels 1 étoile pour les transformer en structures d'hébergement." },
      { candidateId: "dati", text: "On met fin à l'accueil d'urgence dans les gymnases lors des vagues de froid." },
      { candidateId: "gregoire", text: "On crée de nouvelles places d'hébergement d'urgence avec un objectif de « zéro enfant à la rue »." },
      { candidateId: "mariani", text: "On crée une brigade anti-campement de clandestins et on ferme les structures municipales d'accueil pour migrants" },
      { candidateId: "knafo", text: "On met fin à l'accueil dans les gymnases lors des vagues de froid et on réduit les subventions aux associations d'aide aux migrants." },
      { candidateId: "npa", text: "On réquisitionne les logements vacants, on interdit les expulsions, on régularise tous les sans-papiers et on développe un hébergement d'urgence digne pour tous" },
    ]
  },
  {
    question: "La ville doit-elle continuer de subventionner les associations actuelles ?",
    theme: "Subventions aux associations",
    context: null,
    choices: [
      { candidateId: "mariani", text: "Non, on supprimera notamment les subventions versées aux associations « immigrationnistes »." },
      { candidateId: "knafo", text: "Non, on réduira les subventions aux associations (association d'aide aux migrants, culturelles, aide au développement…)" },
      { candidateId: "bournazel", text: "Non, on baissera les subventions après un audit indépendant évaluant leur pertinence." },
      { candidateId: "gregoire", text: "Oui, on renforcera les subventions pour les associations engagées dans les domaines sociaux et des libertés publiques." },
      { candidateId: "chikirou", text: "Oui, on renforcera les subventions pour les associations engagées dans les domaines sociaux et des libertés publiques." },
      { candidateId: "dati", text: "Non, on réduira certaines subventions" },
      { candidateId: "npa", text: "Oui, on défend les associations menacées et on renforce le soutien aux associations des quartiers populaires qui accompagnent les travailleurs et les familles" },
    ]
  },
  {
    question: "Quelle place pour la voiture à Paris ?",
    theme: "Place de la voiture",
    context: null,
    choices: [
      { candidateId: "dati", text: "Supprimer la Zone à Trafic Limité (ZTL) du centre de Paris, rééquilibrer la rue de Rivoli, et favoriser les voitures électriques" },
      { candidateId: "knafo", text: "Rouvrir les voies sur berge aux voitures et créer des stationnements gratuits" },
      { candidateId: "chikirou", text: "Réduire la place de la voiture dans l'espace public" },
      { candidateId: "gregoire", text: "Réduire la place de la voiture dans l'espace public" },
      { candidateId: "bournazel", text: "Créer des stationnements gratuits" },
      { candidateId: "mariani", text: "Supprimer la Zone à Trafic Limité (ZTL) du centre de Paris et créer des stationnements gratuits" },
      { candidateId: "npa", text: "Réduire la place de la voiture au profit des transports en commun gratuits et accessibles à tous" },
    ]
  },
  {
    question: "Quelle place pour le vélo à Paris ?",
    theme: "Vélo",
    context: null,
    choices: [
      { candidateId: "mariani", text: "On suspend le développement des pistes cyclables pour les auditer et rééquilibrer l'espace public." },
      { candidateId: "dati", text: "On maintient le vélo mais en rééquilibrant l'espace public entre vélos, piétons, bus et voitures." },
      { candidateId: "gregoire", text: "On poursuit et achève la transformation de Paris en ville très cyclable." },
      { candidateId: "chikirou", text: "On développe l'usage du vélo comme mobilité populaire et accessible (tarifs, aides, formation)." },
      { candidateId: "knafo", text: "On remet la voiture au centre et on revoit l'organisation actuelle du vélo." },
      { candidateId: "bournazel", text: "On maintient les pistes cyclables mais on les régule et on renforce les contrôles." },
      { candidateId: "npa", text: "La priorité est aux transports en commun gratuits, mais le vélo doit aussi être accessible à tous comme mobilité populaire" },
    ]
  },
  {
    question: "Développe-t-on les transports en commun ?",
    theme: "Transport en commun",
    context: null,
    choices: [
      { candidateId: "gregoire", text: "Oui, on renforce fortement l'offre de transports en commun (métro de nuit le week-end, nouveaux tramways et bus fréquents)." },
      { candidateId: "mariani", text: "Non, mais on ouvre le métro la nuit et le week-end sur les lignes automatiques." },
      { candidateId: "bournazel", text: "Oui, on crée des lignes de bus express pour traverser Paris plus rapidement." },
      { candidateId: "chikirou", text: "Oui, on renforce le réseau de bus (fréquence, horaire, ruptures urbaines)" },
      { candidateId: "dati", text: "Non, pas de mesure spécifique sur les transports en commun." },
      { candidateId: "knafo", text: "Non, pas de mesure spécifique sur les transports en commun." },
      { candidateId: "npa", text: "Oui, on rend les transports en commun gratuits pour tous, financés par les employeurs, et on s'oppose à la privatisation du réseau de bus RATP" },
    ]
  },
  {
    question: "Faut-il mener une politique municipale pour l'égalité femmes-hommes ?",
    theme: "Féminisme",
    context: null,
    choices: [
      { candidateId: "mariani", text: "Seulement en créant des résidences sécurisées pour les victimes de violences conjugales." },
      { candidateId: "bournazel", text: "Seulement en soutenant les familles monoparentales avec une carte « parent solo » pour faciliter l'accès aux services municipaux (tarification des crèches, des cantines et des activités périscolaires, mais aussi pour l'accès aux activités culturelles et sportives)." },
      { candidateId: "gregoire", text: "Oui, en menant une politique globale pour la protection des victimes (maison des femmes avec prise en charge médicale, psychologique, sociale et juridique, et des hébergements d'urgence), pour la santé des femmes, pour l'égalité (rééquilibrage des noms de rue, promotion de la pratique sportive), et en soutenant financièrement les associations féministes." },
      { candidateId: "chikirou", text: "Oui, en menant une politique globale pour éduquer (intervention en milieu scolaire, campagne de sensibilisation), soutenir financièrement, protéger (former les forces de l'ordre et créer une unité de police municipale spécialisée dans la lutte contre les violences sexistes et sexuelles, lutter contre le harcèlement de rue), et soutenir (créer des places d'hébergement d'urgence dédiées)" },
      { candidateId: "knafo", text: "Seulement en mieux éclairant la nuit (réverbères dotés de capteurs pilotés par l'IA capables de réagir aux crimes et délits)" },
      { candidateId: "dati", text: "Pas de proposition sur ce sujet" },
      { candidateId: "npa", text: "Oui, en créant des lieux d'hébergement pour les femmes victimes de violences et les victimes de violences homophobes ou transphobes, et en développant crèches et cantines populaires pour alléger la double journée des femmes" },
    ]
  },
  {
    question: "Que fait-on au sujet des crèches ?",
    theme: "Crèches",
    context: "Clivage sur la gestion privée ou publique des crèches et la tarification.",
    choices: [
      { candidateId: "mariani", text: "On donne la priorité aux familles françaises, on élargit les horaires (crèches de nuit) et on introduit une politique familiale avec gratuité à partir du 3e enfant." },
      { candidateId: "bournazel", text: "On augmente fortement l'offre de garde en diversifiant les solutions (Maisons des Nounous, nouveaux modes de garde) mais on ne modifie pas la tarification actuelle" },
      { candidateId: "gregoire", text: "On renforce les moyens du service public de la petite enfance (recrutements et accompagnement des familles) et on priorise les familles monoparentales avec une tarification adaptée." },
      { candidateId: "chikirou", text: "On développe massivement les crèches publiques avec des tarifs selon les revenus, on élargit les horaires (soir et week-end), et on régule le secteur privé." },
      { candidateId: "dati", text: "On élargit les horaires d'accueil des crèches et écoles mais on ne propose pas davantage de places, ni de tarification évolutive selon les revenus" },
      { candidateId: "knafo", text: "On augmentera l'offre de places en combinant crèches municipales et privées, et on ne modifie pas les tarifs actuels" },
      { candidateId: "npa", text: "On crée massivement des crèches publiques, on embauche et forme le personnel avec de vrais salaires, et on organise des assemblées avec les parents pour définir les besoins" },
    ]
  },
  {
    question: "Les cantines scolaires doivent-elles être plus accessibles financièrement ?",
    theme: "Cantines scolaires",
    context: "Clivage sur les tarifs des cantines et l'instauration d'un service minimum qui revient à limiter le droit de grève",
    choices: [
      { candidateId: "mariani", text: "On plafonne le prix de la cantine à 3€ par repas et on limite le droit de grève en garantissant un service minimum." },
      { candidateId: "bournazel", text: "On adapte la tarification pour les familles monoparentales et on limite le droit de grève en garantissant un service minimum." },
      { candidateId: "gregoire", text: "On renforce l'accès social aux cantines avec la gratuité pour les plus modestes et le gel des tarifs pour les autres." },
      { candidateId: "chikirou", text: "On instaure la gratuité de la cantine pour les revenus modestes et une tarification plus progressive selon les revenus." },
      { candidateId: "dati", text: "Pas de proposition sur la tarification des cantines." },
      { candidateId: "knafo", text: "Pas de proposition sur la tarification des cantines." },
      { candidateId: "npa", text: "Oui, on rend les cantines gratuites pour tous et on défend le droit de grève des agents" },
    ]
  },
  {
    question: "La culture doit-elle être populaire et doit-on soutenir les acteurs indépendants ?",
    theme: "Culture",
    context: null,
    choices: [
      { candidateId: "mariani", text: "Non" },
      { candidateId: "bournazel", text: "Non, l'école assure l'égalité culturelle et artistique, et il faut réduire les subventions." },
      { candidateId: "gregoire", text: "Oui, il faut soutenir la diversité culturelle, soutenir financièrement les librairies, cinémas et commerces culturels indépendants, mais sans modifier profondément la structure tarifaire actuelle" },
      { candidateId: "chikirou", text: "Oui, il faut mettre fin à la mainmise du privé sur le patrimoine culturel parisien, soutenir les librairies et cinémas indépendants, soutenir les artistes, favoriser la gratuité et la tarification sociale des équipements culturels, et créer des lieux d'éducation populaire." },
      { candidateId: "dati", text: "Non, l'école assure l'égalité culturelle et artistique et il faut réduire les subventions." },
      { candidateId: "knafo", text: "Non, l'école assure l'égalité culturelle et artistique, il faut réduire les subventions aux associations, mais consacrer 300 millions d'euros à la restauration des églises" },
      { candidateId: "npa", text: "Oui, il faut défendre les espaces culturels populaires et les associations menacées, maintenir le Pass Culture collectif et ouvrir des lieux de rencontre et d'éducation populaire dans les quartiers" },
    ]
  },
  {
    question: "La politique éducative municipale doit :",
    theme: "Éducation",
    context: null,
    choices: [
      { candidateId: "mariani", text: "Porter sur l'ordre, la discipline et l'identité : priorité aux français dans certains services, service minimum dans les écoles les jours de grève" },
      { candidateId: "bournazel", text: "Faciliter la vie des familles : amélioration du périscolaire, facilitation des démarches administratives, adaptation des horaires (écoles, crèches)." },
      { candidateId: "gregoire", text: "Réduire les inégalités : tarification sociale des cantines, actions d'éducation à l'égalité, soutien aux activités culturelles et sportives pour les enfants, politiques ciblées vers les quartiers populaires." },
      { candidateId: "chikirou", text: "Réduire les inégalités : tarification sociale des cantines, actions d'éducation à l'égalité, soutien aux activités culturelles et sportives pour les enfants, politiques ciblées vers les quartiers populaires." },
      { candidateId: "dati", text: "Faciliter la vie des familles : amélioration du périscolaire, facilitation des démarches administratives, adaptation des horaires (écoles, crèches)." },
      { candidateId: "knafo", text: "Porter sur l'ordre, la discipline et l'identité : priorité aux français dans certains services, service minimum dans les écoles les jours de grève" },
      { candidateId: "npa", text: "S'opposer aux fermetures de classes et aux suppressions de postes, exiger le remplacement systématique des enseignants absents et embaucher massivement dans l'éducation" },
    ]
  },
  {
    question: "La politique sportive municipale doit :",
    theme: "Sport",
    context: null,
    choices: [
      { candidateId: "mariani", text: "Créer trois nouvelles piscines municipales — c'est ma seule mesure !" },
      { candidateId: "bournazel", text: "Améliorer l'accès au sport : élargir les horaires, créer 17 nouvelles aires sportives de proximité, lancer une Olympiade sportive des arrondissements chaque année." },
      { candidateId: "gregoire", text: "Être un service public favorisant l'égalité : accès facilité aux équipements sportifs, soutien aux clubs et aux associations sportives, promotion du sport féminin, soutien financier d'une pratique sportive par enfant selon condition de ressource…" },
      { candidateId: "chikirou", text: "Être un outil social et populaire d'émancipation : gratuité pour les -25 ans, 100 % des enfants sachant nager, budget participatif annuel de 10 millions d'euros, des équipements sportifs de proximité, renforcer l'offre pour les personnes âgées…" },
      { candidateId: "dati", text: "Être efficace : modernisation des équipements sportifs, horaires élargis, priorité à la natation" },
      { candidateId: "knafo", text: "Être efficace : horaires élargis, création de terrains de sport sous le métro aérien" },
      { candidateId: "npa", text: "Garantir la gratuité des équipements sportifs municipaux pour tous, en embauchant du personnel et en ouvrant de nouveaux créneaux dans les quartiers populaires" },
    ]
  },
  {
    question: "Dis-moi combien le sport est important pour toi",
    theme: "Sport",
    context: null,
    choices: [
      { candidateId: "mariani", text: "J'ai 1 mesure sur le sport : créer trois nouvelles piscines municipales" },
      { candidateId: "bournazel", text: "J'ai 3 mesures : élargir les horaires des équipements sportifs, créer 17 nouvelles aires sportives de proximité, lancer une Olympiade sportive des arrondissements chaque année." },
      { candidateId: "gregoire", text: "J'ai 8 mesures pour notamment favoriser l'égalité dans le sport : promotion du sport féminin, soutien financier d'une pratique sportive par enfant selon condition de ressource, élargir les horaires des gymnases et piscines municipales et poursuivre leur rénovation..." },
      { candidateId: "chikirou", text: "J'ai 25 mesures pour un sport populaire et accessible à tous : gratuité pour les -25 ans, 100 % des enfants sachant nager, budget participatif annuel de 10 millions d'euros, des équipements sportifs de proximité, renforcer l'offre pour les personnes âgées…" },
      { candidateId: "dati", text: "J'ai 4 mesures : élargir les horaires des équipements sportifs, rénover les équipements sportifs, créer un village sportif au Parc des Princes, réserver des créneaux pour le handi-sport" },
      { candidateId: "knafo", text: "J'ai 2 mesures : élargir les horaires des centres sportifs, créer des terrains de sport sous le métro aérien" },
      { candidateId: "npa", text: "Pas de mesure spécifique sur le sport, la priorité est aux services publics essentiels (santé, éducation, logement, transports)" },
    ]
  },
  {
    question: "Dis-moi combien la santé est importante pour toi",
    theme: "Santé",
    context: null,
    choices: [
      { candidateId: "mariani", text: "J'ai 5 mesures : supprimer les salles de shoot à Paris et ouvrir un centre de soin unique pour traiter la toxicomanie, plan de lutte contre la consommation de stupéfiants et d'accompagnement vers la réinsertion sociale, prévention scolaire obligatoire sur les dangers des stupéfiants, soutenir toutes les initiatives et recrutements pour assurer une médecine scolaire de qualité pour nos enfants, plan de prévention des maladies mentales dans nos écoles et collèges" },
      { candidateId: "bournazel", text: "J'ai 4 mesures : maintenir la halte soins addictions mais l'adosser à un centre mobile et à une prise en charge psycho-médicosociale, attirer plus de médecins à Paris, installer un centre municipal Paris Santé Prévention sans dépassement d'honoraire dans chaque arrondissement, déployer un grand plan endométriose." },
      { candidateId: "gregoire", text: "J'ai 7 mesures : une mutuelle municipale abordable, objectif 100 nouveaux lieux de soin de proximité en secteur 1, un service de santé scolaire renforcé, un grand plan de santé mentale, un plan santé sexuelle, un parcours spécifique à l'endométriose, des équipes et lieux dédiés pour les usagers de drogue et troubles psychiques." },
      { candidateId: "chikirou", text: "J'ai 23 mesures pour un service public municipal de la santé : développer une politique ambitieuse de prévention et d'éducation à la santé, garantir l'égalité d'accès à des soins de haut niveau à Paris, prévenir et soigner plutôt que réprimer : une politique de santé face aux addictions, ériger la santé mentale en cause commune" },
      { candidateId: "dati", text: "J'ai 2 mesures : campagnes de dépistage (respiratoires, cardio-vasculaires, cancers, santé mentale) et installation de maisons de santé et de centres de soins non programmés." },
      { candidateId: "knafo", text: "J'ai 4 mesures : créer une cartographie des temps d'attente des urgences en temps réel, doubler la contribution de la Ville au Centre Régional de Coordination des Dépistages des cancers, financer la recherche médicale (notamment contre le cancer et la maladie d'Alzheimer), rénover les EHPAD municipaux et développer les soins palliatifs" },
      { candidateId: "npa", text: "Défendre l'hôpital public contre les coupes budgétaires, garantir des soins gratuits et dignes pour tous, embaucher massivement dans la santé et s'opposer aux fermetures de centres de santé" },
    ]
  },
  {
    question: "Proposez-vous une écologie accessible à tous ?",
    theme: "Énergie et eau",
    context: null,
    choices: [
      { candidateId: "bournazel", text: "Un peu : rénovation thermique du parc social, des subventions pour la rénovation des logements privés, et le financement de photovoltaïques sur les toitures privées." },
      { candidateId: "gregoire", text: "Oui, renforcement des aides versées pour la rénovation thermique, isolation du parc social, expérimentation d'une avance à taux zéro des travaux de rénovation, dispositif d'achat groupé d'électricité et de gaz négocié par la Ville pour réduire la facture énergétique, investir dans les réseaux publics de chaleur et de froid pour garantir des factures énergétiques réduites." },
      { candidateId: "chikirou", text: "Développer une production énergétique locale et renouvelable (méthanisation des biodéchets, géothermie profonde, récupérer la chaleur des centres de données), accélérer la rénovation énergétique, protéger la ressource en eau et garantir sa qualité" },
      { candidateId: "dati", text: "Non, seulement la rénovation du parc social, comme tous les autres candidats" },
      { candidateId: "knafo", text: "Pas de proposition sur ce sujet" },
      { candidateId: "mariani", text: "Pas de proposition sur ce sujet" },
      { candidateId: "npa", text: "Exproprier les groupes privés qui gèrent l'eau et l'énergie, les placer sous contrôle des travailleurs et des usagers, et rendre les transports en commun gratuits pour répondre à l'urgence écologique" },
    ]
  }
];
