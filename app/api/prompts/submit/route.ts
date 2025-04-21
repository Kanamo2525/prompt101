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

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log("Received form submission")

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
