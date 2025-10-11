import { experiences, type Experience } from './experiences';
import { projects, type Project } from './projects';

export interface TimelineData {
  id: string;
  type: 'project' | 'experience';
  title: string;
  subtitle?: string;
  period: string;
  year: number;
  description: string;
  technologies: string[];
  location?: string;
  features?: string;
  slug: string;
  status?: string;
  category?: string;
  originalData: Experience | Project;
}

// Fonction pour convertir une expérience en données de timeline
const experienceToTimelineData = (experience: Experience): TimelineData => ({
  id: experience.id,
  type: 'experience',
  title: experience.company,
  subtitle: experience.position,
  period: experience.period,
  year: experience.startYear,
  description: experience.description,
  technologies: experience.technologies,
  location: experience.location,
  slug: experience.slug,
  status: experience.type,
  originalData: experience
});

// Fonction pour convertir un projet en données de timeline
const projectToTimelineData = (project: Project): TimelineData => ({
  id: project.id,
  type: 'project',
  title: project.title,
  period: project.period,
  year: project.startYear,
  description: project.description,
  technologies: project.technologies,
  features: project.features,
  slug: project.slug,
  status: project.status,
  category: project.category,
  originalData: project
});

// Fonction pour obtenir toutes les données de timeline
export const getTimelineData = (): TimelineData[] => {
  const experienceData = experiences.map(experienceToTimelineData);
  const projectData = projects.map(projectToTimelineData);
  
  return [...experienceData, ...projectData].sort((a, b) => b.year - a.year);
};

// Fonction pour filtrer les données de timeline
export const getFilteredTimelineData = (
  filter: 'all' | 'projects' | 'experiences'
): TimelineData[] => {
  const allData = getTimelineData();
  
  switch (filter) {
    case 'projects':
      return allData.filter(item => item.type === 'project');
    case 'experiences':
      return allData.filter(item => item.type === 'experience');
    default:
      return allData;
  }
};

// Fonction pour obtenir les statistiques de la timeline
export const getTimelineStats = () => {
  const allData = getTimelineData();
  const projectsCount = allData.filter(item => item.type === 'project').length;
  const experiencesCount = allData.filter(item => item.type === 'experience').length;
  
  const allTechnologies = new Set<string>();
  allData.forEach(item => {
    item.technologies.forEach(tech => allTechnologies.add(tech));
  });
  
  const yearRange = {
    start: Math.min(...allData.map(item => item.year)),
    end: Math.max(...allData.map(item => item.year))
  };
  
  return {
    total: allData.length,
    projects: projectsCount,
    experiences: experiencesCount,
    technologies: Array.from(allTechnologies).sort(),
    technologiesCount: allTechnologies.size,
    yearRange,
    yearsSpan: yearRange.end - yearRange.start + 1
  };
};