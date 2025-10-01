import type { Metadata } from "next"
import Hero from '@/components/site/Hero'
import WhyChoose from '@/components/site/WhyChoose'
import Certs from '@/components/site/Certs'
import ServicesGrid from '@/components/site/ServicesGrid'
import Impact from '@/components/site/Impact'
// import Testimonials from '@/components/site/Testimonials'
// import CaseStudies from '@/components/site/CaseStudies'
import About from '@/components/site/About'
import SchemaMarkup from "@/components/site/SchemaMarkup"

export const metadata: Metadata = {
  title: "Integritrade LLC",
  description:
    "Integritrade LLC provides secure, compliant, and environmentally responsible IT asset disposition (ITAD) and electronic recycling solutions. R2, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certified.",
  keywords: [
    // Core Services
    "IT Asset Disposition",
    "ITAD Services",
    "Electronic Recycling",
    "E-Waste Recycling",
    "Data Destruction",
    "Secure IT Recycling",
    "Asset Recovery Services",
    "Sustainable IT Disposal",
    "Corporate IT Recycling",
    "IT Equipment Disposal",
    "Secure Data Wiping",
    "Green IT Solutions",
    
    // Certified & Compliance Keywords
    "R2 Certified ITAD",
    "ISO Certified ITAD",
    "R2v3 Certified",
    "ISO 9001 ITAD",
    "ISO 14001 Recycling",
    "ISO 27001 Data Security",
    "ISO 45001 Compliance",
    "Certified E-Waste Recycling",
    "Compliant IT Asset Disposal",
    
    // Geographic & Service Area (add your specific locations)
    "ITAD Services United States",
    "National IT Asset Disposition",
    "Corporate IT Recycling Services",
    "Business E-Waste Recycling",
    
    // Specific Service Keywords
    "Data Center Decommissioning",
    "IT Asset Management",
    "Hard Drive Destruction",
    "Secure Data Erasure",
    "IT Equipment Recycling",
    "Server Recycling",
    "Laptop Recycling",
    "Computer Recycling",
    "Data Sanitization",
    "Asset Remarketing",
    "IT Value Recovery",
    
    // Industry-Specific
    "Enterprise IT Disposal",
    "Data Center Equipment Recycling",
    "Office IT Equipment Removal",
    "IT Equipment Destruction",
    "Secure Electronics Recycling",
    
    // Security-Focused
    "GDPR Compliance ITAD",
    "HIPAA Compliant Data Destruction",
    "Data Security Services",
    "Secure IT Asset Disposal",
    "Chain of Custody Documentation",
    
    // Environmental
    "Environmentally Responsible Recycling",
    "Sustainable Electronics Disposal",
    "Green IT Asset Disposition",
    "Eco-Friendly IT Recycling",
    "Circular Economy ITAD",
    
    // Company Specific
    "Integritrade LLC",
    "Integritrade ITAD",
    "Integritrade Recycling"
  ],
  openGraph: {
    title: "Integritrade LLC | Secure ITAD & Electronic Recycling",
    description:
      "Trusted partner for IT asset disposition, electronic recycling, data destruction, and asset recovery. Serving businesses of all sizes with certified ITAD solutions.",
    url: "https://integritradellc.com",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://integritradellc.com",
  },
}

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <Hero />
      <WhyChoose />
      <Certs />
      <ServicesGrid />
      <Impact />
      {/* <Testimonials /> */}
      {/* <CaseStudies /> */}
      <About />
    </>
  )
}
