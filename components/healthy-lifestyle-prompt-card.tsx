import Link from "next/link"
import type { Prompt } from "@/types/prompt"
import { DifficultyStars } from "./difficulty-stars"

interface HealthyLifestylePromptCardProps {
  prompt: Prompt
}

export function HealthyLifestylePromptCard({ prompt }: HealthyLifestylePromptCardProps) {
  return (
    <Link href={`/categories/healthy-lifestyle/${prompt.id}`}>
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
