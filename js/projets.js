/* =========================================================================
   DONNÉES DES RÉALISATIONS
   -------------------------------------------------------------------------
   Pour ajouter un projet : copier un bloc { ... }, le coller en haut de la
   liste et modifier les champs. Le site trie automatiquement les projets
   du plus récent au plus ancien grâce au champ « tri » (AAAA-MM).

   Astuce vulgarisation : dans les textes, entourer un terme technique de
   [[terme|définition simple]] pour afficher une infobulle explicative.
   ========================================================================= */

const PROJETS = [
  {
    id: "shattered-realms",
    titre: "Shattered Realms",
    accroche: "Jeu vidéo 2D en pixel art que je développe seul pour le publier sur Steam.",
    type: "Jeu vidéo Unity · Projet de veille technologique",
    date: "Septembre 2026 – en cours",
    tri: "2026-09",
    duree: "Une session complète (≈ 15 semaines, environ 100 heures planifiées)",
    contexte: "Cours Veille technologique (420-155-AT) · Cégep de l'Abitibi-Témiscamingue",
    equipe: "Projet solo",
    statut: "En cours",
    etiquettes: ["Jeu vidéo", "Unity", "C#", "Génération procédurale", "Steam", "Solo"],
    technologies: ["Unity 6", "C#", "Universal Render Pipeline (URP)", "Tilemaps", "ScriptableObjects", "Steamworks SDK", "Git / GitHub"],
    couverture: "assets/img/shattered/monde.jpg",
    couvertureAlt: "Monde en pixel art de Shattered Realms : une forêt dense qui rejoint une forêt enneigée et un lac",
    enBref: "Shattered Realms est un jeu vidéo en 2D, dessiné en pixel art, que je crée seul de A à Z. Le joueur explore un monde qui se construit automatiquement autour de lui, gère une armée et livre des combats tactiques. Le but final est de vendre le jeu sur Steam, la plus grande boutique de jeux vidéo sur ordinateur.",
    objectifs: [
      "Dans le cours de veille technologique, chaque élève devait choisir un projet lié aux technologies et le mener pendant toute la session. J'ai choisi d'apprendre tout le processus de création <strong>et de mise en marché</strong> d'un jeu indépendant.",
      "Mes objectifs de réalisation :",
      "<ul><li>Programmer les systèmes de jeu principaux et l'intelligence artificielle des adversaires en C#.</li><li>Intégrer et animer les ressources visuelles (personnages, tuiles 2D) pour construire le monde.</li><li>Intégrer le [[SDK Steamworks|boîte à outils fournie par Steam pour relier un jeu à sa plateforme (succès, sauvegardes en ligne, etc.)]] pour ajouter des succès et des sauvegardes infonuagiques.</li><li>Compléter le processus administratif de Steam (Steam Direct) : vérification d'identité et formulaires fiscaux d'un développeur canadien.</li><li>Écrire l'univers du jeu et intégrer un système de dialogues.</li></ul>"
    ],
    realisations: [
      { titre: "Un monde infini généré automatiquement", texte: "La carte n'est pas dessinée à la main : elle est créée en temps réel, morceau par morceau (des [[chunks|petits blocs de carte chargés seulement quand le joueur s'en approche, comme des pièces de casse-tête]]), à l'aide d'[[algorithmes de bruit|formules mathématiques qui produisent des variations naturelles, utilisées pour décider où placer l'eau, la forêt ou les rochers]]. On y trouve des plaines, des forêts denses, des océans et des zones rocheuses." },
      { titre: "Un affichage fluide et sans défaut", texte: "J'ai mis en place un tri de profondeur sur l'axe vertical (ce qui est plus bas à l'écran passe devant) et un [[Sprite Atlas|une seule grande image qui regroupe tous les petits dessins du jeu, pour que la carte graphique travaille moins]]. Le pixel art reste ainsi net, sans scintillement ni lignes parasites." },
      { titre: "Des races et des personnages modulaires", texte: "Chaque race (joueur ou personnage non joueur) est décrite par une fiche de données ([[ScriptableObject|fichier de données Unity qui permet de créer de nouvelles variantes sans réécrire de code]]) qui contient ses dessins, son portrait et ses animations. Ajouter une race revient à remplir une nouvelle fiche." },
      { titre: "Des personnages qui peuplent le monde", texte: "Des personnages non joueurs apparaissent et disparaissent automatiquement avec les morceaux de carte, ce qui garde le monde vivant tout en préservant les performances." }
    ],
    resultats: "Le cœur technique est fonctionnel : la génération infinie par chunks, le rendu par Sprite Atlas, les animations par race et l'apparition procédurale des personnages fonctionnent. Les prochaines étapes sont le contournement intelligent de l'eau et des montagnes ([[pathfinding A*|algorithme qui calcule le chemin le plus court en évitant les obstacles, comme un GPS]]), la navigation en bateau, un système de quêtes, puis l'intégration de Steamworks et la publication (prévue en décembre 2026).",
    apprentissages: "Jusqu'à maintenant, ce projet m'a appris à penser à la performance dès le départ : on ne charge que ce qui entoure le joueur. J'ai aussi appris à séparer les données du code avec les ScriptableObjects, ce qui rend le jeu beaucoup plus facile à agrandir. Enfin, la partie veille m'a fait découvrir le côté « entreprise » du jeu vidéo : frais de publication, vérification d'identité et obligations fiscales.",
    galerie: [
      { src: "assets/img/shattered/monde.jpg", alt: "Personnage dans une forêt en pixel art à la frontière d'un biome enneigé", legende: "Exploration du monde : transition entre forêt et biome enneigé" },
      { src: "assets/img/shattered/generation-carte.jpg", alt: "Vue de l'éditeur Unity montrant un continent de forêt et un océan générés", legende: "Carte générée automatiquement (forêt dense, côte et océan)" },
      { src: "assets/img/shattered/editeur-unity.jpg", alt: "Interface complète de l'éditeur Unity avec la scène MapMonde", legende: "Le projet dans l'éditeur Unity 6 (scène MapMonde et ses Tilemaps)" }
    ],
    videos: [
      { src: "assets/video/shattered.mp4", poster: "assets/img/shattered/monde.jpg", legende: "Extrait actuel du développement" }
    ],
    liens: []
  },

  {
    id: "vassal",
    titre: "Vassal",
    accroche: "RPG tactique 2D en fantaisie médiévale, développé seul et publié sur itch.io.",
    type: "Jeu vidéo Unity",
    date: "Avril – mai 2026",
    tri: "2026-05",
    duree: "≈ 6 semaines",
    contexte: "Cours Développement de jeux vidéo · TP #3 « Mini-jeu » (60 % de la session)",
    equipe: "Projet solo",
    statut: "Terminé · publié sur itch.io",
    etiquettes: ["Jeu vidéo", "Unity", "C#", "IA", "Stratégie", "Solo"],
    technologies: ["Unity", "C#", "Input System", "Algorithme A*", "Machines à états finis", "Miro", "Git / GitLab"],
    couverture: "assets/img/vassal/combat.jpg",
    couvertureAlt: "Combat sur grille dans Vassal : unités sur une plaine en pixel art près d'une rivière, liste de l'escouade à droite",
    enBref: "Vassal est un jeu de stratégie en 2D vu de haut, dans un univers médiéval fantastique. Le joueur gère son campement (ressources, recrutement, escouades), puis affronte l'ennemi sur une grille, tour par tour, un peu comme aux échecs. Je l'ai programmé seul, du début à la fin, et il est jouable gratuitement sur itch.io.",
    objectifs: [
      "Le cours demandait de créer un jeu libre avec Unity en trois phases : une <strong>planification</strong> (scénarios « Qui, Quoi, Pourquoi » dans Miro et schéma de classes), une <strong>démo technique</strong>, puis une <strong>version 1.0</strong> complète avec écran d'accueil, musique, pause avec la touche « P », nouvel Input System et contenu en français.",
      "Mon objectif personnel était de concevoir un jeu de stratégie complexe avec deux phases distinctes : une phase de gestion de ressources et une phase de combat au tour par tour. Je voulais prouver ma capacité à programmer des systèmes complets qui interagissent entre eux."
    ],
    realisations: [
      { titre: "Gestion du campement", texte: "J'ai créé un campement interactif avec un magasin où le joueur dépense ses ressources (or, bois, fer, cristaux) pour recruter des troupes, comme les Nymphéas Sanguinaires ou les Gardes de l'Aube, et former des escouades dirigées par des chefs." },
      { titre: "Combat tactique sur grille", texte: "Après une phase de déploiement, les combats se jouent au tour par tour. J'ai programmé ma propre version de l'algorithme [[A*|algorithme qui trouve le chemin le plus court entre deux cases en contournant les obstacles, comme un GPS]] pour calculer et afficher en bleu les cases où chaque unité peut se déplacer, selon ses statistiques." },
      { titre: "Intelligence artificielle des ennemis", texte: "Les ennemis sont contrôlés par des [[machines à états finis|façon d'organiser un comportement en « états » (patrouiller, approcher, attaquer, fuir) avec des règles qui font passer de l'un à l'autre]] : ils réagissent de façon stratégique aux actions du joueur sur la carte." },
      { titre: "Planification et version publiée", texte: "Le projet a commencé par un tableau de scénarios et un schéma de classes, puis s'est terminé par une version publiée sur itch.io, avec écran d'accueil, musique, pause et tutoriel." }
    ],
    resultats: "Le jeu est complet et jouable : campement, magasin, gestion d'armée, déploiement, combats tactiques et IA ennemie fonctionnent ensemble. Il est publié gratuitement sur itch.io.",
    apprentissages: "Mener ce projet seul m'a fait faire un bond énorme en architecture logicielle avec Unity. J'ai appris à concevoir des bases de données internes solides (pour relier les statistiques de l'inventaire au comportement sur le champ de bataille) et j'ai compris l'importance de l'optimisation du code quand on programme une intelligence artificielle de stratégie.",
    galerie: [
      { src: "assets/img/vassal/menu.jpg", alt: "Écran d'accueil de Vassal avec le titre et un bouton Jouer", legende: "Écran d'accueil" },
      { src: "assets/img/vassal/campement.jpg", alt: "Campement sur une carte ancienne avec les ressources et les boutons Prochaine bataille, Gérer l'armée et Magasin", legende: "Le campement : ressources, armée et magasin" },
      { src: "assets/img/vassal/escouades.jpg", alt: "Écran de gestion d'escouade avec une liste d'unités et leurs chefs", legende: "Gestion des escouades et des chefs" },
      { src: "assets/img/vassal/capture-3.jpg", alt: "Fiche d'une unité héroïque avec ses points de vie, attaque, mouvement et portée", legende: "Fiche de statistiques d'une unité" },
      { src: "assets/img/vassal/combat.jpg", alt: "Unités déployées sur une grille de combat", legende: "Combat tactique sur grille" },
      { src: "assets/img/vassal/capture-6.jpg", alt: "Carte de combat désertique avec des îlots reliés par des ponts de pierre", legende: "Une autre carte de combat" }
    ],
    videos: [
      { src: "assets/video/vassal.mp4", poster: "assets/img/vassal/combat.jpg", legende: "Extrait de gameplay" }
    ],
    liens: [
      { label: "Jouer sur itch.io", url: "https://chose-01.itch.io/vassal", icone: "jeu" }
    ]
  },

  {
    id: "brio-microbrasserie",
    titre: "Brio Microbrasserie",
    accroche: "Site web complet avec panneau d'administration sécurisé pour une microbrasserie.",
    type: "Site web",
    date: "Janvier – mai 2026",
    tri: "2026-04",
    duree: "Une session complète (≈ 15 semaines)",
    contexte: "Travail pratique final du cours de développement web",
    equipe: "Projet solo",
    statut: "Terminé",
    etiquettes: ["Web", "PHP", "SQL", "Sécurité", "MVC", "Solo"],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Architecture MVC", "Authentification à deux facteurs"],
    couverture: "assets/img/brio/menu.jpg",
    couvertureAlt: "Page « Le menu » du site Brio Microbrasserie avec des plats et leurs prix",
    enBref: "Brio Microbrasserie est un site web pour un restaurant-microbrasserie. Les clients y consultent le menu, les boissons, les horaires et les événements. Les employés, eux, se connectent à un espace sécurisé pour modifier tout ce contenu eux-mêmes, sans connaissances en programmation.",
    objectifs: [
      "L'objectif était de développer un site web interactif de A à Z avec deux parties : un site public pour les clients (menu, boissons, horaires, événements) et un panneau d'administration sécurisé (la partie « [[back-end|la partie invisible d'un site, sur le serveur, qui gère les données et la sécurité]] ») pour la gestion interne.",
      "Ce projet individuel servait à mettre en pratique des concepts avancés d'architecture web et de sécurité des données."
    ],
    realisations: [
      { titre: "Sécurité et authentification", texte: "J'ai programmé la connexion des employés avec une [[authentification à deux facteurs (2FA)|en plus du mot de passe, un code à usage unique est envoyé par courriel : un voleur de mot de passe ne peut donc pas entrer]] par courriel. J'ai aussi géré les rôles et les permissions (par exemple SuperAdmin) pour limiter l'accès à certaines pages." },
      { titre: "Base de données et CRUD", texte: "J'ai conçu la base de données relationnelle et programmé toutes les requêtes pour que l'administrateur puisse ajouter, modifier ou supprimer ([[CRUD|Create, Read, Update, Delete : les quatre opérations de base sur des données]]) le personnel, les éléments du menu, les promotions et les catégories." },
      { titre: "Architecture MVC", texte: "Le code respecte le modèle [[MVC|Modèle-Vue-Contrôleur : on sépare les données (modèle), l'affichage (vue) et la logique (contrôleur), comme les rôles en cuisine, au service et à la caisse]]. Les accès à la base de données passent uniquement par les modèles, jamais directement par les pages." }
    ],
    resultats: "Le site est fonctionnel de bout en bout : pages publiques, connexion avec double facteur, gestion des rôles et panneau de gestion complet (promotions, boissons, horaires, menu, catégories, employés et rôles).",
    apprentissages: "Ce projet a consolidé mes compétences en développement web (PHP, SQL, HTML/CSS). J'ai surtout appris à sécuriser une application (sessions, [[hachage des mots de passe|transformation irréversible du mot de passe avant de l'enregistrer : même si la base de données est volée, les mots de passe restent illisibles]], 2FA) et à concevoir une interface d'administration simple pour une personne non technique.",
    galerie: [
      { src: "assets/img/brio/menu.jpg", alt: "Page du menu avec nachos, burger et poutine", legende: "Site public : le menu" },
      { src: "assets/img/brio/boissons.jpg", alt: "Carte des boissons classée par catégories", legende: "Site public : la carte des boissons" },
      { src: "assets/img/brio/horaires.jpg", alt: "Page des horaires d'ouverture par jour", legende: "Site public : les horaires" },
      { src: "assets/img/brio/evenements.jpg", alt: "Page Quoi de neuf avec un événement et ses dates", legende: "Site public : les événements" },
      { src: "assets/img/brio/connexion.jpg", alt: "Formulaire de connexion des employés", legende: "Connexion des employés" },
      { src: "assets/img/brio/double-facteur.jpg", alt: "Écran de saisie du code de double facteur reçu par courriel", legende: "Vérification à deux facteurs par courriel" },
      { src: "assets/img/brio/panneau-gestion.jpg", alt: "Panneau de gestion avec les tuiles Promotions, Boissons, Horaires, Menu, Catégories, Employés et Rôles", legende: "Panneau de gestion" },
      { src: "assets/img/brio/gestion-personnel.jpg", alt: "Formulaire d'ajout d'un employé et liste des accès actifs", legende: "Gestion du personnel (CRUD)" },
      { src: "assets/img/brio/ajout-employe.jpg", alt: "Message de confirmation : employé ajouté avec succès", legende: "Confirmation après l'ajout d'un employé" }
    ],
    videos: [],
    liens: []
  },

  {
    id: "dungeon",
    titre: "Dungeon",
    accroche: "Action-RPG de survie par vagues en Windows Forms, relié à une boutique web.",
    type: "Jeu vidéo Windows Forms + application web",
    date: "Novembre – décembre 2025",
    tri: "2025-12",
    duree: "5 semaines",
    contexte: "Cours Architecture d'applications orientées objet · Projet de fin de session (30 %)",
    equipe: "Équipe de 2 · avec Zachary Gauthier",
    statut: "Terminé",
    etiquettes: ["Jeu vidéo", "C#", "Windows Forms", "Base de données", "Équipe"],
    technologies: ["C#", ".NET", "Windows Forms", "MySQL", "Programmation orientée objet", "Diagramme UML", "Tests unitaires et intégrés", "Git / GitHub"],
    couverture: "assets/img/dungeon/jeu.jpg",
    couvertureAlt: "Partie de Dungeon : le héros entouré d'une onde de choc, des ennemis et un boss dans un donjon de pierre",
    enBref: "Dungeon est un jeu d'action vu de haut où le joueur doit survivre à 11 vagues d'ennemis et vaincre leurs boss. L'or gagné est sauvegardé dans une base de données et peut être dépensé dans une boutique web pour acheter des potions et de l'équipement. Nous l'avons réalisé à deux, avec Zachary Gauthier.",
    objectifs: [
      "Le cours visait à utiliser les grands principes de la [[programmation orientée objet|façon de programmer où l'on modélise des « objets » (joueur, ennemi, potion) qui ont des caractéristiques et des actions, et qui peuvent hériter les uns des autres]] (héritage, polymorphisme, abstraction, couches logicielles) dans un vrai projet : un jeu en C# avec Windows Forms, une petite application web et une base de données MySQL.",
      "Nous avons choisi d'aller plus loin en développant un jeu complet avec progression par vagues et étages, 14 classes de héros jouables et des boss, relié à une plateforme web pour l'achat d'équipement."
    ],
    realisations: [
      { titre: "Ma contribution : le jeu", texte: "J'ai programmé la grande majorité du jeu directement dans Windows Forms : les algorithmes de [[pathfinding|calcul automatique d'un chemin : les ennemis contournent les murs pour rejoindre le joueur]] sur la grille, le système de sélection des classes de personnages (Nécromancien, Barbare, Assassin, Paladin, etc.) et la gestion des objets et des statistiques en pleine partie." },
      { titre: "La contribution de Zachary : le web", texte: "Zachary s'est chargé du volet web : le site et la boutique en ligne où les joueurs dépensent leur or pour acheter des objets (potions, armes, tomes) avant de lancer la partie." },
      { titre: "Un jeu riche", texte: "14 classes jouables avec chacune une compétence spéciale, 11 vagues avec des boss uniques (chute de pierres, invocation de scorpions, tir à 360°), progression sauvegardée en base de données et commandes clavier-souris (déplacements, visée, sac, pause, sauvegarde)." },
      { titre: "Exigences techniques", texte: "Le projet comprenait aussi un diagramme de classes UML, une chaîne de connexion configurable sans modifier le programme, une sauvegarde et un chargement de partie, ainsi que des tests unitaires et intégrés." }
    ],
    resultats: "Un jeu jouable du début à la fin (11 vagues), relié à une boutique web qui partage la même base de données : l'or gagné en jeu se dépense sur le site, et les objets achetés s'utilisent ensuite en partie.",
    apprentissages: "Ce travail m'a appris à repousser les limites d'un outil : Windows Forms est normalement conçu pour des logiciels de bureau, et nous l'avons détourné pour y faire tourner la [[boucle de jeu|cycle répété plusieurs fois par seconde : lire les touches, mettre à jour le jeu, redessiner l'écran]] d'un jeu vidéo. J'ai consolidé mes bases en programmation orientée objet, surtout dans la structuration de systèmes interconnectés (classes, inventaires, intelligence artificielle), et j'ai appris à diviser le travail en équipe.",
    galerie: [
      { src: "assets/img/dungeon/jeu.jpg", alt: "Héros, ennemis et boss dans un donjon de pierre", legende: "Combat contre un boss dans le donjon" },
      { src: "assets/img/dungeon/selection-personnage.jpg", alt: "Fenêtre de sélection de personnage à côté de la partie en cours", legende: "Sélection du personnage (nom et classe) et partie en cours" }
    ],
    videos: [
      { src: "assets/video/dungeon.mp4", poster: "assets/img/dungeon/jeu.jpg", legende: "Démonstration du gameplay" }
    ],
    liens: []
  },

  {
    id: "apocalypse",
    titre: "Apocalypse",
    accroche: "Mini-jeu d'arène et de survie 2D de style arcade, en Python.",
    type: "Jeu vidéo Python",
    date: "Avril – mai 2025",
    tri: "2025-05",
    duree: "4 semaines",
    contexte: "Projet de fin de session en programmation Python (20 %) · Hiver 2025",
    equipe: "Équipe de 2 · avec Noé Auger",
    statut: "Terminé",
    etiquettes: ["Jeu vidéo", "Python", "Pygame Zero", "Équipe"],
    technologies: ["Python", "Pygame Zero", "Programmation orientée objet", "Fichiers CSV", "Git / GitHub"],
    couverture: "assets/img/apocalypse/arene.jpg",
    couvertureAlt: "Arène d'Apocalypse : un labyrinthe sur fond d'herbe rempli d'ennemis, avec le score et la vague affichés",
    enBref: "Apocalypse est un petit jeu d'arcade en 2D : le joueur est enfermé dans un labyrinthe et doit esquiver et repousser des vagues d'ennemis de plus en plus difficiles pour survivre le plus longtemps possible. C'est mon premier projet de jeu, réalisé en équipe avec Noé Auger.",
    objectifs: [
      "L'objectif du cours était d'apprendre les bases de la programmation de jeux en créant un mini-jeu fonctionnel avec Pygame Zero, en appliquant la programmation orientée objet (classes, héritage, redéfinition de méthodes).",
      "L'énoncé imposait plusieurs éléments : un joueur contrôlable, des ennemis qui apparaissent au hasard avec un déplacement original, des projectiles, des bonus (power-ups), la saisie du nom du joueur, un historique des parties dans un fichier CSV et des tests programmés."
    ],
    realisations: [
      { titre: "Ma contribution : les ennemis et le défi", texte: "J'étais responsable du défi du jeu. J'ai programmé le système de vagues qui augmente la difficulté, les algorithmes de déplacement et d'apparition des ennemis, ainsi que leurs pouvoirs spéciaux." },
      { titre: "La contribution de Noé : le héros", texte: "Noé s'est concentré sur les mécaniques du héros : les contrôles de déplacement du joueur et le système d'apparition des bonus (power-ups) qui l'aident à survivre." },
      { titre: "Un projet assemblé à deux", texte: "Nous avons divisé le jeu en modules logiques (le joueur d'un côté, les ennemis de l'autre) pour pouvoir travailler en parallèle, puis les assembler dans un seul projet cohérent grâce à Git." }
    ],
    resultats: "Un jeu complet et jouable : vagues d'ennemis de plus en plus nombreuses, plusieurs types d'ennemis, bonus temporaires, score et points de vie affichés en temps réel.",
    apprentissages: "Ce projet a été une excellente introduction aux concepts de base d'un moteur de jeu : la [[boucle de jeu|cycle répété plusieurs fois par seconde : lire les touches, mettre à jour le jeu, redessiner l'écran]], le rafraîchissement de l'écran et la [[gestion des collisions|détection du moment où deux objets se touchent (un projectile et un ennemi, par exemple)]]. J'y ai surtout appris les bases du travail d'équipe en programmation : diviser un système complexe en modules pour ensuite assembler nos codes.",
    galerie: [
      { src: "assets/img/apocalypse/arene.jpg", alt: "Labyrinthe vu de haut avec de nombreux ennemis jaunes et rouges", legende: "L'arène à la vague 9" },
      { src: "assets/img/apocalypse/vagues.jpg", alt: "Le joueur entouré d'ennemis dans le labyrinthe", legende: "Survie face à une vague d'ennemis" }
    ],
    videos: [
      { src: "assets/video/apocalypse-1.mp4", poster: "assets/img/apocalypse/arene.jpg", legende: "Démonstration des mécaniques" },
      { src: "assets/video/apocalypse-2.mp4", poster: "assets/img/apocalypse/vagues.jpg", legende: "Système de survie et de vagues" }
    ],
    liens: []
  }
];
