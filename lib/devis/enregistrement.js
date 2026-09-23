/**
 * POINT DE BRANCHEMENT DES DEMANDES DE DEVIS
 *
 * Toute demande validée passe par cette fonction, et par elle seule.
 * C'est volontairement le seul endroit à modifier pour connecter le
 * formulaire à une destination réelle.
 *
 * PHASE 1 (actuelle) : la demande est journalisée côté serveur et une
 * référence est renvoyée au visiteur. Aucune base de données, aucun
 * secret, aucune dépendance supplémentaire.
 *
 * PHASES SUIVANTES — chaque branchement s'ajoute ici, sans toucher
 * ni au formulaire ni à la validation :
 *
 *   1. BASE DE DONNÉES (Neon)
 *      import { neon } from "@neondatabase/serverless";
 *      const sql = neon(process.env.DATABASE_URL);
 *      await sql`INSERT INTO demandes_devis (reference, nom, telephone, ...)
 *                VALUES (${reference}, ${demande.nom}, ...)`;
 *
 *   2. EMAIL
 *      Envoi d'une notification à l'adresse de l'entreprise.
 *
 *   3. CRM / AUTOMATISATION
 *      Appel du webhook du CRM avec la demande.
 *
 * Rappel sécurité : les identifiants (DATABASE_URL, clés d'API) se
 * placent dans .env.local et ne doivent jamais apparaître dans le code
 * ni dans un composant client.
 */

/** Génère une référence lisible, communiquée au visiteur. Ex. : DEV-20260921-4821 */
function genererReference(date = new Date()) {
  const jour = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("");
  const suffixe = String(Math.floor(1000 + Math.random() * 9000));
  return `DEV-${jour}-${suffixe}`;
}

/**
 * @param {Object} demande Données déjà validées et nettoyées
 * @returns {Promise<{ ok: boolean, reference?: string }>}
 */
export async function enregistrerDemandeDevis(demande) {
  const reference = genererReference();

  // Journal serveur : visible dans le terminal en développement et dans
  // les logs de l'hébergeur en production. Sert de filet tant qu'aucune
  // destination définitive n'est branchée.
  console.info("[devis] nouvelle demande", {
    reference,
    recuLe: new Date().toISOString(),
    nom: demande.nom,
    entreprise: demande.entreprise || null,
    telephone: demande.telephone,
    email: demande.email || null,
    typeBesoin: demande.typeBesoin,
    budget: demande.budget || null,
    delai: demande.delai || null,
    longueurMessage: demande.message.length,
  });

  return { ok: true, reference };
}
