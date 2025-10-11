'use client';

import { useState } from 'react';

export default function CVSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const cvPath = '/media/Drozd_Damien_CV_2025.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Drozd_Damien_CV_2025.pdf';
    link.click();
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-[#FFC300] text-4xl font-bold mb-6">Mon CV complet</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Consultez mon CV détaillé avec toutes mes expériences, compétences et formations
        </p>
        
        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-[#FFC300] text-black font-semibold rounded-lg hover:bg-[#FFD60A] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger le CV
          </button>
          
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#003D82] text-white font-semibold rounded-lg hover:bg-[#0056B3] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Ouvrir dans un nouvel onglet
          </a>
        </div>
      </div>

      {/* Lecteur PDF intégré */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gray-900 rounded-xl p-4 shadow-2xl">
          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFC300] mx-auto mb-4"></div>
                  <p className="text-gray-300">Chargement du CV...</p>
                </div>
              </div>
            )}
            
            <iframe
              src={`${cvPath}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-lg border-2 border-gray-700"
              title="CV Damien Drozd"
              onLoad={() => {
                setIsLoading(false);
                setHasError(false);
              }}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          </div>
          
          {/* Message d'erreur si le PDF ne se charge pas */}
          {hasError && (
            <div className="text-center p-8 bg-gray-800 rounded-lg mt-4">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4">
                Impossible d'afficher le PDF dans ce navigateur. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#FFC300] text-black font-semibold rounded-lg hover:bg-[#FFD60A] transition-colors"
                >
                  Ouvrir le CV
                </a>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 bg-[#003D82] text-white font-semibold rounded-lg hover:bg-[#0056B3] transition-colors"
                >
                  Télécharger le CV
                </button>
              </div>
            </div>
          )}

          {/* Message de fallback pour les navigateurs qui ne supportent pas les iframes */}
          <noscript>
            <div className="text-center p-8 bg-gray-800 rounded-lg mt-4">
              <p className="text-gray-300 mb-4">
                Votre navigateur ne supporte pas l'affichage des PDF. 
              </p>
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#FFC300] text-black font-semibold rounded-lg hover:bg-[#FFD60A] transition-colors"
              >
                Télécharger le CV
              </a>
            </div>
          </noscript>
        </div>
        
        {/* Note informative */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            💡 Astuce : Utilisez les contrôles du lecteur PDF pour zoomer, naviguer entre les pages et ajuster l'affichage
          </p>
        </div>
      </div>
    </div>
  );
}
