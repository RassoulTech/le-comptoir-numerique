import { universProduits } from "@/content/univers";
import {
  solutions,
  servicesNumeriques,
  logicielsPrisEnCharge,
  mentionMarques,
} from "@/content/prestations";
import { entreprise } from "@/content/entreprise";
import { metadonnees } from "@/lib/seo";
import Conteneur from "@/components/ui/Conteneur";
import Section from "@/components/ui/Section";
import Bouton from "@/components/ui/Bouton";
import Icone from "@/components/ui/Icone";
import Apparition from "@/components/ui/Apparition";
import CarteUnivers from "@/components/ui/CarteUnivers";
import CarteService from "@/components/ui/CarteService";
import BlocCta from "@/components/ui/BlocCta";
import VisiteCinematique from "@/components/visite/VisiteCinematique";

export const metadata = metadonnees({
  titre: "Le Comptoir Numérique — Équipements technologiques & Solutions numériques à Thiès",
  titreComplet: true,
  description:
    "Produits électroniques, électriques, électroménagers et technologie à Thiès, et solutions numériques pour entreprises : sites web, applications, logiciels, automatisation, marketing digital, SEO.",
  chemin: "/",
});

/** Points forts : uniquement des éléments factuels et vérifiables. */
const pointsForts = [
  {
    icone: "entreprise",
    titre: "Deux expertises, un comptoir",
    texte:
      "Le matériel technologique et les solutions digitales au même endroit, sans multiplier les prestataires.",
    badge: "Synergie",
  },
  {
    icone: "accessoires",
    titre: "Quatre catégories de produits",
    texte:
      "Électronique, électrique, électroménager, technologie & médias : l'équipement du quotidien et des projets.",
    badge: "Matériel",
  },
  {
    icone: "accompagnement",
    titre: "Conseil & accompagnement",
    texte:
      "Orientation personnalisée sur le choix de vos équipements et la mise en place de vos outils numériques.",
    badge: "Expertise",
  },
  {
    icone: "localisation",
    titre: "Ancrage local à Thiès",
    texte:
      "Une équipe joignable directement par téléphone et WhatsApp, avec un interlocuteur dédié par pôle.",
    badge: "Proximité",
  },
];

