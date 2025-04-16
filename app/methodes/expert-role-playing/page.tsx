import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, XCircle, Lightbulb } from "lucide-react"

export default function ExpertRolePlayingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Role-Playing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            L'IA incarne un expert spécifique pour des réponses spécialisées et adaptées
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/methodes" className="text-red-600 hover:text-red-800 flex items-center gap-2 mb-4">
            ← Retour aux méthodes
          </Link>
          <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full mb-6">
            Niveau : Intermédiaire
          </span>
        </div>

        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="examples">Exemples</TabsTrigger>
            <TabsTrigger value="use-cases">Cas d'usage</TabsTrigger>
            <TabsTrigger value="tips">Conseils pratiques</TabsTrigger>
          </TabsList>

          <TabsContent value="description">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Qu'est-ce que l'Expert Role-Playing ?</h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    La technique Expert Role-Playing consiste à demander à l'IA d'adopter le rôle d'un expert dans un
                    domaine spécifique pour obtenir des réponses plus spécialisées et adaptées. Cette approche permet
                    d'orienter le modèle vers un type de réponse particulier en activant un ensemble de connaissances et
                    un style de communication spécifiques.
                  </p>
                  <p className="text-gray-600">
                    En définissant précisément le profil de l'expert (domaine, expérience, spécialisation), vous obtenez
                    des réponses qui reflètent le niveau d'expertise, le vocabulaire technique et la perspective
                    professionnelle correspondant à ce rôle.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Comment ça fonctionne</h2>
                  <p className="text-gray-600 mb-4">
                    Le prompt est formulé de manière à définir un contexte de rôle pour l'IA. Par exemple, on commence
                    la requête par « Tu es un expert en cybersécurité avec 10 ans d'expérience… » ou « Agis en tant que
                    professeur de lycée en expliquant… ».
                  </p>
                  <p className="text-gray-600 mb-4">
                    À partir de là, le modèle va tenter d'imiter le comportement et les connaissances de ce personnage.
                    Par exemple, « Tu es un chef de projet senior. Donne ton avis sur le plan suivant… » amènera l'IA à
                    répondre en employant le vocabulaire et la perspective d'un chef de projet expérimenté.
                  </p>
                  <p className="text-gray-600">
                    Cette personnalisation peut être introduite soit dans le prompt utilisateur, soit via un message
                    système (dans les interfaces de chat structurées). L'important est de construire une identité pour
                    l'IA le temps de la réponse, afin d'ancrer ses connaissances et son style sur ce rôle.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Structure du prompt</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">1. Définition du rôle expert</h3>
                      <div className="bg-blue-50 p-3 rounded border border-blue-100 text-gray-700">
                        <strong className="text-blue-700">Tu es un expert en intelligence artificielle</strong> avec 15
                        ans d'expérience dans le développement d'algorithmes de machine learning et 5 années de
                        recherche académique...
                      </div>
                    </div>

                    <div className="flex justify-center my-2">
                      <div className="text-gray-400">↓</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">2. Formulation de la tâche</h3>
                      <div className="bg-blue-50 p-3 rounded border border-blue-100 text-gray-700">
                        Explique les implications éthiques du déploiement de systèmes de reconnaissance faciale dans les
                        espaces publics, en mettant en avant les arguments techniques et sociétaux.
                      </div>
                    </div>

                    <div className="flex justify-center my-2">
                      <div className="text-gray-400">↓</div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-2">3. Réponse avec expertise</h3>
                      <div className="bg-blue-50 p-3 rounded border border-blue-100 text-gray-700 italic">
                        L'IA répond en utilisant: <br />• Un vocabulaire spécialisé
                        <br />• Des références techniques
                        <br />• Une structure d'argumentation experte
                        <br />• Une perspective correspondant au rôle
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
                    <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Avantages
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Réponses détaillées et spécialisées</li>
                      <li>Adaptation du ton et du niveau de discours</li>
                      <li>Vocabulaire technique approprié</li>
                      <li>Structure de réponse professionnelle</li>
                      <li>Perspectives variées en changeant de persona</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl shadow-sm border border-red-200">
                    <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                      <XCircle className="h-5 w-5 mr-2" />
                      Limites
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>Ne crée pas de connaissance nouvelle</li>
                      <li>Risque de faux air de confiance</li>
                      <li>Certains rôles peuvent biaiser la réponse</li>
                      <li>Incohérence possible entre personas</li>
                      <li>Expertise limitée aux données d'entraînement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="examples">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Exemple d'Expert Role-Playing</h2>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <h3 className="font-medium text-gray-900 mb-2">Prompt</h3>
                  <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-700 whitespace-pre-wrap">
                    Tu es un nutritionniste spécialisé en nutrition sportive avec 10 ans d'expérience auprès d'athlètes
                    de haut niveau. Tu as travaillé avec des marathoniens, des nageurs olympiques et des joueurs de
                    football professionnel. Tu possèdes une double formation en biochimie et en sciences du sport. Un
                    sportif amateur de 35 ans qui s'entraîne 4 fois par semaine (course à pied et musculation) te
                    demande des conseils pour optimiser sa récupération et améliorer ses performances. Il se plaint de
                    fatigue persistante malgré un sommeil qu'il estime suffisant. Donne-lui 5 recommandations
                    nutritionnelles précises et scientifiquement fondées, en expliquant brièvement les mécanismes
                    physiologiques qui justifient ces recommandations.
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Réponse de l'IA</h3>
                  <div className="bg-white p-4 rounded border border-gray-300 text-gray-700">
                    <h3 className="font-semibold text-lg mb-3">
                      Recommandations nutritionnelles pour optimiser la récupération
                    </h3>

                    <p className="mb-3">Bonjour,</p>

                    <p className="mb-4">
                      En tant que nutritionniste spécialisé en nutrition sportive, je comprends parfaitement votre
                      problématique de récupération. La fatigue persistante malgré un sommeil adéquat est souvent un
                      indicateur de lacunes nutritionnelles ou d'un timing inadapté des apports. Voici mes
                      recommandations ciblées :
                    </p>

                    <ol className="space-y-4 mb-4">
                      <li>
                        <strong>Optimisez votre fenêtre anabolique post-entraînement</strong>
                        <br />
                        Consommez un ratio de 3:1 glucides/protéines dans les 30-45 minutes suivant l'effort (par
                        exemple 60g de glucides et 20g de protéines). Cette période critique permet une resynthèse
                        accélérée du glycogène musculaire et une initiation optimale de la synthèse protéique. Les
                        études montrent une augmentation de 30-40% du stockage de glycogène lorsque les glucides sont
                        consommés immédiatement après l'exercice versus 2 heures plus tard.
                      </li>

                      <li>
                        <strong>Intégrez des sources de protéines à leucine élevée</strong>
                        <br />
                        La leucine est l'acide aminé clé qui active la voie mTOR responsable de la synthèse protéique
                        musculaire. Visez 2,5-3g de leucine par prise protéique (équivalent à environ 25-30g de
                        protéines de haute qualité). Pour un homme de votre profil, un apport total de 1,6-1,8g de
                        protéines/kg de poids corporel est optimal.
                      </li>

                      <li>
                        <strong>Modulez votre apport glucidique selon la périodisation de vos entraînements</strong>
                        <br />
                        Pour les jours de course à pied (exercice catabolique à dominante glycolytique), augmentez votre
                        apport en glucides à 5-7g/kg de poids corporel. Pour les jours de musculation, 3-5g/kg sont
                        suffisants. Cette stratégie de périodisation nutritionnelle optimise le stockage de glycogène
                        quand nécessaire.
                      </li>

                      <li>
                        <strong>Corrigez votre statut en magnésium et vitamine D</strong>
                        <br />
                        La fatigue persistante chez les sportifs amateurs est fréquemment liée à une déficience
                        subclinique en magnésium (impliqué dans plus de 300 réactions enzymatiques dont la production
                        d'ATP) et en vitamine D (régulation hormonale et récupération musculaire).
                      </li>

                      <li>
                        <strong>Adoptez une stratégie d'hydratation électrolytique</strong>
                        <br />
                        Une déshydratation même légère (1-2% du poids corporel) peut réduire significativement les
                        performances et prolonger le temps de récupération. Pour vos entraînements de course, calculez
                        votre taux de sudation et réhydratez-vous avec 150% de ce volume dans les 4-6h post-effort.
                      </li>
                    </ol>

                    <p>
                      Ces recommandations ciblent spécifiquement les mécanismes de fatigue et de récupération incomplète
                      que vous décrivez. Je vous suggère de les implémenter progressivement sur 3-4 semaines et
                      d'évaluer l'impact sur votre niveau d'énergie et vos performances.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Avant / Après : Amélioration d'un prompt</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h3 className="font-medium text-red-800 mb-2">❌ Sans Expert Role-Playing</h3>
                    <div className="bg-white p-3 rounded border border-red-100 text-gray-700 mb-3">
                      "Comment améliorer la communication interne dans une entreprise ?"
                    </div>
                    <div className="text-sm text-red-700">
                      <p>
                        <strong>Problèmes :</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Question trop générale</li>
                        <li>Pas de contexte spécifique</li>
                        <li>Aucune expertise définie</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-medium text-green-800 mb-2">✅ Avec Expert Role-Playing</h3>
                    <div className="bg-white p-3 rounded border border-green-100 text-gray-700 mb-3">
                      "Tu es un consultant en communication organisationnelle avec 15 ans d'expérience dans
                      l'accompagnement d'entreprises en transformation. Tu as écrit deux livres sur la communication
                      interne et tu donnes régulièrement des conférences sur ce sujet. Notre entreprise de 200 personnes
                      répartie sur 3 sites connaît des problèmes de silos entre départements et de transmission
                      d'information. Propose 5 actions concrètes pour améliorer notre communication interne, en
                      précisant pour chacune les bénéfices attendus et les indicateurs de succès."
                    </div>
                    <div className="text-sm text-green-700">
                      <p>
                        <strong>Améliorations :</strong>
                      </p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>Rôle expert clairement défini</li>
                        <li>Contexte spécifique de l'entreprise</li>
                        <li>Demande structurée avec livrables précis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="use-cases">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="font-semibold text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Rédaction de contenus spécialisés
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Utilisez l'Expert Role-Playing pour générer des articles, rapports ou analyses dans des domaines
                    techniques ou spécialisés avec le vocabulaire et la perspective appropriés.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-200">
                    <p className="font-medium mb-1">Exemple de prompt:</p>
                    <p className="italic">
                      "Tu es un économiste spécialisé dans les marchés émergents avec une expertise particulière sur
                      l'Asie du Sud-Est. Rédige une analyse de 500 mots sur les perspectives économiques du Vietnam pour
                      les 5 prochaines années."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="font-semibold text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Test de communication multi-perspectives
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Testez l'efficacité d'un message ou d'une stratégie en demandant à l'IA de réagir en tant que
                    différentes parties prenantes ou personas.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-200">
                    <p className="font-medium mb-1">Exemple de prompt:</p>
                    <p className="italic">
                      "Tu es un consommateur sceptique et soucieux de l'environnement. Comment réagis-tu à cette
                      campagne de communication pour notre gamme de produits écologiques?"
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="font-semibold text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Préparation d'entretiens ou de négociations
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Simulez des scénarios d'entretien ou de négociation en faisant jouer à l'IA le rôle de
                    l'interlocuteur pour vous aider à vous préparer.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-200">
                    <p className="font-medium mb-1">Exemple de prompt:</p>
                    <p className="italic">
                      "Tu es un recruteur expérimenté dans le secteur des technologies. Mène un entretien d'embauche
                      avec moi pour un poste de Chef de Produit senior."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="bg-red-50 p-4 border-b border-red-100">
                  <h3 className="font-semibold text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Vulgarisation et adaptation de contenu
                  </h3>
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">
                    Utilisez des personas d'experts en pédagogie ou en vulgarisation pour adapter des contenus complexes
                    à différentes audiences.
                  </p>
                  <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 border border-gray-200">
                    <p className="font-medium mb-1">Exemple de prompt:</p>
                    <p className="italic">
                      "Tu es un professeur de sciences avec 15 ans d'expérience dans l'enseignement à des élèves de
                      10-12 ans. Explique le concept d'intelligence artificielle de manière simple et engageante."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Application dans les Ressources Humaines</h2>
              <p className="text-gray-700 mb-6">
                En contexte RH, l'Expert Role-Playing permet d'obtenir des réponses professionnelles adaptées aux
                problématiques spécifiques des ressources humaines :
              </p>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Exemple de prompt RH</h3>
                <div className="bg-gray-100 p-4 rounded border border-gray-300 text-gray-700 whitespace-pre-wrap">
                  Tu es un directeur des ressources humaines avec 15 ans d'expérience dans la gestion des talents au
                  sein de grandes entreprises technologiques. Tu as une expertise particulière dans la conception et le
                  déploiement de programmes de développement des compétences adaptés aux besoins futurs des
                  organisations. Notre entreprise de 500 personnes est en pleine transformation digitale. Nous avons
                  identifié un écart important entre les compétences actuelles de nos équipes et celles dont nous aurons
                  besoin dans les 3 prochaines années, notamment dans les domaines de l'analyse de données,
                  l'automatisation et l'expérience client digitale. Élabore une stratégie de développement des
                  compétences qui permettrait d'accompagner cette transformation, en précisant: 1. L'approche globale
                  recommandée 2. Les étapes clés de mise en œuvre 3. Les métriques pertinentes pour suivre le succès 4.
                  Les écueils potentiels à éviter
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200">
              <h2 className="flex items-center text-xl font-semibold text-blue-800 mb-6">
                <Lightbulb className="h-6 w-6 mr-2" />
                Conseils pour réussir vos prompts Expert Role-Playing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Définissez précisément l'expertise</h3>
                    <p className="text-gray-700">
                      Spécifiez non seulement la profession mais aussi le niveau d'expérience, les réalisations et les
                      domaines de spécialisation. Plus le rôle est précis, plus la réponse sera adaptée.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Ajoutez un contexte professionnel</h3>
                    <p className="text-gray-700">
                      Mentionnez des institutions, publications ou secteurs d'activité reconnus pour renforcer la
                      crédibilité du rôle expert que vous définissez.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Précisez le public cible</h3>
                    <p className="text-gray-700">
                      Indiquez à qui l'expert est censé s'adresser pour adapter son niveau de langage et ses
                      explications à l'audience visée.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Combinez plusieurs expertises</h3>
                    <p className="text-gray-700">
                      Si nécessaire, définissez un profil hybride (ex: "psychologue spécialisé en neurosciences avec une
                      formation en pédagogie") pour des perspectives plus riches.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Soyez vigilant aux affirmations factuelles</h3>
                    <p className="text-gray-700">
                      Vérifiez les informations critiques, même si le ton est convaincant. L'IA peut parfois présenter
                      des affirmations erronées avec assurance lorsqu'elle joue un rôle d'expert.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Testez différentes formulations du rôle</h3>
                    <p className="text-gray-700">
                      Expérimentez avec différentes descriptions du même rôle pour trouver celle qui génère les réponses
                      les plus pertinentes et utiles.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Utilisez des rôles opposés</h3>
                    <p className="text-gray-700">
                      Pour obtenir des perspectives contradictoires sur une même question, demandez à l'IA d'adopter
                      successivement des rôles aux points de vue différents.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="font-medium text-blue-700 mb-2">Équilibrez expertise et accessibilité</h3>
                    <p className="text-gray-700">
                      Précisez si vous souhaitez que l'expert vulgarise ses connaissances ou maintienne un niveau
                      technique élevé selon votre besoin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Exemples de formulations efficaces</h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Pour un expert technique</h3>
                  <div className="bg-gray-100 p-3 rounded border border-gray-300 text-gray-700">
                    "Tu es un ingénieur en cybersécurité avec 12 ans d'expérience dans la protection des infrastructures
                    critiques et la réponse aux incidents. Tu as travaillé pour des agences gouvernementales et des
                    entreprises du Fortune 500. Tu possèdes les certifications CISSP, CEH et OSCP, et tu as présenté tes
                    recherches lors de conférences comme Black Hat et DEF CON."
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Pour un expert en communication</h3>
                  <div className="bg-gray-100 p-3 rounded border border-gray-300 text-gray-700">
                    "Tu es un spécialiste en communication de crise avec 20 ans d'expérience dans la gestion de la
                    réputation de grandes marques internationales. Tu as géré des situations sensibles pour des
                    entreprises du CAC 40 et des personnalités publiques. Tu es l'auteur de deux ouvrages de référence
                    sur la gestion de crise à l'ère des médias sociaux et tu enseignes dans une grande école de
                    commerce."
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-2">Pour un expert en pédagogie</h3>
                  <div className="bg-gray-100 p-3 rounded border border-gray-300 text-gray-700">
                    "Tu es un professeur de mathématiques avec 25 ans d'expérience dans l'enseignement à des élèves en
                    difficulté. Tu as développé des méthodes pédagogiques innovantes qui ont été adoptées par plusieurs
                    académies. Tu es particulièrement doué pour expliquer des concepts complexes avec des analogies
                    simples et des visualisations. Tu adaptes systématiquement ton approche au style d'apprentissage de
                    chaque élève."
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Link href="/methodes/rct" className="text-red-600 hover:text-red-800">
            ← RCT (Rôle, Contexte, Tâche)
          </Link>
          <Link href="/methodes/iterative-prompting" className="text-red-600 hover:text-red-800">
            Iterative Prompting →
          </Link>
        </div>
      </main>
    </div>
  )
}
