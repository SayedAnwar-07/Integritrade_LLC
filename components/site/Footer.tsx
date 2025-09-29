'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-500 bg-[#1F2124] text-white">
      <div className="container mx-auto py-10 text-sm">
        <div className="flex flex-col md:flex-row justify-between gap-8 py-10">
          {/* Left: Company Info */}
          <div>
            <Link
              href="/"
              className="font-semibold text-blue-600 hover:underline"
            >
              <span className="text-lg md:text-2xl">Integritrade LLC</span>
            </Link>
            <p className="mt-2 max-w-xl text-gray-50 md:text-lg text-3m">
              Professional ITAD and electronic recycling services with a
              commitment to security, compliance, and environmental
              responsibility.
            </p>
          </div>


          <div className="md:text-[1rem] text-sm">
            <div className="font-semibold text-white">Services</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/services#itad"
                  className="text-gray-100 hover:text-gray-300"
                >
                  IT Asset Disposition
                </Link>
              </li>
              <li>
                <Link
                  href="/services#recycling"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Electronic Recycling
                </Link>
              </li>
              <li>
                <Link
                  href="/services#destruction"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Data Destruction
                </Link>
              </li>
              <li>
                <Link
                  href="/services#recovery"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Asset Recovery
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:text-[1rem] text-sm">
            <div className="font-semibold text-white">Company</div>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/about"
                  className="text-gray-100 hover:text-gray-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/forms"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        

      </div>
      <div suppressHydrationWarning className="text-center py-4 border-t border-gray-500">
          &copy; {new Date().getFullYear()} Integritrade LLC. All rights reserved.
        </div>
    </footer>
  );
}
