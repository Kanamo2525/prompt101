import Link from "next/link"
import { Star } from "lucide-react"

import type { Prompt } from "@/types/prompt"

interface PromptPreviewCardProps {
  prompt: Prompt
  categoryId: string
  categoryColor: string
}

export function PromptPreviewCard({ prompt, categoryId, categoryColor }: PromptPreviewCardProps) {
  const bgColor = categoryColor.replace("border-", "bg-").replace("-600", "-50")
  const borderColor = categoryColor

  return (
    <Link href={`/categories/${categoryId}/${prompt.id}`}>
      <div
        className={`bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow border-l-4 ${borderColor} h-full flex flex-col`}
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-gray-800">{prompt.title}</h3>
          <div className="flex">
            {Array.from({ length: prompt.difficultyLevel || 1 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            {Array.from({ length: 3 - (prompt.difficultyLevel || 1) }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 text-sm flex-grow">{prompt.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className={`${bgColor} px-2 py-1 rounded-md text-xs font-medium`}>
            {prompt.technique || "Technique RCT"}
          </span>
          <span className="text-xs text-gray-500">ID: {prompt.id}</span>
        </div>
      </div>
    </Link>
  )
}
