import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info } from "lucide-react"

export default function ContextualAugmentationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contextual Augmentation</h1>
          <p className="text-xl max-w-3xl mx-auto">Enrichissez vos prompts avec des informations externes</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/methodes" className="text-blue-600 hover:text-blue-800 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux méthodes
          </Link>
        </div>

        <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-8">
          Niveau : Avancé
        </span>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">En quoi consiste la Contextual Augmentation ?</h3>
          <p className="text-gray-700">
            La Contextual Augmentation consiste à fournir à l'IA des informations ou documents supplémentaires en
            contexte, pour qu'elle s'en serve dans sa réponse. Plutôt que de s'appuyer uniquement sur ses connaissances
            pré-entraînées, le modèle reçoit du contenu additionnel pertinent (données d'entreprise, extraits d'un
            document, etc.) qu'il intègre à son traitement. Cette technique permet d'améliorer la précision et la
            cohérence des réponses, particulièrement pour des informations spécifiques que le modèle ne pourrait pas
            connaître autrement.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Comment ça fonctionne</h2>
        <p className="text-gray-700 mb-8">
          Le principe est simple mais puissant : vous insérez dans votre prompt des informations additionnelles,
          généralement sous forme d'un encart ou d'une mention explicite. Le modèle lira ce contenu fourni et
          l'intègrera dans son raisonnement pour formuler une réponse précise et contextualisée. C'est une forme
          manuelle de Retrieval-Augmented Generation (RAG) où vous extrayez et fournissez vous-même les documents ou
          données nécessaires au modèle.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
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
                Notre politique de remboursement pour les clients professionnels prévoit un délai de rétractation de 14
                jours pour tout produit non utilisé, sans frais. Entre 15 et 30 jours, une franchise de 15% est
                appliquée. Les demandes exceptionnelles nécessitent une validation par notre service client et doivent
                être accompagnées d'un justificatif.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
          <div className="bg-gray-100 p-4 border-b border-gray-200 font-medium">Exemple de Contextual Augmentation</div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">
                Prompt initial (sans contextualisation)
              </h4>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                Génère une FAQ pour notre site e-commerce qui répond aux questions les plus fréquentes des clients sur
                le processus d'achat.
              </div>
            </div>

            <div className="mb-6">
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">Réponse initiale (générique)</h4>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
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
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">Prompt avec contextualisation</h4>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
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
              </div>
            </div>

            <div>
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">Réponse contextuelle (spécifique)</h4>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 className="flex items-center text-xl font-semibold text-green-800 mb-4">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Avantages
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Haute spécificité des réponses</strong> grâce à l'utilisation d'informations propres à votre
                contexte
              </li>
              <li>
                <strong>Réduction des "hallucinations"</strong> de l'IA qui s'appuie sur des faits concrets fournis
              </li>
              <li>
                <strong>Utilisation de données récentes ou privées</strong> absentes de l'entraînement du modèle
              </li>
              <li>
                <strong>Contrôle accru sur la réponse</strong> en choisissant précisément les informations fournies
              </li>
              <li>
                <strong>Adaptabilité à des usages spécifiques</strong> comme l'analyse de documents internes
              </li>
              <li>
                <strong>Transfert de connaissances précis</strong> du document vers la réponse
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-200">
            <h3 className="flex items-center text-xl font-semibold text-red-800 mb-4">
              <XCircle className="h-5 w-5 mr-2 text-red-600" />
              Limites
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Préparation manuelle nécessaire</strong> pour sélectionner et formater les informations
                pertinentes
              </li>
              <li>
                <strong>Risque de surcharge</strong> si le contexte fourni est trop volumineux
              </li>
              <li>
                <strong>Questions de confidentialité</strong> lorsque des données sensibles sont intégrées au prompt
              </li>
              <li>
                <strong>Possible confusion de l'IA</strong> si le contexte contredit ses connaissances générales
              </li>
              <li>
                <strong>Efficacité réduite</strong> si les informations fournies sont mal ciblées ou mal structurées
              </li>
              <li>
                <strong>Limites de taille du prompt</strong> restreignant la quantité d'informations pouvant être
                ajoutées
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Cas d'usage professionnels</h2>

        <div className="space-y-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              Analyse et synthèse de documents
            </h3>
            <p className="text-gray-700 mb-4">
              Utilisez l'IA pour extraire les informations clés d'un rapport, d'un contrat ou d'une étude en lui
              fournissant le texte original.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
              Voici notre rapport trimestriel 2024 (extrait) :<br />
              <br />
              "Les ventes du premier trimestre 2024 ont progressé de 12,3% par rapport à T1 2023, principalement portées
              par la nouvelle gamme éco-responsable (+38%) et l'expansion réussie sur le marché asiatique (+27%). En
              revanche, la division électronique a connu un recul (-8%) en raison des difficultés d'approvisionnement en
              composants. Les dépenses opérationnelles ont augmenté de 9,4%, principalement en raison des
              investissements en R&D (5,2M€) et en marketing digital (3,8M€)."
              <br />
              <br />
              Fais une analyse synthétique des performances par secteur, identifie les facteurs de croissance et les
              points d'attention, puis recommande trois axes stratégiques pour le trimestre prochain.
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              Support technique personnalisé
            </h3>
            <p className="text-gray-700 mb-4">
              Fournissez la documentation technique d'un produit pour obtenir des réponses précises aux questions des
              clients.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
              Documentation technique du routeur WiFi PRO-X3000 :<br />
              <br />
              "Configuration avancée - Section 3.4 : La fonctionnalité QoS (Quality of Service) permet de prioriser
              certains types de trafic réseau. Pour l'activer, accédez à l'interface d'administration (192.168.0.1),
              identifiez-vous, puis naviguez vers 'Paramètres avancés {">"} QoS'. Par défaut, la priorité est donnée aux
              applications vidéo. Pour modifier ce comportement, sélectionnez 'Configuration personnalisée' et ajustez
              les curseurs pour chaque type de trafic. Les modifications sont appliquées après redémarrage du routeur
              (bouton 'Appliquer et redémarrer')."
              <br />
              <br />
              Un client me demande comment donner la priorité aux applications de visioconférence sur son routeur
              PRO-X3000. Comment dois-je lui répondre?
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="flex items-center text-lg font-semibold text-gray-800 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              Création de contenu aligné sur la marque
            </h3>
            <p className="text-gray-700 mb-4">
              Intégrez vos guidelines de marque et éléments de communication pour générer du contenu parfaitement aligné
              avec votre identité.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">
          Application dans les Ressources Humaines
        </h2>
        <p className="text-gray-700 mb-6">
          La Contextual Augmentation est particulièrement puissante dans le domaine RH, où les informations spécifiques
          à l'entreprise et les politiques internes dictent les réponses :
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-10">
          <div className="bg-gray-100 p-4 border-b border-gray-200 font-medium">Exemple d'application RH</div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">Prompt</h4>
              <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
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
                <br />• Télétravail régulier à l'étranger : uniquement dans les pays où l'entreprise a une entité légale
                (liste à l'Annexe C) et pour une durée maximale de 6 mois, renouvelable une fois
                <br />
                <br />
                4.3 Implications fiscales et administratives
                <br />• L'employé doit s'informer et respecter les obligations en matière de visa et de permis de
                travail du pays hôte
                <br />• Au-delà de 90 jours dans un même pays étranger sur une période de 12 mois, une revue d'impact
                fiscal est obligatoire
                <br />• L'employé peut être soumis à une double imposition si le pays ne dispose pas de convention
                fiscale avec la France
                <br />• L'entreprise ne couvre pas les surcoûts fiscaux ou administratifs résultant d'un choix personnel
                de télétravail à l'étranger
                <br />
                <br />
                4.4 Sécurité et confidentialité
                <br />• Seuls les ordinateurs professionnels chiffrés et validés par l'IT peuvent être utilisés
                <br />• L'utilisation de réseaux WiFi publics est strictement interdite, même avec un VPN
                <br />• Certains projets ou données confidentielles ne peuvent être accessibles depuis l'étranger (liste
                restreinte disponible auprès du RSSI)
                <br />
                <br />
                4.5 Assurance et couverture médicale
                <br />• L'employé doit souscrire une assurance appropriée couvrant le travail à l'étranger
                <br />• La carte européenne d'assurance maladie est obligatoire pour les séjours en Europe
                <br />• Pour les autres destinations, une assurance santé internationale est requise
                <br />
                --- FIN DE L'EXTRAIT ---
              </div>
            </div>

            <div>
              <h4 className="uppercase text-sm font-semibold text-gray-500 mb-2">Réponse de l'IA</h4>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
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
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-10">
          <h3 className="flex items-center text-xl font-semibold text-blue-800 mb-4">
            <Info className="h-5 w-5 mr-2 text-blue-600" />
            Conseils pour réussir avec la Contextual Augmentation
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Sélectionnez soigneusement les informations</strong> à fournir - privilégiez la pertinence plutôt
              que l'exhaustivité
            </li>
            <li>
              <strong>Structurez clairement le contexte</strong> en utilisant des séparateurs visuels (lignes, titres)
              pour bien le distinguer de votre question
            </li>
            <li>
              <strong>Soyez précis dans vos instructions</strong> : "En te basant uniquement sur le document fourni..."
              ou "En suivant strictement ces directives..."
            </li>
            <li>
              <strong>Pour les longs documents</strong>, extrayez uniquement les sections pertinentes pour éviter de
              saturer le prompt
            </li>
            <li>
              <strong>Vérifiez les réponses</strong> pour vous assurer que le contexte a bien été pris en compte
            </li>
            <li>
              <strong>Équilibrez les connaissances générales et spécifiques</strong> - précisez quand le modèle doit
              s'appuyer uniquement sur le contexte fourni
            </li>
            <li>
              <strong>Testez différentes formulations</strong> si le modèle ne semble pas bien intégrer certaines
              informations du contexte
            </li>
            <li>
              <strong>Soyez vigilant sur la confidentialité</strong> des données que vous intégrez dans vos prompts
            </li>
          </ul>
        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/methodes/generated-knowledge"
            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Generated Knowledge
          </Link>
          <Link
            href="/methodes/template-filling"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Template Filling
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </main>

      <footer className="bg-blue-600 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="opacity-80">Guide des Techniques de Prompting pour l'IA — 2025</p>
        </div>
      </footer>
    </div>
  )
}
