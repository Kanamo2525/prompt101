"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clipboard, Star, Lightbulb, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RelatedPromptCard } from "@/components/related-prompt-card"
import { PromptVariantCard } from "@/components/prompt-variant-card"
import { findPromptById } from "@/lib/prompts"

export default function PromptDetailPage({ params }: { params: { id: string } }) {
  const [copied, setCopied] = useState(false)
  const prompt = findPromptById(params.id)

  if (!prompt) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Prompt non trouvé</h1>
          <p className="text-gray-600 mb-6">Le prompt que vous recherchez n'existe pas ou a été déplacé.</p>
          <Button asChild>
            <Link href="/catalogue">Retour au catalogue</Link>
          </Button>
        </div>
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-400">
      <div className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-amber-100 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-50 p-3 rounded-xl">
                  <div className="text-amber-500 text-2xl">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h2 className="text-amber-700 text-xl font-bold">{prompt.category.title}</h2>
                  <div className="mt-1">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      #{prompt.tags[0]}
                    </span>
                  </div>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href="/catalogue" className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="hidden sm:inline">Retour</span>
                </Link>
              </Button>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div
                  className={`bg-${prompt.category.color}-500 rounded-full w-16 h-16 flex items-center justify-center overflow-hidden`}
                >
                  {prompt.category.icon}
                </div>
              </div>
              <div className="ml-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center">
                  <span className="text-amber-500 mr-2">{prompt.id}.</span>
                  {prompt.title}
                </h1>
                <p className="mt-2 text-gray-600">{prompt.description}</p>

                <div className="mt-3 flex items-center">
                  <div className="flex">
                    {Array.from({ length: prompt.difficultyLevel }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array.from({ length: 3 - prompt.difficultyLevel }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-300" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{prompt.difficulty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt Content */}
          <div className="p-6 sm:p-8 border-t border-gray-200">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-300 relative">
              <div className="absolute top-2 right-2 text-orange-500 px-2 py-1 rounded-md text-xs bg-orange-50">
                {prompt.technique}
              </div>
              <div
                className="mt-4 space-y-4 text-gray-800"
                dangerouslySetInnerHTML={{ __html: prompt.formattedText }}
              />
              <div className="mt-6 flex justify-end">
                <Button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 text-orange-600 hover:text-orange-800 px-3 py-1.5 rounded-lg border border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors"
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
                <div className="bg-orange-200 h-24 w-24 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xl">Ctrl+C</span>
                </div>
              </div>
            </div>

            {/* Examples and Tips */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                <h3 className="font-bold text-blue-800 mb-3">Exemple d'utilisation</h3>
                <div className="space-y-3 text-gray-600" dangerouslySetInnerHTML={{ __html: prompt.example }} />
              </div>

              <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-yellow-800 mb-3">Conseils d'utilisation</h3>
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
                {prompt.variants.map((variant, index) => (
                  <PromptVariantCard key={index} variant={variant} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer with related prompts */}
          <div className="bg-gray-50 p-6 sm:p-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Prompts associés</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {prompt.relatedPrompts.map((relatedPrompt, index) => (
                <RelatedPromptCard key={index} prompt={relatedPrompt} />
              ))}
            </div>
          </div>

          {/* Bottom tip */}
          <div className="p-4 bg-amber-50 border-t border-amber-200 flex items-start">
            <div className="flex-shrink-0 text-amber-500 mr-3">
              <Lightbulb className="h-6 w-6" />
            </div>
            <p className="text-amber-800 text-sm">{prompt.bottomTip}</p>
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
