import Link from "next/link";
import LeadershipProfile from "@/components/site/LeadershipProfile";

export const metadata = {
  title: "Ian Ziyar - Founder & CEO • ITAD Industry Leader • Integritrade LLC",
  description: "Meet Ian Ziyar, Founder & CEO of Integritrade LLC. Scientist-turned-ITAD expert with Nature & Cell publications. Leading secure IT asset disposition with R2v3, ISO 9001, 14001, 45001 & 27001 certifications.",
  keywords: [
    "ITAD Leadership",
    "Secure IT Asset Disposition Founder",
    "Ian Ziyar CEO",
    "ITAD Industry Expert",
    "R2v3 Certified Leadership",
    "ISO 27001 Data Security Expert",
    "Electronic Recycling Founder",
    "Data Destruction Specialist",
    "IT Asset Disposition Management",
    "Sustainable Electronics Recycling",
    "Corporate IT Recycling Leadership",
    "Data Security Compliance Expert",
    "ITAD Company Founder",
    "E-Waste Recycling Executive",
    "Secure Data Destruction Professional"
  ],
  openGraph: {
    title: "Our Leadership | Ian Ziyar - Founder & CEO | Integritrade LLC",
    description: "Meet Ian Ziyar, scientist and entrepreneur driving innovation in secure IT asset disposition with R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications.",
    url: "https://integritradellc.com/about/our-team",
    siteName: "Integritrade LLC",
    images: [
      {
        url: '/ian.jpg',
        width: 800,
        height: 600,
        alt: 'Ian Ziyar - Founder & CEO of Integritrade LLC',
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  alternates: {
    canonical: "https://integritradellc.com/about/our-team",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OurTeamPage() {
    return (
        <section className="section py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Page Header */}
                <div className="text-center mb-28">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Leadership & Industry Standards
                    </h1>
                    <p className="lead mx-auto mt-3 max-w-4xl text-center text-muted-foreground px-4">
                        Under Ian’s leadership, Integritrade achieved R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications—establishing new benchmarks for security and integrity in IT asset disposition. He personally oversees all ITAD and data destruction projects, ensuring every device is processed securely. Within the company’s first six months, his approach earned the trust of Fortune 500 companies and federal organizations.
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Profile Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="text-center lg:text-left space-y-6">
                                {/* Profile Image */}
                                <div className="overflow-hidden rounded-lg">
                                    <LeadershipProfile />
                                </div>
                                
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-light text-gray-900">Ian Ziyar</h2>
                                    <p className="text-gray-600">Founder & CEO</p>
                                </div>
                              {/* Certifications */}
                                <div className="space-y-6">
                                    <h3 className="font-medium text-gray-900 text-sm uppercase tracking-wide">Company Certifications</h3>
                                    
                                    {/* Certifications Grid */}
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4 py-2 border-b border-gray-100 ">
                                            <div className="min-w-[80px]">
                                                <span className="font-semibold text-gray-900 text-sm">R2v3</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">Sustainable Electronics Recycling & Data Security</p>
                                        </div>
                                        
                                        <div className="flex items-start gap-4 py-2 border-b border-gray-100">
                                            <div className="min-w-[80px]">
                                                <span className="font-semibold text-gray-900 text-sm">ISO 9001</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">Quality Management System (QMS)</p>
                                        </div>
                                        
                                        <div className="flex items-start gap-4 py-2 border-b border-gray-100">
                                            <div className="min-w-[80px]">
                                                <span className="font-semibold text-gray-900 text-sm">ISO 14001</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">Environmental Management System (EMS)</p>
                                        </div>
                                        
                                        <div className="flex items-start gap-4 py-2 border-b border-gray-100">
                                            <div className="min-w-[80px]">
                                                <span className="font-semibold text-gray-900 text-sm">ISO 45001</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">Occupational Health & Safety (OHS)</p>
                                        </div>
                                        
                                        <div className="flex items-start gap-4 py-2">
                                            <div className="min-w-[80px]">
                                                <span className="font-semibold text-gray-900 text-sm">ISO 27001</span>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">Information Security Management</p>
                                        </div>
                                    </div>
                                    
                                    {/* View All Certifications Button */}
                                    <div className="text-center lg:text-left pt-2">
                                        <Link 
                                            href="/certifications" 
                                            className="inline-flex items-center text-sm px-4 py-2 text-[#2aac61] border border-[#2aac61] hover:bg-[#2aac61] hover:text-white font-medium rounded-md transition-all duration-200 group"
                                        >
                                            View Certification Details
                                            <svg 
                                                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                                            

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                                    <div>
                                        <div className="text-2xl font-light text-gray-900">10+</div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-light text-gray-900">2023</div>
                                        <div className="text-sm text-gray-600">Founded</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Bio */}
                        <div className="lg:col-span-3">
                            <div className="space-y-8">
                                {/* Scientific Background */}
                                <div>
                                    <h2 className="text-xl text-black font-semibold mb-4">Scientific Foundation in IT Asset Management</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Ian Ziyar is a scientist with extensive background in electronics and data security who built his career at the intersection of science, technology, and sustainability. His early work in biomedical research led to publications in <strong>Nature</strong> and <strong>Cell</strong>, where he focused on analytical problem-solving and precision methods that continue to guide his approach to IT asset disposition and secure data destruction today.
                                    </p>
                                </div>

                                {/* Industry Experience */}
                                <div>
                                    <h2 className="text-xl text-black font-semibold mb-4">ITAD Industry Expertise</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        With more than a decade of hands-on experience in electronics repair, data recovery, and secure data destruction, Ian saw firsthand how many recycling programs cut corners and expose organizations to risk. In response, he founded Integritrade LLC in 2023 with a mission to raise standards across the IT asset disposition (ITAD) industry by combining scientific rigor, transparency, and personal accountability in electronic recycling and data security.
                                    </p>
                                </div>

                                {/* Leadership & Certifications */}
                                <div>
                                    <h2 className="text-xl text-black font-semibold mb-4">ITAD Leadership & Industry Standards</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Under his leadership, Integritrade quickly achieved R2v3, ISO 9001, ISO 14001, ISO 45001, and ISO 27001 certifications, establishing new benchmarks for security and integrity in the IT asset disposition industry. Ian personally oversees all ITAD and data destruction projects, ensuring every device is processed securely and responsibly. In the company is first six months of public operation, his direct approach earned the trust of multiple Fortune 500 companies and federal organizations, setting new standards for IT asset management and electronic recycling compliance.
                                    </p>
                                </div>

                                {/* Community Impact */}
                                <div>
                                    <h2 className="text-xl text-black font-semibold mb-4">Community Impact & Sustainability</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Beyond business, Ian believes responsible electronics recycling should create positive community impact. He has partnered with nonprofits to donate refurbished electronics to students and families who otherwise would not have access to technology. This commitment to community engagement while reducing e-waste and supporting education demonstrates Integritrade is holistic approach to sustainable IT asset disposition.
                                    </p>
                                </div>

                                {/* Mission & Values */}
                                <div className="border-l-4 border-[#2aac61] pl-6 py-2 bg-gray-50">
                                    <h3 className="text-xl font-normal text-gray-900 mb-3">Our Mission in IT Asset Disposition</h3>
                                    <p className="text-gray-700 mb-3">
                                        Ian founded Integritrade to be value-driven, transparent, and fair - the opposite of larger ITAD firms that overcharge and underdeliver. Every project is handled with precision and honesty, ensuring clients receive trusted results without unnecessary markups or hidden costs in their IT asset management and electronic recycling programs.
                                    </p>
                                    <p className="text-gray-700 font-light">
                                        For Ian, this work is more than business - it is about protecting data, preserving resources, and building a future where technology and sustainability work together through responsible IT asset disposition and secure data destruction practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16 pt-8 border-t border-gray-200">
                        <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight mb-4">
                            Ready to Experience the Integritrade Difference in IT Asset Disposition?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join Fortune 500 companies and federal organizations who trust Ian is scientific approach to secure IT asset disposition, data destruction, and electronic recycling.
                        </p>
                        <button className="bg-[#2aac61] hover:bg-[#238f4f] text-white font-normal py-3 px-8 rounded-md transition duration-300">
                            <Link href="/contact">Contact Ian Directly</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}