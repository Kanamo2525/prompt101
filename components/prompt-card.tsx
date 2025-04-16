import Link from "next/link"

import type { Prompt } from "@/types/prompt"
import { DifficultyStars } from "@/components/difficulty-stars"

interface PromptCardProps {
  prompt: Prompt
  categoryId?: string
}

export function PromptCard({ prompt, categoryId }: PromptCardProps) {
  return (
    <Link href={categoryId ? `/categories/${categoryId}/${prompt.id}` : `/prompts/${prompt.id}`}>
      <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <p className="text-gray-800 font-medium">{prompt.text}</p>
          <DifficultyStars level={prompt.difficulty} />
        </div>

        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-gray-500">ID: {prompt.id}</span>
          <span className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full">{prompt.technique}</span>
        </div>
      </div>
    </Link>
  )
}
