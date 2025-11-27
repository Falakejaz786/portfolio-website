"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FileText } from "lucide-react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { id: "hero", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          FE
        </motion.div>

        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id)
                const element = document.getElementById(section.id)
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className={`text-sm font-medium transition-colors ${
                activeSection === section.id ? "text-accent" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {section.label}
            </motion.button>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <motion.a
            href="https://docs.google.com/document/d/1Z_t5SVekinVi7Uthltj6wp8hCmBAnShZ/edit?usp=sharing&ouid=116656879714681051897&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent font-medium hover:bg-accent/10 transition-all"
          >
            <FileText size={16} />
            Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setActiveSection("contact")
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-lg glow-accent transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}
