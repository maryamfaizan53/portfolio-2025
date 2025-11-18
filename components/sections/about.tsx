'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="heading-section">About Me</h2>
            <div className="underline-accent"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I'm an <span className="font-semibold text-primary-600 dark:text-primary-400">Agentic AI Developer</span> with a passion for building intelligent systems that solve real-world problems. With expertise in multi-agent architectures, LLM orchestration, and automation workflows, I design systems that think and adapt.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              My journey spans from <span className="font-semibold text-primary-600 dark:text-primary-400">AI and automation</span> to full-stack web development. I've developed autonomous agents using Python and OpenAI SDK, built scalable applications with Next.js and React, and architected data pipelines with RAG and n8n automation.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I thrive in collaborative environments, mentoring emerging developers while staying at the cutting edge of AI technology. Whether building AI-powered features or creating pixel-perfect interfaces, I bring a strategic mindset to every project.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Currently at <span className="font-semibold text-primary-600 dark:text-primary-400">Code Lab</span>, I'm developing agent-based AI applications and integrating AI systems into production environments. I'm an open-source contributor to Next.js and mentor at GIAIC, helping the next generation master modern development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">10+</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Projects Delivered</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center space-y-2"
            >
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100%</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Commitment</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
