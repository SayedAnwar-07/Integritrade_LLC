import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional ITAD & Electronic Recycling Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Secure, compliant, and environmentally responsible IT asset
              disposition and electronic recycling solutions for businesses of
              all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="btn-bg btn-hover-bg text-white px-8 py-3"
                data-testid="button-get-quote"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-3 rounded-md border border-gray-300 font-semibold hover:bg-muted/60"
                data-testid="button-learn-more"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern office building with technology equipment"
              width={800}
              height={600}
              className="rounded-xl shadow-xl w-full h-auto"
              data-testid="img-hero"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
