import Link from "next/link"
import { ArrowLeft, Copy, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function FewShotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Few-Shot Prompting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Plusieurs exemples pour une précision accrue</p>
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
            <h3 className="text-xl font-semibold text-blue-800 mb-3">En quoi consiste le Few-Shot Prompting ?</h3>
            <p className="text-gray-700">
              Le Few-Shot Prompting vise à présenter au modèle quelques exemples (généralement 2 à 5) de la tâche à
              accomplir, afin de lui permettre d'en saisir les patterns et d'améliorer la précision de ses réponses.
              Contrairement au Zero-Shot qui ne donne aucun exemple, ou au One-Shot qui n'en donne qu'un seul, ici on
              fournit une petite série d'exemples variés et représentatifs pour que l'IA puisse mieux comprendre ce qui
              est attendu et généraliser à de nouvelles requêtes.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              L'utilisateur construit un prompt contenant plusieurs paires d'entrée-sortie en lien avec la tâche,
              suivies de la nouvelle entrée à traiter. Le modèle analyse cette suite d'exemples, identifie les éléments
              communs (structure, ton, style, etc.) et applique ces mêmes principes à la nouvelle demande. En somme, le
              Few-Shot fournit juste assez de données pour mettre le modèle sur la bonne voie, sans passer par un
              entraînement lourd.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Exemple 1 :</div>
                <div>
                  Question : Quels sont les avantages du télétravail ?<br />
                  Réponse : Le télétravail permet une meilleure flexibilité, réduit le temps de transport, améliore
                  l'équilibre vie professionnelle-vie personnelle...
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Exemple 2 :</div>
                <div>
                  Question : Quels sont les avantages de l'automatisation ?<br />
                  Réponse : L'automatisation permet de réduire les tâches répétitives, d'améliorer la productivité, de
                  limiter les erreurs humaines...
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Exemple 3 :</div>
                <div>
                  Question : Quels sont les avantages du cloud computing ?<br />
                  Réponse : Le cloud computing offre une grande scalabilité, réduit les coûts d'infrastructure, facilite
                  l'accès aux données à distance...
                </div>
              </div>

              <div className="flex justify-center my-2">
                <ArrowLeft className="transform rotate-90 text-blue-600" />
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-2">Nouvelle demande :</div>
                <div>
                  Question : Quels sont les avantages de la semaine de 4 jours ?<br />
                  Réponse : ?
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="font-semibold text-center mb-4">One-Shot</div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm">
                <p>
                  Exemple :<br />
                  Texte : "Le produit a dépassé mes attentes, je suis vraiment satisfait de mon achat !"
                  <br />
                  Sentiment : Positif
                  <br />
                  <br />
                  Texte : "Je viens de recevoir mon colis, l'emballage était soigné et le produit fonctionne
                  parfaitement. Je recommanderai certainement cette marque à mes amis."
                  <br />
                  Sentiment :
                </p>
              </div>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="font-semibold text-center mb-4">Few-Shot</div>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm">
                <p>
                  Exemple 1 :<br />
                  Texte : "Le service client était horrible..."
                  <br />
                  Sentiment : Négatif
                  <br />
                  <br />
                  Exemple 2 :<br />
                  Texte : "Le produit a dépassé mes attentes..."
                  <br />
                  Sentiment : Positif
                  <br />
                  <br />
                  Exemple 3 :<br />
                  Texte : "La livraison est arrivée à l'heure..."
                  <br />
                  Sentiment : Neutre
                  <br />
                  <br />
                  [...autres exemples...]
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
                    <strong>Contextualisation riche</strong> de la tâche grâce aux multiples exemples
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
                    <strong>Meilleure précision</strong> qu'en Zero-Shot ou One-Shot
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
                    <strong>Réponses plus cohérentes</strong>, surtout pour les tâches structurées
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
                    <strong>Facilite la compréhension</strong> des nuances et des patterns
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
                    <strong>Efficace avec peu d'exemples</strong> (bien moins qu'un fine-tuning)
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
                    <strong>Adaptabilité</strong> à différents styles et formats
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
                    <strong>Nécessite de trouver/élaborer plusieurs bons exemples</strong>
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
                    <strong>Risque de saturation du prompt</strong> si trop d'exemples
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
                    <strong>Dépendance à la qualité</strong> et représentativité des exemples
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
                    <strong>Préparation plus laborieuse</strong> que les méthodes plus simples
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
                    <strong>Peut être insuffisant</strong> pour des sujets extrêmement nouveaux
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
                    <strong>Compromis entre quantité d'exemples</strong> et longueur du prompt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Exemples */}
        <TabsContent value="exemples">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de Few-Shot pour la qualification de leads commerciaux</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Voici des exemples de qualification de leads commerciaux basés sur leur comportement et leurs
                  caractéristiques :
                  <br />
                  <br />
                  Exemple 1 :
                  <br />
                  Lead : "Entreprise de 250 employés, secteur finance, a téléchargé notre livre blanc sur la
                  cybersécurité, a assisté à notre webinaire, le directeur IT a passé 15 minutes sur notre page de
                  tarification."
                  <br />
                  Qualification : Chaud (Priorité haute)
                  <br />
                  <br />
                  Exemple 2 :
                  <br />
                  Lead : "Startup de 20 employés, secteur e-commerce, a ouvert 3 emails marketing, a cliqué sur un lien
                  vers notre blog, aucune visite sur la page de tarification."
                  <br />
                  Qualification : Tiède (Priorité moyenne)
                  <br />
                  <br />
                  Exemple 3 :
                  <br />
                  Lead : "Entreprise de 500 employés, secteur santé, a rempli un formulaire de contact il y a 6 mois,
                  aucune interaction depuis."
                  <br />
                  Qualification : Froid (Priorité basse)
                  <br />
                  <br />
                  Exemple 4 :
                  <br />
                  Lead : "Entreprise de 100 employés, secteur éducation, a demandé une démo du produit, le directeur des
                  opérations a échangé des emails avec notre équipe commerciale, a consulté notre étude de cas."
                  <br />
                  Qualification : Chaud (Priorité haute)
                  <br />
                  <br />
                  Qualifiez le lead suivant :
                  <br />
                  Lead : "Entreprise de 300 employés, secteur retail, a téléchargé deux livres blancs au cours du
                  dernier mois, le responsable marketing a assisté à notre conférence sectorielle et a laissé sa carte
                  de visite, a consulté notre page de comparaison avec les concurrents trois fois cette semaine."
                  <br />
                  Qualification :
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
                <p>Qualification : Chaud (Priorité haute)</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de Few-Shot pour l'analyse de rapports financiers</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Voici des exemples d'analyses de performances financières trimestrielles avec recommandations :
                  <br />
                  <br />
                  Exemple 1 :
                  <br />
                  Données : "Croissance du CA : +12% vs T-1, Marge opérationnelle : 18% (stable), Trésorerie : +5%,
                  Délai moyen de paiement clients : 45 jours (en hausse de 5 jours)"
                  <br />
                  Analyse : "Performance solide avec croissance soutenue du chiffre d'affaires. La stabilité de la marge
                  opérationnelle malgré la croissance indique une bonne maîtrise des coûts. Point d'attention sur
                  l'allongement du délai de paiement clients qui pourrait impacter la trésorerie à terme si la tendance
                  se poursuit."
                  <br />
                  <br />
                  Exemple 2 :
                  <br />
                  Données : "Croissance du CA : +2% vs T-1, Marge opérationnelle : 15% (en baisse de 3 points),
                  Trésorerie : -8%, Délai moyen de paiement clients : 38 jours (stable)"
                  <br />
                  Analyse : "Ralentissement significatif de la croissance et érosion préoccupante de la marge
                  opérationnelle. La baisse de trésorerie combinée à la contraction des marges suggère des problèmes
                  structurels potentiels. Recommandation d'analyser en priorité la structure des coûts et d'identifier
                  les segments de marché en sous-performance."
                  <br />
                  <br />
                  Exemple 3 :
                  <br />
                  Données : "Croissance du CA : -5% vs T-1, Marge opérationnelle : 20% (en hausse de 2 points),
                  Trésorerie : +15%, Délai moyen de paiement clients : 30 jours (en baisse de 7 jours)"
                  <br />
                  Analyse : "Malgré la contraction du chiffre d'affaires, l'entreprise a réussi à améliorer sa
                  rentabilité et sa position de trésorerie. La réduction du délai de paiement clients témoigne d'une
                  gestion efficace du fonds de roulement. Cette stratégie de consolidation semble pertinente dans le
                  contexte actuel, mais une attention particulière devra être portée à la reconquête de parts de marché
                  à moyen terme."
                  <br />
                  <br />
                  Analysez les données financières suivantes :
                  <br />
                  Données : "Croissance du CA : +8% vs T-1, Marge opérationnelle : 16% (en baisse de 1 point),
                  Trésorerie : +3%, Délai moyen de paiement clients : 42 jours (en hausse de 3 jours), Coûts marketing :
                  +15%"
                  <br />
                  Analyse :
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
                <p>
                  Analyse : "Performance globalement positive avec une croissance solide du chiffre d'affaires à +8%.
                  Toutefois, la baisse d'un point de la marge opérationnelle mérite attention, particulièrement au
                  regard de l'augmentation significative des coûts marketing (+15%). Cette hausse des dépenses marketing
                  ne semble pas se traduire par une efficacité proportionnelle en termes de rentabilité. L'augmentation
                  du délai de paiement clients, bien que modérée, combinée à la légère érosion des marges, pourrait
                  exercer une pression sur la trésorerie à moyen terme malgré sa progression actuelle de 3%.
                  Recommandation d'évaluer le ROI des investissements marketing et d'optimiser la gestion du cycle de
                  recouvrement pour préserver la santé financière."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Application en RH: Feedback d'entretien</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Voici des exemples de feedbacks constructifs suite à des entretiens d'embauche :
                  <br />
                  <br />
                  Exemple 1:
                  <br />
                  Candidat: Développeur senior Java
                  <br />
                  Décision: Non retenu
                  <br />
                  Feedback: "Nous vous remercions pour votre candidature au poste de Développeur senior Java. Bien que
                  votre expérience technique soit solide, nous avons privilégié un profil présentant une expertise plus
                  approfondie en microservices et en environnement cloud, éléments essentiels pour nos projets actuels.
                  Nous avons particulièrement apprécié votre connaissance des frameworks Spring et Hibernate, ainsi que
                  votre capacité d'analyse. Pour renforcer votre candidature à l'avenir, nous vous encourageons à
                  développer vos compétences en architecture cloud et en orchestration de conteneurs
                  (Kubernetes/Docker). Nous gardons votre profil dans notre base de données et vous souhaitons pleine
                  réussite dans vos recherches."
                  <br />
                  <br />
                  Exemple 2:
                  <br />
                  Candidat: Responsable Marketing Digital
                  <br />
                  Décision: Non retenu
                  <br />
                  Feedback: "Nous vous remercions pour votre intérêt pour le poste de Responsable Marketing Digital.
                  Votre parcours est impressionnant, notamment votre expérience en SEO et en gestion de campagnes
                  AdWords. Cependant, nous recherchions un profil avec une expérience plus solide en marketing
                  automation et en analyse de données marketing. Nous avons beaucoup apprécié votre créativité et votre
                  vision stratégique lors de notre échange. Pour renforcer votre candidature à des postes similaires,
                  nous vous suggérons de développer votre expertise en outils de marketing automation (Hubspot, Marketo)
                  et d'approfondir vos compétences en data analytics appliqué au marketing. Nous restons attentifs à
                  votre parcours et vous souhaitons le meilleur pour la suite."
                  <br />
                  <br />
                  Exemple 3:
                  <br />
                  Candidat: Chargé de recrutement
                  <br />
                  Décision: Non retenu
                  <br />
                  Feedback: "Nous vous remercions pour votre candidature au poste de Chargé de recrutement. Nous avons
                  apprécié votre enthousiasme et votre parcours en ressources humaines. Notre décision s'est finalement
                  portée sur un candidat disposant d'une expérience plus spécifique dans le recrutement de profils
                  techniques et IT, qui constituent notre principal besoin actuel. Nous avons particulièrement valorisé
                  votre approche structurée du processus de recrutement et vos compétences en évaluation de candidats.
                  Pour renforcer votre profil, nous vous encourageons à développer votre connaissance des métiers
                  techniques et à vous familiariser avec les plateformes spécialisées de recrutement IT. Nous conservons
                  votre candidature et vous souhaitons bonne continuation dans vos démarches professionnelles."
                  <br />
                  <br />
                  Rédigez un feedback constructif pour le candidat suivant en suivant le même format et le même ton :
                  <br />
                  <br />
                  Candidat: Chef de projet digital
                  <br />
                  Décision: Non retenu
                  <br />
                  Feedback:
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
                <p>
                  "Nous vous remercions pour votre candidature au poste de Chef de projet digital. Votre expérience en
                  gestion de projets web et votre maîtrise des méthodologies agiles ont retenu notre attention.
                  Néanmoins, nous avons sélectionné un candidat présentant une expertise plus approfondie dans la
                  coordination de projets omnicanaux et une expérience plus étendue avec les outils de product
                  management que nos équipes utilisent quotidiennement. Nous avons particulièrement apprécié votre
                  capacité à gérer les parties prenantes et votre vision stratégique démontrée lors de la présentation
                  de vos précédents projets. Pour renforcer votre candidature à l'avenir, nous vous suggérons de
                  développer votre expérience en gestion de projets impliquant plusieurs canaux digitaux simultanés
                  (web, mobile, réseaux sociaux) et d'approfondir vos connaissances des outils comme Jira, Asana ou
                  Monday.com. Nous conservons votre profil dans notre base de données et vous souhaitons plein succès
                  dans votre recherche d'emploi."
                </p>
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
                <h3 className="text-lg font-bold">Classification automatique de documents</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Particulièrement efficace pour entraîner l'IA à catégoriser des documents selon leur nature, leur
                priorité ou leur département concerné.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Voici des exemples de classification de documents :
                  <br />
                  <br />
                  Exemple 1:
                  <br />
                  Document: "Demande de remboursement suite à l'annulation du séminaire du 12/05/2024"
                  <br />
                  Catégorie: Finance
                  <br />
                  Priorité: Normale
                  <br />
                  <br />
                  Exemple 2:
                  <br />
                  Document: "Alerte critique : panne du serveur principal affectant les opérations client"
                  <br />
                  Catégorie: IT
                  <br />
                  Priorité: Urgente
                  <br />
                  <br />
                  Exemple 3:
                  <br />
                  Document: "Candidature spontanée pour le poste de développeur front-end"
                  <br />
                  Catégorie: Ressources Humaines
                  <br />
                  Priorité: Basse
                  <br />
                  <br />
                  Classifie maintenant ce document :
                  <br />
                  Document: "Rapport d'incident de sécurité : tentative d'accès non autorisé détectée le 10/04/2024"
                  <br />
                  Catégorie:
                  <br />
                  Priorité:"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Génération de communications standardisées</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Permet de maintenir une cohérence de ton et de structure dans les communications d'entreprise.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Exemples de réponses aux réclamations clients :
                  <br />
                  <br />
                  Exemple 1:
                  <br />
                  Réclamation : "Mon colis est arrivé avec 3 jours de retard alors que j'avais payé la livraison
                  express."
                  <br />
                  Réponse : "Cher client, Nous vous présentons nos sincères excuses pour le retard de livraison que vous
                  avez constaté. Nous comprenons votre frustration, d'autant plus que vous aviez opté pour la livraison
                  express. À titre de compensation, nous vous remboursons intégralement les frais de livraison et vous
                  offrons un code promo de 10% sur votre prochaine commande : FIDELITE10. Nous mettons tout en œuvre
                  pour éviter que cette situation ne se reproduise. Cordialement, L'équipe Service Client"
                  <br />
                  <br />
                  Exemple 2:
                  <br />
                  Réclamation : "J'ai reçu le mauvais article, ce n'est pas du tout ce que j'avais commandé."
                  <br />
                  Réponse : "Cher client, Nous sommes navrés d'apprendre que vous avez reçu un article ne correspondant
                  pas à votre commande. Nous vous invitons à nous retourner le produit avec l'étiquette prépayée
                  ci-jointe. Dès réception, nous vous enverrons immédiatement l'article correct. Pour vous remercier de
                  votre compréhension, un code promo de 15% (EXCUSE15) a été ajouté à votre compte. Cordialement,
                  L'équipe Service Client"
                  <br />
                  <br />
                  Pour la réclamation suivante, rédigez une réponse dans le même style :
                  <br />
                  Réclamation : "Le produit que j'ai reçu présente un défaut de fabrication. Le bouton d'alimentation ne
                  fonctionne pas correctement."
                  <br />
                  Réponse :"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Extraction d'informations structurées</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Idéal pour entraîner l'IA à extraire des données précises à partir de textes non structurés.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Exemples d'extraction d'information :
                  <br />
                  <br />
                  Exemple 1:
                  <br />
                  Texte: "Notre réunion avec Maria Lopez de la société TechSolutions est confirmée pour le 15 juin 2024
                  à 14h30 dans nos locaux de Paris."
                  <br />
                  Extraction:
                  <br />
                  Contact: Maria Lopez
                  <br />
                  Société: TechSolutions
                  <br />
                  Date: 15 juin 2024
                  <br />
                  Heure: 14h30
                  <br />
                  Lieu: Paris
                  <br />
                  <br />
                  Exemple 2:
                  <br />
                  Texte: "Suite à notre appel avec Jean Dupont (Directeur Marketing, InnovaCorp), nous avons planifié
                  une démo de notre solution le mercredi 20 mai à 10h en visioconférence."
                  <br />
                  Extraction:
                  <br />
                  Contact: Jean Dupont
                  <br />
                  Fonction: Directeur Marketing
                  <br />
                  Société: InnovaCorp
                  <br />
                  Date: 20 mai
                  <br />
                  Heure: 10h
                  <br />
                  Lieu: visioconférence
                  <br />
                  <br />
                  Texte: "Demain (12/04), nous accueillerons Alexandre Martin, CEO de DataViz Inc, pour discuter du
                  partenariat potentiel. RDV à notre siège de Lyon à 9h précises."
                  <br />
                  Extraction:"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Réécriture de contenu selon un style spécifique</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Permet de recalibrer du contenu selon un ton, une longueur ou un format précis en fournissant plusieurs
                exemples.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Exemples de réécriture de descriptions produit en style minimaliste et impactant :
                  <br />
                  <br />
                  Exemple 1:
                  <br />
                  Original: "Notre lampe de bureau ajustable offre plusieurs niveaux de luminosité et une surface
                  tactile pour un contrôle facile. Son design élégant en aluminium brossé s'intègre parfaitement dans
                  tout environnement de travail moderne. Elle est livrée avec une ampoule LED économique et durable."
                  <br />
                  Style minimaliste: "Lampe tactile. Luminosité ajustable. Aluminium brossé. Design épuré. LED
                  intégrée."
                  <br />
                  <br />
                  Exemple 2:
                  <br />
                  Original: "Ce smartphone de dernière génération dispose d'un écran AMOLED 6,5 pouces, d'un processeur
                  octa-core ultrarapide, d'une batterie longue durée de 4500 mAh et d'un appareil photo triple capteur
                  avec intelligence artificielle pour des clichés professionnels."
                  <br />
                  Style minimaliste: "Écran AMOLED 6,5". Processeur octa-core. Batterie 4500 mAh. Triple capteur photo
                  IA. Performance maximale."
                  <br />
                  <br />
                  Réécris cette description en style minimaliste :
                  <br />
                  Original: "Notre logiciel de gestion de projet tout-en-un permet de suivre l'avancement des tâches, de
                  gérer les ressources, de communiquer avec l'équipe et de générer des rapports détaillés. Son interface
                  intuitive et sa grande flexibilité en font l'outil idéal pour les équipes de toutes tailles."
                  <br />
                  Style minimaliste:"
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
                  Utilisez le Few-Shot pour maintenir un ton et un format cohérents dans les communications RH (offres
                  d'emploi, feedbacks, évaluations, etc.)
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
                Conseils pour réussir vos prompts Few-Shot
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Choisissez des exemples variés et représentatifs</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sélectionnez des exemples qui couvrent bien l'éventail des cas possibles pour que l'IA puisse
                généraliser correctement à de nouvelles situations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Limitez-vous à 3-5 exemples</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trouvez le bon équilibre : assez d'exemples pour établir un pattern, mais pas trop pour éviter de
                saturer le prompt et dépasser les limites de contexte.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Ordonnez les exemples</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Présentez vos exemples du plus simple au plus complexe pour favoriser une progression logique dans
                l'apprentissage du modèle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Assurez-vous que le format est cohérent</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Maintenez une structure identique entre tous les exemples pour faciliter la compréhension du pattern par
                l'IA et obtenir des réponses formatées de manière cohérente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Incluez des cas "limites" ou particuliers</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si vous prévoyez de rencontrer des cas atypiques dans vos requêtes réelles, incluez-en dans vos exemples
                pour préparer l'IA à y répondre correctement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Séparez clairement les exemples</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilisez des marqueurs visuels (numérotation, sauts de ligne, séparateurs) pour une meilleure lisibilité
                et pour aider l'IA à distinguer les différents exemples.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Testez différentes combinaisons d'exemples</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si les résultats ne correspondent pas à vos attentes, essayez de modifier vos exemples ou leur ordre
                pour trouver la combinaison optimale.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Combinez avec d'autres techniques</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour des tâches complexes, envisagez de combiner le Few-Shot avec d'autres techniques comme le
                Chain-of-Thought pour des résultats encore plus précis.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Adaptez les exemples à votre audience</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si vous créez un prompt pour des utilisateurs non techniques, assurez-vous que vos exemples sont
                accessibles et compréhensibles pour eux.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Modèle de prompt Few-Shot</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {`Voici quelques exemples de [type de tâche] :

Exemple 1:
[Entrée]: "[contenu d'entrée 1]"
[Sortie]: "[contenu de sortie 1]"

Exemple 2:
[Entrée]: "[contenu d'entrée 2]"
[Sortie]: "[contenu de sortie 2]"

Exemple 3:
[Entrée]: "[contenu d'entrée 3]"
[Sortie]: "[contenu de sortie 3]"

[Instructions supplémentaires si nécessaire]

[Entrée]: "[nouvelle entrée à traiter]"
[Sortie]:`}
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
          <Link href="/methodes/zero-shot" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Zero-Shot Prompting</CardTitle>
                <CardDescription>Demander directement sans exemple</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez comment formuler des instructions claires sans fournir d'exemples.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/one-shot" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>One-Shot Prompting</CardTitle>
                <CardDescription>Fournir un exemple unique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Apprenez comment un seul exemple bien choisi peut améliorer significativement les résultats.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/chain-of-thought" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Chain-of-Thought</CardTitle>
                <CardDescription>Raisonnement étape par étape</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez comment encourager le modèle à décomposer son raisonnement en étapes logiques.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
