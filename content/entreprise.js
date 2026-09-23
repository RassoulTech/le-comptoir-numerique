/**
 * INFORMATIONS DE L'ENTREPRISE — SOURCE UNIQUE DE VÉRITÉ
 *
 * Tout le site lit ses coordonnées ici. Pour mettre à jour une information
 * sur l'ensemble des pages, il suffit de modifier ce fichier.
 *
 * Les valeurs marquées `aDefinir: true` sont des PLACEHOLDERS : elles
 * s'affichent visuellement comme telles sur le site tant qu'elles ne sont
 * pas renseignées. Remplacer la valeur ET passer `aDefinir` à `false`.
 */

export const entreprise = {
  nom: "LE COMPTOIR NUMÉRIQUE",
  nomAffiche: "Le Comptoir Numérique",

  /** Signature officielle de la marque. */
  signature: "Le numérique à portée de main.",

  /** Phrase de positionnement, reprise dans les balises SEO. */
  positionnement:
    "Produits électroniques, électriques, électroménagers et solutions numériques à Thiès, Sénégal.",

  /* --- Téléphone (confirmé) --- */
  telephone: {
    affichage: "+221 77 591 94 73",
    lien: "tel:+221775919473",
    aDefinir: false,
  },

  /* --- WhatsApp (même numéro que le téléphone) --- */
  whatsapp: {
    numero: "221775919473",
    affichage: "+221 77 591 94 73",
    messagePreRempli:
      "Bonjour, je vous contacte depuis le site du Comptoir Numérique.",
    groupeUrl: "https://chat.whatsapp.com/IqPWFPuKjGIKmzKtGlMvgM?mode=gi_t",
    aDefinir: false,
  },

  /* --- Email (à fournir) --- */
  email: {
    valeur: "digigeek221@gmail.com",
    affichage: "digigeek221@gmail.com",
    horaires: "09h - 22h",
    aDefinir: false,
  },

  /* --- Adresse (ville confirmée, précision à fournir) --- */
  adresse: {
    ville: "Thiès",
    pays: "Sénégal",
    complete: "Thiès, Sénégal",
    precision: "[Quartier / Rue]",
    precisionADefinir: true,
    /** Passer à une URL Google Maps quand l'adresse exacte sera connue. */
    lienCarte: null,
  },

  /* --- Horaires (à fournir) --- */
  horaires: {
    lignes: [{ jours: "Lundi - Dimanche", heures: "09h - 22h" }],
    aDefinir: false,
  },

  /* --- Réseaux sociaux (URLs à fournir) --- */
  reseaux: [
    { nom: "Facebook", icone: "facebook", url: null, aDefinir: true },
    { nom: "Instagram", icone: "instagram", url: null, aDefinir: true },
    { nom: "TikTok", icone: "tiktok", url: null, aDefinir: true },
    { nom: "LinkedIn", icone: "linkedin", url: null, aDefinir: true },
  ],

  /* --- Mentions légales (à fournir) --- */
  legal: {
    raisonSociale: "[Raison sociale]",
    ninea: "[NINEA]",
    rccm: "[RCCM]",
    aDefinir: true,
  },
};

/**
 * URL publique du site. Sert aux balises canoniques, à l'Open Graph
 * et au sitemap. À définir dans .env.local quand le domaine sera choisi :
 * NEXT_PUBLIC_SITE_URL=https://mondomaine.sn
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Construit un lien WhatsApp avec un message pré-rempli. */
export function lienWhatsApp(message) {
  const texte = message ?? entreprise.whatsapp.messagePreRempli;
  return `https://wa.me/${entreprise.whatsapp.numero}?text=${encodeURIComponent(texte)}`;
}

/** Retourne l'URL du groupe WhatsApp. */
export function lienGroupeWhatsApp() {
  return entreprise.whatsapp.groupeUrl;
}
