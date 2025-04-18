import Link from "next/link"
import { ArrowLeft, Copy, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function GeneratedKnowledgePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Generated Knowledge Prompting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          L'IA active d'abord ses connaissances avant de formuler sa réponse finale.
        </p>
        <Badge variant="outline" className="mt-4 bg-red-50 text-red-800 hover:bg-red-50">
          Niveau : Avancé
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold">Qu'est-ce que le Generated Knowledge ?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                La technique du Generated Knowledge consiste à demander au modèle de générer d'abord des connaissances
                ou informations utiles sur un sujet, avant de formuler sa réponse finale. Autrement dit, on scinde le
                processus en deux étapes : (1) l'IA produit une liste de faits, de points clés ou de données
                contextuelles qu'elle "sait" ou déduit du sujet, puis (2) on lui fait utiliser ces connaissances
                générées pour répondre à la question posée plus précisément.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">Comment ça fonctionne</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Le consultant formule un prompt en deux temps. Par exemple : « Dresse d'abord la liste des principales
                stratégies marketing digital en 2025, puis utilise-les pour expliquer comment augmenter les ventes en
                ligne. » Lors de la première étape, l'IA génère la connaissance demandée (ici, les stratégies
                marketing). Il s'agit d'une sorte de brainstorming factuel effectué par l'IA elle-même. Ensuite, armée
                de ces informations, l'IA répond à la question finale en intégrant ces éléments.
              </p>

              <p className="text-gray-600 dark:text-gray-400">
                On peut aussi réaliser cela en deux interactions séparées :
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>D'abord demander « Quelles sont les informations importantes sur [le sujet] ? »</li>
                <li>
                  Puis enchaîner « À présent, en te basant sur ces informations, réponds à [la question initiale] »
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Processus du Generated Knowledge Prompting</h2>
            <div className="flex flex-col items-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg w-full max-w-md text-center mb-4">
                <p className="font-medium">Question complexe</p>
              </div>
              <div className="h-8 border-l-2 border-blue-400 dark:border-blue-600"></div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg w-full max-w-lg text-center mb-4">
                <p className="font-medium">Étape 1 : Génération de connaissances</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Liste des faits, concepts et données pertinentes"
                </p>
              </div>
              <div className="h-8 border-l-2 border-blue-400 dark:border-blue-600"></div>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg w-full max-w-lg text-center mb-4">
                <p className="font-medium">Étape 2 : Réponse basée sur les connaissances</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Réponse précise et enrichie intégrant les informations"
                </p>
              </div>
              <div className="h-8 border-l-2 border-blue-400 dark:border-blue-600"></div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg w-full max-w-md text-center">
                <p className="font-medium">Réponse finale complète</p>
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
                    <strong>Réponses approfondies</strong> : En explicitant d'abord les faits ou idées pertinentes, on
                    s'assure que la réponse finale s'appuie sur une base solide et diversifiée
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
                    <strong>Exhaustivité améliorée</strong> : La phase de génération de connaissances agit comme une
                    checklist des points importants
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
                    <strong>Transparence du processus</strong> : Le consultant voit les informations que l'IA considère
                    pertinentes avant d'obtenir la réponse finale
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
                    <strong>Contrôle intermédiaire</strong> : Possibilité de valider ou corriger les connaissances
                    générées avant la réponse définitive
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
                    <strong>Particulièrement efficace</strong> pour les questions ouvertes complexes ou les sujets
                    nécessitant une analyse multidimensionnelle
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
                    <strong>Risque d'informations erronées</strong> : L'IA peut générer des "connaissances" inexactes ou
                    non vérifiées qui fausseront la réponse finale
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
                    <strong>Processus plus long</strong> : Cette méthode rend le prompt plus complexe ou nécessite deux
                    interactions au lieu d'une
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
                    <strong>Disproportionné pour des questions simples</strong> : Inutilement lourd pour des demandes
                    basiques ou factuelles
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
                    <strong>Nécessite une vigilance accrue</strong> : Il faut contrôler la véracité des connaissances
                    produites, surtout pour des décisions importantes
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
                    <strong>Utilisation moins intuitive</strong> : Demande une certaine habitude de travail avec l'IA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Exemples */}
        <TabsContent value="exemples">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de Generated Knowledge</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Avant de répondre à ma question, liste d'abord les principales tendances et innovations actuelles dans
                  le domaine de l'agriculture durable.
                  <br />
                  <br />
                  Ensuite, en te basant sur ces connaissances, propose une stratégie pour qu'une exploitation agricole
                  familiale de taille moyenne (50 hectares) puisse effectuer une transition vers des pratiques plus
                  durables sur une période de 5 ans, en tenant compte des contraintes économiques et des bénéfices à
                  long terme.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Réponse de l'IA</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg mb-3">Principales tendances et innovations en agriculture durable</h4>
                <p className="mb-4">
                  Voici les principales tendances et innovations actuelles dans le domaine de l'agriculture durable :
                </p>

                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Agroécologie</strong> : Approche holistique qui applique les principes écologiques à
                    l'agriculture, favorisant la biodiversité et les synergies entre plantes, animaux, humains et
                    environnement.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Agriculture régénérative</strong> : Pratiques qui régénèrent la santé des sols, améliorent
                    le cycle de l'eau et augmentent la biodiversité (non-labour, cultures de couverture, rotation des
                    cultures).
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Agriculture de précision</strong> : Utilisation de capteurs, drones, GPS et logiciels pour
                    optimiser l'utilisation des ressources (eau, engrais, pesticides) et réduire le gaspillage.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Systèmes agroforestiers</strong> : Intégration d'arbres et d'arbustes dans les systèmes
                    agricoles pour améliorer la biodiversité, la santé des sols et créer des microclimats favorables.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Biopesticides et biofertilisants</strong> : Alternatives biologiques aux produits chimiques
                    conventionnels, utilisant des micro-organismes bénéfiques.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Permaculture</strong> : Conception de systèmes agricoles durables et autosuffisants inspirés
                    des écosystèmes naturels.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Circuits courts et vente directe</strong> : Réduction des intermédiaires entre producteurs
                    et consommateurs, valorisant mieux les produits.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Certification et labels durables</strong> : Développement de normes et certifications pour
                    valoriser les pratiques durables (bio, HVE, etc.).
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Cultures associées et polyculture-élevage</strong> : Diversification des productions pour
                    optimiser l'utilisation des ressources et réduire les risques.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Outils numériques de traçabilité</strong> : Blockchain et autres technologies pour assurer
                    la transparence et la traçabilité des produits agricoles.
                  </li>
                </ol>

                <h4 className="font-bold text-lg mb-3">
                  Stratégie de transition vers l'agriculture durable pour une exploitation de 50 hectares
                </h4>

                <p className="mb-4">
                  En me basant sur les tendances identifiées, voici une stratégie de transition sur 5 ans :
                </p>

                <h5 className="font-bold mt-4 mb-2">Phase 1 : Analyse et planification (Année 1)</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    Réaliser un diagnostic complet de l'exploitation : analyse des sols, bilan carbone, audit
                    énergétique, cartographie des parcelles.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Identifier les pratiques à fort impact et faible coût à mettre en œuvre rapidement (quick wins).
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Former l'exploitant et ses employés aux principes de l'agriculture durable.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Établir un plan de transition détaillé avec des objectifs mesurables.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Rechercher les aides financières disponibles (PAC, aides régionales, crédits d'impôt).
                  </li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Phase 2 : Premières transformations (Années 1-2)</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    Introduire progressivement les cultures de couverture sur 30% des surfaces.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Mettre en place une rotation des cultures plus diversifiée sur 20 hectares.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Réduire de 25% l'utilisation d'intrants chimiques en adoptant des techniques de lutte intégrée.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Installer des haies sur 10% du périmètre des parcelles pour favoriser la biodiversité.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Investir dans des outils de base d'agriculture de précision (GPS sur tracteur, capteurs d'humidité).
                  </li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Phase 3 : Intensification de la transition (Années 2-3)</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    Étendre les cultures de couverture à 70% des surfaces.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Convertir 15 hectares en agriculture biologique ou HVE (Haute Valeur Environnementale).
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Implanter un système agroforestier sur 5 hectares.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Développer des circuits courts de commercialisation pour 30% de la production.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Investir dans un système d'irrigation efficient (goutte-à-goutte, tensiomètres).
                  </li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Phase 4 : Consolidation et diversification (Années 3-4)</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    Étendre la certification biologique ou HVE à 30 hectares.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Introduire une activité complémentaire à forte valeur ajoutée sur 5 hectares (maraîchage, PPAM,
                    etc.).
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Développer la transformation à la ferme pour certains produits.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Mettre en place un système de suivi numérique complet de l'exploitation.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Réduire de 50% l'empreinte carbone de l'exploitation par rapport à l'année 1.
                  </li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Phase 5 : Optimisation et rayonnement (Années 4-5)</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    Atteindre 100% de l'exploitation en pratiques durables certifiées.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Développer une marque propre valorisant l'engagement durable.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Mettre en place des activités agrotouristiques ou pédagogiques.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Partager l'expérience acquise en devenant ferme-pilote ou démonstratrice.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    Explorer les possibilités de rémunération pour services environnementaux (crédits carbone, paiements
                    pour services écosystémiques).
                  </li>
                </ul>

                <h5 className="font-bold mt-4 mb-2">Considérations économiques</h5>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Investissements progressifs</strong> : Échelonner les investissements pour maintenir la
                    viabilité économique.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Diversification des revenus</strong> : Réduire la dépendance aux cultures conventionnelles
                    en développant des produits à forte valeur ajoutée.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Valorisation commerciale</strong> : Utiliser les certifications pour accéder à des marchés
                    plus rémunérateurs.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Mutualisation</strong> : Envisager l'achat de matériel en CUMA (Coopérative d'Utilisation de
                    Matériel Agricole) pour réduire les coûts.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Mutualisation des ressources</strong> : Envisager l'achat de matériel en CUMA (Coopérative
                    d'Utilisation de Matériel Agricole) pour réduire les coûts.
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Aides financières</strong> : Mobiliser toutes les aides disponibles pour la transition
                    écologique (crédit d&apos;impôt, aides à la certification, mesures agro-environnementales).
                  </li>
                </ul>

                <p className="mt-4">
                  Cette stratégie progressive permet de transformer l'exploitation tout en maintenant sa viabilité
                  économique. Les investissements initiaux seront progressivement compensés par la réduction des coûts
                  d'intrants, la valorisation supérieure des produits et la diversification des sources de revenus. À
                  terme, l'exploitation gagnera en résilience face aux aléas climatiques et économiques, tout en
                  contribuant positivement à l'environnement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Exemples de formulations efficaces</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Pour une analyse stratégique</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Avant de répondre, liste les principales innovations et tendances actuelles dans l'industrie de la
                    livraison du dernier kilomètre.
                    <br />
                    <br />
                    Ensuite, sur la base de ces connaissances, analyse comment notre entreprise de logistique urbaine
                    pourrait se différencier de ses concurrents en intégrant ces innovations dans notre offre."
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour les Ressources Humaines</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Avant de répondre à ma question, liste d'abord les principales tendances et bonnes pratiques
                    actuelles en matière d'onboarding à distance des nouveaux collaborateurs.
                    <br />
                    <br />
                    Ensuite, en te basant sur ces connaissances, propose une stratégie d'onboarding hybride
                    (présentiel/distanciel) sur 90 jours pour une entreprise tech de 200 salariés qui recrute 5 à 10
                    personnes par mois."
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour du contenu pédagogique</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Commence par lister les concepts et principes fondamentaux de l'économie circulaire que des
                    responsables RSE devraient absolument maîtriser.
                    <br />
                    <br />À partir de cette base de connaissances, conçois un plan de formation d'une journée sur
                    l'économie circulaire pour des cadres d'entreprise, avec les objectifs pédagogiques, les modules et
                    quelques exercices pratiques."
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
                <h3 className="text-lg font-bold">Analyse stratégique et veille concurrentielle</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Exploitez les connaissances générées par l'IA pour enrichir vos analyses stratégiques avec des
                informations contextuelles pertinentes.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Avant de répondre, liste les principales innovations technologiques qui transforment actuellement le
                  secteur bancaire. Ensuite, en te basant sur ces connaissances, analyse comment une banque
                  traditionnelle peut se transformer pour rester compétitive face aux néobanques."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Préparation de formations et contenus pédagogiques</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Créez des supports pédagogiques structurés en faisant d'abord générer les connaissances clés sur un
                sujet.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Liste d'abord les compétences essentielles en communication non-verbale pour un manager. Puis, en
                  utilisant ces connaissances, crée un atelier pratique de 3 heures pour développer ces compétences,
                  avec des exercices concrets et des mises en situation."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Rédaction d'articles et de livres blancs</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Enrichissez vos contenus en faisant générer une base de connaissances complète avant la rédaction.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Génère d'abord une liste des principales études scientifiques récentes sur l'impact du télétravail
                  sur la productivité et le bien-être des employés. Ensuite, utilise ces informations pour rédiger un
                  article de blog de 1000 mots sur les meilleures pratiques pour un télétravail efficace."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Analyse de marché et études d'opportunité</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Utilisez les connaissances générées pour enrichir vos analyses de marché avec des données contextuelles
                pertinentes.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Commence par lister les tendances de consommation actuelles dans le secteur des cosmétiques naturels.
                  Puis, en t'appuyant sur ces tendances, identifie les opportunités de marché pour une nouvelle marque
                  de cosmétiques bio et zéro déchet visant une clientèle urbaine de 25-40 ans."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Applications professionnelles spécifiques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Conseil en management</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilisez le Generated Knowledge pour produire des analyses approfondies et multidimensionnelles sur
                  des problématiques organisationnelles complexes.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Liste d'abord les facteurs clés de résistance au changement dans les grandes organisations. Puis,
                  propose une méthodologie de conduite du changement adaptée à notre transformation digitale."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Marketing et communication</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Générez des insights consommateurs avant de créer des stratégies de communication ciblées et
                  pertinentes.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Identifie d'abord les principales préoccupations environnementales de la génération Z. Ensuite,
                  propose une stratégie de communication pour notre gamme de produits éco-responsables."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Recherche et développement</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explorez les connaissances existantes dans un domaine avant de formuler des hypothèses de recherche ou
                  des pistes d'innovation.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Liste les principales avancées récentes en matière de matériaux biodégradables pour l'emballage
                  alimentaire. Puis, suggère des pistes d'innovation pour notre laboratoire R&D."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Juridique et conformité</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Rassemblez les principales dispositions légales sur un sujet avant d'analyser une situation
                  spécifique.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Énumère les principales obligations du RGPD concernant le consentement des utilisateurs. Puis, évalue
                  si notre formulaire d'inscription actuel est conforme à ces exigences."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Santé et médecine</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Compilez les connaissances médicales actuelles sur un sujet avant d'élaborer des protocoles ou des
                  recommandations.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Liste les principales recommandations nutritionnelles actuelles pour les patients diabétiques de type
                  2. Puis, élabore un guide pratique simplifié à leur intention."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Éducation et formation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Structurez les connaissances fondamentales d'un domaine avant de créer des supports pédagogiques
                  adaptés.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Identifie les concepts mathématiques essentiels que les élèves de 10 ans doivent maîtriser. Puis,
                  conçois une série d'activités ludiques pour les enseigner."
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
                Conseils pour un Generated Knowledge efficace
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Soyez précis sur les connaissances demandées</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Spécifiez le type d'informations que l'IA doit générer (faits, tendances, statistiques, concepts, etc.)
                pour obtenir des connaissances pertinentes et utiles pour votre question finale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Vérifiez les connaissances générées</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Prenez le temps d'examiner les informations produites par l'IA avant de les utiliser pour la réponse
                finale, en particulier pour les données sensibles ou les décisions importantes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Structurez votre demande en deux parties distinctes</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Séparez clairement la phase de génération de connaissances et la phase d'application à votre question
                pour que l'IA comprenne bien le processus en deux temps.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Précisez le format des connaissances</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Indiquez si vous souhaitez que les connaissances soient présentées sous forme de points clés, liste à
                puces, arbre de décision, tableau comparatif ou autre format spécifique.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Utilisez l'interaction en deux temps</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour un contrôle maximal, divisez votre prompt en deux interactions distinctes : d'abord demander les
                connaissances, puis les utiliser pour répondre à votre question après validation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Adaptez la profondeur à la complexité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Réservez cette technique pour des questions complexes ou multidimensionnelles. Pour des questions
                simples, privilégiez des approches plus directes comme le Zero-Shot Prompting.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Combinez avec d'autres techniques</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Associez le Generated Knowledge avec d'autres techniques comme l'Expert Role-Playing ou le
                Chain-of-Thought pour des résultats encore plus précis et structurés.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Limitez le nombre de connaissances</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Demandez un nombre précis d'éléments (ex: "liste les 5 principales tendances") pour éviter des réponses
                trop longues ou trop générales qui dilueraient l'analyse finale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Orientez vers des sources fiables</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Demandez à l'IA de s'appuyer sur des sources reconnues ou des données récentes pour générer ses
                connaissances, afin d'améliorer la qualité des informations produites.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Modèle de prompt Generated Knowledge</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {`Avant de répondre à ma question, génère d'abord une liste [format souhaité] des [type de connaissances] les plus [critère: récentes/pertinentes/importantes/etc.] concernant [sujet spécifique].

Pour chaque élément, inclus [détails souhaités: définition/exemple/source/etc.].

Ensuite, en t'appuyant uniquement sur ces connaissances générées, [action demandée: analyse/explique/propose/etc.] [question ou problématique finale].

Présente ta réponse finale de manière [format de réponse: structurée/concise/détaillée/etc.] en mettant l'accent sur [aspects prioritaires].`}
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
          <Link href="/methodes/contextual-augmentation" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Contextual Augmentation</CardTitle>
                <CardDescription>Enrichir le contexte</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez comment enrichir le prompt avec des informations contextuelles pertinentes.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/multi-prompting" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Multi-Prompting</CardTitle>
                <CardDescription>Combiner plusieurs techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Apprenez à combiner plusieurs approches de prompting pour résoudre des problèmes complexes.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/expert-role-playing" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Expert Role-Playing</CardTitle>
                <CardDescription>Adopter un rôle d'expert</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez comment demander au modèle d'adopter un rôle spécifique peut améliorer ses réponses.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
