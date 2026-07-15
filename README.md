# 🍕 Bella Tavola — Trattoria Italienne

Site vitrine d'une trattoria italienne fictive, réalisé en **HTML, CSS et JavaScript** (sans framework). Le site présente le restaurant, son menu filtrable et un formulaire de réservation avec validation.

## 🌐 Aperçu

**Bella Tavola** est une page unique (one-page) comprenant :

- Une section **Hero** avec image plein écran et appels à l'action
- Un **menu interactif** filtrable par catégorie (Entrées, Plats, Desserts)
- Une section **À propos** racontant l'histoire du restaurant
- Un **formulaire de réservation** avec validation JavaScript
- Un **footer** avec réseaux sociaux et coordonnées

## ✨ Fonctionnalités

- 📱 **Design responsive** : adapté aux ordinateurs, tablettes et mobiles (menu burger sur petit écran)
- 🧭 **Header sticky** qui change d'apparence au scroll
- 🍝 **Filtrage du menu** par catégorie avec animation d'apparition des cartes
- ✅ **Validation du formulaire de réservation** :
  - Champs obligatoires (prénom, nom, email, date, heure, nombre de personnes)
  - Vérification du format de l'email
  - Refus des dates dans le passé
  - Messages d'erreur affichés sous chaque champ
- ♿ **Accessibilité** : lien d'évitement (skip link), attributs ARIA, styles `focus-visible`, support de `prefers-reduced-motion`
- 🎨 **Charte graphique** définie avec des variables CSS (tons terracotta, crème, olive et or)
- ⚡ Chargement différé des images (`loading="lazy"`)

## 🛠️ Technologies utilisées

| Technologie | Usage |
|---|---|
| HTML5 | Structure sémantique de la page |
| CSS3 | Mise en page (Flexbox, Grid), animations, variables CSS, media queries |
| JavaScript (Vanilla) | Menu mobile, filtres, validation du formulaire, effets au scroll |
| Google Fonts | Playfair Display, Lato, Great Vibes |
| Font Awesome | Icônes (réseaux sociaux, contact) |

## 📁 Structure du projet

```
bella-tavola/
├── index.html      # Page principale
├── style.css       # Styles et responsive design
├── script.js       # Interactivité et validation
└── images/         # Photos des plats, logo, hero
```

## 🚀 Installation et utilisation

Aucune installation nécessaire :

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/votre-nom-utilisateur/bella-tavola.git
   ```
2. Ouvrir le fichier `index.html` dans votre navigateur.

C'est tout ! Le projet ne nécessite ni serveur ni dépendances.

## 📸 Sections du site

| Section | Description |
|---|---|
| Accueil | Hero avec slogan et boutons d'action |
| Menu | Cartes des plats avec filtres par catégorie et prix |
| À propos | Histoire de la trattoria depuis 1962 |
| Réservation | Formulaire validé côté client |
| Footer | Réseaux sociaux, horaires et contact |

## 👤 Auteur

Projet personnel de développement web front-end.

---

*Buon appetito! 🇮🇹*
