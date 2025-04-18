import Link from "next/link"
import { ArrowLeft, Copy, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ContextualAugmentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6">
        <Link href="/methodes" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux méthodes
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Contextual Augmentation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Enrichissez vos prompts avec des informations externes
        </p>
        <Badge variant="outline" className="mt-4 bg-red-50 text-red-800 hover:bg-red-50">
          Niveau : Avancé
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
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">En quoi consiste la Contextual Augmentation ?</h3>
            <p className="text-gray-700">
              La Contextual Augmentation consiste à fournir à l'IA des informations ou documents supplémentaires en
              contexte, pour qu'elle s'en serve dans sa réponse. Plutôt que de s'appuyer uniquement sur ses
              connaissances pré-entraînées, le modèle reçoit du contenu additionnel pertinent (données d'entreprise,
              extraits d'un document, etc.) qu'il intègre à son traitement. Cette technique permet d'améliorer la
              précision et la cohérence des réponses, particulièrement pour des informations spécifiques que le modèle
              ne pourrait pas connaître autrement.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4">Comment ça fonctionne</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Le principe est simple mais puissant : vous insérez dans votre prompt des informations additionnelles,
              généralement sous forme d'un encart ou d'une mention explicite. Le modèle lira ce contenu fourni et
              l'intègrera dans son raisonnement pour formuler une réponse précise et contextualisée. C'est une forme
              manuelle de Retrieval-Augmented Generation (RAG) où vous extrayez et fournissez vous-même les documents ou
              données nécessaires au modèle.
            </p>

            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="font-bold mb-2 text-gray-800">Question ou requête standard</div>
                <div className="text-gray-700">
                  Quelle est notre politique de remboursement pour les clients professionnels ?
                </div>
              </div>

              <div className="flex justify-center text-blue-600 text-2xl">+</div>

              <div className="bg-blue-50 p-4 rounded-lg border border-dashed border-blue-300">
                <div className="font-bold mb-2 text-blue-700">Contexte ajouté</div>
                <div className="bg-blue-100 p-3 rounded-lg text-gray-700 italic">
                  Extrait du manuel interne (Section 3.2) : "Les clients professionnels bénéficient d'un délai de
                  rétractation de 14 jours pour un produit non utilisé. Au-delà, une franchise de 15% est appliquée
                  jusqu'à 30 jours. Les cas exceptionnels sont soumis à validation par le service client avec
                  justificatif..."
                </div>
              </div>

              <div className="flex justify-center text-blue-600 text-2xl">↓</div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                <div className="font-bold mb-2 text-blue-700">Réponse contextuelle</div>
                <div className="text-gray-700">
                  Notre politique de remboursement pour les clients professionnels prévoit un délai de rétractation de
                  14 jours pour tout produit non utilisé, sans frais. Entre 15 et 30 jours, une franchise de 15% est
                  appliquée. Les demandes exceptionnelles nécessitent une validation par notre service client et doivent
                  être accompagnées d'un justificatif.
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
                  <span className="text-gray-700 dark:text-gray-300">
                    <strong>Haute spécificité des réponses</strong> grâce à l'utilisation d'informations propres à votre
                    contexte
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
                    <strong>Réduction des "hallucinations"</strong> de l'IA qui s'appuie sur des faits concrets fournis
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
                    <strong>Utilisation de données récentes ou privées</strong> absentes de l'entraînement du modèle
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
                    <strong>Contrôle accru sur la réponse</strong> en choisissant précisément les informations fournies
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
                    <strong>Adaptabilité à des usages spécifiques</strong> comme l'analyse de documents internes
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
                    <strong>Préparation manuelle nécessaire</strong> pour sélectionner et formater les informations
                    pertinentes
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
                    <strong>Risque de surcharge</strong> si le contexte fourni est trop volumineux
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
                    <strong>Questions de confidentialité</strong> lorsque des données sensibles sont intégrées au prompt
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
                    <strong>Possible confusion de l'IA</strong> si le contexte contredit ses connaissances générales
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
                    <strong>Limites de taille du prompt</strong> restreignant la quantité d'informations pouvant être
                    ajoutées
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Onglet Exemples */}
        <TabsContent value="exemples">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple de Contextual Augmentation</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt initial (sans contextualisation)</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  Génère une FAQ pour notre site e-commerce qui répond aux questions les plus fréquentes des clients sur
                  le processus d'achat.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Réponse initiale (générique)</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border-l-4 border-gray-300">
                <p className="font-bold">FAQ - Processus d'achat</p>
                <p className="mt-2">
                  <strong>Q : Comment créer un compte sur votre site ?</strong>
                  <br />R : Pour créer un compte, cliquez sur "Mon compte" en haut à droite de notre site, puis
                  sélectionnez "Créer un compte". Remplissez le formulaire avec vos informations personnelles et
                  validez.
                </p>

                <p className="mt-2">
                  <strong>Q : Quels moyens de paiement acceptez-vous ?</strong>
                  <br />R : Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et les
                  virements bancaires pour les commandes importantes.
                </p>

                <p className="mt-2">
                  <strong>Q : Quels sont les délais de livraison ?</strong>
                  <br />R : Les délais de livraison standards sont de 3 à 5 jours ouvrés. Pour la livraison express
                  (24-48h), des frais supplémentaires s'appliquent.
                </p>

                <p className="mt-2">
                  <strong>Q : Comment suivre ma commande ?</strong>
                  <br />R : Vous recevrez un email de confirmation avec un numéro de suivi. Vous pouvez également suivre
                  votre commande dans la section "Mes commandes" de votre compte client.
                </p>

                <p className="mt-2">
                  <strong>Q : Quelle est votre politique de retour ?</strong>
                  <br />R : Vous disposez de 14 jours pour retourner un article. Celui-ci doit être dans son état
                  d'origine, non utilisé et dans son emballage d'origine.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt avec contextualisation</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  En te basant sur notre documentation interne ci-dessous, génère une FAQ pour notre site e-commerce qui
                  répond aux questions les plus fréquentes des clients sur le processus d'achat.
                  <br />
                  <br />
                  --- DOCUMENTATION INTERNE ---
                  <br />
                  Notre processus de vente comporte 4 étapes :<br />
                  1. Inscription avec vérification en 2 étapes (email + SMS)
                  <br />
                  2. Configurateur de produit personnalisé permettant de choisir parmi 18 options différentes
                  <br />
                  3. Processus de commande en 2 temps : versement d'un acompte de 30% puis solde à la livraison
                  <br />
                  4. Livraison uniquement sur rendez-vous avec un créneau de 2h à choisir entre 8h et 19h
                  <br />
                  <br />
                  Spécificités :<br />- Délai de fabrication: 3 semaines pour les modèles standards, 5 semaines pour les
                  personnalisations
                  <br />- Garantie premium de 5 ans avec extension possible à 8 ans (+15%)
                  <br />- Retours acceptés sous 10 jours uniquement pour défauts de fabrication (pas de droit de
                  rétractation standard car produits sur-mesure)
                  <br />- Service d'installation disponible (+120€)
                  <br />- Programme fidélité "Club Premium" à partir de 2 achats
                  <br />
                  --- FIN DOCUMENTATION ---
                </p>
                <Button variant="ghost" size="sm" className="mt-2">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Réponse contextuelle (spécifique)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <p className="font-bold">FAQ - Processus d'achat</p>

                <p className="mt-2">
                  <strong>Q : Comment fonctionne l'inscription sur votre site ?</strong>
                  <br />R : Notre processus d'inscription comprend une vérification en 2 étapes : vous recevrez un code
                  par email et un second par SMS. Cette double vérification garantit la sécurité de votre compte.
                </p>

                <p className="mt-2">
                  <strong>Q : Comment puis-je personnaliser mon produit ?</strong>
                  <br />R : Notre configurateur de produit vous permet de choisir parmi 18 options différentes pour
                  créer un produit parfaitement adapté à vos besoins. Suivez simplement les étapes du configurateur en
                  ligne pour explorer toutes les possibilités.
                </p>

                <p className="mt-2">
                  <strong>Q : Comment se déroule le paiement ?</strong>
                  <br />R : Le paiement s'effectue en deux temps : un acompte de 30% à la commande, puis le solde au
                  moment de la livraison. Ce système vous permet d'échelonner votre paiement tout en sécurisant votre
                  commande.
                </p>

                <p className="mt-2">
                  <strong>Q : Quels sont les délais de fabrication et de livraison ?</strong>
                  <br />R : Nos délais de fabrication sont de 3 semaines pour les modèles standards et de 5 semaines
                  pour les produits personnalisés. La livraison se fait uniquement sur rendez-vous, avec un créneau de
                  2h à choisir entre 8h et 19h.
                </p>

                <p className="mt-2">
                  <strong>Q : Quelle garantie proposez-vous ?</strong>
                  <br />R : Tous nos produits bénéficient d'une garantie premium de 5 ans. Vous avez également la
                  possibilité d'étendre cette garantie à 8 ans moyennant un supplément de 15% du prix d'achat.
                </p>

                <p className="mt-2">
                  <strong>Q : Puis-je retourner mon produit si je change d'avis ?</strong>
                  <br />R : Nos produits étant fabriqués sur-mesure, ils ne sont pas soumis au droit de rétractation
                  standard. Toutefois, les retours sont acceptés sous 10 jours en cas de défaut de fabrication avéré.
                </p>

                <p className="mt-2">
                  <strong>Q : Proposez-vous un service d'installation ?</strong>
                  <br />R : Oui, nous offrons un service d'installation professionnel pour un montant de 120€. Ce
                  service peut être ajouté lors de votre commande ou jusqu'à 48h avant la livraison.
                </p>

                <p className="mt-2">
                  <strong>Q : Avez-vous un programme de fidélité ?</strong>
                  <br />R : Absolument ! Notre programme "Club Premium" vous est ouvert dès votre second achat. Il vous
                  donne accès à des avantages exclusifs, des offres spéciales et un service client prioritaire.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 mb-8">
            <h2 className="text-2xl font-bold mb-6">Exemple d'application RH</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Prompt</h3>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300">
                  En utilisant notre politique interne de télétravail mise à jour en mars 2025 (ci-dessous), réponds
                  précisément à la question d'un manager : "Quelles sont les règles concernant les télétravailleurs
                  internationaux et les implications fiscales ?"
                  <br />
                  <br />
                  --- POLITIQUE DE TÉLÉTRAVAIL MARS 2025 ---
                  <br />
                  <br />
                  4. TÉLÉTRAVAIL INTERNATIONAL
                  <br />
                  <br />
                  4.1 Éligibilité
                  <br />
                  Seuls les employés ayant plus de 2 ans d'ancienneté peuvent demander un télétravail depuis l'étranger.
                  Les demandes sont évaluées au cas par cas et doivent être approuvées par le responsable direct, le
                  département RH et le service juridique.
                  <br />
                  <br />
                  4.2 Durée autorisée
                  <br />• Télétravail occasionnel à l'étranger : jusqu'à 4 semaines cumulées par an (par exemple pour
                  prolonger des vacances ou visiter sa famille)
                  <br />• Télétravail régulier à l'étranger : uniquement dans les pays où l'entreprise a une entité
                  légale (liste à l'Annexe C) et pour une durée maximale de 6 mois, renouvelable une fois
                  <br />
                  <br />
                  4.3 Implications fiscales et administratives
                  <br />• L'employé doit s'informer et respecter les obligations en matière de visa et de permis de
                  travail du pays hôte
                  <br />• Au-delà de 90 jours dans un même pays étranger sur une période de 12 mois, une revue d'impact
                  fiscal est obligatoire
                  <br />• L'employé peut être soumis à une double imposition si le pays ne dispose pas de convention
                  fiscale avec la France
                  <br />• L'entreprise ne couvre pas les surcoûts fiscaux ou administratifs résultant d'un choix
                  personnel de télétravail à l'étranger
                  <br />
                  <br />
                  4.4 Sécurité et confidentialité
                  <br />• Seuls les ordinateurs professionnels chiffrés et validés par l'IT peuvent être utilisés
                  <br />• L'utilisation de réseaux WiFi publics est strictement interdite, même avec un VPN
                  <br />• Certains projets ou données confidentielles ne peuvent être accessibles depuis l'étranger
                  (liste restreinte disponible auprès du RSSI)
                  <br />
                  <br />
                  4.5 Assurance et couverture médicale
                  <br />• L'employé doit souscrire une assurance appropriée couvrant le travail à l'étranger
                  <br />• La carte européenne d'assurance maladie est obligatoire pour les séjours en Europe
                  <br />• Pour les autres destinations, une assurance santé internationale est requise
                  <br />
                  --- FIN DE L'EXTRAIT ---
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
                  Selon notre politique de télétravail mise à jour en mars 2025, voici les règles concernant les
                  télétravailleurs internationaux et les implications fiscales :
                </p>

                <p className="mt-4">
                  <strong>Éligibilité et durée</strong>
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Seuls les employés ayant plus de 2 ans d'ancienneté peuvent demander un télétravail international
                  </li>
                  <li>Pour le télétravail occasionnel à l'étranger : jusqu'à 4 semaines cumulées par an maximum</li>
                  <li>
                    Pour le télétravail régulier à l'étranger : uniquement possible dans les pays où l'entreprise a une
                    entité légale (voir Annexe C), pour une durée maximale de 6 mois, renouvelable une fois
                  </li>
                  <li>
                    Toute demande nécessite une triple approbation : responsable direct, département RH et service
                    juridique
                  </li>
                </ul>

                <p className="mt-4">
                  <strong>Implications fiscales</strong>
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    Une revue d'impact fiscal devient obligatoire dès que l'employé passe plus de 90 jours dans un même
                    pays étranger sur une période de 12 mois
                  </li>
                  <li>
                    L'employé peut être soumis à une double imposition si le pays de résidence temporaire ne dispose pas
                    de convention fiscale avec la France
                  </li>
                  <li>
                    Important : l'entreprise ne prend pas en charge les éventuels surcoûts fiscaux ou administratifs
                    résultant du choix personnel de télétravailler depuis l'étranger
                  </li>
                </ul>

                <p className="mt-4">
                  <strong>Obligations administratives</strong>
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    L'employé est responsable de s'informer et de respecter les exigences en matière de visa et de
                    permis de travail du pays hôte
                  </li>
                  <li>Une assurance appropriée couvrant le travail à l'étranger doit être souscrite par l'employé</li>
                  <li>Pour l'Europe : la carte européenne d'assurance maladie est obligatoire</li>
                  <li>Pour les autres destinations : une assurance santé internationale est requise</li>
                </ul>

                <p className="mt-4">
                  En tant que manager, vous devez vous assurer que ces conditions sont comprises et respectées par vos
                  collaborateurs avant d'approuver toute demande de télétravail international, et collaborer avec les RH
                  et le service juridique pour l'évaluation des demandes.
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
                <h3 className="text-lg font-bold">Analyse et synthèse de documents</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Utilisez l'IA pour extraire les informations clés d'un rapport, d'un contrat ou d'une étude en lui
                fournissant le texte original.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Voici notre rapport trimestriel 2024 (extrait) :<br />
                  <br />
                  "Les ventes du premier trimestre 2024 ont progressé de 12,3% par rapport à T1 2023, principalement
                  portées par la nouvelle gamme éco-responsable (+38%) et l'expansion réussie sur le marché asiatique
                  (+27%). En revanche, la division électronique a connu un recul (-8%) en raison des difficultés
                  d'approvisionnement en composants. Les dépenses opérationnelles ont augmenté de 9,4%, principalement
                  en raison des investissements en R&D (5,2M€) et en marketing digital (3,8M€)."
                  <br />
                  <br />
                  Fais une analyse synthétique des performances par secteur, identifie les facteurs de croissance et les
                  points d'attention, puis recommande trois axes stratégiques pour le trimestre prochain."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Support technique personnalisé</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fournissez la documentation technique d'un produit pour obtenir des réponses précises aux questions des
                clients.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Documentation technique du routeur WiFi PRO-X3000 :<br />
                  <br />
                  "Configuration avancée - Section 3.4 : La fonctionnalité QoS (Quality of Service) permet de prioriser
                  certains types de trafic réseau. Pour l'activer, accédez à l'interface d'administration (192.168.0.1),
                  identifiez-vous, puis naviguez vers 'Paramètres avancés {">"} QoS'. Par défaut, la priorité est donnée
                  aux applications vidéo. Pour modifier ce comportement, sélectionnez 'Configuration personnalisée' et
                  ajustez les curseurs pour chaque type de trafic. Les modifications sont appliquées après redémarrage
                  du routeur (bouton 'Appliquer et redémarrer')."
                  <br />
                  <br />
                  Un client me demande comment donner la priorité aux applications de visioconférence sur son routeur
                  PRO-X3000. Comment dois-je lui répondre?"
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Création de contenu aligné sur la marque</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Intégrez vos guidelines de marque et éléments de communication pour générer du contenu parfaitement
                aligné avec votre identité.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Voici notre guide de style et ton de marque :<br />
                  <br />
                  'Notre marque s'adresse aux professionnels urbains de 25-45 ans. Notre ton est professionnel mais
                  accessible, avec une touche d'humour subtil. Nous utilisons un vocabulaire moderne mais évitons le
                  jargon technique excessif. Nos valeurs clés sont : innovation, transparence, durabilité. Nous
                  préférons les phrases courtes et directes. Nous utilisons la première personne du pluriel (nous) et
                  nous adressons directement au client (vous).'
                  <br />
                  <br />
                  En respectant ces directives, rédige un email de lancement pour notre nouvelle application mobile de
                  gestion financière."
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold">Analyse juridique et conformité</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Fournissez des extraits de textes légaux ou réglementaires pour obtenir une analyse précise et des
                recommandations.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-md">
                <p className="text-sm font-medium mb-1">Exemple de prompt:</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Voici l'extrait de la nouvelle réglementation sur la protection des données clients dans notre
                  secteur :<br />
                  <br />
                  'Article 14.3 : Les entreprises collectant des données biométriques doivent mettre en place un système
                  d'authentification à double facteur pour tout accès à ces données, conserver un journal d'audit
                  détaillé de tous les accès pendant une durée minimale de 24 mois, et obtenir un consentement explicite
                  renouvelé tous les 12 mois auprès des personnes concernées.'
                  <br />
                  <br />
                  Notre système actuel utilise une authentification simple et conserve les journaux pendant 18 mois.
                  Quelles modifications devons-nous apporter pour être en conformité, et quel est le calendrier
                  recommandé?"
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
                  Utilisez les politiques internes et procédures RH pour générer des réponses précises aux questions des
                  employés.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "En utilisant notre politique de congés parentaux (ci-jointe), explique à un employé qui vient
                  d'adopter un enfant quels sont ses droits et les démarches à suivre."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Marketing et communication</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Intégrez des données de marché et études clients pour créer des contenus marketing ciblés et
                  pertinents.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Voici les résultats de notre dernière étude client (données jointes). Utilise ces insights pour
                  rédiger trois accroches publicitaires qui répondent aux préoccupations principales identifiées."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Service client</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Fournissez des informations produit détaillées pour générer des réponses précises aux questions
                  fréquentes.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "En utilisant les spécifications techniques de notre nouvelle machine à café (document joint), réponds
                  à cette question client : 'Est-ce que je peux utiliser des capsules de marque X avec votre modèle
                  Y2000?'"
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Formation et éducation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilisez des supports de cours ou manuels pour créer des exercices, quiz ou résumés personnalisés.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "À partir de ce chapitre de manuel sur la photosynthèse (texte joint), crée un quiz de 10 questions à
                  choix multiples adapté à des élèves de 4ème, avec corrigé."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Recherche et développement</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Intégrez des données de recherche ou résultats d'expériences pour obtenir des analyses et suggestions.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "Voici les résultats de nos trois derniers tests sur le nouveau matériau (données jointes). Analyse
                  ces résultats et suggère quels paramètres nous devrions modifier pour améliorer la résistance à la
                  chaleur."
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Finance et comptabilité</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Utilisez des données financières pour générer des analyses, rapports ou prévisions contextualisées.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                  "En te basant sur notre bilan financier du dernier trimestre (document joint), identifie les 3 postes
                  de dépenses qui ont connu la plus forte augmentation et propose des pistes d'optimisation."
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
                Conseils pour réussir avec la Contextual Augmentation
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Sélectionnez soigneusement les informations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Privilégiez la pertinence plutôt que l'exhaustivité. Choisissez uniquement les informations directement
                liées à la question posée pour éviter de surcharger le prompt.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Structurez clairement le contexte</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilisez des séparateurs visuels (lignes, titres) pour bien distinguer le contexte de votre question.
                Cela aide l'IA à comprendre ce qui est information contextuelle et ce qui est requête.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Soyez précis dans vos instructions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilisez des formulations comme "En te basant uniquement sur le document fourni..." ou "En suivant
                strictement ces directives..." pour orienter l'IA vers l'utilisation du contexte.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Pour les longs documents</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extrayez uniquement les sections pertinentes pour éviter de saturer le prompt. Si nécessaire, divisez le
                document en plusieurs parties et traitez-les séparément.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Vérifiez les réponses</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Assurez-vous que le contexte a bien été pris en compte dans la réponse. Si ce n'est pas le cas,
                reformulez votre prompt en mettant davantage l'accent sur l'importance du contexte fourni.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Équilibrez connaissances générales et spécifiques</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Précisez quand le modèle doit s'appuyer uniquement sur le contexte fourni et quand il peut utiliser ses
                connaissances générales pour compléter l'information.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Testez différentes formulations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si le modèle ne semble pas bien intégrer certaines informations du contexte, essayez de reformuler votre
                prompt ou de mettre en évidence différemment les informations clés.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Soyez vigilant sur la confidentialité</h3>
              <p className="text-gray-600 dark:text-gray-400">
                N'intégrez pas de données sensibles ou confidentielles dans vos prompts. Si nécessaire, anonymisez ou
                modifiez les informations tout en préservant leur pertinence.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-3">Utilisez des formats standardisés</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Pour les contextes que vous utilisez régulièrement, créez des templates avec des sections clairement
                identifiées pour faciliter l'intégration et la compréhension par l'IA.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-6">Modèle de prompt pour Contextual Augmentation</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {`En te basant sur [type de document/information] ci-dessous, [action demandée: réponds/analyse/explique/etc.] [question ou problématique].

--- [NOM DU DOCUMENT/SOURCE] ---

[Contenu du document ou information contextuelle]

--- FIN [NOM DU DOCUMENT/SOURCE] ---

Important : [instructions spécifiques, par exemple "Utilise uniquement les informations fournies" ou "Concentre-toi particulièrement sur la section X"]

Format souhaité pour la réponse : [précisions sur le format attendu, par exemple "liste à puces", "paragraphes courts", "tableau comparatif", etc.]`}
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
          <Link href="/methodes/generated-knowledge" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Generated Knowledge</CardTitle>
                <CardDescription>L'IA active d'abord ses connaissances</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Découvrez comment faire générer des connaissances avant de formuler une réponse finale.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/template-filling" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Template Filling</CardTitle>
                <CardDescription>Remplir des modèles prédéfinis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Apprenez à utiliser des templates pour générer du contenu structuré et cohérent.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/methodes/multi-prompting" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader>
                <CardTitle>Multi-Prompting</CardTitle>
                <CardDescription>Combiner plusieurs techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explorez comment combiner plusieurs approches de prompting pour résoudre des problèmes complexes.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
