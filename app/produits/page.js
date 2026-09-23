import { universProduits } from "@/content/univers";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import BlocCta from "@/components/ui/BlocCta";
import Icone from "@/components/ui/Icone";
import Apparition from "@/components/ui/Apparition";
import Photo from "@/components/ui/Photo";
import MotifUnivers from "@/components/ui/MotifUnivers";
import Placeholder from "@/components/ui/Placeholder";
import MentionPhotos from "@/components/ui/MentionPhotos";
import FiltreCatalogue from "@/components/produits/FiltreCatalogue";

export const metadata = metadonnees({
  titre: "Catalogue d'équipements & Produits",
  description:
    "Électronique, électrique, électroménager et technologie : découvrez les univers de produits du Comptoir Numérique à Thiès.",
  chemin: "/produits",
});

function SectionUniversDetail({ univers, index }) {
  const fondSourd = index % 2 === 1;

  return (
    <section
      id={univers.slug}
      className={`scroll-mt-28 py-16 sm:py-20 ${
        fondSourd ? "bg-ivoire-fonce/80" : "bg-ivoire"
      }`}
    >
      <Conteneur>
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            fondSourd ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Visuel de l'univers */}
          <Apparition>
            <div className="relative aspect-[4/3] overflow-hidden rounded-bloc bg-foret shadow-relief group">
              {univers.visuel?.image ? (
                <Photo
                  visuel={univers.visuel}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  largeur={1200}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <MotifUnivers
                  slug={univers.slug}
                  sombre
                  className="size-full transition-transform duration-700 group-hover:scale-105"
                />
              )}

              <div
                aria-hidden="true"
                className="voile-photo pointer-events-none absolute inset-0"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center gap-2.5">
                  <Icone
                    nom={univers.icone}
                    className="size-4 text-bronze-clair"
                  />
                  <span className="text-intitule text-bronze-clair uppercase">
                    {univers.signature}
                  </span>
                </div>
                <p className="mt-2.5 text-titre-3 text-ivoire">{univers.nom}</p>
              </div>
            </div>
          </Apparition>

          {/* Contenu descriptif */}
          <Apparition delai={120}>
            <div className="inline-flex items-center gap-2">
              <span className="badge-bronze">{univers.signature}</span>
            </div>
            <h2 className="mt-4 text-titre-2 text-foret">{univers.nom}</h2>

            <p className="mt-4 text-chapo text-anthracite-doux leading-relaxed">
              {univers.description}
            </p>

            <div className="mt-8">
              <p className="text-petit font-semibold text-foret uppercase tracking-wider text-[0.8125rem]">
                Familles de matériels incluses :
              </p>
              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {univers.familles.map((famille) => (
                  <li
                    key={famille}
                    className="flex items-center gap-2.5 rounded-lg bg-ivoire-clair/70 p-2.5 border border-anthracite/6 text-petit text-anthracite shadow-douce"
                  >
                    <Icone
                      nom="check"
                      className="size-4 shrink-0 text-bronze"
                    />
                    <span className="font-medium">{famille}</span>
                  </li>
                ))}
              </ul>
            </div>

            {univers.aConfirmer && (
              <p className="mt-6 text-mention text-anthracite-doux">
                <Placeholder>
                  Disponibilités et modèles confirmés sur demande en boutique ou WhatsApp.
                </Placeholder>
              </p>
            )}
          </Apparition>
        </div>
      </Conteneur>
    </section>
  );
}

export default function PageProduits() {
  return (
    <>
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Catalogue & Équipements"
        titre="Nos matériels & univers de produits"
        chapo="De l'électronique de pointe aux équipements électriques et domestiques, explorez notre sélection disponible à Thiès."
      />

      {/* Section interactive de recherche et catalogue */}
      <section className="bg-ivoire py-12 sm:py-16">
        <Conteneur>
          <div className="mb-10">
            <h2 className="text-titre-2 text-foret">
              Recherche rapide & Disponibilité
            </h2>
            <p className="mt-2 text-chapo text-anthracite-doux">
              Filtrez par univers ou recherchez directement le produit ou l&apos;accessoire dont vous avez besoin.
            </p>
          </div>

          <FiltreCatalogue />
        </Conteneur>
      </section>

      {/* Détail par univers */}
      {universProduits.map((u, index) => (
        <SectionUniversDetail key={u.slug} univers={u} index={index} />
      ))}

      {/* Information de commande et réassurance */}
      <Section fond="ivoire-fonce">
        <Apparition className="rounded-bloc border border-anthracite/10 bg-ivoire p-6 sm:p-10 shadow-relief">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
              <Icone nom="accessoires" className="size-7" />
            </span>
            <div className="flex-1">
              <h2 className="text-titre-3 text-foret font-bold">
                Besoin d&apos;un modèle ou d&apos;une référence spécifique ?
              </h2>
              <p className="mt-2 text-petit text-anthracite-doux leading-relaxed">
                Notre équipe vérifie instantanément les stocks physiques et les arrivages. 
                Contactez-nous directement avec la référence souhaitée.
              </p>
            </div>
          </div>
        </Apparition>

        <MentionPhotos mention="Photos d'illustration. Elles présentent des familles de produits, et non les marques ou modèles exclusifs en boutique." />
      </Section>

      <BlocCta
        titre="Vous cherchez un équipement en particulier ?"
        texte="Écrivez-nous sur WhatsApp ou par téléphone. Nous vous confirmons la disponibilité sous quelques minutes."
      />
    </>
  );
}
