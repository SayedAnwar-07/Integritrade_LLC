import { Building2, Target, CheckCircle2, TrendingUp } from "lucide-react"

type CS = {
  title: string
  company: string
  industry: string
  service: string
  challenge: string
  solution: string
  results: string
}

const cases: CS[] = [
  {
    title: "Financial Institution Server Upgrade",
    company: "First National Bank",
    industry: "Financial Services",
    service: "Server Decommissioning",
    challenge:
      "Secure disposal of legacy banking servers containing sensitive financial data with strict regulatory compliance requirements.",
    solution:
      "Integritrade provided bank-grade security protocols, witnessed data destruction, and comprehensive audit documentation.",
    results:
      "Zero security incidents, full regulatory compliance, and $40,000 in recovered server components.",
  },
  {
    title: "Corporate Office Equipment Refresh",
    company: "TechCorp Solutions",
    industry: "Technology",
    service: "Equipment Refresh",
    challenge:
      "TechCorp needed to dispose of 500+ workstations and laptops while maintaining data security and meeting strict environmental sustainability goals.",
    solution:
      "Integritrade implemented a comprehensive 3-phase program including on-site hard drive destruction, component recovery, and responsible recycling.",
    results:
      "Processed 500+ devices, achieved 98% material recovery rate, and generated $25,000 in asset recovery value.",
  },
  {
    title: "Healthcare Data Center Decommissioning",
    company: "Metro Healthcare System",
    industry: "Healthcare",
    service: "Data Center Decommissioning",
    challenge:
      "Metro Healthcare needed to decommission their legacy data center containing 200+ servers with sensitive patient data while maintaining HIPAA compliance throughout the process.",
    solution:
      "Integritrade deployed a specialized team with healthcare compliance expertise, implementing a 5-stage secure decommissioning process.",
    results:
      "Successfully decommissioned 200+ servers and recovered $85,000 in asset value.",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Case Studies
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          Real-world examples of our successful ITAD projects and the value we
          deliver to our clients
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((cs) => (
            <article
              key={cs.title}
              className="rounded-md border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold">{cs.title}</h3>

              {/* Company */}
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span>{cs.company}</span>
              </div>

              {/* Pills */}
              <div className="mt-4 space-y-2">
                {/* filled (industry) */}
                <div className="h-6 overflow-hidden rounded-full border border-emerald-200">
                  <div className="flex h-full items-center rounded-full bg-emerald-500 px-3 text-xs font-semibold text-white">
                    {cs.industry}
                  </div>
                </div>
                {/* outlined (service) */}
                <div className="h-6 rounded-full border border-muted-foreground/20 px-3 text-xs font-semibold text-muted-foreground flex items-center">
                  {cs.service}
                </div>
              </div>

              {/* Sections */}
              <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                    <Target className="h-4 w-4 text-rose-600" />
                    <span>Challenge</span>
                  </div>
                  <p>{cs.challenge}</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-sky-600" />
                    <span>Solution</span>
                  </div>
                  <p>{cs.solution}</p>
                </div>

                <div>
                  <div className="mb-1 flex items-center gap-2 font-semibold text-foreground">
                    <TrendingUp className="h-4 w-4 text-emerald-600" />
                    <span>Results</span>
                  </div>
                  <p>{cs.results}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
