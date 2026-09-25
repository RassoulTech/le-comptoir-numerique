import { metadonnees } from "@/lib/seo";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import FormulaireDevis from "@/components/devis/FormulaireDevis";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import Icone from "@/components/ui/Icone";
import Placeholder from "@/components/ui/Placeholder";

export const metadata = metadonnees({
  titre: "Demander un devis",
  description:
    "Décrivez votre besoin en produits technologiques ou en solutions numériques : Le Comptoir Numérique vous répond avec une proposition adaptée.",
  chemin: "/devis",
});

const reperes = [
  {
    icone: "check",
    titre: "Une réponse personnalisée",
    texte:
      "Chaque demande est étudiée individuellement, selon votre besoin et votre contexte.",
  },
  {
    icone: "check",
    titre: "Sans engagement",
    texte:
      "Demander un devis ne vous engage à rien. Vous décidez ensuite librement.",
  },
  {
    icone: "check",
    titre: "Formulaire court",
    texte:
      "Seuls votre nom, votre téléphone et votre besoin sont obligatoires.",
  },
];

export default function PageDevis() {
  return (
    <>
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Demande de devis"
        titre="Parlez-nous de votre besoin"
        chapo="Remplissez ce formulaire : nous revenons vers vous avec une proposition claire, adaptée à votre situation."
      />

      <section className="bg-ivoire py-14 sm:py-16 lg:py-20">
        <Conteneur>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Formulaire */}
            <div className="lg:col-span-7">
              <FormulaireDevis />
            </div>

            {/* Colonne latérale */}
            <aside className="lg:col-span-5">
              <div className="rounded-carte bg-ivoire-fonce/70 p-6 sm:p-8">
                <h2 className="text-titre-4 text-foret">Comment ça se passe</h2>
                <ul className="mt-5 space-y-5">
                  {reperes.map((repere) => (
                    <li key={repere.titre} className="flex gap-3">
                      <Icone
                        nom={repere.icone}
                        className="mt-1 size-4 shrink-0 text-bronze"
                      />
                      <div>
                        <h3 className="text-petit font-semibold text-anthracite">
                          {repere.titre}
                        </h3>
                        <p className="mt-1 text-petit text-anthracite-doux">
                          {repere.texte}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact direct */}
              <div className="mt-6 rounded-carte border border-anthracite/8 bg-ivoire-clair p-6 sm:p-8">
                <h2 className="text-titre-4 text-foret">
                  Vous préférez échanger directement ?
                </h2>
                <p className="mt-2 text-petit text-anthracite-doux">
                  Appelez-nous ou écrivez-nous sur WhatsApp : c&apos;est souvent
                  le plus rapide.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href={lienWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action inline-flex items-center justify-center gap-2 rounded-action bg-foret px-5 py-3 text-petit font-semibold text-ivoire shadow-action hover:bg-foret-clair hover:shadow-action-survol"
                  >
                    <Icone nom="whatsapp" className="size-5" />
                    Discuter sur WhatsApp
                  </a>
                  <a
                    href={entreprise.telephone.lien}
                    className="action inline-flex items-center justify-center gap-2 rounded-action px-5 py-3 text-petit font-semibold text-foret ring-1 ring-inset ring-foret/20 hover:bg-foret/[0.04] hover:ring-foret/40"
                  >
                    <Icone nom="telephoneAppel" className="size-5" />
                    {entreprise.telephone.affichage}
                  </a>
                </div>

                <p className="mt-5 flex items-center gap-2 text-petit text-anthracite-doux">
                  <Icone nom="email" className="size-4 shrink-0 text-bronze" />
                  {entreprise.email.aDefinir ? (
                    <Placeholder>{entreprise.email.valeur}</Placeholder>
                  ) : (
                    <a
                      href={`mailto:${entreprise.email.valeur}`}
                      className="hover:text-foret"
                    >
                      {entreprise.email.valeur}
                    </a>
                  )}
                </p>
              </div>
            </aside>
          </div>
        </Conteneur>
      </section>
    </>
  );
}
