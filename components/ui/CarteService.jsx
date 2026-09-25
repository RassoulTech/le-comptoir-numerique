import Link from "next/link";
import Icone from "./Icone";
import Photo from "./Photo";

/**
 * Carte d'une prestation numérique.
 *
 * Deux états, selon ce que porte la donnée :
 * — avec `visuel` : bandeau photo en tête, l'icône passe dessous ;
 * — sans `visuel` : l'icône seule, comme avant.
 *
 * Les solutions que nous construisons ont une photo ; les services
 * d'intervention sur logiciels n'en ont pas, et c'est voulu — on ne
 * montre pas un écran de Word pour dire qu'on l'installe.
 *
 * `sombre` adapte la carte à une section sur fond vert forêt.
 * `href` rend la carte entièrement cliquable vers une page détail :
 * l'appelant fournit l'URL, la carte n'invente rien.
 */
export default function CarteService({ service, sombre = false, href }) {
  const avecPhoto = Boolean(service.visuel?.image);

  const contenu = (
    <article
      className={`carte group flex h-full flex-col overflow-hidden rounded-carte border ${
        sombre
          ? "border-ivoire/12 bg-ivoire/[0.04] hover:border-bronze/50"
          : "border-anthracite/8 bg-ivoire-clair shadow-douce hover:border-bronze/40"
      }`}
    >
      {avecPhoto && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-foret">
          <Photo
            visuel={service.visuel}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            largeur={640}
            className="saturate-[0.82] transition-transform duration-(--duree-lente) ease-sortie group-hover:scale-[1.05]"
          />
          {/* Teinte de marque : les six photos viennent d'univers
              visuels différents, cette couche les rassemble. */}
          <div
            aria-hidden="true"
            className="teinte-photo pointer-events-none absolute inset-0"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <span
          className={`inline-flex size-12 items-center justify-center rounded-douce ${
            sombre ? "bg-bronze/15 text-bronze" : "bg-foret/[0.07] text-foret"
          }`}
        >
          <Icone nom={service.icone} className="size-6" />
        </span>

        <h3
          className={`mt-5 text-titre-4 ${sombre ? "text-ivoire" : "text-foret"}`}
        >
          {service.nom}
        </h3>

        <p
          className={`mt-2 flex-1 text-petit ${
            sombre ? "text-ivoire/75" : "text-anthracite-doux"
          }`}
        >
          {service.description}
        </p>

        <ul
          className={`mt-5 space-y-2.5 border-t pt-5 ${
            sombre ? "border-ivoire/12" : "border-anthracite/8"
          }`}
        >
          {service.inclus.map((element) => (
            <li
              key={element}
              className={`flex items-start gap-2.5 text-mention ${
                sombre ? "text-ivoire/85" : "text-anthracite"
              }`}
            >
              <Icone nom="check" className="mt-1 size-3.5 shrink-0 text-bronze" />
              {element}
            </li>
          ))}
        </ul>

        {href && (
          <p
            className={`mt-5 flex items-center gap-2 text-mention font-semibold ${
              sombre ? "text-bronze-clair" : "text-bronze-texte"
            }`}
          >
            Découvrir cette solution
            <Icone
              nom="fleche"
              className="size-4 transition-transform duration-(--duree-courte) ease-sortie group-hover:translate-x-1"
            />
          </p>
        )}
      </div>
    </article>
  );

  if (!href) return contenu;

  return (
    <Link
      href={href}
      className="block h-full"
      aria-label={`${service.nom} — lire la page détaillée`}
    >
      {contenu}
    </Link>
  );
}
