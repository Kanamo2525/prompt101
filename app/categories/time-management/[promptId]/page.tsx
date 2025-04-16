import { timeManagementPrompts } from "@/data/time-management-prompts"
import { PromptDetailView } from "@/components/prompt-detail-view"
import { notFound } from "next/navigation"

export default function TimeManagementPromptPage({ params }: { params: { promptId: string } }) {
  const prompt = timeManagementPrompts.find((p) => p.id === params.promptId)

  if (!prompt) {
    notFound()
  }

  return <PromptDetailView prompt={prompt} categoryId="time-management" />
}

export async function generateStaticParams() {
  return timeManagementPrompts.map((prompt) => ({
    promptId: prompt.id,
  }))
}
