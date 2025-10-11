import BackButton from "../../../components/BackButton";
import ExternalLinks from "../../../components/ExternalLinks";
import { getExperienceBySlug } from "../../../data/experiences";

export default function ReconomiaPage() {
  const experience = getExperienceBySlug('reconomia');
  
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête de l'expérience */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">Reconomia</h1>
          <p className="text-white text-xl mb-2">
            Développeur Web Fullstack - Alternance
          </p>
          <p className="text-gray-300 text-lg mb-2">Lille, France</p>
          <p className="text-gray-300 text-lg mb-6">
            Septembre 2023 – Septembre 2025
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              React Native
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              FastAPI
            </span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">
              Azure
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
              En tant que développeur web fullstack en alternance chez
              Reconomia, j&apos;ai eu l&apos;opportunité de travailler sur des
              projets innovants liés à l&apos;économie circulaire et au
              développement durable. Mon rôle consistait principalement à
              développer des applications mobiles et web.
            </p>
            <p>
              Cette alternance m&apos;a permis d&apos;acquérir une expérience
              professionnelle solide tout en poursuivant mes études. J&apos;ai
              pu mettre en pratique mes compétences techniques dans un
              environnement professionnel exigeant et dynamique.
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
                  Développement mobile
                </h3>
                <p className="text-gray-300 text-sm">
                  Conception et développement d&apos;application React Native
                  pour iOS et Android
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">APIs backend</h3>
                <p className="text-gray-300 text-sm">
                  Création d&apos;APIs robustes avec FastAPI et déploiement sur
                  Azure
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Veille technologique
                </h3>
                <p className="text-gray-300 text-sm">
                  Recherche et intégration de nouvelles technologies pour
                  améliorer les performances
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Tests et qualité
                </h3>
                <p className="text-gray-300 text-sm">
                  Mise en place de tests automatisés et assurance qualité du
                  code
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Collaboration équipe
                </h3>
                <p className="text-gray-300 text-sm">
                  Travail en équipe avec des designers, product managers et
                  autres développeurs
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">
                  Déploiement continu
                </h3>
                <p className="text-gray-300 text-sm">
                  Configuration et maintenance des pipelines CI/CD sur Azure
                  DevOps
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
                Mobile/Web
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• React Native (iOS/Android)</li>
                <li>• React, TypeScript</li>
                <li>• Gestion d&apos;état avancée</li>
                <li>• Navigation complexe</li>
                <li>• Formulaires et validation</li>
                <li>• Accessibilité</li>
                <li>• Optimisation performances</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• FastAPI (Python)</li>
                <li>• Architecture RESTful</li>
                <li>• Validation Pydantic</li>
                <li>• Authentification JWT</li>
                <li>• Base de données relationnelles</li>
                <li>• ORM SQLAlchemy</li>
                <li>• Documentation OpenAPI</li>
                <li>• Tests automatisés</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Cloud & DevOps
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Azure (App Service, Functions)</li>
                <li>• Azure DevOps (CI/CD)</li>
                <li>• Docker et containerisation</li>
                <li>• Monitoring et logging</li>
                <li>• Git workflows avancés</li>
                <li>• Tests d&apos;intégration</li>
                <li>• Déploiement automatisé</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intégrations et APIs */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Intégrations et APIs externes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Authentification/SSO
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Keycloak - Configuration des realms/clients/roles</li>
                <li>• Flux OIDC</li>
                <li>• Gestion des tokens/refresh</li>
                <li>• RBAC (Role-Based Access Control)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                Services cloud
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Azure Storage (Blob/Tables)</li>
                <li>• Azure Service Bus</li>
                <li>• Azure Key Vault</li>
                <li>• Monitoring Application Insights</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projets menés */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Projets menés
          </h2>
          <div className="text-gray-300 space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Application mobile React Native
              </h3>
              <p className="mb-3">
                Développement complet d&apos;une application mobile
                cross-platform pour la gestion de données environnementales et
                économiques. Application destinée aux professionnels de
                l&apos;économie circulaire.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Fonctionnalités clés
                  </h4>
                  <ul className="space-y-1">
                    <li>• Interface utilisateur intuitive</li>
                    <li>• Authentification sécurisée</li>
                    <li>• Synchronisation offline/online</li>
                    <li>• Formulaires complexes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Technologies
                  </h4>
                  <ul className="space-y-1">
                    <li>• React Native 0.72+</li>
                    <li>• TypeScript strict</li>
                    <li>• React Navigation v6</li>
                    <li>• AsyncStorage/MMKV</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                APIs backend FastAPI
              </h3>
              <p className="mb-3">
                Conception et développement d&apos;APIs robustes pour supporter
                l&apos;application mobile et les interfaces web. Architecture
                moderne avec validation automatique et documentation
                interactive.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Architecture
                  </h4>
                  <ul className="space-y-1">
                    <li>• Architecture hexagonale</li>
                    <li>• Séparation des responsabilités</li>
                    <li>• Patterns Repository/Service</li>
                    <li>• Dependency injection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Fonctionnalités
                  </h4>
                  <ul className="space-y-1">
                    <li>• Validation automatique Pydantic</li>
                    <li>• Documentation OpenAPI auto</li>
                    <li>• Authentification JWT</li>
                    <li>• Middleware de sécurité</li>
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
              <h3 className="text-white font-semibold mb-2">
                Gestion de projet
              </h3>
              <p>
                Utilisation d&apos;Azure DevOps pour la gestion des tâches, le
                suivi des sprints et la planification des releases.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Code review</h3>
              <p>
                Participation active aux revues de code pour maintenir la
                qualité du code et partager les bonnes pratiques avec
                l&apos;équipe.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Documentation</h3>
              <p>
                Rédaction de documentation technique détaillée et de guides
                utilisateur pour faciliter la maintenance et l&apos;évolution du
                projet.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Tests automatisés
              </h3>
              <p>
                Mise en place de tests unitaires, d&apos;intégration et
                end-to-end pour assurer la fiabilité des applications
                développées.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Monitoring</h3>
              <p>
                Configuration d&apos;outils de monitoring pour suivre les
                performances des applications et détecter rapidement les
                problèmes en production.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">
                Découpage en incréments
              </h3>
              <p>
                Planification et découpage des fonctionnalités en incréments
                livrables pour assurer une progression régulière et mesurable du
                projet.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages et évolution */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
            Apprentissages et évolution professionnelle
          </h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Cette alternance chez Reconomia m&apos;a permis de consolider mes
              compétences techniques tout en développant ma compréhension des
              enjeux business et environnementaux. J&apos;ai appris à traduire
              des besoins métier complexes en solutions techniques efficaces.
            </p>
            <p>
              L&apos;environnement startup m&apos;a également permis de
              développer mon autonomie et ma capacité d&apos;adaptation,
              qualités essentielles dans le développement moderne. J&apos;ai pu
              observer et participer à toutes les phases du développement, de la
              conception à la mise en production.
            </p>
            <p>
              Cette expérience m&apos;a donné une vision complète et pratique du
              métier de développeur, du développement d&apos;applications
              professionnelles, de la conception à la livraison.
            </p>
            <p>
              Cette expérience a considérablement renforcé mes compétences
              techniques et ma capacité à travailler sur des projets complexes
              en équipe, préparant ainsi ma transition vers des rôles plus
              seniors.
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