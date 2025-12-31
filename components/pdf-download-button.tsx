"use client"

import { ExternalLink } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"

interface PDFDownloadButtonProps extends ButtonProps {
  title?: string
  filename?: string
  pdfUrl?: string
}

export function PdfDownloadButton({
  title = "Télécharger le guide PDF",
  filename = "art-du-prompting.pdf",
  pdfUrl = "https://drive.google.com/uc?export=download&id=1AUEXGxGup2Gr32mbvgXXSpR1DdIRhMLq",
  ...props
}: PDFDownloadButtonProps) {
  const handleOpenPdf = () => {
    // Ouvrir l'URL dans un nouvel onglet
    window.open(pdfUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <Button variant="outline" onClick={handleOpenPdf} {...props}>
      {title} <ExternalLink className="ml-2 h-4 w-4" />
    </Button>
  )
}

// Ajout d'un alias pour la compatibilité avec les importations existantes
export const PDFDownloadButton = PdfDownloadButton

export default PdfDownloadButton
