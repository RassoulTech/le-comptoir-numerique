/**
 * Jeu d'icônes du site — SVG en ligne, tracé simple.
 *
 * Aucune librairie d'icônes n'est installée : ces tracés pèsent
 * quelques centaines d'octets au total et héritent de la couleur du texte.
 */

const TRACES = {
  // Écouteurs intra-auriculaires — distinct du casque arceau ci-dessous.
  audio: (
    <>
      <path d="M8 3.5v9.5M16 3.5v9.5" />
      <ellipse cx="5.6" cy="16" rx="3.1" ry="4" />
      <ellipse cx="18.4" cy="16" rx="3.1" ry="4" />
      <path d="M8 6.5 5.6 12M16 6.5l2.4 5.5" />
    </>
  ),
  casque: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <path d="M4 15h3v5H5.5A1.5 1.5 0 0 1 4 18.5V15Z" />
      <path d="M20 15h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V15Z" />
    </>
  ),
  bluetooth: <path d="m7.5 7.5 9 9L12 21V3l4.5 4.5-9 9" />,
  // Prise électrique — univers Électrique
  electrique: (
    <>
      <path d="M9 2.5v5M15 2.5v5" />
      <path d="M6 7.5h12v3a6 6 0 0 1-12 0v-3Z" />
      <path d="M12 16.5v5" />
    </>
  ),
  // Appareil domestique — univers Électroménager
  electromenager: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path d="M5 9.5h14" />
      <path d="M8.5 5.5v2M8.5 12.5v3" />
    </>
  ),
  telephone: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  protection: (
    <path d="M12 2.8 4.5 6v6.2c0 4.3 3.1 7.7 7.5 9 4.4-1.3 7.5-4.7 7.5-9V6L12 2.8Z" />
  ),
  micro: (
    <>
      <rect x="9" y="2.5" width="6" height="11" rx="3" />
      <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3.5M8.5 21.5h7" />
    </>
  ),
  trepied: (
    <>
      <rect x="7" y="2.5" width="10" height="6.5" rx="1.5" />
      <path d="M12 9v4m0 0-4.5 8.5M12 13l4.5 8.5M12 13v8.5" />
    </>
  ),
  accessoires: (
    <>
      <rect x="2.8" y="2.8" width="7.4" height="7.4" rx="1.6" />
      <rect x="13.8" y="2.8" width="7.4" height="7.4" rx="1.6" />
      <rect x="2.8" y="13.8" width="7.4" height="7.4" rx="1.6" />
      <rect x="13.8" y="13.8" width="7.4" height="7.4" rx="1.6" />
    </>
  ),
  web: (
    <>
      <rect x="2.5" y="4" width="19" height="15" rx="2.5" />
      <path d="M2.5 9h19M6 6.5h.01M8.5 6.5h.01" />
    </>
  ),
  application: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <path d="M9.5 6.5h5M9.5 10h5M9.5 13.5h3" />
    </>
  ),
  gestion: <path d="M3.5 20.5V10m5.5 10.5V4m5.5 16.5v-7m5.5 7V7" />,
  automatisation: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </>
  ),
  marketing: (
    <>
      <path d="M3.5 9.5v5a1.5 1.5 0 0 0 1.5 1.5h2l7 4.5V5L7 9.5H5a1.5 1.5 0 0 0-1.5 1.5Z" />
      <path d="M17.5 9a4.5 4.5 0 0 1 0 6" />
    </>
  ),
  entreprise: (
    <>
      <path d="M3.5 21.5V6.5L11 3v18.5M11 21.5h9.5V10L11 8" />
      <path d="M6.5 9.5h1M6.5 13h1M6.5 16.5h1M14.5 12.5h2M14.5 16.5h2" />
    </>
  ),
  accompagnement: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M4.5 21.5a7.5 7.5 0 0 1 15 0" />
    </>
  ),
  formation: (
    <path d="M12 3.5 2.5 8.5 12 13.5l9.5-5L12 3.5ZM6.5 11v5.5c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V11" />
  ),
  // --- Services numériques : intervention sur les outils du client ---
  installation: (
    <>
      <path d="M12 3v10m0 0 3.5-3.5M12 13l-3.5-3.5" />
      <path d="M3.5 15.5v3A2.5 2.5 0 0 0 6 21h12a2.5 2.5 0 0 0 2.5-2.5v-3" />
    </>
  ),
  configuration: (
    <>
      <path d="M3.5 7.5h9M17.5 7.5h3M3.5 16.5h3M11.5 16.5h9" />
      <circle cx="15" cy="7.5" r="2.4" />
      <circle cx="9" cy="16.5" r="2.4" />
    </>
  ),
  assistance: (
    <>
      <path d="M4.5 14v-2.5a7.5 7.5 0 0 1 15 0V14" />
      <path d="M4.5 14H7v4.5H6A1.5 1.5 0 0 1 4.5 17V14Z" />
      <path d="M19.5 14H17v4.5h1a1.5 1.5 0 0 0 1.5-1.5V14Z" />
      <path d="M19.5 18.5a3 3 0 0 1-3 3H13" />
    </>
  ),
  bureautique: (
    <>
      <path d="M13.5 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5.5-5.5Z" />
      <path d="M13.5 2.5V8H19" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </>
  ),
  creation: (
    <>
      <path d="m3.5 20.5 3-1 11-11a2.1 2.1 0 0 0-3-3l-11 11-1 3Z" />
      <path d="m14 5.5 4.5 4.5" />
    </>
  ),
  fleche: <path d="M4.5 12h15m0 0-6-6m6 6-6 6" />,
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.3A9 9 0 1 0 12 3Zm4.6 12.3c-.2.6-1.1 1.1-1.6 1.1-.4 0-.9.2-3.1-.8-2.6-1.2-4.2-4-4.4-4.2-.1-.2-1-1.4-1-2.6s.6-1.8.9-2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 2 1.1.9 2 1.2 2.3 1.4.2.1.4 0 .5-.1l.7-.9c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3.1.2.1.7-.1 1.2Z" />
  ),
  telephoneAppel: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6L16.5 13l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  email: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  localisation: (
    <>
      <path d="M12 21.5s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  horloge: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.3 2" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fermer: <path d="m6 6 12 12M18 6 6 18" />,
   
  /* --- Réseaux sociaux --- */
  facebook: (
    <path d="M19 3a7 7 0 0 0-7 7v7h-4v-7a7 7 0 0 0-7-7m7 18v-7h4v7M12 3a9 9 0 0 0-9 9v8h3v-8a6 6 0 0 1 12 0v8h3v-8a9 9 0 0 0-9-9" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="16.5" cy="7.5" r="1" />
    </>
  ),
  tiktok: (
    <>
      <path d="M16.5 5.5v8a4 4 0 1 1-4-4" />
      <path d="M9.5 2.5v8a4 4 0 0 0 4 4v0" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <path d="M7.5 9.5h3v7.5M7.5 7.5h3v7.5M9 5.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM13.5 9.5a3 3 0 0 1 5.5 2v5.5" />
    </>
  ),
};

/**
 * @param {{ nom: keyof typeof TRACES, className?: string }} props
 */
export default function Icone({ nom, className = "size-6" }) {
  const trace = TRACES[nom];
  if (!trace) return null;

  // La flèche porte toujours la classe `fleche` : le design system la fait
  // avancer au survol de l'action qui la contient, sans rien à déclarer.
  const classes = nom === "fleche" ? `fleche ${className}` : className;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
      aria-hidden="true"
      focusable="false"
    >
      {trace}
    </svg>
  );
}
