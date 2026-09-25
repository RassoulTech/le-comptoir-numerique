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
 * AUJOURD'HUI : trois sources, selon la fiabilité de chaque visuel :
 *   - photos locales VÉRIFIÉES cohérentes avec le produit (casques,
 *     microphones, câbles, climatiseur, écouteurs, ampoules) ;
 *   - ILLUSTRATION vectorielle de marque pour les produits dont aucune
 *     photo crédible n'est disponible — le repli est affiché tel quel,
 *     jamais une photo qui ne montre pas le produit annoncé (audit
 *     visuel du 2026-09-25 : une partie des anciens fichiers contenaient
 *     des images sans rapport avec leur nom) ;
 *   - pas de source "web" à l'usage : les photos Unsplash retenues ont
 *     été téléchargées dans /public/images/produits/ et leur origine est
 *     consignée dans public/images/credits-sources.md. La licence
 *     Unsplash autorise l'usage commercial sans attribution obligatoire ;
 *     aucune photo de fabricant ou de distributeur n'est utilisée : les
 *     poser sur un site commercial sans licence serait une contrefaçon.
 *
 * CE QUE CES PHOTOS NE DISENT PAS — elles illustrent une FAMILLE de
 * produits, jamais un modèle précis ni une marque vendue par
 * LE COMPTOIR NUMÉRIQUE. La page Produits porte cette mention.
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
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "machine-a-laver",
    nom: "Machine à laver",
    univers: "electromenager",
    illustration: "machineALaver",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "micro-ondes",
    nom: "Micro-ondes",
    univers: "electromenager",
    illustration: "microOndes",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "cuisiniere",
    nom: "Cuisinière et four",
    univers: "electromenager",
    illustration: "cuisiniere",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "ventilateur",
    nom: "Ventilateur",
    univers: "electromenager",
    illustration: "ventilateur",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "blender",
    nom: "Blender et mixeur",
    univers: "electromenager",
    illustration: "blender",
    image: null,
    imageSource: "illustration",
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
    image: null,
    imageSource: "illustration",
  },

  /* ---------------------------------------------------------------
     ÉLECTRIQUE
  --------------------------------------------------------------- */
  {
    slug: "multiprise",
    nom: "Multiprise",
    univers: "electrique",
    illustration: "multiprise",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "rallonge",
    nom: "Rallonge",
    univers: "electrique",
    illustration: "rallonge",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "prise-interrupteur",
    nom: "Prises et interrupteurs",
    univers: "electrique",
    illustration: "prise",
    image: null,
    imageSource: "illustration",
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
    image: null,
    imageSource: "illustration",
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
    image: null,
    imageSource: "illustration",
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
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "trepied",
    nom: "Trépieds",
    univers: "technologie-medias",
    illustration: "trepied",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "clavier",
    nom: "Claviers",
    univers: "technologie-medias",
    illustration: "clavier",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "souris",
    nom: "Souris",
    univers: "technologie-medias",
    illustration: "souris",
    image: null,
    imageSource: "illustration",
  },
  {
    slug: "manette",
    nom: "Manettes et accessoires gaming",
    univers: "technologie-medias",
    illustration: "manette",
    image: null,
    imageSource: "illustration",
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
