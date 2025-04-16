"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { PDFDownloadButton } from "@/components/pdf-download-button"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function FewShotPage() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/methodes" className="text-primary hover:underline inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-3">Few-Shot Prompting</h1>
            <p className="text-xl text-muted-foreground">Plusieurs exemples pour une précision accrue</p>
            <div className="mt-2 inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
              Niveau : Intermédiaire
            </div>
          </div>
          <PDFDownloadButton pdfUrl="/pdf/guide-prompting.pdf" fileName="guide-prompting.pdf" className="h-10" />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 flex flex-wrap md:flex-nowrap">
          <TabsTrigger value="description" className="flex-1">
            Description
          </TabsTrigger>
          <TabsTrigger value="exemples" className="flex-1">
            Exemples
          </TabsTrigger>
          <TabsTrigger value="cas-usage" className="flex-1">
            Cas d&apos;usage
          </TabsTrigger>
          <TabsTrigger value="conseils" className="flex-1">
            Conseils pratiques
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="border-l-4 border-primary bg-blue-50 p-5 rounded-r-lg">
                <h3 className="text-xl font-semibold text-primary mb-2">En quoi consiste le Few-Shot Prompting ?</h3>
                <p className="text-gray-700">
                  Le Few-Shot Prompting vise à présenter au modèle quelques exemples (généralement 2 à 5) de la tâche à
                  accomplir, afin de lui permettre d&apos;en saisir les patterns et d&apos;améliorer la précision de ses
                  réponses. Contrairement au Zero-Shot qui ne donne aucun exemple, ou au One-Shot qui n&apos;en donne
                  qu&apos;un seul, ici on fournit une petite série d&apos;exemples variés et représentatifs pour que
                  l&apos;IA puisse mieux comprendre ce qui est attendu et généraliser à de nouvelles requêtes.
                </p>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-2xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-700 mb-8">
              L&apos;utilisateur construit un prompt contenant plusieurs paires d&apos;entrée-sortie en lien avec la
              tâche, suivies de la nouvelle entrée à traiter. Le modèle analyse cette suite d&apos;exemples, identifie
              les éléments communs (structure, ton, style, etc.) et applique ces mêmes principes à la nouvelle demande.
              En somme, le Few-Shot fournit juste assez de données pour mettre le modèle sur la bonne voie, sans passer
              par un entraînement lourd.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Fonctionnement du Few-Shot Prompting</h3>

              <div className="flex flex-col space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                >
                  <div className="font-bold text-primary mb-2">Exemple 1 :</div>
                  <div>
                    Question : Quels sont les avantages du télétravail ?<br />
                    Réponse : Le télétravail permet une meilleure flexibilité, réduit le temps de transport, améliore
                    l&apos;équilibre vie professionnelle-vie personnelle...
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                >
                  <div className="font-bold text-primary mb-2">Exemple 2 :</div>
                  <div>
                    Question : Quels sont les avantages de l&apos;automatisation ?<br />
                    Réponse : L&apos;automatisation permet de réduire les tâches répétitives, d&apos;améliorer la
                    productivité, de limiter les erreurs humaines...
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                >
                  <div className="font-bold text-primary mb-2">Exemple 3 :</div>
                  <div>
                    Question : Quels sont les avantages du cloud computing ?<br />
                    Réponse : Le cloud computing offre une grande scalabilité, réduit les coûts d&apos;infrastructure,
                    facilite l&apos;accès aux données à distance...
                  </div>
                </motion.div>

                <div className="flex justify-center my-2">
                  <ArrowRight size={32} className="text-primary" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-blue-100 border border-blue-300 rounded-lg p-4"
                >
                  <div className="font-bold text-primary mb-2">Nouvelle demande :</div>
                  <div>
                    Question : Quels sont les avantages de la semaine de 4 jours ?<br />
                    Réponse : ?
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-primary">One-Shot</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <p>
                    Exemple :<br />
                    Texte : &quot;Le produit a dépassé mes attentes, je suis vraiment satisfait de mon achat !&quot;
                    <br />
                    Sentiment : Positif
                    <br />
                    <br />
                    Texte : &quot;Je viens de recevoir mon colis, l&apos;emballage était soigné et le produit fonctionne
                    parfaitement. Je recommanderai certainement cette marque à mes amis.&quot;
                    <br />
                    Sentiment :
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-center text-primary">Few-Shot</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <p>
                    Exemple 1 :<br />
                    Texte : &quot;Le service client était horrible...&quot;
                    <br />
                    Sentiment : Négatif
                    <br />
                    <br />
                    Exemple 2 :<br />
                    Texte : &quot;Le produit a dépassé mes attentes...&quot;
                    <br />
                    Sentiment : Positif
                    <br />
                    <br />
                    Exemple 3 :<br />
                    Texte : &quot;La livraison est arrivée à l&apos;heure...&quot;
                    <br />
                    Sentiment : Neutre
                    <br />
                    <br />
                    [...autres exemples...]
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              Avec le Few-Shot, l&apos;IA reçoit une variété d&apos;exemples qui lui permettent de mieux comprendre les
              nuances de la tâche et d&apos;offrir des réponses plus précises, surtout pour les cas complexes ou
              ambigus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                Avantages
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Contextualisation riche</strong> de la tâche grâce aux multiples exemples
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Meilleure précision</strong> qu&apos;en Zero-Shot ou One-Shot
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Réponses plus cohérentes</strong>, surtout pour les tâches structurées
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Facilite la compréhension</strong> des nuances et des patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Efficace avec peu d&apos;exemples</strong> (bien moins qu&apos;un fine-tuning)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Adaptabilité</strong> à différents styles et formats
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <XCircle className="mr-2 h-5 w-5 text-red-600" />
                Limites
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Nécessite de trouver/élaborer plusieurs bons exemples</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Risque de saturation du prompt</strong> si trop d&apos;exemples
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Dépendance à la qualité</strong> et représentativité des exemples
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Préparation plus laborieuse</strong> que les méthodes plus simples
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Peut être insuffisant</strong> pour des sujets extrêmement nouveaux
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">•</span>
                  <span>
                    <strong>Compromis entre quantité d&apos;exemples</strong> et longueur du prompt
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="exemples">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Exemple de Few-Shot Prompting</h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                  {`Voici quelques exemples de classifications de sentiments :

Exemple 1 :
Texte : "Le service client était horrible, j'ai attendu 45 minutes et personne n'a répondu à mes questions."
Sentiment : Négatif

Exemple 2 :
Texte : "Le produit a dépassé mes attentes, je suis vraiment satisfait de mon achat !"
Sentiment : Positif

Exemple 3 :
Texte : "La livraison est arrivée à l'heure prévue, le produit correspond à la description."
Sentiment : Neutre

Exemple 4 :
Texte : "Expérience mitigée : belle interface mais trop de bugs et un support technique lent."
Sentiment : Négatif

Texte : "Je viens de recevoir mon colis, l'emballage était soigné et le produit fonctionne parfaitement. Je recommanderai certainement cette marque à mes amis."
Sentiment :`}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Réponse de l&apos;IA</h4>
                <div className="bg-blue-50 p-4 border-l-4 border-primary rounded-r-lg">
                  <p>Sentiment : Positif</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Application en RH: Feedback d&apos;entretien</h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Prompt</h4>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                  {`Voici des exemples de feedbacks constructifs suite à des entretiens d'embauche :

Exemple 1:
Candidat: Développeur senior Java
Décision: Non retenu
Feedback: "Nous vous remercions pour votre candidature au poste de Développeur senior Java. Bien que votre expérience technique soit solide, nous avons privilégié un profil présentant une expertise plus approfondie en microservices et en environnement cloud, éléments essentiels pour nos projets actuels. Nous avons particulièrement apprécié votre connaissance des frameworks Spring et Hibernate, ainsi que votre capacité d'analyse. Pour renforcer votre candidature à l'avenir, nous vous encourageons à développer vos compétences en architecture cloud et en orchestration de conteneurs (Kubernetes/Docker). Nous gardons votre profil dans notre base de données et vous souhaitons pleine réussite dans vos recherches."

Exemple 2:
Candidat: Responsable Marketing Digital
Décision: Non retenu
Feedback: "Nous vous remercions pour votre intérêt pour le poste de Responsable Marketing Digital. Votre parcours est impressionnant, notamment votre expérience en SEO et en gestion de campagnes AdWords. Cependant, nous recherchions un profil avec une expérience plus solide en marketing automation et en analyse de données marketing. Nous avons beaucoup apprécié votre créativité et votre vision stratégique lors de notre échange. Pour renforcer votre candidature à des postes similaires, nous vous suggérons de développer votre expertise en outils de marketing automation (Hubspot, Marketo) et d'approfondir vos compétences en data analytics appliqué au marketing. Nous restons attentifs à votre parcours et vous souhaitons le meilleur pour la suite."

Exemple 3:
Candidat: Chargé de recrutement
Décision: Non retenu
Feedback: "Nous vous remercions pour votre candidature au poste de Chargé de recrutement. Nous avons apprécié votre enthousiasme et votre parcours en ressources humaines. Notre décision s'est finalement portée sur un candidat disposant d'une expérience plus spécifique dans le recrutement de profils techniques et IT, qui constituent notre principal besoin actuel. Nous avons particulièrement valorisé votre approche structurée du processus de recrutement et vos compétences en évaluation de candidats. Pour renforcer votre profil, nous vous encourageons à développer votre connaissance des métiers techniques et à vous familiariser avec les plateformes spécialisées de recrutement IT. Nous conservons votre candidature et vous souhaitons bonne continuation dans vos démarches professionnelles."

Rédigez un feedback constructif pour le candidat suivant en suivant le même format et le même ton :

Candidat: Chef de projet digital
Décision: Non retenu
Feedback:`}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">Réponse de l&apos;IA</h4>
                <div className="bg-blue-50 p-4 border-l-4 border-primary rounded-r-lg">
                  <p>
                    &quot;Nous vous remercions pour votre candidature au poste de Chef de projet digital. Votre
                    expérience en gestion de projets web et votre maîtrise des méthodologies agiles ont retenu notre
                    attention. Néanmoins, nous avons sélectionné un candidat présentant une expertise plus approfondie
                    dans la coordination de projets omnicanaux et une expérience plus étendue avec les outils de product
                    management que nos équipes utilisent quotidiennement. Nous avons particulièrement apprécié votre
                    capacité à gérer les parties prenantes et votre vision stratégique démontrée lors de la présentation
                    de vos précédents projets. Pour renforcer votre candidature à l&apos;avenir, nous vous suggérons de
                    développer votre expérience en gestion de projets impliquant plusieurs canaux digitaux simultanés
                    (web, mobile, réseaux sociaux) et d&apos;approfondir vos connaissances des outils comme Jira, Asana
                    ou Monday.com. Nous conservons votre profil dans notre base de données et vous souhaitons plein
                    succès dans votre recherche d&apos;emploi.&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cas-usage">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <div className="w-6 h-6 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 5h-9.586L8.707 3.293A.997.997 0 0 0 8 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
                  </svg>
                </div>
                Classification automatique de documents
              </h3>
              <p className="mb-4">
                Particulièrement efficace pour entraîner l&apos;IA à catégoriser des documents selon leur nature, leur
                priorité ou leur département concerné.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {`Voici des exemples de classification de documents :

Exemple 1:
Document: "Demande de remboursement suite à l'annulation du séminaire du 12/05/2024"
Catégorie: Finance
Priorité: Normale

Exemple 2:
Document: "Alerte critique : panne du serveur principal affectant les opérations client"
Catégorie: IT
Priorité: Urgente

Exemple 3:
Document: "Candidature spontanée pour le poste de développeur front-end"
Catégorie: Ressources Humaines
Priorité: Basse

Classifie maintenant ce document :
Document: "Rapport d'incident de sécurité : tentative d'accès non autorisé détectée le 10/04/2024"
Catégorie:
Priorité:`}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <div className="w-6 h-6 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                Génération de communications standardisées
              </h3>
              <p className="mb-4">
                Permet de maintenir une cohérence de ton et de structure dans les communications d&apos;entreprise.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {`Exemples de réponses aux réclamations clients :

Exemple 1:
Réclamation : "Mon colis est arrivé avec 3 jours de retard alors que j'avais payé la livraison express."
Réponse : "Cher client, Nous vous présentons nos sincères excuses pour le retard de livraison que vous avez constaté. Nous comprenons votre frustration, d'autant plus que vous aviez opté pour la livraison express. À titre de compensation, nous vous remboursons intégralement les frais de livraison et vous offrons un code promo de 10% sur votre prochaine commande : FIDELITE10. Nous mettons tout en œuvre pour éviter que cette situation ne se reproduise. Cordialement, L'équipe Service Client"

Exemple 2:
Réclamation : "J'ai reçu le mauvais article, ce n'est pas du tout ce que j'avais commandé."
Réponse : "Cher client, Nous sommes navrés d'apprendre que vous avez reçu un article ne correspondant pas à votre commande. Nous vous invitons à nous retourner le produit avec l'étiquette prépayée ci-jointe. Dès réception, nous vous enverrons immédiatement l'article correct. Pour vous remercier de votre compréhension, un code promo de 15% (EXCUSE15) a été ajouté à votre compte. Cordialement, L'équipe Service Client"

Pour la réclamation suivante, rédigez une réponse dans le même style :
Réclamation : "Le produit que j'ai reçu présente un défaut de fabrication. Le bouton d'alimentation ne fonctionne pas correctement."
Réponse :`}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <div className="w-6 h-6 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                Extraction d&apos;informations structurées
              </h3>
              <p className="mb-4">
                Idéal pour entraîner l&apos;IA à extraire des données précises à partir de textes non structurés.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {`Exemples d'extraction d'information :

Exemple 1:
Texte: "Notre réunion avec Maria Lopez de la société TechSolutions est confirmée pour le 15 juin 2024 à 14h30 dans nos locaux de Paris."
Extraction:
Contact: Maria Lopez
Société: TechSolutions
Date: 15 juin 2024
Heure: 14h30
Lieu: Paris

Exemple 2:
Texte: "Suite à notre appel avec Jean Dupont (Directeur Marketing, InnovaCorp), nous avons planifié une démo de notre solution le mercredi 20 mai à 10h en visioconférence."
Extraction:
Contact: Jean Dupont
Fonction: Directeur Marketing
Société: InnovaCorp
Date: 20 mai
Heure: 10h
Lieu: visioconférence

Texte: "Demain (12/04), nous accueillerons Alexandre Martin, CEO de DataViz Inc, pour discuter du partenariat potentiel. RDV à notre siège de Lyon à 9h précises."
Extraction:`}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                <div className="w-6 h-6 mr-2 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                  </svg>
                </div>
                Réécriture de contenu selon un style spécifique
              </h3>
              <p className="mb-4">
                Permet de recalibrer du contenu selon un ton, une longueur ou un format précis en fournissant plusieurs
                exemples.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                {`Exemples de réécriture de descriptions produit en style minimaliste et impactant :

Exemple 1:
Original: "Notre lampe de bureau ajustable offre plusieurs niveaux de luminosité et une surface tactile pour un contrôle facile. Son design élégant en aluminium brossé s'intègre parfaitement dans tout environnement de travail moderne. Elle est livrée avec une ampoule LED économique et durable."
Style minimaliste: "Lampe tactile. Luminosité ajustable. Aluminium brossé. Design épuré. LED intégrée."

Exemple 2:
Original: "Ce smartphone de dernière génération dispose d'un écran AMOLED 6,5 pouces, d'un processeur octa-core ultrarapide, d'une batterie longue durée de 4500 mAh et d'un appareil photo triple capteur avec intelligence artificielle pour des clichés professionnels."
Style minimaliste: "Écran AMOLED 6,5". Processeur octa-core. Batterie 4500 mAh. Triple capteur photo IA. Performance maximale."

Réécris cette description en style minimaliste :
Original: "Notre logiciel de gestion de projet tout-en-un permet de suivre l'avancement des tâches, de gérer les ressources, de communiquer avec l'équipe et de générer des rapports détaillés. Son interface intuitive et sa grande flexibilité en font l'outil idéal pour les équipes de toutes tailles."
Style minimaliste:`}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="conseils">
          <Card>
            <CardContent className="pt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                    />
                  </svg>
                  Conseils pour réussir vos prompts Few-Shot
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Choisissez des exemples variés et représentatifs</strong> qui couvrent bien
                      l&apos;éventail des cas possibles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Limitez-vous à 3-5 exemples</strong> pour éviter de saturer le prompt tout en fournissant
                      suffisamment de contexte
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Ordonnez les exemples</strong> du plus simple au plus complexe pour favoriser une
                      progression logique
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Assurez-vous que le format est cohérent</strong> entre tous les exemples pour faciliter la
                      compréhension du pattern
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Incluez des cas &quot;limites&quot; ou particuliers</strong> si vous vous attendez à en
                      rencontrer dans les requêtes réelles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Séparez clairement les exemples</strong> avec des marqueurs visuels (numérotation, sauts
                      de ligne) pour une meilleure lisibilité
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    <span>
                      <strong>Testez différentes combinaisons d&apos;exemples</strong> si les résultats ne correspondent
                      pas à vos attentes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Applications pratiques en RH</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Standardisation des communications</h4>
                    <p>
                      Utilisez le Few-Shot pour maintenir un ton et un format cohérents dans les communications RH
                      (offres d&apos;emploi, feedbacks, évaluations, etc.)
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Catégorisation des candidatures</h4>
                    <p>
                      Apprenez à l&apos;IA à classer les CV et lettres de motivation par département, niveau
                      d&apos;expérience ou adéquation avec les offres
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Analyse des entretiens</h4>
                    <p>
                      Structurez les notes d&apos;entretien en catégories cohérentes (soft skills, expérience technique,
                      culture fit...)
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium mb-2">Création d&apos;indicateurs RH</h4>
                    <p>
                      Extrayez des métriques standardisées à partir de documents RH variés pour alimenter vos tableaux
                      de bord
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 pt-6 border-t flex justify-between">
        <Link href="/methodes/one-shot" className="text-primary hover:underline flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          One-Shot Prompting
        </Link>
        <Link href="/methodes/chain-of-thought" className="text-primary hover:underline flex items-center">
          Chain-of-Thought Prompting
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
