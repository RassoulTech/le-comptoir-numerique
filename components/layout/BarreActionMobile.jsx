"use client";

import Link from "next/link";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import { lienDevis } from "@/lib/navigation";
import Icone from "@/components/ui/Icone";

/**
 * Barre d'actions rapides flottante sur mobile.
 * Apporte une conversion ultra fluide sur smartphone (Appel, WhatsApp, Devis).
 */
export default function BarreActionMobile() {
  return (
    <aside
      aria-label="Actions rapides de contact"
      className="fixed bottom-0 inset-x-0 z-40 p-2.5 lg:hidden pointer-events-none"
    >
      <div className="mx-auto max-w-md pointer-events-auto rounded-full glass-header border border-anthracite/10 shadow-relief p-1.5 flex items-center justify-between gap-1.5 backdrop-blur-xl">
        {/* Appel téléphonique direct */}
        <a
          href={entreprise.telephone.lien}
          className="action flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-ivoire text-foret text-mention font-semibold shadow-douce hover:bg-ivoire-fonce"
        >
          <Icone nom="telephoneAppel" className="size-4 text-foret" />
          <span>Appeler</span>
        </a>

        {/* WhatsApp direct */}
        <a
          href={lienWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="action flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#25D366]/15 text-[#128C7E] text-mention font-semibold border border-[#25D366]/30 hover:bg-[#25D366]/25"
        >
          <Icone nom="whatsapp" className="size-4 text-[#128C7E]" />
          <span>WhatsApp</span>
        </a>

        {/* Devis express */}
        <Link
          href={lienDevis.href}
          className="action flex-1 inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-foret text-ivoire text-mention font-semibold shadow-action hover:bg-foret-clair"
        >
          <span>Devis</span>
          <Icone nom="fleche" className="size-3.5" />
        </Link>
      </div>
    </aside>
  );
}
