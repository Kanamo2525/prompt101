"use client"

import { useState, useEffect } from "react"
import { Lightbulb, Info, Plus, X, Check, HelpCircle, ChevronRight, ChevronDown, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Types
type PromptType = "automatisation" | "avant-garde" | "assistance" | "augmentation" | ""
type PromptTechnique =
  | "zero-shot"
  | "one-shot"
  | "few-shot"
  | "chain-of-thought"
  | "rct"
  | "multi-prompting"
  | "expert-role"
  | "iterative"
  | "generated-knowledge"
  | "contextual-augmentation"
  | "template-filling"
  | ""

interface Ingredient {
  id: "task" | "context" | "steps" | "specifications" | "examples" | "persona" | "inputs" | "format"
  label: string
  description: string
  content: string
  selected: boolean
}

type DecisionTreeNode = {
  id: string
  question: string
  options: {
    text: string
    targetId: string
    technique?: PromptTechnique
  }[]
}

// Technique descriptions
const techniqueDescriptions: Record<PromptTechnique, string> = {
  "zero-shot": "Posez une question directe sans fournir d'exemple",
  "one-shot": "Fournissez un seul exemple pour guider l'IA",
  "few-shot": "Utilisez plusieurs exemples pour établir un pattern",
  "chain-of-thought": "Demandez à l'IA de raisonner étape par étape",
  rct: "Définissez un rôle, un contexte et une tâche spécifique",
  "multi-prompting": "Utilisez plusieurs prompts pour un même problème",
  "expert-role": "Demandez à l'IA d'adopter un rôle d'expert spécifique",
  iterative: "Posez des questions de suivi successives",
  "generated-knowledge": "Faites générer des connaissances avant la réponse",
  "contextual-augmentation": "Fournissez des informations supplémentaires",
  "template-filling": "Utilisez un gabarit avec des espaces à compléter",
  "": "",
}

// Recommended Ingredients by Technique
const recommendedIngredients: Record<PromptTechnique, string[]> = {
  "zero-shot": ["task", "specifications", "format"],
  "one-shot": ["task", "examples", "format"],
  "few-shot": ["task", "examples", "format"],
  "chain-of-thought": ["task", "steps"],
  rct: ["persona", "context", "task"],
  "multi-prompting": ["task", "specifications"],
  "expert-role": ["persona", "task", "specifications"],
  iterative: ["task", "context"],
  "generated-knowledge": ["task", "context"],
  "contextual-augmentation": ["context", "task"],
  "template-filling": ["task", "format"],
  "": [],
}

// Example prompts per technique
const examplePrompts: Record<PromptTechnique, (ingredients: Ingredient[]) => string> = {
  "zero-shot": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"
    const specs = ingredients.find((i) => i.id === "specifications")?.content || ""
    const format = ingredients.find((i) => i.id === "format")?.content || ""

    return `${task}${specs ? `\n\n${specs}` : ""}${format ? `\n\nFormat souhaité: ${format}` : ""}`
  },
  "one-shot": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"
    const examples = ingredients.find((i) => i.id === "examples")?.content || "Exemple: [Exemple]"

    return `${examples}\n\nMaintenant, ${task}`
  },
  "few-shot": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"
    const examples =
      ingredients.find((i) => i.id === "examples")?.content ||
      "Exemple 1: [Exemple 1]\n\nExemple 2: [Exemple 2]\n\nExemple 3: [Exemple 3]"

    return `Voici quelques exemples:\n\n${examples}\n\nEn suivant ces exemples, ${task}`
  },
  "chain-of-thought": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"
    const steps = ingredients.find((i) => i.id === "steps")?.content || ""

    return `${task}\n\nRéfléchis étape par étape:${steps ? `\n${steps}` : "\n1. [Première étape]\n2. [Deuxième étape]\n3. [Conclusion]"}`
  },
  rct: (ingredients) => {
    const persona = ingredients.find((i) => i.id === "persona")?.content || "[Rôle]"
    const context = ingredients.find((i) => i.id === "context")?.content || "[Contexte]"
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"

    return `En tant que ${persona},\ntu ${context}.\nPour cela, tu ${task}.`
  },
  "multi-prompting": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"

    return `Prompt 1: ${task} en te concentrant sur les opportunités.\n\nPrompt 2: ${task} en te concentrant sur les risques.\n\nPrompt 3: ${task} en proposant des solutions innovantes.`
  },
  "expert-role": (ingredients) => {
    const persona = ingredients.find((i) => i.id === "persona")?.content || "[Expert]"
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"

    return `Tu es un expert en ${persona} avec une grande expérience dans le domaine.\n\n${task}`
  },
  iterative: (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche initiale]"

    return `${task}\n\n[Après la première réponse, posez des questions de suivi comme:]\n- Peux-tu développer davantage le point X?\n- Comment appliquer ces idées dans [contexte spécifique]?\n- Quelles alternatives pourrais-tu suggérer pour [aspect particulier]?`
  },
  "generated-knowledge": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"

    return `Avant de répondre à ma question, liste les principales informations/connaissances importantes sur ce sujet.\n\nEnsuite, en te basant sur ces connaissances, ${task}`
  },
  "contextual-augmentation": (ingredients) => {
    const context = ingredients.find((i) => i.id === "context")?.content || "[Contexte/Information]"
    const task = ingredients.find((i) => i.id === "task")?.content || "[Tâche]"

    return `En tenant compte des informations suivantes:\n\n${context}\n\n${task}`
  },
  "template-filling": (ingredients) => {
    const task = ingredients.find((i) => i.id === "task")?.content || "[Description de la tâche]"
    const format = ingredients.find((i) => i.id === "format")?.content || "[Structure du format]"

    return `${task}\n\nUtilise le template suivant:\n\n${format}`
  },
  "": () => "",
}

