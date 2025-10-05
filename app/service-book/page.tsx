import { Metadata } from 'next'
import Script from 'next/script'
import BookingForm from '@/components/site/BookingForm'
import {
  Info,
  Recycle,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Booking • Integritrade LLC",
  description: "R2v3 & ISO Certified IT Asset Disposition services with secure data destruction. Free electronics recycling for computers, laptops, phones, servers, and more. Compliant e-waste disposal.",
  keywords: [
    "IT Asset Disposition",
    "ITAD Services",
    "Electronic Recycling",
    "E-Waste Recycling",
    "Data Destruction",
    "Secure IT Recycling",
    "Asset Recovery Services",
    "R2 Certified ITAD",
    "ISO Certified ITAD",
    "Data Center Decommissioning",
    "Server Recycling",
    "Laptop Recycling",
    "Computer Recycling",
    "Free Electronics Recycling",
    "Secure Data Erasure",
    "Business IT Recycling",
    "Corporate E-Waste Disposal",
  ],
  openGraph: {
    title: "ITAD Services & Electronics Recycling • Integritrade LLC",
    description: "Professional IT Asset Disposition and free electronics recycling services. R2v3 & ISO certified secure data destruction for businesses.",
    url: "https://integritradellc.com/forms",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://integritradellc.com/forms",
  },
}

type FormCard = {
  icon?: React.ComponentType<any>
  title: string
  req: boolean
  items: string[]
}

const forms: FormCard[] = [
  {
    icon: Recycle,
    title: 'Equipment Pickup Agreement',
    req: true,
    items: [
      'Equipment inventory and condition assessment',
      'Pickup scheduling and logistics coordination',
      'Chain of custody documentation',
      'Contact information and special instructions',
    ],
  },
  {
    icon: Recycle,
    title: 'Data Destruction Service Agreement',
    req: true,
    items: [
      'Data destruction method selection (DOD/NIST)',
      'Certificate of destruction requirements',
      'Compliance specifications (HIPAA, SOX, etc.)',
      'Witness requirements and verification',
    ],
  },
  {
    icon: Recycle,
    title: 'Chain of Custody Agreement',
    req: true,
    items: [
      'Asset identification and tracking',
      'Handler identification and signatures',
      'Transfer timestamps and locations',
      'Condition assessments at each stage',
    ],
  },
  {
    icon: Recycle,
    title: 'Master Service Agreement',
    req: true,
    items: [
      'Service scope and deliverables',
      'Pricing and payment terms',
      'Liability and insurance provisions',
      'Performance standards and guarantees',
    ],
  },
  {
    icon: Recycle,
    title: 'Asset Disposal Authorization',
    req: false,
    items: [
      'Asset disposition preferences',
      'Environmental compliance requirements',
      'Revenue sharing agreement terms',
      'Final disposition documentation',
    ],
  },
  {
    icon: Recycle,
    title: 'Compliance Requirements Checklist',
    req: false,
    items: [
      'Industry-specific regulatory requirements',
      'Data protection and privacy compliance',
      'Environmental regulation adherence',
      'Audit and documentation standards',
    ],
  },
]

export default function FormsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integritrade LLC",
    "url": "https://integritradellc.com",
    "description": "R2v3 & ISO Certified IT Asset Disposition and electronics recycling services with secure data destruction.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1945 N Fine Ave, STE 111",
      "addressLocality": "Fresno",
      "addressRegion": "CA",
      "postalCode": "93727",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(559) 325-4813",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "serviceType": [
      "IT Asset Disposition",
      "Electronic Recycling",
      "Data Destruction Services",
      "E-Waste Recycling"
    ]
  }
  
  return (
    <section className="section bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
            Book Your ITAD Service Request
          </h1>
          <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
            Schedule secure IT asset disposition, electronics recycling, or data destruction services with our certified team. 
            Convenient, reliable, and environmentally responsible service tailored to your business needs.
          </p>
        </div>


        <div className="">
          {/* Booking Form */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Request Service</h2>
            <BookingForm />
          </div>

          {/* Free Electronics Recycling Section */}
          <div className="space-y-8">
            <div className="mt-20">
              <div className="text-center text-lg md:text-2xl font-semibold tracking-tight">
                <h2 className="text-2xl font-bold text-gray-900">Free Electronics Recycling</h2>
              </div>
              <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                All of the following electronic devices are accepted at no charge for drop-off recycling at our Fresno facility.
              </p>
              
              <div className="grid gap-6 md:grid-cols-3">
                <CategorySection 
                  title="Computing Devices"
                  items={[
                    "Desktop computers & towers",
                    "Laptops & notebooks",
                    "All-in-one computers",
                    "Servers & workstations",
                    "Computer components & parts"
                  ]}
                />
                
                <CategorySection 
                  title="Mobile & Communication"
                  items={[
                    "Smartphones & cell phones",
                    "Tablets & e-readers",
                    "Two-way radios",
                    "GPS devices",
                    "Mobile hotspots"
                  ]}
                />
                
                <CategorySection 
                  title="Display Devices"
                  items={[
                    "LCD/LED/OLED monitors",
                    "Flat screen TVs",
                    "Computer projectors",
                    "Digital photo frames",
                    "Touch screen displays"
                  ]}
                />
                
                <CategorySection 
                  title="Office Equipment"
                  items={[
                    "Printers & scanners",
                    "Keyboards & mice",
                    "Webcams & speakers",
                    "Network routers & modems",
                    "External hard drives"
                  ]}
                />
                
                <CategorySection 
                  title="Entertainment & Gaming"
                  items={[
                    "Gaming consoles & accessories",
                    "DVD/Blu-ray players",
                    "VR headsets",
                    "Digital cameras",
                    "Audio systems & headphones"
                  ]}
                />               
              </div>
            </div>

             {/* Important note */}
                <div className="rounded-md border px-4 py-3 bg-white">
                  <div className="flex items-start gap-3 text-sm">
                    <Info className="mt-0.5 h-4 w-4 text-yellow-600" />
                    <p>
                      <span className="font-semibold">Important:</span> All forms marked as
                      &nbsp;<span className="font-semibold">{""}Required {""}</span> must be completed
                      before service can begin. Our team will review your submissions and contact
                      you within 24 hours to confirm details and schedule services.
                    </p>
                  </div>
                </div>            
          </div>
        </div>



        {/* Professional Services Section */}
        <div className="mt-20">
                <div className="">              
                  <h2 className="text-center text-lg md:text-2xl font-semibold tracking-tight">ITAD Service Agreements & Compliance Documentation</h2>
                </div>
                <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto mb-10">
                Complete ITAD documentation covering asset pickup, data destruction, chain of custody, and compliance checklists for secure and transparent service.
              </p>
         </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {forms.map((f) => (
            <div key={f.title} className="rounded-md border bg-white p-6 shadow-sm hover:shadow-md">
              <div className="flex items-start gap-3">
                {f.icon ? <f.icon className="mt-1 h-5 w-5 text-clr" /> : null}
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{f.title}</div>
                  </div>               

                  <p className="mt-3 text-sm text-muted-foreground">
                    {/* small descriptive line optional; keep layout aligned with screenshots */}
                  </p>

                  <div className="mt-2 text-sm">
                    <ul className="space-y-2 text-muted-foreground">
                      {f.items.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script type="application/ld+json" id="services-jsonld" strategy="afterInteractive">
        {JSON.stringify(schemaData)}
      </Script>
    </section>
  )
}

// Category Section Component
function CategorySection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border bg-white p-6 shadow-sm hover:shadow-md">
      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Recycle className="h-5 w-5 text-green-600" /> 
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start ml-4">
            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}