'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-[#1F2124] text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 py-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-bold bg-gradient-to-r from-[#173857] to-[#2cb563] text-transparent bg-clip-text">
                Integritrade LLC
              </span>
            </Link>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-md">
              Professional ITAD and electronic recycling services with a commitment to security, 
              compliance, and environmental responsibility.
            </p>
            
            {/* Contact Methods */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 text-emerald-500 flex-shrink-0">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    1945 N Fine Ave, STE 111 Fresno, CA 93727
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-emerald-500 flex-shrink-0">
                  <PhoneIcon />
                </div>
                <div>
                  <a 
                    href="tel:+15593254813"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    (559) 325-4813
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2 pl-8">(Call or text is welcome)</p>
              
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 text-emerald-500 flex-shrink-0">
                  <EmailIcon />
                </div>
                <a 
                  href="mailto:info@integritrade.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@integritrade.com
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 text-emerald-500 flex-shrink-0">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon–Fri 9:00 AM–3:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/services#itad", label: "IT Asset Disposition" },
                { href: "/services#recycling", label: "Electronic Recycling" },
                { href: "/services#destruction", label: "Data Destruction" },
                { href: "/services#recovery", label: "Asset Recovery" }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/forms", label: "Certifications" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" }
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 block py-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Area */}
        <div className="text-center border-t border-gray-700 pt-6 pb-4">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Service Area :</span> Fresno, Clovis, Madera, Reedley, San Francisco, Sacramento
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Integritrade LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <ShieldCheckIcon />
              <span>Secure & Compliant ITAD Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icon Components
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
