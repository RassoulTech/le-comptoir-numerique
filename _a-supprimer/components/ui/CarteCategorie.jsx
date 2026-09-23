import Icone from "./Icone";

/**
 * Carte d'une catégorie de produits.
 *
 * Attend la forme d'objet décrite dans content/catalogue.js. En Phase 2,
 * une ligne venant de la base de données pourra être passée telle quelle.
 *
 * La classe `carte` (design system) gère l'élévation au survol.
 */
export default function CarteCategorie({ categorie }) {
  return (
    <article className="carte group flex h-full flex-col rounded-carte border border-anthracite/8 bg-ivoire-clair p-6 shadow-douce hover:border-bronze/40">
      <span className="inline-flex size-12 items-center justify-center rounded-douce bg-foret/[0.07] text-foret transition-colors duration-200 group-hover:bg-foret group-hover:text-ivoire">
        <Icone nom={categorie.icone} className="size-6" />
      </span>

      <h3 className="mt-6 text-titre-4 text-foret">{categorie.nom}</h3>

      <p className="mt-2 flex-1 text-petit text-anthracite-doux">
        {categorie.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {categorie.exemples.map((exemple) => (
          <li
            key={exemple}
            className="rounded-full bg-ivoire-fonce/80 px-2.5 py-1 text-mention font-medium text-anthracite-doux"
          >
            {exemple}
          </li>
        ))}
      </ul>
    </article>
  );
}
