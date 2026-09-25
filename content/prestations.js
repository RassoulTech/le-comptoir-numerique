import { photo, photoLocal } from "@/lib/photos";

/**
 * PÔLE SOLUTIONS NUMÉRIQUES — SEPT OFFRES
 *
 * Structure conforme au brief de refonte : sept offres distinctes, dont
 * sept pages dédiées sous /solutions/. Les anciennes entrées
 * « Développement d'applications », « Systèmes de gestion » et
 * « Solutions numériques pour entreprises » ont été requalifiées :
 *   - applications-web   (ex. applications)      — WEB uniquement
 *   - logiciels          (ex. systemes-de-gestion)
 *   - conseil-accompagnement (ex. solutions-entreprises)
 * Rien n'a été perdu : chaque texte existant a été revu et intégré à
 * l'offre correspondante.
 *
 * RÈGLES DU BRIEF APPLIQUÉES :
 *   - « Applications web » est une offre WEB : aucune mention
 *     d'application mobile n'est admise.
 *   - Le design graphique n'est pas une offre autonome.
 *   - Aucun tarif, aucun délai, aucune référence client n'est inventé.
 *
 * STRUCTURE D'UNE PAGE DÉTAIL (Hero · Problématique · Approche ·
 * Ce que nous réalisons · Processus · Bénéfices · CTA) — chaque champ
 * alimente une section de la page :
 *
 *   probleme   Constat factuel, ce que vit le client sans nous.
 *   constats   Trois à quatre situations concrètes (liste).
 *   approche   Notre manière de travailler, en un paragraphe.
 *   realise    Ce que nous construisons concrètement [{titre, texte}].
 *   processus  Étapes du déroulement [{titre, texte}].
 *   benefices  Ce que le client y gagne (liste courte).
 *   inclus     Résumé pour les cartes (grille d'accueil).
 *
 * @typedef {Object} Solution
 * @property {string} slug
 * @property {string} nom
 * @property {string} signature   Formule courte pour les cartes
 * @property {string} description
 * @property {string} probleme
 * @property {string[]} constats
 * @property {string} approche
 * @property {{titre: string, texte: string}[]} realise
 * @property {{titre: string, texte: string}[]} processus
 * @property {string[]} benefices
 * @property {string[]} inclus
 * @property {string} icone
 * @property {Visuel} [visuel]
 */

/**
 * SOLUTIONS NUMÉRIQUES — ce que nous construisons.
 * @type {Solution[]}
 */
