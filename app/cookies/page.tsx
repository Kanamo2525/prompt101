import type { Metadata } from "next"
import CookiesPageClient from "./CookiesPageClient"

export const metadata: Metadata = {
  title: "Politique de Cookies | Prompt101.fr",
  description: "Découvrez comment nous utilisons les cookies sur Prompt101.fr et comment gérer vos préférences.",
}

export default function CookiesPage() {
  return <CookiesPageClient />
}
