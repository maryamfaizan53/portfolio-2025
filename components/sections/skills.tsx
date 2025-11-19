'use client'

import { motion } from 'framer-motion'
import { Brain, Layout, Server, Terminal } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'AI & Automation',
      icon: Brain,
      skills: ['Agentic AI', 'OpenAI SDK', 'Prompt Engineering', 'Multi-Agent Systems', 'RAG Pipelines', 'LLM Integration', 'n8n Workflows'],
      gradient: 'from-[#A78BFA] to-primary-500', // Updated to use accent purple
    },
    {
      category: 'Frontend Magic', // Made title more playful
      icon: Layout,
      skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'Responsive Design'],
      gradient: 'from-[#F472B6] to-primary-500', // Updated to use accent pink
    },
    {
      category: 'Backend Power', // Made title more playful
      icon: Server,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase', 'Sanity CMS', 'SQL'],
      gradient: 'from-[#2DD4BF] to-primary-500', // Updated to use accent teal
    },
    {
      category: 'DevOps & Tools',
      icon: Terminal,
      skills: ['Git & GitHub', 'Vercel', 'CI/CD Pipelines', 'API Integration', 'Docker', 'AWS', 'Testing'],
      gradient: 'from-[#FBBF24] to-primary-500', // Updated to use accent yellow
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--color-accent-teal)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full filter blur-3xl opacity-10" style={{ background: 'var(--color-accent-pink)' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Technical Arsenal ⚡</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#2DD4BF] via-primary-500 to-[#A78BFA] rounded-full mx-auto"></div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My toolkit for building intelligent, scalable, and beautiful applications.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-full text-sm font-medium hover:bg-white dark:hover:bg-slate-600 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-300 hover:shadow-md transition-all duration-300 cursor-default border border-transparent"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
