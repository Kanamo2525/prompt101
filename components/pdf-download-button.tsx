"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface PDFDownloadButtonProps {
  pdfUrl: string
  fileName: string
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

export function PDFDownloadButton({
  pdfUrl,
  fileName,
  className,
  variant = "default",
  size = "default",
}: PDFDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      // Fetch the PDF file
      const response = await fetch(pdfUrl)

      if (!response.ok) {
        throw new Error("Failed to download the PDF")
      }

      // Get the blob from the response
      const blob = await response.blob()

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob)

      // Create a temporary anchor element
      const link = document.createElement("a")
      link.href = url
      link.download = fileName

      // Append to the document, click it, and remove it
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Release the object URL
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading PDF:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button onClick={handleDownload} disabled={isDownloading} className={className} variant={variant} size={size}>
      {isDownloading ? (
        "Téléchargement..."
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Télécharger le guide PDF
        </>
      )}
    </Button>
  )
}
