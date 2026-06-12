"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Briefcase, GraduationCap, Star, Rocket } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Agentic AI Developer",
      company: "Code Lab",
      period: "May 2024 – Present",
      description:
        "Developing agent-based AI applications using GPT APIs and RAG pipelines. Building RESTful and serverless APIs for LLM-powered services.",
      achievements: [
        "Developed autonomous multi-agent workflows using Python and OpenAI SDK",
        "Integrated AI agents into front-end systems using Next.js",
        "Built and deployed AI-powered features to production",
        "Collaborated with team on complex AI system architectures",
      ],
      tech: ["OpenAI", "Python", "Next.js", "RAG", "APIs"],
    },
    {
      title: "Full-Stack Developer",
      company: "Dev Hub",
      period: "Feb 2023 – Aug 2024",
      description:
        "Built autonomous workflows and optimized full-stack applications. Implemented CI/CD pipelines and improved system performance.",
      achievements: [
        "Architected Python-based automation pipelines integrating OpenAI SDK for multi-step task orchestration",
        "Developed frontend features with React.js/Next.js improving UX by 40%",
        "Automated workflows using n8n for multi-step AI tasks",
        "Optimized PostgreSQL queries reducing latency by 60%",
      ],
      tech: ["Python", "Next.js", "React", "n8n", "PostgreSQL"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16 text-center"
        >
          <motion.div
            initial={{ rotate: -10, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple mb-4"
          >
            <Briefcase size={32} className="text-white" />
          </motion.div>
          <h2 className="heading-section">Experience & Education</h2>
          <div className="underline-accent mx-auto"></div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="space-y-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-3 mb-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Professional Experience</h3>
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 border-2 border-neutral-200 dark:border-neutral-700 hover:border-accent-teal dark:hover:border-accent-pink hover:shadow-2xl hover:shadow-accent-teal/20 dark:hover:shadow-accent-pink/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -left-1 top-8 w-3 h-3 rounded-full bg-gradient-to-r from-accent-teal to-accent-pink group-hover:scale-150 transition-transform duration-300"></div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">{exp.title}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">{exp.period}</span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 mb-6">{exp.description}</p>

              <div className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2 size={20} className="text-primary-600 flex-shrink-0 mt-1" />
                    <p className="text-neutral-600 dark:text-neutral-300">{achievement}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 bg-gradient-to-r from-primary-100 to-accent-teal/20 dark:from-primary-900 dark:to-accent-pink/20 text-primary-600 dark:text-primary-400 rounded-full border border-primary-200 dark:border-primary-800 hover:scale-110 transition-transform duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-accent-purple to-accent-pink">
              <GraduationCap size={20} className="text-white" />
            </span>
            Education & Certifications
          </h3>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="group bg-white dark:bg-neutral-800 rounded-2xl p-8 border-2 border-accent-purple/30 dark:border-accent-purple/30 hover:border-accent-purple dark:hover:border-accent-teal hover:shadow-2xl hover:shadow-accent-purple/20 dark:hover:shadow-accent-teal/20 transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">B.Sc. in Environmental Sciences</h4>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">Karachi University</p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Graduated 2022. Strong analytical foundation in research methodologies and data analysis.
            </p>
          </motion.div>

          {/* Additional Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border-2 border-accent-teal/30 hover:border-accent-teal hover:shadow-xl hover:shadow-accent-teal/20 transition-all duration-300"
            >
              <h5 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                <Star size={16} className="text-accent-yellow" />
                Next.js Open Source Contributor
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Active contributor to Next.js ecosystem</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border-2 border-accent-pink/30 hover:border-accent-pink hover:shadow-xl hover:shadow-accent-pink/20 transition-all duration-300"
            >
              <h5 className="font-bold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                <Rocket size={16} className="text-accent-pink" />
                AI Mentor at GIAIC
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Mentoring next-gen AI developers</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
