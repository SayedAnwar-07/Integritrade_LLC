import Image from "next/image";
import ELFUS from "@/assets/ELFUS.jpg";
import EcoTech from "@/assets/EcoTech.png";
import GreenTech from "@/assets/GreenTech.png";
import TechCycle from "@/assets/TechCycle.jpg";
import DigitalBridge from "@/assets/DigitalBridge.jpg";
import { Laptop, Leaf, Building, Lock } from "lucide-react";
import Link from "next/link";
import Script from 'next/script'

export const metadata = {
  title: "Our Partners | Sustainable ITAD & E-Waste Recycling Collaborations | Integritrade LLC",
  description:
    "Discover how Integritrade LLC partners with leading organizations like ELFUS, EcoTech, GreenTech, TechCycle, and Digital Bridge to advance sustainable IT asset disposition (ITAD), e-waste reduction, and digital inclusion. Together, we give technology a second life, protect the planet, and empower communities through meaningful collaborations.",
  keywords: [
    "Integritrade LLC partners",
    "ELFUS Foundation partnership",
    "ITAD collaborations",
    "sustainable technology partnerships",
    "e-waste recycling partners",
    "IT asset disposition partners",
    "eco-friendly IT solutions",
    "IT recycling programs USA",
    "digital inclusion partnerships",
    "corporate sustainability partners",
    "ITAD and e-waste management",
    "technology reuse programs",
    "environmental responsibility in tech",
    "secure data destruction partners",
    "ITAD impact metrics",
    "eco-conscious IT services",
    "R2 certified ITAD company",
    "ISO certified IT recycling",
    "community technology access",
    "IT asset recovery partnerships"
  ],
  openGraph: {
    title: "Our Partners | Integritrade LLC",
    description:
      "Integritrade LLC partners with organizations like ELFUS, EcoTech, GreenTech, TechCycle, and Digital Bridge to advance sustainable ITAD, e-waste recycling, and digital inclusion.",
    url: "https://integritradellc.com/about/our-partners",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://integritradellc.com/about/our-partners",
  },
};


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
};

