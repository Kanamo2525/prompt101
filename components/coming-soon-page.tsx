import Link from "next/link"
import { ArrowLeft, Clock, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ComingSoonPageProps {
  categoryName: string
  categoryDescription?: string
}

export function ComingSoonPage({ categoryName, categoryDescription }: ComingSoonPageProps) {
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
            Prompts <span className="text-blue-600 dark:text-blue-400">{categoryName}</span> à venir
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {categoryDescription ||
              `Notre collection de prompts pour la catégorie "${categoryName}" sera bientôt disponible. 
              Nous travaillons actuellement à sélectionner et optimiser les meilleurs prompts pour vous offrir 
              des résultats exceptionnels.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/proposer">Proposer un prompt</Link>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Être notifié
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Sélection rigoureuse</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Chaque prompt est soigneusement testé et validé par notre équipe d'experts.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Optimisation continue</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Nos prompts sont régulièrement mis à jour pour s'adapter aux évolutions des modèles d'IA.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Cas d'usage concrets</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Des exemples pratiques pour vous aider à tirer le meilleur parti de chaque prompt.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
