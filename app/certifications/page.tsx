import React from "react";
import TimeLine from "@/components/site/TimeLine";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Certifications & Compliance • Integritrade LLC",
  description:
    "Integritrade LLC holds industry-leading certifications in IT asset disposition (ITAD) and e-waste recycling. Our compliance ensures data security, environmental responsibility, and trusted recycling for businesses of all sizes.",
  keywords: [
    "R2 certified ITAD facility",
    "ISO 9001 certified ITAD",
    "ISO 14001 environmental certification",
    "ISO 27001 information security certification",
    "ISO 45001 health & safety standards",
    "ITAD certifications",
    "e-waste recycling certifications",
    "responsible recycling certification",
    "data destruction compliance",
    "secure chain of custody ITAD",
    "regulatory compliance e-waste recycling",
    "NAID certified IT asset disposition"
  ],
  alternates: {
    canonical: "https://integritradellc.com/certifications",
  },
  openGraph: {
    title: "Certifications & Compliance • Integritrade LLC",
    description:
      "Certified IT asset disposition (ITAD) and e-waste recycling solutions that guarantee compliance, data security, and sustainability.",
    url: "https://integritradellc.com/certifications",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function CertificationsPage() {
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
    "award": [
      "R2 Certified IT Asset Disposition",
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management",
      "ISO 27001 Information Security Management",
      "ISO 45001 Occupational Health & Safety",
      "NAID Certified ITAD"
    ],
    "description": "Integritrade LLC provides certified IT asset disposition and e-waste recycling solutions that ensure security, compliance, and environmental responsibility."
  };

  return (
    <section className="section py-16 bg-gray-50">
      <div className="container mx-auto px-0 md:px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-28">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Certifications & Compliance
          </h1>
          <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground px-4">
            Certified IT asset disposition (ITAD) and e-waste recycling
            solutions that ensure security, compliance, and environmental
            responsibility for businesses of all sizes.
          </p>
        </div>

        {/* Timeline */}
        <TimeLine />

        {/* JSON-LD Structured Data */}
        <Script type="application/ld+json" id="certifications-jsonld" strategy="afterInteractive">
          {JSON.stringify(schemaData)}
        </Script>
      </div>
    </section>
  );
}
