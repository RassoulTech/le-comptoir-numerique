# Le Comptoir Numérique — Site vitrine (Phase 1)

Site vitrine de l'entreprise : présentation, produits, services numériques,
réalisations, demande de devis et contact.

**Périmètre actuel : Phase 1 — vitrine uniquement.** Pas de panier, pas de
paiement, pas de compte client, pas d'administration. L'architecture est
prévue pour accueillir ces éléments plus tard sans reconstruction.

---

## Démarrer le projet

Prérequis : **Node.js 20 ou plus**.

```bash
npm install     # une seule fois
npm run dev     # démarre sur http://localhost:3000
```

Autres commandes :

```bash
npm run build   # construit la version de production
npm run start   # sert la version de production
npm run lint    # vérifie le code
```

---

## Où modifier le contenu

Aucun texte de coordonnées n'est écrit en dur dans les pages. Tout passe
par trois fichiers :

| Fichier | Contient |
|---|---|
| `content/entreprise.js` | Téléphone, WhatsApp, email, adresse, horaires, réseaux, mentions légales |
| `content/catalogue.js` | Les 8 catégories de produits |
| `content/prestations.js` | Les services numériques, les réalisations, les types de besoin du formulaire |

### Remplacer un placeholder

Les informations manquantes sont marquées `aDefinir: true` et s'affichent
sur le site dans un cadre pointillé. Pour en renseigner une :

1. remplacer la valeur (par exemple `"[Email]"` → `"contact@exemple.sn"`) ;
2. passer `aDefinir` à `false`.

Le cadre pointillé disparaît et l'information devient un vrai lien.

### Placeholders restant à remplir

- Email professionnel
- Horaires d'ouverture
- Adresse précise à Thiès (quartier / rue) et lien de carte
- Liens des réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn)
- Raison sociale, NINEA, RCCM pour les mentions légales
- Photos de la boutique ou de l'équipe (pages Accueil et À propos)
- Projets réels pour la page Réalisations

---

## Structure du projet

```
app/                      Une page par dossier, nom du dossier = URL
  layout.js               Structure commune, SEO global, données structurées
  page.js                 Accueil
  a-propos/ produits/ services/ realisations/ devis/ contact/
  devis/actions.js        Traitement du formulaire, côté serveur
  sitemap.js robots.js    Générés automatiquement à partir de la navigation
  not-found.js            Page 404

components/
  layout/                 En-tête (navigation) et pied de page
  ui/                     Briques réutilisées partout : Section, Bouton,
                          Conteneur, Champ, Icone, cartes, Placeholder
  devis/                  Formulaire de demande de devis

content/                  Le contenu éditable (voir plus haut)

lib/
  navigation.js           Les liens du menu — source unique
  seo.js                  Construction des métadonnées de chaque page
  devis/validation.js     Règles de validation du formulaire
  devis/enregistrement.js Destination des demandes de devis

public/images/            Logo et image de partage
scripts/captures.mjs      Captures d'écran responsive + tests du formulaire
```

---

## Choix techniques

**Next.js (App Router) + Tailwind CSS.** Les pages sont rendues côté serveur
et pré-générées : bon référencement et affichage rapide, y compris sur
connexion lente.

**Aucune librairie superflue.** Les icônes sont des SVG écrits à la main,
le menu mobile tient en quelques lignes de JavaScript. La seule dépendance
ajoutée est la police, auto-hébergée pour éviter un appel à Google Fonts.

**Le contenu est séparé de l'affichage.** Les pages parcourent les tableaux
de `content/`. En Phase 2, remplacer ces tableaux par une requête en base
ne demandera aucune modification des composants d'affichage.

## Le design system

Tout est défini une seule fois, dans le bloc `@theme` de `app/globals.css`.
Aucune valeur visuelle ne doit être écrite en dur dans un composant.

### Couleurs

