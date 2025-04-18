import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveDecisionTree } from "@/components/interactive-decision-tree"
// Importez le composant DynamicOpportunityMatrix au début du fichier
import { DynamicOpportunityMatrix } from "@/components/dynamic-opportunity-matrix"
// Importer le composant PdfDownloadButton en haut du fichier:
import { PdfDownloadButton } from "@/components/pdf-download-button"

export default function MethodesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Remplacer le bouton de téléchargement existant par le composant PdfDownloadButton: */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Méthodes de Prompting</h1>
          <p className="text-gray-600 max-w-3xl">
            Découvrez les différentes techniques pour formuler vos prompts et obtenir les meilleurs résultats avec les
            modèles d'IA générative.
          </p>
        </div>
        <PdfDownloadButton
          title="Télécharger le guide PDF"
          filename="art-du-prompting.pdf"
          className="mt-4 md:mt-0 flex items-center"
        />
      </div>

      <Tabs defaultValue="techniques" className="mb-8">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="techniques">Techniques</TabsTrigger>
          <TabsTrigger value="arbre">Arbre de décision</TabsTrigger>
          <TabsTrigger value="matrices">Matrices</TabsTrigger>
          <TabsTrigger value="exemples">Exemples concrets</TabsTrigger>
        </TabsList>

        <TabsContent value="techniques" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Zero-Shot Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Facile
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-green-50">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="font-bold text-xl">Zero-Shot Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Demander directement sans exemple</p>
              <p className="text-gray-600 mb-4">
                Cette technique consiste à formuler une instruction claire sans fournir d'exemple. Elle est idéale pour
                des tâches simples et bien définies.
              </p>
              <div className="text-right">
                <Link href="/methodes/zero-shot" className="inline-flex items-center text-sm font-medium text-blue-600">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* One-Shot Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Facile
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50">
                  <span className="text-xl">📘</span>
                </div>
                <h3 className="font-bold text-xl">One-Shot Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Fournir un exemple unique</p>
              <p className="text-gray-600 mb-4">
                Cette approche consiste à donner un seul exemple pour guider le modèle. Elle améliore la précision pour
                des tâches modérément complexes.
              </p>
              <div className="text-right">
                <Link href="/methodes/one-shot" className="inline-flex items-center text-sm font-medium text-blue-600">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Few-Shot Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Modéré
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-50">
                  <span className="text-xl">✨</span>
                </div>
                <h3 className="font-bold text-xl">Few-Shot Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Fournir plusieurs exemples</p>
              <p className="text-gray-600 mb-4">
                Cette méthode consiste à donner plusieurs exemples pour aider le modèle à comprendre le format et le
                style de réponse attendus.
              </p>
              <div className="text-right">
                <Link href="/methodes/few-shot" className="inline-flex items-center text-sm font-medium text-blue-600">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Chain-of-Thought */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Modéré
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-purple-50">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="font-bold text-xl">Chain-of-Thought</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Raisonnement étape par étape</p>
              <p className="text-gray-600 mb-4">
                Cette technique encourage le modèle à décomposer son raisonnement en étapes logiques, ce qui améliore la
                précision pour les problèmes complexes.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/chain-of-thought"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Least-to-Most Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Complexe
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-green-50">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="font-bold text-xl">Least-to-Most Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Décomposer en sous-problèmes</p>
              <p className="text-gray-600 mb-4">
                Cette approche consiste à décomposer un problème complexe en sous-problèmes plus simples et à les
                résoudre séquentiellement.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/least-to-most"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Expert Role-Playing */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                  Modéré
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50">
                  <span className="text-xl">👨‍💼</span>
                </div>
                <h3 className="font-bold text-xl">Expert Role-Playing</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Adopter un rôle d'expert</p>
              <p className="text-gray-600 mb-4">
                Cette technique consiste à demander au modèle d'adopter le rôle d'un expert dans un domaine spécifique
                pour obtenir des réponses plus précises et pertinentes.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/expert-role-playing"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Contextual Augmentation */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Complexe
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-red-50">
                  <span className="text-xl">🔍</span>
                </div>
                <h3 className="font-bold text-xl">Contextual Augmentation</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Enrichir le contexte</p>
              <p className="text-gray-600 mb-4">
                Cette méthode consiste à enrichir le prompt avec des informations contextuelles pertinentes pour obtenir
                des réponses plus précises et adaptées.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/contextual-augmentation"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Iterative Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Complexe
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-50">
                  <span className="text-xl">🔄</span>
                </div>
                <h3 className="font-bold text-xl">Iterative Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Affiner progressivement</p>
              <p className="text-gray-600 mb-4">
                Cette approche consiste à affiner progressivement les prompts en fonction des réponses obtenues pour
                converger vers le résultat souhaité.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/iterative-prompting"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Multi-Prompting */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
                  Complexe
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-yellow-50">
                  <span className="text-xl">📑</span>
                </div>
                <h3 className="font-bold text-xl">Multi-Prompting</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">Combiner plusieurs techniques</p>
              <p className="text-gray-600 mb-4">
                Cette technique avancée consiste à combiner plusieurs approches de prompting pour résoudre des problèmes
                particulièrement complexes ou multidimensionnels.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/multi-prompting"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Generated Knowledge */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                  Avancé
                </span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-green-50">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="font-bold text-xl">Generated Knowledge</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">L'IA active d'abord ses connaissances</p>
              <p className="text-gray-600 mb-4">
                Cette technique consiste à demander au modèle de générer d'abord des connaissances ou informations
                utiles sur un sujet, avant de formuler sa réponse finale.
              </p>
              <div className="text-right">
                <Link
                  href="/methodes/generated-knowledge"
                  className="inline-flex items-center text-sm font-medium text-blue-600"
                >
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="arbre" className="mt-6">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Arbre de décision des techniques de prompting</h2>
            <p className="text-center text-gray-600 mb-8">
              Utilisez cet arbre de décision pour choisir la technique de prompting la plus adaptée à votre cas d'usage.
            </p>
            <div className="mb-8">
              <InteractiveDecisionTree />
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-center">Version statique de l'arbre</h3>
              <div className="flex justify-center">
                <img
                  src="/images/decision-tree.svg"
                  alt="Arbre de décision des techniques de prompting"
                  className="max-w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Cliquez sur l'image pour l'agrandir et télécharger la version haute résolution.
              </p>
              {/* Remplacer également le bouton de téléchargement dans l'onglet "arbre": */}
              <div className="flex justify-center mt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="/images/decision-tree.svg" download="arbre-decision-prompting.svg">
                    <Download className="mr-2 h-4 w-4" />
                    Télécharger l'arbre de décision
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="matrices" className="mt-6">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Matrices de sélection des techniques</h2>
            <p className="text-center text-gray-600 mb-8">
              Ces matrices vous aident à choisir la technique de prompting optimale en fonction de différents critères.
            </p>

            <DynamicOpportunityMatrix />

            {/* Suppression de la première légende qui n'est pas dans le bon ordre */}

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
                <div className="p-4 bg-amber-50 rounded-md">
                  <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mr-2"></span>
                  <span className="font-medium">Assistance :</span>
                  <p className="text-sm mt-1">Pour aider les humains dans leurs tâches</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-md">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                  <span className="font-medium">Automatisation :</span>
                  <p className="text-sm mt-1">Pour optimiser des processus existants</p>
                </div>
                <div className="p-4 bg-green-50 rounded-md">
                  <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                  <span className="font-medium">Augmentation :</span>
                  <p className="text-sm mt-1">Pour co-créer et découvrir avec l'humain</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-md">
                  <span className="inline-block w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
                  <span className="font-medium">Avant-Garde :</span>
                  <p className="text-sm mt-1">Pour créer de nouvelles solutions autonomes</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemples" className="mt-6">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Exemples concrets de prompts</h2>
            <p className="text-center text-gray-600 mb-8">
              Découvrez des exemples concrets de prompts pour chaque technique, avec des cas d'usage réels.
            </p>
            <div className="space-y-8">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Zero-Shot Prompting</h3>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <p className="font-medium mb-2">Exemple :</p>
                  <p className="text-gray-700">
                    "Explique-moi le concept de l'intelligence artificielle en termes simples, comme si tu parlais à un
                    enfant de 10 ans."
                  </p>
                </div>
                <p className="text-gray-600">
                  Ce prompt direct ne fournit aucun exemple mais donne une instruction claire sur le niveau de
                  simplification attendu.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3">Few-Shot Prompting</h3>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <p className="font-medium mb-2">Exemple :</p>
                  <p className="text-gray-700">
                    "Traduis ces phrases de l'anglais au français :
                    <br />
                    <br />
                    Anglais : The weather is nice today.
                    <br />
                    Français : Le temps est beau aujourd'hui.
                    <br />
                    <br />
                    Anglais : I love to read books.
                    <br />
                    Français : J'aime lire des livres.
                    <br />
                    <br />
                    Anglais : What time is the meeting tomorrow?
                    <br />
                    Français :"
                  </p>
                </div>
                <p className="text-gray-600">
                  Ce prompt fournit deux exemples de traduction pour aider le modèle à comprendre le format et le style
                  attendus.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Chain-of-Thought</h3>
                <div className="bg-gray-50 p-4 rounded-md mb-4">
                  <p className="font-medium mb-2">Exemple :</p>
                  <p className="text-gray-700">
                    "Résous ce problème mathématique étape par étape :
                    <br />
                    <br />
                    Si un train part de Paris à 14h30 et roule à une vitesse moyenne de 120 km/h, et qu'un autre train
                    part de Lyon à 15h15 et roule à une vitesse moyenne de 100 km/h en direction de Paris, sachant que
                    la distance entre Paris et Lyon est de 450 km, à quelle heure les deux trains se croiseront-ils ?"
                  </p>
                </div>
                <p className="text-gray-600">
                  Ce prompt demande explicitement une résolution étape par étape, encourageant le modèle à décomposer
                  son raisonnement.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button>Voir plus d'exemples</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
