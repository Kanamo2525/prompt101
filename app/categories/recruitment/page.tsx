"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DifficultyFilter } from "@/components/difficulty-filter"
import { recruitmentPrompts } from "@/data/recruitment-prompts"

export default function RecruitmentCategoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Filter prompts based on search and difficulty
  const filteredPrompts = recruitmentPrompts.filter(
    (prompt) =>
      (searchQuery === "" ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDifficulty === null ||
        (selectedDifficulty === "Facile" && prompt.difficulty === 1) ||
        (selectedDifficulty === "Modéré" && prompt.difficulty === 2) ||
        (selectedDifficulty === "Complexe" && prompt.difficulty === 3)),
  )

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

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="relative rounded-md shadow-sm max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Rechercher un prompt..."
            />
          </div>
          <div className="mt-4 md:mt-0">
            <DifficultyFilter selectedDifficulty={selectedDifficulty} onChange={setSelectedDifficulty} />
          </div>
        </div>

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
              <Lightbulb className="h-4 w-4 mr-2" />
              Conseil d'utilisation
            </h3>
            <p className="text-blue-700 text-sm">
              Pour des résultats optimaux, personnalisez ces prompts en fonction de votre secteur d'activité, de votre
              culture d'entreprise et des spécificités du poste à pourvoir. N'hésitez pas à combiner plusieurs prompts
              pour créer un processus de recrutement complet et cohérent.
            </p>
          </div>
        </div>

        {filteredPrompts.length > 0 ? (
          <div className="space-y-6">
            {filteredPrompts.map((prompt) => (
              <Link key={prompt.id} href={`/categories/recruitment/${prompt.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-50 p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-gray-800">{prompt.title}</h3>
                      <div className="flex">
                        {Array.from({ length: prompt.difficulty }).map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{prompt.description}</p>
                  </div>

                  <div className="p-4 border-t border-gray-200">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                      <div className="absolute top-2 right-2 text-blue-500 px-2 py-0.5 rounded-md text-xs bg-blue-50">
                        Technique RCT
                      </div>
                      <p className="text-gray-800 whitespace-pre-line pt-4 line-clamp-3">
                        {prompt.prompt.substring(0, 150)}...
                      </p>
                      <div className="mt-4 flex justify-end">
                        <Button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors">
                          <Lightbulb className="h-4 w-4" />
                          <span>Voir le détail</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Aucun résultat trouvé pour "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedDifficulty(null)
              }}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              Effacer la recherche
            </button>
          </div>
        )}
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
