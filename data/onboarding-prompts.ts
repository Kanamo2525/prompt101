import type { Prompt } from "@/types/prompt"

export const onboardingPrompts: Prompt[] = [
  {
    id: "onboarding-1",
    title: "Plan d'intégration personnalisé",
    description: "Créer un plan d'intégration adapté au profil du nouvel employé",
    content: `En tant que responsable RH, crée un plan d'intégration personnalisé pour un nouvel employé avec le profil suivant:
- Poste: [POSTE]
- Expérience: [ANNÉES D'EXPÉRIENCE]
- Compétences: [COMPÉTENCES PRINCIPALES]
- Équipe: [ÉQUIPE D'AFFECTATION]

Le plan doit couvrir:
1. Les étapes clés de la première semaine
2. Les formations nécessaires
3. Les personnes à rencontrer
4. Les objectifs à 30, 60 et 90 jours`,
    category: "onboarding",
    difficulty: 2,
    popularity: 85,
    tags: ["intégration", "nouveau collaborateur", "plan"],
    variants: [
      {
        id: "onboarding-1-v1",
        title: "Version courte",
        content: `Crée un plan d'intégration concis pour un nouveau [POSTE] rejoignant notre équipe [ÉQUIPE].`,
      },
      {
        id: "onboarding-1-v2",
        title: "Version détaillée",
        content: `En tant qu'expert en ressources humaines, élabore un plan d'intégration détaillé sur 90 jours pour un nouveau [POSTE] avec [ANNÉES] d'expérience rejoignant notre équipe [ÉQUIPE]. Inclus un calendrier jour par jour pour la première semaine, puis semaine par semaine pour les 3 mois suivants.`,
      },
    ],
  },
  {
    id: "onboarding-2",
    title: "FAQ pour nouveaux employés",
    description: "Générer une FAQ complète pour les nouveaux arrivants",
    content: `Crée une FAQ complète pour les nouveaux employés rejoignant notre entreprise. La FAQ doit couvrir:
- Les procédures administratives
- L'accès aux outils et systèmes
- Les politiques de l'entreprise
- Les avantages sociaux
- La culture d'entreprise
- Les questions pratiques (parking, restauration, etc.)

Organise les questions par catégorie et assure-toi que les réponses sont claires et concises.`,
    category: "onboarding",
    difficulty: 1,
    popularity: 78,
    tags: ["FAQ", "questions fréquentes", "nouveaux employés"],
    variants: [
      {
        id: "onboarding-2-v1",
        title: "Version technique",
        content: `Crée une FAQ technique pour les nouveaux employés concernant tous nos outils informatiques et systèmes, incluant les procédures d'accès et de dépannage courant.`,
      },
    ],
  },
]
