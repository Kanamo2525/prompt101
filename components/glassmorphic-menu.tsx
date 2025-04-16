"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Grid, PenTool } from "lucide-react"

export default function GlassmorphicMenu() {
  const [isExpanded, setIsExpanded] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    {
      name: "Apprentissage",
      path: "/methodes",
      icon: <Book className="h-6 w-6" />,
      color: "text-purple-500",
      activeColor: "text-purple-600",
      bgActiveColor: "bg-purple-100/70",
    },
    {
      name: "Catalogue",
      path: "/catalogue",
      icon: <Grid className="h-6 w-6" />,
      color: "text-orange-500",
      activeColor: "text-orange-600",
      bgActiveColor: "bg-orange-100/70",
    },
    {
      name: "Canevas",
      path: "/canevas",
      icon: <PenTool className="h-6 w-6" />,
      color: "text-indigo-500",
      activeColor: "text-indigo-600",
      bgActiveColor: "bg-indigo-100/70",
    },
  ]

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-2 px-4">
      <div className="backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-full shadow-lg border border-gray-200/30 dark:border-gray-700/30 flex items-center justify-center p-2 px-4">
        <div className="flex items-center justify-around space-x-4 sm:space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex flex-col items-center p-2 rounded-full transition-all duration-200 ${
                isActive(item.path)
                  ? `${item.bgActiveColor} dark:bg-opacity-20 ${item.activeColor}`
                  : `hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${item.color}`
              }`}
            >
              <div className="flex items-center justify-center">{item.icon}</div>
              <span className="text-xs font-medium mt-1">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
