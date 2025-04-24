"use client"

import { Download } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { useState } from "react"

interface PDFDownloadButtonProps extends ButtonProps {
  title?: string
  filename?: string
  pdfUrl?: string
}

export function PdfDownloadButton({
  title = "Télécharger le guide PDF",
  filename = "art-du-prompting.pdf",
  pdfUrl = "/guides/art-du-prompting.pdf",
  ...props
}: PDFDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsLoading(true)

      // Utiliser l'API route pour télécharger le PDF
      const response = await fetch("/api/pdf-download")

      if (!response.ok) {
        throw new Error("Erreur lors du téléchargement du PDF")
      }

      // Obtenir le blob du PDF
      const blob = await response.blob()

      // Créer une URL pour le blob
      const url = window.URL.createObjectURL(blob)

      // Créer un élément a pour le téléchargement
      const link = document.createElement("a")
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()

      // Nettoyer
      window.URL.revokeObjectURL(url)
      document.body.removeChild(link)
    } catch (error) {
      console.error("Erreur:", error)
      alert("Une erreur est survenue lors du téléchargement du PDF. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button variant="outline" onClick={handleDownload} disabled={isLoading} {...props}>
      {isLoading ? "Téléchargement..." : title} <Download className="ml-2 h-4 w-4" />
    </Button>
  )
}

// Ajout d'un alias pour la compatibilité avec les importations existantes
export const PDFDownloadButton = PdfDownloadButton

export default PdfDownloadButton
