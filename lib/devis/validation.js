import { typesDeBesoin } from "@/content/prestations";

export const budgets = [
  { valeur: "non-defini", libelle: "Je ne sais pas encore" },
  { valeur: "moins-100k", libelle: "Moins de 100 000 FCFA" },
  { valeur: "100k-500k", libelle: "100 000 – 500 000 FCFA" },
  { valeur: "500k-1m", libelle: "500 000 – 1 000 000 FCFA" },
  { valeur: "plus-1m", libelle: "Plus de 1 000 000 FCFA" },
];

export const delais = [
  { valeur: "non-defini", libelle: "Pas de date précise" },
  { valeur: "urgent", libelle: "Dès que possible" },
  { valeur: "1-mois", libelle: "Dans le mois" },
  { valeur: "1-3-mois", libelle: "Dans 1 à 3 mois" },
  { valeur: "plus-3-mois", libelle: "Dans plus de 3 mois" },
];

/** Longueur maximale du message, partagée avec le compteur côté client. */
export const LONGUEUR_MESSAGE_MAX = 1500;

const EXPRESSION_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EXPRESSION_TELEPHONE = /^[+0-9][0-9\s().-]{7,19}$/;

/**
 * Valide une demande de devis côté serveur.
 *
 * Cette fonction ne dépend d'aucune API navigateur : elle est appelée
 * depuis la Server Action, donc les données sont vérifiées sur le serveur
 * même si le JavaScript est désactivé côté visiteur.
 *
 * @param {Record<string, string>} donnees
 * @returns {{ valide: boolean, erreurs: Record<string, string>, propres: Object }}
 */
export function validerDemandeDevis(donnees) {
  const erreurs = {};

  const nom = (donnees.nom ?? "").trim();
  const entreprise = (donnees.entreprise ?? "").trim();
  const telephone = (donnees.telephone ?? "").trim();
  const email = (donnees.email ?? "").trim();
  const typeBesoin = (donnees.typeBesoin ?? "").trim();
  const message = (donnees.message ?? "").trim();
  const budget = (donnees.budget ?? "").trim();
  const delai = (donnees.delai ?? "").trim();

  if (nom.length < 2) {
    erreurs.nom = "Merci d'indiquer votre nom (2 caractères minimum).";
  } else if (nom.length > 80) {
    erreurs.nom = "Le nom ne doit pas dépasser 80 caractères.";
  }

  if (entreprise.length > 80) {
    erreurs.entreprise =
      "Le nom de l'entreprise ne doit pas dépasser 80 caractères.";
  }

  if (!telephone) {
    erreurs.telephone = "Le téléphone est nécessaire pour vous répondre.";
  } else if (!EXPRESSION_TELEPHONE.test(telephone)) {
    erreurs.telephone =
      "Format de téléphone non reconnu. Exemple : +221 77 000 00 00";
  }

  // L'email reste facultatif : beaucoup de clients préfèrent le téléphone.
  if (email && !EXPRESSION_EMAIL.test(email)) {
    erreurs.email = "Cette adresse email ne semble pas valide.";
  }

  const typesValides = typesDeBesoin.map((t) => t.valeur);
  if (!typeBesoin) {
    erreurs.typeBesoin = "Merci de préciser le type de besoin.";
  } else if (!typesValides.includes(typeBesoin)) {
    erreurs.typeBesoin = "Type de besoin non reconnu.";
  }

  if (message.length < 10) {
    erreurs.message =
      "Décrivez votre besoin en quelques mots (10 caractères minimum).";
  } else if (message.length > LONGUEUR_MESSAGE_MAX) {
    erreurs.message = `Le message ne doit pas dépasser ${LONGUEUR_MESSAGE_MAX} caractères.`;
  }

  // Champs facultatifs : une valeur inconnue est ignorée plutôt que rejetée.
  const budgetValide = budgets.some((b) => b.valeur === budget) ? budget : "";
  const delaiValide = delais.some((d) => d.valeur === delai) ? delai : "";

  return {
    valide: Object.keys(erreurs).length === 0,
    erreurs,
    propres: {
      nom,
      entreprise,
      telephone,
      email,
      typeBesoin,
      message,
      budget: budgetValide,
      delai: delaiValide,
    },
  };
}
