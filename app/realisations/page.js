import { realisations } from "@/content/prestations";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import BlocCta from "@/components/ui/BlocCta";
import Icone from "@/components/ui/Icone";
import Apparition from "@/components/ui/Apparition";
import Placeholder from "@/components/ui/Placeholder";
import Bouton from "@/components/ui/Bouton";

export const metadata = metadonnees({
  titre: "Nos réalisations & Projets",
  description:
    "Découvrez les projets numériques réalisés par Le Comptoir Numérique : sites web, applications et outils de gestion pour les entreprises.",
  chemin: "/realisations",
});

export default function PageRealisations() {
  const projetsPublies = realisations.filter((projet) => !projet.aDefinir);
  const aucunProjetPublie = projetsPublies.length === 0;

  return (
    <>
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Portfolio & Études de cas"
        titre="Les réalisations du Comptoir Numérique"
        chapo="Découvrez nos projets numériques conçus pour nos clients : sites web, plateformes de gestion et outils métiers sur-mesure."
      />

      <Section fond="ivoire">
        {aucunProjetPublie && (
          <div className="mb-10 flex flex-col gap-5 rounded-2xl border border-dashed border-anthracite/25 bg-ivoire-fonce/70 p-6 sm:p-8 shadow-douce">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-foret text-ivoire shadow-douce">
                <Icone nom="web" className="size-6 text-bronze-clair" />
              </span>
              <div>
                <h2 className="text-titre-3 text-foret font-bold">
                  Portfolio en cours de constitution
                </h2>
                <p className="mt-2 max-w-2xl text-petit text-anthracite-doux leading-relaxed">
                  Les fiches ci-dessous sont des aperçus des typologies de projets que nous concevons. Elles seront enrichies des études de cas détaillées et retours d&apos;expérience au fur et à mesure des mises en ligne.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {realisations.map((projet, index) => (
            <Apparition key={projet.slug} delai={(index % 3) * 90}>
              <article className="carte-interactive flex h-full flex-col overflow-hidden rounded-2xl border border-anthracite/8 bg-ivoire-clair shadow-relief">
                {/* Visuel du projet */}
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-anthracite/10 bg-gradient-to-br from-foret to-foret-fonce text-ivoire">
                  {projet.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={projet.image}
                      alt={`Aperçu du projet ${projet.titre}`}
                      className="size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  ) : (
                    <div className="px-6 text-center">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ivoire/10 text-bronze-clair mb-2">
                        <Icone nom="web" className="size-6" />
                      </span>
                      <p className="text-mention text-ivoire/80 font-medium">
                        Étude de cas · {projet.categorie}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="badge-bronze">
                      {projet.aDefinir ? (
                        <Placeholder>{projet.categorie}</Placeholder>
                      ) : (
                        projet.categorie
                      )}
                    </span>
                  </div>

                  <h3 className="mt-4 text-titre-4 font-bold text-foret">
                    {projet.aDefinir ? (
                      <Placeholder>{projet.titre}</Placeholder>
                    ) : (
                      projet.titre
                    )}
                  </h3>

                  <p className="mt-2.5 flex-1 text-petit text-anthracite-doux leading-relaxed">
                    {projet.aDefinir ? (
                      <Placeholder>{projet.resume}</Placeholder>
                    ) : (
                      projet.resume
                    )}
                  </p>

                  <div className="mt-6 pt-4 border-t border-anthracite/8 flex items-center justify-between">
                    <Bouton href="/devis" variante="secondaire" taille="normal" className="w-full">
                      Initier un projet similaire
                    </Bouton>
                  </div>
                </div>
              </article>
            </Apparition>
          ))}
        </div>
      </Section>

      <BlocCta
        titre="Votre projet peut être le prochain !"
        texte="Présentez-nous vos objectifs. Nous concevons une solution digitale sur-mesure pour votre structure."
      />
    </>
  );
}
