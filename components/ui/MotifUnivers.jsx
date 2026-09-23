/**
 * Visuel de marque d'un univers — composition vectorielle originale.
 *
 * Pourquoi pas une photo : tant que les vraies photos de l'entreprise
 * ne sont pas disponibles, afficher une image trouvée sur le Web
 * laisserait croire que ces produits précis sont vendus ici. Ces
 * compositions disent l'univers sans rien affirmer sur le catalogue.
 *
 * Elles partagent toutes le même cadre et la même palette : les cinq
 * visuels se lisent comme une seule famille. Chacune pèse quelques
 * centaines d'octets et se remplace par une photo en changeant
 * `visuel.source` dans content/univers.js, sans toucher au code.
 *
 * Ratio 4:3, identique à celui des cartes d'univers.
 */

const FOND = {
  clair: { base: "#EFE9DC", trait: "#173F35", accent: "#B08D57" },
  sombre: { base: "#1B4A3E", trait: "#F5F0E6", accent: "#C6A473" },
};

/** Compositions propres à chaque univers, dessinées dans un 400 × 300. */
function Composition({ slug, c }) {
  switch (slug) {
    // Ondes concentriques : l'écoute et la captation
    case "technologie-medias":
      return (
        <>
          {[58, 96, 134, 172].map((r, i) => (
            <circle
              key={r}
              cx="132"
              cy="150"
              r={r}
              stroke={c.trait}
              strokeOpacity={0.3 - i * 0.055}
              strokeWidth="1.5"
            />
          ))}
          <circle cx="132" cy="150" r="22" fill={c.accent} fillOpacity="0.9" />
          <circle cx="288" cy="104" r="9" fill={c.accent} fillOpacity="0.55" />
          <circle cx="322" cy="150" r="6" fill={c.accent} fillOpacity="0.35" />
          <circle cx="288" cy="196" r="9" fill={c.accent} fillOpacity="0.55" />
        </>
      );

    // Réseau de nœuds : les appareils électroniques
    case "electronique":
      return (
        <>
          <path
            d="M96 96h104v52h72M96 204h68v-56M200 204h72v-108"
            stroke={c.trait}
            strokeOpacity="0.28"
            strokeWidth="1.5"
            fill="none"
          />
          {[
            [96, 96],
            [200, 96],
            [272, 148],
            [96, 204],
            [164, 148],
            [200, 204],
            [272, 96],
          ].map(([x, y], i) => (
            <rect
              key={`${x}-${y}`}
              x={x - 9}
              y={y - 9}
              width="18"
              height="18"
              rx="5"
              fill={i % 3 === 0 ? c.accent : c.trait}
              fillOpacity={i % 3 === 0 ? 0.85 : 0.22}
            />
          ))}
        </>
      );

    // Ligne d'énergie : le courant qui traverse
    case "electrique":
      return (
        <>
          <path
            d="M72 196 152 196 196 92 244 208 288 104"
            stroke={c.accent}
            strokeOpacity="0.9"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M72 150h256"
            stroke={c.trait}
            strokeOpacity="0.16"
            strokeWidth="1.5"
          />
          {[72, 152, 244, 328].map((x) => (
            <circle
              key={x}
              cx={x}
              cy="150"
              r="5"
              fill={c.trait}
              fillOpacity="0.3"
            />
          ))}
          <circle cx="196" cy="92" r="8" fill={c.accent} fillOpacity="0.55" />
        </>
      );

    // Volumes posés : les appareils de la maison
    case "electromenager":
      return (
        <>
          <path
            d="M64 224h272"
            stroke={c.trait}
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />
          <rect
            x="92"
            y="120"
            width="76"
            height="104"
            rx="14"
            stroke={c.trait}
            strokeOpacity="0.32"
            strokeWidth="1.5"
          />
          <path
            d="M92 156h76"
            stroke={c.trait}
            strokeOpacity="0.32"
            strokeWidth="1.5"
          />
          <rect
            x="190"
            y="156"
            width="62"
            height="68"
            rx="12"
            fill={c.accent}
            fillOpacity="0.85"
          />
          <rect
            x="272"
            y="176"
            width="48"
            height="48"
            rx="11"
            stroke={c.trait}
            strokeOpacity="0.32"
            strokeWidth="1.5"
          />
          <circle cx="221" cy="190" r="9" fill={c.base} fillOpacity="0.55" />
        </>
      );

    // Cadres emboîtés et flux : les solutions construites
    case "solutions-numeriques":
    default:
      return (
        <>
          <rect
            x="88"
            y="72"
            width="224"
            height="156"
            rx="22"
            stroke={c.trait}
            strokeOpacity="0.3"
            strokeWidth="1.5"
          />
          <rect
            x="124"
            y="104"
            width="152"
            height="92"
            rx="16"
            stroke={c.trait}
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M88 112h224"
            stroke={c.trait}
            strokeOpacity="0.22"
            strokeWidth="1.5"
          />
          <circle cx="110" cy="92" r="4.5" fill={c.accent} fillOpacity="0.75" />
          <circle cx="126" cy="92" r="4.5" fill={c.trait} fillOpacity="0.28" />
          <rect
            x="160"
            y="134"
            width="80"
            height="32"
            rx="10"
            fill={c.accent}
            fillOpacity="0.85"
          />
        </>
      );
  }
}

/**
 * @param {Object} props
 * @param {string} props.slug     Identifiant de l'univers
 * @param {boolean} [props.sombre] Variante sur fond vert forêt
 */
export default function MotifUnivers({ slug, sombre = false, className = "" }) {
  const c = sombre ? FOND.sombre : FOND.clair;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={c.base} />
      {/* Halo doux, pour éviter l'effet « dessin posé sur un aplat » */}
      <ellipse
        cx="200"
        cy="140"
        rx="190"
        ry="150"
        fill={c.accent}
        fillOpacity={sombre ? 0.1 : 0.07}
      />
      <Composition slug={slug} c={c} />
    </svg>
  );
}
