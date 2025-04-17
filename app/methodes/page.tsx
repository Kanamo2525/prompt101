import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OpportunityMatrix } from "@/components/opportunity-matrix"
import { SimpleMatrix } from "@/components/simple-matrix"
import { InteractiveDecisionTree } from "@/components/interactive-decision-tree"

export default function MethodesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold">Méthodes de Prompting</h1>
          <p className="mt-2 text-xl">
            Découvrez les différentes techniques pour formuler des prompts efficaces avec l'IA générative
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="decision-tree">Arbre de décision</TabsTrigger>
            <TabsTrigger value="matrices">Matrices</TabsTrigger>
            <TabsTrigger value="examples">Exemples concrets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Zero-Shot Prompting</CardTitle>
                  <CardDescription>Demander directement sans exemple</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette technique consiste à formuler une instruction claire sans fournir d'exemple. Elle est idéale
                    pour des tâches simples et bien définies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/zero-shot" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>One-Shot Prompting</CardTitle>
                  <CardDescription>Fournir un exemple unique</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette technique consiste à fournir un exemple pour guider le modèle dans sa réponse. Elle est utile
                    lorsque vous souhaitez un format ou un style spécifique.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/one-shot" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Few-Shot Prompting</CardTitle>
                  <CardDescription>Fournir plusieurs exemples</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette méthode consiste à donner plusieurs exemples pour aider le modèle à comprendre le format et le
                    style de réponse attendus.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/few-shot" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chain-of-Thought</CardTitle>
                  <CardDescription>Raisonnement étape par étape</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette technique encourage le modèle à décomposer son raisonnement en étapes logiques, ce qui
                    améliore la précision pour les problèmes complexes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/chain-of-thought" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>RCT (Rôle, Contexte, Tâche)</CardTitle>
                  <CardDescription>Structurer le prompt en trois parties</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette méthode consiste à définir clairement le rôle que doit jouer l'IA, le contexte de la demande,
                    et la tâche spécifique à accomplir.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/rct" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Least-to-Most Prompting</CardTitle>
                  <CardDescription>Décomposer un problème complexe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Cette approche consiste à décomposer un problème complexe en sous-problèmes plus simples à résoudre
                    séquentiellement.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/methodes/least-to-most" className="ml-auto">
                    <Button variant="ghost" size="sm">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Link href="/canevas">
                <Button>
                  Créer votre propre prompt <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="decision-tree">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Arbre de décision pour choisir une technique</h2>
              <p className="mb-6 text-gray-600">
                Utilisez cet arbre de décision interactif pour déterminer quelle technique de prompting est la plus
                adaptée à votre besoin.
              </p>

              <InteractiveDecisionTree />
            </div>
          </TabsContent>

          <TabsContent value="matrices">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Matrices de sélection</h2>
              <p className="mb-6 text-gray-600">
                Ces matrices vous aident à visualiser les différentes techniques de prompting selon leur complexité et
                leur impact.
              </p>

              <OpportunityMatrix />

              <div className="my-12 border-t border-gray-200"></div>

              <SimpleMatrix />
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Exemples concrets</h2>
              <p className="mb-6 text-gray-600">
                Découvrez des exemples concrets d'application des différentes techniques de prompting.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Zero-Shot Prompting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <p className="text-sm font-mono">
                        Explique-moi le concept de l'apprentissage par renforcement en termes simples.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>One-Shot Prompting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <p className="text-sm font-mono">
                        Voici un exemple de résumé d'article: <br />
                        Article: Les chercheurs ont découvert une nouvelle espèce de grenouille dans la forêt
                        amazonienne. <br />
                        Résumé: Découverte d'une nouvelle espèce de grenouille en Amazonie. <br />
                        <br />
                        Maintenant, résume cet article: <br />
                        Article: Une étude récente montre que la méditation quotidienne peut réduire le stress et
                        améliorer la concentration.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Chain-of-Thought</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <p className="text-sm font-mono">
                        Résous ce problème étape par étape: <br />
                        Si 5 pommes coûtent 2,50€, combien coûtent 8 pommes?
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>RCT (Rôle, Contexte, Tâche)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <p className="text-sm font-mono">
                        Rôle: Tu es un expert en communication d'entreprise. <br />
                        Contexte: Notre entreprise vient de lancer un nouveau produit écologique. <br />
                        Tâche: Rédige un communiqué de presse de 3 paragraphes pour annoncer ce lancement.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
