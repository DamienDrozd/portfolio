import { experiences } from './experiences';
import { projects } from './projects';

export const portfolioConfig = {
  // Informations personnelles
  personal: {
    name: 'Damien Drozd',
    title: 'Développeur Full Stack',
    location: 'Lille, France',
    email: 'contact@damien-drozd.fr',
    linkedin: 'https://linkedin.com/in/damien-drozd',
    github: 'https://github.com/DamienDrozd'
  },

  // Configuration du CV
  cv: {
    filename: 'Drozd_Damien_CV_2025.pdf',
    path: '/media/Drozd_Damien_CV_2025.pdf',
    downloadName: 'Drozd_Damien_CV_2025.pdf'
  },

  // Configuration des couleurs du thème
  theme: {
    primary: '#FFC300',
    primaryHover: '#FFD60A',
    secondary: '#003D82',
    secondaryHover: '#0056B3',
    background: '#000814',
    cardBackground: '#1f2937',
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db',
      accent: '#FFC300'
    }
  },

  // Configuration des sections
  sections: {
    showTimeline: true,
    showProjects: true,
    showExperiences: true,
    showSkills: true,
    showSoftSkills: true,
    showCV: true
  },

  // Métadonnées SEO
  seo: {
    title: 'Damien Drozd - Développeur Full Stack',
    description: 'Portfolio de Damien Drozd, développeur Full Stack spécialisé en React, Next.js, Node.js et Python.',
    keywords: ['développeur', 'fullstack', 'react', 'nextjs', 'nodejs', 'python', 'lille'],
    author: 'Damien Drozd'
  },

  // Configuration de la timeline
  timeline: {
    itemsPerPage: 10,
    showYearLabels: true,
    showFilters: true,
    showStats: true,
    defaultFilter: 'all' as 'all' | 'projects' | 'experiences'
  },

  // Configuration des animations
  animations: {
    enabled: true,
    duration: 300,
    staggerDelay: 100
  },

  // Configuration responsive
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
    large: '1280px'
  }
} as const;

// Export des données
export { experiences, projects };

// Export des statistiques combinées
export const getPortfolioStats = () => {
  const allTechnologies = new Set<string>();
  
  [...experiences, ...projects].forEach(item => {
    item.technologies.forEach(tech => allTechnologies.add(tech));
  });

  const years = [...experiences.map(e => e.startYear), ...projects.map(p => p.startYear)];
  const yearRange = {
    start: Math.min(...years),
    end: Math.max(...years)
  };

  return {
    totalExperiences: experiences.length,
    totalProjects: projects.length,
    totalItems: experiences.length + projects.length,
    uniqueTechnologies: Array.from(allTechnologies).sort(),
    technologiesCount: allTechnologies.size,
    yearRange,
    careerSpan: yearRange.end - yearRange.start + 1
  };
};