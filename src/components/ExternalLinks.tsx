'use client';

interface ExternalLinksProps {
  githubUrl?: string;
  liveUrl?: string;
  companyUrl?: string;
  projectUrl?: string;
  title?: string;
}

export default function ExternalLinks({ 
  githubUrl, 
  liveUrl, 
  companyUrl, 
  projectUrl, 
  title 
}: ExternalLinksProps) {
  const hasLinks = githubUrl || liveUrl || companyUrl || projectUrl;
  
  if (!hasLinks) return null;

  return (
    <div className="bg-[#000814] border border-[#FFC300] rounded-lg p-8 mb-8">
      <h2 className="text-[#FFC300] text-2xl font-bold mb-6">
        {title || "Liens externes"}
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Lien vers le site/application */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#FFC300] text-black font-semibold rounded-lg hover:bg-[#FFD60A] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Visiter le site
          </a>
        )}

        {/* Lien vers le GitHub */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#003D82] text-white font-semibold rounded-lg hover:bg-[#0056B3] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code source
          </a>
        )}

        {/* Lien vers l'entreprise */}
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#003566] text-white font-semibold rounded-lg hover:bg-[#004578] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Site de l&apos;entreprise
          </a>
        )}

        {/* Lien vers le projet spécifique */}
        {projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#6A4C93] text-white font-semibold rounded-lg hover:bg-[#7E5BA6] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Voir le projet
          </a>
        )}
      </div>
    </div>
  );
}