'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from '@/public/main-logo.png'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/accepted-items', label: 'Accepted Items' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])

  const navLinks = useMemo(
    () =>
      nav.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${active ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        )
      }),
    [pathname]
  )

  const mobileLinks = useMemo(
    () =>
      nav.map((item) => {
        const active = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`px-3 py-3 text-base transition-colors border-b ${
              active
                ? 'font-medium text-[#2cb563] border-b-[#2cb563]'
                : 'text-gray-600 hover:text-[#2cb563]'
            }`}
          >
            {item.label}
          </Link>
        )
      }),
    [pathname]
  )

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b'
          : 'bg-white/70 backdrop-blur border-b-transparent'
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center text-lg font-semibold tracking-tight text-blue-700 hover:text-blue-800 transition-colors"
        >
          <Image src={logo} alt="Integritrade LLC" className="h-32 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-3">
          {navLinks}
        </nav>

        {/* Clickable Phone Number */}
        <div className="hidden md:flex justify-center items-center ml-4 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a
            href="tel:+15593254813"
            className='hover:underline'
          >
            (559) 325-4813
          </a>
        </div>

        {/* Mobile nav button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden rounded-md p-2 hover:bg-gray-100 transition-colors ml-2"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile navigation overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <div className="absolute inset-y-0 left-0 w-full bg-white shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-4 py-3">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-tight text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg font-bold bg-gradient-to-r from-[#173857] to-[#2cb563] text-transparent bg-clip-text">
                    Integritrade LLC
                  </span>
                </Link>
                <button
                  aria-label="Close"
                  className="rounded-md p-2 hover:bg-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Nav list */}
              <div className="flex flex-col bg-white p-4">{mobileLinks}</div>

              {/* Mobile Clickable Phone */}
              <div className="p-4 border-t">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:+15593254813"
                  className="block w-full text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
                >
                  Call Now: (559) 325-4813
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
