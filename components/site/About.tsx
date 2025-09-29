import { Award, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="py-20 bg-[#1F2124] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          About Integritrade LLC
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-200">
          Founded with a mission to provide secure and environmentally
          responsible IT asset disposition services, Integritrade LLC has become
          a trusted partner for businesses across various industries.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Award className="h-5 w-5 text-primary" />
            <span>R2 Certified Recycling Facility</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users className="h-5 w-5 text-primary" />
            <span>Experienced Professional Team</span>
          </div>
        </div>

        <div className="mt-10">
          <Button asChild size="lg">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
