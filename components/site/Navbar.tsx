'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from "next/image";
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
            className={`rounded-md px-3 py-3 text-base transition-colors ${
              active
                ? 'font-medium text-blue-700 bg-blue-50'
                : 'text-gray-600 hover:text-blue-700'
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
          className="text-lg font-semibold tracking-tight text-blue-700 hover:text-blue-800 transition-colors"
        >
          <Image
                    src={logo}
                    alt="llc"
                    className="h-40 w-40"
                  />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks}
        </nav>

        {/* Mobile nav button */}
        <button
          aria-label="Toggle menu"
          onClick={toggleMenu}
          className="md:hidden rounded-md p-2 hover:bg-gray-100 transition-colors"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
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
                  Integritrade LLC
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
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
