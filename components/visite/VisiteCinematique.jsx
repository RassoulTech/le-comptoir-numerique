"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { scenes } from "@/content/visite";
import Icone from "@/components/ui/Icone";
import Bouton from "@/components/ui/Bouton";

/**
 * VISITE CINÉMATIQUE — parcours de la homepage.
 *
 * Deux modes, décidés par la feuille de style (jamais par un état React
 * au premier rendu, pour ne pas provoquer de saut de mise en page) :
 *
 *   MODE CINÉMA (html.js, pas de prefers-reduced-motion)
 *   La section occupe plusieurs écrans ; un bloc sticky présente les
 *   scènes en fondu enchaîné pendant que le visiteur fait défiler. Le
 *   mouvement de zoom lent par scène suggère l'avancée de la caméra.
 *
 *   MODE STATIQUE (sans JS, ou prefers-reduced-motion, ou si la session
 *   le décide) — les mêmes chapitres s'affichent empilés, complets :
 *   le site reste compréhensible sans l'expérience (brief §23-24, §48).
 *
 * PERFORMANCE (brief §25) : seules les images des scènes actives et
 * voisines sont montées en mode cinéma ; les autres ne sont jamais
 * requises. En mode statique, les images sont en chargement différé
 * natif. Aucune ressource au-delà de ±1 scène n'est demandée.
 */

/** Nombre de voix de défilement par scène (une « voix » = 100vh). */
const VOIX_PAR_SCENE = 0.85;

function SceneVisuel({ scene, chargable }) {
  if (scene.visuel.type === "photos") {
    // Une image occupe tout le cadre ; quatre images en grille 2×2,
    // chaque cellule vaut environ la moitié du viewport.
    const largeur = scene.visuel.images.length > 1 ? "50vw" : "100vw";
    return (
      <div className="visite-photos">
        {scene.visuel.images.map((src, index) => (
          <div key={src} className="visite-photo-cadre">
            {chargable && (
              <Image
                src={src}
                alt={index === 0 ? scene.visuel.alt : ""}
                fill
                sizes={largeur}
                quality={80}
                className="visite-photo"
                // Seules les scènes proches de l'active demandent leur
                // image : le navigateur ne télécharge jamais tout.
                loading={chargable === "proche" ? "eager" : "lazy"}
                priority={chargable === "active" && index === 0}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (scene.visuel.type === "placeholder") {
    return (
      <div className="visite-placeholder" role="img" aria-label={scene.visuel.libelle}>
        <p className="visite-placeholder-libelle">{scene.visuel.libelle}</p>
      </div>
    );
  }

  // Scène sans visuel : plein cadre, la typographie porte la scène.
  return <div className="visite-plein" aria-hidden="true" />;
}

export default function VisiteCinematique() {
  const railRef = useRef(null);
  const [actif, setActif] = useState(0);
  const [mode, setMode] = useState("statique"); // "statique" | "cinema"

  // Détection du mode, une fois, après montage : correspond à ce que le
  // CSS applique déjà (html.js + pas de reduced-motion) pour que l'état
  // React et la feuille de style ne divergent jamais. La décision passe
  // par une frame (callback) et non par le corps de l'effet : le rendu
  // initial n'est jamais interrompu par une mise à jour en cascade.
  useEffect(() => {
    const htmlJs = document.documentElement.classList.contains("js");
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!(htmlJs && !reduit)) return;
    const image = requestAnimationFrame(() => setMode("cinema"));
    return () => cancelAnimationFrame(image);
  }, []);

  // Suivi du défilement — calcul léger, plafonné à un passage par frame.
  const auDefilement = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const rect = rail.getBoundingClientRect();
    const total = rail.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const progresse = Math.min(1, Math.max(0, -rect.top / total));
    const index = Math.round(progresse * (scenes.length - 1));
    setActif((precedent) => (precedent === index ? precedent : index));
  }, []);

  useEffect(() => {
    if (mode !== "cinema") return;
    let animation = 0;
    const boucle = () => {
      auDefilement();
      animation = 0;
    };
    const ecoute = () => {
      if (!animation) animation = requestAnimationFrame(boucle);
    };
    window.addEventListener("scroll", ecoute, { passive: true });
    window.addEventListener("resize", ecoute);
    auDefilement();
    return () => {
      window.removeEventListener("scroll", ecoute);
      window.removeEventListener("resize", ecoute);
      if (animation) cancelAnimationFrame(animation);
    };
  }, [mode, auDefilement]);

  const fenetreActives = (index) => {
    if (mode !== "cinema") return false; // statique : tout est rendu (lazy)
    return Math.abs(index - actif) <= 1 ? (index === actif ? "active" : "proche") : false;
  };

  const hauteurRail = {
    "--hauteur-visite": `${Math.round(
      (scenes.length - 1) * VOIX_PAR_SCENE * 100 + 100,
    )}vh`,
  };

  return (
    <section
      ref={railRef}
      aria-label="Visite du Comptoir Numérique"
      className="visite"
      style={hauteurRail}
    >
      {/* Lien d'évitement : disponible au clavier dès le début de la
          visite, sans attendre la fin. */}
      <a href="#apres-visite" className="visite-passer">
        Passer la visite
      </a>

      <div className="visite-scene-scene">
        {scenes.map((scene, index) => (
          <article
            key={scene.id}
            id={`visite-${scene.id}`}
            className={`visite-scene ${
              mode === "cinema" && index === actif ? "est-active" : ""
            } ${
              mode === "cinema" && Math.abs(index - actif) === 1 ? "est-voisine" : ""
            }`}
            aria-hidden={mode === "cinema" && index !== actif ? "true" : undefined}
          >
            <SceneVisuel scene={scene} chargable={fenetreActives(index)} />

            {/* Voile de lisibilité au-dessus du visuel */}
            <div className="visite-voile" aria-hidden="true" />

            <div className="visite-contenu">
              <p className="visite-timeline">
                <span className="visite-numero">{scene.numero}</span>
                <span className="visite-sep" aria-hidden="true" />
                {scene.intitule}
              </p>

              {index === 0 ? (
                <h1 className="visite-titre">{scene.titre}</h1>
              ) : (
                <h2 className="visite-titre">{scene.titre}</h2>
              )}

              {scene.texte && <p className="visite-texte">{scene.texte}</p>}

              {scene.ctas && (
                <div className="visite-ctas">
                  {scene.ctas.map((cta) =>
                    cta.href.startsWith("tel:") ? (
                      <a key={cta.href} href={cta.href} className="visite-cta">
                        <Icone nom="telephoneAppel" className="size-4" />
                        {cta.libelle}
                      </a>
                    ) : cta.href.startsWith("http") ? null : (
                      <Link key={cta.href} href={cta.href} className="visite-cta">
                        {cta.libelle}
                        <Icone nom="fleche" className="size-4" />
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>
          </article>
        ))}

        {/* Repères de progression — informatifs, pas interactifs */}
        <div className="visite-progression" aria-hidden="true">
          {scenes.map((scene, index) => (
            <span
              key={scene.id}
              className={`visite-pas ${index === actif ? "est-active" : ""} ${
                index < actif ? "est-passee" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}