"use client"

import Link from "next/link"
import { ArrowLeft, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { TalentManagementPromptCard } from "@/components/talent-management-prompt-card"
import { talentManagementPrompts } from "@/data/talent-management-prompts"

export default function AllTalentManagementPromptsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Gestion des talents et mobilité interne</h1>
              <p className="mt-2 text-xl">
                Prompts pour identifier et développer vos talents internes et faciliter la mobilité professionnelle
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
            La gestion des talents et la mobilité interne sont des leviers essentiels pour fidéliser vos collaborateurs
            et optimiser les ressources humaines de votre organisation. Ces prompts vous aideront à identifier les
            compétences transférables, à construire des parcours de carrière personnalisés et à anticiper les évolutions
            de métiers pour préparer votre entreprise aux défis de demain.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-medium text-amber-800 mb-2 flex items-center">
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
            <p className="text-amber-700 text-sm">
              Ces prompts sont particulièrement efficaces lorsqu'ils sont adaptés à votre contexte d'entreprise et à vos
              référentiels de compétences. N'hésitez pas à les personnaliser en fonction de votre culture
              organisationnelle, de votre secteur d'activité et des spécificités de vos métiers.
            </p>
          </div>
        </div>

        {talentManagementPrompts.map((prompt) => (
          <TalentManagementPromptCard
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

        <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-200 flex items-start">
          <TrendingUp className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-indigo-800 mb-1">Pour aller plus loin</h3>
            <p className="text-indigo-700 text-sm">
              Ces prompts sont particulièrement efficaces lorsqu'ils sont adaptés à votre contexte d'entreprise et à vos
              référentiels de compétences. N'hésitez pas à les personnaliser en fonction de votre culture
              organisationnelle, de votre secteur d'activité et des spécificités de vos métiers.
            </p>
          </div>
        </div>

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
