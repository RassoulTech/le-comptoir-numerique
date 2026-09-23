import Link from "next/link";

/**
 * Action unique du site.
 *
 * La classe `action` (design system) apporte le retour au clic et fait
 * avancer la flèche au survol : toute icône portant la classe `fleche`
 * se déplace automatiquement. Aucun composant n'a à le redéfinir.
 *
 * Rend un <Link> pour la navigation interne, un <a> pour les liens
 * externes, tel, mailto, et un <button> sans `href`.
 */
const VARIANTES = {
  principal:
    "bg-foret text-ivoire shadow-action hover:bg-foret-clair hover:shadow-action-survol",
  secondaire:
    "bg-transparent text-foret ring-1 ring-inset ring-foret/20 hover:bg-foret/[0.04] hover:ring-foret/40",
  clair:
    "bg-ivoire text-foret shadow-action hover:bg-white hover:shadow-action-survol",
  contourClair:
    "bg-transparent text-ivoire ring-1 ring-inset ring-ivoire/30 hover:bg-ivoire/10 hover:ring-ivoire/55",
  bronze:
    "degrade-bronze text-ivoire font-semibold shadow-action hover:brightness-110 hover:shadow-action-survol",
  bronzeContour:
    "bg-transparent text-bronze-texte ring-1 ring-inset ring-bronze/40 hover:bg-bronze/10 hover:ring-bronze/70",
};

const TAILLES = {
  normal: "px-5 py-3 text-petit font-semibold",
  grand: "px-6 py-3.5 text-corps font-semibold",
};

export default function Bouton({
  children,
  href,
  variante = "principal",
  taille = "normal",
  className = "",
  ...props
}) {
  const classes = [
    "action inline-flex items-center justify-center gap-2 rounded-action",
    "leading-none",
    VARIANTES[variante],
    TAILLES[taille],
    className,
  ].join(" ");

  if (href) {
    const externe =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (externe) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
