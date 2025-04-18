"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Lightbulb, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export function ZeroShotClientPage() {
  const [activeTab, setActiveTab] = useState("definition")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Zero-Shot Prompting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">La méthode la plus directe pour interagir avec l'IA</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Simple</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Rapide</span>
          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">Polyvalent</span>
          <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Niveau : Facile</span>
        </div>
      </div>

      <Tabs defaultValue="definition" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
          <TabsTrigger value="definition">Définition</TabsTrigger>
          <TabsTrigger value="fonctionnement">Fonctionnement</TabsTrigger>
          <TabsTrigger value="avantages">Avantages/Limites</TabsTrigger>
          <TabsTrigger value="cas-usage">Cas d'usage</TabsTrigger>
          <TabsTrigger value="rh">Application RH</TabsTrigger>
        </TabsList>

        <TabsContent value="definition" className="mt-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-blue-800 mb-4">En quoi consiste le Zero-Shot Prompting ?</h2>
            <p className="text-gray-700 mb-4">
              Le Zero-Shot Prompting consiste à poser une question ou donner une instruction au modèle sans fournir
              aucun exemple dans le prompt. On utilise donc directement le langage naturel pour formuler la demande, et
              le modèle doit s'appuyer uniquement sur ses connaissances pré-entraînées pour répondre.
            </p>
            <p className="text-gray-700">
              Cette technique est la plus simple à mettre en œuvre : l'utilisateur formule une requête claire (question,
              directive, etc.) en une seule fois, puis l'IA génère directement sa réponse. Aucune démonstration ou
              calibration spécifique n'est donnée en amont – le modèle s'appuie entièrement sur son entraînement et sa
              compréhension intrinsèque du langage.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="fonctionnement" className="mt-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Exemple de Zero-Shot Prompting</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                  <p>Rédige un résumé des dernières actualités du marché financier.</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      navigator.clipboard.writeText("Rédige un résumé des dernières actualités du marché financier.")
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Réponse de l'IA</h4>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <p className="mb-2">Voici un résumé des dernières actualités du marché financier :</p>
                  <ul className="list-disc list-inside space-y-1 mb-2">
                    <li>
                      Les marchés boursiers mondiaux ont connu une volatilité accrue suite aux dernières décisions des
                      banques centrales
                    </li>
                    <li>La Fed a maintenu ses taux directeurs, suggérant une approche prudente face à l'inflation</li>
                    <li>
                      Les valeurs technologiques ont surperformé le marché, portées par l'engouement autour de l'IA
                    </li>
                    <li>Les tensions géopolitiques ont pesé sur certains secteurs, notamment l'énergie</li>
                    <li>Les cryptomonnaies affichent une reprise après une période de correction</li>
                  </ul>
                  <p>
                    Les investisseurs restent attentifs aux indicateurs économiques et aux résultats d'entreprises pour
                    orienter leurs stratégies dans les semaines à venir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Comment utiliser le Zero-Shot Prompting</h3>
            <ol className="space-y-4">
              <li className="flex">
                <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-medium">Formulez votre demande de manière claire et directe</p>
                  <p className="text-gray-600 mt-1">
                    Soyez précis dans votre requête pour obtenir une réponse pertinente.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-medium">Spécifiez le format souhaité si nécessaire</p>
                  <p className="text-gray-600 mt-1">
                    Par exemple : "en 5 points", "sous forme de liste", "en 3 paragraphes", etc.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="font-medium">Ajoutez des contraintes ou précisions si besoin</p>
                  <p className="text-gray-600 mt-1">
                    Comme le niveau de détail, la longueur attendue ou le public cible.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <p className="font-medium">Analysez la réponse et itérez si nécessaire</p>
                  <p className="text-gray-600 mt-1">
                    Si la réponse ne vous satisfait pas, reformulez votre prompt ou envisagez une technique plus
                    avancée.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="avantages" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                <CheckCircle className="h-5 w-5 mr-2" />
                Avantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-medium">Simplicité et rapidité :</span>
                  <span className="ml-2 text-gray-700">
                    pas besoin de préparer des données d'exemple, le prompt est facile à construire
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium">Flexibilité :</span>
                  <span className="ml-2 text-gray-700">
                    on peut tester différentes formulations rapidement puisque chaque prompt est indépendant
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium">Aucune ressource additionnelle requise :</span>
                  <span className="ml-2 text-gray-700">
                    (exemples, contexte), ce qui est utile quand on manque d'informations spécifiques
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium">Instantané :</span>
                  <span className="ml-2 text-gray-700">
                    obtention d'une réponse immédiate sans étapes intermédiaires
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium">Idéal pour les questions simples ou générales :</span>
                  <span className="ml-2 text-gray-700">où l'IA a déjà suffisamment de connaissances</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                <XCircle className="h-5 w-5 mr-2" />
                Limites
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-medium">Qualité variable :</span>
                  <span className="ml-2 text-gray-700">selon la complexité de la demande</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium">Manque de précision :</span>
                  <span className="ml-2 text-gray-700">
                    pour les tâches très spécialisées demandant un raisonnement nuancé
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium">Dépendance forte :</span>
                  <span className="ml-2 text-gray-700">
                    aux connaissances acquises lors de l'entraînement du modèle
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium">
                    Peu adapté aux tâches nécessitant un format spécifique :
                  </span>
                  <span className="ml-2 text-gray-700">de réponse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium">Difficulté avec des requêtes ambiguës :</span>
                  <span className="ml-2 text-gray-700">ou mal formulées</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quand utiliser le Zero-Shot Prompting ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-green-700 mb-2">Idéal pour</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Des questions simples et directes</li>
                  <li>Des demandes générales sur des sujets courants</li>
                  <li>Des tâches où la précision extrême n'est pas critique</li>
                  <li>Des situations où vous avez besoin d'une réponse rapide</li>
                  <li>Des brainstormings initiaux ou exploratoires</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-red-700 mb-2">À éviter pour</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Des tâches très spécialisées ou techniques</li>
                  <li>Des problèmes nécessitant un raisonnement complexe</li>
                  <li>Des demandes exigeant un format de réponse très précis</li>
                  <li>Des sujets où l'IA pourrait manquer de connaissances</li>
                  <li>Des questions ambiguës ou mal définies</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="cas-usage" className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cas d'usage professionnels</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                Synthèse rapide d'informations
              </h3>
              <p className="text-gray-700 mb-3">
                Parfait pour obtenir rapidement un résumé ou une synthèse d'un sujet, d'un document ou d'une actualité.
              </p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                <p>Résume les principaux enjeux de la transformation digitale dans le secteur bancaire.</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "Résume les principaux enjeux de la transformation digitale dans le secteur bancaire.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                  </svg>
                </div>
                Génération de contenu
              </h3>
              <p className="text-gray-700 mb-3">
                Idéal pour la rédaction rapide d'emails, de descriptions ou de textes courts sans exigence particulière
                de format.
              </p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                <p>
                  Rédige un email de confirmation pour un webinaire sur la cybersécurité qui aura lieu le 25 mai à 14h.
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "Rédige un email de confirmation pour un webinaire sur la cybersécurité qui aura lieu le 25 mai à 14h.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                Assistance technique rapide
              </h3>
              <p className="text-gray-700 mb-3">
                Efficace pour obtenir des explications sur un concept technique ou la résolution d'un problème simple.
              </p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                <p>Explique comment configurer correctement les en-têtes CORS sur un serveur web.</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "Explique comment configurer correctement les en-têtes CORS sur un serveur web.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                </div>
                Brainstorming initial
              </h3>
              <p className="text-gray-700 mb-3">
                Utile pour générer des premières idées sur un sujet ou une problématique, servant de point de départ à
                une réflexion plus approfondie.
              </p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                <p>Propose 5 idées d'activités pour un team building axé sur la collaboration.</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "Propose 5 idées d'activités pour un team building axé sur la collaboration.",
                    )
                  }
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="rh" className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application dans les Ressources Humaines</h2>
          <p className="text-gray-700 mb-6">
            En contexte RH, le Zero-Shot Prompting est particulièrement efficace pour des demandes générales et
            immédiates :
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-medium text-gray-900">Exemple d'application RH</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                  <p>
                    Quels sont les 5 principaux indicateurs à suivre pour mesurer l'efficacité d'une campagne de
                    recrutement ?
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Quels sont les 5 principaux indicateurs à suivre pour mesurer l'efficacité d'une campagne de recrutement ?",
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Réponse de l'IA</h4>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <p className="mb-2">
                    Voici les 5 principaux indicateurs pour mesurer l'efficacité d'une campagne de recrutement :
                  </p>
                  <ol className="list-decimal list-inside space-y-1 mb-2">
                    <li>
                      <strong>Taux de conversion des candidatures</strong> : pourcentage de candidats qui passent d'une
                      étape à l'autre du processus (visualisation de l'offre → candidature → entretien → offre →
                      recrutement)
                    </li>
                    <li>
                      <strong>Coût par embauche</strong> : total des dépenses de la campagne divisé par le nombre de
                      recrutements finalisés
                    </li>
                    <li>
                      <strong>Délai de pourvoi</strong> : temps écoulé entre la publication de l'offre et l'acceptation
                      du poste
                    </li>
                    <li>
                      <strong>Qualité des candidatures</strong> : adéquation entre les profils reçus et les compétences
                      recherchées, mesurable par le taux de candidatures pertinentes
                    </li>
                    <li>
                      <strong>Taux de rétention à 6/12 mois</strong> : pourcentage des employés recrutés via cette
                      campagne qui sont toujours en poste après 6 ou 12 mois
                    </li>
                  </ol>
                  <p>
                    Ces indicateurs permettent d'évaluer à la fois l'efficacité opérationnelle (coût, délai) et
                    qualitative (pertinence, rétention) de vos actions de recrutement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Création rapide de fiches de poste</h3>
                <p className="text-gray-700 mb-3">
                  Générez rapidement une première version de fiche de poste pour gagner du temps.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                  <p>
                    Crée une fiche de poste pour un Responsable Marketing Digital avec 5 ans d'expérience minimum.
                    Inclus les responsabilités principales, les compétences requises et les qualités recherchées.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Crée une fiche de poste pour un Responsable Marketing Digital avec 5 ans d'expérience minimum. Inclus les responsabilités principales, les compétences requises et les qualités recherchées.",
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Questions d'entretien personnalisées</h3>
                <p className="text-gray-700 mb-3">
                  Obtenez des suggestions de questions pertinentes pour vos entretiens d'embauche.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                  <p>
                    Propose 7 questions d'entretien pour évaluer les compétences en gestion d'équipe et en leadership
                    d'un candidat pour un poste de manager.
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Propose 7 questions d'entretien pour évaluer les compétences en gestion d'équipe et en leadership d'un candidat pour un poste de manager.",
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Analyse des tendances RH</h3>
                <p className="text-gray-700 mb-3">
                  Obtenez rapidement des informations sur les tendances actuelles en ressources humaines.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm relative group">
                  <p>
                    Quelles sont les 5 principales tendances RH pour l'année à venir et comment les entreprises
                    peuvent-elles s'y adapter ?
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      navigator.clipboard.writeText(
                        "Quelles sont les 5 principales tendances RH pour l'année à venir et comment les entreprises peuvent-elles s'y adapter ?",
                      )
                    }
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
              <Lightbulb className="h-5 w-5 mr-2" />
              Conseils pour réussir vos prompts Zero-Shot en RH
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-700 font-medium">Soyez spécifique sur le contexte de l'entreprise :</span>
                <span className="ml-2 text-gray-700">
                  mentionnez la taille, le secteur ou la culture de l'organisation
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-medium">Précisez le niveau de détail attendu :</span>
                <span className="ml-2 text-gray-700">pour éviter des réponses trop génériques ou trop détaillées</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-medium">Indiquez le ton souhaité :</span>
                <span className="ml-2 text-gray-700">
                  formel pour des documents officiels, conversationnel pour des communications internes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-medium">Utilisez des termes RH précis :</span>
                <span className="ml-2 text-gray-700">pour obtenir des réponses adaptées au jargon professionnel</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-700 font-medium">Pour des sujets sensibles ou complexes :</span>
                <span className="ml-2 text-gray-700">
                  privilégiez d'autres techniques comme le One-Shot ou Few-Shot
                </span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-8">
        <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
          <Lightbulb className="h-5 w-5 mr-2" />
          Conseils pour réussir vos prompts Zero-Shot
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Soyez précis et concis :</span>
            <span className="ml-2 text-gray-700">plus votre question est claire, meilleure sera la réponse</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Utilisez un langage direct :</span>
            <span className="ml-2 text-gray-700">préférez les formulations sans ambiguïté</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Spécifiez le format souhaité :</span>
            <span className="ml-2 text-gray-700">
              quand c'est pertinent (ex: "en 5 points", "sous forme de liste", etc.)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Ajoutez des contraintes si nécessaire :</span>
            <span className="ml-2 text-gray-700">comme le niveau de détail ou la longueur attendue</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Testez différentes formulations :</span>
            <span className="ml-2 text-gray-700">si la première réponse ne vous satisfait pas</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-700 font-medium">Pour des sujets complexes :</span>
            <span className="ml-2 text-gray-700">
              envisagez des techniques plus avancées comme le Few-Shot ou Chain-of-Thought
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-8">
        <Button asChild variant="outline">
          <Link href="/methodes" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux méthodes
          </Link>
        </Button>
        <Button asChild>
          <Link href="/methodes/one-shot" className="flex items-center">
            One-Shot Prompting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