export const solutions = [
  {
    slug: "sites-web",
    nom: "Sites web",
    signature: "Être visible, crédible, joignable",
    description:
      "Sites vitrines et sites d'entreprise conçus pour être rapides, lisibles sur mobile et bien référencés.",
    probleme:
      "Beaucoup d'activités à Thiès travaillent bien mais restent invisibles en ligne : pas de site, ou un site lent, mal affiché sur téléphone, sans coordonnées claires. Le client qui cherche vous compare alors à un concurrent mieux présenté, sans avoir pu vérifier ce que vous faites réellement.",
    constats: [
      "Aucun site, ou une page facebook utilisée comme vitrine unique",
      "Un site ancien, lent, illisible sur téléphone",
      "Des informations dispersées : numéro, horaires, adresse difficiles à trouver",
      "Aucun suivi après la mise en ligne : le site ne bouge plus",
    ],
    approche:
      "Nous partons de votre activité réelle : ce que vous vendez, à qui, comment on vous contacte. Nous concevons ensuite un site clair, rapide sur les connexions mobiles, lisible sur téléphone comme sur ordinateur, et structuré pour le référencement local. Après la mise en ligne, le site reste entre nos mains : corrections, mises à jour de contenu, évolutions.",
    realise: [
      {
        titre: "Site vitrine",
        texte:
          "Présenter votre activité, vos produits ou services et vos coordonnées, avec un contact direct par WhatsApp ou téléphone.",
      },
      {
        titre: "Site d'entreprise",
        texte:
          "Plus complet : présentation, offres, actualités, pages par activité, formulaire de contact avec suivi des demandes.",
      },
      {
        titre: "Site e-commerce",
        texte:
          "Catalogue en ligne avec commande ou demande de devis, adapté aux usages mobiles du marché sénégalais.",
      },
      {
        titre: "Maintenance et évolution",
        texte:
          "Corrections, mises à jour, ajout de contenu, améliorations : le site reste vivant après sa mise en ligne.",
      },
    ],
    processus: [
      {
        titre: "Écoute",
        texte:
          "Nous cadrons votre besoin : objectifs, cibles, contenus disponibles, contacts à mettre en avant.",
      },
      {
        titre: "Conception",
        texte:
          "Structure des pages, arborescence, textes et visuels, validés avec vous avant tout développement.",
      },
      {
        titre: "Réalisation",
        texte:
          "Développement, tests sur téléphone et ordinateur, optimisation de la vitesse et du référencement.",
      },
      {
        titre: "Mise en ligne et suivi",
        texte:
          "Publication du site, formation à son usage, puis maintenance et évolutions selon vos besoins.",
      },
    ],
    benefices: [
      "Une présence en ligne crédible, à votre image",
      "Un site rapide et confortable sur téléphone",
      "Des clients qui trouvent vos coordonnées en deux clics",
      "Un interlocuteur local pour la maintenance",
    ],
    inclus: ["Site vitrine", "Site d'entreprise", "E-commerce", "Maintenance"],
    icone: "web",
    visuel: {
      ...photoLocal(
        "services/creation-sites-web.jpg",
        "Site web moderne affiché sur ordinateur, tablette et téléphone",
      ),
    },
  },
  {
    slug: "applications-web",
    nom: "Applications web",
    signature: "Des outils qui suivent vos façons de travailler",
    description:
      "Applications web sur mesure : plateformes métier, portails et interfaces pensés à partir de vos besoins réels.",
    probleme:
      "Vos équipes travaillent avec des tableaux Excel qui circulent par e-mail, des informations en double, des fichiers perdus. Chaque service tient sa propre version de la vérité, et il faut des heures pour reconstituer une situation claire. Les logiciels du marché existent mais imposent leur façon de travailler.",
    constats: [
      "Des données dispersées entre Excel, WhatsApp et le papier",
      "Des saisies en double et des erreurs qui se propagent",
      "Des décisions prises sans chiffres fiables à jour",
      "Des logiciels génériques que personne n'arrive à adopter",
    ],
    approche:
      "Nous développons des applications WEB, accessibles depuis un navigateur sur ordinateur comme sur téléphone, sans installation. Nous observons d'abord vos façons de travailler réelles, puis nous concevons l'outil autour d'elles — pas l'inverse. L'interface reste simple : si vos équipes ne l'adoptent pas, l'outil a échoué, quelles que soient ses fonctionnalités.",
    realise: [
      {
        titre: "Application métier",
        texte:
          "L'outil qui couvre votre activité précise : suivi des opérations, dossiers, intervenants, documents.",
      },
      {
        titre: "Plateforme web",
        texte:
          "Un espace en ligne qui relie plusieurs acteurs : clients, agents, partenaires, chacun avec son rôle.",
      },
      {
        titre: "Portail client ou interne",
        texte:
          "Un point d'accès unique : demandes, suivis, documents, communications centralisés au même endroit.",
      },
      {
        titre: "Tableaux de bord",
        texte:
          "Des indicateurs fiables, calculés en direct à partir de vos données saisies, consultables sur mobile.",
      },
    ],
    processus: [
      {
        titre: "Analyse",
        texte:
          "Nous étudions vos processus réels sur le terrain : qui fait quoi, avec quels documents, à quel moment.",
      },
      {
        titre: "Maquette",
        texte:
          "Nous validons les écrans et le parcours avant de coder, pour éviter les mauvaises surprises.",
      },
      {
        titre: "Développement itératif",
        texte:
          "Nous livrons par étapes utilisables : vous voyez l'outil avancer et nous corriger tôt.",
      },
      {
        titre: "Mise en service",
        texte:
          "Installation, reprise de vos données existantes, formation des équipes et support au démarrage.",
      },
    ],
    benefices: [
      "Une seule source de données, partagée par tous",
      "Moins de saisies en double et d'erreurs",
      "Des informations accessibles en temps réel, même sur téléphone",
      "Un outil qui épouse vos méthodes de travail",
    ],
    inclus: ["Application web", "Espace client", "Outil métier", "Portail"],
    icone: "application",
    visuel: {
      ...photoLocal(
        "services/developpement-applications.jpg",
        "Application web et interface utilisateur moderne",
      ),
    },
  },
  {
    slug: "logiciels",
    nom: "Logiciels & gestion",
    signature: "Stock, ventes, clients, facturation",
    description:
      "Logiciels sur mesure et systèmes de gestion : CRM, gestion commerciale, suivi de stock et tableaux de bord internes.",
    probleme:
      "Sans outil de gestion fiable, le stock se compte à l'œil, les factures se font à la main, l'historique d'un client se reconstitue de mémoire. Les pertes ne se voient pas, elles s'accumulent : invendus, impayés oubliés, décisions prises sur des impressions.",
    constats: [
      "Un stock suivi sur cahier ou sur des fichiers qui divergent",
      "Des factures manuelles, lentes, parfois incohérentes",
      "Aucune vision sur les clients : qui achète quoi, à quelle fréquence",
      "Impossible de savoir ce qui rapporte et ce qui coûte",
    ],
    approche:
      "Nous construisons des systèmes de gestion simples et complets : gestion de stock, gestion commerciale, CRM, suivi d'activité. Chaque système part de vos documents existants (bons, factures, registres) pour que la prise en main soit naturelle. Les données restent les vôtres, avec des sauvegardes organisées dès le départ.",
    realise: [
      {
        titre: "Gestion de stock",
        texte:
          "Entrées, sorties, alertes de seuil, valorisation : vous savez toujours ce que vous avez et ce qui bouge.",
      },
      {
        titre: "Gestion commerciale",
        texte:
          "Devis, factures, clients, historique d'achats : tout lourdé au même endroit, imprimable et archivé.",
      },
      {
        titre: "CRM",
        texte:
          "Fiches clients, relances, historique des échanges : personne ne réappelle deux fois pour la même chose.",
      },
      {
        titre: "Tableaux de bord internes",
        texte:
          "Chiffres d'activité, tendances, points d'attention : une vue claire pour décider, mise à jour en continu.",
      },
    ],
    processus: [
      {
        titre: "Diagnostic",
        texte:
          "Nous passons en revue votre gestion actuelle : documents, habitudes, points de fuite.",
      },
      {
        titre: "Conception du système",
        texte:
          "Nous définissons ensemble les données, les documents produits et les rôles de chacun.",
      },
      {
        titre: "Reprise des données",
        texte:
          "Nous transmettons vos données existantes dans le nouveau système, avec vérification.",
      },
      {
        titre: "Formation et suivi",
        texte:
          "Nous formons vos équipes et restons disponibles pendant la prise en main.",
      },
    ],
    benefices: [
      "Un stock fiable, des écarts détectés tôt",
      "Des factures propres, produites en quelques instants",
      "Un historique client complet et exploitable",
      "Des décisions appuyées sur des chiffres réels",
    ],
    inclus: ["Gestion de stock", "Suivi des ventes", "Facturation", "CRM"],
    icone: "gestion",
    visuel: {
      ...photoLocal(
        "realisations/application-web.jpg",
        "Interface de gestion affichée sur ordinateur portable",
      ),
    },
  },
  {
    slug: "automatisation",
    nom: "Automatisation",
    signature: "Moins de tâches répétitives, plus d'essentiel",
    description:
      "Automatisation de tâches et de processus : workflows, connexions entre vos outils, rapports et relances automatiques.",
    probleme:
      "Des heures partent chaque semaine en tâches répétitives : recopier des données d'un outil à l'autre, envoyer les mêmes relances, préparer à la main les mêmes rapports. Ce travail ne crée aucune valeur, mais il faut quand même le faire — et il arrive qu'on l'oublie.",
    constats: [
      "Des données recopiées manuellement d'un outil vers un autre",
      "Des relances clients qui dépendent de la mémoire de chacun",
      "Des rapports reconstruits à la main, toujours en retard",
      "Des processus qui ne fonctionnent que si une personne précise est là",
    ],
    approche:
      "Nous identifions les tâches répétitives de votre activité, puis nous les automatisons en reliant vos outils entre eux : formulaires, tableurs, messageries, logiciels de gestion. Chaque automatisation est documentée et reste explicable : vous savez ce qui se déclenche, quand, et pourquoi. On automatise ce qui est stable et répétitif, pas ce qui demande du jugement.",
    realise: [
      {
        titre: "Connexions entre outils",
        texte:
          "Vos formulaires, tableurs, messageries et logiciels échangent leurs données sans recopie manuelle.",
      },
      {
        titre: "Rapports automatiques",
        texte:
          "Les synthèses périodiques se construisent et se distribuent seules, à heure fixe.",
      },
      {
        titre: "Relances et notifications",
        texte:
          "Rappels clients, alertes internes, confirmations : les messages partent au bon moment, sans y penser.",
      },
      {
        titre: "Automatisation de processus",
        texte:
          "Les étapes répétitives d'un traitement (dossier, commande, demande) s'enchaînent seules.",
      },
    ],
    processus: [
      {
        titre: "Cartographie",
        texte:
          "Nous listons vos tâches répétitives et mesurons celles qui coûtent le plus de temps.",
      },
      {
        titre: "Priorisation",
        texte:
          "Nous choisissons les automatisations les plus sûres et les plus rentables à mettre en place d'abord.",
      },
      {
        titre: "Mise en place",
        texte:
          "Nous construisons, testons et documentons chaque flux automatisé, avec des garde-fous.",
      },
      {
        titre: "Suivi",
        texte:
          "Nous surveillons le fonctionnement et ajustons lorsque vos processus évoluent.",
      },
    ],
    benefices: [
      "Des heures récupérées chaque semaine",
      "Moins d'oublis et d'incohérences",
      "Des processus qui ne dépendent plus d'une seule personne",
      "Un fonctionnement documenté, transmissible",
    ],
    inclus: ["Connexion entre outils", "Rapports automatiques", "Relances"],
    icone: "automatisation",
    // Un bras robotisé illustrait mal cette offre : l'automatisation
    // vendue ici relie des logiciels entre eux, elle ne fabrique rien.
    // Un enchaînement d'étapes est plus proche de ce que le client
    // achète réellement.
    visuel: {
      ...photo(
        "photo-1573166364266-356ef04ae798",
        "person-writing-on-dry-erase-board-tYVkjjMYFBo",
        "Christina @ wocintechchat.com M",
        "wocintechchat",
      ),
      alt: "Enchaînement d'étapes tracé sur un tableau blanc",
    },
  },
  {
    slug: "marketing-digital",
    nom: "Marketing digital",
    signature: "Toucher les bonnes personnes, mesurer ce qui marche",
    description:
      "Stratégie digitale, réseaux sociaux, publicité en ligne et campagnes Meta Ads avec suivi des performances.",
    probleme:
      "Publier sans stratégie produit des efforts dispersés : des publications irrégulières, des budgets publicitaires dépensés sans cible claire, aucun chiffre pour dire si cela a servi. Sans suivi, on recommence au hasard.",
    constats: [
      "Des pages réseaux sociaux tenues de façon irrégulière",
      "Un budget publicitaire dépensé sans ciblage ni suivi",
      "Aucune mesure : on ne sait pas ce qui a amené des contacts",
      "Des contenus improvisés à la dernière minute",
    ],
    approche:
      "Nous partons de votre clientèle réelle et de vos objectifs commerciaux. Nous organisons votre présence sur les réseaux sociaux, mettons en place des campagnes publicitaires ciblées sur Meta (Facebook, Instagram), et suivons les performances avec des chiffres lisibles. Chaque campagne se juge sur ce qui compte pour vous : contacts reçus, demandes, ventes.",
    realise: [
      {
        titre: "Stratégie digitale",
        texte:
          "Canaux, messages, fréquence : un plan clair adapté à votre clientèle et à vos moyens.",
      },
      {
        titre: "Réseaux sociaux",
        texte:
          "Tenue régulière de vos pages : contenus, calendrier, réponses aux messages.",
      },
      {
        titre: "Campagnes Meta Ads",
        texte:
          "Publicités ciblées sur Facebook et Instagram, configurées et suivies par nos soins.",
      },
      {
        titre: "Analyse des performances",
        texte:
          "Des rapports simples : ce qui a été vu, ce qui a produit des contacts, ce qu'on ajuste.",
      },
    ],
    processus: [
      {
        titre: "Analyse",
        texte:
          "Nous étudions votre clientèle, vos offres et votre présence en ligne actuelle.",
      },
      {
        titre: "Plan d'action",
        texte:
          "Nous définissons les canaux, les messages, le calendrier et le budget envisagé.",
      },
      {
        titre: "Lancement",
        texte:
          "Contenus produits, campagnes configurées, suivi des interactions en place.",
      },
      {
        titre: "Mesure et ajustement",
        texte:
          "Nous suivons les performances et réajustons les campagnes selon les résultats.",
      },
    ],
    benefices: [
      "Une présence régulière et professionnelle en ligne",
      "Des publicités qui touchent les bonnes personnes",
      "Des décisions appuyées sur des chiffres, pas des impressions",
      "Un budget utilisé là où il produit des contacts",
    ],
    inclus: ["Campagnes Meta Ads", "Suivi des performances", "Contenus"],
    icone: "marketing",
    visuel: {
      ...photo(
        "photo-1686061594225-3e92c0cd51b0",
        "a-computer-screen-with-a-bunch-of-data-on-it-bMWHu8wU1Vk",
        "1981 Digital",
        "1981digital",
      ),
      alt: "Écran de suivi des performances d'une campagne",
    },
  },
  {
    slug: "referencement-seo",
    nom: "Référencement & SEO",
    signature: "Être trouvé quand on vous cherche",
    description:
      "SEO technique, référencement local, optimisation des contenus et suivi des performances sur les moteurs de recherche.",
    probleme:
      "Votre site existe mais il n'apparaît pas, ou en dixième page : personne ne le trouve. Les clients cherchent pourtant — « matériel électrique Thiès », « création site web Thiès » — et contactent ceux qui sortent en premier. Sans référencement, un bon site reste invisible.",
    constats: [
      "Un site absent des résultats de recherche locale",
      "Des pages lentes, mal structurées, mal lues par Google",
      "Des textes qui ne parlent pas le langage des clients",
      "Aucun suivi : impossible de savoir d'où viennent les visiteurs",
    ],
    approche:
      "Nous traitons le référencement comme un chantier de fond : technique d'abord (vitesse, structure, mobile), contenu ensuite (ce que vos clients cherchent vraiment, dit clairement), puis référencement local pour être trouvé à Thiès et au Sénégal. Les résultats se construisent dans la durée ; nous suivons les positions et le trafic pour ajuster le tir avec des données, pas des intuitions.",
    realise: [
      {
        titre: "SEO technique",
        texte:
          "Vitesse, structure des pages, indexation, compatibilité mobile : les bases que les moteurs exigent.",
      },
      {
        titre: "Référencement local",
        texte:
          "Présence locale à Thiès : fiches d'établissement, cohérence des coordonnées, visibilité géographique.",
      },
      {
        titre: "Optimisation des contenus",
        texte:
          "Des pages écrites dans le langage de vos clients, sur les mots-clés qu'ils tapent vraiment.",
      },
      {
        titre: "Suivi des performances",
        texte:
          "Positions, visites, origines : un suivi régulier pour mesurer les progrès et prioriser.",
      },
    ],
    processus: [
      {
        titre: "Audit",
        texte:
          "Nous évaluons l'état actuel : technique, contenus, visibilité locale, présence dans les résultats.",
      },
      {
        titre: "Priorisation",
        texte:
          "Nous identifions les corrections aux plus forts effets, et nous les traitons d'abord.",
      },
      {
        titre: "Mise en œuvre",
        texte:
          "Corrections techniques, rédaction et optimisation des contenus, travail local.",
      },
      {
        titre: "Suivi continu",
        texte:
          "Nous suivons les positions et le trafic, et ajustons le plan dans la durée.",
      },
    ],
    benefices: [
      "Un site que les moteurs de recherche comprennent et classent",
      "Des clients qui vous trouvent quand ils vous cherchent",
      "Une visibilité locale solide à Thiès",
      "Des progrès mesurés avec des chiffres",
    ],
    inclus: ["Audit SEO", "SEO technique", "SEO local", "Suivi"],
    icone: "recherche",
    visuel: {
      ...photo(
        "photo-1563986768494-4dee2763ff3f",
        "person-using-both-laptop-and-smartphone-tLZhFRLj6nY",
        "Austin Distel",
        "austindistel",
      ),
      alt: "Recherche en ligne sur ordinateur et téléphone mobile",
    },
  },
  {
    slug: "conseil-accompagnement",
    nom: "Conseil & accompagnement",
    signature: "Un interlocuteur qui prend le temps de comprendre",
    description:
      "Étude de projet, audit, recommandations, formation, assistance et support technique pour avancer avec confiance.",
    probleme:
      "Face aux outils numériques, beaucoup de structures avancent seules : quel logiciel choisir, par quoi commencer, à quel rythme, avec quel budget. Les conseils reçus viennent souvent de vendeurs qui ont un produit à écouler — pas d'un partenaire qui a intérêt à ce que la décision soit la bonne.",
    constats: [
      "Des projets lancés à l'envers : outil avant besoin",
      "Des équipements achetés sans étude du besoin réel",
      "Des équipes livrées à elles-mêmes après l'installation",
      "Personne à joindre quand un outil ne fonctionne plus",
    ],
    approche:
      "Nous prenons le temps d'étudier votre situation avant de proposer quoi que ce soit : votre activité, vos contraintes, vos moyens. Nos recommandations sont argumentées, comparées, et respectent votre rythme. Ensuite nous restons présents : formation des équipes, assistance, support technique. Un projet se réussit moins par la technologie que par l'accompagnement.",
    realise: [
      {
        titre: "Étude de projet",
        texte:
          "Nous cadrons votre besoin, les options possibles, les priorités et les étapes réalistes.",
      },
      {
        titre: "Audit et recommandations",
        texte:
          "Un état des lieux honnête de vos outils et pratiques, avec des recommandations argumentées.",
      },
      {
        titre: "Formation",
        texte:
          "Des sessions de prise en main pour vos équipes, adaptées à leur niveau réel, sur vos outils.",
      },
      {
        titre: "Assistance et support technique",
        texte:
          "Un interlocuteur joignable quand un problème survient ou qu'une question se pose.",
      },
    ],
    processus: [
      {
        titre: "Premier échange",
        texte:
          "Nous écoutons votre situation, vos objectifs et vos contraintes, sans engagement.",
      },
      {
        titre: "Étude",
        texte:
          "Nous analysons votre existant et les options possibles, avec leurs avantages et limites.",
      },
      {
        titre: "Recommandations",
        texte:
          "Nous vous remettons un avis clair et argumenté, que vous êtes libre de suivre à votre rythme.",
      },
      {
        titre: "Accompagnement",
        texte:
          "Formation, assistance et suivi dans la durée, à la mesure de vos besoins.",
      },
    ],
    benefices: [
      "Des décisions éclairées, pas subies",
      "Des équipes formées et autonomes",
      "Un partenaire local, joignable, qui connaît votre dossier",
      "Un rythme d'évolution respectueux de vos moyens",
    ],
    inclus: ["Étude de projet", "Audit", "Formation", "Assistance"],
    icone: "accompagnement",
    visuel: {
      ...photoLocal(
        "services/formation-assistance.jpg",
        "Équipe collaborant et recevant une formation ou une assistance",
      ),
    },
  },
];

