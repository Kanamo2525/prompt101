"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronDown, X, Check, Info, ChevronRight, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Types
type PromptType = "automatisation" | "transformation" | "maintien" | "augmentation" | ""
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

// Tooltip Component
const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className="cursor-help">
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 w-64 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2">
          {content}
          <div className="tooltip-arrow"></div>
        </div>
      )}
    </div>
  )
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

// Plus icon component
const Plus = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
)

// Main component
export default function CanevasPageClient() {
  // States
  const [frictionPoint, setFrictionPoint] = useState("")
  const [promptType, setPromptType] = useState<PromptType>("")
  const [promptTechnique, setPromptTechnique] = useState<PromptTechnique>("")
  const [justification, setJustification] = useState("")
  const [currentNodeId, setCurrentNodeId] = useState("start")
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
  const [isTreeModalOpen, setIsTreeModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

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

  // Handle selecting a technique from the decision tree
  const handleOptionSelect = (targetId: string, technique?: PromptTechnique) => {
    setCurrentNodeId(targetId)
    if (technique) {
      setPromptTechnique(technique)
      setIsTreeModalOpen(false)
    }
  }

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Canevas de Prompt</h1>
              <p className="text-lg">Créez des prompts structurés et efficaces pour tous vos besoins</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30">
                <Link href="/methodes">Méthodes de prompting</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Point de friction & Type */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-lg font-bold text-purple-600 mb-2">Point de friction</h2>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  rows={3}
                  placeholder="Décrivez le point de friction que vous souhaitez résoudre avec l'IA..."
                  value={frictionPoint}
                  onChange={(e) => setFrictionPoint(e.target.value)}
                />
              </div>

              <h3 className="text-md font-semibold text-gray-700 mb-2">Type (Matrice d'opportunités)</h3>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    promptType === "automatisation" ? "bg-blue-100 border-blue-500" : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPromptType("automatisation")}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-blue-700">Automatisation pure</span>
                    {promptType === "automatisation" && <Check size={16} className="text-blue-500" />}
                  </div>
                  <p className="text-xs text-gray-600">Tâches répétitives à faible valeur ajoutée</p>
                </div>
                <div
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    promptType === "transformation"
                      ? "bg-purple-100 border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPromptType("transformation")}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-purple-700">Avant-Garde</span>
                    {promptType === "transformation" && <Check size={16} className="text-purple-500" />}
                  </div>
                  <p className="text-xs text-gray-600">Réinvention des processus RH</p>
                </div>
                <div
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    promptType === "maintien" ? "bg-amber-100 border-amber-500" : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPromptType("maintien")}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-amber-700">Assistance</span>
                    {promptType === "maintien" && <Check size={16} className="text-amber-500" />}
                  </div>
                  <p className="text-xs text-gray-600">Amélioration incrémentale</p>
                </div>
                <div
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    promptType === "augmentation" ? "bg-green-100 border-green-500" : "border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => setPromptType("augmentation")}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-green-700">Augmentation</span>
                    {promptType === "augmentation" && <Check size={16} className="text-green-500" />}
                  </div>
                  <p className="text-xs text-gray-600">Enrichissement des capacités humaines</p>
                </div>
              </div>
            </div>

            {/* Technique de prompting */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-purple-600">Technique de prompting</h2>
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
                    {Object.keys(techniqueDescriptions)
                      .filter((t) => t !== "")
                      .map((technique) => (
                        <button
                          key={technique}
                          className="text-xs text-left bg-white border border-gray-200 rounded p-2 hover:bg-gray-50"
                          onClick={() => setPromptTechnique(technique as PromptTechnique)}
                        >
                          {technique
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ingrédients du prompt */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-bold text-purple-600 mb-4">Ingrédients du prompt</h2>

              <div className="flex flex-wrap mb-3">
                {ingredients.map((ingredient) => (
                  <div
                    key={ingredient.id}
                    className={`mr-2 mb-2 px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
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
                          <Tooltip content={ingredient.description}>
                            <Info size={14} className="inline ml-1 text-gray-400" />
                          </Tooltip>
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
          </div>

          {/* Right Column - Preview & Draft */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 mb-6 sticky top-20">
              <h2 className="text-lg font-bold text-purple-600 mb-4">Ébauche de prompt</h2>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold text-gray-700">Aperçu généré</h3>
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
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 text-gray-800 min-h-[200px] whitespace-pre-line">
                  {draftPrompt || (
                    <span className="text-gray-400 italic">
                      L'aperçu du prompt apparaîtra ici une fois que vous aurez sélectionné une technique et complété
                      les ingrédients...
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-md font-semibold text-gray-700 mb-2">Édition manuelle</h3>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                rows={10}
                placeholder="Vous pouvez modifier ou affiner manuellement votre prompt ici..."
                value={draftPrompt}
                onChange={(e) => setDraftPrompt(e.target.value)}
              />

              <div className="mt-6 flex items-center justify-between">
                <Button variant="outline" asChild>
                  <Link href="/catalogue">Voir des exemples</Link>
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700">Enregistrer ce prompt</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Tree Modal */}
      {isTreeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Arbre de décision</h2>
              <button className="text-gray-400 hover:text-gray-600" onClick={() => setIsTreeModalOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800">
                Répondez aux questions ci-dessous pour identifier la technique de prompting la plus adaptée à votre
                besoin.
              </p>
            </div>

            <div className="mb-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{currentNode?.question}</h3>

                {currentNode?.options.length > 0 ? (
                  <div className="space-y-3">
                    {currentNode.options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex justify-between items-center"
                        onClick={() => handleOptionSelect(option.targetId, option.technique)}
                      >
                        <span>{option.text}</span>
                        <ChevronRight size={16} className="text-gray-400" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">{currentNode?.question}</p>
                    <Button
                      className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => setIsTreeModalOpen(false)}
                    >
                      Appliquer cette technique
                    </Button>
                  </div>
                )}
              </div>

              {currentNodeId !== "start" && (
                <button
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
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

      {/* Footer Section */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Next-ai.fr. Guide des prompts pour l'IA générative.
          </p>
        </div>
      </footer>
    </div>
  )
}
