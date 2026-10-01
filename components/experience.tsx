"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle2 } from "lucide-react"

const roles = [
  {
    role: "Associate Software Engineer Intern",
    company: "Accenture",
    period: "May 2026 – July 2026",
    projects: [
      {
        title: "AI-Powered Search Engine (RAG)",
        points: [
          "Engineered FastAPI semantic search APIs for natural-language queries and CIN lookups, improving retrieval accuracy by 90%.",
          "Built a scalable ingestion pipeline using SentenceTransformers and FAISS for contextual company record discovery.",
          "Optimized preprocessing, batch embeddings, and persistent index storage, reducing startup time by 30%.",
        ],
      },
      {
        title: "Email Automation & Security Analysis Tool",
        points: [
          "Automated Outlook processing for 1,000+ emails, extracting operational metadata and infrastructure alerts.",
          "Created regex-based extraction for IPs, ticket IDs, hostnames, and environments with 95%+ accuracy.",
          "Integrated SQLite, Paramiko, WebSockets, unit testing, and structured logging to reach 90% test coverage.",
        ],
      },
    ],
  },
]

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">Professional experience</p>
          <h2 className="text-4xl font-bold md:text-5xl"><span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">Building at scale</span></h2>
        </motion.div>
        <div className="relative ml-3 border-l border-accent/30 pl-8 md:ml-8 md:pl-12">
          {roles.map((role) => (
            <motion.article key={role.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -left-[47px] top-0 flex size-8 items-center justify-center rounded-full border-4 border-background bg-accent text-accent-foreground md:-left-[61px]"><Briefcase className="size-4" /></div>
              <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div><h3 className="text-2xl font-bold">{role.role}</h3><p className="text-lg text-accent">{role.company}</p></div>
                <span className="text-sm font-medium text-muted-foreground">{role.period}</span>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {role.projects.map((project) => (
                  <div key={project.title} className="rounded-2xl border border-border bg-card/70 p-6 transition-colors hover:border-accent/50">
                    <h4 className="mb-4 text-lg font-semibold">{project.title}</h4>
                    <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                      {project.points.map((point) => <li key={point} className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
