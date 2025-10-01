import { ShieldCheck, FileText, Recycle } from "lucide-react"

export default function Impact() {
  const stats = [
    {
      icon: ShieldCheck,
      title: "Certified & Secure",
      desc: "R2v3 + ISO 9001, 14001, 45001 & 27001 certified for quality, safety, and security",
      color: "text-clr",
    },
    {
      icon: FileText,
      title: "100% Data Destruction Rate",
      desc: "Guaranteed secure data erasure and destruction with industry-leading standards.",
      color: "text-clr",
    },
    {
      icon: Recycle,
      title: "Zero Landfill Waste",
      desc: "Committed to sustainable practices through responsible electronics recycling.",
      color: "text-clr",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Our Impact
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Trusted by Fortune 500 companies and federal agencies worldwide for
          secure, sustainable, and certified e-waste solutions.
        </p>

        {/* Stats */}
        <div className="mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8 text-center">
          {stats.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="p-6 bg-white rounded-md border shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              <Icon className={`h-7 w-7 ${color}`} />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
