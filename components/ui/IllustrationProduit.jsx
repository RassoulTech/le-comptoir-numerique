/**
 * Illustrations produits — dessins vectoriels de marque.
 *
 * Pourquoi des dessins plutôt que des photographies : les photos de
 * produits trouvées sur le Web appartiennent aux fabricants et aux
 * distributeurs. Les poser sur un site commercial sans licence est une
 * contrefaçon. Ces illustrations sont originales, libres d'usage, pèsent
 * quelques centaines d'octets et se remplacent par les photos officielles
 * des fournisseurs sans toucher au code (voir content/produits.js).
 *
 * Toutes sont dessinées dans le même cadre 200 × 150 (ratio 4:3), avec la
 * même épaisseur de trait et la même palette : c'est ce qui fait qu'un
 * catalogue de vingt-quatre dessins se lit comme une seule collection.
 */

const T = "#173F35"; // trait — vert forêt
const A = "#B08D57"; // accent — bronze
const S = "#FBF8F2"; // surface — ivoire clair
const F = "#173F35"; // aplat sourd (utilisé avec une opacité)

/* Réglages communs à tous les tracés. */
const TRAIT = {
  stroke: T,
  strokeWidth: 2.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const DESSINS = {
  /* ---------------- ÉLECTROMÉNAGER ---------------- */

  climatiseur: (
    <>
      <rect x="40" y="42" width="120" height="40" rx="10" fill={S} {...TRAIT} />
      <path d="M40 66h120" {...TRAIT} />
      <path
        d="M52 74h84M52 58h60"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="146" cy="53" r="3.5" fill={A} />
      <path d="M70 96q10 10 20 0t20 0" {...TRAIT} strokeWidth="2" />
      <path
        d="M78 110q10 10 20 0t20 0"
        {...TRAIT}
        strokeWidth="2"
        opacity="0.55"
      />
    </>
  ),

  refrigerateur: (
    <>
      <rect x="66" y="22" width="68" height="106" rx="10" fill={S} {...TRAIT} />
      <path d="M66 62h68" {...TRAIT} />
      <path
        d="M122 40v14M122 72v18"
        stroke={A}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <rect
        x="78"
        y="78"
        width="18"
        height="4"
        rx="2"
        fill={F}
        opacity="0.18"
      />
    </>
  ),

  machineALaver: (
    <>
      <rect x="60" y="26" width="80" height="100" rx="10" fill={S} {...TRAIT} />
      <path d="M60 48h80" {...TRAIT} />
      <circle cx="100" cy="88" r="26" fill="none" {...TRAIT} />
      <circle
        cx="100"
        cy="88"
        r="17"
        fill={F}
        fillOpacity="0.1"
        stroke={A}
        strokeWidth="2.5"
      />
      <circle cx="124" cy="37" r="4" fill={A} />
      <path d="M72 37h22" stroke={T} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  microOndes: (
    <>
      <rect x="34" y="46" width="132" height="62" rx="9" fill={S} {...TRAIT} />
      <rect
        x="44"
        y="56"
        width="82"
        height="42"
        rx="5"
        fill={F}
        fillOpacity="0.1"
        {...TRAIT}
        strokeWidth="2"
      />
      <path
        d="M136 58h20M136 68h20"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="146" cy="88" r="7" fill="none" {...TRAIT} strokeWidth="2" />
    </>
  ),

  cuisiniere: (
    <>
      <rect x="52" y="52" width="96" height="76" rx="9" fill={S} {...TRAIT} />
      <path d="M52 74h96" {...TRAIT} />
      <rect
        x="66"
        y="86"
        width="68"
        height="30"
        rx="5"
        fill={F}
        fillOpacity="0.1"
        {...TRAIT}
        strokeWidth="2"
      />
      {/* Feux */}
      <circle cx="72" cy="40" r="9" fill="none" {...TRAIT} strokeWidth="2" />
      <circle cx="100" cy="40" r="9" fill="none" {...TRAIT} strokeWidth="2" />
      <circle cx="128" cy="40" r="9" fill={A} fillOpacity="0.9" />
      <path d="M52 52h96" {...TRAIT} />
    </>
  ),

  ventilateur: (
    <>
      <circle cx="100" cy="58" r="36" fill={S} {...TRAIT} />
      <circle
        cx="100"
        cy="58"
        r="27"
        fill="none"
        {...TRAIT}
        strokeWidth="1.5"
        opacity="0.35"
      />
      {[0, 120, 240].map((angle) => (
        <path
          key={angle}
          d="M100 58q4-26 22-22t-22 22Z"
          fill={A}
          fillOpacity="0.9"
          stroke="none"
          transform={`rotate(${angle} 100 58)`}
        />
      ))}
      <circle cx="100" cy="58" r="7" fill={S} {...TRAIT} strokeWidth="2" />
      <path d="M100 94v24M80 130h40" {...TRAIT} />
      <path d="M84 130q16-12 32 0" fill={S} {...TRAIT} />
    </>
  ),

  blender: (
    <>
      <rect x="76" y="20" width="48" height="10" rx="4" fill={S} {...TRAIT} />
      <path d="M80 30h40l-7 54H87Z" fill={S} {...TRAIT} />
      <path d="M124 38q10 6 0 14" fill="none" {...TRAIT} strokeWidth="2" />
      <path
        d="M94 70h12M100 62v8"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M84 84h32a6 6 0 0 1 6 6v22a8 8 0 0 1-8 8H86a8 8 0 0 1-8-8V90a6 6 0 0 1 6-6Z"
        fill={F}
        fillOpacity="0.12"
        {...TRAIT}
      />
      <circle cx="112" cy="104" r="5" fill={A} />
      <path d="M86 100h14" stroke={T} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  airFryer: (
    <>
      <path
        d="M62 36h76a8 8 0 0 1 8 8v70a10 10 0 0 1-10 10H64a10 10 0 0 1-10-10V44a8 8 0 0 1 8-8Z"
        fill={S}
        {...TRAIT}
      />
      <path d="M54 82h92" {...TRAIT} />
      <rect x="80" y="94" width="40" height="6" rx="3" fill={A} />
      <circle cx="128" cy="60" r="8" fill="none" {...TRAIT} strokeWidth="2" />
      <path d="M68 56h34" stroke={A} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  ferARepasser: (
    <>
      <path
        d="M46 104h96a0 0 0 0 1 0 0 8 8 0 0 1-8 8H54a8 8 0 0 1-8-8Z"
        fill={A}
        fillOpacity="0.9"
        stroke="none"
      />
      <path
        d="M46 104q6-40 46-40h34a16 16 0 0 1 16 16v24Z"
        fill={S}
        {...TRAIT}
      />
      <path d="M92 64q6-20 26-20h16" fill="none" {...TRAIT} />
      <path d="M46 104h96" {...TRAIT} />
      <path
        d="M62 126q6 8 12 0M84 126q6 8 12 0"
        {...TRAIT}
        strokeWidth="2"
        opacity="0.5"
      />
    </>
  ),

  /* ---------------- ÉLECTRIQUE ---------------- */

  multiprise: (
    <>
      <rect x="38" y="58" width="124" height="38" rx="10" fill={S} {...TRAIT} />
      {[64, 94, 124].map((x) => (
        <g key={x}>
          <circle
            cx={x}
            cy="77"
            r="11"
            fill="none"
            {...TRAIT}
            strokeWidth="2"
          />
          <circle cx={x - 4} cy="77" r="2.2" fill={T} />
          <circle cx={x + 4} cy="77" r="2.2" fill={T} />
        </g>
      ))}
      <rect x="144" y="70" width="10" height="14" rx="3" fill={A} />
      <path d="M38 77H20q-8 0-8 10v18" fill="none" {...TRAIT} />
    </>
  ),

  rallonge: (
    <>
      <path
        d="M44 42h18a10 10 0 0 1 10 10v10a10 10 0 0 0 10 10h18a12 12 0 0 1 12 12v8a12 12 0 0 0 12 12h20"
        fill="none"
        {...TRAIT}
      />
      <rect x="26" y="30" width="22" height="24" rx="6" fill={S} {...TRAIT} />
      <path d="M32 24v8M42 24v8" {...TRAIT} />
      <rect
        x="140"
        y="94"
        width="30"
        height="24"
        rx="7"
        fill={A}
        fillOpacity="0.9"
        stroke={T}
        strokeWidth="2.5"
      />
      <circle cx="150" cy="106" r="2.4" fill={T} />
      <circle cx="160" cy="106" r="2.4" fill={T} />
    </>
  ),

  prise: (
    <>
      <rect x="46" y="38" width="52" height="74" rx="9" fill={S} {...TRAIT} />
      <circle cx="72" cy="75" r="17" fill="none" {...TRAIT} strokeWidth="2" />
      <circle cx="66" cy="75" r="3" fill={T} />
      <circle cx="78" cy="75" r="3" fill={T} />
      <rect x="106" y="38" width="48" height="74" rx="9" fill={S} {...TRAIT} />
      <rect
        x="118"
        y="56"
        width="24"
        height="38"
        rx="5"
        fill={A}
        fillOpacity="0.9"
        stroke={T}
        strokeWidth="2.5"
      />
    </>
  ),

  cable: (
    <>
      <path d="M52 52q34 0 34 24t34 24" fill="none" {...TRAIT} />
      <rect
        x="32"
        y="42"
        width="24"
        height="20"
        rx="5"
        fill={A}
        fillOpacity="0.9"
        stroke={T}
        strokeWidth="2.5"
      />
      <path d="M32 52h-14" {...TRAIT} />
      <rect x="116" y="90" width="26" height="20" rx="5" fill={S} {...TRAIT} />
      <path d="M142 100h14" {...TRAIT} />
      <path
        d="M124 96v8M134 96v8"
        stroke={T}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </>
  ),

  ampoule: (
    <>
      <path
        d="M100 26a30 30 0 0 1 18 54v10H82V80a30 30 0 0 1 18-54Z"
        fill={S}
        {...TRAIT}
      />
      <path
        d="M90 66q6-10 10 0t10-8"
        fill="none"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M82 96h36M84 106h32M88 116h24" {...TRAIT} strokeWidth="2.5" />
      <path
        d="M100 8v10M62 24l7 7M138 24l-7 7"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </>
  ),

  led: (
    <>
      <rect x="34" y="62" width="132" height="22" rx="8" fill={S} {...TRAIT} />
      {[54, 76, 98, 120, 142].map((x) => (
        <circle key={x} cx={x} cy="73" r="4.5" fill={A} />
      ))}
      <path
        d="M54 96v10M76 96v14M98 96v10M120 96v14M142 96v10"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path d="M34 50h132" {...TRAIT} strokeWidth="2" opacity="0.35" />
    </>
  ),

  /* ---------------- TECHNOLOGIE & MÉDIAS ---------------- */

  casque: (
    <>
      <path d="M54 88V72a46 46 0 0 1 92 0v16" fill="none" {...TRAIT} />
      <rect x="40" y="82" width="26" height="42" rx="11" fill={S} {...TRAIT} />
      <rect x="134" y="82" width="26" height="42" rx="11" fill={S} {...TRAIT} />
      <rect
        x="46"
        y="90"
        width="14"
        height="26"
        rx="7"
        fill={A}
        fillOpacity="0.85"
        stroke="none"
      />
      <rect
        x="140"
        y="90"
        width="14"
        height="26"
        rx="7"
        fill={A}
        fillOpacity="0.85"
        stroke="none"
      />
    </>
  ),

  ecouteurs: (
    <>
      <path d="M74 38v42M126 38v42" {...TRAIT} />
      <ellipse cx="70" cy="96" rx="16" ry="20" fill={S} {...TRAIT} />
      <ellipse cx="130" cy="96" rx="16" ry="20" fill={S} {...TRAIT} />
      <ellipse
        cx="70"
        cy="96"
        rx="7"
        ry="9"
        fill={A}
        fillOpacity="0.85"
        stroke="none"
      />
      <ellipse
        cx="130"
        cy="96"
        rx="7"
        ry="9"
        fill={A}
        fillOpacity="0.85"
        stroke="none"
      />
      <path d="M74 52 70 78M126 52l4 26" {...TRAIT} strokeWidth="2" />
    </>
  ),

  enceinte: (
    <>
      <rect x="66" y="26" width="68" height="100" rx="16" fill={S} {...TRAIT} />
      <circle cx="100" cy="62" r="18" fill="none" {...TRAIT} strokeWidth="2" />
      <circle cx="100" cy="62" r="7" fill={A} />
      <circle cx="100" cy="102" r="11" fill="none" {...TRAIT} strokeWidth="2" />
      <path d="M86 40h28" stroke={A} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),

  microphone: (
    <>
      <rect x="84" y="22" width="32" height="56" rx="16" fill={S} {...TRAIT} />
      <path
        d="M92 36h16M92 46h16M92 56h16"
        stroke={A}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M68 66a32 32 0 0 0 64 0" fill="none" {...TRAIT} />
      <path d="M100 98v16M78 126h44" {...TRAIT} />
      <path d="M84 126q16-14 32 0" fill={S} {...TRAIT} />
    </>
  ),

  ringLight: (
    <>
      <circle cx="100" cy="60" r="34" fill="none" stroke={A} strokeWidth="9" />
      <circle cx="100" cy="60" r="34" fill="none" {...TRAIT} strokeWidth="2" />
      <circle
        cx="100"
        cy="60"
        r="25"
        fill="none"
        {...TRAIT}
        strokeWidth="2"
        opacity="0.4"
      />
      <path d="M100 94v24M80 128h40" {...TRAIT} />
      <path d="M86 128q14-10 28 0" fill={S} {...TRAIT} />
    </>
  ),

  trepied: (
    <>
      <rect x="84" y="24" width="32" height="20" rx="5" fill={S} {...TRAIT} />
      <path d="M100 44v22" {...TRAIT} />
      <path d="M100 66 66 126M100 66l34 60M100 66v60" {...TRAIT} />
      <path d="M78 104h44" stroke={A} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="66" r="6" fill={A} />
    </>
  ),

  clavier: (
    <>
      <rect x="28" y="52" width="144" height="56" rx="10" fill={S} {...TRAIT} />
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3, 4, 5, 6, 7].map((k) => (
          <rect
            key={`${r}-${k}`}
            x={40 + k * 16}
            y={62 + r * 14}
            width="11"
            height="9"
            rx="2.5"
            fill={r === 2 && k === 3 ? A : F}
            fillOpacity={r === 2 && k === 3 ? 0.9 : 0.16}
          />
        )),
      )}
    </>
  ),

  souris: (
    <>
      <path
        d="M100 26c22 0 34 16 34 40v26c0 20-14 32-34 32s-34-12-34-32V66c0-24 12-40 34-40Z"
        fill={S}
        {...TRAIT}
      />
      <path d="M100 26v34" {...TRAIT} />
      <path d="M66 60h68" {...TRAIT} strokeWidth="2" opacity="0.4" />
      <rect x="95" y="36" width="10" height="16" rx="5" fill={A} />
    </>
  ),

  manette: (
    <>
      <path
        d="M68 52h64c18 0 30 16 30 36 0 16-8 28-20 28-10 0-14-8-24-8H82c-10 0-14 8-24 8-12 0-20-12-20-28 0-20 12-36 30-36Z"
        fill={S}
        {...TRAIT}
      />
      <path
        d="M62 80h20M72 70v20"
        stroke={T}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="128" cy="72" r="5" fill={A} />
      <circle cx="142" cy="84" r="5" fill={A} />
      <circle cx="114" cy="84" r="5" fill={T} fillOpacity="0.2" />
      <circle cx="128" cy="96" r="5" fill={T} fillOpacity="0.2" />
    </>
  ),
};

/**
 * @param {Object} props
 * @param {keyof typeof DESSINS} props.nom
 */
export default function IllustrationProduit({ nom, className = "" }) {
  const dessin = DESSINS[nom];

  return (
    <svg
      viewBox="0 0 200 150"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      {dessin ?? (
        // Repli neutre : un cadre, jamais un bloc vide
        <rect
          x="60"
          y="40"
          width="80"
          height="70"
          rx="10"
          fill={S}
          {...TRAIT}
          strokeDasharray="6 5"
        />
      )}
    </svg>
  );
}

/** Liste des clés disponibles — sert au contrôle de cohérence. */
export const illustrationsDisponibles = Object.keys(DESSINS);
