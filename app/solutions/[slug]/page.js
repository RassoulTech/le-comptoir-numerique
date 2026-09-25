import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions } from "@/content/prestations";
import { entreprise, lienWhatsAppPole } from "@/content/entreprise";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import Apparition from "@/components/ui/Apparition";
import Icone from "@/components/ui/Icone";
import Photo from "@/components/ui/Photo";
import Bouton from "@/components/ui/Bouton";
import BlocCta from "@/components/ui/BlocCta";

/**
 * Pages détail des solutions numériques.
 *
 * Une seule implémentation dynamique pour les sept offres : la structure
 * est fixe (Hero · Problématique · Notre approche · Ce que nous
 * réalisons · Processus · Bénéfices · CTA), le contenu vient
 * entièrement de content/prestations.js. Ajouter ou modifier une offre
 * ne demande aucun changement ici.
 */

/** Génère les sept pages en statique au build. */
export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return {};

  return metadonnees({
    titre: `${solution.nom} — Solutions numériques`,
    description: solution.description,
    chemin: `/solutions/${solution.slug}`,
  });
}

/** Fil d'ariane accessible, cohérent sur toutes les pages détail. */
function FilAriane({ nom }) {
  return (
    <nav aria-label="Fil d'ariane" className="text-mention text-ivoire/60">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-ivoire hover:underline">
            Accueil
          </Link>
        </li>
        <li aria-hidden="true">·</li>
        <li>
          <Link
            href="/solutions-numeriques"
            className="hover:text-ivoire hover:underline"
          >
            Solutions numériques
          </Link>
        </li>
        <li aria-hidden="true">·</li>
        <li aria-current="page" className="font-semibold text-bronze-clair">
          {nom}
        </li>
      </ol>
    </nav>
  );
}

