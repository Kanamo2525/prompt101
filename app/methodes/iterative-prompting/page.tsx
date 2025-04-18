"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Repeat, MessageSquare, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IterativePromptingPage() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white text-gray-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Iterative Prompting</h1>
          <p className="text-xl max-w-3xl mx-auto">Affinage progressif des réponses par séquences de questions</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex text-sm text-gray-500 mb-6">
          <Link href="/methodes" className="hover:text-gray-700">
            Méthodes
          </Link>
          <span className="mx-2">›</span>
          <span>Iterative Prompting</span>
        </div>

        <div className="inline-block bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-6">
          Niveau : Intermédiaire
        </div>

        <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="exemples">Exemples</TabsTrigger>
            <TabsTrigger value="cas-usage">Cas d'usage</TabsTrigger>
            <TabsTrigger value="conseils">Conseils pratiques</TabsTrigger>
          </TabsList>

          {/* Onglet Description */}
          <TabsContent value="description" className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">En quoi consiste l'Iterative Prompting ?</h3>
              <p className="text-gray-700">
                L'Iterative Prompting est une méthode qui consiste à poser des questions de suivi successives pour
                approfondir ou affiner les réponses de l'IA. Plutôt que de tout demander en une seule fois, on interagit
                avec le modèle en plusieurs tours, comme dans une conversation humaine où l'on rebondit sur la réponse
                précédente pour la compléter ou la corriger. Cette technique permet d'ajouter graduellement des détails,
                de recadrer le modèle si nécessaire et de converger vers un résultat précis.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
              Comment ça fonctionne
            </h2>
            <p className="text-gray-700 mb-6">
              On démarre avec un prompt initial relativement large ou général. L'IA fournit une première réponse.
              Ensuite, l'utilisateur analyse cette réponse et formule un prompt de suivi (follow-up) visant à apporter
              une amélioration : demander plus de détails sur une partie, corriger un point ambigu, élargir sur un
              aspect non couvert, ou reformuler la demande de façon plus précise. Ce va-et-vient se poursuit jusqu'à ce
              que le résultat soit satisfaisant.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 my-8">
              <div className="flex flex-col space-y-8">
                {/* Étape 1 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Prompt initial</div>
                    <div className="text-gray-700">
                      Quelles sont les principales tendances du marché de l'IA pour 2025 ?
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:w-[10%]">
                    <ArrowRight className="hidden md:block h-6 w-6 text-blue-500" />
                    <ArrowRight className="block md:hidden rotate-90 h-6 w-6 text-blue-500" />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Première réponse de l'IA</div>
                    <div className="text-gray-700">
                      Les principales tendances sont : IA générative, IA responsable, Edge AI, etc. (réponse générale)
                    </div>
                  </div>
                </div>

                {/* Flèche vers le bas */}
                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 h-6 w-6 text-blue-500" />
                </div>

                {/* Étape 2 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Prompt de suivi (Itération 1)</div>
                    <div className="text-gray-700">
                      Peux-tu approfondir spécifiquement la tendance de l'IA générative et son impact sur le secteur
                      créatif ?
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:w-[10%]">
                    <ArrowRight className="hidden md:block h-6 w-6 text-blue-500" />
                    <ArrowRight className="block md:hidden rotate-90 h-6 w-6 text-blue-500" />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Réponse affinée</div>
                    <div className="text-gray-700">
                      L'IA générative transforme le secteur créatif par... (réponse plus ciblée et détaillée sur un
                      aspect)
                    </div>
                  </div>
                </div>

                {/* Flèche vers le bas */}
                <div className="flex justify-center">
                  <ArrowRight className="rotate-90 h-6 w-6 text-blue-500" />
                </div>

                {/* Étape 3 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Prompt de suivi (Itération 2)</div>
                    <div className="text-gray-700">
                      Comment les entreprises de taille moyenne peuvent-elles concrètement intégrer ces technologies
                      dans leur stratégie marketing ?
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:w-[10%]">
                    <ArrowRight className="hidden md:block h-6 w-6 text-blue-500" />
                    <ArrowRight className="block md:hidden rotate-90 h-6 w-6 text-blue-500" />
                  </div>
                  <div className="bg-blue-100 p-4 rounded-lg border border-blue-200 md:w-1/2">
                    <div className="font-semibold text-blue-800 mb-2">Réponse finale optimisée</div>
                    <div className="text-gray-700">
                      Voici 5 stratégies concrètes pour les PME... (réponse pratique, appliquée et adaptée au besoin
                      spécifique)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Avantages
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Contrôle fin du contenu généré</strong> : possibilité d'orienter progressivement la
                      réponse vers ce qui est vraiment recherché
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Approche adaptative</strong> : permet de rebondir sur les informations reçues et
                      d'explorer de nouvelles pistes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Correction en cours de route</strong> : facilite l'identification et la rectification des
                      erreurs ou imprécisions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Décomposition de sujets complexes</strong> : traitement par étapes des problématiques
                      multidimensionnelles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Interaction naturelle</strong> : proche d'une conversation humaine, ce qui est intuitif
                      pour l'utilisateur
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>
                      <strong>Efficace pour le brainstorming</strong> : permet d'approfondir progressivement les idées
                      les plus prometteuses
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  Limites
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Processus plus chronophage</strong> : nécessite plusieurs échanges au lieu d'une réponse
                      unique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Risque de perte de contexte</strong> : sur de très longues séquences, l'IA peut oublier
                      certains éléments initiaux
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Nécessite une participation active</strong> : l'utilisateur doit analyser les réponses et
                      formuler des questions pertinentes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Biais de confirmation possible</strong> : tendance à orienter les réponses uniquement vers
                      ce qu'on souhaite entendre
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Moins prévisible</strong> : le résultat final dépend de la qualité des questions de suivi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>
                      <strong>Potentielles contradictions</strong> : l'IA peut parfois revenir sur ses affirmations
                      précédentes
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Exemples */}
          <TabsContent value="exemples" className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 font-medium">
                Exemple d'Iterative Prompting
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt initial</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    Quels sont les facteurs clés de succès pour lancer un nouveau produit SaaS sur le marché B2B ?
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse initiale de l'IA</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="mb-2">
                      Voici les facteurs clés de succès pour lancer un nouveau produit SaaS sur le marché B2B :
                    </p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>
                        <strong>Proposition de valeur claire</strong> - Votre produit doit résoudre un problème
                        spécifique et apporter une valeur ajoutée identifiable
                      </li>
                      <li>
                        <strong>Product-market fit</strong> - S'assurer que votre solution répond à un besoin réel du
                        marché
                      </li>
                      <li>
                        <strong>Modèle de tarification adapté</strong> - Structure tarifaire appropriée au segment visé
                      </li>
                      <li>
                        <strong>Expérience utilisateur optimale</strong> - Interface intuitive et onboarding simplifié
                      </li>
                      <li>
                        <strong>Stratégie d'acquisition client efficace</strong> - Marketing ciblé et processus de vente
                        adapté
                      </li>
                      <li>
                        <strong>Support client réactif</strong> - Service après-vente de qualité
                      </li>
                      <li>
                        <strong>Scalabilité technique</strong> - Infrastructure capable de soutenir la croissance
                      </li>
                    </ol>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt de suivi (Itération 1)</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    Merci pour cette vue d'ensemble. Pourrais-tu détailler davantage le point sur la "stratégie
                    d'acquisition client efficace" ? Quelles sont les approches spécifiques qui fonctionnent le mieux
                    pour les SaaS B2B en 2025 ?
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse affinée</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="mb-4">
                      Voici les stratégies d'acquisition client les plus efficaces pour les SaaS B2B en 2025 :
                    </p>

                    <h4 className="font-bold text-gray-800 mb-2">1. Marketing de contenu spécialisé</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Création de contenu expert ciblant des problématiques précises de l'industrie</li>
                      <li>Rapports de recherche originaux avec données exclusives</li>
                      <li>Webinaires thématiques animés par des experts du domaine</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">2. Account-Based Marketing (ABM)</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Personnalisation poussée du parcours client pour les comptes stratégiques</li>
                      <li>
                        Utilisation d'outils d'intelligence artificielle pour l'identification et le scoring des
                        entreprises cibles
                      </li>
                      <li>Campagnes multi-canaux synchronisées pour des entreprises spécifiques</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">3. Écosystème de partenaires</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Développement de programmes d'affiliation avec des consultants sectoriels</li>
                      <li>Intégrations stratégiques avec d'autres outils SaaS complémentaires</li>
                      <li>Marketplace d'applications et API ouvertes</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">4. Social selling avancé</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Présence active des cadres dirigeants sur LinkedIn et forums professionnels</li>
                      <li>Utilisation des plateformes professionnelles pour le partage d'expertise</li>
                      <li>Engagement authentique dans les communautés sectorielles</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">5. Modèle de Product-Led Growth (PLG)</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Versions freemium ou essais gratuits sans friction</li>
                      <li>Parcours d'onboarding automatisé avec accompagnement contextuel</li>
                      <li>Stratégies d'expansion (upsell, cross-sell) basées sur l'utilisation</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt de suivi (Itération 2)</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    Ces informations sont très utiles. Pour notre startup avec un budget marketing limité, pourrais-tu
                    proposer un plan d'action concret sur 90 jours pour mettre en œuvre la stratégie de Product-Led
                    Growth ? Nous avons une équipe de 5 personnes (2 développeurs, 1 designer UX, 1 responsable
                    marketing, 1 CEO).
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse finale optimisée</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      Plan d'action Product-Led Growth sur 90 jours pour startup SaaS B2B
                    </h3>

                    <h4 className="font-bold text-gray-800 mb-2">Jours 1-15 : Préparation de l'infrastructure</h4>
                    <ul className="list-disc list-inside mb-4 ml-2">
                      <li>
                        <strong>Tech (Développeurs)</strong> : Mettre en place les mécanismes de freemium/essai gratuit
                        et la segmentation des fonctionnalités
                      </li>
                      <li>
                        <strong>UX (Designer)</strong> : Concevoir un parcours d'onboarding simplifié en 3-5 étapes
                        maximum
                      </li>
                      <li>
                        <strong>Marketing</strong> : Préparer la tracking analytics pour mesurer les conversions et
                        l'engagement utilisateur
                      </li>
                      <li>
                        <strong>CEO</strong> : Définir les KPIs du programme PLG et les objectifs de conversion
                      </li>
                      <li>
                        <strong>Livrable</strong> : Version beta de l'offre freemium avec parcours d'activation défini
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Jours 16-30 : Lancement et optimisation initiale</h4>
                    <ul className="list-disc list-inside mb-4 ml-2">
                      <li>
                        <strong>Tech</strong> : Implémenter des tooltips contextuels et messages in-app pour guider les
                        utilisateurs
                      </li>
                      <li>
                        <strong>UX</strong> : Créer une bibliothèque de ressources minimales (vidéos, guides)
                        d'auto-formation
                      </li>
                      <li>
                        <strong>Marketing</strong> : Lancer une campagne LinkedIn ciblée (budget ~1000€) vers 3
                        micro-segments précis
                      </li>
                      <li>
                        <strong>CEO</strong> : Outreach personnel vers 20 early adopters potentiels pour feedback direct
                      </li>
                      <li>
                        <strong>Livrable</strong> : Premier groupe d'utilisateurs actifs (objectif: 50-100) et boucle de
                        feedback
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Jours 31-60 : Automatisation et expansion</h4>
                    <ul className="list-disc list-inside mb-4 ml-2">
                      <li>
                        <strong>Tech</strong> : Développer les triggers automatisés basés sur comportement utilisateur
                        pour emails/notifications
                      </li>
                      <li>
                        <strong>UX</strong> : Optimiser les points de friction identifiés dans le parcours (basé sur les
                        données d'usage)
                      </li>
                      <li>
                        <strong>Marketing</strong> : Mettre en place un webinaire bi-mensuel de démonstration/formation
                        (30min)
                      </li>
                      <li>
                        <strong>CEO+Marketing</strong> : Créer un programme simple de "référencement client" (remise
                        pour parrainages)
                      </li>
                      <li>
                        <strong>Livrable</strong> : Système d'acquisition semi-automatisé avec premiers indicateurs de
                        conversion
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Jours 61-90 : Conversion et scaling</h4>
                    <ul className="list-disc list-inside mb-4 ml-2">
                      <li>
                        <strong>Tech</strong> : Implémenter les mécanismes d'upsell basés sur usage (limites atteintes,
                        fonctionnalités premium)
                      </li>
                      <li>
                        <strong>UX</strong> : Développer un dashboard de "success metrics" visible par l'utilisateur
                        pour démontrer la valeur
                      </li>
                      <li>
                        <strong>Marketing</strong> : Lancer une campagne de contenu ciblé (2 articles experts, 1 guide
                        téléchargeable)
                      </li>
                      <li>
                        <strong>CEO</strong> : Analyse des données de conversion et ajustement de la stratégie tarifaire
                        si nécessaire
                      </li>
                      <li>
                        <strong>Livrable</strong> : Premier groupe de clients payants convertis depuis le freemium
                        (objectif: 10-15%)
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Métriques clés à suivre</h4>
                    <ul className="list-disc list-inside mb-4 ml-2">
                      <li>Taux d'activation : % d'utilisateurs complétant le parcours d'onboarding</li>
                      <li>Engagement hebdomadaire : % d'utilisateurs actifs à J+7, J+14, J+30</li>
                      <li>Délai de conversion : durée moyenne entre inscription et upgrade</li>
                      <li>CAC : coût d'acquisition par utilisateur freemium et par client payant</li>
                      <li>
                        Viralité : coefficient K (nombre moyen de nouveaux utilisateurs amenés par utilisateur existant)
                      </li>
                    </ul>

                    <p className="text-gray-700">
                      Ce plan est spécifiquement conçu pour une petite équipe avec budget limité, en mettant l'accent
                      sur l'automatisation, les boucles de feedback rapides et l'optimisation continue. Il privilégie
                      les actions à fort impact plutôt que la dispersion des ressources sur de multiples canaux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Cas d'usage */}
          <TabsContent value="cas-usage" className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Cas d'usage professionnels
            </h2>

            <div className="space-y-6 mb-10">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Repeat className="h-5 w-5 text-blue-600" />
                  </div>
                  Élaboration de stratégie d'entreprise
                </h3>
                <p className="text-gray-700 mb-4">
                  Développement progressif d'une stratégie complète en partant d'une vision générale pour arriver à un
                  plan d'action détaillé.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt initial :</strong> "Quelles sont les stratégies de diversification possibles pour une
                    entreprise de services informatiques traditionnels face à la montée du cloud computing?"
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt de suivi 1 :</strong> "Parmi ces stratégies, laquelle serait la plus pertinente pour
                    une PME de 50 employés spécialisée dans le support IT et l'infogérance pour le secteur de la santé?"
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt de suivi 2 :</strong> "Détaille les 5 premières étapes concrètes pour mettre en œuvre
                    cette transition vers les services cloud hybrides, avec un focus sur la formation des équipes
                    existantes."
                  </p>
                  <p className="text-gray-700">
                    <strong>Prompt de suivi 3 :</strong> "Quels pourraient être les principaux obstacles à cette
                    transformation et comment les anticiper?"
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  Rédaction de contenu marketing
                </h3>
                <p className="text-gray-700 mb-4">
                  Création et perfectionnement progressif de contenus marketing, comme des articles de blog ou des
                  emails, en affinant le ton, le style et le message.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt initial :</strong> "Rédige l'introduction d'un article de blog sur les avantages de
                    l'automatisation des processus RH pour les entreprises de taille moyenne."
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt de suivi 1 :</strong> "Cette introduction est un bon début, mais pourrait-elle être
                    plus percutante avec quelques statistiques clés sur le temps perdu dans les tâches administratives
                    RH?"
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Prompt de suivi 2 :</strong> "Maintenant, continue l'article en développant 3 avantages
                    concrets: gain de temps, réduction des erreurs, et amélioration de l'expérience employé."
                  </p>
                  <p className="text-gray-700">
                    <strong>Prompt de suivi 3 :</strong> "Pour conclure l'article, peux-tu formuler un appel à l'action
                    qui encourage le lecteur à évaluer ses propres processus RH, sans être trop commercial?"
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b border-gray-200">
              Application dans les Ressources Humaines
            </h2>
            <p className="text-gray-700 mb-6">
              L'Iterative Prompting est particulièrement utile dans le domaine RH où les situations sont souvent
              complexes et nécessitent des approches personnalisées :
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 font-medium">Exemple d'application RH</div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt initial</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    Comment concevoir un programme de développement des compétences managériales pour les managers
                    intermédiaires d'une entreprise de retail avec 500 employés répartis sur 20 boutiques ?
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse initiale de l'IA</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="mb-2">
                      Voici les grandes lignes d'un programme de développement des compétences managériales pour les
                      managers intermédiaires dans le secteur du retail :
                    </p>

                    <h4 className="font-bold text-gray-800 mb-2">1. Évaluation des besoins</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Réaliser un audit des compétences existantes</li>
                      <li>Identifier les gaps spécifiques au secteur retail</li>
                      <li>Recueillir les retours des équipes terrain</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">2. Structure du programme</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Formation modulaire sur 6-8 mois</li>
                      <li>Alternance entre théorie et mise en pratique</li>
                      <li>Sessions collectives et coaching individuel</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">3. Thématiques à couvrir</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Management d'équipe en point de vente</li>
                      <li>Gestion de la performance commerciale</li>
                      <li>Expérience client et fidélisation</li>
                      <li>Gestion des conflits et situations difficiles</li>
                      <li>Leadership et motivation d'équipe</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">4. Modalités pratiques</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>Sessions mensuelles d'une journée au siège</li>
                      <li>E-learning pour les concepts théoriques</li>
                      <li>Système de mentorat croisé entre magasins</li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">5. Suivi et évaluation</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>KPIs de performance des équipes</li>
                      <li>Feedback 360° avant/après</li>
                      <li>Projet d'amélioration continue par manager</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt de suivi (Itération 1)</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    Merci pour ces grandes lignes. Pourrais-tu détailler spécifiquement le module sur "Gestion des
                    conflits et situations difficiles" ? Quels seraient les objectifs pédagogiques précis, le contenu et
                    les méthodes d'apprentissage à privilégier pour ce module particulier ?
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse affinée</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Module : Gestion des conflits et situations difficiles en retail
                    </h3>

                    <h4 className="font-bold text-gray-800 mb-2">Objectifs pédagogiques</h4>
                    <ol className="list-decimal list-inside mb-4 ml-2">
                      <li>
                        Identifier les différents types de conflits en environnement retail (clients difficiles,
                        tensions intra-équipe, désaccords avec la hiérarchie)
                      </li>
                      <li>
                        Maîtriser les techniques de désescalade émotionnelle face à un client ou collaborateur en colère
                      </li>
                      <li>Développer une communication assertive adaptée aux situations de tension</li>
                      <li>Élaborer des stratégies de médiation efficaces entre membres de l'équipe</li>
                      <li>
                        Mettre en place des processus préventifs pour réduire l'occurrence des conflits récurrents
                      </li>
                    </ol>

                    <h4 className="font-bold text-gray-800 mb-2">
                      Contenu du module (format journée complète + suivi)
                    </h4>

                    <h5 className="font-semibold text-gray-700 mb-2">Matinée : Fondamentaux et cas clients</h5>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Introduction</strong> (1h) : Typologie des conflits en retail et leur impact sur la
                        performance commerciale et le bien-être des équipes
                      </li>
                      <li>
                        <strong>Psychologie du conflit</strong> (1h) : Comprendre les mécanismes émotionnels et les
                        besoins sous-jacents dans les situations tendues
                      </li>
                      <li>
                        <strong>Atelier pratique</strong> (1h30) : Analyse de cas réels de clients difficiles et jeux de
                        rôle sur les techniques de désescalade
                      </li>
                    </ul>

                    <h5 className="font-semibold text-gray-700 mb-2">Après-midi : Management des conflits internes</h5>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Communication assertive</strong> (1h) : Techniques de formulation non-violente et
                        d'écoute active
                      </li>
                      <li>
                        <strong>Médiation</strong> (1h) : Protocole en 5 étapes pour résoudre un conflit entre
                        collaborateurs
                      </li>
                      <li>
                        <strong>Atelier pratique</strong> (1h30) : Simulation de médiation et feedback personnalisé
                      </li>
                      <li>
                        <strong>Plan d'action</strong> (30min) : Élaboration d'un plan personnel de prévention des
                        conflits dans son magasin
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Méthodes d'apprentissage à privilégier</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Mises en situation filmées</strong> : Jeux de rôle enregistrés puis analysés
                        collectivement avec grille d'observation
                      </li>
                      <li>
                        <strong>Études de cas basées sur des incidents réels</strong> : Utiliser des situations vécues
                        dans les différents magasins (anonymisées)
                      </li>
                      <li>
                        <strong>Immersion virtuelle</strong> : Utilisation de scénarios interactifs via application
                        mobile permettant de s'entraîner entre les sessions
                      </li>
                      <li>
                        <strong>Cartes de réaction rapide</strong> : Outils pratiques à conserver en magasin avec les
                        étapes clés de gestion de crise
                      </li>
                      <li>
                        <strong>Microlearning de suivi</strong> : Courtes vidéos de rappel (3-5min) envoyées
                        hebdomadairement après la formation
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Évaluation spécifique du module</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        Questionnaire avant/après mesurant le niveau de confiance face aux situations conflictuelles
                      </li>
                      <li>Suivi du nombre d'incidents clients escaladés à la direction (indicateur de performance)</li>
                      <li>Feedback des équipes sur la gestion des tensions internes (mini-sondage anonyme)</li>
                      <li>Session de retour d'expérience 6 semaines après la formation</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Prompt de suivi (Itération 2)</h4>
                  <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                    C'est très complet ! Nous avons une contrainte supplémentaire : nos managers sont répartis sur toute
                    la France et nous ne pouvons pas tous les rassembler physiquement pour une journée entière. Comment
                    pourrions-nous adapter ce module de gestion des conflits en format hybride ou distanciel tout en
                    conservant l'aspect pratique et interactif ?
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-2">Réponse finale optimisée</h4>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      Module hybride : Gestion des conflits pour managers retail dispersés géographiquement
                    </h3>

                    <h4 className="font-bold text-gray-800 mb-2">Structure révisée en format hybride sur 3 semaines</h4>

                    <h5 className="font-semibold text-gray-700 mb-2">
                      Semaine 1 : Fondamentaux en distanciel synchrone (demi-journée)
                    </h5>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Webinaire interactif</strong> (2h, vendredi 14h-16h)
                        <ul className="list-circle list-inside ml-4">
                          <li>Introduction aux types de conflits en retail (30min)</li>
                          <li>Psychologie du conflit et besoins sous-jacents (30min)</li>
                          <li>
                            Ateliers en sous-groupes virtuels via breakout rooms (45min) - Analyse de cas clients en
                            petits groupes de 4-5 managers
                          </li>
                          <li>Synthèse collective et Q&A (15min)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Travail asynchrone</strong> (à réaliser dans les 5 jours suivants)
                        <ul className="list-circle list-inside ml-4">
                          <li>Module e-learning sur les techniques de désescalade (45min)</li>
                          <li>Questionnaire d'auto-diagnostic sur son style de gestion de conflit</li>
                          <li>Préparation d'un cas réel vécu dans son magasin (formulaire guidé)</li>
                        </ul>
                      </li>
                    </ul>

                    <h5 className="font-semibold text-gray-700 mb-2">
                      Semaine 2 : Pratique en micro-sessions régionales (demi-journée)
                    </h5>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Sessions présentielles régionales</strong> (3h, organisées dans 5 hubs régionaux au
                        choix)
                        <ul className="list-circle list-inside ml-4">
                          <li>Jeux de rôle filmés par trinômes sur la gestion de clients difficiles (1h30)</li>
                          <li>Techniques de médiation avec simulation pratique (1h30)</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Travail asynchrone</strong> (à réaliser dans les 5 jours suivants)
                        <ul className="list-circle list-inside ml-4">
                          <li>Mise en application d'une technique apprise avec documentation de situation réelle</li>
                          <li>Parcours guidé sur l'application mobile de simulation (3 scénarios à compléter)</li>
                          <li>Forum d'échange entre pairs sur les cas difficiles rencontrés</li>
                        </ul>
                      </li>
                    </ul>

                    <h5 className="font-semibold text-gray-700 mb-2">
                      Semaine 3 : Intégration et plan d'action en distanciel synchrone (2h)
                    </h5>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Webinaire de clôture</strong> (2h, vendredi 14h-16h)
                        <ul className="list-circle list-inside ml-4">
                          <li>Retours d'expérience sur les mises en pratique (45min)</li>
                          <li>Approfondissement sur les points difficiles identifiés (30min)</li>
                          <li>Élaboration guidée d'un plan de prévention des conflits pour chaque magasin (45min)</li>
                        </ul>
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">
                      Outils et technologies facilitant l'interactivité à distance
                    </h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Plateforme collaborative</strong> : Utilisation de Teams ou Zoom avec fonctionnalités
                        avancées (sondages, annotations, breakout rooms)
                      </li>
                      <li>
                        <strong>Application mobile dédiée</strong> : Accessible 24/7 pour les simulations, ressources et
                        microlearning
                      </li>
                      <li>
                        <strong>Plateforme LMS</strong> : Centralisant tous les contenus, exercices et suivis de
                        progression
                      </li>
                      <li>
                        <strong>Communauté de pratique virtuelle</strong> : Groupe privé pour partage continu
                        d'expériences et de solutions
                      </li>
                      <li>
                        <strong>Bibliothèque de vidéos modèles</strong> : Démonstrations des techniques par des experts,
                        accessibles à la demande
                      </li>
                    </ul>

                    <h4 className="font-bold text-gray-800 mb-2">Maintien de l'interactivité en format hybride</h4>
                    <ul className="list-disc list-inside mb-3 ml-2">
                      <li>
                        <strong>Partenariat entre managers</strong> : Binômes de "buddies" à distance pour pratique et
                        feedback entre sessions
                      </li>
                      <li>
                        <strong>Défis hebdomadaires</strong> : Mini-missions à accomplir en magasin avec partage de
                        résultats
                      </li>
                      <li>
                        <strong>Facilitation renforcée</strong> : Animation dynamique des sessions virtuelles avec
                        alternance rapide d'activités (jamais plus de 15min sur un même format)
                      </li>
                      <li>
                        <strong>Micro-engagements</strong> : Technique du "chacun parle" avec tours de table virtuels
                        systématiques
                      </li>
                      <li>
                        <strong>Support multimodal</strong> : Alternance de textes, vidéos, audios et infographies pour
                        maintenir l'attention
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Onglet Conseils pratiques */}
          <TabsContent value="conseils" className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
              <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Conseils pour réussir vos prompts itératifs
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Commencez large puis affinez</strong> : Débutez par une question générale puis précisez
                    progressivement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Analysez attentivement chaque réponse</strong> : Identifiez ce qui manque ou pourrait être
                    approfondi
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Soyez spécifique dans vos questions de suivi</strong> : Ciblez précisément ce que vous
                    souhaitez développer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Utilisez les réponses précédentes comme contexte</strong> : Référencez-vous à ce qui a déjà
                    été dit
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Guidez sans trop contraindre</strong> : Laissez une certaine liberté créative à l'IA
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Explorez différentes perspectives</strong> : Demandez des angles alternatifs sur un même
                    sujet
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>N'hésitez pas à corriger</strong> : Si une information est erronée, rectifiez-la avant de
                    continuer
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    <strong>Résumez périodiquement</strong> : Dans les échanges longs, faites régulièrement le point sur
                    ce qui a été établi
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 my-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Erreurs courantes à éviter</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <div>
                    <strong>Poser des questions trop larges en suivi</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Après une première réponse, évitez de repartir sur un sujet complètement différent ou trop
                      général. Cela annule l'avantage de l'approche itérative.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <div>
                    <strong>Négliger d'analyser la réponse précédente</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Prenez le temps d'identifier les points forts et les lacunes de chaque réponse avant de formuler
                      votre prompt de suivi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <div>
                    <strong>Multiplier les itérations sans objectif clair</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Chaque itération doit avoir un but précis d'amélioration ou d'approfondissement, pas simplement
                      prolonger la conversation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✖</span>
                  <div>
                    <strong>Ignorer les contradictions entre les réponses</strong>
                    <p className="text-gray-600 text-sm mt-1">
                      Si l'IA se contredit entre deux réponses, signalez-le explicitement pour maintenir la cohérence du
                      résultat final.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mb-10">
              <h3 className="flex items-center text-lg font-semibold text-amber-800 mb-4">
                <div className="bg-amber-100 p-1 rounded-full mr-2">
                  <svg className="h-5 w-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Formulations efficaces pour les prompts de suivi
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <p className="font-medium text-amber-800">Pour approfondir un aspect spécifique :</p>
                  <p className="text-gray-700 mt-1">
                    "Pourriez-vous développer davantage le point concernant [sujet précis] que vous avez mentionné
                    précédemment ?"
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <p className="font-medium text-amber-800">Pour réorienter la réponse :</p>
                  <p className="text-gray-700 mt-1">
                    "Merci pour ces informations. J'aimerais maintenant explorer l'angle [nouvel angle] de cette
                    problématique."
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <p className="font-medium text-amber-800">Pour obtenir des exemples concrets :</p>
                  <p className="text-gray-700 mt-1">
                    "Ces principes sont clairs, pourriez-vous illustrer leur application avec 2-3 exemples concrets dans
                    le contexte de [contexte spécifique] ?"
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <p className="font-medium text-amber-800">Pour adapter à un contexte particulier :</p>
                  <p className="text-gray-700 mt-1">
                    "Comment ces recommandations pourraient-elles être adaptées pour [contexte spécifique : petite
                    entreprise, grand groupe, secteur particulier, etc.] ?"
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-100">
                  <p className="font-medium text-amber-800">Pour challenger une réponse :</p>
                  <p className="text-gray-700 mt-1">
                    "Cette approche semble pertinente, mais quelles pourraient être ses limites ou difficultés de mise
                    en œuvre dans un environnement [caractéristique de l'environnement] ?"
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Link href="/methodes/expert-role-playing" className="flex items-center text-gray-500 hover:text-gray-700">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Expert Role Playing
          </Link>

          <Link href="/methodes/chain-of-thought" className="flex items-center text-gray-500 hover:text-gray-700">
            Chain of Thought
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </main>
    </div>
  )
}
