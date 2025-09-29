import { ShieldCheck, Recycle, DollarSign } from 'lucide-react'

type Item = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  desc: string
  color: string
}

const items: Item[] = [
  {
    icon: ShieldCheck,
    title: 'Secure Data Destruction',
    desc:
      'DOD and NIST compliant data wiping and physical destruction with certificates of destruction.',
    color: 'text-primary', 
  },
  {
    icon: Recycle,
    title: 'Environmental Compliance',
    desc:
      'R2 certified processes ensuring responsible recycling and minimal environmental impact.',
    color: 'text-emerald-500', 
  },
  {
    icon: DollarSign, 
    title: 'Asset Recovery',
    desc:
      'Maximize value recovery from decommissioned equipment through refurbishment and resale.',
    color: 'text-foreground', 
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title + subtitle */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Why Choose Integritrade?
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          We provide comprehensive ITAD solutions that protect your data, ensure
          compliance, and support environmental sustainability.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="rounded-md border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-center">
                <Icon className={`h-7 w-7 ${color}`} />
              </div>

              <h3 className="mt-4 text-center text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
