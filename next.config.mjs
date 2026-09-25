/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /**
     * Niveaux de qualité autorisés (Next 16 exige de les déclarer).
     * 75 : défaut des visuels de catalogue. 80 : images pleine page de
     * la visite cinématique, où le détail compte.
     */
    qualities: [75, 80],
  },
  /**
   * `remotePatterns` n'est pas nécessaire : les photos produits viennent
   * du CDN d'Unsplash et sont appelées directement par le navigateur via
   * <img> (voir components/ui/Photo.jsx). Les photos locales passent par
   * next/image et sont optimisées au build sans configuration
   * supplémentaire.
   */
};

export default nextConfig;