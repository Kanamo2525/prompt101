"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export const GA_TRACKING_ID = "G-SESTM49210"

// Fonction pour envoyer des pageviews à Google Analytics
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Déclaration des types pour TypeScript
declare global {
  interface Window {
    gtag: (command: string, target: string, config?: Record<string, unknown>) => void
    dataLayer: unknown[]
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Construire l'URL complète avec les paramètres de recherche
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      // Envoyer la pageview à Google Analytics
      pageview(url)
    }
  }, [pathname, searchParams])

  return (
    <>
      {/* Script Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
