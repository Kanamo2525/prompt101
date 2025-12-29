"use client"

import { useEffect, useState, useCallback } from "react"
import { Globe, Check } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
]

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => void
      }
    }
    googleTranslateElementInit: () => void
  }
}

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isReady, setIsReady] = useState(false)

  const triggerTranslation = useCallback((langCode: string) => {
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (selectElement) {
      selectElement.value = langCode
      selectElement.dispatchEvent(new Event("change", { bubbles: true }))
      setCurrentLang(langCode)
      return true
    }
    return false
  }, [])

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,es,de,it,pt,ar,zh-CN,ja,ru",
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element",
      )

      // Attendre que le select soit prêt
      const checkReady = setInterval(() => {
        const selectElement = document.querySelector(".goog-te-combo")
        if (selectElement) {
          setIsReady(true)
          clearInterval(checkReady)

          // Récupérer la langue actuelle
          const currentValue = (selectElement as HTMLSelectElement).value
          if (currentValue) {
            setCurrentLang(currentValue)
          }
        }
      }, 100)

      // Timeout après 5 secondes
      setTimeout(() => clearInterval(checkReady), 5000)
    }

    // Charger le script Google Translate
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }

    // Récupérer la langue depuis le cookie si elle existe
    const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/)
    if (match && match[1]) {
      setCurrentLang(match[1])
    }
  }, [])

  const handleLanguageChange = (langCode: string) => {
    if (langCode === "fr") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname + ";"
      setCurrentLang("fr")
      window.location.reload()
    } else {
      if (!triggerTranslation(langCode)) {
        // Si le select n'est pas prêt, définir le cookie et recharger
        document.cookie = `googtrans=/fr/${langCode}; path=/;`
        document.cookie = `googtrans=/fr/${langCode}; path=/; domain=${window.location.hostname};`
        window.location.reload()
      }
    }
  }

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0]

  return (
    <>
      {/* Conteneur Google Translate caché */}
      <div id="google_translate_element" className="fixed opacity-0 pointer-events-none -z-50 top-0 left-0" />

      {/* Dropdown personnalisé */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-9 px-2 gap-1.5">
            <Globe className="h-4 w-4" />
            <span className="text-base">{currentLanguage.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-base">{lang.flag}</span>
              <span className="text-sm flex-1">{lang.label}</span>
              {currentLang === lang.code && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-balloon-frame,
        .goog-te-menu-frame,
        .goog-te-gadget,
        .goog-te-spinner-pos,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-te-ftab-float {
          display: none !important;
          visibility: hidden !important;
        }
        body {
          top: 0 !important;
          position: static !important;
        }
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
        #google_translate_element {
          height: 0 !important;
          overflow: hidden !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }
      `}</style>
    </>
  )
}
