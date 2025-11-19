'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/maryamfaizan53', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/maryam-faizan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:maryam.faizanmianoor@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-100 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Footer Content */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                MF
              </Link>
              <p className="text-neutral-400 leading-relaxed">
                Building intelligent AI systems and scalable web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-neutral-400">
                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      {item}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="https://github.com/maryamfaizan53" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/maryam-faizan" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:maryam.faizanmianoor@gmail.com" className="hover:text-primary-400 transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div>
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <p className="text-neutral-400 mb-4 text-sm">
                Interested in collaborating? Reach out for opportunities.
              </p>
              <a
                href="mailto:maryam.faizanmianoor@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 text-sm font-semibold"
              >
                <Mail size={16} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-neutral-800 py-8 space-y-6">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-neutral-800 hover:bg-primary-600 text-neutral-300 hover:text-white transition-all duration-200"
                    aria-label={link.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center pt-4 border-t border-neutral-800">
              <p className="text-neutral-400 text-sm">
                © {currentYear} Maryam Faizan. All rights reserved. | Built with Next.js, React & Tailwind CSS
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