export default function PageAccueil() {
  return (
    <>
      {/* ---------------------------------------------------------------
          VISITE CINÉMATIQUE
          Parcours à chapitres : arrivée → produits → transition →
          solutions → sortie → révélation → contact.
          Un lien « Passer la visite » est intégré à la visite.
      --------------------------------------------------------------- */}
      <VisiteCinematique />

      {/* ===============================================================
          CONTENU PRINCIPAL — le site reste complet sans la visite.
      =============================================================== */}
      <div id="apres-visite">
        {/* -----------------------------------------------------------
            POINTS FORTS
        ----------------------------------------------------------- */}
        <Section
          fond="ivoire"
          intitule="Pourquoi Le Comptoir"
          titre="L'alliance du matériel et du digital"
          chapo="Un partenaire technologique complet pour équiper votre espace et moderniser vos processus."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pointsForts.map((point, index) => (
              <Apparition key={point.titre} delai={index * 90}>
                <div className="carte-interactive flex h-full flex-col rounded-carte border border-anthracite/8 bg-ivoire-clair p-6 shadow-douce">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-douce bg-foret text-ivoire shadow-douce">
                      <Icone nom={point.icone} className="size-5" />
                    </span>
                    <span className="badge-bronze">{point.badge}</span>
                  </div>
                  <h3 className="mt-6 text-titre-4 text-foret">{point.titre}</h3>
                  <p className="mt-2.5 leading-relaxed text-petit text-anthracite-doux">
                    {point.texte}
                  </p>
                </div>
              </Apparition>
            ))}
          </div>
        </Section>

        {/* -----------------------------------------------------------
            LES DEUX PÔLES ET LEURS CONTACTS
        ----------------------------------------------------------- */}
        <Section
          fond="foret"
          intitule="Deux pôles, deux interlocuteurs"
          titre="Qui contacter, pour quoi ?"
          chapo="La vente de matériel et le conseil en solutions numériques ont chacun leur interlocuteur dédié : vous êtes toujours orienté vers la bonne personne."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {Object.entries(entreprise.poles).map(([cle, pole], index) => (
              <Apparition key={cle} delai={index * 110}>
                <div className="flex h-full flex-col rounded-bloc border border-ivoire/12 bg-ivoire/[0.05] p-8 backdrop-blur-sm">
                  <span className="badge-bronze-sombre">{pole.nom}</span>
                  <p className="mt-5 text-chapo text-ivoire">
                    {pole.description}
                  </p>

                  <div className="mt-7 grid gap-3 border-t border-ivoire/15 pt-7">
                    <a
                      href={pole.telephone.lien}
                      className="carte-interactive flex items-center gap-3.5 rounded-douce border border-ivoire/10 bg-ivoire/[0.05] px-4 py-3.5"
                    >
                      <Icone
                        nom="telephoneAppel"
                        className="size-4 shrink-0 text-bronze-clair"
                      />
                      <span className="text-petit font-semibold text-ivoire">
                        {pole.telephone.affichage}
                      </span>
                      <span className="ml-auto text-mention text-ivoire/85">
                        Téléphone
                      </span>
                    </a>
                    <a
                      href={`https://wa.me/${pole.whatsapp.numero}?text=${encodeURIComponent(`Bonjour, je vous contacte au sujet du ${pole.nom.toLowerCase()}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="carte-interactive flex items-center gap-3.5 rounded-douce border border-ivoire/10 bg-ivoire/[0.05] px-4 py-3.5"
                    >
                      <Icone
                        nom="whatsapp"
                        className="size-4 shrink-0 text-[#25D366]"
                      />
                      <span className="text-petit font-semibold text-ivoire">
                        {pole.whatsapp.affichage}
                      </span>
                      <span className="ml-auto text-mention text-ivoire/85">
                        WhatsApp
                      </span>
                    </a>
                  </div>

                  <div className="mt-auto pt-7">
                    <Bouton
                      href={cle === "produits" ? "/produits" : "/solutions-numeriques"}
                      variante="contourClair"
                    >
                      Voir ce pôle
                      <Icone nom="fleche" className="size-4" />
                    </Bouton>
                  </div>
                </div>
              </Apparition>
            ))}
          </div>
        </Section>

        {/* -----------------------------------------------------------
            CATÉGORIES PRODUITS
        ----------------------------------------------------------- */}
        <Section
          fond="ivoire"
          intitule="Catalogue d'équipements"
          titre="Explorez nos univers produits"
          chapo="Des accessoires multimédias aux installations électriques, découvrez les différentes familles de matériel de la boutique."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {universProduits.map((u, index) => (
              <Apparition key={u.slug} delai={index * 90}>
                <CarteUnivers univers={u} />
              </Apparition>
            ))}
          </div>

          <Apparition className="mt-12 flex justify-center">
            <Bouton href="/produits" variante="principal" taille="grand">
              Parcourir tout le catalogue
              <Icone nom="fleche" className="size-4" />
            </Bouton>
          </Apparition>
        </Section>

        {/* -----------------------------------------------------------
            SOLUTIONS NUMÉRIQUES
        ----------------------------------------------------------- */}
        <Section
          fond="ivoire-fonce"
          intitule="Pôle Solutions numériques"
          titre="Ce que nous concevons pour votre activité"
          chapo="Sites web, applications web, logiciels de gestion, automatisation, marketing digital, référencement, conseil : chaque offre a sa page détaillée."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Apparition key={solution.slug} delai={(index % 3) * 80}>
                <CarteService
                  service={solution}
                  href={`/solutions/${solution.slug}`}
                />
              </Apparition>
            ))}
          </div>

          <Apparition className="mt-12 flex justify-center">
            <Bouton href="/solutions-numeriques" variante="principal" taille="grand">
              Voir le pôle solutions numériques
              <Icone nom="fleche" className="size-4" />
            </Bouton>
          </Apparition>
        </Section>

        {/* -----------------------------------------------------------
            SERVICES NUMÉRIQUES — ASSISTANCE SUR VOS OUTILS
        ----------------------------------------------------------- */}
        <Section
          fond="ivoire"
          intitule="Assistance & formation"
          titre="Interventions sur les logiciels que vous utilisez"
          chapo="Installation, configuration, formation et assistance sur vos postes et applications, à partir de vos licences."
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {servicesNumeriques.map((service, index) => (
              <Apparition as="li" key={service.slug} delai={index * 70}>
                <div className="carte-interactive flex h-full flex-col rounded-carte border border-anthracite/8 bg-ivoire-clair p-5 shadow-douce">
                  <span className="inline-flex size-10 items-center justify-center rounded-douce bg-foret/[0.08] text-foret">
                    <Icone nom={service.icone} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-petit text-foret">
                    {service.nom}
                  </h3>
                </div>
              </Apparition>
            ))}
          </ul>

          <Apparition className="mt-10 flex flex-col gap-6 border-t border-anthracite/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {logicielsPrisEnCharge.map((famille) => (
                <span
                  key={famille.slug}
                  className="flex items-center gap-2.5 font-medium text-petit text-anthracite"
                >
                  <Icone nom={famille.icone} className="size-4 text-bronze" />
                  {famille.outils.join(", ")}
                </span>
              ))}
              <span className="text-mention text-anthracite-doux">
                (à partir de vos licences)
              </span>
            </div>

            <Bouton href="/solutions-numeriques" variante="secondaire">
              Découvrir nos services
              <Icone nom="fleche" className="size-4" />
            </Bouton>
          </Apparition>

          <p className="mt-6 text-mention text-anthracite-doux">
            {mentionMarques}
          </p>
        </Section>

        {/* -----------------------------------------------------------
            APPEL À L'ACTION FINAL
        ----------------------------------------------------------- */}
        <BlocCta />
      </div>
    </>
  );
}