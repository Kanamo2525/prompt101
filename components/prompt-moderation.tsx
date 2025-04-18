"use client"

import { useState } from "react"
import { CheckCircle, XCircle, Eye, Filter } from "lucide-react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PromptPreview } from "@/components/prompt-preview"

// Données fictives pour la démonstration
const mockPrompts = [
  {
    id: "1",
    title: "Analyse SWOT pour stratégie marketing",
    category: "expert-role-playing",
    useCase: "assistance",
    description: "Un prompt pour générer une analyse SWOT complète pour une stratégie marketing",
    promptContent:
      "En tant qu'expert en marketing stratégique avec 15 ans d'expérience, réalise une analyse SWOT complète pour notre entreprise qui opère dans le secteur de la technologie éducative. Notre produit principal est une plateforme d'apprentissage en ligne pour les écoles primaires. Nous avons 50 employés, 3 ans d'existence et sommes présents dans 3 pays. Présente ton analyse sous forme de tableau avec des puces pour chaque élément, et ajoute une section de recommandations stratégiques basées sur cette analyse SWOT.",
    authorName: "Marie Dupont",
    authorEmail: "marie@exemple.com",
    status: "pending",
    submittedAt: "2025-04-15T14:30:00Z",
  },
  {
    id: "2",
    title: "Brainstorming d'idées de contenu",
    category: "chain-of-thought",
    useCase: "augmentation",
    description: "Génère des idées de contenu originales pour un blog sur le développement personnel",
    promptContent:
      "Je gère un blog sur le développement personnel et je cherche des idées de contenu originales. Mon public cible est composé de professionnels entre 25 et 45 ans qui cherchent à améliorer leur productivité et leur bien-être. Utilise une approche étape par étape pour générer 10 idées d'articles innovantes qui n'ont pas été surexploitées dans ce domaine. Pour chaque idée, fournis un titre accrocheur, un angle unique, et 3 points clés à aborder.",
    authorName: "Thomas Martin",
    authorEmail: "thomas@exemple.com",
    status: "pending",
    submittedAt: "2025-04-16T09:15:00Z",
  },
  {
    id: "3",
    title: "Automatisation de réponses aux avis clients",
    category: "few-shot",
    useCase: "automatisation",
    description: "Prompt pour générer des réponses personnalisées aux avis clients",
    promptContent:
      'Voici quelques exemples de bonnes réponses à des avis clients:\n\nAvis: "Service rapide et produit de qualité, je recommande !"\nRéponse: "Merci beaucoup pour votre avis positif ! Nous sommes ravis que notre service et la qualité de nos produits aient répondu à vos attentes. Votre recommandation est très précieuse pour nous. N\'hésitez pas à revenir, nous serons toujours heureux de vous servir !"\n\nAvis: "Livraison en retard de 2 jours, mais le produit correspond à mes attentes."\nRéponse: "Nous vous remercions pour votre retour. Nous sommes désolés pour le retard de livraison et nous nous efforçons constamment d\'améliorer notre service logistique. Nous sommes néanmoins heureux que le produit vous convienne. N\'hésitez pas à nous contacter directement pour toute commande future, nous veillerons personnellement à ce que la livraison soit ponctuelle."\n\nUtilise ces exemples pour générer une réponse personnalisée et professionnelle à l\'avis suivant: "J\'ai commandé un t-shirt taille L mais il est trop petit pour moi. La qualité est bonne mais je suis déçu par le sizing."',
    authorName: "Sophie Leroy",
    authorEmail: "sophie@exemple.com",
    status: "approved",
    submittedAt: "2025-04-10T11:20:00Z",
  },
  {
    id: "4",
    title: "Analyse de données financières",
    category: "contextual-augmentation",
    useCase: "assistance",
    description: "Analyse des données financières trimestrielles et génération de rapport",
    promptContent:
      "En te basant sur les données financières suivantes de notre entreprise pour le premier trimestre 2025:\n\nRevenu: 2.3M€\nCroissance: +15% par rapport à T1 2024\nMarge brute: 32% (vs 29% l'année précédente)\nDépenses marketing: 340K€ (+22%)\nCoûts de développement: 420K€ (stable)\nTaux d'acquisition client: 3.2% (vs 3.8% au trimestre précédent)\nTaux de rétention: 87% (+4 points)\n\nRéalise une analyse complète qui identifie:\n1. Les 3 points forts de ce trimestre\n2. Les 2 points d'attention majeurs\n3. 3 recommandations stratégiques pour le prochain trimestre\n\nPrésente ton analyse sous forme d'un rapport structuré avec des sections clairement identifiées et des visualisations textuelles des tendances.",
    authorName: "Alexandre Dubois",
    authorEmail: "alex@exemple.com",
    status: "rejected",
    submittedAt: "2025-04-12T16:45:00Z",
    rejectionReason:
      "Le prompt contient des données financières sensibles qui ne devraient pas être partagées publiquement.",
  },
]

