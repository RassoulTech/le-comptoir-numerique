"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { liensNavigation, lienDevis } from "@/lib/navigation";
import { entreprise } from "@/content/entreprise";
import Conteneur from "@/components/ui/Conteneur";
import Icone from "@/components/ui/Icone";

export default function Entete() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [defile, setDefile] = useState(false);
  const chemin = usePathname();

  // L'en-tête se resserre et prend une ombre dès que la page défile :
  // il se détache du contenu sans jamais masquer la navigation.
  useEffect(() => {
    const surDefilement = () => setDefile(window.scrollY > 12);
    surDefilement();
    window.addEventListener("scroll", surDefilement, { passive: true });
    return () => window.removeEventListener("scroll", surDefilement);
  }, []);

  // Bloque le défilement de la page quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = menuOuvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOuvert]);

  // Ferme le menu avec la touche Échap.
  useEffect(() => {
    if (!menuOuvert) return;
    const surTouche = (e) => e.key === "Escape" && setMenuOuvert(false);
    window.addEventListener("keydown", surTouche);
    return () => window.removeEventListener("keydown", surTouche);
  }, [menuOuvert]);

  const estActif = (href) =>
    href === "/" ? chemin === "/" : chemin.startsWith(href);

  // Le menu se referme au clic sur un lien plutôt que via un effet
  // sur le changement d'URL : plus simple et plus prévisible.
  const fermerMenu = () => setMenuOuvert(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-[box-shadow,border-color,background-color] duration-(--duree-normale) ease-douce ${
        defile || menuOuvert
          ? "glass-header border-b border-anthracite/8 shadow-entete"
          : "bg-ivoire/95 border-b border-transparent backdrop-blur-md"
      }`}
    >
      <Conteneur>
        {/* Grille en trois colonnes : logo à gauche, pilule de navigation centrée, actions à droite */}
        <div
          className={`grid grid-cols-[auto_1fr] items-center gap-4 transition-[height] duration-(--duree-normale) ease-douce lg:grid-cols-[auto_1fr_auto] ${
            defile ? "h-18 lg:h-20" : "h-20 lg:h-24"
          }`}
        >
          {/* Logo officiel */}
          <Link
            href="/"
            className="action shrink-0 flex items-center gap-3 group"
            aria-label={`${entreprise.nomAffiche} — retour à l'accueil`}
          >
            <Image
              src="/images/logo-comptoir-numerique.webp"
              alt={`Logo ${entreprise.nomAffiche}`}
              width={260}
              height={231}
              priority
              className={`w-auto transition-[height] duration-(--duree-normale) ease-douce group-hover:scale-105 ${
                defile ? "h-12 lg:h-14" : "h-14 lg:h-16"
              }`}
            />
          </Link>

          {/* Navigation bureau — capsule centrée avec effet glassmorphism doux */}
          <nav
            aria-label="Navigation principale"
            className="hidden justify-self-center lg:block"
          >
            <ul className="flex items-center gap-1 rounded-full bg-ivoire-fonce/65 p-1.5 ring-1 ring-anthracite/8 ring-inset backdrop-blur-sm shadow-inner">
              {liensNavigation.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    aria-current={estActif(lien.href) ? "page" : undefined}
                    className={`relative inline-flex rounded-full px-4 py-2 text-petit font-semibold transition-[background-color,color,box-shadow,transform] duration-(--duree-rapide) ease-douce ${
                      estActif(lien.href)
                        ? "bg-ivoire text-foret shadow-douce scale-100"
                        : "text-anthracite-doux hover:bg-ivoire/80 hover:text-foret"
                    }`}
                  >
                    {lien.libelle}
                    {estActif(lien.href) && (
                      <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-bronze" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 justify-self-end">
            {/* Bouton Devis principal en bronze / forêt */}
            <Link
              href={lienDevis.href}
              className="action inline-flex items-center gap-2 rounded-action bg-foret px-4 py-2.5 text-mention font-semibold text-ivoire shadow-action hover:bg-foret-clair hover:shadow-action-survol sm:px-5 sm:text-petit"
            >
              <span>{lienDevis.libelle}</span>
              <Icone nom="fleche" className="size-4" />
            </Link>

            {/* Bouton menu mobile */}
            <button
              type="button"
              onClick={() => setMenuOuvert((v) => !v)}
              aria-expanded={menuOuvert}
              aria-controls="menu-mobile"
              className="action inline-flex size-11 items-center justify-center rounded-action bg-ivoire text-foret ring-1 ring-inset ring-foret/15 hover:bg-foret/[0.04] hover:ring-foret/30 lg:hidden shadow-douce"
            >
              <span className="sr-only">
                {menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
              </span>
              <Icone nom={menuOuvert ? "fermer" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </Conteneur>

      {/* Panneau de navigation mobile — se déploie en hauteur */}
      <div
        id="menu-mobile"
        inert={!menuOuvert}
        className={`overflow-hidden border-t bg-ivoire transition-[max-height,opacity] duration-(--duree-normale) ease-sortie lg:hidden ${
          menuOuvert
            ? "max-h-[32rem] border-anthracite/8 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <Conteneur className="py-3">
          <nav aria-label="Navigation mobile">
            <ul className="flex flex-col">
              {liensNavigation.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    onClick={fermerMenu}
                    aria-current={estActif(lien.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-anthracite/8 py-4 text-titre-4 transition-colors duration-(--duree-rapide) ${
                      estActif(lien.href) ? "text-foret" : "text-anthracite"
                    }`}
                  >
                    {lien.libelle}
                    {estActif(lien.href) && (
                      <span
                        className="size-1.5 rounded-full bg-bronze"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-5 mb-2 flex flex-col gap-3">
            <Link
              href={lienDevis.href}
              onClick={fermerMenu}
              className="action inline-flex items-center justify-center rounded-action bg-foret px-5 py-3.5 text-corps font-semibold text-ivoire shadow-action"
            >
              {lienDevis.libelle}
            </Link>
            <a
              href={entreprise.telephone.lien}
              onClick={fermerMenu}
              className="action inline-flex items-center justify-center gap-2 rounded-action px-5 py-3.5 text-corps font-semibold text-foret ring-1 ring-inset ring-foret/20"
            >
              <Icone nom="telephoneAppel" className="size-5" />
              {entreprise.telephone.affichage}
            </a>
          </div>
        </Conteneur>
      </div>
    </header>
  );
}