export default async function PageSolution({ params }) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const autreSolutions = solutions.filter((s) => s.slug !== slug);

  return (
    <>
      {/* ---------------------------------------------------------------
          HERO
      --------------------------------------------------------------- */}
      <Section fond="foret" niveauTitre={1} intitule="Solutions numériques">
        <Conteneur>
          <Apparition>
            <FilAriane nom={solution.nom} />

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <p className="filet-bronze text-intitule uppercase text-bronze-clair">
                  {solution.signature}
                </p>
                <h1 className="mt-5 text-titre-1 text-ivoire">
                  {solution.nom}
                </h1>
                <p className="mt-6 max-w-2xl text-chapo text-ivoire/80">
                  {solution.description}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Bouton href="/devis" variante="bronze" taille="grand">
                    Discuter de mon projet
                    <Icone nom="fleche" className="size-5" />
                  </Bouton>
                  <Bouton
                    href={lienWhatsAppPole("solutions")}
                    variante="contourClair"
                    taille="grand"
                  >
                    <Icone nom="whatsapp" className="size-5" />
                    WhatsApp {entreprise.poles.solutions.whatsapp.affichage}
                  </Bouton>
                </div>
              </div>

              {solution.visuel?.image && (
                <Apparition delai={120}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-bloc border border-ivoire/15 bg-foret-fonce shadow-relief">
                    <Photo
                      visuel={solution.visuel}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      largeur={1200}
                      prioritaire
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Apparition>
              )}
            </div>
          </Apparition>
        </Conteneur>
      </Section>

      {/* ---------------------------------------------------------------
          PROBLÉMATIQUE
      --------------------------------------------------------------- */}
      <Section fond="ivoire" intitule="Le problème">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <Apparition>
            <h2 className="text-titre-2 text-foret">
              Ce que beaucoup de structures vivent
            </h2>
            <p className="mt-6 text-chapo text-anthracite-doux">
              {solution.probleme}
            </p>
          </Apparition>

          <Apparition delai={120}>
            <ul className="grid gap-4">
              {solution.constats.map((constat) => (
                <li
                  key={constat}
                  className="flex items-start gap-4 rounded-carte border border-anthracite/8 bg-ivoire-clair p-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-2 shrink-0 rounded-full bg-bronze"
                  />
                  <span className="text-corps text-anthracite">{constat}</span>
                </li>
              ))}
            </ul>
          </Apparition>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          NOTRE APPROCHE
      --------------------------------------------------------------- */}
      <Section fond="foret" intitule="Notre approche">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Apparition>
            <h2 className="text-titre-2 text-ivoire">Notre approche</h2>
            <p className="mt-6 text-chapo text-ivoire/80">
              {solution.approche}
            </p>
          </Apparition>

          <Apparition delai={120}>
            <ol className="grid gap-6 border-l border-ivoire/20 pl-6">
              {solution.processus.map((etape, index) => (
                <li key={etape.titre} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[calc(1.5rem+0.45rem)] top-1 flex size-5 items-center justify-center rounded-full bg-bronze text-[0.65rem] font-bold text-foret-fonce"
                  >
                    {index + 1}
                  </span>
                  <h3 className="text-titre-4 font-bold text-ivoire">
                    {etape.titre}
                  </h3>
                  <p className="mt-1.5 text-petit leading-relaxed text-ivoire/75">
                    {etape.texte}
                  </p>
                </li>
              ))}
            </ol>
          </Apparition>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          CE QUE NOUS RÉALISONS
      --------------------------------------------------------------- */}
      <Section fond="ivoire" intitule="Ce que nous réalisons">
        <Apparition>
          <h2 className="text-titre-2 text-foret">
            Concrètement, ce que nous construisons
          </h2>
        </Apparition>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {solution.realise.map((bloc, index) => (
            <Apparition key={bloc.titre} delai={(index % 2) * 90}>
              <div className="carte-interactive h-full rounded-carte border border-anthracite/8 bg-ivoire-clair p-7 shadow-douce">
                <h3 className="text-titre-3 text-foret">{bloc.titre}</h3>
                <p className="mt-3 text-corps text-anthracite-doux">
                  {bloc.texte}
                </p>
              </div>
            </Apparition>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          BÉNÉFICES
      --------------------------------------------------------------- */}
      <Section fond="ivoire-fonce" intitule="Bénéfices">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Apparition>
            <h2 className="text-titre-2 text-foret">Ce que vous y gagnez</h2>
            <p className="mt-6 text-chapo text-anthracite-doux">
              Des effets concrets, pas des promesses générales : chaque
              projet se juge à ce qu&apos;il change dans votre quotidien.
            </p>
          </Apparition>

          <Apparition delai={120}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {solution.benefices.map((benefice) => (
                <li
                  key={benefice}
                  className="flex items-start gap-3 rounded-douce border border-anthracite/6 bg-ivoire p-5"
                >
                  <Icone
                    nom="check"
                    className="mt-1 size-4 shrink-0 text-bronze-texte"
                  />
                  <span className="text-petit font-medium text-anthracite">
                    {benefice}
                  </span>
                </li>
              ))}
            </ul>
          </Apparition>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          AUTRES SOLUTIONS
      --------------------------------------------------------------- */}
      <Section fond="ivoire" intitule="Continuer la découverte">
        <Apparition>
          <h2 className="text-titre-2 text-foret">Nos autres solutions</h2>
        </Apparition>
        {/* Colonnes explicites dès le mobile : sans elles, la colonne
            implicite s'élargit au max-content du texte tronqué et provoque
            un défilement horizontal. */}
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {autreSolutions.map((autre, index) => (
            <Apparition as="li" key={autre.slug} delai={(index % 3) * 70}>
              <Link
                href={`/solutions/${autre.slug}`}
                className="carte-interactive flex h-full items-center gap-4 rounded-carte border border-anthracite/8 bg-ivoire-clair p-5 shadow-douce hover:border-bronze/40"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-douce bg-foret/[0.07] text-foret">
                  <Icone nom={autre.icone} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-titre-4 text-foret">
                    {autre.nom}
                  </span>
                  <span className="mt-0.5 block truncate text-mention text-anthracite-doux">
                    {autre.signature}
                  </span>
                </span>
                <Icone nom="fleche" className="size-4 shrink-0 text-bronze" />
              </Link>
            </Apparition>
          ))}
        </ul>
      </Section>

      <BlocCta
        titre={`Un besoin en ${solution.nom.toLowerCase()} ?`}
        texte="Décrivez-nous votre situation : nous revenons vers vous avec une proposition claire, sans engagement."
      />
    </>
  );
}