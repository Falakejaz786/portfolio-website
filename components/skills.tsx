"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      category: "AI & ML",
      skills: ["LLMs", "NLP", "Deep Learning", "Prompt Engineering", "YOLO", "BoT-SORT"],
      colorFrom: "from-primary",
      colorTo: "to-purple-600",
    },
    {
      category: "Backend",
      skills: ["FastAPI", "REST APIs", "Python", "SQL", "Node.js"],
      colorFrom: "from-secondary",
      colorTo: "to-blue-600",
    },
    {
      category: "Computer Vision",
      skills: ["YOLOv11", "OpenCV", "Image Processing", "Video Analysis", "Real-time Tracking", "Custom Training"],
      colorFrom: "from-accent",
      colorTo: "to-cyan-500",
    },
    {
      category: "Data & Tools",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib", "ChromaDB", "Web Scraping"],
      colorFrom: "from-purple-500",
      colorTo: "to-pink-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies for building intelligent solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -10 }} className="group">
              <div
                className={`h-full bg-gradient-to-br ${category.colorFrom} ${category.colorTo} p-px rounded-2xl overflow-hidden`}
              >
                <div className="bg-card h-full rounded-2xl p-6 flex flex-col gap-4">
                  <h3
                    className={`text-xl font-bold bg-gradient-to-r ${category.colorFrom} ${category.colorTo} bg-clip-text text-transparent`}
                  >
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${category.colorFrom} ${category.colorTo} bg-clip-text text-transparent border border-current`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </section>
  )
}
