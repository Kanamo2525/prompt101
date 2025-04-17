import type { Prompt } from "@/types/prompt"

export const onboardingPrompts: Prompt[] = [
  {
    id: "onboarding-checklist",
    title: "Checklist d'onboarding personnalisée",
    description: "Génère une checklist d'onboarding adaptée au poste et à l'entreprise",
    difficulty: 2,
    category: "onboarding",
    content: `En tant que spécialiste RH, crée une checklist d'onboarding complète pour un nouveau [poste] dans [type d'entreprise].

La checklist doit couvrir:
- Préparation avant l'arrivée
- Premier jour
- Première semaine
- Premier mois
- Premiers 90 jours

Pour chaque période, inclus:
- Tâches administratives
- Formation technique
- Intégration culturelle
- Points de contrôle/feedback

Adapte le contenu au secteur d'activité et à la taille de l'entreprise.`,
    variants: [
      {
        title: "Version pour startup tech",
        content: `En tant que responsable RH dans une startup technologique, crée une checklist d'onboarding agile et efficace pour un nouveau développeur full-stack.

La checklist doit être adaptée à notre environnement rapide et collaboratif, en couvrant:

- Préparation avant l'arrivée (accès, équipement, annonce à l'équipe)
- Premier jour (accueil, présentation, setup technique)
- Première semaine (formation sur les outils, rencontres avec l'équipe, premier ticket simple)
- Premier mois (projets plus complexes, feedback régulier, autonomie progressive)
- Premiers 90 jours (contribution significative, objectifs clairs, évaluation)

Pour chaque période, précise:
- Les outils et accès nécessaires
- Les personnes clés à rencontrer
- Les ressources d'apprentissage recommandées
- Les objectifs progressifs à atteindre

L'onboarding doit refléter notre culture de collaboration, d'apprentissage continu et d'autonomie.`,
      },
      {
        title: "Version pour grande entreprise",
        content: `En tant que responsable du développement des talents, crée une checklist d'onboarding structurée et complète pour un nouveau manager intermédiaire rejoignant notre groupe international.

La checklist doit s'aligner sur nos processus établis et notre culture d'entreprise, en couvrant:

- Préparation avant l'arrivée (2 semaines avant)
  * Documentation RH complète
  * Configuration des accès et systèmes
  * Préparation du plan d'intégration personnalisé
  * Communication avec l'équipe

- Premier jour
  * Accueil formel et présentation à la direction
  * Session d'orientation générale
  * Configuration du poste de travail et des outils
  * Déjeuner avec l'équipe directe

- Première semaine
  * Formation sur les politiques et procédures de l'entreprise
  * Présentation des départements connexes
  * Revue des objectifs du département
  * Rencontres individuelles avec les membres de l'équipe

- Premier mois
  * Formation approfondie sur nos produits/services
  * Participation aux réunions stratégiques
  * Définition des objectifs à court terme
  * Premier point d'évaluation avec le supérieur hiérarchique

- Premiers 90 jours
  * Développement du plan d'action stratégique
  * Formation au leadership selon notre modèle
  * Évaluation des performances initiale
  * Définition des objectifs annuels

Inclure pour chaque étape les formulaires requis, les formations obligatoires, et les certifications nécessaires conformément à nos standards internationaux.`,
      },
    ],
  },
  {
    id: "welcome-email",
    title: "Email de bienvenue personnalisé",
    description: "Crée un email de bienvenue chaleureux pour un nouveau collaborateur",
    difficulty: 1,
    category: "onboarding",
    content: `Rédige un email de bienvenue chaleureux et informatif pour [prénom], qui rejoint notre équipe en tant que [poste] le [date].

L'email doit inclure:
- Une introduction chaleureuse
- Des informations pratiques pour le premier jour (heure d'arrivée, lieu, personne à demander)
- Un aperçu du déroulement de la première journée
- Une brève présentation de l'équipe qu'il/elle rejoindra
- Les documents ou informations à préparer avant l'arrivée
- Une note personnelle sur la culture de l'entreprise

Ton doit être: professionnel mais chaleureux, enthousiaste, rassurant.

Signe l'email en tant que [ton nom], [ton poste].`,
    variants: [
      {
        title: "Version informelle pour petite entreprise",
        content: `Objet: Bienvenue dans l'aventure, [prénom] ! 🚀

Bonjour [prénom],

Toute l'équipe est super enthousiaste de t'accueillir parmi nous lundi prochain ! On a hâte de voir ce que tu vas apporter à notre petite famille en tant que [poste].

Pour ton premier jour:
• On t'attend à 9h30 (pas besoin de te lever aux aurores, on sait que les premiers jours sont stressants !)
• Viens directement à nos bureaux: [adresse simple]
• Demande Emma à l'accueil, c'est elle qui te guidera
• Tenue décontractée bienvenue - on est plutôt casual ici

Au programme de ta journée:
• Petit-déj d'accueil avec l'équipe (on a repéré que tu aimais les croissants aux amandes 😉)
• Installation de ton espace de travail
• Déjeuner avec ton équipe directe
• Quelques sessions d'intro l'après-midi, rien de trop intense !

Tu rejoindras une équipe de 5 personnes, toutes impatientes de te rencontrer. Thomas, qui sera ton buddy pendant les premières semaines, t'a déjà préparé un petit guide de survie personnalisé !

Avant lundi, si tu peux:
• Réfléchir à ta boisson préférée pour qu'on stocke ce qu'il faut
• Préparer juste ta pièce d'identité et ton RIB
• Tout le reste peut attendre !

Chez nous, on valorise la créativité, l'entraide et... les pauses café animées ! Tu verras, l'ambiance est à la fois productive et détendue.

N'hésite pas à me contacter si tu as la moindre question d'ici là - même le week-end, promis ça ne me dérange pas !

À très vite,
[Ton prénom]
[Ton poste]
[Numéro de téléphone personnel]`,
      },
      {
        title: "Version formelle pour grande entreprise",
        content: `Objet: Bienvenue chez [Nom de l'entreprise] - Informations pour votre intégration

Cher(e) [prénom],

Au nom de toute l'équipe de [Nom de l'entreprise], je suis ravi(e) de vous souhaiter la bienvenue au sein de notre organisation. Nous sommes impatients de vous accueillir en tant que [poste] à partir du [date].

Informations pratiques pour votre premier jour:
• Heure d'arrivée: 9h00
• Lieu: Siège social, [adresse complète]
• Accueil: Présentez-vous à la réception principale, Bâtiment A
• Contact: Mme/M. [Nom], Responsable d'intégration, vous accueillera
• Stationnement: Disponible au niveau -2, utilisez l'entrée visiteurs le premier jour

Déroulement de votre première journée:
• 9h00-10h00: Accueil et formalités administratives
• 10h00-11h00: Présentation de l'entreprise et remise du matériel
• 11h00-12h00: Visite des locaux et présentation aux équipes
• 12h00-13h30: Déjeuner avec votre responsable hiérarchique
• 13h30-17h00: Sessions d'orientation et configuration des accès

Vous rejoindrez le département [nom du département], composé de [nombre] collaborateurs spécialisés dans [domaine]. Votre responsable direct, [nom], a préparé un programme d'intégration complet pour vos premières semaines.

Documents à préparer:
• Pièce d'identité
• Carte Vitale
• RIB
• Diplômes mentionnés dans votre dossier de candidature
• Certificats de travail précédents

Chez [Nom de l'entreprise], nous valorisons l'excellence, l'innovation et le travail d'équipe. Notre culture d'entreprise encourage le développement professionnel continu et la contribution de chacun à notre réussite collective.

N'hésitez pas à me contacter pour toute question avant votre arrivée.

Nous nous réjouissons de vous compter bientôt parmi nous.

Cordialement,

[Votre nom]
[Votre poste]
[Coordonnées professionnelles]
[Nom de l'entreprise]`,
      },
    ],
  },
  {
    id: "onboarding-presentation",
    title: "Présentation d'onboarding",
    description: "Crée une structure de présentation pour l'accueil des nouveaux employés",
    difficulty: 2,
    category: "onboarding",
    content: `Crée une structure détaillée pour une présentation d'onboarding destinée aux nouveaux employés de [entreprise/organisation].

La présentation doit inclure:

1. Introduction
   - Accueil chaleureux
   - Objectifs de la session d'onboarding

2. Présentation de l'entreprise
   - Histoire et évolution
   - Mission, vision et valeurs
   - Positionnement sur le marché et concurrence

3. Culture d'entreprise
   - Valeurs en action
   - Traditions et événements
   - Attentes comportementales

4. Structure organisationnelle
   - Organigramme simplifié
   - Présentation des départements clés
   - Qui contacter pour quoi

5. Politiques et procédures importantes
   - Horaires et flexibilité
   - Politiques de congés
   - Règles de communication

6. Avantages et ressources
   - Package de rémunération et avantages
   - Opportunités de développement
   - Ressources disponibles

7. Prochaines étapes
   - Plan des 30/60/90 premiers jours
   - Formation spécifique au poste
   - Système de buddy/mentor

8. Questions et réponses

Pour chaque section, suggère 3-5 points clés à aborder et des conseils pour rendre la présentation engageante.`,
    variants: [
      {
        title: "Version pour entreprise technologique",
        content: `# Structure de présentation d'onboarding - [Nom de l'entreprise tech]

## 1. Bienvenue dans l'aventure (15 min)
- Accueil personnalisé avec mention du parcours de chaque nouveau membre
- Ice-breaker interactif: "Deux vérités et un mensonge" version tech
- Objectifs: se sentir à l'aise, comprendre notre ADN, être opérationnel rapidement
- **Conseil d'engagement**: Commencer par une démo impressionnante d'un produit récent

## 2. Notre histoire: du garage au cloud (10 min)
- Les origines: comment nos fondateurs ont identifié le problème que nous résolvons
- Les pivots majeurs et leçons apprises
- Notre mission: [mission spécifique] et comment elle guide chaque décision
- Notre position unique face aux géants et startups du secteur
- **Conseil d'engagement**: Utiliser une timeline interactive avec anecdotes insolites

## 3. Culture: notre système d'exploitation interne (15 min)
- Nos valeurs décodées: ce qu'elles signifient concrètement au quotidien
  * Itération rapide: "Fail fast, learn faster"
  * Transparence radicale: nos réunions all-hands et documentation ouverte
  * Autonomie responsable: comment nous prenons des décisions
- Notre communication: Slack vs email, async vs sync, documentation
- Rituels: stand-ups, démos du vendredi, hackathons trimestriels, "Ask Me Anything"
- **Conseil d'engagement**: Partager des exemples réels où la culture a influencé des décisions produit

## 4. Notre stack organisationnelle (10 min)
- Structure en squads et guildes plutôt qu'en hiérarchie traditionnelle
- Les équipes produit, tech, design, data et leur interaction
- Qui contacter pour quoi: notre wiki interne et canaux d'aide
- Comment les décisions sont prises: framework RACI et niveaux d'autonomie
- **Conseil d'engagement**: Utiliser une visualisation interactive de l'organisation

## 5. Comment nous travaillons (15 min)
- Notre méthodologie agile personnalisée
- Outils et stack technique: présentation rapide
- Cycles de développement et releases
- Politique de travail flexible: horaires, remote, bureaux
- Sécurité et confidentialité: nos pratiques essentielles
- **Conseil d'engagement**: Démonstration live de notre workflow sur un petit projet

## 6. Votre progression et croissance (10 min)
- Notre framework de progression technique/non-technique
- Formation continue: budget apprentissage, bibliothèque partagée, conférences
- Feedback: cycles réguliers, 360°, culture du feedback continu
- Mentorat et coaching disponibles
- **Conseil d'engagement**: Témoignages vidéo d'employés sur leur évolution

## 7. Votre intégration: les 90 premiers jours (15 min)
- Semaine 1: Onboarding technique, setup, premiers commits
- Jours 8-30: Premier projet "quick win", pairing avec différentes équipes
- Jours 31-60: Responsabilité accrue, contribution autonome
- Jours 61-90: Leadership sur un projet, feedback complet
- Votre buddy et son rôle
- **Conseil d'engagement**: Roadmap visuelle personnalisée pour chaque participant

## 8. Échange ouvert (20 min)
- Questions-réponses sans filtre
- Feedback sur la session d'onboarding
- Prochaines étapes immédiates

## Ressources à partager:
- Glossaire des termes internes et acronymes
- Carte des outils et accès
- Trombinoscope interactif
- Calendrier des événements à venir

**Format recommandé**: Présentation hybride avec slides minimalistes, démos live, et activités interactives. Durée totale: 2h avec pauses.`,
      },
      {
        title: "Version pour secteur public/administration",
        content: `# Structure de présentation d'onboarding - [Nom de l'institution publique]

## 1. Accueil institutionnel (20 min)
- Mot de bienvenue du directeur/de la directrice (vidéo préenregistrée si nécessaire)
- Tour de table des nouveaux arrivants: parcours et motivations
- Présentation des objectifs de la journée d'intégration
- Remise du kit d'accueil (guide du nouvel arrivant, organigramme, etc.)
- **Conseil d'engagement**: Inclure une brève vidéo montrant l'impact concret de l'institution sur les citoyens

## 2. Notre institution: mission de service public (25 min)
- Historique de l'institution: création et évolutions majeures
- Cadre légal et réglementaire: textes fondateurs et missions
- Place dans l'écosystème administratif et relations interinstitutionnelles
- Chiffres clés et réalisations marquantes des dernières années
- Grands projets et orientations stratégiques actuelles
- **Conseil d'engagement**: Utiliser des infographies claires pour illustrer la place de l'institution

## 3. Nos valeurs et notre culture de service (20 min)
- Les valeurs du service public: continuité, égalité, adaptabilité
- Valeurs spécifiques à notre institution: [valeurs spécifiques]
- Charte éthique et déontologie: principes fondamentaux
- Engagement qualité et relation aux usagers/citoyens
- Modernisation et innovation dans notre contexte
- **Conseil d'engagement**: Partager des témoignages d'agents sur des situations où ces valeurs ont guidé leur action

## 4. Organisation et gouvernance (30 min)
- Organigramme détaillé: directions, services, unités
- Circuits de décision et chaîne hiérarchique
- Instances de gouvernance et de dialogue
- Présentation des interlocuteurs clés pour les nouveaux arrivants
- Articulation siège/antennes territoriales (si applicable)
- **Conseil d'engagement**: Fournir un guide visuel "qui fait quoi" avec photos des responsables

## 5. Cadre de travail et procédures (40 min)
- Statuts et règlement intérieur
- Temps de travail, congés et absences
- Évaluation et avancement
- Outils informatiques et systèmes d'information
- Procédures administratives essentielles
- Sécurité et confidentialité des données
- **Conseil d'engagement**: Créer un aide-mémoire visuel des procédures les plus courantes

## 6. Développement professionnel (20 min)
- Offre de formation continue
- Mobilité interne et parcours professionnels
- Préparation aux concours
- Accompagnement et tutorat
- Dispositifs d'innovation participative
- **Conseil d'engagement**: Présenter des exemples concrets de parcours d'évolution au sein de l'institution

## 7. Vie pratique et collective (15 min)
- Services aux agents (restauration, parking, etc.)
- Action sociale et avantages
- Associations du personnel
- Événements et traditions
- Communication interne et externe
- **Conseil d'engagement**: Organiser une courte visite guidée des locaux et services communs

## 8. Votre parcours d'intégration (20 min)
- Programme détaillé des premières semaines
- Formations obligatoires et recommandées
- Rendez-vous d'étape avec le service RH
- Présentation du tuteur/référent désigné
- Évaluation de la période d'essai/stage
- **Conseil d'engagement**: Remettre un calendrier personnalisé d'intégration

## 9. Questions-réponses et conclusion (30 min)
- Temps d'échange ouvert
- Contacts utiles pour questions ultérieures
- Évaluation de la journée d'accueil
- Prochaines étapes

**Ressources à distribuer:**
- Guide du nouvel arrivant
- Annuaire des contacts clés
- Glossaire des acronymes et termes spécifiques
- Plan des locaux
- Charte informatique et guide des outils

**Format recommandé**: Présentation formelle mais interactive, avec supports imprimés et numériques, alternant présentations et temps d'échanges. Durée totale: journée complète avec pauses et déjeuner collectif.`,
      },
    ],
  },
]
