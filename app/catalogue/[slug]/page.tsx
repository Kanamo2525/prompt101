import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PromptPageProps {
  params: {
    slug: string
  }
}

export default function PromptPage({ params }: PromptPageProps) {
  // Convertir le slug en titre plus lisible
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/catalogue" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au catalogue
        </Link>
      </div>

      <Card className="w-full max-w-4xl mx-auto overflow-hidden">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-6">
            <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Prompt <span className="text-blue-600 dark:text-blue-400">{title}</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Ce prompt sera bientôt disponible. Nous travaillons actuellement à l'optimiser pour vous offrir les
            meilleurs résultats possibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/proposer">Proposer une amélioration</Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              Être notifié
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Optimisation continue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nos prompts sont régulièrement mis à jour pour s'adapter aux évolutions des modèles d'IA.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Exemples d'utilisation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Des cas concrets pour vous aider à comprendre comment utiliser ce prompt efficacement.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Variations disponibles</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Plusieurs versions adaptées à différents contextes et besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
