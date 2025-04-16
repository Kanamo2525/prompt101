"use client"

import Link from "next/link"
import { ArrowLeft, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RecruitmentPromptCard } from "@/components/recruitment-prompt-card"
import { recruitmentPrompts } from "@/data/recruitment-prompts"

export default function AllRecruitmentPromptsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Recrutement et acquisition des talents</h1>
              <p className="mt-2 text-xl">
                Prompts pour optimiser vos processus de recrutement, de la rédaction d'offres à la sélection de
                candidats
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
            Le recrutement et l'acquisition des talents sont des processus clés pour assurer la croissance et la
            compétitivité de votre entreprise. Ces prompts vous aideront à optimiser chaque étape du processus de
            recrutement, de la rédaction d'offres d'emploi attractives à la communication avec les candidats, en passant
            par la préparation d'entretiens efficaces et le sourcing de profils adaptés à vos besoins.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2 flex items-center">
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
            <p className="text-blue-700 text-sm">
              Pour des résultats optimaux, personnalisez ces prompts en fonction de votre secteur d'activité, de votre
              culture d'entreprise et des spécificités du poste à pourvoir. N'hésitez pas à combiner plusieurs prompts
              pour créer un processus de recrutement complet et cohérent.
            </p>
          </div>
        </div>

        {recruitmentPrompts.map((prompt) => (
          <RecruitmentPromptCard
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
          <Users className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-indigo-800 mb-1">Pour aller plus loin</h3>
            <p className="text-indigo-700 text-sm">
              Ces prompts sont particulièrement efficaces lorsqu'ils sont intégrés dans une stratégie de recrutement
              globale. Utilisez-les comme point de départ et affinez-les en fonction des retours que vous obtenez et des
              spécificités de votre marché de l'emploi.
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
