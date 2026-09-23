"use client";

import { useState, useMemo } from "react";
import { universProduits } from "@/content/univers";
import { produits } from "@/content/produits";
import { lienWhatsApp } from "@/content/entreprise";
import CarteProduit from "@/components/ui/CarteProduit";
import Icone from "@/components/ui/Icone";

export default function FiltreCatalogue() {
  const [recherche, setRecherche] = useState("");
  const [universActif, setUniversActif] = useState("tous");

  const universMap = useMemo(() => {
    const map = {};
    universProduits.forEach((u) => {
      map[u.slug] = u;
    });
    return map;
  }, []);

  const produitsFiltres = useMemo(() => {
    return produits.filter((p) => {
      const correspondUnivers =
        universActif === "tous" || p.univers === universActif;

      const universNom = universMap[p.univers]?.nom || "";
      const query = recherche.trim().toLowerCase();
      const correspondRecherche =
        !query ||
        p.nom.toLowerCase().includes(query) ||
        universNom.toLowerCase().includes(query);

      return correspondUnivers && correspondRecherche;
    });
  }, [recherche, universActif, universMap]);

  return (
    <div className="space-y-8">
      {/* Barre d'outils interactive : Filtres par onglets + Recherche instantanée */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl bg-ivoire-fonce/70 p-4 border border-anthracite/8 shadow-douce backdrop-blur-sm">
        {/* Onglets des univers */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setUniversActif("tous")}
            className={`action rounded-full px-4 py-2 text-mention sm:text-petit font-semibold transition-all ${
              universActif === "tous"
                ? "bg-foret text-ivoire shadow-action"
                : "bg-ivoire text-anthracite hover:bg-ivoire-clair border border-anthracite/10"
            }`}
          >
            Tous ({produits.length})
          </button>

          {universProduits.map((u) => {
            const actif = universActif === u.slug;
            const nb = produits.filter((p) => p.univers === u.slug).length;
            return (
              <button
                key={u.slug}
                type="button"
                onClick={() => setUniversActif(u.slug)}
                className={`action inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-mention sm:text-petit font-semibold transition-all ${
                  actif
                    ? "bg-foret text-ivoire shadow-action"
                    : "bg-ivoire text-anthracite hover:bg-ivoire-clair border border-anthracite/10"
                }`}
              >
                <Icone
                  nom={u.icone}
                  className={`size-4 ${actif ? "text-bronze-clair" : "text-bronze"}`}
                />
                <span>{u.nom}</span>
                {nb > 0 && (
                  <span
                    className={`ml-1 text-[0.6875rem] font-bold ${
                      actif ? "text-bronze-clair" : "text-anthracite-doux"
                    }`}
                  >
                    ({nb})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Champ de recherche */}
        <div className="relative min-w-[240px] md:w-72">
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher un produit..."
            className="w-full rounded-full border border-anthracite/15 bg-ivoire px-4 py-2.5 pl-10 text-petit text-anthracite placeholder:text-anthracite-doux/70 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/20 shadow-inner"
          />
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-anthracite-doux/60">
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          {recherche && (
            <button
              type="button"
              onClick={() => setRecherche("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-anthracite-doux hover:text-foret text-mention font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grille des produits filtrés */}
      {produitsFiltres.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {produitsFiltres.map((produit) => (
            <div key={produit.slug} className="flex flex-col">
              <CarteProduit produit={produit} />
              <div className="mt-2">
                <a
                  href={lienWhatsApp(
                    `Bonjour Le Comptoir Numérique, je souhaite me renseigner sur la disponibilité du produit : ${produit.nom}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action inline-flex w-full items-center justify-center gap-1.5 rounded-action bg-foret/[0.06] py-2 px-3 text-mention font-semibold text-foret hover:bg-[#25D366]/15 hover:text-[#128C7E] transition-colors"
                >
                  <Icone nom="whatsapp" className="size-3.5 text-[#25D366]" />
                  <span>Demander sur WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-anthracite/20 bg-ivoire-fonce/50 p-12 text-center">
          <p className="text-titre-4 text-foret font-semibold">
            Aucun produit ne correspond à votre recherche
          </p>
          <p className="mt-2 text-petit text-anthracite-doux">
            Essayez un autre mot-clé ou contactez-nous directement pour savoir si nous pouvons vous le procurer.
          </p>
          <div className="mt-6">
            <a
              href={lienWhatsApp(
                recherche
                  ? `Bonjour Le Comptoir Numérique, avez-vous en stock : ${recherche} ?`
                  : undefined
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="action inline-flex items-center gap-2 rounded-action bg-foret px-5 py-3 text-petit font-semibold text-ivoire shadow-action hover:bg-foret-clair"
            >
              <Icone nom="whatsapp" className="size-4" />
              <span>Demander la disponibilité à un conseiller</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
