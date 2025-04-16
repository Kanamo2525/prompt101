"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DifficultyFilter } from "@/components/difficulty-filter"
import { talentManagementPrompts } from "@/data/talent-management-prompts"

export default function TalentManagementCategoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Filter prompts based on search and difficulty
  const filteredPrompts = talentManagementPrompts.filter(
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
      <header className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white">
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
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
            La gestion des talents et la mobilité interne sont des leviers essentiels pour fidéliser vos collaborateurs
            et optimiser les ressources humaines de votre organisation. Ces prompts vous aideront à identifier les
            compétences transférables, à construire des parcours de carrière personnalisés et à anticiper les évolutions
            de métiers pour préparer votre entreprise aux défis de demain.
          </p>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h3 className="font-medium text-amber-800 mb-2 flex items-center">
              <Lightbulb className="h-4 w-4 mr-2" />
              Conseil d'utilisation
            </h3>
            <p className="text-amber-700 text-sm">
              Ces prompts sont particulièrement efficaces lorsqu'ils sont adaptés à votre contexte d'entreprise et à vos
              référentiels de compétences. N'hésitez pas à les personnaliser en fonction de votre culture
              organisationnelle, de votre secteur d'activité et des spécificités de vos métiers.
            </p>
          </div>
        </div>

        {filteredPrompts.length > 0 ? (
          <div className="space-y-6">
            {filteredPrompts.map((prompt) => (
              <Link key={prompt.id} href={`/categories/talent-management/${prompt.id}`} className="block">
                <div className="bg-white rounded-xl overflow-hidden shadow-md border-l-4 border-amber-600 hover:shadow-lg transition-shadow">
                  <div className="bg-amber-50 p-4">
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
                      <div className="absolute top-2 right-2 text-amber-500 px-2 py-0.5 rounded-md text-xs bg-amber-50">
                        Technique RCT
                      </div>
                      <p className="text-gray-800 whitespace-pre-line pt-4 line-clamp-3">
                        {prompt.prompt.substring(0, 150)}...
                      </p>
                      <div className="mt-4 flex justify-end">
                        <Button className="flex items-center space-x-2 text-amber-600 hover:text-amber-800 px-3 py-1.5 rounded-lg border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors">
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
              className="mt-2 text-amber-600 hover:text-amber-800"
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
