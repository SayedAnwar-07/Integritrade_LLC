import { Recycle, FileText } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

const items = [
    {
      icon: Recycle,
      title: "R2 Certified",
      desc: "Responsible Recycling (R2) certification ensures environmentally sound management of electronics.",
      color: "text-clr",
    },
    {
      icon: FileText,
      title: "ISO Certified",
      desc: "Certified in ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (Health & Safety), and ISO 27001 (Information Security) standards.",
      color: "text-clr",
    },

]

export default function Certs() {
  return (
    <section className="py-20  bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + subtitle */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Certifications & Compliance
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Our industry certifications ensure the highest standards of security,
          environmental responsibility, and operational excellence.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="rounded-md border bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center">
                <Icon className={`h-7 w-7 ${color}`} />
              </div>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            className="btn-bg btn-hover-bg text-white px-8 py-3"
            data-testid="button-get-quote"
            >
            <Link href="/certifications">Certifications</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
