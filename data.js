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
  "Santé",
  "Éducation",
  "Périscolaire",
  "Petite enfance",
  "Jeunesse",
  "Sécurité",
  "Finance et gestion budgétaire",
  "Transport",
  "Sport",
  "Culture",
  "Propreté",
  "Écologie et végétalisation",
  "Logement",
  "Vieillesse",
  "Handicap",
  "Solidarité",
  "Patrimoine et beauté de la ville",
  "Services publics",
  "Commerce",
  "Probité",
  "Immigration",
  "Démocratie locale",
  "Urbanisme",
  "Emploi et travail"
];

const PROPOSITIONS = [
  // === SANTÉ ===
  { id: 1, theme: "Santé", text: "Une mutuelle municipale parisienne abordable et de qualité pour tous les Parisiens", candidateId: "gregoire" },
  { id: 2, theme: "Santé", text: "Objectif 100 nouveaux lieux de soin de proximité en secteur 1 ou 2 conventionné", candidateId: "gregoire" },
  { id: 3, theme: "Santé", text: "Un parcours des 1000 premiers jours de l'enfant pour accompagner les familles dès la grossesse", candidateId: "gregoire" },
  { id: 4, theme: "Santé", text: "Un service de santé scolaire renforcé avec des bilans de santé réguliers pour tous les enfants", candidateId: "gregoire" },
  { id: 5, theme: "Santé", text: "Un plan ambitieux pour la santé sexuelle et reproductive", candidateId: "gregoire" },
  { id: 6, theme: "Santé", text: "Des équipes pluridisciplinaires et des lieux dédiés à la réduction des risques liés aux addictions", candidateId: "gregoire" },
  { id: 7, theme: "Santé", text: "Un parcours d'accompagnement spécifique et personnalisé pour les femmes souffrant d'endométriose", candidateId: "gregoire" },
  { id: 8, theme: "Santé", text: "Densifier le réseau de centres de santé municipaux polyvalents dans tous les arrondissements", candidateId: "chikirou" },
  { id: 9, theme: "Santé", text: "Créer un service de bus itinérants santé dans les zones d'intervention prioritaire", candidateId: "chikirou" },
  { id: 10, theme: "Santé", text: "Recruter dans les centres de santé municipaux des psychologues pratiquant des tarifs accessibles", candidateId: "chikirou" },

  // === ÉDUCATION ===
  { id: 11, theme: "Éducation", text: "Défendre l'école publique en luttant contre les fermetures de classe imposées par l'État", candidateId: "gregoire" },
  { id: 12, theme: "Éducation", text: "Moduler les dotations financières aux établissements privés en fonction de critères de mixité sociale", candidateId: "gregoire" },
  { id: 13, theme: "Éducation", text: "Exiger de l'État un véritable statut pour les AESH et des moyens à la hauteur de l'inclusion", candidateId: "gregoire" },
  { id: 14, theme: "Éducation", text: "Ouvrir 50 nouvelles unités d'enseignement adaptées pour les enfants en situation de handicap", candidateId: "gregoire" },
  { id: 15, theme: "Éducation", text: "Soulager le budget des familles grâce au gel des tarifs de cantine et à la gratuité progressive", candidateId: "gregoire" },
  { id: 16, theme: "Éducation", text: "Mettre en œuvre un grand plan de rénovation et de végétalisation des écoles parisiennes", candidateId: "gregoire" },
  { id: 17, theme: "Éducation", text: "Renforcer les moyens des écoles et des collèges publics parisiens", candidateId: "chikirou" },
  { id: 18, theme: "Éducation", text: "Instaurer la gratuité de la cantine pour les trois premières tranches du quotient familial", candidateId: "chikirou" },
  { id: 19, theme: "Éducation", text: "Adapter 100% des collèges et écoles publics aux défis sanitaires et climatiques", candidateId: "chikirou" },
  { id: 20, theme: "Éducation", text: "Garantir une ATSEM par classe en maternelle dans toutes les écoles parisiennes", candidateId: "chikirou" },
  { id: 21, theme: "Éducation", text: "Former les animateurs et intervenants sur le temps périscolaire à l'éducation non-sexiste", candidateId: "chikirou" },
  { id: 22, theme: "Éducation", text: "Aller vers la gratuité de l'école publique à Paris en commençant par les fournitures scolaires", candidateId: "chikirou" },
  { id: 23, theme: "Éducation", text: "Plan 100% écoles rénovées et accessibles d'ici 2032", candidateId: "bournazel" },
  { id: 24, theme: "Éducation", text: "Dès l'été 2026, adopter un budget rectificatif pour doubler les crédits de rénovation des écoles", candidateId: "bournazel" },
  { id: 25, theme: "Éducation", text: "Mettre en place un vrai service minimum dans les écoles les jours de grève", candidateId: "bournazel" },
  { id: 26, theme: "Éducation", text: "Éveiller les enfants au codage et à l'intelligence artificielle dès l'école primaire", candidateId: "bournazel" },
  { id: 27, theme: "Éducation", text: "Faire démarrer les cours au collège à 9h pour respecter le sommeil des adolescents", candidateId: "bournazel" },

  // === PÉRISCOLAIRE ===
  { id: 28, theme: "Périscolaire", text: "Garantir la qualité de l'accueil périscolaire avec un encadrement renforcé et des activités variées", candidateId: "gregoire" },
  { id: 29, theme: "Périscolaire", text: "Développer les classes de découverte pour que chaque enfant parte au moins une fois en séjour", candidateId: "gregoire" },
  { id: 30, theme: "Périscolaire", text: "Revaloriser le secteur de l'animation avec de meilleures conditions de travail et de rémunération", candidateId: "gregoire" },
  { id: 31, theme: "Périscolaire", text: "Créer une offre « péricollège » pour accompagner les collégiens après les cours", candidateId: "gregoire" },
  { id: 32, theme: "Périscolaire", text: "Un accueil périscolaire « tout-en-un » incluant aide aux devoirs, sport et culture", candidateId: "bournazel" },
  { id: 33, theme: "Périscolaire", text: "Des primes pour les personnels périscolaires afin de fidéliser les équipes", candidateId: "bournazel" },
  { id: 34, theme: "Périscolaire", text: "Créer une inspection municipale de la qualité périscolaire", candidateId: "bournazel" },
  { id: 35, theme: "Périscolaire", text: "Mobiliser les professeurs de la Ville de Paris pour enrichir l'offre périscolaire", candidateId: "bournazel" },

  // === PETITE ENFANCE ===
  { id: 36, theme: "Petite enfance", text: "Créer 5 000 nouvelles places en crèche sur le mandat", candidateId: "dati" },
  { id: 37, theme: "Petite enfance", text: "Proposer des prêts à taux zéro pour les assistantes maternelles qui s'installent", candidateId: "dati" },
  { id: 38, theme: "Petite enfance", text: "Revenir sur la réforme des rythmes scolaires pour mieux répondre aux besoins des familles", candidateId: "dati" },
  { id: 39, theme: "Petite enfance", text: "Créer des maisons de la parentalité dans chaque arrondissement", candidateId: "dati" },
  { id: 40, theme: "Petite enfance", text: "Renforcer la protection de l'enfance avec des moyens humains et financiers supplémentaires", candidateId: "gregoire" },
  { id: 41, theme: "Petite enfance", text: "Organiser une convention citoyenne sur l'enfance et la parentalité à Paris", candidateId: "gregoire" },
  { id: 42, theme: "Petite enfance", text: "Recruter massivement du personnel en crèche pour améliorer le taux d'encadrement", candidateId: "gregoire" },
  { id: 43, theme: "Petite enfance", text: "Développer les crèches Oasis avec des espaces verts et un accueil en plein air", candidateId: "gregoire" },
  { id: 44, theme: "Petite enfance", text: "Créer un parcours d'accompagnement spécifique pour les familles monoparentales", candidateId: "gregoire" },
  { id: 45, theme: "Petite enfance", text: "Proposer des horaires élargis en crèche pour les parents aux horaires décalés", candidateId: "gregoire" },
  { id: 46, theme: "Petite enfance", text: "Ouvrir 6 500 nouvelles places en crèche publique sur le mandat", candidateId: "chikirou" },
  { id: 47, theme: "Petite enfance", text: "Renforcer les centres de PMI et les ouvrir à des horaires plus larges", candidateId: "chikirou" },
  { id: 48, theme: "Petite enfance", text: "Créer des ateliers parents-enfants gratuits dans tous les arrondissements", candidateId: "chikirou" },
  { id: 49, theme: "Petite enfance", text: "Expérimenter des crèches ouvertes le week-end pour les parents concernés", candidateId: "chikirou" },
  { id: 50, theme: "Petite enfance", text: "Créer un dispositif de dépistage de référence pour les troubles du développement chez l'enfant", candidateId: "bournazel" },
  { id: 51, theme: "Petite enfance", text: "10 000 solutions de garde supplémentaires grâce aux crèches et assistantes maternelles", candidateId: "bournazel" },
  { id: 52, theme: "Petite enfance", text: "Créer des « Maisons des Nounous » pour mutualiser espaces et ressources des assistantes maternelles", candidateId: "bournazel" },
  { id: 53, theme: "Petite enfance", text: "Instaurer une carte « parent solo » donnant accès à des aides spécifiques de la Ville", candidateId: "bournazel" },

  // === JEUNESSE ===
  { id: 54, theme: "Jeunesse", text: "Créer des « Quartiers Jeunes » avec des espaces dédiés à la culture, au sport et à l'orientation", candidateId: "gregoire" },
  { id: 55, theme: "Jeunesse", text: "Développer le tutorat et le mentorat entre étudiants et collégiens ou lycéens", candidateId: "gregoire" },
  { id: 56, theme: "Jeunesse", text: "Augmenter l'offre de logements étudiants abordables avec la Ville et les bailleurs sociaux", candidateId: "gregoire" },
  { id: 57, theme: "Jeunesse", text: "Garantir un droit aux vacances pour tous les jeunes Parisiens avec des séjours aidés", candidateId: "gregoire" },
  { id: 58, theme: "Jeunesse", text: "Créer un programme « Colos pour tous » pour que chaque enfant puisse partir en colonie de vacances", candidateId: "bournazel" },

  // === SÉCURITÉ ===
  { id: 59, theme: "Sécurité", text: "Recruter 5 000 policiers municipaux armés pour sécuriser Paris", candidateId: "dati" },
  { id: 60, theme: "Sécurité", text: "Rétablir la sécurité dans les zones de non-droit et les quartiers sensibles", candidateId: "dati" },
  { id: 61, theme: "Sécurité", text: "Doubler le nombre de caméras de vidéoprotection sur l'ensemble de la capitale", candidateId: "dati" },
  { id: 62, theme: "Sécurité", text: "Renforcer la sécurité aux abords des écoles avec des agents dédiés", candidateId: "dati" },
  { id: 63, theme: "Sécurité", text: "Mener un plan anti-crack avec évacuation des sites et accompagnement sanitaire", candidateId: "dati" },
  { id: 64, theme: "Sécurité", text: "Installer des dispositifs de sécurité spécifiques dans les zones touristiques et les gares", candidateId: "dati" },
  { id: 65, theme: "Sécurité", text: "Mettre en place un plan global de lutte contre les violences faites aux femmes dans l'espace public", candidateId: "chikirou" },
  { id: 66, theme: "Sécurité", text: "Ouvrir des commissariats de proximité dans les quartiers qui en sont dépourvus", candidateId: "chikirou" },
  { id: 67, theme: "Sécurité", text: "Créer une force de 6 000 policiers municipaux pour sécuriser les rues de Paris", candidateId: "bournazel" },
  { id: 68, theme: "Sécurité", text: "Armer les agents de sécurité de la Ville pour une réponse crédible sur le terrain", candidateId: "bournazel" },
  { id: 69, theme: "Sécurité", text: "Obtenir de l'État le transfert de compétences de police au maire de Paris", candidateId: "bournazel" },
  { id: 70, theme: "Sécurité", text: "Signer une convention avec l'armée pour sécuriser les grands événements parisiens", candidateId: "bournazel" },
  { id: 71, theme: "Sécurité", text: "Déployer un réseau dense de caméras de vidéoprotection par arrondissement", candidateId: "bournazel" },
  { id: 72, theme: "Sécurité", text: "Sécuriser 200 carrefours dangereux identifiés dans Paris", candidateId: "bournazel" },

  // === FINANCE ET GESTION BUDGÉTAIRE ===
  { id: 73, theme: "Finance et gestion budgétaire", text: "Mener un audit complet de la gestion budgétaire de la Ville et publier les résultats", candidateId: "dati" },
  { id: 74, theme: "Finance et gestion budgétaire", text: "Faire appliquer les 35 heures effectives dans l'administration parisienne", candidateId: "dati" },
  { id: 75, theme: "Finance et gestion budgétaire", text: "Mettre fin aux 250 millions d'euros de prestations externalisées non justifiées", candidateId: "dati" },
  { id: 76, theme: "Finance et gestion budgétaire", text: "Contrôler strictement les subventions aux associations et en publier le bilan", candidateId: "dati" },
  { id: 77, theme: "Finance et gestion budgétaire", text: "Réduire le train de vie de l'Hôtel de Ville et les dépenses somptuaires", candidateId: "dati" },
  { id: 78, theme: "Finance et gestion budgétaire", text: "Garantir la stabilité fiscale : pas de hausse d'impôts locaux pendant le mandat", candidateId: "dati" },
  { id: 79, theme: "Finance et gestion budgétaire", text: "Réduire la masse salariale par le non-remplacement d'une partie des départs en retraite", candidateId: "dati" },
  { id: 80, theme: "Finance et gestion budgétaire", text: "Sanctuariser le budget d'investissement pour maintenir les services publics essentiels", candidateId: "chikirou" },
  { id: 81, theme: "Finance et gestion budgétaire", text: "Publier des rapports annuels de transparence sur l'exécution budgétaire", candidateId: "chikirou" },
  { id: 82, theme: "Finance et gestion budgétaire", text: "Exiger de l'État une compensation équitable des transferts de charges aux collectivités", candidateId: "chikirou" },
  { id: 83, theme: "Finance et gestion budgétaire", text: "Réaliser un audit citoyen de tous les contrats de la Ville avec les entreprises privées", candidateId: "chikirou" },
  { id: 84, theme: "Finance et gestion budgétaire", text: "Défendre la liberté des collectivités à fixer l'impôt nécessaire aux services publics", candidateId: "chikirou" },
  { id: 85, theme: "Finance et gestion budgétaire", text: "Refuser toute politique d'austérité et maintenir un haut niveau de services publics", candidateId: "chikirou" },
  { id: 86, theme: "Finance et gestion budgétaire", text: "Réaliser un audit des coûts cachés de la gestion municipale sortante", candidateId: "chikirou" },
  { id: 87, theme: "Finance et gestion budgétaire", text: "Diviser par deux la dette de Paris en six ans grâce à une gestion rigoureuse", candidateId: "bournazel" },
  { id: 88, theme: "Finance et gestion budgétaire", text: "Lancer une opération « mains propres » anti-corruption à l'Hôtel de Ville", candidateId: "bournazel" },
  { id: 89, theme: "Finance et gestion budgétaire", text: "Appliquer strictement les 35 heures dans toute l'administration parisienne", candidateId: "bournazel" },
  { id: 90, theme: "Finance et gestion budgétaire", text: "Réaliser 120 millions d'euros d'économies annuelles sur le fonctionnement", candidateId: "bournazel" },
  { id: 91, theme: "Finance et gestion budgétaire", text: "Lutter contre la fraude au RSA avec un contrôle renforcé des bénéficiaires", candidateId: "bournazel" },
  { id: 92, theme: "Finance et gestion budgétaire", text: "Externaliser la collecte des déchets pour économiser 740 millions d'euros sur le mandat", candidateId: "bournazel" },
  { id: 93, theme: "Finance et gestion budgétaire", text: "Vendre une partie du parc de logements sociaux pour désendetter la Ville", candidateId: "bournazel" },

  // === TRANSPORT ===
  { id: 94, theme: "Transport", text: "Établir un plan global de circulation pour fluidifier le trafic dans Paris", candidateId: "dati" },
  { id: 95, theme: "Transport", text: "Favoriser les véhicules électriques avec des bornes de recharge partout dans Paris", candidateId: "dati" },
  { id: 96, theme: "Transport", text: "Mettre fin à la Zone à Trafic Limité (ZTL) du centre de Paris", candidateId: "dati" },
  { id: 97, theme: "Transport", text: "Développer des itinéraires piétons sécurisés et agréables dans tous les quartiers", candidateId: "dati" },
  { id: 98, theme: "Transport", text: "Préserver et entretenir les pistes cyclables existantes sans en supprimer", candidateId: "dati" },
  { id: 99, theme: "Transport", text: "Créer un tarif de stationnement résidentiel vraiment avantageux pour les Parisiens", candidateId: "dati" },
  { id: 100, theme: "Transport", text: "Rétablir la gratuité du stationnement pour les deux-roues motorisés", candidateId: "dati" },
  { id: 101, theme: "Transport", text: "Créer des parkings relais aux portes de Paris pour limiter la circulation automobile", candidateId: "dati" },
  { id: 102, theme: "Transport", text: "Créer 15 lignes de bus express pour relier rapidement les quartiers de Paris", candidateId: "gregoire" },
  { id: 103, theme: "Transport", text: "Obtenir le métro 24h/24 le week-end pour une ville qui ne dort jamais", candidateId: "gregoire" },
  { id: 104, theme: "Transport", text: "Rendre le Navigo gratuit pour tous les enfants et adolescents parisiens", candidateId: "gregoire" },
  { id: 105, theme: "Transport", text: "Rendre 100% des transports en commun accessibles aux personnes à mobilité réduite", candidateId: "gregoire" },
  { id: 106, theme: "Transport", text: "Achever le réseau cyclable parisien pour couvrir l'ensemble des arrondissements", candidateId: "gregoire" },
  { id: 107, theme: "Transport", text: "Améliorer les performances et la couverture du service Vélib'", candidateId: "gregoire" },
  { id: 108, theme: "Transport", text: "Réguler les horaires et itinéraires de livraison pour réduire les nuisances", candidateId: "gregoire" },
  { id: 109, theme: "Transport", text: "Créer des places de stationnement réservées aux artisans et professionnels mobiles", candidateId: "gregoire" },
  { id: 110, theme: "Transport", text: "Baisser le tarif du stationnement résidentiel pour les Parisiens qui ont besoin de leur véhicule", candidateId: "gregoire" },
  { id: 111, theme: "Transport", text: "Engager la Région Île-de-France pour améliorer la desserte des transports en commun", candidateId: "chikirou" },
  { id: 112, theme: "Transport", text: "Renforcer le réseau de bus Traverses et créer de nouvelles lignes de proximité", candidateId: "chikirou" },
  { id: 113, theme: "Transport", text: "Rendre l'ensemble des transports et de la voirie universellement accessibles", candidateId: "chikirou" },
  { id: 114, theme: "Transport", text: "Réduire drastiquement les émissions liées au transport routier dans Paris", candidateId: "chikirou" },
  { id: 115, theme: "Transport", text: "Créer une régie publique du vélo pour remplacer le modèle Vélib' actuel", candidateId: "chikirou" },
  { id: 116, theme: "Transport", text: "Soutenir les livreurs à vélo avec des espaces de repos et un statut protecteur", candidateId: "chikirou" },
  { id: 117, theme: "Transport", text: "Installer des feux intelligents pour fluidifier la circulation et réduire la pollution", candidateId: "bournazel" },
  { id: 118, theme: "Transport", text: "Créer 3 lignes de bus express traversant Paris du nord au sud et d'est en ouest", candidateId: "bournazel" },
  { id: 119, theme: "Transport", text: "Supprimer tous les bus diesel et les remplacer par des bus électriques", candidateId: "bournazel" },
  { id: 120, theme: "Transport", text: "Obtenir l'ouverture nocturne des lignes de métro 1, 4 et 14 le week-end", candidateId: "bournazel" },
  { id: 121, theme: "Transport", text: "Doubler le nombre de places de livraison pour réduire le stationnement en double file", candidateId: "bournazel" },
  { id: 122, theme: "Transport", text: "Déployer des agents de sécurité dans le métro et les gares parisiennes", candidateId: "bournazel" },
  { id: 123, theme: "Transport", text: "Sécuriser 200 intersections accidentogènes identifiées dans Paris", candidateId: "bournazel" },
  { id: 124, theme: "Transport", text: "Rendre tous les passages piétons accessibles aux personnes en fauteuil roulant", candidateId: "bournazel" },
  { id: 125, theme: "Transport", text: "Créer 1 000 rues apaisées avec limitation à 20 km/h dans les quartiers résidentiels", candidateId: "bournazel" },
  { id: 126, theme: "Transport", text: "Mettre en place une signalétique unifiée et lisible dans tout Paris", candidateId: "bournazel" },

  // === SPORT ===
  { id: 127, theme: "Sport", text: "Augmenter les créneaux sportifs disponibles pour les associations et les scolaires", candidateId: "dati" },
  { id: 128, theme: "Sport", text: "Faire de l'apprentissage de la natation une grande cause municipale", candidateId: "dati" },
  { id: 129, theme: "Sport", text: "Mettre fin au tirage au sort pour l'inscription dans les conservatoires municipaux", candidateId: "dati" },
  { id: 130, theme: "Sport", text: "Ouvrir les bibliothèques municipales le dimanche et en soirée", candidateId: "dati" },
  { id: 131, theme: "Sport", text: "Tout faire pour garder le PSG à Paris et soutenir le sport professionnel parisien", candidateId: "dati" },
  { id: 132, theme: "Sport", text: "Mettre fin aux réquisitions de gymnases pour l'hébergement d'urgence", candidateId: "dati" },
  { id: 133, theme: "Sport", text: "Rendre gratuit l'accès aux infrastructures sportives municipales pour tous les Parisiens", candidateId: "chikirou" },
  { id: 134, theme: "Sport", text: "Lancer un plan d'isolation thermique de toutes les infrastructures sportives municipales", candidateId: "chikirou" },
  { id: 135, theme: "Sport", text: "Développer la pratique sportive sur le temps périscolaire avec des éducateurs qualifiés", candidateId: "chikirou" },
  { id: 136, theme: "Sport", text: "Créer une assemblée du sport parisien avec un budget participatif dédié", candidateId: "chikirou" },
  { id: 137, theme: "Sport", text: "Remettre de l'ordre sur les pistes cyclables et les trottoirs pour la sécurité de tous", candidateId: "bournazel" },

  // === CULTURE ===
  { id: 138, theme: "Culture", text: "Un orchestre dans chaque collège parisien pour démocratiser la pratique musicale", candidateId: "dati" },
  { id: 139, theme: "Culture", text: "Créer une « villa Médicis » du design et de la création à Paris", candidateId: "dati" },
  { id: 140, theme: "Culture", text: "Reconvertir les écoles fermées en lieux culturels et associatifs de quartier", candidateId: "dati" },

  // === PROPRETÉ ===
  { id: 141, theme: "Propreté", text: "Réorganiser entièrement le service de propreté de la Ville pour plus d'efficacité", candidateId: "dati" },
  { id: 142, theme: "Propreté", text: "Créer des brigades d'urgence propreté mobilisables en quelques heures", candidateId: "dati" },
  { id: 143, theme: "Propreté", text: "Renforcer les actions de la police municipale contre les incivilités liées à la propreté", candidateId: "dati" },
  { id: 144, theme: "Propreté", text: "Externaliser une partie de la collecte des déchets pour améliorer le service", candidateId: "dati" },
  { id: 145, theme: "Propreté", text: "Mettre en place un plan anti-prolifération des nuisibles (rats, punaises de lit)", candidateId: "dati" },
  { id: 146, theme: "Propreté", text: "Privatiser la collecte des déchets pour diviser les coûts et améliorer la qualité", candidateId: "bournazel" },
  { id: 147, theme: "Propreté", text: "Associer les communes limitrophes à la gestion de la propreté aux portes de Paris", candidateId: "bournazel" },

  // === ÉCOLOGIE ET VÉGÉTALISATION ===
  { id: 148, theme: "Écologie et végétalisation", text: "Préserver les 200 000 arbres de Paris et planter de nouvelles forêts urbaines", candidateId: "dati" },
  { id: 149, theme: "Écologie et végétalisation", text: "Créer 500 bandes végétalisées dans les rues parisiennes", candidateId: "dati" },
  { id: 150, theme: "Écologie et végétalisation", text: "Désasphalter massivement Paris pour créer des îlots de fraîcheur", candidateId: "dati" },
  { id: 151, theme: "Écologie et végétalisation", text: "Réaménager les grandes places parisiennes avec plus de végétation et moins de béton", candidateId: "dati" },
  { id: 152, theme: "Écologie et végétalisation", text: "Lancer un grand plan de végétalisation dès la première année du mandat", candidateId: "dati" },
  { id: 153, theme: "Écologie et végétalisation", text: "Lutter contre les nuisances sonores avec un plan anti-bruit ambitieux", candidateId: "dati" },
  { id: 154, theme: "Écologie et végétalisation", text: "Mesurer et réduire la pollution sonore dans tous les arrondissements", candidateId: "dati" },
  { id: 155, theme: "Écologie et végétalisation", text: "Créer un bouclier anti-bruit pour protéger les riverains des grands axes", candidateId: "bournazel" },
  { id: 156, theme: "Écologie et végétalisation", text: "Obtenir une évolution législative pour donner plus de pouvoirs au maire contre le bruit", candidateId: "bournazel" },
  { id: 157, theme: "Écologie et végétalisation", text: "Créer 1 000 rues calmes avec revêtement anti-bruit et végétalisation", candidateId: "bournazel" },
  { id: 158, theme: "Écologie et végétalisation", text: "Piétonniser les rues devant toutes les écoles aux heures d'entrée et de sortie", candidateId: "bournazel" },
  { id: 159, theme: "Écologie et végétalisation", text: "Encadrer strictement les horaires de chantier et livraison pour réduire le bruit", candidateId: "bournazel" },
  { id: 160, theme: "Écologie et végétalisation", text: "Interdire les bus touristiques non-électriques dans le centre de Paris", candidateId: "bournazel" },
  { id: 161, theme: "Écologie et végétalisation", text: "Couvrir des tronçons du périphérique pour créer de nouveaux espaces verts", candidateId: "bournazel" },

  // === LOGEMENT ===
  { id: 162, theme: "Logement", text: "Réformer l'attribution des logements sociaux pour plus de transparence et d'équité", candidateId: "dati" },
  { id: 163, theme: "Logement", text: "Restaurer la confiance des propriétaires bailleurs avec des garanties municipales", candidateId: "dati" },
  { id: 164, theme: "Logement", text: "Lancer un grand plan de rénovation thermique des logements parisiens", candidateId: "dati" },
  { id: 165, theme: "Logement", text: "Construire 60 000 nouveaux logements publics abordables sur le mandat", candidateId: "gregoire" },
  { id: 166, theme: "Logement", text: "Lutter contre la spéculation immobilière avec un encadrement renforcé des loyers", candidateId: "gregoire" },
  { id: 167, theme: "Logement", text: "Créer une brigade de protection du logement pour lutter contre les marchands de sommeil", candidateId: "gregoire" },
  { id: 168, theme: "Logement", text: "Proposer une assurance municipale contre les impayés de loyer pour rassurer les propriétaires", candidateId: "gregoire" },
  { id: 169, theme: "Logement", text: "Mettre en place une garantie municipale de loyer pour faciliter l'accès au logement", candidateId: "gregoire" },
  { id: 170, theme: "Logement", text: "Adapter les logements au vieillissement avec des aides à l'aménagement", candidateId: "gregoire" },
  { id: 171, theme: "Logement", text: "Créer un service inter-bailleurs d'intervention rapide pour les réparations urgentes", candidateId: "gregoire" },
  { id: 172, theme: "Logement", text: "Rénover 35 000 logements sociaux pour améliorer le confort et la performance énergétique", candidateId: "gregoire" },
  { id: 173, theme: "Logement", text: "Accompagner la rénovation de 200 000 logements privés avec des aides municipales", candidateId: "gregoire" },
  { id: 174, theme: "Logement", text: "Créer un pacte de confiance avec les propriétaires bailleurs pour augmenter l'offre locative", candidateId: "bournazel" },
  { id: 175, theme: "Logement", text: "Fixer un objectif de 25% de logements sociaux et pas au-delà pour maintenir la mixité", candidateId: "bournazel" },
  { id: 176, theme: "Logement", text: "Donner la priorité aux Parisiens dans l'attribution des logements sociaux", candidateId: "bournazel" },
  { id: 177, theme: "Logement", text: "Limiter les locations Airbnb à 30 jours par an au lieu de 120 actuellement", candidateId: "bournazel" },
  { id: 178, theme: "Logement", text: "Tripler le rythme de rénovation énergétique des logements parisiens", candidateId: "bournazel" },
  { id: 179, theme: "Logement", text: "Créer une plateforme municipale de mise en relation propriétaires-locataires", candidateId: "bournazel" },
  { id: 180, theme: "Logement", text: "Développer le bail étudiant municipal pour loger les étudiants à prix accessible", candidateId: "bournazel" },

  // === VIEILLESSE ===
  { id: 181, theme: "Vieillesse", text: "Adapter les opérations d'aménagement de l'espace public aux besoins des personnes âgées", candidateId: "dati" },
  { id: 182, theme: "Vieillesse", text: "Développer les activités et services de proximité pour les personnes âgées isolées", candidateId: "gregoire" },
  { id: 183, theme: "Vieillesse", text: "Créer des résidences autonomie pour permettre aux seniors de vivre chez eux plus longtemps", candidateId: "gregoire" },
  { id: 184, theme: "Vieillesse", text: "Aménager l'espace public avec plus de bancs, toilettes et espaces de repos pour les aînés", candidateId: "gregoire" },
  { id: 185, theme: "Vieillesse", text: "Instaurer une « Journée du lien » annuelle pour lutter contre l'isolement des personnes âgées", candidateId: "gregoire" },
  { id: 186, theme: "Vieillesse", text: "Créer un droit au répit pour les aidants familiaux avec des solutions de relais", candidateId: "gregoire" },

  // === HANDICAP ===
  { id: 187, theme: "Handicap", text: "Créer un guichet unique pour simplifier toutes les démarches MDPH à Paris", candidateId: "dati" },
  { id: 188, theme: "Handicap", text: "Utiliser la présidence de l'AP-HP pour améliorer la prise en charge du handicap à Paris", candidateId: "dati" },
  { id: 189, theme: "Handicap", text: "Soumettre toute délibération du Conseil de Paris à une évaluation de son impact sur le handicap", candidateId: "chikirou" },
  { id: 190, theme: "Handicap", text: "Rendre 100% des équipements publics municipaux accessibles aux personnes handicapées", candidateId: "chikirou" },
  { id: 191, theme: "Handicap", text: "Créer un guichet unique handicap pour centraliser l'information et l'accompagnement", candidateId: "chikirou" },
  { id: 192, theme: "Handicap", text: "Réserver une part des logements sociaux neufs aux personnes en situation de handicap", candidateId: "chikirou" },
  { id: 193, theme: "Handicap", text: "Atteindre l'objectif de 10% de travailleurs handicapés dans l'administration parisienne", candidateId: "chikirou" },

  // === SOLIDARITÉ ===
  { id: 194, theme: "Solidarité", text: "Mettre en place un dispositif de veille solidaire dans chaque quartier parisien", candidateId: "dati" },

  // === PATRIMOINE ET BEAUTÉ DE LA VILLE ===
  { id: 195, theme: "Patrimoine et beauté de la ville", text: "Retirer toutes les barrières de chantier des travaux terminés dans un délai de 48h", candidateId: "dati" },
  { id: 196, theme: "Patrimoine et beauté de la ville", text: "Lancer un plan d'urgence pour la sauvegarde du patrimoine architectural parisien", candidateId: "dati" },
  { id: 197, theme: "Patrimoine et beauté de la ville", text: "Adopter une charte « Paris du beau » pour garantir l'esthétique des aménagements urbains", candidateId: "dati" },

  // === SERVICES PUBLICS ===
  { id: 198, theme: "Services publics", text: "Créer un guichet physique unique pour toutes les démarches administratives de la Ville", candidateId: "gregoire" },
  { id: 199, theme: "Services publics", text: "Garantir un service public universel accessible à tous, y compris aux personnes éloignées du numérique", candidateId: "gregoire" },
  { id: 200, theme: "Services publics", text: "Développer une application 100% numérique pour simplifier toutes les démarches parisiennes", candidateId: "gregoire" },
  { id: 201, theme: "Services publics", text: "Dématérialiser le dossier scolaire pour simplifier les inscriptions et le suivi", candidateId: "gregoire" },
  { id: 202, theme: "Services publics", text: "Étendre les horaires d'ouverture des équipements publics en soirée et le week-end", candidateId: "gregoire" },
  { id: 203, theme: "Services publics", text: "Créer un service public du berceau au grand âge pour accompagner chaque Parisien à chaque étape", candidateId: "gregoire" },

  // === COMMERCE ===
  { id: 204, theme: "Commerce", text: "Simplifier toutes les démarches administratives pour les commerçants et artisans parisiens", candidateId: "dati" },
  { id: 205, theme: "Commerce", text: "Rendre obligatoire une étude d'impact avant toute décision d'urbanisme affectant le commerce", candidateId: "dati" },
  { id: 206, theme: "Commerce", text: "Créer des marchés éphémères de producteurs locaux dans tous les arrondissements", candidateId: "dati" },

  // === PROBITÉ ===
  { id: 207, theme: "Probité", text: "Garantir l'exemplarité des élus avec une charte éthique contraignante", candidateId: "bournazel" },
  { id: 208, theme: "Probité", text: "Instaurer une gouvernance citoyenne avec des conseils de quartier renforcés et décisionnaires", candidateId: "bournazel" },

  // ============================================
  // SARAH KNAFO (Reconquête)
  // ============================================

  // === SÉCURITÉ (Knafo) ===
  { id: 209, theme: "Sécurité", text: "Doubler les effectifs de la police municipale pour atteindre 8 000 agents", candidateId: "knafo" },
  { id: 210, theme: "Sécurité", text: "Armer la police municipale avec des armes à feu", candidateId: "knafo" },
  { id: 211, theme: "Sécurité", text: "Plan de reconquête des zones de non-droit avec interpellations massives (Champs-Élysées, Barbès, La Chapelle)", candidateId: "knafo" },
  { id: 212, theme: "Sécurité", text: "Créer une brigade équestre municipale (40 chevaux, 60 cavaliers)", candidateId: "knafo" },
  { id: 213, theme: "Sécurité", text: "Créer une brigade canine municipale (30 chiens)", candidateId: "knafo" },
  { id: 214, theme: "Sécurité", text: "Équiper les caméras de vidéosurveillance d'intelligence artificielle", candidateId: "knafo" },
  { id: 215, theme: "Sécurité", text: "Équiper les réverbères de capteurs sonores IA capables de reconnaître des cris d'agression ou des bruits de vitre cassée", candidateId: "knafo" },
  { id: 216, theme: "Sécurité", text: "Renforcer l'éclairage public nocturne dans tous les quartiers", candidateId: "knafo" },

  // === FINANCE ET GESTION BUDGÉTAIRE (Knafo) ===
  { id: 217, theme: "Finance et gestion budgétaire", text: "Plan d'économies de 10 milliards d'euros sur 10 ans sur la gestion municipale", candidateId: "knafo" },
  { id: 218, theme: "Finance et gestion budgétaire", text: "Diviser la taxe foncière par deux dès le premier budget", candidateId: "knafo" },
  { id: 219, theme: "Finance et gestion budgétaire", text: "Diviser par deux la taxe d'enlèvement des ordures ménagères et la taxe de balayage", candidateId: "knafo" },
  { id: 220, theme: "Finance et gestion budgétaire", text: "Réduire de moitié les effectifs municipaux sur 10 ans (55 000 agents) en ne remplaçant pas les départs naturels", candidateId: "knafo" },
  { id: 221, theme: "Propreté", text: "Privatiser la collecte des ordures et le balayage via appels d'offres, avec reprise garantie de 80% des agents", candidateId: "knafo" },

  // === DÉMOCRATIE LOCALE (Knafo) ===
  { id: 222, theme: "Démocratie locale", text: "Organiser au minimum deux référendums locaux par an", candidateId: "knafo" },
  { id: 223, theme: "Démocratie locale", text: "Référendum obligatoire pour tout projet municipal dépassant 10 millions d'euros", candidateId: "knafo" },
  { id: 224, theme: "Démocratie locale", text: "Donner une valeur exécutoire aux résultats de référendum (le résultat s'impose à la mairie)", candidateId: "knafo" },

  // === TRANSPORT (Knafo) ===
  { id: 225, theme: "Transport", text: "Réouvrir les voies sur berges à la circulation automobile avec une promenade piétonne et cycliste sur pilotis au-dessus", candidateId: "knafo" },
  { id: 226, theme: "Transport", text: "Relever la vitesse maximale sur le périphérique de 50 à 80 km/h", candidateId: "knafo" },
  { id: 227, theme: "Transport", text: "Piloter les feux tricolores par intelligence artificielle pour fluidifier le trafic", candidateId: "knafo" },
  { id: 228, theme: "Transport", text: "Réduire le tarif du stationnement à 5 euros de l'heure pour tous (contre 37€/h pour les SUV actuellement)", candidateId: "knafo" },
  { id: 229, theme: "Transport", text: "Créer un jumeau numérique de Paris pour simuler l'impact de chaque projet d'aménagement avant réalisation", candidateId: "knafo" },

  // === LOGEMENT (Knafo) ===
  { id: 230, theme: "Logement", text: "Supprimer l'encadrement des loyers", candidateId: "knafo" },
  { id: 231, theme: "Logement", text: "Moratoire sur la construction de logements sociaux et sur les préemptions foncières", candidateId: "knafo" },
  { id: 232, theme: "Logement", text: "Vendre des logements sociaux (HLM) avec priorité aux occupants actuels, exonérés de frais de notaire", candidateId: "knafo" },
  { id: 233, theme: "Logement", text: "Plan d'accession à la propriété pour les classes moyennes avec réduction des frais de notaire", candidateId: "knafo" },
  { id: 234, theme: "Logement", text: "Attribuer les logements sociaux via une plateforme en ligne transparente", candidateId: "knafo" },
  { id: 235, theme: "Jeunesse", text: "Créer une résidence étudiante pour les meilleurs étudiants de France et les apprentis", candidateId: "knafo" },

  // === URBANISME (Knafo) ===
  { id: 236, theme: "Urbanisme", text: "Abroger le PLU bioclimatique et revenir à un PLU garantissant l'harmonie architecturale", candidateId: "knafo" },
  { id: 237, theme: "Urbanisme", text: "Réautoriser l'éclairage des vitrines des commerces la nuit", candidateId: "knafo" },
  { id: 238, theme: "Urbanisme", text: "Réautoriser les terrasses chauffées", candidateId: "knafo" },
  { id: 239, theme: "Écologie et végétalisation", text: "Embellir les parcs et jardins en replantant des fleurs", candidateId: "knafo" },
  { id: 240, theme: "Écologie et végétalisation", text: "Rendre tous les espaces verts accessibles aux chiens tenus en laisse (sauf aires de jeux enfants)", candidateId: "knafo" },

  // === ÉDUCATION (Knafo) ===
  { id: 241, theme: "Éducation", text: "Servir uniquement des produits issus de l'agriculture française dans les cantines scolaires", candidateId: "knafo" },

  // === IMMIGRATION (Knafo) ===
  { id: 242, theme: "Immigration", text: "Interdire toute occupation illégale de gymnases ou lieux publics par des personnes en situation irrégulière", candidateId: "knafo" },
  { id: 243, theme: "Immigration", text: "Fermer le centre d'hébergement de migrants du Bois de Boulogne", candidateId: "knafo" },
  { id: 244, theme: "Immigration", text: "Auditer les 99 centres de migrants parisiens gérés par des associations et financés par le contribuable", candidateId: "knafo" },

  // ============================================
  // THIERRY MARIANI (RN / UDR)
  // ============================================

  // === SÉCURITÉ (Mariani) ===
  { id: 245, theme: "Sécurité", text: "Tripler les effectifs de la police municipale pour atteindre 8 350 agents (ratio de 4 policiers pour 1 000 habitants)", candidateId: "mariani" },
  { id: 246, theme: "Sécurité", text: "Armer la police municipale et élargir ses prérogatives", candidateId: "mariani" },
  { id: 247, theme: "Sécurité", text: "Patrouilles de police municipale 24h/24 dans tous les quartiers", candidateId: "mariani" },
  { id: 248, theme: "Sécurité", text: "Créer 7 brigades spécialisées : anti-squats, anti-drogue, anti-campements, transports, circulation, action rapide, quartier", candidateId: "mariani" },
  { id: 249, theme: "Sécurité", text: "Tripler le réseau de vidéoprotection pour atteindre 5 000 caméras", candidateId: "mariani" },
  { id: 250, theme: "Sécurité", text: "Déployer la vidéosurveillance augmentée par intelligence artificielle", candidateId: "mariani" },
  { id: 251, theme: "Sécurité", text: "Installer systématiquement des caméras de surveillance devant les écoles et collèges", candidateId: "mariani" },
  { id: 252, theme: "Sécurité", text: "Créer un numéro de téléphone dédié à la police municipale, opérationnel 24h/24", candidateId: "mariani" },

  // === PROPRETÉ (Mariani) ===
  { id: 253, theme: "Propreté", text: "Externaliser totalement la collecte des déchets et laisser chaque arrondissement choisir son prestataire", candidateId: "mariani" },
  { id: 254, theme: "Propreté", text: "Assurer la propreté 24h/24 par le redéploiement des agents municipaux sur le terrain", candidateId: "mariani" },
  { id: 255, theme: "Propreté", text: "Lancer un plan massif de dératisation dans tout Paris", candidateId: "mariani" },
  { id: 256, theme: "Propreté", text: "Appliquer la théorie des « vitres cassées » : tolérance zéro sur les incivilités, verbalisation systématique", candidateId: "mariani" },

  // === LOGEMENT (Mariani) ===
  { id: 257, theme: "Logement", text: "Instaurer la priorité nationale pour l'accès au logement social, en privilégiant les familles et les travailleurs", candidateId: "mariani" },
  { id: 258, theme: "Logement", text: "Rénover massivement le parc de logements sociaux et privés", candidateId: "mariani" },
  { id: 259, theme: "Logement", text: "Proposer des aides au déménagement adapté pour les locataires, combinées à une réduction de loyer", candidateId: "mariani" },
  { id: 260, theme: "Solidarité", text: "Créer des résidences sécurisées pour les victimes de violences conjugales", candidateId: "mariani" },
  { id: 261, theme: "Logement", text: "Développer l'habitat intergénérationnel (étudiants-seniors) pour lutter contre l'isolement", candidateId: "mariani" },

  // === TRANSPORT (Mariani) ===
  { id: 262, theme: "Transport", text: "Augmenter la vitesse sur le périphérique à 90 km/h sur certains tronçons et la nuit", candidateId: "mariani" },
  { id: 263, theme: "Transport", text: "Adapter le plan de circulation pour protéger piétons, cyclistes et automobilistes de manière équilibrée", candidateId: "mariani" },
  { id: 264, theme: "Transport", text: "Faciliter les livraisons pour les commerçants en révisant le plan de circulation", candidateId: "mariani" },
  { id: 265, theme: "Transport", text: "Rétablir l'égalité des tarifs de stationnement en supprimant le zonage discriminatoire", candidateId: "mariani" },

  // === ÉDUCATION (Mariani) ===
  { id: 266, theme: "Éducation", text: "Instaurer l'uniforme scolaire dès l'école primaire", candidateId: "mariani" },
  { id: 267, theme: "Petite enfance", text: "Lancer un grand plan de protection de la petite enfance avec tolérance zéro contre la maltraitance", candidateId: "mariani" },
  { id: 268, theme: "Petite enfance", text: "Réserver en priorité les places en crèches municipales aux familles françaises", candidateId: "mariani" },

  // === COMMERCE (Mariani) ===
  { id: 269, theme: "Commerce", text: "Soutenir les artisans et commerçants parisiens avec des allègements fiscaux", candidateId: "mariani" },
  { id: 270, theme: "Commerce", text: "Privilégier les PME et TPE locales dans les marchés publics municipaux", candidateId: "mariani" },
  { id: 271, theme: "Commerce", text: "Promouvoir le Made in France et les produits locaux dans les cantines et marchés publics", candidateId: "mariani" },

  // === FINANCE (Mariani) ===
  { id: 272, theme: "Finance et gestion budgétaire", text: "Plan massif d'économies et de réduction de la dette municipale", candidateId: "mariani" },
  { id: 273, theme: "Finance et gestion budgétaire", text: "S'opposer à toute augmentation des taux d'imposition locale pendant toute la durée du mandat", candidateId: "mariani" },
  { id: 274, theme: "Finance et gestion budgétaire", text: "Confier le contrôle de la bonne gestion à une association de défense des contribuables", candidateId: "mariani" },
  { id: 275, theme: "Finance et gestion budgétaire", text: "Encadrer les frais de réception de la Ville pour éviter les abus", candidateId: "mariani" },

  // === CULTURE / PATRIMOINE (Mariani) ===
  { id: 276, theme: "Culture", text: "Restaurer le patrimoine historique de Paris et recentrer le budget culture sur le patrimoine", candidateId: "mariani" },
  { id: 277, theme: "Urbanisme", text: "Créer une charte renforcée de respect de l'urbanisme parisien et des immeubles haussmanniens", candidateId: "mariani" },

  // === IMMIGRATION (Mariani) ===
  { id: 278, theme: "Immigration", text: "Créer une brigade anti-campements clandestins pour démanteler les camps illicites", candidateId: "mariani" },
  { id: 279, theme: "Immigration", text: "Refuser l'immigration de masse et mettre fin aux occupations et réquisitions pour les migrants en situation irrégulière", candidateId: "mariani" },

  // === DÉMOCRATIE LOCALE (Mariani) ===
  { id: 280, theme: "Démocratie locale", text: "Organiser un référendum chaque fois que 5% du corps électoral en fait la demande", candidateId: "mariani" },
  { id: 281, theme: "Démocratie locale", text: "Élire tous les conseils de quartier tous les 3 ans et les consulter pour tout projet les concernant", candidateId: "mariani" },
  { id: 282, theme: "Démocratie locale", text: "Renforcer l'e-démocratie avec des outils numériques protégeant les données personnelles", candidateId: "mariani" },

  // ============================================
  // NPA-RÉVOLUTIONNAIRES (Blandine Chauvel)
  // ============================================

  // === EMPLOI ET TRAVAIL (NPA) ===
  { id: 283, theme: "Emploi et travail", text: "Interdire les licenciements et augmenter tous les salaires d'au moins 400 euros par mois", candidateId: "npa" },
  { id: 284, theme: "Emploi et travail", text: "Mettre fin à la sous-traitance et titulariser tous les travailleurs précaires (contractuels, sous-traitants)", candidateId: "npa" },
  { id: 285, theme: "Emploi et travail", text: "Partager le temps de travail entre tous pour éliminer le chômage", candidateId: "npa" },
  { id: 286, theme: "Emploi et travail", text: "Embaucher et titulariser tous les agents municipaux (ATSEM, jardiniers, bibliothécaires, animateurs)", candidateId: "npa" },
  { id: 287, theme: "Emploi et travail", text: "Arrêter les dérogations au repos dominical", candidateId: "npa" },

  // === LOGEMENT (NPA) ===
  { id: 288, theme: "Logement", text: "Réquisitionner sans indemnité les logements et bureaux vacants pour les transformer en logements", candidateId: "npa" },
  { id: 289, theme: "Logement", text: "Arrêter toutes les expulsions locatives et d'hébergement", candidateId: "npa" },
  { id: 290, theme: "Logement", text: "Construire massivement des logements sociaux, encadrer, geler et baisser les loyers", candidateId: "npa" },
  { id: 291, theme: "Logement", text: "Plan massif de rénovation des logements et résidences universitaires", candidateId: "npa" },
  { id: 292, theme: "Solidarité", text: "Développer l'hébergement d'urgence dans des conditions dignes et salubres", candidateId: "npa" },

  // === SERVICES PUBLICS (NPA) ===
  { id: 293, theme: "Services publics", text: "Arrêter toutes les privatisations et fermetures de classes, municipaliser les services publics", candidateId: "npa" },
  { id: 294, theme: "Services publics", text: "Rendre gratuits l'eau (premiers m³), les transports en commun, les centres de santé et les cantines", candidateId: "npa" },
  { id: 295, theme: "Services publics", text: "Exproprier les groupes privés gérant des crèches, EHPAD et centres de soins et les municipaliser", candidateId: "npa" },

  // === SANTÉ (NPA) ===
  { id: 296, theme: "Santé", text: "Défendre l'hôpital public contre les coupes budgétaires et garantir l'accès à la santé pour tous", candidateId: "npa" },

  // === TRANSPORT (NPA) ===
  { id: 297, theme: "Transport", text: "Rendre les transports en commun gratuits et fiables pour tous", candidateId: "npa" },

  // === SÉCURITÉ (NPA) ===
  { id: 298, theme: "Sécurité", text: "Dissoudre la police municipale et démanteler la vidéosurveillance", candidateId: "npa" },

  // === FINANCE (NPA) ===
  { id: 299, theme: "Finance et gestion budgétaire", text: "Mettre en place une taxation sur les entreprises et ménages fortunés pour financer les services publics", candidateId: "npa" }
];
