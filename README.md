# Le Comptoir Numérique — Site vitrine

Site vitrine de l'entreprise : présentation, produits (quatre catégories),
solutions numériques (sept offres), visite cinématique, demande de devis et
contact.

**Périmètre actuel : vitrine uniquement.** Pas de panier, pas de paiement,
pas de compte client, pas d'administration. L'architecture est prévue pour
accueillir ces éléments plus tard sans reconstruction.

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

## Architecture du site

```text
/                             Accueil : visite cinématique + contenu
/produits                     Catalogue : 4 catégories + recherche
/produits/electronique        Pages catégorie (générées en statique)
/produits/electrique
/produits/electromenager
/produits/technologie-medias
/solutions-numeriques         Hub du pôle numérique (7 offres)
/solutions/sites-web          Pages détail (générées en statique)
/solutions/applications-web
/solutions/logiciels
/solutions/automatisation
/solutions/marketing-digital
/solutions/referencement-seo
/solutions/conseil-accompagnement
/a-propos
/contact
/devis                        Formulaire (server action réelle)
/services                     Redirection vers /solutions-numeriques
/style-tile.html              Style tile (document de référence visuelle)
```

La navigation principale (Accueil · Produits · Solutions numériques ·
À propos · Contact) vit dans **`lib/navigation.js`** — en-tête, pied de
page et sitemap la lisent.

---

## Où modifier le contenu

Aucun texte n'est écrit en dur dans les pages. Tout passe par `content/` :

| Fichier | Contient |
|---|---|
| `content/entreprise.js` | **Les deux pôles** (Produits 77 591 94 73 · Solutions 77 383 13 64), WhatsApp, email, adresse, horaires, réseaux, mentions légales |
| `content/univers.js` | Les catégories de produits (familles, visuels, rang) |
| `content/produits.js` | Le catalogue produits (confirmés uniquement) |
| `content/prestations.js` | Les **7 solutions numériques** (pages détail complètes), les services d'assistance, les types de besoin du formulaire |
| `content/visite.js` | **Le manifest de la visite cinématique** : scènes, textes, visuels, CTA, prompts FPV |

### Ajouter un produit

Ajouter une entrée dans `content/produits.js` :

```js
{
  slug: "mon-produit",
  nom: "Mon produit",
  univers: "electromenager",           // slug d'un univers existant
  illustration: "blender",             // clé de repli vectoriel
  ...photoLocal("produits/detail/mon-produit.jpg", "Description"),
  // imageSource: "local" — ou "illustration" si pas encore de photo
}
```

Il apparaît automatiquement dans le filtre du catalogue et sur sa page
catégorie. **Ne jamais ajouter** de prix, de marque ou de stock non
confirmé par l'entreprise.

### Ajouter ou modifier une solution

Chaque entrée de `content/prestations.js` alimente une page
`/solutions/<slug>` complète (problématique, constats, approche,
réalisations, processus, bénéfices, CTA). Modifier les textes ici ne
demande aucun changement de composant. Les slugs des pages sont générés
en statique (`generateStaticParams`) : un nouveau slug crée sa page au
build.

### Modifier la visite cinématique

La visite est un **parcours à chapitres** : arrivée → espace produits →
transition → solutions → savoir-faire → sortie → révélation → contact.

- **Textes, ordre, CTA** : modifier le tableau `scenes` de
  `content/visite.js`. Le composant `components/visite/VisiteCinematique.jsx`
  rend les scènes dans l'ordre — rien d'autre à toucher.
- **Visuel d'une scène** : `type: "photos"` (images locales), `type:
  "placeholder"` (cadre provisoire, à remplacer par une photo réelle) ou
  `type: "plein"` (fond uni typographique).
- **Timeline / rythme** : la constante `VOIX_PAR_SCENE` du composant
  définit la longueur de défilement par scène (0,85 écran par scène).
- **Fly-through vidéo FPV (à produire)** : chaque scène porte un `prompt`
  FPV prêt à l'emploi dans `content/visite.js` (règle du brief : jamais
  « drone »/« quadcopter »/« UAV » — « one single continuous first-person
  camera move, no cuts; the camera itself flies… »). L'outil de génération
  n'étant pas disponible au moment de la refonte, aucune vidéo n'a été
  fabriquée : les scènes affichent des images réelles du projet ou des
  placeholders identifiables.

### Accessibilité et performance de la visite

- Lien **« Passer la visite »** toujours présent (clavier inclus).
- **Sans JavaScript** : les chapitres s'affichent empilés et complets.
- **`prefers-reduced-motion`** : l'expérience repasse en statique
  (garantie par le CSS, indépendamment de l'état React).
- **Préchargement ciblé** : seules les images de la scène active ±1 sont
  demandées en mode cinéma ; les autres restent en chargement différé.

---

## Structure du projet

```text
app/                        Une page par dossier, nom du dossier = URL
  layout.js                 Structure commune, SEO global, données structurées
  page.js                   Accueil (visite cinématique + contenu)
  produits/[slug]/          Pages catégorie (SSG, 4 pages)
  solutions/[slug]/         Pages détail solutions (SSG, 7 pages)
  solutions-numeriques/     Hub du pôle numérique
  a-propos/ devis/ contact/ realisations/
  services/                 Redirection vers /solutions-numeriques
  devis/actions.js          Traitement du formulaire, côté serveur
  sitemap.js robots.js      Générés automatiquement
  not-found.js              Page 404

