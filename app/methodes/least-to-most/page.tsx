import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, XCircle, Lightbulb, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Least-to-Most Prompting | Next-ai.fr",
  description:
    "Découvrez la technique du Least-to-Most Prompting pour résoudre des problèmes complexes étape par étape",
}

export default function LeastToMostPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10">
        <div className="text-center">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full mb-4">
            Niveau : Avancé
          </span>
          <h1 className="text-4xl font-bold mb-4">Least-to-Most Prompting</h1>
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

      {/* Definition Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
        <h2 className="text-xl font-bold text-blue-700 mb-3">En quoi consiste le Least-to-Most Prompting ?</h2>
        <p className="text-gray-700">
          Le Least-to-Most Prompting est une technique où l&apos;on aborde un problème en commençant par des prompts
          très simples, puis en augmentant graduellement la complexité des demandes. Plutôt que de directement poser la
          question la plus difficile, on mène l&apos;IA à la solution finale par une série de questions intermédiaires
          de difficulté croissante. Cette méthode aide le modèle à mieux comprendre la tâche de manière progressive et à
          construire sa réponse pas à pas avec assurance.
        </p>
      </div>

      {/* How it Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Comment ça fonctionne</h2>
        <p className="mb-4">
          Le consultant planifie une série de requêtes successives. D&apos;abord, un prompt &quot;least&quot; (le plus
          simple) est posé – par exemple une question de définition ou un sous-calcul. Une fois l&apos;IA y ayant
          répondu, on utilise cette réponse pour formuler le prompt suivant, un peu plus complexe, et ainsi de suite
          jusqu&apos;au prompt &quot;most&quot; final qui correspond à la question originelle complète.
        </p>
        <p className="mb-6">
          On peut aussi intégrer cette progression dans un seul prompt en explicitant les étapes, mais souvent le faire
          en plusieurs tours permet de valider chaque étape. Cette approche s&apos;apparente à une méthode pédagogique
          où l&apos;on résout d&apos;abord les sous-problèmes faciles, puis on assemble progressivement ces éléments
          pour traiter le problème global.
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
                  générative pour une banque d&apos;investissement qui souhaite améliorer son analyse de risques et sa
                  prise de décision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Exemple concret</h2>

        <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
          <div className="bg-blue-600 text-white p-4 font-medium">Exemple de Least-to-Most Prompting</div>
          <div className="p-6">
            <p className="mb-4">
              Cas : Un dirigeant souhaite évaluer l&apos;impact potentiel de l&apos;économie circulaire sur son modèle
              d&apos;affaires industriel.
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
                  L&apos;économie circulaire est un modèle économique qui vise à limiter la consommation de ressources
                  et la production de déchets en créant des boucles de valeur positives. Contrairement à l&apos;économie
                  linéaire traditionnelle (extraire, fabriquer, jeter), elle s&apos;inspire des cycles naturels pour
                  créer un système régénératif.
                </p>

                <p className="mb-2">Ses principes fondamentaux sont :</p>
                <ul className="list-disc pl-5 mb-2">
                  <li>
                    <strong>Éco-conception</strong> : Concevoir les produits pour minimiser leur impact environnemental
                    sur tout leur cycle de vie
                  </li>
                  <li>
                    <strong>Économie de la fonctionnalité</strong> : Privilégier l&apos;usage plutôt que la possession,
                    vendre un service plutôt qu&apos;un bien
                  </li>
                  <li>
                    <strong>Réemploi</strong> : Réutiliser les produits encore fonctionnels
                  </li>
                  <li>
                    <strong>Réparation</strong> : Allonger la durée de vie des produits par la maintenance
                  </li>
                  <li>
                    <strong>Recyclage</strong> : Transformer les déchets en matières premières secondaires
                  </li>
                  <li>
                    <strong>Valorisation</strong> : Récupérer l&apos;énergie des déchets qui ne peuvent être recyclés
                  </li>
                </ul>

                <p>
                  Ces principes s&apos;organisent selon une hiérarchie de priorité, avec comme objectif principal la
                  réduction de l&apos;extraction de nouvelles ressources.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">
                Étape 2 : Application sectorielle générale
              </h4>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm mb-4">
                Comment les principes de l&apos;économie circulaire que tu viens de décrire s&apos;appliquent-ils
                généralement au secteur industriel de la fabrication ?
              </div>

              <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Réponse 2 (résumée)</h4>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
                <p className="mb-2">
                  Dans le secteur industriel de la fabrication, l&apos;économie circulaire se traduit par plusieurs
                  applications concrètes :
                </p>

                <ol className="list-decimal pl-5 mb-2 space-y-2">
                  <li>
                    <strong>Éco-conception industrielle</strong> : conception modulaire, réduction de la diversité des
                    matériaux, substitution des substances dangereuses
                  </li>
                  <li>
                    <strong>Approvisionnement circulaire</strong> : intégration de matières recyclées, partenariats
                    entre industries, circuits courts
                  </li>
                  <li>
                    <strong>Production optimisée</strong> : efficacité énergétique, réutilisation des chutes, boucles
                    fermées pour l&apos;eau
                  </li>
                  <li>
                    <strong>Nouveaux modèles d&apos;affaires</strong> : produit-service, logistique inverse,
                    mutualisation des équipements
                  </li>
                  <li>
                    <strong>Fin de vie repensée</strong> : reconditionnement, récupération des composants, valorisation
                    énergétique
                  </li>
                </ol>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Étapes 3 et 4</h4>
              <p className="text-gray-600 italic mb-4">
                Les étapes suivantes continuent d&apos;augmenter la complexité, avec l&apos;analyse des opportunités et
                défis (étape 3), puis l&apos;élaboration d&apos;une feuille de route stratégique complète sur 3 ans
                (étape 4).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-center text-blue-700 mb-3">Approche directe</h3>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="mb-2">
                    <strong>Prompt :</strong> Élaborez une feuille de route stratégique sur 3 ans pour un fabricant
                    d&apos;équipements industriels de taille moyenne souhaitant transformer son modèle d&apos;affaires
                    vers l&apos;économie circulaire.
                  </p>
                  <p>
                    <strong>Problème :</strong> La réponse risque de manquer de contexte approfondi sur l&apos;économie
                    circulaire et ses applications spécifiques.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-center text-blue-700 mb-3">Least-to-Most</h3>
                <div className="bg-gray-100 p-4 rounded-md">
                  <p className="mb-2">
                    <strong>Approche :</strong> Commencer par comprendre les fondamentaux, puis explorer les
                    applications industrielles avant de construire une feuille de route.
                  </p>
                  <p>
                    <strong>Avantage :</strong> Cette progression graduelle permet d&apos;obtenir une feuille de route
                    plus riche et applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Avantages et limites</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="flex items-center text-lg font-semibold mb-4">
              <CheckCircle className="text-green-600 mr-2 h-5 w-5" />
              <span>Avantages</span>
            </h3>
            <ul className="space-y-2 pl-5 list-disc">
              <li>
                <strong>Structure la résolution des tâches complexes</strong> en sous-problèmes plus faciles à résoudre
              </li>
              <li>
                <strong>Améliore la qualité des réponses finales</strong> en construisant progressivement sur des bases
                solides
              </li>
              <li>
                <strong>Permet de vérifier chaque étape intermédiaire</strong> et de corriger les erreurs avant de
                poursuivre
              </li>
              <li>
                <strong>Guide fermement l&apos;IA</strong> sans lui donner directement la réponse
              </li>
              <li>
                <strong>&quot;Échauffe&quot; l&apos;IA</strong> sur le contexte avant d&apos;aborder les questions plus
                difficiles
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

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Cas d&apos;usage pour dirigeants</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <ChartLineUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Analyse stratégique approfondie</h3>
            </div>
            <p className="mb-3">
              Idéal pour décomposer une analyse de marché ou d&apos;opportunité d&apos;affaires en étapes progressives.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-sm">
              <p className="mb-2">
                <strong>Étape 1 :</strong> &quot;Analyse les tendances actuelles et l&apos;évolution du marché de la
                mobilité électrique en Europe.&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 2 :</strong> &quot;Sur la base de ces tendances, identifie les segments de marché les plus
                prometteurs et les moins saturés dans ce secteur.&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 3 :</strong> &quot;Analyse les forces et faiblesses de notre entreprise (fabricant de
                composants électroniques) par rapport à ces opportunités identifiées.&quot;
              </p>
              <p>
                <strong>Étape 4 :</strong> &quot;En fonction de l&apos;analyse précédente, élabore une stratégie de
                positionnement et d&apos;entrée sur ce marché, avec un plan d&apos;action sur 18 mois et les
                investissements nécessaires.&quot;
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <Network className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Gestion de transformation organisationnelle</h3>
            </div>
            <p className="mb-3">
              Permet de planifier méthodiquement un changement organisationnel majeur en décomposant le processus.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-sm">
              <p className="mb-2">
                <strong>Étape 1 :</strong> &quot;Quels sont les principes fondamentaux d&apos;une organisation agile et
                comment se différencie-t-elle d&apos;une structure traditionnelle ?&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 2 :</strong> &quot;Quels sont les principaux obstacles et résistances typiques rencontrés
                lors d&apos;une transformation vers l&apos;agilité organisationnelle ?&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 3 :</strong> &quot;Identifie les compétences clés et les changements culturels nécessaires
                pour réussir cette transformation dans une entreprise du secteur industriel.&quot;
              </p>
              <p>
                <strong>Étape 4 :</strong> &quot;Élabore une feuille de route détaillée pour transformer notre
                organisation hiérarchique traditionnelle en organisation agile, incluant les étapes de préparation,
                déploiement, formation et mesure des résultats sur 24 mois.&quot;
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-700">Évaluation d&apos;impact réglementaire</h3>
            </div>
            <p className="mb-3">
              Facilite l&apos;analyse progressive de l&apos;impact d&apos;une nouvelle réglementation sur les opérations
              de l&apos;entreprise.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-sm">
              <p className="mb-2">
                <strong>Étape 1 :</strong> &quot;Explique les principales dispositions du nouveau règlement européen sur
                la cybersécurité des produits connectés (Cyber Resilience Act).&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 2 :</strong> &quot;Identifie quels types de produits et services de notre portefeuille
                (solutions IoT industrielles) seront concernés par cette réglementation.&quot;
              </p>
              <p className="mb-2">
                <strong>Étape 3 :</strong> &quot;Analyse les écarts entre nos pratiques actuelles de développement et de
                sécurité et les exigences de cette nouvelle réglementation.&quot;
              </p>
              <p>
                <strong>Étape 4 :</strong> &quot;Développe un plan de mise en conformité complet, incluant les
                modifications requises dans nos processus, les compétences à acquérir, et une estimation des coûts et
                délais de mise en œuvre.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Conseils d&apos;utilisation</h2>

        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Lightbulb className="text-blue-600 h-6 w-6 mr-2" />
            <h3 className="text-lg font-semibold text-blue-700">Conseils pour réussir vos prompts Least-to-Most</h3>
          </div>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              <strong>Planifiez votre séquence de questions</strong> avant de commencer, en identifiant les étapes
              logiques de progression
            </li>
            <li>
              <strong>Commencez réellement simple</strong> pour établir des bases solides sur lesquelles construire
            </li>
            <li>
              <strong>Assurez-vous que chaque étape s&apos;appuie</strong> sur les informations obtenues à l&apos;étape
              précédente
            </li>
            <li>
              <strong>Vérifiez la qualité de chaque réponse intermédiaire</strong> avant de passer à l&apos;étape
              suivante
            </li>
            <li>
              <strong>N&apos;hésitez pas à reformuler ou clarifier</strong> si une étape ne donne pas le résultat
              attendu
            </li>
            <li>
              <strong>Gardez une trace écrite</strong> des réponses à chaque étape pour référence future
            </li>
            <li>
              <strong>Soyez précis sur les liens</strong> entre chaque question : &quot;En te basant sur ces
              éléments...&quot; ou &quot;À partir de ton analyse précédente...&quot;
            </li>
            <li>
              <strong>Limitez le nombre d&apos;étapes</strong> à 3-5 pour éviter de rendre le processus trop lourd
            </li>
            <li>
              <strong>Pour des sujets complexes</strong>, envisagez de combiner avec d&apos;autres techniques comme
              Chain-of-Thought ou Multi-Prompting
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-10">
        <Link
          href="/methodes/multi-prompting"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Multi-Prompting
        </Link>
        <Link href="/methodes" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          Explorer d&apos;autres techniques
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Prêt à aborder vos problèmes complexes étape par étape ?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
          Utilisez notre canevas de création de prompts pour générer des séquences Least-to-Most adaptées à vos défis
          professionnels.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/canevas">
            <Button variant="secondary" size="lg">
              Créer un prompt
            </Button>
          </Link>
          <Link href="/methodes">
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" size="lg">
              Explorer d&apos;autres techniques
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ChevronDown(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function ChartLineUp(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <path d="M14 9h5v5" />
    </svg>
  )
}

function Network(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}

function Scale(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}
