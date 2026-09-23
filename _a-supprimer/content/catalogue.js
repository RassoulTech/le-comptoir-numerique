/**
 * CATÉGORIES DE PRODUITS — PHASE 1 (présentation uniquement)
 *
 * Aucun produit, prix ou caractéristique n'est inventé ici : seules les
 * familles de produits annoncées par l'entreprise sont décrites.
 *
 * ÉVOLUTION PHASE 2 : lorsque le catalogue passera en base de données
 * (Neon), il suffira de remplacer l'import de ce fichier par un appel
 * du type `await getCategories()`. Les composants d'affichage attendent
 * déjà cette forme d'objet et n'auront pas à être modifiés.
 *
 * @typedef {Object} Categorie
 * @property {string} slug        Identifiant d'URL (réservé à la Phase 2)
 * @property {string} nom         Nom affiché
 * @property {string} description Description courte et factuelle
 * @property {string[]} exemples  Types d'articles concernés
 * @property {string} icone       Clé lue par le composant <Icone />
 */

/** @type {Categorie[]} */
export const categories = [
  {
    slug: "audio",
    nom: "Audio",
    description:
      "Écouteurs et solutions d'écoute pour le quotidien, le sport et le travail.",
    exemples: ["Écouteurs", "AirPods", "Écouteurs filaires"],
    icone: "audio",
  },
  {
    slug: "casques",
    nom: "Casques",
    description:
      "Casques audio pour l'écoute prolongée, la création de contenu et les appels.",
    exemples: ["Casques sans fil", "Casques filaires", "Casques studio"],
    icone: "casque",
  },
  {
    slug: "bluetooth",
    nom: "Bluetooth",
    description:
      "Appareils et périphériques sans fil pour connecter vos équipements.",
    exemples: ["Enceintes", "Adaptateurs", "Périphériques sans fil"],
    icone: "bluetooth",
  },
  {
    slug: "accessoires-telephone",
    nom: "Accessoires téléphone",
    description:
      "Coques et accessoires pour équiper et personnaliser votre téléphone.",
    exemples: ["Coques", "Supports", "Câbles et chargeurs"],
    icone: "telephone",
  },
  {
    slug: "protection",
    nom: "Protection",
    description:
      "Protections d'écran et solutions pour préserver vos appareils au quotidien.",
    exemples: ["Protections d'écran", "Films de protection"],
    icone: "protection",
  },
  {
    slug: "microphones",
    nom: "Microphones",
    description:
      "Microphones pour l'enregistrement, la visioconférence et la création de contenu.",
    exemples: ["Micros-cravates", "Micros USB", "Micros sans fil"],
    icone: "micro",
  },
  {
    slug: "trepieds",
    nom: "Trépieds",
    description:
      "Trépieds et supports pour stabiliser téléphones, appareils photo et éclairages.",
    exemples: ["Trépieds téléphone", "Perches", "Supports de table"],
    icone: "trepied",
  },
  {
    slug: "accessoires-technologiques",
    nom: "Accessoires technologiques",
    description:
      "Équipements et accessoires complémentaires pour votre matériel technologique.",
    exemples: ["Câblerie", "Stockage", "Petits équipements"],
    icone: "accessoires",
  },
];
