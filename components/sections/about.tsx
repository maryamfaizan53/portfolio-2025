"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Heading */}
          <div className="text-center space-y-6 mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-teal to-accent-purple mb-4"
            >
              <User size={32} className="text-white" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">About Me</h2>
            <div className="underline-accent mx-auto"></div>
          </div>

          {/* Subtitle */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-accent-teal/10 via-accent-pink/10 to-accent-purple/10 rounded-2xl p-8 border-2 border-accent-teal/20"
          >
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-accent-teal via-accent-pink to-accent-purple bg-clip-text text-transparent text-center">
              Here is a little background
            </h3>
          </motion.div>

          {/* Bio Content */}
          <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            <p>
              Hey 👋🏼 I am an{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">Agentic AI Developer</span> currently
              based in Pakistan. I completed my undergraduate in Environmental Sciences at Karachi University, and later
              dove deep into the world of AI, automation, and full-stack development through intensive bootcamps and
              self-directed learning.
            </p>
            <p>
              I absolutely love all things to do with{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">
                AI agents, autonomous systems, and elegant code
              </span>
              . My expertise spans from building multi-agent architectures with Python and OpenAI SDK to crafting
              pixel-perfect interfaces with Next.js and React.
            </p>
            <p>
              Currently, I'm developing agent-based AI applications at{" "}
              <span className="font-semibold text-neutral-900 dark:text-white">Code Lab</span>, mentoring emerging
              developers at GIAIC, and contributing to the Next.js open-source community. I'm also passionate about
              automation workflows using n8n and building scalable RAG pipelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
