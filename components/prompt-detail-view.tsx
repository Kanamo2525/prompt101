"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check, Lightbulb, BookOpen, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Prompt } from "@/types/prompt"
import { cn } from "@/lib/utils"

interface PromptDetailViewProps {
  prompt: Prompt
  categoryId?: string
}

export function PromptDetailView({ prompt, categoryId }: PromptDetailViewProps) {
  const [copied, setCopied] = useState(false)

  // Function to copy prompt text to clipboard
  const copyToClipboard = () => {
    if (!prompt?.text) return
    navigator.clipboard.writeText(prompt.text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Get color classes based on category
  const getColorClasses = (color = "blue") => {
    const colorMap: Record<string, { bg: string; text: string; border: string; hover: string; gradient: string }> = {
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200",
        hover: "hover:bg-blue-100",
        gradient: "from-blue-600 to-blue-500",
      },
      green: {
        bg: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200",
        hover: "hover:bg-green-100",
        gradient: "from-green-600 to-green-500",
      },
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200",
        hover: "hover:bg-purple-100",
        gradient: "from-purple-600 to-purple-500",
      },
      amber: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        border: "border-amber-200",
        hover: "hover:bg-amber-100",
        gradient: "from-amber-600 to-amber-500",
      },
      red: {
        bg: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200",
        hover: "hover:bg-red-100",
        gradient: "from-red-600 to-red-500",
      },
      teal: {
        bg: "bg-teal-50",
        text: "text-teal-600",
        border: "border-teal-200",
        hover: "hover:bg-teal-100",
        gradient: "from-teal-600 to-teal-500",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200",
        hover: "hover:bg-orange-100",
        gradient: "from-orange-600 to-orange-500",
      },
    }
    return colorMap[color] || colorMap.blue
  }

  // Get category color
  const getCategoryColor = (categoryId = "general") => {
    const categoryColors: Record<string, string> = {
      onboarding: "blue",
      "talent-management": "purple",
      recruitment: "green",
      training: "amber",
      "personal-development": "teal",
      education: "green",
      "time-management": "orange",
      "healthy-lifestyle": "red",
    }
    return categoryColors[categoryId] || "blue"
  }

  // Get category name
  const getCategoryName = (categoryId = "general") => {
    const categoryNames: Record<string, string> = {
      onboarding: "Onboarding",
      "talent-management": "Gestion des talents",
      recruitment: "Recrutement",
      training: "Formation",
      "personal-development": "Développement personnel",
      education: "Éducation",
      "time-management": "Gestion du temps",
      "healthy-lifestyle": "Mode de vie sain",
    }
    return categoryNames[categoryId] || "Général"
  }

  // Determine category from prompt or props
  const effectiveCategoryId = categoryId || prompt?.category || "general"
  const categoryColor = getCategoryColor(effectiveCategoryId)
  const categoryName = getCategoryName(effectiveCategoryId)
  const colorClasses = getColorClasses(categoryColor)

  // Safety check for prompt properties
  const promptTitle = prompt?.title || "Prompt non trouvé"
  const promptDescription = prompt?.description || "Description non disponible"
  const promptText = prompt?.text || "Texte du prompt non disponible"
  const promptExample = prompt?.example || "Exemple non disponible"
  const promptTips = prompt?.tips || []
  const promptVariants = prompt?.variants || []
  const promptRelatedPrompts = prompt?.relatedPrompts || []
  const promptTechnique = prompt?.technique || "Non spécifié"
  const promptDifficulty = prompt?.difficulty || "Non spécifié"
  const promptDifficultyLevel = prompt?.difficultyLevel || 1

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`bg-gradient-to-r ${colorClasses.gradient} text-white`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  <Link href={`/categories/${effectiveCategoryId}`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Retour
                  </Link>
                </Button>
                <Badge className="bg-white/20 text-white hover:bg-white/30">{categoryName}</Badge>
              </div>
              <h1 className="text-3xl font-bold">{promptTitle}</h1>
              <p className="mt-2 text-xl">{promptDescription}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: promptDifficultyLevel }).map((_, i) => (
                  <span key={i} className="text-yellow-300">
                    ⭐
                  </span>
                ))}
              </div>
              <Badge className="bg-white/20 text-white hover:bg-white/30">{promptTechnique}</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="prompt" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="prompt" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Prompt</span>
            </TabsTrigger>
            <TabsTrigger value="example" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Exemple</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Conseils</span>
            </TabsTrigger>
            <TabsTrigger value="variants" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Variantes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="prompt">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
                  <Button onClick={copyToClipboard} variant="outline" size="icon" className="absolute top-2 right-2">
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <div className="pt-8 whitespace-pre-line">{promptText}</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-lg mb-2">Exemple d'utilisation</h3>
                  <div className="whitespace-pre-line">{promptExample}</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-lg mb-2">Conseils d'utilisation</h3>
                  {promptTips && promptTips.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {promptTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>Aucun conseil disponible pour ce prompt.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="variants">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-medium text-lg mb-2">Variantes du prompt</h3>
                  {promptVariants && promptVariants.length > 0 ? (
                    <div className="space-y-4">
                      {promptVariants.map((variant, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-md mb-2">{variant.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{variant.description}</p>
                          {variant.text && (
                            <div className="bg-white p-3 rounded border border-gray-200 whitespace-pre-line">
                              {variant.text}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Aucune variante disponible pour ce prompt.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related prompts section */}
        {promptRelatedPrompts && promptRelatedPrompts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Prompts associés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {promptRelatedPrompts.map((relatedPrompt, index) => (
                <Link key={index} href={`/categories/${effectiveCategoryId}/${relatedPrompt.id}`} className="block">
                  <div
                    className={cn(
                      "bg-white rounded-xl overflow-hidden shadow-md border-l-4",
                      `border-${categoryColor}-600`,
                      "hover:shadow-lg transition-shadow",
                    )}
                  >
                    <div className={cn("p-4", colorClasses.bg)}>
                      <h3 className="text-lg font-bold text-gray-800">{relatedPrompt.title}</h3>
                      <p className="text-gray-600 mt-1 text-sm">{relatedPrompt.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Next-ai.fr. Guide des prompts pour l'IA générative.
          </p>
        </div>
      </footer>
    </div>
  )
}
