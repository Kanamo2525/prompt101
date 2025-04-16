import { personalDevelopmentPrompts } from "@/data/personal-development-prompts"
import { PromptDetailView } from "@/components/prompt-detail-view"
import { notFound } from "next/navigation"

export default function PersonalDevelopmentPromptPage({ params }: { params: { promptId: string } }) {
  const prompt = personalDevelopmentPrompts.find((p) => p.id === params.promptId)

  if (!prompt) {
    notFound()
  }

  return <PromptDetailView prompt={prompt} categoryId="personal-development" />
}

export async function generateStaticParams() {
  return personalDevelopmentPrompts.map((prompt) => ({
    promptId: prompt.id,
  }))
}
