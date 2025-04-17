import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Lightbulb } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PDFDownloadButton } from "@/components/pdf-download-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Guide des Prompts IA</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment formuler des prompts efficaces pour tirer le meilleur parti des modèles d'intelligence
            artificielle générative.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/methodes">
              <Button size="lg">
                Explorer les méthodes <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/catalogue">
              <Button variant="outline" size="lg">
                Voir le catalogue
              </Button>
            </Link>
            <PDFDownloadButton size="lg" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Techniques de prompting populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-yellow-100">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardTitle>Zero-Shot Prompting</CardTitle>
                </div>
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

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                  <CardTitle>Few-Shot Prompting</CardTitle>
                </div>
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

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Code className="h-5 w-5 text-purple-500" />
                  </div>
                  <CardTitle>Chain-of-Thought</CardTitle>
                </div>
                <CardDescription>Raisonnement étape par étape</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Cette technique encourage le modèle à décomposer son raisonnement en étapes logiques, ce qui améliore
                  la précision pour les problèmes complexes.
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
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Catégories de prompts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/categories/education" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-green-100">📚</div>
                  <h3 className="font-bold text-lg">Éducation</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour améliorer votre apprentissage et développer de nouvelles compétences.
                </p>
              </div>
            </Link>

            <Link href="/categories/time-management" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-100">⏰</div>
                  <h3 className="font-bold text-lg">Gestion du temps</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour optimiser votre temps et augmenter votre productivité au quotidien.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Créez vos propres prompts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Utilisez notre canevas interactif pour créer des prompts personnalisés adaptés à vos besoins spécifiques.
          </p>
          <Link href="/canevas">
            <Button>
              Accéder au canevas <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Ressources supplémentaires</h2>
            <p className="text-gray-600">Découvrez nos guides et outils pour maîtriser l'art du prompting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Guide complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Téléchargez notre guide complet du prompting pour les modèles d'IA générative.
                </p>
              </CardContent>
              <CardFooter>
                <PDFDownloadButton />
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Catalogue de prompts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez notre collection de prompts prêts à l'emploi pour différents cas d'usage.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/catalogue">
                  <Button variant="outline">
                    Voir le catalogue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Proposer un prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Partagez vos prompts efficaces avec la communauté et contribuez à enrichir notre base de
                  connaissances.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/proposer">
                  <Button variant="outline">
                    Proposer un prompt <FileText className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
