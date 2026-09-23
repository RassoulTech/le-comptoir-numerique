# 📱 Réseaux Sociaux — Guide d'Intégration

## ✅ Ce qui est déjà fait

✨ **Infrastructure prête :**
- ✅ Icônes réseaux sociaux premium ajoutées (Facebook, Instagram, TikTok, LinkedIn)
- ✅ Composant `ReseauxSociaux.jsx` créé avec design moderne
- ✅ Structure `entreprise.js` préparée pour recevoir les URLs
- ✅ Page de contact mise à jour
- ✅ Footer mis à jour
- ✅ Groupe WhatsApp intégré : https://chat.whatsapp.com/IqPWFPuKjGIKmzKtGlMvgM?mode=gi_t
- ✅ Email configuré : digigeek221@gmail.com (09h-22h)

---

## 📝 Comment Ajouter les URLs des Réseaux Sociaux

### Étape 1: Éditer `content/entreprise.js`

Ouvrez le fichier et trouvez cette section :

```javascript
reseaux: [
  { nom: "Facebook", icone: "facebook", url: null, aDefinir: true },
  { nom: "Instagram", icone: "instagram", url: null, aDefinir: true },
  { nom: "TikTok", icone: "tiktok", url: null, aDefinir: true },
  { nom: "LinkedIn", icone: "linkedin", url: null, aDefinir: true },
],
```

### Étape 2: Ajouter les URLs

Remplacez `url: null` et `aDefinir: true` par les URLs réelles :

```javascript
reseaux: [
  { 
    nom: "Facebook", 
    icone: "facebook", 
    url: "https://www.facebook.com/yourpage", 
    aDefinir: false 
  },
  { 
    nom: "Instagram", 
    icone: "instagram", 
    url: "https://www.instagram.com/yourprofile", 
    aDefinir: false 
  },
  { 
    nom: "TikTok", 
    icone: "tiktok", 
    url: "https://www.tiktok.com/@yourprofile", 
    aDefinir: false 
  },
  { 
    nom: "LinkedIn", 
    icone: "linkedin", 
    url: "https://www.linkedin.com/company/yourcompany", 
    aDefinir: false 
  },
],
```

---

## 🔗 Formats d'URL par Réseau

### Facebook
```
https://www.facebook.com/yourpagename
ou
https://www.facebook.com/pages/Your-Page-Name/123456789
```

**Exemple :** `https://www.facebook.com/comptoir.numerique`

---

### Instagram
```
https://www.instagram.com/yourusername
```

**Exemple :** `https://www.instagram.com/comptoir_numerique`

---

### TikTok
```
https://www.tiktok.com/@yourusername
```

**Exemple :** `https://www.tiktok.com/@comptoir.numerique`

---

### LinkedIn
```
https://www.linkedin.com/company/yourcompanyname
```

**Exemple :** `https://www.linkedin.com/company/le-comptoir-numerique`

---

## 📍 Où Trouver Vos URLs

### Facebook
1. Allez sur votre page Facebook
2. Copiez l'URL de la barre d'adresse
3. Format : `facebook.com/yourpage`

### Instagram
1. Allez sur votre profil Instagram
2. Copiez l'URL : `instagram.com/yourusername`
3. Ajouter `https://www.` devant

### TikTok
1. Allez sur votre profil TikTok
2. Copiez l'URL
3. Format : `tiktok.com/@yourusername`

### LinkedIn
1. Allez sur votre page d'entreprise LinkedIn
2. Copiez l'URL
3. Format : `linkedin.com/company/yourcompany`

---

## 🎨 Affichage des Réseaux Sociaux

Les réseaux sociaux s'affichent aux endroits suivants :

### 1. **Pied de page** (PiedDePage.jsx)
- Affiche les icônes avec hover effects
- Ceux sans URL apparaissent grisés
- Lien externe (target="_blank")

### 2. **Page de Contact** (app/contact/page.js)
- Section "Suivez nos actualités"
- Icônes avec design premium
- Format : icône + lien cliquable

---

## ✨ Design des Icônes

