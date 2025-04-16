import { educationPrompts } from "@/data/education-prompts"
import { PromptCard } from "@/components/prompt-card"

export default function AllEducationPrompts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Tous les prompts d'Éducation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  )
}
