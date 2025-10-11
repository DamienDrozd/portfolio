import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets",
  description: "Découvrez mes projets personnels et professionnels : GenPulse (plateforme web), PEEL (app mobile), RetroGameCollec (collection de jeux). Technologies utilisées : Next.js, React Native, Python.",
  keywords: ["projets", "développement web", "applications mobiles", "Next.js", "React Native", "Python", "portfolio"],
  openGraph: {
    title: "Mes Projets | Damien Drozd - Développeur Full Stack",
    description: "Découvrez mes projets personnels et professionnels utilisant des technologies modernes comme Next.js et React Native.",
    url: "https://damien-drozd.fr/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mes Projets | Damien Drozd",
    description: "Découvrez mes projets personnels et professionnels utilisant des technologies modernes.",
  }
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}