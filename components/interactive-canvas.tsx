"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, RefreshCw, Wand2 } from "lucide-react"

const promptTemplates = {
  "zero-shot": "Je souhaite que tu agisses comme {role}. {contexte}. {tâche}.",
  "one-shot":
    "Je souhaite que tu agisses comme {role}. Voici un exemple de ce que j'attends: {exemple}. Maintenant, {tâche}.",
  "few-shot":
    "Je souhaite que tu agisses comme {role}. Voici quelques exemples de ce que j'attends:\n\nExemple 1: {exemple1}\nExemple 2: {exemple2}\n\nMaintenant, {tâche}.",
  "chain-of-thought":
    "Je souhaite que tu agisses comme {role}. {contexte}. Pour {tâche}, je te demande de procéder étape par étape, en expliquant ton raisonnement à chaque étape.",
  "least-to-most":
    "Je souhaite que tu agisses comme {role}. Pour résoudre {tâche}, procède par étapes progressives, du plus simple au plus complexe. Commence par {première_étape}, puis continue avec des étapes de plus en plus élaborées.",
}

const roles = [
  "un consultant en stratégie",
  "un expert en ressources humaines",
  "un coach professionnel",
  "un spécialiste en marketing",
  "un analyste financier",
  "un formateur en leadership",
  "un expert en transformation digitale",
  "un consultant en gestion de projet",
]

const InteractiveCanvas = () => {
  const [formData, setFormData] = useState({
    role: "",
    context: "",
    task: "",
    example1: "",
    example2: "",
    firstStep: "",
    technique: "zero-shot",
  })

  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("form")

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generatePrompt = () => {
    const template = promptTemplates[formData.technique as keyof typeof promptTemplates]

    // Replace placeholders with actual values
    let prompt = template
      .replace("{role}", formData.role || "un expert")
      .replace("{contexte}", formData.context)
      .replace("{tâche}", formData.task)

    if (formData.technique === "one-shot" && formData.example1) {
      prompt = prompt.replace("{exemple}", formData.example1)
    }

    if (formData.technique === "few-shot") {
      prompt = prompt
        .replace("{exemple1}", formData.example1 || "Exemple non fourni")
        .replace("{exemple2}", formData.example2 || "Exemple non fourni")
    }

    if (formData.technique === "least-to-most") {
      prompt = prompt.replace("{première_étape}", formData.firstStep || "analyser le problème")
    }

    setGeneratedPrompt(prompt)
    setActiveTab("result")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetForm = () => {
    setFormData({
      role: "",
      context: "",
      task: "",
      example1: "",
      example2: "",
      firstStep: "",
      technique: "zero-shot",
    })
    setGeneratedPrompt("")
    setActiveTab("form")
  }

  const randomizeRole = () => {
    const randomRole = roles[Math.floor(Math.random() * roles.length)]
    setFormData((prev) => ({ ...prev, role: randomRole }))
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card className="border-2 border-blue-100">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl text-center">Canevas Interactif de Création de Prompts</CardTitle>
          <CardDescription className="text-center">
            Créez des prompts efficaces en quelques clics en utilisant les techniques de prompting avancées
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="form">Formulaire</TabsTrigger>
              <TabsTrigger value="result">Résultat</TabsTrigger>
            </TabsList>

            <TabsContent value="form" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Technique de prompting</label>
                  <Select value={formData.technique} onValueChange={(value) => handleChange("technique", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une technique" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zero-shot">Zero-Shot</SelectItem>
                      <SelectItem value="one-shot">One-Shot</SelectItem>
                      <SelectItem value="few-shot">Few-Shot</SelectItem>
                      <SelectItem value="chain-of-thought">Chain-of-Thought</SelectItem>
                      <SelectItem value="least-to-most">Least-to-Most</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-1">Rôle de l'IA</label>
                    <Input
                      placeholder="ex: un consultant en stratégie"
                      value={formData.role}
                      onChange={(e) => handleChange("role", e.target.value)}
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={randomizeRole}
                    className="mb-0.5"
                    title="Suggérer un rôle aléatoire"
                  >
                    <Wand2 className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Contexte</label>
                  <Textarea
                    placeholder="Décrivez le contexte de votre demande"
                    value={formData.context}
                    onChange={(e) => handleChange("context", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Tâche à accomplir</label>
                  <Textarea
                    placeholder="Décrivez précisément ce que vous attendez de l'IA"
                    value={formData.task}
                    onChange={(e) => handleChange("task", e.target.value)}
                    rows={3}
                  />
                </div>

                {(formData.technique === "one-shot" || formData.technique === "few-shot") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-1">Exemple 1</label>
                    <Textarea
                      placeholder="Fournissez un exemple de ce que vous attendez"
                      value={formData.example1}
                      onChange={(e) => handleChange("example1", e.target.value)}
                      rows={2}
                    />
                  </motion.div>
                )}

                {formData.technique === "few-shot" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-1">Exemple 2</label>
                    <Textarea
                      placeholder="Fournissez un deuxième exemple"
                      value={formData.example2}
                      onChange={(e) => handleChange("example2", e.target.value)}
                      rows={2}
                    />
                  </motion.div>
                )}

                {formData.technique === "least-to-most" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label className="block text-sm font-medium mb-1">Première étape</label>
                    <Input
                      placeholder="Quelle est la première étape simple?"
                      value={formData.firstStep}
                      onChange={(e) => handleChange("firstStep", e.target.value)}
                    />
                  </motion.div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="result" className="mt-4">
              {generatedPrompt ? (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h3 className="font-medium mb-2">Prompt généré:</h3>
                    <div className="whitespace-pre-wrap font-mono text-sm">{generatedPrompt}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" onClick={copyToClipboard} className="flex-1">
                      {copied ? "Copié !" : "Copier le prompt"}
                      <Copy className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" onClick={() => setActiveTab("form")} className="flex-1">
                      Modifier
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>Remplissez le formulaire et générez votre prompt pour voir le résultat ici.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <Button variant="outline" onClick={resetForm}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Réinitialiser
          </Button>
          <Button onClick={generatePrompt}>Générer le prompt</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default InteractiveCanvas
