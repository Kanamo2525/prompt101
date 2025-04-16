"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Link from "next/link"

import { Input } from "@/components/ui/input"
import { DifficultyFilter } from "@/components/difficulty-filter"

export default function CataloguePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Hardcoded categories for the catalogue page
  const categories = [
    {
      id: "personal-development",
      title: "Développement personnel",
      color: "border-blue-600",
      description: "Prompts pour vous aider à progresser dans votre vie personnelle et professionnelle.",
      promptCount: 12,
    },
    {
      id: "education",
      title: "Éducation",
      color: "border-green-600",
      description: "Prompts pour améliorer votre apprentissage et développer de nouvelles compétences.",
      promptCount: 15,
    },
    {
      id: "time-management",
      title: "Gestion du temps",
      color: "border-purple-600",
      description: "Prompts pour optimiser votre temps et augmenter votre productivité au quotidien.",
      promptCount: 15,
    },
    {
      id: "healthy-lifestyle",
      title: "Mode de vie sain",
      color: "border-amber-600",
      description: "Prompts pour améliorer votre santé physique et mentale au quotidien.",
      promptCount: 17,
    },
  ]

  // Filter categories based on selected category
  const filteredCategories = selectedCategory
    ? categories.filter((category) => category.id === selectedCategory)
    : categories

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Catalogue de Prompts IA</h1>
              <p className="mt-1 text-gray-600">
                Optimisez votre utilisation de l'intelligence artificielle générative
              </p>
            </div>
            <div className="mt-4 md:mt-0 relative rounded-md shadow-sm max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                placeholder="Rechercher un prompt..."
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <DifficultyFilter selectedDifficulty={selectedDifficulty} onChange={setSelectedDifficulty} />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 text-sm rounded-full ${
                  selectedCategory === null ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Toutes les catégories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {filteredCategories.length > 0 ? (
          <>
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {selectedCategory === null
                  ? "Explorez nos thématiques de prompts"
                  : `Prompts de ${categories.find((c) => c.id === selectedCategory)?.title}`}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category) => (
                  <Link key={category.id} href={`/categories/${category.id}`} className="block h-full">
                    <div className={`h-full rounded-xl shadow-md overflow-hidden border-l-4 ${category.color}`}>
                      <div className="bg-white p-5 h-full flex flex-col">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className={getCategoryBgClass(category.id)}>{getCategoryIcon(category.id)}</div>
                            <h3 className="font-bold text-lg text-gray-800">{category.title}</h3>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-gray-500">{category.promptCount} prompts</span>
                          </div>
                        </div>
                        <p className="mt-2 text-gray-600 text-sm flex-grow">{category.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#exemple</span>
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#modèle</span>
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">#template</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">Aucun résultat trouvé pour "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setSelectedDifficulty(null)
                setSelectedCategory(null)
              }}
              className="mt-2 text-orange-600 hover:text-orange-800"
            >
              Effacer la recherche
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">© 2025 Next-ai.fr. Guide des prompts IA.</p>
        </div>
      </footer>
    </div>
  )
}

// Helper function to get category icon
function getCategoryIcon(categoryId: string) {
  switch (categoryId) {
    case "personal-development":
      return <div className="w-5 h-5 text-blue-600">⭐</div>
    case "education":
      return <div className="w-5 h-5 text-green-600">📚</div>
    case "time-management":
      return <div className="w-5 h-5 text-purple-600">⏰</div>
    case "healthy-lifestyle":
      return <div className="w-5 h-5 text-amber-600">💪</div>
    default:
      return <div className="w-5 h-5 text-gray-600">📝</div>
  }
}

// Helper function to get category background class
function getCategoryBgClass(categoryId: string) {
  switch (categoryId) {
    case "personal-development":
      return "p-2 rounded-lg bg-blue-100"
    case "education":
      return "p-2 rounded-lg bg-green-100"
    case "time-management":
      return "p-2 rounded-lg bg-purple-100"
    case "healthy-lifestyle":
      return "p-2 rounded-lg bg-amber-100"
    default:
      return "p-2 rounded-lg bg-gray-100"
  }
}
