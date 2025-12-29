"use client"

import { useEffect, useState } from "react"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Script from "next/script"

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

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("fr")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Récupérer la langue actuelle depuis le cookie Google Translate
    const getGoogleTranslateCookie = () => {
      const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/)
      if (match) {
        return match[1]
      }
      return "fr"
    }
    setCurrentLang(getGoogleTranslateCookie())
  }, [])

  const handleLanguageChange = (langCode: string) => {
    // Supprimer les anciens cookies
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.prompt101.fr;"

    if (langCode === "fr") {
      // Revenir à la langue d'origine
      window.location.reload()
    } else {
      // Définir le nouveau cookie de langue
      document.cookie = `googtrans=/fr/${langCode}; path=/;`
      document.cookie = `googtrans=/fr/${langCode}; path=/; domain=.prompt101.fr;`
      window.location.reload()
    }

    setCurrentLang(langCode)
  }

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0]

  return (
    <>
      {/* Script Google Translate caché */}
      <div id="google_translate_element" className="hidden" />
      <Script
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => setIsLoaded(true)}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'fr',
                includedLanguages: 'en,es,de,it,pt,ar,zh-CN,ja,ru',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `,
        }}
      />

      {/* Dropdown personnalisé */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-9 px-2 gap-1.5">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline text-xs font-medium">{currentLanguage.flag}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center gap-2 cursor-pointer ${currentLang === lang.code ? "bg-accent" : ""}`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Styles pour masquer les éléments Google Translate */}
      <style jsx global>{`
        .goog-te-banner-frame,
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        body {
          top: 0 !important;
        }
        .goog-text-highlight {
          background: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  )
}
