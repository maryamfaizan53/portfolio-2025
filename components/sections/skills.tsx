"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "AI & Automation",
      skills: [
        "Agentic AI",
        "OpenAI SDK",
        "Prompt Engineering",
        "Multi-Agent Systems",
        "RAG Pipelines",
        "LLM Integration",
        "n8n Workflows",
      ],
      color: "from-purple-600 to-pink-500",
    },
    {
      category: "Frontend",
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "HTML/CSS",
        "Responsive Design",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      category: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "MongoDB",
        "Firebase",
        "Sanity CMS",
        "SQL",
      ],
      color: "from-green-600 to-emerald-500",
    },
    {
      category: "Tools & DevOps",
      skills: [
        "Git & GitHub",
        "Vercel",
        "CI/CD Pipelines",
        "API Integration",
        "Docker",
        "AWS",
        "Testing",
      ],
      color: "from-orange-600 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full"></div>
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
              className="group bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-500/10"
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg bg-linear-to-r ${category.color} mb-6`}
              >
                <h3 className="font-bold text-white text-sm">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200 cursor-default"
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
  );
}
