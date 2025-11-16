# 🚀 Guide d'Installation Rapide - Cyber Challenge V4.0

## Étape 1: Vérifier Node.js

Ouvrez PowerShell et vérifiez que Node.js est installé :

```powershell
node --version
```

Si Node.js n'est pas installé, téléchargez-le depuis https://nodejs.org (version LTS recommandée)

## Étape 2: Naviguer vers le dossier du projet

```powershell
cd c:\xampp\htdocs\cyberobot
```

## Étape 3: Installer les dépendances

```powershell
npm install
```

Cette commande installera tous les packages nécessaires (React, Tailwind CSS, Framer Motion, etc.)

## Étape 4: Lancer le serveur de développement

```powershell
npm run dev
```

## Étape 5: Ouvrir dans le navigateur

Le site sera accessible à l'adresse : **http://localhost:3000**

Le navigateur devrait s'ouvrir automatiquement. Si ce n'est pas le cas, ouvrez manuellement cette URL.

---

## 🎨 Aperçu des Fonctionnalités

Votre site comprend :

✅ **Vidéo Hero pleine largeur** (Vimeo)  
✅ **Countdown timer** jusqu'à l'événement  
✅ **3 Challenges** avec thématiques pays (Brésil, Égypte, International)  
✅ **Navigation responsive** avec menu déroulant  
✅ **Animations fluides** (Framer Motion)  
✅ **Effets de particules** en arrière-plan  
✅ **Timeline interactive** pour le schedule  
✅ **Section inscription** avec liens vers les formulaires  
✅ **Carte interactive** pour la localisation  
✅ **Formulaire de contact**  
✅ **Section partenaires**  
✅ **Design cyber/futuriste** professionnel  

---

## 📝 Commandes Utiles

### Développement
```powershell
npm run dev          # Démarrer le serveur de développement
```

### Production
```powershell
npm run build        # Créer le build de production
npm run preview      # Prévisualiser le build
```

---

## 🔧 Personnalisation Rapide

### Modifier les couleurs

Éditez `tailwind.config.js` - section `colors`

### Modifier le contenu

Les pages sont dans `src/pages/` :
- `Home.jsx` - Page d'accueil
- `AboutUs.jsx` - À propos
- `Schedule.jsx` - Programme
- `Challenges.jsx` - Défis
- `Venue.jsx` - Lieu
- `Partners.jsx` - Partenaires
- `Contact.jsx` - Contact

### Modifier les images

Placez vos images dans `public/images/`

---

## 🆘 Problèmes Courants

### Port déjà utilisé
Si le port 3000 est occupé, Vite proposera automatiquement un autre port.

### Erreurs d'installation
Supprimez `node_modules` et `package-lock.json`, puis réinstallez :
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Erreurs de build
Assurez-vous que toutes les images sont dans le dossier `public/images/`

---

## 📞 Support

Pour toute question :
- Email: contact@cyberobotisetnabeul.tn
- Consultez le README.md pour plus de détails

---

**Bon développement ! 🤖💜**
