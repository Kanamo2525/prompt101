const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Configuration
const baseUrl = "https://prompt101.fr"
const publicDir = path.join(process.cwd(), "public")
const pagesDir = path.join(process.cwd(), "app")
const outputPath = path.join(publicDir, "sitemap.xml")

// Date du jour formatée pour le sitemap
const today = new Date().toISOString().split("T")[0]

// Fonction pour trouver tous les fichiers page.tsx
function findPages() {
  const pages = glob.sync("**/*page.tsx", { cwd: pagesDir })
  return pages
    .map((page) => {
      // Convertir le chemin du fichier en URL
      const url = page.replace(/\/page\.tsx$/, "").replace(/\/(not-found|loading)$/, "")

      // Gérer le cas de la page d'accueil
      if (url === "") {
        return "/"
      }

      return "/" + url
    })
    .filter((url) => !url.includes("[") && !url.includes("("))
}

// Générer le contenu du sitemap
function generateSitemap(urls) {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  urls.forEach((url) => {
    const fullUrl = baseUrl + url

    // Définir la priorité en fonction de la profondeur de l'URL
    const depth = url.split("/").filter(Boolean).length
    const priority = Math.max(0.1, 1 - depth * 0.2).toFixed(1)

    // Définir la fréquence de changement
    let changefreq = "monthly"
    if (url === "/") {
      changefreq = "weekly"
    } else if (url.includes("/methodes") || url.includes("/catalogue")) {
      changefreq = "weekly"
    } else if (url.includes("/mentions-legales") || url.includes("/confidentialite")) {
      changefreq = "yearly"
    }

    sitemap += "  <url>\n"
    sitemap += `    <loc>${fullUrl}</loc>\n`
    sitemap += `    <lastmod>${today}</lastmod>\n`
    sitemap += `    <changefreq>${changefreq}</changefreq>\n`
    sitemap += `    <priority>${priority}</priority>\n`
    sitemap += "  </url>\n"
  })

  sitemap += "</urlset>"
  return sitemap
}

// Exécution principale
const urls = findPages()
const sitemap = generateSitemap(urls)

// Écrire le sitemap dans le fichier
fs.writeFileSync(outputPath, sitemap)
console.log(`Sitemap généré avec succès à ${outputPath}`)
