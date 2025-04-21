// Types pour Google Analytics
export type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

// ID de suivi Google Analytics
export const GA_TRACKING_ID = "G-SESTM49210"

// Fonction pour envoyer des pageviews
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// Fonction pour envoyer des événements
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
