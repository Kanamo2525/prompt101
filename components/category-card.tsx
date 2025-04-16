"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

import { PromptCard } from "@/components/prompt-card"
import type { Category } from "@/types/category"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`h-full rounded-xl shadow-md overflow-hidden border-l-4 ${category.color}`}>
      <div className="bg-white p-5 cursor-pointer h-full flex flex-col" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${category.color.replace("border-", "bg-").replace("-600", "-100")}`}>
              {category.icon}
            </div>
            <h3 className="font-bold text-lg text-gray-800">{category.title}</h3>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">{category.prompts.length} prompts</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
        <p className="mt-2 text-gray-600 text-sm flex-grow">{category.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {category.prompts.slice(0, 3).map((prompt, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              #{prompt.id.split("-")[0]}
            </span>
          ))}
          {category.prompts.length > 3 && (
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">+{category.prompts.length - 3}</span>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="bg-gray-50 p-4">
          <div className="grid grid-cols-1 gap-4">
            {category.prompts.map((prompt) => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link
              href={`/categories/${category.id}`}
              className="text-sm text-orange-600 hover:text-orange-800 font-medium"
            >
              Voir tous les prompts de cette catégorie
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
