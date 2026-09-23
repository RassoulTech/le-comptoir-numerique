/**
 * DOCUMENTATION DES ANIMATIONS HERO SECTION REFACTORISÉE
 * 
 * Cette refonte apporte une expérience utilisateur premium avec :
 * ✨ Révélation ligne par ligne du texte (effet "slide-in" + skew)
 * ✨ Glissement des images depuis la droite avec fade fluide
 * ✨ Cascade d'animations avec délais progressifs
 * ✨ Performance optimale (CSS only, pas de JavaScript lourd)
 * 
 * STRUCTURE :
 * 
 * 1. HeroSection.jsx (composant principal)
 *    - Gère la disposition texte/images
 *    - Active les animations au chargement
 *    - Responsive mobile/desktop
 * 
 * 2. CompositionHeroAnimee.jsx (composant des images)
 *    - Grille 5 colonnes avec cartes animées
 *    - Glissement en cascade avec délai progressif
 *    - Badge flottant avec animation d'entrée
 * 
 * 3. Animations CSS (globals.css)
 *    - hero-badge-entree : échelle + translation
 *    - hero-ligne-entree : slide-in + skew (3 lignes)
 *    - hero-chapo-entree : fade + translation
 *    - hero-cta-entree : fade + translation
 *    - hero-repere-entree : cascade (3 éléments)
 *    - hero-image-glissement : glisser depuis droite (3 cartes)
 *    - hero-badge-flottement-entree : badge image
 * 
 * DÉLAIS D'EXÉCUTION :
 * 
 * 0ms    ─────┐
 * 200ms  ────────┐ Badge + Ligne 1
 * 300ms  ──────────────┐ Ligne 2
 * 500ms  ─────────────────┐ Ligne 3
 * 700ms  ───────────────────┐ Chapo
 * 1.1s   ────────────────────────┐ CTA
 * 1.3s   ────────────────────────────┐ Image 1
 * 1.5s   ──────────────────────────────────┐ Image 2 + Repère 1
 * 1.7s   ──────────────────────────────────┐ Image 3 + Repère 2
 * 1.8s   ────────────────────────────────────────┐ Repère 3
 * 1.9s   ──────────────────────────────────────────────┐ Badge image
 * 
 * EASING FUNCTIONS :
 * - Entrées : cubic-bezier(0.34, 1.56, 0.64, 1) [bounce elastique]
 * - Texte : ease-out [décelération naturelle]
 * - Images : cubic-bezier(0.34, 1.56, 0.64, 1) [bounce]
 * 
 * DURATIONS :
 * - Badge : 700ms
 * - Lignes titre : 800ms
 * - Chapo : 700ms
 * - CTA : 600ms
 * - Repères : 500ms
 * - Images : 900ms (délai + animation)
 * 
 * BREAKPOINTS RESPONSIVE :
 * - Mobile : Stack vertical, animations simplifiées
 * - Tablet (lg): 2 colonnes, animations complètes
 * - Desktop (lg): Layout optimal avec 2:1 ratio
 * 
 * ACCESSIBILITY :
 * - prefers-reduced-motion: animations désactivées
 * - ARIA labels sur composants
 * - Contraste texte/fond garanti
 * 
 * PERFORMANCE :
 * - CSS-only animations (pas de JS lourd)
 * - GPU accelerated (transform + opacity)
 * - Will-change optimisé
 * - ~60fps guaranteed
 */
