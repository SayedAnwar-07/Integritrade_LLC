import {
  BadgeCheck,
  Shield,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BadgeInfo,
} from 'lucide-react'
import Script from 'next/script'
export const metadata = {
  title: "About • Integritrade LLC",
  description:
    "Learn about Integritrade LLC, a trusted provider of secure IT asset disposition (ITAD), electronic recycling, data destruction, and asset recovery. R2 and ISO certified for quality, security, and environmental responsibility.",
  keywords: [
    "About Integritrade LLC",
    "IT Asset Disposition Experts",
    "Electronic Recycling Company",
    "Data Destruction Services",
    "ITAD Service Provider",
    "Secure IT Recycling",
    "R2 Certified ITAD",
    "ISO Certified Recycling",
    "Asset Recovery Solutions",
    "E-Waste Management",
    "Corporate IT Recycling",
    "ITAD Compliance",
    "IT Disposal Services"
  ],
  openGraph: {
    title: "About Integritrade LLC | Trusted ITAD & Recycling Partner",
    description:
      "Integritrade LLC provides certified IT asset disposition, electronic recycling, and secure data destruction services. Trusted by businesses nationwide.",
    url: "https://integritradellc.com/about",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://integritradellc.com/about",
  },
}


export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integritrade LLC",
    "url": "https://integritradellc.com",
    "logo": "https://integritradellc.com/logo.png",
    "sameAs": [], // No social accounts
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
    "description": "Integritrade LLC is a trusted provider of secure IT asset disposition (ITAD), electronic recycling, data destruction, and asset recovery. R2 and ISO certified for quality, security, and environmental responsibility.",
    "award": [
      "R2 Certified ITAD",
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management",
      "ISO 27001 Information Security",
      "ISO 45001 Occupational Health & Safety"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "IT Asset Disposition (ITAD)",
          "category": "ITAD Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electronic Recycling",
          "category": "E-Waste Management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Destruction",
          "category": "Secure Data Destruction"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asset Recovery",
          "category": "IT Asset Recovery"
        }
      }
    ]
  }
  return (
    <section className="section py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">About Integritrade LLC</h1>
        <p className="lead mt-3 text-center text-muted-foreground">
          Leading the industry in secure IT asset disposition and environmental responsibility since our founding.
        </p>

        {/* Badges */}
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="inline-flex items-center gap-3">
            <BadgeInfo className="h-5 w-5 text-[#2aac61]" />
            <span className="text-sm font-medium">R2 Certified Recycling Facility</span>
          </div>
          <div className="inline-flex items-center gap-3">
            <Users className="h-5 w-5 text-[#2aac61]" />
            <span className="text-sm font-medium">Experienced Professional Team</span>
          </div>
        </div>

        {/* Our Story */}
        <div className="mt-16">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Our Story</h3>
          <div className="mt-6 space-y-5 text-center text-muted-foreground max-w-3xl mx-auto">
            <p>
              Founded with a mission to provide secure and environmentally responsible IT asset disposition services,
              Integritrade LLC has become a trusted partner for businesses across various industries. Our commitment
              to excellence and innovation has driven our growth from a local service provider to a regional leader
              in ITAD solutions.
            </p>
            <p>
              Our team of certified professionals combines deep industry expertise with cutting-edge technology to
              ensure your IT assets are handled with the highest standards of security, compliance, and environmental
              responsibility. We understand that every organization has unique needs, and we tailor our services to
              meet those specific requirements.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Values Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
            <Target className="mx-auto mb-4 h-7 w-7 text-clr" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              To provide secure, compliant, and environmentally responsible IT asset disposition services that protect
              our clients&apos; data while maximizing asset value and minimizing environmental impact.
            </p>
          </div>

          <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
            <Eye className="mx-auto mb-4 h-7 w-7 text-clr" />
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">
              To be the leading provider of innovative ITAD solutions, setting industry standards for security,
              environmental stewardship, and customer service excellence across all markets we serve.
            </p>
          </div>

          <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
            <Heart className="mx-auto mb-4 h-7 w-7 text-clr" />
            <h3 className="text-xl font-semibold">Our Values</h3>
            <p className="mt-3 text-muted-foreground">
              Integrity, security, environmental responsibility, and customer-centricity guide everything we do.
              We believe in transparent processes and building long-term partnerships with our clients.
            </p>
          </div>
        </div>

        {/* Why Organizations Trust Us */}
        <div className="section mt-20">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Why Organizations Trust Us</h3>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach and unwavering commitment to excellence have
            made us the preferred ITAD partner for businesses nationwide.
          </p>

          <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {/* 1 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Industry-Leading Security</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our data destruction processes exceed industry standards with multiple
                  verification layers and comprehensive documentation.
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Value Maximization</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our asset recovery programs help organizations recoup value from
                  decommissioned equipment through strategic remarketing.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Environmental Leadership</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Zero landfill guarantee and R2 certified processes ensure your
                  equipment is handled in the most environmentally responsible manner.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Transparent Processes</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Complete chain of custody tracking and detailed reporting provide full
                  visibility into the disposition process.
                </p>
              </div>
            </div>
            {/* 5 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Regulatory Compliance</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Full compliance with HIPAA, SOX, and other industry-specific regulations
                  with comprehensive audit documentation.
                </p>
              </div>
            </div>
            {/* 6 */}
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <div className="font-semibold">Customized Solutions</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tailored service packages designed to meet the unique requirements of
                  your organization and industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="section mt-20">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Our Expertise</h3>
          <p className="mt-4 text-center text-muted-foreground max-w-3xl mx-auto">
            Our team brings together decades of experience in IT asset management, data
            security, and environmental compliance.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
              <Shield className="mx-auto mb-4 h-7 w-7 text-clr" />
              <div className="text-lg font-semibold">Security Specialists</div>
              <p className="mt-3 text-muted-foreground">
                Certified professionals with deep expertise in data protection, destruction
                methodologies, and compliance requirements.
              </p>
            </div>

            <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
              <Award className="mx-auto mb-4 h-7 w-7 text-clr" />
              <div className="text-lg font-semibold">Environmental Experts</div>
              <p className="mt-3 text-muted-foreground">
                Environmental scientists and recycling specialists committed to sustainable
                practices and regulatory compliance.
              </p>
            </div>

            <div className="card rounded-md border p-8 text-center shadow-sm hover:shadow-md">
              <Users className="mx-auto mb-4 h-7 w-7 text-clr" />
              <div className="text-lg font-semibold">Operations Team</div>
              <p className="mt-3 text-muted-foreground">
                Logistics professionals and project managers ensuring efficient, secure, and
                timely service delivery.
              </p>
            </div>
          </div>
        </div>
        {/* JSON-LD Structured Data */}
        <Script type="application/ld+json" id="about-jsonld" strategy="afterInteractive">
          {JSON.stringify(schemaData)}
        </Script>
      </div>
    </section>
  )
}
