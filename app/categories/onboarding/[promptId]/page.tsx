"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clipboard, Star, Lightbulb, Check, BookOpen, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { onboardingPrompts } from "@/data/onboarding-prompts"

export default function PromptDetailPage({ params }: { params: { promptId: string } }) {
  const [copied, setCopied] = useState(false)

  // Find the prompt by ID
  const prompt = onboardingPrompts.find((p) => p.id === params.promptId)

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Prompt non trouvé</h1>
          <p className="text-gray-600 mb-6">Le prompt que vous recherchez n'existe pas ou a été déplacé.</p>
          <Button asChild>
            <Link href="/categories/onboarding">Retour à la catégorie Onboarding</Link>
          </Button>
        </div>
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Get related prompts (excluding the current one)
  const relatedPrompts = onboardingPrompts.filter((p) => p.id !== params.promptId).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-400">
      <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-green-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-50 p-3 rounded-xl">
                  <div className="text-green-500 text-2xl">
                    <UserPlus className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h2 className="text-green-700 text-xl font-bold">Onboarding et intégration</h2>
                  <div className="mt-1">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">#RH</span>
                  </div>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link
                  href="/categories/onboarding"
                  className="text-gray-500 hover:text-gray-700 flex items-center space-x-1"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Retour</span>
                </Link>
              </Button>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden">
                  <UserPlus className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="ml-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
                  <span className="text-green-500 mr-2">{prompt.id}.</span>
                  {prompt.title}
                </h1>
                <p className="mt-2 text-gray-600">{prompt.description}</p>

                <div className="mt-3 flex items-center">
                  <div className="flex">
                    {Array.from({ length: prompt.difficulty }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array.from({ length: 3 - prompt.difficulty }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-300" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    {prompt.difficulty === 1 ? "Facile" : prompt.difficulty === 2 ? "Modéré" : "Complexe"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Content */}
          <div className="p-6 sm:p-8 border-t border-gray-200">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 relative">
              <div className="absolute top-2 right-2 text-green-500 px-2 py-1 rounded-md text-xs bg-green-50">
                Technique RCT
              </div>
              <div className="mt-4 space-y-4 text-gray-800 whitespace-pre-line">{prompt.prompt}</div>
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-green-600 hover:text-green-800 px-3 py-1.5 rounded-lg border border-green-200 bg-green-50 hover:bg-green-100 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copié !</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="h-4 w-4" />
                      <span>Copier</span>
                    </>
                  )}
                </Button>
              </div>
              <div className="absolute right-0 bottom-0 transform translate-y-1/4 translate-x-1/4 opacity-20 pointer-events-none">
                <div className="bg-green-200 h-24 w-24 rounded-full flex items-center justify-center">
                  <span className="text-green-500 font-bold text-xl">Ctrl+C</span>
                </div>
              </div>
            </div>

            {/* Examples and Tips */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Exemple d'utilisation
                </h3>
                <div className="space-y-3 text-gray-600 whitespace-pre-line">{prompt.example}</div>
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-yellow-800 mb-3 flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Conseils d'utilisation
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  {prompt.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick variations */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Variantes de ce prompt</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <p className="font-medium text-gray-800">Version simplifiée</p>
                  <p className="text-sm text-gray-500 mt-1">Une version plus concise du prompt</p>
                </button>
                <button className="text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <p className="font-medium text-gray-800">Version détaillée</p>
                  <p className="text-sm text-gray-500 mt-1">Une version plus complète avec plus de contexte</p>
                </button>
              </div>
            </div>
          </div>

          {/* Footer with related prompts */}
          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Prompts associés</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPrompts.map((relatedPrompt) => (
                <Link key={relatedPrompt.id} href={`/categories/onboarding/${relatedPrompt.id}`}>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                        #Onboarding
                      </span>
                      <div className="flex">
                        {Array.from({ length: relatedPrompt.difficulty }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <h4 className="font-medium mt-2">{relatedPrompt.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom tip */}
          <div className="p-4 bg-green-50 border-t border-green-200 flex items-start">
            <div className="flex-shrink-0 text-green-500 mr-3">
              <Lightbulb className="h-6 w-6" />
            </div>
            <p className="text-green-800 text-sm">
              Pour plus de pertinence, adaptez ce prompt à votre contexte spécifique et à la culture de votre
              entreprise.
            </p>
          </div>
        </div>

        {/* Page number */}
        <div className="flex justify-end mt-2 mr-2">
          <span className="text-white text-opacity-80 font-medium">{prompt.id}</span>
        </div>
      </div>
    </div>
  )
}
