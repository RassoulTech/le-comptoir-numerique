import Link from "next/link";
import { notFound } from "next/navigation";
import { universProduits, trouverUnivers } from "@/content/univers";
import { produits } from "@/content/produits";
import { entreprise, lienWhatsAppPole } from "@/content/entreprise";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import Apparition from "@/components/ui/Apparition";
import Icone from "@/components/ui/Icone";
import Photo from "@/components/ui/Photo";
import MotifUnivers from "@/components/ui/MotifUnivers";
import Bouton from "@/components/ui/Bouton";
import CarteProduit from "@/components/ui/CarteProduit";
import BlocCta from "@/components/ui/BlocCta";
import MentionPhotos from "@/components/ui/MentionPhotos";

/**
 * Pages catégorie du pôle Produits :
 *   /produits/electronique
 *   /produits/electrique
 *   /produits/electromenager
 *   /produits/technologie-medias
 *
 * Contenu entièrement piloté par content/univers.js et
 * content/produits.js : ajouter un produit dans la donnée suffit pour
 * qu'il apparaisse sur sa page catégorie. Aucune donnée n'est inventée :
 * seul ce que l'entreprise a confirmé est affiché.
 */

/** Génère les quatre pages catégorie en statique au build. */
export function generateStaticParams() {
  return universProduits.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const univers = trouverUnivers(slug);
  if (!univers || univers.slug === "solutions-numeriques") return {};

  return metadonnees({
    titre: `${univers.nom} — Produits`,
    description: `${univers.description} Chez Le Comptoir Numérique à Thiès, Sénégal.`,
    chemin: `/produits/${univers.slug}`,
  });
}

