import { metadonnees } from "@/lib/seo";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import Bouton from "@/components/ui/Bouton";
import Icone from "@/components/ui/Icone";
import Placeholder from "@/components/ui/Placeholder";
import Apparition from "@/components/ui/Apparition";

export const metadata = metadonnees({
  titre: "Contactez Le Comptoir Numérique à Thiès",
  description:
    "Contactez Le Comptoir Numérique à Thiès : téléphone, WhatsApp, email et adresse pour vos produits et projets numériques.",
  chemin: "/contact",
});

export default function PageContact() {
  const { email, adresse, horaires, telephone, reseaux } = entreprise;

  /** Moyens de contact rapides */
  const moyensDeContact = [
    {
      icone: "telephoneAppel",
      titre: "Téléphone",
      texte:
        "Le canal le plus direct pour une demande de prix immédiate ou une question rapide.",
      libelle: telephone.affichage,
      lien: telephone.lien,
      badge: "Appel direct",
      couleurIcone: "text-foret",
    },
    {
      icone: "whatsapp",
      titre: "WhatsApp Business",
      texte:
        "Idéal pour nous envoyer une référence de matériel, une photo ou échanger par message.",
      libelle: "Démarrer la discussion",
      lien: lienWhatsApp("Bonjour Le Comptoir Numérique, j'aimerais avoir des informations."),
      externe: true,
      badge: "Réponse express",
      couleurIcone: "text-[#25D366]",
    },
    {
      icone: "email",
      titre: "Email Professionnel",
      texte: "Pour les dossiers complets, cahiers des charges ou demandes institutionnelles.",
      libelle: email.valeur,
      lien: `mailto:${email.valeur}`,
      aDefinir: email.aDefinir,
      badge: "Formel",
      couleurIcone: "text-bronze",
    },
  ];

  return (
    <>
      <Section
        fond="foret"
        niveauTitre={1}
        intitule="Support & Échanges"
        titre="Contactez notre équipe"
        chapo="Une question sur la disponibilité d'un équipement, un projet logiciel à cadrer ou un conseil technique : nous sommes à votre disposition."
      />

      {/* Cartes de contact rapide */}
      <section className="bg-ivoire py-14 sm:py-16 lg:py-20">
        <Conteneur>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moyensDeContact.map((moyen, index) => (
              <Apparition key={moyen.titre} delai={index * 90}>
                <article className="carte-interactive flex h-full flex-col rounded-2xl border border-anthracite/8 bg-ivoire-clair p-6 sm:p-8 shadow-relief">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-foret text-ivoire shadow-douce">
                      <Icone nom={moyen.icone} className={`size-7 ${moyen.couleurIcone === "text-[#25D366]" ? "text-[#25D366]" : "text-bronze-clair"}`} />
                    </span>
                    <span className="badge-bronze">{moyen.badge}</span>
                  </div>

                  <h2 className="mt-6 text-titre-3 text-foret font-bold">
                    {moyen.titre}
                  </h2>
                  <p className="mt-2 flex-1 text-petit text-anthracite-doux leading-relaxed">
                    {moyen.texte}
                  </p>

                  <div className="mt-6 pt-5 border-t border-anthracite/8">
                    {moyen.aDefinir ? (
                      <Placeholder>{moyen.libelle}</Placeholder>
                    ) : (
                      <a
                        href={moyen.lien}
                        {...(moyen.externe
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2 text-corps font-bold text-foret hover:text-foret-clair underline-offset-4 hover:underline"
                      >
                        <span>{moyen.libelle}</span>
                        <Icone nom="fleche" className="size-4 text-bronze" />
                      </a>
                    )}
                  </div>
                </article>
              </Apparition>
            ))}
          </div>
        </Conteneur>
      </section>

      {/* Coordonnées, Horaires & Présence */}
      <Section fond="ivoire-fonce">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="badge-bronze">Comptoir & Horaires</span>
            <h2 className="mt-4 text-titre-2 text-foret">
              Où nous trouver à Thiès
            </h2>

            <dl className="mt-8 space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4 rounded-xl bg-ivoire p-5 border border-anthracite/8 shadow-douce">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-foret text-ivoire">
                  <Icone nom="localisation" className="size-5 text-bronze-clair" />
                </span>
                <div>
                  <dt className="text-petit font-bold text-foret">
                    Localisation & Adresse
                  </dt>
                  <dd className="mt-1 text-petit text-anthracite-doux leading-relaxed">
                    <p className="font-semibold text-anthracite">{adresse.complete}</p>
                    {adresse.precisionADefinir && (
                      <p className="mt-1.5">
                        <Placeholder>{adresse.precision}</Placeholder>
                      </p>
                    )}
                  </dd>
                </div>
              </div>

              {/* Horaires */}
              <div className="flex items-start gap-4 rounded-xl bg-ivoire p-5 border border-anthracite/8 shadow-douce">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-foret text-ivoire">
                  <Icone nom="horloge" className="size-5 text-bronze-clair" />
                </span>
                <div>
                  <dt className="text-petit font-bold text-foret">
                    Horaires d&apos;ouverture
                  </dt>
                  <dd className="mt-1 text-petit text-anthracite-doux">
                    {horaires.aDefinir ? (
                      <Placeholder>[Horaires d&apos;ouverture]</Placeholder>
                    ) : (
                      <ul className="space-y-1">
                        {horaires.lignes.map((ligne) => (
                          <li key={ligne.jours}>
                            <span className="font-semibold text-anthracite">
                              {ligne.jours}
                            </span>{" "}
                            : {ligne.heures}
                          </li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex items-start gap-4 rounded-xl bg-ivoire p-5 border border-anthracite/8 shadow-douce">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-foret text-ivoire">
                  <Icone nom="marketing" className="size-5 text-bronze-clair" />
                </span>
                <div>
                  <dt className="text-petit font-bold text-foret">
                    Suivez nos actualités
                  </dt>
                  <dd className="mt-2.5">
                    <ul className="flex flex-wrap gap-2">
                      {reseaux.map((reseau) => (
                        <li key={reseau.nom}>
                          {reseau.url ? (
                            <a
                              href={reseau.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="action inline-flex rounded-full px-3.5 py-1.5 text-mention font-semibold text-foret bg-ivoire-fonce border border-anthracite/10 hover:bg-foret hover:text-ivoire transition-colors"
                            >
                              {reseau.nom}
                            </a>
                          ) : (
                            <Placeholder>{`[${reseau.nom}]`}</Placeholder>
                          )}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8">
              <Bouton href="/devis" variante="bronze" taille="grand">
                Demander un devis en ligne
                <Icone nom="fleche" className="size-4" />
              </Bouton>
            </div>
          </div>

          {/* Carte visuelle ou Bloc d'ambiance */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-bloc border border-anthracite/10 bg-gradient-to-br from-foret to-foret-fonce p-8 text-ivoire shadow-relief">
              <div className="pointer-events-none absolute -bottom-10 -right-10 size-44 rounded-full bg-bronze/20 blur-2xl" />
              
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ivoire/10 text-bronze-clair backdrop-blur-md">
                <Icone nom="localisation" className="size-6" />
              </span>

              <h3 className="mt-6 text-titre-3 text-ivoire font-bold">
                Boutique & Comptoir à Thiès
              </h3>
              <p className="mt-2.5 text-petit text-ivoire/80 leading-relaxed">
                Situé à Thiès, Le Comptoir Numérique vous accueille pour vos achats d&apos;équipements, tests de matériel et rendez-vous de cadrage projet.
              </p>

              <div className="mt-6 rounded-xl bg-ivoire/5 p-4 border border-ivoire/10 backdrop-blur-sm">
                <p className="text-mention text-bronze-clair font-bold uppercase tracking-wider">
                  Service Client & Devis
                </p>
                <p className="mt-1 text-corps font-bold text-ivoire">
                  {entreprise.telephone.affichage}
                </p>
                <p className="mt-0.5 text-mention text-ivoire/70">
                  Du lundi au samedi
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
