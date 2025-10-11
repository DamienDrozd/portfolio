import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Damien Drozd, développeur Full Stack à Lille. Discutons de vos projets web, mobile ou data science. Formulaire de contact sécurisé et réponse rapide garantie.",
  keywords: ["contact", "Damien Drozd", "développeur", "Lille", "collaboration", "projets web", "freelance", "consultation"],
  openGraph: {
    title: "Contact | Damien Drozd - Développeur Full Stack",
    description: "Contactez-moi pour discuter de vos projets de développement web, mobile ou data science.",
    url: "https://damien-drozd.fr/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Damien Drozd",
    description: "Contactez-moi pour discuter de vos projets de développement web, mobile ou data science.",
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}