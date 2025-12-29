import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Lightbulb, ExternalLink } from "lucide-react"

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
          <div
            className="relative overflow-hidden rounded-2xl p-1"
            style={{ background: "linear-gradient(135deg, #F200B8, #9333ea, #F200B8)" }}
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
              <div className="md:w-1/3 lg:w-2/5 flex-shrink-0 bg-black">
                <img
                  src="/images/histoire-ia.jpg"
                  alt="La Petite Histoire de l'IA - De l'Antiquité à nos jours"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#F200B8" }}
                  >
                    Nouveau
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  La Petite Histoire de l'IA
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4 max-w-2xl">
                  Plongez dans l'histoire fascinante de l'intelligence artificielle, des premiers rêves d'automates de
                  l'Antiquité aux révolutions actuelles du deep learning. Un voyage captivant à travers les siècles
                  d'innovation et de découvertes.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://histoire-ia.fr/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-semibold gap-2 transition-all hover:gap-3"
                    style={{ color: "#F200B8" }}
                  >
                    Découvrir l'histoire <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://open.spotify.com/show/2qmCG6CAeNuhFtVOgrMZXm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: "#1DB954" }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Écouter le podcast
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin de la carte promotionnelle */}

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/catalogue/productivite" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-100">⚡</div>
                  <h3 className="font-bold text-lg">Productivité</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour optimiser votre temps et augmenter votre efficacité au quotidien.
                </p>
              </div>
            </Link>

            <Link href="/catalogue/creativite" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-green-100">💡</div>
                  <h3 className="font-bold text-lg">Créativité</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour stimuler votre créativité et générer des idées innovantes.
                </p>
              </div>
            </Link>

            <Link href="/catalogue/apprentissage" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-purple-100">📚</div>
                  <h3 className="font-bold text-lg">Apprentissage</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour améliorer votre apprentissage et développer de nouvelles compétences.
                </p>
              </div>
            </Link>

            <Link href="/catalogue/professionnel" className="block">
              <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-amber-600 hover:shadow-md transition-shadow h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 rounded-lg bg-amber-100">💼</div>
                  <h3 className="font-bold text-lg">Professionnel</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Prompts pour améliorer votre efficacité et vos compétences dans un contexte professionnel.
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
