'use client'

import { useState, useEffect } from 'react'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Still render children on server to avoid hydration issues
  // Just use a flag for client-side only features
  return <>{children}</>
}
