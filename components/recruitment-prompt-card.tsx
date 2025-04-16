"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Copy, CheckCircle2, Star, Lightbulb } from "lucide-react"

interface PromptCardProps {
  id: string
  title: string
  description: string
  prompt: string
  example: string
  difficulty: number
  tips: string[]
}

export function RecruitmentPromptCard({ id, title, description, prompt, example, difficulty, tips }: PromptCardProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md mb-6 border border-gray-200">
      {/* Header */}
      <div className="bg-blue-50 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex">
            {Array.from({ length: difficulty }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />
            ))}
          </div>
        </div>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
      </div>

      {/* Prompt */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative">
          <div className="absolute top-2 right-2 text-blue-500 px-2 py-0.5 rounded-md text-xs bg-blue-50">
            Technique RCT
          </div>
          <p className="text-gray-800 whitespace-pre-line pt-4">{prompt}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Copié!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copier</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Example & Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-t border-gray-200">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
          <h4 className="font-bold text-indigo-800 mb-2 flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            Exemple d'utilisation
          </h4>
          <div className="text-gray-700 text-sm whitespace-pre-line">{example}</div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h4 className="font-bold text-yellow-800 mb-2 flex items-center">
            <Lightbulb className="h-4 w-4 mr-1" />
            Conseils d'utilisation
          </h4>
          <ul className="space-y-1 text-gray-700 text-sm list-disc list-inside">
            {tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
        <Link
          href={`/categories/recruitment/${id}`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
        >
          Voir le détail
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
