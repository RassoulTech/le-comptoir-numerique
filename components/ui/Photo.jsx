import Image from "next/image";
import { sourcesImage } from "@/lib/photos";

/**
 * Photo d'illustration, quelle que soit sa provenance.
 *
 * Trois cas, un seul composant appelé partout :
 *
 *   web    — CDN Unsplash. Balise <img> avec `srcSet` : le CDN
 *            redimensionne et choisit le format (AVIF ou WebP) lui-même,
 *            donc rien à faire transiter par notre serveur.
 *   local  — fichier du projet. next/image l'optimise au build.
 *   autre  — rien : l'appelant affiche son propre repli.
 *
 * Le conteneur donne le cadre et le ratio ; ce composant ne fait que
 * remplir, en `object-cover`.
 *
 * @param {Object} props
 * @param {import('@/lib/photos').Visuel & {alt?: string}} props.visuel
 * @param {string} props.alt     Texte alternatif (prioritaire sur visuel.alt)
 * @param {string} props.sizes   Indication de largeur pour le navigateur
 * @param {number} [props.largeur] Largeur du `src` de repli
 * @param {boolean} [props.prioritaire] Image visible d'emblée : chargée sans attendre
 */
export default function Photo({
  visuel,
  alt,
  sizes,
  largeur = 800,
  prioritaire = false,
  className = "",
}) {
  if (!visuel?.image) return null;

  const texte = alt ?? visuel.alt ?? "";
  const classes = `size-full object-cover ${className}`;

  if (visuel.imageSource === "local") {
    return (
      <Image
        src={visuel.image}
        alt={texte}
        fill
        sizes={sizes}
        priority={prioritaire}
        className={classes}
      />
    );
  }

  const { src, srcSet } = sourcesImage(visuel.image, largeur);

  return (
    // Voir l'explication ci-dessus : passer par next/image n'apporterait
    // rien sur une image déjà dimensionnée par le CDN.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={texte}
      loading={prioritaire ? "eager" : "lazy"}
      fetchPriority={prioritaire ? "high" : "auto"}
      decoding="async"
      className={classes}
    />
  );
}
