import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Dans une implémentation réelle, vous enregistreriez les données dans une base de données
    // et enverriez éventuellement une notification par email

    // Simuler un délai de traitement
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Retourner une réponse de succès
    return NextResponse.json({
      success: true,
      message: "Prompt soumis avec succès",
    })
  } catch (error) {
    console.error("Erreur lors de la soumission du prompt:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de la soumission du prompt" }, { status: 500 })
  }
}
