import Link from "next/link";
import { univers } from "@/content/univers";
import {
  solutions,
  servicesNumeriques,
  logicielsPrisEnCharge,
} from "@/content/prestations";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import { metadonnees } from "@/lib/seo";
import Conteneur from "@/components/ui/Conteneur";
import Section from "@/components/ui/Section";
import Bouton from "@/components/ui/Bouton";
import Icone from "@/components/ui/Icone";
import Apparition from "@/components/ui/Apparition";
import HeroSection from "@/components/ui/HeroSection";
import CarteUnivers from "@/components/ui/CarteUnivers";
import CarteService from "@/components/ui/CarteService";
import BlocCta from "@/components/ui/BlocCta";

export const metadata = metadonnees({
  titre: "Le Comptoir Numérique — Équipements technologiques & Solutions à Thiès",
  titreComplet: true,
  description:
    "Vente d'équipements technologiques à Thiès et solutions numériques pour entreprises : sites web, applications, automatisation et gestion.",
  chemin: "/",
});

/** Points forts : éléments factuels et vérifiables avec détails d'impact */
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
    titre: "Gamme d'équipements complète",
    texte:
      "Audio, Bluetooth, protections, connectique et captation pour vos besoins professionnels et personnels.",
    badge: "Matériel",
  },
  {
    icone: "accompagnement",
    titre: "Conseil & Accompagnement",
    texte:
      "Orientation personnalisée sur le choix de vos équipements et la mise en place de vos logiciels.",
    badge: "Expertise",
  },
  {
    icone: "localisation",
    titre: "Ancrage local à Thiès",
    texte:
      "Une équipe joignable directement par téléphone et WhatsApp pour un service réactif et de proximité.",
    badge: "Proximité",
  },
];

