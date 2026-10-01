"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Agentic Code Analyzer",
      description: "LLM-powered code analysis platform that detects bugs, optimizes logic, and evaluates complexity across multiple languages.",
      tech: ["GPT-3.5", "FastAPI", "React.js", "Static Analysis"],
      deployed: "Vercel",
      highlights: ["92% Accuracy", "1,000+ Submissions", "30% Lower Latency"],
    },
    {
      title: "AI Command-Line Assistant",
      description: "Natural-language command planner translating intent into executable workflows for more than 10 developer tools.",
      tech: ["LoRA/QLoRA", "RAG", "NLP", "Python"],
      highlights: ["+35% BLEU/ROUGE-L", "≤2B Parameters", "Dry-run Execution"],
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Interpretable fraud detection pipeline trained on 280,000+ transactions with robust class-imbalance handling.",
      tech: ["LightGBM", "XGBoost", "SHAP", "Scikit-learn"],
      highlights: ["92%+ Fraud Recall", "0.8269 PR-AUC", "30+ Features"],
    },
    {
      title: "Automated Book Pipeline",
      description: "End-to-end automation: Scrape → Rewrite → Review → TTS. Reduces effort by 70% with 2-min pipeline.",
      tech: ["Web Scraping", "TTS", "ChromaDB", "Automation"],
      highlights: ["70% Effort Saved", "2-min Pipeline", "Full Automation"],
    },
    {
      title: "E-commerce Image Generator",
      description: "GAN-based product image generation. Generated outputs, processed 500+ images with virtual try-on.",
      tech: ["GANs", "Deep Learning", "Image Processing", "PyTorch"],
      highlights: ["500+ Processed", "Virtual Try-on"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my most impactful work in AI, ML, and full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} whileHover={{ y: -5 }} className="group">
              <div className="relative h-full bg-gradient-to-br from-primary/20 via-card to-secondary/10 p-px rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 100, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative bg-background/80 backdrop-blur h-full rounded-2xl p-8 flex flex-col gap-6 border border-border group-hover:border-accent/50 transition-all">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs font-semibold text-accent">
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.deployed && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Deployed on {project.deployed}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
      />
    </section>
  )
}
