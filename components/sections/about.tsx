'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Brain, Rocket } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Fun Background Elements */}
      <div className="absolute top-20 right-10 opacity-10 animate-pulse text-primary-500">
        <Brain size={120} />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10 animate-bounce text-accent-teal" style={{ animationDuration: '3s' }}>
        <Code size={100} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4 relative">
            <motion.div
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 12, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute -top-8 -right-4 bg-accent-yellow text-neutral-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 z-20 hidden sm:block border-2 border-white dark:border-neutral-800"
            >
              AI Powered! ⚡️
            </motion.div>
            <h2 className="heading-section flex items-center gap-3">
              About Me 
              <motion.span 
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                className="inline-block text-4xl"
              >
                👩‍💻
              </motion.span>
            </h2>
            <div className="underline-accent"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-primary-200 via-accent-purple to-accent-teal rounded-full opacity-50 hidden sm:block"></div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pl-0 sm:pl-6">
              I'm an <span className="font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-md">Agentic AI Developer</span> with a passion for building intelligent systems that solve real-world problems. With expertise in multi-agent architectures, LLM orchestration, and automation workflows, I design systems that think and adapt.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pl-0 sm:pl-6">
              My journey spans from <span className="font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-md">AI and automation</span> to full-stack web development. I've developed autonomous agents using Python and OpenAI SDK, built scalable applications with Next.js and React, and architected data pipelines with RAG and n8n automation.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pl-0 sm:pl-6">
              I thrive in collaborative environments, mentoring emerging developers while staying at the cutting edge of AI technology. Whether building AI-powered features or creating pixel-perfect interfaces, I bring a strategic mindset to every project.
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed pl-0 sm:pl-6">
              Currently at <span className="font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-0.5 rounded-md">Code Lab</span>, I'm developing agent-based AI applications and integrating AI systems into production environments. I'm an open-source contributor to Next.js and mentor at GIAIC, helping the next generation master modern development.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center space-y-2 p-4 rounded-2xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group cursor-default"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform">2+</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Years Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center space-y-2 p-4 rounded-2xl hover:bg-accent-purple/10 transition-colors group cursor-default"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent group-hover:scale-110 transition-transform">10+</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Projects Delivered</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center space-y-2 p-4 rounded-2xl hover:bg-accent-teal/10 transition-colors group cursor-default"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-accent-teal to-emerald-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Commitment</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
