import { entreprise } from "@/content/entreprise";
import Icone from "./Icone";
import Placeholder from "./Placeholder";

/**
 * Affiche les réseaux sociaux avec les icônes appropriées
 * Stylisé avec design premium et hover effects
 */
export default function ReseauxSociaux({
  variant = "light", // "light" (pied de page) ou "dark" (sections sombres)
  showLabels = false,
  className = "",
}) {
  const reseaux = entreprise.reseaux.filter((r) => r.url);
  const reseauxNonDefinis = entreprise.reseaux.filter((r) => !r.url);

  const bgClass = variant === "dark" ? "bg-ivoire/10" : "bg-ivoire/5";
  const hoverClass = variant === "dark" ? "hover:bg-ivoire/20" : "hover:bg-ivoire/10";
  const textClass = variant === "dark" ? "text-ivoire/90" : "text-foret/70";

  return (
    <div className={`flex items-center flex-wrap gap-3 ${className}`}>
      {/* Réseaux sociaux définis */}
      {reseaux.map((reseau) => (
        <a
          key={reseau.nom}
          href={reseau.url}
          target="_blank"
          rel="noopener noreferrer"
          title={reseau.nom}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 ring-1 ring-inset transition-all duration-300 ${bgClass} ${hoverClass} ${textClass} hover:text-bronze-clair`}
          aria-label={`Visitez notre ${reseau.nom}`}
        >
          <Icone nom={reseau.icone} className="size-5" />
          {showLabels && <span className="text-petit font-medium">{reseau.nom}</span>}
        </a>
      ))}

      {/* Réseaux non définis */}
      {reseauxNonDefinis.map((reseau) => (
        <div
          key={reseau.nom}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 ring-1 ring-inset opacity-50 ${bgClass} ${textClass}`}
          title={`${reseau.nom} à venir`}
        >
          <Icone nom={reseau.icone} className="size-5" />
          {showLabels && (
            <Placeholder sombre className="text-petit font-medium">
              {reseau.nom}
            </Placeholder>
          )}
        </div>
      ))}
    </div>
  );
}
