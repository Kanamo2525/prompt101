import { NextResponse } from "next/server"
import db from "@/lib/database"

// API pour récupérer tous les prompts ou filtrer par catégorie/difficulté
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const categoryId = searchParams.get("category")
  const difficulty = searchParams.get("difficulty")
  const query = searchParams.get("query") || ""

  let prompts

  if (categoryId) {
    prompts = db.getPromptsByCategory(categoryId)
  } else {
    prompts = db.searchPrompts(query, difficulty)
  }

  return NextResponse.json({ prompts })
}

// API pour récupérer un prompt spécifique
export async function POST(request: Request) {
  const { promptId } = await request.json()

  if (!promptId) {
    return NextResponse.json({ error: "Prompt ID is required" }, { status: 400 })
  }

  const prompt = db.getPromptById(promptId)

  if (!prompt) {
    return NextResponse.json({ error: "Prompt not found" }, { status: 404 })
  }

  return NextResponse.json({ prompt })
}