// Decision Tree Data
const decisionTree: DecisionTreeNode[] = [
  {
    id: "start",
    question: "Avez-vous des exemples disponibles ?",
    options: [
      { text: "Aucun", targetId: "complexity" },
      { text: "Un seul", targetId: "result-one-shot", technique: "one-shot" },
      { text: "Plusieurs", targetId: "format-importance" },
    ],
  },
  {
    id: "complexity",
    question: "Quelle est la complexité de votre tâche ?",
    options: [
      { text: "Simple", targetId: "result-zero-shot", technique: "zero-shot" },
      { text: "Complexe", targetId: "objective" },
    ],
  },
  {
    id: "format-importance",
    question: "Quelle importance accordez-vous au format ?",
    options: [
      { text: "Haute/Critique", targetId: "result-few-shot", technique: "few-shot" },
      { text: "Faible/Moyenne", targetId: "result-multi-prompting", technique: "multi-prompting" },
    ],
  },
  {
    id: "objective",
    question: "Quel est l'objectif principal ?",
    options: [
      { text: "Création de contenu", targetId: "result-rct", technique: "rct" },
      { text: "Résolution de problème", targetId: "result-chain-of-thought", technique: "chain-of-thought" },
      { text: "Information", targetId: "result-generated-knowledge", technique: "generated-knowledge" },
    ],
  },
  {
    id: "result-zero-shot",
    question: "Technique recommandée: Zero-Shot Prompting",
    options: [],
  },
  {
    id: "result-one-shot",
    question: "Technique recommandée: One-Shot Prompting",
    options: [],
  },
  {
    id: "result-few-shot",
    question: "Technique recommandée: Few-Shot Prompting",
    options: [],
  },
  {
    id: "result-chain-of-thought",
    question: "Technique recommandée: Chain-of-Thought",
    options: [],
  },
  {
    id: "result-rct",
    question: "Technique recommandée: RCT (Rôle, Contexte, Tâche)",
    options: [],
  },
  {
    id: "result-multi-prompting",
    question: "Technique recommandée: Multi-Prompting",
    options: [],
  },
  {
    id: "result-generated-knowledge",
    question: "Technique recommandée: Generated Knowledge",
    options: [],
  },
]

