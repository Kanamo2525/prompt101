import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OneShotPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">One-Shot Prompting</h1>
          <p className="text-xl max-w-3xl mx-auto">Guidez l'IA avec un exemple unique</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/methodes" className="hover:text-green-600 transition-colors">
            Méthodes
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">One-Shot Prompting</span>
        </div>

        <div className="inline-block bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-8">
          Niveau : Facile
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">En quoi consiste le One-Shot Prompting ?</h3>
          <p className="text-gray-700">
            Le One-Shot Prompting consiste à fournir un seul exemple au modèle pour illustrer la tâche attendue. En
            pratique, on présente au modèle une paire entrée – sortie ou un exemple de question/réponse, suivi d'une
            nouvelle requête à traiter de manière analogue. L'idée est de clarifier le format ou le style de réponse
            souhaité en utilisant un exemple unique.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Comment ça fonctionne</h2>
        <p className="text-gray-700 mb-8">
          L'utilisateur intègre dans son prompt un exemple concret qui sert de guide pour l'IA. Ce modèle illustratif
          montre exactement ce que vous attendez comme format, ton ou type de contenu. Le modèle d'IA analyse cet
          exemple puis applique le même schéma à votre nouvelle demande, ce qui vous permet d'obtenir une réponse
          parfaitement alignée avec vos attentes sans avoir à fournir des instructions détaillées.
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

        {/* Example */}
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

        {/* Comparison */}
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

        {/* Pros and Cons */}
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
                <strong>Calibrage du ton et du style</strong> : permet d'influencer le niveau de langage ou le style de
                rédaction
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

        {/* Use Cases */}
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
                réception de votre demande de report de rendez-vous. Nous pouvons vous proposer les créneaux suivants :
                [dates]. Merci de nous confirmer votre disponibilité. Cordialement, Service Client" Nouveau contexte :
                Un client demande un remboursement pour un produit défectueux Email :
              </div>
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
                stockage, batterie 4500 mAh - Points forts : Appareil photo exceptionnel, charge rapide, design élégant
                - Tarif : 599€ (disponible en 3 coloris) Nouvelle demande : Fiche produit : Ordinateur portable ABC
                [Génère une fiche au même format]
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="pt-6">
              <h3 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                Standardisation des comptes-rendus
              </h3>
              <p className="text-gray-700 mb-4">Idéal pour maintenir une cohérence dans les reportings et synthèses.</p>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                Exemple : Compte-rendu : Réunion Équipe Marketing PARTICIPANTS : Alice, Bob, Charlie OBJECTIFS : Définir
                la stratégie Q3 DÉCISIONS : - Lancement campagne réseaux sociaux en août - Budget publicitaire augmenté
                de 15% ACTIONS : - Alice : Préparer brief créatif [Deadline: 15/07] - Bob : Contacter agences [Deadline:
                10/07] Nouveau contexte : Compte-rendu : Réunion Équipe Technique PARTICIPANTS : David, Emma, Frank
                OBJECTIFS : Planification sprint prochain [Génère le reste du compte-rendu]
              </div>
            </CardContent>
          </Card>
        </div>

        {/* HR Application */}
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
                l'équipe technique se joint à moi pour te souhaiter la bienvenue chez [Entreprise]. Nous sommes ravis de
                te compter parmi nous à partir du 15 avril en tant que Développeur Full-Stack. Pour ton premier jour, tu
                seras accueilli(e) par Marie, ta responsable d'équipe, à 9h30 dans nos locaux (10 rue de l'Innovation).
                Voici quelques informations pour faciliter ton intégration : [Liste des éléments d'onboarding]. N'hésite
                pas à me contacter si tu as des questions avant ton arrivée. À très bientôt ! [Signature RH]" Crée
                maintenant un email de bienvenue pour Sarah qui va intégrer l'équipe marketing le 5 mai en tant que
                Responsable Communication Digitale.
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Réponse de l'IA</h4>
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                <p className="mb-2">Bonjour Sarah,</p>
                <p className="mb-2">
                  L'ensemble de l'équipe marketing se joint à moi pour te souhaiter la bienvenue chez [Entreprise]. Nous
                  sommes ravis de te compter parmi nous à partir du 5 mai en tant que Responsable Communication
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

        {/* Tips */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
          <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
            <Info className="h-5 w-5 mr-2" />
            Conseils pour réussir vos prompts One-Shot
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Choisissez un exemple représentatif</strong> et aussi proche que possible de ce que vous souhaitez
              obtenir
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

        {/* Navigation */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
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
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Next-ai.fr. Guide des prompts pour l'IA générative.
          </p>
        </div>
      </footer>
    </div>
  )
}
