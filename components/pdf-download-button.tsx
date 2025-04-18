"use client"

import { Download } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

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
  const handleDownload = () => {
    // Créer un élément a pour le téléchargement
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="outline" onClick={handleDownload} {...props}>
      {title} <Download className="ml-2 h-4 w-4" />
    </Button>
  )
}

// Ajout d'un alias pour la compatibilité avec les importations existantes
export const PDFDownloadButton = PdfDownloadButton

export default PdfDownloadButton