Les icônes réseaux sociaux sont optimisées pour :

- ✅ **SVG inline** (zéro chargement supplémentaire)
- ✅ **Couleurs héritable** (changent selon le contexte)
- ✅ **Responsive** (s'agrandissent sur mobile)
- ✅ **Hover effects** (animations premium)
- ✅ **Accessibilité** (ARIA labels)

### Couleurs disponibles

```css
/* Défaut (hérité du texte parent) */
.text-ivoire   /* Blanc sur fond sombre */
.text-foret    /* Vert forêt sur fond clair */
.text-bronze   /* Bronze accent */

/* Custom si nécessaire */
.text-[#25D366]  /* Vert WhatsApp */
```

---

## 🧪 Test

Après ajout des URLs :

1. Ouvrir http://localhost:3000 (après `npm run dev`)
2. Aller au **pied de page** → Voir les réseaux sociaux
3. Aller à la **page /contact** → Voir la section "Suivez nos actualités"
4. Cliquer sur les icônes → Vérifier l'ouverture correcte

---

## 🚀 Déploiement

Une fois les URLs ajoutées :

```bash
# Commit les changements
git add content/entreprise.js
git commit -m "feat: ajouter URLs réseaux sociaux (Facebook, Instagram, TikTok, LinkedIn)"

# Build production
npm run build

# Vérifier pas d'erreurs
npm run dev

# Push vers GitHub
git push
```

---

## 📊 Statut Actuel

| Élément | Status | Notes |
|---------|--------|-------|
| **WhatsApp Groupe** | ✅ Prêt | https://chat.whatsapp.com/IqPWFPuKjGIKmzKtGlMvgM?mode=gi_t |
| **Email** | ✅ Prêt | digigeek221@gmail.com (09h-22h) |
| **Téléphone** | ✅ Prêt | +221 77 591 94 73 |
| **Facebook** | ⏳ À ajouter | URL requise |
| **Instagram** | ⏳ À ajouter | URL requise |
| **TikTok** | ⏳ À ajouter | URL requise |
| **LinkedIn** | ⏳ À ajouter | URL requise |
| **Icônes** | ✅ Complètes | 4 icônes premium SVG |
| **Composant** | ✅ Créé | `ReseauxSociaux.jsx` |

---

## 💡 Conseils

### ✅ À faire
- ✅ Utiliser des URLs officielles
- ✅ Ajouter les pages existantes uniquement
- ✅ Vérifier les URLs avant de committer
- ✅ Tester le clic sur les réseaux

### ❌ À éviter
- ❌ Ne pas ajouter des URL n'existant pas
- ❌ Ne pas mélanger www et non-www
- ❌ Ne pas ajouter de paramètres inutiles
- ❌ Ne pas utiliser d'URL raccourcies

---

## 🔧 Exemple Complet

Voici un exemple complet d'ajout de réseaux sociaux :

```javascript
// content/entreprise.js

reseaux: [
  { 
    nom: "Facebook", 
    icone: "facebook", 
    url: "https://www.facebook.com/comptoir.numerique", 
    aDefinir: false 
  },
  { 
    nom: "Instagram", 
    icone: "instagram", 
    url: "https://www.instagram.com/comptoir.numerique", 
    aDefinir: false 
  },
  { 
    nom: "TikTok", 
    icone: "tiktok", 
    url: "https://www.tiktok.com/@comptoir.numerique", 
    aDefinir: false 
  },
  { 
    nom: "LinkedIn", 
    icone: "linkedin", 
    url: "https://www.linkedin.com/company/le-comptoir-numerique", 
    aDefinir: false 
  },
],
```

---

## 📞 Support

Si vous avez besoin d'aide :

1. Vérifiez que les URLs sont correctes
2. Assurez-vous que `aDefinir: false`
3. Rebuilder le projet : `npm run build`
4. Tester en développement : `npm run dev`

---

**Créé le** : 2026-09-23  
**Version** : 1.0  
**Status** : Infrastructure ✅ Prête, URLs ⏳ À ajouter
