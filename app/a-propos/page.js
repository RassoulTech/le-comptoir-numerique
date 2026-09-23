import { metadonnees } from "@/lib/seo";
import { entreprise } from "@/content/entreprise";
import Section from "@/components/ui/Section";
import BlocCta from "@/components/ui/BlocCta";
import Icone from "@/components/ui/Icone";
import Placeholder from "@/components/ui/Placeholder";
import Apparition from "@/components/ui/Apparition";
import Bouton from "@/components/ui/Bouton";

export const metadata = metadonnees({
  titre: "À propos du Comptoir Numérique",
  description:
    "Le Comptoir Numérique, entreprise basée à Thiès : vente d'équipements technologiques et services numériques pour les entreprises sénégalaises.",
  chemin: "/a-propos",
});

/** Étapes de développement annoncées par l'entreprise */
const trajectoire = [
  {
    titre: "La vente d'équipements technologiques",
    texte:
      "L'activité historique : accessoires audio, périphériques Bluetooth, protections, microphones et équipements disponibles directement à Thiès.",
    icone: "accessoires",
    badge: "Pôle Matériel",
  },
  {
    titre: "Le pôle de solutions numériques",
    texte:
      "Le développement stratégique : création de sites web, applications mobiles, outils de gestion interne et automatisation des tâches chronophages.",
    icone: "web",
    badge: "Pôle Digital",
  },
  {
    titre: "L'accompagnement technologique continu",
    texte:
      "L'ambition pérenne : devenir l'interlocuteur technique privilégié des structures locales en pleine transition numérique.",
    icone: "accompagnement",
    badge: "Partenariat",
  },
];

const valeurs = [
  {
    titre: "Des solutions ancrées sur le terrain",
    texte:
      "Nos propositions répondent aux réalités locales : priorité aux usages mobiles, optimisation pour les connexions variables et maîtrise des coûts d'exploitation.",
    icone: "localisation",
  },
  {
    titre: "La simplicité avant la complexité",
    texte:
      "Un outil n'a de valeur que s'il est utilisé au quotidien. Nous concevons des interfaces intuitives et faciles à adopter par vos équipes.",
    icone: "check",
  },
  {
    titre: "Une progression par jalons validés",
    texte:
      "Nous avançons par étapes concrètes : chaque fonctionnalité est livrée, testée et approuvée avant de passer à la suivante.",
    icone: "gestion",
  },
];

export default function PageAPropos() {
  return (
    <>
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Notre Histoire & Vision"
        titre="Le Comptoir Numérique"
        chapo={entreprise.positionnement}
      />

      {/* Présentation immersive */}
      <Section fond="ivoire">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="badge-bronze">Qui nous sommes</span>
            <h2 className="mt-4 text-titre-2 text-foret">
              Un partenaire de proximité pour le matériel et la transformation digitale
            </h2>
            <div className="mt-6 space-y-4 text-chapo text-anthracite-doux leading-relaxed">
              <p>
                Établi au cœur de <strong>Thiès, au Sénégal</strong>, Le Comptoir Numérique a été fondé avec une conviction simple : rendre accessibles les technologies fiables et indispensables à l&apos;activité quotidienne.
              </p>
              <p>
                Pour répondre aux besoins grandissants de productivité et de visibilité de nos clients, nous avons enrichi notre offre d&apos;un pôle dédié aux <strong>services et solutions digitales sur-mesure</strong>.
              </p>
              <p>
                <Placeholder>
                  [Description additionnelle : genèse de la boutique, équipe locale et valeurs de service]
                </Placeholder>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Bouton href="/services" variante="principal">
                Découvrir nos solutions
                <Icone nom="fleche" className="size-4" />
              </Bouton>
              <Bouton href="/contact" variante="secondaire">
                Contacter l&apos;équipe
              </Bouton>
            </div>
          </div>

          {/* Composition visuelle de marque */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-bloc border border-anthracite/10 bg-gradient-to-br from-foret to-foret-fonce p-8 text-ivoire shadow-relief">
              <div className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-bronze/20 blur-2xl" />
              
              <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-ivoire/10 text-bronze-clair backdrop-blur-md">
                <Icone nom="entreprise" className="size-7" />
              </span>

              <h3 className="mt-6 text-titre-3 text-ivoire">
                {entreprise.nomAffiche}
              </h3>
              <p className="mt-2 text-petit text-ivoire/80">
                {entreprise.positionnement}
              </p>

              <ul className="mt-6 space-y-3 border-t border-ivoire/15 pt-6 text-mention text-ivoire/80">
                <li className="flex items-center gap-2.5">
                  <Icone nom="localisation" className="size-4 text-bronze-clair" />
                  <span>{entreprise.adresse.complete}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Icone nom="telephoneAppel" className="size-4 text-bronze-clair" />
                  <span>{entreprise.telephone.affichage}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Trajectoire & Vision */}
      <Section
        fond="foret"
        intitule="Notre Trajectoire"
        titre="Du comptoir physique au partenaire technologique global"
        chapo="Fournir du matériel de qualité est une première étape indispensable. Accompagner la numérisation complète de nos clients est notre engagement durable."
      >
        <ol className="grid gap-6 sm:grid-cols-3">
          {trajectoire.map((etape, index) => (
            <Apparition
              as="li"
              key={etape.titre}
              delai={index * 90}
              className="carte-interactive rounded-2xl glass-foret p-6 shadow-relief border border-ivoire/10"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-bronze/20 text-bronze-clair">
                  <Icone nom={etape.icone} className="size-5" />
                </span>
                <span className="badge-bronze-sombre">{etape.badge}</span>
              </div>
              <h3 className="mt-6 text-titre-4 font-bold text-ivoire">
                {etape.titre}
              </h3>
              <p className="mt-2.5 text-petit text-ivoire/75 leading-relaxed">
                {etape.texte}
              </p>
            </Apparition>
          ))}
        </ol>
      </Section>

      {/* Approche & Valeurs */}
      <Section
        fond="ivoire-fonce"
        intitule="Nos Engagements"
        titre="Les principes qui guident notre méthode"
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {valeurs.map((valeur, index) => (
            <Apparition
              key={valeur.titre}
              delai={index * 90}
              className="carte-interactive flex h-full flex-col rounded-2xl bg-ivoire p-6 sm:p-8 border border-anthracite/8 shadow-douce"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-foret/[0.08] text-foret">
                <Icone nom={valeur.icone} className="size-5" />
              </span>
              <h3 className="mt-5 text-titre-4 font-bold text-foret">
                {valeur.titre}
              </h3>
              <p className="mt-2.5 text-petit text-anthracite-doux leading-relaxed">
                {valeur.texte}
              </p>
            </Apparition>
          ))}
        </div>
      </Section>

      <BlocCta
        titre="Construisons vos projets ensemble"
        texte="Que vous ayez besoin d'équipements fiables ou d'une solution numérique performante, notre équipe est à votre écoute."
      />
    </>
  );
}
