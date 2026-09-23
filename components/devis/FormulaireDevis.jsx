"use client";

import { useActionState, useState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { envoyerDemandeDevis } from "@/app/devis/actions";
import { typesDeBesoin } from "@/content/prestations";
import { budgets, delais, LONGUEUR_MESSAGE_MAX } from "@/lib/devis/validation";
import { entreprise, lienWhatsApp } from "@/content/entreprise";
import Champ from "@/components/ui/Champ";
import Icone from "@/components/ui/Icone";

const ETAT_INITIAL = { statut: "inactif", erreurs: {}, valeurs: {} };

const ETAPES = [
  { id: 1, titre: "Votre besoin", description: "Nature du projet" },
  { id: 2, titre: "Détails & Budget", description: "Cahier des charges" },
  { id: 3, titre: "Vos coordonnées", description: "Contact & Envoi" },
];

function BoutonEnvoi() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="action inline-flex w-full items-center justify-center gap-2 rounded-action degrade-bronze px-6 py-3.5 text-corps font-bold whitespace-nowrap text-ivoire shadow-action hover:brightness-110 hover:shadow-action-survol disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Envoi de votre demande…" : "Envoyer ma demande de devis"}
      {!pending && <Icone nom="fleche" className="size-5" />}
    </button>
  );
}

