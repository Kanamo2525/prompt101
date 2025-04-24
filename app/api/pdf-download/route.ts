import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Chemin vers le fichier PDF
    const filePath = path.join(process.cwd(), "public", "guides", "art-du-prompting.pdf")

    // Vérifier si le fichier existe
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Fichier non trouvé", { status: 404 })
    }

    // Lire le fichier
    const fileBuffer = fs.readFileSync(filePath)

    // Retourner le fichier avec les en-têtes appropriés
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="art-du-prompting.pdf"',
        "Content-Length": fileBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error("Erreur lors du téléchargement du PDF:", error)
    return new NextResponse("Erreur lors du téléchargement du PDF", { status: 500 })
  }
}
