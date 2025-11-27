"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div id="hero">
          <Hero onNavigate={handleNavigate} />
        </div>
        <div id="skills" onMouseEnter={() => setActiveSection("skills")}>
          <Skills />
        </div>
        <div id="projects" onMouseEnter={() => setActiveSection("projects")}>
          <Projects />
        </div>
        <div id="education" onMouseEnter={() => setActiveSection("education")}>
          <Education />
        </div>
        <div id="contact" onMouseEnter={() => setActiveSection("contact")}>
          <Contact />
        </div>
      </motion.main>
    </div>
  )
}
