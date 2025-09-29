import React from "react";
import TimeLine from "@/components/site/TimeLine";

export const metadata = { title: 'Certifications & Compliance • Integritrade LLC' }

export default function CertificationsPage() {
  return (
     <section className="section py-16  bg-gray-50">
        <div className="container mx-auto px-0 md:px-4 py-12">
          {/* Page Header */}
        
          <div className="text-center mb-28">
            <h3 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
              Certifications & Compliance
            </h3>
            <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground px-4">
              Certified IT asset disposition (ITAD) and e-waste recycling solutions that ensure security, compliance, and environmental responsibility for businesses of all sizes.
            </p>
            
          </div>

          {/* Timeline */}
          <TimeLine />

          
        </div>
    </section>
  );
}
