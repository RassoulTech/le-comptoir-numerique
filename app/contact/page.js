import { metadonnees } from "@/lib/seo";
import { entreprise, lienWhatsApp, lienGroupeWhatsApp } from "@/content/entreprise";
import Section from "@/components/ui/Section";
import Conteneur from "@/components/ui/Conteneur";
import Bouton from "@/components/ui/Bouton";
import Icone from "@/components/ui/Icone";
import Placeholder from "@/components/ui/Placeholder";
import Apparition from "@/components/ui/Apparition";
import ReseauxSociaux from "@/components/ui/ReseauxSociaux";

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
      titre: "Téléphone — Pôle Produits",
      texte:
        "Le canal le plus direct pour une demande de prix immédiate ou une question rapide. Le pôle Solutions numériques est joignable au 77 383 13 64.",
      libelle: telephone.affichage,
      lien: telephone.lien,
      badge: "Appel direct",
      couleurIcone: "text-foret",
    },
    {
      icone: "whatsapp",
      titre: "WhatsApp Business",
      texte:
        "Rejoignez notre groupe WhatsApp pour les mises à jour en direct, les promotions et les conseils produits.",
      libelle: "Rejoindre le groupe",
      lien: lienGroupeWhatsApp(),
      externe: true,
      badge: "Groupe WhatsApp",
      couleurIcone: "text-[#25D366]",
    },
    {
      icone: "email",
      titre: "Email Professionnel",
      texte: "Pour les dossiers complets, cahiers des charges ou demandes institutionnelles.",
      libelle: email.affichage,
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
                    <ReseauxSociaux variant="dark" showLabels={false} />
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

              {/* Les deux pôles, chacun avec son téléphone et son WhatsApp
                  dédiés : le visiteur choisit son interlocuteur en un clic. */}
              <div className="mt-6 grid gap-3">
                {Object.entries(entreprise.poles).map(([cle, pole]) => (
                  <div
                    key={cle}
                    className="rounded-xl border border-ivoire/10 bg-ivoire/5 p-4 backdrop-blur-sm"
                  >
                    <p className="text-mention font-bold uppercase tracking-wider text-bronze-clair">
                      {pole.nom}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href={pole.telephone.lien}
                        className="inline-flex items-center gap-2 rounded-action border border-ivoire/15 bg-ivoire/[0.06] px-3.5 py-2 text-petit font-semibold text-ivoire transition-colors hover:border-bronze/60"
                      >
                        <Icone nom="telephoneAppel" className="size-4 text-bronze-clair" />
                        {pole.telephone.affichage}
                      </a>
                      <a
                        href={`https://wa.me/${pole.whatsapp.numero}?text=${encodeURIComponent(`Bonjour, je vous contacte au sujet du ${pole.nom.toLowerCase()}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-action border border-ivoire/15 bg-ivoire/[0.06] px-3.5 py-2 text-petit font-semibold text-ivoire transition-colors hover:border-bronze/60"
                      >
                        <Icone nom="whatsapp" className="size-4 text-[#25D366]" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
                <p className="text-mention text-ivoire/70">
                  Horaires :{" "}
                  {entreprise.horaires.lignes
                    .map((l) => `${l.jours}, ${l.heures}`)
                    .join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
