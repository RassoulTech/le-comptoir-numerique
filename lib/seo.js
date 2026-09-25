import { entreprise, siteUrl } from "@/content/entreprise";

/**
 * Construit les métadonnées d'une page (titre, description, canonique,
 * Open Graph). Chaque page appelle cette fonction pour rester cohérente.
 *
 * @param {Object} options
 * @param {string} options.titre       Titre propre à la page
 * @param {string} options.description 155 caractères maximum, sinon Google tronque
 * @param {string} options.chemin      Chemin de la page, ex. "/produits"
 * @param {boolean} [options.titreComplet]
 *   La page d'accueil partage le segment du layout racine : le modèle
 *   de titre « %s | Le Comptoir Numérique » ne s'y applique pas.
 *   Passer `true` indique que le titre contient déjà la marque.
 */
export function metadonnees({
  titre,
  description,
  chemin = "/",
  titreComplet = false,
}) {
  const url = new URL(chemin, siteUrl).toString();

  return {
    title: titreComplet ? { absolute: titre } : titre,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: titreComplet ? titre : `${titre} | ${entreprise.nomAffiche}`,
      description,
      url,
      siteName: entreprise.nomAffiche,
      locale: "fr_SN",
      type: "website",
      images: [
        {
          url: "/images/og-comptoir-numerique.jpg",
          width: 1200,
          height: 630,
          alt: `Logo ${entreprise.nomAffiche}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titreComplet ? titre : `${titre} | ${entreprise.nomAffiche}`,
      description,
      images: ["/images/og-comptoir-numerique.jpg"],
    },
  };
}

/**
 * Données structurées de l'entreprise (schema.org).
 * Aide les moteurs de recherche à identifier l'activité et la localisation.
 * Les champs encore vides sont volontairement omis plutôt qu'inventés.
 */
export function donneesStructurees() {
  const donnees = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: entreprise.nom,
    description: entreprise.positionnement,
    url: siteUrl,
    image: new URL("/images/og-comptoir-numerique.jpg", siteUrl).toString(),
    // Les deux pôles, chacun avec son numéro : les moteurs de recherche
    // peuvent afficher les deux lignes téléphoniques.
    telephone: entreprise.poles.produits.telephone.affichage,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: entreprise.poles.produits.telephone.affichage,
        contactType: "sales",
        areaServed: "SN",
        availableLanguage: ["fr", "wo"],
        name: entreprise.poles.produits.nom,
      },
      {
        "@type": "ContactPoint",
        telephone: entreprise.poles.solutions.telephone.affichage,
        contactType: "customer support",
        areaServed: "SN",
        availableLanguage: ["fr", "wo"],
        name: entreprise.poles.solutions.nom,
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: entreprise.adresse.ville,
      addressCountry: "SN",
    },
  };

  if (!entreprise.email.aDefinir) {
    donnees.email = entreprise.email.valeur;
  }

  const reseauxDefinis = entreprise.reseaux
    .filter((r) => r.url)
    .map((r) => r.url);
  if (reseauxDefinis.length > 0) {
    donnees.sameAs = reseauxDefinis;
  }

  return donnees;
}
