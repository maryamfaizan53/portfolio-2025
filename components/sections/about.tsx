"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Section Heading */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">About</h2>
            <div className="w-16 h-px bg-neutral-300 dark:bg-neutral-700 mx-auto"></div>
          </div>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 text-center">
            Here is a little background
          </h3>

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
