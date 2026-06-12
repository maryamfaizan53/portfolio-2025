import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import ThemeProvider from '@/components/theme-provider'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Maryam Faizan | Agentic AI Developer & Full-Stack Innovator',
  description: 'Agentic AI Developer with expertise in multi-agent systems, automation, RAG pipelines, and full-stack web development. Building AI-driven solutions with Next.js, React, and Python.',
  keywords: 'AI Developer, Full-Stack, Next.js, React, Automation, RAG, Multi-Agent Systems',
  authors: [{ name: 'Maryam Faizan' }],
  metadataBase: new URL('https://www.maryamfaizan.online'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.maryamfaizan.online',
    title: 'Maryam Faizan | Agentic AI Developer',
    description: 'Full-stack innovator specializing in AI automation and modern web development',
    siteName: 'Maryam Faizan Portfolio',
    images: [{ url: '/images/mask-dp.jpg', width: 1200, height: 630, alt: 'Maryam Faizan' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@maryamfaizan53',
    images: ['/images/mask-dp.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maryam Faizan',
  url: 'https://www.maryamfaizan.online',
  image: 'https://www.maryamfaizan.online/images/mask-dp.jpg',
  jobTitle: 'Agentic AI Developer',
  description:
    'Agentic AI Developer specializing in multi-agent systems, automation, RAG pipelines, and full-stack web development.',
  sameAs: ['https://github.com/maryamfaizan53'],
  knowsAbout: [
    'Agentic AI',
    'Multi-Agent Systems',
    'RAG Pipelines',
    'Next.js',
    'React',
    'TypeScript',
    'Python',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
