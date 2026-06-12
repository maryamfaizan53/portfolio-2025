"use client"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  // Motion values keep the cursor trail off the React render path —
  // mouse movement animates these directly without re-rendering the section.
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const trailX = useSpring(cursorX, { stiffness: 400, damping: 35 })
  const trailY = useSpring(cursorY, { stiffness: 400, damping: 35 })
  const trailXBack = useTransform(trailX, (v) => v - 20)
  const trailYBack = useTransform(trailY, (v) => v - 20)
  const trailXFront = useTransform(trailX, (v) => v + 20)
  const trailYFront = useTransform(trailY, (v) => v + 20)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-accent-teal"
        style={{
          left: trailX,
          top: trailY,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-accent-pink"
        style={{
          left: trailXBack,
          top: trailYBack,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 rounded-full bg-accent-purple"
        style={{
          left: trailXFront,
          top: trailYFront,
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />

      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-accent-teal/20 to-accent-purple/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-accent-pink/20 to-accent-yellow/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="circle-container">
        <motion.div
          className="circle circle-1 parallax-circle"
          style={{
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(var(--color-neutral-50), var(--color-neutral-50)), conic-gradient(from 0deg, #2dd4bf, #a78bfa, #f472b6, #fbbf24, #2dd4bf)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            width: "clamp(200px, 90vmin, 800px)",
            height: "clamp(200px, 90vmin, 800px)",
          }}
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="circle circle-2 parallax-circle-reverse"
          style={{
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(var(--color-neutral-50), var(--color-neutral-50)), conic-gradient(from 90deg, #fbbf24, #f472b6, #a78bfa, #2dd4bf, #fbbf24)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            width: "clamp(150px, 70vmin, 650px)",
            height: "clamp(150px, 70vmin, 650px)",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          whileHover={{
            scale: 1.05,
          }}
        />
        <motion.div
          className="circle circle-3 parallax-circle-slow"
          style={{
            border: "2px solid transparent",
            backgroundImage:
              "linear-gradient(var(--color-neutral-50), var(--color-neutral-50)), conic-gradient(from 180deg, #a78bfa, #2dd4bf, #fbbf24, #f472b6, #a78bfa)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            width: "clamp(100px, 50vmin, 500px)",
            height: "clamp(100px, 50vmin, 500px)",
          }}
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          whileHover={{
            scale: 1.05,
          }}
        />

        {/* Central Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center space-y-4 sm:space-y-6 md:space-y-8 max-w-full px-4 sm:max-w-2xl"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-4 sm:mb-6 md:mb-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #2dd4bf, #f472b6, #a78bfa, #fbbf24, #2dd4bf)",
                  padding: "3px",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full bg-neutral-50 dark:bg-neutral-950 rounded-full" />
              </motion.div>
              <motion.div
                className="profile-circle relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-neutral-300 dark:border-neutral-700 glow-on-hover"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/images/mask-dp.jpg" alt="Maryam Faizan" className="w-full h-full object-cover" />
              </motion.div>
              {isHovered && (
                <>
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-accent-yellow rounded-full"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * Math.PI * 2) / 8) * 80,
                        y: Math.sin((i * Math.PI * 2) / 8) * 80,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-light"
          >
            <motion.span
              className="bg-gradient-to-r from-accent-teal via-accent-purple to-accent-pink bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Agentic AI Developer
            </motion.span>
          </motion.p>

          {/* Name with Better Formatting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white space-y-1 sm:space-y-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-light"
            >
              <span className="text-neutral-600 dark:text-neutral-400">Hi, I am</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative"
            >
              <motion.span
                className="relative inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundImage: "linear-gradient(to right, #CF0F47, #f472b6, #a78bfa, #2dd4bf)",
                  backgroundSize: "200% 100%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Maryam Faizan
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal via-accent-pink to-accent-purple rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.div>
          </motion.h1>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="relative text-xs sm:text-sm uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-all duration-300 group"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-teal via-accent-pink to-accent-purple"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent via-accent-teal to-accent-pink"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "100% 200%",
            }}
          />
          <motion.div
            className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            Scroll
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