// Exemples de prompts pour la modale
const promptExamples = {
  "zero-shot": {
    title: "Analyse SWOT",
    description: "Demande d'analyse SWOT pour une entreprise",
    prompt:
      "Réalise une analyse SWOT complète pour une entreprise de livraison de repas à domicile.\n\nAssure-toi d'inclure au moins 4 points pour chaque section (Forces, Faiblesses, Opportunités, Menaces) et d'expliquer brièvement chaque point.\n\nFormat souhaité: Présente les résultats sous forme de tableau avec des sections clairement identifiées.",
    ingredients: {
      task: "Réalise une analyse SWOT complète pour une entreprise de livraison de repas à domicile.",
      specifications:
        "Assure-toi d'inclure au moins 4 points pour chaque section (Forces, Faiblesses, Opportunités, Menaces) et d'expliquer brièvement chaque point.",
      format: "Présente les résultats sous forme de tableau avec des sections clairement identifiées.",
    },
  },
  "one-shot": {
    title: "Rédaction d'email",
    description: "Demande de rédaction d'un email professionnel avec exemple",
    prompt:
      "Exemple: \nObjet: Invitation à la conférence annuelle sur l'innovation\n\nChère Madame Martin,\n\nJ'espère que ce message vous trouve bien. Au nom de [Nom de l'entreprise], j'ai le plaisir de vous inviter à notre conférence annuelle sur l'innovation qui se tiendra le [date] à [lieu].\n\nCordialement,\n[Votre nom]\n\nMaintenant, rédige un email pour inviter un client potentiel à une démonstration de notre nouveau logiciel de gestion de projet. Inclus la date (15 mai), l'heure (14h) et précise que la démo durera 45 minutes.",
    ingredients: {
      task: "Rédige un email pour inviter un client potentiel à une démonstration de notre nouveau logiciel de gestion de projet. Inclus la date (15 mai), l'heure (14h) et précise que la démo durera 45 minutes.",
      examples:
        "Exemple: \nObjet: Invitation à la conférence annuelle sur l'innovation\n\nChère Madame Martin,\n\nJ'espère que ce message vous trouve bien. Au nom de [Nom de l'entreprise], j'ai le plaisir de vous inviter à notre conférence annuelle sur l'innovation qui se tiendra le [date] à [lieu].\n\nCordialement,\n[Votre nom]",
      format: "Format email professionnel avec objet",
    },
  },
  "few-shot": {
    title: "Classification de feedback",
    description: "Demande de classification de feedback client avec exemples",
    prompt:
      "Voici quelques exemples:\n\nExemple 1: \"Le produit est arrivé cassé et l'emballage était déchiré.\"\nCatégorie: Problème de livraison\nSentiment: Négatif\nUrgence: Élevée\n\nExemple 2: \"J'adore la qualité du tissu et les couleurs sont magnifiques.\"\nCatégorie: Qualité du produit\nSentiment: Positif\nUrgence: Faible\n\nExemple 3: \"J'ai commandé il y a une semaine et je n'ai toujours pas reçu de confirmation d'expédition.\"\nCatégorie: Service client\nSentiment: Négatif\nUrgence: Moyenne\n\nEn suivant ces exemples, classifie le feedback client suivant: \"J'ai reçu le mauvais produit, ce n'est pas du tout ce que j'avais commandé. J'ai besoin d'un remboursement rapidement.\"",
    ingredients: {
      task: "Classifie le feedback client suivant: \"J'ai reçu le mauvais produit, ce n'est pas du tout ce que j'avais commandé. J'ai besoin d'un remboursement rapidement.\"",
      examples:
        'Exemple 1: "Le produit est arrivé cassé et l\'emballage était déchiré."\nCatégorie: Problème de livraison\nSentiment: Négatif\nUrgence: Élevée\n\nExemple 2: "J\'adore la qualité du tissu et les couleurs sont magnifiques."\nCatégorie: Qualité du produit\nSentiment: Positif\nUrgence: Faible\n\nExemple 3: "J\'ai commandé il y a une semaine et je n\'ai toujours pas reçu de confirmation d\'expédition."\nCatégorie: Service client\nSentiment: Négatif\nUrgence: Moyenne',
      format: "Catégorie, Sentiment, Urgence",
    },
  },
  "chain-of-thought": {
    title: "Résolution de problème",
    description: "Demande de résolution d'un problème complexe étape par étape",
    prompt:
      "Une entreprise de e-commerce constate une baisse de 15% du taux de conversion sur son site web au cours du dernier mois. Analyse ce problème et propose des solutions.\n\nRéfléchis étape par étape:\n1. Identifie les causes possibles de la baisse du taux de conversion\n2. Pour chaque cause, évalue sa probabilité et son impact potentiel\n3. Propose des solutions spécifiques pour les causes les plus probables\n4. Suggère une méthodologie pour tester l'efficacité de ces solutions",
    ingredients: {
      task: "Une entreprise de e-commerce constate une baisse de 15% du taux de conversion sur son site web au cours du dernier mois. Analyse ce problème et propose des solutions.",
      steps:
        "1. Identifie les causes possibles de la baisse du taux de conversion\n2. Pour chaque cause, évalue sa probabilité et son impact potentiel\n3. Propose des solutions spécifiques pour les causes les plus probables\n4. Suggère une méthodologie pour tester l'efficacité de ces solutions",
    },
  },
  rct: {
    title: "Conseil en marketing",
    description: "Demande de conseil en marketing avec définition du rôle, contexte et tâche",
    prompt:
      "En tant que consultant en marketing digital spécialisé dans les réseaux sociaux,\ntu travailles avec une petite entreprise locale qui souhaite augmenter sa présence en ligne.\nPour cela, tu dois créer une stratégie de contenu pour Instagram qui générera plus d'engagement et attirera de nouveaux clients.",
    ingredients: {
      persona: "consultant en marketing digital spécialisé dans les réseaux sociaux",
      context: "travailles avec une petite entreprise locale qui souhaite augmenter sa présence en ligne",
      task: "dois créer une stratégie de contenu pour Instagram qui générera plus d'engagement et attirera de nouveaux clients",
    },
  },
  "expert-role": {
    title: "Conseil financier",
    description: "Demande de conseil financier en définissant un rôle d'expert",
    prompt:
      "Tu es un expert en planification financière avec une grande expérience dans le domaine.\n\nQuelles sont les étapes essentielles pour une personne de 30 ans qui souhaite commencer à investir pour sa retraite avec un budget limité? Inclus des conseils sur les types d'investissements à privilégier, les erreurs courantes à éviter, et comment équilibrer les investissements à court et long terme.",
    ingredients: {
      persona: "planification financière",
      task: "Quelles sont les étapes essentielles pour une personne de 30 ans qui souhaite commencer à investir pour sa retraite avec un budget limité?",
      specifications:
        "Inclus des conseils sur les types d'investissements à privilégier, les erreurs courantes à éviter, et comment équilibrer les investissements à court et long terme.",
    },
  },
  "contextual-augmentation": {
    title: "Recommandation personnalisée",
    description: "Demande de recommandation avec contexte spécifique",
    prompt:
      "En tenant compte des informations suivantes:\n\nJe suis un développeur web avec 3 ans d'expérience, principalement en JavaScript (React) et un peu de backend avec Node.js. Je souhaite élargir mes compétences pour devenir développeur full-stack. J'ai environ 5 heures par semaine à consacrer à l'apprentissage. Je préfère les ressources gratuites ou peu coûteuses.\n\nRecommande-moi un plan d'apprentissage sur 3 mois pour développer mes compétences backend et devenir un développeur full-stack plus complet.",
    ingredients: {
      context:
        "Je suis un développeur web avec 3 ans d'expérience, principalement en JavaScript (React) et un peu de backend avec Node.js. Je souhaite élargir mes compétences pour devenir développeur full-stack. J'ai environ 5 heures par semaine à consacrer à l'apprentissage. Je préfère les ressources gratuites ou peu coûteuses.",
      task: "Recommande-moi un plan d'apprentissage sur 3 mois pour développer mes compétences backend et devenir un développeur full-stack plus complet.",
    },
  },
}