/**
 * SERVICES NUMÉRIQUES — ce que nous faisons autour de vos outils.
 *
 * ATTENTION, POINT NON NÉGOCIABLE : ces prestations portent sur des
 * logiciels édités par d'autres entreprises. Le Comptoir Numérique n'en
 * est ni l'éditeur ni le revendeur, et ne fournit aucune licence. Les
 * textes ci-dessous doivent donc toujours décrire une INTERVENTION
 * (installer, configurer, assister, former) et jamais une VENTE.
 *
 * @typedef {Object} Prestation
 * @property {string} slug
 * @property {string} nom
 * @property {string} description
 * @property {string[]} inclus   Ce que la prestation couvre
 * @property {string} icone
 *
 * @type {Prestation[]}
 */
export const servicesNumeriques = [
  {
    slug: "installation-logiciels",
    nom: "Installation de logiciels",
    description:
      "Mise en place de vos logiciels de bureautique et de création sur vos postes, à partir des licences dont vous disposez.",
    inclus: [
      "Logiciels de bureautique",
      "Logiciels de création",
      "Installation sur vos postes",
    ],
    icone: "installation",
  },
  {
    slug: "configuration",
    nom: "Configuration et mise en route",
    description:
      "Paramétrage du poste et des comptes pour que tout soit opérationnel dès la première utilisation.",
    inclus: ["Paramétrage initial", "Comptes et accès", "Vérification"],
    icone: "configuration",
  },
  {
    slug: "assistance",
    nom: "Assistance à l'utilisation",
    description:
      "Un interlocuteur à qui poser vos questions quand un outil ne fait pas ce que vous attendez.",
    inclus: ["Aide à l'utilisation", "Blocages courants"],
    icone: "assistance",
  },
  {
    slug: "formation",
    nom: "Formation au numérique",
    description:
      "Sessions de prise en main destinées aux équipes qui adoptent de nouveaux outils.",
    inclus: ["Prise en main des outils", "Sessions sur mesure"],
    icone: "formation",
  },
  {
    slug: "accompagnement",
    nom: "Accompagnement technologique",
    description:
      "Conseil sur le choix, la mise en place et l'utilisation de vos équipements et outils numériques.",
    inclus: ["Conseil", "Mise en route", "Suivi"],
    icone: "accompagnement",
  },
];

