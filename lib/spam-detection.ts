// Règles de détection de spam simples
const SPAM_KEYWORDS = [
  "viagra",
  "casino",
  "lottery",
  "prize",
  "winner",
  "buy now",
  "free money",
  "make money fast",
  "bitcoin investment",
  "crypto offer",
  "enlargement",
  "weight loss",
  "miracle cure",
  "cheap meds",
  "replica watches",
]

// Vérifier si le texte contient des mots-clés de spam
export function containsSpamKeywords(text: string): boolean {
  const lowerText = text.toLowerCase()
  return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword.toLowerCase()))
}

// Vérifier si le texte contient trop de liens
export function hasTooManyLinks(text: string, threshold = 3): boolean {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const matches = text.match(urlRegex) || []
  return matches.length > threshold
}

// Vérifier si le texte contient trop de majuscules (signe de spam)
export function hasTooManyUppercase(text: string, threshold = 0.5): boolean {
  if (text.length < 20) return false // Ignorer les textes courts

  const uppercaseCount = (text.match(/[A-Z]/g) || []).length
  const ratio = uppercaseCount / text.length
  return ratio > threshold
}

// Vérifier si le texte contient des caractères répétés (signe de spam)
export function hasRepeatedCharacters(text: string, threshold = 5): boolean {
  const repeatedCharsRegex = /(.)\1{4,}/
  return repeatedCharsRegex.test(text)
}

// Fonction principale pour détecter le spam
export function isSpam(content: {
  title?: string
  description?: string
  promptContent?: string
  authorName?: string
  authorEmail?: string
  [key: string]: any
}): { isSpam: boolean; reason: string } {
  // Concaténer tous les champs textuels pour l'analyse
  const allText = [
    content.title || "",
    content.description || "",
    content.promptContent || "",
    content.authorName || "",
  ].join(" ")

  // Vérifier les mots-clés de spam
  if (containsSpamKeywords(allText)) {
    return { isSpam: true, reason: "Le contenu contient des mots-clés suspects" }
  }

  // Vérifier les liens excessifs
  if (hasTooManyLinks(allText)) {
    return { isSpam: true, reason: "Le contenu contient trop de liens" }
  }

  // Vérifier l'excès de majuscules
  if (hasTooManyUppercase(allText)) {
    return { isSpam: true, reason: "Le contenu contient trop de majuscules" }
  }

  // Vérifier les caractères répétés
  if (hasRepeatedCharacters(allText)) {
    return { isSpam: true, reason: "Le contenu contient des caractères répétés de manière suspecte" }
  }

  // Vérifier si l'email est suspect
  const emailDomain = content.authorEmail?.split("@")[1] || ""
  const suspiciousDomains = ["temp-mail.org", "guerrillamail.com", "mailinator.com", "10minutemail.com"]
  if (suspiciousDomains.some((domain) => emailDomain.includes(domain))) {
    return { isSpam: true, reason: "L'adresse email utilise un domaine temporaire suspect" }
  }

  // Pas de spam détecté
  return { isSpam: false, reason: "" }
}
