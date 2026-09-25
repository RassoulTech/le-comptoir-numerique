"use client";

import { useEffect, useRef } from "react";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import Bouton from "./Bouton";
import Icone from "./Icone";
import CompositionHeroAnimee from "./CompositionHeroAnimee";
import Conteneur from "./Conteneur";

/**
 * HeroSection refactorisée avec animations ultra-fluides
 * - Texte à gauche avec révélation ligne par ligne
 * - Images à droite avec glissement + fade
 */
export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ajouter la classe pour activer les animations au chargement
    const container = containerRef.current;
    if (container) {
      // Petit délai pour s'assurer que le DOM est prêt
      setTimeout(() => {
        container.classList.add("hero-loaded");
      }, 100);
    }
  }, []);

  return (
    <section className="texture-hero relative overflow-hidden bg-foret text-ivoire">
      {/* Éléments de décoration de fond */}
      <div
        aria-hidden="true"
        className="grille-hero pointer-events-none absolute inset-0 opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 size-96 rounded-full bg-bronze/10 blur-3xl"
      />

      <Conteneur className="relative py-20 sm:py-24 lg:py-28">
        <div
          ref={containerRef}
          className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16"
        >
          {/* ============================================================
              COLONNE GAUCHE : TEXTE AVEC RÉVÉLATION LIGNE PAR LIGNE
              ============================================================ */}
          <div className="hero-texte order-2 lg:order-1">
            {/* Badge de signature */}
            <div className="hero-badge inline-flex items-center gap-2">
              <span className="badge-bronze-sombre">{entreprise.signature}</span>
              <span className="hidden sm:inline-block text-mention text-ivoire/60">
                · Thiès, Sénégal
              </span>
            </div>

            {/* Titre avec révélation progressive */}
            <h1 className="hero-titre mt-6 text-affichage text-ivoire leading-tight">
              <span className="hero-ligne">
                Vos équipements technologiques
              </span>
              <span className="hero-ligne">et solutions numériques,</span>
              <span className="hero-ligne">
                <span className="texte-gradient-bronze">
                  au même comptoir.
                </span>
              </span>
            </h1>

            {/* Chapo avec fade progressif */}
            <p className="hero-chapo mt-6 text-chapo text-ivoire/80">
              Électronique, technologie, électroménager et connectique : nous
              rassemblons les équipements du quotidien. Et nous concevons les
              outils digitaux qui propulsent votre activité.
            </p>

            {/* Boutons d'action */}
            <div className="hero-cta mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Bouton href="/produits" variante="clair" taille="grand">
                Découvrir les produits
                <Icone nom="fleche" className="size-5" />
              </Bouton>
              <Bouton href="/solutions-numeriques" variante="contourClair" taille="grand">
                Nos solutions numériques
              </Bouton>
            </div>

            {/* Repères de confiance avec animation */}
            <ul className="hero-reperes mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-ivoire/15 pt-7 text-mention text-ivoire/75">
              <li className="hero-repere flex items-center gap-2.5">
                <Icone
                  nom="localisation"
                  className="size-4 text-bronze-clair shrink-0"
                />
                <span>
                  {entreprise.adresse.ville}, {entreprise.adresse.pays}
                </span>
              </li>
              <li className="hero-repere flex items-center gap-2.5">
                <Icone
                  nom="whatsapp"
                  className="size-4 text-[#25D366] shrink-0"
                />
                <a
                  href={lienWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ivoire hover:underline"
                >
                  Assistance WhatsApp directe
                </a>
              </li>
              <li className="hero-repere flex items-center gap-2.5">
                <Icone
                  nom="check"
                  className="size-4 text-bronze-clair shrink-0"
                />
                <span>4 catégories de produits + solutions numériques</span>
              </li>
            </ul>
          </div>

          {/* ============================================================
              COLONNE DROITE : IMAGES AVEC GLISSEMENT + FADE
              ============================================================ */}
          <div className="hero-images order-1 lg:order-2">
            <CompositionHeroAnimee className="mx-auto max-w-md lg:max-w-none" />
          </div>
        </div>
      </Conteneur>
    </section>
  );
}
