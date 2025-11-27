"use client"

import { motion } from "framer-motion"
import { Phone, Mail } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9102218374",
      href: "tel:+919102218374",
    },
    {
      icon: Mail,
      label: "Email",
      value: "falak.ejaz@example.com",
      href: "mailto:falak.ejaz@example.com",
    },
  ]

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
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can build something amazing together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={idx}
                    href={info.href || "#"}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:shadow-lg glow-accent transition-all">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-lg font-semibold group-hover:text-accent transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
    </section>
  )
}
