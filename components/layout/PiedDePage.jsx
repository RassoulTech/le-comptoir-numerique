import Image from "next/image";
import Link from "next/link";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import { liensNavigation, lienDevis } from "@/lib/navigation";
import { univers } from "@/content/univers";
import { creditsTous } from "@/content/credits";
import Conteneur from "@/components/ui/Conteneur";
import Icone from "@/components/ui/Icone";
import Placeholder from "@/components/ui/Placeholder";

export default function PiedDePage() {
  const annee = new Date().getFullYear();

  return (
    <footer className="bg-foret text-ivoire">
      <Conteneur className="py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Identité */}
          <div className="lg:col-span-4">
            {/* Plaque ivoire indispensable ici : le vert du logo se
                confondrait avec le fond vert forêt du pied de page. */}
            <div className="inline-block rounded-carte bg-ivoire p-3">
              <Image
                src="/images/logo-comptoir-numerique.webp"
                alt={`Logo ${entreprise.nomAffiche}`}
                width={260}
                height={231}
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-petit text-ivoire/75">
              {entreprise.positionnement}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {entreprise.reseaux.map((reseau) => (
                <li key={reseau.nom}>
                  {reseau.url ? (
                    <a
                      href={reseau.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-md px-3 py-1.5 text-petit text-ivoire/80 ring-1 ring-inset ring-ivoire/25 transition-colors hover:bg-ivoire/10 hover:text-ivoire"
                    >
                      {reseau.nom}
                    </a>
                  ) : (
                    <Placeholder sombre>{`[${reseau.nom}]`}</Placeholder>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Pied de page — navigation" className="lg:col-span-2">
            <h2 className="text-intitule text-bronze-clair uppercase">
              Navigation
            </h2>
            {/* `py-1.5` sur des liens de 19 px porte la zone tactile à une
                trentaine de pixels : au-dessus du minimum WCAG 2.2 (24 px),
                sans allonger visuellement le pied de page. */}
            <ul className="mt-4 space-y-1">
              {liensNavigation.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className="inline-block py-1.5 text-petit text-ivoire/80 transition-colors hover:text-ivoire"
                  >
                    {lien.libelle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={lienDevis.href}
                  className="inline-block py-1.5 text-petit font-semibold text-ivoire transition-colors hover:text-bronze-clair"
                >
                  {lienDevis.libelle}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Univers — les cinq pôles, y compris le pôle numérique qui
              renvoie vers /services et non vers le catalogue produits. */}
          <nav aria-label="Pied de page — univers" className="lg:col-span-3">
            <h2 className="text-intitule text-bronze-clair uppercase">
              Nos univers
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {univers.map((u) => (
                <li key={u.slug}>
                  <Link
                    href={u.href ?? `/produits#${u.slug}`}
                    className="inline-block py-1.5 text-petit text-ivoire/80 transition-colors hover:text-ivoire"
                  >
                    {u.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-intitule text-bronze-clair uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-petit">
              <li className="flex gap-3">
                <Icone
                  nom="telephoneAppel"
                  className="mt-0.5 size-4 shrink-0 text-bronze"
                />
                <a
                  href={entreprise.telephone.lien}
                  className="text-ivoire/85 transition-colors hover:text-ivoire"
                >
                  {entreprise.telephone.affichage}
                </a>
              </li>
              <li className="flex gap-3">
                <Icone
                  nom="whatsapp"
                  className="mt-0.5 size-4 shrink-0 text-bronze"
                />
                <a
                  href={lienWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivoire/85 transition-colors hover:text-ivoire"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex gap-3">
                <Icone
                  nom="email"
                  className="mt-0.5 size-4 shrink-0 text-bronze"
                />
                {entreprise.email.aDefinir ? (
                  <Placeholder sombre>{entreprise.email.valeur}</Placeholder>
                ) : (
                  <a
                    href={`mailto:${entreprise.email.valeur}`}
                    className="text-ivoire/85 transition-colors hover:text-ivoire"
                  >
                    {entreprise.email.valeur}
                  </a>
                )}
              </li>
              <li className="flex gap-3">
                <Icone
                  nom="localisation"
                  className="mt-0.5 size-4 shrink-0 text-bronze"
                />
                <span className="text-ivoire/85">
                  {entreprise.adresse.complete}
                </span>
              </li>
              <li className="flex gap-3">
                <Icone
                  nom="horloge"
                  className="mt-0.5 size-4 shrink-0 text-bronze"
                />
                {entreprise.horaires.aDefinir ? (
                  <Placeholder sombre>[Horaires]</Placeholder>
                ) : (
                  <span className="text-ivoire/85">
                    {entreprise.horaires.lignes
                      .map((l) => `${l.jours} : ${l.heures}`)
                      .join(" · ")}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="mt-12 flex flex-col gap-3 border-t border-ivoire/15 pt-6 text-mention text-ivoire/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {annee} {entreprise.nomAffiche}. Tous droits réservés.
          </p>
          <p className="flex flex-wrap items-center gap-2">
            <span>Mentions légales :</span>
            <Placeholder sombre>{entreprise.legal.raisonSociale}</Placeholder>
            <Placeholder sombre>{entreprise.legal.ninea}</Placeholder>
            <Placeholder sombre>{entreprise.legal.rccm}</Placeholder>
          </p>
        </div>

        {/* Crédits photo — une seule liste pour tout le site, comme le
            demandent les conditions d'utilisation de l'API Unsplash. */}
        <p className="mt-4 text-mention text-ivoire/60">
          Photos d&apos;illustration :{" "}
          {creditsTous.map((credit, index) => (
            <span key={credit.profil}>
              {index > 0 && " · "}
              <a
                href={credit.profil}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:text-ivoire/90 hover:underline"
              >
                {credit.auteur}
              </a>
            </span>
          ))}{" "}
          sur{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:text-ivoire/90 hover:underline"
          >
            Unsplash
          </a>
          .
        </p>
      </Conteneur>
    </footer>
  );
}
