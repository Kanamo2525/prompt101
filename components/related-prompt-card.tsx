import Link from "next/link"
import { Star } from "lucide-react"

import type { RelatedPrompt } from "@/types/prompt"

interface RelatedPromptCardProps {
  prompt: RelatedPrompt
}

export function RelatedPromptCard({ prompt }: RelatedPromptCardProps) {
  // Utiliser des classes statiques au lieu de classes dynamiques
  const getTagColorClasses = (tagColor: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      recruitment: { bg: "bg-blue-100", text: "text-blue-800" },
      onboarding: { bg: "bg-green-100", text: "text-green-800" },
      training: { bg: "bg-purple-100", text: "text-purple-800" },
      "talent-management": { bg: "bg-amber-100", text: "text-amber-800" },
      "hr-support": { bg: "bg-red-100", text: "text-red-800" },
      "hr-admin": { bg: "bg-teal-100", text: "text-teal-800" },
      wellbeing: { bg: "bg-pink-100", text: "text-pink-800" },
      "personal-development": { bg: "bg-indigo-100", text: "text-indigo-800" },
    }

    return colorMap[tagColor] || { bg: "bg-gray-100", text: "text-gray-800" }
  }

  const colorClasses = getTagColorClasses(prompt.tagColor)

  return (
    <Link href={`/categories/${prompt.tagColor}/${prompt.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className={`${colorClasses.bg} ${colorClasses.text} px-2 py-1 rounded text-xs font-medium`}>
            #{prompt.tag}
          </span>
          <div className="flex">
            {Array.from({ length: prompt.difficultyLevel }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        <h4 className="font-medium mt-2">{prompt.title}</h4>
      </div>
    </Link>
  )
}
