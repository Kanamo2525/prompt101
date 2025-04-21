import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Proposer un prompt | prompt101.fr",
  description: "Partagez vos prompts efficaces avec la communauté.",
}

export default function ProposerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
