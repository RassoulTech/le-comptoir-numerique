import MotifUnivers from "./MotifUnivers";
import Icone from "./Icone";

/**
 * Composition visuelle moderne et interactive de la couverture.
 * Met en valeur la double compétence de l'entreprise (Matériel + Solutions numériques).
 */
const CARTES = [
  {
    slug: "technologie-medias",
    libelle: "Technologie & Médias",
    badge: "Matériel Pro",
    icone: "casque",
    zone: "col-span-3 row-span-2",
    ratio: "aspect-[3/4]",
    flottement: "flottement-1",
  },
  {
    slug: "solutions-numeriques",
    libelle: "Solutions Web & Outils",
    badge: "Digital",
    icone: "web",
    zone: "col-span-2",
    ratio: "aspect-[4/3]",
    flottement: "flottement-2",
  },
  {
    slug: "electromenager",
    libelle: "Électroménager & Équipement",
    badge: "Maison & Bureau",
    icone: "electromenager",
    zone: "col-span-2",
    ratio: "aspect-[4/3]",
    flottement: "flottement-3",
  },
];

export default function CompositionHero({ className = "" }) {
  return (
    <div aria-hidden="true" className={`relative select-none ${className}`}>
      {/* Halo lumineux d'accentuation bronze et vert forêt */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-bronze/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 size-56 rounded-full bg-foret-clair/30 blur-2xl" />

      {/* Badge flottant d'état / réassurance */}
      <div className="absolute -top-4 -right-2 z-20 hidden sm:flex items-center gap-2 rounded-full glass-foret px-3.5 py-1.5 shadow-relief animate-bounce [animation-duration:4s]">
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-[#25D366]" />
        </span>
        <span className="text-mention font-medium text-ivoire">
          Comptoir ouvert à Thiès
        </span>
      </div>

      <div className="relative grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4.5">
        {CARTES.map((carte) => (
          <figure
            key={carte.slug}
            className={`${carte.zone} ${carte.flottement} group relative flex flex-col overflow-hidden rounded-bloc shadow-relief ring-1 ring-ivoire/15 transition-all duration-300 hover:ring-bronze/50`}
          >
            <MotifUnivers
              slug={carte.slug}
              sombre
              className={`${carte.ratio} w-full flex-1 transition-transform duration-700 group-hover:scale-105`}
            />

            {/* Étiquette d'univers avec badge supérieur */}
            <figcaption className="relative z-10 flex flex-col gap-1 border-t border-ivoire/12 bg-foret-fonce/90 backdrop-blur-md px-3.5 py-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icone
                    nom={carte.icone}
                    className="size-3.5 shrink-0 text-bronze-clair"
                  />
                  <span className="truncate text-mention font-semibold text-ivoire">
                    {carte.libelle}
                  </span>
                </div>
                <span className="hidden sm:inline-block rounded-full bg-bronze/20 px-2 py-0.5 text-[0.6875rem] font-medium text-bronze-clair">
                  {carte.badge}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
