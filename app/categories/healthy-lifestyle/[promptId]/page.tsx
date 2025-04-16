import { healthyLifestylePrompts } from "@/data/healthy-lifestyle-prompts"
import { PromptDetailView } from "@/components/prompt-detail-view"
import { notFound } from "next/navigation"

export default function HealthyLifestylePromptPage({ params }: { params: { promptId: string } }) {
  const prompt = healthyLifestylePrompts.find((p) => p.id === params.promptId)

  if (!prompt) {
    notFound()
  }

  return <PromptDetailView prompt={prompt} categoryId="healthy-lifestyle" />
}

export async function generateStaticParams() {
  return healthyLifestylePrompts.map((prompt) => ({
    promptId: prompt.id,
  }))
}
