"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, FileText } from "lucide-react"

interface HeroProps {
  onNavigate: (section: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent text-sm font-medium">
                Welcome to my profile
              </span>
            </motion.div>

            <div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              >
                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Falak Ejaz
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground font-light">
                ML/AI Engineer & Full-Stack Developer
              </motion.p>
            </div>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Specializing in LLMs, Computer Vision, NLP, and Web Scraping. Building intelligent systems that solve
              real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.button
                onClick={() => onNavigate("projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-xl glow-accent transition-all"
              >
                View My Work
              </motion.button>
              <motion.a
                href="https://docs.google.com/document/d/1F0PHMoEauZybUxqMBT39tseY3BwVNDuD/edit?usp=sharing&ouid=116656879714681051897&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-xl glow-accent transition-all flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-6 pt-8">
              <motion.a
                href="https://github.com/Falakejaz786"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/falak-ejaz-89a0a6281"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            {[
              { label: "Projects", value: "10+" },
              { label: "ATS Score", value: "86%" },
              { label: "Languages", value: "3+" },
              { label: "Years", value: "KIIT 23-27" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 text-center group hover:border-accent/50 transition-all"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-accent/50" size={32} />
      </motion.div>
    </section>
  )
}
