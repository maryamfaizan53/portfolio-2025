'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Experience from '@/components/sections/experience'
import Contact from '@/components/sections/contact'
import Footer from '@/components/footer'
import ChatBot from '@/components/chatbot'

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 relative">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ChatBot isOpen={chatOpen} onToggle={setChatOpen} />
    </main>
  )
}
