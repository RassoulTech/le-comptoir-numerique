/**
 * VISITE CINÉMATIQUE — MANIFEST DE LA PARCOURS
 *
 * Structure conforme au brief (§8 parcours caméra, §9 visual story) :
 * la homepage raconte une visite — arrivée, traversée de l'espace
 * produits, transition, découverte des solutions, sortie, révélation du
 * bâtiment, appel final.
 *
 * ÉTAT DE LA PRODUCTION :
 * L'expérience publiée aujourd'hui est une visite à CHAPITRES (§22) :
 * séquences d'images, transitions et textes — lisible, rapide, et
 * fonctionnelle sur mobile. Le fly-through vidéo FPV reste À PRODUIRE :
 * aucun outil de génération (Higgsfield MCP) n'est disponible dans cet
 * environnement, et le brief interdit de en promettre un sans l'outil.
 *
 * Chaque scène porte donc :
 *   - son contenu affiché (texte, visuel actuel, CTA) ;
 *   - `aGenerer` : ce qui reste à produire, clairement identifié ;
 *   - `prompt` : le prompt FPV prêt à l'emploi pour la génération, en
 *     anglais (mieux compris par les modèles vidéo). Règle du brief §10 :
 *     ne JAMAIS utiliser « drone », « quadcopter » ou « UAV ». Décrire :
 *     « un seul mouvement continu de caméra en vue subjective, sans
 *     coupe ; la caméra elle-même vole ; rien ne vole ou ne flotte
 *     n'est visible dans le cadre » — en anglais :
 *     « one single continuous first-person camera move, no cuts; the
 *     camera itself flies; nothing flies or floats in the frame ».
 *
 * IMAGES PLACEHOLDER (§38) : les scènes marquées `placeholder: true`
 * affichent un cadre identifiable en attendant les photos réelles de la
 * boutique (façade, intérieur). Ne rien inventer à la place.
 *
 * MAINTENABILITÉ (§26) : modifier un texte, un visuel ou un CTA ici ne
 * demande aucun changement de composant. <VisiteCinematique /> lit ce
 * fichier et rend les scènes dans l'ordre du tableau.
 *
 * @typedef {Object} Scene
 * @property {string}  id          Identifiant stable (ancre, clé React)
 * @property {string}  numero      Numéro affiché ("01"…)
 * @property {string}  intitule    Étape du parcours ("Arrivée"…)
 * @property {string}  titre       Message principal affiché
 * @property {string}  [texte]     Soutien éditorial
 * @property {{type:"photos", images:string[], alt:string}|{type:"placeholder", libelle:string}|{type:"plein"}} visuel
 * @property {{libelle:string, href:string}[]} [ctas]
 * @property {boolean} [placeholder] Visuel provisoire, à remplacer
 * @property {boolean} [aGenerer]  Clip vidéo FPV à produire
 * @property {string}  [prompt]    Prompt FPV pour la génération vidéo
 */

