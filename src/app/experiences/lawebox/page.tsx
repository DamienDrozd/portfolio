import BackButton from "../../../components/BackButton";

export default function LaWEboxPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête de l'expérience */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">LaWEbox</h1>
          <p className="text-white text-xl mb-2">Développeur Full Stack / Data Scientist - Alternance</p>
          <p className="text-gray-300 text-lg mb-2">Paris, France</p>
          <p className="text-gray-300 text-lg mb-6">Septembre 2022 – Juillet 2023</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Django</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Flask</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Data Science</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Python</span>
          </div>
          <BackButton />
        </div>

        {/* Description du poste */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Description du poste</h2>
          <div className="text-gray-300 space-y-4">
            <p>
                          Chez LaWEbox, une entreprise edtech innovante, j&apos;ai eu l&apos;opportunité de travailler sur
            le développement d&apos;APIs REST et d&apos;interfaces back-office pour les équipes internes, 
              tout en menant des projets data de bout en bout.
            </p>
            <p>
              Cette expérience m&apos;a permis de développer une expertise complète en développement web 
              avec Python, combinant backend, frontend et data science dans un environnement 
              professionnel dynamique.
            </p>
          </div>
        </div>

        {/* Responsabilités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Responsabilités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Développement backend</h3>
                <p className="text-gray-300 text-sm">
                  Conception et développement d&apos;APIs REST avec Django et Flask
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Interfaces back-office</h3>
                <p className="text-gray-300 text-sm">
                  Création d&apos;interfaces d&apos;administration personnalisées pour les équipes internes
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Projets data</h3>
                <p className="text-gray-300 text-sm">
                  Analyse de données et développement de solutions data science
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Optimisation</h3>
                <p className="text-gray-300 text-sm">
                  Amélioration des performances et de la sécurité des applications
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Documentation</h3>
                <p className="text-gray-300 text-sm">
                  Rédaction de documentation technique et guides utilisateur
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Support utilisateur</h3>
                <p className="text-gray-300 text-sm">
                  Formation et support des équipes utilisant les outils développés
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences techniques développées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Compétences techniques développées</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend Web</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Python avancé</li>
                <li>• Django (Django REST Framework)</li>
                <li>• Flask (Blueprints)</li>
                <li>• Conception d&apos;API RESTful</li>
                <li>• Validation et sérialisation</li>
                <li>• Pagination et rate-limiting</li>
                <li>• Authentification (JWT/session)</li>
                <li>• Upload de fichiers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backoffice</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Django Admin personnalisé</li>
                <li>• Vues CRUD sécurisées</li>
                <li>• Gestion des rôles/permissions</li>
                <li>• Filtres et recherches avancés</li>
                <li>• Export CSV/Excel</li>
                <li>• Interface utilisateur intuitive</li>
                <li>• Workflows automatisés</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Data Science</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Python avancé</li>
                <li>• NumPy et Pandas</li>
                <li>• Analyse exploratoire</li>
                <li>• Visualisation de données</li>
                <li>• Traitement de données</li>
                <li>• Automatisation de processus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bases de données */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Bases de données</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">MySQL</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Modélisation de données</li>
                <li>• Indexation optimisée</li>
                <li>• Migrations (Django Migrations/Alembic)</li>
                <li>• Requêtes optimisées</li>
                <li>• ORM + SQL brut</li>
                <li>• Gestion des performances</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Optimisation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Analyse des requêtes lentes</li>
                <li>• Optimisation des index</li>
                <li>• Partitionnement des données</li>
                <li>• Monitoring des performances</li>
                <li>• Sauvegarde et récupération</li>
                <li>• Sécurité des données</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projets data de bout en bout */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Projets data de bout en bout</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Collecte de données</h3>
              <p>
                Mise en place de pipelines de collecte de données depuis diverses sources 
                (APIs, bases de données, fichiers) pour alimenter les analyses.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Traitement et nettoyage</h3>
              <p>
                Développement de scripts Python pour le nettoyage, la transformation et 
                la préparation des données pour l&apos;analyse.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Analyse et modélisation</h3>
              <p>
                Création de modèles d&apos;analyse et de visualisations pour extraire des insights 
                pertinents des données collectées.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Automatisation</h3>
              <p>
                Mise en place de processus automatisés pour la génération de rapports 
                et le monitoring des métriques clés.
              </p>
            </div>
          </div>
        </div>

        {/* Défis techniques */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Défis techniques</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Performance des APIs</h3>
              <p>
                L&apos;optimisation des performances des APIs REST pour gérer de gros volumes 
                de données tout en maintenant des temps de réponse rapides.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Interface back-office complexe</h3>
              <p>
                La conception d&apos;interfaces d&apos;administration intuitives et performantes 
                pour des équipes avec des besoins métier spécifiques.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Intégration data science</h3>
              <p>
                L&apos;intégration harmonieuse des projets data science dans l&apos;écosystème 
                web existant, en respectant les contraintes de performance et de sécurité.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Sécurité des données</h3>
              <p>
                La mise en place de mesures de sécurité robustes pour protéger les données 
                sensibles dans un environnement edtech.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages et impact */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Apprentissages et impact</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Cette expérience chez LaWEbox m&apos;a permis de développer une expertise complète 
              en développement web avec Python, combinant backend, frontend et data science 
              dans un contexte professionnel.
            </p>
            <p>
                            La conception d&apos;interfaces back-office personnalisées m&apos;a appris l&apos;importance
              de l&apos;expérience utilisateur même pour des outils internes, et la nécessité
              d&apos;adapter les solutions aux besoins métier spécifiques.
            </p>
            <p>
                            Les projets data de bout en bout m&apos;ont donné une vision complète du cycle
              de vie des données, de la collecte à l&apos;analyse, en passant par le traitement
              et l&apos;automatisation.
            </p>
            <p>
              Cette alternance a considérablement renforcé mes compétences en Python et 
              ma capacité à travailler sur des projets complexes intégrant plusieurs 
              domaines techniques, préparant ainsi ma transition vers des rôles plus seniors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
