"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "AI Health Tracker",
      description:
        "Modern full-stack AI Tracker built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/placeholder.jpg",
      liveUrl: "https://bhook-khana-tracker.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Furnisite E-Commerce Furniture Store",
      description:
        "Modern full-stack e-commerce built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/ecommerce-shopping-platform.jpg",
      liveUrl: "https://main-hackathon-proj-final-updates-latest-v5.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Fashion Fusion Blog website",
      description:
        "Modern full-stack e-commerce blog website built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/fashion-fusion.PNG",
      liveUrl: "https://blog-website-in-next-js-14-with-sanity-io-latest-puh7.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "ShopHub E-Commerce Platform",
      description:
        "Modern full-stack e-commerce built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/ecommerce-shopping-platform.jpg",
      liveUrl: "https://hackathon-main-project-2.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "ShopCo E-Commerce Platform",
      description:
        "Modern full-stack e-commerce built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/ecommerce-shopping-platform.jpg",
      liveUrl: "",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Geniefy My Finance",
      description:
        "AI-powered personal finance assistant that provides intelligent insights, expense tracking, and financial recommendations using advanced AI algorithms.",
      tech: ["Next.js", "OpenAI API", "React", "MongoDB", "Node.js"],
      image: "/finance-dashboard-analytics.jpg",
      liveUrl: "https://geniefy-my-finance-scss.vercel.app/",
      githubUrl: "https://github.com/maryamfaizan53/geniefy-my-finance",
      featured: true,
    },
    {
      title: "AI Fashion Ecommerce",
      description:
        "Intelligent fashion recommendation system powered by AI. Analyzes user preferences and provides personalized product suggestions using machine learning.",
      tech: ["Next.js", "AI/ML", "React", "Python", "MongoDB"],
      image: "/fashion-clothing-ai-recommendations.jpg",
      liveUrl: "https://ai-fashion-ecommerce.lumi.ing",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Nexus AI Web Agency",
      description:
        "Modern agency website showcasing automation tools and AI integration services. Demonstrates cutting-edge web design with interactive components.",
      tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      image: "/nexus.PNG",
      liveUrl: "https://nexus-ai-web-agency.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Pickup Lines Generator",
      description:
        "Fun, interactive AI app that generates creative pickup lines using GPT. Features smooth UI, theme support, and real-time generation.",
      tech: ["Next.js", "OpenAI", "React", "TypeScript", "Tailwind CSS"],
      image: "/pickup-lines.PNG",
      liveUrl: "https://frontend-pickuplines-wrcb.vercel.app/",
      githubUrl: "https://github.com/maryamfaizan53/frontend_pickuplines",
    },
    {
      title: "Interactive Portfolio",
      description:
        "Interactive portfolio webiste with dymanic content built with Next.js, Stripe, and Sanity CMS. Features optimized performance, seamless checkout, and content management.",
      tech: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
      image: "/portfolio.PNG",
      liveUrl: "https://maryams-portfolio-new.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "AI Codes Hub",
      description:
        "Comprehensive platform for AI-generated code tutorials and learning resources. Helps developers master AI integration and modern development practices.",
      tech: ["Next.js", "React", "Sanity CMS", "Node.js", "MongoDB"],
      image: "/aicodeshub.PNG",
      liveUrl: "https://www.aicodeshub.com/",
      githubUrl: "#",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          <h2 className="heading-section">Featured Projects</h2>
          <div className="underline-accent"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className={`group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-500/20 ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-neutral-900/20 to-transparent"
                />
              </div>

              <div className="p-6 bg-white dark:bg-neutral-800">
                {project.featured && (
                  <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 rounded-full mb-3">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400">Featured</span>
                  </div>
                )}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-200"
                  >
                    Live
                    <ExternalLink size={16} />
                  </a>
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 rounded-lg text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700/20 transition-all duration-200"
                    >
                      Code
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link
            href="https://github.com/maryamfaizan53"
            target="_blank"
            className="px-8 py-3 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200"
          >
            View All Projects on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