/**
 * LOGICIELS SUR LESQUELS NOUS INTERVENONS.
 *
 * Ces noms sont des marques déposées appartenant à leurs éditeurs. Ils
 * sont cités uniquement pour indiquer le périmètre d'intervention, ce que
 * le droit des marques autorise (usage référentiel). La mention légale
 * ci-dessous est affichée avec la liste et ne doit pas en être séparée.
 */
export const logicielsPrisEnCharge = [
  {
    slug: "bureautique",
    famille: "Bureautique",
    icone: "bureautique",
    outils: ["Microsoft Office", "Word", "Excel", "PowerPoint"],
  },
  {
    slug: "creation",
    famille: "Création graphique",
    icone: "creation",
    outils: ["Adobe", "Photoshop", "Illustrator"],
  },
];

/** Mention légale obligatoire, affichée sous la liste des logiciels. */
export const mentionMarques =
  "Microsoft, Office, Word, Excel, PowerPoint, Adobe, Photoshop et Illustrator sont des marques appartenant à leurs éditeurs respectifs. Le Comptoir Numérique n'est ni éditeur ni revendeur de ces logiciels : nos prestations portent uniquement sur l'installation, la configuration, l'assistance et la formation, à partir des licences dont vous disposez.";

/**
 * RÉALISATIONS — placeholders assumés.
 *
 * Aucun faux client, faux témoignage ni fausse statistique.
 * Remplacer chaque entrée par un projet réel, puis passer `aDefinir` à false.
 *
 * @typedef {Object} Realisation
 * @property {string} slug
 * @property {string} titre
 * @property {string} categorie
 * @property {string} resume
 * @property {string|null} image
 * @property {boolean} aDefinir
 */

