import type { PromptVariant } from "@/types/prompt"

interface PromptVariantCardProps {
  variant: PromptVariant
}

export function PromptVariantCard({ variant }: PromptVariantCardProps) {
  return (
    <button className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
      <p className="font-medium text-gray-800">{variant.title}</p>
      <p className="text-sm text-gray-500 mt-1">{variant.description}</p>
    </button>
  )
}
