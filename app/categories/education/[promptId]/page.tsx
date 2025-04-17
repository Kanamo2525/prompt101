"use client"

import { useParams } from "next/navigation"
import { educationPrompts } from "@/data/education-prompts"
import { PromptDetailView } from "@/components/prompt-detail-view"

export default function EducationPromptPage() {
  const params = useParams()
  const promptId = params.promptId as string

  // Find the prompt with the matching ID
  const prompt = educationPrompts.find((p) => p.id === promptId)

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Prompt non trouvé</h1>
          <p className="mt-2 text-gray-600">Le prompt que vous recherchez n'existe pas.</p>
        </div>
      </div>
    )
  }

  return <PromptDetailView prompt={prompt} categoryId="education" />
}
