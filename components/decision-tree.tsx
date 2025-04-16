"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ZoomIn, ZoomOut, MoveHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

const DecisionTree = () => {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      // Reset position and scale when switching between mobile and desktop
      if (window.innerWidth < 768) {
        setScale(0.7)
        setPosition({ x: -150, y: 0 })
      } else {
        setScale(1)
        setPosition({ x: 0, y: 0 })
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 1.5))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartPos({
      x: e.touches[0].clientX - position.x,
      y: e.touches[0].clientY - position.y,
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.touches[0].clientX - startPos.x,
      y: e.touches[0].clientY - position.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div className="w-full font-sans bg-gray-50 p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
        ARBRE DE DÉCISION POUR CHOISIR LA TECHNIQUE DE PROMPTING
      </h1>

      {isMobile && (
        <div className="mb-4 text-center text-sm text-gray-600">
          Utilisez les boutons ci-dessous pour zoomer et déplacer l'arbre de décision
        </div>
      )}

      <div className="flex justify-center gap-2 mb-4">
        <Button variant="outline" size="sm" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4 mr-1" /> Zoom +
        </Button>
        <Button variant="outline" size="sm" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4 mr-1" /> Zoom -
        </Button>
        {isMobile && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setScale(0.7)
              setPosition({ x: -150, y: 0 })
            }}
          >
            <MoveHorizontal className="h-4 w-4 mr-1" /> Réinitialiser
          </Button>
        )}
      </div>

      <div
        className="relative w-full overflow-hidden border border-gray-200 rounded-lg"
        style={{ height: "600px" }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="absolute"
          style={{
            transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: "top left",
            transition: isDragging ? "none" : "transform 0.2s ease",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Utilisation du SVG comme image */}
          <div className="relative w-full h-full min-w-[1000px] min-h-[600px]">
            <img
              src="/images/decision-tree.svg"
              alt="Arbre de décision pour choisir la technique de prompting"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DecisionTree
