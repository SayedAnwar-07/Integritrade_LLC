'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/main-logo.png'
import { Button } from '../ui/button'
import { Phone, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsOpen(false)
    setIsAboutOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) 
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { 
      href: '/about', 
      label: 'About',
      dropdown: [
        { href: '/about/our-team', label: 'Our Team' },
        { href: '/about/our-partners', label: 'Our Partners' }
      ]
    },
    { href: '/certifications', label: 'Certifications' },
    { href: '/accepted-items', label: 'Accepted Items' },
    { href: '/contact', label: 'Contact' },
  ]

  // Handle click on About link for both desktop and mobile
  const handleDropdownClick = () => {
    setIsAboutOpen(!isAboutOpen)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-200' : 'bg-white/70 backdrop-blur border-b border-transparent'}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo (Visible on mobile and tablet) */}
        <div className="flex-shrink-0 lg:hidden">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Integritrade LLC"
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation (Visible only on large screens) */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center text-lg font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            <Image
              src={logo}
              alt="Integritrade LLC"
              className="h-28 w-auto"
              priority
            />
          </Link>
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            const hasDropdown = item.dropdown && item.dropdown.length > 0

            if (hasDropdown) {
              return (
                <div key={item.href} className="relative">
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={`group relative inline-block pb-2 no-underline transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
                        isActive ? 'text-black font-semibold' : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
                          isActive ? 'bg-[#2cb563] w-full' : 'bg-gray-300 w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                    <button
                      onClick={handleDropdownClick}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                      aria-label="Toggle team dropdown"
                    >
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  </div>

                  {/* Dropdown Menu */}
                  {isAboutOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                      {item.dropdown?.map((dropdownItem) => {
                        const isSubActive = pathname === dropdownItem.href
                        return (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className={`block px-4 py-4 text-sm hover:bg-gray-50 transition-colors duration-200 border-b ${
                              isSubActive ? 'text-[#269c55] font-semibold' : 'text-gray-600 hover:text-[#2cb563]'
                            }`}
                            onClick={() => setIsAboutOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative inline-block pb-2 no-underline transition-colors duration-300 font-medium text-sm uppercase tracking-wide ${
                  isActive ? 'text-black font-semibold' : 'text-gray-600'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ${
                    isActive ? 'bg-[#2cb563] w-full' : 'bg-gray-300 w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}

        </nav>

        {/* Desktop Contact + CTA (lg only) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm">
            <div className="w-px h-4 bg-gray-300" />
            <a href="tel:+15593254813" className="flex items-center gap-2 ">
              <span className='text-base text-gray-800'>Call / Text : </span>
              <span className="hover:text-[#218a4b] transition-colors hover:underline text-gray-900 font-medium">
                (559) 325-4813
              </span>
            </a>
          </div>
          <div className="w-px h-6 bg-gray-300" />
          <Button asChild className="btn-bg btn-hover-bg text-white px-8 py-3">
            <Link href="/service-book">Schedule Drop-off</Link>
          </Button>
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#2cb563] hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 animate-in slide-in-from-top duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <Link
                href="/"
                className="text-xl font-bold bg-gradient-to-r from-[#173857] to-[#2cb563] text-transparent bg-clip-text"
                onClick={() => setIsOpen(false)}
              >
                INTEGRITRADE
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-600 hover:text-[#2cb563]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

           <nav className="flex flex-col p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                const hasDropdown = item.dropdown && item.dropdown.length > 0

                if (hasDropdown) {
                  return (
                    <div key={item.href} className="border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex-1 px-4 py-3 text-lg font-medium transition-colors ${
                            isActive
                              ? 'text-[#2cb563] border-l-4 border-[#2cb563] bg-green-50'
                              : 'text-gray-700 hover:text-[#2cb563] hover:bg-gray-50'
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={handleDropdownClick}
                          className="p-2 mr-2 hover:bg-gray-100 rounded transition-colors"
                          aria-label="Toggle team dropdown"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isAboutOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Dropdown Menu */}
                      {isAboutOpen && (
                        <div className="pl-6 bg-gray-50 border-l-2 border-gray-200">
                          {item.dropdown?.map((dropdownItem) => {
                            const isSubActive = pathname === dropdownItem.href
                            return (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                onClick={() => {
                                  setIsAboutOpen(false)
                                  setIsOpen(false)
                                }}
                                className={`block px-4 py-3 text-base border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
                                  isSubActive
                                    ? 'text-[#2cb563] font-medium bg-green-50 border-l-4 border-[#2cb563]'
                                    : 'text-gray-700 hover:text-[#2cb563] hover:bg-gray-100'
                                }`}
                              >
                                {dropdownItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-lg font-medium border-b border-gray-100 transition-colors ${
                      isActive
                        ? 'text-[#2cb563] border-l-4 border-[#2cb563] bg-green-50'
                        : 'text-gray-700 hover:text-[#2cb563] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>


            <div className="px-4 space-y-4 mb-4">
              <Button className="w-full bg-[#2cb563] text-white py-3 px-4 rounded-sm text-sm hover:bg-[#25a055] transition-colors font-medium">
                <Link href="/service-book">Schedule Drop-off</Link>
              </Button>

              <a
                href="tel:+15593254813"
                className="flex items-center justify-center gap-2 w-full bg-[#2cb563] text-white py-3 px-4 rounded-sm text-sm hover:bg-[#25a055] transition-colors font-medium"
              >
                Call Now : (559) 325-4813
              </a>
              <p className="text-center text-xs text-gray-600">
                Calling or texting
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
