import Conteneur from "./Conteneur";
import Apparition from "./Apparition";

/**
 * Bloc de page standard : fond, rythme vertical et en-tête de section.
 *
 * RYTHME — trois hauteurs seulement, déclarées ici et nulle part
 * ailleurs. Une page qui a besoin d'une quatrième valeur a en réalité un
 * problème de contenu, pas d'espacement :
 *
 *   compact  — blocs de service (mention, encart, rappel)
 *   normal   — sections de contenu courantes
 *   large    — ouverture de page, appliqué d'office au titre h1
 *
 * L'ouverture respire plus que les sections intérieures : c'est ce qui
 * donne à une page l'impression d'avoir un début, et non de commencer au
 * milieu.
 *
 * FRONTIÈRES — deux sections de même fond se confondent. `filet` trace
 * alors un trait d'un pixel. Les sections vert forêt qui ne sont pas une
 * ouverture reçoivent un filet bronze : la bascule clair → sombre est
 * franche, et la ligne la rend intentionnelle plutôt que brutale.
 *
 * @param {Object} props
 * @param {"ivoire"|"ivoire-fonce"|"ivoire-clair"|"foret"} [props.fond]
 * @param {string} [props.intitule]  Petit intitulé au-dessus du titre
 * @param {string} [props.titre]
 * @param {string} [props.chapo]     Paragraphe d'introduction
 * @param {string} [props.id]        Ancre HTML
 * @param {1|2} [props.niveauTitre]  h1 ou h2 (h2 par défaut)
 * @param {"compact"|"normal"|"large"} [props.rythme]
 * @param {boolean} [props.filet]    Trait de séparation en tête
 */
export default function Section({
  children,
  fond = "ivoire",
  intitule,
  titre,
  chapo,
  id,
  niveauTitre = 2,
  rythme,
  filet = false,
  className = "",
}) {
  const fonds = {
    ivoire: "bg-ivoire text-anthracite",
    "ivoire-clair": "bg-ivoire-clair text-anthracite",
    "ivoire-fonce": "bg-ivoire-fonce text-anthracite",
    foret: "bg-foret text-ivoire",
  };

  const rythmes = {
    compact: "py-14 sm:py-16 lg:py-20",
    normal: "py-20 sm:py-24 lg:py-28",
    large: "py-24 sm:py-28 lg:py-36",
  };

  const sombre = fond === "foret";
  const ouverture = niveauTitre === 1;
  const Titre = ouverture ? "h1" : "h2";
  const avecEntete = intitule || titre || chapo;

  // Une ouverture de page prend le rythme large sans avoir à le demander.
  const hauteur = rythmes[rythme ?? (ouverture ? "large" : "normal")];

  const bordure = filet
    ? sombre
      ? "separation-claire"
      : "separation-douce"
    : sombre && !ouverture
      ? "border-t border-bronze/20"
      : "";

  return (
    <section
      id={id}
      className={`${fonds[fond]} ${hauteur} ${bordure} ${className}`}
    >
      <Conteneur>
        {avecEntete && (
          <div className="max-w-2xl">
            {intitule && (
              <Apparition
                as="p"
                className={`filet-bronze text-intitule uppercase ${
                  sombre ? "text-bronze-clair" : "text-bronze-texte"
                }`}
              >
                {intitule}
              </Apparition>
            )}

            {titre && (
              <Apparition delai={80}>
                <Titre
                  className={`mt-6 ${
                    ouverture ? "text-titre-1" : "text-titre-2"
                  } ${sombre ? "text-ivoire" : "text-foret"}`}
                >
                  {titre}
                </Titre>
              </Apparition>
            )}

            {chapo && (
              <Apparition
                as="p"
                delai={160}
                className={`mt-5 text-chapo ${
                  sombre ? "text-ivoire/80" : "text-anthracite-doux"
                }`}
              >
                {chapo}
              </Apparition>
            )}
          </div>
        )}

        {children && (
          <div className={avecEntete ? "mt-14" : ""}>{children}</div>
        )}
      </Conteneur>
    </section>
  );
}
