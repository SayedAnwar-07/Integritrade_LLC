import ContactForm from '@/components/site/ContactForm'
import { Metadata } from 'next'
import Script from 'next/script'


export const metadata: Metadata = {
  title: 'Contact • Integritrade LLC',
  description:
    'Get in touch with Integritrade LLC for secure IT asset disposition (ITAD) and electronic recycling services. R2 and ISO-certified solutions for businesses of all sizes.',
  keywords: [
    'Contact Integritrade LLC',
    'ITAD services contact',
    'electronic recycling contact',
    'R2 certified ITAD',
    'ISO certified electronics recycling',
    'secure IT asset disposition',
    'corporate electronics recycling',
    'data destruction services',
    'ITAD company contact',
    'IT asset management contact',
  ],
  openGraph: {
    title: 'Contact Integritrade LLC | ITAD & Electronics Recycling',
    description:
      'Reach out to Integritrade LLC for certified IT asset disposition, electronic recycling, and secure data destruction services.',
    url: 'https://integritradellc.com/contact',
    siteName: 'Integritrade LLC',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://integritradellc.com/contact',
  },
}

export default function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integritrade LLC",
    "url": "https://integritradellc.com",
    "logo": "https://integritradellc.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "(559) 325-4813",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "info@integritrade.com",
        "contactType": "Customer Service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1945 N Fine Ave, STE 111",
      "addressLocality": "Fresno",
      "addressRegion": "CA",
      "postalCode": "93727",
      "addressCountry": "US"
    },
    "sameAs": [
      // add social media links if available
    ],
    "description": "Integritrade LLC provides secure, R2 and ISO-certified IT asset disposition (ITAD), electronic recycling, and data destruction services for businesses nationwide."
  }
  return (
    <section className="section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Ready to get started?</h1>
          <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground">Reach out today for a consultation or quote for your electronic recycling or IT asset management needs.
Thank you for recycling responsibly. Every device you divert from the landfill contributes to a cleaner, more sustainable future.
In many cases, our recycling or ITAD programs are completely free, and depending on the age and quantity of your devices, your organization may even earn revenue back through our remarketing and reuse channels.</p>
          <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground">Our team will review your equipment list, discuss the most cost-effective and compliant options, and provide a detailed proposal that aligns with your sustainability goals.
Start your secure, responsible recycling program today.</p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="">
            <ContactForm />
          </div>
          {/* Contact Info Card */}
          <div className=" p-6 md:p-8">
           <h3 className="text-xl font-semibold  mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-clr" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Get in Touch
            </h3>
           <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-fit">
            
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Address:</p>
                  <p className="text-sm text-gray-600">1945 N Fine Ave, STE 111, Fresno, CA 93727</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Phone:</p>
                  <a href="tel:5593254813" className="text-sm text-gray-600 hover:underline hover:text-blue-500">(559) 325-4813</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Email:</p>
                  <a href="mailto:info@integritrade.com" className="text-sm text-gray-600 hover:underline hover:text-blue-500">info@integritrade.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Business Hours:</p>
                  <p className="text-sm text-gray-600">Mon–Fri 9:00 AM–3:00 PM. By appointment only </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Why choose us?</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Certified secure data destruction
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Environmentally responsible recycling
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industry compliance guaranteed
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <Script type="application/ld+json" id="contact-jsonld" strategy="afterInteractive">
        {JSON.stringify(schemaData)}
      </Script>
    </section>
  )
}
