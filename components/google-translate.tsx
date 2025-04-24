"use client"

import { useEffect } from "react"
import Script from "next/script"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Initialisation du widget Google Translate
    window.googleTranslateElementInit = () => {
      ;new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "fr",
          includedLanguages: "en,es,de,it,pt,ar,zh-CN,ja,ru", // Langues supportées
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      )
    }
  }, [])

  return (
    <>
      <div id="google_translate_element" className="google-translate-container"></div>
      <Script
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <style jsx global>{`
        /* Styles pour améliorer l'apparence du widget */
        .google-translate-container {
          display: inline-block;
          vertical-align: middle;
        }
        
        /* Masquer le logo Google et certains éléments superflus */
        .goog-te-gadget-simple {
          border: none !important;
          background-color: transparent !important;
          padding: 0 !important;
        }
        
        .goog-te-gadget-simple .goog-te-menu-value span:first-child {
          display: none;
        }
        
        .goog-te-gadget-simple .goog-te-menu-value span:last-child {
          display: none;
        }
        
        .goog-te-banner-frame {
          display: none !important;
        }
        
        body {
          top: 0 !important;
        }
      `}</style>
    </>
  )
}
