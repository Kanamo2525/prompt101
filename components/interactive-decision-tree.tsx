"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface DecisionOption {
  label: string
  nextStep?: string
  result?: {
    technique: string
    description: string
    path: string
  }
}

interface DecisionStep {
  question: string
  options: DecisionOption[]
}

const decisionTree: Record<string, DecisionStep> = {
  start: {
    question: "Avez-vous des exemples disponibles ?",
    options: [
      { label: "Aucun", nextStep: "no_examples" },
      { label: "Un seul", nextStep: "one_example" },
      { label: "Plusieurs", nextStep: "multiple_examples" },
    ],
  },
  no_examples: {
    question: "La tâche nécessite-t-elle un raisonnement complexe ?",
    options: [
      {
        label: "Oui",
        result: {
          technique: "Chain-of-Thought Prompting",
          description: "Encouragez le modèle à décomposer son raisonnement en étapes logiques.",
          path: "/methodes/chain-of-thought",
        },
      },
      {
        label: "Non",
        result: {
          technique: "Zero-Shot Prompting",
          description: "Donnez des instructions claires sans fournir d'exemples.",
          path: "/methodes/zero-shot",
        },
      },
    ],
  },
  one_example: {
    question: "Souhaitez-vous que le modèle adopte un rôle spécifique ?",
    options: [
      {
        label: "Oui",
        result: {
          technique: "Expert Role-Playing",
          description: "Demandez au modèle d'adopter le rôle d'un expert dans un domaine spécifique.",
          path: "/methodes/expert-role-playing",
        },
      },
      {
        label: "Non",
        result: {
          technique: "One-Shot Prompting",
          description: "Fournissez un exemple unique pour guider le modèle dans sa réponse.",
          path: "/methodes/one-shot",
        },
      },
    ],
  },
  multiple_examples: {
    question: "Votre tâche nécessite-t-elle de décomposer un problème complexe ?",
    options: [
      {
        label: "Oui",
        nextStep: "complex_problem",
      },
      {
        label: "Non",
        result: {
          technique: "Few-Shot Prompting",
          description: "Fournissez plusieurs exemples pour aider le modèle à comprendre la tâche.",
          path: "/methodes/few-shot",
        },
      },
    ],
  },
  complex_problem: {
    question: "Préférez-vous une approche progressive ou itérative ?",
    options: [
      {
        label: "Progressive",
        result: {
          technique: "Least-to-Most Prompting",
          description: "Décomposez un problème complexe en sous-problèmes plus simples à résoudre séquentiellement.",
          path: "/methodes/least-to-most",
        },
      },
      {
        label: "Itérative",
        result: {
          technique: "Iterative Prompting",
          description: "Affinez progressivement vos prompts en fonction des réponses précédentes.",
          path: "/methodes/iterative-prompting",
        },
      },
    ],
  },
}

export function InteractiveDecisionTree() {
  const [currentStep, setCurrentStep] = useState<string>("start")
  const [result, setResult] = useState<DecisionOption["result"] | null>(null)
  const [history, setHistory] = useState<string[]>([])

  const handleOptionClick = (option: DecisionOption) => {
    if (option.result) {
      setResult(option.result)
    } else if (option.nextStep) {
      setHistory((prev) => [...prev, currentStep])
      setCurrentStep(option.nextStep)
    }
  }

  const handleBack = () => {
    if (result) {
      setResult(null)
    } else if (history.length > 0) {
      const newHistory = [...history]
      const previousStep = newHistory.pop()
      setHistory(newHistory)
      setCurrentStep(previousStep || "start")
    }
  }

  const handleReset = () => {
    setCurrentStep("start")
    setResult(null)
    setHistory([])
  }

  const step = decisionTree[currentStep]

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-md">
      <CardHeader className="bg-blue-50 border-b">
        <CardTitle className="text-xl text-center text-blue-700">Arbre de décision</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-blue-800">
            Répondez aux questions ci-dessous pour identifier la technique de prompting la plus adaptée à votre besoin.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">Technique recommandée</h3>
                <div className="inline-block bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="text-lg font-semibold">{result.technique}</h4>
                  <p className="text-gray-600 mt-2">{result.description}</p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Link href={result.path}>
                  <Button className="mr-4">
                    En savoir plus <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" onClick={handleReset}>
                  Recommencer
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium text-center">{step.question}</h3>

              <div className="space-y-3">
                {step.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="w-full text-left p-4 border rounded-lg hover:bg-gray-50 transition-colors flex justify-between items-center group"
                  >
                    <span>{option.label}</span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </button>
                ))}
              </div>

              {history.length > 0 && (
                <div className="flex justify-center mt-4">
                  <Button variant="ghost" size="sm" onClick={handleBack}>
                    Retour
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}
