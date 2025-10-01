import ServicesGrid from '@/components/site/ServicesGrid'
import Process from '@/components/site/Process'
import { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Services • Integritrade LLC',
  description:
    'Integritrade LLC offers professional IT asset disposition (ITAD) and electronic recycling services. Secure, R2 certified, ISO-certified, and environmentally responsible solutions for businesses of all sizes.',
  keywords: [
    'IT asset disposition',
    'ITAD services',
    'electronic recycling',
    'R2 certified ITAD',
    'ISO 9001 ITAD',
    'ISO 14001 recycling',
    'ISO 27001 IT security',
    'secure electronics disposal',
    'environmentally responsible ITAD',
    'corporate electronics recycling',
    'ITAD solutions for businesses',
    'data destruction services',
    'IT recycling company',
    'IT asset management',
  ],
}

export default function ServicesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integritrade LLC",
    "url": "https://integritradellc.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(559) 325-4813",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1945 N Fine Ave, STE 111",
      "addressLocality": "Fresno",
      "addressRegion": "CA",
      "postalCode": "93727",
      "addressCountry": "US"
    }
  }

  return (
    <div className="bg-gray-50">
      <ServicesGrid />
      <Process />

      {/* JSON-LD Structured Data */}
      <Script type="application/ld+json" id="organization-jsonld" strategy="afterInteractive">
        {JSON.stringify(schemaData)}
      </Script>
    </div>
  )
}
