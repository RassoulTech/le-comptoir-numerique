import Link from "next/link";
import Icone from "./Icone";
import Photo from "./Photo";
import MotifUnivers from "./MotifUnivers";

/**
 * Carte d'un univers de l'entreprise.
 *
 * Deux rangs, pour éviter que les cinq univers se valent visuellement :
 * — `majeur`      : photo large, intitulé et titre posés dessus ;
 * — `secondaire`  : photo réduite à gauche, mise en page horizontale.
 *
 * Le visuel vient de `univers.visuel`. S'il porte une image, elle
 * s'affiche ; sinon le motif vectoriel de marque prend le relais. Aucune
 * carte ne reste vide.
 *
 * Sur les cartes majeures, le texte est posé sur la photo à travers
 * `.voile-photo` : le dégradé vert forêt garantit le contraste et
 * maintient la couleur de la marque au premier plan.
 */
const ZOOM =
  "transition-transform duration-(--duree-lente) ease-sortie group-hover:scale-[1.04]";

function Visuel({ univers, sizes, largeur }) {
  if (univers.visuel?.image) {
    return (
      <Photo
        visuel={univers.visuel}
        sizes={sizes}
        largeur={largeur}
        className={ZOOM}
      />
    );
  }

  return (
    <MotifUnivers slug={univers.slug} sombre className={`size-full ${ZOOM}`} />
  );
}

export default function CarteUnivers({ univers, sombre = false }) {
  const lien = univers.href ?? `/produits#${univers.slug}`;
  const majeur = univers.rang === "majeur";

  const bordure = sombre
    ? "border-ivoire/12 bg-ivoire/[0.04] hover:border-bronze/50"
    : "border-anthracite/8 bg-ivoire-clair shadow-douce hover:border-bronze/40";

  const titre = sombre ? "text-ivoire" : "text-foret";
  const texte = sombre ? "text-ivoire/75" : "text-anthracite-doux";
  const surtitre = sombre ? "text-bronze-clair" : "text-bronze-texte";

  return (
    <Link
      href={lien}
      className={`carte group flex h-full overflow-hidden rounded-carte border ${bordure} ${
        majeur ? "flex-col" : "flex-row items-stretch"
      }`}
    >
      {majeur ? (
        /* Photo pleine largeur, titre posé dans le tiers bas */
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-foret">
          <Visuel
            univers={univers}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            largeur={800}
          />
          <div
            aria-hidden="true"
            className="voile-photo pointer-events-none absolute inset-0"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex items-center gap-2.5">
              <Icone
                nom={univers.icone}
                className="size-4 shrink-0 text-bronze-clair"
              />
              <span className="text-intitule text-bronze-clair uppercase">
                {univers.signature}
              </span>
            </div>
            <h3 className="mt-2.5 text-titre-3 text-ivoire">{univers.nom}</h3>
          </div>
        </div>
      ) : (
        /* Vignette latérale, teintée pour rester dans la charte */
        <div className="relative w-28 shrink-0 overflow-hidden bg-foret sm:w-36">
          <Visuel univers={univers} sizes="144px" largeur={320} />
          <div
            aria-hidden="true"
            className="teinte-photo pointer-events-none absolute inset-0"
          />
        </div>
      )}

      {/* Contenu */}
      <div className={`flex flex-1 flex-col ${majeur ? "p-6" : "p-5"}`}>
        {!majeur && (
          <>
            <div className="flex items-center gap-2.5">
              <Icone
                nom={univers.icone}
                className="size-4 shrink-0 text-bronze"
              />
              <span className={`text-intitule uppercase ${surtitre}`}>
                {univers.signature}
              </span>
            </div>
            <h3 className={`mt-3 text-titre-4 ${titre}`}>{univers.nom}</h3>
          </>
        )}

        <p className={`${majeur ? "" : "mt-2"} flex-1 text-petit ${texte}`}>
          {univers.description}
        </p>

        {/* Familles — uniquement sur les cartes majeures, pour garder
            les cartes secondaires respirantes */}
        {majeur && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {univers.familles.slice(0, 4).map((famille) => (
              <li
                key={famille}
                className={`rounded-full px-2.5 py-1 text-mention font-medium ${
                  sombre
                    ? "bg-ivoire/8 text-ivoire/80"
                    : "bg-ivoire-fonce/80 text-anthracite-doux"
                }`}
              >
                {famille}
              </li>
            ))}
            {univers.familles.length > 4 && (
              <li
                className={`rounded-full px-2.5 py-1 text-mention font-medium ${
                  sombre ? "text-ivoire/60" : "text-anthracite-doux"
                }`}
              >
                +{univers.familles.length - 4}
              </li>
            )}
          </ul>
        )}

        <span
          className={`mt-5 inline-flex items-center gap-2 text-petit font-semibold ${
            sombre ? "text-ivoire" : "text-foret"
          }`}
        >
          Découvrir
          <Icone nom="fleche" className="size-4" />
        </span>
      </div>
    </Link>
  );
}
