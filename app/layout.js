import localFont from "next/font/local";
import "./globals.css";
import Entete from "@/components/layout/Entete";
import PiedDePage from "@/components/layout/PiedDePage";
import BarreActionMobile from "@/components/layout/BarreActionMobile";
import { entreprise, siteUrl } from "@/content/entreprise";
import { donneesStructurees } from "@/lib/seo";

/**
 * Manrope, auto-hébergée et réduite au strict nécessaire.
 *
 * Choisie pour son dessin plus rond et plus chaleureux que les
 * grotesques techniques, tout en restant parfaitement lisible sur
 * petit écran — le premier support du site.
 *
 * Le fichier ne contient que l'alphabet latin, les accents français et
 * la ponctuation typographique : 22 Ko pour toutes les graisses de 200
 * à 800. Servi depuis notre domaine, sans appel à Google Fonts.
 *
 * `display: swap` affiche immédiatement le texte avec la police système
 * puis bascule : rien n'est invisible pendant le chargement.
 */
const policeManrope = localFont({
  src: "../public/fonts/manrope-latin-variable.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
  preload: true,
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${entreprise.nomAffiche} — ${entreprise.positionnement}`,
    template: `%s | ${entreprise.nomAffiche}`,
  },
  description:
    "Le Comptoir Numérique distribue des équipements technologiques à Thiès et accompagne les entreprises dans leurs projets numériques : sites web, applications, automatisation et systèmes de gestion.",
  applicationName: entreprise.nomAffiche,
  authors: [{ name: entreprise.nomAffiche }],
  robots: { index: true, follow: true },
  // Les icônes (app/favicon.ico, app/apple-icon.png) sont détectées
  // automatiquement par Next.js : rien à déclarer ici.
};

export const viewport = {
  themeColor: "#173F35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${policeManrope.variable} h-full antialiased`}
      /*
        Le script ci-dessous ajoute la classe `js` avant l'hydratation :
        le HTML côté client diffère donc volontairement de celui du
        serveur, et React signalerait une incohérence. C'est exactement
        le cas que `suppressHydrationWarning` est prévu pour couvrir —
        il ne porte que sur les attributs de cette balise.
      */
      suppressHydrationWarning
    >
      <head>
        {/*
          Marque la page comme « JavaScript actif », avant le premier rendu.
          Les styles d'apparition au défilement ne s'appliquent que sous
          cette classe : sans JavaScript, aucun contenu n'est masqué.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        {/* Accès rapide au contenu pour la navigation au clavier */}
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-action focus:bg-foret focus:px-5 focus:py-3 focus:text-petit focus:font-semibold focus:text-ivoire"
        >
          Aller au contenu principal
        </a>

        <Entete />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <PiedDePage />
        <BarreActionMobile />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(donneesStructurees()),
          }}
        />
      </body>
    </html>
  );
}
