import { photo, photoLocal } from "@/lib/photos";

/**
 * CATALOGUE PRODUITS
 *
 * Les produits listés ici sont ceux confirmés par l'entreprise. Aucune
 * marque, aucun modèle, aucun prix, aucune disponibilité n'est affirmé :
 * le site présente ce qui est proposé, pas un stock à l'instant T.
 *
 * VISUELS — chaque produit porte une structure d'image indépendante du
 * composant d'affichage :
 *
 *   image           URL ou chemin du fichier, ou null
 *   imageSource     "web" | "local" | "illustration" | "generated"
 *   imageSourceUrl  page d'origine de la photo
 *   credit          { auteur, profil } — obligatoire quand source = "web"
 *   illustration    clé de repli, lue par <IllustrationProduit />
 *
 * AUJOURD'HUI : photos Unsplash (imageSource "web"). La licence Unsplash
 * autorise l'usage commercial sans redevance ; les auteurs sont crédités
 * en bas de la page Produits, comme le demandent les conditions d'usage
 * de leur API. Aucune photo de fabricant ou de distributeur n'est
 * utilisée : les poser sur un site commercial sans licence serait une
 * contrefaçon.
 *
 * CE QUE CES PHOTOS NE DISENT PAS — elles illustrent une FAMILLE de
 * produits, jamais un modèle précis ni une marque vendue par
 * LE COMPTOIR NUMÉRIQUE. La page Produits porte cette mention, qui doit
 * rester affichée tant que les photos ne sont pas celles de la boutique.
 *
 * `air-fryer` n'a pas de photo satisfaisante sur Unsplash : il garde son
 * illustration vectorielle. Le composant bascule seul, sans condition à
 * écrire dans les vues — c'est tout l'intérêt de cette structure.
 *
 * POUR PASSER AUX PHOTOS RÉELLES DE LA BOUTIQUE : déposer les fichiers
 * dans /public/images/produits/, renseigner `image` avec le chemin et
 * passer `imageSource` à "local". Ratio conseillé 4:3, fond clair. Rien
 * d'autre à modifier, et la configuration `remotePatterns` de
 * next.config.mjs pourra alors disparaître.
 *
 * @typedef {Object} Produit
 * @property {string} slug
 * @property {string} nom
 * @property {string} univers        Identifiant de l'univers parent
 * @property {string} illustration   Clé lue par <IllustrationProduit />
 * @property {string|null} image
 * @property {"web"|"local"|"illustration"|"generated"} imageSource
 * @property {string|null} [imageSourceUrl]
 * @property {{auteur: string, profil: string}|null} [credit]
 */

