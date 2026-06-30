'use client'

import { Navigation } from '@/components/Navigation'
import { HomePage } from '@/components/pages/HomePage'

export function AppContent() {
  return (
    <>
      <Navigation />
      <main className="bg-white min-h-screen">
        <HomePage />
      </main>
    </>
  )
}
