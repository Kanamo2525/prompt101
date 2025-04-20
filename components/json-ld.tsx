export function ArticleJsonLd({
  title,
  description,
  publishedTime,
  modifiedTime,
  authors,
  images = [],
  url,
}: {
  title: string
  description: string
  publishedTime: string
  modifiedTime?: string
  authors: string[]
  images?: string[]
  url: string
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    author: authors.map((author) => ({
      "@type": "Person",
      name: author,
    })),
    image: images,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    publisher: {
      "@type": "Organization",
      name: "prompt101.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://prompt101.fr/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "prompt101.fr",
    url: "https://prompt101.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://prompt101.fr/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}
