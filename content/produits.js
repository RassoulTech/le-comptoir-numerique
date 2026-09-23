import { photo } from "@/lib/photos";

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
    ...photo(
      "photo-1759772238012-9d5ad59ae637",
      "a-white-air-conditioner-mounted-on-a-wall-SJnak9YYFWU",
      "Illia Horokhovsky",
      "fili_ja",
    ),
  },
  {
    slug: "refrigerateur",
    nom: "Réfrigérateur",
    univers: "electromenager",
    illustration: "refrigerateur",
    ...photo(
      "photo-1629042306548-1bfb25a3ff78",
      "silver-top-mount-refrigerator-beside-white-wooden-kitchen-cabinet-4C-L6hkdpR4",
      "Zac Gudakov",
      "zacgudakov",
    ),
  },
  {
    slug: "machine-a-laver",
    nom: "Machine à laver",
    univers: "electromenager",
    illustration: "machineALaver",
    ...photo(
      "photo-1626806787461-102c1bfaaea1",
      "white-front-load-washing-machine-5cpBWEl6y6c",
      "PlanetCare",
      "planetcare",
    ),
  },
  {
    slug: "micro-ondes",
    nom: "Micro-ondes",
    univers: "electromenager",
    illustration: "microOndes",
    // Photo choisie pour qu'aucune marque ne soit lisible : une carte
    // produit qui afficherait un logo laisserait croire que ce modèle
    // précis est vendu ici (règle 8).
    ...photo(
      "photo-1693786229416-2dd310137f18",
      "a-black-and-white-photo-of-a-microwave-VeU-4x4I7Xs",
      "Quan Jing",
      "greedwolf97",
    ),
  },
  {
    slug: "cuisiniere",
    nom: "Cuisinière et four",
    univers: "electromenager",
    illustration: "cuisiniere",
    ...photo(
      "photo-1629234358103-5b5ee53ece9c",
      "black-and-silver-gas-stove-1bQSP0_iLMc",
      "Eduardo Pastor",
      "eduardopastor",
    ),
  },
  {
    slug: "ventilateur",
    nom: "Ventilateur",
    univers: "electromenager",
    illustration: "ventilateur",
    ...photo(
      "photo-1618941716939-553df3c6c278",
      "white-and-black-desk-fan-vFWciisio5g",
      "Valery Fedotov",
      "imlst",
    ),
  },
  {
    slug: "blender",
    nom: "Blender et mixeur",
    univers: "electromenager",
    illustration: "blender",
    ...photo(
      "photo-1585237672814-8f85a8118bf6",
      "clear-glass-pitcher-with-sliced-fruits-LbJ_jSAepKM",
      "Andrea Niosi",
      "aeniosi",
    ),
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
    ...photo(
      "photo-1787361253061-9552f340e076",
      "clothes-iron-on-pink-background-p6g8r7g8fu8",
      "Mrs Chimpanzeee",
      "chimp_9608",
    ),
  },

  /* ---------------------------------------------------------------
     ÉLECTRIQUE
  --------------------------------------------------------------- */
  {
    slug: "multiprise",
    nom: "Multiprise",
    univers: "electrique",
    illustration: "multiprise",
    ...photo(
      "photo-1781331534854-c75885f01c01",
      "white-power-strip-with-plugs-on-a-wooden-floor-dh4tcWXPlUc",
      "Babak Eshaghian",
      "babak22ir",
    ),
  },
  {
    slug: "rallonge",
    nom: "Rallonge",
    univers: "electrique",
    illustration: "rallonge",
    ...photo(
      "photo-1650501386688-41f6d0251875",
      "a-black-power-strip-sitting-on-top-of-a-table-Nw8bwn1Kd6o",
      "David Thielen",
      "david_thielen",
    ),
  },
  {
    slug: "prise-interrupteur",
    nom: "Prises et interrupteurs",
    univers: "electrique",
    illustration: "prise",
    ...photo(
      "photo-1581967947421-a9812e72754c",
        "white-wall-mounted-electric-switch-04E5zC6FXLg",
        "Chirayu Trivedi",
        "rc820",
    ),
  },
  {
    slug: "cable",
    nom: "Câbles",
    univers: "electrique",
    illustration: "cable",
    ...photo(
      "photo-1595756630452-736bc8ef3693",
      "black-usb-cable-on-white-table-RWxeE7wu1T8",
      "Mika Baumeister",
      "kommumikation",
    ),
  },
  {
    slug: "ampoule",
    nom: "Ampoules",
    univers: "electrique",
    illustration: "ampoule",
    ...photo(
      "photo-1674659719067-8735479ba10c",
      "a-white-light-bulb-sitting-on-top-of-a-white-table-iEDKPLfJrEo",
      "Ian Talmacs",
      "iantalmacs",
    ),
  },
  {
    slug: "eclairage-led",
    nom: "Éclairage LED",
    univers: "electrique",
    illustration: "led",
    ...photo(
      "photo-1767203330128-b4c27297f320",
      "modern-ceiling-lights-with-blue-and-white-accents-kWdDVy6UTyI",
      "Jerry Wei",
      "findway_jerry",
    ),
  },

  /* ---------------------------------------------------------------
     TECHNOLOGIE & MÉDIAS
  --------------------------------------------------------------- */
  {
    slug: "casque",
    nom: "Casques",
    univers: "technologie-medias",
    illustration: "casque",
    ...photo(
      "photo-1505740420928-5e560c06d30e",
      "flatlay-photography-of-wireless-headphones-PDX_a_82obo",
      "C D-X",
      "cdx2",
    ),
  },
  {
    slug: "ecouteurs",
    nom: "Écouteurs",
    univers: "technologie-medias",
    illustration: "ecouteurs",
    ...photo(
      "photo-1755182529034-189a6051faae",
        "white-wireless-earbuds-with-charging-case-on-gray-background-clrTR7gDRho",
        "Andrey Matveev",
        "zelebb",
    ),
  },
  {
    slug: "enceinte-bluetooth",
    nom: "Enceintes Bluetooth",
    univers: "technologie-medias",
    illustration: "enceinte",
    ...photo(
      "photo-1547052178-7f2c5a20c332",
        "oval-grey-portable-speaker-on-white-surface--WB52caEpmI",
        "Lynda Sanchez",
        "naive_eye",
    ),
  },
  {
    slug: "microphone",
    nom: "Microphones",
    univers: "technologie-medias",
    illustration: "microphone",
    ...photo(
      "photo-1590602846581-7d3eec520d07",
        "black-microphone-on-white-background-gKKB13zJ1ss",
        "Jukka Aalho",
        "jukkaaalho",
    ),
  },
  {
    slug: "ring-light",
    nom: "Ring lights",
    univers: "technologie-medias",
    illustration: "ringLight",
    ...photo(
      "photo-1780413747936-1df5c1255d9f",
        "two-white-ring-lights-on-stands-near-a-window-McNPAXmBhUY",
        "Babak Eshaghian",
        "babak22ir",
    ),
  },
  {
    slug: "trepied",
    nom: "Trépieds",
    univers: "technologie-medias",
    illustration: "trepied",
    ...photo(
      "photo-1643917368299-e70c8432c541",
        "a-tripod-with-a-camera-attached-to-it-Kob7AC4EIWA",
        "Vladislav Smigelski",
        "vladislavsmigelski",
    ),
  },
  {
    slug: "clavier",
    nom: "Claviers",
    univers: "technologie-medias",
    illustration: "clavier",
    ...photo(
      "photo-1589578228447-e1a4e481c6c8",
      "black-computer-keyboard-on-white-table-cVUPic1cbd4",
      "Martin Garrido",
      "martingarrido",
    ),
  },
  {
    slug: "souris",
    nom: "Souris",
    univers: "technologie-medias",
    illustration: "souris",
    ...photo(
      "photo-1527864550417-7fd91fc51a46",
      "closeup-photo-of-gray-and-black-cordless-mouse-ZtxED1cpB1E",
      "Oscar Ivan Esquivel Arteaga",
      "oscaresquivel",
    ),
  },
  {
    slug: "manette",
    nom: "Manettes et accessoires gaming",
    univers: "technologie-medias",
    illustration: "manette",
    ...photo(
      "photo-1552820728-8b83bb6b773f",
      "game-controller-on-wooden-surface-k4Akpt5-Sfk",
      "Alexey Savchenko",
      "alexxsvch",
    ),
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
