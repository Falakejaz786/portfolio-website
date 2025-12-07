"use client"

import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      school: "Kalinga Institute of Industrial Technology (KIIT)",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2023 - 2027",
      cgpa: "CGPA: 8.65",
      description: "Specialized in AI/ML with focus on LLMs and Computer Vision",
      color: "from-primary to-blue-500",
    },
    {
      school: "Delhi Public School",
      degree: "High School (12th Grade)",
      period: "2010 - 2023",
      description: "Built strong foundation in mathematics, physics, and computer science",
      color: "from-secondary to-cyan-500",
    },
  ]

  const achievements = [
    {
      title: "Senior Tech Member",
      orgs: ["K1000", "Elabs", "CyberVault", "TEDx KIIT"],
    },
    {
      title: "SIH 2025",
      desc: "Internal Round Qualifier - Medley Healthcare AI",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
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
              Education & Achievements
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-accent">Education</h3>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-accent border-4 border-background" />
                  {idx < education.length - 1 && (
                    <div className="absolute -left-1 top-8 w-1 h-16 bg-gradient-to-b from-accent to-muted" />
                  )}

                  <div className={`ml-8 bg-gradient-to-br ${edu.color} p-px rounded-xl overflow-hidden`}>
                    <div className="bg-card rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <p className="text-muted-foreground">{edu.school}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 text-sm">
                        <span className="text-accent font-semibold">{edu.period}</span>
                        {edu.cgpa && <span className="text-muted-foreground">{edu.cgpa}</span>}
                        <p className="text-muted-foreground text-xs">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-8 text-accent">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6 hover:border-accent/50 transition-all cursor-pointer"
                >
                  <h4 className="text-lg font-bold text-accent mb-2">{achievement.title}</h4>
                  {achievement.orgs ? (
                    <p className="text-muted-foreground">{achievement.orgs.join(" • ")}</p>
                  ) : (
                    <p className="text-muted-foreground">{achievement.desc}</p>
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="space-y-4 mt-8 p-6 rounded-xl bg-card border border-border"
              >
                <h4 className="text-lg font-bold">Competitive Programming</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">GeeksforGeeks</span>
                    <span className="text-accent font-bold">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">NeetCode</span>
                    <span className="text-accent font-bold">150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">C++ Proficiency</span>
                    <span className="text-accent font-bold">Advanced</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
      />
    </section>
  )
}
