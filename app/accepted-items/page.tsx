import {
  Laptop2,
  Smartphone,
  Monitor,
  TabletSmartphone,
  Keyboard,
  Printer,
  Music2,
  Gamepad2,
  Server,
  Mail,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
export const metadata = {
  title: "Accepted Items • Integritrade LLC",
  description:
    "Find out which electronics we accept for recycling at Integritrade LLC. Free drop-off for computers, laptops, phones, tablets, monitors, printers, audio devices, gaming consoles, servers, and more. Some items may require processing fees.",
  keywords: [
    "Accepted electronics recycling",
    "Free electronics recycling",
    "Computer recycling Fresno",
    "Laptop recycling Fresno",
    "Printer recycling",
    "TV and monitor recycling",
    "Smartphone recycling",
    "Tablet recycling",
    "Server recycling",
    "Gaming console recycling",
    "E-waste drop off Fresno",
    "Recycle electronics near me",
    "Electronics disposal Fresno",
    "Electronic waste collection",
    "Eco-friendly electronics recycling",
  ],
  openGraph: {
    title: "Accepted Items • Integritrade LLC",
    description:
      "Integritrade LLC accepts most electronics for free drop-off recycling, including computers, laptops, phones, tablets, monitors, servers, and gaming devices. Some hazardous items may require fees.",
    url: "https://integritradellc.com/accepted-items",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://integritradellc.com/accepted-items",
  },
}


const FREE_CATEGORIES: Array<{
  icon: any
  title: string
  items: string[]
}> = [
  {
    icon: Laptop2,
    title: 'Computing Devices',
    items: [
      'Desktop computers & towers',
      'Laptops & notebooks',
      'All-in-one computers',
      'Servers & workstations',
      'Computer components',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Communication',
    items: [
      'Smartphones & cell phones',
      'Feature phones',
      'Cordless phones',
      'Two-way radios',
      'Pagers',
    ],
  },
  {
    icon: Monitor,
    title: 'Display Devices',
    items: [
      'LCD/LED/OLED monitors',
      'Flat screen TVs',
      'Projectors',
      'Digital photo frames',
      'Smart displays',
    ],
  },
  {
    icon: TabletSmartphone,
    title: 'Tablets & Mobile Computing',
    items: ['iPads & Android tablets', 'E-readers (Kindle, Nook)', 'Portable media players', 'GPS devices'],
  },
  {
    icon: Keyboard,
    title: 'Peripherals & Accessories',
    items: ['Keyboards & mice', 'Webcams', 'Cables & adapters', 'Power supplies', 'Docking stations'],
  },
  {
    icon: Printer,
    title: 'Printing & Scanning',
    items: ['Inkjet & laser printers', 'All-in-one printers', 'Scanners', 'Fax machines', 'Label makers'],
  },
  {
    icon: Music2,
    title: 'Audio & Visual',
    items: [
      'Speakers & sound systems',
      'Headphones & earbuds',
      'Digital cameras & camcorders',
      'DVD/Blu-ray players',
      'CD players',
    ],
  },
  {
    icon: Gamepad2,
    title: 'Gaming & Entertainment',
    items: [
      'Gaming consoles (PlayStation, Xbox, Nintendo)',
      'Portable gaming devices',
      'Controllers & accessories',
      'VR headsets',
      'Streaming devices',
    ],
  },
  {
    icon: Server,
    title: 'Networking & Storage',
    items: [
      'Routers & modems',
      'Network switches & hubs',
      'External hard drives',
      'USB flash drives',
      'Network attached storage (NAS)',
    ],
  },
]

const FEE_ITEMS: { title: string; sub: string }[] = [
  {
    title: 'NiCD batteries from power tools',
    sub: 'Special handling required for hazardous materials',
  },
  {
    title: 'Industrial equipment batteries',
    sub: 'Requires specialized disposal process',
  },
  {
    title: 'Large appliances with electronic components',
    sub: 'Size and complexity require additional processing',
  },
]

export default function AcceptedItemsPage() {
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
    },
    "makesOffer": FREE_CATEGORIES.map(category => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": category.title,
        "category": category.items.join(', ')
      }
    }))
  }
  return (
    <section className="section py-16  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Electronics We Accept</h1>
        <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
         Most electronics can be dropped off at no cost. Prefer hassle-free service? Schedule a pick-up and let our team handle everything from start to finish. Pricing is based on job size and scope.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/service-book"  className="rounded-md btn-bg btn-hover-bg px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Schedule Drop-off</Link>
          <Link href="/services" className="rounded-md border px-5 py-2.5 text-sm font-semibold hover:bg-muted/60">Explore Our Services</Link>
        </div>

        {/* Free electronics grid */}
        <div className="section mt-20">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Free Electronics Recycling</h3>
          <p className="mt-3 text-center text-muted-foreground">
            All of the following electronic devices are accepted at no charge for drop-off recycling.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FREE_CATEGORIES.map(({ icon: Icon, title, items }) => (
              <div key={title} className="rounded-md border p-6 bg-white shadow-sm hover:shadow-md">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-clr" />
                  <div className="font-semibold">{title}</div>
                  <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    FREE
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#175055]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Fees section */}
        <div className="section mt-20">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Items with Processing Fees</h3>
          <p className="mt-3 text-center text-muted-foreground">
            These items require special handling and may have associated processing fees. Fees are rare and only apply to
            specific hazardous or complex items.
          </p>

          <div className="mt-8 space-y-4">
            {FEE_ITEMS.map((f) => (
              <div
                key={f.title}
                className="flex items-start justify-between gap-4 rounded-md border bg-white px-5 py-4 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-yellow-100">
                    <Zap className="h-4 w-4 text-yellow-600" />
                  </span>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{f.sub}</div>
                  </div>
                </div>
                <span className="self-center rounded-full border px-3 py-1 text-xs font-semibold">
                  Fee Required
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="section mt-20 ">
          <div className="rounded-md border-2 border-dashed px-6 py-10 text-center bg-white">
            <Mail className="mx-auto h-7 w-7 text-clr" />
            <h3 className="mt-3 text-xl font-semibold">Don&apos;t See Your Device Listed?</h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
              If you have an electronic device that&apos;s not listed above, please contact us! We&apos;re always
              expanding our recycling capabilities and may be able to help.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <a
                href="#contact"
                
              >
                
              </a>
              <Link href='/about' className="rounded-md btn-bg btn-hover-bg px-4 py-2 text-sm font-semibold text-white hover:opacity-95">Ask About Your Device</Link>
              <a
                href="tel:+15593254813"
                className="rounded-md border px-4 py-2 text-sm font-semibold hover:bg-muted/60"
              >
                Call Us Directly
              </a>

            </div>
          </div>
        </div>

        {/* Drop-off process */}
        <div className="section mt-20">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Drop-off Process</h3>
          <p className="mt-3 text-center text-muted-foreground">
            Simple steps to recycle your electronics responsibly
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['Gather Items', 'Collect your electronic devices for recycling'],
              ['Remove Data', 'Back up and wipe personal data from devices'],
              ['Bring to Us', 'Drop off during business hours or schedule pickup'],
              ['Get Certificate', 'Receive recycling certificate for your records'],
            ].map(([t, d], i) => (
              <div key={t} className="rounded-md border p-6 text-center bg-white shadow-sm hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full btn-bg text-white">
                  <span className="text-base font-semibold">{i + 1}</span>
                </div>
                <div className="mt-4 font-semibold">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <Script type="application/ld+json" id="accepted-items-jsonld" strategy="afterInteractive">
          {JSON.stringify(schemaData)}
        </Script>
      </div>
    </section>
  )
}
