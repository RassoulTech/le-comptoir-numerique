/**
 * Largeur de lecture commune à toutes les sections.
 * Garantit un alignement identique sur l'ensemble du site.
 */
export default function Conteneur({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
