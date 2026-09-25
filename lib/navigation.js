/**
 * Navigation principale du site — source unique.
 * L'en-tête, le pied de page et le plan du site lisent cette liste.
 *
 * Structure conforme au brief : Accueil · Produits · Solutions numériques ·
 * À propos · Contact. La demande de devis reste une action mise en avant
 * séparément (formulaire réel avec server action), pas une entrée de menu :
 * elle est répétée dans l'en-tête, les CTA et le pied de page.
 */
export const liensNavigation = [
  { libelle: "Accueil", href: "/" },
  { libelle: "Produits", href: "/produits" },
  { libelle: "Solutions numériques", href: "/solutions-numeriques" },
  { libelle: "À propos", href: "/a-propos" },
  { libelle: "Contact", href: "/contact" },
];

/** Action principale, mise en avant séparément dans l'en-tête. */
export const lienDevis = { libelle: "Demander un devis", href: "/devis" };