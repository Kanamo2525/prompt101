import Link from "next/link"
import { Lightbulb, MessageSquare, Sparkles, Target, Zap, Layers, Repeat, Brain, FileText, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DecisionTree from "@/components/decision-tree"
// Ajouter l'import du composant PDFDownloadButton
import { PDFDownloadButton } from "@/components/pdf-download-button"

export default function MethodesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Méthodes de Prompting</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Découvrez comment formuler des prompts efficaces pour obtenir les meilleurs résultats avec l'IA générative
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi la formulation est-elle importante ?</h2>
          <p className="text-lg text-gray-600">
            La façon dont vous formulez vos prompts a un impact direct sur la qualité des réponses générées par l'IA.
            Maîtriser l'art du prompting vous permettra d'obtenir des résultats plus précis, pertinents et adaptés à vos
            besoins.
          </p>
        </div>

        {/* Ajouter le bouton de téléchargement dans une section appropriée, par exemple après le titre principal
        ou dans une section de ressources */}
        <div className="mt-6 mb-10">
          <PDFDownloadButton
            pdfUrl="/pdf/guide-prompting.pdf"
            fileName="Guide-Art-du-Prompting.pdf"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium"
          />
          <p className="text-sm text-gray-500 mt-2">
            Téléchargez notre guide complet sur l'art du prompting pour approfondir vos connaissances.
          </p>
        </div>

        <Tabs defaultValue="techniques" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="techniques">Techniques de base</TabsTrigger>
            <TabsTrigger value="advanced">Méthodes avancées</TabsTrigger>
            <TabsTrigger value="decision-tree">Arbre de décision</TabsTrigger>
            <TabsTrigger value="examples">Exemples concrets</TabsTrigger>
          </TabsList>

          <TabsContent value="techniques">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/methodes/zero-shot" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle>Zero-Shot Prompting</CardTitle>
                    <CardDescription>Obtenez des réponses sans fournir d'exemples</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Technique la plus directe pour interagir avec l'IA. Posez simplement une question ou donnez une
                      instruction sans fournir d'exemples préalables.
                    </p>
                    <div className="flex">
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded mr-2">Simple</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded mr-2">Rapide</span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">Polyvalent</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/methodes/one-shot" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    </div>
                    <CardTitle>One-Shot Prompting</CardTitle>
                    <CardDescription>Guidez avec un exemple unique</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Fournissez un seul exemple à l'IA pour clarifier le format ou le style de réponse souhaité, puis
                      posez votre question.
                    </p>
                    <div className="flex">
                      <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded mr-2">Guidé</span>
                      <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded mr-2">Exemple</span>
                      <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">Format</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/methodes/few-shot" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                    </div>
                    <CardTitle>Few-Shot Prompting</CardTitle>
                    <CardDescription>Plusieurs exemples pour plus de précision</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Présentez 2 à 5 exemples de la tâche à accomplir pour que l'IA saisisse les patterns et améliore
                      la précision de ses réponses.
                    </p>
                    <div className="flex">
                      <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded mr-2">Précision</span>
                      <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded mr-2">Apprentissage</span>
                      <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded">Multiple</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/methodes/chain-of-thought" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <Layers className="h-5 w-5 text-purple-600" />
                    </div>
                    <CardTitle>Chain-of-Thought</CardTitle>
                    <CardDescription>Pensée étape par étape</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Amenez l'IA à décomposer son raisonnement en plusieurs étapes logiques, particulièrement efficace
                      pour les problèmes complexes.
                    </p>
                    <div className="flex">
                      <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded mr-2">Raisonnement</span>
                      <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded mr-2">Étapes</span>
                      <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded">Logique</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/methodes/expert-role-playing" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-red-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle>Expert Role-Playing</CardTitle>
                    <CardDescription>L'IA incarne un expert spécifique</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Demandez à l'IA d'adopter le rôle d'un expert dans un domaine spécifique pour obtenir des réponses
                      plus spécialisées et adaptées.
                    </p>
                    <div className="flex">
                      <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded mr-2">Rôle</span>
                      <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded mr-2">Spécialisation</span>
                      <span className="bg-red-50 text-red-700 text-xs px-2 py-1 rounded">Expertise</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/methodes/rct" className="block transition-transform hover:scale-[1.02]">
                <Card>
                  <CardHeader>
                    <div className="bg-teal-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-teal-600" />
                    </div>
                    <CardTitle>RCT (Rôle, Contexte, Tâche)</CardTitle>
                    <CardDescription>Structure claire pour des résultats précis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Fournissez à l'IA un rôle à adopter, un contexte détaillé et une tâche précise à accomplir pour
                      obtenir des réponses ciblées.
                    </p>
                    <div className="flex">
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded mr-2">Structuré</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded mr-2">Professionnel</span>
                      <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded">Efficace</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/methodes/multi-prompting" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                      <Zap className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Multi-Prompting</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cette méthode consiste à utiliser plusieurs prompts distincts pour aborder une même problématique
                    sous différents angles, puis combiner les réponses.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded mr-2">Parallèle</span>
                    <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded mr-2">Perspectives</span>
                    <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded">Synthèse</span>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <p className="text-sm text-indigo-800">
                      <strong>Difficulté :</strong> Avancé
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/methodes/iterative-prompting" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <Repeat className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Iterative Prompting</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Posez des questions de suivi successives pour approfondir ou affiner les réponses de l'IA dans un
                    processus d'amélioration continue.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded mr-2">Conversation</span>
                    <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded mr-2">Ajustement</span>
                    <span className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded">Précision</span>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>Difficulté :</strong> Intermédiaire
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/methodes/generated-knowledge" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <Brain className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Generated Knowledge</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Demandez à l'IA de générer d'abord des connaissances ou informations sur un sujet avant de formuler
                    sa réponse finale.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded mr-2">Savoir</span>
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded mr-2">Contexte</span>
                    <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded">Profondeur</span>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <p className="text-sm text-emerald-800">
                      <strong>Difficulté :</strong> Avancé
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/methodes/contextual-augmentation" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-100 p-2 rounded-lg mr-3">
                      <Sparkles className="h-5 w-5 text-cyan-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Contextual Augmentation</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fournissez à l'IA des informations ou documents supplémentaires en contexte pour qu'elle s'en serve
                    dans sa réponse.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded mr-2">Documents</span>
                    <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded mr-2">Données</span>
                    <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded">Spécifique</span>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                    <p className="text-sm text-cyan-800">
                      <strong>Difficulté :</strong> Avancé
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/methodes/template-filling" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-rose-100 p-2 rounded-lg mr-3">
                      <FileText className="h-5 w-5 text-rose-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Template Filling</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fournissez à l'IA un gabarit de réponse avec des espaces réservés que le modèle doit renseigner de
                    manière appropriée.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-1 rounded mr-2">Format</span>
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-1 rounded mr-2">Systématique</span>
                    <span className="bg-rose-50 text-rose-700 text-xs px-2 py-1 rounded">Répétitif</span>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                    <p className="text-sm text-rose-800">
                      <strong>Difficulté :</strong> Intermédiaire
                    </p>
                  </div>
                </div>
              </Link>

              <Link href="/methodes/least-to-most" className="block transition-transform hover:scale-[1.02]">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-violet-100 p-2 rounded-lg mr-3">
                      <Layers className="h-5 w-5 text-violet-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Least-to-Most Prompting</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Abordez un problème en commençant par des prompts très simples, puis en augmentant graduellement la
                    complexité des demandes.
                  </p>
                  <div className="flex mb-4">
                    <span className="bg-violet-50 text-violet-700 text-xs px-2 py-1 rounded mr-2">Progressif</span>
                    <span className="bg-violet-50 text-violet-700 text-xs px-2 py-1 rounded mr-2">Structuré</span>
                    <span className="bg-violet-50 text-violet-700 text-xs px-2 py-1 rounded">Méthodique</span>
                  </div>
                  <div className="bg-violet-50 p-4 rounded-lg border border-violet-200">
                    <p className="text-sm text-violet-800">
                      <strong>Difficulté :</strong> Avancé
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="decision-tree" className="overflow-hidden">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
                Choisir la bonne technique de prompting
              </h3>
              <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                Utilisez cet arbre de décision pour vous aider à choisir la technique de prompting la plus adaptée à
                votre situation. Suivez les questions et les chemins pour trouver la méthode recommandée.
              </p>

              <div className="overflow-x-auto">
                <DecisionTree />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Avant / Après : Amélioration d'un prompt</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-medium text-red-800 mb-2">❌ Prompt inefficace</h4>
                    <p className="text-gray-700">"Écris-moi un plan d'apprentissage."</p>
                    <div className="mt-3 text-sm text-red-700">
                      <p>
                        <strong>Problèmes :</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Trop vague</li>
                        <li>Aucun contexte</li>
                        <li>Pas de précision sur le résultat attendu</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-800 mb-2">✅ Prompt efficace</h4>
                    <p className="text-gray-700">
                      "En tant que coach d'apprentissage, crée un plan de 6 semaines pour apprendre les bases de la
                      programmation Python pour un débutant complet qui dispose de 5 heures par semaine. Le plan doit
                      inclure des objectifs hebdomadaires, des ressources gratuites en ligne, des exercices pratiques et
                      des projets simples pour appliquer les connaissances."
                    </p>
                    <div className="mt-3 text-sm text-green-700">
                      <p>
                        <strong>Améliorations :</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Contexte précis</li>
                        <li>Public cible identifié</li>
                        <li>Contraintes et attentes claires</li>
                        <li>Éléments spécifiques demandés</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-6">Application des techniques de prompting</h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4 py-1">
                    <h4 className="font-medium text-lg text-blue-800 mb-2">Zero-Shot Prompting</h4>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium mb-2">Exemple :</p>
                      <p className="text-gray-700 italic">
                        "Rédige un email de 150 mots maximum pour informer mon équipe du report de la réunion
                        trimestrielle prévue le 15 juin au 22 juin. La raison est l'indisponibilité de la salle de
                        conférence. Le ton doit être professionnel mais cordial. Inclus un rappel des documents à
                        préparer pour cette réunion."
                      </p>
                      <div className="mt-3 text-sm text-blue-700">
                        <p>
                          <strong>Pourquoi c'est efficace :</strong> Instructions claires, contraintes précises
                          (longueur), contexte suffisant et indication sur le ton à adopter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4 py-1">
                    <h4 className="font-medium text-lg text-green-800 mb-2">One-Shot Prompting</h4>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium mb-2">Exemple :</p>
                      <p className="text-gray-700 italic">
                        "Voici comment je souhaite que tu structures les fiches récapitulatives de réunion :<br />
                        <br />
                        <strong>RÉUNION : Lancement Projet Alpha</strong>
                        <br />
                        <strong>DATE :</strong> 12/05/2025
                        <br />
                        <strong>PARTICIPANTS :</strong> Marie L., Thomas D., Sophie B.
                        <br />
                        <strong>POINTS ABORDÉS :</strong>
                        <br />• Présentation du calendrier
                        <br />• Attribution des rôles
                        <br />• Questions budgétaires
                        <br />
                        <strong>DÉCISIONS :</strong>
                        <br />• Validation du planning avec ajustement sur la phase 2<br />• Thomas D. nommé
                        coordinateur technique
                        <br />
                        <strong>ACTIONS :</strong>
                        <br />• Marie : finaliser le brief créatif [Échéance : 19/05]
                        <br />• Thomas : constituer l'équipe technique [Échéance : 26/05]
                        <br />
                        <strong>PROCHAINE RÉUNION :</strong> 02/06/2025
                        <br />
                        <br />
                        Maintenant, crée une fiche similaire pour la réunion 'Revue Stratégique Q2' qui s'est tenue le
                        05/06/2025 avec Jean M., Lucie P., et Ahmed K., où nous avons discuté des résultats du
                        trimestre, des objectifs Q3 et de la réorganisation de l'équipe commerciale. Les décisions
                        prises étaient l'ajustement des objectifs de vente (-5%) et le lancement d'un nouveau programme
                        de formation. Les actions à suivre sont : Jean doit communiquer les nouveaux objectifs avant le
                        15/06 et Lucie doit finaliser le programme de formation pour le 30/06."
                      </p>
                      <div className="mt-3 text-sm text-green-700">
                        <p>
                          <strong>Pourquoi c'est efficace :</strong> Fournit un exemple clair du format attendu, puis
                          demande une application avec de nouvelles données. Le modèle peut ainsi reproduire exactement
                          la structure souhaitée.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4 py-1">
                    <h4 className="font-medium text-lg text-purple-800 mb-2">Chain-of-Thought</h4>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium mb-2">Exemple :</p>
                      <p className="text-gray-700 italic">
                        "Je dois déterminer le meilleur emplacement pour notre nouveau bureau parmi trois options.
                        Aide-moi à prendre cette décision en raisonnant étape par étape.
                        <br />
                        <br />
                        Les critères à considérer sont :<br />- Accessibilité pour les employés (40% d'importance)
                        <br />- Coût du loyer (30% d'importance)
                        <br />- Espace disponible (20% d'importance)
                        <br />- Environnement de travail (10% d'importance)
                        <br />
                        <br />
                        Les options sont :<br />
                        Option A : Centre-ville - Très accessible (9/10), loyer élevé (5/10), espace limité (6/10),
                        excellent environnement (9/10)
                        <br />
                        Option B : Zone périphérique - Moyennement accessible (6/10), loyer modéré (7/10), grand espace
                        (8/10), bon environnement (7/10)
                        <br />
                        Option C : Parc d'affaires - Peu accessible (4/10), loyer économique (9/10), espace moyen
                        (7/10), environnement correct (6/10)
                        <br />
                        <br />
                        Analyse chaque option en détaillant ton raisonnement, puis recommande la meilleure option en
                        justifiant ton choix."
                      </p>
                      <div className="mt-3 text-sm text-purple-700">
                        <p>
                          <strong>Pourquoi c'est efficace :</strong> Demande explicitement un raisonnement étape par
                          étape, fournit des critères pondérés et des données structurées pour permettre une analyse
                          logique et transparente.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 py-1">
                    <h4 className="font-medium text-lg text-amber-800 mb-2">RCT (Rôle, Contexte, Tâche)</h4>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-gray-700 font-medium mb-2">Exemple :</p>
                      <p className="text-gray-700 italic">
                        "<strong>Rôle :</strong> Tu es un consultant en communication de crise avec 15 ans d'expérience
                        dans la gestion de réputation des entreprises technologiques.
                        <br />
                        <br />
                        <strong>Contexte :</strong> Notre entreprise de logiciels vient de subir une fuite de données
                        affectant environ 10 000 utilisateurs. Les données exposées incluent des noms, emails et
                        historiques d'achats, mais pas d'informations bancaires ni de mots de passe. L'incident a été
                        causé par une erreur de configuration d'un développeur junior et a duré 48 heures avant d'être
                        détecté. Nous avons déjà corrigé la faille, mais l'information commence à circuler sur les
                        réseaux sociaux.
                        <br />
                        <br />
                        <strong>Tâche :</strong> Élabore un plan de communication de crise complet incluant :<br />
                        1. Un communiqué de presse à diffuser dans les 24 heures
                        <br />
                        2. Un script pour une vidéo du PDG adressant la situation
                        <br />
                        3. Un email à envoyer aux utilisateurs affectés
                        <br />
                        4. Une stratégie de réponse pour les réseaux sociaux
                        <br />
                        5. Un calendrier des actions de communication pour les 7 prochains jours"
                      </p>
                      <div className="mt-3 text-sm text-amber-700">
                        <p>
                          <strong>Pourquoi c'est efficace :</strong> Structure claire avec rôle expert défini, contexte
                          détaillé et tâche précise. Le rôle oriente le style et le niveau d'expertise, le contexte
                          fournit toutes les informations nécessaires, et la tâche détaille exactement les livrables
                          attendus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Exemples de prompts efficaces par catégorie</h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                    <h4 className="font-medium text-blue-800 mb-2">📚 Éducation</h4>
                    <p className="text-gray-700">
                      "Tu es un expert en pédagogie spécialisé dans l'apprentissage des langues. Crée un plan de leçon
                      interactif de 45 minutes pour enseigner les expressions idiomatiques françaises à des étudiants de
                      niveau intermédiaire (B1). La leçon doit inclure : une activité d'introduction, l'explication de 5
                      expressions courantes avec leur contexte culturel, des exercices pratiques en binômes, et une
                      activité finale ludique pour renforcer la mémorisation. Fournis également des conseils pour
                      l'enseignant sur les difficultés potentielles et comment y remédier."
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                    <h4 className="font-medium text-purple-800 mb-2">🧠 Développement personnel</h4>
                    <p className="text-gray-700">
                      "En tant que coach en développement personnel spécialisé dans la gestion du stress, propose-moi un
                      programme de 21 jours pour intégrer la pleine conscience dans ma routine quotidienne. Je suis un
                      professionnel occupé avec peu de temps libre, souffrant d'anxiété liée au travail. Le programme
                      doit inclure : des exercices quotidiens de 5-10 minutes, des techniques de respiration
                      spécifiques, des suggestions pour des micro-pauses en milieu de travail, et un système de suivi
                      des progrès. Adapte les recommandations pour quelqu'un qui n'a jamais pratiqué la méditation
                      auparavant."
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-green-200 bg-green-50">
                    <h4 className="font-medium text-green-800 mb-2">💼 Professionnel</h4>
                    <p className="text-gray-700">
                      "En tant que spécialiste en développement de carrière, aide-moi à préparer une négociation
                      salariale avec mon employeur actuel. Je suis développeur full-stack avec 4 ans d'expérience dans
                      l'entreprise, où j'ai dirigé 3 projets majeurs cette année. Mes recherches montrent que le salaire
                      du marché pour mon poste est 15% supérieur à ma rémunération actuelle. Fournis-moi un script de
                      négociation structuré incluant : 1) une introduction valorisant ma contribution, 2) une
                      présentation factuelle de mes accomplissements récents avec métriques, 3) ma demande
                      d'augmentation avec justification, 4) des réponses préparées aux objections possibles, et 5) une
                      proposition de compromis si ma demande initiale est refusée. Le ton doit être assertif mais
                      collaboratif."
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-amber-200 bg-amber-50">
                    <h4 className="font-medium text-amber-800 mb-2">🏥 Santé et bien-être</h4>
                    <p className="text-gray-700">
                      "En tant que nutritionniste spécialisé dans l'alimentation pour sportifs, crée un plan alimentaire
                      hebdomadaire pour une coureuse de semi-marathon de 35 ans qui s'entraîne 5 jours par semaine (3
                      jours de course, 2 jours de renforcement). Elle est végétarienne (consomme œufs et produits
                      laitiers), a une légère intolérance au lactose, et souhaite optimiser sa récupération et ses
                      performances. Son objectif est d'améliorer son temps sur 21km de 10 minutes dans les 3 prochains
                      mois. Le plan doit inclure 3 repas et 2 collations par jour, avec des options de pré/post
                      entraînement, des recommandations d'hydratation, et des alternatives pour les jours de
                      compétition. Précise les macronutriments approximatifs et les moments optimaux de consommation."
                    </p>
                  </div>

                  <div className="p-4 rounded-lg border border-rose-200 bg-rose-50">
                    <h4 className="font-medium text-rose-800 mb-2">🛠️ Résolution de problèmes</h4>
                    <p className="text-gray-700">
                      "En tant qu'expert en optimisation de processus, aide-moi à résoudre un problème de délais dans
                      notre chaîne logistique. Notre entreprise de e-commerce constate que le temps entre la commande et
                      la livraison a augmenté de 2 à 5 jours au cours des trois derniers mois, générant une hausse de
                      30% des plaintes clients. Nous disposons de 2 entrepôts, travaillons avec 3 transporteurs
                      différents, et utilisons un système de gestion des commandes qui date de 5 ans. Notre volume de
                      commandes a augmenté de 40% depuis le début de l'année sans modification de nos effectifs. Analyse
                      ce problème en utilisant la méthode des 5 Pourquoi, identifie les goulots d'étranglement
                      potentiels, et propose 3 solutions concrètes à court terme et 2 recommandations stratégiques à
                      long terme. Pour chaque solution, évalue l'impact potentiel, le coût approximatif et la complexité
                      de mise en œuvre."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold mb-6">Cas d'utilisation réels avec avant/après</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-medium text-lg text-gray-800 mb-3">Rédaction d'une description de poste</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="font-medium text-red-800 mb-2">❌ Avant</p>
                        <p className="text-gray-700 italic">
                          "Écris une offre d'emploi pour un poste de chef de projet."
                        </p>
                        <div className="mt-3 text-sm text-red-700">
                          <p>
                            <strong>Problèmes :</strong> Aucune information sur l'entreprise, le secteur, les
                            compétences requises ou le niveau d'expérience.
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="font-medium text-green-800 mb-2">✅ Après</p>
                        <p className="text-gray-700 italic">
                          "Rédige une offre d'emploi attrayante pour un poste de Chef de Projet Digital dans notre
                          agence de marketing spécialisée en e-commerce (25 personnes). Le candidat idéal a 3-5 ans
                          d'expérience en gestion de projets web, maîtrise la méthodologie Agile et possède une bonne
                          compréhension technique (HTML, CSS, UX/UI). Il devra gérer simultanément 4-5 projets clients,
                          coordonner une équipe de 3-4 personnes, et assurer la relation client. Nous offrons un salaire
                          de 45-55K€, télétravail partiel (2j/semaine) et une ambiance startup. Le ton doit être
                          professionnel mais dynamique, reflétant notre culture d'entreprise innovante."
                        </p>
                        <div className="mt-3 text-sm text-green-700">
                          <p>
                            <strong>Améliorations :</strong> Détails précis sur le poste, l'entreprise, les compétences
                            requises, les responsabilités, les avantages et le ton souhaité.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-lg text-gray-800 mb-3">Analyse de données commerciales</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="font-medium text-red-800 mb-2">❌ Avant</p>
                        <p className="text-gray-700 italic">
                          "Analyse ces chiffres de vente et dis-moi ce que je devrais faire : Jan: 45K€, Fév: 42K€,
                          Mars: 38K€, Avr: 41K€, Mai: 36K€, Juin: 32K€"
                        </p>
                        <div className="mt-3 text-sm text-red-700">
                          <p>
                            <strong>Problèmes :</strong> Manque de contexte, pas d'information sur le secteur, les
                            produits, la saisonnalité ou les objectifs.
                          </p>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="font-medium text-green-800 mb-2">✅ Après</p>
                        <p className="text-gray-700 italic">
                          "En tant qu'analyste commercial, examine les données de vente de notre boutique de vêtements
                          pour le premier semestre 2025 et identifie les tendances et opportunités d'amélioration. Voici
                          nos chiffres mensuels :<br />
                          Jan: 45K€ (Soldes d'hiver)
                          <br />
                          Fév: 42K€ (Fin des soldes)
                          <br />
                          Mars: 38K€ (Nouvelle collection printemps)
                          <br />
                          Avr: 41K€ (Promotion de Pâques -15%)
                          <br />
                          Mai: 36K€ (Sans événement particulier)
                          <br />
                          Juin: 32K€ (Début des soldes d'été le 28/06)
                          <br />
                          <br />
                          Pour référence, nos chiffres de l'année dernière sur la même période étaient en moyenne 5%
                          plus élevés, et notre objectif était une croissance de 3%. Notre marge brute est de 45%. Nos
                          meilleures catégories sont les accessoires (marge 60%) et les vêtements femme (marge 50%).
                          <br />
                          <br />
                          Analyse ces données pour :<br />
                          1. Identifier les tendances et problèmes potentiels
                          <br />
                          2. Suggérer 3 actions concrètes pour inverser la tendance baissière
                          <br />
                          3. Recommander une stratégie promotionnelle pour le prochain trimestre"
                        </p>
                        <div className="mt-3 text-sm text-green-700">
                          <p>
                            <strong>Améliorations :</strong> Contexte complet, données comparatives, informations sur
                            les marges et catégories, objectifs clairs pour l'analyse.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
