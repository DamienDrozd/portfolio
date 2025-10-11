import BackButton from "../../../components/BackButton";

export default function ReconomiaPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      
      <div className="pt-32 pb-16 max-w-6xl mx-auto px-4">
        {/* En-tête de l'expérience */}
        <div className="text-center mb-16">
          <h1 className="text-[#FFC300] text-5xl font-bold mb-4">Reconomia</h1>
          <p className="text-white text-xl mb-2">Développeur Web Fullstack - Alternance</p>
          <p className="text-gray-300 text-lg mb-2">Lille, France</p>
          <p className="text-gray-300 text-lg mb-6">Septembre 2023 – Septembre 2025</p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">React Native</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">FastAPI</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Azure</span>
            <span className="bg-[#FFC300] text-[#000814] px-4 py-2 rounded-lg font-semibold">Python</span>
          </div>
          <BackButton />
        </div>

        {/* Description du poste */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Description du poste</h2>
          <div className="text-gray-300 space-y-4">
            <p>
                          Chez Reconomia, j&apos;ai eu l&apos;opportunité de travailler sur le développement d&apos;une application mobile
            React Native complète, de la conception d&apos;APIs avec FastAPI jusqu&apos;au déploiement sur Azure. 
              Cette alternance m&apos;a permis de mettre en pratique mes compétences techniques tout en développant 
              une approche professionnelle du développement.
            </p>
            <p>
                          J&apos;ai participé activement à la veille technologique pour intégrer les innovations pertinentes
            au produit et au pipeline de développement, contribuant ainsi à l&apos;amélioration continue 
              de nos processus et de nos solutions techniques.
            </p>
          </div>
        </div>

        {/* Responsabilités principales */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Responsabilités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Développement mobile</h3>
                <p className="text-gray-300 text-sm">
                  Conception et développement d&apos;application React Native pour iOS et Android
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">APIs backend</h3>
                <p className="text-gray-300 text-sm">
                  Création d&apos;APIs robustes avec FastAPI et déploiement sur Azure
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Veille technologique</h3>
                <p className="text-gray-300 text-sm">
                  Recherche et intégration d&apos;innovations dans le pipeline de développement
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Optimisation</h3>
                <p className="text-gray-300 text-sm">
                  Amélioration des performances et de l&apos;expérience utilisateur
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-300 text-sm">
                  Travail en équipe avec les équipes produit et design
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Documentation</h3>
                <p className="text-gray-300 text-sm">
                  Rédaction de documentation technique et guides utilisateur
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
              <h3 className="text-white font-semibold text-lg mb-3">Mobile/Web</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• React Native (iOS/Android)</li>
                <li>• React, TypeScript</li>
                <li>• Gestion d&apos;état avancée</li>
                <li>• Navigation complexe</li>
                <li>• Formulaires et validation</li>
                <li>• Accessibilité</li>
                <li>• UI responsive</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Python, FastAPI</li>
                <li>• Endpoints REST</li>
                <li>• Validation Pydantic</li>
                <li>• Pagination</li>
                <li>• Rate-limiting</li>
                <li>• Tests unitaires</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Infrastructure</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• PostgreSQL</li>
                <li>• Modélisation de données</li>
                <li>• Indexation</li>
                <li>• Migrations</li>
                <li>• Azure Cloud</li>
                <li>• CI/CD</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intégrations et APIs */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Intégrations et APIs externes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Authentification/SSO</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Keycloak - Configuration des realms/clients/roles</li>
                <li>• Flux OIDC</li>
                <li>• Gestion des tokens/refresh</li>
                <li>• RBAC (Role-Based Access Control)</li>
                <li>• Intégration côté FastAPI et apps</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Intégrations/ERP</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Odoo - Conception et exposition d&apos;endpoints</li>
                <li>• Synchronisation de données</li>
                <li>• Mapping des modèles (res.partner, sale.order)</li>
                <li>• Gestion des produits et stocks</li>
                <li>• APIs tierces sécurisées</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance et sécurité */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Performance et sécurité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Optimisation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Optimisation des temps de rendu</li>
                <li>• Optimisation des appels réseau</li>
                <li>• Caching intelligent</li>
                <li>• Lazy loading</li>
                <li>• Compression des données</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">Sécurité</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Authentification OAuth2/OIDC</li>
                <li>• Validation des entrées</li>
                <li>• Protection CSRF</li>
                <li>• Chiffrement des données sensibles</li>
                <li>• Audit de sécurité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Collaboration et méthodologie */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Collaboration et méthodologie</h2>
          <div className="text-gray-300 space-y-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Spécifications techniques</h3>
              <p>
                Collaboration étroite avec les équipes produit et design pour transformer les besoins 
                utilisateurs en solutions techniques concrètes et réalisables.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Code review</h3>
              <p>
                Participation active aux revues de code pour maintenir la qualité du code et 
                partager les bonnes pratiques avec l&apos;équipe.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Documentation</h3>
              <p>
                Rédaction de documentation technique détaillée et de guides utilisateur pour 
                faciliter la maintenance et l&apos;évolution du projet.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Découpage en incréments</h3>
              <p>
                Planification et découpage des fonctionnalités en incréments livrables pour 
                assurer une progression régulière et mesurable du projet.
              </p>
            </div>
          </div>
        </div>

        {/* Apprentissages et impact */}
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8">
          <h2 className="text-[#FFC300] text-2xl font-bold mb-6">Apprentissages et impact</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              Cette alternance chez Reconomia m&apos;a permis de développer une expertise approfondie 
              en développement fullstack, combinant développement mobile avec React Native et 
              backend avec FastAPI.
            </p>
            <p>
                            L&apos;intégration de systèmes complexes comme Keycloak et Odoo m&apos;a appris l&apos;importance
              de la conception d&apos;APIs robustes et de la gestion des intégrations tierces.
            </p>
            <p>
                            La collaboration avec les équipes produit et design m&apos;a donné une vision complète
              du développement d&apos;applications professionnelles, de la conception à la livraison.
            </p>
            <p>
              Cette expérience a considérablement renforcé mes compétences techniques et ma capacité 
              à travailler sur des projets complexes en équipe, préparant ainsi ma transition 
              vers des rôles plus seniors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
