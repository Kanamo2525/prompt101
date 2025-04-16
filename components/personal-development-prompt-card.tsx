import Link from "next/link"
import type { Prompt } from "@/types/prompt"
import { DifficultyStars } from "./difficulty-stars"

interface PersonalDevelopmentPromptCardProps {
  prompt: Prompt
}

export function PersonalDevelopmentPromptCard({ prompt }: PersonalDevelopmentPromptCardProps) {
  return (
    <Link href={`/categories/personal-development/${prompt.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{prompt.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{prompt.description}</p>
        <div className="flex justify-between items-center">
          <DifficultyStars difficulty={prompt.difficulty} />
          <span className="text-sm text-gray-500">{prompt.estimatedTime}</span>
        </div>
      </div>
    </Link>
  )
}
