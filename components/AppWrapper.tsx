'use client'

import { LanguageProvider } from '@/lib/language-context'
import { AppContent } from '@/components/AppContent'
import { HydrationWrapper } from '@/components/HydrationWrapper'
import { ReactNode } from 'react'

export function AppWrapper({ children }: { children?: ReactNode }) {
  return (
    <LanguageProvider>
      <HydrationWrapper>
        {children ? (
          <>
            <AppContent />
            {children}
          </>
        ) : (
          <AppContent />
        )}
      </HydrationWrapper>
    </LanguageProvider>
  )
}