/** @type {Produit[]} */
export const produits = [
  /* ---------------------------------------------------------------
     ÉLECTROMÉNAGER
  --------------------------------------------------------------- */
  {
    slug: "climatiseur",
    nom: "Climatiseur",
    univers: "electromenager",
    illustration: "climatiseur",
    ...photoLocal("produits/detail/climatiseur.jpg", "Climatiseur professionnel"),
  },
  {
    slug: "refrigerateur",
    nom: "Réfrigérateur",
    univers: "electromenager",
    illustration: "refrigerateur",
    ...photoLocal("produits/detail/refrigerateur.jpg", "Réfrigérateur moderne"),
  },
  {
    slug: "machine-a-laver",
    nom: "Machine à laver",
    univers: "electromenager",
    illustration: "machineALaver",
    ...photoLocal("produits/detail/machine-a-laver.jpg", "Machine à laver"),
  },
  {
    slug: "micro-ondes",
    nom: "Micro-ondes",
    univers: "electromenager",
    illustration: "microOndes",
    ...photoLocal("produits/detail/micro-ondes.jpg", "Micro-ondes"),
  },
  {
    slug: "cuisiniere",
    nom: "Cuisinière et four",
    univers: "electromenager",
    illustration: "cuisiniere",
    ...photoLocal("produits/detail/micro-ondes.jpg", "Cuisinière professionnelle"),
  },
  {
    slug: "ventilateur",
    nom: "Ventilateur",
    univers: "electromenager",
    illustration: "ventilateur",
    ...photoLocal("produits/detail/ventilateur.jpg", "Ventilateur"),
  },
  {
    slug: "blender",
    nom: "Blender et mixeur",
    univers: "electromenager",
    illustration: "blender",
    ...photoLocal("produits/detail/blender.jpg", "Blender professionnel"),
  },
  {
    // Aucune photo d'air fryer exploitable sur Unsplash : illustration.
    slug: "air-fryer",
    nom: "Air fryer",
    univers: "electromenager",
    illustration: "airFryer",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "fer-a-repasser",
    nom: "Fer à repasser",
    univers: "electromenager",
    illustration: "ferARepasser",
    ...photoLocal("produits/detail/fer-a-repasser.jpg", "Fer à repasser"),
  },

  /* ---------------------------------------------------------------
     ÉLECTRIQUE
  --------------------------------------------------------------- */
  {
    slug: "multiprise",
    nom: "Multiprise",
    univers: "electrique",
    illustration: "multiprise",
    ...photoLocal("produits/detail/multiprise.jpg", "Multiprise professionnel"),
  },
  {
    slug: "rallonge",
    nom: "Rallonge",
    univers: "electrique",
    illustration: "rallonge",
    ...photoLocal("produits/detail/rallonge.jpg", "Rallonge électrique"),
  },
  {
    slug: "prise-interrupteur",
    nom: "Prises et interrupteurs",
    univers: "electrique",
    illustration: "prise",
    ...photoLocal("produits/detail/prise-interrupteur.jpg", "Prise et interrupteur"),
  },
  {
    slug: "cable",
    nom: "Câbles",
    univers: "electrique",
    illustration: "cable",
    ...photoLocal("produits/detail/cable.jpg", "Câbles professionnels"),
  },
  {
    slug: "ampoule",
    nom: "Ampoules",
    univers: "electrique",
    illustration: "ampoule",
    ...photoLocal("produits/detail/ampoule.jpg", "Ampoules LED"),
  },
  {
    slug: "eclairage-led",
    nom: "Éclairage LED",
    univers: "electrique",
    illustration: "led",
    ...photoLocal("produits/detail/eclairage-led.jpg", "Éclairage LED professionnel"),
  },

  /* ---------------------------------------------------------------
     TECHNOLOGIE & MÉDIAS
  --------------------------------------------------------------- */
  {
    slug: "casque",
    nom: "Casques",
    univers: "technologie-medias",
    illustration: "casque",
    ...photoLocal("produits/detail/casque.jpg", "Casque professionnel"),
  },
  {
    slug: "ecouteurs",
    nom: "Écouteurs",
    univers: "technologie-medias",
    illustration: "ecouteurs",
    ...photoLocal("produits/detail/ecouteurs.jpg", "Écouteurs sans fil"),
  },
  {
    slug: "enceinte-bluetooth",
    nom: "Enceintes Bluetooth",
    univers: "technologie-medias",
    illustration: "enceinte",
    ...photoLocal("produits/detail/enceinte-bluetooth.jpg", "Enceinte Bluetooth"),
  },
  {
    slug: "microphone",
    nom: "Microphones",
    univers: "technologie-medias",
    illustration: "microphone",
    ...photoLocal("produits/detail/microphone.jpg", "Microphone professionnel"),
  },
  {
    slug: "ring-light",
    nom: "Ring lights",
    univers: "technologie-medias",
    illustration: "ringLight",
    ...photoLocal("produits/detail/ring-light.jpg", "Ring light"),
  },
  {
    slug: "trepied",
    nom: "Trépieds",
    univers: "technologie-medias",
    illustration: "trepied",
    ...photoLocal("produits/detail/trepied.jpg", "Trépied professionnel"),
  },
  {
    slug: "clavier",
    nom: "Claviers",
    univers: "technologie-medias",
    illustration: "clavier",
    ...photoLocal("produits/detail/clavier.jpg", "Clavier mécanique"),
  },
  {
    slug: "souris",
    nom: "Souris",
    univers: "technologie-medias",
    illustration: "souris",
    ...photoLocal("produits/detail/souris.jpg", "Souris professionnelle"),
  },
  {
    slug: "manette",
    nom: "Manettes et accessoires gaming",
    univers: "technologie-medias",
    illustration: "manette",
    ...photoLocal("produits/detail/manette.jpg", "Manette gaming"),
  },
];

/** Les produits d'un univers donné. */
export function produitsDe(slugUnivers) {
  return produits.filter((p) => p.univers === slugUnivers);
}

/** Combien de produits présentés dans un univers. */
export function compterProduits(slugUnivers) {
  return produitsDe(slugUnivers).length;
}
