"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Linkedin, Github, Instagram } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkMode = savedTheme === "dark" || (savedTheme === null && prefersDark)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    if (newIsDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
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

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/maryam-faizan", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/maryamfaizan53", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/maryamfaizan53", label: "Instagram" },
  ]

  return (
    <>
      {/* Circular Home Button - Bottom Center */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="home-button"
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </motion.a>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#home" className="group relative">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-serif font-bold bg-gradient-to-r from-primary-600 via-accent-pink to-accent-purple bg-clip-text text-transparent hover:from-accent-teal hover:via-accent-pink hover:to-primary-600 transition-all duration-500"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Maryam Faizan
              </motion.span>
              <motion.span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 to-accent-teal group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative group text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-teal transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              })}

              {/* Social Icons */}
              <div className="flex items-center gap-3 pl-3 border-l border-neutral-200 dark:border-neutral-700">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>

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
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="md:hidden overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
              >
                <div className="pb-4 space-y-1 pt-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20"
                          : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="flex gap-4 px-4 pt-3 border-t border-neutral-200 dark:border-neutral-700 mt-2">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                          aria-label={link.label}
                        >
                          <Icon size={18} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  )
}
