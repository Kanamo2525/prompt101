import type React from "react"
import {
  BookOpen,
  Code,
  FileText,
  Lightbulb,
  Sparkles,
  Layers,
  Brain,
  Repeat,
  UserCircle2,
  Database,
} from "lucide-react"

export interface PromptingMethod {
  id: string
  title: string
  shortDescription: string
  difficulty: "Facile" | "Intermédiaire" | "Avancé" | "Modéré" | "Complexe"
  tags?: string[]
  description: string
  howToUse?: string
  examples:
    | string[]
    | {
        good: string
        bad?: string
      }[]
  tips?: string[]
  useCases?: string[]
  relatedMethods?: string[]
  icon?: React.ReactNode
}

export const promptingMethods: PromptingMethod[] = [
  {
    id: "zero-shot",
    title: "Zero-Shot Prompting",
    shortDescription: "Demander directement sans exemple",
    description:
      "Cette technique consiste à formuler une instruction claire sans fournir d'exemple. Elle est idéale pour des tâches simples et bien définies.",
    difficulty: "Facile",
    icon: <Lightbulb className="h-5 w-5 text-yellow-500" />,
    examples: [
      "Explique-moi le concept de l'intelligence artificielle en termes simples.",
      "Quels sont les avantages et inconvénients du télétravail?",
    ],
  },
  {
    id: "one-shot",
    title: "One-Shot Prompting",
    shortDescription: "Fournir un exemple unique",
    description:
      "Cette approche consiste à donner un seul exemple pour guider le modèle. Elle améliore la précision pour des tâches modérément complexes.",
    difficulty: "Facile",
    icon: <BookOpen className="h-5 w-5 text-blue-500" />,
    examples: [
      "Exemple: Question: Quelle est la capitale de la France? Réponse: La capitale de la France est Paris.\n\nQuestion: Quelle est la capitale du Japon? Réponse:",
    ],
  },
  {
    id: "few-shot",
    title: "Few-Shot Prompting",
    shortDescription: "Fournir plusieurs exemples",
    description:
      "Cette méthode consiste à donner plusieurs exemples pour aider le modèle à comprendre le format et le style de réponse attendus.",
    difficulty: "Modéré",
    icon: <Sparkles className="h-5 w-5 text-amber-500" />,
    examples: [
      "Classifie le sentiment: 'J'adore ce produit!' → Positif\n'Ce service est terrible.' → Négatif\n'Le film était correct.' → Neutre\n'Cette expérience m'a déçu.' →",
    ],
  },
  {
    id: "chain-of-thought",
    title: "Chain-of-Thought",
    shortDescription: "Raisonnement étape par étape",
    description:
      "Cette technique encourage le modèle à décomposer son raisonnement en étapes logiques, ce qui améliore la précision pour les problèmes complexes.",
    difficulty: "Modéré",
    icon: <Code className="h-5 w-5 text-purple-500" />,
    examples: [
      "Jean a 5 pommes. Il en donne 2 à Marie et en achète 3 de plus. Combien de pommes Jean a-t-il maintenant? Réfléchis étape par étape.",
    ],
  },
  {
    id: "least-to-most",
    title: "Least-to-Most Prompting",
    shortDescription: "Décomposer en sous-problèmes",
    description:
      "Cette approche consiste à décomposer un problème complexe en sous-problèmes plus simples et à les résoudre séquentiellement.",
    difficulty: "Complexe",
    icon: <Layers className="h-5 w-5 text-green-500" />,
    examples: [
      "Pour résoudre l'équation 3x + 7 = 22, procède étape par étape:\n1. Identifie ce que tu cherches.\n2. Isole x d'un côté de l'équation.\n3. Résous pour trouver la valeur de x.",
    ],
  },
  {
    id: "expert-role-playing",
    title: "Expert Role-Playing",
    shortDescription: "Adopter un rôle d'expert",
    description:
      "Cette technique consiste à demander au modèle d'adopter le rôle d'un expert dans un domaine spécifique pour obtenir des réponses plus précises et pertinentes.",
    difficulty: "Modéré",
    icon: <UserCircle2 className="h-5 w-5 text-indigo-500" />,
    examples: [
      "En tant qu'expert en cybersécurité, explique les meilleures pratiques pour protéger une petite entreprise contre les cyberattaques.",
    ],
  },
  {
    id: "contextual-augmentation",
    title: "Contextual Augmentation",
    shortDescription: "Enrichir le contexte",
    description:
      "Cette méthode consiste à enrichir le prompt avec des informations contextuelles pertinentes pour obtenir des réponses plus précises et adaptées.",
    difficulty: "Complexe",
    icon: <Brain className="h-5 w-5 text-red-500" />,
    examples: [
      "Contexte: Je suis un développeur web débutant qui utilise principalement JavaScript et React.\n\nQuestion: Quelles sont les meilleures pratiques pour optimiser les performances de mon application?",
    ],
  },
  {
    id: "iterative-prompting",
    title: "Iterative Prompting",
    shortDescription: "Affiner progressivement",
    description:
      "Cette approche consiste à affiner progressivement les prompts en fonction des réponses obtenues pour converger vers le résultat souhaité.",
    difficulty: "Complexe",
    icon: <Repeat className="h-5 w-5 text-cyan-500" />,
    examples: [
      "Itération 1: Écris un court paragraphe sur l'intelligence artificielle.\nItération 2: Maintenant, développe ce paragraphe en te concentrant sur les applications pratiques de l'IA dans la vie quotidienne.",
    ],
  },
  {
    id: "multi-prompting",
    title: "Multi-Prompting",
    shortDescription: "Combiner plusieurs techniques",
    description:
      "Cette technique avancée consiste à combiner plusieurs approches de prompting pour résoudre des problèmes particulièrement complexes ou multidimensionnels.",
    difficulty: "Complexe",
    icon: <FileText className="h-5 w-5 text-orange-500" />,
    examples: [
      "En tant qu'expert financier (role-playing), analyse étape par étape (chain-of-thought) la situation suivante: Une entreprise avec un chiffre d'affaires de 2M€ et des coûts fixes de 800K€ envisage un investissement de 500K€. Quel serait l'impact sur sa rentabilité à court et long terme?",
    ],
  },
  {
    id: "generated-knowledge",
    title: "Generated Knowledge",
    shortDescription: "L'IA active d'abord ses connaissances",
    description:
      "Cette technique consiste à demander au modèle de générer d'abord des connaissances ou informations utiles sur un sujet, avant de formuler sa réponse finale.",
    difficulty: "Avancé",
    icon: <Database className="h-5 w-5 text-emerald-500" />,
    examples: [
      "Avant de répondre à ma question, liste d'abord les principales tendances et évolutions récentes en matière d'énergie renouvelable. Ensuite, en te basant sur ces connaissances, explique comment une PME du secteur industriel pourrait réduire son empreinte carbone tout en maîtrisant ses coûts énergétiques.",
    ],
    tips: [
      "Soyez précis sur les connaissances demandées",
      "Vérifiez les connaissances générées avant de les utiliser",
      "Structurez votre demande en deux parties distinctes",
      "Adaptez la complexité selon la question",
      "Utilisez l'interaction en deux temps pour un contrôle intermédiaire",
    ],
    useCases: [
      "Analyse stratégique et veille concurrentielle",
      "Préparation de formations et contenus pédagogiques",
      "Rédaction d'articles et de livres blancs",
      "Analyse de marché et études d'opportunité",
    ],
    relatedMethods: ["contextual-augmentation", "chain-of-thought"],
  },
]
