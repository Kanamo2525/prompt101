"use client"

import { useState, useEffect } from "react"
import { Lightbulb, Info, Plus, X, Check, HelpCircle, ChevronRight, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

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

// Ajouter cette fonction d'aide pour extraire la technique à partir du nœud de résultat:

// Helper function to extract technique from result node
const extractTechniqueFromResultNode = (nodeId: string): PromptTechnique | undefined => {
  const resultPrefix = "result-"
  if (nodeId.startsWith(resultPrefix)) {
    const techniqueName = nodeId.substring(resultPrefix.length)
    return techniqueName as PromptTechnique
  }
  return undefined
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

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "task", label: "Task", description: "Que voulez-vous exactement ?", content: "", selected: false },
    {
      id: "context",
      label: "Context",
      description: "Quel est le contexte spécifique ?",
      content: "",
      selected: false,
    },
    { id: "steps", label: "Steps", description: "Quelles étapes doit suivre l'IA ?", content: "", selected: false },
    {
      id: "specifications",
      label: "Specifications",
      description: "Quelles sont vos contraintes/règles ?",
      content: "",
      selected: false,
    },
    {
      id: "examples",
      label: "Examples",
      description: "Avez-vous un exemple à fournir ?",
      content: "",
      selected: false,
    },
    { id: "persona", label: "Persona", description: "Quel rôle doit adopter l'IA ?", content: "", selected: false },
    {
      id: "inputs",
      label: "Inputs",
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

  // Update draft prompt when relevant fields change
  useEffect(() => {
    if (promptTechnique) {
      setDraftPrompt(examplePrompts[promptTechnique](ingredients))
    }
  }, [promptTechnique, ingredients])

  // Handle ingredient selection
  const toggleIngredient = (id: Ingredient["id"]) => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, selected: !ingredient.selected } : ingredient,
      ),
    )
  }

  // Handle ingredient content change
  const updateIngredientContent = (id: Ingredient["id"], content: string) => {
    setIngredients(ingredients.map((ingredient) => (ingredient.id === id ? { ...ingredient, content } : ingredient)))
  }

  // Copy prompt to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(draftPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  // Get current node in decision tree
  const currentNode = decisionTree.find((node) => node.id === currentNodeId)

  // Handle selecting a technique from the decision tree
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
                  placeholder="Décrivez le point de friction RH que vous souhaitez résoudre avec l'IA..."
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
                          onClick={() => setPromptTechnique(technique.id as PromptTechnique)}
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
                          rows={2}
                          placeholder={ingredient.description}
                          value={ingredient.content}
                          onChange={(e) => updateIngredientContent(ingredient.id, e.target.value)}
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
                <div className="bg-gray-50 p-4 rounded-md min-h-[200px] border whitespace-pre-line">
                  {draftPrompt ? (
                    <p>{draftPrompt}</p>
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
                  onChange={(e) => setDraftPrompt(e.target.value)}
                  placeholder="Vous pouvez modifier ou affiner manuellement votre prompt ici..."
                  className="min-h-[200px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between">
            <Button variant="outline">Voir des exemples</Button>
            <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer ce prompt</Button>
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
                          .replace(/$$|$$/g, "")
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
    </div>
  )
}
