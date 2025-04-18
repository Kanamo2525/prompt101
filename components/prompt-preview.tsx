"use client"

import { Card, CardContent } from "@/components/ui/card"

interface PromptPreviewProps {
  content: string
}

export function PromptPreview({ content }: PromptPreviewProps) {
  if (!content) {
    return (
      <Card className="bg-white border-dashed border-gray-300">
        <CardContent className="p-6 text-center text-gray-500 italic">
          La prévisualisation de votre prompt apparaîtra ici...
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="font-mono text-sm whitespace-pre-wrap">{content}</div>
      </CardContent>
    </Card>
  )
}
