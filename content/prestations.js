import { photo, photoLocal } from "@/lib/photos";

/**
 * PÔLE NUMÉRIQUE — DEUX OFFRES DISTINCTES
 *
 * L'entreprise propose deux choses différentes, longtemps mélangées sous
 * le seul mot « services ». Elles sont désormais séparées, parce que le
 * visiteur ne cherche pas la même chose dans les deux cas :
 *
 *   SOLUTIONS NUMÉRIQUES  — ce que nous CONSTRUISONS pour vous :
 *                           site web, application, système de gestion,
 *                           automatisation, campagnes Meta Ads.
 *
 *   SERVICES NUMÉRIQUES   — ce que nous FAISONS AUTOUR des logiciels que
 *                           vous utilisez déjà : installation,
 *                           configuration, assistance, formation.
 *
 * L'ancien tableau `services` regroupait les deux. Rien n'a été supprimé :
 * ses huit entrées se retrouvent réparties entre `solutions` et
 * `servicesNumeriques` ci-dessous.
 *
 * AUCUN TARIF, AUCUN DÉLAI, AUCUNE RÉFÉRENCE CLIENT n'est inventé.
 *
 * ÉVOLUTION PHASE 2/3 : même principe que le catalogue, ces tableaux
 * pourront être remplacés par des requêtes en base sans toucher aux vues.
 *
 * @typedef {Object} Prestation
 * @property {string} slug
 * @property {string} nom
 * @property {string} description
 * @property {string[]} inclus   Ce que la prestation couvre
 * @property {string} icone
 * @property {Visuel} [visuel]  Photo d'illustration (solutions uniquement)
 */

/**
 * SOLUTIONS NUMÉRIQUES — ce que nous construisons.
 * @type {Prestation[]}
 */
export const solutions = [
  {
    slug: "sites-web",
    nom: "Création de sites web",
    description:
      "Sites vitrines et sites d'entreprise conçus pour être rapides, lisibles sur mobile et bien référencés.",
    inclus: ["Site vitrine", "Site d'entreprise", "Refonte de site existant"],
    icone: "web",
    visuel: {
      ...photoLocal("services/creation-sites-web.jpg", "Site web moderne affiché sur ordinateur, tablette et téléphone"),
    },
  },
  {
    slug: "applications",
    nom: "Développement d'applications",
    description:
      "Applications web sur mesure, pensées à partir de vos besoins réels et de vos façons de travailler.",
    inclus: ["Application web", "Espace client", "Outil métier"],
    icone: "application",
    visuel: {
      ...photoLocal("services/developpement-applications.jpg", "Application web et interface utilisateur moderne"),
    },
  },
  {
    slug: "systemes-de-gestion",
    nom: "Systèmes de gestion",
    description:
      "Outils internes pour suivre votre activité : stock, ventes, clients, facturation.",
    inclus: ["Gestion de stock", "Suivi des ventes", "Facturation"],
    icone: "gestion",
    visuel: {
      ...photoLocal("services/support-client.jpg", "Support client professionnel et assistance technique"),
    },
  },
  {
    slug: "automatisation",
    nom: "Automatisation",
    description:
      "Suppression des tâches répétitives par la mise en place de flux automatisés entre vos outils.",
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
    nom: "Marketing digital & Meta Ads",
    description:
      "Mise en place et suivi de campagnes publicitaires sur les plateformes Meta.",
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
    slug: "solutions-entreprises",
    nom: "Solutions numériques pour entreprises",
    description:
      "Accompagnement global des structures qui souhaitent digitaliser progressivement leur activité.",
    inclus: ["Analyse des besoins", "Mise en place par étapes", "Suivi"],
    icone: "entreprise",
    visuel: {
      ...photoLocal("services/formation-assistance.jpg", "Équipe collaborant et recevant une formation/assistance"),
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
  { valeur: "application", libelle: "Développement d'une application" },
  { valeur: "gestion", libelle: "Système de gestion interne" },
  { valeur: "automatisation", libelle: "Automatisation de tâches" },
  { valeur: "marketing", libelle: "Marketing digital / Meta Ads" },
  {
    valeur: "installation-logiciels",
    libelle: "Installation ou configuration de logiciels",
  },
  { valeur: "assistance", libelle: "Assistance à l'utilisation" },
  { valeur: "formation", libelle: "Formation au numérique" },
  { valeur: "autre", libelle: "Autre besoin" },
];
