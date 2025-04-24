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
  pdfUrl = "https://assets.api.gamma.app/export/pdf/398jqrfdcsws5cp/9cab98d6e368440b4082d3bf9fef6c07/Lart-du-prompting.pdf",
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
