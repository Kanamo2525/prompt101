import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-medium text-gray-700">Kristy An</span>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/Kanamo2525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kanamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Licence:</span>
            <Link
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="Licence CC BY-NC-ND"
            >
              <Image src="/images/by-nc-nd.png" alt="CC BY-NC-ND" width={88} height={31} />
              <span className="text-sm text-gray-600">CC BY-NC-ND</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
