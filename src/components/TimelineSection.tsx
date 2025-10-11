'use client';

import { useState } from 'react';
import TimelineItem from './TimelineItem';
import { getFilteredTimelineData } from '../data/timeline';

export default function TimelineSection() {
  const [filter, setFilter] = useState<'all' | 'projects' | 'experiences'>('all');
  
  const filteredData = getFilteredTimelineData(filter);

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-[#FFC300] text-4xl font-bold mb-6">Parcours & Projets</h2>
        <p className="text-gray-300 text-lg mb-4">
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