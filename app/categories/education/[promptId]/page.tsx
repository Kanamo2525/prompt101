import { notFound } from "next/navigation"
import { findPromptById } from "@/lib/prompts"
import { PromptDetailView } from "@/components/prompt-detail-view"

interface EducationPromptPageProps {
  params: {
    promptId: string
  }
}

export default function EducationPromptPage({ params }: EducationPromptPageProps) {
  const prompt = findPromptById(params.promptId)

  if (!prompt) {
    notFound()
  }

  return <PromptDetailView prompt={prompt} categoryId="education" />
}
