import BackButton from "../../../components/BackButton";
import ExternalLinks from "../../../components/ExternalLinks";
import { getProjectBySlug } from "../../../data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RetroGameCollec - Application pour Collectionneurs",
  description: "RetroGameCollec est une application web pour collectionneurs de jeux vidéo rétro, développée avec Next.js et MongoDB, utilisant l'API IGDB.",
  keywords: ["RetroGameCollec", "jeux vidéo", "collection", "rétro gaming", "Next.js", "MongoDB", "IGDB API", "collectionneurs"],
  openGraph: {
    title: "RetroGameCollec - Application pour Collectionneurs | Damien Drozd",
    description: "Découvrez RetroGameCollec, une application web dédiée aux collectionneurs de jeux vidéo rétro.",
    url: "https://damien-drozd.fr/projects/retrogamecollec",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "RetroGameCollec - Application pour Collectionneurs",
    description: "Découvrez RetroGameCollec, une application web dédiée aux collectionneurs de jeux vidéo rétro.",
  }
};

export default function RetroGameCollecPage() {
  const project = getProjectBySlug('retrogamecollec');
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête du projet */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">
            RetroGameCollec
          </h1>
          <p className="text-white text-xl mb-2">
            Application pour collectionneurs de jeux vidéo rétro
          </p>
          <p className="text-gray-300 text-lg mb-6">Juin 2025</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Next.js
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              MongoDB
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              IGDB API
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              TypeScript
            </span>
          </div>
          <BackButton />
        </div>

        {/* Description du projet */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            À propos du projet
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              RetroGameCollec est une application personnelle conçue pour aider
              les collectionneurs de jeux vidéo rétro à organiser, rechercher et
              partager leur ludothèque. Née d&apos;un besoin concret (éviter les
              achats en double), elle centralise la gestion des collections, la
              découverte de titres emblématiques et l&apos;interaction
              communautaire.
            </p>
            <p>
              L&apos;application propose un cœur de fonctionnalités essentielles
              gratuites et une vision d&apos;abonnement léger pour des options
              avancées. J&apos;ai porté le produit de l&apos;idée à une version
              opérationnelle, en travaillant l&apos;UX pour la consultation
              rapide des jeux, l&apos;import de jaquettes, la classification par
              console/année/rareté et le partage public de collections.
            </p>
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Fonctionnalités principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Gestion de collections
                </h3>
                <p className="text-gray-300 text-sm">
                  Organisation complète de sa ludothèque avec recherche et
                  filtres avancés
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Découverte de titres
                </h3>
                <p className="text-gray-300 text-sm">
                  Exploration de jeux emblématiques par console, année et rareté
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Import de jaquettes
                </h3>
                <p className="text-gray-300 text-sm">
                  Système d&apos;import automatique des visuels depuis
                  l&apos;API IGDB
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Partage communautaire
                </h3>
                <p className="text-gray-300 text-sm">
                  Partage public de collections et interaction entre
                  collectionneurs
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Classification avancée
                </h3>
                <p className="text-gray-300 text-sm">
                  Système de tags par console, année, rareté et état
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">SEO optimisé</h3>
                <p className="text-gray-300 text-sm">
                  Référencement naturel pour accroître la découverte organique
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies utilisées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Technologies utilisées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Frontend
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Next.js (App Router)</li>
                <li>• Composants réutilisables</li>
                <li>• State management léger</li>
                <li>• Accessibilité</li>
                <li>• UI responsive</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Next.js (routes API)</li>
                <li>• Endpoints REST sécurisés</li>
                <li>• Validation des schémas</li>
                <li>• Rate limiting</li>
                <li>• Authentification</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Données & Intégrations
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• MongoDB</li>
                <li>• IGDB API</li>
                <li>• Auth client-credentials</li>
                <li>• Normalisation des champs</li>
                <li>• Mise en cache</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture technique */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Architecture technique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Base de données
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• MongoDB pour utilisateurs, profils, collections</li>
                <li>• Indexation et agrégations pour requêtes rapides</li>
                <li>• Modélisation optimisée pour les collections</li>
                <li>• Gestion des préférences utilisateur</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Performance
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Caching applicatif et CDN</li>
                <li>• Images optimisées</li>
                <li>• Pagination et infini-scroll</li>
                <li>• Lazy-loading</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Défis techniques */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Défis techniques
          </h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">
                Intégration IGDB API
              </h3>
              <p>
                L&apos;intégration de l&apos;API IGDB a nécessité une
                authentification client-credentials et la normalisation des
                données pour assurer la cohérence avec notre modèle de données.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Gestion des collections
              </h3>
              <p>
                La conception d&apos;un système flexible pour gérer différents
                types de collections tout en maintenant les performances a été
                un défi majeur.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                SEO et performance
              </h3>
              <p>
                L&apos;optimisation pour le référencement naturel tout en
                maintenant une expérience utilisateur fluide a nécessité un
                équilibre entre SSG/ISR et dynamisme.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Apprentissages
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Ce projet m&apos;a permis de développer une application complète
              de A à Z, de la conception initiale au déploiement.
              L&apos;utilisation de Next.js 15 avec l&apos;App Router a été
              particulièrement enrichissante pour comprendre les nouvelles
              approches de développement web.
            </p>
            <p>
              L&apos;intégration d&apos;APIs tierces et la gestion de données
              complexes m&apos;ont appris l&apos;importance de la normalisation
              et de la validation des données. La conception UX pour un public
              spécialisé (collectionneurs) a également été un défi intéressant.
            </p>
            <p>
              Ce projet démontre ma capacité à créer des solutions complètes et
              à gérer des projets personnels de bout en bout, compétences
              précieuses pour ma carrière de développeur.
            </p>
          </div>
        </div>
        {/* Liens externes */}
        <ExternalLinks
          liveUrl={project?.liveUrl}
          githubUrl={project?.githubUrl}
        />
      </div>
    </div>
  );
}
