# Portfolio - Damien Drozd

Portfolio personnel de Damien Drozd, développeur web 3.0, migré de ReactJS vers NextJS avec Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire (remplace Bootstrap)
- **Firebase** - Backend et base de données
- **Nodemailer** - Envoi d'emails (optionnel)

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/                    # App Router Next.js
│   │   ├── page.tsx           # Page d'accueil (About)
│   │   ├── cv/page.tsx        # Page CV détaillée
│   │   ├── blog/page.tsx      # Page blog
│   │   ├── contact/page.tsx   # Page contact
│   │   ├── context/page.tsx   # Page contexte entreprise
│   │   ├── article/page.tsx   # Page articles
│   │   ├── layout.tsx         # Layout principal
│   │   ├── globals.css        # Styles globaux Tailwind
│   │   └── api/               # API Routes
│   │       └── contact/       # API d'envoi d'emails
│   │           └── route.ts   # Endpoint POST /api/contact
│   ├── components/
│   │   └── NavBar.tsx         # Composant navigation
│   └── articles/              # Composants d'articles
│       ├── 1.introduction.component.tsx
│       ├── 2.article1.component.tsx
│       ├── 3.article2.component.tsx
│       ├── 4.article3.component.tsx
│       ├── 5.article4.component.tsx
│       └── 6.conclusion.component.tsx
├── public/
│   └── media/                 # Images et médias
├── EMAIL_SETUP.md             # Guide de configuration email
├── email-config.example.txt   # Exemple de configuration
└── package.json
```

## 🛠️ Installation et démarrage

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Configurer l'envoi d'emails (optionnel) :**
   ```bash
   # Voir EMAIL_SETUP.md pour les instructions détaillées
   cp email-config.example.txt .env.local
   # Éditez .env.local avec vos informations
   ```

3. **Démarrer le serveur de développement :**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur :**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Lance ESLint

## 🎨 Design System

### Couleurs
- **Fond principal** : `#000814` (bleu très foncé)
- **Accent** : `#FFC300` (jaune doré)
- **Bleu secondaire** : `#003566`
- **Texte** : Blanc (`#FFFFFF`)

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Titres** : Tailwind `text-4xl`, `text-3xl`, `text-2xl`
- **Corps de texte** : Tailwind `text-lg`, `text-xl`

### Composants
- **Boutons** : Bordures avec hover effects
- **Cartes** : Bordures arrondies avec ombres
- **Navigation** : Responsive avec menu hamburger mobile
- **Formulaires** : Styles cohérents avec focus states

## 📧 Fonctionnalité d'envoi d'emails

Le formulaire de contact inclut une fonctionnalité complète d'envoi d'emails :

### ✅ Fonctionnalités
- **Validation côté client et serveur**
- **Interface utilisateur réactive** avec états de chargement
- **Messages de confirmation** et d'erreur
- **Protection anti-spam** avec validation d'email
- **Template HTML personnalisé** pour les emails

### 🔧 Configuration
Plusieurs options disponibles (voir `EMAIL_SETUP.md`) :
- **Resend** (recommandé) - Service moderne et gratuit
- **Nodemailer + Gmail** - Configuration traditionnelle
- **EmailJS** - Envoi côté frontend
- **SendGrid/Mailgun** - Services tiers populaires

### 🚀 API Endpoint
```
POST /api/contact
Content-Type: application/json

{
  "name": "Nom du contact",
  "email": "email@example.com",
  "message": "Message du contact"
}
```

## 🔄 Migration depuis ReactJS

Ce projet a été migré depuis une application ReactJS classique vers Next.js avec les améliorations suivantes :

### ✅ Améliorations apportées

1. **Performance optimisée** - Next.js optimise automatiquement les images et le code
2. **SEO amélioré** - Rendu côté serveur et métadonnées optimisées
3. **TypeScript** - Typage statique pour une meilleure maintenabilité
4. **App Router** - Nouvelle architecture de routage Next.js
5. **Tailwind CSS** - Remplacement complet de Bootstrap par Tailwind
6. **Design moderne** - Interface responsive et accessible
7. **Optimisation des images** - Utilisation du composant `Image` de Next.js
8. **Code splitting automatique** - Chargement optimisé des pages
9. **API Routes** - Backend intégré pour l'envoi d'emails
10. **CV interactif** - Page dédiée avec toutes les informations professionnelles

