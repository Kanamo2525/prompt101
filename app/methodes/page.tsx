"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, FileText, Lightbulb, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OpportunityMatrix } from "@/components/opportunity-matrix"
import { SimpleMatrix } from "@/components/simple-matrix"
import { PDFDownloadButton } from "@/components/pdf-download-button"
import { promptingMethods } from "@/data/prompting-methods"
import { InteractiveDecisionTree } from "@/components/interactive-decision-tree"
import DecisionTree from "@/components/decision-tree"

export default function MethodesPage() {
  const [activeTab, setActiveTab] = useState("techniques")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Méthodes de Prompting</h1>
          <p className="text-gray-600 max-w-2xl">
            Découvrez les différentes techniques pour formuler vos prompts et obtenir les meilleurs résultats avec les
            modèles d'IA générative.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <PDFDownloadButton />
        </div>
      </div>

      <Tabs defaultValue="techniques" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="techniques">Techniques</TabsTrigger>
          <TabsTrigger value="decision-tree">Arbre de décision</TabsTrigger>
          <TabsTrigger value="matrices">Matrices</TabsTrigger>
          <TabsTrigger value="exemples">Exemples concrets</TabsTrigger>
        </TabsList>

        <TabsContent value="techniques" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promptingMethods.map((method) => (
              <Link key={method.id} href={`/methodes/${method.id}`} className="block h-full">
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2 rounded-lg ${
                          method.difficulty === "Facile"
                            ? "bg-green-100"
                            : method.difficulty === "Modéré"
                              ? "bg-yellow-100"
                              : "bg-orange-100"
                        }`}
                      >
                        {method.icon}
                      </div>
                      <div
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          method.difficulty === "Facile"
                            ? "bg-green-100 text-green-800"
                            : method.difficulty === "Modéré"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {method.difficulty}
                      </div>
                    </div>
                    <CardTitle className="mt-2">{method.title}</CardTitle>
                    <CardDescription>{method.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="decision-tree" className="space-y-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Arbre de décision interactif</h2>
            <p className="text-gray-600 mb-6">
              Répondez à quelques questions simples pour identifier la technique de prompting la plus adaptée à votre
              besoin.
            </p>
            <InteractiveDecisionTree />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Arbre de décision visuel</h2>
            <p className="text-gray-600 mb-6">Visualisez l'ensemble des techniques et leur processus de sélection.</p>
            <DecisionTree />
          </div>
        </TabsContent>

        <TabsContent value="matrices">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Matrice d'opportunité</h2>
              <p className="text-gray-600 mb-6">
                Cette matrice vous aide à identifier la technique de prompting la plus adaptée en fonction de la
                complexité de votre tâche et de votre niveau d'expertise.
              </p>
              <OpportunityMatrix />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Matrice de sélection simplifiée</h2>
              <p className="text-gray-600 mb-6">
                Une approche simplifiée pour choisir la technique de prompting en fonction de vos besoins.
              </p>
              <SimpleMatrix />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemples">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Exemples de prompts par technique</h2>
              <p className="text-gray-600 mb-6">
                Découvrez des exemples concrets de prompts pour chaque technique et apprenez à les adapter à vos
                besoins.
              </p>

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
                          "Explique-moi le concept de l'apprentissage par renforcement comme si j'étais un étudiant en
                          première année d'informatique."
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Cette technique ne nécessite pas d'exemples préalables et fonctionne bien pour des tâches
                        simples.
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
                          "Exemple: Question: Quelle est la capitale de la France? Réponse: La capitale de la France est
                          Paris.
                          <br />
                          <br />
                          Question: Quelle est la capitale du Japon? Réponse:"
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Fournit un exemple unique pour guider le modèle dans sa réponse.
                      </p>
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

              <div className="mt-8 text-center">
                <Link href="/canevas">
                  <Button>
                    Créer votre propre prompt <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Ressources supplémentaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Guide complet du prompting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Téléchargez notre guide complet pour maîtriser l'art du prompting avec les modèles d'IA
                      générative.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <PDFDownloadButton />
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Proposer un prompt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Vous avez créé un prompt efficace? Partagez-le avec la communauté et contribuez à enrichir notre
                      base de connaissances.
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
