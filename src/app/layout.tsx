import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Damien Drozd - Développeur Full Stack",
    template: "%s | Damien Drozd - Développeur Full Stack"
  },
  description: "Portfolio de Damien Drozd, développeur Full Stack spécialisé en React, Next.js, React Native et Python. Découvrez mes projets et expériences professionnelles.",
  keywords: ["Damien Drozd", "développeur", "full stack", "React", "Next.js", "React Native", "Python", "FastAPI", "portfolio", "Lille"],
  authors: [{ name: "Damien Drozd" }],
  creator: "Damien Drozd",
  publisher: "Damien Drozd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://damien-drozd.fr",
    title: "Damien Drozd - Développeur Full Stack",
    description: "Portfolio de Damien Drozd, développeur Full Stack spécialisé en React, Next.js, React Native et Python.",
    siteName: "Portfolio Damien Drozd",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damien Drozd - Développeur Full Stack",
    description: "Portfolio de Damien Drozd, développeur Full Stack spécialisé en React, Next.js, React Native et Python.",
  },
  metadataBase: new URL("https://damien-drozd.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFC300" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Damien Drozd" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className}`}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
