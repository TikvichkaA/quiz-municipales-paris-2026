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
  "Culture",
  "Culture et loisirs",
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
  "Santé",
  "Services publics",
  "Solidarité, inclusion & accessibilité",
  "Sport",
  "Sécurité",
  "Séniors",
  "Transports & Mobilités",
  "Vie démocratique",
];

const PROPOSITIONS = [
  // === ALIMENTATION ===
  { id: 1, theme: "Alimentation", text: "Articuler l’ensemble des acteurs autour d’un Projet Alimentaire Territorial (PAT)", candidateId: "chikirou" },
  { id: 2, theme: "Alimentation", text: "Promouvoir l’alimentation d’origine végétale dans la politique alimentaire municipale", candidateId: "chikirou" },
  { id: 3, theme: "Alimentation", text: "Lancer une filière publique de production de champignons, en s’appuyant sur le potentiel parisien", candidateId: "chikirou" },

  // === CULTURE ===
  { id: 4, theme: "Culture", text: "Je créerai un grand orchestre parisien des collèges avec 1 000 collégiens parisiens, issus de tous les arrondissements. Le recrutement se fera sur motivation et les instruments seront fournis.", candidateId: "dati" },
  { id: 5, theme: "Culture", text: "Mettre fin à la mainmise d’entreprises et d’acteurs privés sur le patrimoine culturel parisien, comme LVMH", candidateId: "chikirou" },
  { id: 6, theme: "Culture", text: "Je créerai une « villa Médicis » du design sur le site de l’ex-Mairie du 1er arrondissement, qui intégrera des événements culturels ouverts le soir à tous les Parisiens.", candidateId: "dati" },
  { id: 7, theme: "Culture", text: "Déclarer les librairies indépendantes « commerce essentiel » et les soutenir contre la pression immobilière, la concurrence du e-commerce international et les menaces à la liberté d’expression", candidateId: "chikirou" },
  { id: 8, theme: "Culture", text: "Soutenir les cinémas indépendants parisiens et agir contre des fermetures en mobilisant des leviers tels que la transformation en SCIC (coopérative d’intérêt collectif) voire la municipalisation", candidateId: "chikirou" },
  { id: 9, theme: "Culture", text: "Créer un fonds de garantie pour les loyers des artistes non salariés", candidateId: "chikirou" },
  { id: 10, theme: "Culture", text: "Favoriser la gratuité et la tarification sociale des équipements culturels avec une politique de médiation ambitieuse pour sensibiliser celles et ceux qui en sont éloignés", candidateId: "chikirou" },
  { id: 11, theme: "Culture", text: "Créer et soutenir les lieux d’éducation populaire et de pratiques artistiques, comme les Centres Paris Anim’, la Maison des Pratiques Artistiques Amateurs et les Maisons des Jeunes et de la Culture", candidateId: "chikirou" },
  { id: 12, theme: "Culture", text: "Permettre à toutes et tous d’accéder à un enseignement et à une pratique artistiques en développant les conservatoires : augmentation des places pour mettre fin au tirage au sort, renforcement de la tarification sociale, prêt de matériel et élargissement des disciplines enseignées", candidateId: "chikirou" },

  // === CULTURE ET LOISIRS ===
  { id: 13, theme: "Culture et loisirs", text: "Restaurer le patrimoine historique de Paris et recentrer le budget culture sur le patrimoine", candidateId: "mariani" },
  { id: 14, theme: "Culture et loisirs", text: "Ouvrir les musées municipaux en nocturne deux soirs par semaine et les bibliothèques le dimanche", candidateId: "knafo" },
  { id: 15, theme: "Culture et loisirs", text: "Consacrer 300 millions d'euros à la restauration des églises parisiennes sur le mandat", candidateId: "knafo" },
  { id: 16, theme: "Culture et loisirs", text: "Proposer des cours de musique collectifs sans concours ni prérequis dans tous les conservatoires", candidateId: "knafo" },

  // === ECONOMIE LOCALE & COMMERCES ===
  { id: 17, theme: "Economie locale & commerces", text: "Je veux un choc de simplification dans toutes les relations entre les commerces et entreprises et la Ville de Paris. J’instaurerai des démarches allégées et plus rapides. Le principe du « dites-le-nous une fois » sera généralisé : un seul dossier, partagé entre services, sans demande inutile de justificatifs.", candidateId: "dati" },
  { id: 18, theme: "Economie locale & commerces", text: "Je mettrai en place l’obligation de réaliser une étude d’impact sur le commerce à l’occasion de chaque grand projet d’aménagement urbain, car un simple changement de circulation peut avoir des effets délétères sur le commerce.", candidateId: "dati" },
  { id: 19, theme: "Economie locale & commerces", text: "Je mettrai en place des marchés commerçants éphémères (soirées, week-ends) pour mettre en valeur les commerces de quartier et l’artisanat local.", candidateId: "dati" },
  { id: 20, theme: "Economie locale & commerces", text: "Soutenir les artisans et commerçants parisiens avec des allègements fiscaux", candidateId: "mariani" },
  { id: 21, theme: "Economie locale & commerces", text: "Privilégier les PME et TPE locales dans les marchés publics municipaux", candidateId: "mariani" },
  { id: 22, theme: "Economie locale & commerces", text: "Promouvoir le Made in France et les produits locaux dans les cantines et marchés publics", candidateId: "mariani" },
  { id: 23, theme: "Economie locale & commerces", text: "Interdire les licenciements et augmenter tous les salaires d'au moins 400 euros par mois", candidateId: "npa" },
  { id: 24, theme: "Economie locale & commerces", text: "Mettre fin à la sous-traitance et titulariser tous les travailleurs précaires (contractuels, sous-traitants)", candidateId: "npa" },
  { id: 25, theme: "Economie locale & commerces", text: "Partager le temps de travail entre tous pour éliminer le chômage", candidateId: "npa" },
  { id: 26, theme: "Economie locale & commerces", text: "Embaucher et titulariser tous les agents municipaux (ATSEM, jardiniers, bibliothécaires, animateurs)", candidateId: "npa" },
  { id: 27, theme: "Economie locale & commerces", text: "Arrêter les dérogations au repos dominical", candidateId: "npa" },
  { id: 28, theme: "Economie locale & commerces", text: "Lancer un programme « 1 000 commerces » pour revitaliser les rues commerçantes de Paris", candidateId: "mariani" },

  // === EDUCATION ===
  { id: 29, theme: "Education", text: "Défendre l’école publique en luttant contre les fermetures de classe imposées par l’État", candidateId: "gregoire" },
  { id: 30, theme: "Education", text: "Renforcer les moyens des écoles et des collèges publics", candidateId: "chikirou" },
  { id: 31, theme: "Education", text: "Plan 100 % écoles rénovées et accessibles d’ici 2032", candidateId: "bournazel" },
  { id: 32, theme: "Education", text: "Moduler les dotations financières aux établissements privés en fonction de critères de mixité sociale et scolaire, pour éviter la ségrégation scolaire", candidateId: "gregoire" },
  { id: 33, theme: "Education", text: "Instaurer la gratuité de la cantine pour les trois premières tranches du quotient familial et rendre plus progressifs les tarifs suivants", candidateId: "chikirou" },
  { id: 34, theme: "Education", text: "Dès l’été 2026, je ferai adopter un budget rectificatif pour 2026 pour doubler les investissements annuels dans l’Ecole publique, ainsi qu’un fonds d’urgence de 200 millions d’euros pour les rénovations les plus prioritaires financé par la réallocation de crédits existants et des économies.", candidateId: "bournazel" },
  { id: 35, theme: "Education", text: "Exiger de l’État un véritable statut pour les AESH et assurer la continuité avec le périscolaire, pour une école publique véritablement inclusive", candidateId: "gregoire" },
  { id: 36, theme: "Education", text: "Adapter 100 % des collèges et écoles publics aux défis sanitaires et climatiques", candidateId: "chikirou" },
  { id: 37, theme: "Education", text: "Mettre en place un vrai service minimum dans les écoles les jours de grève", candidateId: "bournazel" },
  { id: 38, theme: "Education", text: "Ouvrir 50 nouvelles unités d’enseignement adaptées pour les enfants en situation de handicap et ouvrir des structures mixtes, établissements médico-sociaux / écoles ordinaires pour que tous les enfants soient accueillis", candidateId: "gregoire" },
  { id: 39, theme: "Education", text: "Garantir une ATSEM par classe en maternelle", candidateId: "chikirou" },
  { id: 40, theme: "Education", text: "Éveiller les enfants au codage et à l’intelligence artificielle dès l’école primaire", candidateId: "bournazel" },
  { id: 41, theme: "Education", text: "Soulager le budget des familles grâce au gel des tarifs de cantine et à l’extension de la gratuité des fournitures scolaires", candidateId: "gregoire" },
  { id: 42, theme: "Education", text: "Former les animateurs et intervenants sur le temps périscolaire et extrascolaire à la prévention contre les violences éducatives", candidateId: "chikirou" },
  { id: 43, theme: "Education", text: "Faire démarrer les cours au collège à 9h pour respecter le sommeil des adolescents et y faire respecter l’interdiction des smartphones", candidateId: "bournazel" },
  { id: 44, theme: "Education", text: "Mettre en oeuvre un grand plan de rénovation et de végétalisation des écoles et collèges, pour des établissements plus accessibles, inclusifs et protégés face au changement climatique, notamment grâce aux cours Oasis.", candidateId: "gregoire" },
  { id: 45, theme: "Education", text: "Aller vers la gratuité de l’école publique à Paris (fournitures, sorties scolaires, goûters, périscolaire)", candidateId: "chikirou" },
  { id: 46, theme: "Education", text: "Servir uniquement des produits issus de l'agriculture française dans les cantines scolaires", candidateId: "knafo" },
  { id: 47, theme: "Education", text: "Instaurer l'uniforme scolaire dès l'école primaire", candidateId: "mariani" },
  { id: 48, theme: "Education", text: "Nommer un chef étoilé pour refondre les cantines scolaires avec des recettes à base de produits frais français", candidateId: "knafo" },
  { id: 49, theme: "Education", text: "Garantir un service minimum d'accueil dans les crèches, écoles et cantines les jours de grève", candidateId: "mariani" },
  { id: 50, theme: "Education", text: "Créer 100 centres de soutien scolaire gratuits dans les quartiers de Paris", candidateId: "mariani" },

  // === ESPACES VERTS, VÉGÉTALISATION & BIODIVERSITÉ ===
  { id: 51, theme: "Espaces verts, végétalisation & biodiversité", text: "J’établirai un principe de préservation des 200 000 arbres de Paris et des 300 000 arbres de nos bois avec une méthode simple : sauf exception publiquement motivée, aucun arbre mature ne sera abattu si son état phytosanitaire est bon.", candidateId: "dati" },
  { id: 52, theme: "Espaces verts, végétalisation & biodiversité", text: "Désimperméabiliser et végétaliser 40 % du territoire parisien à horizon 2032", candidateId: "chikirou" },
  { id: 53, theme: "Espaces verts, végétalisation & biodiversité", text: "Lancer un bouclier anti-bruit pour Paris je déploierai 300 capteurs acoustiques de type « Méduses », installerai 50 nouveaux radars anti-nuisances sonores ces deux premiers dispositifs utiles et concrets pour les Parisiens sera entièrement financée (environ 2,5 M€) par la seule suppression du magazine papier de la Ville « À Paris », qui coûte 2,7 millions d’euros par mandat aux contribuables et que personne ne lit.", candidateId: "bournazel" },
  { id: 54, theme: "Espaces verts, végétalisation & biodiversité", text: "Je créerai 500 nouvelles bandes végétalisées à Paris. Les nouvelles plantations seront là pour durer avec des opérations d’arrosage, de désherbage et de soins ciblées.", candidateId: "dati" },
  { id: 55, theme: "Espaces verts, végétalisation & biodiversité", text: "Mettre en place une règle verte municipale : plus aucun mètre carré de pleine terre ne pourra être artificialisé", candidateId: "chikirou" },
  { id: 56, theme: "Espaces verts, végétalisation & biodiversité", text: "je demanderai au législateur une évolution des compétences pour Paris afin de permettre à la Ville d’intervenir rapidement sur l’ensemble des nuisances sonores", candidateId: "bournazel" },
  { id: 57, theme: "Espaces verts, végétalisation & biodiversité", text: "Je débitumerai Paris pour créer des îlots de fraîcheur et lutter contre le risque d’inondation.", candidateId: "dati" },
  { id: 58, theme: "Espaces verts, végétalisation & biodiversité", text: "Protéger et enrichir le patrimoine naturel parisien : sanctuariser les arbres existants (sauf maladie ou risque majeur) et diversifier les essences", candidateId: "chikirou" },
  { id: 59, theme: "Espaces verts, végétalisation & biodiversité", text: "je déploierai 1 000 rues apaisées, avec de nouveaux bitumes anti-bruit et anti-îlots de chaleur,", candidateId: "bournazel" },
  { id: 60, theme: "Espaces verts, végétalisation & biodiversité", text: "Je mènerai des projets de réaménagement, comme par exemple place de la République ou avenue de la Grande Armée, privilégiant les parterres végétalisés, les pavés enherbés et revêtements infiltrants.", candidateId: "dati" },
  { id: 61, theme: "Espaces verts, végétalisation & biodiversité", text: "Renforcer le plan canicule : systématiser les exercices de prévention des fortes chaleurs et ouvrir des lieux d’accueil dès le niveau 2", candidateId: "chikirou" },
  { id: 62, theme: "Espaces verts, végétalisation & biodiversité", text: "je piétonniserai toutes les rues des 626 écoles", candidateId: "bournazel" },
  { id: 63, theme: "Espaces verts, végétalisation & biodiversité", text: "J’instaurerai dès la première année de mandat un plan « grand chaud » pour rafraîchir les sites accueillant des publics fragiles via le raccordement au réseau Fraîcheur de Paris et des dispositifs tels que des volets, stores, végétalisation des toits et façades.", candidateId: "dati" },
  { id: 64, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la végétalisation citoyenne en augmentant le nombre de jardins partagés, en élargissant l’octroi de permis de débitumisation aux collectifs d’habitants et en développant la végétalisation des toitures", candidateId: "chikirou" },
  { id: 65, theme: "Espaces verts, végétalisation & biodiversité", text: "Les horaires de chantier seront rendus compatibles avec la vie des riverains ; dispositif spécifique d’aide à l’insonorisation des bars, restaurants et établissements festifs, opéré via la SEM Paris Commerces.", candidateId: "bournazel" },
  { id: 66, theme: "Espaces verts, végétalisation & biodiversité", text: "Généraliser les cours oasis dans les écoles et les collèges parisiens et à leurs abords afin d’atteindre l’objectif de 100 % d’établissements dotés de cours oasis à horizon 2040", candidateId: "chikirou" },
  { id: 67, theme: "Espaces verts, végétalisation & biodiversité", text: "J’interdirai également les cars de tourisme non électriques dans Paris", candidateId: "bournazel" },
  { id: 68, theme: "Espaces verts, végétalisation & biodiversité", text: "Pour lutter contre la pollution sonore, je donnerai aux maires d’arrondissement un vrai pouvoir de police locale pour mieux encadrer les établissements festifs et les débits de boisson. Je systématiserai la pose de revêtements phoniques pour les artères les plus fréquentées y compris sur le boulevard périphérique.", candidateId: "dati" },
  { id: 69, theme: "Espaces verts, végétalisation & biodiversité", text: "Soutenir les collectifs s’opposant à l’artificialisation des sols dans le cadre de projets inutiles à Paris et en Île-de-France (triangle de Gonesse, Jardin d’Aubervilliers, Plateau de Saclay, etc.)", candidateId: "chikirou" },
  { id: 70, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la couverture du périphérique : opérations autour des portes d’Orléans, de Brancion, de la Chapelle, d’Aubervilliers, de Saint-Cloud et des Lilas.", candidateId: "bournazel" },
  { id: 71, theme: "Espaces verts, végétalisation & biodiversité", text: "Accélérer la renaturation en végétalisant en priorité les îlots de chaleur urbains (places fortement minéralisées comme l’Opéra ou République, quartiers les moins dotés)", candidateId: "chikirou" },
  { id: 72, theme: "Espaces verts, végétalisation & biodiversité", text: "Engager une renaturation massive, créer de grands espaces verts et ouvrir au public des espaces verts aujourd’hui fermés, afin de produire plus de 300 hectares d’espaces verts accessibles et d’atteindre 10 m² d’espaces verts par habitant, conformément aux recommandations de l’Organisation mondiale de la santé", candidateId: "chikirou" },
  { id: 73, theme: "Espaces verts, végétalisation & biodiversité", text: "Renforcer les moyens humains et la maîtrise publique de la Direction des Espaces verts et de l’Environnement en mettant fin à l’externalisation (sauf exception pour certaines structures d’insertion par l’activité économique) et en augmentant les recrutements", candidateId: "chikirou" },
  { id: 74, theme: "Espaces verts, végétalisation & biodiversité", text: "Fixer un objectif de « zéro dégradation nette » des sols forestiers, avec un plan anti-tassement et la restauration des zones déjà dégradées", candidateId: "chikirou" },
  { id: 75, theme: "Espaces verts, végétalisation & biodiversité", text: "Décréter un moratoire immédiat sur les coupes rases et engager une transition vers une sylviculture irrégulière à couvert continu, c’est-à-dire qui privilégie la régénération naturelle et des interventions plus diffuses, moins destructrices pour les sols et le microclimat", candidateId: "chikirou" },
  { id: 76, theme: "Espaces verts, végétalisation & biodiversité", text: "Faire réellement appliquer la charte en faveur du bien-être animal et produire un bilan annuel public de sa mise en œuvre", candidateId: "chikirou" },
  { id: 77, theme: "Espaces verts, végétalisation & biodiversité", text: "Créer une régie agricole publique parisienne ou intercommunale digne de ce nom, chargée de développer des sites de production et de contractualiser des débouchés solidaires et durables", candidateId: "chikirou" },
  { id: 78, theme: "Espaces verts, végétalisation & biodiversité", text: "Encadrer strictement les événements se tenant dans les bois, via une charte exigeante et des contrôles effectifs", candidateId: "chikirou" },
  { id: 79, theme: "Espaces verts, végétalisation & biodiversité", text: "Amplifier et accélérer les programmes d’ouverture partielle et de renaturation de la Bièvre et du canal Saint-Martin", candidateId: "chikirou" },
  { id: 80, theme: "Espaces verts, végétalisation & biodiversité", text: "Embellir les parcs et jardins en replantant des fleurs", candidateId: "knafo" },
  { id: 81, theme: "Espaces verts, végétalisation & biodiversité", text: "Rendre tous les espaces verts accessibles aux chiens tenus en laisse (sauf aires de jeux enfants)", candidateId: "knafo" },
  { id: 82, theme: "Espaces verts, végétalisation & biodiversité", text: "Planter 50 000 arbres supplémentaires à Paris", candidateId: "mariani" },

  // === FINANCE ET GESTION BUDGÉTAIRE ===
  { id: 83, theme: "Finance et gestion budgétaire", text: "Dès ma première année, je reprendrai en main la gestion de l’Hôtel de Ville, dans son organisation et par une revue de toutes les dépenses et par la mise en place de dispositifs de contrôle interne et d’évaluation de la performance.", candidateId: "dati" },
  { id: 84, theme: "Finance et gestion budgétaire", text: "Porter progressivement à 15 % la part du budget d’investissement de la Ville de Paris réellement consacrée au budget participatif, en excluant explicitement les investissements obligatoires ou déjà programmés (écoles, bâtiments municipaux, mises aux normes)", candidateId: "chikirou" },
  { id: 85, theme: "Finance et gestion budgétaire", text: "je diviserai par deux la dette des Parisiens au cours du prochain mandat d’ici 2032, je veux que Paris soit une ville autofinancée pour ne plus être soumise à l’incertitude des marchés Je conduirai ce plan avec 100 % d’économies et zéro hausse d’impôt", candidateId: "bournazel" },
  { id: 86, theme: "Finance et gestion budgétaire", text: "Je rétablirai les 35h réelles et lutterai contre l’absentéisme dans les services municipaux.", candidateId: "dati" },
  { id: 87, theme: "Finance et gestion budgétaire", text: "Publier chaque année un rapport accessible à tous les Parisiens sur l’état de la dette, sa composition, son coût et son évolution", candidateId: "chikirou" },
  { id: 88, theme: "Finance et gestion budgétaire", text: "Je mènerai une opération « mains propres » pour assainir et moraliser la gestion de la Ville", candidateId: "bournazel" },
  { id: 89, theme: "Finance et gestion budgétaire", text: "Je mettrai fin aux 250 millions dépensés chaque année en préemptions pour faire du logement social à un coût exorbitant. J’établirai immédiatement un moratoire sur les projets d’aménagement coûteux et contestés par les riverains.", candidateId: "dati" },
  { id: 90, theme: "Finance et gestion budgétaire", text: "Exiger une compensation équitable de l’État pour les charges spécifiques de Paris en tant que capitale (cérémonies nationales, entretien d’un patrimoine mondial, accueil touristique, services rendus aux usagers franciliens, prêt gratuit de bâtiments municipaux comme par exemple l’Université de la Sorbonne)", candidateId: "chikirou" },
  { id: 91, theme: "Finance et gestion budgétaire", text: "Faire respecter les 35h – seul un tiers des agents de la Ville est vraiment aux 35h et 270 agents sont même aux 31,5h –, soit environ 2 000 ETP regagnés pour renforcer les effectifs sur le terrain comme la police municipale", candidateId: "bournazel" },
  { id: 92, theme: "Finance et gestion budgétaire", text: "Je lancerai un contrôle de toutes les subventions, avec pour objet d’en réduire le volume en les recentrant sur les priorités locales et en supprimant les subventions militantes ou sans lien avec les Parisiens.", candidateId: "dati" },
  { id: 93, theme: "Finance et gestion budgétaire", text: "Réaliser un audit complet des contrats de concessions, délégations de service public et marchés publics de long terme conclus avec des opérateurs privés par les majorités précédentes afin d’établir un plan de retour en gestion publique ou non lucrative", candidateId: "chikirou" },
  { id: 94, theme: "Finance et gestion budgétaire", text: "120 millions d’économies par l’encadrement des frais de mandat, la division par deux du nombre de collaborateurs de cabinet et d’adjoints au Maire, la fin des jetons de présence, des logements de fonction et des véhicules de fonction avec chauffeurs", candidateId: "bournazel" },
  { id: 95, theme: "Finance et gestion budgétaire", text: "Je réduirai le train de vie de la mairie, notamment les dépenses des cabinets d’élus et de communication et je contrôlerai strictement les notes de frais comme les déplacements des élus.", candidateId: "dati" },
  { id: 96, theme: "Finance et gestion budgétaire", text: "Agir pour que l’État laisse à la Ville la liberté d’augmenter davantage le taux de la taxe d’habitation sur les résidences secondaires et de la taxe sur les logements vacants, afin de dégager des recettes supplémentaires et de mettre en place une fiscalité comportementale en faveur du logement pour les Parisiens", candidateId: "chikirou" },
  { id: 97, theme: "Finance et gestion budgétaire", text: "Plan de lutte contre la fraude au RSA en coopération avec la CAF de Paris : 90 millions d’économies", candidateId: "bournazel" },
  { id: 98, theme: "Finance et gestion budgétaire", text: "Je m’engage à la stabilité de la taxe foncière et des autres impôts locaux.", candidateId: "dati" },
  { id: 99, theme: "Finance et gestion budgétaire", text: "Refuser toute logique d’austérité et de réduction des dépenses publiques au détriment des Parisiens", candidateId: "chikirou" },
  { id: 100, theme: "Finance et gestion budgétaire", text: "Externalisation de la propreté : 740 millions d’économies Baisse des subventions : 350 millions d’économies Baisse de l’absentéisme : 190 millions d’économies", candidateId: "bournazel" },
  { id: 101, theme: "Finance et gestion budgétaire", text: "La masse salariale sera réduite par le non-remplacement ciblé des départs : les efforts seront mis sur les missions prioritaires, comme la propreté, la sécurité ou la petite enfance.", candidateId: "dati" },
  { id: 102, theme: "Finance et gestion budgétaire", text: "Réaliser un audit des surcoûts sur un échantillon représentatif de fournitures courantes en comparant les prix des marchés publics avec les prix pratiqués dans le commerce", candidateId: "chikirou" },
  { id: 103, theme: "Finance et gestion budgétaire", text: "je propose que les bailleurs sociaux parisiens vendent les 20 000 logements qu’ils détiennent hors de Paris. Cela représentera une recette de l’ordre de 3 milliards d’euros.", candidateId: "bournazel" },
  { id: 104, theme: "Finance et gestion budgétaire", text: "Plan d'économies de 10 milliards d'euros sur 10 ans sur la gestion municipale", candidateId: "knafo" },
  { id: 105, theme: "Finance et gestion budgétaire", text: "Diviser la taxe foncière par deux dès le premier budget", candidateId: "knafo" },
  { id: 106, theme: "Finance et gestion budgétaire", text: "Diviser par deux la taxe d'enlèvement des ordures ménagères et la taxe de balayage", candidateId: "knafo" },
  { id: 107, theme: "Finance et gestion budgétaire", text: "Réduire de moitié les effectifs municipaux sur 10 ans (55 000 agents) en ne remplaçant pas les départs naturels", candidateId: "knafo" },
  { id: 108, theme: "Finance et gestion budgétaire", text: "Plan massif d'économies et de réduction de la dette municipale", candidateId: "mariani" },
  { id: 109, theme: "Finance et gestion budgétaire", text: "S'opposer à toute augmentation des taux d'imposition locale pendant toute la durée du mandat", candidateId: "mariani" },
  { id: 110, theme: "Finance et gestion budgétaire", text: "Confier le contrôle de la bonne gestion à une association de défense des contribuables", candidateId: "mariani" },
  { id: 111, theme: "Finance et gestion budgétaire", text: "Encadrer les frais de réception de la Ville pour éviter les abus", candidateId: "mariani" },
  { id: 112, theme: "Finance et gestion budgétaire", text: "Mettre en place une taxation sur les entreprises et ménages fortunés pour financer les services publics", candidateId: "npa" },
  { id: 113, theme: "Finance et gestion budgétaire", text: "Supprimer plus de 100 millions d'euros par an de subventions aux associations politisées et militantes", candidateId: "knafo" },
  { id: 114, theme: "Finance et gestion budgétaire", text: "Réduire le nombre d'adjoints au maire à 10 et diviser par cinq le cabinet du maire", candidateId: "knafo" },

  // === IMMIGRATION ===
  { id: 115, theme: "Immigration", text: "Interdire toute occupation illégale de gymnases ou lieux publics par des personnes en situation irrégulière", candidateId: "knafo" },
  { id: 116, theme: "Immigration", text: "Fermer le centre d'hébergement de migrants du Bois de Boulogne", candidateId: "knafo" },
  { id: 117, theme: "Immigration", text: "Auditer les 99 centres de migrants parisiens gérés par des associations et financés par le contribuable", candidateId: "knafo" },
  { id: 118, theme: "Immigration", text: "Créer une brigade anti-campements clandestins pour démanteler les camps illicites", candidateId: "mariani" },
  { id: 119, theme: "Immigration", text: "Refuser l'immigration de masse et mettre fin aux occupations et réquisitions pour les migrants en situation irrégulière", candidateId: "mariani" },

  // === JEUNESSE ===
  { id: 120, theme: "Jeunesse", text: "Un « Quartier Jeunes » par arrondissement, lieu ouvert à tous les jeunes, proposant un accompagnement personnalisé (accès aux droits et à la santé, parcours d’insertion, urgence sociale ou financière…)", candidateId: "gregoire" },
  { id: 121, theme: "Jeunesse", text: "Former systématiquement les agents municipaux et les forces de l’ordre municipales à la détection et à la prise en charge des victimes de VSS", candidateId: "chikirou" },
  { id: 122, theme: "Jeunesse", text: "Lancer un programme municipal de « Colos pour tous »", candidateId: "bournazel" },
  { id: 123, theme: "Jeunesse", text: "Une offre renforcée de tutorats et de formations, pour favoriser l’entrée dans la vie professionnelle", candidateId: "gregoire" },
  { id: 124, theme: "Jeunesse", text: "Porter la gratuité des transports pour tous les Parisiens de moins de 25 ans sans condition de ressources et sans avance de frais via un mécanisme municipal de prise en charge", candidateId: "chikirou" },
  { id: 125, theme: "Jeunesse", text: "Une augmentation de l’offre de logements sociaux étudiants et des Foyers de Jeunes Travailleurs", candidateId: "gregoire" },
  { id: 126, theme: "Jeunesse", text: "Abaisser l’âge de participation à la vie politique à 16 ans en œuvrant pour la participation des jeunes à l’ensemble des votations et consultations citoyennes, et plaider au niveau national pour abaisser l’âge légal de vote à 16 ans", candidateId: "chikirou" },
  { id: 127, theme: "Jeunesse", text: "Le droit pour chaque jeune de partir au moins une fois par an en vacances, grâce à une offre de séjours à Parifs abordables, avec des séjours adaptés pour les jeunes en situation de handicap.", candidateId: "gregoire" },
  { id: 128, theme: "Jeunesse", text: "Réformer le Conseil Parisien de la Jeunesse pour en faire une instance réellement représentative, avec une composition fondée sur des quotas par arrondissement et un double mode d’entrée mêlant tirage au sort et associations jeunesse, dotée d’un budget autonome et d’un droit de saisine du Conseil de Paris", candidateId: "chikirou" },
  { id: 129, theme: "Jeunesse", text: "Expérimenter l’ouverture d’équipements publics en soirée (gymnases, Maisons de quartier, etc.)", candidateId: "chikirou" },
  { id: 130, theme: "Jeunesse", text: "Réserver au moins 5 % des nouvelles acquisitions ou constructions de logements sociaux par la ville et des logements gérés par la Régie publique de gestion locative1 aux étudiants parisiens, aux jeunes en formation ou en lycée professionnel", candidateId: "chikirou" },
  { id: 131, theme: "Jeunesse", text: "Mettre à disposition de manière pérenne des locaux municipaux pour les associations étudiantes, afin de garantir des lieux stables d’engagement et de solidarité, avec possibilité de stockage sécurisé de matériel", candidateId: "chikirou" },
  { id: 132, theme: "Jeunesse", text: "Créer une résidence étudiante pour les meilleurs étudiants de France et les apprentis", candidateId: "knafo" },

  // === LOGEMENT ===
  { id: 133, theme: "Logement", text: "Je remettrai le logement social au service de ceux qui font vivre Paris. Les travailleurs parisiens et essentiels (auxiliaires de puériculture, enseignants, personnels soignants, policiers) seront prioritaires, les critères d’attribution clairement redéfinis, et un rééquilibrage du parc sera assumé en faveur des familles et de la mixité sociale.", candidateId: "dati" },
  { id: 134, theme: "Logement", text: "Un objectif de 60 000 nouveaux logements publics, avec un rééquilibrage entre les arrondissements et la reconversion massive des bureaux inutilisés", candidateId: "gregoire" },
  { id: 135, theme: "Logement", text: "Agir sur le marché privé de la location et de la propriété en créant les conditions pour une remise sur le marché de 80 000 biens retirés depuis 10 ans", candidateId: "chikirou" },
  { id: 136, theme: "Logement", text: "Proposer un pacte de confiance aux propriétaires Ce cadre reposera sur un fonds de garanties contre les impayés de loyers, les dégradations et de cautions solidaires apportées par la Municipalité pour la location de biens vacants à des travailleurs, jeunes actifs ou étudiants.", candidateId: "bournazel" },
  { id: 137, theme: "Logement", text: "La lutte contre la spéculation, avec la taxation et la réquisition des logements restés vacants depuis plus de 5 ans, l’interdiction de nouvelles résidences secondaires et des meublés touristiques permanents de type Airbnb", candidateId: "gregoire" },
  { id: 138, theme: "Logement", text: "Mettre en place une aide municipale directe au logement, ciblée sur les 50 000 foyers parisiens les plus vulnérables, cumulable avec les APL/ALS", candidateId: "chikirou" },
  { id: 139, theme: "Logement", text: "Je souhaite stabiliser à 25 % la part de logements sociaux à Paris ; j’instaurerai des baux limités dans le temps ; je fusionnerai les trois principaux bailleurs parisiens pour réaliser à terme 6 % d’économies structurelles", candidateId: "bournazel" },
  { id: 140, theme: "Logement", text: "Une brigade de protection du logement pour faire respecter l’encadrement des loyers partout, lutter contre les discriminations, assurer la salubrité", candidateId: "gregoire" },
  { id: 141, theme: "Logement", text: "je fixerai un critère prioritaire d’attribution aux Parisiens qui bossent", candidateId: "bournazel" },
  { id: 142, theme: "Logement", text: "Je donnerai un signal de confiance aux propriétaires pour les inciter à remettre leur bien sur le marché en location longue durée. J’assouplirai les plafonds d’encadrement des loyers lorsqu’un logement revient sur le marché de la location longue durée après une période de vacance.", candidateId: "dati" },
  { id: 143, theme: "Logement", text: "Une assurance habitation municipale accessible à toutes et à tous, incluant une protection contre les punaises de lit", candidateId: "gregoire" },
  { id: 144, theme: "Logement", text: "je propose qu’à Paris, la location Airbnb soit limitée à 30 jours dans l’année Je renforcerai par des outils d’intelligence artificielle et de webscrapping l’efficacité des contrôles", candidateId: "bournazel" },
  { id: 145, theme: "Logement", text: "Je ferai de la rénovation thermique du bâti le « chantier du siècle » parisien. J’assouplirai les plafonds d’encadrement des loyers pour les logements ayant fait l’objet d’une rénovation énergétique d’ampleur les faisant sortir des étiquettes F ou G (gain de 2 échelons). Je pose l’objectif de 10 000 logements rénovés thermiquement par an dans le logement social.", candidateId: "dati" },
  { id: 146, theme: "Logement", text: "Une Garantie Municipale des Loyers étendant le dispositif Visale, pour mettre fin aux galères des locataires et aux discriminations, tout en sécurisant les propriétaires", candidateId: "gregoire" },
  { id: 147, theme: "Logement", text: "Je propose de tripler le rythme actuel de rénovation des logements sociaux pour passer à 12 000 rénovations par an afin de rénover l’intégralité du parc social d’ici 10 ans ; Financer la rénovation de 90 000 passoires thermiques dans le logement privé ; Un fonds de 15 millions d’euros sera dédié à l’expérimentation d’un plan d’autonomie énergétique des copropriétés privées pour viser l’installation de milliers de panneaux photovoltaïques sur les toits parisiens.", candidateId: "bournazel" },
  { id: 148, theme: "Logement", text: "Des logements publics adaptés à chaque âge de la vie, avec une offre renforcée pour les étudiants, les jeunes actifs et les familles, notamment monoparentales, des logements accessibles et adaptés aux personnes en situation de handicap ou âgées et un parcours simplifié pour changer de logement en fonction de sa situation personnelle ou familiale", candidateId: "gregoire" },
  { id: 149, theme: "Logement", text: "Je créerai également une plateforme dédiée permettant aux locataires de signaler anonymement les malfaçons ou problèmes d’entretien dans les résidences.", candidateId: "bournazel" },
  { id: 150, theme: "Logement", text: "La création d’une équipe inter-bailleurs d’intervention rapide pour les petites réparations dans le parc social et des obligations de résultat pour les prestataires de services, afin de garantir aux locataires un logement parfaitement entretenu.", candidateId: "gregoire" },
  { id: 151, theme: "Logement", text: "Instaurer un bail étudiant parisien pour aider les jeunes à se loger ; Créer 3 nouveaux quartiers étudiants, avec 7 000 logements supplémentaires d’ici 2030", candidateId: "bournazel" },
  { id: 152, theme: "Logement", text: "Rénovation et isolation complètes de 35 000 logements sociaux", candidateId: "gregoire" },
  { id: 153, theme: "Logement", text: "Soutien à la rénovation de 200 000 logements privés, grâce au renforcement des aides versées par la Ville de Paris et à l’expérimentation d’une avance à taux zéro des travaux de rénovation, remboursés lors de la vente du bien (« prime climat »", candidateId: "gregoire" },
  { id: 154, theme: "Logement", text: "Supprimer l'encadrement des loyers", candidateId: "knafo" },
  { id: 155, theme: "Logement", text: "Moratoire sur la construction de logements sociaux et sur les préemptions foncières", candidateId: "knafo" },
  { id: 156, theme: "Logement", text: "Vendre des logements sociaux (HLM) avec priorité aux occupants actuels, exonérés de frais de notaire", candidateId: "knafo" },
  { id: 157, theme: "Logement", text: "Plan d'accession à la propriété pour les classes moyennes avec réduction des frais de notaire", candidateId: "knafo" },
  { id: 158, theme: "Logement", text: "Attribuer les logements sociaux via une plateforme en ligne transparente", candidateId: "knafo" },
  { id: 159, theme: "Logement", text: "Instaurer la priorité nationale pour l'accès au logement social, en privilégiant les familles et les travailleurs", candidateId: "mariani" },
  { id: 160, theme: "Logement", text: "Rénover massivement le parc de logements sociaux et privés", candidateId: "mariani" },
  { id: 161, theme: "Logement", text: "Proposer des aides au déménagement adapté pour les locataires, combinées à une réduction de loyer", candidateId: "mariani" },
  { id: 162, theme: "Logement", text: "Développer l'habitat intergénérationnel (étudiants-seniors) pour lutter contre l'isolement", candidateId: "mariani" },
  { id: 163, theme: "Logement", text: "Réquisitionner sans indemnité les logements et bureaux vacants pour les transformer en logements", candidateId: "npa" },
  { id: 164, theme: "Logement", text: "Arrêter toutes les expulsions locatives et d'hébergement", candidateId: "npa" },
  { id: 165, theme: "Logement", text: "Construire massivement des logements sociaux, encadrer, geler et baisser les loyers", candidateId: "npa" },
  { id: 166, theme: "Logement", text: "Plan massif de rénovation des logements et résidences universitaires", candidateId: "npa" },
  { id: 167, theme: "Logement", text: "Baisser les frais de notaire (droits de mutation) de 10% pour faciliter l'accession à la propriété", candidateId: "knafo" },
  { id: 168, theme: "Logement", text: "Convertir des bureaux vacants en 6 000 logements pour les familles parisiennes", candidateId: "mariani" },
  { id: 169, theme: "Logement", text: "Limiter les locations Airbnb à 60 nuits par an (contre 120 actuellement)", candidateId: "mariani" },
  { id: 170, theme: "Logement", text: "Permettre à 40 000 familles parisiennes d'accéder à la propriété via un plan d'accession", candidateId: "mariani" },

  // === PATRIMOINE & BEAUTÉ DE LA VILLE ===
  { id: 171, theme: "Patrimoine & Beauté de la ville", text: "Je ferai retirer les palissades des chantiers finis, les plots en béton ou en plastique, les palettes en bois, etc. Je mettrai fin au provisoire qui dure et aux réparations de fortune. Avec moi, ce sera la fin du bricolage et le retour de la qualité.", candidateId: "dati" },
  { id: 172, theme: "Patrimoine & Beauté de la ville", text: "Je mettrai en place un plan d’urgence pour sauver le patrimoine de Paris avec un volet dédié aux églises.", candidateId: "dati" },
  { id: 173, theme: "Patrimoine & Beauté de la ville", text: "Je ferai appliquer une charte « Paris du beau », charte esthétique de la Ville applicable aux espaces publics. Elle définira les matériaux et mobiliers à utiliser en conformité avec l’histoire patrimoniale de Paris. Dans les lieux patrimoniaux, une charte esthétique sera applicable aux commerces (toile écrue/gris chaud, etc.).", candidateId: "dati" },
  { id: 174, theme: "Patrimoine & Beauté de la ville", text: "Abroger le PLU bioclimatique et revenir à un PLU garantissant l'harmonie architecturale", candidateId: "knafo" },
  { id: 175, theme: "Patrimoine & Beauté de la ville", text: "Réautoriser l'éclairage des vitrines des commerces la nuit", candidateId: "knafo" },
  { id: 176, theme: "Patrimoine & Beauté de la ville", text: "Réautoriser les terrasses chauffées", candidateId: "knafo" },
  { id: 177, theme: "Patrimoine & Beauté de la ville", text: "Créer une charte renforcée de respect de l'urbanisme parisien et des immeubles haussmanniens", candidateId: "mariani" },
  { id: 178, theme: "Patrimoine & Beauté de la ville", text: "Restaurer le mobilier urbain historique de Paris : bancs Davioud, réverbères classiques, grilles d'arbres en fonte", candidateId: "knafo" },
  { id: 179, theme: "Patrimoine & Beauté de la ville", text: "Prolonger l'éclairage ornemental des monuments parisiens jusqu'à minuit", candidateId: "knafo" },

  // === PETITE ENFANCE / PROTECTION DE L'ENFANCE ===
  { id: 180, theme: "Petite enfance / protection de l'enfance", text: "Je veux que 100% des places en crèche soient pourvues et que les horaires d’accueil soient élargis. Pour y parvenir, les personnels des crèches deviendront prioritaires pour l’accès au logement social.", candidateId: "dati" },
  { id: 181, theme: "Petite enfance / protection de l'enfance", text: "La protection des enfants comme impératif absolu : jamais d’adulte seul avec un enfant, des dispositifs pour recueillir leur parole dans chaque école, une formation à la bientraitance, aux droits de l’enfant et à la détection des violences pour tous les animateurs, des inspections indépendantes régulières et des processus de signalement transparents", candidateId: "gregoire" },
  { id: 182, theme: "Petite enfance / protection de l'enfance", text: "Créer 6 500 places en crèche publique d’ici 2032 pour répondre aux besoins", candidateId: "chikirou" },
  { id: 183, theme: "Petite enfance / protection de l'enfance", text: "j’instaurerai un screening systématique et obligatoire des références et du casier judiciaire avant tout recrutement d’un nouvel animateur périscolaire. Je ferai également scanner l’intégralité des 12 000 personnels en poste et renverrai sur le champ les agents concernés par toute irrégularité.", candidateId: "bournazel" },
  { id: 184, theme: "Petite enfance / protection de l'enfance", text: "J’instaurerai un prêt à taux zéro en cas de déménagement pour accueillir un nouvel enfant.", candidateId: "dati" },
  { id: 185, theme: "Petite enfance / protection de l'enfance", text: "Ouvrir les dix centres de protection maternelle et infantile communaux les plus fréquentés jusqu’à 19h30 trois soirs par semaine et le samedi matin", candidateId: "chikirou" },
  { id: 186, theme: "Petite enfance / protection de l'enfance", text: "je créerai 10 000 solutions supplémentaires de modes de garde, notamment de nouvelles places en crèche mais aussi de garde à domicile.", candidateId: "bournazel" },
  { id: 187, theme: "Petite enfance / protection de l'enfance", text: "Je clarifierai les rythmes scolaires : les élèves auront classe les lundi, mardi, jeudi et vendredi, de 8H30 à 16H30, soit 4 jours pleins par semaine. Le mercredi sera sanctuarisé pour un temps périscolaire de qualité, qui mobilisera des animateurs diplômés et contrôlés. Je créerai également un temps d’études dirigées après l’école.", candidateId: "dati" },
  { id: 188, theme: "Petite enfance / protection de l'enfance", text: "Recruter 1000 auxiliaires de puériculture et agents de la petite enfance supplémentaires grâce à des carrières revalorisées et à l’offre de formation développée par la Ville", candidateId: "gregoire" },
  { id: 189, theme: "Petite enfance / protection de l'enfance", text: "Organiser, dans chaque arrondissement, des ateliers municipaux de découverte de lieux culturels et de la nature à destination des tout-petits", candidateId: "chikirou" },
  { id: 190, theme: "Petite enfance / protection de l'enfance", text: "Développer le réseau des « Maisons des Nounous » pour redonner du temps aux familles le soir en semaine et le week-end", candidateId: "bournazel" },
  { id: 191, theme: "Petite enfance / protection de l'enfance", text: "Je créerai des maisons de la parentalité. Dans le cadre du droit à l’expérimentation des collectivités locales, j’étendrai les compétences des PMI pour mieux accompagner les parents : informations-conseils, aides dans la recherche de professionnels de santé ou paramédicaux, etc.", candidateId: "dati" },
  { id: 192, theme: "Petite enfance / protection de l'enfance", text: "Multiplier les crèches Oasis et développer les Maisons d’Assistantes Maternelles", candidateId: "gregoire" },
  { id: 193, theme: "Petite enfance / protection de l'enfance", text: "Mettre en place des crèches de garde ouvertes le samedi (voire le dimanche), accessibles en priorité aux familles monoparentales et soutenir les initiatives de garde visant à libérer du temps pour les parents isolés", candidateId: "chikirou" },
  { id: 194, theme: "Petite enfance / protection de l'enfance", text: "Déployer la carte « parent solo »", candidateId: "bournazel" },
  { id: 195, theme: "Petite enfance / protection de l'enfance", text: "Soutenir les familles monoparentales, avec notamment une priorité d’accès aux crèches et une tarification adaptée des services municipaux", candidateId: "gregoire" },
  { id: 196, theme: "Petite enfance / protection de l'enfance", text: "Offrir des solutions de garde en dehors des horaires traditionnels des écoles et des crèches, deux heures par semaine, afin de soulager les familles, notamment monoparentales.", candidateId: "gregoire" },
  { id: 197, theme: "Petite enfance / protection de l'enfance", text: "Lancer un grand plan de protection de la petite enfance avec tolérance zéro contre la maltraitance", candidateId: "mariani" },
  { id: 198, theme: "Petite enfance / protection de l'enfance", text: "Réserver en priorité les places en crèches municipales aux familles françaises", candidateId: "mariani" },
  { id: 199, theme: "Petite enfance / protection de l'enfance", text: "Ouvrir des crèches la nuit pour les parents travaillant en horaires décalés", candidateId: "mariani" },
  { id: 200, theme: "Petite enfance / protection de l'enfance", text: "Instaurer la gratuité de la crèche à partir du 3ème enfant", candidateId: "mariani" },

  // === PROBITÉ ===
  { id: 201, theme: "Probité", text: "Garantir la probité et l’éthique des élus municipaux dans l’exercice de leurs fonctions pour prévenir toute forme de privilège, d’abus ou de favoritisme et rétablir la confiance des Parisiens envers leurs élus ;", candidateId: "bournazel" },
  { id: 202, theme: "Probité", text: "Instaurer une gouvernance citoyenne, transparente et contrôlée afin que les Parisiens sachent exactement comment l’argent de leurs impôts locaux est utilisé, pour mettre fin à l’opacité administrative et garantir une transparence complète sur la gestion de la Ville de Paris.", candidateId: "bournazel" },

  // === PROPRETÉ ET GESTION DES DÉCHETS ===
  { id: 203, theme: "Propreté et gestion des déchets", text: "Je réorganiserai la direction de la propreté en changeant les méthodes de travail et donnerai aux maires d’arrondissement de véritables leviers d’action : effectifs et équipements pour agir au plus vite.", candidateId: "dati" },
  { id: 204, theme: "Propreté et gestion des déchets", text: "Remunicipaliser l’ensemble du service public de la propreté : auditer l’ensemble des délégations de service public (DSP) en cours dès le début de la mandature et programmer leur non-renouvellement, avec préparation en amont de la transition vers les équipes publiques, afin d’atteindre 100 % de gestion en régie municipale à horizon 2030", candidateId: "chikirou" },
  { id: 205, theme: "Propreté et gestion des déchets", text: "je privatiserai la collecte des déchets et le nettoiement des rues (La privatisation dégagera ainsi 742 millions d’euros d’économies sur la mandature)", candidateId: "bournazel" },
  { id: 206, theme: "Propreté et gestion des déchets", text: "Je mettrai en place des brigades d’intervention d’urgence, prêtes à agir plusieurs fois par jour là où la saleté s’accumule.", candidateId: "dati" },
  { id: 207, theme: "Propreté et gestion des déchets", text: "Recruter 300 agents supplémentaires à horizon 2032 et intégrer le personnel volontaire des DSP comme agents municipaux", candidateId: "chikirou" },
  { id: 208, theme: "Propreté et gestion des déchets", text: "j’associerai les communes limitrophes volontaires pour mutualiser ce service public, permettant des économies d’échelle et une meilleure qualité de service aux portes de Paris.‍", candidateId: "bournazel" },
  { id: 209, theme: "Propreté et gestion des déchets", text: "Nous mènerons avec la Police municipale des actions coups de poing de verbalisation contre ceux qui dégradent notre cadre de vie au quotidien (tags, dépôts sauvages, etc.).", candidateId: "dati" },
  { id: 210, theme: "Propreté et gestion des déchets", text: "Investir 30 à 40 millions d’euros supplémentaires sur la mandature, grâce notamment aux économies que permettra la remunicipalisation", candidateId: "chikirou" },
  { id: 211, theme: "Propreté et gestion des déchets", text: "Je confierai la collecte à des opérateurs privés sélectionnés sur des critères stricts de performance et de continuité de service public.", candidateId: "dati" },
  { id: 212, theme: "Propreté et gestion des déchets", text: "Créer un référent de quartier parmi les agents municipaux, identifié par les habitants comme point de contact privilégié pour toutes les questions de propreté", candidateId: "chikirou" },
  { id: 213, theme: "Propreté et gestion des déchets", text: "Je lancerai un grand plan de lutte contre la prolifération des rats : utilisation de la glace carbonique ou de pièges écologiques connectés.", candidateId: "dati" },
  { id: 214, theme: "Propreté et gestion des déchets", text: "Renforcer le modèle des régies de quartier et créer au moins une régie par arrondissement, via une augmentation des conventionnements et subventions", candidateId: "chikirou" },
  { id: 215, theme: "Propreté et gestion des déchets", text: "Réorganiser la restauration collective afin de réduire de 75 % le gaspillage alimentaire et d’éliminer le plastique", candidateId: "chikirou" },
  { id: 216, theme: "Propreté et gestion des déchets", text: "Déployer un réseau municipal de consigne pour les bouteilles en verre dans les commerces alimentaires, afin de reprendre en main la collecte, le recyclage, la valorisation et la réutilisation du verre à Paris", candidateId: "chikirou" },
  { id: 217, theme: "Propreté et gestion des déchets", text: "Mener une politique active auprès de la restauration privée et de loisirs pour atteindre l’objectif « zéro plastique », et accompagner les entreprises et commerçants dans leur bifurcation vers le zéro déchet", candidateId: "chikirou" },
  { id: 218, theme: "Propreté et gestion des déchets", text: "Déployer des dispositifs de partage des aliments encore consommables, en soutenant les associations de collecte des invendus et en développant des actions d’éducation à la réduction du gaspillage, notamment dans les cantines", candidateId: "chikirou" },
  { id: 219, theme: "Propreté et gestion des déchets", text: "Déployer un maillage important de points de collecte du quotidien (mairies, écoles, équipements municipaux, bibliothèques, etc.) ainsi qu’un circuit pour professionnels permettant d’assurer des collectes régulières", candidateId: "chikirou" },
  { id: 220, theme: "Propreté et gestion des déchets", text: "Installer des bacs sécurisés pour le « petit numérique » (téléphones, tablettes, accessoires) afin d’éviter la casse et les pertes", candidateId: "chikirou" },
  { id: 221, theme: "Propreté et gestion des déchets", text: "Faire de la commande publique un levier de changement d’échelle, en donnant la priorité au reconditionné sur le neuf, avec des critères exigeants (réparabilité, disponibilité des pièces, éco-conception)", candidateId: "chikirou" },
  { id: 222, theme: "Propreté et gestion des déchets", text: "Renégocier le contrat d’objectifs Paris-Syctom pour y intégrer l’objectif « zéro incinération » et des trajectoires contraignantes sur les biodéchets, le recyclage et le tri", candidateId: "chikirou" },
  { id: 223, theme: "Propreté et gestion des déchets", text: "Porter le budget dédié à 15 millions d’euros par an et intervenir dans les 24h après signalement effectué sur le site internet de la Ville (espace « Alerte rongeurs »)", candidateId: "chikirou" },
  { id: 224, theme: "Propreté et gestion des déchets", text: "Tendre vers l’objectif « zéro déchet » à l’échelle municipale", candidateId: "chikirou" },
  { id: 225, theme: "Propreté et gestion des déchets", text: "Privatiser la collecte des ordures et le balayage via appels d'offres, avec reprise garantie de 80% des agents", candidateId: "knafo" },
  { id: 226, theme: "Propreté et gestion des déchets", text: "Externaliser totalement la collecte des déchets et laisser chaque arrondissement choisir son prestataire", candidateId: "mariani" },
  { id: 227, theme: "Propreté et gestion des déchets", text: "Assurer la propreté 24h/24 par le redéploiement des agents municipaux sur le terrain", candidateId: "mariani" },
  { id: 228, theme: "Propreté et gestion des déchets", text: "Lancer un plan massif de dératisation dans tout Paris", candidateId: "mariani" },
  { id: 229, theme: "Propreté et gestion des déchets", text: "Appliquer la théorie des « vitres cassées » : tolérance zéro sur les incivilités, verbalisation systématique", candidateId: "mariani" },

  // === PÉRISCOLAIRE ===
  { id: 230, theme: "Périscolaire", text: "Des activités périscolaires de qualité autour de la culture grâce au programme « un mois une découverte », du sport, de l’apprentissage des langues, des sciences et de la citoyenneté", candidateId: "gregoire" },
  { id: 231, theme: "Périscolaire", text: "Respecter le taux d’encadrement national de 1 pour 8 pour les enfants de moins de 6 ans et de 1 pour 12 pour les plus de 6 ans en recrutant pour atteindre 10 000 animateurs périscolaires permanents à la fin de la mandature", candidateId: "chikirou" },
  { id: 232, theme: "Périscolaire", text: "offrir un accueil « tout-en-un » : aide aux devoirs, sport, arts et culture", candidateId: "bournazel" },
  { id: 233, theme: "Périscolaire", text: "Une classe de découverte au moins une fois dans sa scolarité pour chaque petite Parisienne et chaque petit Parisien", candidateId: "gregoire" },
  { id: 234, theme: "Périscolaire", text: "je revaloriserai ces métiers avec des primes de reconnaissance de l’engagement professionnel pouvant s’élever jusqu’à 500 €", candidateId: "bournazel" },
  { id: 235, theme: "Périscolaire", text: "Une filière de l’animation confortée et professionnalisée, avec notamment la fin des vacations et 100 % de contrats continus, du temps du midi au temps du soir", candidateId: "gregoire" },
  { id: 236, theme: "Périscolaire", text: "Je créerai une inspection municipale du périscolaire, chargée de contrôler chaque année 100 % des structures", candidateId: "bournazel" },
  { id: 237, theme: "Périscolaire", text: "La création d’une offre « péricollège », y compris pendant les vacances.", candidateId: "gregoire" },
  { id: 238, theme: "Périscolaire", text: "Je m’appuierai sur les professeurs de la Ville de Paris, qui interviennent déjà en arts plastiques, musique ou sport, pour renforcer les ateliers de qualité au sein du périscolaire", candidateId: "bournazel" },
  { id: 239, theme: "Périscolaire", text: "Lancement, dès avril 2026, d’une convention citoyenne sur les temps scolaires, le périscolaire et les droits de l’enfant", candidateId: "gregoire" },

  // === SANTÉ ===
  { id: 240, theme: "Santé", text: "Comme Maire de Paris, en ma qualité de présidente de l’AP-HP, je lancerai un plan de désengorgement des urgences en aidant à l’installation de maisons de santé et de centres de soins non programmés.", candidateId: "dati" },
  { id: 241, theme: "Santé", text: "Une mutuelle municipale parisienne abordable et de qualité", candidateId: "gregoire" },
  { id: 242, theme: "Santé", text: "Densifier le réseau de centres de santé municipaux polyvalents avec ouverture, en coopération avec le personnel médical de l’AP-HP, de centres de santé dans l’Est parisien pour y pallier la crise de l’offre médicale, et atteindre à horizon 2032 l’objectif d’au moins un centre de santé par arrondissement", candidateId: "chikirou" },
  { id: 243, theme: "Santé", text: "Objectif 100 nouveaux lieux de soin de proximité en secteur 1 (publics, associatifs, libéraux et 7 centres de santé municipaux créés ou agrandis)", candidateId: "gregoire" },
  { id: 244, theme: "Santé", text: "Créer un service de bus itinérants santé dans les zones d’intervention prioritaire (ZIP) afin de renforcer la prévention, l’accompagnement et l’orientation parmi les Parisiennes et les Parisiens les plus vulnérables", candidateId: "chikirou" },
  { id: 245, theme: "Santé", text: "Un parcours des 1000 premiers jours de l’enfant, proposé à partir des 60 centres de Protection Maternelle et Infantile (PMI) et des Maisons des 1000 premiers jours incluant un dispositif de diagnostic précoce des troubles cognitifs et des troubles du spectre autistique", candidateId: "gregoire" },
  { id: 246, theme: "Santé", text: "Recruter dans les centres de santé municipaux polyvalents des psychologues pratiquant le tiers payant intégral pour répondre aux besoins de prise en charge des Parisiennes et des Parisiens, avec pour objectif d’atteindre à horizon 2032 au moins deux psychologues par centre de santé municipal, et pour ambition d’étendre le dispositif aux antennes de santé d’arrondissement", candidateId: "chikirou" },
  { id: 247, theme: "Santé", text: "Un service de santé scolaire renforcé avec au moins un bilan de santé complet pour chaque enfant en maternelle et en primaire et un grand plan de santé mentale en direction des jeunes", candidateId: "gregoire" },
  { id: 248, theme: "Santé", text: "Développer un réseau Haltes Soins Addictions sur la base de structures de petite taille pour la prévention, l’accompagnement et la prise en charge dans les quartiers où les besoins se font sentir, accueillant un nombre de personnes limité afin de garantir aux usagers et aux structures une insertion harmonieuse dans le tissu urbain.", candidateId: "chikirou" },
  { id: 249, theme: "Santé", text: "Un plan ambitieux pour la santé sexuelle (dépistage, prévention, contraception…) avec un objectif clair : zéro nouvelle infection au VIH en 2030 et la liberté de disposer de son corps sans discriminations", candidateId: "gregoire" },
  { id: 250, theme: "Santé", text: "Des équipes pluridisciplinaires et des lieux dédiés à la réduction des risques, pour prendre en charge les personnes en errance, notamment les usagers de drogue et les personnes souffrant de troubles psychiques", candidateId: "gregoire" },
  { id: 251, theme: "Santé", text: "Un parcours d’accompagnement spécifique et personnalisé pour les femmes souffrant d’endométriose.", candidateId: "gregoire" },
  { id: 252, theme: "Santé", text: "Défendre l'hôpital public contre les coupes budgétaires et garantir l'accès à la santé pour tous", candidateId: "npa" },
  { id: 253, theme: "Santé", text: "Supprimer les salles de shoot et créer un centre de soin unique pour traiter la toxicomanie", candidateId: "mariani" },
  { id: 254, theme: "Santé", text: "Instaurer une prévention scolaire obligatoire sur les dangers des stupéfiants", candidateId: "mariani" },
  { id: 255, theme: "Santé", text: "Lancer un plan de prévention des maladies mentales dans les écoles et collèges", candidateId: "mariani" },

  // === SERVICES PUBLICS ===
  { id: 256, theme: "Services publics", text: "Un guichet physique unique dans chaque Mairie d’arrondissement, aux horaires élargis et doté d’agents polyvalents, pour accompagner toutes les démarches administratives, garantir un accès effectif aux droits et lutter contre la fracture numérique", candidateId: "gregoire" },
  { id: 257, theme: "Services publics", text: "Un service public qui s’adresse à chacune et chacun à tous les moments clés de la vie familiale (naissance, passage à l’adolescence, séparation, décès…) pour proposer un accompagnement adapté", candidateId: "gregoire" },
  { id: 258, theme: "Services publics", text: "Création d’une application regroupant 100 % des services numériques de la Ville accessible pour tous les types de handicaps (visuel, moteur, cognitif)", candidateId: "gregoire" },
  { id: 259, theme: "Services publics", text: "Des horaires étendus pour les équipements publics, notamment les parcs, piscines, gymnases, bibliothèques et musées", candidateId: "gregoire" },
  { id: 260, theme: "Services publics", text: "Un service public solidaire de la naissance à la mort, notamment avec une prise en charge du coût et des démarches funéraires pour les plus précaires et le développement de nouveaux lieux pour les cérémonies funéraires.", candidateId: "gregoire" },
  { id: 261, theme: "Services publics", text: "Arrêter toutes les privatisations et fermetures de classes, municipaliser les services publics", candidateId: "npa" },
  { id: 262, theme: "Services publics", text: "Rendre gratuits l'eau (premiers m³), les transports en commun, les centres de santé et les cantines", candidateId: "npa" },
  { id: 263, theme: "Services publics", text: "Exproprier les groupes privés gérant des crèches, EHPAD et centres de soins et les municipaliser", candidateId: "npa" },

  // === SOLIDARITÉ, INCLUSION & ACCESSIBILITÉ ===
  { id: 264, theme: "Solidarité, inclusion & accessibilité", text: "J’instaurerai la logique du guichet unique pour la Maison départementale des personnes handicapées (MDPH), dont la complexité des démarches conduit beaucoup de parents à renoncer.", candidateId: "dati" },
  { id: 265, theme: "Solidarité, inclusion & accessibilité", text: "Adopter une délibération du Conseil de Paris visant à l’engager à ne pas voter un projet d’aménagement de l’espace public sans avis favorable du Conseil départemental de la citoyenneté et de l’autonomie (CDCA), avec obligation de médiation publique en cas de désaccord", candidateId: "chikirou" },
  { id: 266, theme: "Solidarité, inclusion & accessibilité", text: "Rendre 100 % des équipements municipaux accessibles avant la fin de la mandature, avec un plan pluriannuel de travaux et un suivi public annuel", candidateId: "chikirou" },
  { id: 267, theme: "Solidarité, inclusion & accessibilité", text: "Créer un guichet unique handicap dans chaque mairie d’arrondissement, en lien avec la Maison départementale des personnes handicapées, pour l’orientation, l’accompagnement et la lutte contre le non-recours", candidateId: "chikirou" },
  { id: 268, theme: "Solidarité, inclusion & accessibilité", text: "Renforcer l’accessibilité dans les logements sociaux gérés par les bailleurs sociaux parisiens pour atteindre l’objectif de 70 % de logements accessibles à horizon 2032", candidateId: "chikirou" },
  { id: 269, theme: "Solidarité, inclusion & accessibilité", text: "Faire de la Ville un employeur exemplaire en visant 10 % d’agents municipaux handicapés et au moins 6 % dans les catégories A+ et A, à horizon 2032", candidateId: "chikirou" },
  { id: 270, theme: "Solidarité, inclusion & accessibilité", text: "Je mettrai en place un système de veille solidaire permettant aux agents publics, professionnels de santé, gardiens d’immeuble, commerçants ou voisins de relayer les situations d’isolement et accompagner les personnes isolées.", candidateId: "dati" },
  { id: 271, theme: "Solidarité, inclusion & accessibilité", text: "Créer des résidences sécurisées pour les victimes de violences conjugales", candidateId: "mariani" },
  { id: 272, theme: "Solidarité, inclusion & accessibilité", text: "Développer l'hébergement d'urgence dans des conditions dignes et salubres", candidateId: "npa" },

  // === SPORT ===
  { id: 273, theme: "Sport", text: "Nous ouvrirons plus de créneaux sportifs sur des plages horaires élargies tout au long de l’année. Des créneaux plus nombreux seront réservés au sport adapté.", candidateId: "dati" },
  { id: 274, theme: "Sport", text: "Mettre en place la gratuité des activités sportives municipales pour tous les moins de 25 ans et une tarification sociale au-delà de cet âge", candidateId: "chikirou" },
  { id: 275, theme: "Sport", text: "Je remettrai de l’ordre sur les pistes cyclables et les trottoirs.", candidateId: "bournazel" },
  { id: 276, theme: "Sport", text: "Je ferai de la natation la grande cause sportive de mon mandat : nous prioriserons la rénovation des piscines municipales dont la vétusté occasionne trop de fermetures.", candidateId: "dati" },
  { id: 277, theme: "Sport", text: "Isoler thermiquement l’ensemble des infrastructures sportives et privilégier la rénovation à la construction, avec des matériaux bas-carbone", candidateId: "chikirou" },
  { id: 278, theme: "Sport", text: "Je mettrai fin au tirage au sort dans les conservatoires avec la création de 2 000 places supplémentaires d’ici 2027, en priorité dans les arrondissements sous-dotés.", candidateId: "dati" },
  { id: 279, theme: "Sport", text: "Mobiliser les temps périscolaires et extra-scolaires pour des stages de natation pour les enfants scolarisés à Paris et atteindre un objectif de 100 % des enfants sachant nager avant l’entrée au collège", candidateId: "chikirou" },
  { id: 280, theme: "Sport", text: "Les bibliothèques et médiathèques de quartier seront ouvertes systématiquement le dimanche et leurs horaires seront élargis.", candidateId: "dati" },
  { id: 281, theme: "Sport", text: "Créer une Assemblée parisienne du sport dotée d’un budget participatif annuel de 10 millions d’euros", candidateId: "chikirou" },
  { id: 282, theme: "Sport", text: "Je ferai rester le PSG à Paris, et créerai un projet de grande cité sportive moderne pour faire rayonner mondialement le sport parisien ! Je négocierai la vente du Parc des Princes au PSG en contrepartie de la création d’un village sportif et culturel « parc PSG » autour du stade, en lien avec les associations sportives du secteur, pour que le club reste à Paris et que cela bénéficie aux Parisiens.", candidateId: "dati" },
  { id: 283, theme: "Sport", text: "Développer des équipements sportifs publics de proximité (stades, piscines, gymnases, équipements extérieurs en libre accès)", candidateId: "chikirou" },
  { id: 284, theme: "Sport", text: "Je mettrai fin aux réquisitions intempestives des gymnases.", candidateId: "dati" },
  { id: 285, theme: "Sport", text: "Renforcer l’offre de sport pour les personnes âgées à l’échelle des arrondissements, en privilégiant des pratiques douces et régulières", candidateId: "chikirou" },
  { id: 286, theme: "Sport", text: "Créer des continuités piétonnes reliant des parcs entre eux pour favoriser la marche et la course à pied sur de longues distances, en dehors de la circulation automobile", candidateId: "chikirou" },
  { id: 287, theme: "Sport", text: "Planifier une sortie des chaudières au fioul et au gaz dans les équipements sportifs", candidateId: "chikirou" },
  { id: 288, theme: "Sport", text: "Faire des associations sportives scolaires des lieux de découverte d’activités rarement proposées et peu médiatisées", candidateId: "chikirou" },
  { id: 289, theme: "Sport", text: "Créer un site internet municipal recensant l’ensemble des offres par discipline et par arrondissement", candidateId: "chikirou" },
  { id: 290, theme: "Sport", text: "Installer des terrains de sport (football, basketball, padel) sous les viaducs du métro aérien", candidateId: "knafo" },

  // === SÉCURITÉ ===
  { id: 291, theme: "Sécurité", text: "Je bâtirai un corps de 5 000 agents de police municipale armés et formés, déployés jour et nuit et chargés de lutter contre la délinquance du quotidien. J’élargirai leurs compétences : contrôle des identités, accès aux fichiers nationaux, traitement rapide et ciblé de la petite délinquance et des incivilités.", candidateId: "dati" },
  { id: 292, theme: "Sécurité", text: "Mettre en œuvre un plan municipal de lutte contre les violences sexistes et sexuelles, incluant la création de 200 nouvelles places d’hébergement d’urgence dédiées", candidateId: "chikirou" },
  { id: 293, theme: "Sécurité", text: "Nouvelle police municipale de 6 000 agents, soit un triplement des effectifs au cours de la prochaine mandature (+100 millions d’euros par an, équipement compris), financé par les baisses d’effectifs dans les bureaux de la Mairie de Paris", candidateId: "bournazel" },
  { id: 294, theme: "Sécurité", text: "Je renforcerai la sécurité dans les zones de nondroit : création d’équipes de sécurité rattachées aux bailleurs sociaux ; aide au financement de la vidéoprotection et des alarmes dans les commerces et cabinets médicaux, sécurisation des tunnels, dessous des ponts, portes de Paris.", candidateId: "dati" },
  { id: 295, theme: "Sécurité", text: "Créer des antennes de proximité réunissant police municipale, médiateurs, éducateurs et assistants sociaux, au sein des Maisons de quartier", candidateId: "chikirou" },
  { id: 296, theme: "Sécurité", text: "Policiers armés (révolvers et gilets pare-balles) et formés au sein d’une académie de la police municipale parisienne", candidateId: "bournazel" },
  { id: 297, theme: "Sécurité", text: "Le réseau de vidéoprotection sera doublé pour atteindre 8 000 caméras, toutes reliées à un Centre de Supervision Urbain unique, décliné dans les arrondissements, véritable coeur opérationnel de la sécurité parisienne.", candidateId: "dati" },
  { id: 298, theme: "Sécurité", text: "Augmenter le nombre d’agents de police municipale afin d’atteindre l’objectif de 3 500 agents réellement formés et déployés", candidateId: "chikirou" },
  { id: 299, theme: "Sécurité", text: "J’attribuerai aux policiers municipaux parisiens, comme aux autres agents publics essentiels, une priorité dans l’accès aux logements sociaux", candidateId: "bournazel" },
  { id: 300, theme: "Sécurité", text: "Je renforcerai la sécurité aux abords des écoles, collèges et équipements de proximité : vidéoprotection et Brigades Municipales de Sécurité devant les collèges.", candidateId: "dati" },
  { id: 301, theme: "Sécurité", text: "Créer trois unités de police municipale spécialisées respectivement dans le tourisme, la santé mentale et les addictions, et la lutte contre les violences sexistes et sexuelles, formées spécifiquement à la prévention et à la médiation dans ces domaines précis", candidateId: "chikirou" },
  { id: 302, theme: "Sécurité", text: "Je souhaite également qu'ils voient leurs compétences étendues pour constater des délits, facturer des amendes, consulter des images de vidéoprotection, faire passer des tests d'alcoolémie ou de stupéfiants ou utiliser des dispositifs de lecture automatisée de plaques d'immatriculation", candidateId: "bournazel" },
  { id: 303, theme: "Sécurité", text: "Je lutterai contre le trafic et la consommation de crack par la création de centres de soins en dehors des zones densément peuplées et tournés vers la sortie de l’addiction.", candidateId: "dati" },
  { id: 304, theme: "Sécurité", text: "Doubler le nombre d’éducateurs spécialisés à horizon 2029, renforcer la filière par la formation diplômante interne et par des bourses aux étudiants, et revaloriser les grilles salariales et indemnités, notamment l’attribution de la NBI (Nouvelle Bonification Indiciaire)", candidateId: "chikirou" },
  { id: 305, theme: "Sécurité", text: "je signerai une convention avec le ministère des Armées et de l’Intérieur afin de faciliter le recrutement d’anciens militaires ou de fonctionnaires de la Police nationale ou de la Gendarmerie nationale", candidateId: "bournazel" },
  { id: 306, theme: "Sécurité", text: "Je créerai des dispositifs spécifiques de sécurisation des bois ainsi que des grands parcs et jardins : antennes de police dotées de brigades équestres ; installation de caméras et d’éclairage aux abords et sur les axes principaux.", candidateId: "dati" },
  { id: 307, theme: "Sécurité", text: "J’installerai enfin au moins une caméra de vidéoprotection aux abords de chaque école et de chaque collège", candidateId: "bournazel" },
  { id: 308, theme: "Sécurité", text: "Doubler les effectifs de la police municipale pour atteindre 8 000 agents", candidateId: "knafo" },
  { id: 309, theme: "Sécurité", text: "Armer la police municipale avec des armes à feu", candidateId: "knafo" },
  { id: 310, theme: "Sécurité", text: "Plan de reconquête des zones de non-droit avec interpellations massives (Champs-Élysées, Barbès, La Chapelle)", candidateId: "knafo" },
  { id: 311, theme: "Sécurité", text: "Créer une brigade équestre municipale (40 chevaux, 60 cavaliers)", candidateId: "knafo" },
  { id: 312, theme: "Sécurité", text: "Créer une brigade canine municipale (30 chiens)", candidateId: "knafo" },
  { id: 313, theme: "Sécurité", text: "Équiper les caméras de vidéosurveillance d'intelligence artificielle", candidateId: "knafo" },
  { id: 314, theme: "Sécurité", text: "Équiper les réverbères de capteurs sonores IA capables de reconnaître des cris d'agression ou des bruits de vitre cassée", candidateId: "knafo" },
  { id: 315, theme: "Sécurité", text: "Renforcer l'éclairage public nocturne dans tous les quartiers", candidateId: "knafo" },
  { id: 316, theme: "Sécurité", text: "Tripler les effectifs de la police municipale pour atteindre 8 350 agents (ratio de 4 policiers pour 1 000 habitants)", candidateId: "mariani" },
  { id: 317, theme: "Sécurité", text: "Armer la police municipale et élargir ses prérogatives", candidateId: "mariani" },
  { id: 318, theme: "Sécurité", text: "Patrouilles de police municipale 24h/24 dans tous les quartiers", candidateId: "mariani" },
  { id: 319, theme: "Sécurité", text: "Créer 7 brigades spécialisées : anti-squats, anti-drogue, anti-campements, transports, circulation, action rapide, quartier", candidateId: "mariani" },
  { id: 320, theme: "Sécurité", text: "Tripler le réseau de vidéoprotection pour atteindre 5 000 caméras", candidateId: "mariani" },
  { id: 321, theme: "Sécurité", text: "Déployer la vidéosurveillance augmentée par intelligence artificielle", candidateId: "mariani" },
  { id: 322, theme: "Sécurité", text: "Installer systématiquement des caméras de surveillance devant les écoles et collèges", candidateId: "mariani" },
  { id: 323, theme: "Sécurité", text: "Créer un numéro de téléphone dédié à la police municipale, opérationnel 24h/24", candidateId: "mariani" },
  { id: 324, theme: "Sécurité", text: "Dissoudre la police municipale et démanteler la vidéosurveillance", candidateId: "npa" },
  { id: 325, theme: "Sécurité", text: "Déployer 500 policiers municipaux sur le réseau de transport en commun parisien", candidateId: "knafo" },
  { id: 326, theme: "Sécurité", text: "Installer des caméras de vidéoprotection dans les parties communes des HLM", candidateId: "mariani" },

  // === SÉNIORS ===
  { id: 327, theme: "Séniors", text: "Toute opération d’aménagement de l’espace public prendra en compte les besoins des personnes âgées (intégration d’assises, îlots de fraîcheur…) et veillera aux facteurs accidentogènes pour prévenir les chutes, en particulier à proximité des EHPAD.", candidateId: "dati" },
  { id: 328, theme: "Séniors", text: "Sport, culture, loisirs, santé : des activités et des services publics pensés par et pour les seniors grâce à des comités d’usagers dédiés, et un engagement facilité dans le bénévolat et la vie associative", candidateId: "gregoire" },
  { id: 329, theme: "Séniors", text: "Des résidences autonomie transformées en véritable chez soi : logements adaptés pour accueillir famille et amis, et des lieux ouverts sur le quartier, avec de nombreuses activités intergénérationnelles", candidateId: "gregoire" },
  { id: 330, theme: "Séniors", text: "Un espace public adapté aux seniors avec des bancs à intervalles réguliers, des trottoirs désencombrés, des espaces piétons protégés et respectés", candidateId: "gregoire" },
  { id: 331, theme: "Séniors", text: "L’organisation chaque année d’une « Journée du Lien », pour identifier et aller à la rencontre des personnes isolées, afin de les aider et faire grandir autour d’elles une communauté protectrice", candidateId: "gregoire" },
  { id: 332, theme: "Séniors", text: "L’instauration d’un statut et d’un droit au répit des aidants, pour pouvoir s’appuyer sur le service public quand on a besoin de souffler.", candidateId: "gregoire" },

  // === TRANSPORTS & MOBILITÉS ===
  { id: 333, theme: "Transports & Mobilités", text: "Je définirai un schéma de circulation global, pensé à l’échelle de Paris, prenant en compte tous les modes de déplacement. Je supprimerai les aménagements de voirie inefficaces qui compliquent la circulation et génèrent de la pollution et du stress.", candidateId: "dati" },
  { id: 334, theme: "Transports & Mobilités", text: "La création de 15 lignes de bus express, qui bénéficieront d’un parcours sécurisé, d’une « super-priorité » aux carrefours, avec vidéoverbalisation pour la faire respecter, et d’arrêts de bus 100 % accessibles. Nous proposerons un engagement commun à la Région : un bus toutes les 5 minutes en heure de pointe sur les 15 lignes les plus fréquentées", candidateId: "gregoire" },
  { id: 335, theme: "Transports & Mobilités", text: "Engager le rapport de force avec la Région Île-de-France et Île-de-France Mobilités pour permettre le gel des tarifs de l’ensemble des titres et abonnements de transport", candidateId: "chikirou" },
  { id: 336, theme: "Transports & Mobilités", text: "L’essor des véhicules électriques sera encouragé par des aides à l’achat et un plan d’installation de bornes de recharge dans chaque quartier.", candidateId: "dati" },
  { id: 337, theme: "Transports & Mobilités", text: "Des métros 24h sur 24, comme à Berlin, New York ou Londres, en commençant par les lignes déjà automatisées (1, 4, 14)", candidateId: "gregoire" },
  { id: 338, theme: "Transports & Mobilités", text: "Déployer et renforcer le réseau actuel des Traverses présents dans les arrondissements périphériques de Paris", candidateId: "chikirou" },
  { id: 339, theme: "Transports & Mobilités", text: "Aux carrefours les plus bouchonnés, j’installerai des feux intelligents qui donneront automatiquement la priorité aux bus", candidateId: "bournazel" },
  { id: 340, theme: "Transports & Mobilités", text: "Je mettrai fin à la zone à trafic limité (ZTL) de Paris-Centre, qui est inapplicable et n’a pas démontré son efficacité.", candidateId: "dati" },
  { id: 341, theme: "Transports & Mobilités", text: "Maintien de la gratuité de l’abonnement Navigo pour les enfants, les jeunes, les seniors (sous condition de ressources) et les personnes en situation de handicap", candidateId: "gregoire" },
  { id: 342, theme: "Transports & Mobilités", text: "Porter l’accessibilité universelle du réseau de transports francilien en négociant avec Île-de-France Mobilités un calendrier accéléré et un cofinancement augmenté", candidateId: "chikirou" },
  { id: 343, theme: "Transports & Mobilités", text: "Je créerai aussi trois grandes lignes de bus express", candidateId: "bournazel" },
  { id: 344, theme: "Transports & Mobilités", text: "Je créerai de grands cheminements urbains réservés aux piétons, par la rénovation et l’élargissement de trottoirs, car tous les Parisiens sont piétons à un moment de la journée : la marche reste leur principal mode de déplacement et le plus écologique.", candidateId: "dati" },
  { id: 345, theme: "Transports & Mobilités", text: "Des transports publics plus accessibles en travaillant avec l’État et la région Île-de-France, et plus sûrs avec l’arrêt à la demande dans les bus et la sécurisation des métros.", candidateId: "gregoire" },
  { id: 346, theme: "Transports & Mobilités", text: "Mieux réguler la circulation pour réduire durablement les embouteillages, en développant davantage le pilotage intelligent des feux de circulation, en repensant les plans de circulation aux points noirs de congestion et en développant des rues à usages et horaires modulables selon les besoins des quartiers", candidateId: "chikirou" },
  { id: 347, theme: "Transports & Mobilités", text: "je garantirai que dès 2026, il n’y ait plus un bus qui roule au diesel dans Paris", candidateId: "bournazel" },
  { id: 348, theme: "Transports & Mobilités", text: "Je préserverai la place du vélo à Paris, en renforçant et sécurisant les pistes cyclables sur les axes sous-dotés. Nous développerons, avec la Région, un réseau de pistes cyclables qui connecte Paris au reste de l’Îlede- France.", candidateId: "dati" },
  { id: 349, theme: "Transports & Mobilités", text: "Finalisation du réseau cyclable de Paris pour rouler en sécurité partout et mieux protéger les piétons : aménagement des grandes avenues, fin des pistes sur les trottoirs et sécurisation des carrefours et lieux accidentogènes", candidateId: "gregoire" },
  { id: 350, theme: "Transports & Mobilités", text: "Créer une régie publique du vélo, en agissant pour mettre fin au contrat actuel de Vélib’ Métropole, afin d’en faire un véritable service public : baisse des tarifs, développement d’une tarification sociale, garantie de vélos fiables, de stations pleinement opérationnelles et d’une meilleure sécurité des usagers", candidateId: "chikirou" },
  { id: 351, theme: "Transports & Mobilités", text: "Dès la fin 2026, j’ouvrirai la nuit les lignes 1, 4 et 14 Je serai aussi le Maire qui accélérera l’automatisation du métro, en commençant par les lignes 7, 8 et 9", candidateId: "bournazel" },
  { id: 352, theme: "Transports & Mobilités", text: "J’instaurerai un nouveau tarif résident unique. Il permettra aux Parisiens et aux entreprises parisiennes de stationner partout dans Paris à un tarif abordable. Il faut que les Parisiens puissent se garer à un tarif qui ne soit pas confiscatoire au-delà des quelques rues autour de leur domicile.", candidateId: "dati" },
  { id: 353, theme: "Transports & Mobilités", text: "Un service Vélib’ performant, en imposant des objectifs de résultats et des pénalités fortes à l’opérateur en cas de manquements, et en garantissant des tarifs accessibles à toutes et à tous.", candidateId: "gregoire" },
  { id: 354, theme: "Transports & Mobilités", text: "Soutenir les Maisons des Livreurs par un financement public pérenne et exiger une contribution financière des employeurs, afin de garantir un accès à l’assistance juridique, à la prévention routière, aux consultations médicales et à la formation", candidateId: "chikirou" },
  { id: 355, theme: "Transports & Mobilités", text: "je doublerai le nombre de places de livraison Je déploierai aussi une application de stationnement intelligent pour tout Paris, permettant de localiser en temps réel les places disponibles", candidateId: "bournazel" },
  { id: 356, theme: "Transports & Mobilités", text: "Je reviendrai au stationnement gratuit pour les deux-roues motorisés sur les emplacements dédiés.", candidateId: "dati" },
  { id: 357, theme: "Transports & Mobilités", text: "Des places de stationnement réservées aux artisans et aux professionnels intervenant à domicile, pour leur permettre de travailler plus facilement dans Paris. Au moins 25 % des places de stationnement sur l’espace public seront réservées soit aux personnes en situation de handicap, soit aux livraisons, déménagements et stationnements professionnels", candidateId: "gregoire" },
  { id: 358, theme: "Transports & Mobilités", text: "Créer une école municipale du vélo, ouverte à tous les âges, et généraliser l’apprentissage du « savoir rouler » dans toutes les écoles municipales afin d’apprendre, pratiquer et gagner en autonomie", candidateId: "chikirou" },
  { id: 359, theme: "Transports & Mobilités", text: "un agent de sécurité dans la première voiture de chaque métro, tous les jours, de 20h jusqu’à la fin du service", candidateId: "bournazel" },
  { id: 360, theme: "Transports & Mobilités", text: "Je développerai des parkings relais sur les terrains délaissés aux portes de Paris, reliés aux lignes de métros et soumis à un tarif unique et abordable.", candidateId: "dati" },
  { id: 361, theme: "Transports & Mobilités", text: "Des tarifs de stationnement résidentiels (voitures, deux-roues, vélos) attractifs dans les parkings souterrains", candidateId: "gregoire" },
  { id: 362, theme: "Transports & Mobilités", text: "Augmenter les aides municipales à l’achat de vélos et soutenir les ateliers de réparation de proximité et les bourses aux vélos", candidateId: "chikirou" },
  { id: 363, theme: "Transports & Mobilités", text: "Je sécuriserai en priorité les 200 carrefours les plus accidentogènes. Une brigade spécialisée de la police municipale verbalisera systématiquement les infractions, à l’aide de caméras de vidéoprotection.", candidateId: "bournazel" },
  { id: 364, theme: "Transports & Mobilités", text: "Une meilleure régulation des livraisons, du camion au vélo cargo, grâce notamment à des micro-hubs logistiques pour mutualiser les flux de marchandises et réduire les nuisances", candidateId: "gregoire" },
  { id: 365, theme: "Transports & Mobilités", text: "Créer des « Quartiers libres » : îlots de vie végétalisés, rues et placettes conviviales, conçus avec les habitants via une révision du plan de circulation", candidateId: "chikirou" },
  { id: 366, theme: "Transports & Mobilités", text: "Tous les passages piétons seront accessibles aux personnes en situation de handicap et aux poussettes", candidateId: "bournazel" },
  { id: 367, theme: "Transports & Mobilités", text: "Mettre en place une plateforme publique et centralisée de réservation de stationnement pour réduire la congestion et les circulations inutiles", candidateId: "chikirou" },
  { id: 368, theme: "Transports & Mobilités", text: "je déploierai 1 000 rues apaisées, en commençant par les rues aux écoles", candidateId: "bournazel" },
  { id: 369, theme: "Transports & Mobilités", text: "Soutenir les luttes syndicales des travailleurs du vélo, y compris au sein des opérateurs soutenus par la Ville", candidateId: "chikirou" },
  { id: 370, theme: "Transports & Mobilités", text: "Je rendrai la signalisation lisible et j’unifierai les pistes cyclables avec un revêtement de couleur unique pour mieux s’intégrer dans la beauté de l’espace public parisien. j’inventerai l’offre Vélib’ 2.0.", candidateId: "bournazel" },
  { id: 371, theme: "Transports & Mobilités", text: "Réouvrir les voies sur berges à la circulation automobile avec une promenade piétonne et cycliste sur pilotis au-dessus", candidateId: "knafo" },
  { id: 372, theme: "Transports & Mobilités", text: "Relever la vitesse maximale sur le périphérique de 50 à 80 km/h", candidateId: "knafo" },
  { id: 373, theme: "Transports & Mobilités", text: "Piloter les feux tricolores par intelligence artificielle pour fluidifier le trafic", candidateId: "knafo" },
  { id: 374, theme: "Transports & Mobilités", text: "Réduire le tarif du stationnement à 5 euros de l'heure pour tous (contre 37€/h pour les SUV actuellement)", candidateId: "knafo" },
  { id: 375, theme: "Transports & Mobilités", text: "Créer un jumeau numérique de Paris pour simuler l'impact de chaque projet d'aménagement avant réalisation", candidateId: "knafo" },
  { id: 376, theme: "Transports & Mobilités", text: "Augmenter la vitesse sur le périphérique à 90 km/h sur certains tronçons et la nuit", candidateId: "mariani" },
  { id: 377, theme: "Transports & Mobilités", text: "Adapter le plan de circulation pour protéger piétons, cyclistes et automobilistes de manière équilibrée", candidateId: "mariani" },
  { id: 378, theme: "Transports & Mobilités", text: "Faciliter les livraisons pour les commerçants en révisant le plan de circulation", candidateId: "mariani" },
  { id: 379, theme: "Transports & Mobilités", text: "Rétablir l'égalité des tarifs de stationnement en supprimant le zonage discriminatoire", candidateId: "mariani" },
  { id: 380, theme: "Transports & Mobilités", text: "Rendre les transports en commun gratuits et fiables pour tous", candidateId: "npa" },
  { id: 381, theme: "Transports & Mobilités", text: "Offrir la première heure de stationnement gratuite pour les professionnels (infirmières, artisans, commerciaux)", candidateId: "knafo" },
  { id: 382, theme: "Transports & Mobilités", text: "Créer 20 000 places de stationnement supplémentaires en parking souterrain", candidateId: "mariani" },
  { id: 383, theme: "Transports & Mobilités", text: "Ouvrir le métro la nuit sur les lignes automatiques le week-end", candidateId: "mariani" },
  { id: 384, theme: "Transports & Mobilités", text: "Rétablir la gratuité du stationnement pour les deux-roues motorisés", candidateId: "mariani" },
  { id: 385, theme: "Transports & Mobilités", text: "Supprimer la Zone à Trafic Limité (ZTL) du centre de Paris", candidateId: "mariani" },

  // === VIE DÉMOCRATIQUE ===
  { id: 386, theme: "Vie démocratique", text: "Organiser au minimum deux référendums locaux par an", candidateId: "knafo" },
  { id: 387, theme: "Vie démocratique", text: "Référendum obligatoire pour tout projet municipal dépassant 10 millions d'euros", candidateId: "knafo" },
  { id: 388, theme: "Vie démocratique", text: "Donner une valeur exécutoire aux résultats de référendum (le résultat s'impose à la mairie)", candidateId: "knafo" },
  { id: 389, theme: "Vie démocratique", text: "Organiser un référendum chaque fois que 5% du corps électoral en fait la demande", candidateId: "mariani" },
  { id: 390, theme: "Vie démocratique", text: "Élire tous les conseils de quartier tous les 3 ans et les consulter pour tout projet les concernant", candidateId: "mariani" },
  { id: 391, theme: "Vie démocratique", text: "Renforcer l'e-démocratie avec des outils numériques protégeant les données personnelles", candidateId: "mariani" },

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
    theme: "Éducation",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "chikirou", text: "Instaurer la gratuité de la cantine pour les trois premières tranches du quotient familial" },
    propB: { candidateId: "knafo", text: "Servir uniquement des produits issus de l'agriculture française dans les cantines scolaires" }
  },
  {
    id: 36,
    theme: "Éducation",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "gregoire", text: "Soulager le budget des familles grâce au gel des tarifs de cantine et à la gratuité progressive" },
    propB: { candidateId: "mariani", text: "Instaurer l'uniforme scolaire dès l'école primaire" }
  },
  {
    id: 37,
    theme: "Éducation",
    subtopic: "Rénovation des écoles",
    propA: { candidateId: "bournazel", text: "Plan 100% écoles rénovées et accessibles d'ici 2032" },
    propB: { candidateId: "chikirou", text: "Adapter 100% des collèges et écoles publics aux défis sanitaires et climatiques" }
  },
  {
    id: 38,
    theme: "Éducation",
    subtopic: "Mixité scolaire",
    propA: { candidateId: "gregoire", text: "Moduler les dotations financières aux établissements privés en fonction de critères de mixité sociale" },
    propB: { candidateId: "chikirou", text: "Renforcer les moyens des écoles et des collèges publics parisiens" }
  },

  // --- PROPRETÉ ---
  {
    id: 39,
    theme: "Propreté et déchets",
    subtopic: "Privatisation collecte",
    propA: { candidateId: "bournazel", text: "Privatiser la collecte des déchets pour diviser les coûts et améliorer la qualité" },
    propB: { candidateId: "mariani", text: "Externaliser totalement la collecte des déchets et laisser chaque arrondissement choisir son prestataire" }
  },
  {
    id: 40,
    theme: "Propreté et déchets",
    subtopic: "Privatisation collecte",
    propA: { candidateId: "dati", text: "Externaliser une partie de la collecte des déchets pour améliorer le service" },
    propB: { candidateId: "knafo", text: "Privatiser la collecte des ordures et le balayage via appels d'offres, avec reprise garantie de 80% des agents" }
  },

  // --- ÉCOLOGIE ET VÉGÉTALISATION ---
  {
    id: 41,
    theme: "Espaces verts & biodiversité",
    subtopic: "Anti-bruit",
    propA: { candidateId: "dati", text: "Lutter contre les nuisances sonores avec un plan anti-bruit ambitieux" },
    propB: { candidateId: "bournazel", text: "Créer un bouclier anti-bruit pour protéger les riverains des grands axes" }
  },
  {
    id: 42,
    theme: "Espaces verts & biodiversité",
    subtopic: "Végétalisation",
    propA: { candidateId: "dati", text: "Créer 500 bandes végétalisées dans les rues parisiennes" },
    propB: { candidateId: "knafo", text: "Embellir les parcs et jardins en replantant des fleurs" }
  },
  {
    id: 43,
    theme: "Espaces verts & biodiversité",
    subtopic: "Urbanisme vert",
    propA: { candidateId: "knafo", text: "Abroger le PLU bioclimatique et revenir à un PLU garantissant l'harmonie architecturale" },
    propB: { candidateId: "dati", text: "Désasphalter massivement Paris pour créer des îlots de fraîcheur" }
  },

  // --- PETITE ENFANCE ---
  {
    id: 44,
    theme: "Petite enfance",
    subtopic: "Places en crèche",
    propA: { candidateId: "dati", text: "Créer 5 000 nouvelles places en crèche sur le mandat" },
    propB: { candidateId: "chikirou", text: "Ouvrir 6 500 nouvelles places en crèche publique sur le mandat" }
  },
  {
    id: 45,
    theme: "Petite enfance",
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
    theme: "Éducation",
    subtopic: "Cantines scolaires",
    propA: { candidateId: "knafo", text: "Nommer un chef étoilé pour refondre les cantines scolaires avec des recettes à base de produits frais français" },
    propB: { candidateId: "chikirou", text: "Instaurer la cantine bio à 1 euro pour tous les écoliers parisiens" }
  },
  {
    id: 73,
    theme: "Éducation",
    subtopic: "Service minimum grève",
    propA: { candidateId: "mariani", text: "Garantir un service minimum d'accueil dans les crèches, écoles et cantines les jours de grève" },
    propB: { candidateId: "bournazel", text: "Mettre en place un vrai service minimum dans les écoles les jours de grève" }
  },
  {
    id: 74,
    theme: "Éducation",
    subtopic: "Soutien périscolaire",
    propA: { candidateId: "mariani", text: "Créer 100 centres de soutien scolaire gratuits dans les quartiers de Paris" },
    propB: { candidateId: "chikirou", text: "Recruter 2 000 animateurs périscolaires supplémentaires et titulariser les 4 000 contractuels actuels" }
  },

  // --- PATRIMOINE / CULTURE (ajouts) ---
  {
    id: 75,
    theme: "Patrimoine & beauté",
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
    theme: "Espaces verts & biodiversité",
    subtopic: "Plantation d'arbres",
    propA: { candidateId: "mariani", text: "Planter 50 000 arbres supplémentaires à Paris" },
    propB: { candidateId: "chikirou", text: "Végétaliser 300 hectares et déimperméabiliser 40% du territoire parisien d'ici 2032" }
  },
  {
    id: 78,
    theme: "Espaces verts & biodiversité",
    subtopic: "Nouveaux espaces verts",
    propA: { candidateId: "bournazel", text: "Transformer la Petite Ceinture en poumon vert continu : promenades, jardins potagers et espaces sportifs" },
    propB: { candidateId: "dati", text: "Désasphalter massivement Paris pour créer des îlots de fraîcheur" }
  },

  // --- COMMERCE (ajouts) ---
  {
    id: 79,
    theme: "Économie & commerces",
    subtopic: "Revitalisation commerces",
    propA: { candidateId: "mariani", text: "Lancer un programme « 1 000 commerces » pour revitaliser les rues commerçantes de Paris" },
    propB: { candidateId: "chikirou", text: "Tripler les locaux commerciaux publics avec des loyers abaissés pour les commerces de proximité" }
  },
  {
    id: 80,
    theme: "Économie & commerces",
    subtopic: "Ouverture dominicale",
    propA: { candidateId: "bournazel", text: "Faire de Paris une Zone Touristique Unique pour autoriser l'ouverture dominicale des commerces" },
    propB: { candidateId: "npa", text: "Arrêter les dérogations au repos dominical" }
  },

  // --- PROPRETÉ (ajouts) ---
  {
    id: 81,
    theme: "Propreté et déchets",
    subtopic: "Lutte contre les nuisibles",
    propA: { candidateId: "chikirou", text: "Porter le budget de lutte contre les rats à 15 millions d'euros par an" },
    propB: { candidateId: "dati", text: "Mettre en place un plan anti-prolifération des nuisibles (rats, punaises de lit)" }
  },

  // --- SOLIDARITÉ (ajouts) ---
  {
    id: 82,
    theme: "Solidarité & accessibilité",
    subtopic: "Sans-abri",
    propA: { candidateId: "chikirou", text: "Atteindre l'objectif zéro sans-abri à Paris avant la fin du mandat" },
    propB: { candidateId: "npa", text: "Développer l'hébergement d'urgence dans des conditions dignes et salubres" }
  },

  // --- PETITE ENFANCE (ajouts) ---
  {
    id: 83,
    theme: "Petite enfance",
    subtopic: "Horaires de crèche",
    propA: { candidateId: "mariani", text: "Ouvrir des crèches la nuit pour les parents travaillant en horaires décalés" },
    propB: { candidateId: "bournazel", text: "Étendre les horaires des crèches jusqu'à 19h30 pour les parents aux horaires décalés" }
  },
  {
    id: 84,
    theme: "Petite enfance",
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
    theme: "Espaces verts & biodiversité",
    subtopic: "Lutte contre la chaleur",
    propA: { candidateId: "dati", text: "Plan Grand Chaud : rafraîchissement des rues, brumisateurs, fontaines, ombrages" },
    propB: { candidateId: "gregoire", text: "Objectif au moins un trottoir ombragé dans chaque rue pour anticiper les canicules" }
  },
  {
    id: 87,
    theme: "Espaces verts & biodiversité",
    subtopic: "Végétalisation",
    propA: { candidateId: "dati", text: "Créer 500 nouvelles bandes végétalisées durables avec arrosage et désherbage garantis" },
    propB: { candidateId: "gregoire", text: "300 nouveaux hectares de jardins ouverts au public avec horaires étendus toute l'année" }
  },
  {
    id: 88,
    theme: "Espaces verts & biodiversité",
    subtopic: "Périphérique",
    propA: { candidateId: "gregoire", text: "Transformation du périphérique en boulevard urbain relié par une grande ceinture verte" },
    propB: { candidateId: "bournazel", text: "Transformer les portes de Paris en véritables places urbaines végétalisées" }
  },
  {
    id: 89,
    theme: "Espaces verts & biodiversité",
    subtopic: "Bruit urbain",
    propA: { candidateId: "dati", text: "Plan de lutte contre la pollution sonore avec radars anti-bruit et zones apaisées" },
    propB: { candidateId: "gregoire", text: "Déploiement de capteurs et radars sonores pour réduire le bruit à l'échelle de chaque quartier" }
  },
  {
    id: 90,
    theme: "Espaces verts & biodiversité",
    subtopic: "Promenades vertes",
    propA: { candidateId: "gregoire", text: "25 km de promenade continue et végétalisée le long des berges de Seine" },
    propB: { candidateId: "dati", text: "Débitumer 100 hectares de sols parisiens pour lutter contre les îlots de chaleur" }
  },

  // --- PROPRETÉ (nouveaux duels Grégoire) ---
  {
    id: 91,
    theme: "Propreté et déchets",
    subtopic: "Méthode de nettoyage",
    propA: { candidateId: "gregoire", text: "Brigades anti-incivilités au sein de la police municipale contre les infractions de propreté" },
    propB: { candidateId: "bournazel", text: "Privatiser la collecte des déchets et le nettoiement des rues pour économiser 742 millions" }
  },
  {
    id: 92,
    theme: "Propreté et déchets",
    subtopic: "Réduction des déchets",
    propA: { candidateId: "gregoire", text: "Moins 100 000 tonnes de déchets : compostage dans tous les quartiers et tri dans l'espace public" },
    propB: { candidateId: "dati", text: "Brigades d'intervention d'urgence propreté prêtes à agir plusieurs fois par jour" }
  },

  // --- SOLIDARITÉ (nouveaux duels Grégoire) ---
  {
    id: 93,
    theme: "Solidarité & accessibilité",
    subtopic: "Sans-abri",
    propA: { candidateId: "gregoire", text: "Création de 4 000 places d'hébergement d'urgence et réquisition des logements vides depuis 5 ans" },
    propB: { candidateId: "chikirou", text: "Atteindre l'objectif zéro sans-abri à Paris avant la fin du mandat" }
  },
  {
    id: 94,
    theme: "Solidarité & accessibilité",
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
    theme: "Économie & commerces",
    subtopic: "Locaux vacants",
    propA: { candidateId: "gregoire", text: "Mise aux enchères des locaux commerciaux vacants depuis plus de 12 mois" },
    propB: { candidateId: "dati", text: "Obligation d'une étude d'impact sur le commerce pour chaque grand projet d'aménagement" }
  },
  {
    id: 100,
    theme: "Économie & commerces",
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
    theme: "Solidarité & accessibilité",
    subtopic: "Accessibilité bâtiments",
    propA: { candidateId: "gregoire", text: "100% des bâtiments municipaux accessibles d'ici 2030 avec balises sonores pour malvoyants" },
    propB: { candidateId: "chikirou", text: "Rendre 100% des équipements municipaux accessibles avant la fin de la mandature" }
  }
];
