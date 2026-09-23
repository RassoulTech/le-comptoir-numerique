"use server";

import { validerDemandeDevis } from "@/lib/devis/validation";
import { enregistrerDemandeDevis } from "@/lib/devis/enregistrement";

/**
 * Traitement du formulaire de demande de devis.
 *
 * Exécutée sur le serveur : la validation ne peut pas être contournée
 * depuis le navigateur, et aucune donnée n'est exposée côté client.
 *
 * @param {Object} etatPrecedent
 * @param {FormData} formData
 */
export async function envoyerDemandeDevis(etatPrecedent, formData) {
  const donnees = Object.fromEntries(formData);

  // Piège à robots : ce champ est masqué aux visiteurs. S'il est rempli,
  // la soumission vient d'un automate. On renvoie un succès neutre pour
  // ne pas lui indiquer qu'il a été détecté.
  if (donnees.site_web) {
    return { statut: "succes", reference: null, erreurs: {} };
  }

  const { valide, erreurs, propres } = validerDemandeDevis(donnees);

  if (!valide) {
    return {
      statut: "erreur",
      erreurs,
      // Les valeurs saisies sont renvoyées pour que le visiteur
      // ne perde pas ce qu'il a déjà écrit.
      valeurs: propres,
    };
  }

  try {
    const resultat = await enregistrerDemandeDevis(propres);

    if (!resultat.ok) {
      return {
        statut: "erreur",
        erreurs: {
          _global:
            "L'envoi a échoué. Merci de réessayer ou de nous contacter par téléphone.",
        },
        valeurs: propres,
      };
    }

    return { statut: "succes", reference: resultat.reference, erreurs: {} };
  } catch (erreur) {
    console.error("[devis] echec de l'enregistrement", erreur);
    return {
      statut: "erreur",
      erreurs: {
        _global:
          "Une erreur technique est survenue. Merci de nous contacter par téléphone ou WhatsApp.",
      },
      valeurs: propres,
    };
  }
}
