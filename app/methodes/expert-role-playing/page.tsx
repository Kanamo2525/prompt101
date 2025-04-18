import Link from "next/link"
import { ArrowLeft, Copy, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ExpertRolePlayingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Expert Role-Playing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Adopter un rôle d'expert pour obtenir des réponses plus précises et pertinentes.
        </p>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-bold">Qu'est-ce que l'Expert Role-Playing ?</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                La technique Expert Role-Playing consiste à demander à l'IA d'adopter le rôle d'un expert dans un
                domaine spécifique pour obtenir des réponses plus spécialisées et adaptées. Cette approche permet
                d'orienter le modèle vers un type de réponse particulier en activant un ensemble de connaissances et un
                style de communication spécifiques.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                En définissant précisément le profil de l'expert (domaine, expérience, spécialisation), vous obtenez des
                réponses qui reflètent le niveau d'expertise, le vocabulaire technique et la perspective professionnelle
                correspondant à ce rôle.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h2 className="text-xl font-bold mb-4">Comment ça fonctionne</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Le prompt est formulé de manière à définir un contexte de rôle pour l'IA. Par exemple, on commence la
                requête par « Tu es un expert en cybersécurité avec 10 ans d'expérience... » ou « Agis en tant que
                professeur de lycée en expliquant... ».
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                À partir de là, le modèle va tenter d'imiter le comportement et les connaissances de ce personnage. Par
                exemple, « Tu es un chef de projet senior. Donne ton avis sur le plan suivant... » amènera l'IA à
                répondre en employant le vocabulaire et la perspective d'un chef de projet expérimenté.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Cette personnalisation peut être introduite soit dans le prompt utilisateur, soit via un message système
                (dans les interfaces de chat structurées). L'important est de construire une identité pour l'IA le temps
                de la réponse, afin d'ancrer ses connaissances et son style sur ce rôle.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Structure du prompt</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">1. Définition du rôle expert</h3>
                <p className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-100 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                  <strong>Tu es un expert en intelligence artificielle</strong> avec 15 ans d'expérience dans le
                  développement d'algorithmes de machine learning et 5 années de recherche académique...
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-6 border-l-2 border-blue-400 dark:border-blue-600"></div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">2. Formulation de la tâche</h3>
                <p className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-100 dark:border-blue-800 text-gray-700 dark:text-gray-300">
                  Explique les implications éthiques du déploiement de systèmes de reconnaissance faciale dans les
                  espaces publics, en mettant en avant les arguments techniques et sociétaux.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="h-6 border-l-2 border-blue-400 dark:border-blue-600"></div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">3. Réponse avec expertise</h3>
                <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-100 dark:border-blue-800 text-gray-700 dark:text-gray-300">
                  <p className="mb-2">L'IA répond en utilisant:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                    <li>Un vocabulaire spécialisé</li>
                    <li>Des références techniques</li>
                    <li>Une structure d'argumentation experte</li>
                    <li>Une perspective correspondant au rôle</li>
                  </ul>
                </div>
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
                  <span className="text-gray-700 dark:text-gray-300">Réponses détaillées et spécialisées</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Adaptation du ton et du niveau de discours</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Vocabulaire technique approprié</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Structure de réponse professionnelle</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Perspectives variées en changeant de persona</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Ne crée pas de connaissance nouvelle</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Risque de faux air de confiance</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Certains rôles peuvent biaiser la réponse</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Incohérence possible entre personas</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Expertise limitée aux données d'entraînement</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Exemples */}
        <TabsContent value="exemples">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple d'Expert Role-Playing</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Tu es un nutritionniste spécialisé en nutrition sportive avec 10 ans d'expérience auprès d'athlètes de
                  haut niveau. Tu as travaillé avec des marathoniens, des nageurs olympiques et des joueurs de football
                  professionnel. Tu possèdes une double formation en biochimie et en sciences du sport. Un sportif
                  amateur de 35 ans qui s'entraîne 4 fois par semaine (course à pied et musculation) te demande des
                  conseils pour optimiser sa récupération et améliorer ses performances. Il se plaint de fatigue
                  persistante malgré un sommeil qu'il estime suffisant. Donne-lui 5 recommandations nutritionnelles
                  précises et scientifiquement fondées, en expliquant brièvement les mécanismes physiologiques qui
                  justifient ces recommandations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Réponse de l'IA</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-lg mb-3">
                  Recommandations nutritionnelles pour optimiser la récupération
                </h4>
                <p className="mb-4">Bonjour,</p>
                <p className="mb-4">
                  En tant que nutritionniste spécialisé en nutrition sportive, je comprends parfaitement votre
                  problématique de récupération. La fatigue persistante malgré un sommeil adéquat est souvent un
                  indicateur de lacunes nutritionnelles ou d'un timing inadapté des apports. Voici mes recommandations
                  ciblées :
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold">Optimisez votre fenêtre anabolique post-entraînement</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Consommez un ratio de 3:1 glucides/protéines dans les 30-45 minutes suivant l'effort (par exemple
                      60g de glucides et 20g de protéines). Cette période critique permet une resynthèse accélérée du
                      glycogène musculaire et une initiation optimale de la synthèse protéique. Les études montrent une
                      augmentation de 30-40% du stockage de glycogène lorsque les glucides sont consommés immédiatement
                      après l'exercice versus 2 heures plus tard.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold">Intégrez des sources de protéines à leucine élevée</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      La leucine est l'acide aminé clé qui active la voie mTOR responsable de la synthèse protéique
                      musculaire. Visez 2,5-3g de leucine par prise protéique (équivalent à environ 25-30g de protéines
                      de haute qualité). Pour un homme de votre profil, un apport total de 1,6-1,8g de protéines/kg de
                      poids corporel est optimal.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold">
                      Modulez votre apport glucidique selon la périodisation de vos entraînements
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Pour les jours de course à pied (exercice catabolique à dominante glycolytique), augmentez votre
                      apport en glucides à 5-7g/kg de poids corporel. Pour les jours de musculation, 3-5g/kg sont
                      suffisants. Cette stratégie de périodisation nutritionnelle optimise le stockage de glycogène
                      quand nécessaire.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold">Corrigez votre statut en magnésium et vitamine D</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      La fatigue persistante chez les sportifs amateurs est fréquemment liée à une déficience
                      subclinique en magnésium (impliqué dans plus de 300 réactions enzymatiques dont la production
                      d'ATP) et en vitamine D (régulation hormonale et récupération musculaire).
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold">Adoptez une stratégie d'hydratation électrolytique</h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      Une déshydratation même légère (1-2% du poids corporel) peut réduire significativement les
                      performances et prolonger le temps de récupération. Pour vos entraînements de course, calculez
                      votre taux de sudation et réhydratez-vous avec 150% de ce volume dans les 4-6h post-effort.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  Ces recommandations ciblent spécifiquement les mécanismes de fatigue et de récupération incomplète que
                  vous décrivez. Je vous suggère de les implémenter progressivement sur 3-4 semaines et d'observer
                  l'évolution de votre énergie et vos performances.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Exemples de formulations efficaces</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Pour un expert technique</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Tu es un ingénieur en cybersécurité avec 12 ans d'expérience dans la protection des infrastructures
                    critiques et la réponse aux incidents. Tu as travaillé pour des agences gouvernementales et des
                    entreprises du Fortune 500. Tu possèdes les certifications CISSP, CEH et OSCP, et tu as présenté tes
                    recherches lors de conférences comme Black Hat et DEF CON."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour un expert en communication</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Tu es un spécialiste en communication de crise avec 20 ans d'expérience dans la gestion de la
                    réputation de grandes marques internationales. Tu as géré des situations sensibles pour des
                    entreprises du CAC 40 et des personnalités publiques. Tu es l'auteur de deux ouvrages de référence
                    sur la gestion de crise à l'ère des médias sociaux et tu enseignes dans une grande école de
                    commerce."
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Pour un expert en pédagogie</h3>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">
                    "Tu es un professeur de sciences avec 15 ans d'expérience dans l'enseignement à des élèves de 10-12
                    ans. Tu as développé des méthodes pédagogiques innovantes qui ont été publiées dans des revues
                    spécialisées. Tu es connu pour ta capacité à expliquer des concepts complexes de manière simple et
                    engageante, en utilisant des analogies du quotidien et des expériences pratiques."
                  </p>
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
                <User className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold">Rédaction de contenus spécialisés</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Utilisez l'Expert Role-Playing pour générer des articles, rapports ou analyses dans des domaines
                techniques ou spécialisés avec le vocabulaire et la perspective appropriés.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Tu es un économiste spécialisé dans les marchés émergents avec une expertise particulière sur l'Asie
                  du Sud-Est. Rédige une analyse de 500 mots sur les perspectives économiques du Vietnam pour les 5
                  prochaines années."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold">Test de communication multi-perspectives</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Testez l'efficacité d'un message ou d'une stratégie en demandant à l'IA de réagir en tant que
                différentes parties prenantes ou personas.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Tu es un consommateur sceptique et soucieux de l'environnement. Comment réagis-tu à cette campagne de
                  communication pour notre gamme de produits écologiques?"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold">Préparation d'entretiens ou de négociations</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Simulez des scénarios d'entretien ou de négociation en faisant jouer à l'IA le rôle de l'interlocuteur
                pour vous aider à vous préparer.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Tu es un recruteur expérimenté dans le secteur des technologies. Mène un entretien d'embauche avec
                  moi pour un poste de Chef de Produit senior."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold">Vulgarisation et adaptation de contenu</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Utilisez des personas d'experts en pédagogie ou en vulgarisation pour adapter des contenus complexes à
                différentes audiences.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Tu es un professeur de sciences avec 15 ans d'expérience dans l'enseignement à des élèves de 10-12
                  ans. Explique le concept d'intelligence artificielle de manière simple et engageante."
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Application dans les Ressources Humaines</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              En contexte RH, l'Expert Role-Playing permet d'obtenir des réponses professionnelles adaptées aux
              problématiques spécifiques des ressources humaines :
            </p>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg mb-6">
              <h3 className="font-bold text-lg mb-3">Exemple de prompt RH</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Tu es un directeur des ressources humaines avec 15 ans d'expérience dans la gestion des talents au sein
                de grandes entreprises technologiques. Tu as une expertise particulière dans la conception et le
                déploiement de programmes de développement des compétences adaptés aux besoins futurs des organisations.
                Notre entreprise de 500 personnes est en pleine transformation digitale. Nous avons identifié un écart
                important entre les compétences actuelles de nos équipes et celles dont nous aurons besoin dans les 3
                prochaines années, notamment dans les domaines de l'analyse de données, l'automatisation et l'expérience
                client digitale. Élabore une stratégie de développement des compétences qui permettrait d'accompagner
                cette transformation, en précisant: 1. L'approche globale recommandée 2. Les étapes clés de mise en
                œuvre 3. Les métriques pertinentes pour suivre le succès 4. Les écueils potentiels à éviter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Matrice d'opportunité de l'IA en RH</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  En adoptant le rôle d'un expert RH, l'IA peut aider à positionner stratégiquement les initiatives d'IA
                  générative selon quatre quadrants :
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <strong>Automatisation</strong> : Processus standardisés et répétitifs (ex: génération d'offres
                    d'emploi)
                  </li>
                  <li>
                    <strong>Assistance</strong> : Amélioration incrémentale des capacités analytiques et décisionnelles
                  </li>
                  <li>
                    <strong>Augmentation</strong> : Collaboration IA-humain pour co-créer des solutions innovantes
                  </li>
                  <li>
                    <strong>Avant-Garde</strong> : Réinvention fondamentale des processus RH avec des approches
                    disruptives
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Cas d'usage en RH</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li>
                    <strong>Stratégie d'onboarding</strong> : Création de parcours d'intégration personnalisés et
                    hybrides
                  </li>
                  <li>
                    <strong>Analyse des tendances RH</strong> : Identification des évolutions du marché du travail et
                    recommandations stratégiques
                  </li>
                  <li>
                    <strong>Développement de formations</strong> : Conception de programmes de formation adaptés aux
                    besoins spécifiques
                  </li>
                  <li>
                    <strong>Conseil en gestion de carrière</strong> : Recommandations personnalisées pour le
                    développement professionnel
                  </li>
                  <li>
                    <strong>Optimisation des processus RH</strong> : Analyse et amélioration des processus existants
                  </li>
                </ul>
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
                Conseils pour réussir vos prompts Expert Role-Playing
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Définissez précisément l'expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Spécifiez non seulement la profession mais aussi le niveau d'expérience, les réalisations et les
                domaines de spécialisation. Plus le rôle est précis, plus la réponse sera adaptée.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Soyez vigilant aux affirmations factuelles</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vérifiez les informations critiques, même si le ton est convaincant. L'IA peut parfois présenter des
                affirmations erronées avec assurance lorsqu'elle joue un rôle d'expert.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Ajoutez un contexte professionnel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Mentionnez des institutions, publications ou secteurs d'activité reconnus pour renforcer la crédibilité
                du rôle expert que vous définissez.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Testez différentes formulations du rôle</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expérimentez avec différentes descriptions du même rôle pour trouver celle qui génère les réponses les
                plus pertinentes et utiles.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Précisez le public cible</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Indiquez à qui l'expert est censé s'adresser pour adapter son niveau de langage et ses explications à
                l'audience visée.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Utilisez des rôles opposés</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour obtenir des perspectives contradictoires sur une même question, demandez à l'IA d'adopter
                successivement des rôles aux points de vue différents.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Combinez plusieurs expertises</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si nécessaire, définissez un profil hybride (ex: "psychologue spécialisé en neurosciences avec une
                formation en pédagogie") pour des perspectives plus riches.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Équilibrez expertise et accessibilité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Précisez si vous souhaitez que l'expert vulgarise ses connaissances ou maintienne un niveau technique
                élevé selon votre besoin.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Combinez avec d'autres techniques</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Associez l'Expert Role-Playing avec le Chain-of-Thought ou le Few-Shot Prompting pour des résultats
                encore plus précis et adaptés.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Modèle de prompt Expert Role-Playing</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {`Tu es un [profession/rôle] avec [X] ans d'expérience dans [domaine spécifique]. 
Tu as travaillé pour/avec [organisations/clients pertinents] et tu as [réalisations notables].
Tu possèdes une expertise particulière en [spécialisation 1], [spécialisation 2] et [spécialisation 3].

[Description de la tâche ou question]

Ton analyse/réponse doit être [niveau de détail attendu] et inclure [éléments spécifiques attendus].
Adapte ton langage pour [public cible] tout en maintenant la rigueur professionnelle attendue d'un expert dans ce domaine.`}
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
          <Link href="/methodes/chain-of-thought" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Chain-of-Thought</CardTitle>
                <CardDescription>Raisonnement étape par étape</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez comment encourager le modèle à décomposer son raisonnement en étapes logiques.
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
                  Apprenez comment faire générer des connaissances avant de formuler une réponse finale.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/contextual-augmentation" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Contextual Augmentation</CardTitle>
                <CardDescription>Enrichir le contexte</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez comment enrichir le prompt avec des informations contextuelles pertinentes.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
