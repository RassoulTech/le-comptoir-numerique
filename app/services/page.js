import {
  solutions,
  servicesNumeriques,
  logicielsPrisEnCharge,
  mentionMarques,
} from "@/content/prestations";
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
  titre: "Solutions & Services Numériques",
  description:
    "Sites web, applications, gestion et automatisation. Et l'installation, la configuration, l'assistance et la formation sur vos logiciels à Thiès.",
  chemin: "/services",
});

/** Déroulé d'une mission avec valeur ajoutée */
const etapes = [
  {
    numero: "01",
    titre: "Cadrage & Compréhension",
    texte:
      "Un échange approfondi pour cerner vos processus, vos contraintes métier et les objectifs concrets de votre projet.",
    badge: "Analyse",
  },
  {
    numero: "02",
    titre: "Proposition & Architecture",
    texte:
      "Une proposition technique claire et détaillée, avec un périmètre défini, des jalons précis et un budget transparent.",
    badge: "Spécifications",
  },
  {
    numero: "03",
    titre: "Développement itératif",
    texte:
      "Votre solution progresse par modules validés ensemble, vous permettant de tester et d'ajuster en continu.",
    badge: "Conception",
  },
  {
    numero: "04",
    titre: "Déploiement & Suivi",
    texte:
      "Mise en service, formation de vos équipes et accompagnement technique dans la durée pour garantir l'adoption.",
    badge: "Pérennité",
  },
];

function LigneServiceModernisee({ service }) {
  return (
    <div className="carte-interactive flex flex-col sm:flex-row gap-5 rounded-carte border border-anthracite/8 bg-ivoire-clair p-6 shadow-douce">
      <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
        <Icone nom={service.icone} className="size-6" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-titre-4 text-foret font-bold">{service.nom}</h3>
        <p className="mt-2 text-petit text-anthracite-doux leading-relaxed">
          {service.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {service.inclus.map((element) => (
            <span
              key={element}
              className="inline-flex items-center gap-1.5 rounded-full bg-ivoire px-3 py-1 text-mention font-medium text-anthracite border border-anthracite/8"
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

export default function PageServices() {
  return (
    <>
      {/* ---------------------------------------------------------------
          HERO SERVICES
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Pôle Numérique & Solutions Métier"
        titre="Conception logicielle et accompagnement digital"
        chapo="Deux approches complémentaires : le développement de solutions sur-mesure pour votre structure, et l'infogérance sur les outils que vous exploitez déjà."
      >
        <Apparition className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          <a
            href="#solutions"
            className="action flex items-center gap-4 rounded-2xl glass-foret p-5 text-ivoire shadow-relief hover:border-bronze/50"
          >
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-ivoire/10 text-bronze-clair">
              <Icone nom="web" className="size-6" />
            </span>
            <div className="min-w-0">
              <p className="text-petit font-bold text-ivoire">
                Solutions sur-mesure
              </p>
              <p className="text-mention text-ivoire/70">
                Sites, applications & outils internes
              </p>
            </div>
            <Icone
              nom="fleche"
              className="ml-auto size-4 shrink-0 text-bronze-clair"
            />
          </a>

          <a
            href="#services-numeriques"
            className="action flex items-center gap-4 rounded-2xl glass-foret p-5 text-ivoire shadow-relief hover:border-bronze/50"
          >
            <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-ivoire/10 text-bronze-clair">
              <Icone nom="assistance" className="size-6" />
            </span>
            <div className="min-w-0">
              <p className="text-petit font-bold text-ivoire">
                Services & Assistance
              </p>
              <p className="text-mention text-ivoire/70">
                Installation, configuration & formation
              </p>
            </div>
            <Icone
              nom="fleche"
              className="ml-auto size-4 shrink-0 text-bronze-clair"
            />
          </a>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          SOLUTIONS NUMÉRIQUES (DÉVELOPPEMENT SUR-MESURE)
      --------------------------------------------------------------- */}
      <Section
        id="solutions"
        fond="ivoire"
        intitule="Développement sur-mesure"
        titre="Ce que nous concevons pour vous"
        chapo="Des solutions modernes, stables et évolutives, alignées sur la réalité opérationnelle de votre entreprise."
        className="scroll-mt-28"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <Apparition key={solution.slug} delai={(index % 3) * 90}>
              <CarteService service={solution} />
            </Apparition>
          ))}
        </div>

        <Apparition className="mt-12 flex justify-center">
          <Bouton href="/devis" variante="principal" taille="grand">
            Échanger sur votre projet de solution
            <Icone nom="fleche" className="size-4" />
          </Bouton>
        </Apparition>
      </Section>

      {/* ---------------------------------------------------------------
          MÉTHODE DE TRAVAIL (TIMELINE INTERACTIVE)
      --------------------------------------------------------------- */}
      <Section
        fond="foret"
        intitule="Notre Méthodologie"
        titre="Comment nous menons vos projets"
        chapo="Une démarche claire, progressive et sans surprise pour garantir la réussite de chaque étape."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map((etape, index) => (
            <Apparition key={etape.numero} delai={index * 90}>
              <div className="relative flex h-full flex-col rounded-2xl glass-foret p-6 shadow-relief border border-ivoire/10 hover:border-bronze/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-titre-2 font-bold text-bronze-clair">
                    {etape.numero}
                  </span>
                  <span className="badge-bronze-sombre">{etape.badge}</span>
                </div>
                <h3 className="mt-4 text-titre-4 font-bold text-ivoire">
                  {etape.titre}
                </h3>
                <p className="mt-2.5 text-petit text-ivoire/75 leading-relaxed">
                  {etape.texte}
                </p>
              </div>
            </Apparition>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------------
          SERVICES NUMÉRIQUES (ASSISTANCE & FORMATION)
      --------------------------------------------------------------- */}
      <Section
        id="services-numeriques"
        fond="ivoire-fonce"
        intitule="Assistance & Infogérance"
        titre="Interventions sur vos logiciels et équipements"
        chapo="Pour les structures qui ont déjà leurs outils mais souhaitent les fiabiliser, les configurer ou former leurs collaborateurs."
        className="scroll-mt-28"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {servicesNumeriques.map((service, index) => (
            <Apparition key={service.slug} delai={index * 80}>
              <LigneServiceModernisee service={service} />
            </Apparition>
          ))}
        </div>

        {/* Familles d'outils pris en charge */}
        <Apparition className="mt-12 rounded-2xl bg-ivoire p-8 border border-anthracite/8 shadow-douce">
          <h3 className="text-titre-4 text-foret font-bold">
            Logiciels et écosystèmes pris en charge
          </h3>
          <p className="mt-2 text-petit text-anthracite-doux">
            Nous intervenons directement à partir de vos propres licences et environnements :
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {logicielsPrisEnCharge.map((famille) => (
              <div
                key={famille.slug}
                className="flex flex-col rounded-xl bg-ivoire-fonce/60 p-4 border border-anthracite/6"
              >
                <div className="flex items-center gap-2 text-foret font-semibold text-petit">
                  <Icone nom={famille.icone} className="size-4 text-bronze" />
                  <span>{famille.nom}</span>
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

        <MentionPhotos mention="Photos d'illustration. Les projets réels seront affichés dans notre page réalisations." />
      </Section>

      {/* ---------------------------------------------------------------
          CTA FINAL
      --------------------------------------------------------------- */}
      <BlocCta
        titre="Un besoin informatique ou un projet digital ?"
        texte="Discutons ensemble de vos attentes pour vous proposer une solution adaptée à votre budget et à vos objectifs."
      />
    </>
  );
}
