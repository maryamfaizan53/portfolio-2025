"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import ResumeGenerator from "../resume-generator"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 4000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("[v0] Contact form error:", err)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "maryam.faizanmianoor@gmail.com",
      href: "mailto:maryam.faizanmianoor@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 321 3863866",
      href: "tel:+923213863866",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block text-6xl mb-4"
          >
            📬
          </motion.div>
          <h2 className="heading-section">Get In Touch</h2>
          <div className="underline-accent mx-auto"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing
            together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Contact Information</h3>

            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              const colors = [
                "bg-accent-teal/20 group-hover:bg-accent-teal text-accent-teal group-hover:text-white",
                "bg-accent-pink/20 group-hover:bg-accent-pink text-accent-pink group-hover:text-white",
                "bg-accent-purple/20 group-hover:bg-accent-purple text-accent-purple group-hover:text-white",
              ]
              return (
                <motion.a key={idx} href={info.href} whileHover={{ x: 5 }} className="flex gap-4 group">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors[idx]} flex items-center justify-center transition-all duration-300 shadow-lg`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{info.label}</p>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-accent-teal group-hover:to-accent-pink group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Download Resume */}
            <div className="mt-8">
              <ResumeGenerator />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-accent-teal dark:focus:border-accent-pink focus:ring-2 focus:ring-accent-teal/20 dark:focus:ring-accent-pink/20 transition-all duration-200 disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-accent-pink dark:focus:border-accent-purple focus:ring-2 focus:ring-accent-pink/20 dark:focus:ring-accent-purple/20 transition-all duration-200 disabled:opacity-50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={loading}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:border-accent-purple dark:focus:border-accent-teal focus:ring-2 focus:ring-accent-purple/20 dark:focus:ring-accent-teal/20 transition-all duration-200 resize-none disabled:opacity-50"
                  placeholder="Your message..."
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                >
                  <p className="text-green-800 dark:text-green-300 font-semibold">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <p className="text-red-800 dark:text-red-300 font-semibold">{error}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent-teal via-accent-pink to-accent-purple hover:from-accent-pink hover:via-accent-purple hover:to-accent-teal text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-accent-pink/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <Send size={20} />
                {loading ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