### 🔧 Modifications principales

- **Migration CSS** : Remplacement complet de Bootstrap par Tailwind CSS
- **Composants modernisés** : Conversion des composants de classe en hooks React
- **Navigation responsive** : Menu hamburger pour mobile avec Tailwind
- **Système de routage** : Remplacement de `react-router-dom` par le système Next.js
- **Images optimisées** : Migration des imports d'images vers le dossier `public/`
- **TypeScript** : Conversion des fichiers `.js` en `.tsx`
- **Styles unifiés** : Utilisation exclusive de Tailwind CSS pour tous les styles
- **Backend intégré** : API Routes pour l'envoi d'emails
- **CV mis à jour** : Informations professionnelles complètes et détaillées

## 📱 Pages disponibles

- **/** - Page d'accueil avec présentation et compétences
- **/cv** - CV détaillé avec expérience professionnelle complète
- **/blog** - Liste des articles de blog
- **/context** - Contexte de l'entreprise
- **/article?id=X** - Articles individuels (1-6)
- **/contact** - Formulaire de contact avec envoi d'emails

## 🎨 Styles Tailwind CSS

Le projet utilise exclusivement Tailwind CSS pour tous les styles :

### Classes principales utilisées
- **Layout** : `flex`, `grid`, `container`, `max-w-*`
- **Espacement** : `p-*`, `m-*`, `space-*`
- **Couleurs** : `bg-[#000814]`, `text-[#FFC300]`, `border-[#FFC300]`
- **Typographie** : `text-*`, `font-*`, `leading-*`
- **Effets** : `hover:`, `focus:`, `transition-*`, `shadow-*`
- **Responsive** : `sm:`, `md:`, `lg:`, `xl:`

### Avantages de Tailwind CSS
- **Performance** : CSS purgé automatiquement
- **Cohérence** : Design system unifié
- **Maintenabilité** : Pas de CSS personnalisé à maintenir
- **Responsive** : Classes responsive intégrées
- **Accessibilité** : Focus states et contrastes optimisés

## 📦 Déploiement

Le projet est prêt pour le déploiement sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- **Tout autre service supportant Node.js**

### Variables d'environnement pour la production
```env
# Pour l'envoi d'emails (selon le service choisi)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
# ou
EMAIL_USER=votre_email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application
```

## 🔗 Liens utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/)
- [Resend (Email Service)](https://resend.com)
- [Nodemailer](https://nodemailer.com/)

---

**Développé par Damien Drozd** - Développeur Web 3.0


## 🚀 Optimisations SEO réalisées

### ✅ Meta Tags complets
- **Métadonnées globales** optimisées dans `layout.tsx`
- **Meta tags spécifiques** pour chaque page de détail
- **Open Graph** et **Twitter Cards** configurés
- **Mots-clés ciblés** pour chaque page
- **Descriptions optimisées** pour les moteurs de recherche

### ✅ Fichiers SEO générés automatiquement
- **Sitemap XML** dynamique (`/sitemap.xml`)
- **Robots.txt** optimisé (`/robots.txt`)
- **Manifeste PWA** (`/manifest.json`)

### ✅ Structure SEO
- **Balises title** hiérarchisées avec template
- **Métadonnées structurées** JSON-LD pour schema.org
- **Navigation optimisée** avec liens internes
- **URLs sémantiques** pour chaque page

### 📱 Pages optimisées
- **Page d'accueil** : Métadonnées générales du portfolio
- **Projets** : GenPulse, PEEL, RetroGameCollec avec meta tags spécifiques
- **Expériences** : Reconomia, LaWEbox, Freelance avec descriptions détaillées
- **Pages de liste** : Projets et Expériences avec layouts dédiés
- **Contact & CV** : Métadonnées ciblées pour conversion

### 🔍 Mots-clés ciblés
- `Damien Drozd développeur full stack`
- `React Next.js React Native Python`
- `Portfolio développeur Lille`
- `Alternance développement web`
- `Projets web applications mobiles`
