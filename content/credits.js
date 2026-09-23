import { collecterCredits } from "@/lib/photos";
import { produits } from "./produits";
import { univers } from "./univers";
import { solutions } from "./prestations";

/**
 * CRÉDITS PHOTO — LISTE UNIQUE
 *
 * Les conditions d'utilisation de l'API Unsplash demandent de créditer
 * les auteurs. Plutôt que de tenir une liste par page, on réunit ici les
 * trois sources d'images du site ; chaque page affiche la liste qui la
 * concerne, ou la liste complète.
 *
 * Ajouter une photo quelque part suffit : elle apparaît dans les crédits
 * sans rien d'autre à modifier.
 */

/** Auteurs des photos produits et d'univers (page Produits). */
export const creditsProduits = collecterCredits(produits, univers);

/** Auteurs des photos de solutions (page Services). */
export const creditsSolutions = collecterCredits(solutions);

/** Auteurs des photos visibles sur l'accueil : univers et solutions. */
export const creditsAccueil = collecterCredits(univers, solutions);

/** Tout le site. */
export const creditsTous = collecterCredits(produits, univers, solutions);
