"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Linkedin, Github, Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial theme
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      htmlElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      htmlElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }

    setIsDark(newIsDark)
  }

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Social Icons - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-50 flex gap-4"
      >
        <a
          href="https://linkedin.com/in/maryam-faizan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/maryamfaizan53"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
      </motion.div>

      {/* Get In Touch - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 right-6 z-50"
      >
        <a
          href="#contact"
          className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors text-sm font-medium uppercase tracking-wider"
        >
          <Mail size={18} />
          Get In Touch
        </a>
      </motion.div>

      {/* Circular Home Button - Bottom Center */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="home-button"
        aria-label="Back to top"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </motion.a>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="#home" className="group relative flex items-center gap-2">
              <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-purple blur-lg opacity-50 rounded-full group-hover:opacity-80 transition-opacity" />
                <span className="relative text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  MF
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-teal group-hover:w-full transition-all duration-300 rounded-full" />
                </Link>
              ))}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-neutral-600 dark:text-neutral-300 transition-colors shadow-sm"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun size={18} className="text-accent-yellow" />
                  ) : (
                    <Moon size={18} className="text-primary-600" />
                  )}
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={18} className="text-accent-yellow" /> : <Moon size={18} />}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2 border-t border-neutral-200 dark:border-neutral-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
