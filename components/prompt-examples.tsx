import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Lightbulb, Sparkles } from "lucide-react"

export function PromptExamples() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lightbulb className="h-5 w-5 text-yellow-500" />
            <CardTitle className="text-lg">Zero-Shot Prompting</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Exemple :</p>
              <p className="text-sm text-gray-600 mt-1">
                "Explique-moi le concept de l'apprentissage par renforcement comme si j'étais un étudiant en première
                année d'informatique."
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Cette technique ne nécessite pas d'exemples préalables et fonctionne bien pour des tâches simples.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-lg">One-Shot Prompting</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Exemple :</p>
              <p className="text-sm text-gray-600 mt-1">
                "Exemple: Question: Quelle est la capitale de la France? Réponse: La capitale de la France est Paris.
                <br />
                <br />
                Question: Quelle est la capitale du Japon? Réponse:"
              </p>
            </div>
            <p className="text-sm text-gray-600">Fournit un exemple unique pour guider le modèle dans sa réponse.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Code className="h-5 w-5 text-purple-500" />
            <CardTitle className="text-lg">Chain-of-Thought</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Exemple :</p>
              <p className="text-sm text-gray-600 mt-1">
                "Jean a 5 pommes. Il en donne 2 à Marie et en achète 3 de plus. Combien de pommes Jean a-t-il
                maintenant? Réfléchis étape par étape."
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Encourage le modèle à décomposer son raisonnement en étapes logiques.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <CardTitle className="text-lg">Few-Shot Prompting</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-sm font-medium text-gray-700">Exemple :</p>
              <p className="text-sm text-gray-600 mt-1">
                "Classifie le sentiment: 'J'adore ce produit!' → Positif
                <br />
                'Ce service est terrible.' → Négatif
                <br />
                'Le film était correct.' → Neutre
                <br />
                'Cette expérience m'a déçu.' →"
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Fournit plusieurs exemples pour aider le modèle à comprendre la tâche.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
