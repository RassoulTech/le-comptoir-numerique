/**
 * Motif décoratif de la couverture.
 *
 * Composition géométrique originale, inspirée du rythme de carrés du logo
 * sans le reproduire : trois cadres emboîtés (le « comptoir ») et une
 * diagonale de carrés pleins (l'aspect numérique).
 *
 * Entièrement en SVG : aucun fichier image, aucun octet téléchargé.
 * Purement décoratif, donc masqué aux lecteurs d'écran.
 */
export default function MotifMarque({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="lueur-motif" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#B08D57" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#B08D57" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cadre-motif" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C6A473" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#C6A473" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Halo doux */}
      <circle cx="200" cy="185" r="185" fill="url(#lueur-motif)" />

      {/* Cadres emboîtés */}
      <rect
        x="52"
        y="52"
        width="296"
        height="296"
        rx="34"
        stroke="url(#cadre-motif)"
        strokeWidth="1.25"
      />
      <rect
        x="94"
        y="94"
        width="212"
        height="212"
        rx="26"
        stroke="#C6A473"
        strokeOpacity="0.4"
        strokeWidth="1.25"
      />
      <rect
        x="136"
        y="136"
        width="128"
        height="128"
        rx="18"
        stroke="#F5F0E6"
        strokeOpacity="0.28"
        strokeWidth="1.25"
      />

      {/* Diagonale de carrés — écho du rythme numérique du logo */}
      <rect
        x="182"
        y="182"
        width="36"
        height="36"
        rx="9"
        fill="#B08D57"
        fillOpacity="0.9"
      />
      <rect
        x="232"
        y="146"
        width="24"
        height="24"
        rx="7"
        fill="#B08D57"
        fillOpacity="0.62"
      />
      <rect
        x="270"
        y="118"
        width="16"
        height="16"
        rx="5"
        fill="#B08D57"
        fillOpacity="0.42"
      />
      <rect
        x="298"
        y="98"
        width="10"
        height="10"
        rx="3"
        fill="#B08D57"
        fillOpacity="0.26"
      />

      {/* Contrepoint clair, en bas à gauche */}
      <rect
        x="120"
        y="248"
        width="20"
        height="20"
        rx="6"
        fill="#F5F0E6"
        fillOpacity="0.2"
      />
    </svg>
  );
}
