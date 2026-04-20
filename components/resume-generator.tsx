"use client"

import { Download } from "lucide-react"
import { motion } from "framer-motion"

export default function ResumeGenerator() {
  const downloadResume = () => {
    const resumeLink = document.createElement("a")
    resumeLink.href = "/Maryam_Faizan_Resume.pdf"
    resumeLink.download = "Maryam_Faizan_Resume.pdf"
    resumeLink.click()
  }

  return (
    <motion.button
      onClick={downloadResume}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-200 group"
    >
      <Download size={20} className="group-hover:animate-bounce" />
      Download Professional Resume
    </motion.button>
  )
}
