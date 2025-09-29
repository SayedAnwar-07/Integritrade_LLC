import {
  Server,
  Recycle,
  FileText,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'

type Service = {
  id: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  desc: string
  color: string
  points: string[]
}

const services: Service[] = [
  {
    id: 'itad',
    icon: Server,
    title: 'IT Asset Disposition',
    desc:
      'Complete lifecycle management for your IT equipment, from decommissioning to final disposition.',
    color: 'text-primary', 
    points: [
      'Secure data wiping and destruction',
      'Equipment pickup and logistics',
      'Asset inventory and reporting',
      'Certificate of destruction',
    ],
  },
  {
    id: 'compliance',
    icon: FileText,
    title: 'Compliance & Reporting',
    desc:
      'Comprehensive documentation and reporting to meet regulatory requirements.',
    color: 'text-foreground', 
    points: [
      'HIPAA and SOX compliance',
      'Chain of custody tracking',
      'Detailed audit reports',
      'Environmental impact statements',
    ],
  },
  {
    id: 'recycling',
    icon: Recycle,
    title: 'Electronic Recycling',
    desc:
      'Responsible recycling of all types of electronic equipment with environmental compliance.',
    color: 'text-emerald-500', 
    points: [
      'R2 certified recycling processes',
      'Zero landfill guarantee',
      'Material recovery and processing',
      'Compliance documentation',
    ],
  },
  {
    id: 'recovery',
    icon: TrendingUp,
    title: 'Asset Recovery',
    desc:
      'Maximize return on investment through equipment refurbishment and remarketing.',
    color: 'text-primary', 
    points: [
      'Equipment evaluation and testing',
      'Refurbishment services',
      'Resale and remarketing',
      'Revenue sharing programs',
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Our Services
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground ">
          Comprehensive ITAD and electronic recycling solutions tailored to your
          business needs.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map(({ id, icon: Icon, title, desc, color, points }) => (
            <div
              key={id}
              id={id}
              className="rounded-md border bg-white p-8 shadow-sm hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <Icon className={`mt-1 h-6 w-6 ${color}`} />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{desc}</p>

                  <ul className="mt-3 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-muted-foreground">
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
