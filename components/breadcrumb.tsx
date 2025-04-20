"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { BreadcrumbJsonLd } from "./json-ld"

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)

  const breadcrumbItems = [
    { name: "Accueil", url: "/" },
    ...segments.map((segment, index) => {
      const url = `/${segments.slice(0, index + 1).join("/")}`
      return {
        name: segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
        url,
      }
    }),
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <nav aria-label="Fil d'Ariane" className="flex text-sm text-muted-foreground overflow-x-auto py-4">
        <ol className="flex items-center space-x-1">
          {breadcrumbItems.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.url} className="hover:text-foreground transition-colors">
                  {index === 0 ? <Home className="h-4 w-4" /> : item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
