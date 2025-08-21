import Link from "next/link";

export default function PEELPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête du projet */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">PEEL</h1>
          <p className="text-white text-xl mb-2">Application de rencontre mobile centrée sur la compatibilité</p>
          <p className="text-gray-300 text-lg mb-6">Mai 2022 - Août 2024</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">React Native</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">API REST</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Push Notifications</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Matching</span>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center text-[#FFC300] hover:text-[#FFD700] transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

        {/* Description du projet */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">À propos du projet</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              PEEL est une application de rencontre mobile inspirée de Tinder (swipe, matching), 
                          mais centrée sur la compatibilité réelle plutôt que sur l&apos;apparence. L&apos;app met en avant
            activités communes, centres d&apos;intérêt et traits de personnalité (GIFs, musiques, films, etc.) 
              pour encourager des échanges authentiques et des relations durables.
            </p>
            <p>
              J&apos;ai contribué à concevoir une expérience fluide (onboarding, création de profil riche, swipe, 
              match, messagerie) et à poser des bases produit orientées sécurité, confiance et respect de la vie privée.
            </p>
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Swipe & Matching</h3>
                <p className="text-gray-300 text-sm">
                  Interface de swipe intuitive avec logique de matching basée sur la compatibilité
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Profils enrichis</h3>
                <p className="text-gray-300 text-sm">
                  Création de profils détaillés avec centres d&apos;intérêt et activités communes
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Messagerie intégrée</h3>
                <p className="text-gray-300 text-sm">
                  Système de messagerie en temps réel pour les conversations après matching
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Push Notifications</h3>
                <p className="text-gray-300 text-sm">
                  Notifications pour likes, matches et nouveaux messages (APNs/FCM)
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Système de signalements</h3>
                <p className="text-gray-300 text-sm">
                  Outils de modération et de signalement pour la sécurité des utilisateurs
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Distribution mobile</h3>
                <p className="text-gray-300 text-sm">
                  Application distribuée sur App Store et Google Play
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
              <h3 className="text-white font-semibold text-lg mb-3">Mobile</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• React Native (iOS/Android)</li>
                <li>• Navigation fluide</li>
                <li>• Formulaires complexes</li>
                <li>• Gestion des médias</li>
                <li>• Optimisation des performances</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• API REST complète</li>
                <li>• Inscription et profils</li>
                <li>• Intérêts et activités</li>
                <li>• Swipe et matching</li>
                <li>• Messagerie et signalements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Infrastructure</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Authentification sécurisée</li>
                <li>• Gestion des sessions/tokens</li>
                <li>• Push notifications</li>
                <li>• CI/CD et distribution</li>
                <li>• Monitoring et observabilité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture technique */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Architecture technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Logique de matching</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Algorithme de recommandation basé sur la compatibilité</li>
                <li>• Analyse des centres d&apos;intérêt et activités</li>
                <li>• Système de préférences utilisateur</li>
                <li>• Optimisation des suggestions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Sécurité et confiance</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Comptes sécurisés avec validation</li>
                <li>• Gestion des sessions et tokens</li>
                <li>• Contrôle d&apos;accès par ressource</li>
                <li>• Système de signalements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Défis techniques */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Défis techniques</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Algorithme de matching</h3>
              <p>
                              La conception d&apos;un algorithme de recommandation efficace basé sur la compatibilité
              plutôt que sur l&apos;apparence a nécessité une approche différente des applications de rencontre traditionnelles.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Performance mobile</h3>
              <p>
                              L&apos;optimisation des performances sur mobile, notamment pour la gestion des médias
              et les interactions de swipe, a été cruciale pour l&apos;expérience utilisateur.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Sécurité et modération</h3>
              <p>
                La mise en place d&apos;un système de modération efficace et de signalements 
                pour assurer la sécurité des utilisateurs a été un défi majeur.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Distribution mobile</h3>
              <p>
                La gestion du processus de distribution sur App Store et Google Play, 
                incluant les tests et la validation, a nécessité une expertise spécifique.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Apprentissages</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Ce projet m&apos;a permis de développer une expertise complète en développement mobile 
              avec React Native, de la conception initiale à la distribution sur les stores.
            </p>
            <p>
                            La conception d&apos;un algorithme de matching et la gestion de la sécurité dans une
              application de rencontre m&apos;ont appris l&apos;importance de l&apos;éthique et de la responsabilité
              dans le développement d&apos;applications sociales.
            </p>
            <p>
              L&apos;expérience de distribution mobile m&apos;a donné une compréhension approfondie des 
              processus de validation et des contraintes des plateformes mobiles.
            </p>
            <p>
              Ce projet démontre ma capacité à travailler sur des applications complexes avec 
              des enjeux de sécurité et de performance critiques, compétences essentielles 
              pour le développement d&apos;applications mobiles modernes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