// Helper function to extract technique from result node
const extractTechniqueFromResultNode = (nodeId: string): PromptTechnique | undefined => {
  const resultPrefix = "result-"
  if (nodeId.startsWith(resultPrefix)) {
    const techniqueName = nodeId.substring(resultPrefix.length)
    return techniqueName as PromptTechnique
  }
  return undefined
}

// Fonction pour mettre en évidence les ingrédients dans un exemple de prompt
const highlightIngredients = (prompt: string, ingredients: Record<string, string>) => {
  let highlightedPrompt = prompt

  // Remplacer chaque ingrédient par sa version surlignée
  Object.entries(ingredients).forEach(([key, value]) => {
    if (value && prompt.includes(value)) {
      const className = getIngredientClass(key)
      highlightedPrompt = highlightedPrompt.replace(value, `<span class="${className}">${value}</span>`)
    }
  })

  return highlightedPrompt
}

// Fonction pour obtenir la classe CSS en fonction du type d'ingrédient
const getIngredientClass = (ingredientType: string) => {
  const classes = {
    task: "bg-blue-100 text-blue-800 px-1 rounded",
    context: "bg-green-100 text-green-800 px-1 rounded",
    steps: "bg-amber-100 text-amber-800 px-1 rounded",
    specifications: "bg-purple-100 text-purple-800 px-1 rounded",
    examples: "bg-pink-100 text-pink-800 px-1 rounded",
    persona: "bg-indigo-100 text-indigo-800 px-1 rounded",
    format: "bg-orange-100 text-orange-800 px-1 rounded",
    inputs: "bg-cyan-100 text-cyan-800 px-1 rounded",
  }

  return classes[ingredientType as keyof typeof classes] || ""
}

