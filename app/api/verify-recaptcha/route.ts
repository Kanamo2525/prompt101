import { NextResponse } from "next/server"

// Fonction pour vérifier le token reCAPTCHA avec l'API Google
async function verifyRecaptchaToken(token: string): Promise<{
  success: boolean
  score?: number
  action?: string
  error?: string
}> {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe" // Clé secrète de test Google

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()

    if (data.success) {
      return {
        success: true,
        score: data.score,
        action: data.action,
      }
    } else {
      return {
        success: false,
        error: data["error-codes"]?.join(", ") || "Vérification reCAPTCHA échouée",
      }
    }
  } catch (error) {
    console.error("Erreur lors de la vérification reCAPTCHA:", error)
    return {
      success: false,
      error: "Erreur lors de la vérification reCAPTCHA",
    }
  }
}

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ success: false, message: "Token reCAPTCHA manquant" }, { status: 400 })
    }

    const verification = await verifyRecaptchaToken(token)

    if (!verification.success) {
      return NextResponse.json(
        { success: false, message: verification.error || "Vérification reCAPTCHA échouée" },
        { status: 400 },
      )
    }

    // Vérifier le score (0.0 = bot, 1.0 = humain probable)
    const score = verification.score || 0
    const isHuman = score > 0.5 // Seuil ajustable selon vos besoins

    return NextResponse.json({
      success: true,
      isHuman,
      score,
      action: verification.action,
    })
  } catch (error) {
    console.error("Erreur lors de la vérification reCAPTCHA:", error)
    return NextResponse.json({ success: false, message: "Erreur lors de la vérification reCAPTCHA" }, { status: 500 })
  }
}
