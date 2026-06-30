'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'
import { translate } from '@/lib/i18n'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const { language, setLanguage } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { href: '/', label: translate('home', language) },
    { href: '/learning-center', label: translate('learningCenter', language) },
    { href: '/sign-language', label: translate('signLanguage', language) },
    { href: '/games', label: translate('games', language) },
    { href: '/progress', label: translate('progress', language) },
    { href: '/resources', label: translate('resources', language) },
  ]

  return (
    <nav className="bg-white border-b border-neutral-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Ð</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-sky-600">
                Học Tập
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-lg font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-100 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - Language Switcher & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex bg-slate-100 rounded-lg p-1 gap-1">
              <button
                onClick={() => setLanguage('vi')}
                className={`px-4 py-2 rounded-md font-semibold text-lg transition-all duration-200 ${
                  language === 'vi'
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
                aria-label="Tiếng Việt"
              >
                Việt
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-md font-semibold text-lg transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-white text-sky-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
                aria-label="English"
              >
                Eng
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-lg font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-100 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
