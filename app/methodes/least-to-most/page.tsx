import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { CheckCircle, XCircle, LineChartIcon, NetworkIcon, ScaleIcon, Lightbulb, ChevronDown } from "lucide-react"
import PdfDownloadButton from "@/components/pdf-download-button"

export const metadata: Metadata = {
  title: "Least-to-Most Prompting | Next-ai.fr",
  description:
    "Découvrez la technique du Least-to-Most Prompting pour résoudre des problèmes complexes étape par étape",
}

export default function LeastToMostPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="bg-white border-b pb-8 mb-8">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full mb-4">
            Niveau : Avancé
          </span>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Least-to-Most Prompting</h1>
          <p className="text-xl text-gray-600 mb-6">Du plus simple au plus complexe</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
          Accueil
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <Link href="/methodes" className="text-gray-500 hover:text-blue-600 transition-colors">
          Techniques
        </Link>
        <span className="mx-2 text-gray-500">›</span>
        <span className="text-blue-600 font-medium">Least-to-Most Prompting</span>
      </div>

      <div className="flex justify-end mb-6">
        <PdfDownloadButton
          title="Least-to-Most Prompting"
          filename="least-to-most-next-ai.pdf"
          className="flex items-center gap-2"
        />
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="exemple">Exemple</TabsTrigger>
          <TabsTrigger value="cas-usage">Cas d&apos;usage</TabsTrigger>
          <TabsTrigger value="conseils">Conseils pratiques</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-8">
          {/* Definition Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
            <h2 className="text-xl font-bold text-blue-700 mb-3">En quoi consiste le Least-to-Most Prompting ?</h2>
            <p className="text-gray-700">
              Le Least-to-Most Prompting est une technique où l&apos;on aborde un problème en commençant par des prompts
              très simples, puis en augmentant graduellement la complexité des demandes. Plutôt que de directement poser
              la question la plus difficile, on mène l&apos;IA à la solution finale par une série de questions
              intermédiaires de difficulté croissante. Cette méthode aide le modèle à mieux comprendre la tâche de
              manière progressive et à construire sa réponse pas à pas avec assurance.
            </p>
          </div>

          {/* How it Works */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Comment ça fonctionne</h2>
            <p className="mb-4">
              Le consultant planifie une série de requêtes successives. D&apos;abord, un prompt &quot;least&quot; (le
              plus simple) est posé – par exemple une question de définition ou un sous-calcul. Une fois l&apos;IA y
              ayant répondu, on utilise cette réponse pour formuler le prompt suivant, un peu plus complexe, et ainsi de
              suite jusqu&apos;au prompt &quot;most&quot; final qui correspond à la question originelle complète.
            </p>
            <p className="mb-6">
              On peut aussi intégrer cette progression dans un seul prompt en explicitant les étapes, mais souvent le
              faire en plusieurs tours permet de valider chaque étape. Cette approche s&apos;apparente à une méthode
              pédagogique où l&apos;on résout d&apos;abord les sous-problèmes faciles, puis on assemble progressivement
              ces éléments pour traiter le problème global.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Prompt initial (le plus simple)</h3>
                    <p className="mb-3">
                      Commencez par une question basique ou une demande simple qui établit les fondements nécessaires.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                      Décris brièvement ce qu&apos;est l&apos;intelligence artificielle générative.
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Complexité intermédiaire</h3>
                    <p className="mb-3">
                      Utilisez la réponse précédente pour formuler une question plus élaborée, qui s&apos;appuie sur les
                      connaissances déjà établies.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                      Maintenant, explique les principaux modèles d&apos;IA générative existants et leurs différences
                      fondamentales.
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Complexité avancée</h3>
                    <p className="mb-3">
                      Augmentez encore le niveau de détail et de spécificité en intégrant les connaissances des étapes
                      précédentes.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                      En te basant sur ces modèles, analyse comment ils peuvent être appliqués spécifiquement au secteur
                      financier.
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Question finale (la plus complexe)</h3>
                    <p className="mb-3">
                      Posez enfin la question la plus complexe qui intègre tout ce qui a été discuté précédemment.
                    </p>
                    <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                      À partir de ton analyse précédente, élabore une stratégie d&apos;implémentation de l&apos;IA
                      générative pour une banque d&apos;investissement qui souhaite améliorer son analyse de risques et
                      sa prise de décision.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pros and Cons */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Avantages et limites</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <CheckCircle className="text-green-600 mr-2 h-5 w-5" />
                  <span>Avantages</span>
                </h3>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>
                    <strong>Structure la résolution des tâches complexes</strong> en sous-problèmes plus faciles à
                    résoudre
                  </li>
                  <li>
                    <strong>Améliore la qualité des réponses finales</strong> en construisant progressivement sur des
                    bases solides
                  </li>
                  <li>
                    <strong>Permet de vérifier chaque étape intermédiaire</strong> et de corriger les erreurs avant de
                    poursuivre
                  </li>
                  <li>
                    <strong>Guide fermement l&apos;IA</strong> sans lui donner directement la réponse
                  </li>
                  <li>
                    <strong>&quot;Échauffe&quot; l&apos;IA</strong> sur le contexte avant d&apos;aborder les questions
                    plus difficiles
                  </li>
                  <li>
                    <strong>Idéal pour les problèmes décomposables</strong> en sous-étapes logiques
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="flex items-center text-lg font-semibold mb-4">
                  <XCircle className="text-red-600 mr-2 h-5 w-5" />
                  <span>Limites</span>
                </h3>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>
                    <strong>Processus potentiellement long</strong> avec de nombreuses étapes intermédiaires
                  </li>
                  <li>
                    <strong>Nécessite de savoir découper le problème</strong> en sous-questions pertinentes
                  </li>
                  <li>
                    <strong>Demande une vision claire</strong> du cheminement vers la solution
                  </li>
                  <li>
                    <strong>Risque de transitions mal gérées</strong> entre les étapes
                  </li>
                  <li>
                    <strong>Peut être superflu pour des questions simples</strong> où une approche directe suffirait
                  </li>
                  <li>
                    <strong>Implique plusieurs prompts successifs</strong>, augmentant potentiellement le coût en tokens
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="exemple">
          {/* Example */}
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Exemple concret</h2>

            <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
              <div className="bg-blue-600 text-white p-4 font-medium">Exemple de Least-to-Most Prompting</div>
              <div className="p-6">
                <p className="mb-4">
                  Cas : Un dirigeant souhaite évaluer l&apos;impact potentiel de l&apos;économie circulaire sur son
                  modèle d&apos;affaires industriel.
                </p>

                <div className="mb-6">
                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">
                    Étape 1 : Définition basique
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4">
                    Qu&apos;est-ce que l&apos;économie circulaire et quels sont ses principes fondamentaux ?
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Réponse 1</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                    <p className="mb-2">
                      L&apos;économie circulaire est un modèle économique qui vise à limiter la consommation de
                      ressources et la production de déchets en créant des boucles de valeur positives. Contrairement à
                      l&apos;économie linéaire traditionnelle (extraire, fabriquer, jeter), elle s&apos;inspire des
                      cycles naturels pour créer un système régénératif.
                    </p>

                    <p className="mb-2">Ses principes fondamentaux sont :</p>
                    <ul className="list-disc pl-5 mb-2">
                      <li>
                        <strong>Éco-conception</strong> : Concevoir les produits pour minimiser leur impact
                        environnemental sur tout leur cycle de vie
                      </li>
                      <li>
                        <strong>Économie de la fonctionnalité</strong> : Privilégier l&apos;usage plutôt que la
                        possession, vendre un service plutôt qu&apos;un bien
                      </li>
                      <li>
                        <strong>Réemploi</strong> : Réutilisation des produits ou de leurs composants
                      </li>
                      <li>
                        <strong>Recyclage</strong> : Transformer les déchets en nouvelles matières premières
                      </li>
                      <li>
                        <strong>Réparation</strong> : Remettre en état les produits défectueux pour prolonger leur durée
                        de vie
                      </li>
                    </ul>
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">
                    Étape 2 : Adaptation au contexte
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4">
                    Comment ces principes peuvent-ils s&apos;appliquer concrètement à une entreprise industrielle comme
                    la nôtre ?
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Réponse 2</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                    <p className="mb-2">Plusieurs pistes peuvent être explorées :</p>
                    <ul className="list-disc pl-5 mb-2">
                      <li>
                        <strong>Éco-conception</strong> : Concevoir des produits plus durables, réparables et facilement
                        recyclables.
                      </li>
                      <li>
                        <strong>Economie de la fonctionnalité</strong> : Proposer des contrats de location ou de
                        performance plutôt que de simples ventes.
                      </li>
                      <li>
                        <strong>Réemploi</strong> : Mettre en place des filières de réutilisation des produits ou de
                        leurs composants.
                      </li>
                      <li>
                        <strong>Recyclage</strong> : Optimiser la collecte et le recyclage des déchets de production.
                      </li>
                    </ul>
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">
                    Étape 3 : Impact potentiel
                  </h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4">
                    Quels seraient les avantages et les inconvénients d&apos;une telle transition vers l&apos;économie
                    circulaire pour notre entreprise ?
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Réponse 3</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                    <p className="mb-2">
                      Les avantages potentiels sont nombreux : réduction des coûts de matières premières, amélioration
                      de l&apos;image de marque, création de nouvelles opportunités de marché, etc. Les inconvénients
                      pourraient être des investissements initiaux importants, des changements organisationnels
                      complexes, etc.
                    </p>
                  </div>

                  <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Question finale</h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4">
                    Compte tenu de ces éléments, quelle stratégie concrète recommanderiez-vous pour intégrer
                    l&apos;économie circulaire à notre modèle d&apos;affaires ?
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="cas-usage">
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Cas d&apos;usage</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Résolution de problèmes complexes</h3>
                    <p className="mb-3">
                      Le Least-to-Most Prompting est particulièrement utile pour décomposer des problèmes complexes en
                      étapes plus simples et gérables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    <LineChartIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Analyse de données</h3>
                    <p className="mb-3">
                      Cette technique peut être utilisée pour guider l&apos;IA à travers l&apos;analyse de données
                      complexes en commençant par des questions simples et en augmentant progressivement la complexité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    <NetworkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Génération de contenu</h3>
                    <p className="mb-3">
                      Le Least-to-Most Prompting peut aider à générer du contenu de haute qualité en guidant l&apos;IA à
                      travers un processus d&apos;écriture étape par étape.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    <ScaleIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Prise de décision</h3>
                    <p className="mb-3">
                      Cette technique peut être utilisée pour aider à la prise de décision en décomposant les problèmes
                      complexes en étapes plus simples et en guidant l&apos;IA à travers un processus de raisonnement
                      étape par étape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="conseils">
          <section>
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Conseils pratiques</h2>

            <ul className="space-y-4 pl-5 list-disc">
              <li>
                <strong>Définissez clairement l&apos;objectif final</strong> : Avant de commencer, assurez-vous de bien
                comprendre le problème que vous essayez de résoudre.
              </li>
              <li>
                <strong>Décomposez le problème en étapes</strong> : Identifiez les étapes nécessaires pour résoudre le
                problème et ordonnez-les de la plus simple à la plus complexe.
              </li>
              <li>
                <strong>Formulez des prompts clairs et précis</strong> : Chaque prompt doit être formulé de manière à
                guider l&apos;IA vers la solution de l&apos;étape correspondante.
              </li>
              <li>
                <strong>Vérifiez les réponses de l&apos;IA</strong> : Assurez-vous que chaque réponse de l&apos;IA est
                correcte avant de passer à l&apos;étape suivante.
              </li>
              <li>
                <strong>Expérimentez avec différentes formulations</strong> : N&apos;hésitez pas à expérimenter avec
                différentes formulations de prompts pour obtenir les meilleurs résultats.
              </li>
              <li>
                <strong>Soyez patient</strong> : Le Least-to-Most Prompting peut prendre du temps, mais il peut être
                très efficace pour résoudre des problèmes complexes.
              </li>
            </ul>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
