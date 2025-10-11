import BackButton from "../../../components/BackButton";

export default function FreelancePage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête de l'expérience */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">Freelance</h1>
          <p className="text-white text-xl mb-2">Développeur NextJS - Mission</p>
          <p className="text-gray-300 text-lg mb-2">Paris, France</p>
          <p className="text-gray-300 text-lg mb-6">Avril 2023 – Juin 2023</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Next.js</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Firebase</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Accessibilité</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">CMS</span>
          </div>
          <BackButton />
        </div>

        {/* Description du projet */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Description du projet</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Mission freelance pour l&apos;association &quot;Agir pour les séniors sourds dépendants de France&quot; 
              consistant à créer un site web vitrine accessible aux personnes sourdes et mal voyantes. 
              Le site devait permettre à l&apos;équipe d&apos;ajouter et modifier des articles facilement.
            </p>
            <p>
              Cette mission m&apos;a permis de mettre en pratique mes compétences en développement web 
              tout en contribuant à une cause sociale importante, en créant une solution technologique 
              véritablement inclusive.
            </p>
          </div>
        </div>

        {/* Objectifs du projet */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Objectifs du projet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Site web vitrine</h3>
                <p className="text-gray-300 text-sm">
                  Création d&apos;un site web moderne et professionnel pour présenter l&apos;association
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Accessibilité universelle</h3>
                <p className="text-gray-300 text-sm">
                  Site accessible aux personnes sourdes et mal voyantes
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Gestion de contenu</h3>
                <p className="text-gray-300 text-sm">
                  Système permettant à l&apos;équipe d&apos;ajouter et modifier des articles
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Interface intuitive</h3>
                <p className="text-gray-300 text-sm">
                  Interface d&apos;administration simple et accessible pour l&apos;équipe
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Performance optimisée</h3>
                <p className="text-gray-300 text-sm">
                  Site rapide et optimisé pour tous les appareils
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Maintenance facilitée</h3>
                <p className="text-gray-300 text-sm">
                  Solution facile à maintenir et à faire évoluer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Technologies utilisées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Next.js (App Router)</li>
                <li>• React et TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Composants réutilisables</li>
                <li>• Optimisation des performances</li>
                <li>• SEO et métadonnées</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend & CMS</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Firebase/Firestore</li>
                <li>• CMS léger personnalisé</li>
                <li>• Authentification sécurisée</li>
                <li>• Gestion des rôles</li>
                <li>• API REST</li>
                <li>• Upload de médias</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Accessibilité</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• HTML sémantique</li>
                <li>• Attributs ARIA</li>
                <li>• Navigation clavier</li>
                <li>• Contrastes optimisés</li>
                <li>• Sous-titres/transcriptions</li>
                <li>• LSF/vidéos</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fonctionnalités développées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Fonctionnalités développées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Site vitrine</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Pages d&apos;accueil et de présentation</li>
                <li>• Section actualités et articles</li>
                <li>• Formulaire de contact</li>
                <li>• Informations sur l&apos;association</li>
                <li>• Design responsive et moderne</li>
                <li>• Optimisation SEO</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">CMS léger</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Interface d&apos;administration</li>
                <li>• Création et édition d&apos;articles</li>
                <li>• Gestion des médias</li>
                <li>• Système de rôles</li>
                <li>• Prévisualisation des articles</li>
                <li>• Sauvegarde automatique</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibilité renforcée */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Accessibilité renforcée</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">HTML sémantique et ARIA</h3>
              <p>
                Utilisation d&apos;une structure HTML sémantique avec des attributs ARIA appropriés 
                pour assurer une navigation fluide avec les lecteurs d&apos;écran.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Navigation clavier</h3>
              <p>
                Implémentation d&apos;une navigation complète au clavier avec des indicateurs 
                de focus visibles et une logique de tabulation cohérente.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Contrastes et lisibilité</h3>
              <p>
                Optimisation des contrastes de couleurs et de la typographie pour assurer 
                une lisibilité maximale pour tous les utilisateurs.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Contenu multimédia accessible</h3>
              <p>
                Intégration de sous-titres, transcriptions et vidéos en Langue des Signes 
                Française (LSF) pour rendre le contenu accessible aux personnes sourdes.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture technique */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Architecture technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Frontend SEO-first</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• SSR/ISR pour le référencement</li>
                <li>• Métadonnées structurées</li>
                <li>• Optimisation des images</li>
                <li>• Core Web Vitals optimisés</li>
                <li>• Sitemap automatique</li>
                <li>• Balises Open Graph</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend Firebase</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Firestore pour les données</li>
                <li>• Authentification Firebase</li>
                <li>• Storage pour les médias</li>
                <li>• Règles de sécurité</li>
                <li>• Fonctions Cloud</li>
                <li>• Monitoring et analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Défis techniques */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Défis techniques</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Accessibilité universelle</h3>
              <p>
                La conception d&apos;un site véritablement accessible pour les personnes sourdes 
                et mal voyantes a nécessité une approche inclusive dès la conception.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">CMS simple mais puissant</h3>
              <p>
                La création d&apos;un CMS léger mais fonctionnel pour une équipe non-technique 
                a demandé un équilibre entre simplicité et fonctionnalité.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Performance et accessibilité</h3>
              <p>
                L&apos;optimisation des performances tout en maintenant un niveau élevé 
                d&apos;accessibilité a été un défi technique majeur.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Contenu multimédia</h3>
              <p>
                L&apos;intégration de différents types de contenu (texte, vidéos, LSF) 
                de manière cohérente et accessible a nécessité une réflexion approfondie.
              </p>
            </div>
          </div>
        </div>

        {/* Impact et apprentissages */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Impact et apprentissages</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Cette mission freelance m&apos;a permis de contribuer à une cause sociale importante 
              en créant une solution technologique véritablement inclusive pour une association 
              dédiée aux personnes sourdes et mal voyantes.
            </p>
            <p>
              L&apos;approche d&apos;accessibilité universelle m&apos;a appris l&apos;importance de concevoir 
              des solutions inclusives dès le départ, et non comme une fonctionnalité ajoutée 
              après coup.
            </p>
            <p>
              La création d&apos;un CMS léger pour une équipe non-technique m&apos;a donné une vision 
              claire de l&apos;importance de l&apos;expérience utilisateur dans les outils d&apos;administration, 
              même pour des fonctionnalités simples.
            </p>
            <p>
              Cette expérience freelance a renforcé mes compétences en développement web 
              et m&apos;a sensibilisé aux enjeux d&apos;accessibilité numérique, compétences précieuses 
              pour ma carrière de développeur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
