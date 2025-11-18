import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import ThemeProvider from '@/components/theme-provider'

import { Inter } from 'next/font/google'

// Initialize fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Maryam Faizan | Agentic AI Developer & Full-Stack Innovator',
  description: 'Agentic AI Developer with expertise in multi-agent systems, automation, RAG pipelines, and full-stack web development. Building AI-driven solutions with Next.js, React, and Python.',
  keywords: 'AI Developer, Full-Stack, Next.js, React, Automation, RAG, Multi-Agent Systems',
  authors: [{ name: 'Maryam Faizan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-nextjs-tailwind-flax.vercel.app',
    title: 'Maryam Faizan | Agentic AI Developer',
    description: 'Full-stack innovator specializing in AI automation and modern web development',
    siteName: 'Maryam Faizan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@maryamfaizan53',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}>
        <ThemeProvider>
          <div className="animated-background">
            <div className="floating-orb orb-1"></div>
            <div className="floating-orb orb-2"></div>
            <div className="floating-orb orb-3"></div>
          </div>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
