import { siteUrl } from "@/content/entreprise";
import { liensNavigation, lienDevis } from "@/lib/navigation";

/**
 * Plan du site généré automatiquement à partir de la navigation.
 * Ajouter une page à lib/navigation.js suffit à la référencer ici.
 * Disponible sur /sitemap.xml
 */
export default function sitemap() {
  const maintenant = new Date();

  const priorites = {
    "/": 1,
    "/devis": 0.9,
    "/produits": 0.8,
    "/services": 0.8,
    "/contact": 0.7,
    "/a-propos": 0.6,
    "/realisations": 0.6,
  };

  return [...liensNavigation, lienDevis].map((lien) => ({
    url: new URL(lien.href, siteUrl).toString(),
    lastModified: maintenant,
    changeFrequency: lien.href === "/" ? "weekly" : "monthly",
    priority: priorites[lien.href] ?? 0.5,
  }));
}
