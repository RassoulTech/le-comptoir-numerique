import { universProduits } from "@/content/univers";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import BlocCta from "@/components/ui/BlocCta";
import Icone from "@/components/ui/Icone";
import Apparition from "@/components/ui/Apparition";
import CarteUnivers from "@/components/ui/CarteUnivers";
import MentionPhotos from "@/components/ui/MentionPhotos";
import FiltreCatalogue from "@/components/produits/FiltreCatalogue";

export const metadata = metadonnees({
  titre: "Nos produits — Électronique, électrique, électroménager, technologie",
  description:
    "Le catalogue du Comptoir Numérique à Thiès : électronique, matériel électrique, électroménager et technologie & médias. Disponibilité confirmée par WhatsApp ou téléphone.",
  chemin: "/produits",
});

export default function PageProduits() {
  const majeurs = universProduits.filter((u) => u.rang === "majeur");
  const secondaires = universProduits.filter((u) => u.rang === "secondaire");

  return (
    <>
      {/* ---------------------------------------------------------------
          HERO — NOS PRODUITS
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Pôle Produits"
        titre="NOS PRODUITS"
        chapo="Des équipements pour votre quotidien, vos besoins et vos projets."
      >
        <Apparition className="mt-8 max-w-2xl">
          <p className="text-petit leading-relaxed text-ivoire/75">
            Quatre catégories, une même exigence : du matériel utile et
            vérifié. Chaque catégorie a sa page détaillée ; pour un modèle
            précis, nous confirmons la disponibilité par WhatsApp ou
            téléphone.
          </p>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          LES QUATRE CATÉGORIES
      --------------------------------------------------------------- */}
      <Section
        fond="ivoire"
        intitule="Catégories"
        titre="Quatre catégories pour équiper tout ce qui compte"
        chapo="De la rallonge au climatiseur, de l'écouteur au ring light : la boutique couvre les besoins des particuliers, des professionnels et des entreprises."
      >
        {/* Rang majeur — grandes cartes */}
        <div className="grid gap-6 md:grid-cols-2">
          {majeurs.map((u, index) => (
            <Apparition key={u.slug} delai={index * 90}>
              <CarteUnivers univers={u} />
            </Apparition>
          ))}
        </div>

        {/* Rang secondaire — cartes horizontales */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaires.map((u, index) => (
            <Apparition key={u.slug} delai={index * 90}>
              <CarteUnivers univers={u} />
            </Apparition>
          ))}
        </div>

        <MentionPhotos mention="Photos d'illustration : elles présentent des familles de produits, et non les marques ou modèles précis disponibles en boutique." />
      </Section>

      {/* ---------------------------------------------------------------
          CATALOGUE INTERACTIF
      --------------------------------------------------------------- */}
      <section className="bg-ivoire-fonce py-16 sm:py-20">
        <Conteneur>
          <Apparition className="mb-10">
            <p className="filet-bronze text-intitule uppercase text-bronze-texte">
              Recherche rapide
            </p>
            <h2 className="mt-4 text-titre-2 text-foret">
              Trouvez ce que vous cherchez
            </h2>
            <p className="mt-3 text-chapo text-anthracite-doux">
              Filtrez par catégorie ou recherchez directement le produit ou
              l&apos;accessoire dont vous avez besoin.
            </p>
          </Apparition>

          <FiltreCatalogue />
        </Conteneur>
      </section>

      {/* ---------------------------------------------------------------
          COMMANDE — FACTUEL, SANS PROMESSE INVENTÉE
      --------------------------------------------------------------- */}
      <Section fond="ivoire">
        <Apparition className="rounded-bloc border border-anthracite/10 bg-ivoire-clair p-6 shadow-relief sm:p-10">
          <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr]">
            <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
              <Icone nom="telephoneAppel" className="size-7" />
            </span>
            <div>
              <h2 className="text-titre-3 font-bold text-foret">
                Commander ou vérifier une disponibilité
              </h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-corps text-anthracite-doux">
                Le catalogue ci-dessus présente les familles de matériel que
                la boutique propose. Pour une référence précise, un modèle ou
                une quantité, contactez le pôle Produits par WhatsApp ou par
                téléphone : nous vérifions et nous vous répondons
                directement.
              </p>
            </div>
          </div>
        </Apparition>
      </Section>

      <BlocCta
        titre="Vous cherchez un équipement en particulier ?"
        texte="Écrivez-nous sur WhatsApp ou appelez-nous : nous confirmons la disponibilité et vous orientons."
      />
    </>
  );
}