export default function PageAccueil() {
  const majeurs = univers.filter((u) => u.rang === "majeur");
  const secondaires = univers.filter((u) => u.rang === "secondaire");

  return (
    <>
      {/* ---------------------------------------------------------------
          COUVERTURE (HERO 2.0 ULTRA-PREMIUM - REFACTORISÉE)
      --------------------------------------------------------------- */}
      <HeroSection />

      {/* ---------------------------------------------------------------
          POINTS FORTS (BENTO-GRID PRO)
      --------------------------------------------------------------- */}
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
                <p className="mt-2.5 text-petit text-anthracite-doux leading-relaxed">
                  {point.texte}
                </p>
              </div>
            </Apparition>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          PRÉSENTATION DE L'ENTREPRISE (MODERNE & IMMERSIVE)
      --------------------------------------------------------------- */}
      <Section fond="ivoire-fonce">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Apparition>
            <p className="filet-bronze text-intitule text-bronze-texte uppercase">
              Notre engagement
            </p>
            <h2 className="mt-6 text-titre-2 text-foret">
              Un interlocuteur de confiance pour vos équipements et vos projets
            </h2>
            <p className="mt-6 text-chapo text-anthracite-doux">
              Le Comptoir Numérique s&apos;est d&apos;abord implanté à Thiès à
              travers la vente d&apos;accessoires et d&apos;équipements
              technologiques sélectionnés pour leur fiabilité et leur utilité.
            </p>
            <p className="mt-4 text-chapo text-anthracite-doux">
              Nous complétons aujourd&apos;hui cette présence par un pôle de
              services numériques sur-mesure (création de sites web, outils de
              gestion, automatisation) pour soutenir la croissance des entreprises
              sénégalaises.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Bouton href="/a-propos" variante="principal">
                En savoir plus sur notre vision
                <Icone nom="fleche" className="size-4" />
              </Bouton>
              <Bouton href="/contact" variante="secondaire">
                Nous contacter
              </Bouton>
            </div>
          </Apparition>

          {/* Bloc visuel / Composition de réassurance */}
          <Apparition delai={140}>
            <div className="relative overflow-hidden rounded-bloc border border-anthracite/10 bg-gradient-to-br from-foret to-foret-fonce p-8 text-ivoire shadow-relief">
              <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-bronze/20 blur-2xl" />
              
              <span className="inline-flex size-12 items-center justify-center rounded-douce bg-ivoire/10 text-bronze-clair backdrop-blur-md">
                <Icone nom="localisation" className="size-6" />
              </span>

              <h3 className="mt-6 text-titre-3 text-ivoire">
                Basé à Thiès, au service de vos projets
              </h3>
              <p className="mt-3 text-petit text-ivoire/80 leading-relaxed">
                Retrouvez nos produits en boutique ou commandez directement via
                WhatsApp avec livraison rapide à Thiès et ses environs.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-ivoire/15 pt-6 text-center">
                <div className="rounded-douce bg-ivoire/5 p-4 backdrop-blur-sm">
                  <p className="text-titre-2 font-bold text-bronze-clair">5</p>
                  <p className="mt-1 text-mention text-ivoire/75">Univers d&apos;équipements</p>
                </div>
                <div className="rounded-douce bg-ivoire/5 p-4 backdrop-blur-sm">
                  <p className="text-titre-2 font-bold text-bronze-clair">&lt; 24h</p>
                  <p className="mt-1 text-mention text-ivoire/75">Délai devis moyen</p>
                </div>
              </div>
            </div>
          </Apparition>
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          LES UNIVERS DE L'ENTREPRISE (BENTO CATALOGUE)
      --------------------------------------------------------------- */}
      <Section
        id="univers"
        fond="ivoire"
        intitule="Catalogue d'équipements"
        titre="Explorez nos univers produits"
        chapo="Des accessoires multimédias aux installations électriques, découvrez nos différentes familles de matériel."
      >
        {/* Rang majeur */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {majeurs.map((u, index) => (
            <Apparition key={u.slug} delai={index * 90}>
              <CarteUnivers univers={u} />
            </Apparition>
          ))}
        </div>

        {/* Rang secondaire */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaires.map((u, index) => (
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

      {/* ---------------------------------------------------------------
          SOLUTIONS NUMÉRIQUES (PÔLE DIGITAL & TECH)
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        intitule="Pôle Digital & Outils Métier"
        titre="Ce que nous concevons pour votre activité"
        chapo="Des applications modernes, des sites internet fluides et des automatisations adaptées à vos méthodes de travail."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Apparition key={solution.slug} delai={(index % 3) * 90}>
              <CarteService service={solution} sombre />
            </Apparition>
          ))}
        </div>

        <Apparition className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ivoire/15 pt-8">
          <p className="text-petit text-ivoire/80">
            Besoin d&apos;une solution sur-mesure pour votre structure ?
          </p>
          <div className="flex gap-3">
            <Bouton href="/services#solutions" variante="contourClair">
              Voir les détails
            </Bouton>
            <Bouton href="/devis" variante="bronze">
              Demander un devis
              <Icone nom="fleche" className="size-4" />
            </Bouton>
          </div>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          SERVICES NUMÉRIQUES & LOGICIELS
      --------------------------------------------------------------- */}
      <Section
        fond="ivoire"
        intitule="Assistance & Paramétrage"
        titre="Interventions sur les logiciels que vous utilisez"
        chapo="Installation, configuration, formation et résolution de problèmes sur vos postes et applications."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {servicesNumeriques.map((service, index) => (
            <Apparition as="li" key={service.slug} delai={index * 70}>
              <div className="carte-interactive flex h-full flex-col rounded-carte border border-anthracite/8 bg-ivoire-clair p-5 shadow-douce">
                <span className="inline-flex size-10 items-center justify-center rounded-douce bg-foret/[0.08] text-foret">
                  <Icone nom={service.icone} className="size-5" />
                </span>
                <h3 className="mt-4 text-petit font-semibold text-foret">
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
                className="flex items-center gap-2.5 text-petit text-anthracite font-medium"
              >
                <Icone nom={famille.icone} className="size-4 text-bronze" />
                {famille.outils.join(", ")}
              </span>
            ))}
            <span className="text-mention text-anthracite-doux">
              (à partir de vos licences)
            </span>
          </div>

          <Bouton href="/services#services-numeriques" variante="secondaire">
            Découvrir nos services
            <Icone nom="fleche" className="size-4" />
          </Bouton>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          APPEL À L'ACTION FINAL
      --------------------------------------------------------------- */}
      <BlocCta />
    </>
  );
}