type PromptStatus = "pending" | "approved" | "rejected"

export function PromptModeration() {
  const [prompts, setPrompts] = useState(mockPrompts)
  const [selectedPrompt, setSelectedPrompt] = useState<(typeof mockPrompts)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [rejectionReason, setRejectionReason] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const filteredPrompts = prompts.filter((prompt) => {
    if (categoryFilter === "all") return true
    return prompt.category === categoryFilter
  })

  const pendingPrompts = filteredPrompts.filter((p) => p.status === "pending")
  const approvedPrompts = filteredPrompts.filter((p) => p.status === "approved")
  const rejectedPrompts = filteredPrompts.filter((p) => p.status === "rejected")

  const approvePrompt = (id: string) => {
    setPrompts(prompts.map((p) => (p.id === id ? { ...p, status: "approved" } : p)))
  }

  const rejectPrompt = (id: string) => {
    if (!rejectionReason) return

    setPrompts(prompts.map((p) => (p.id === id ? { ...p, status: "rejected", rejectionReason } : p)))
    setIsDialogOpen(false)
    setRejectionReason("")
    setSelectedPrompt(null)
  }

  const openRejectDialog = (prompt: (typeof mockPrompts)[0]) => {
    setSelectedPrompt(prompt)
    setIsDialogOpen(true)
  }

  const viewPromptDetails = (prompt: (typeof mockPrompts)[0]) => {
    setSelectedPrompt(prompt)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium">Filtrer par technique:</span>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Toutes les techniques" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les techniques</SelectItem>
              <SelectItem value="zero-shot">Zero-Shot Prompting</SelectItem>
              <SelectItem value="one-shot">One-Shot Prompting</SelectItem>
              <SelectItem value="few-shot">Few-Shot Prompting</SelectItem>
              <SelectItem value="chain-of-thought">Chain-of-Thought</SelectItem>
              <SelectItem value="expert-role-playing">Expert Role-Playing</SelectItem>
              <SelectItem value="contextual-augmentation">Contextual Augmentation</SelectItem>
              <SelectItem value="multi-prompting">Multi-Prompting</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm text-muted-foreground">
          {pendingPrompts.length} en attente · {approvedPrompts.length} approuvés · {rejectedPrompts.length} rejetés
        </div>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">En attente ({pendingPrompts.length})</TabsTrigger>
          <TabsTrigger value="approved">Approuvés ({approvedPrompts.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejetés ({rejectedPrompts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          {pendingPrompts.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">Aucun prompt en attente de modération</div>
          ) : (
            <div className="space-y-4">
              {pendingPrompts.map((prompt) => (
                <Card key={prompt.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{prompt.title}</CardTitle>
                        <CardDescription>
                          Soumis par {prompt.authorName} le{" "}
                          {format(new Date(prompt.submittedAt), "d MMMM yyyy à HH:mm", { locale: fr })}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{prompt.category}</Badge>
                        <Badge variant="outline">{prompt.useCase}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">{prompt.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => viewPromptDetails(prompt)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir le détail
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600"
                        onClick={() => openRejectDialog(prompt)}
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Rejeter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-green-600"
                        onClick={() => approvePrompt(prompt.id)}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approuver
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="approved" className="mt-6">
          {approvedPrompts.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">Aucun prompt approuvé</div>
          ) : (
            <div className="space-y-4">
              {approvedPrompts.map((prompt) => (
                <Card key={prompt.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{prompt.title}</CardTitle>
                        <CardDescription>
                          Soumis par {prompt.authorName} le{" "}
                          {format(new Date(prompt.submittedAt), "d MMMM yyyy à HH:mm", { locale: fr })}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{prompt.category}</Badge>
                        <Badge variant="outline">{prompt.useCase}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground">{prompt.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" onClick={() => viewPromptDetails(prompt)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir le détail
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          {rejectedPrompts.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">Aucun prompt rejeté</div>
          ) : (
            <div className="space-y-4">
              {rejectedPrompts.map((prompt) => (
                <Card key={prompt.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{prompt.title}</CardTitle>
                        <CardDescription>
                          Soumis par {prompt.authorName} le{" "}
                          {format(new Date(prompt.submittedAt), "d MMMM yyyy à HH:mm", { locale: fr })}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline">{prompt.category}</Badge>
                        <Badge variant="outline">{prompt.useCase}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{prompt.description}</p>
                    <div className="bg-red-50 border border-red-200 rounded p-2 text-sm text-red-700">
                      <strong>Raison du rejet:</strong> {prompt.rejectionReason}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" onClick={() => viewPromptDetails(prompt)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir le détail
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {selectedPrompt && (
        <Dialog
          open={selectedPrompt !== null && !isDialogOpen}
          onOpenChange={(open) => !open && setSelectedPrompt(null)}
        >
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedPrompt.title}</DialogTitle>
              <DialogDescription>
                Soumis par {selectedPrompt.authorName} ({selectedPrompt.authorEmail})
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div>
                <h4 className="text-sm font-medium mb-1">Description</h4>
                <p className="text-sm">{selectedPrompt.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Technique: {selectedPrompt.category}</Badge>
                <Badge variant="outline">Cas d'usage: {selectedPrompt.useCase}</Badge>
                <Badge
                  variant={
                    selectedPrompt.status === "approved"
                      ? "success"
                      : selectedPrompt.status === "rejected"
                        ? "destructive"
                        : "secondary"
                  }
                >
                  {selectedPrompt.status === "approved"
                    ? "Approuvé"
                    : selectedPrompt.status === "rejected"
                      ? "Rejeté"
                      : "En attente"}
                </Badge>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-1">Contenu du prompt</h4>
                <PromptPreview content={selectedPrompt.promptContent} />
              </div>

              {selectedPrompt.status === "rejected" && selectedPrompt.rejectionReason && (
                <div className="bg-red-50 border border-red-200 rounded p-3 text-sm text-red-700">
                  <strong>Raison du rejet:</strong> {selectedPrompt.rejectionReason}
                </div>
              )}
            </div>

            {selectedPrompt.status === "pending" && (
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => openRejectDialog(selectedPrompt)}>
                  <XCircle className="mr-2 h-4 w-4" />
                  Rejeter
                </Button>
                <Button
                  onClick={() => {
                    approvePrompt(selectedPrompt.id)
                    setSelectedPrompt(null)
                  }}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Approuver
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rejeter le prompt</DialogTitle>
            <DialogDescription>
              Veuillez indiquer la raison du rejet. Cette information sera envoyée à l'auteur.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <label htmlFor="rejection-reason" className="text-sm font-medium mb-2 block">
              Raison du rejet
            </label>
            <textarea
              id="rejection-reason"
              className="w-full min-h-[100px] p-2 border rounded-md"
              placeholder="Expliquez pourquoi ce prompt ne peut pas être approuvé..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setIsDialogOpen(false)
                setRejectionReason("")
              }}
            >
              Annuler
            </Button>
            <Button
              variant="destructive"
              onClick={() => selectedPrompt && rejectPrompt(selectedPrompt.id)}
              disabled={!rejectionReason}
            >
              Confirmer le rejet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
