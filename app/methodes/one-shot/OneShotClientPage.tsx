"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PdfDownloadButton } from "@/components/pdf-download-button"

export default function OneShotClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">One-Shot Prompting</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guidez l'IA avec un exemple unique</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-blue-800 mb-3">En quoi consiste le One-Shot Prompting ?</h2>
        <p className="text-gray-700">
          Le One-Shot Prompting consiste à fournir un seul exemple au modèle pour illustrer la tâche attendue. En
          pratique, on présente au modèle une paire entrée – sortie ou un exemple de question/réponse, suivi d'une
          nouvelle requête à traiter de manière analogue. L'idée est de clarifier le format ou le style de réponse
          souhaité en utilisant un exemple unique.
        </p>
      </div>

      <Tabs defaultValue="overview" className="mb-12" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="examples">Exemples</TabsTrigger>
          <TabsTrigger value="usecases">Cas d'usage</TabsTrigger>
          <TabsTrigger value="hr">Application RH</TabsTrigger>
          <TabsTrigger value="tips">Conseils</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Comment ça fonctionne</h2>
            <p className="text-gray-700 mb-8">
              L'utilisateur intègre dans son prompt un exemple concret qui sert de guide pour l'IA. Ce modèle
              illustratif montre exactement ce que vous attendez comme format, ton ou type de contenu. Le modèle d'IA
              analyse cet exemple puis applique le même schéma à votre nouvelle demande, ce qui vous permet d'obtenir
              une réponse parfaitement alignée avec vos attentes sans avoir à fournir des instructions détaillées.
            </p>

            {/* Diagram */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
                <div className="w-full md:w-5/12 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-bold mb-2 text-blue-700">Exemple</div>
                  <div className="text-sm">
                    Question : Quels sont les avantages du télétravail ?<br />
                    <br />
                    Réponse : Le télétravail offre une meilleure flexibilité...
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-center">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-t-green-600 border-l-transparent border-r-transparent"></div>
                  <div className="mt-2 font-bold text-green-700">Modèle à suivre</div>
                </div>

                <div className="w-full md:w-5/12 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="font-bold mb-2 text-blue-700">Nouvelle demande</div>
                  <div className="text-sm">
                    Question : Quels sont les avantages de la semaine de 4 jours ?<br />
                    <br />
                    Réponse : ?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Comparaison avec Zero-Shot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center font-semibold text-gray-900 mb-4">Zero-Shot</div>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  Présentez les avantages de la semaine de 4 jours.
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center font-semibold text-gray-900 mb-4">One-Shot</div>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Question : Présentez les avantages du télétravail. Réponse : Le télétravail permet une
                  flexibilité accrue... Nouvelle question : Présentez les avantages de la semaine de 4 jours.
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-10">
              Avec le One-Shot, l'IA comprend non seulement la question, mais aussi le format et le style de réponse
              attendus grâce à l'exemple fourni.
            </p>
          </div>

          {/* Pros and Cons */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Avantages et limites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Avantages
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Bon compromis entre simplicité et guidance</strong> : ne requiert qu'un exemple minimal pour
                    orienter le modèle
                  </li>
                  <li>
                    <strong>Meilleure cohérence de format</strong> : l'IA va reproduire la structure de l'exemple fourni
                  </li>
                  <li>
                    <strong>Calibrage du ton et du style</strong> : permet d'influencer le niveau de langage ou le style
                    de rédaction
                  </li>
                  <li>
                    <strong>Clarification des attentes</strong> : montre explicitement le type de réponse désirée
                  </li>
                  <li>
                    <strong>Préparation rapide</strong> : nécessite peu de temps (un seul exemple à préparer)
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                  <XCircle className="h-5 w-5 mr-2" />
                  Limites
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Nécessite de disposer d'un exemple pertinent</strong>
                  </li>
                  <li>
                    <strong>L'exemple unique peut être insuffisant</strong> pour des tâches très complexes
                  </li>
                  <li>
                    <strong>Un mauvais exemple peut induire en erreur</strong> l'IA
                  </li>
                  <li>
                    <strong>Moins précis qu'un Few-Shot</strong> avec plusieurs exemples
                  </li>
                  <li>
                    <strong>Risque de surspécialisation</strong> si l'exemple est trop particulier
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-8">
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">
              Exemple de One-Shot Prompting
            </div>
            <div className="p-4 bg-white">
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Question : Présentez les avantages du télétravail. Réponse : Le télétravail permet une
                  flexibilité accrue, réduit le temps de transport, améliore l'équilibre vie professionnelle-vie
                  personnelle, diminue les coûts liés aux déplacements et peut augmenter la productivité grâce à un
                  environnement de travail personnalisé. Nouvelle question : Présentez les avantages de la semaine de 4
                  jours.
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <p>
                    Réponse : La semaine de 4 jours offre un week-end prolongé favorisant une meilleure récupération,
                    réduit le risque d'épuisement professionnel, augmente la concentration et l'efficacité pendant les
                    jours travaillés, diminue l'empreinte carbone liée aux déplacements et permet aux employés de
                    s'investir davantage dans leurs projets personnels ou familiaux.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">
              Exemple de résumé d'article
            </div>
            <div className="p-4 bg-white">
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Article : "Une étude récente montre que la consommation quotidienne de chocolat noir
                  pourrait réduire les risques de maladies cardiovasculaires de 15% grâce à sa teneur en flavonoïdes."
                  Résumé en 3 points : - Le chocolat noir consommé quotidiennement pourrait être bénéfique pour le cœur
                  - Une réduction de 15% des risques cardiovasculaires a été observée - Les flavonoïdes présents dans le
                  chocolat seraient responsables de ces effets positifs Nouvel article : "Des chercheurs de l'Université
                  de Stanford ont développé un algorithme d'intelligence artificielle capable de détecter les signes
                  précoces de la maladie d'Alzheimer avec une précision de 94%, soit 6 ans avant les premiers symptômes
                  cliniques." Résumé en 3 points :
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <p>
                    Résumé en 3 points :
                    <br />- Un nouvel algorithme d'IA développé à Stanford détecte l'Alzheimer de façon précoce
                    <br />- La précision de détection atteint 94% selon les chercheurs
                    <br />- Les signes peuvent être identifiés jusqu'à 6 ans avant l'apparition des symptômes cliniques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Use Cases Tab */}
        <TabsContent value="usecases" className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Cas d'usage professionnels</h2>
          <div className="space-y-6 mb-10">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  Communication professionnelle standardisée
                </h3>
                <p className="text-gray-700 mb-4">
                  Parfait pour générer des communications respectant un format ou un ton spécifique à l'entreprise.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Contexte : Un client demande un report de rendez-vous Email : "Cher M. Dupont, Nous accusons
                  réception de votre demande de report de rendez-vous. Nous pouvons vous proposer les créneaux suivants
                  : [dates]. Merci de nous confirmer votre disponibilité. Cordialement, Service Client" Nouveau contexte
                  : Un client demande un remboursement pour un produit défectueux Email :
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  Création de contenu formaté
                </h3>
                <p className="text-gray-700 mb-4">
                  Utile pour produire des documents suivant une structure ou un modèle précis.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Fiche produit : Smartphone XYZ - Caractéristiques principales : Écran 6,5", 128 Go de
                  stockage, batterie 4500 mAh - Points forts : Appareil photo exceptionnel, charge rapide, design
                  élégant - Tarif : 599€ (disponible en 3 coloris) Nouvelle demande : Fiche produit : Ordinateur
                  portable ABC [Génère une fiche au même format]
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  Standardisation des comptes-rendus
                </h3>
                <p className="text-gray-700 mb-4">
                  Idéal pour maintenir une cohérence dans les reportings et synthèses.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Compte-rendu : Réunion Équipe Marketing PARTICIPANTS : Alice, Bob, Charlie OBJECTIFS :
                  Définir la stratégie Q3 DÉCISIONS : - Lancement campagne réseaux sociaux en août - Budget publicitaire
                  augmenté de 15% ACTIONS : - Alice : Préparer brief créatif [Deadline: 15/07] - Bob : Contacter agences
                  [Deadline: 10/07] Nouveau contexte : Compte-rendu : Réunion Équipe Technique PARTICIPANTS : David,
                  Emma, Frank OBJECTIFS : Planification sprint prochain [Génère le reste du compte-rendu]
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* HR Application Tab */}
        <TabsContent value="hr" className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
            Application dans les Ressources Humaines
          </h2>
          <p className="text-gray-700 mb-6">
            Le One-Shot Prompting est particulièrement utile dans le domaine RH où la consistance des communications et
            des processus est essentielle :
          </p>

          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">Exemple d'application RH</div>
            <div className="p-4 bg-white">
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                  Exemple : Email de bienvenue pour un développeur intégrant l'équipe : "Bonjour Thomas, L'ensemble de
                  l'équipe technique se joint à moi pour te souhaiter la bienvenue chez [Entreprise]. Nous sommes ravis
                  de te compter parmi nous à partir du 15 avril en tant que Développeur Full-Stack. Pour ton premier
                  jour, tu seras accueilli(e) par Marie, ta responsable d'équipe, à 9h30 dans nos locaux (10 rue de
                  l'Innovation). Voici quelques informations pour faciliter ton intégration : [Liste des éléments
                  d'onboarding]. N'hésite pas à me contacter si tu as des questions avant ton arrivée. À très bientôt !
                  [Signature RH]" Crée maintenant un email de bienvenue pour Sarah qui va intégrer l'équipe marketing le
                  5 mai en tant que Responsable Communication Digitale.
                </div>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <p className="mb-2">Bonjour Sarah,</p>
                  <p className="mb-2">
                    L'ensemble de l'équipe marketing se joint à moi pour te souhaiter la bienvenue chez [Entreprise].
                    Nous sommes ravis de te compter parmi nous à partir du 5 mai en tant que Responsable Communication
                    Digitale.
                  </p>
                  <p className="mb-2">
                    Pour ton premier jour, tu seras accueillie par Philippe, ton responsable d'équipe, à 9h30 dans nos
                    locaux (10 rue de l'Innovation).
                  </p>
                  <p className="mb-2">Voici quelques informations pour faciliter ton intégration :</p>
                  <ul className="list-disc list-inside mb-2">
                    <li>Un ordinateur portable sera mis à ta disposition</li>
                    <li>Ton badge d'accès sera prêt à ton arrivée</li>
                    <li>Nous organisons un déjeuner d'équipe pour faire connaissance</li>
                    <li>Une session d'onboarding est prévue à 11h avec l'équipe RH</li>
                    <li>Tenue décontractée acceptée au bureau</li>
                  </ul>
                  <p className="mb-2">N'hésite pas à me contacter si tu as des questions avant ton arrivée.</p>
                  <p className="mb-2">À très bientôt !</p>
                  <p>[Signature RH]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden mb-10">
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">Autres applications RH</div>
            <div className="p-4 bg-white">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Descriptions de poste standardisées</p>
                    <p className="text-gray-600 text-sm">
                      Fournissez un exemple de description de poste bien structurée pour que l'IA génère d'autres
                      descriptions suivant le même format.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Feedback de performance</p>
                    <p className="text-gray-600 text-sm">
                      Utilisez un exemple de feedback constructif pour générer des évaluations équilibrées et utiles
                      pour d'autres collaborateurs.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Plans de développement personnel</p>
                    <p className="text-gray-600 text-sm">
                      Créez des plans de développement personnalisés en suivant un modèle cohérent pour tous les
                      employés.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-10 mb-6">Exemples d'applications RH</h3>

          <div className="space-y-8">
            {/* Exemple 1: Description de poste */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">
                Description de poste standardisée
              </div>
              <div className="p-4 bg-white">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                    Exemple : Description de poste : Développeur Full-Stack Titre du poste : Développeur Full-Stack
                    Département : Ingénierie Type de contrat : CDI Lieu : Paris, France (Hybride) À propos du poste :
                    Nous recherchons un développeur Full-Stack expérimenté pour concevoir, développer et maintenir des
                    applications web robustes et évolutives. Vous travaillerez au sein d'une équipe agile sur des
                    projets innovants utilisant les technologies modernes. Responsabilités principales : • Développer
                    des fonctionnalités front-end et back-end • Collaborer avec les designers UX/UI pour implémenter des
                    interfaces utilisateur • Optimiser les performances des applications • Participer aux revues de code
                    et à la documentation technique Compétences requises : • 3+ ans d'expérience en développement web •
                    Maîtrise de JavaScript/TypeScript, React et Node.js • Expérience avec les bases de données SQL et
                    NoSQL • Connaissance des principes de CI/CD Ce que nous offrons : • Salaire compétitif • Possibilité
                    de télétravail partiel • Formation continue • Environnement de travail dynamique --- Nouvelle
                    demande : Créez une description de poste pour un Data Scientist.
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                    <p className="font-semibold mb-2">Description de poste : Data Scientist</p>
                    <div className="space-y-3">
                      <p>
                        <span className="font-medium">Titre du poste :</span> Data Scientist
                        <br />
                        <span className="font-medium">Département :</span> Data & Analytics
                        <br />
                        <span className="font-medium">Type de contrat :</span> CDI
                        <br />
                        <span className="font-medium">Lieu :</span> Paris, France (Hybride)
                      </p>

                      <div>
                        <p className="font-medium">À propos du poste :</p>
                        <p>
                          Nous recherchons un Data Scientist talentueux pour transformer des données complexes en
                          insights actionnables. Vous travaillerez au sein d'une équipe pluridisciplinaire sur des
                          projets d'analyse prédictive et de machine learning pour résoudre des problématiques business
                          critiques.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Responsabilités principales :</p>
                        <ul className="list-disc list-inside">
                          <li>Concevoir et développer des modèles de machine learning et d'IA</li>
                          <li>Extraire, nettoyer et préparer des jeux de données complexes</li>
                          <li>Collaborer avec les équipes produit pour implémenter des solutions data-driven</li>
                          <li>Communiquer les résultats et recommandations aux parties prenantes</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">Compétences requises :</p>
                        <ul className="list-disc list-inside">
                          <li>3+ ans d'expérience en data science ou domaine similaire</li>
                          <li>Maîtrise de Python, R et des bibliothèques de ML (scikit-learn, TensorFlow, PyTorch)</li>
                          <li>Expérience avec les outils de traitement de données à grande échelle</li>
                          <li>Connaissance en statistiques et en mathématiques appliquées</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium">Ce que nous offrons :</p>
                        <ul className="list-disc list-inside">
                          <li>Salaire compétitif</li>
                          <li>Possibilité de télétravail partiel</li>
                          <li>Formation continue</li>
                          <li>Environnement de travail dynamique</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple 2: Feedback de performance */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">
                Feedback de performance équilibré
              </div>
              <div className="p-4 bg-white">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                    Exemple de feedback de performance équilibré : Collaborateur : Thomas Martin Poste : Chef de Projet
                    Digital Période d'évaluation : Janvier - Juin 2024 Points forts : • Communication efficace : Thomas
                    maintient une communication claire avec toutes les parties prenantes et fournit des mises à jour
                    régulières sur l'avancement des projets. • Gestion des délais : Tous les projets sous sa
                    responsabilité ont été livrés dans les temps, malgré des contraintes significatives. • Leadership :
                    Il a su motiver son équipe lors de périodes intenses et a facilité la résolution de conflits entre
                    membres. Axes d'amélioration : • Documentation : La documentation des projets pourrait être plus
                    détaillée pour faciliter le suivi et les transitions. • Délégation : Thomas a tendance à prendre
                    trop de responsabilités, ce qui pourrait mener à un surmenage. Une meilleure délégation serait
                    bénéfique. • Analyses post-projet : La mise en place d'analyses plus structurées après chaque projet
                    aiderait à capitaliser sur les leçons apprises. Plan de développement suggéré : • Suivre une
                    formation sur les méthodes de documentation efficaces d'ici Q3 2024 • Mettre en place un système de
                    mentorat avec un collègue junior pour développer ses compétences en délégation • Implémenter un
                    cadre formalisé d'analyse post-projet avec l'équipe --- Générez maintenant un feedback de
                    performance similaire pour Julie Dupont, Directrice Marketing Digital, pour la période Janvier -
                    Juin 2024. Elle a obtenu d'excellents résultats en stratégie de contenu et croissance des médias
                    sociaux, mais pourrait améliorer la gestion budgétaire et l'analyse ROI des campagnes.
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                    <p className="font-medium">
                      Collaborateur : Julie Dupont
                      <br />
                      Poste : Directrice Marketing Digital
                      <br />
                      Période d'évaluation : Janvier - Juin 2024
                    </p>

                    <div className="mt-3">
                      <p className="font-medium">Points forts :</p>
                      <ul className="list-disc list-inside">
                        <li>
                          Stratégie de contenu : Julie a développé une stratégie de contenu cohérente qui a
                          significativement augmenté l'engagement et la qualité des leads.
                        </li>
                        <li>
                          Croissance des médias sociaux : Sous sa direction, notre présence sur les réseaux sociaux a
                          connu une croissance de 45% en termes d'abonnés et de 62% en engagement.
                        </li>
                        <li>
                          Innovation : Elle a su identifier et implémenter de nouvelles tendances marketing avant nos
                          concurrents, renforçant notre position d'innovateur dans le secteur.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <p className="font-medium">Axes d'amélioration :</p>
                      <ul className="list-disc list-inside">
                        <li>
                          Gestion budgétaire : Certains projets ont dépassé les budgets alloués, nécessitant des
                          réallocations en cours de trimestre.
                        </li>
                        <li>
                          Analyse ROI : Les rapports de performance manquent d'analyses approfondies sur le retour sur
                          investissement des différentes campagnes.
                        </li>
                        <li>
                          Planification long terme : Les initiatives marketing pourraient bénéficier d'une vision
                          stratégique à plus long terme, au-delà du trimestre en cours.
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <p className="font-medium">Plan de développement suggéré :</p>
                      <ul className="list-disc list-inside">
                        <li>Participer à un atelier de gestion financière pour responsables marketing au Q3 2024</li>
                        <li>Mettre en place un tableau de bord mensuel d'analyse ROI avec l'équipe Finance</li>
                        <li>
                          Élaborer un plan marketing stratégique sur 18 mois en collaboration avec la Direction Générale
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple 3: Plan d'onboarding */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 font-medium">
                Plan d'onboarding personnalisé
              </div>
              <div className="p-4 bg-white">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
                  <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                    Exemple de plan d'onboarding : PLAN D'INTÉGRATION Collaborateur : Marc Petit Poste : Ingénieur
                    DevOps Date de début : 10 mai 2024 Manager : Claire Fontaine Jour 1 : 08h45 - Accueil par RH et
                    remise du kit de bienvenue 09h30 - Rencontre avec le manager et présentation de l'équipe 11h00 -
                    Configuration du poste de travail et accès aux systèmes 12h30 - Déjeuner avec l'équipe 14h00 -
                    Présentation de l'entreprise et visite des locaux 16h00 - Session avec IT pour finaliser les
                    configurations techniques Semaine 1 : • Formation sur les outils internes et les processus de
                    l'entreprise • Introduction au pipeline CI/CD et à l'infrastructure • Shadowing d'un collègue
                    expérimenté • Premier point avec le manager pour définir les objectifs à 30/60/90 jours Mois 1 : •
                    Participation à un premier projet (environnement de test) • Formation approfondie sur nos
                    plateformes cloud • Rencontre avec les équipes transverses • Point d'étape avec RH et manager ---
                    Créez maintenant un plan d'onboarding similaire pour Sophie Lambert qui rejoint l'entreprise le 3
                    juin 2024 en tant que Responsable Ressources Humaines, sous la direction de Philippe Martin, DRH.
                  </div>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Copy className="h-4 w-4 mr-2" />
                    Copier
                  </Button>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
                  <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                    <p className="font-medium">
                      PLAN D'INTÉGRATION
                      <br />
                      Collaborateur : Sophie Lambert
                      <br />
                      Poste : Responsable Ressources Humaines
                      <br />
                      Date de début : 3 juin 2024
                      <br />
                      Manager : Philippe Martin, DRH
                    </p>

                    <div className="mt-3">
                      <p className="font-medium">Jour 1 :</p>
                      <p>
                        08h45 - Accueil par l'assistante RH et remise du kit de bienvenue
                        <br />
                        09h30 - Rencontre avec Philippe Martin et présentation à l'équipe RH
                        <br />
                        11h00 - Configuration du poste de travail et accès aux systèmes SIRH
                        <br />
                        12h30 - Déjeuner avec l'équipe RH
                        <br />
                        14h00 - Présentation de l'entreprise et visite des locaux
                        <br />
                        16h00 - Session avec IT pour la configuration des outils de communication
                      </p>
                    </div>

                    <div className="mt-3">
                      <p className="font-medium">Semaine 1 :</p>
                      <ul className="list-disc list-inside">
                        <li>Formation sur le SIRH et les outils de gestion RH internes</li>
                        <li>Introduction aux politiques RH et aux conventions collectives applicables</li>
                        <li>Participation aux entretiens de recrutement en cours avec Philippe</li>
                        <li>Premier point avec le DRH pour définir les objectifs à 30/60/90 jours</li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <p className="font-medium">Mois 1 :</p>
                      <ul className="list-disc list-inside">
                        <li>Prise en charge autonome des processus de recrutement en cours</li>
                        <li>Rencontre avec les responsables de chaque département</li>
                        <li>Audit des processus RH actuels et proposition d'améliorations</li>
                        <li>Point d'étape avec le DRH et la Direction Générale</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stratégie d'utilisation */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Stratégie d'utilisation en RH</h3>
              <p className="text-gray-700 mb-4">
                Le One-Shot Prompting est particulièrement efficace pour standardiser les documents et communications
                RH. Voici quelques conseils pour maximiser son potentiel dans ce domaine :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Créez une bibliothèque d'exemples RH</p>
                    <p className="text-sm">
                      Constituez une collection d'exemples de haute qualité pour chaque type de document RH (offres
                      d'emploi, évaluations, plans de développement, etc.).
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Maintenez l'identité de l'entreprise</p>
                    <p className="text-sm">
                      Assurez-vous que vos exemples reflètent fidèlement la culture et le ton de votre entreprise pour
                      garantir des communications cohérentes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-800 p-1 rounded-full mr-2 mt-1">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">Formez votre équipe</p>
                    <p className="text-sm">
                      Apprenez à votre équipe RH à utiliser efficacement cette technique pour gagner du temps tout en
                      maintenant la qualité des communications.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Tips Tab */}
        <TabsContent value="tips" className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
            <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
              <Info className="h-5 w-5 mr-2" />
              Conseils pour réussir vos prompts One-Shot
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Choisissez un exemple représentatif</strong> et aussi proche que possible de ce que vous
                souhaitez obtenir
              </li>
              <li>
                <strong>Marquez clairement la séparation</strong> entre l'exemple et votre nouvelle demande
              </li>
              <li>
                <strong>Assurez-vous que l'exemple est correct</strong> - il servira de modèle pour l'IA
              </li>
              <li>
                <strong>Incluez tous les éléments de format</strong> que vous souhaitez voir reproduits (structure, ton,
                longueur)
              </li>
              <li>
                <strong>Testez différents exemples</strong> si le résultat ne correspond pas à vos attentes
              </li>
              <li>
                <strong>Pour les tâches très complexes</strong>, envisagez plutôt un Few-Shot avec plusieurs exemples
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
            <h3 className="flex items-center text-lg font-semibold text-amber-800 mb-4">
              <Info className="h-5 w-5 mr-2" />
              Erreurs courantes à éviter
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Exemple trop complexe</strong> : Commencez par un exemple simple et clair
              </li>
              <li>
                <strong>Exemple trop spécifique</strong> : Évitez les exemples trop nichés qui ne se généralisent pas
                bien
              </li>
              <li>
                <strong>Manque de clarté</strong> dans la séparation entre l'exemple et la nouvelle demande
              </li>
              <li>
                <strong>Incohérence</strong> entre l'exemple fourni et ce que vous attendez réellement
              </li>
              <li>
                <strong>Trop d'informations</strong> dans l'exemple qui peuvent distraire l'IA
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Modèle de prompt One-Shot</h3>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
              Exemple : [Type de tâche] : [Entrée d'exemple] [Sortie d'exemple formatée exactement comme vous le
              souhaitez] Nouvelle demande : [Type de tâche] : [Votre entrée]
            </div>
            <Button variant="ghost" size="sm" className="mt-2">
              <Copy className="h-4 w-4 mr-2" />
              Copier
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Techniques de prompting connexes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/methodes/zero-shot" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Zero-Shot Prompting</h3>
                <p className="text-sm text-gray-600">
                  Découvrez comment formuler des instructions claires sans fournir d'exemples.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/few-shot" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Few-Shot Prompting</h3>
                <p className="text-sm text-gray-600">
                  Apprenez comment améliorer davantage les performances en fournissant plusieurs exemples.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/expert-role-playing" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2">Expert Role-Playing</h3>
                <p className="text-sm text-gray-600">
                  Explorez comment demander au modèle d'adopter un rôle spécifique peut améliorer ses réponses.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-200 mt-12">
        <Button variant="outline" asChild>
          <Link href="/methodes/zero-shot" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zero-Shot Prompting
          </Link>
        </Button>
        <Button asChild>
          <Link href="/methodes/few-shot" className="flex items-center">
            Few-Shot Prompting
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* PDF Download */}
      <div className="mt-12 text-center">
        <PdfDownloadButton
          title="Guide One-Shot Prompting"
          filename="one-shot-prompting-guide.pdf"
          content="one-shot-prompting"
        />
      </div>
    </div>
  )
}
