"use client"

import { useState } from "react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Technique = {
  name: string
  score: number
  description: string
  link: string
}

type QuadrantData = {
  title: string
  description: string
  color: string
  bgColor: string
  borderColor: string
  techniques: Technique[]
  useCases: string[]
}

export function DynamicOpportunityMatrix() {
  const [open, setOpen] = useState(false)
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantData | null>(null)

  const quadrants: Record<string, QuadrantData> = {
    assistance: {
      title: "ASSISTANCE",
      description: "Amélioration des capacités humaines",
      color: "text-amber-800",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      techniques: [
        {
          name: "Expert Role-Playing",
          score: 9,
          description: "Demander à l'IA d'adopter un rôle d'expert pour fournir des conseils spécialisés",
          link: "/methodes/expert-role-playing",
        },
        {
          name: "Chain-of-Thought",
          score: 8,
          description: "Encourager l'IA à décomposer son raisonnement en étapes logiques",
          link: "/methodes/chain-of-thought",
        },
        {
          name: "Zero-Shot",
          score: 7,
          description: "Formuler une demande directe et claire pour obtenir une assistance immédiate",
          link: "/methodes/zero-shot",
        },
      ],
      useCases: ["Outils d'aide à la décision", "Assistants intelligents augmentés", "Amélioration de l'analyse"],
    },
    automatisation: {
      title: "AUTOMATISATION",
      description: "Remplacement de processus existants",
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      techniques: [
        {
          name: "Few-Shot",
          score: 9,
          description: "Fournir plusieurs exemples pour standardiser les réponses automatisées",
          link: "/methodes/few-shot",
        },
        {
          name: "One-Shot",
          score: 8,
          description: "Donner un exemple unique pour guider l'automatisation simple",
          link: "/methodes/one-shot",
        },
        {
          name: "Zero-Shot",
          score: 7,
          description: "Formuler des instructions claires pour des tâches répétitives simples",
          link: "/methodes/zero-shot",
        },
      ],
      useCases: [
        "Automatisation de processus et workflows",
        "Systèmes de réponse automatique",
        "Traitement de données à grande échelle",
      ],
    },
    augmentation: {
      title: "AUGMENTATION",
      description: "Co-création et découverte",
      color: "text-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      techniques: [
        {
          name: "Iterative Prompting",
          score: 9,
          description: "Affiner progressivement les prompts pour explorer et co-créer",
          link: "/methodes/iterative-prompting",
        },
        {
          name: "Generated Knowledge",
          score: 8,
          description: "Demander à l'IA de générer des connaissances pour enrichir la réflexion",
          link: "/methodes/generated-knowledge",
        },
        {
          name: "Chain-of-Thought",
          score: 7,
          description: "Collaborer avec l'IA en suivant un raisonnement étape par étape",
          link: "/methodes/chain-of-thought",
        },
      ],
      useCases: [
        "Brainstorming augmenté et idéation",
        "Recherche collaborative",
        "Développement de concepts novateurs",
      ],
    },
    avantGarde: {
      title: "AVANT-GARDE",
      description: "Création autonome de nouvelles solutions",
      color: "text-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      techniques: [
        {
          name: "Multi-Prompting",
          score: 9,
          description: "Combiner plusieurs techniques pour des créations complexes et innovantes",
          link: "/methodes/multi-prompting",
        },
        {
          name: "Contextual Augmentation",
          score: 8,
          description: "Enrichir le contexte pour des créations plus originales et pertinentes",
          link: "/methodes/contextual-augmentation",
        },
        {
          name: "Generated Knowledge",
          score: 7,
          description: "Utiliser les connaissances générées par l'IA pour créer des solutions innovantes",
          link: "/methodes/generated-knowledge",
        },
      ],
      useCases: [
        "Création automatisée de contenu",
        "Conception générative et prototypage",
        "Découverte de nouvelles solutions",
      ],
    },
  }

  const handleQuadrantClick = (quadrantKey: string) => {
    setSelectedQuadrant(quadrants[quadrantKey])
    setOpen(true)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-center">Matrice d'opportunité pour l'IA générative</h3>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-2 text-center text-sm text-gray-500 mb-2">
          <div className="flex justify-between">
            <span>Optimisation de l'existant</span>
            <span>Innovation / Création</span>
          </div>
        </div>

        <div
          className={`${quadrants.automatisation.bgColor} p-6 rounded-tl-lg border ${quadrants.automatisation.borderColor} cursor-pointer transition-all hover:shadow-md`}
          onClick={() => handleQuadrantClick("automatisation")}
        >
          <h4 className={`text-xl font-bold mb-2 ${quadrants.automatisation.color}`}>
            {quadrants.automatisation.title}
          </h4>
          <p className="text-sm mb-4">Remplacement de processus existants</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Automatisation de processus</li>
            <li>Systèmes de réponse automatique</li>
          </ul>
        </div>

        <div
          className={`${quadrants.avantGarde.bgColor} p-6 rounded-tr-lg border ${quadrants.avantGarde.borderColor} cursor-pointer transition-all hover:shadow-md`}
          onClick={() => handleQuadrantClick("avantGarde")}
        >
          <h4 className={`text-xl font-bold mb-2 ${quadrants.avantGarde.color}`}>{quadrants.avantGarde.title}</h4>
          <p className="text-sm mb-4">Création autonome de nouvelles solutions</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Création de contenu original</li>
            <li>Conception générative</li>
          </ul>
        </div>

        <div
          className={`${quadrants.assistance.bgColor} p-6 rounded-bl-lg border ${quadrants.assistance.borderColor} cursor-pointer transition-all hover:shadow-md`}
          onClick={() => handleQuadrantClick("assistance")}
        >
          <h4 className={`text-xl font-bold mb-2 ${quadrants.assistance.color}`}>{quadrants.assistance.title}</h4>
          <p className="text-sm mb-4">Amélioration des capacités humaines</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Outils d'aide à la décision</li>
            <li>Assistants intelligents</li>
          </ul>
        </div>

        <div
          className={`${quadrants.augmentation.bgColor} p-6 rounded-br-lg border ${quadrants.augmentation.borderColor} cursor-pointer transition-all hover:shadow-md`}
          onClick={() => handleQuadrantClick("augmentation")}
        >
          <h4 className={`text-xl font-bold mb-2 ${quadrants.augmentation.color}`}>{quadrants.augmentation.title}</h4>
          <p className="text-sm mb-4">Co-création et découverte</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Brainstorming augmenté</li>
            <li>Recherche collaborative</li>
          </ul>
        </div>

        <div className="col-span-2 text-center text-sm text-gray-500 mt-2">
          <div className="flex justify-between">
            <span>Collaboration forte avec l'humain</span>
            <span>Intervention humaine minimale</span>
          </div>
        </div>
      </div>

      {selectedQuadrant && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className={`${selectedQuadrant.bgColor} border-t-4 ${selectedQuadrant.borderColor}`}>
            <DialogHeader>
              <DialogTitle className={`text-2xl ${selectedQuadrant.color}`}>{selectedQuadrant.title}</DialogTitle>
              <DialogDescription className="text-base font-medium">{selectedQuadrant.description}</DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Techniques de prompting recommandées :</h4>
              <div className="space-y-3">
                {selectedQuadrant.techniques.map((technique, index) => (
                  <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <Link href={technique.link} className="font-medium hover:underline">
                        {technique.name}
                      </Link>
                      <Badge variant="outline" className={selectedQuadrant.color}>
                        Score: {technique.score}/10
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{technique.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2">Cas d'usage typiques :</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selectedQuadrant.useCases.map((useCase, index) => (
                  <li key={index}>{useCase}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Fermer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
