import { siteUrl } from "@/content/entreprise";
import { liensNavigation, lienDevis } from "@/lib/navigation";
import { solutions } from "@/content/prestations";
import { universProduits } from "@/content/univers";

/**
 * Plan du site généré automatiquement : navigation principale, action de
 * devis, pages détail des solutions numériques et pages catégorie
 * produits. Les pages redirigées ou hors navigation (ex. /services qui
 * renvoie vers /solutions-numeriques, /realisations en cours de
 * constitution) ne sont volontairement pas référencées.
 * Disponible sur /sitemap.xml
 */
export default function sitemap() {
  const maintenant = new Date();

  const entrees = [
    { href: "/", priorite: 1, frequence: "weekly" },
    { href: lienDevis.href, priorite: 0.9, frequence: "monthly" },
    { href: "/produits", priorite: 0.8, frequence: "weekly" },
    { href: "/solutions-numeriques", priorite: 0.8, frequence: "monthly" },
    { href: "/a-propos", priorite: 0.6, frequence: "monthly" },
    { href: "/contact", priorite: 0.7, frequence: "monthly" },

    ...solutions.map((s) => ({
      href: `/solutions/${s.slug}`,
      priorite: 0.7,
      frequence: "monthly",
    })),

    ...universProduits.map((u) => ({
      href: `/produits/${u.slug}`,
      priorite: 0.7,
      frequence: "weekly",
    })),
  ];

  return entrees.map(({ href, priorite, frequence }) => ({
    url: new URL(href, siteUrl).toString(),
    lastModified: maintenant,
    changeFrequency: frequence,
    priority: priorite,
  }));
}