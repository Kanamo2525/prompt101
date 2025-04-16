"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DifficultyFilter } from "@/components/difficulty-filter"

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Hardcoded category data
  const getCategoryData = (id: string) => {
    const categories = {
      recruitment: {
        id: "recruitment",
        title: "Recrutement et acquisition de talents",
        color: "blue",
        description:
          "Prompts pour optimiser vos processus de recrutement, de la rédaction d'offres à la sélection de candidats.",
        icon: "👥",
      },
      onboarding: {
        id: "onboarding",
        title: "Onboarding et intégration",
        color: "green",
        description:
          "Prompts pour créer des programmes d'intégration efficaces et personnalisés pour vos nouveaux collaborateurs.",
        icon: "🚀",
      },
      training: {
        id: "training",
        title: "Formation et développement des compétences",
        color: "purple",
        description:
          "Prompts pour créer et optimiser vos programmes de formation et développer les compétences de vos équipes.",
        icon: "📚",
      },
      "talent-management": {
        id: "talent-management",
        title: "Gestion des talents et mobilité interne",
        color: "amber",
        description:
          "Prompts pour identifier et développer vos talents internes et faciliter la mobilité professionnelle.",
        icon: "🏆",
      },
      "hr-support": {
        id: "hr-support",
        title: "Support RH et relations collaborateurs",
        color: "red",
        description: "Prompts pour améliorer la communication interne et le support aux collaborateurs.",
        icon: "📋",
      },
      "hr-admin": {
        id: "hr-admin",
        title: "Administration et processus RH",
        color: "teal",
        description: "Prompts pour optimiser vos processus administratifs RH et améliorer votre reporting.",
        icon: "💼",
      },
    }

    return categories[id as keyof typeof categories] || null
  }

  const category = getCategoryData(params.categoryId)

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Catégorie non trouvée</h1>
          <p className="text-gray-600 mb-6">La catégorie que vous recherchez n'existe pas ou a été déplacée.</p>
          <Button asChild>
            <Link href="/catalogue">Retour au catalogue</Link>
          </Button>
        </div>
      </div>
    )
  }

  // Hardcoded prompts for this category
  const prompts = [
    {
      id: `${category.id}-1`,
      title: `Exemple de prompt ${category.title}`,
      description: "Description du prompt",
      difficulty: "Facile",
      difficultyLevel: 1,
      technique: "RCT",
    },
    {
      id: `${category.id}-2`,
      title: `Autre prompt ${category.title}`,
      description: "Description du prompt",
      difficulty: "Modéré",
      difficultyLevel: 2,
      technique: "Contraintes",
    },
    {
      id: `${category.id}-3`,
      title: `Prompt avancé ${category.title}`,
      description: "Description du prompt",
      difficulty: "Complexe",
      difficultyLevel: 3,
      technique: "Expertise",
    },
  ]

  // Filter prompts based on search and difficulty
  const filteredPrompts = prompts.filter(
    (prompt) =>
      (searchQuery === "" ||
        prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedDifficulty === null || prompt.difficulty === selectedDifficulty),
  )

  // Get gradient class based on category color
  const getGradientClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "from-blue-600 to-blue-500",
      green: "from-green-600 to-green-500",
      purple: "from-purple-600 to-purple-500",
      amber: "from-amber-600 to-amber-500",
      red: "from-red-600 to-red-500",
      teal: "from-teal-600 to-teal-500",
    }
    return colorMap[color] || "from-orange-600 to-orange-500"
  }

  // Get border color class based on category color
  const getBorderClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "border-blue-600",
      green: "border-green-600",
      purple: "border-purple-600",
      amber: "border-amber-600",
      red: "border-red-600",
      teal: "border-teal-600",
    }
    return colorMap[color] || "border-orange-600"
  }

  // Get background color class based on category color
  const getBgClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "bg-blue-50",
      green: "bg-green-50",
      purple: "bg-purple-50",
      amber: "bg-amber-50",
      red: "bg-red-50",
      teal: "bg-teal-50",
    }
    return colorMap[color] || "bg-orange-50"
  }

  // Get text color class based on category color
  const getTextClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-500",
      green: "text-green-500",
      purple: "text-purple-500",
      amber: "text-amber-500",
      red: "text-red-500",
      teal: "text-teal-500",
    }
    return colorMap[color] || "text-orange-500"
  }

  // Get button color classes based on category color
  const getButtonClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; hover: string }> = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-100",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:bg-red-100",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:bg-teal-100",
      },
    }
    return (
      colorMap[color] || {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
      }
    )
  }

  const gradientClass = getGradientClass(category.color)
  const buttonClasses = getButtonClasses(category.color)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`bg-gradient-to-r ${gradientClass} text-white`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{category.title}</h1>
              <p className="mt-2 text-xl">{category.description}</p>
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
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Rechercher un prompt..."
            />
          </div>
          <div className="mt-4 md:mt-0">
            <DifficultyFilter selectedDifficulty={selectedDifficulty} onChange={setSelectedDifficulty} />
          </div>
        </div>

        {filteredPrompts.length > 0 ? (
          <div className="space-y-6">
            {filteredPrompts.map((prompt) => (
              <Link key={prompt.id} href={`/categories/${category.id}/${prompt.id}`} className="block">
                <div
                  className={`bg-white rounded-xl overflow-hidden shadow-md border-l-4 ${getBorderClass(category.color)} hover:shadow-lg transition-shadow`}
                >
                  <div className={`${getBgClass(category.color)} p-4`}>
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-gray-800">{prompt.title}</h3>
                      <div className="flex">
                        {Array.from({ length: prompt.difficultyLevel }).map((_, i) => (
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
                      <div
                        className={`absolute top-2 right-2 ${getTextClass(category.color)} px-2 py-0.5 rounded-md text-xs ${getBgClass(category.color)}`}
                      >
                        {prompt.technique}
                      </div>
                      <p className="text-gray-800 whitespace-pre-line pt-4 line-clamp-3">
                        Exemple de texte du prompt pour {category.title}...
                      </p>
                      <div className="mt-4 flex justify-end">
                        <Button
                          className={`flex items-center space-x-2 ${buttonClasses.text} hover:${buttonClasses.text} px-3 py-1.5 rounded-lg border ${buttonClasses.border} ${buttonClasses.bg} ${buttonClasses.hover} transition-colors`}
                        >
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
              className="mt-2 text-orange-600 hover:text-orange-800"
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
