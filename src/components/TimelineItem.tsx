'use client';

import Link from 'next/link';

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

interface TimelineItemProps {
  data: TimelineData;
  index: number;
  isLeft: boolean;
}

export default function TimelineItem({ data, index, isLeft }: TimelineItemProps) {
  const isProject = data.type === 'project';
  
  return (
    <div className={`relative mb-12 ${isLeft ? 'md:flex md:flex-row-reverse md:items-center' : 'md:flex md:flex-row md:items-center'}`}>
      {/* Point sur la ligne - Desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className={`w-6 h-6 rounded-full border-4 border-white ${
          isProject ? 'bg-[#FFC300]' : 'bg-[#003D82]'
        }`}></div>
      </div>
      
      {/* Point sur la ligne - Mobile */}
      <div className="absolute left-4 transform -translate-x-1/2 z-10 block md:hidden top-6">
        <div className={`w-3 h-3 rounded-full border-2 border-white ${
          isProject ? 'bg-[#FFC300]' : 'bg-[#003D82]'
        }`}></div>
      </div>
      
      {/* Année - Desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-12 z-10 hidden md:block">
        <span className="bg-[#000814] px-3 py-1 rounded-full text-[#FFC300] font-bold text-sm border border-[#FFC300]">
          {data.year}
        </span>
      </div>

      {/* Contenu */}
      <div className={`w-full md:w-5/12 pl-10 md:pl-0 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <div className={`bg-gray-900 rounded-xl p-4 md:p-6 shadow-lg border-l-4 ${
          isProject ? 'border-[#FFC300]' : 'border-[#003D82]'
        } hover:shadow-xl transition-shadow duration-300`}>
          
          {/* Type badge */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
            isProject 
              ? 'bg-[#FFC300] text-black' 
              : 'bg-[#003D82] text-white'
          }`}>
            {isProject ? 'PROJET' : 'EXPÉRIENCE'}
          </div>

          {/* Titre et sous-titre */}
          <h3 className="text-xl font-bold text-white mb-1">
            {data.title}
          </h3>
          {data.subtitle && (
            <p className="text-[#FFC300] font-medium mb-2">
              {data.subtitle}
            </p>
          )}
          
          {/* Année mobile */}
          <div className="md:hidden mb-2">
            <span className="bg-[#FFC300] text-black px-2 py-1 rounded text-xs font-bold">
              {data.year}
            </span>
          </div>

          {/* Période et localisation */}
          <div className="text-gray-400 text-sm mb-3">
            <span className="font-medium">{data.period}</span>
            {data.location && (
              <span className="ml-2">• {data.location}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed">
            {data.description}
          </p>

          {/* Features (pour les projets) */}
          {data.features && (
            <p className="text-gray-400 text-sm mb-4 italic">
              {data.features}
            </p>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {data.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Lien vers le détail */}
          <Link 
            href={`/${isProject ? 'projects' : 'experiences'}/${data.slug}`}
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              isProject
                ? 'bg-[#FFC300] text-black hover:bg-[#FFD60A]'
                : 'bg-[#003D82] text-white hover:bg-[#0056B3]'
            }`}
          >
            Voir le détail
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}