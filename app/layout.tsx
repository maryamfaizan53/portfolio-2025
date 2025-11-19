import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import ThemeProvider from '@/components/theme-provider'

import { Inter, DM_Sans as V0_Font_DM_Sans, Space_Mono as V0_Font_Space_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _dmSans = V0_Font_DM_Sans({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900","1000"] })
const _spaceMono = V0_Font_Space_Mono({ subsets: ['latin'], weight: ["400","700"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

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
