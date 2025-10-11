'use client';

export default function ResumeSection() {



  return (
    <div id="resume-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div>
        {/* Badge principal */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#FFC300] to-[#FFD60A] text-[#000814] shadow-lg">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Développeur Full Stack Certifié
          </span>
        </div>

        {/* Contenu principal */}
        <div className="bg-gradient-to-br from-[#000814] to-[#000814] rounded-2xl p-8 sm:p-10 border border-[#FFC300] shadow-2xl">
          {/* Titre animé */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Architecte de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#FFD60A]">
                Solutions Digitales
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#FFC300] to-[#FFD60A] mx-auto rounded-full"></div>
          </div>

          {/* Description avec animation */}
          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            <p className="text-center max-w-4xl mx-auto">
              <span className="text-white font-semibold">
                Développeur web Full Stack
              </span>
              , je conçois et pilote des plateformes performantes orientées
              produit. Ma passion pour l&apos;innovation me pousse à créer des
              solutions qui allient
              <span className="text-[#FFC300] font-medium">
                {" "}
                excellence technique
              </span>{" "}
              et
              <span className="text-[#FFC300] font-medium">
                {" "}
                expérience utilisateur
              </span>
              .
            </p>

            <div className="grid md:grid-cols-1 gap-8 mt-8">
              {/* Technologies */}
              <div className="bg-[#000814]/50 rounded-xl p-6 border border-[#FFC300]">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#FFC300]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  Spécialisations
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>
                      JavaScript/TypeScript (Next.js, React/React Native)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    <span>Python (FastAPI, Django/Flask)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>Architecture Cloud & DevOps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action subtil */}
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Combinant{" "}
                <span className="text-[#FFC300] font-medium">
                  formation académique
                </span>{" "}
                et
                <span className="text-[#FFC300] font-medium">
                  {" "}
                  expérience professionnelle
                </span>
                , je développe des solutions innovantes qui transforment les
                idées en réalité digitale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
