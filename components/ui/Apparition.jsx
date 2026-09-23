"use client";

import { useEffect, useRef } from "react";

/**
 * Fait apparaître son contenu lorsqu'il entre dans l'écran.
 *
 * Pourquoi pas une bibliothèque : `IntersectionObserver` est natif et
 * cette implémentation pèse moins d'un kilo-octet, là où Framer Motion
 * en ajouterait environ 35. Sur une connexion lente, la différence est
 * réelle et le rendu est identique.
 *
 * Le contenu reste un composant serveur : seule cette enveloppe est
 * exécutée côté client, donc aucun JavaScript supplémentaire n'est
 * envoyé pour le contenu lui-même.
 *
 * Sans JavaScript, le style masqué n'est jamais appliqué (il dépend de la
 * classe `js` sur <html>) : le contenu s'affiche normalement.
 *
 * @param {Object} props
 * @param {number} [props.delai]    Retard en millisecondes, pour décaler
 *                                  l'apparition d'éléments successifs
 * @param {number} [props.decalage] Distance de départ en pixels
 * @param {string} [props.as]       Balise HTML rendue (div par défaut)
 */
export default function Apparition({
  children,
  delai = 0,
  decalage = 20,
  as: Balise = "div",
  className = "",
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mouvementReduit = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Navigateur ancien ou préférence « moins d'animations » :
    // on affiche immédiatement, sans observer quoi que ce soit.
    if (mouvementReduit || typeof IntersectionObserver === "undefined") {
      element.classList.add("est-visible");
      return;
    }

    // Déjà visible au chargement (contenu en haut de page) : on affiche
    // sans attendre le prochain défilement.
    const observateur = new IntersectionObserver(
      ([entree]) => {
        if (entree.isIntersecting) {
          element.classList.add("est-visible");
          observateur.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, []);

  return (
    <Balise
      ref={ref}
      className={`apparition ${className}`}
      style={{
        "--apparition-delai": `${delai}ms`,
        "--apparition-decalage": `${decalage}px`,
      }}
      {...props}
    >
      {children}
    </Balise>
  );
}
