import { timeManagementPrompts } from "@/data/time-management-prompts"
import { PromptCard } from "@/components/prompt-card"

export default function AllTimeManagementPrompts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Tous les prompts de Gestion du Temps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {timeManagementPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  )
}
