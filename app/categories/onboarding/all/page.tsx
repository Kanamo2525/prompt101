"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { OnboardingPromptCard } from "@/components/onboarding-prompt-card"
import { onboardingPrompts } from "@/data/onboarding-prompts"

export default function AllOnboardingPromptsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Onboarding et intégration</h1>
              <p className="mt-2 text-xl">
                Prompts pour optimiser l'accueil et l'intégration de vos nouveaux collaborateurs
              </p>
            </div>
            <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Link href="/catalogue" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour au catalogue
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 mb-4">À propos de cette catégorie</h2>
          <p className="text-gray-600 mb-4">
            L'onboarding est une étape cruciale qui détermine souvent le succès à long terme d'un recrutement. Ces
            prompts vous aideront à créer des documents personnalisés, des programmes d'intégration adaptés et des
            outils de suivi efficaces pour optimiser l'expérience d'intégration de vos nouveaux collaborateurs.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-medium text-green-800 mb-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Conseil d'utilisation
            </h3>
            <p className="text-green-700 text-sm">
              Pour des résultats optimaux, personnalisez ces prompts en fonction de votre culture d'entreprise, de votre
              secteur d'activité et des spécificités du poste concerné. N'hésitez pas à combiner plusieurs prompts pour
              créer un parcours d'intégration complet.
            </p>
          </div>
        </div>

        {onboardingPrompts.map((prompt) => (
          <OnboardingPromptCard
            key={prompt.id}
            id={prompt.id}
            title={prompt.title}
            description={prompt.description}
            prompt={prompt.prompt}
            example={prompt.example}
            difficulty={prompt.difficulty}
            tips={prompt.tips}
          />
        ))}

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/catalogue">Retour au catalogue complet</Link>
          </Button>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Votre Groupe Industriel. Guide des prompts IA pour les RH.
          </p>
        </div>
      </footer>
    </div>
  )
}