/** @type {Realisation[]} */
export const realisations = [
  {
    slug: "projet-1",
    titre: "[Titre du projet]",
    categorie: "[Type de projet]",
    resume: "[Description réelle du projet à renseigner.]",
    image: null,
    aDefinir: true,
  },
  {
    slug: "projet-2",
    titre: "[Titre du projet]",
    categorie: "[Type de projet]",
    resume: "[Description réelle du projet à renseigner.]",
    image: null,
    aDefinir: true,
  },
  {
    slug: "projet-3",
    titre: "[Titre du projet]",
    categorie: "[Type de projet]",
    resume: "[Description réelle du projet à renseigner.]",
    image: null,
    aDefinir: true,
  },
];

/**
 * Types de besoin proposés dans le formulaire de devis.
 *
 * Cette liste sert aussi de liste blanche côté serveur
 * (lib/devis/validation.js) : une valeur absente d'ici est refusée.
 */
export const typesDeBesoin = [
  { valeur: "produits", libelle: "Achat de produits technologiques" },
  { valeur: "site-web", libelle: "Création d'un site web" },
  { valeur: "application", libelle: "Développement d'une application web" },
  { valeur: "gestion", libelle: "Logiciel ou système de gestion" },
  { valeur: "automatisation", libelle: "Automatisation de tâches" },
  { valeur: "marketing", libelle: "Marketing digital / Meta Ads" },
  { valeur: "seo", libelle: "Référencement & SEO" },
  { valeur: "conseil", libelle: "Conseil & accompagnement" },
  {
    valeur: "installation-logiciels",
    libelle: "Installation ou configuration de logiciels",
  },
  { valeur: "assistance", libelle: "Assistance à l'utilisation" },
  { valeur: "formation", libelle: "Formation au numérique" },
  { valeur: "autre", libelle: "Autre besoin" },
];