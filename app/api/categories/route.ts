import { NextResponse } from "next/server"
import db from "@/lib/database"

// API pour récupérer toutes les catégories
export async function GET() {
  const categories = db.getAllCategories()
  return NextResponse.json({ categories })
}

// API pour récupérer une catégorie spécifique
export async function POST(request: Request) {
  const { categoryId } = await request.json()

  if (!categoryId) {
    return NextResponse.json({ error: "Category ID is required" }, { status: 400 })
  }

  const category = db.getCategoryById(categoryId)

  if (!category) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 })
  }

  return NextResponse.json({ category })
}
