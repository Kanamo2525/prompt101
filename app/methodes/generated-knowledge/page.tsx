"use client"

import { ArrowLeft, Database, CheckCircle, XCircle, Lightbulb } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GeneratedKnowledgePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/methodes" className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-lg bg-emerald-100 mr-3">
            <Database className="h-6 w-6 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold">Generated Knowledge Prompting</h1>
        </div>
        <div className="flex items-center">
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Niveau : Avancé
          </span>
        </div>
        <p className="text-gray-600 mt-4 text-lg">
          L'IA active d'abord ses connaissances avant de formuler sa réponse finale
        </p>
      </div>

      <Tabs defaultValue="description" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="examples">Exemples</TabsTrigger>
          <TabsTrigger value="use-cases">Cas d'usage</TabsTrigger>
          <TabsTrigger value="tips">Conseils</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              En quoi consiste le Generated Knowledge Prompting ?
            </h2>
            <p className="text-gray-700">
              La technique du Generated Knowledge consiste à demander au modèle de générer d'abord des connaissances ou
              informations utiles sur un sujet, avant de formuler sa réponse finale. Autrement dit, on scinde le
              processus en deux étapes : (1) l'IA produit une liste de faits, de points clés ou de données contextuelles
              qu'elle "sait" ou déduit du sujet, puis (2) on lui fait utiliser ces connaissances générées pour répondre
              à la question posée plus précisément.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="mb-4">
              Le consultant formule un prompt en deux temps. Par exemple : « Dresse d'abord la liste des principales
              stratégies marketing digital en 2025, puis utilise-les pour expliquer comment augmenter les ventes en
              ligne. » Lors de la première étape, l'IA génère la connaissance demandée (ici, les stratégies marketing).
              Il s'agit d'une sorte de brainstorming factuel effectué par l'IA elle-même. Ensuite, armée de ces
              informations, l'IA répond à la question finale en intégrant ces éléments.
            </p>

            <p className="mb-4">On peut aussi réaliser cela en deux interactions séparées :</p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>D'abord demander « Quelles sont les informations importantes sur [le sujet] ? »</li>
              <li>Puis enchaîner « À présent, en te basant sur ces informations, réponds à [la question initiale] »</li>
            </ol>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-lg font-semibold mb-4">Processus du Generated Knowledge Prompting</h3>
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full max-w-md text-center mb-4">
                  <p className="font-medium text-blue-700">Question complexe</p>
                </div>
                <div className="h-8 border-l-2 border-blue-400"></div>
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-full max-w-lg text-center mb-4">
                  <p className="font-medium text-blue-700">Étape 1 : Génération de connaissances</p>
                  <p className="text-sm text-blue-600 italic mt-1">Liste des faits, concepts et données pertinentes</p>
                </div>
                <div className="h-8 border-l-2 border-blue-400"></div>
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-full max-w-lg text-center mb-4">
                  <p className="font-medium text-blue-700">Étape 2 : Réponse basée sur les connaissances</p>
                  <p className="text-sm text-blue-600 italic mt-1">
                    Réponse précise et enrichie intégrant les informations
                  </p>
                </div>
                <div className="h-8 border-l-2 border-blue-400"></div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 w-full max-w-md text-center">
                  <p className="font-medium text-blue-700">Réponse finale complète</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                <CheckCircle className="h-5 w-5 mr-2" />
                Avantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Réponses approfondies</strong> : En explicitant d'abord les faits ou idées pertinentes, on
                    s'assure que la réponse finale s'appuie sur une base solide et diversifiée
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Exhaustivité améliorée</strong> : La phase de génération de connaissances agit comme une
                    checklist des points importants
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Transparence du processus</strong> : Le consultant voit les informations que l'IA considère
                    pertinentes avant d'obtenir la réponse finale
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Contrôle intermédiaire</strong> : Possibilité de valider ou corriger les connaissances
                    générées avant la réponse définitive
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                <XCircle className="h-5 w-5 mr-2" />
                Limites
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Risque d'informations erronées</strong> : L'IA peut générer des "connaissances" inexactes ou
                    non vérifiées qui fausseront la réponse finale
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Processus plus long</strong> : Cette méthode rend le prompt plus complexe ou nécessite deux
                    interactions au lieu d'une
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Disproportionné pour des questions simples</strong> : Inutilement lourd pour des demandes
                    basiques ou factuelles
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-medium mr-2">•</span>
                  <span>
                    <strong>Nécessite une vigilance accrue</strong> : Il faut contrôler la véracité des connaissances
                    produites, surtout pour des décisions importantes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="examples">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Exemple de Generated Knowledge Prompting</h2>

              <Card className="mb-6">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Prompt</h3>
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <p className="text-gray-800">
                        Avant de répondre à ma question, liste d'abord les principales tendances et évolutions récentes
                        en matière d'énergie renouvelable.
                        <br />
                        <br />
                        Ensuite, en te basant sur ces connaissances, explique comment une PME du secteur industriel
                        pourrait réduire son empreinte carbone tout en maîtrisant ses coûts énergétiques.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Réponse de l'IA</h3>
                    <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                      <h4 className="font-medium text-blue-800 mb-2">
                        Principales tendances et évolutions récentes en matière d'énergie renouvelable :
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2 mb-4">
                        <li>
                          <strong>Baisse significative des coûts</strong> : Le coût du photovoltaïque a chuté de plus de
                          85% depuis 2010, et l'éolien de 50%, rendant ces solutions compétitives face aux énergies
                          fossiles.
                        </li>
                        <li>
                          <strong>Développement du stockage d'énergie</strong> : Les technologies de batteries se
                          perfectionnent rapidement avec des coûts en baisse de 80% depuis 2010.
                        </li>
                        <li>
                          <strong>Autoconsommation & communautés énergétiques</strong> : Cadre réglementaire favorable à
                          l'autoconsommation individuelle ou collective.
                        </li>
                        <li>
                          <strong>Power Purchase Agreements (PPA)</strong> : Contrats d'achat d'électricité verte de
                          long terme.
                        </li>
                        <li>
                          <strong>Efficacité énergétique intégrée</strong> : Approche combinant sobriété, monitoring et
                          pilotage intelligent.
                        </li>
                      </ol>

                      <h4 className="font-medium text-blue-800 mb-2">
                        Comment une PME industrielle peut réduire son empreinte carbone :
                      </h4>
                      <p className="mb-2">
                        En s'appuyant sur les tendances identifiées, une PME industrielle peut adopter une stratégie en
                        plusieurs axes :
                      </p>

                      <h5 className="font-medium text-blue-700 mt-3 mb-1">
                        1. Analyser et optimiser la consommation existante
                      </h5>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>
                          <strong>Audit énergétique complet</strong> pour identifier les principaux postes de
                          consommation
                        </li>
                        <li>
                          <strong>Déploiement de solutions de monitoring</strong> avec compteurs intelligents
                        </li>
                      </ul>

                      <h5 className="font-medium text-blue-700 mt-3 mb-1">2. Investir dans l'efficacité énergétique</h5>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>
                          <strong>Modernisation des équipements</strong> en privilégiant les technologies à haute
                          efficacité
                        </li>
                        <li>
                          <strong>Utilisation de variateurs de vitesse</strong> sur les moteurs et pompes
                        </li>
                      </ul>

                      <p className="text-sm text-gray-600 mt-4 italic">
                        [Réponse complète tronquée pour plus de clarté]
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Application dans les Ressources Humaines</h2>

              <Card>
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Prompt</h3>
                    <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                      <p className="text-gray-800">
                        Avant de répondre à ma question, liste d'abord les principales tendances et bonnes pratiques
                        actuelles en matière d'onboarding à distance des nouveaux collaborateurs.
                        <br />
                        <br />
                        Ensuite, en te basant sur ces connaissances, propose une stratégie d'onboarding hybride
                        (présentiel/distanciel) sur 90 jours pour une entreprise tech de 200 salariés qui recrute 5 à 10
                        personnes par mois, réparties dans différents services et sur plusieurs sites.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Réponse de l'IA (extrait)</h3>
                    <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                      <h4 className="font-medium text-blue-800 mb-2">
                        Principales tendances et bonnes pratiques en matière d'onboarding à distance :
                      </h4>
                      <ol className="list-decimal pl-5 space-y-2 mb-4">
                        <li>
                          <strong>Pré-onboarding digital</strong> : Engagement du collaborateur avant son premier jour
                          via des plateformes dédiées
                        </li>
                        <li>
                          <strong>Expérience immersive et séquencée</strong> : Parcours structuré en jalons clairs avec
                          des objectifs précis
                        </li>
                        <li>
                          <strong>Onboarding buddy system</strong> : Attribution d'un parrain/marraine pour faciliter
                          l'intégration sociale
                        </li>
                        <li>
                          <strong>Manager enablement</strong> : Outillage et formation des managers avec des check-lists
                        </li>
                        <li>
                          <strong>Contenu asynchrone et microlearning</strong> : Formation en modules courts,
                          accessibles à la demande
                        </li>
                      </ol>

                      <h4 className="font-medium text-blue-800 mb-2">Stratégie d'onboarding hybride sur 90 jours :</h4>

                      <h5 className="font-medium text-blue-700 mt-3 mb-1">Phase 1 : Pré-intégration (J-14 à J-1)</h5>
                      <ul className="list-disc pl-5 space-y-1 mb-2">
                        <li>
                          <strong>Portail de pré-onboarding digital</strong> avec parcours administratif simplifié
                        </li>
                        <li>
                          <strong>Kit de bienvenue physique</strong> envoyé au domicile
                        </li>
                      </ul>

                      <p className="text-sm text-gray-600 mt-4 italic">
                        [Réponse complète tronquée pour plus de clarté]
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="use-cases">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Cas d'usage professionnels</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M12 8V4H8v4H4v4h4v4h4v-4h4V8z" />
                      </svg>
                    </div>
                    Analyse stratégique et veille concurrentielle
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Exploitez les connaissances générées par l'IA pour enrichir vos analyses stratégiques avec des
                    informations contextuelles pertinentes.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
                    <p className="text-gray-700">
                      Avant de répondre, liste les principales innovations et tendances actuelles dans l'industrie de la
                      livraison du dernier kilomètre.
                      <br />
                      <br />
                      Ensuite, sur la base de ces connaissances, analyse comment notre entreprise de logistique urbaine
                      pourrait se différencier de ses concurrents.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                      </svg>
                    </div>
                    Préparation de formations et contenus pédagogiques
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Créez des supports pédagogiques structurés en faisant d'abord générer les connaissances clés sur un
                    sujet.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
                    <p className="text-gray-700">
                      Commence par lister les concepts et principes fondamentaux de l'économie circulaire que des
                      responsables RSE devraient absolument maîtriser.
                      <br />
                      <br />À partir de cette base de connaissances, conçois un plan de formation d'une journée sur
                      l'économie circulaire pour des cadres d'entreprise.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                    Rédaction d'articles et de livres blancs
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Enrichissez vos contenus en faisant générer une base de connaissances complète avant la rédaction.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
                    <p className="text-gray-700">
                      Liste d'abord les principales réglementations et évolutions législatives européennes en matière de
                      cybersécurité avec leurs implications pour les entreprises.
                      <br />
                      <br />
                      Sur la base de ces informations, rédige l'introduction et le plan détaillé d'un livre blanc sur la
                      conformité cybersécurité.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                    <div className="p-2 rounded-full bg-blue-100 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </div>
                    Analyse de marché et études d'opportunité
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Utilisez les connaissances générées pour enrichir vos analyses de marché avec des données
                    contextuelles pertinentes.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-200 text-sm">
                    <p className="text-gray-700">
                      Avant de répondre, identifie et détaille les principales caractéristiques du marché des services
                      de télémédecine en Europe.
                      <br />
                      <br />À partir de ces connaissances, analyse l'opportunité de lancement d'une plateforme de
                      téléconsultation spécialisée en santé mentale.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tips">
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h2 className="flex items-center text-xl font-bold text-blue-800 mb-4">
                <Lightbulb className="h-6 w-6 mr-2 text-blue-600" />
                Conseils pour réussir vos prompts avec Generated Knowledge
              </h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Soyez précis sur les connaissances demandées</strong>
                    <p className="text-gray-700">
                      Spécifiez le type d'informations que l'IA doit générer (faits, tendances, statistiques, concepts,
                      etc.)
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Vérifiez les connaissances générées</strong>
                    <p className="text-gray-700">
                      Avant de les utiliser pour la réponse finale, en particulier pour les données sensibles ou très
                      spécifiques
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Structurez votre demande en deux parties distinctes</strong>
                    <p className="text-gray-700">Génération de connaissances puis application à la question</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Adaptez la complexité</strong>
                    <p className="text-gray-700">
                      Cette technique est plus pertinente pour des questions complexes ou nécessitant une analyse
                      multidimensionnelle
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Utiliser l'interaction en deux temps</strong>
                    <p className="text-gray-700">Pour avoir un contrôle intermédiaire sur les connaissances générées</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <strong className="text-blue-800">Précisez le format des connaissances</strong>
                    <p className="text-gray-700">Points clés, liste à puces, arbre de décision, etc.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex justify-between">
              <Link href="/methodes/multi-prompting">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Multi-Prompting
                </Button>
              </Link>

              <Link href="/methodes/contextual-augmentation">
                <Button className="flex items-center">
                  Contextual Augmentation
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
