import BackButton from "../../../components/BackButton";
import ExternalLinks from "../../../components/ExternalLinks";
import { getExperienceBySlug } from "../../../data/experiences";

export default function LaWEboxPage() {
  const experience = getExperienceBySlug('lawebox');
  
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête de l'expérience */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">LaWEbox</h1>
          <p className="text-white text-xl mb-2">
            Développeur Full Stack / Data Scientist - Alternance
          </p>
          <p className="text-gray-300 text-lg mb-2">Paris, France</p>
          <p className="text-gray-300 text-lg mb-6">
            Septembre 2022 – Juillet 2023
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Django
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Flask
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Data Science
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Python
            </span>
          </div>
          <BackButton />
        </div>

        {/* Description du projet */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Description du poste
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              En tant que développeur full stack et data scientist en alternance
              chez LaWEbox, j&apos;ai eu l&apos;opportunité de travailler sur
              des projets variés alliant développement web et analyse de
              données. Cette expérience m&apos;a permis de consolider mes
              compétences techniques tout en découvrant l&apos;environnement
              startup parisien.
            </p>
            <p>
              Mon rôle consistait principalement à concevoir des APIs REST,
              développer des interfaces back-office et mener des projets data de
              bout en bout. J&apos;ai pu travailler avec des technologies
              modernes comme Django et Flask dans un contexte professionnel
              exigeant.
            </p>
          </div>
        </div>

        {/* Responsabilités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Responsabilités principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Développement backend
                </h3>
                <p className="text-gray-300 text-sm">
                  Conception et développement d&apos;APIs REST avec Django et
                  Flask
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Interfaces back-office
                </h3>
                <p className="text-gray-300 text-sm">
                  Création d&apos;interfaces d&apos;administration
                  personnalisées pour les équipes internes
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
                <h3 className="text-white font-semibold mb-2">
                  Architecture système
                </h3>
                <p className="text-gray-300 text-sm">
                  Conception d&apos;architectures robustes et scalables pour les
                  applications
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Optimisation BDD
                </h3>
                <p className="text-gray-300 text-sm">
                  Optimisation des requêtes et performances des bases de données
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Machine Learning
                </h3>
                <p className="text-gray-300 text-sm">
                  Implémentation d&apos;algorithmes de ML pour l&apos;analyse
                  prédictive
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Compétences techniques développées */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Compétences techniques développées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Backend Web
              </h3>
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
              <h3 className="text-white font-semibold text-lg mb-3">
                Data Science
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Pandas, NumPy</li>
                <li>• Scikit-learn</li>
                <li>• Matplotlib, Seaborn</li>
                <li>• Jupyter Notebooks</li>
                <li>• Analyse exploratoire</li>
                <li>• Machine Learning</li>
                <li>• Visualisation de données</li>
                <li>• Preprocessing et cleaning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Bases de données
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• PostgreSQL</li>
                <li>• SQLite</li>
                <li>• Optimisation requêtes SQL</li>
                <li>• Modélisation relationnelle</li>
                <li>• Migrations et schema</li>
                <li>• Indexation et performances</li>
                <li>• ORM Django/SQLAlchemy</li>
                <li>• Administration BDD</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projets marquants */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Projets marquants
          </h2>
          <div className="text-gray-300 space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Plateforme d&apos;administration
              </h3>
              <p className="mb-3">
                Développement d&apos;une interface back-office complète pour la
                gestion des données clients et la configuration des services.
                Interface moderne avec tableaux de bord interactifs et gestion
                avancée des permissions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Technologies utilisées
                  </h4>
                  <ul className="space-y-1">
                    <li>• Django REST Framework</li>
                    <li>• PostgreSQL</li>
                    <li>• React (frontend)</li>
                    <li>• Redis (cache)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Fonctionnalités clés
                  </h4>
                  <ul className="space-y-1">
                    <li>• Gestion des utilisateurs/rôles</li>
                    <li>• Tableaux de bord temps réel</li>
                    <li>• Export/import de données</li>
                    <li>• Audit trail complet</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Pipeline d&apos;analyse de données
              </h3>
              <p className="mb-3">
                Mise en place d&apos;un pipeline automatisé d&apos;analyse de
                données clients pour générer des insights business. Traitement
                de gros volumes de données et création de modèles prédictifs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-1">Process ETL</h4>
                  <ul className="space-y-1">
                    <li>• Extraction multi-sources</li>
                    <li>• Nettoyage et normalisation</li>
                    <li>• Transformation métier</li>
                    <li>• Chargement optimisé</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Modèles ML</h4>
                  <ul className="space-y-1">
                    <li>• Prédiction de churn</li>
                    <li>• Segmentation clients</li>
                    <li>• Recommandations</li>
                    <li>• Détection d&apos;anomalies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Méthodologie et outils */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Méthodologie et outils
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Développement</h3>
              <p>
                Approche agile avec sprints courts, code reviews systématiques
                et tests automatisés pour assurer la qualité du code.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Data Science</h3>
              <p>
                Méthode CRISP-DM pour les projets data, avec exploration,
                modélisation itérative et validation croisée des résultats.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Collaboration</h3>
              <p>
                Travail étroit avec les équipes produit, marketing et business
                pour comprendre les besoins métier et livrer des solutions
                adaptées.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Apprentissages et évolution
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Cette expérience chez LaWEbox m&apos;a permis de développer une
              vision complète du développement full stack moderne, en combinant
              expertise technique backend et compétences en data science.
              J&apos;ai appris à concevoir des solutions scalables tout en
              respectant les contraintes business.
            </p>
            <p>
              Le travail en startup parisienne m&apos;a aussi appris
              l&apos;importance de l&apos;agilité et de l&apos;adaptabilité dans
              un environnement en constante évolution. Cette expérience a
              renforcé ma capacité à travailler de manière autonome tout en
              collaborant efficacement avec des équipes pluridisciplinaires.
            </p>
            <p>
              L&apos;alternance m&apos;a également permis de mettre en pratique
              les connaissances théoriques acquises en formation,
              particulièrement en data science et machine learning, dans des
              contextes métier réels avec des enjeux concrets.
            </p>
          </div>
        </div>
        {/* Liens externes */}
        <ExternalLinks
          companyUrl={experience?.companyUrl}
          projectUrl={experience?.projectUrl}
        />
      </div>
    </div>
  );
}