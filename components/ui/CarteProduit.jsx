import Photo from "./Photo";
import IllustrationProduit from "./IllustrationProduit";

/**
 * Carte d'un produit du catalogue.
 *
 * C'est le design system qui crée la cohérence, pas les images : même
 * ratio 4:3, même fond, même marge intérieure, même traitement au survol.
 * Une photo et une illustration de marque se posent donc dans le même
 * cadre, et le catalogue reste homogène quelle que soit l'origine du
 * visuel.
 *
 * Aucun prix, aucune disponibilité, aucune marque ne sont affichés : le
 * site présente ce qui est proposé, pas un stock à l'instant T.
 */
const ANIMATION =
  "transition-transform duration-(--duree-lente) ease-sortie group-hover:scale-[1.05]";

export default function CarteProduit({ produit }) {
  return (
    <article className="carte group flex h-full flex-col overflow-hidden rounded-carte border border-anthracite/8 bg-ivoire-clair shadow-douce hover:border-bronze/40">
      {/* Zone visuelle — ratio et fond identiques pour tous les produits */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivoire-fonce/70">
        {produit.image ? (
          <Photo
            visuel={produit}
            alt={produit.nom}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            largeur={480}
            className={ANIMATION}
          />
        ) : (
          /* Repli : dessin de marque, jamais un bloc vide. */
          <IllustrationProduit
            nom={produit.illustration}
            className={`size-full p-1.5 ${ANIMATION}`}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-titre-4 text-foret">{produit.nom}</h3>
      </div>
    </article>
  );
}
