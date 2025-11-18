"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
        "Built autonomous multi-agent workflows using Python and OpenAI SDK",
        "Developed frontend features with React.js/Next.js improving UX by 40%",
        "Automated workflows using n8n for multi-step AI tasks",
        "Optimized PostgreSQL queries reducing latency by 60%",
      ],
      tech: ["Python", "Next.js", "React", "n8n", "PostgreSQL"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <h2 className="heading-section">Experience & Education</h2>
          <div className="underline-accent"></div>
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
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Professional Experience
            </h3>
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                {exp.description}
              </p>

              <div className="space-y-3 mb-6">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-primary-600 shrink-0 mt-1"
                    />
                    <p className="text-neutral-600 dark:text-neutral-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full"
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
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Education & Certifications
          </h3>

          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-neutral-800 rounded-xl p-8 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 hover:shadow-lg dark:hover:shadow-primary-500/10 transition-all duration-300"
          >
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
              B.Sc. in Environmental Sciences
            </h4>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
              Karachi University
            </p>
            <p className="text-neutral-600 dark:text-neutral-300">
              Graduated 2022. Strong analytical foundation in research
              methodologies and data analysis.
            </p>
          </motion.div>

          {/* Additional Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
            >
              <h5 className="font-bold text-neutral-900 dark:text-white mb-2">
                Next.js Open Source Contributor
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Active contributor to Next.js ecosystem
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
            >
              <h5 className="font-bold text-neutral-900 dark:text-white mb-2">
                AI Mentor at GIAIC
              </h5>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Mentoring next-gen AI developers
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
