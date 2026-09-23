import Apparition from "./Apparition";

/**
 * Ce que les photos d'illustration n'engagent pas.
 *
 * À afficher sur chaque page qui en montre, tant que ce ne sont pas les
 * photos de l'entreprise : elles illustrent une catégorie ou un métier,
 * jamais un modèle précis ni une marque vendue.
 *
 * Les auteurs, eux, sont crédités une seule fois pour tout le site, dans
 * le pied de page — c'est ce que demandent les conditions d'utilisation
 * de l'API Unsplash, et une liste unique évite de la répéter partout.
 *
 * @param {Object} props
 * @param {string} props.mention  Ce que les photos n'engagent pas
 * @param {boolean} [props.sombre]
 */
export default function MentionPhotos({ mention, sombre = false }) {

  const separation = sombre ? "separation-claire" : "separation-douce";
  const texte = sombre ? "text-ivoire/70" : "text-anthracite-doux";

  return (
    <Apparition as="footer" className={`${separation} mt-16 pt-8`}>
      <p className={`max-w-3xl text-mention ${texte}`}>{mention}</p>

    </Apparition>
  );
}
