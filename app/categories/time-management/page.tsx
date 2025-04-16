"use client"

import { useState } from "react"
import { timeManagementPrompts } from "@/data/time-management-prompts"
import Link from "next/link"
import { DifficultyFilter } from "@/components/difficulty-filter"
import { TimeManagementPromptCard } from "@/components/time-management-prompt-card"

export default function TimeManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)

  // Category data
  const category = {
    id: "time-management",
    title: "Gestion du temps",
    color: "purple",
    description: "Prompts pour optimiser votre temps et augmenter votre productivité au quotidien.",
    icon: "⏰",
  }

  // Filter prompts based on search and difficulty
  const filteredPrompts = timeManagementPrompts.filter(
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
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold leading-tight">
                {category.icon} {category.title}
              </h1>
              <p className="mt-2 text-lg">{category.description}</p>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link
                href="/categories/time-management/all"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Voir tous les prompts
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Rechercher un prompt..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <DifficultyFilter
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
              color={category.color}
            />
          </div>

          {filteredPrompts.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun prompt trouvé</h3>
              <p className="mt-1 text-sm text-gray-500">Essayez d'ajuster vos critères de recherche.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPrompts.map((prompt) => (
                <TimeManagementPromptCard key={prompt.id} prompt={prompt} category={category} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
