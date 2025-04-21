import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { isSpam } from "@/lib/spam-detection"

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "prompt101fr@gmail.com",
    pass: process.env.EMAIL_PASSWORD, // Mot de passe d'application recommandé pour Gmail
  },
})

// Améliorer la vérification du token reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  // Si le token est null, undefined ou vide
  if (!token) {
    console.log("Token is null, undefined or empty")
    return false
  }

  // Si le token est un message d'erreur spécial de notre frontend
  if (token.startsWith("recaptcha-")) {
    console.log("Frontend reCAPTCHA error:", token)
    return false
  }

  try {
    // En mode développement, accepter les tokens sans vérification
    if (process.env.NODE_ENV !== "production") {
      console.log("Development mode: skipping reCAPTCHA verification")
      return true
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe" // Clé secrète de test Google

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    console.log("reCAPTCHA verification response:", data)

    if (data.success) {
      // En production, vérifier le score
      const score = data.score || 0
      return score > 0.3 // Seuil plus permissif pour éviter les faux positifs
    }

    return false
  } catch (error) {
    console.error("Erreur lors de la vérification reCAPTCHA:", error)
    // En cas d'erreur, accepter en développement, refuser en production
    return process.env.NODE_ENV !== "production"
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log("Received form submission")

    // Vérifier le token reCAPTCHA
    const recaptchaToken = data.recaptchaToken
    if (!recaptchaToken) {
      console.log("No reCAPTCHA token provided")
      return NextResponse.json({ success: false, message: "Vérification humaine requise" }, { status: 400 })
    }

    const isHuman = await verifyRecaptcha(recaptchaToken)
    if (!isHuman) {
      console.log("reCAPTCHA verification failed")
      return NextResponse.json({ success: false, message: "La vérification humaine a échoué" }, { status: 400 })
    }

    // Vérifier si le contenu est du spam
    const spamCheck = isSpam(data)
    if (spamCheck.isSpam) {
      console.log("Spam detected:", spamCheck.reason)
      return NextResponse.json({ success: false, message: `Contenu rejeté: ${spamCheck.reason}` }, { status: 400 })
    }

    // Formatage du contenu du prompt pour l'email
    const promptContent =
      data.promptType === "canevas"
        ? `
        Rôle: ${data.role || "Non spécifié"}
        Contexte: ${data.context || "Non spécifié"}
        Tâche: ${data.task || "Non spécifié"}
        Format: ${data.format || "Non spécifié"}
        Exemples: ${data.examples || "Non spécifié"}
      `
        : data.promptContent

    // Construction du corps de l'email
    const emailBody = `
      Nouvelle proposition de prompt reçue:
      
      Titre: ${data.title}
      Catégorie: ${data.category}
      Cas d'usage: ${data.useCase}
      Description: ${data.description}
      
      Type de prompt: ${data.promptType}
      
      Contenu du prompt:
      ${promptContent}
      
      Auteur: ${data.authorName}
      Email de l'auteur: ${data.authorEmail}
      Soumis le: ${new Date().toLocaleString("fr-FR")}
    `

    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER || "prompt101fr@gmail.com",
      to: "prompt101fr@gmail.com",
      subject: `[Nouvelle proposition] ${data.title}`,
      text: emailBody,
    }

    // Envoi de l'email
    if (process.env.NODE_ENV === "production") {
      try {
        await transporter.sendMail(mailOptions)
        console.log("Email sent successfully")
      } catch (emailError) {
        console.error("Error sending email:", emailError)
        // Continuer même si l'email échoue
      }
    } else {
      // En développement, on affiche simplement le contenu de l'email dans la console
      console.log("Email qui serait envoyé en production:", mailOptions)
    }

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