| Rôle | Couleur | Classe |
|---|---|---|
| Vert forêt (dominant) | `#173F35` | `bg-foret` `text-foret` |
| Ivoire (fond clair) | `#F5F0E6` | `bg-ivoire` |
| Bronze (accent) | `#B08D57` | `text-bronze` |
| Anthracite (texte) | `#252A28` | `text-anthracite` |

> Le bronze n'a pas un contraste suffisant pour du texte courant sur fond
> ivoire. Pour un petit texte de teinte bronze, utiliser `text-bronze-texte`
> (`#7A5F38`), qui respecte les normes d'accessibilité.

### Typographie

L'échelle est **fluide** : chaque niveau s'adapte de 360 px à 1920 px sans
point de rupture à écrire. Chaque classe porte déjà sa taille, son
interlignage, son approche et sa graisse — inutile d'ajouter `font-semibold`
ou `leading-relaxed`.

| Classe | Usage |
|---|---|
| `text-affichage` | Titre de couverture (hero) |
| `text-titre-1` | Titre de page (h1) |
| `text-titre-2` | Titre de section (h2) |
| `text-titre-3` | Sous-titre |
| `text-titre-4` | Titre de carte |
| `text-chapo` | Paragraphe d'introduction |
| `text-corps` | Texte courant |
| `text-petit` | Texte secondaire |
| `text-mention` | Mentions, légendes |
| `text-intitule` | Intitulé de section en petites capitales |

### Élévation

`shadow-douce` · `shadow-carte` · `shadow-relief` · `shadow-entete` ·
`shadow-action` · `shadow-action-survol`

Les ombres sont teintées en vert forêt, jamais en gris : sur un fond ivoire
chaud, une ombre grise paraît sale.

### Mouvement

Aucune bibliothèque d'animation n'est installée. Trois mécanismes suffisent :

| Outil | Effet |
|---|---|
| `<Apparition>` | Fait apparaître le contenu quand il entre dans l'écran. `delai` décale les éléments successifs. |
| classe `carte` | Élévation au survol. |
| classe `action` | Enfoncement au clic, et la flèche avance au survol. |

Courbes et durées : `ease-sortie`, `ease-douce`, et les variables
`--duree-instant` / `--duree-rapide` / `--duree-normale` / `--duree-lente`
(à utiliser via `duration-(--duree-normale)`).

Deux garanties importantes :

- **Sans JavaScript, rien n'est masqué.** Le style d'apparition ne
  s'applique que si la classe `js` est présente sur `<html>`, ajoutée par un
  script en ligne avant le premier rendu.
- **`prefers-reduced-motion` est respecté** : les visiteurs qui ont demandé
  moins d'animations voient le site complet, simplement sans mouvement.

---

## Le formulaire de devis

La validation s'exécute **sur le serveur** (`lib/devis/validation.js`) :
elle ne peut pas être contournée depuis le navigateur. Un champ piège
invisible bloque les robots.

Aujourd'hui, une demande validée est journalisée côté serveur et le
visiteur reçoit une référence. Pour la connecter à une vraie destination —
base de données, email, CRM — un seul fichier est à modifier :
**`lib/devis/enregistrement.js`**. Le formulaire et la validation restent
inchangés.

---

## Prévu pour la suite

Ces espaces n'existent pas encore. Ils sont déjà exclus de l'indexation
dans `app/robots.js` pour ne pas être oubliés le jour où ils seront créés.

```
app/boutique/    app/panier/    app/compte/    app/admin/
```

Les identifiants (base de données, clés d'API) se placeront dans
`.env.local`, jamais dans le code. Voir `.env.example`.

---

## Vérifier le site

Le script de contrôle utilise Playwright, qui n'est pas installé par
défaut (il est volumineux et sert uniquement aux tests) :

```bash
npm install -D playwright        # une seule fois
npx playwright install chromium  # une seule fois

npm run build && npm run start   # dans un terminal
node scripts/captures.mjs        # dans un autre
```

Le script produit des captures de chaque page en 360, 390, 768, 1280 et
1920 px, teste le formulaire (erreurs et envoi réussi) et signale les
débordements horizontaux, les titres manquants et les images sans
attribut `alt`.
