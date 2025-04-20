"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PromptCardProps {
  title: string
  description: string
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Professionnel"
  techniques: string[]
  promptText: string
  category?: string
}

export function PromptCard({ title, description, level, techniques, promptText, category }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promptText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getLevelStyle = () => {
    switch (level) {
      case "Débutant":
        return "bg-green-50 text-green-700 border-green-200"
      case "Intermédiaire":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "Avancé":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "Professionnel":
        return "bg-orange-50 text-orange-700 border-orange-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <div className="flex gap-2">
            {category && (
              <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                {category}
              </Badge>
            )}
            <Badge variant="outline" className={getLevelStyle()}>
              {level}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Techniques utilisées:</p>
          <div className="flex flex-wrap gap-2">
            {techniques.map((technique) => (
              <Badge key={technique} variant="secondary">
                {technique}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 font-mono text-sm whitespace-pre-wrap">
          {promptText}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={copyToClipboard} className="flex items-center gap-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copié !" : "Copier le prompt"}
        </Button>
      </CardFooter>
    </Card>
  )
}
