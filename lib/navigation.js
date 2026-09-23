/**
 * Navigation principale du site — source unique.
 * L'en-tête, le pied de page et le plan du site lisent cette liste.
 *
 * Les futures sections (/boutique, /compte, /admin) auront leur propre
 * liste dans un fichier séparé : la navigation vitrine ne changera pas.
 */
export const liensNavigation = [
  { libelle: "Accueil", href: "/" },
  { libelle: "À propos", href: "/a-propos" },
  { libelle: "Produits", href: "/produits" },
  { libelle: "Services", href: "/services" },
  { libelle: "Réalisations", href: "/realisations" },
  { libelle: "Contact", href: "/contact" },
];

/** Action principale, mise en avant séparément dans l'en-tête. */
export const lienDevis = { libelle: "Demander un devis", href: "/devis" };
