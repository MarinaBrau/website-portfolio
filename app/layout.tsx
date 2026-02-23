import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamilla Freitas — Social Media & Design",
  description:
    "Especialista em social media, identidade visual e design gráfico. Transformo marcas em experiências digitais únicas.",
  keywords: [
    "social media",
    "design gráfico",
    "identidade visual",
    "marketing digital",
    "criação de conteúdo",
    "roteiro",
  ],
  openGraph: {
    title: "Kamilla Freitas — Social Media & Design",
    description:
      "Especialista em social media, identidade visual e design gráfico.",
    url: "https://kahmo.com.br",
    siteName: "kahmo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamilla Freitas — Social Media & Design",
    description:
      "Especialista em social media, identidade visual e design gráfico.",
  },
  metadataBase: new URL("https://kahmo.com.br"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
