# Cyber Challenge V4.0 - Robot World Cup

Un site web professionnel pour le Cyber Challenge 4.0, l'événement de robotique organisé par CybeRobot Club à l'ISET Nabeul.

## 🎯 À propos

Cyber Challenge 4.0 est une compétition internationale de robotique avec le thème **"À travers le Globe : COUPE DU MONDE DES ROBOTS"**. Cet événement unique propose trois défis différents, chacun se déroulant dans un contexte culturel différent :

- **Junior Challenge** - Compétition internationale
- **All Terrain Challenge** - Brésil 🇧🇷
- **Line Follower Challenge** - Égypte 🇪🇬

**Date**: 23 novembre 2025  
**Lieu**: ISET Nabeul, Merazka 8000, Nabeul, Tunisia

## 🚀 Technologies Utilisées

- **React 18** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **React Router 6** - Navigation et routing
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides et professionnelles
- **Three.js** - Animations 3D et effets visuels
- **Headless UI** - Composants UI accessibles
- **Font Awesome** - Icônes professionnelles

## 📦 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. Ouvrez PowerShell dans le dossier du projet :

```powershell
cd c:\xampp\htdocs\cyberobot
```

2. Installez les dépendances :

```powershell
npm install
```

3. Lancez le serveur de développement :

```powershell
npm run dev
```

4. Ouvrez votre navigateur à l'adresse : http://localhost:3000

## 🏗️ Structure du Projet

```
cyberobot/
├── public/
│   └── images/              # Images du site
│       ├── logocyberobot.png
│       ├── logoisetnabeul.png
│       ├── cyberv4.jpg
│       ├── payment.jpg
│       ├── Junior Specification.jpg
│       ├── All Terrain.jpg
│       └── Line Follower.jpg
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── VideoHero.jsx
│   │   ├── CountdownTimer.jsx
│   │   ├── ChallengesPreview.jsx
│   │   ├── RegistrationSection.jsx
│   │   └── ParticleBackground.jsx
│   ├── pages/              # Pages principales
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Venue.jsx
│   │   ├── Schedule.jsx
│   │   ├── Challenges.jsx
│   │   ├── Partners.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Caractéristiques

### Design & UX
- **Thème Cyber/Futuriste** avec palette de couleurs violet/noir
- **Animations fluides** avec Framer Motion
- **Effets de particules** en arrière-plan
- **Responsive Design** - Optimisé pour mobile, tablette et desktop
- **Video Hero** - Vidéo Vimeo pleine largeur en page d'accueil
- **Gradient Text** et effets lumineux (glow)

### Fonctionnalités
- **Navigation intuitive** avec menu déroulant pour "Program"
- **Countdown Timer** jusqu'à la date de l'événement
- **3 Challenges détaillés** avec thématiques pays
- **Schedule interactif** avec timeline visuelle
- **Section Registration** avec liens vers les formulaires
- **Informations de paiement** avec visuel
- **Carte interactive** pour la localisation
- **Formulaire de contact** fonctionnel
- **Section Partenaires** avec opportunités de sponsoring
- **Footer complet** avec liens et informations

### Performance
- **Lazy Loading** des images
- **Code Splitting** automatique
- **Optimisation SEO** avec meta tags
- **Open Graph** pour le partage social
- **PWA Ready** pour installation sur mobile

## 📱 Pages du Site

1. **Home** (`/`) - Page d'accueil avec vidéo hero, présentation, challenges, registration
2. **About Us** (`/about`) - Histoire et mission du club
3. **Program**
   - **Venue** (`/program/venue`) - Lieu et accès
   - **Schedule** (`/program/schedule`) - Programme de la journée
   - **Challenges** (`/program/challenges`) - Détails des 3 challenges
4. **Partners** (`/partners`) - Partenaires et opportunités de sponsoring
5. **Contact** (`/contact`) - Formulaire de contact et FAQ

## 🎯 Challenges

### Junior Challenge 🤖
- **Pays**: International
- **Specs**: [Google Drive](https://drive.google.com/drive/folders/11ut9JsvJq9dlYnFXMKdu881ZFXF3O1fh)
- **Inscription**: [Formulaire](https://forms.gle/ijjLSLZdTVc9GJP56)

### All Terrain Challenge ⛰️
- **Pays**: Brésil 🇧🇷
- **Specs**: [Google Drive](https://drive.google.com/drive/folders/14AoIdNGp3CC-Y68t4EbB-hNFuAKAqA54)
- **Inscription**: [Formulaire](https://forms.gle/pi1WvZ9k29cmgtzP6)

### Line Follower Challenge 🛤️
- **Pays**: Égypte 🇪🇬
- **Specs**: [Google Drive](https://drive.google.com/drive/folders/1EehDzMKwuuUBA9qrPKm_XD_Ht9M0dX2J)
- **Inscription**: [Formulaire](https://forms.gle/Rrkh9PrDPVrLva5C8)

## 📅 Programme de l'Événement

| Heure | Activité |
|-------|----------|
| 7:00 | Accueil |
| 8:00 - 9:30 | Homologation Junior et Suiveur |
| 9:30 - 10:30 | Lancement Junior et Suiveur |
| 10:30 - 11:00 | Pause Café |
| 11:00 - 12:30 | Homologation Tout Terrain |
| 12:30 | Remise des Prix Junior & Suiveur |
| 13:00 - 14:00 | Déjeuner |
| 14:00 | Lancement Tout Terrain |
| 17:00 | Remise des Prix Tout Terrain |

## 🛠️ Commandes Disponibles

```powershell
# Développement
npm run dev          # Démarre le serveur de développement

# Production
npm run build        # Crée le build de production
npm run preview      # Prévisualise le build de production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
```

## 🌐 Déploiement

### Build de Production

```powershell
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Déploiement sur Apache (XAMPP)

1. Construisez le projet :
```powershell
npm run build
```

2. Copiez le contenu du dossier `dist/` vers votre dossier web :
```powershell
Copy-Item -Path dist\* -Destination c:\xampp\htdocs\cyberobot-prod -Recurse -Force
```

3. Créez un fichier `.htaccess` pour React Router :
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🎨 Personnalisation

### Couleurs du Thème

Les couleurs sont définies dans `tailwind.config.js` :

```javascript
colors: {
  'cyber-primary': '#9333ea',    // Violet principal
  'cyber-secondary': '#7c3aed',  // Violet secondaire
  'cyber-accent': '#a855f7',     // Violet accent
  'cyber-dark': '#0a0a0a',       // Noir foncé
  'cyber-darker': '#050505',     // Noir très foncé
  'cyber-light': '#1a1a1a',      // Gris foncé
}
```

### Polices

- **Orbitron** - Titres et éléments futuristes
- **Rajdhani** - Corps de texte
- **Exo 2** - Texte alternatif

## 📞 Contact

- **Email**: contact@cyberobotisetnabeul.tn
- **Facebook**: /cyberobotisetnabeul
- **Instagram**: @cyberobotisetnabeul
- **LinkedIn**: /company/cyberobotisetnabeul

## 👥 Crédits

- **Organisation**: CybeRobot Club - ISET Nabeul
- **Événement**: Cyber Challenge V4.0
- **Thème**: "À travers le Globe : COUPE DU MONDE DES ROBOTS"
- **Date**: 23 novembre 2025

## 📄 License

© 2025 CybeRobot Club - ISET Nabeul. All rights reserved.

---

**Développé avec passion pour la robotique et l'innovation** 🤖💜
