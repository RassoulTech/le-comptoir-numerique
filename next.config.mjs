/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Rien à configurer pour les images.
   *
   * Les photos produits viennent du CDN d'Unsplash et sont appelées
   * directement par le navigateur (voir components/ui/CarteProduit.jsx) :
   * `remotePatterns` ne sert donc pas ici. Le jour où les photos réelles
   * de la boutique arriveront dans /public/images/produits/, elles
   * passeront par next/image et seront optimisées sans configuration
   * supplémentaire.
   */
};

export default nextConfig;
