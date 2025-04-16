"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
// Importer les catégories de manière sécurisée
import { categories as allCategories } from "@/data/categories"

export default function ProposerPage() {
  // S'assurer que les catégories sont disponibles et valides
  const categories = Array.isArray(allCategories) ? allCategories : []

  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    difficulty: "",
    promptText: "",
    example: "",
    description: "",
    name: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you could send the data to your API
    console.log(formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl">Merci pour votre contribution !</CardTitle>
            <CardDescription className="text-center">
              Votre prompt a été soumis avec succès et sera examiné par notre équipe.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600 mb-6">
              Nous vous contacterons à l'adresse {formData.email} si votre prompt est sélectionné pour être ajouté à
              notre catalogue.
            </p>
            <div className="flex justify-center">
              <Button onClick={() => setSubmitted(false)}>Proposer un autre prompt</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">Proposer un nouveau prompt</h1>
          <p className="mt-2 text-xl text-center max-w-3xl mx-auto">
            Partagez vos prompts efficaces avec la communauté RH et contribuez à enrichir notre catalogue
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Formulaire de soumission</CardTitle>
            <CardDescription>
              Complétez le formulaire ci-dessous pour proposer un nouveau prompt à ajouter à notre catalogue.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Titre du prompt</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Ex: Créer une description de poste attractive"
                    required
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Catégorie</Label>
                  <Select onValueChange={(value) => handleSelectChange("category", value)} value={formData.category}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez une catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => {
                        if (!category || !category.id || !category.title) return null
                        return (
                          <SelectItem key={category.id} value={category.id}>
                            {category.title}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Niveau de difficulté</Label>
                  <RadioGroup
                    defaultValue="facile"
                    onValueChange={(value) => handleSelectChange("difficulty", value)}
                    className="flex space-x-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="facile" id="facile" />
                      <Label htmlFor="facile" className="cursor-pointer">
                        Facile
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="modere" id="modere" />
                      <Label htmlFor="modere" className="cursor-pointer">
                        Modéré
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="complexe" id="complexe" />
                      <Label htmlFor="complexe" className="cursor-pointer">
                        Complexe
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="promptText">Texte du prompt</Label>
                  <Textarea
                    id="promptText"
                    name="promptText"
                    placeholder="Saisissez ici le texte complet de votre prompt..."
                    rows={6}
                    required
                    value={formData.promptText}
                    onChange={handleChange}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Utilisez [mot] pour les variables que l'utilisateur devra remplacer.
                  </p>
                </div>

                <div>
                  <Label htmlFor="example">Exemple d'utilisation</Label>
                  <Textarea
                    id="example"
                    name="example"
                    placeholder="Donnez un exemple concret d'utilisation de ce prompt..."
                    rows={4}
                    value={formData.example}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description et cas d'usage</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Décrivez brièvement à quoi sert ce prompt et dans quels cas l'utiliser..."
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Votre nom</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Prénom Nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Votre email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@exemple.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  Soumettre le prompt
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            &copy; 2025 Votre Groupe Industriel. Guide des prompts IA pour les RH.
          </p>
        </div>
      </footer>
    </div>
  )
}