export default function OurPartnersPage() {

  return (
    <section className="min-h-screen bg-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Our Partners</h1>
          <p className="lead mt-3 text-center text-muted-foreground max-w-3xl mx-auto">
            Building sustainable futures through strategic collaborations that bridge technology access and environmental responsibility. 
            Together, we empower communities, reduce e-waste, and create opportunities where innovation meets purpose.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-md p-6 sm:p-8 md:p-10 lg:p-12 mb-12 md:mb-16 lg:mb-20 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 md:w-24 lg:w-32 h-20 md:h-24 lg:h-32 bg-[#2aac61]/5 rounded-md -translate-y-8 md:-translate-y-12 lg:-translate-y-16 translate-x-8 md:translate-x-12 lg:translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-16 md:w-20 lg:w-24 h-16 md:h-20 lg:h-24 bg-[#2aac61]/5 rounded-md -translate-x-8 md:-translate-x-10 lg:-translate-x-12 translate-y-8 md:translate-y-10 lg:translate-y-12"></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 text-[#2aac61] mb-4 md:mb-6">
              <div className="w-2 h-2 bg-[#2aac61] rounded-md"></div>
              <span className="text-xs sm:text-sm font-medium tracking-wider">OUR PHILOSOPHY</span>
            </div>
            <div className="space-y-4 md:space-y-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                At Integritrade, we have always believed that technology should serve people - not become a privilege 
                reserved for a few. Our work goes beyond responsible recycling and data security; it is about giving 
                technology a meaningful second life and using it as a tool for empowerment.
              </p>
              <p>
                Every laptop, phone, or tablet that can be safely refurbished represents a new opportunity for 
                someone to learn, work, or stay connected in an increasingly digital world.
              </p>
              <p className="font-medium text-gray-900 border-l-4 border-[#2aac61] pl-4 md:pl-6 italic text-sm sm:text-base md:text-lg">
                For us, this is not just about recycling electronics - it is about building connections, 
                expanding access, and creating a culture of responsibility that values both people and the planet.
              </p>
            </div>
          </div>
        </div>

        {/* ELFUS Partnership Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-10 items-start">
          <div className="relative">
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-white to-gray-50 rounded-md transform -rotate-1"></div>
            <Image 
              src={ELFUS} 
              alt="ELFUS Foundation" 
              className="relative rounded-md w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
            />
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-4 sm:w-6 h-0.5 bg-[#2aac61]"></div>
                <span className="text-xs sm:text-sm font-medium text-[#2aac61] tracking-widest">FEATURED PARTNERSHIP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
                ELFUS Foundation
              </h2>
            </div>

            <div className="text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-3">
                Education & Leadership Foundation - creating equitable access to education, leadership, and community resources.
              </p>
              <p>
                Through our reuse-first philosophy, we extend the lifecycle of valuable technology while keeping e-waste out of landfills. But the real impact comes from where those devices go next.
              </p>
              <p className="text-gray-600 leading-relaxed mt-3">
                Every device we recover carries potential; together, we can turn that potential into progress.
              </p>
            </div>    
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base mb-6 md:mb-8">
          <p>
            By collaborating with organizations like ELFUS - a nonprofit dedicated to creating equitable access to education, leadership, and community resources - we are helping to bridge the digital divide in a tangible way.
          </p>
          <p>
            Many families, students, and nonprofits rely on technology to unlock opportunities that would otherwise remain out of reach. Together with ELFUS, we are committed to ensuring that refurbished devices not only stay out of the waste stream but also end up in the hands of those who can benefit most.
          </p>
        </div>

        {/* Personal Commitment Box */}
        <div className="bg-gray-50 rounded-md p-4 sm:p-6 border border-gray-200 my-6 md:my-8 lg:my-10">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-md bg-[#2aac61] flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white text-sm sm:text-lg">✓</span>
            </div>
            <div>
              <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                &quot;We deeply admire ELFUS&apos;s mission and the incredible work they do to uplift 
                underrepresented communities, and we&apos;re committed to extending our full support 
                to their efforts — whether through ongoing device donations, collaborative programs, 
                or shared initiatives that strengthen our collective social impact.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-20 lg:mb-24">
          {[
            { number: "500+", label: "Devices Refurbished", icon: Laptop },
            { number: "1.2T", label: "E-Waste Prevented", icon: Leaf },
            { number: "15+", label: "Communities Served", icon: Building },
            { number: "100%", label: "Data Security", icon: Lock },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-[#2aac61]/20 mb-3 sm:mb-4">
                  <div className="flex justify-center mb-2 sm:mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-[#2aac61] transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Network */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 md:mb-4">
              Our Trusted Network
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light px-4 sm:px-0">
              Collaborating with industry leaders who share our commitment to sustainability and digital inclusion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { src: EcoTech, alt: "EcoTech", name: "EcoTech Solutions", description: "Sustainable tech innovation" },
              { src: GreenTech, alt: "GreenTech", name: "GreenTech Innovations", description: "Environmental technology" },
              { src: TechCycle, alt: "TechCycle", name: "TechCycle", description: "Circular economy specialists" },
              { src: DigitalBridge, alt: "DigitalBridge", name: "Digital Bridge", description: "Digital inclusion advocates" },
            ].map((partner, index) => (
              <div key={partner.alt} className="group text-center">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:border-[#2aac61]/30 mb-3 sm:mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image 
                    className="w-72 h-72 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mx-auto grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 relative z-10"
                    src={partner.src}
                    alt={partner.alt}
                  />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="font-semibold text-gray-900 group-hover:text-[#2aac61] transition-colors duration-300 text-sm sm:text-base">
                    {partner.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    {partner.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-md p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 md:-top-24 md:-right-24 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#2aac61]/5 rounded-md"></div>
          <div className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 md:-bottom-24 md:-left-24 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#2aac61]/5 rounded-md"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">
              Join Our Movement
            </h3>
            <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto font-light">
              Every device we recover carries potential; together, we can turn that potential into progress. Let’s create meaningful impact through sustainable technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 bg-[#2aac61] text-white rounded-md font-medium hover:bg-[#249c55] transition duration-300 shadow-sm hover:shadow-md flex items-center gap-2 justify-center">
                <Link href='/service-book'>Book Our Service</Link>
              </button>
              <button className="w-full sm:w-auto px-6 py-2 sm:px-8 sm:py-3 border border-gray-300 text-gray-700 rounded-md font-medium hover:border-gray-400 hover:bg-gray-50 transition duration-300 flex items-center gap-2 justify-center">
                <Link href='/about'>Learn More</Link>
              </button>
            </div>
          </div>
        </div>

      </div>

      <Script
        id="about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />



    </section>
  );
}
