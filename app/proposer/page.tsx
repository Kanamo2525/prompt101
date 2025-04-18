import type { Metadata } from "next"
import { ProposerPromptForm } from "@/components/proposer-prompt-form"

export const metadata: Metadata = {
  title: "Proposer un prompt | prompt101.fr",
  description:
    "Partagez vos prompts efficaces avec la communauté et contribuez à enrichir notre base de connaissances.",
}

export default function ProposerPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Proposer un prompt</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Partagez vos prompts efficaces avec la communauté et contribuez à enrichir notre base de connaissances.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
          <h2 className="font-medium text-amber-800 mb-2">Comment ça fonctionne ?</h2>
          <ol className="list-decimal list-inside space-y-1 text-amber-700">
            <li>Remplissez le formulaire ci-dessous en suivant le canevas de prompt</li>
            <li>Votre soumission sera examinée par notre équipe</li>
            <li>Une fois approuvé, votre prompt sera publié sur le site avec votre attribution</li>
            <li>Vous contribuez ainsi à enrichir la base de connaissances de la communauté</li>
          </ol>
        </div>

        <ProposerPromptForm />
      </div>
    </div>
  )
}