export default function CanevasPage() {
  // States
  const [frictionPoint, setFrictionPoint] = useState("")
  const [promptType, setPromptType] = useState<PromptType>("")
  const [promptTechnique, setPromptTechnique] = useState<PromptTechnique>("")
  const [justification, setJustification] = useState("")
  const [isTreeModalOpen, setIsTreeModalOpen] = useState(false)
  const [currentNodeId, setCurrentNodeId] = useState("start")
  const [isCopied, setIsCopied] = useState(false)
  const [isExampleCopied, setIsExampleCopied] = useState<Record<string, boolean>>({})
  const [isExamplesDialogOpen, setIsExamplesDialogOpen] = useState(false)
  const [selectedExampleTab, setSelectedExampleTab] = useState<PromptTechnique>("zero-shot")

  // Remplacer l'initialisation du state ingredients par cette version avec les labels en français

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "task", label: "Tâche", description: "Que voulez-vous exactement ?", content: "", selected: false },
    {
      id: "context",
      label: "Contexte",
      description: "Quel est le contexte spécifique ?",
      content: "",
      selected: false,
    },
    { id: "steps", label: "Étapes", description: "Quelles étapes doit suivre l'IA ?", content: "", selected: false },
    {
      id: "specifications",
      label: "Spécifications",
      description: "Quelles sont vos contraintes/règles ?",
      content: "",
      selected: false,
    },
    {
      id: "examples",
      label: "Exemples",
      description: "Avez-vous un exemple à fournir ?",
      content: "",
      selected: false,
    },
    { id: "persona", label: "Persona", description: "Quel rôle doit adopter l'IA ?", content: "", selected: false },
    {
      id: "inputs",
      label: "Données",
      description: "Quelles infos complémentaires seront nécessaires ?",
      content: "",
      selected: false,
    },
    {
      id: "format",
      label: "Format",
      description: "Quel format de réponse attendez-vous ?",
      content: "",
      selected: false,
    },
  ])

  const [draftPrompt, setDraftPrompt] = useState("")

  // Reset recommended ingredients when technique changes
  useEffect(() => {
    if (promptTechnique) {
      const recommendedIds = recommendedIngredients[promptTechnique]
      setIngredients(
        ingredients.map((ingredient) => ({
          ...ingredient,
          selected: recommendedIds.includes(ingredient.id),
        })),
      )
    }
  }, [promptTechnique])

  // Modifions la fonction toggleIngredient pour mettre à jour correctement le prompt
  // Remplacer la fonction toggleIngredient actuelle par celle-ci:

  const toggleIngredient = (id: Ingredient["id"]) => {
    const updatedIngredients = ingredients.map((ingredient) =>
      ingredient.id === id ? { ...ingredient, selected: !ingredient.selected } : ingredient,
    )
    setIngredients(updatedIngredients)

    // Mettre à jour immédiatement l'ébauche de prompt si une technique est sélectionnée
    if (promptTechnique) {
      const newDraftPrompt = examplePrompts[promptTechnique](updatedIngredients)
      setDraftPrompt(newDraftPrompt)
    }
  }

  // Modifions également la fonction updateIngredientContent pour mettre à jour en temps réel:
  const updateIngredientContent = (id: Ingredient["id"], content: string) => {
    const updatedIngredients = ingredients.map((ingredient) =>
      ingredient.id === id ? { ...ingredient, content } : ingredient,
    )
    setIngredients(updatedIngredients)

    // Mettre à jour immédiatement l'ébauche de prompt si une technique est sélectionnée
    if (promptTechnique) {
      const newDraftPrompt = examplePrompts[promptTechnique](updatedIngredients)
      setDraftPrompt(newDraftPrompt)
    }
  }

  // Assurons-nous que l'effet qui met à jour le prompt est correctement configuré
  // Remplacer l'useEffect actuel par celui-ci:

  // Update draft prompt when relevant fields change
  useEffect(() => {
    if (promptTechnique) {
      const newDraftPrompt = examplePrompts[promptTechnique](ingredients)
      setDraftPrompt(newDraftPrompt)
    }
  }, [promptTechnique, ingredients])

  // Copy prompt to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(draftPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Copy example prompt to clipboard
  const copyExampleToClipboard = (technique: PromptTechnique) => {
    if (promptExamples[technique]) {
      navigator.clipboard.writeText(promptExamples[technique].prompt)
      setIsExampleCopied({ ...isExampleCopied, [technique]: true })
      setTimeout(() => {
        setIsExampleCopied({ ...isExampleCopied, [technique]: false })
      }, 2000)
    }
  }

  // Apply example to form
  const applyExampleToForm = (technique: PromptTechnique) => {
    if (promptExamples[technique]) {
      // Set the technique
      setPromptTechnique(technique)

      // Update ingredients with example values
      const exampleIngredients = promptExamples[technique].ingredients
      const updatedIngredients = ingredients.map((ingredient) => {
        const content = exampleIngredients[ingredient.id as keyof typeof exampleIngredients] || ""
        return {
          ...ingredient,
          content,
          selected: content ? true : ingredient.selected,
        }
      })

      setIngredients(updatedIngredients)

      // Close the dialog
      setIsExamplesDialogOpen(false)
    }
  }

  // Get current node in decision tree
  const currentNode = decisionTree.find((node) => node.id === currentNodeId)

  // Assurons-nous que lorsqu'une technique est sélectionnée via l'arbre de décision,
  // les ingrédients recommandés sont appliqués et le prompt est mis à jour.
  // Modifions la fonction handleOptionSelect:

  const handleOptionSelect = (targetId: string, technique?: PromptTechnique) => {
    // Animation de transition
    const treeContainer = document.querySelector(".animate-scaleIn")
    if (treeContainer) {
      treeContainer.classList.add("opacity-0")
      treeContainer.classList.remove("opacity-100")

      setTimeout(() => {
        setCurrentNodeId(targetId)
        if (technique) {
          setPromptTechnique(technique)

          // Appliquer immédiatement les ingrédients recommandés
          const recommendedIds = recommendedIngredients[technique] || []
          const updatedIngredients = ingredients.map((ingredient) => ({
            ...ingredient,
            selected: recommendedIds.includes(ingredient.id),
          }))
          setIngredients(updatedIngredients)

          // Mettre à jour immédiatement le prompt
          setDraftPrompt(examplePrompts[technique](updatedIngredients))

          // Fermer la modale après un court délai pour permettre à l'utilisateur de voir la recommandation
          setTimeout(() => {
            setIsTreeModalOpen(false)
          }, 1500)
        }

        // Restaurer l'opacité
        if (treeContainer) {
          treeContainer.classList.remove("opacity-0")
          treeContainer.classList.add("opacity-100")
        }
      }, 150)
    } else {
      // Fallback si l'élément n'est pas trouvé
      setCurrentNodeId(targetId)
      if (technique) {
        setPromptTechnique(technique)

        // Appliquer immédiatement les ingrédients recommandés
        const recommendedIds = recommendedIngredients[technique] || []
        const updatedIngredients = ingredients.map((ingredient) => ({
          ...ingredient,
          selected: recommendedIds.includes(ingredient.id),
        }))
        setIngredients(updatedIngredients)

        // Mettre à jour immédiatement le prompt
        setDraftPrompt(examplePrompts[technique](updatedIngredients))

        setTimeout(() => {
          setIsTreeModalOpen(false)
        }, 1500)
      }
    }
  }

  const promptingTechniques = [
    { id: "zero-shot", name: "Zero Shot", description: "Instruction directe sans exemple" },
    { id: "one-shot", name: "One Shot", description: "Instruction avec un exemple" },
    { id: "few-shot", name: "Few Shot", description: "Instruction avec plusieurs exemples" },
    { id: "chain-of-thought", name: "Chain Of Thought", description: "Raisonnement étape par étape" },
    { id: "rct", name: "Rct", description: "Rôle, contexte et tâche" },
    { id: "multi-prompting", name: "Multi Prompting", description: "Plusieurs  contexte et tâche" },
    { id: "multi-prompting", name: "Multi Prompting", description: "Plusieurs prompts séquentiels" },
    { id: "expert-role", name: "Expert Role", description: "Attribution d'un rôle d'expert" },
    { id: "generated-knowledge", name: "Generated Knowledge", description: "Génération de connaissances" },
    { id: "contextual-augmentation", name: "Contextual Augmentation", description: "Ajout de contexte" },
    { id: "template-filling", name: "Template Filling", description: "Remplissage de modèle" },
    { id: "iterative", name: "Iterative", description: "Amélioration itérative" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Canevas de Prompts</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Créez des prompts personnalisés et efficaces adaptés à vos besoins spécifiques.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne de gauche - Configuration */}
        <div className="space-y-6">
          {/* Point de friction */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Point de friction</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Décrivez le problème ou le besoin que vous souhaitez résoudre avec l'IA
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  value={frictionPoint}
                  onChange={(e) => setFrictionPoint(e.target.value)}
                  placeholder="Décrivez le point de friction que vous souhaitez résoudre avec l'IA..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Type (Matrice d'opportunités) */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Type (Matrice d'opportunités)</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Sélectionnez le type d'opportunité que représente votre cas d'usage</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      promptType === "automatisation" ? "bg-blue-50 border-blue-500" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setPromptType("automatisation")}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-blue-600">Automatisation pure</h3>
                      {promptType === "automatisation" && <Check size={16} className="text-blue-500" />}
                    </div>
                    <p className="text-sm text-gray-500">Tâches répétitives à faible valeur ajoutée</p>
                  </div>
                  <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      promptType === "avant-garde" ? "bg-purple-50 border-purple-500" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setPromptType("avant-garde")}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-purple-600">Avant-Garde</h3>
                      {promptType === "avant-garde" && <Check size={16} className="text-purple-500" />}
                    </div>
                    <p className="text-sm text-gray-500">Réinvention des processus RH</p>
                  </div>
                  <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      promptType === "assistance" ? "bg-amber-100 border-amber-500" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setPromptType("assistance")}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-amber-600">Assistance</h3>
                      {promptType === "assistance" && <Check size={16} className="text-amber-500" />}
                    </div>
                    <p className="text-sm text-gray-500">Amélioration incrémentale</p>
                  </div>
                  <div
                    className={`border rounded-md p-4 cursor-pointer transition-colors ${
                      promptType === "augmentation" ? "bg-green-50 border-green-500" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setPromptType("augmentation")}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-medium text-green-600">Augmentation</h3>
                      {promptType === "augmentation" && <Check size={16} className="text-green-500" />}
                    </div>
                    <p className="text-sm text-gray-500">Enrichissement des capacités humaines</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technique de prompting */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Technique de prompting</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm bg-purple-50 text-purple-600 hover:bg-purple-100"
                    onClick={() => setIsTreeModalOpen(true)}
                  >
                    <HelpCircle size={16} className="mr-1" />
                    Arbre de décision
                  </Button>
                </div>

                {promptTechnique ? (
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="font-medium text-gray-800">
                        {promptTechnique
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}{" "}
                        Prompting
                      </div>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => setPromptTechnique("")}>
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">{techniqueDescriptions[promptTechnique]}</p>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pourquoi cette technique est-elle adaptée ?
                      </label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                        rows={2}
                        placeholder="Justifiez votre choix de technique..."
                        value={justification}
                        onChange={(e) => setJustification(e.target.value)}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-gray-600 text-sm">
                      Sélectionnez une technique de prompting en utilisant l'arbre de décision ou choisissez directement
                      parmi les options suivantes :
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {promptingTechniques.map((technique) => (
                        <button
                          key={technique.id}
                          className="text-xs text-left bg-white border border-gray-200 rounded p-2 hover:bg-gray-50"
                          onClick={() => {
                            setPromptTechnique(technique.id as PromptTechnique)
                            // Appliquer immédiatement les ingrédients recommandés
                            const recommendedIds = recommendedIngredients[technique.id as PromptTechnique] || []
                            const updatedIngredients = ingredients.map((ingredient) => ({
                              ...ingredient,
                              selected: recommendedIds.includes(ingredient.id),
                            }))
                            setIngredients(updatedIngredients)
                            // Mettre à jour immédiatement le prompt
                            setDraftPrompt(examplePrompts[technique.id as PromptTechnique](updatedIngredients))
                          }}
                        >
                          {technique.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Ingrédients du prompt */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Ingrédients du prompt</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Sélectionnez les éléments à inclure dans votre prompt</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ingredients.map((ingredient) => (
                    <div
                      key={ingredient.id}
                      className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                        ingredient.selected
                          ? "bg-purple-100 text-purple-800 border border-purple-300"
                          : "bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200"
                      }`}
                      onClick={() => toggleIngredient(ingredient.id)}
                    >
                      {ingredient.label}
                      {ingredient.selected ? (
                        <X size={12} className="inline ml-1" />
                      ) : (
                        <Plus size={12} className="inline ml-1" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {ingredients
                    .filter((i) => i.selected)
                    .map((ingredient) => (
                      <div key={ingredient.id} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <label className="block text-sm font-medium text-gray-700">
                            {ingredient.label}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info size={14} className="inline ml-1 text-gray-400" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{ingredient.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </label>
                          <button
                            className="text-gray-400 hover:text-gray-600"
                            onClick={() => toggleIngredient(ingredient.id)}
                          >
                            <X size={14} />
                          </button>
                        </div>
                        <textarea
                          className="w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500"
                          rows={4}
                          placeholder={ingredient.description}
                          value={ingredient.content}
                          onChange={(e) => {
                            updateIngredientContent(ingredient.id, e.target.value)
                            // Mettre à jour immédiatement l'ébauche de prompt
                            if (promptTechnique) {
                              setDraftPrompt(
                                examplePrompts[promptTechnique](
                                  ingredients.map((ing) =>
                                    ing.id === ingredient.id ? { ...ing, content: e.target.value } : ing,
                                  ),
                                ),
                              )
                            }
                          }}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Colonne de droite - Résultat */}
        <div className="space-y-6">
          {/* Ébauche de prompt */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Ébauche de prompt</h2>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-purple-50 text-purple-600 hover:bg-purple-100"
                      onClick={copyToClipboard}
                      disabled={!draftPrompt || isCopied}
                    >
                      {isCopied ? "Copié ✓" : "Copier"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs bg-gray-50 text-gray-600 hover:bg-gray-100 border-gray-200"
                      onClick={() => promptTechnique && setDraftPrompt(examplePrompts[promptTechnique](ingredients))}
                      disabled={!promptTechnique}
                    >
                      Régénérer
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md min-h-[300px] max-h-[500px] overflow-y-auto border whitespace-pre-line">
                  {draftPrompt ? (
                    <p className="break-words">{draftPrompt}</p>
                  ) : (
                    <p className="text-gray-400 italic">
                      L'aperçu du prompt apparaîtra ici une fois que vous aurez sélectionné une technique et complété
                      les ingrédients...
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Édition manuelle */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-purple-600">Édition manuelle</h2>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Modifiez manuellement votre prompt pour l'affiner</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Textarea
                  value={draftPrompt}
                  onChange={(e) => {
                    // Permettre l'édition manuelle directe sans modifier les ingrédients
                    setDraftPrompt(e.target.value)
                  }}
                  placeholder="Vous pouvez modifier ou affiner manuellement votre prompt ici..."
                  className="min-h-[300px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Dialog open={isExamplesDialogOpen} onOpenChange={setIsExamplesDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Voir des exemples</Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Exemples de prompts</DialogTitle>
                  <DialogDescription>
                    Explorez des exemples de prompts pour différentes techniques et découvrez comment les ingrédients
                    sont utilisés.
                  </DialogDescription>
                </DialogHeader>

                <Tabs
                  defaultValue="zero-shot"
                  value={selectedExampleTab}
                  onValueChange={(value) => setSelectedExampleTab(value as PromptTechnique)}
                >
                  <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-4">
                    {Object.keys(promptExamples).map((technique) => (
                      <TabsTrigger key={technique} value={technique} className="text-xs">
                        {technique
                          .split("-")
                          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(" ")}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {Object.entries(promptExamples).map(([technique, example]) => (
                    <TabsContent key={technique} value={technique} className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium">{example.title}</h3>
                          <p className="text-sm text-gray-500">{example.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => copyExampleToClipboard(technique as PromptTechnique)}
                            disabled={isExampleCopied[technique]}
                          >
                            {isExampleCopied[technique] ? "Copié ✓" : "Copier"}
                            {!isExampleCopied[technique] && <Copy size={14} className="ml-1" />}
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => applyExampleToForm(technique as PromptTechnique)}
                          >
                            Utiliser cet exemple
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md border whitespace-pre-line">
                        <div
                          className="prompt-example"
                          dangerouslySetInnerHTML={{
                            __html: highlightIngredients(example.prompt, example.ingredients),
                          }}
                        />
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Ingrédients utilisés:</h4>
                        <div className="flex flex-wrap gap-2">
                          {Object.entries(example.ingredients).map(([key, value]) =>
                            value ? (
                              <Badge key={key} variant="outline" className={getIngredientClass(key)}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </Badge>
                            ) : null,
                          )}
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </DialogContent>
            </Dialog>
            <Button className="bg-purple-600 hover:bg-purple-700" onClick={copyToClipboard}>
              {isCopied ? "Copié ✓" : "Copier"}
            </Button>
          </div>

          {/* Conseils */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h2 className="flex items-center text-lg font-semibold text-blue-800">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Conseils pour un prompt efficace
                </h2>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Soyez spécifique :</span> Plus votre prompt est précis, meilleure
                      sera la réponse.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Fournissez du contexte :</span> Donnez suffisamment d'informations
                      pour que le modèle comprenne votre demande.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Utilisez des exemples :</span> Les exemples aident le modèle à
                      comprendre le format et le style de réponse attendus.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <span className="text-blue-600 text-xs font-bold">4</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Définissez des contraintes :</span> Précisez ce que vous ne voulez
                      pas voir dans la réponse.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Decision Tree Modal */}
      {isTreeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto animate-scaleIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Arbre de décision</h2>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setIsTreeModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                Répondez aux questions ci-dessous pour identifier la technique de prompting la plus adaptée à votre
                besoin.
              </p>
            </div>

            <div className="mb-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">{currentNode?.question}</h3>

                {currentNode?.options.length > 0 ? (
                  <div className="space-y-3">
                    {currentNode.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-4 border border-gray-300 rounded-lg hover:bg-gray-50 flex justify-between items-center transition-colors"
                        onClick={() => handleOptionSelect(option.targetId, option.technique)}
                      >
                        <span className="font-medium">{option.text}</span>
                        <ChevronRight size={18} className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 bg-green-50 border border-green-200 rounded-lg animate-pulseOnce">
                    <p className="text-green-800 font-medium">{currentNode?.question}</p>
                    <p className="text-green-700 mt-2 text-sm">
                      Cette technique semble être la plus adaptée à votre besoin.
                    </p>
                    <Button
                      className="mt-4 bg-purple-600 hover:bg-purple-700 text-white transition-colors"
                      onClick={() => {
                        // Extraire la technique du nœud actuel
                        const technique = decisionTree
                          .find((node) => node.id === currentNodeId)
                          ?.question.replace("Technique recommandée: ", "")
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace(/$|$/g, "")
                          .replace("rôle-contexte-tâche", "rct") as PromptTechnique

                        if (technique) {
                          setPromptTechnique(technique)
                        }
                        setIsTreeModalOpen(false)
                      }}
                    >
                      Appliquer cette technique
                    </Button>
                  </div>
                )}
              </div>

              {currentNodeId !== "start" && (
                <button
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center transition-colors"
                  onClick={() => setCurrentNodeId("start")}
                >
                  <ChevronDown size={16} className="transform rotate-90 mr-1" />
                  Recommencer depuis le début
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .prompt-example span {
          display: inline;
        }
      `}</style>
    </div>
  )
}
