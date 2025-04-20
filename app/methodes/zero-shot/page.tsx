import { Breadcrumb } from "@/components/breadcrumb"
import { ArticleJsonLd } from "@/components/json-ld"
import { ZeroShotClientPage } from "./ZeroShotClientPage"

export const metadata = {
  title: "Zero-Shot Prompting | Techniques de Prompting | Prompt101.fr",
  description:
    "Découvrez la technique Zero-Shot Prompting pour formuler des instructions claires sans fournir d'exemples. Idéale pour des tâches simples et bien définies.",
  keywords: "zero-shot prompting, prompts IA, ChatGPT, intelligence artificielle, prompt engineering",
}

export default function ZeroShotPage() {
  return (
    <>
      <ArticleJsonLd
        title="Zero-Shot Prompting | Techniques de Prompting"
        description="Découvrez la technique Zero-Shot Prompting pour formuler des instructions claires sans fournir d'exemples. Idéale pour des tâches simples et bien définies."
        publishedTime="2023-04-01"
        modifiedTime="2023-04-20"
        authors={["Kristy Anamoutou"]}
        url="https://prompt101.fr/methodes/zero-shot"
        images={["/images/zero-shot-banner.png"]}
      />
      <div className="container mx-auto px-4">
        <Breadcrumb />
        <ZeroShotClientPage />
      </div>
    </>
  )
}
