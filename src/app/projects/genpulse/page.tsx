import Link from "next/link";

export default function GenPulsePage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête du projet */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">GenPulse</h1>
          <p className="text-white text-xl mb-2">Plateforme web innovante</p>
          <p className="text-gray-300 text-lg mb-6">2023 - Actuellement en développement</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Next.js</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Fastify</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">TypeScript</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Architecture</span>
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
              GenPulse est une plateforme web innovante que j&apos;ai cofondée et développée de A à Z. 
              En tant que cofondateur, je pilote l&apos;ensemble du développement web de notre plateforme, 
              de la conception initiale à la maintenance continue.
            </p>
            <p>
              Ce projet représente l&apos;aboutissement de plusieurs années d&apos;expérience en développement web 
              et d&apos;une vision entrepreneuriale. L&apos;objectif est de créer une solution qui répond à un 
              besoin réel du marché tout en utilisant les technologies les plus modernes.
            </p>
          </div>
        </div>

        {/* Rôle et responsabilités */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Mon rôle</h2>
          <div className="text-gray-300 space-y-4">
            <h3 className="text-white font-semibold text-lg">Cofondateur & Développeur Web</h3>
            <p>
              En tant que cofondateur, je suis responsable de l&apos;ensemble de la stratégie technique 
              et du développement de la plateforme. Mon rôle va bien au-delà du simple développement :
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Conception des choix techniques et de l&apos;architecture logicielle</li>
              <li>Développement et maintenance du site web avec Next.js</li>
              <li>Conception et mise en place de back-ends performants avec Fastify</li>
              <li>Collaboration avec l&apos;équipe produit et design</li>
              <li>Transformation des besoins utilisateurs en solutions techniques</li>
              <li>Gestion de l&apos;infrastructure et du déploiement</li>
            </ul>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Technologies utilisées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Next.js 15 (App Router)</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• React Hooks</li>
                <li>• Optimisation des performances</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Fastify (Node.js)</li>
                <li>• API REST</li>
                <li>• Validation des données</li>
                <li>• Authentification sécurisée</li>
                <li>• Base de données optimisée</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Plateforme complète</h3>
                <p className="text-gray-300 text-sm">
                  Solution end-to-end couvrant tous les aspects de l&apos;expérience utilisateur
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Infrastructure web</h3>
                <p className="text-gray-300 text-sm">
                  Architecture scalable et maintenable pour supporter la croissance
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Expérience utilisateur optimale</h3>
                <p className="text-gray-300 text-sm">
                  Interface intuitive et responsive pour tous les appareils
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Performance</h3>
                <p className="text-gray-300 text-sm">
                  Optimisation des temps de chargement et de l&apos;expérience utilisateur
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Défis et apprentissages */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Défis et apprentissages</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Ce projet m&apos;a permis de développer des compétences entrepreneuriales en plus des compétences techniques. 
              La gestion d&apos;un projet de cette envergure nécessite une vision à long terme et une capacité d&apos;adaptation.
            </p>
            <p>
              Les principaux défis ont été de concilier les contraintes techniques avec les besoins business, 
              tout en maintenant une architecture évolutive et performante.
            </p>
          </div>
        </div>

        {/* Statut actuel */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Statut actuel</h2>
          <div className="text-gray-300">
            <p className="mb-4">
              Le projet est actuellement en phase de développement actif. Nous travaillons sur l&apos;amélioration 
              continue de la plateforme et l&apos;ajout de nouvelles fonctionnalités basées sur les retours utilisateurs.
            </p>
            <p>
              Cette expérience de cofondateur me permet de comprendre les enjeux business et techniques 
              d&apos;un projet entrepreneurial, compétences précieuses pour ma carrière de développeur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
