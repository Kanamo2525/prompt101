import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WebsiteJsonLd } from "@/components/json-ld"
import GoogleAnalytics from "@/components/google-analytics"
import AxeptioScript from "@/components/axeptio-script"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

// Remplacer la section metadata par celle-ci pour améliorer le SEO
export const metadata: Metadata = {
  title: "Prompt101.fr | Guide des Prompts IA en Français",
  description:
    "Découvrez comment formuler des prompts efficaces pour ChatGPT, Gemini et autres IA génératives. Techniques, exemples et conseils pour maîtriser l'art du prompting.",
  keywords:
    "prompt engineering, IA générative, ChatGPT, prompts efficaces, intelligence artificielle, guide prompting, techniques IA, prompt101",
  authors: [{ name: "Kristy Anamoutou" }],
  creator: "Kristy Anamoutou",
  publisher: "prompt101.fr",
  openGraph: {
    title: "Prompt101.fr | Guide des Prompts IA en Français",
    description:
      "Découvrez comment formuler des prompts efficaces pour tirer le meilleur parti des modèles d'intelligence artificielle générative.",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Prompt101.fr - Guide des Prompts IA",
      },
    ],
    locale: "fr_FR",
    type: "website",
    siteName: "Prompt101.fr",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt101.fr | Guide des Prompts IA en Français",
    description:
      "Découvrez comment formuler des prompts efficaces pour tirer le meilleur parti des modèles d'intelligence artificielle générative.",
    images: ["/images/opengraph-image.png"],
    creator: "@prompt101fr",
  },
  metadataBase: new URL("https://prompt101.fr"),
  alternates: {
    canonical: "https://prompt101.fr",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <WebsiteJsonLd />
        <AxeptioScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <GoogleAnalytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
