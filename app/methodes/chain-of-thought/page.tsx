import Link from "next/link"
import { ArrowLeft, Copy, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ChainOfThoughtPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Chain-of-Thought Prompting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Pensée étape par étape pour des résultats précis</p>
        <Badge variant="outline" className="mt-4 bg-amber-50 text-amber-800 hover:bg-amber-50">
          Niveau : Intermédiaire
        </Badge>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid grid-cols-4 w-full max-w-4xl mx-auto mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="exemples">Exemples</TabsTrigger>
          <TabsTrigger value="cas-usage">Cas d'usage</TabsTrigger>
          <TabsTrigger value="conseils">Conseils pratiques</TabsTrigger>
        </TabsList>

        {/* Onglet Description */}
        <TabsContent value="description" className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              En quoi consiste le Chain-of-Thought Prompting ?
            </h3>
            <p className="text-gray-700">
              Le Chain-of-Thought (CoT) Prompting est une technique qui amène le modèle d'IA à décomposer son
              raisonnement en plusieurs étapes au lieu de fournir directement une réponse. On lui demande en quelque
              sorte de "penser à voix haute" : l'IA explicite une suite logique d'idées ou de calculs menant à la
              solution finale. L'objectif est d'améliorer les performances sur les tâches complexes nécessitant logique
              ou calcul, en imitant le raisonnement humain pas-à-pas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Pour utiliser le Chain-of-Thought, l'utilisateur formule le prompt de manière à inciter l'IA à détailler
              son raisonnement. Par exemple, on peut ajouter une instruction du type « Explique ton raisonnement étape
              par étape avant de donner la réponse finale » à la question posée. Ainsi, au lieu de répondre d'emblée, le
              modèle va d'abord lister une série d'étapes logiques ou de réflexions, puis conclure.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Prompt avec instruction de raisonnement</div>
                <p className="text-gray-700">
                  Calcule le coût total de 3 livres à 12€ et 2 cahiers à 4€, en détaillant le calcul étape par étape.
                </p>
              </div>

              <div className="flex justify-center text-blue-500 text-2xl">↓</div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Réponse décomposée en étapes</div>
                <div className="text-gray-700">
                  <p className="mb-2">
                    <strong>Étape 1 :</strong> Calculons le coût des livres : 3 livres × 12€ = 36€
                  </p>
                  <p className="mb-2">
                    <strong>Étape 2 :</strong> Calculons le coût des cahiers : 2 cahiers × 4€ = 8€
                  </p>
                  <p className="mb-2">
                    <strong>Étape 3 :</strong> Additionnons les deux coûts : 36€ + 8€ = 44€
                  </p>
                  <p>
                    <strong>Conclusion :</strong> Le coût total est de 44€.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="font-semibold text-center mb-4">Approche directe</div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm">
                <p className="mb-2">
                  <strong>Prompt :</strong> Une entreprise vend des t-shirts au prix de 15€ l'unité. Pour les commandes
                  de plus de 10 t-shirts, une remise de 20% est appliquée sur le prix total. Un client commande 15
                  t-shirts. Calcule le montant total de la commande.
                </p>
                <p>
                  <strong>Réponse :</strong> Le montant total de la commande est de 180€.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-500 font-bold">VS</div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="font-semibold text-center mb-4">Chain-of-Thought</div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm">
                <p className="mb-2">
                  <strong>Prompt :</strong> Une entreprise vend des t-shirts au prix de 15€ l'unité. Pour les commandes
                  de plus de 10 t-shirts, une remise de 20% est appliquée sur le prix total. Un client commande 15
                  t-shirts. Calcule le montant total de la commande en détaillant ton raisonnement étape par étape.
                </p>
                <p>
                  <strong>Réponse :</strong> [Détail du raisonnement en 4 étapes + conclusion]
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-4">Avantages</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Améliore la précision</strong> sur les tâches complexes nécessitant plusieurs étapes de
                    raisonnement
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Transparence</strong> : permet de suivre le cheminement de l'IA et d'identifier
                    d'éventuelles erreurs
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Réduit les erreurs logiques</strong> en forçant l'IA à décomposer son raisonnement
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Facilite la vérification</strong> des résultats intermédiaires et finaux
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-green-600 dark:text-green-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Pédagogique</strong> : montre au lecteur comment résoudre le problème pas à pas
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800">
              <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-4">Limites</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-red-600 dark:text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Réponses plus longues</strong> qui peuvent être superflues pour des questions simples
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-red-600 dark:text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Peut commettre des erreurs</strong> dans ses étapes tout en paraissant convaincant
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-red-600 dark:text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Consomme plus de tokens</strong> que des réponses directes
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-red-600 dark:text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Risque de sur-expliciter</strong> des étapes triviales
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-800 p-1 rounded-full mr-2 mt-1">
                    <svg
                      className="h-3 w-3 text-red-600 dark:text-red-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Mal guidé, peut dévier du sujet</strong> ou s'attarder sur des détails non essentiels
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Exemples */}
        <TabsContent value="exemples">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de Chain-of-Thought Prompting</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Une entreprise vend des t-shirts au prix de 15€ l'unité. Pour les commandes de plus de 10 t-shirts,
                  une remise de 20% est appliquée sur le prix total. Un client commande 15 t-shirts. Calcule le montant
                  total de la commande en détaillant ton raisonnement étape par étape.
                </p>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Réponse de l'IA</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="mb-3">
                  <strong>Étape 1 :</strong> Calculons d'abord le prix sans remise.
                </p>
                <p className="mb-1">Prix unitaire = 15€</p>
                <p className="mb-1">Nombre de t-shirts = 15</p>
                <p className="mb-3">Prix total sans remise = 15€ × 15 = 225€</p>

                <p className="mb-3">
                  <strong>Étape 2 :</strong> Vérifions si la commande est éligible à la remise.
                </p>
                <p className="mb-1">La remise s'applique pour les commandes de plus de 10 t-shirts.</p>
                <p className="mb-3">
                  Comme le client commande 15 t-shirts, et que 15 &gt; 10, la commande est éligible à la remise de 20%.
                </p>

                <p className="mb-3">
                  <strong>Étape 3 :</strong> Calculons le montant de la remise.
                </p>
                <p className="mb-1">Remise = 20% du prix total</p>
                <p className="mb-3">Montant de la remise = 225€ × 0,20 = 45€</p>

                <p className="mb-3">
                  <strong>Étape 4 :</strong> Soustrayons la remise du prix total.
                </p>
                <p className="mb-1">Prix final = Prix total - Montant de la remise</p>
                <p className="mb-3">Prix final = 225€ - 45€ = 180€</p>

                <p className="font-medium">
                  <strong>Conclusion :</strong> Le montant total de la commande est de 180€.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple d'application en RH</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Notre entreprise doit décider entre deux candidats pour un poste de chef de projet. Le candidat A a 8
                  ans d'expérience, de solides compétences techniques (9/10), des compétences managériales moyennes
                  (6/10) et s'est très bien intégré à l'équipe lors des entretiens (8/10). Le candidat B a 5 ans
                  d'expérience, des compétences techniques correctes (7/10), d'excellentes compétences managériales
                  (9/10) et une bonne intégration à l'équipe (7/10). Pour ce poste, nous valorisons l'expérience à 15%,
                  les compétences techniques à 30%, les compétences managériales à 40% et l'intégration à l'équipe à
                  15%. Analyse étape par étape quel candidat correspond le mieux à nos besoins selon ces critères
                  pondérés.
                </p>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Réponse de l'IA</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="mb-3">
                  <strong>Étape 1 :</strong> Identifions les critères et leurs pondérations.
                </p>
                <ul className="list-disc pl-5 mb-3">
                  <li>Expérience : 15% de la décision</li>
                  <li>Compétences techniques : 30% de la décision</li>
                  <li>Compétences managériales : 40% de la décision</li>
                  <li>Intégration à l'équipe : 15% de la décision</li>
                </ul>

                <p className="mb-3">
                  <strong>Étape 2 :</strong> Calculons le score du candidat A pour chaque critère pondéré.
                </p>
                <ul className="list-disc pl-5 mb-3">
                  <li>Expérience : 8 ans peut être évalué à 8/10. Score pondéré = 8 × 0,15 = 1,2</li>
                  <li>Compétences techniques : 9/10. Score pondéré = 9 × 0,30 = 2,7</li>
                  <li>Compétences managériales : 6/10. Score pondéré = 6 × 0,40 = 2,4</li>
                  <li>Intégration à l'équipe : 8/10. Score pondéré = 8 × 0,15 = 1,2</li>
                </ul>

                <p className="mb-3">
                  <strong>Étape 3 :</strong> Calculons le score total du candidat A.
                </p>
                <p className="mb-3">Score total A = 1,2 + 2,7 + 2,4 + 1,2 = 7,5/10</p>

                <p className="mb-3">
                  <strong>Étape 4 :</strong> Calculons le score du candidat B pour chaque critère pondéré.
                </p>
                <ul className="list-disc pl-5 mb-3">
                  <li>Expérience : 5 ans peut être évalué à 5/10. Score pondéré = 5 × 0,15 = 0,75</li>
                  <li>Compétences techniques : 7/10. Score pondéré = 7 × 0,30 = 2,1</li>
                  <li>Compétences managériales : 9/10. Score pondéré = 9 × 0,40 = 3,6</li>
                  <li>Intégration à l'équipe : 7/10. Score pondéré = 7 × 0,15 = 1,05</li>
                </ul>

                <p className="mb-3">
                  <strong>Étape 5 :</strong> Calculons le score total du candidat B.
                </p>
                <p className="mb-3">Score total B = 0,75 + 2,1 + 3,6 + 1,05 = 7,5/10</p>

                <p className="mb-3">
                  <strong>Étape 6 :</strong> Comparons les scores et analysons les résultats.
                </p>
                <p className="mb-3">
                  Les deux candidats obtiennent exactement le même score total de 7,5/10, ce qui suggère qu'ils sont
                  équivalents selon nos critères pondérés.
                </p>

                <p className="mb-3">
                  <strong>Étape 7 :</strong> Affinons l'analyse en regardant la répartition des points forts.
                </p>
                <p className="mb-3">
                  Le candidat A est plus fort en expérience, compétences techniques et intégration à l'équipe. Le
                  candidat B excelle particulièrement en compétences managériales, qui représentent notre critère le
                  plus important (40%).
                </p>

                <p className="font-medium">
                  <strong>Conclusion :</strong> Bien que les deux candidats aient le même score global, le candidat B
                  pourrait être légèrement préférable car il excelle dans le critère que nous valorisons le plus
                  (compétences managériales). Cependant, le choix final peut dépendre d'autres facteurs contextuels ou
                  de priorités spécifiques au projet.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Exemples de formulations efficaces</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Pour un problème mathématique</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Résous ce problème mathématique en détaillant chaque étape de ton raisonnement : Si un train part
                    de Paris à 8h00 et roule à 120 km/h, et qu'un autre train part de Lyon à 9h00 et roule à 100 km/h en
                    direction de Paris, à quelle heure se croiseront-ils sachant que Paris et Lyon sont distantes de 480
                    km ?"
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour une analyse logique</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Analyse ce raisonnement étape par étape et détermine s'il est valide ou s'il contient des erreurs
                    logiques : 'Tous les mammifères sont des animaux. Certains animaux peuvent voler. Donc, certains
                    mammifères peuvent voler.' Pour chaque étape de ton analyse, explique clairement ton raisonnement."
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour une prise de décision</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Notre entreprise doit choisir entre trois emplacements pour ouvrir une nouvelle succursale. Voici
                    les critères d'évaluation (notés sur 10) : - Emplacement A : Coût (7/10), Accessibilité (9/10),
                    Potentiel de croissance (6/10) - Emplacement B : Coût (5/10), Accessibilité (8/10), Potentiel de
                    croissance (9/10) - Emplacement C : Coût (8/10), Accessibilité (6/10), Potentiel de croissance
                    (7/10) En considérant que le coût compte pour 30% de la décision, l'accessibilité pour 25% et le
                    potentiel de croissance pour 45%, analyse étape par étape quelle option est la plus avantageuse."
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Cas d'usage */}
        <TabsContent value="cas-usage">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Analyse financière et budgétaire</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Parfait pour calculer des projections financières complexes avec une transparence totale sur la méthode
                utilisée.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Notre entreprise envisage un nouveau projet avec un investissement initial de 150 000€. Les revenus
                  estimés sont de 60 000€ la première année, 90 000€ la deuxième année et 120 000€ la troisième année.
                  Les coûts opérationnels annuels sont estimés à 40 000€. Avec un taux d'actualisation de 8%, calcule la
                  Valeur Actuelle Nette (VAN) de ce projet en expliquant ton raisonnement étape par étape."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Prise de décision stratégique</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Facilite l'analyse multi-critères pour évaluer différentes options stratégiques avec un raisonnement
                transparent.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Notre entreprise doit choisir entre trois emplacements pour ouvrir une nouvelle succursale. Voici les
                  critères d'évaluation (notés sur 10) : - Emplacement A : Coût (7/10), Accessibilité (9/10), Potentiel
                  de croissance (6/10) - Emplacement B : Coût (5/10), Accessibilité (8/10), Potentiel de croissance
                  (9/10) - Emplacement C : Coût (8/10), Accessibilité (6/10), Potentiel de croissance (7/10) En
                  considérant que le coût compte pour 30% de la décision, l'accessibilité pour 25% et le potentiel de
                  croissance pour 45%, analyse étape par étape quelle option est la plus avantageuse."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Analyse de cas éthiques ou juridiques</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Permet d'évaluer des situations complexes en décomposant l'analyse selon différents principes ou textes
                légaux.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Dans le cadre d'une campagne marketing, notre entreprise souhaite utiliser des photos prises lors
                  d'un événement public organisé par notre marque. Certaines personnes sont reconnaissables sur ces
                  images, mais nous n'avons pas recueilli de consentement explicite. En tenant compte du RGPD et des
                  lois sur le droit à l'image, analyse étape par étape si nous pouvons légalement utiliser ces photos
                  pour notre communication et quelles précautions nous devrions prendre."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Résolution de problèmes mathématiques</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Idéal pour décomposer des problèmes mathématiques complexes en étapes claires et vérifiables.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Un magasin propose une promotion 'Achetez-en 2, le 3ème à moitié prix' (le produit le moins cher
                  étant celui à moitié prix). Si j'achète 5 articles coûtant respectivement 20€, 15€, 30€, 10€ et 25€,
                  calcule étape par étape combien je vais payer au total et quelle est l'économie réalisée par rapport
                  au prix normal."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Applications professionnelles spécifiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Ressources Humaines</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilisez le Chain-of-Thought pour évaluer objectivement les candidats ou comparer des options de
                  formation.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Compare ces trois programmes de formation en leadership pour nos managers en décomposant ton analyse
                  selon les critères de coût, durée, contenu, format et retour sur investissement potentiel."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Marketing et communication</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Analysez l'efficacité potentielle de différentes stratégies marketing avec un raisonnement
                  transparent.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Évalue étape par étape l'impact probable de ces trois approches de campagne sur notre audience cible,
                  en considérant la portée, l'engagement, la conversion et le coût par acquisition."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Finance et investissement</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Décomposez des analyses financières complexes pour une meilleure compréhension et vérification.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Calcule le taux de rendement interne (TRI) de ce projet d'investissement en détaillant chaque étape
                  de ton calcul et en expliquant la signification de chaque valeur intermédiaire."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Gestion de projet</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Analysez les risques et opportunités d'un projet en décomposant chaque facteur.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Évalue la faisabilité de ce projet en décomposant ton analyse selon les ressources nécessaires, les
                  contraintes de temps, les dépendances et les risques potentiels."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Analyse de données</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interprétez des données complexes en explicitant chaque étape du raisonnement.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Analyse ces données de vente trimestrielles en détaillant étape par étape les tendances, les
                  anomalies et les facteurs potentiels qui expliquent les variations observées."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Éducation et formation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Créez des explications pédagogiques détaillées pour des concepts complexes.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Explique le concept d'intelligence artificielle générative en décomposant ton explication en étapes
                  progressives, en partant des principes fondamentaux jusqu'aux applications avancées."
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Conseils pratiques */}
        <TabsContent value="conseils">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-sm p-6 border border-blue-100 dark:border-blue-800 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                Conseils pour réussir vos Chain-of-Thought prompts
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Soyez explicite dans la demande d'étapes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Incluez des instructions claires comme "Explique ton raisonnement pas à pas" ou "Décompose ta réflexion
                en étapes" pour orienter l'IA vers une réponse structurée.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Pour les calculs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Demandez spécifiquement de "détailler chaque opération mathématique" pour obtenir un raisonnement clair
                et vérifiable à chaque étape du calcul.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Adaptez la complexité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Réservez cette technique aux problèmes complexes qui méritent une analyse en plusieurs étapes. Pour des
                questions simples, privilégiez des approches plus directes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Vérifiez les étapes intermédiaires</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilisez les étapes exposées pour identifier d'éventuelles erreurs dans le raisonnement. C'est l'un des
                principaux avantages de cette technique.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Guidez la structure</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vous pouvez suggérer le nombre d'étapes ou les aspects à considérer pour mieux cadrer l'analyse et
                obtenir une réponse plus pertinente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Combinez avec Few-Shot</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour des problèmes très complexes, montrez un exemple de raisonnement en chain-of-thought avant de poser
                votre question pour guider le modèle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Précisez le niveau de détail</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Indiquez si vous souhaitez une explication détaillée ou simplement les étapes principales pour adapter
                la réponse à vos besoins.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Demandez une conclusion</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Précisez que vous souhaitez une conclusion claire après l'explication des étapes pour synthétiser le
                raisonnement et faciliter la prise de décision.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Utilisez des critères explicites</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour les analyses comparatives, définissez clairement les critères et leur importance relative pour
                obtenir une évaluation structurée et objective.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Modèle de prompt Chain-of-Thought</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {`[Description du problème ou de la question]

Analyse ce problème étape par étape et explique ton raisonnement de manière détaillée. Pour chaque étape :
1. Identifie clairement les informations pertinentes
2. Explique ton approche et la logique utilisée
3. Montre les calculs ou le raisonnement intermédiaire
4. Tire des conclusions partielles si nécessaire

Après avoir détaillé toutes les étapes, fournis une conclusion finale claire qui répond directement à la question posée.`}
              </pre>
              <Button variant="ghost" size="sm" className="mt-4">
                <Copy className="h-4 w-4 mr-2" />
                Copier le modèle
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Techniques de prompting connexes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/methodes/few-shot" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Few-Shot Prompting</CardTitle>
                <CardDescription>Fournir plusieurs exemples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez comment fournir plusieurs exemples peut améliorer les performances du modèle.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/least-to-most" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Least-to-Most Prompting</CardTitle>
                <CardDescription>Décomposer en sous-problèmes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Apprenez à décomposer des problèmes complexes en sous-problèmes plus simples.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/generated-knowledge" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Generated Knowledge</CardTitle>
                <CardDescription>L'IA active d'abord ses connaissances</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez comment faire générer des connaissances avant de formuler une réponse finale.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
