'use client';

import { useState } from 'react';
import TimelineItem from './TimelineItem';

interface TimelineData {
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
}

export default function TimelineSection() {
  const [filter, setFilter] = useState<'all' | 'projects' | 'experiences'>('all');

  const timelineData: TimelineData[] = [
    // Projets
    {
      id: 'genpulse',
      type: 'project',
      title: 'GenPulse',
      period: '2023 - Actuel',
      year: 2023,
      description: 'Plateforme web innovante cofondée et développée de A à Z. Pilotage complet du développement web avec Next.js et Fastify.',
      technologies: ['Next.js', 'Fastify', 'Architecture'],
      features: 'Plateforme complète, infrastructure web, expérience utilisateur optimale',
      slug: 'genpulse'
    },
    {
      id: 'retrogamecollec',
      type: 'project',
      title: 'RetroGameCollec',
      period: '2025',
      year: 2025,
      description: 'Application pour collectionneurs de jeux vidéo rétro. Gestion de collections, découverte de titres et interaction communautaire.',
      technologies: ['Next.js', 'MongoDB', 'IGDB API'],
      features: 'Collections, recherche, partage, SEO optimisé',
      slug: 'retrogamecollec'
    },
    {
      id: 'peel',
      type: 'project',
      title: 'PEEL',
      period: '2022 - 2024',
      year: 2022,
      description: 'Application de rencontre mobile centrée sur la compatibilité réelle. Matching basé sur centres d\'intérêt et activités communes.',
      technologies: ['React Native', 'API REST', 'Push Notifications'],
      features: 'Swipe, matching, messagerie, App Store/Google Play',
      slug: 'peel'
    },
    // Expériences
    {
      id: 'reconomia',
      type: 'experience',
      title: 'Reconomia',
      subtitle: 'Développeur Web Fullstack - Alternance',
      period: '2023 - 2025',
      year: 2023,
      location: 'Lille',
      description: 'Développement d\'application mobile React Native, création d\'APIs avec FastAPI et déploiement sur Azure.',
      technologies: ['React Native', 'FastAPI', 'Azure'],
      slug: 'reconomia'
    },
    {
      id: 'lawebox',
      type: 'experience',
      title: 'LaWEbox',
      subtitle: 'Développeur Full Stack / Data Scientist',
      period: '2022 - 2023',
      year: 2022,
      location: 'Paris',
      description: 'Conception d\'APIs REST et interfaces back-office. Projets data de bout en bout avec Django et Flask.',
      technologies: ['Django', 'Flask', 'Data Science'],
      slug: 'lawebox'
    },
    {
      id: 'freelance',
      type: 'experience',
      title: 'Freelance',
      subtitle: 'Développeur NextJS',
      period: '2023',
      year: 2023,
      location: 'Paris',
      description: 'Site web vitrine accessible aux personnes sourdes et mal voyantes. CMS léger avec Firebase.',
      technologies: ['Next.js', 'Firebase', 'Accessibilité'],
      slug: 'freelance'
    }
  ];

  const filteredData = timelineData
    .filter(item => {
      if (filter === 'all') return true;
      if (filter === 'projects') return item.type === 'project';
      if (filter === 'experiences') return item.type === 'experience';
      return true;
    })
    .sort((a, b) => b.year - a.year); // Tri par année décroissante

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-[#FFC300] text-4xl font-bold mb-6">Parcours & Projets</h2>
        <p className="text-gray-300 text-lg mb-8">
          Découvrez mon parcours professionnel et mes projets personnels dans une frise chronologique
        </p>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 px-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base ${
              filter === 'all'
                ? 'bg-[#FFC300] text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Tout
          </button>
          <button
            onClick={() => setFilter('projects')}
            className={`px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base ${
              filter === 'projects'
                ? 'bg-[#FFC300] text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Projets
          </button>
          <button
            onClick={() => setFilter('experiences')}
            className={`px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base ${
              filter === 'experiences'
                ? 'bg-[#FFC300] text-black'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}
          >
            Expériences
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="relative">
          {/* Ligne centrale - Desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FFC300] via-[#FFD60A] to-[#FFC300] hidden md:block"></div>
          {/* Ligne mobile (à gauche) */}
          <div className="absolute left-4 h-full w-0.5 bg-gradient-to-b from-[#FFC300] via-[#FFD60A] to-[#FFC300] block md:hidden"></div>
          
          {filteredData.map((item, index) => (
            <TimelineItem
              key={item.id}
              data={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}