import { photo } from "@/lib/photos";

/**
 * LES UNIVERS DU COMPTOIR NUMÉRIQUE
 *
 * Remplace l'ancien `catalogue.js`, qui ne décrivait qu'un seul métier
 * (accessoires audio) alors que l'entreprise en compte plusieurs.
 *
 * RÈGLE APPLIQUÉE — une famille n'appartient qu'à UN SEUL univers.
 * Les écouteurs, casques et microphones vont dans Technologie & Médias ;
 * les câbles, chargeurs et alimentations dans Électrique. Sans cette
 * règle, les mêmes familles apparaîtraient deux fois : mauvais pour le
 * visiteur, et pénalisant en référencement (contenu dupliqué).
 *
 * AUCUN PRODUIT INVENTÉ. Les noms de familles ci-dessous sont ceux
 * annoncés par l'entreprise. Aucune marque, aucun modèle, aucun prix,
 * aucune disponibilité n'est affirmé. Les familles portant
 * `aConfirmer: true` s'affichent comme provisoires tant qu'elles n'ont
 * pas été validées.
 *
 * ÉVOLUTION PHASE 2 : remplacer l'import de ce fichier par un appel du
 * type `await getUnivers()` interrogeant la base ne demandera aucune
 * modification des composants d'affichage.
 *
 * @typedef {Object} Univers
 * @property {string}  slug        Identifiant d'URL
 * @property {string}  nom         Nom affiché
 * @property {string}  signature   Formule courte, pour les cartes
 * @property {string}  description Description factuelle
 * @property {string[]} familles   Familles de produits du pôle
 * @property {boolean} [aConfirmer] Familles données à titre indicatif
 * @property {string}  icone       Clé lue par <Icone />
 * @property {"majeur"|"secondaire"} rang  Hiérarchie visuelle
 * @property {Visuel}  visuel
 *
 * @typedef {Object} Visuel
 * @property {string} image          URL du CDN
 * @property {"web"|"local"|"motif"} imageSource
 *   web    — photo Unsplash (licence commerciale, auteur crédité)
 *   local  — photo réelle de l'entreprise, à privilégier dès qu'elle existe
 *   motif  — composition vectorielle de marque, repli sans photo
 * @property {string} imageSourceUrl
 * @property {{auteur: string, profil: string}} credit
 * @property {string} alt
 *
 * Les photos illustrent un UNIVERS, pas un produit vendu : elles disent
 * « voici le genre de matériel dont on parle », rien de plus.
 */

/** @type {Univers[]} */
export const univers = [
  {
    slug: "technologie-medias",
    nom: "Technologie & Médias",
    signature: "Écouter, capter, créer",
    description:
      "Le matériel d'écoute, de captation et d'usage quotidien : audio, accessoires téléphone et périphériques.",
    familles: [
      "Écouteurs et casques",
      "Microphones",
      "Trépieds et supports",
      "Appareils et accessoires Bluetooth",
      "Claviers, souris et manettes",
      "Ring lights et création de contenu",
      "Coques et protections",
    ],
    icone: "casque",
    rang: "majeur",
    visuel: {
      ...photo(
        "photo-1589903308904-1010c2294adc",
        "black-and-silver-headphones-on-black-and-silver-microphone-ZDNyhmgkZlQ",
        "Will Francis",
        "willfrancis",
      ),
      alt: "Microphone de studio et casque posés sur un bureau",
    },
  },
  {
    slug: "electronique",
    nom: "Électronique",
    signature: "Les appareils du quotidien",
    description:
      "Appareils et équipements électroniques, et les accessoires qui les accompagnent.",
    familles: [
      "Appareils électroniques",
      "Équipements multimédias",
      "Accessoires électroniques",
    ],
    aConfirmer: true,
    icone: "accessoires",
    rang: "majeur",
    visuel: {
      ...photo(
        "photo-1555664424-778a1e5e1b48",
        "flat-lay-photography-of-circuit-board-zP7X_B86xOg",
        "Robin Glauser",
        "nahakiole",
      ),
      alt: "Carte électronique vue de dessus",
    },
  },
  {
    slug: "electrique",
    nom: "Électrique",
    signature: "Alimenter et raccorder",
    description:
      "Tout ce qui relie et alimente vos appareils, du câble à la rallonge.",
    familles: [
      "Câbles et rallonges",
      "Prises et interrupteurs",
      "Multiprises",
      "Ampoules et éclairage LED",
      "Chargeurs et alimentations",
    ],
    icone: "electrique",
    rang: "secondaire",
    visuel: {
      ...photo(
        "photo-1635335874521-7987db781153",
        "a-bunch-of-wires-are-plugged-into-a-switch-box-47jO5Y8nsYo",
        "mostafa mahmoudi",
        "mostafa_mahmoudi24",
      ),
      alt: "Tableau électrique et faisceau de câbles raccordés",
    },
  },
  {
    slug: "electromenager",
    nom: "Électroménager",
    signature: "L'équipement de la maison",
    description:
      "Petits appareils et équipements domestiques pour le confort au quotidien.",
    familles: [
      "Froid et lavage",
      "Cuisson et préparation",
      "Climatisation et ventilation",
      "Petit électroménager",
    ],
    icone: "electromenager",
    rang: "secondaire",
    visuel: {
      ...photo(
        "photo-1556911220-bff31c812dba",
        "modern-white-kitchen-with-marble-island-GliaHAJ3_5A",
        "Jason Briscoe",
        "jsnbrsc",
      ),
      alt: "Cuisine équipée avec ses appareils domestiques",
    },
  },
  {
    slug: "solutions-numeriques",
    nom: "Solutions et services numériques",
    signature: "Construire, installer, former",
    description:
      "Les outils que nous construisons pour vous, et les services autour des logiciels que vous utilisez déjà.",
    familles: [
      "Sites web et applications",
      "Systèmes de gestion et CRM",
      "Automatisation",
      "Marketing digital et Meta Ads",
      "Installation et configuration de logiciels",
      "Assistance et formation",
    ],
    icone: "web",
    rang: "majeur",
    /** Seul univers qui ne renvoie pas vers le catalogue produits. */
    href: "/services",
    visuel: {
      ...photo(
        "photo-1498050108023-c5249f4df085",
        "a-macbook-with-lines-of-code-on-its-screen-on-a-busy-desk-m_HRfLhgABo",
        "Christopher Gower",
        "cgower",
      ),
      alt: "Ordinateur portable affichant des lignes de code sur un bureau",
    },
  },
];

/** Les univers de produits physiques, sans le pôle numérique. */
export const universProduits = univers.filter(
  (u) => u.slug !== "solutions-numeriques",
);

/** Toutes les familles, à plat — utilisé par le pied de page. */
export const toutesLesFamilles = universProduits.flatMap((u) =>
  u.familles.map((famille) => ({ famille, univers: u.nom, slug: u.slug })),
);

/** Retrouve un univers par son identifiant d'URL. */
export function trouverUnivers(slug) {
  return univers.find((u) => u.slug === slug) ?? null;
}
