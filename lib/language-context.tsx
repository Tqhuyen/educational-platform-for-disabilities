'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language } from './i18n'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    try {
      const saved = localStorage.getItem('language') as Language | null
      if (saved && (saved === 'vi' || saved === 'en')) {
        setLanguageState(saved)
      }
    } catch (e) {
      // localStorage not available
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem('language', lang)
    } catch (e) {
      // localStorage not available
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    // Return default during SSR
    return { language: 'vi' as Language, setLanguage: () => {} }
  }
  return context
}
