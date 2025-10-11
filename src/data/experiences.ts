export interface Experience {
  id: string;
  company: string;
  period: string;
  startYear: number;
  endYear?: number;
  location: string;
  position: string;
  description: string;
  technologies: string[];
  slug: string;
  type?: 'internship' | 'fulltime' | 'freelance';
  achievements?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'reconomia',
    company: 'Reconomia',
    period: '2023 - 2025',
    startYear: 2023,
    endYear: 2025,
    location: 'Lille',
    position: 'Développeur Web Fullstack - Alternance',
    description: 'Développement d\'application mobile React Native, création d\'APIs avec FastAPI et déploiement sur Azure.',
    technologies: ['React Native', 'FastAPI', 'Azure'],
    slug: 'reconomia',
    type: 'internship',
    achievements: [
      'Développement d\'une application mobile complète en React Native',
      'Création d\'APIs REST performantes avec FastAPI',
      'Mise en place d\'un pipeline CI/CD sur Azure DevOps',
      'Optimisation des performances et de la sécurité des applications'
    ]
  },
  {
    id: 'lawebox',
    company: 'LaWEbox',
    period: '2022 - 2023',
    startYear: 2022,
    endYear: 2023,
    location: 'Paris',
    position: 'Développeur Full Stack / Data Scientist',
    description: 'Conception d\'APIs REST et interfaces back-office. Projets data de bout en bout avec Django et Flask.',
    technologies: ['Django', 'Flask', 'Data Science'],
    slug: 'lawebox',
    type: 'fulltime',
    achievements: [
      'Développement d\'interfaces back-office complexes',
      'Création de pipelines de traitement de données',
      'Implémentation d\'algorithmes de machine learning',
      'Optimisation de requêtes SQL et bases de données'
    ]
  },
  {
    id: 'freelance',
    company: 'Freelance',
    period: '2023',
    startYear: 2023,
    location: 'Paris',
    position: 'Développeur NextJS',
    description: 'Site web vitrine accessible aux personnes sourdes et mal voyantes. CMS léger avec Firebase.',
    technologies: ['Next.js', 'Firebase', 'Accessibilité'],
    slug: 'freelance',
    type: 'freelance',
    achievements: [
      'Développement d\'un site web conforme aux standards WCAG',
      'Intégration de fonctionnalités d\'accessibilité avancées',
      'Mise en place d\'un CMS simple avec Firebase',
      'Optimisation SEO et performances web'
    ]
  }
];

// Fonction utilitaire pour obtenir les expériences triées par année
export const getExperiencesSortedByYear = (descending: boolean = true): Experience[] => {
  return [...experiences].sort((a, b) => {
    const yearA = a.startYear;
    const yearB = b.startYear;
    return descending ? yearB - yearA : yearA - yearB;
  });
};

// Fonction pour obtenir une expérience par slug
export const getExperienceBySlug = (slug: string): Experience | undefined => {
  return experiences.find(exp => exp.slug === slug);
};

// Fonction pour obtenir les expériences par type
export const getExperiencesByType = (type: Experience['type']): Experience[] => {
  return experiences.filter(exp => exp.type === type);
};