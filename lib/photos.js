/**
 * PHOTOS UNSPLASH — SOURCE UNIQUE
 *
 * Trois fichiers de contenu utilisent des photos : les produits, les
 * univers et les solutions numériques. Ils décrivaient chacun leur image
 * à leur façon ; tout passe désormais par `photo()` ci-dessous, donc une
 * seule forme à connaître et un seul endroit à modifier.
 *
 * LICENCE — la licence Unsplash autorise l'usage commercial sans
 * redevance. Les conditions de son API demandent en revanche de créditer
 * les auteurs : `collecterCredits()` réunit la liste, affichée sur les
 * pages concernées.
 *
 * CE QUE CES PHOTOS NE DISENT PAS — elles illustrent une catégorie ou un
 * métier, jamais un modèle précis ni une marque vendue par LE COMPTOIR
 * NUMÉRIQUE. Les pages qui les affichent portent cette mention.
 *
 * @typedef {Object} Visuel
 * @property {string} image          URL du CDN, sans paramètres de taille
 * @property {"web"|"local"|"motif"|"illustration"} imageSource
 * @property {string} imageSourceUrl Page d'origine
 * @property {{auteur: string, profil: string}} credit
 */

/**
 * Décrit une photo Unsplash.
 *
 * @param {string} id      Identifiant du fichier (`photo-…`)
 * @param {string} page    Fin de l'URL de la page Unsplash
 * @param {string} auteur  Nom affiché du photographe
 * @param {string} compte  Nom d'utilisateur Unsplash
 * @returns {Visuel}
 */
export function photo(id, page, auteur, compte) {
  return {
    image: `https://images.unsplash.com/${id}`,
    imageSource: "web",
    imageSourceUrl: `https://unsplash.com/photos/${page}`,
    credit: { auteur, profil: `https://unsplash.com/@${compte}` },
  };
}

/**
 * Décrit une photo locale (stockée dans /public/images/).
 * Aucun crédit requis pour les images locales.
 *
 * @param {string} path    Chemin relatif depuis /images/ (ex: "produits/electromenager.jpg")
 * @param {string} alt     Texte alternatif descriptif
 * @returns {Visuel}
 */
export function photoLocal(path, alt = "") {
  return {
    image: `/images/${path}`,
    imageSource: "local",
    imageSourceUrl: null,
    credit: null,
    alt,
  };
}

/**
 * Largeurs demandées au CDN. Elles couvrent la grille produits (5 colonnes
 * sur grand écran) jusqu'aux bandeaux pleine largeur.
 */
const LARGEURS = [320, 480, 640, 800, 1200, 1600];

/** Paramètres constants : format négocié, recadrage centré, qualité. */
const PARAMETRES = "auto=format&fit=crop&q=80";

/**
 * Construit `src` et `srcSet` pour une image du CDN.
 *
 * Le CDN d'Unsplash redimensionne et choisit le format (AVIF ou WebP
 * selon le navigateur) : on lui demande directement la bonne taille,
 * plutôt que de faire transiter chaque photo par notre serveur.
 *
 * @param {string} url       URL de base, avec ou sans paramètres
 * @param {number} [defaut]  Largeur du `src` de repli
 */
export function sourcesImage(url, defaut = 800) {
  const base = url.split("?")[0];
  return {
    src: `${base}?${PARAMETRES}&w=${defaut}`,
    srcSet: LARGEURS.map((w) => `${base}?${PARAMETRES}&w=${w} ${w}w`).join(", "),
  };
}

/**
 * Réunit les crédits de plusieurs listes, sans doublon et triés.
 *
 * @param {...Array<{credit?: {auteur: string, profil: string}}>} listes
 */
export function collecterCredits(...listes) {
  const entrees = listes
    .flat()
    .map((element) => element?.credit ?? element?.visuel?.credit)
    .filter(Boolean);

  return [...new Map(entrees.map((c) => [c.profil, c])).values()].sort((a, b) =>
    a.auteur.localeCompare(b.auteur, "fr"),
  );
}
