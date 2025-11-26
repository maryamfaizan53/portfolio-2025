"use client";

import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"
          style={{
            animationDuration: "3s",
            background: "var(--color-accent-teal)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"
          style={{
            animationDuration: "4s",
            background: "var(--color-accent-purple)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ background: "var(--color-accent-yellow)" }}
        />
      </div>

      <div className="absolute inset-0 w-full h-full -z-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-neutral-900 to-neutral-800 opacity-50"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/40 via-primary-50/35 to-primary-100/40 dark:from-neutral-950/70 dark:via-neutral-900/65 dark:to-neutral-800/70 -z-20"></div>

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
            <div className="relative group">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-12 -right-12 bg-white dark:bg-neutral-800 p-3 rounded-2xl shadow-xl z-30 hidden sm:block transform rotate-12 border border-neutral-100 dark:border-neutral-700"
              >
                <span className="text-2xl">👋</span>
                <span className="absolute -bottom-2 left-4 w-4 h-4 bg-white dark:bg-neutral-800 transform rotate-45 border-r border-b border-neutral-100 dark:border-neutral-700"></span>
              </motion.div>

              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl z-10 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/public/mask-dp.jpg"
                  alt="Maryam Faizan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -inset-2 rounded-full border-2 border-t-transparent animate-spin z-0"
                style={{
                  borderColor: "var(--color-accent-teal)",
                  borderTopColor: "transparent",
                  animationDuration: "3s",
                }}
              />
              <div
                className="absolute -inset-4 rounded-full border-2 border-b-transparent animate-spin z-0"
                style={{
                  borderColor: "rgba(167, 139, 250, 0.3)",
                  borderBottomColor: "transparent",
                  animationDuration: "5s",
                  animationDirection: "reverse",
                }}
              />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-2 -right-2 bg-white dark:bg-neutral-800 p-2 rounded-full shadow-lg text-2xl z-20 cursor-pointer"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full border border-primary-200 dark:border-primary-700 glass-effect cursor-default"
            >
              <span className="text-sm font-semibold bg-gradient-to-br from-primary-600 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
                <span className="animate-pulse">✨</span> Available for Hire{" "}
                <span className="animate-bounce">🚀</span>
              </span>
            </motion.div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight relative">
              <span
                className="absolute -top-8 -left-8 text-4xl opacity-20 animate-bounce hidden lg:block"
                style={{ animationDelay: "1s" }}
              >
                ⚡️
              </span>
              <span className="bg-gradient-to-br from-primary-500 via-pink-400 to-purple-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">
                Maryam Faizan
              </span>
              <span
                className="absolute -bottom-4 -right-4 text-4xl opacity-20 animate-bounce hidden lg:block"
                style={{ animationDelay: "2s" }}
              >
                🤖
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed text-balance">
              I build{" "}
              <span
                className="font-semibold"
                style={{ color: "var(--color-accent-teal)" }}
              >
                autonomous agents
              </span>
              ,
              <span
                className="font-semibold"
                style={{ color: "var(--color-accent-purple)" }}
              >
                {" "}
                intelligent workflows
              </span>
              , and
              <span
                className="font-semibold"
                style={{ color: "var(--color-accent-pink)" }}
              >
                {" "}
                scalable web apps
              </span>{" "}
              that bring ideas to life 🤖
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-br from-primary-600 to-primary-500 hover:from-primary-500 hover:to-pink-400 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              View My Work
              <span className="relative ml-2">
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform relative z-10"
                  size={20}
                />
                {/* Color burst particles */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-burst-1"
                    style={{ background: "var(--color-accent-teal)" }}
                  ></span>
                  <span
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-burst-2"
                    style={{ background: "var(--color-accent-pink)" }}
                  ></span>
                  <span
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-burst-3"
                    style={{ background: "var(--color-accent-purple)" }}
                  ></span>
                  <span
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full animate-burst-4"
                    style={{ background: "var(--color-accent-yellow)" }}
                  ></span>
                  <span
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full animate-burst-5"
                    style={{ background: "#FF6B9D" }}
                  ></span>
                  <span
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full animate-burst-6"
                    style={{ background: "#4ECDC4" }}
                  ></span>
                </span>
              </span>
            </Link>
            <motion.button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/api/resume/download";
                link.download = "Maryam_Faizan_Resume.html";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 group glass-effect"
            >
              <Download size={20} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </motion.button>
            <a
              href="mailto:maryam.faizanmianoor@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-50 font-bold rounded-full hover:border-primary-400 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 glass-effect group"
            >
              Get In Touch
              <span className="ml-2 group-hover:rotate-12 transition-transform inline-block">
                👋
              </span>
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
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:scale-125 transition-all duration-300 glass-effect group"
              style={{ ["--hover-color" as any]: "var(--color-accent-purple)" }}
              aria-label="GitHub"
            >
              <Github
                size={24}
                className="group-hover:text-[var(--hover-color)]"
              />
            </a>
            <a
              href="https://linkedin.com/in/maryam-faizan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:scale-125 transition-all duration-300 glass-effect group"
              style={{ ["--hover-color" as any]: "var(--color-accent-teal)" }}
              aria-label="LinkedIn"
            >
              <Linkedin
                size={24}
                className="group-hover:text-[var(--hover-color)]"
              />
            </a>
            <a
              href="mailto:maryam.faizanmianoor@gmail.com"
              className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:scale-125 transition-all duration-300 glass-effect group"
              style={{ ["--hover-color" as any]: "var(--color-accent-pink)" }}
              aria-label="Email"
            >
              <Mail
                size={24}
                className="group-hover:text-[var(--hover-color)]"
              />
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
              <div className="w-1 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
