'use client'

import { useEffect, useState } from 'react'
import { ReactNode } from 'react'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const htmlElement = document.documentElement
    
    if (savedTheme === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const htmlElement = document.documentElement
    const isDark = htmlElement.classList.contains('dark')
    
    if (isDark) {
      htmlElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      htmlElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    
    window.dispatchEvent(new Event('themechange'))
  }

  if (!mounted) return <>{children}</>

  return (
    <>
      {children}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'dark';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
        }}
      />
    </>
  )
}
