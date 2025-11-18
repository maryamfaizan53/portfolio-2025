"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full -z-30">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/professional-ai-developer-woman.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!videoLoaded && (
          <div className="absolute inset-0 bg-linear-to-br from-primary-900 via-neutral-900 to-neutral-800"></div>
        )}
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-secondary-100/40 via-primary-50/35 to-primary-100/40 dark:from-neutral-950/70 dark:via-neutral-900/65 dark:to-neutral-800/70 -z-20"></div>

      <div className="absolute inset-0 bg-black/30 dark:bg-black/40 -z-20"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-600/20 dark:border-primary-400/20 shadow-2xl glass-effect">
              <div className="absolute inset-0 bg-linear-to-br from-primary-600 to-primary-500 opacity-10"></div>
              <Image
                src="/professional-ai-developer-woman.jpg"
                alt="Maryam Faizan"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full border border-primary-200 dark:border-primary-700 glass-effect">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                ✨ Agentic AI Developer & Full-Stack Innovator
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-primary-600 via-primary-500 to-primary-500 bg-clip-text text-transparent">
                Maryam Faizan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance">
              Building intelligent AI systems and scalable web applications.
              Expert in multi-agent architectures, automation workflows, and
              modern full-stack development.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-linear-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-200 group glass-effect"
            >
              View My Work
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
            <a
              href="mailto:maryam.faizanmianoor@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 font-semibold rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200 glass-effect"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4"
          >
            <a
              href="https://github.com/maryamfaizan53"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-200 glass-effect"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/maryam-faizan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-200 glass-effect"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:maryam.faizanmianoor@gmail.com"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:bg-primary-600 hover:text-white hover:scale-110 transition-all duration-200 glass-effect"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-neutral-400 dark:border-neutral-600 flex items-start justify-center p-2 glass-effect">
              <div className="w-1 h-2 bg-neutral-400 dark:bg-neutral-600 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
