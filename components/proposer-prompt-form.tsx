"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"
import { PromptPreview } from "@/components/prompt-preview"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const promptCategories = [
  { value: "zero-shot", label: "Zero-Shot Prompting" },
  { value: "one-shot", label: "One-Shot Prompting" },
  { value: "few-shot", label: "Few-Shot Prompting" },
  { value: "chain-of-thought", label: "Chain-of-Thought" },
  { value: "expert-role-playing", label: "Expert Role-Playing" },
  { value: "contextual-augmentation", label: "Contextual Augmentation" },
  { value: "multi-prompting", label: "Multi-Prompting" },
  { value: "iterative-prompting", label: "Iterative Prompting" },
  { value: "least-to-most", label: "Least-to-Most Prompting" },
  { value: "generated-knowledge", label: "Generated Knowledge" },
]

const useCaseCategories = [
  { value: "automatisation", label: "Automatisation" },
  { value: "avant-garde", label: "Avant-Garde" },
  { value: "assistance", label: "Assistance" },
  { value: "augmentation", label: "Augmentation" },
]

const formSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Le titre doit contenir au moins 5 caractères.",
    })
    .max(100, {
      message: "Le titre ne doit pas dépasser 100 caractères.",
    }),
  category: z.string({
    required_error: "Veuillez sélectionner une catégorie.",
  }),
  useCase: z.string({
    required_error: "Veuillez sélectionner un cas d'usage.",
  }),
  description: z
    .string()
    .min(20, {
      message: "La description doit contenir au moins 20 caractères.",
    })
    .max(500, {
      message: "La description ne doit pas dépasser 500 caractères.",
    }),
  promptType: z.enum(["simple", "canevas"], {
    required_error: "Veuillez sélectionner un type de prompt.",
  }),
  promptContent: z.string().min(10, {
    message: "Le contenu du prompt doit contenir au moins 10 caractères.",
  }),
  role: z.string().optional(),
  context: z.string().optional(),
  task: z.string().optional(),
  format: z.string().optional(),
  examples: z.string().optional(),
  authorName: z.string().min(2, {
    message: "Veuillez indiquer votre nom ou pseudonyme.",
  }),
  authorEmail: z.string().email({
    message: "Veuillez entrer une adresse email valide.",
  }),
})

export function ProposerPromptForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      promptContent: "",
      role: "",
      context: "",
      task: "",
      format: "",
      examples: "",
      authorName: "",
      authorEmail: "",
      promptType: "simple",
    },
  })

  const watchPromptType = form.watch("promptType")
  const watchRole = form.watch("role")
  const watchContext = form.watch("context")
  const watchTask = form.watch("task")
  const watchFormat = form.watch("format")
  const watchExamples = form.watch("examples")
  const watchPromptContent = form.watch("promptContent")

  // Générer le prompt basé sur le canevas
  const generatePromptFromCanvas = () => {
    if (watchPromptType === "canevas") {
      let generatedContent = ""

      if (watchRole) {
        generatedContent += `En tant que ${watchRole}, `
      }

      if (watchContext) {
        generatedContent += `${watchContext} `
      }

      if (watchTask) {
        generatedContent += `${watchTask}`
      }

      if (watchFormat) {
        generatedContent += `\n\nFormat attendu: ${watchFormat}`
      }

      if (watchExamples) {
        generatedContent += `\n\nExemples: ${watchExamples}`
      }

      setGeneratedPrompt(generatedContent)
      return generatedContent
    }

    return watchPromptContent
  }

  // Mettre à jour la prévisualisation quand les champs changent
  useEffect(() => {
    if (watchPromptType === "canevas") {
      generatePromptFromCanvas()
    } else {
      setGeneratedPrompt(watchPromptContent)
    }
  }, [watchPromptType, watchRole, watchContext, watchTask, watchFormat, watchExamples, watchPromptContent])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    try {
      // Préparer les données pour la soumission
      const finalPromptContent = watchPromptType === "canevas" ? generatePromptFromCanvas() : values.promptContent

      const submissionData = {
        ...values,
        promptContent: finalPromptContent,
        status: "pending", // En attente de modération
        submittedAt: new Date().toISOString(),
      }

      console.log("Submitting data to API...")
      // Appel API pour la soumission
      const response = await fetch("/api/prompts/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()
      console.log("API response:", result)

      if (!response.ok) {
        throw new Error(result.message || "Une erreur est survenue lors de la soumission")
      }

      // Afficher le message de succès
      setIsSubmitted(true)
    } catch (error) {
      console.error("Erreur lors de la soumission:", error)
      setError(error instanceof Error ? error.message : "Une erreur est survenue lors de la soumission")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Merci pour votre contribution !</h2>
          <p className="text-green-700 mb-6">
            Votre prompt a été soumis avec succès et sera examiné par notre équipe. Vous recevrez une notification par
            email lorsqu'il sera publié.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => (window.location.href = "/proposer")}>
              Proposer un autre prompt
            </Button>
            <Button onClick={() => (window.location.href = "/catalogue")}>Explorer le catalogue</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre du prompt</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Analyse SWOT pour stratégie marketing" {...field} />
                </FormControl>
                <FormDescription>Un titre clair qui décrit l'objectif du prompt</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {promptCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="useCase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cas d'usage</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {useCaseCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Décrivez brièvement l'objectif de ce prompt et son utilité..."
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>Une description claire de ce que fait le prompt et quand l'utiliser</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="border rounded-lg p-6 bg-slate-50">
          <h3 className="text-lg font-medium mb-4">Contenu du prompt</h3>

          <FormField
            control={form.control}
            name="promptType"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Type de prompt</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="simple" />
                      </FormControl>
                      <FormLabel className="font-normal">Prompt simple (texte libre)</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="canevas" />
                      </FormControl>
                      <FormLabel className="font-normal">Utiliser le canevas de prompt (guidé)</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {watchPromptType === "simple" ? (
            <FormField
              control={form.control}
              name="promptContent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contenu du prompt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Entrez votre prompt complet ici..."
                      className="min-h-[200px] font-mono"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Saisissez le texte complet de votre prompt</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rôle (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: expert en marketing digital avec 10 ans d'expérience..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Le rôle ou persona que l'IA doit adopter</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="context"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contexte (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: notre entreprise de 50 employés cherche à se développer sur un nouveau marché..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Le contexte ou les informations d'arrière-plan</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="task"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tâche</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: analyse les forces et faiblesses de notre stratégie actuelle et propose 3 axes d'amélioration..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>L'instruction précise de ce que l'IA doit faire</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="format"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Format attendu (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: présente ton analyse sous forme de tableau avec 3 colonnes..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Le format ou la structure de la réponse souhaitée</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="examples"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Exemples (optionnel)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: voici un exemple de réponse attendue..."
                        className="min-h-[80px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Des exemples pour guider l'IA</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        <div className="border rounded-lg p-6 bg-slate-50">
          <h3 className="text-lg font-medium mb-4">Prévisualisation du prompt</h3>
          <PromptPreview content={watchPromptType === "canevas" ? generatedPrompt : watchPromptContent} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="authorName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre nom ou pseudonyme</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Marie Dupont" {...field} />
                </FormControl>
                <FormDescription>Sera affiché comme créateur du prompt</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authorEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Votre email</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: marie@exemple.com" {...field} />
                </FormControl>
                <FormDescription>Pour vous notifier quand votre prompt sera publié</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting} className="min-w-[150px]">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Soumettre le prompt"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
