import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import GlassmorphicMenu from "@/components/glassmorphic-menu"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next-ai.fr - Plateforme de prompts IA",
  description: "Découvrez des prompts optimisés pour l'IA générative",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
          {children}
          <GlassmorphicMenu />
          <Footer />
        </main>
      </body>
    </html>
  )
}