/** @type {Scene[]} */
export const scenes = [
  {
    id: "arrivee",
    numero: "01",
    intitule: "Arrivée",
    titre: "LE COMPTOIR NUMÉRIQUE",
    texte: "« Le numérique à portée de main. »",
    visuel: {
      type: "placeholder",
      libelle: "[Photo à venir : arrivée devant la boutique, Thiès]",
    },
    placeholder: true,
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: eye-level approach along the street towards the shopfront of a modern electronics and technology store in Thies, Senegal, warm afternoon light, ivory and forest-green signage, steady walking pace, the camera itself flies, nothing flies or floats in the frame, consistent people and vehicles, no cuts, no teleporting.",
  },
  {
    id: "espace-produits",
    numero: "02",
    intitule: "Espace produits",
    titre: "Des produits pour votre quotidien.",
    texte:
      "Électronique, électrique, électroménager, technologie & médias : quatre catégories pensées pour les particuliers, les professionnels et les entreprises.",
    visuel: {
      type: "photos",
      images: [
        "/images/produits/electronique.jpg",
        "/images/produits/electrique.jpg",
        "/images/produits/electromenager.jpg",
        "/images/produits/audio-video.jpg",
      ],
      alt: "Quatre familles de produits de la boutique : électronique, électrique, électroménager, technologie et médias",
    },
    ctas: [
      { libelle: "Découvrir nos produits", href: "/produits" },
      { libelle: "Découvrir nos solutions", href: "/solutions-numeriques" },
    ],
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: entering the store, drifting along the product shelves, close passes over electronics, electrical fittings, home appliances and audio gear on the displays, gentle lateral drift and small yaw, warm interior lighting, the camera itself flies, nothing flies or floats in the frame, consistent products and furniture, no cuts.",
  },
  {
    id: "transition",
    numero: "—",
    intitule: "Transition",
    titre: "Du matériel… aux solutions.",
    texte:
      "Au-delà des rayons, un autre métier : concevoir les outils numériques qui font avancer votre activité.",
    visuel: { type: "plein" },
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: passing through an interior doorway from the retail floor towards the workspace area, brief natural darkening as the camera crosses the door frame, then opening onto the workspace, the camera itself flies, nothing flies or floats in the frame, no cuts.",
  },
  {
    id: "solutions",
    numero: "03",
    intitule: "Solutions numériques",
    titre: "Des solutions numériques pensées pour vos projets.",
    texte:
      "Sites web, applications web, logiciels de gestion, automatisation, marketing digital, référencement, conseil : sept offres, un seul interlocuteur.",
    visuel: {
      type: "photos",
      images: ["/images/services/creation-sites-web.jpg"],
      alt: "Site web professionnel affiché sur un ordinateur portable",
    },
    ctas: [{ libelle: "Voir les solutions", href: "/solutions-numeriques" }],
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: gliding through the workspace where screens show websites and dashboards being built, slow S-curve between desks, screens displaying clean interfaces, the camera itself flies, nothing flies or floats in the frame, consistent people working, no cuts.",
  },
  {
    id: "savoir-faire",
    numero: "04",
    intitule: "Savoir-faire",
    titre: "Construire, installer, accompagner.",
    texte:
      "Nous équipons votre quotidien et nous construisons vos outils : deux pôles, la même exigence de service.",
    visuel: {
      type: "photos",
      images: ["/images/services/developpement-applications.jpg"],
      alt: "Application web en cours de développement sur écran",
    },
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: slow pass over the working desks, close-up drift across a screen with code and a product interface, then pulling back gently along the room, the camera itself flies, nothing flies or floats in the frame, consistent furniture and people, no cuts.",
  },
  {
    id: "sortie",
    numero: "05",
    intitule: "Sortie",
    titre: "La visite se termine, le contact continue.",
    texte: "La caméra ressort réellement du bâtiment.",
    visuel: {
      type: "placeholder",
      libelle: "[Photo à venir : sortie et façade de la boutique]",
    },
    placeholder: true,
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: turning back towards the entrance and exiting through the door, crossing back into the daylight, the camera itself flies, nothing flies or floats in the frame, consistent street activity, no cuts.",
  },
  {
    id: "revelation",
    numero: "06",
    intitule: "Révélation",
    titre: "Le Comptoir Numérique, à Thiès.",
    texte:
      "Rotation, recul et montée : le bâtiment révélé dans son environnement.",
    visuel: {
      type: "placeholder",
      libelle: "[Photo à venir : révélation du bâtiment et de son environnement]",
    },
    placeholder: true,
    aGenerer: true,
    prompt:
      "One single continuous first-person camera move, no cuts: after exiting, a slow realistic yaw rotation, then moving backwards and rising gently to reveal the building and its surroundings in Thies, Senegal, golden hour light, the camera itself flies, nothing flies or floats in the frame, consistent architecture and street, no cuts.",
  },
  {
    id: "cta-final",
    numero: "07",
    intitule: "Contact",
    titre: "Le numérique à portée de main.",
    texte: "www.comptoirnumerique.net — Thiès, Sénégal",
    visuel: { type: "plein" },
    ctas: [
      { libelle: "Pôle Produits — 77 591 94 73", href: "tel:+221775919473" },
      {
        libelle: "Pôle Solutions — 77 383 13 64",
        href: "tel:+221773831364",
      },
    ],
    aGenerer: false,
  },
];

/** Liste plate des images utilisées par la visite (préchargement ciblé). */
export function imagesDeLaVisite() {
  return scenes
    .filter((s) => s.visuel?.type === "photos")
    .flatMap((s) => s.visuel.images);
}