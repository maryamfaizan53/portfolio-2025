'use client'

import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ResumeGenerator() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadResume = async () => {
    if (!isClient) return

    try {
      console.log("[v0] Starting PDF resume generation")
      
      // Dynamically import jsPDF and html2canvas
      const { jsPDF } = await import('jspdf')
      const html2canvas = (await import('html2canvas')).default

      // Create a temporary container with the resume content
      const container = document.createElement('div')
      container.style.position = 'absolute'
      container.style.left = '-9999px'
      container.style.width = '1200px'
      container.style.padding = '40px'
      container.style.backgroundColor = 'white'
      container.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      container.innerHTML = `
        <div style="background: linear-gradient(135deg, #CF0F47 0%, #B03052 100%); color: white; padding: 40px; border-radius: 12px; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(207, 15, 71, 0.2);">
          <div style="font-size: 48px; font-weight: 900; margin-bottom: 8px; letter-spacing: -1px;">MARYAM FAIZAN</div>
          <div style="font-size: 24px; font-weight: 600; opacity: 0.95; margin-bottom: 16px;">Agentic AI Developer | Automation Architect | Full-Stack Innovator</div>
          <div style="display: flex; flex-wrap: wrap; gap: 24px; font-size: 14px; opacity: 0.9; margin-top: 16px;">
            <div>📧 maryam.faizanmianoor@gmail.com</div>
            <div>📱 +92 321 3863866</div>
            <div>📍 Karachi, Pakistan</div>
            <div>🔗 github.com/maryamfaizan53</div>
            <div>💼 linkedin.com/in/maryam-faizan</div>
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Professional Summary</div>
          <p style="font-size: 13px; color: #3f3d37; line-height: 1.8;">Agentic AI Developer with expertise in multi-agent systems, Python, OpenAI SDK, automation workflows (n8n), RAG pipelines, and prompt engineering. Skilled in building AI-driven systems and integrating them into full-stack applications using Next.js, React, Tailwind CSS, TypeScript, Node.js, Express, MongoDB, and Sanity.</p>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Technical Skills</div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div style="background: #F2E8E5; padding: 12px; border-radius: 8px; border: 1px solid #E6D0CA;">
              <div style="font-size: 12px; font-weight: 700; color: #CF0F47; text-transform: uppercase; margin-bottom: 6px;">AI & Automation</div>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Agentic AI</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">OpenAI SDK</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">RAG</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">n8n</span>
              </div>
            </div>
            <div style="background: #F2E8E5; padding: 12px; border-radius: 8px; border: 1px solid #E6D0CA;">
              <div style="font-size: 12px; font-weight: 700; color: #CF0F47; text-transform: uppercase; margin-bottom: 6px;">Frontend</div>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Next.js</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">React</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">TypeScript</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Tailwind</span>
              </div>
            </div>
            <div style="background: #F2E8E5; padding: 12px; border-radius: 8px; border: 1px solid #E6D0CA;">
              <div style="font-size: 12px; font-weight: 700; color: #CF0F47; text-transform: uppercase; margin-bottom: 6px;">Backend & DB</div>
              <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Node.js</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">MongoDB</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Firebase</span>
                <span style="display: inline-block; background: white; color: #B03052; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; border: 1px solid #D76C82;">Sanity</span>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Professional Experience</div>
          <div style="border-left: 4px solid #CF0F47; padding-left: 20px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="font-size: 16px; font-weight: 700; color: #1a1815;">Agentic AI Developer</div>
              <div style="font-size: 13px; color: #71706a; font-style: italic;">Code Lab (May 2024 – Present)</div>
            </div>
            <div style="font-size: 14px; color: #CF0F47; font-weight: 600; margin-bottom: 8px;">AI & Full-Stack Development</div>
            <ul style="list-style: none; margin: 0; padding: 0;">
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Developed agent-based AI applications using GPT APIs and RAG pipelines
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Automated data workflows with Python and n8n improving team efficiency
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Integrated AI agents into front-end systems using Next.js
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Built RESTful and serverless APIs for LLM-powered services
              </li>
            </ul>
          </div>
          <div style="border-left: 4px solid #CF0F47; padding-left: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="font-size: 16px; font-weight: 700; color: #1a1815;">Full-Stack Developer Intern</div>
              <div style="font-size: 13px; color: #71706a; font-style: italic;">Dev Hub (Feb 2023 – Aug 2024)</div>
            </div>
            <div style="font-size: 14px; color: #CF0F47; font-weight: 600; margin-bottom: 8px;">Web Development & AI Integration</div>
            <ul style="list-style: none; margin: 0; padding: 0;">
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Built autonomous multi-agent workflows using Python and OpenAI SDK
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Developed frontend features with React.js/Next.js improving UX and performance
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Automated workflows using n8n for multi-step AI tasks
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Optimized PostgreSQL queries reducing latency significantly
              </li>
              <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
                <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
                Implemented CI/CD pipelines accelerating deployment cycles
              </li>
            </ul>
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Featured Projects</div>
          <div style="background: linear-gradient(135deg, #F9F4F2 0%, #F2E8E5 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #CF0F47; margin-bottom: 12px;">
            <div style="font-size: 14px; font-weight: 700; color: #1a1815; margin-bottom: 4px;">AI Fashion Ecommerce</div>
            <div style="font-size: 12px; color: #3f3d37; line-height: 1.6;">AI-powered fashion recommendation system with real-time inventory management and personalized shopping experience.</div>
            <div style="font-size: 11px; color: #CF0F47; margin-top: 6px; font-weight: 600;">Tech: Next.js, AI Recommendations, Stripe, MongoDB</div>
          </div>
          <div style="background: linear-gradient(135deg, #F9F4F2 0%, #F2E8E5 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #CF0F47; margin-bottom: 12px;">
            <div style="font-size: 14px; font-weight: 700; color: #1a1815; margin-bottom: 4px;">Geniefy My Finance</div>
            <div style="font-size: 12px; color: #3f3d37; line-height: 1.6;">AI-based personal finance assistant with smart insights, expense tracking, and financial goal planning powered by agentic workflows.</div>
            <div style="font-size: 11px; color: #CF0F47; margin-top: 6px; font-weight: 600;">Tech: Next.js, OpenAI API, Python Agents, Node.js</div>
          </div>
          <div style="background: linear-gradient(135deg, #F9F4F2 0%, #F2E8E5 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #CF0F47; margin-bottom: 12px;">
            <div style="font-size: 14px; font-weight: 700; color: #1a1815; margin-bottom: 4px;">ShopCo – Ecommerce</div>
            <div style="font-size: 12px; color: #3f3d37; line-height: 1.6;">Full-featured ecommerce platform with Stripe payments, Sanity CMS content management, and optimized performance.</div>
            <div style="font-size: 11px; color: #CF0F47; margin-top: 6px; font-weight: 600;">Tech: Next.js, Stripe, Sanity, Tailwind CSS</div>
          </div>
          <div style="background: linear-gradient(135deg, #F9F4F2 0%, #F2E8E5 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #CF0F47;">
            <div style="font-size: 14px; font-weight: 700; color: #1a1815; margin-bottom: 4px;">Nexus AI Web Agency</div>
            <div style="font-size: 12px; color: #3f3d37; line-height: 1.6;">Agency website showcasing AI-integrated automation tools and services with interactive demonstrations.</div>
            <div style="font-size: 11px; color: #CF0F47; margin-top: 6px; font-weight: 600;">Tech: Next.js, Framer Motion, AI Integration</div>
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Education & Certification</div>
          <div style="border-left: 4px solid #CF0F47; padding-left: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
              <div style="font-size: 16px; font-weight: 700; color: #1a1815;">B.Sc. in Environmental Sciences</div>
              <div style="font-size: 13px; color: #71706a; font-style: italic;">2022</div>
            </div>
            <div style="font-size: 14px; color: #CF0F47; font-weight: 600; margin-bottom: 8px;">Karachi University</div>
          </div>
        </div>

        <div style="margin-bottom: 32px;">
          <div style="font-size: 20px; font-weight: 800; color: #CF0F47; border-bottom: 3px solid #D76C82; padding-bottom: 12px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Community & Contributions</div>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
              Next.js Open Source Contributor
            </li>
            <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
              AI Mentor at GIAIC (Generative AI Innovation Community)
            </li>
            <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
              Speaker at AI & Next.js Meetups
            </li>
            <li style="font-size: 13px; color: #3f3d37; margin-bottom: 6px; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #D76C82;">▸</span>
              Active contributor to AI/ML development communities
            </li>
          </ul>
        </div>

        <div style="border-top: 2px solid #D76C82; margin-top: 40px; padding-top: 20px; text-align: center; font-size: 11px; color: #71706a;">
          Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | Maryam Faizan Portfolio
        </div>
      `

      document.body.appendChild(container)

      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      // Add pages as needed
      while (heightLeft > 0) {
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
        if (heightLeft > 0) {
          pdf.addPage()
          position = -imgHeight + pageHeight
        }
      }

      pdf.save('Maryam_Faizan_Resume.pdf')
      console.log("[v0] PDF downloaded successfully")

      document.body.removeChild(container)
    } catch (error) {
      console.error("[v0] PDF generation error:", error)
      alert('Error generating resume. Please try again.')
    }
  }

  if (!isClient) return null

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