export default function FormulaireDevis() {
  const [etat, action] = useActionState(envoyerDemandeDevis, ETAT_INITIAL);
  const [etapeManuelle, setEtapeManuelle] = useState(1);
  const [typeManuel, setTypeManuel] = useState("");
  const [longueurMessage, setLongueurMessage] = useState(0);

  const erreurs = etat.erreurs ?? {};
  const valeurs = etat.valeurs ?? {};

  // Détermination de l'étape active : si des erreurs sont présentes après soumission, on affiche l'étape correspondante
  let etapeActive = etapeManuelle;
  if (erreurs.typeBesoin) {
    etapeActive = 1;
  } else if (erreurs.message || erreurs.budget || erreurs.delai) {
    etapeActive = 2;
  } else if (erreurs.nom || erreurs.telephone || erreurs.email || erreurs.entreprise) {
    etapeActive = 3;
  }

  const setEtapeActive = setEtapeManuelle;
  const typeSelectionne = typeManuel || valeurs.typeBesoin || "";
  const setTypeSelectionne = setTypeManuel;

  /* ---------------------------------------------------------------
     Confirmation après envoi réussi
  --------------------------------------------------------------- */
  if (etat.statut === "succes") {
    return (
      <div className="rounded-2xl border border-foret/20 bg-ivoire-clair p-8 sm:p-10 text-center shadow-relief">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-foret text-ivoire shadow-action animate-bounce [animation-duration:2.5s]">
          <Icone nom="check" className="size-8 text-bronze-clair" />
        </span>

        <h2 className="mt-6 text-titre-2 text-foret">
          Votre demande est bien enregistrée !
        </h2>
        <p className="mx-auto mt-3 max-w-md text-corps text-anthracite-doux leading-relaxed">
          Merci pour votre confiance. Notre équipe étudie vos besoins et vous
          recontacte dans les plus brefs délais.
        </p>

        {etat.reference && (
          <div className="mt-6 inline-block rounded-xl bg-ivoire-fonce/80 border border-anthracite/10 px-6 py-3 text-petit text-anthracite">
            Numéro de référence :{" "}
            <strong data-chiffres className="font-bold text-foret text-corps">
              {etat.reference}
            </strong>
          </div>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={lienWhatsApp(
              `Bonjour Le Comptoir Numérique, je viens d'envoyer une demande de devis${
                etat.reference ? ` (référence ${etat.reference})` : ""
              }.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="action inline-flex items-center justify-center gap-2 rounded-action bg-[#25D366] px-6 py-3.5 text-petit font-bold text-white shadow-action hover:bg-[#1ebd5a]"
          >
            <Icone nom="whatsapp" className="size-5" />
            Suivre sur WhatsApp
          </a>
          <a
            href={entreprise.telephone.lien}
            className="action inline-flex items-center justify-center gap-2 rounded-action px-6 py-3.5 text-petit font-semibold text-foret ring-1 ring-inset ring-foret/20 hover:bg-foret/[0.04]"
          >
            <Icone nom="telephoneAppel" className="size-5" />
            {entreprise.telephone.affichage}
          </a>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------
     Formulaire en Wizard (3 étapes)
  --------------------------------------------------------------- */
  return (
    <div className="rounded-2xl border border-anthracite/10 bg-ivoire-clair p-6 sm:p-8 shadow-relief">
      {/* Barre de progression des étapes */}
      <div className="mb-8 border-b border-anthracite/10 pb-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {ETAPES.map((etape) => {
            const estActif = etapeActive === etape.id;
            const estPasse = etapeActive > etape.id;
            return (
              <button
                key={etape.id}
                type="button"
                onClick={() => setEtapeActive(etape.id)}
                className="group flex flex-col text-left focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex size-7 sm:size-8 items-center justify-center rounded-full text-mention font-bold transition-colors ${
                      estActif
                        ? "bg-foret text-ivoire shadow-douce"
                        : estPasse
                        ? "bg-bronze text-ivoire"
                        : "bg-ivoire-fonce text-anthracite-doux border border-anthracite/10"
                    }`}
                  >
                    {estPasse ? "✓" : etape.id}
                  </span>
                  <span
                    className={`hidden sm:inline-block text-petit font-semibold ${
                      estActif ? "text-foret" : "text-anthracite-doux"
                    }`}
                  >
                    {etape.titre}
                  </span>
                </div>
                {/* Barre indicatrice */}
                <div
                  className={`mt-2.5 h-1 w-full rounded-full transition-colors ${
                    estActif
                      ? "bg-foret"
                      : estPasse
                      ? "bg-bronze"
                      : "bg-anthracite/10"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <form action={action} noValidate>
        {/* Erreur générale */}
        {erreurs._global && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-700/30 bg-red-50 px-4 py-3 text-petit text-red-900 shadow-sm"
          >
            {erreurs._global}
          </div>
        )}

        {/* -------------------------------------------------------------
            ÉTAPE 1 : Choix du type de besoin
        ------------------------------------------------------------- */}
        <div className={etapeActive === 1 ? "block" : "hidden"}>
          <h3 className="text-titre-3 text-foret font-bold">
            Quel est le domaine principal de votre demande ?
          </h3>
          <p className="mt-1 text-petit text-anthracite-doux">
            Sélectionnez la catégorie qui correspond le mieux à votre projet.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {typesDeBesoin.map((type) => {
              const selectionne = typeSelectionne === type.valeur;
              return (
                <label
                  key={type.valeur}
                  className={`carte-interactive flex cursor-pointer items-center gap-3.5 rounded-xl border p-4 transition-all ${
                    selectionne
                      ? "border-foret bg-foret/[0.06] shadow-douce ring-1 ring-foret/30"
                      : "border-anthracite/10 bg-ivoire hover:border-bronze/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="typeBesoin"
                    value={type.valeur}
                    checked={selectionne}
                    onChange={() => setTypeSelectionne(type.valeur)}
                    className="size-4 text-foret focus:ring-bronze"
                  />
                  <span className="text-petit font-semibold text-anthracite">
                    {type.libelle}
                  </span>
                </label>
              );
            })}
          </div>

          {erreurs.typeBesoin && (
            <p className="mt-3 text-mention text-red-700 font-medium">
              {erreurs.typeBesoin}
            </p>
          )}

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setEtapeActive(2)}
              className="action inline-flex items-center gap-2 rounded-action bg-foret px-6 py-3 text-petit font-semibold text-ivoire shadow-action hover:bg-foret-clair"
            >
              <span>Continuer (Détails & Budget)</span>
              <Icone nom="fleche" className="size-4" />
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            ÉTAPE 2 : Description, Budget & Délais
        ------------------------------------------------------------- */}
        <div className={etapeActive === 2 ? "block" : "hidden"}>
          <h3 className="text-titre-3 text-foret font-bold">
            Décrivez-nous votre projet
          </h3>
          <p className="mt-1 text-petit text-anthracite-doux">
            Précisez vos besoins, le contexte et vos attentes.
          </p>

          <div className="mt-6 space-y-5">
            <Champ
              id="message"
              label="Votre besoin / Descriptif"
              obligatoire
              erreur={erreurs.message}
              aide="Expliquez ce que vous souhaitez réaliser ou le matériel recherché."
            >
              {(props) => (
                <textarea
                  {...props}
                  name="message"
                  rows={5}
                  maxLength={LONGUEUR_MESSAGE_MAX}
                  defaultValue={valeurs.message}
                  onChange={(e) => setLongueurMessage(e.target.value.length)}
                  placeholder="Ex : Nous souhaitons créer un site web pour notre cabinet et installer un équipement de bureau complet..."
                  className={`${props.className} resize-y`}
                />
              )}
            </Champ>

            <p className="-mt-3 text-right text-mention text-anthracite-doux">
              {longueurMessage} / {LONGUEUR_MESSAGE_MAX} caractères
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Champ id="budget" label="Budget estimé" erreur={erreurs.budget}>
                {(props) => (
                  <select
                    {...props}
                    name="budget"
                    defaultValue={valeurs.budget ?? ""}
                  >
                    <option value="">Non précisé / À définir ensemble</option>
                    {budgets.map((budget) => (
                      <option key={budget.valeur} value={budget.valeur}>
                        {budget.libelle}
                      </option>
                    ))}
                  </select>
                )}
              </Champ>

              <Champ id="delai" label="Délai souhaité" erreur={erreurs.delai}>
                {(props) => (
                  <select
                    {...props}
                    name="delai"
                    defaultValue={valeurs.delai ?? ""}
                  >
                    <option value="">Non précisé</option>
                    {delais.map((delai) => (
                      <option key={delai.valeur} value={delai.valeur}>
                        {delai.libelle}
                      </option>
                    ))}
                  </select>
                )}
              </Champ>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-anthracite/10 pt-6">
            <button
              type="button"
              onClick={() => setEtapeActive(1)}
              className="action text-petit font-semibold text-anthracite-doux hover:text-foret"
            >
              ← Revenir au type de besoin
            </button>
            <button
              type="button"
              onClick={() => setEtapeActive(3)}
              className="action inline-flex items-center gap-2 rounded-action bg-foret px-6 py-3 text-petit font-semibold text-ivoire shadow-action hover:bg-foret-clair"
            >
              <span>Continuer (Coordonnées)</span>
              <Icone nom="fleche" className="size-4" />
            </button>
          </div>
        </div>

        {/* -------------------------------------------------------------
            ÉTAPE 3 : Coordonnées de contact & Validation
        ------------------------------------------------------------- */}
        <div className={etapeActive === 3 ? "block" : "hidden"}>
          <h3 className="text-titre-3 text-foret font-bold">
            Vos coordonnées de contact
          </h3>
          <p className="mt-1 text-petit text-anthracite-doux">
            Où pouvons-nous vous envoyer l&apos;estimation et vous joindre ?
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Champ id="nom" label="Nom complet" obligatoire erreur={erreurs.nom}>
              {(props) => (
                <input
                  {...props}
                  type="text"
                  name="nom"
                  autoComplete="name"
                  defaultValue={valeurs.nom}
                  placeholder="Mamadou Diop"
                />
              )}
            </Champ>

            <Champ id="entreprise" label="Structure / Entreprise" erreur={erreurs.entreprise}>
              {(props) => (
                <input
                  {...props}
                  type="text"
                  name="entreprise"
                  autoComplete="organization"
                  defaultValue={valeurs.entreprise}
                  placeholder="Nom de l'entreprise (facultatif)"
                />
              )}
            </Champ>

            <Champ
              id="telephone"
              label="Numéro de Téléphone / WhatsApp"
              obligatoire
              erreur={erreurs.telephone}
              aide="Utilisé pour vous joindre rapidement avec la proposition."
            >
              {(props) => (
                <input
                  {...props}
                  type="tel"
                  name="telephone"
                  inputMode="tel"
                  autoComplete="tel"
                  defaultValue={valeurs.telephone}
                  placeholder="+221 77 000 00 00"
                />
              )}
            </Champ>

            <Champ id="email" label="Adresse Email" erreur={erreurs.email}>
              {(props) => (
                <input
                  {...props}
                  type="email"
                  name="email"
                  inputMode="email"
                  autoComplete="email"
                  defaultValue={valeurs.email}
                  placeholder="contact@exemple.sn"
                />
              )}
            </Champ>
          </div>

          {/* Piège anti-spam invisible */}
          <div
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
          >
            <label htmlFor="site_web">Ne pas remplir</label>
            <input
              id="site_web"
              type="text"
              name="site_web"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-anthracite/10 pt-6">
            <button
              type="button"
              onClick={() => setEtapeActive(2)}
              className="action text-petit font-semibold text-anthracite-doux hover:text-foret"
            >
              ← Modifier la description
            </button>
            <BoutonEnvoi />
          </div>
        </div>
      </form>
    </div>
  );
}
