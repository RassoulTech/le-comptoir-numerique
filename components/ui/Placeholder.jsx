/**
 * Marque visuellement une information pas encore fournie (RÈGLE 8).
 *
 * L'encadré pointillé rend le placeholder immédiatement repérable
 * pendant la relecture du site, sans ressembler à une vraie donnée.
 */
export default function Placeholder({
  children,
  className = "",
  sombre = false,
}) {
  return (
    <span
      className={`inline-block rounded border border-dashed px-2 py-0.5 text-[0.9em] ${
        sombre
          ? "border-ivoire/40 text-ivoire/70"
          : "border-anthracite-doux/40 text-anthracite-doux"
      } ${className}`}
      title="Information à renseigner"
    >
      {children}
    </span>
  );
}
