import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Target,
  ExternalLink,
  Grid3X3,
  BookOpen,
  Compass,
  Lightbulb,
  TrendingUp,
  Brain,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pour aller plus loin | Prompt101.fr",
  description: "Découvrez nos catalogues de prompts spécialisés pour les Ressources Humaines et le Leadership.",
}

export default function PourAllerPlusLoinPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pour aller plus loin</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explorez nos plateformes spécialisées avec des prompts experts, des outils d'aide à la décision et des
          exemples concrets pour comprendre comment l'IA augmente au quotidien l'effectuation, l'aide à la décision et
          l'idéation des praticiens.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="group relative overflow-hidden rounded-2xl border-2 border-[#0EA5E9]/30 bg-gradient-to-br from-[#0EA5E9]/5 to-[#0EA5E9]/10 p-6 md:p-8 transition-all duration-300 hover:border-[#0EA5E9]/60 hover:shadow-xl hover:shadow-[#0EA5E9]/10">
          {/* Icon */}
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#0EA5E9]/10 text-[#0EA5E9]">
            <Users className="w-8 h-8" />
          </div>

          {/* Badge */}
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-[#0EA5E9]/20 text-[#0EA5E9]">
            Ressources Humaines
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold mb-3">RH.Prompt101.fr</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Une plateforme complète pour les professionnels RH qui souhaitent comprendre et exploiter le potentiel de
            l'IA dans leur fonction.
          </p>

          {/* Features enrichies */}
          <div className="space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/20">
              <div className="flex items-start gap-3">
                <Grid3X3 className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Matrice de maturité IA</h4>
                  <p className="text-xs text-muted-foreground">
                    Par spécialité RH, identifiez les opportunités d'automatisation, d'augmentation et d'innovation pour
                    évaluer votre maturité digitale.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/20">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Guide RH complet en français</h4>
                  <p className="text-xs text-muted-foreground">
                    Prompts experts, prospective sur la transformation RH et articles sur l'évolution de la fonction au
                    regard de l'IA.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0EA5E9]/5 border border-[#0EA5E9]/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Perspectives d'évolution</h4>
                  <p className="text-xs text-muted-foreground">
                    Articles et analyses sur le changement de la fonction RH face à la transformation digitale et l'IA.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://rh.prompt101.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0EA5E9] text-white font-medium transition-all duration-300 hover:bg-[#0EA5E9]/90 hover:gap-3"
          >
            Découvrir la plateforme RH
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5E9]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#0EA5E9]/20 transition-colors duration-300" />
        </div>

        <div className="group relative overflow-hidden rounded-2xl border-2 border-[#8B5CF6]/30 bg-gradient-to-br from-[#8B5CF6]/5 to-[#8B5CF6]/10 p-6 md:p-8 transition-all duration-300 hover:border-[#8B5CF6]/60 hover:shadow-xl hover:shadow-[#8B5CF6]/10">
          {/* Icon */}
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6]">
            <Target className="w-8 h-8" />
          </div>

          {/* Badge */}
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6]">
            Leadership & Décideurs
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold mb-3">Lead.Prompt101.fr</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Une plateforme dédiée aux décideurs et leaders qui souhaitent augmenter leur impact grâce à l'IA dans leur
            pratique quotidienne.
          </p>

          {/* Features enrichies */}
          <div className="space-y-4 mb-6">
            <div className="p-3 rounded-lg bg-[#8B5CF6]/5 border border-[#8B5CF6]/20">
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Explorateur de prompts</h4>
                  <p className="text-xs text-muted-foreground">
                    Naviguez selon vos ambitions et objectifs pour trouver les prompts experts adaptés à votre
                    développement et vos interventions.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#8B5CF6]/5 border border-[#8B5CF6]/20">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Outils d'aide à la décision</h4>
                  <p className="text-xs text-muted-foreground">
                    Des outils et exemples appliqués aux contextes métiers pour augmenter l'effectuation et l'idéation
                    au quotidien.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#8B5CF6]/5 border border-[#8B5CF6]/20">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Développement personnel</h4>
                  <p className="text-xs text-muted-foreground">
                    Prompts pour préparer vos interventions, structurer votre pensée et renforcer votre posture de
                    leader.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://lead.prompt101.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8B5CF6] text-white font-medium transition-all duration-300 hover:bg-[#8B5CF6]/90 hover:gap-3"
          >
            Découvrir la plateforme Leadership
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#8B5CF6]/20 transition-colors duration-300" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">Vous cherchez des prompts plus généraux ?</p>
        <Link href="/catalogue">
          <Button variant="outline" className="gap-2 bg-transparent">
            Voir le catalogue complet
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
