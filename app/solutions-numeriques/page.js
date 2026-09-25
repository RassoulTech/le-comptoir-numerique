import { solutions, servicesNumeriques, logicielsPrisEnCharge, mentionMarques } from "@/content/prestations";
import { entreprise, lienWhatsAppPole } from "@/content/entreprise";
import { metadonnees } from "@/lib/seo";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import CarteService from "@/components/ui/CarteService";
import Apparition from "@/components/ui/Apparition";
import BlocCta from "@/components/ui/BlocCta";
import Icone from "@/components/ui/Icone";
import Bouton from "@/components/ui/Bouton";
import MentionPhotos from "@/components/ui/MentionPhotos";

export const metadata = metadonnees({
  titre: "Solutions numériques — Sites web, applications, logiciels, SEO",
  description:
    "Le pôle solutions numériques du Comptoir Numérique à Thiès : sites web, applications web, logiciels de gestion, automatisation, marketing digital, SEO, conseil et accompagnement.",
  chemin: "/solutions-numeriques",
});

/**
 * Déroulé d'une mission. Ces étapes sont notre méthode de travail
 * déclarée : aucune promesse de délai ni de résultat n'est chiffrée.
 */
const etapes = [
  {
    numero: "01",
    titre: "Cadrage & compréhension",
    texte:
      "Un échange approfondi pour cerner vos processus, vos contraintes métier et les objectifs concrets de votre projet.",
    badge: "Analyse",
  },
  {
    numero: "02",
    titre: "Proposition & architecture",
    texte:
      "Une proposition technique claire et détaillée, avec un périmètre défini, des jalons précis et un budget transparent.",
    badge: "Spécifications",
  },
  {
    numero: "03",
    titre: "Réalisation itérative",
    texte:
      "Votre solution progresse par modules validés ensemble, vous permettant de tester et d'ajuster en continu.",
    badge: "Conception",
  },
  {
    numero: "04",
    titre: "Mise en service & suivi",
    texte:
      "Mise en service, formation de vos équipes et accompagnement technique dans la durée pour garantir l'adoption.",
    badge: "Pérennité",
  },
];

function LigneService({ service }) {
  return (
    <div className="carte-interactive flex flex-col gap-5 rounded-carte border border-anthracite/8 bg-ivoire-clair p-6 shadow-douce sm:flex-row">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
        <Icone nom={service.icone} className="size-6" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-titre-4 font-bold text-foret">{service.nom}</h3>
        <p className="mt-2 text-petit leading-relaxed text-anthracite-doux">
          {service.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.inclus.map((element) => (
            <span
              key={element}
              className="inline-flex items-center gap-1.5 rounded-full border border-anthracite/8 bg-ivoire px-3 py-1 font-medium text-mention text-anthracite"
            >
              <Icone nom="check" className="size-3.5 shrink-0 text-bronze" />
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PageSolutionsNumeriques() {
  const poleSolutions = entreprise.poles.solutions;

  return (
    <>
      {/* ---------------------------------------------------------------
          HERO — LE PÔLE SOLUTIONS NUMÉRIQUES
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Pôle Solutions numériques"
        titre="Des solutions numériques pensées pour vos projets"
        chapo="Sites web, applications web, logiciels de gestion, automatisation, marketing digital, référencement, conseil : nous construisons et faisons vivre les outils de votre activité."
      >
        <Apparition className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Bouton href="/devis" variante="bronze" taille="grand">
            Décrire mon projet
            <Icone nom="fleche" className="size-5" />
          </Bouton>
          <Bouton
            href={lienWhatsAppPole("solutions")}
            variante="contourClair"
            taille="grand"
          >
            <Icone nom="whatsapp" className="size-5" />
            WhatsApp — {poleSolutions.whatsapp.affichage}
          </Bouton>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          LES SEPT OFFRES
      --------------------------------------------------------------- */}
      <Section
        fond="ivoire"
        intitule="Nos offres"
        titre="Sept solutions, un seul interlocuteur"
        chapo="Chaque offre a sa page détaillée : problème courant, notre approche, ce que nous réalisons, processus et bénéfices."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Apparition key={solution.slug} delai={(index % 3) * 80}>
              <CarteService service={solution} href={`/solutions/${solution.slug}`} />
            </Apparition>
          ))}
        </div>

        <MentionPhotos mention="Photos d'illustration : elles présentent le type de travail, pas un projet client nommé." />
      </Section>

      {/* ---------------------------------------------------------------
          MÉTHODE DE TRAVAIL
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        intitule="Notre méthode"
        titre="Comment nous menons vos projets"
        chapo="Une démarche claire, progressive et sans surprise, de l'écoute au suivi."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((etape, index) => (
            <Apparition key={etape.numero} delai={index * 90}>
              <div className="relative flex h-full flex-col rounded-2xl border border-ivoire/10 glass-foret p-6 shadow-relief transition-colors hover:border-bronze/40">
                <div className="flex items-center justify-between">
                  <span className="text-titre-2 font-bold text-bronze-clair">
                    {etape.numero}
                  </span>
                  <span className="badge-bronze-sombre">{etape.badge}</span>
                </div>
                <h3 className="mt-4 text-titre-4 font-bold text-ivoire">
                  {etape.titre}
                </h3>
                <p className="mt-2.5 text-petit leading-relaxed text-ivoire/75">
                  {etape.texte}
                </p>
              </div>
            </Apparition>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          SERVICES NUMÉRIQUES — INTERVENTIONS SUR VOS OUTILS
      --------------------------------------------------------------- */}
      <Section
        fond="ivoire-fonce"
        intitule="Assistance & formation"
        titre="Interventions sur vos logiciels et équipements"
        chapo="Pour les structures qui ont déjà leurs outils mais souhaitent les fiabiliser, les configurer ou former leurs collaborateurs."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {servicesNumeriques.map((service, index) => (
            <Apparition key={service.slug} delai={index * 80}>
              <LigneService service={service} />
            </Apparition>
          ))}
        </div>

        {/* Familles d'outils pris en charge */}
        <Apparition className="mt-12 rounded-2xl border border-anthracite/8 bg-ivoire p-8 shadow-douce">
          <h3 className="text-titre-4 font-bold text-foret">
            Logiciels et écosystèmes pris en charge
          </h3>
          <p className="mt-2 text-petit text-anthracite-doux">
            Nous intervenons directement à partir de vos propres licences et environnements :
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logicielsPrisEnCharge.map((famille) => (
              <div
                key={famille.slug}
                className="flex flex-col rounded-xl border border-anthracite/6 bg-ivoire-fonce/60 p-4"
              >
                <div className="flex items-center gap-2 font-semibold text-petit text-foret">
                  <Icone nom={famille.icone} className="size-4 text-bronze" />
                  <span>{famille.famille}</span>
                </div>
                <p className="mt-2 text-mention text-anthracite-doux">
                  {famille.outils.join(", ")}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-mention text-anthracite-doux">
            {mentionMarques}
          </p>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          CTA FINAL
      --------------------------------------------------------------- */}
      <BlocCta
        titre="Un besoin numérique ou un projet à cadrer ?"
        texte="Décrivez-nous votre situation : nous vous proposons une démarche adaptée à votre contexte et à vos moyens."
      />
    </>
  );
}