"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Lightbulb, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MultiPromptingClientPage() {
  const [activeTab, setActiveTab] = useState("definition")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 mb-8">
        <div className="flex justify-center mb-4">
          <span className="bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">Niveau : Avancé</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Multi-Prompting</h1>
        <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto">Plusieurs angles pour un même problème</p>
      </div>

      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Accueil
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/methodes" className="hover:text-blue-600 transition-colors">
          Techniques
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-blue-600 font-medium">Multi-Prompting</span>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="definition" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="definition">Définition</TabsTrigger>
          <TabsTrigger value="example">Exemple</TabsTrigger>
          <TabsTrigger value="pros-cons">Avantages/Limites</TabsTrigger>
          <TabsTrigger value="use-cases">Cas d'usage</TabsTrigger>
          <TabsTrigger value="tips">Conseils</TabsTrigger>
        </TabsList>

        {/* Definition Tab */}
        <TabsContent value="definition">
          {/* Definition Box */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-10">
            <h2 className="text-xl font-bold text-blue-800 mb-3">En quoi consiste le Multi-Prompting ?</h2>
            <p className="text-gray-700">
              Le Multi-Prompting est une technique émergente qui consiste à utiliser plusieurs prompts distincts pour
              aborder une même question ou problématique. Plutôt que de s'en remettre à une seule réponse de l'IA, on la
              sollicite de diverses manières et on compare les différentes réponses générées. L'idée est d'explorer
              plusieurs angles d'attaque d'un problème en parallèle, puis de combiner les meilleures idées issues de
              chaque réponse pour construire une solution plus complète.
            </p>
          </div>

          {/* How it Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Comment ça fonctionne</h2>
            <p className="text-gray-700 mb-6">
              Le consultant prépare plusieurs prompts liés au même sujet, chacun ciblant un angle ou un aspect différent
              de la problématique. Par exemple, face à un défi d'entreprise, il pourrait créer trois prompts distincts :
              l'un orienté sur les opportunités, un autre sur les risques, et un troisième sur les solutions innovantes.
              Chaque prompt est envoyé séparément à l'IA, générant ainsi des réponses avec des perspectives différentes.
              Ensuite, l'utilisateur analyse ces retours : il peut soit les comparer pour choisir la meilleure solution,
              soit en extraire les éléments les plus pertinents et les fusionner dans une synthèse finale.
            </p>

            {/* Flow Diagram */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <svg width="100%" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
                {/* Problématique initiale */}
                <rect x="300" y="20" width="200" height="60" rx="8" fill="#f1f8ff" stroke="#4a6fa5" strokeWidth="2" />
                <text x="400" y="55" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Problématique
                </text>

                {/* Flèches vers les différents prompts */}
                <line x1="350" y1="80" x2="150" y2="130" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="400" y1="80" x2="400" y2="130" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="450" y1="80" x2="650" y2="130" stroke="#4a6fa5" strokeWidth="2" />

                {/* Prompt 1 */}
                <rect x="50" y="130" width="200" height="60" rx="8" fill="#e8f4fc" stroke="#4a6fa5" strokeWidth="2" />
                <text x="150" y="165" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Prompt 1: Opportunités
                </text>

                {/* Prompt 2 */}
                <rect x="300" y="130" width="200" height="60" rx="8" fill="#e8f4fc" stroke="#4a6fa5" strokeWidth="2" />
                <text x="400" y="165" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Prompt 2: Risques
                </text>

                {/* Prompt 3 */}
                <rect x="550" y="130" width="200" height="60" rx="8" fill="#e8f4fc" stroke="#4a6fa5" strokeWidth="2" />
                <text x="650" y="165" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Prompt 3: Solutions
                </text>

                {/* Flèches vers les réponses */}
                <line x1="150" y1="190" x2="150" y2="220" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="400" y1="190" x2="400" y2="220" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="650" y1="190" x2="650" y2="220" stroke="#4a6fa5" strokeWidth="2" />

                {/* Réponse 1 */}
                <rect x="50" y="220" width="200" height="60" rx="8" fill="#f0f9ff" stroke="#4a6fa5" strokeWidth="2" />
                <text x="150" y="255" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Réponse 1
                </text>

                {/* Réponse 2 */}
                <rect x="300" y="220" width="200" height="60" rx="8" fill="#f0f9ff" stroke="#4a6fa5" strokeWidth="2" />
                <text x="400" y="255" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Réponse 2
                </text>

                {/* Réponse 3 */}
                <rect x="550" y="220" width="200" height="60" rx="8" fill="#f0f9ff" stroke="#4a6fa5" strokeWidth="2" />
                <text x="650" y="255" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Réponse 3
                </text>

                {/* Flèches vers l'analyse/synthèse */}
                <line x1="150" y1="280" x2="400" y2="310" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="400" y1="280" x2="400" y2="310" stroke="#4a6fa5" strokeWidth="2" />
                <line x1="650" y1="280" x2="400" y2="310" stroke="#4a6fa5" strokeWidth="2" />

                {/* Analyse et synthèse */}
                <rect x="300" y="310" width="200" height="60" rx="8" fill="#e6f7ff" stroke="#4a6fa5" strokeWidth="2" />
                <text x="400" y="345" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#4a6fa5">
                  Analyse et synthèse
                </text>
              </svg>
            </div>
          </section>
        </TabsContent>

        {/* Example Tab */}
        <TabsContent value="example">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Exemple concret</h2>

            <Card className="mb-6">
              <CardHeader className="bg-blue-600 text-white font-medium">Exemple de Multi-Prompting</CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Problématique</h4>
                  <p className="text-gray-700">
                    Comment lancer une nouvelle initiative de bien-être au travail dans notre entreprise ?
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Prompt 1 : Opportunités</h4>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-3">
                    En tant que spécialiste du bien-être au travail, quelles sont les principales opportunités et
                    bénéfices associés au lancement d'une initiative de bien-être dans une entreprise de taille moyenne
                    ?
                  </div>
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Réponse 1</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <p className="mb-2">
                      Voici les principales opportunités et bénéfices associés au lancement d'une initiative de
                      bien-être :
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-semibold">Réduction de l'absentéisme</span> : Les programmes de bien-être
                        peuvent réduire l'absentéisme de 25-30% selon plusieurs études
                      </li>
                      <li>
                        <span className="font-semibold">Amélioration de la productivité</span> : Les employés en bonne
                        santé physique et mentale sont jusqu'à 20% plus productifs
                      </li>
                      <li>
                        <span className="font-semibold">Attraction et rétention des talents</span> : 87% des candidats
                        considèrent les programmes de bien-être comme un facteur important dans le choix d'un emploi
                      </li>
                      <li>
                        <span className="font-semibold">Renforcement de la culture d'entreprise</span> : Les initiatives
                        collectives créent un sentiment d'appartenance
                      </li>
                      <li>
                        <span className="font-semibold">Réduction des coûts de santé</span> : Pour chaque euro investi
                        dans le bien-être, le retour est estimé entre 2,5 et 4,8 euros
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">
                    Prompt 2 : Risques et obstacles
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-3">
                    Quels sont les principaux risques, obstacles et points de vigilance à considérer lors du lancement
                    d'une initiative de bien-être au travail ? Comment les anticiper et les gérer efficacement ?
                  </div>
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Réponse 2</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <p className="mb-2">Voici les principaux risques et obstacles à considérer :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <span className="font-semibold">Manque d'engagement</span> : Le taux de participation moyen aux
                        programmes de bien-être est souvent inférieur à 40%
                      </li>
                      <li>
                        <span className="font-semibold">Perception d'intrusion</span> : Certains collaborateurs peuvent
                        percevoir ces initiatives comme une intrusion dans leur vie privée
                      </li>
                      <li>
                        <span className="font-semibold">Inadéquation aux besoins réels</span> : Les programmes
                        standardisés peuvent ne pas répondre aux besoins spécifiques de vos équipes
                      </li>
                      <li>
                        <span className="font-semibold">Iniquité d'accès</span> : Risque de favoriser certains profils
                        (jeunes, sportifs) au détriment d'autres
                      </li>
                      <li>
                        <span className="font-semibold">Difficultés de mesure</span> : Le ROI des initiatives de
                        bien-être reste souvent difficile à quantifier précisément
                      </li>
                      <li>
                        <span className="font-semibold">Effet d'essoufflement</span> : Enthousiasme initial fort qui
                        s'érode avec le temps sans animation continue
                      </li>
                    </ul>
                    <p className="mt-3">Pour anticiper ces obstacles :</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Réaliser une enquête préalable pour identifier les attentes réelles</li>
                      <li>Communiquer clairement sur le caractère volontaire des initiatives</li>
                      <li>Prévoir un système de mesure d'impact dès la conception</li>
                      <li>Planifier des événements réguliers pour maintenir l'intérêt</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">
                    Prompt 3 : Solutions innovantes
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-3">
                    Quelles sont les solutions les plus innovantes et efficaces en matière de bien-être au travail qui
                    ont émergé ces dernières années ? Propose 5 idées concrètes qui sortent des sentiers battus et qui
                    ont démontré un réel impact.
                  </div>
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Réponse 3</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <p className="mb-2">Voici 5 solutions innovantes en matière de bien-être au travail :</p>
                    <ol className="list-decimal pl-5 space-y-1">
                      <li>
                        <span className="font-semibold">Micro-pauses immersives</span> : Espaces de déconnexion avec
                        casques VR proposant des séances guidées de 5-10 minutes (méditation, voyage virtuel, nature)
                        accessibles à tous les profils
                      </li>
                      <li>
                        <span className="font-semibold">Rotation des modalités de travail</span> : Système permettant à
                        chaque employé de choisir chaque mois entre différentes configurations (full remote, hybride,
                        bureau) selon leurs besoins du moment
                      </li>
                      <li>
                        <span className="font-semibold">Labs d'expérimentation bien-être</span> : Budget alloué à des
                        équipes volontaires pour tester et documenter des pratiques innovantes, puis les partager
                      </li>
                      <li>
                        <span className="font-semibold">Coaching par IA personnalisé</span> : Applications adaptatives
                        qui proposent des micro-objectifs quotidiens personnalisés en fonction du profil et des données
                        de bien-être
                      </li>
                      <li>
                        <span className="font-semibold">Mécénat de compétences 5%</span> : Attribution de 5% du temps de
                        travail (2h/semaine) à des projets solidaires choisis par les employés, boosting significatif du
                        sens au travail
                      </li>
                    </ol>
                    <p className="mt-3">
                      Ces approches ont toutes montré des résultats mesurables : amélioration des scores d'engagement
                      (+18% en moyenne), réduction du stress (-23%) et diminution du turnover (-27%) dans les
                      organisations les ayant implémentées.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">
                    Synthèse finale (réalisée par l'utilisateur ou demandée à l'IA)
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mb-3">
                    Synthétise les éléments clés des trois analyses précédentes pour créer un plan d'action complet pour
                    le lancement d'une initiative de bien-être au travail innovante, en tenant compte des opportunités,
                    des risques et des solutions innovantes.
                  </div>
                  <h4 className="uppercase text-xs font-semibold text-gray-500 mb-2">Synthèse finale</h4>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <h3 className="font-bold text-lg mb-3">Plan d'action pour l'initiative bien-être</h3>

                    <p className="font-semibold mt-4 mb-2">Phase 1 : Préparation et cadrage</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Réaliser une enquête des besoins réels pour éviter l'inadéquation (point de vigilance identifié)
                      </li>
                      <li>
                        Définir les objectifs mesurables en lien avec les bénéfices attendus (réduction absentéisme,
                        productivité, rétention)
                      </li>
                      <li>
                        Établir un système de mesure d'impact pour adresser la difficulté de quantification du ROI
                      </li>
                    </ul>

                    <p className="font-semibold mt-4 mb-2">Phase 2 : Conception du programme</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Intégrer les solutions innovantes adaptées au contexte :
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                          <li>Installation d'un espace micro-pauses immersives accessible à tous les profils</li>
                          <li>Expérimentation des rotations de modalités de travail sur base volontaire</li>
                          <li>Lancement d'un programme pilote de mécénat de compétences 5%</li>
                        </ul>
                      </li>
                      <li>Prévoir des alternatives pour garantir l'équité d'accès (point de vigilance)</li>
                      <li>Insister sur le caractère volontaire pour éviter la perception d'intrusion</li>
                    </ul>

                    <p className="font-semibold mt-4 mb-2">Phase 3 : Lancement et animation</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Planifier un événement de lancement fort pour maximiser l'engagement initial</li>
                      <li>Mettre en place des "labs d'expérimentation bien-être" avec des équipes volontaires</li>
                      <li>Établir un calendrier d'animations régulières pour contrer l'effet d'essoufflement</li>
                    </ul>

                    <p className="font-semibold mt-4 mb-2">Phase 4 : Suivi et optimisation</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Mettre en place un tableau de bord mensuel des indicateurs clés</li>
                      <li>Organiser des retours d'expérience trimestriels pour ajuster le programme</li>
                      <li>Communiquer régulièrement sur les impacts positifs pour renforcer l'adhésion</li>
                    </ul>

                    <p className="mt-4">
                      Ce plan combine stratégiquement les opportunités identifiées (amélioration de la productivité,
                      renforcement de la culture) tout en anticipant les risques majeurs (manque d'engagement, iniquité)
                      et en intégrant les approches innovantes les plus prometteuses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* Pros and Cons Tab */}
        <TabsContent value="pros-cons">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Avantages et limites</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="flex items-center text-lg font-bold text-green-800 mb-4">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                  Avantages
                </h3>
                <ul className="space-y-3 pl-5 list-disc">
                  <li>
                    <span className="font-semibold">Richesse des perspectives</span> : Obtention de réponses
                    complémentaires que n'aurait pas un seul prompt
                  </li>
                  <li>
                    <span className="font-semibold">Découverte d'angles morts</span> : Révélation d'idées inédites ou
                    d'aspects non envisagés initialement
                  </li>
                  <li>
                    <span className="font-semibold">Créativité accrue</span> : Stimulation de la pensée divergente puis
                    convergente
                  </li>
                  <li>
                    <span className="font-semibold">Qualité renforcée</span> : Si plusieurs formulations donnent des
                    réponses convergentes, la confiance dans cette conclusion est plus élevée
                  </li>
                  <li>
                    <span className="font-semibold">Adaptabilité</span> : Particulièrement efficace pour le
                    brainstorming, l'exploration d'idées ou les sujets complexes sans réponse unique
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="flex items-center text-lg font-bold text-red-800 mb-4">
                  <XCircle className="h-5 w-5 mr-2 text-red-600" />
                  Limites
                </h3>
                <ul className="space-y-3 pl-5 list-disc">
                  <li>
                    <span className="font-semibold">Processus plus long</span> : Préparation et envoi de plusieurs
                    prompts, puis analyse et combinaison des réponses
                  </li>
                  <li>
                    <span className="font-semibold">Expertise requise</span> : Nécessite du discernement pour
                    synthétiser correctement les différentes informations
                  </li>
                  <li>
                    <span className="font-semibold">Pas adapté à toutes les questions</span> : Pour une demande très
                    ciblée, risque de produire des redondances
                  </li>
                  <li>
                    <span className="font-semibold">Surcharge cognitive</span> : Recevoir trop d'informations peut
                    compliquer la prise de décision
                  </li>
                  <li>
                    <span className="font-semibold">Coût supérieur</span> : Utilisation de plus de tokens pour des
                    modèles payants
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Use Cases Tab */}
        <TabsContent value="use-cases">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Cas d'usage professionnels</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">Prise de décision stratégique</h3>
                  </div>
                  <p className="mb-4">
                    Explorez différentes facettes d'une décision stratégique pour obtenir une vision plus complète et
                    nuancée.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md text-sm">
                    <p className="font-semibold mb-2">Problématique :</p>
                    <p className="mb-3">Expansion de notre entreprise vers un nouveau marché international</p>
                    <p className="font-semibold mb-1">Prompt 1 :</p>
                    <p className="mb-3">
                      "Analyse les opportunités et avantages concurrentiels de notre expansion sur le marché asiatique."
                    </p>
                    <p className="font-semibold mb-1">Prompt 2 :</p>
                    <p className="mb-3">
                      "Quels sont les risques réglementaires, culturels et financiers majeurs à considérer pour une
                      expansion en Asie ?"
                    </p>
                    <p className="font-semibold mb-1">Prompt 3 :</p>
                    <p className="mb-3">
                      "Propose une stratégie d'entrée progressive sur le marché asiatique, avec les étapes clés et les
                      indicateurs de succès."
                    </p>
                    <p className="font-semibold mb-1">Prompt de synthèse :</p>
                    <p>
                      "En tenant compte des opportunités, risques et stratégies d'entrée analysés précédemment,
                      développe un plan d'action recommandé pour notre expansion en Asie." développe un plan d'action
                      recommandé pour notre expansion en Asie."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">Analyse SWOT approfondie</h3>
                  </div>
                  <p className="mb-4">
                    Réalisez une analyse SWOT (Forces, Faiblesses, Opportunités, Menaces) complète en dédiant un prompt
                    à chaque dimension.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md text-sm">
                    <p className="font-semibold mb-2">Problématique :</p>
                    <p className="mb-3">Analyse SWOT de notre nouvelle solution logicielle avant lancement</p>
                    <p className="font-semibold mb-1">Prompt 1 :</p>
                    <p className="mb-3">
                      "Analysez en profondeur les forces internes de notre solution logicielle de gestion de projet
                      basée sur l'IA."
                    </p>
                    <p className="font-semibold mb-1">Prompt 2 :</p>
                    <p className="mb-3">
                      "Identifiez les faiblesses potentielles et vulnérabilités de notre solution."
                    </p>
                    <p className="font-semibold mb-1">Prompt 3 :</p>
                    <p className="mb-3">
                      "Quelles sont les opportunités de marché et les tendances favorables pour notre solution ?"
                    </p>
                    <p className="font-semibold mb-1">Prompt 4 :</p>
                    <p className="mb-3">
                      "Analysez les menaces externes, concurrentielles et technologiques pour notre solution."
                    </p>
                    <p className="font-semibold mb-1">Prompt de synthèse :</p>
                    <p>
                      "Intègre les analyses SWOT précédentes dans une matrice stratégique et propose les 3 axes
                      prioritaires pour notre lancement."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-blue-800">Gestion de communication de crise</h3>
                  </div>
                  <p className="mb-4">
                    Développez différentes approches de communication et anticipez les réactions des parties prenantes.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md text-sm">
                    <p className="font-semibold mb-2">Problématique :</p>
                    <p className="mb-3">Gestion d'une crise suite à une fuite de données clients</p>
                    <p className="font-semibold mb-1">Prompt 1 :</p>
                    <p className="mb-3">
                      "Rédige un communiqué de presse transparent expliquant la situation de fuite de données, les
                      mesures immédiates prises et l'engagement de l'entreprise."
                    </p>
                    <p className="font-semibold mb-1">Prompt 2 :</p>
                    <p className="mb-3">
                      "Anticipe les questions difficiles que pourraient poser les journalistes et prépare des réponses
                      appropriées."
                    </p>
                    <p className="font-semibold mb-1">Prompt 3 :</p>
                    <p className="mb-3">
                      "Développe un plan de communication interne pour rassurer les employés et expliquer les prochaines
                      étapes."
                    </p>
                    <p className="font-semibold mb-1">Prompt 4 :</p>
                    <p className="mb-3">
                      "Propose une stratégie de communication personnalisée pour les clients affectés, incluant des
                      mesures de compensation."
                    </p>
                    <p className="font-semibold mb-1">Prompt de synthèse :</p>
                    <p>
                      "Élabore un calendrier de communication pour les 15 prochains jours, intégrant tous les éléments
                      précédents et séquençant les actions de manière optimale."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Tips Tab */}
        <TabsContent value="tips">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Conseils d'utilisation</h2>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-blue-800">Conseils pour réussir vos Multi-Prompts</h3>
              </div>
              <ul className="space-y-2 pl-5 list-disc">
                <li>
                  <span className="font-semibold">Définissez clairement la problématique centrale</span> avant de la
                  décomposer en sous-questions
                </li>
                <li>
                  <span className="font-semibold">Variez les angles d'approche</span> (positif/négatif,
                  stratégique/opérationnel, court terme/long terme)
                </li>
                <li>
                  <span className="font-semibold">Évitez les redondances</span> entre vos prompts pour maximiser la
                  complémentarité des réponses
                </li>
                <li>
                  <span className="font-semibold">Numérotez et nommez vos prompts</span> pour faciliter l'organisation
                  et la synthèse ultérieure
                </li>
                <li>
                  <span className="font-semibold">Limitez-vous à 3-5 prompts</span> pour éviter la surcharge
                  d'information
                </li>
                <li>
                  <span className="font-semibold">Préparez un prompt de synthèse</span> qui demande explicitement à l'IA
                  d'intégrer les analyses précédentes
                </li>
                <li>
                  <span className="font-semibold">Soyez critique</span> dans votre analyse des différentes réponses et
                  n'hésitez pas à approfondir certains points
                </li>
                <li>
                  <span className="font-semibold">Documentez votre processus</span> pour capitaliser sur les approches
                  les plus efficaces
                </li>
              </ul>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="flex justify-between items-center py-6 border-t border-gray-200 mt-8">
        <Link
          href="/methodes/least-to-most"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Least-to-Most
        </Link>
        <Link
          href="/methodes/expert-role-playing"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          Expert Role-Playing
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Prêt à explorer plusieurs angles d'une même problématique ?</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
          Utilisez notre canevas de création de prompts pour générer des Multi-Prompts adaptés à vos besoins
          professionnels.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/canevas">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Créer un prompt</Button>
          </Link>
          <Link href="/methodes">
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Explorer d'autres techniques
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
