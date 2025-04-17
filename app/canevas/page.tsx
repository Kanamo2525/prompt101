import type { Metadata } from "next"
import CanevasPageClient from "./CanevasPageClient"

export const metadata: Metadata = {
  title: "Canevas de Création de Prompts | Next-ai.fr",
  description: "Utilisez notre canevas pour créer des prompts efficaces pour vos interactions avec l'IA",
}

export default function CanevasPage() {
  return <CanevasPageClient />
}
