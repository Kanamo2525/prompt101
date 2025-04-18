import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prompt101.fr | Guide des Prompts IA",
  description:
    "Découvrez comment formuler des prompts efficaces pour tirer le meilleur parti des modèles d'intelligence artificielle générative.",
  openGraph: {
    title: "Prompt101.fr | Guide des Prompts IA",
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
    title: "Prompt101.fr | Guide des Prompts IA",
    description:
      "Découvrez comment formuler des prompts efficaces pour tirer le meilleur parti des modèles d'intelligence artificielle générative.",
    images: ["/images/opengraph-image.png"],
    creator: "@prompt101fr",
  },
  metadataBase: new URL("https://prompt101.fr"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
