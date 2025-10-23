import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - Damien Drozd, Développeur Web Freelance à Montpellier",
  description: "Découvrez le parcours de Damien Drozd, développeur web freelance basé à Montpellier. Spécialisé en React, Next.js, React Native et Python. Diplômé de Paris Ynov Campus, expert en création d'applications web modernes.",
  keywords: [
    "à propos Damien Drozd", "développeur web Montpellier", "parcours développeur",
    "formation développeur web", "Paris Ynov Campus", "freelance Montpellier",
    "expert React", "spécialiste Next.js", "développeur Python",
    "biographie développeur", "compétences développement web"
  ],
  openGraph: {
    title: "À propos - Damien Drozd, Développeur Web Freelance à Montpellier",
    description: "Découvrez le parcours de Damien Drozd, développeur web freelance basé à Montpellier. Expert en React, Next.js et Python.",
  },
  alternates: {
    canonical: "https://damien-drozd.fr/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#000814] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16 mt-32">
        {/* Header optimisé SEO */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC300] to-[#FFD60A] mb-6">
            À propos de Damien Drozd
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Développeur web freelance passionné, spécialisé dans la création
            d'applications web modernes et performantes avec React, Next.js et
            Python.
          </p>
        </header>

        {/* Section principale avec contenu SEO */}
        <main className="space-y-12">
          {/* Présentation personnelle */}
          <section>
            <h2 className="text-3xl font-bold text-[#FFC300] mb-6">
              Mon parcours de développeur web
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Basé à <strong>Montpellier</strong>, je suis un{" "}
                <strong>développeur web freelance</strong> passionné par les
                technologies modernes et l&apos;innovation digitale. Fort
                d&apos;une formation solide et d&apos;une expérience pratique
                acquise en alternance, je me spécialise dans le{" "}
                <strong>développement d&apos;applications web</strong>
                performantes et l&apos;<strong>optimisation SEO</strong>.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Mon expertise couvre l&apos;ensemble de la stack technique
                moderne : <strong>React</strong> et <strong>Next.js</strong>{" "}
                pour le frontend,
                <strong>React Native</strong> pour le mobile, et{" "}
                <strong>Python</strong> avec <strong>FastAPI</strong> et{" "}
                <strong>Django</strong> pour le backend. Cette polyvalence me
                permet d&apos;accompagner mes clients sur tous les aspects de
                leurs projets digitaux.
              </p>
            </div>
          </section>

          {/* Formation et compétences */}
          <section>
            <h2 className="text-3xl font-bold text-[#FFC300] mb-6">
              Formation et expertise technique
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Formation académique
                </h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-[#FFC300] pl-4">
                    <h4 className="font-semibold text-white">
                      Mastère Informatique (2025)
                    </h4>
                    <p className="text-gray-300">
                      Paris Ynov Campus - Spécialisation développement web et
                      mobile
                    </p>
                  </div>
                  <div className="border-l-4 border-[#FFC300] pl-4">
                    <h4 className="font-semibold text-white">
                      Bachelor Informatique (2023)
                    </h4>
                    <p className="text-gray-300">
                      Paris Ynov Campus - Fondamentaux du développement
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Technologies maîtrisées
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#FFC300] mb-2">
                      Frontend & Mobile
                    </h4>
                    <p className="text-gray-300">
                      React, Next.js, React Native, TypeScript, JavaScript,
                      Tailwind CSS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFC300] mb-2">
                      Backend & API
                    </h4>
                    <p className="text-gray-300">
                      Python, FastAPI, Django, Node.js, PostgreSQL, MongoDB
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFC300] mb-2">
                      DevOps & Cloud
                    </h4>
                    <p className="text-gray-300">
                      Docker, AWS, Vercel, GitHub Actions, CI/CD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services freelance */}
          <section>
            <h2 className="text-3xl font-bold text-[#FFC300] mb-6">
              Services de développement web
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#001122] rounded-lg p-6 border border-[#FFC300]/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Applications Web
                </h3>
                <p className="text-gray-300">
                  Création d&apos;<strong>applications web modernes</strong>{" "}
                  avec React et Next.js. Interface utilisateur optimisée,
                  performance maximale et <strong>SEO technique</strong>{" "}
                  intégré.
                </p>
              </div>
              <div className="bg-[#001122] rounded-lg p-6 border border-[#FFC300]/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Applications Mobile
                </h3>
                <p className="text-gray-300">
                  Développement d&apos;
                  <strong>applications mobiles cross-platform</strong> avec
                  React Native. Une seule codebase pour iOS et Android,
                  maintenance simplifiée.
                </p>
              </div>
              <div className="bg-[#001122] rounded-lg p-6 border border-[#FFC300]/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  APIs & Backend
                </h3>
                <p className="text-gray-300">
                  Conception d&apos;<strong>APIs REST performantes</strong> avec
                  Python FastAPI. Architecture scalable, documentation
                  automatique et sécurité renforcée.
                </p>
              </div>
            </div>
          </section>

          {/* Approche et valeurs */}
          <section>
            <h2 className="text-3xl font-bold text-[#FFC300] mb-6">
              Mon approche du développement web
            </h2>
            <div className="bg-gradient-to-br from-[#001122] to-[#000814] rounded-lg p-8 border border-[#FFC300]/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Qualité & Performance
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Code propre et maintenable</li>
                    <li>• Tests automatisés</li>
                    <li>• Optimisation des performances</li>
                    <li>• Respect des bonnes pratiques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Collaboration & Communication
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Méthodologie Agile</li>
                    <li>• Communication transparente</li>
                    <li>• Livraisons itératives</li>
                    <li>• Support et maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact et localisation */}
          <section>
            <h2 className="text-3xl font-bold text-[#FFC300] mb-6">
              Disponibilité et contact
            </h2>
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                <strong>Basé à Montpellier</strong>, je travaille avec des clients
                partout en <strong>France et en Europe</strong>. Disponible en{" "}
                <strong>remote</strong> ou sur site selon vos besoins.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Freelance disponible pour des <strong>missions courtes</strong>{" "}
                ou des <strong>projets longs termes</strong>. N&apos;hésitez pas
                à me contacter pour discuter de votre projet de développement
                web.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block bg-[#FFC300] text-[#000814] px-4 py-2 rounded-full font-semibold">
                  Développeur Web Freelance
                </span>
                <span className="inline-block bg-[#FFC300] text-[#000814] px-4 py-2 rounded-full font-semibold">
                  Expert React & Next.js
                </span>
                <span className="inline-block bg-[#FFC300] text-[#000814] px-4 py-2 rounded-full font-semibold">
                  Basé à Montpellier
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}