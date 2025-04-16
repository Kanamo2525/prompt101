import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Info } from "lucide-react"

export default function RCTPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">RCT (Rôle, Contexte, Tâche)</h1>
          <p className="text-xl max-w-3xl mx-auto">Une structure claire pour des résultats précis</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/methodes" className="hover:text-teal-600 transition-colors">
            Méthodes de Prompting
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">RCT (Rôle, Contexte, Tâche)</span>
        </div>

        <div className="inline-block bg-amber-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-8">
          Niveau : Intermédiaire
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">En quoi consiste la technique RCT ?</h3>
          <p className="text-gray-700">
            La technique RCT (Rôle, Contexte, Tâche) est une méthode structurée pour formuler des prompts qui définit
            clairement : le rôle que l'IA doit adopter, le contexte spécifique de la demande, et la tâche précise à
            accomplir. Cette approche permet d'obtenir des réponses parfaitement adaptées à des besoins professionnels
            précis.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Comment ça fonctionne</h2>
        <p className="text-gray-700 mb-8">
          La technique RCT structure le prompt en trois parties essentielles, chacune jouant un rôle spécifique dans
          l'orientation de la réponse de l'IA :
        </p>

        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 relative border-l-4 border-teal-500">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              R
            </div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2 ml-4">Rôle</h3>
            <p className="text-gray-700 ml-4">
              Définit l'identité ou la fonction que l'IA doit adopter (ex : expert marketing, responsable RH, consultant
              financier...). Le rôle influence le ton, la perspective et le niveau d'expertise de la réponse.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 relative border-l-4 border-teal-500">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              C
            </div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2 ml-4">Contexte</h3>
            <p className="text-gray-700 ml-4">
              Fournit les informations de fond nécessaires et les circonstances spécifiques de la situation (entreprise,
              secteur, public cible, contraintes, objectifs...). Un contexte détaillé permet à l'IA de personnaliser sa
              réponse.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 relative border-l-4 border-teal-500">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              T
            </div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2 ml-4">Tâche</h3>
            <p className="text-gray-700 ml-4">
              Précise exactement ce que l'IA doit faire ou produire (rédiger un email, analyser des données, créer un
              plan d'action...). La tâche doit être claire et spécifier le format ou le résultat attendu.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                R
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative flex-1">
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-blue-50"></div>
                <p className="font-medium">
                  En tant que <span className="text-teal-700">responsable marketing digital</span>,
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                C
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative flex-1">
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-blue-50"></div>
                <p className="font-medium">
                  tu prépares le lancement d'un nouveau produit premium pour une clientèle B2B dans le secteur
                  technologique avec un budget limité,
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                T
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 relative flex-1">
                <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-r-8 border-b-8 border-transparent border-r-blue-50"></div>
                <p className="font-medium">
                  élabore une stratégie de promotion en 5 points clés en mettant l'accent sur les canaux digitaux et le
                  marketing de contenu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden mb-12">
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Exemple de prompt RCT complet</h3>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Prompt</h4>
              <div className="bg-gray-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap">
                En tant que responsable RH d'une entreprise en pleine transformation digitale, tu dois gérer
                l'intégration de 20 nouveaux collaborateurs qui rejoindront différents départements le mois prochain. Tu
                disposes d'une équipe RH réduite et d'un budget limité pour l'onboarding. L'entreprise est répartie sur
                3 sites géographiques différents et pratique le télétravail partiel. Élabore un plan d'onboarding
                efficace et innovant qui garantisse une intégration réussie tout en minimisant la charge de travail pour
                l'équipe RH. Ce plan devra inclure : les étapes clés, un calendrier, les ressources nécessaires, des
                suggestions d'activités pour favoriser la cohésion d'équipe, et des moyens de mesurer l'efficacité du
                processus.
              </div>
            </div>
            <div>
              <h4 className="uppercase text-xs font-semibold tracking-wider text-gray-500 mb-2">Réponse de l'IA</h4>
              <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-4">Plan d'Onboarding pour 20 Nouveaux Collaborateurs</h3>

                <h4 className="font-semibold text-gray-800 mb-2">Étapes clés du processus</h4>

                <ol className="list-decimal pl-5 mb-4 space-y-2">
                  <li>
                    <strong>Pré-intégration (J-15 à J-1)</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Envoi d'un kit de bienvenue digital personnalisé avec présentation de l'entreprise, de sa
                        culture et des valeurs
                      </li>
                      <li>
                        Accès anticipé à une plateforme d'onboarding en ligne avec parcours adapté à chaque département
                      </li>
                      <li>Email du manager direct avec agenda de la première semaine et liste des contacts clés</li>
                      <li>Assignation d'un "buddy" (parrain/marraine) au sein de l'équipe concernée</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Jour d'accueil (J1) - Format hybride</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Session d'accueil collective virtuelle (2h max) avec présentation de la direction</li>
                      <li>
                        Répartition en sous-groupes par site/département pour une visite guidée (présentiel ou virtuelle
                        selon localisation)
                      </li>
                      <li>Configuration matérielle et accès IT avec support dédié</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Première semaine (J1-J5)</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>
                        Sessions quotidiennes courtes (30 min) sur différents aspects de l'entreprise (formats variés :
                        webinaires, vidéos préenregistrées, quiz interactifs)
                      </li>
                      <li>Formation aux outils et process essentiels via parcours e-learning adaptatif</li>
                      <li>Points quotidiens avec le buddy et point de fin de semaine avec le manager</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Premier mois (J6-J30)</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Plan d'apprentissage progressif avec objectifs hebdomadaires définis par le manager</li>
                      <li>Rencontres planifiées avec les interfaces clés (virtuelles ou présentielles)</li>
                      <li>Point d'étape RH à J+15 pour recueillir les impressions et besoins</li>
                    </ul>
                  </li>

                  <li>
                    <strong>Suivi et ancrage (J30-J90)</strong>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Bilan à 30 jours avec manager et RH</li>
                      <li>
                        Événement d'intégration inter-départements à J+45 (présentiel ou virtuel selon possibilités)
                      </li>
                      <li>Bilan à 90 jours et fin du programme d'onboarding formel</li>
                    </ul>
                  </li>
                </ol>

                <h4 className="font-semibold text-gray-800 mb-2">Calendrier et organisation</h4>

                <ul className="list-disc pl-5 mb-4">
                  <li>J-15 : Finalisation des parcours personnalisés et envoi des premiers éléments</li>
                  <li>J-7 : Constitution des groupes d'accueil par site et activation des accès à la plateforme</li>
                  <li>J1 : Jour d'accueil coordonné entre les 3 sites (prévoir 1 référent RH par site)</li>
                  <li>S1 : Planning unique des sessions avec intervenants variés (préenregistrés au maximum)</li>
                  <li>S2-S4 : Accompagnement progressivement transféré aux managers et buddies</li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-2">Ressources nécessaires</h4>

                <ul className="list-disc pl-5 mb-4">
                  <li>
                    <strong>Plateforme digitale</strong> : Utiliser l'LMS existant ou investir dans une solution
                    d'onboarding automatisée
                  </li>
                  <li>
                    <strong>Kit de communication</strong> : Modèles d'emails, présentations, vidéos de bienvenue (à
                    préparer une fois et réutiliser)
                  </li>
                  <li>
                    <strong>Formation des buddies</strong> : Guide du parrainage et session de préparation (1h
                    virtuelle)
                  </li>
                  <li>
                    <strong>Charge RH optimisée</strong> : 2 jours de préparation + 1 jour d'accueil + 2h/semaine de
                    suivi et coordination
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-2">Activités de cohésion</h4>

                <ul className="list-disc pl-5 mb-4">
                  <li>Café virtuel hebdomadaire entre nouveaux arrivants (format informel)</li>
                  <li>
                    Challenge d'intégration gamifié via l'application mobile (missions à accomplir pour découvrir
                    l'entreprise)
                  </li>
                  <li>Déjeuner avec l'équipe (pris en charge) durant la première semaine</li>
                  <li>Session "experts" où chaque nouveau partage une compétence/passion avec le groupe</li>
                  <li>
                    Événement multi-sites à J+45 avec activité fédératrice (présentiel si possible ou format hybride
                    innovant)
                  </li>
                </ul>

                <h4 className="font-semibold text-gray-800 mb-2">Mesure de l'efficacité</h4>

                <ul className="list-disc pl-5 mb-4">
                  <li>Questionnaires de satisfaction à J+1, J+15, J+30 et J+90 (courts et ciblés)</li>
                  <li>Suivi de l'engagement sur la plateforme d'onboarding (completion rate, temps passé)</li>
                  <li>Entretiens qualitatifs avec un échantillon de managers</li>
                  <li>
                    KPIs : temps de productivité (auto-évaluation à J+30/60/90), taux de rétention à 6 mois, scoring
                    d'intégration à l'équipe
                  </li>
                </ul>

                <p className="text-gray-700">
                  Ce plan permet une expérience d'onboarding de qualité tout en utilisant efficacement les ressources
                  limitées de l'équipe RH, grâce à la digitalisation, la répartition des responsabilités, et un
                  équilibre présentiel/distanciel adapté à la réalité de l'entreprise multi-sites.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="flex items-center text-green-800 font-semibold mb-4">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Avantages
            </h3>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>
                <strong>Clarté et précision</strong> des réponses grâce au cadrage strict
              </li>
              <li>
                <strong>Personnalisation poussée</strong> en fonction du contexte et du rôle définis
              </li>
              <li>
                <strong>Réponses plus pertinentes et professionnelles</strong> adaptées à un usage spécifique
              </li>
              <li>
                <strong>Structuration naturelle</strong> de la réponse qui suit la logique du prompt
              </li>
              <li>
                <strong>Réduction des ambiguïtés</strong> et des malentendus dans l'interprétation
              </li>
              <li>
                <strong>Particulièrement efficace en milieu professionnel</strong> où les rôles sont bien définis
              </li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="flex items-center text-red-800 font-semibold mb-4">
              <XCircle className="h-5 w-5 mr-2 text-red-600" />
              Limites
            </h3>
            <ul className="space-y-2 pl-5 list-disc text-gray-700">
              <li>
                <strong>Nécessite plus de temps</strong> pour formuler un prompt complet
              </li>
              <li>
                <strong>Peut être superflu</strong> pour des demandes simples ou factuelles
              </li>
              <li>
                <strong>Risque de trop contraindre</strong> la créativité de l'IA dans certains cas
              </li>
              <li>
                <strong>Demande une bonne connaissance</strong> du domaine pour définir un rôle précis
              </li>
              <li>
                <strong>Peut générer des réponses plus longues</strong> (car plus contextualisées)
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Structure recommandée pour un prompt RCT
        </h2>
        <div className="border border-gray-200 rounded-lg mb-12">
          <div className="p-6 bg-gray-100 font-mono text-sm whitespace-pre-wrap">
            En tant que [profession/rôle/expertise], [contexte détaillé : situation actuelle, contraintes, objectifs,
            cadre, informations pertinentes...] [tâche précise à accomplir, format attendu, éléments spécifiques à
            inclure...]
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
          Applications en Ressources Humaines
        </h2>
        <p className="text-gray-700 mb-8">
          La technique RCT est particulièrement adaptée aux cas d'usage RH, où les rôles, contextes et tâches sont
          souvent bien définis :
        </p>

        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="flex items-center text-teal-700 font-semibold mb-4">
              <div className="w-6 h-6 mr-2 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-teal-600"
                >
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-1 14H5V8h14v10z"></path>
                </svg>
              </div>
              Rédaction de communications RH
            </h3>
            <div className="border border-gray-200 rounded-lg mb-4">
              <div className="p-4 bg-gray-100 font-mono text-sm whitespace-pre-wrap">
                En tant que responsable RH, ton entreprise va déménager dans de nouveaux locaux situés à 5 km de
                l'emplacement actuel dans 3 mois. La direction souhaite communiquer ce changement aux 200 employés en
                mettant l'accent sur les avantages des nouveaux locaux (meilleure accessibilité, espaces de travail
                modernes, cafétéria) tout en reconnaissant les désagréments potentiels pour certains. Rédige un email
                d'annonce à envoyer à l'ensemble du personnel qui présente le changement de manière positive mais
                transparente, et qui indique les prochaines étapes du processus.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="flex items-center text-teal-700 font-semibold mb-4">
              <div className="w-6 h-6 mr-2 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-teal-600"
                >
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
                </svg>
              </div>
              Création de descriptions de poste
            </h3>
            <div className="border border-gray-200 rounded-lg mb-4">
              <div className="p-4 bg-gray-100 font-mono text-sm whitespace-pre-wrap">
                En tant que spécialiste du recrutement dans le secteur technologique, tu travailles pour une startup en
                cybersécurité de 50 employés en forte croissance. L'entreprise recherche un profil senior ayant une
                double expertise technique et managériale pour diriger une équipe de 5 experts en sécurité. Le marché
                est très concurrentiel et l'entreprise offre un package attractif et une culture de travail flexible.
                Rédige une description de poste complète pour un "Responsable Cybersécurité" qui soit à la fois précise
                sur les qualifications techniques requises (minimum 5 ans d'expérience, certifications pertinentes) et
                attractive pour attirer les meilleurs talents du marché. Inclus les responsabilités clés, les
                compétences requises et les avantages offerts par l'entreprise.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="flex items-center text-teal-700 font-semibold mb-4">
              <div className="w-6 h-6 mr-2 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-teal-600"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
                </svg>
              </div>
              Élaboration de plans de formation
            </h3>
            <div className="border border-gray-200 rounded-lg mb-4">
              <div className="p-4 bg-gray-100 font-mono text-sm whitespace-pre-wrap">
                En tant que responsable du développement des compétences, tu dois moderniser le programme de formation
                des managers intermédiaires d'une entreprise de distribution qui compte 500 employés répartis sur 15
                sites. L'entreprise fait face à des défis de transformation digitale et d'amélioration de l'expérience
                client. Les managers actuels (environ 50 personnes) ont des niveaux d'expérience variés et des
                disponibilités limitées. Le budget formation est de 2000€ par manager. Conçois un parcours de formation
                de 6 mois qui combine apprentissage en présentiel et digital, en précisant le contenu des modules, le
                format des sessions, le calendrier recommandé, et les méthodes d'évaluation des acquis. Le programme
                doit particulièrement développer les compétences en leadership, gestion du changement et compréhension
                des enjeux digitaux.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <h3 className="flex items-center text-blue-800 font-semibold mb-4">
            <Info className="h-5 w-5 mr-2 text-blue-600" />
            Conseils pour réussir vos prompts RCT
          </h3>
          <ul className="space-y-2 pl-5 list-disc text-gray-700">
            <li>
              <strong>Soyez précis sur le rôle</strong> : définissez non seulement la profession mais aussi le niveau
              d'expertise, le secteur ou toute spécificité utile
            </li>
            <li>
              <strong>Détaillez suffisamment le contexte</strong> : incluez toutes les informations pertinentes
              (contraintes, ressources, objectifs, etc.) qui pourraient influencer la réponse
            </li>
            <li>
              <strong>Formulez une tâche claire</strong> : précisez le format attendu, les éléments à inclure et le
              niveau de détail souhaité
            </li>
            <li>
              <strong>Structurez visuellement votre prompt</strong> : séparez clairement les trois composantes (R-C-T)
              pour faciliter la lecture par l'IA
            </li>
            <li>
              <strong>Adaptez la complexité</strong> : pour une tâche simple, un contexte minimaliste peut suffire ;
              pour une tâche complexe, enrichissez le contexte
            </li>
            <li>
              <strong>Testez différents rôles</strong> : essayez différentes formulations du rôle pour obtenir des
              perspectives variées sur un même sujet
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link
            href="/methodes/expert-role-playing"
            className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Expert Role-Playing
          </Link>
          <Link
            href="/methodes/chain-of-thought"
            className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
          >
            Chain-of-Thought
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </main>

      <footer className="bg-teal-700 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-80">© 2025 Next-ai.fr. Guide des prompts pour l'IA générative.</p>
        </div>
      </footer>
    </div>
  )
}
