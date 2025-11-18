'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'maryam.faizanmianoor@gmail.com',
      href: 'mailto:maryam.faizanmianoor@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 321 3863866',
      href: 'tel:+923213863866',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#',
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
          <h2 className="heading-section">Get In Touch</h2>
          <div className="underline-accent mx-auto"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
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
              return (
                <motion.a
                  key={idx}
                  href={info.href}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300">
                    <Icon className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{info.label}</p>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Download Resume */}
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
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
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-600 dark:focus:ring-primary-400 transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
