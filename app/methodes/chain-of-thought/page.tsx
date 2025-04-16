import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ChainOfThoughtPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">Chain-of-Thought Prompting</h1>
          <p className="mt-2 text-xl text-center max-w-3xl mx-auto">Pensée étape par étape pour des résultats précis</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Link href="/methodes">
            <Button variant="ghost" className="flex items-center text-gray-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux méthodes
            </Button>
          </Link>
          <div className="ml-4 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">
            Niveau : Intermédiaire
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">En quoi consiste le Chain-of-Thought Prompting ?</h2>
          <p className="text-gray-700">
            Le Chain-of-Thought (CoT) Prompting est une technique qui amène le modèle d&apos;IA à décomposer son
            raisonnement en plusieurs étapes au lieu de fournir directement une réponse. On lui demande en quelque sorte
            de &quot;penser à voix haute&quot; : l&apos;IA explicite une suite logique d&apos;idées ou de calculs menant
            à la solution finale. L&apos;objectif est d&apos;améliorer les performances sur les tâches complexes
            nécessitant logique ou calcul, en imitant le raisonnement humain pas-à-pas.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Comment ça fonctionne</h2>
        <p className="mb-6">
          Pour utiliser le Chain-of-Thought, l&apos;utilisateur formule le prompt de manière à inciter l&apos;IA à
          détailler son raisonnement. Par exemple, on peut ajouter une instruction du type « Explique ton raisonnement
          étape par étape avant de donner la réponse finale » à la question posée. Ainsi, au lieu de répondre
          d&apos;emblée, le modèle va d&apos;abord lister une série d&apos;étapes logiques ou de réflexions, puis
          conclure.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
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

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h3 className="font-semibold">Exemple de Chain-of-Thought Prompting</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                Une entreprise vend des t-shirts au prix de 15€ l&apos;unité. Pour les commandes de plus de 10 t-shirts,
                une remise de 20% est appliquée sur le prix total. Un client commande 15 t-shirts. Calcule le montant
                total de la commande en détaillant ton raisonnement étape par étape.
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Réponse de l&apos;IA
              </h4>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="mb-3">
                  <strong>Étape 1 :</strong> Calculons d&apos;abord le prix sans remise.
                </p>
                <p className="mb-1">Prix unitaire = 15€</p>
                <p className="mb-1">Nombre de t-shirts = 15</p>
                <p className="mb-3">Prix total sans remise = 15€ × 15 = 225€</p>

                <p className="mb-3">
                  <strong>Étape 2 :</strong> Vérifions si la commande est éligible à la remise.
                </p>
                <p className="mb-1">La remise s&apos;applique pour les commandes de plus de 10 t-shirts.</p>
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
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border">
            <div className="font-semibold text-center mb-4">Approche directe</div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              <p className="mb-2">
                <strong>Prompt :</strong> Une entreprise vend des t-shirts au prix de 15€ l&apos;unité. Pour les
                commandes de plus de 10 t-shirts, une remise de 20% est appliquée sur le prix total. Un client commande
                15 t-shirts. Calcule le montant total de la commande.
              </p>
              <p>
                <strong>Réponse :</strong> Le montant total de la commande est de 180€.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center text-gray-500 font-bold">VS</div>
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border">
            <div className="font-semibold text-center mb-4">Chain-of-Thought</div>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              <p className="mb-2">
                <strong>Prompt :</strong> Une entreprise vend des t-shirts au prix de 15€ l&apos;unité. Pour les
                commandes de plus de 10 t-shirts, une remise de 20% est appliquée sur le prix total. Un client commande
                15 t-shirts. Calcule le montant total de la commande en détaillant ton raisonnement étape par étape.
              </p>
              <p>
                <strong>Réponse :</strong> [Détail du raisonnement en 4 étapes + conclusion]
              </p>
            </div>
          </div>
        </div>

        <p className="mb-8">
          Avec le Chain-of-Thought, non seulement vous obtenez la bonne réponse, mais vous pouvez aussi vérifier le
          raisonnement et détecter d&apos;éventuelles erreurs ou oublis dans le processus de résolution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
            <h3 className="flex items-center text-green-800 font-semibold mb-4">
              <CheckCircle className="w-5 h-5 mr-2" />
              Avantages
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Améliore la précision</strong> sur les tâches complexes nécessitant plusieurs étapes de
                raisonnement
              </li>
              <li>
                <strong>Transparence</strong> : permet de suivre le cheminement de l&apos;IA et d&apos;identifier
                d&apos;éventuelles erreurs
              </li>
              <li>
                <strong>Réduit les erreurs logiques</strong> en forçant l&apos;IA à décomposer son raisonnement
              </li>
              <li>
                <strong>Facilite la vérification</strong> des résultats intermédiaires et finaux
              </li>
              <li>
                <strong>Pédagogique</strong> : montre au lecteur comment résoudre le problème pas à pas
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-100 p-6 rounded-lg">
            <h3 className="flex items-center text-red-800 font-semibold mb-4">
              <XCircle className="w-5 h-5 mr-2" />
              Limites
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Réponses plus longues</strong> qui peuvent être superflues pour des questions simples
              </li>
              <li>
                <strong>Peut commettre des erreurs</strong> dans ses étapes tout en paraissant convaincant
              </li>
              <li>
                <strong>Consomme plus de tokens</strong> que des réponses directes
              </li>
              <li>
                <strong>Risque de sur-expliciter</strong> des étapes triviales
              </li>
              <li>
                <strong>Mal guidé, peut dévier du sujet</strong> ou s&apos;attarder sur des détails non essentiels
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Cas d&apos;usage professionnels</h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="flex items-center text-blue-700 font-semibold mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z" />
                </svg>
              </div>
              Analyse financière et budgétaire
            </h3>
            <p className="mb-4">
              Parfait pour calculer des projections financières complexes avec une transparence totale sur la méthode
              utilisée.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              Notre entreprise envisage un nouveau projet avec un investissement initial de 150 000€. Les revenus
              estimés sont de 60 000€ la première année, 90 000€ la deuxième année et 120 000€ la troisième année. Les
              coûts opérationnels annuels sont estimés à 40 000€. Avec un taux d&apos;actualisation de 8%, calcule la
              Valeur Actuelle Nette (VAN) de ce projet en expliquant ton raisonnement étape par étape.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="flex items-center text-blue-700 font-semibold mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                </svg>
              </div>
              Prise de décision stratégique
            </h3>
            <p className="mb-4">
              Facilite l&apos;analyse multi-critères pour évaluer différentes options stratégiques avec un raisonnement
              transparent.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              Notre entreprise doit choisir entre trois emplacements pour ouvrir une nouvelle succursale. Voici les
              critères d&apos;évaluation (notés sur 10) : - Emplacement A : Coût (7/10), Accessibilité (9/10), Potentiel
              de croissance (6/10) - Emplacement B : Coût (5/10), Accessibilité (8/10), Potentiel de croissance (9/10) -
              Emplacement C : Coût (8/10), Accessibilité (6/10), Potentiel de croissance (7/10) En considérant que le
              coût compte pour 30% de la décision, l&apos;accessibilité pour 25% et le potentiel de croissance pour 45%,
              analyse étape par étape quelle option est la plus avantageuse.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="flex items-center text-blue-700 font-semibold mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                </svg>
              </div>
              Analyse de cas éthiques ou juridiques
            </h3>
            <p className="mb-4">
              Permet d&apos;évaluer des situations complexes en décomposant l&apos;analyse selon différents principes ou
              textes légaux.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm">
              Dans le cadre d&apos;une campagne marketing, notre entreprise souhaite utiliser des photos prises lors
              d&apos;un événement public organisé par notre marque. Certaines personnes sont reconnaissables sur ces
              images, mais nous n&apos;avons pas recueilli de consentement explicite. En tenant compte du RGPD et des
              lois sur le droit à l&apos;image, analyse étape par étape si nous pouvons légalement utiliser ces photos
              pour notre communication et quelles précautions nous devrions prendre.
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
          Application dans les Ressources Humaines
        </h2>
        <p className="mb-6">
          Le Chain-of-Thought Prompting est particulièrement utile dans le domaine RH pour des analyses complexes
          nécessitant une transparence dans le raisonnement :
        </p>

        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
          <div className="bg-gray-100 px-6 py-4 border-b">
            <h3 className="font-semibold">Exemple d&apos;application RH</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Prompt</h4>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                Notre entreprise doit décider entre deux candidats pour un poste de chef de projet. Le candidat A a 8
                ans d&apos;expérience, de solides compétences techniques (9/10), des compétences managériales moyennes
                (6/10) et s&apos;est très bien intégré à l&apos;équipe lors des entretiens (8/10). Le candidat B a 5 ans
                d&apos;expérience, des compétences techniques correctes (7/10), d&apos;excellentes compétences
                managériales (9/10) et une bonne intégration à l&apos;équipe (7/10). Pour ce poste, nous valorisons
                l&apos;expérience à 15%, les compétences techniques à 30%, les compétences managériales à 40% et
                l&apos;intégration à l&apos;équipe à 15%. Analyse étape par étape quel candidat correspond le mieux à
                nos besoins selon ces critères pondérés.
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                Réponse de l&apos;IA
              </h4>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p className="mb-3">
                  <strong>Étape 1 :</strong> Identifions les critères et leurs pondérations.
                </p>
                <ul className="list-disc pl-5 mb-3">
                  <li>Expérience : 15% de la décision</li>
                  <li>Compétences techniques : 30% de la décision</li>
                  <li>Compétences managériales : 40% de la décision</li>
                  <li>Intégration à l&apos;équipe : 15% de la décision</li>
                </ul>

                <p className="mb-3">
                  <strong>Étape 2 :</strong> Calculons le score du candidat A pour chaque critère pondéré.
                </p>
                <ul className="list-disc pl-5 mb-3">
                  <li>Expérience : 8 ans peut être évalué à 8/10. Score pondéré = 8 × 0,15 = 1,2</li>
                  <li>Compétences techniques : 9/10. Score pondéré = 9 × 0,30 = 2,7</li>
                  <li>Compétences managériales : 6/10. Score pondéré = 6 × 0,40 = 2,4</li>
                  <li>Intégration à l&apos;équipe : 8/10. Score pondéré = 8 × 0,15 = 1,2</li>
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
                  <li>Intégration à l&apos;équipe : 7/10. Score pondéré = 7 × 0,15 = 1,05</li>
                </ul>

                <p className="mb-3">
                  <strong>Étape 5 :</strong> Calculons le score total du candidat B.
                </p>
                <p className="mb-3">Score total B = 0,75 + 2,1 + 3,6 + 1,05 = 7,5/10</p>

                <p className="mb-3">
                  <strong>Étape 6 :</strong> Comparons les scores et analysons les résultats.
                </p>
                <p className="mb-3">
                  Les deux candidats obtiennent exactement le même score total de 7,5/10, ce qui suggère qu&apos;ils
                  sont équivalents selon nos critères pondérés.
                </p>

                <p className="mb-3">
                  <strong>Étape 7 :</strong> Affinons l&apos;analyse en regardant la répartition des points forts.
                </p>
                <p className="mb-3">
                  Le candidat A est plus fort en expérience, compétences techniques et intégration à l&apos;équipe. Le
                  candidat B excelle particulièrement en compétences managériales, qui représentent notre critère le
                  plus important (40%).
                </p>

                <p className="font-medium">
                  <strong>Conclusion :</strong> Bien que les deux candidats aient le même score global, le candidat B
                  pourrait être légèrement préférable car il excelle dans le critère que nous valorisons le plus
                  (compétences managériales). Cependant, le choix final peut dépendre d&apos;autres facteurs contextuels
                  ou de priorités spécifiques au projet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h3 className="flex items-center text-blue-700 font-semibold mb-4">
            <Lightbulb className="w-5 h-5 mr-2" />
            Conseils pour réussir vos Chain-of-Thought prompts
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Soyez explicite dans la demande d&apos;étapes</strong> : incluez des instructions comme
              &quot;Explique ton raisonnement pas à pas&quot; ou &quot;Décompose ta réflexion en étapes&quot;
            </li>
            <li>
              <strong>Pour les calculs</strong> : demandez spécifiquement de &quot;détailler chaque opération
              mathématique&quot;
            </li>
            <li>
              <strong>Adaptez la complexité</strong> : réservez cette technique aux problèmes complexes qui méritent une
              analyse en plusieurs étapes
            </li>
            <li>
              <strong>Vérifiez les étapes intermédiaires</strong> : utilisez les étapes exposées pour identifier
              d&apos;éventuelles erreurs
            </li>
            <li>
              <strong>Guidez la structure</strong> : vous pouvez suggérer le nombre d&apos;étapes ou les aspects à
              considérer pour mieux cadrer l&apos;analyse
            </li>
            <li>
              <strong>Combinez avec Few-Shot</strong> : pour des problèmes très complexes, montrez un exemple de
              raisonnement en chain-of-thought avant de poser votre question
            </li>
          </ul>
        </div>

        <div className="flex justify-between border-t pt-6">
          <Link href="/methodes/few-shot">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Few-Shot Prompting
            </Button>
          </Link>
          <Link href="/methodes/multi-prompting">
            <Button className="flex items-center">
              Multi-Prompting
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
