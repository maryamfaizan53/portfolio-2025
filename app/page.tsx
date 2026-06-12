"use client"

import { useState } from "react"
import { MotionConfig } from "framer-motion"
import Navigation from "@/components/navigation"
import ScrollProgress from "@/components/scroll-progress"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Contact from "@/components/sections/contact"
import ChatBot from "@/components/chatbot"
import Footer from "@/components/footer"

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 relative overflow-x-hidden">
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ChatBot isOpen={chatOpen} onToggle={setChatOpen} />
      </main>
    </MotionConfig>
  )
}
