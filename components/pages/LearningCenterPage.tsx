'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PageWrapper } from '@/components/PageWrapper'
import { Navigation } from '@/components/Navigation'
import { LearningCenterContent } from '@/components/pages/LearningCenterContent'

export function LearningCenterPage() {
  return (
    <LanguageProvider>
      <PageWrapper>
        <Navigation />
        <main className="bg-white min-h-screen">
          <LearningCenterContent />
        </main>
      </PageWrapper>
    </LanguageProvider>
  )
}
