import type { Prompt } from "@/types/prompt"

export const onboardingPrompts: Prompt[] = [
  {
    id: "onboarding-introduction",
    title: "Introduction à l'IA pour les RH",
    description: "Un prompt pour comprendre comment l'IA peut transformer les processus RH",
    text: `Je suis un professionnel RH qui souhaite comprendre comment l'IA peut transformer mes processus quotidiens. Pouvez-vous m'expliquer de manière simple et concrète :
1. Les 5 principaux cas d'usage de l'IA générative dans les RH
2. Les avantages et limites de l'IA pour chaque cas d'usage
3. Les précautions éthiques à prendre lors de l'utilisation de l'IA en RH
4. Des conseils pratiques pour commencer à intégrer l'IA dans mon département RH

Merci de structurer votre réponse de manière claire et accessible, avec des exemples concrets pour chaque point.`,
    example: `L'IA générative peut transformer les RH de plusieurs façons :

1. **Recrutement et présélection des candidats**
   - *Avantages* : Analyse rapide de centaines de CV, réduction des biais inconscients, gain de temps considérable
   - *Limites* : Risque de reproduire des biais présents dans les données d'entraînement, difficulté à évaluer les soft skills
   - *Exemple concret* : Utilisation de l'IA pour rédiger des descriptions de poste inclusives et attrayantes

2. **Onboarding personnalisé**
   - *Avantages* : Création de parcours d'intégration adaptés au profil du nouvel employé, disponibilité 24/7
   - *Limites* : Manque de chaleur humaine, nécessité de compléter par des interactions réelles
   - *Exemple concret* : Chatbot qui répond aux questions fréquentes des nouveaux employés

3. **Formation et développement des compétences**
   - *Avantages* : Recommandations de formations personnalisées, création de contenu pédagogique adapté
   - *Limites* : Difficulté à évaluer la qualité de l'apprentissage, besoin d'expertise humaine pour les compétences complexes
   - *Exemple concret* : Génération de quiz et exercices pratiques adaptés au niveau de chaque employé

4. **Analyse prédictive RH**
   - *Avantages* : Identification précoce des risques de turnover, optimisation de la gestion des talents
   - *Limites* : Qualité dépendante des données disponibles, risque de surinterprétation
   - *Exemple concret* : Prédiction des besoins en recrutement basée sur les tendances historiques et projets futurs

5. **Automatisation des tâches administratives**
   - *Avantages* : Libération de temps pour des tâches à valeur ajoutée, réduction des erreurs
   - *Limites* : Besoin de supervision humaine, résistance au changement
   - *Exemple concret* : Génération automatique de réponses aux questions fréquentes des employés sur les politiques RH

**Précautions éthiques :**
- Assurer la transparence sur l'utilisation de l'IA
- Maintenir une supervision humaine des décisions importantes
- Vérifier régulièrement les biais potentiels
- Respecter la confidentialité des données des employés
- Former les équipes RH à l'utilisation éthique de l'IA

**Conseils pour démarrer :**
1. Identifiez les tâches répétitives qui consomment beaucoup de temps
2. Commencez par des projets pilotes à petite échelle
3. Mesurez les résultats et ajustez votre approche
4. Formez votre équipe aux nouvelles technologies
5. Communiquez clairement avec les employés sur l'utilisation de l'IA`,
    difficulty: 1,
    technique: "zero-shot",
    category: {
      id: "onboarding",
      title: "Onboarding IA",
      description: "Premiers pas avec l'IA pour les professionnels RH",
      color: "#3498db",
      icon: "BookOpen",
    },
    tags: ["introduction", "IA", "RH", "transformation digitale"],
    tips: [
      "Adaptez ce prompt à votre secteur spécifique pour des exemples plus pertinents",
      "Demandez des études de cas réelles pour mieux comprendre les applications pratiques",
      "Précisez votre niveau de connaissance en IA pour obtenir une réponse adaptée",
    ],
    variants: [
      {
        title: "Version pour débutants complets",
        text: "Je n'ai aucune connaissance en IA et je travaille dans les RH. Pouvez-vous m'expliquer très simplement, comme si j'avais 10 ans, comment l'IA peut m'aider dans mon travail quotidien ? Utilisez des métaphores simples et des exemples très concrets.",
      },
      {
        title: "Version pour PME",
        text: "Je dirige une PME de 50 employés avec des ressources limitées. Comment l'IA générative pourrait-elle aider mon unique responsable RH à être plus efficace ? Quelles solutions abordables et faciles à mettre en œuvre recommanderiez-vous ?",
      },
    ],
    relatedPrompts: ["talent-management-performance", "recruitment-job-description", "training-learning-path"],
  },
  {
    id: "onboarding-first-prompt",
    title: "Créer son premier prompt RH",
    description: "Apprenez à rédiger un prompt efficace pour une tâche RH spécifique",
    text: `Je souhaite apprendre à rédiger mon premier prompt efficace pour une tâche RH. Je suis débutant dans l'utilisation de l'IA générative.

Voici la tâche que je souhaite accomplir : [DÉCRIVEZ VOTRE TÂCHE RH SPÉCIFIQUE, par exemple "rédiger une description de poste pour un développeur full-stack"].

Pouvez-vous :
1. Me montrer comment structurer un prompt efficace pour cette tâche
2. M'expliquer chaque élément de la structure et pourquoi il est important
3. Me donner 3 exemples de formulations différentes pour ce même prompt
4. Me fournir des conseils pour améliorer mes prompts à l'avenir

Merci de rendre votre explication accessible à un débutant.`,
    example: `Pour votre tâche "rédiger une description de poste pour un développeur full-stack", voici comment structurer un prompt efficace :

**Structure recommandée pour votre prompt :**

- **Rôle :** Définissez clairement le rôle que vous voulez que l'IA joue. _Exemple : "Agis comme un expert en recrutement..."_
- **Tâche :** Décrivez précisément la tâche à accomplir. _Exemple : "...rédige une description de poste..."_
- **Contexte :** Fournissez le contexte nécessaire. _Exemple : "...pour un développeur full-stack..."_
- **Format :** Indiquez le format de la réponse souhaitée. _Exemple : "...en utilisant une liste à puces..."_
- **Style :** Précisez le style d'écriture. _Exemple : "...sur un ton professionnel et engageant..."_
- **Contraintes :** Ajoutez des contraintes si nécessaire. _Exemple : "...en moins de 200 mots..."_

**Explication de chaque élément :**

- **Rôle :** L'IA adapte son comportement en fonction du rôle que vous lui donnez.
- **Tâche :** Une description précise de la tâche évite les ambiguïtés.
- **Contexte :** Le contexte aide l'IA à comprendre les spécificités de votre besoin.
- **Format :** Le format facilite la lecture et l'utilisation de la réponse.
- **Style :** Le style permet d'adapter la réponse à votre public cible.
- **Contraintes :** Les contraintes aident à contrôler la longueur et le contenu de la réponse.

**3 exemples de formulations différentes :**

1. "En tant qu'expert en recrutement, rédige une description de poste attractive pour un développeur full-stack, en mettant en avant les compétences clés et les avantages de l'entreprise."
2. "Crée une description de poste détaillée pour un développeur full-stack, en listant les responsabilités, les qualifications requises et la culture de l'entreprise. Adopte un style professionnel et concis."
3. "Rédige une offre d'emploi pour un développeur full-stack, en insistant sur les projets innovants et les opportunités de développement professionnel. Utilise un ton dynamique et motivant."

**Conseils pour améliorer vos prompts :**

- **Soyez précis :** Plus votre description est détaillée, meilleure sera la réponse.
- **Expérimentez :** Testez différentes formulations pour voir ce qui fonctionne le mieux.
- **Itérez :** Affinez vos prompts en fonction des résultats obtenus.
- **Utilisez des exemples :** Fournissez des exemples de ce que vous attendez pour guider l'IA.
- **Définissez un persona :** Demandez à l'IA d'adopter un rôle spécifique pour influencer le style et le contenu.`,
    difficulty: 2,
    technique: "meta-prompting",
    category: {
      id: "onboarding",
      title: "Onboarding IA",
      description: "Premiers pas avec l'IA pour les professionnels RH",
      color: "#3498db",
      icon: "BookOpen",
    },
    tags: ["prompting", "IA", "RH", "débutant"],
    tips: [
      "Commencez par des prompts simples et ajoutez progressivement des détails",
      "N'hésitez pas à demander à l'IA de vous aider à améliorer vos prompts",
      "Consultez des exemples de prompts RH pour vous inspirer",
    ],
    variants: [
      {
        title: "Version pour une tâche de communication interne",
        text: `Je souhaite apprendre à rédiger mon premier prompt efficace pour une tâche de communication interne. Je suis débutant dans l'utilisation de l'IA générative.

Voici la tâche que je souhaite accomplir : [DÉCRIVEZ VOTRE TÂCHE DE COMMUNICATION INTERNE SPÉCIFIQUE, par exemple "rédiger un email annonçant un changement de politique de télétravail"].

Pouvez-vous :
1. Me montrer comment structurer un prompt efficace pour cette tâche
2. M'expliquer chaque élément de la structure et pourquoi il est important
3. Me donner 3 exemples de formulations différentes pour ce même prompt
4. Me fournir des conseils pour améliorer mes prompts à l'avenir

Merci de rendre votre explication accessible à un débutant.`,
      },
      {
        title: "Version pour une tâche d'analyse de données RH",
        text: `Je souhaite apprendre à rédiger mon premier prompt efficace pour une tâche d'analyse de données RH. Je suis débutant dans l'utilisation de l'IA générative.

Voici la tâche que je souhaite accomplir : [DÉCRIVEZ VOTRE TÂCHE D'ANALYSE DE DONNÉES RH SPÉCIFIQUE, par exemple "identifier les principales raisons du turnover dans mon entreprise à partir d'un fichier CSV"].

Pouvez-vous :
1. Me montrer comment structurer un prompt efficace pour cette tâche
2. M'expliquer chaque élément de la structure et pourquoi il est important
3. Me donner 3 exemples de formulations différentes pour ce même prompt
4. Me fournir des conseils pour améliorer mes prompts à l'avenir

Merci de rendre votre explication accessible à un débutant.`,
      },
    ],
    relatedPrompts: ["onboarding-introduction", "recruitment-job-description", "training-learning-path"],
  },
  {
    id: "onboarding-checklist",
    title: "Checklist d'intégration personnalisée",
    description: "Créez une checklist d'intégration complète et personnalisée pour les nouveaux employés.",
    text: `Crée une checklist d'intégration détaillée pour un nouveau [poste] dans notre entreprise [secteur d'activité]. 
    
La checklist doit couvrir les éléments suivants :
1. Préparation avant l'arrivée (documents, équipement, accès)
2. Premier jour (accueil, présentations, formation initiale)
3. Première semaine (formations, rencontres clés, objectifs)
4. Premier mois (projets initiaux, feedback, alignement des attentes)
5. Fin de période d'essai (évaluation, feedback, ajustements)

Pour chaque section, inclus :
- Les tâches spécifiques à accomplir
- La personne responsable
- Les ressources nécessaires
- Les délais recommandés

Adapte la checklist aux spécificités du poste et de notre secteur d'activité.`,
    example: `Checklist d'intégration pour un Développeur Full-Stack dans une startup EdTech

## AVANT L'ARRIVÉE (J-7)
- **Préparer l'environnement de travail**
  * Configuration du poste de travail avec double écran _(Responsable IT, J-3)_
  * Installation des logiciels nécessaires: VS Code, Docker, Git, Slack _(Responsable IT, J-2)_
  * Création des accès: email, Slack, GitHub, Jira, AWS _(Responsable IT, J-2)_
- **Préparer le parcours d'intégration**
  * Planifier les réunions d'introduction avec l'équipe _(Manager, J-5)_
  * Assigner un mentor technique _(CTO, J-7)_
  * Préparer la documentation technique pertinente _(Lead Developer, J-3)_
- **Administratif**
  * Envoyer le contrat signé au service RH _(RH, J-7)_
  * Finaliser les documents d'embauche _(RH, J-5)_
  * Préparer le kit de bienvenue _(Office Manager, J-2)_

## PREMIER JOUR
- **Accueil**
  * Accueil par le manager et visite des locaux _(Manager, 9h00)_
  * Remise du kit de bienvenue _(Office Manager, 9h30)_
  * Petit-déjeuner avec l'équipe _(Équipe, 10h00)_
- **Setup technique**
  * Configuration du poste de travail _(Mentor, 11h00)_
  * Vérification des accès aux différents outils _(Mentor, 11h30)_
  * Installation de l'environnement de développement local _(Mentor, 14h00)_
- **Introduction au projet**
  * Présentation de l'architecture technique _(Lead Developer, 15h00)_
  * Accès à la documentation du projet _(Mentor, 16h00)_
  * Explication des processus de développement et de déploiement _(DevOps, 16h30)_

## PREMIÈRE SEMAINE
- **Formations**
  * Formation sur l'architecture du produit _(Jour 2, Lead Developer)_
  * Formation sur les méthodes de travail agiles _(Jour 2, Scrum Master)_
  * Formation sur les bonnes pratiques de code _(Jour 3, Senior Developer)_
- **Rencontres clés**
  * Rencontre avec le Product Owner _(Jour 2, 14h00)_
  * Rencontre avec l'équipe UX/UI _(Jour 3, 11h00)_
  * Rencontre avec l'équipe QA _(Jour 4, 14h00)_
- **Premiers pas techniques**
  * Résolution d'un bug simple _(Jour 3-4, avec Mentor)_
  * Revue de code avec l'équipe _(Jour 5, 14h00)_
  * Participation au daily stand-up _(Tous les jours, 9h30)_

## PREMIER MOIS
- **Projets initiaux**
  * Développement d'une fonctionnalité mineure _(Semaine 2)_
  * Participation à la planification du sprint _(Semaine 2, Jour 1)_
  * Contribution à la documentation technique _(Semaine 3)_
- **Feedback et alignement**
  * Point hebdomadaire avec le manager _(Chaque vendredi, 16h00)_
  * Session de feedback avec le mentor _(Fin semaine 2)_
  * Auto-évaluation des compétences et besoins de formation _(Fin semaine 3)_
- **Intégration à l'équipe**
  * Présentation d'un sujet technique lors du knowledge sharing _(Semaine 4)_
  * Participation aux événements sociaux de l'entreprise _(Selon calendrier)_
  * Contribution aux rétrospectives de sprint _(Selon calendrier)_

## FIN DE PÉRIODE D'ESSAI (3 MOIS)
- **Évaluation**
  * Entretien d'évaluation avec le manager _(Manager, J-7 avant fin période)_
  * Feedback 360° de l'équipe _(RH, J-14 avant fin période)_
  * Auto-évaluation des objectifs fixés _(Développeur, J-10 avant fin période)_
- **Ajustements**
  * Définition du plan de développement personnel _(Manager & Développeur)_
  * Ajustement des responsabilités si nécessaire _(Manager)_
  * Fixation des objectifs pour les 6 prochains mois _(Manager & Développeur)_
- **Confirmation**
  * Entretien de confirmation _(Manager & RH)_
  * Mise à jour du statut dans les systèmes RH _(RH)_
  * Célébration avec l'équipe _(Équipe)_`,
    difficulty: 2,
    technique: "Zero-shot",
    category: {
      id: "onboarding",
      title: "Onboarding",
      description: "Prompts pour faciliter l'intégration des nouveaux employés",
      color: "#4CAF50",
      icon: "UserPlus",
    },
    tags: ["intégration", "checklist", "nouveaux employés", "RH"],
    tips: [
      "Soyez spécifique sur le poste et le secteur d'activité pour obtenir une checklist pertinente",
      "Ajoutez des détails sur la culture d'entreprise pour personnaliser davantage",
      "Précisez si vous avez des outils ou processus spécifiques à inclure",
      "Demandez des suggestions pour mesurer le succès de l'intégration",
    ],
    variants: [
      {
        title: "Version pour poste à distance",
        text: `Crée une checklist d'intégration détaillée pour un nouveau [poste] travaillant à 100% en télétravail dans notre entreprise [secteur d'activité].

La checklist doit couvrir les éléments suivants, adaptés au travail à distance :
1. Préparation avant l'arrivée (envoi d'équipement, accès virtuels)
2. Premier jour (accueil virtuel, présentations en ligne, formation initiale)
3. Première semaine (formations virtuelles, rencontres clés par visioconférence)
4. Premier mois (projets initiaux, feedback virtuel, alignement des attentes)
5. Fin de période d'essai (évaluation à distance, feedback, ajustements)

Pour chaque section, inclus :
- Les tâches spécifiques à accomplir
- La personne responsable
- Les outils de collaboration à distance nécessaires
- Les délais recommandés
- Des conseils pour maintenir l'engagement et éviter l'isolement

Adapte la checklist aux spécificités du poste et de notre secteur d'activité.`,
      },
      {
        title: "Version internationale",
        text: `Crée une checklist d'intégration détaillée pour un nouveau [poste] dans notre entreprise internationale [secteur d'activité], tenant compte des différences culturelles et des fuseaux horaires.

La checklist doit couvrir les éléments suivants :
1. Préparation avant l'arrivée (documents, équipement, accès, visa si nécessaire)
2. Premier jour (accueil adapté culturellement, présentations, formation initiale)
3. Première semaine (formations, rencontres clés adaptées aux fuseaux horaires)
4. Premier mois (projets initiaux, feedback, alignement des attentes)
5. Fin de période d'essai (évaluation, feedback, ajustements)

Pour chaque section, inclus :
- Les tâches spécifiques à accomplir
- La personne responsable
- Les ressources nécessaires, y compris les ressources multilingues
- Les délais recommandés
- Des considérations culturelles spécifiques

Adapte la checklist aux spécificités du poste, de notre secteur d'activité et du pays d'origine de l'employé.`,
      },
    ],
    relatedPrompts: [
      {
        id: "onboarding-welcome-email",
        title: "Email de bienvenue personnalisé",
        description: "Créez un email de bienvenue chaleureux pour les nouveaux employés",
      },
      {
        id: "onboarding-training-plan",
        title: "Plan de formation initial",
        description: "Développez un plan de formation structuré pour les 90 premiers jours",
      },
    ],
  },
  {
    id: "onboarding-welcome-email",
    title: "Email de bienvenue personnalisé",
    description: "Créez un email de bienvenue chaleureux pour les nouveaux employés.",
    text: `Rédige un email de bienvenue chaleureux et informatif pour [prénom], qui rejoint notre équipe en tant que [poste] le [date de début]. 

L'email doit inclure :
1. Un message de bienvenue personnalisé
2. Une brève présentation de notre entreprise et de nos valeurs
3. Ce à quoi ils peuvent s'attendre lors de leur premier jour (horaire, lieu/lien de connexion, personne à contacter)
4. Les documents ou informations qu'ils doivent apporter ou préparer
5. Des informations pratiques (code vestimentaire, parking, restauration, etc.)
6. Un mot d'encouragement final

Utilise un ton chaleureux et enthousiaste qui reflète notre culture d'entreprise [décrire brièvement la culture].`,
    example: `Objet : Bienvenue dans l'équipe, Thomas ! Nous sommes ravis de vous accueillir !

Bonjour Thomas,

C'est avec un immense plaisir que je vous souhaite officiellement la bienvenue au sein de l'équipe Marketing de TechInnovate ! Nous sommes tous très enthousiastes à l'idée de vous accueillir parmi nous le lundi 15 mars et de commencer cette nouvelle aventure ensemble.

**À propos de TechInnovate**
Fondée en 2015, notre entreprise s'est donnée pour mission de rendre la technologie accessible à tous. Nos valeurs fondamentales - innovation, collaboration et impact positif - guident chacune de nos actions. Votre expertise en marketing digital sera un atout précieux pour nous aider à atteindre nos objectifs ambitieux cette année.

**Votre premier jour**
Lundi prochain, nous vous attendons à 9h30 à notre siège social (25 rue de l'Innovation, 75008 Paris). Marie, votre responsable d'équipe, vous accueillera dans le hall d'entrée. La journée se terminera vers 17h30, après une session d'introduction et quelques rencontres avec vos nouveaux collègues.

**Ce qu'il faut apporter**
- Une pièce d'identité pour finaliser votre badge d'accès
- Votre RIB pour la mise en place de la paie
- Votre ordinateur portable vous sera remis dès votre arrivée

**Informations pratiques**
- Code vestimentaire : décontracté (nous privilégions le confort !)
- Parking : des places sont disponibles au niveau -1 (indiquez votre nom à l'agent de sécurité)
- Restauration : notre cafétéria propose des repas variés, mais il y a également plusieurs restaurants à proximité

**Avant votre arrivée**
N'hésitez pas à consulter notre site web et nos réseaux sociaux pour vous familiariser davantage avec notre entreprise. Vous pouvez également préparer vos questions pour votre session d'intégration.

Thomas, nous sommes convaincus que votre créativité et votre expérience seront des atouts majeurs pour notre équipe. Nous avons hâte de voir les idées innovantes que vous apporterez et l'impact que vous aurez sur nos projets.

Si vous avez des questions avant lundi, n'hésitez pas à me contacter par email ou par téléphone au 06 XX XX XX XX.

À très bientôt !

Cordialement,

Sophie Martin
Responsable des Ressources Humaines
TechInnovate
sophie.martin@techinnovate.fr
06 XX XX XX XX`,
    difficulty: 1,
    technique: "Zero-shot",
    category: {
      id: "onboarding",
      title: "Onboarding",
      description: "Prompts pour faciliter l'intégration des nouveaux employés",
      color: "#4CAF50",
      icon: "UserPlus",
    },
    tags: ["email", "bienvenue", "intégration", "communication"],
    tips: [
      "Personnalisez le message en fonction du poste et du niveau d'expérience du nouvel employé",
      "Adaptez le ton à la culture de votre entreprise (formel, décontracté, etc.)",
      "Incluez des détails spécifiques sur votre entreprise pour rendre le message plus authentique",
      "Ajoutez des liens vers des ressources utiles (plan d'accès, intranet, etc.)",
    ],
    variants: [
      {
        title: "Version pour travail à distance",
        text: `Rédige un email de bienvenue chaleureux et informatif pour [prénom], qui rejoint notre équipe en télétravail en tant que [poste] le [date de début]. 

L'email doit inclure :
1. Un message de bienvenue personnalisé
2. Une brève présentation de notre entreprise et de nos valeurs
3. Ce à quoi ils peuvent s'attendre lors de leur premier jour virtuel (horaire, liens de connexion, personne à contacter)
4. Les outils et logiciels qu'ils devront utiliser (avec liens d'installation si nécessaire)
5. Comment se connecter aux systèmes de l'entreprise à distance
6. Des conseils pour bien démarrer en télétravail
7. Un mot d'encouragement final

Utilise un ton chaleureux et enthousiaste qui reflète notre culture d'entreprise [décrire brièvement la culture].`,
      },
      {
        title: "Version pour stagiaire",
        text: `Rédige un email de bienvenue chaleureux et rassurant pour [prénom], qui rejoint notre équipe en tant que stagiaire [domaine du stage] le [date de début]. 

L'email doit inclure :
1. Un message de bienvenue personnalisé adapté à un jeune professionnel
2. Une brève présentation de notre entreprise et de nos valeurs
3. Ce à quoi ils peuvent s'attendre lors de leur premier jour (horaire, lieu, personne à contacter)
4. Les documents ou informations qu'ils doivent apporter
5. Des informations pratiques (code vestimentaire, parking, restauration, etc.)
6. Des conseils pour réussir leur stage
7. Un mot d'encouragement final qui les rassure

Utilise un ton chaleureux, encourageant et inclusif qui reflète notre culture d'entreprise [décrire brièvement la culture].`,
      },
    ],
    relatedPrompts: [
      {
        id: "onboarding-checklist",
        title: "Checklist d'intégration personnalisée",
        description: "Créez une checklist d'intégration complète pour les nouveaux employés",
      },
      {
        id: "onboarding-training-plan",
        title: "Plan de formation initial",
        description: "Développez un plan de formation structuré pour les 90 premiers jours",
      },
    ],
  },
]
