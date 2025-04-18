import type { Metadata } from "next"
import { PromptModeration } from "@/components/prompt-moderation"

export const metadata: Metadata = {
  title: "Modération des prompts | prompt101.fr",
  description: "Interface d'administration pour modérer les prompts soumis par les utilisateurs.",
}

export default function AdminPromptsPage() {
  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Modération des prompts</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Examinez et approuvez les prompts soumis par les utilisateurs.
        </p>

        <PromptModeration />
      </div>
    </div>
  )
}
