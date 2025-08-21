'use client';

import { useState } from 'react';

export default function SkillsSection() {
  const [competencesId, setCompetencesId] = useState(0);

  const skillsTabs = [
    {
      title: "Front-end & Mobile",
      content: (
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-white">
          <div>
            <h4 className="text-[#FFC300] font-bold mb-2">Front-end</h4>
            <div className="text-white">
              • React, Next.js (SSR/ISR/SSG)<br/>
              • TypeScript, performance web<br/>
              • Core Web Vitals, SEO<br/>
              • Données structurées, sitemaps<br/>
            </div>
            <h4 className="text-[#FFC300] font-bold mb-2 mt-4">Mobile</h4>
            <div className="text-white">
              • React Native (iOS/Android)<br/>
              • Push notifications (APNs/FCM)<br/>
              • Distribution App Store/Google Play<br/>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Back-end & Données",
      content: (
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-white">
          <div>
            <h4 className="text-[#FFC300] font-bold mb-2">Back-end</h4>
            <div className="text-white">
              • Python (FastAPI, Flask, Django/DRF)<br/>
              • Node.js (Fastify, Express)<br/>
              • WebSockets, API REST<br/>
              • Validation, pagination, rate limiting<br/>
            </div>
            <h4 className="text-[#FFC300] font-bold mb-2 mt-4">Données</h4>
            <div className="text-white">
              • PostgreSQL, MySQL, MongoDB<br/>
              • Modélisation, indexation, migrations<br/>
              • Cache/CDN<br/>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Sécurité & DevOps",
      content: (
        <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-6 text-white">
          <div>
            <h4 className="text-[#FFC300] font-bold mb-2">Auth & Sécurité</h4>
            <div className="text-white">
              • OAuth2/OpenID Connect (Keycloak)<br/>
              • RBAC, JWT/sessions<br/>
              • Bonnes pratiques OWASP<br/>
            </div>
            <h4 className="text-[#FFC300] font-bold mb-2 mt-4">DevOps/Cloud</h4>
            <div className="text-white">
              • Docker (+ Compose)<br/>
              • CI/CD (GitHub Actions)<br/>
              • Observabilité (logs/métriques)<br/>
            </div>
            <h4 className="text-[#FFC300] font-bold mb-2 mt-4">Intégrations</h4>
            <div className="text-white">
              • Odoo, Firebase/Firestore<br/>
              • IGDB (API)<br/>
            </div>
          </div>
        </div>
      )
    }
  ];

  function disableButton(id: number) {
    const buttons = ["bouton0", "bouton1", "bouton2"];
    buttons.forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.setAttribute('disabled', 'false');
    });
    const targetBtn = document.getElementById("bouton" + id);
    if (targetBtn) targetBtn.setAttribute('disabled', 'true');
  }

  function scrollToSection(index: number) {
    const section = document.getElementById(`section${index}`);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="text-center mb-16">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Mes compétences</h2>
      <div className="flex justify-center space-x-4 mb-8">
        {skillsTabs.map((tab, index) => (
          <button 
            key={index}
            id={`bouton${index}`} 
            className="px-6 py-3 border-2 border-[#FFC300] text-[#FFC300] rounded-lg hover:bg-[#FFC300] hover:text-[#000814] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
            onClick={() => {
              setCompetencesId(index);
              scrollToSection(index);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        {skillsTabs[competencesId].content}
      </div>
    </div>
  );
}
