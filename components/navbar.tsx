"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "./language-selector"

export function Navbar() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Accueil",
      active: pathname === "/",
      external: false,
    },
    {
      href: "/methodes",
      label: "Méthodes",
      active: pathname === "/methodes" || pathname.startsWith("/methodes/"),
      external: false,
    },
    {
      href: "/catalogue",
      label: "Catalogue",
      active: pathname === "/catalogue" || pathname.startsWith("/catalogue/"),
      external: false,
    },
    {
      href: "https://canvas.prompt101.fr/",
      label: "Canevas",
      active: false,
      external: true,
    },
    {
      href: "/pour-aller-plus-loin",
      label: "Pour aller plus loin",
      active: pathname === "/pour-aller-plus-loin",
      external: false,
    },
    // Note: La page /proposer existe toujours mais n'est plus dans le menu
  ]

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">prompt101.fr</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) =>
              route.external ? (
                <a
                  key={route.href}
                  href={route.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
                >
                  {route.label}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    route.active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {route.label}
                </Link>
              ),
            )}
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <LanguageSelector />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) =>
                  route.external ? (
                    <a
                      key={route.href}
                      href={route.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
                    >
                      {route.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        route.active ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {route.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
