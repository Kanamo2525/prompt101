import type React from "react"
import { RecaptchaProvider } from "@/components/recaptcha-provider"

export default function ProposerLayout({ children }: { children: React.ReactNode }) {
  return <RecaptchaProvider>{children}</RecaptchaProvider>
}
