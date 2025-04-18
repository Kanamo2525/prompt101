import type { Metadata } from "next"
import MultiPromptingClientPage from "./MultiPromptingClientPage"

export const metadata: Metadata = {
  title: "Multi-Prompting | Next-ai.fr",
  description: "Découvrez la technique du Multi-Prompting pour explorer plusieurs angles d'une même problématique",
}

export default function MultiPromptingPage() {
  return (
    <div className="bg-white">
      <MultiPromptingClientPage />
    </div>
  )
}