export default async function PageCategorieProduits({ params }) {
  const { slug } = await params;
  const univers = trouverUnivers(slug);
  // Le pôle numérique n'est pas une catégorie produits : 404 propre.
  if (!univers || univers.slug === "solutions-numeriques") notFound();

  const produitsCategorie = produits.filter((p) => p.univers === univers.slug);
  const autresCategories = universProduits.filter((u) => u.slug !== slug);
  const poleProduits = entreprise.poles.produits;

  return (
    <>
      {/* ---------------------------------------------------------------
          HERO CATÉGORIE
      --------------------------------------------------------------- */}
      <Section fond="foret" niveauTitre={1} intitule="Nos produits">
        <Conteneur>
          <Apparition>
            <nav
              aria-label="Fil d'ariane"
              className="text-mention text-ivoire/60"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-ivoire hover:underline">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li>
                  <Link
                    href="/produits"
                    className="hover:text-ivoire hover:underline"
                  >
                    Produits
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li
                  aria-current="page"
                  className="font-semibold text-bronze-clair"
                >
                  {univers.nom}
                </li>
              </ol>
            </nav>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <p className="filet-bronze text-intitule uppercase text-bronze-clair">
                  {univers.signature}
                </p>
                <h1 className="mt-5 text-titre-1 text-ivoire">
                  {univers.nom}
                </h1>
                <p className="mt-6 max-w-2xl text-chapo text-ivoire/80">
                  {univers.description}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Bouton
                    href={lienWhatsAppPole(
                      "produits",
                      `Bonjour, je vous contacte au sujet de votre catégorie « ${univers.nom} ».`,
                    )}
                    variante="bronze"
                    taille="grand"
                  >
                    <Icone nom="whatsapp" className="size-5" />
                    Demander la disponibilité
                  </Bouton>
                  <Bouton href="/produits" variante="contourClair" taille="grand">
                    Toutes les catégories
                  </Bouton>
                </div>

                {univers.aConfirmer && (
                  <p className="mt-6 max-w-xl text-mention text-ivoire/70">
                    Cette catégorie est en cours de validation : écrivez-nous
                    pour confirmer la disponibilité d&apos;un matériel précis.
                  </p>
                )}
              </div>

              <Apparition delai={120}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-bloc border border-ivoire/15 bg-foret-fonce shadow-relief">
                  {univers.visuel?.image ? (
                    <Photo
                      visuel={univers.visuel}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      largeur={1200}
                      prioritaire
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <MotifUnivers
                      slug={univers.slug}
                      sombre
                      className="size-full"
                    />
                  )}
                  <div
                    aria-hidden="true"
                    className="voile-photo pointer-events-none absolute inset-0"
                  />
                </div>
              </Apparition>
            </div>
          </Apparition>
        </Conteneur>
      </Section>

      {/* ---------------------------------------------------------------
          FAMILLES DE LA CATÉGORIE
      --------------------------------------------------------------- */}
      <Section fond="ivoire" intitule="Ce que nous proposons">
        <Apparition>
          <h2 className="text-titre-2 text-foret">
            Les familles de matériel de cette catégorie
          </h2>
          <p className="mt-4 max-w-3xl text-chapo text-anthracite-doux">
            Voici ce que cette catégorie couvre. Pour un modèle ou une
            référence précise, contactez-nous : nous confirmons sur demande.
          </p>
        </Apparition>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {univers.familles.map((famille, index) => (
            <Apparition as="li" key={famille} delai={(index % 3) * 70}>
              <div className="carte-interactive flex h-full items-center gap-3.5 rounded-carte border border-anthracite/8 bg-ivoire-clair p-5 shadow-douce">
                <Icone nom="check" className="size-4 shrink-0 text-bronze" />
                <span className="text-petit font-medium text-anthracite">
                  {famille}
                </span>
              </div>
            </Apparition>
          ))}
        </ul>
      </Section>

      {/* ---------------------------------------------------------------
          PRODUITS DE LA CATÉGORIE
      --------------------------------------------------------------- */}
      {produitsCategorie.length > 0 && (
        <Section fond="ivoire-fonce" intitule="Le catalogue">
          <Apparition>
            <h2 className="text-titre-2 text-foret">
              {produitsCategorie.length}{" "}
              {produitsCategorie.length > 1 ? "produits" : "produit"} dans
              cette catégorie
            </h2>
            <p className="mt-4 max-w-3xl text-chapo text-anthracite-doux">
              Les familles confirmées par la boutique. Les photos illustrent
              le type de matériel : chaque modèle disponible est confirmé sur
              demande.
            </p>
          </Apparition>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {produitsCategorie.map((produit, index) => (
              <Apparition key={produit.slug} delai={(index % 4) * 60}>
                <CarteProduit produit={produit} />
              </Apparition>
            ))}
          </div>

          <MentionPhotos mention="Photos d'illustration : elles présentent des familles de produits, et non les marques ou modèles précis disponibles en boutique." />
        </Section>
      )}

      {/* ---------------------------------------------------------------
          AUTRES CATÉGORIES
      --------------------------------------------------------------- */}
      <Section fond="ivoire" intitule="Continuer la découverte">
        <Apparition>
          <h2 className="text-titre-2 text-foret">Nos autres catégories</h2>
        </Apparition>
        {/* Colonnes explicites dès le mobile (même raison que les pages
            solutions : éviter l'élargissement au max-content). */}
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {autresCategories.map((autre, index) => (
            <Apparition as="li" key={autre.slug} delai={index * 70}>
              <Link
                href={`/produits/${autre.slug}`}
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

      {/* ---------------------------------------------------------------
          COMMANDE — SANS INVENTION
      --------------------------------------------------------------- */}
      <Section fond="ivoire-fonce">
        <Apparition className="rounded-bloc border border-anthracite/10 bg-ivoire p-6 shadow-relief sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
              <Icone nom="telephoneAppel" className="size-7" />
            </span>
            <div className="flex-1">
              <h2 className="text-titre-3 font-bold text-foret">
                Besoin d&apos;un modèle ou d&apos;une référence précise ?
              </h2>
              <p className="mt-2 leading-relaxed text-petit text-anthracite-doux">
                Contactez le pôle Produits ({poleProduits.telephone.affichage})
                par téléphone ou WhatsApp : nous vérifions la disponibilité du
                matériel et vous répondons directement.
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