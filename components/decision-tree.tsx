"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ZoomIn, ZoomOut, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const DecisionTree = () => {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [startPos, setStartPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      // Reset position and scale when switching between mobile and desktop
      if (mobile) {
        setScale(0.65)
        setPosition({ x: -150, y: 0 })
      } else {
        setScale(1)
        setPosition({ x: 0, y: 0 })
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    setIsLoaded(true)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 1.5))
  }

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5))
  }

  const resetView = () => {
    if (isMobile) {
      setScale(0.65)
      setPosition({ x: -150, y: 0 })
    } else {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
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
      y: e.touches[0].clientY - startPos.y,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleDoubleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / scale - position.x
    const y = (e.clientY - rect.top) / scale - position.y

    setScale((prev) => Math.min(prev + 0.2, 1.5))
    setPosition({
      x: position.x - x * 0.1,
      y: position.y - y * 0.1,
    })
  }

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          className="w-full font-sans bg-gray-50 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl font-bold text-center text-blue-700 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ARBRE DE DÉCISION POUR CHOISIR LA TECHNIQUE DE PROMPTING
          </motion.h1>

          <motion.div
            className="mb-4 text-center text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {isMobile ? (
              <p>Utilisez les boutons ci-dessous pour zoomer et déplacer l&apos;arbre de décision</p>
            ) : (
              <p>Cliquez et faites glisser pour déplacer l&apos;arbre. Utilisez les boutons pour zoomer.</p>
            )}
          </motion.div>

          <motion.div
            className="flex justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomIn}
              className="transition-all hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ZoomIn className="h-4 w-4 mr-1" /> Zoom +
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleZoomOut}
              className="transition-all hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ZoomOut className="h-4 w-4 mr-1" /> Zoom -
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={resetView}
              className="transition-all hover:bg-blue-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="h-4 w-4 mr-1" /> Réinitialiser
            </Button>
          </motion.div>

          <motion.div
            className="relative w-full overflow-hidden border border-gray-200 rounded-lg bg-white"
            style={{ height: isMobile ? "500px" : "600px" }}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="absolute"
              style={{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transformOrigin: "top left",
                transition: isDragging ? "none" : "transform 0.2s ease",
                width: "100%",
                height: "100%",
              }}
              animate={{ scale }}
            >
              {/* Utilisation du SVG comme image */}
              <div className="relative w-full h-full min-w-[1000px] min-h-[600px]">
                <img
                  src="/images/decision-tree.svg"
                  alt="Arbre de décision pour choisir la technique de prompting"
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.1))" }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-4 text-center text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p>Conseil: Double-cliquez sur une zone spécifique pour zoomer sur celle-ci</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DecisionTree