components/
  layout/                   En-tête, pied de page, barre d'actions mobile
  ui/                       Briques réutilisées : Section, Bouton, Conteneur,
                            Champ, Icone, cartes, Photo, Placeholder…
  visite/                   VisiteCinematique (parcours de la homepage)
  devis/                    Formulaire en 3 étapes (wizard)

content/                    Le contenu éditable (voir plus haut)
lib/
  navigation.js             Les liens du menu — source unique
  seo.js                    Métadonnées + données structurées (2 pôles)
  photos.js                 Sources d'images (locales / Unsplash créditées)
  devis/validation.js       Règles de validation du formulaire
  devis/enregistrement.js   Destination des demandes de devis

public/images/              Logo, photos produits/services, image de partage
public/style-tile.html      Style tile HTML/CSS autonome
scripts/captures.mjs        QA : captures responsive 5 tailles + tests du formulaire
scripts/audit-contraste.mjs QA : audit des contrastes
scripts/diag-debordement.mjs QA : identifie les éléments qui débordent
```

---

## Choix techniques

**Next.js (App Router) + Tailwind CSS.** Les pages sont rendues côté
serveur et pré-générées : bon référencement et affichage rapide, y compris
sur connexion lente. Les pages catégorie et solutions sont en SSG
(`generateStaticParams`).

**Aucune librairie superflue.** Les icônes sont des SVG écrits à la main,
le menu mobile et la visite tiennent en quelques lignes de JavaScript. La
seule dépendance ajoutée est la police, auto-hébergée pour éviter un appel
à Google Fonts.

**Le contenu est séparé de l'affichage.** Les pages parcourent les tableaux
de `content/`. Remplacer ces tableaux par une requête en base ne demandera
aucune modification des composants d'affichage.

## Le design system

Tout est défini une seule fois, dans le bloc `@theme` de `app/globals.css`
et la **style tile** (`public/style-tile.html`, consultable sur
`/style-tile.html`). Aucune valeur visuelle ne doit être écrite en dur
dans un composant.

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
interlignage, son approche et sa graisse.

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

Aucune bibliothèque d'animation n'est installée.

| Outil | Effet |
|---|---|
| `<Apparition>` | Fait apparaître le contenu quand il entre dans l'écran. `delai` décale les éléments successifs. |
| classe `carte` | Élévation au survol. |
| classe `action` | Enfoncement au clic, et la flèche avance au survol. |
| `<VisiteCinematique>` | Parcours à chapitres de la homepage (détails plus haut). |

Courbes et durées : `ease-sortie`, `ease-douce`, et les variables
`--duree-instant` / `--duree-rapide` / `--duree-normale` / `--duree-lente`
(à utiliser via `duration-(--duree-normale)`).

Deux garanties importantes :

- **Sans JavaScript, rien n'est masqué.** Le style d'apparition ne
  s'applique que si la classe `js` est présente sur `<html>`, ajoutée par un
  script en ligne avant le premier rendu.
- **`prefers-reduced-motion` est respecté** : les visiteurs qui ont demandé
  moins d'animations voient le site complet, simplement sans mouvement —
  y compris la visite, qui repasse en chapitres statiques.

---

## Le formulaire de devis

Formulaire en trois étapes (besoin → détails & budget → coordonnées), avec
choix du besoin parmi les deux pôles. La validation s'exécute **sur le
serveur** (`lib/devis/validation.js`) : elle ne peut pas être contournée
depuis le navigateur, et une erreur ramène le visiteur sur la bonne étape.
Un champ piège invisible bloque les robots. En cas de succès, une
**référence de suivi** est remise au visiteur.

Aujourd'hui, une demande validée est journalisée côté serveur. Pour la
connecter à une vraie destination — base de données, email, CRM — un seul
fichier est à modifier : **`lib/devis/enregistrement.js`**. Le formulaire
et la validation restent inchangés.

---

## Règles éditoriales (à ne pas perdre)

- **Rien d'inventé** : pas de prix, stock, marque, client, chiffre, délai
  ni année d'expérience sans confirmation. Une donnée non confirmée est
  `UNKNOWN` ou `aDefinir: true`, jamais un fait.
- Les photos illustrent une **famille** de produits, pas un modèle vendu :
  la mention est affichée sur les pages concernées.
- Les logiciels tiers (Microsoft, Adobe…) ne sont cités qu'en usage
  référentiel, avec la mention légale obligatoire qui les accompagne.
- Les deux pôles ont chacun leur numéro : toute surface de contact cite
  le bon interlocuteur.

---

## Vérifier le site

Les tests Playwright sont installés en dépendance de développement :

```bash
npm run build && npm run start   # terminal 1 (serveur sur :3000)
node scripts/captures.mjs        # terminal 2
node scripts/diag-debordement.mjs /une-page 360   # diagnostic ciblé
node scripts/audit-contraste.mjs                  # contrastes
```

`captures.mjs` produit des captures de chaque page en 360, 390, 768, 1280
et 1920 px (dans `./captures/`), teste le formulaire de bout en bout
(erreurs de validation puis envoi réussi avec confirmation), et vérifie à
360 px : débordements horizontaux, un seul `h1` par page, présence du
`meta description`, et aucune image sans `alt`.

---

## Prévus pour la suite

```
app/boutique/    app/panier/    app/compte/    app/admin/
```

Ces espaces n'existent pas encore ; ils sont exclus de l'indexation dans
`app/robots.js` pour ne pas être oubliés le jour où ils seront créés. Les
identifiants (base de données, clés d'API) se placeront dans `.env.local`,
jamais dans le code. Voir `.env.example`.