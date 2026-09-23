/**
 * Enveloppe commune des champs de formulaire : libellé, aide, message
 * d'erreur et liaison ARIA entre les trois.
 *
 * Centraliser cette logique garantit que tous les champs du site sont
 * accessibles de la même façon.
 */
export default function Champ({
  id,
  label,
  erreur,
  aide,
  obligatoire = false,
  children,
  className = "",
}) {
  const idAide = aide ? `${id}-aide` : undefined;
  const idErreur = erreur ? `${id}-erreur` : undefined;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-petit font-semibold text-anthracite"
      >
        {label}
        {obligatoire ? (
          <span className="ml-1 text-bronze-texte" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-2 text-mention font-normal text-anthracite-doux">
            (facultatif)
          </span>
        )}
      </label>

      {aide && (
        <p id={idAide} className="mt-1 text-mention text-anthracite-doux">
          {aide}
        </p>
      )}

      <div className="mt-2">
        {children({
          id,
          "aria-invalid": erreur ? true : undefined,
          "aria-describedby":
            [idAide, idErreur].filter(Boolean).join(" ") || undefined,
          className: `w-full rounded-action border bg-white px-4 py-3 text-corps text-anthracite transition-[border-color,box-shadow] duration-(--duree-rapide) ease-douce placeholder:text-anthracite-doux/60 ${
            erreur
              ? "border-red-700/55 focus:border-red-700 focus:shadow-[0_0_0_3px_rgb(185_28_28/0.1)]"
              : "border-anthracite/15 hover:border-anthracite/30 focus:border-foret focus:shadow-[0_0_0_3px_rgb(23_63_53/0.09)]"
          } focus:outline-none`,
        })}
      </div>

      {erreur && (
        <p id={idErreur} role="alert" className="mt-2 text-petit text-red-800">
          {erreur}
        </p>
      )}
    </div>
  );
}
