import { siteUrl } from "@/content/entreprise";

/**
 * Fichier robots.txt généré par Next.js. Disponible sur /robots.txt
 *
 * Le site vitrine est entièrement public. Les espaces des phases
 * suivantes (/admin, /compte, /dashboard) seront exclus ici lorsqu'ils
 * existeront — ils sont déjà listés pour ne pas être oubliés.
 */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/compte", "/dashboard", "/api/"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
