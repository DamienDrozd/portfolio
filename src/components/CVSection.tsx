'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function CVSection() {
  const [loadingState, setLoadingState] = useState<
    "loading" | "loaded" | "error" | "timeout"
  >("loading");
  const [retryCount, setRetryCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const cvPath = '/media/Drozd_Damien_CV_2025.pdf';

  // Vérifier si le fichier PDF existe
  const checkPdfExists = useCallback(async () => {
    try {
      const response = await fetch(cvPath, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }, [cvPath]);

  // Fonction pour nettoyer le timeout
  const clearCurrentTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Fonction pour démarrer un nouveau timeout
  const startTimeout = useCallback(() => {
    clearCurrentTimeout();
    const timeoutDuration = retryCount === 0 ? 12000 : 8000; // Plus de temps pour le premier chargement
    timeoutRef.current = setTimeout(() => {
      console.log('Timeout atteint pour le CV');
      setLoadingState('timeout');
    }, timeoutDuration);
  }, [clearCurrentTimeout, retryCount]);

  // Gérer le chargement initial avec vérification
  useEffect(() => {
    if (loadingState === 'loading') {
      if (iframeRef.current) {
        const timestamp = new Date().getTime();
        const newSrc = `${cvPath}?t=${timestamp}&retry=${retryCount}#toolbar=1&navpanes=1&scrollbar=1`;
        iframeRef.current.src = newSrc;
      }
      const initLoad = async () => {
        // Vérifier si le fichier existe avant de démarrer le timeout
        const pdfExists = await checkPdfExists();
        
        if (!pdfExists) {
          console.log('Fichier PDF non trouvé');
          setLoadingState('error');
          return;
        }
        
        // Délai léger pour permettre au DOM d'être prêt
        setTimeout(() => {
          startTimeout();
        }, 100);
      };
      
      initLoad();
    }
    return clearCurrentTimeout;
  }, [loadingState, startTimeout, clearCurrentTimeout, checkPdfExists]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Drozd_Damien_CV_2025.pdf';
    link.click();
  };

  const handleIframeLoad = useCallback(() => {
    console.log('CV chargé avec succès');
    clearCurrentTimeout();
    setLoadingState('loaded');
  }, [clearCurrentTimeout]);

  const handleIframeError = useCallback(() => {
    console.log('Erreur de chargement du CV');
    clearCurrentTimeout();
    setLoadingState('error');
  }, [clearCurrentTimeout]);

  const retryLoad = useCallback(() => {
    const newRetryCount = retryCount + 1;
    console.log(`Retry du chargement du CV (tentative ${newRetryCount})`);
    
    setRetryCount(newRetryCount);
    setLoadingState('loading');
    
    // Forcer le rechargement de l'iframe avec un timestamp pour éviter le cache
    if (iframeRef.current) {
      const timestamp = new Date().getTime();
      const newSrc = `${cvPath}?t=${timestamp}&retry=${newRetryCount}#toolbar=1&navpanes=1&scrollbar=1`;
      iframeRef.current.src = newSrc;
    }
  }, [retryCount, cvPath]);

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
            {/* Indicateur de chargement */}
            {loadingState === 'loading' && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFC300] mx-auto mb-4"></div>
                  <p className="text-gray-300 mb-2">
                    Chargement du CV...
                    {retryCount > 0 && ` (Tentative ${retryCount + 1})`}
                  </p>
                  <p className="text-gray-500 text-xs">
                    Si le chargement prend trop de temps, utilisez les boutons ci-dessus
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-1 mt-2 max-w-xs mx-auto">
                    <div className="bg-[#FFC300] h-1 rounded-full animate-pulse" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Iframe PDF */}
            <iframe
              ref={iframeRef}
              src={`${cvPath}?init=${Date.now()}#toolbar=1&navpanes=1&scrollbar=1`}
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-lg border-2 border-gray-700"
              title="CV Damien Drozd"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="eager"
              style={{ 
                display: (loadingState === 'error' || loadingState === 'timeout') ? 'none' : 'block',
                opacity: loadingState === 'loaded' ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </div>
          
          {/* Messages d'erreur ou fallback */}
          {(loadingState === 'error' || loadingState === 'timeout') && (
            <div className="text-center p-8 bg-gray-800 rounded-lg">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-2">
                {loadingState === 'error' ? "Erreur de chargement" : "Chargement trop long"}
              </h3>
              <p className="text-gray-300 mb-4">
                {loadingState === 'error'
                  ? "Impossible d'afficher le PDF dans ce navigateur." 
                  : "Le PDF prend plus de temps que prévu à se charger."
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Bouton Retry (seulement pour timeout et moins de 3 tentatives) */}
                {loadingState === 'timeout' && retryCount < 3 && (
                  <button
                    onClick={retryLoad}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors"
                  >
                    <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Réessayer {retryCount > 0 && `(${retryCount}/3)`}
                  </button>
                )}
                
                {/* Message si trop de tentatives */}
                {loadingState === 'timeout' && retryCount >= 3 && (
                  <p className="text-gray-400 text-sm mb-4">
                    Plusieurs tentatives ont échoué. Utilisez les options ci-dessous.
                  </p>
                )}
                
                {/* Alternatives toujours disponibles */}
                <a
                  href={cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#FFC300] text-black font-semibold rounded-lg hover:bg-[#FFD60A] transition-colors"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ouvrir le CV
                </a>
                
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center px-6 py-3 bg-[#003D82] text-white font-semibold rounded-lg hover:bg-[#0056B3] transition-colors"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                  </svg>
                  Télécharger le CV
                </button>
              </div>
            </div>
          )}

          {/* Message de fallback pour les navigateurs sans JS */}
          <noscript>
            <div className="text-center p-8 bg-gray-800 rounded-lg mt-4">
              <p className="text-gray-300 mb-4">
                Votre navigateur ne supporte pas l&apos;affichage des PDF. 
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
            💡 Astuce : Utilisez les contrôles du lecteur PDF pour zoomer, naviguer entre les pages et ajuster l&apos;affichage
          </p>
        </div>
      </div>
    </div>
  );
}