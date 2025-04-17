import type { Prompt } from "@/types/prompt"

export const talentManagementPrompts: Prompt[] = [
  {
    id: "talent-1",
    title: "Plan de développement des compétences",
    description: "Créer un plan de développement personnalisé pour un employé",
    content: `En tant que responsable du développement des talents, crée un plan de développement personnalisé pour un employé avec le profil suivant:
- Poste actuel: [POSTE]
- Expérience: [ANNÉES D'EXPÉRIENCE]
- Compétences fortes: [COMPÉTENCES FORTES]
- Compétences à développer: [COMPÉTENCES À DÉVELOPPER]
- Objectifs de carrière: [OBJECTIFS]

Le plan doit inclure:
1. Des objectifs d'apprentissage spécifiques
2. Des ressources et formations recommandées
3. Des projets ou missions pour mettre en pratique
4. Un calendrier sur 6 mois
5. Des indicateurs de progrès mesurables`,
    category: "talent-management",
    difficulty: 3,
    popularity: 92,
    tags: ["développement", "compétences", "carrière"],
    variants: [
      {
        id: "talent-1-v1",
        title: "Version leadership",
        content: `Crée un plan de développement axé sur les compétences de leadership pour un [POSTE] qui souhaite évoluer vers un rôle de management.`,
      },
    ],
  },
  {
    id: "talent-2",
    title: "Feedback constructif",
    description: "Formuler un feedback constructif pour un collaborateur",
    content: `Aide-moi à formuler un feedback constructif pour un collaborateur concernant [SITUATION/COMPORTEMENT]. 

Le feedback doit:
- Être spécifique et factuel
- Se concentrer sur le comportement, pas la personne
- Inclure l'impact de ce comportement
- Proposer des pistes d'amélioration concrètes
- Se terminer sur une note positive

Propose-moi deux versions: une pour un échange oral et une pour un email.`,
    category: "talent-management",
    difficulty: 2,
    popularity: 88,
    tags: ["feedback", "communication", "management"],
    variants: [
      {
        id: "talent-2-v1",
        title: "Feedback de performance",
        content: `Aide-moi à rédiger un feedback équilibré pour une évaluation annuelle de performance, mettant en lumière à la fois les réussites et les axes d'amélioration de [NOM] au poste de [POSTE].`,
      },
      {
        id: "talent-2-v2",
        title: "Feedback de recadrage",
        content: `Aide-moi à formuler un feedback de recadrage constructif suite à [SITUATION PROBLÉMATIQUE] avec un collaborateur, tout en préservant la relation de travail et en l'encourageant à s'améliorer.`,
      },
    ],
  },
  {
    id: "performance-review-template",
    title: "Template d'évaluation de performance",
    description: "Crée un template d'évaluation de performance complet et équilibré",
    difficulty: 2,
    category: "talent-management",
    popularity: 85,
    tags: ["évaluation", "performance", "template"],
    content: `En tant que spécialiste RH, crée un template d'évaluation de performance complet pour [poste/niveau] dans [secteur/industrie].

Le template doit inclure:

1. Informations générales
   - Données de l'employé et du manager
   - Période d'évaluation
   - Date de l'entretien

2. Évaluation des objectifs
   - Liste des objectifs fixés pour la période
   - Échelle d'évaluation (dépassé/atteint/partiellement atteint/non atteint)
   - Espace pour commentaires et exemples concrets

3. Évaluation des compétences
   - Compétences techniques spécifiques au poste
   - Compétences comportementales/soft skills
   - Échelle d'évaluation (1-5 avec descripteurs clairs)

4. Réalisations et défis
   - Principales réussites de la période
   - Défis rencontrés et solutions apportées

5. Plan de développement
   - Forces à capitaliser
   - Axes d'amélioration
   - Actions de développement proposées

6. Objectifs pour la période suivante
   - Nouveaux objectifs SMART
   - Indicateurs de mesure

7. Commentaires et signatures
   - Feedback global du manager
   - Auto-évaluation de l'employé
   - Espace pour signatures

Assure-toi que le template soit équilibré entre évaluation quantitative et qualitative, et qu'il encourage un dialogue constructif.`,
    variants: [
      {
        id: "performance-review-template-v1",
        title: "Version pour startup tech",
        content: `# ÉVALUATION DE PERFORMANCE & DÉVELOPPEMENT
## Startup Tech - Développeur Full Stack

### 1. INFORMATIONS GÉNÉRALES
**Collaborateur:** [Nom & Prénom]  
**Poste:** Développeur Full Stack  
**Niveau:** [Junior/Intermédiaire/Senior]  
**Manager:** [Nom & Prénom]  
**Période d'évaluation:** [Date début] à [Date fin]  
**Date de l'entretien:** [Date]

### 2. ÉVALUATION DES OKRs & PROJETS CLÉS

| Objectif / Projet | Mesures de succès | Résultat | Évaluation |
|-------------------|-------------------|----------|------------|
| [Objectif 1] | [Critères mesurables] | [Résultat obtenu] | ○ Dépassé ○ Atteint ○ Partiellement atteint ○ Non atteint |
| [Objectif 2] | [Critères mesurables] | [Résultat obtenu] | ○ Dépassé ○ Atteint ○ Partiellement atteint ○ Non atteint |
| [Objectif 3] | [Critères mesurables] | [Résultat obtenu] | ○ Dépassé ○ Atteint ○ Partiellement atteint ○ Non atteint |

**Impact business:**  
_Comment les contributions ont impacté les métriques de l'entreprise? (Croissance, rétention, performance, etc.)_

### 3. ÉVALUATION DES COMPÉTENCES TECHNIQUES

| Compétence | Niveau attendu | Auto-évaluation | Évaluation manager | Commentaires |
|------------|----------------|-----------------|-------------------|-------------|
| Frontend (React/Vue/etc.) | [1-5] | [1-5] | [1-5] | |
| Backend (Node/Python/etc.) | [1-5] | [1-5] | [1-5] | |
| Architecture système | [1-5] | [1-5] | [1-5] | |
| DevOps & CI/CD | [1-5] | [1-5] | [1-5] | |
| Tests & QA | [1-5] | [1-5] | [1-5] | |
| Sécurité | [1-5] | [1-5] | [1-5] | |

_Échelle: 1=Débutant, 2=En progression, 3=Compétent, 4=Avancé, 5=Expert_

### 4. COMPÉTENCES COMPORTEMENTALES & VALEURS

| Compétence | Description | Évaluation | Exemples concrets |
|------------|-------------|------------|-------------------|
| Ownership | Prend responsabilité des projets de A à Z | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |
| Agilité | S'adapte rapidement aux changements | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |
| Collaboration | Travaille efficacement en équipe | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |
| Communication | Communique clairement et proactivement | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |
| Innovation | Propose des solutions créatives | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |
| Apprentissage | Développe constamment ses compétences | ○ Exemplaire ○ Fort ○ Satisfaisant ○ À développer | |

### 5. RÉALISATIONS & CONTRIBUTIONS

**Top 3 des réalisations:**
1. 
2. 
3. 

**Contributions à la culture & à l'équipe:**
_Comment a contribué au-delà du code? (Mentorat, documentation, amélioration des processus, etc.)_

**Défis surmontés:**
_Obstacles majeurs rencontrés et comment ils ont été gérés_

### 6. PLAN DE DÉVELOPPEMENT

**Forces à capitaliser:**
1. 
2. 
3. 

**Axes d'amélioration:**
1. 
2. 
3. 

**Actions de développement:**

| Action | Ressources nécessaires | Timeline | Mesure de succès |
|--------|------------------------|----------|------------------|
| | | | |
| | | | |
| | | | |

### 7. OBJECTIFS POUR LA PROCHAINE PÉRIODE

| Objectif | Mesures de succès | Échéance | Alignement avec objectifs d'équipe/entreprise |
|----------|-------------------|----------|---------------------------------------------|
| | | | |
| | | | |
| | | | |

### 8. ÉVOLUTION DE CARRIÈRE

**Aspirations professionnelles:**
_Court terme (6-12 mois) et long terme (1-3 ans)_

**Parcours de progression envisagé:**
_Ex: Développeur Senior → Lead Developer → Engineering Manager / Architect_

**Compétences à développer pour la prochaine étape:**

### 9. FEEDBACK OUVERT

**Feedback du manager:**
_Points forts, axes d'amélioration, conseils spécifiques_

**Feedback du collaborateur:**
_Comment le manager/l'entreprise pourrait mieux soutenir sa réussite_

**Satisfaction globale:**
- Satisfaction du collaborateur: [1-10]
- Satisfaction du manager: [1-10]

### 10. CONCLUSION & SIGNATURES

**Évaluation globale:**  
○ Exceptionnel - Dépasse constamment les attentes  
○ Très performant - Dépasse souvent les attentes  
○ Performant - Répond pleinement aux attentes  
○ En développement - Répond partiellement aux attentes  
○ À améliorer - En dessous des attentes

**Prochaines étapes:**

**Date & Signatures:**

Collaborateur: ________________________ Date: __________

Manager: _____________________________ Date: __________

RH: __________________________________ Date: __________`,
      },
      {
        id: "performance-review-template-v2",
        title: "Version pour secteur bancaire",
        content: `# ÉVALUATION ANNUELLE DE PERFORMANCE
## Secteur Bancaire - [Poste]

### INFORMATIONS GÉNÉRALES
- **Collaborateur:** [Nom & Prénom]
- **Matricule:** [Numéro]
- **Département/Agence:** [Département/Agence]
- **Fonction:** [Fonction précise]
- **Ancienneté dans la fonction:** [X années/mois]
- **Supérieur hiérarchique:** [Nom & Fonction]
- **Période d'évaluation:** Du [Date] au [Date]

### OBJECTIFS QUANTITATIFS

| Objectif | Pondération | Cible | Résultat | Taux d'atteinte | Score pondéré |
|----------|-------------|-------|----------|-----------------|---------------|
| [Objectif commercial 1] | [X%] | [Valeur cible] | [Valeur atteinte] | [%] | [Score] |
| [Objectif commercial 2] | [X%] | [Valeur cible] | [Valeur atteinte] | [%] | [Score] |
| [Objectif de conformité] | [X%] | [Valeur cible] | [Valeur atteinte] | [%] | [Score] |
| [Objectif de qualité de service] | [X%] | [Valeur cible] | [Valeur atteinte] | [%] | [Score] |

**Score global objectifs quantitatifs:** [Score/5]

### COMPÉTENCES TECHNIQUES

| Compétence | Définition | Niveau attendu | Niveau évalué | Commentaires |
|------------|------------|----------------|---------------|-------------|
| Expertise produits bancaires | Maîtrise des produits et services, capacité à conseiller | [1-5] | [1-5] | |
| Analyse de risque | Évaluation pertinente des risques clients/opérations | [1-5] | [1-5] | |
| Conformité réglementaire | Application des procédures et réglementations | [1-5] | [1-5] | |
| Maîtrise des outils | Utilisation efficace des systèmes informatiques | [1-5] | [1-5] | |
| Gestion administrative | Rigueur dans le traitement des dossiers | [1-5] | [1-5] | |

**Score compétences techniques:** [Score/5]

### COMPÉTENCES COMPORTEMENTALES

| Compétence | Définition | Niveau attendu | Niveau évalué | Commentaires |
|------------|------------|----------------|---------------|-------------|
| Orientation client | Qualité de la relation et satisfaction client | [1-5] | [1-5] | |
| Éthique professionnelle | Respect des valeurs et de la déontologie | [1-5] | [1-5] | |
| Travail en équipe | Collaboration et partage d'information | [1-5] | [1-5] | |
| Communication | Clarté et pertinence des échanges | [1-5] | [1-5] | |
| Adaptabilité | Capacité à s'adapter aux changements | [1-5] | [1-5] | |

**Score compétences comportementales:** [Score/5]

### SYNTHÈSE DE LA PERFORMANCE

| Critère | Pondération | Score | Score pondéré |
|---------|-------------|-------|---------------|
| Objectifs quantitatifs | 50% | [Score/5] | [Score pondéré] |
| Compétences techniques | 30% | [Score/5] | [Score pondéré] |
| Compétences comportementales | 20% | [Score/5] | [Score pondéré] |

**Score global annuel:** [Score/5]

**Classification de la performance:**
□ A - Exceptionnel (4.5-5)
□ B - Supérieur aux attentes (3.5-4.4)
□ C - Conforme aux attentes (2.5-3.4)
□ D - Partiellement conforme (1.5-2.4)
□ E - En dessous des attentes (1-1.4)

### RÉALISATIONS MARQUANTES
_Principales contributions et succès durant la période évaluée_
1. 
2. 
3. 

### AXES DE DÉVELOPPEMENT

| Axe d'amélioration | Plan d'action | Ressources nécessaires | Échéance | Indicateurs de réussite |
|-------------------|---------------|------------------------|----------|------------------------|
| | | | | |
| | | | | |

### ÉVOLUTION PROFESSIONNELLE
**Aspirations du collaborateur:**

**Potentiel identifié:**
□ Mobilité horizontale vers: [Fonction/Département]
□ Évolution verticale vers: [Fonction]
□ Expertise dans le domaine actuel
□ Autre: [Préciser]

**Formations recommandées:**
1. 
2. 
3. 

### OBJECTIFS POUR LA PROCHAINE PÉRIODE

| Objectif | Indicateur de mesure | Cible | Pondération | Moyens alloués |
|----------|---------------------|-------|-------------|---------------|
| | | | | |
| | | | | |
| | | | | |

### COMMENTAIRES

**Commentaires de l'évaluateur:**

**Commentaires du collaborateur:**

### VALIDATION

Fait à [Lieu], le [Date]

Signatures:

Collaborateur: ________________________

Supérieur hiérarchique: ________________________

Responsable N+2: ________________________

Direction des Ressources Humaines: ________________________`,
      },
    ],
  },
  {
    id: "talent-3",
    title: "Entretien de recrutement",
    description: "Préparer des questions d'entretien pertinentes",
    content: `En tant que recruteur pour le poste de [INTITULÉ DU POSTE], aide-moi à préparer un guide d'entretien structuré.

Je souhaite évaluer les aspects suivants:
- Compétences techniques requises: [LISTE DES COMPÉTENCES]
- Soft skills essentielles: [LISTE DES SOFT SKILLS]
- Adéquation culturelle avec notre entreprise qui valorise [VALEURS DE L'ENTREPRISE]

Pour chaque aspect, propose:
1. 3-5 questions comportementales (basées sur des situations passées)
2. 1-2 questions de mise en situation
3. 1 exercice pratique ou étude de cas courte

Inclus également:
- Des conseils pour interpréter les réponses
- Une grille d'évaluation simple`,
    category: "talent-management",
    difficulty: 3,
    popularity: 90,
    tags: ["recrutement", "entretien", "questions"],
    variants: [
      {
        id: "talent-3-v1",
        title: "Version pour poste technique",
        content: `Prépare un guide d'entretien pour un poste de [INTITULÉ DU POSTE TECHNIQUE] avec un focus particulier sur l'évaluation des compétences techniques et la capacité à résoudre des problèmes complexes. Inclus des questions techniques spécifiques et un exercice de code ou de résolution de problème.`,
      },
    ],
  },
]
