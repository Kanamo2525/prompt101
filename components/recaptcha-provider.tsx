"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Script from "next/script"

// Clé site reCAPTCHA (remplacer par votre clé publique)
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Clé de test Google

type RecaptchaContextType = {
  ready: boolean
  executeRecaptcha: (action: string) => Promise<string>
}

const RecaptchaContext = createContext<RecaptchaContextType | null>(null)

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext)
  if (!context) {
    throw new Error("useRecaptcha must be used within a RecaptchaProvider")
  }
  return context
}

type RecaptchaProviderProps = {
  children: ReactNode
}

export function RecaptchaProvider({ children }: RecaptchaProviderProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Définir la fonction de rappel pour l'initialisation de reCAPTCHA
    window.onRecaptchaLoad = () => {
      console.log("reCAPTCHA loaded successfully")
      setReady(true)
    }

    // Si grecaptcha est déjà chargé (cas rare mais possible)
    if (window.grecaptcha && window.grecaptcha.ready) {
      window.grecaptcha.ready(() => {
        console.log("reCAPTCHA already loaded")
        setReady(true)
      })
    }

    // Nettoyer lors du démontage
    return () => {
      delete window.onRecaptchaLoad
    }
  }, [])

  // Modifier la fonction executeRecaptcha pour éviter l'erreur de substring sur null
  const executeRecaptcha = async (action: string): Promise<string> => {
    if (!ready) {
      console.log("reCAPTCHA not ready yet")
      return "recaptcha-not-ready"
    }

    if (!window.grecaptcha) {
      console.error("grecaptcha not available")
      return "grecaptcha-not-available"
    }

    try {
      console.log("Executing reCAPTCHA with action:", action)
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action })

      // Vérifier si le token existe avant d'utiliser substring
      if (token) {
        console.log("reCAPTCHA token obtained:", token.substring(0, 10) + "...")
      } else {
        console.log("reCAPTCHA token is null or undefined")
      }

      return token || "recaptcha-null-token"
    } catch (error) {
      console.error("reCAPTCHA execution error:", error)
      return "recaptcha-execution-error"
    }
  }

  return (
    <RecaptchaContext.Provider value={{ ready, executeRecaptcha }}>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="afterInteractive"
      />
      {children}
    </RecaptchaContext.Provider>
  )
}

// Ajouter la déclaration de type pour window
declare global {
  interface Window {
    onRecaptchaLoad: () => void
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}
