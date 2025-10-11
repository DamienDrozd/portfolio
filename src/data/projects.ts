export interface Project {
  id: string;
  title: string;
  period: string;
  startYear: number;
  endYear?: number;
  description: string;
  technologies: string[];
  features: string;
  slug: string;
  status: 'active' | 'completed' | 'archived' | 'planning';
  category: 'web' | 'mobile' | 'fullstack' | 'api' | 'desktop';
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  challenges?: string[];
  achievements?: string[];
}

export const projects: Project[] = [
  {
    id: 'genpulse',
    title: 'GenPulse',
    period: '2023 - Actuel',
    startYear: 2023,
    description: 'Plateforme web innovante cofondée et développée de A à Z. Pilotage complet du développement web avec Next.js et Fastify.',
    technologies: ['Next.js', 'Fastify', 'Architecture'],
    features: 'Plateforme complète, infrastructure web, expérience utilisateur optimale',
    slug: 'genpulse',
    status: 'active',
    category: 'fullstack',
    challenges: [
      'Architecture scalable pour une croissance rapide',
      'Optimisation des performances frontend et backend',
      'Gestion de la sécurité et de l\'authentification',
      'Intégration de multiples services tiers'
    ],
    achievements: [
      'Plateforme web complète développée from scratch',
      'Architecture microservices avec Next.js et Fastify',
      'Interface utilisateur moderne et responsive',
      'Pipeline de déploiement automatisé'
    ]
  },
  {
    id: 'retrogamecollec',
    title: 'RetroGameCollec',
    period: '2025',
    startYear: 2025,
    description: 'Application pour collectionneurs de jeux vidéo rétro. Gestion de collections, découverte de titres et interaction communautaire.',
    technologies: ['Next.js', 'MongoDB', 'IGDB API'],
    features: 'Collections, recherche, partage, SEO optimisé',
    slug: 'retrogamecollec',
    status: 'planning',
    category: 'web',
    challenges: [
      'Intégration avec l\'API IGDB pour les données de jeux',
      'Système de recherche avancé et filtres',
      'Interface de gestion de collections intuitive',
      'Optimisation SEO pour la découverte de contenu'
    ],
    achievements: [
      'Conception UX/UI complète de l\'application',
      'Architecture de base de données optimisée avec MongoDB',
      'Intégration API IGDB pour les métadonnées des jeux',
      'Système de partage social et communautaire'
    ]
  },
  {
    id: 'peel',
    title: 'PEEL',
    period: '2022 - 2024',
    startYear: 2022,
    endYear: 2024,
    description: 'Application de rencontre mobile centrée sur la compatibilité réelle. Matching basé sur centres d\'intérêt et activités communes.',
    technologies: ['React Native', 'API REST', 'Push Notifications'],
    features: 'Swipe, matching, messagerie, App Store/Google Play',
    slug: 'peel',
    status: 'completed',
    category: 'mobile',
    challenges: [
      'Algorithme de matching basé sur la compatibilité',
      'Interface swipe fluide et responsive',
      'Système de messagerie en temps réel',
      'Publication sur les stores iOS et Android'
    ],
    achievements: [
      'Application mobile complète en React Native',
      'Algorithme de matching innovant',
      'Interface utilisateur engageante avec animations',
      'Publication réussie sur App Store et Google Play'
    ]
  }
];

// Fonction utilitaire pour obtenir les projets triés par année
export const getProjectsSortedByYear = (descending: boolean = true): Project[] => {
  return [...projects].sort((a, b) => {
    const yearA = a.startYear;
    const yearB = b.startYear;
    return descending ? yearB - yearA : yearA - yearB;
  });
};

// Fonction pour obtenir un projet par slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Fonction pour obtenir les projets par statut
export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projects.filter(project => project.status === status);
};

// Fonction pour obtenir les projets par catégorie
export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

// Fonction pour obtenir les projets actifs
export const getActiveProjects = (): Project[] => {
  return getProjectsByStatus('active');
};

// Fonction pour obtenir tous les technologies utilisées
export const getAllTechnologies = (): string[] => {
  const techSet = new Set<string>();
  projects.forEach(project => {
    project.technologies.forEach(tech => techSet.add(tech));
  });
  return Array.from(techSet).sort();
};