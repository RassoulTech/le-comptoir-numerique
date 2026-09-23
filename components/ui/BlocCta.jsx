import { entreprise, lienWhatsApp } from "@/content/entreprise";
import Conteneur from "./Conteneur";
import Bouton from "./Bouton";
import Icone from "./Icone";
import Apparition from "./Apparition";

/**
 * Bloc d'appel à l'action réutilisé en bas des pages.
 * Propose toujours les deux chemins : devis écrit ou discussion WhatsApp.
 */
export default function BlocCta({
  titre = "Parlons de votre besoin",
  texte = "Que vous cherchiez un équipement précis ou une solution numérique pour votre activité, expliquez-nous votre besoin : nous revenons vers vous avec une proposition claire.",
}) {
  return (
    <section className="texture-hero relative overflow-hidden border-t border-bronze/20 bg-foret text-ivoire">
      <div
        aria-hidden="true"
        className="grille-hero pointer-events-none absolute inset-0 opacity-[0.05]"
      />

      <Conteneur className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Apparition as="h2" className="text-titre-2 text-ivoire">
            {titre}
          </Apparition>

          <Apparition
            as="p"
            delai={80}
            className="mt-5 text-chapo text-ivoire/75"
          >
            {texte}
          </Apparition>

          <Apparition
            delai={160}
            className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Bouton href="/devis" variante="clair" taille="grand">
              Demander un devis
              <Icone nom="fleche" className="size-5" />
            </Bouton>
            <Bouton
              href={lienWhatsApp()}
              variante="contourClair"
              taille="grand"
            >
              <Icone nom="whatsapp" className="size-5" />
              Discuter sur WhatsApp
            </Bouton>
          </Apparition>

          <Apparition
            as="p"
            delai={240}
            className="mt-7 text-mention text-ivoire/60"
          >
            Ou appelez directement le{" "}
            <a
              href={entreprise.telephone.lien}
              className="font-semibold text-bronze-clair underline-offset-4 transition-colors duration-(--duree-rapide) hover:text-ivoire hover:underline"
            >
              {entreprise.telephone.affichage}
            </a>
          </Apparition>
        </div>
      </Conteneur>
    </section>
  );
}
