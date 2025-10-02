import { Button } from '@/components/ui/button'
import {
  Info,
  Shield,
  ClipboardList,
  FileDown,
  CheckCircle2,
  Calendar,
  FileText
} from 'lucide-react'

export const metadata = { title: 'Forms • Integritrade LLC' }

type FormCard = {
  icon?: React.ComponentType<any>
  title: string
  req: boolean
  items: string[]
}

const forms: FormCard[] = [
  {
    icon: ClipboardList,
    title: 'Equipment Pickup Agreement',
    req: true,
    items: [
      'Equipment inventory and condition assessment',
      'Pickup scheduling and logistics coordination',
      'Chain of custody documentation',
      'Contact information and special instructions',
    ],
  },
  {
    icon: Shield,
    title: 'Data Destruction Service Agreement',
    req: true,
    items: [
      'Data destruction method selection (DOD/NIST)',
      'Certificate of destruction requirements',
      'Compliance specifications (HIPAA, SOX, etc.)',
      'Witness requirements and verification',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Chain of Custody Agreement',
    req: true,
    items: [
      'Asset identification and tracking',
      'Handler identification and signatures',
      'Transfer timestamps and locations',
      'Condition assessments at each stage',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Master Service Agreement',
    req: true,
    items: [
      'Service scope and deliverables',
      'Pricing and payment terms',
      'Liability and insurance provisions',
      'Performance standards and guarantees',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Asset Disposal Authorization',
    req: false,
    items: [
      'Asset disposition preferences',
      'Environmental compliance requirements',
      'Revenue sharing agreement terms',
      'Final disposition documentation',
    ],
  },
  {
    icon: Shield,
    title: 'Compliance Requirements Checklist',
    req: false,
    items: [
      'Industry-specific regulatory requirements',
      'Data protection and privacy compliance',
      'Environmental regulation adherence',
      'Audit and documentation standards',
    ],
  },
]

export default function FormsPage() {
  return (
    <section className="section py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Service Agreement Forms</h2>
        <p className="lead mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
          Download the necessary forms to begin your ITAD service request. All forms are
          designed to ensure secure, compliant, and efficient processing of your IT assets.
        </p>

        {/* Important note */}
        <div className="my-20 rounded-md border px-4 py-3 bg-white">
          <div className="flex items-start gap-3 text-sm">
            <Info className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <p>
              <span className="font-semibold">Important:</span> All forms marked as
              &nbsp;<span className="font-semibold">{""} Required {""}</span> must be completed
              before service can begin. Our team will review your submissions and contact
              you within 24 hours to confirm details and schedule services.
            </p>
          </div>
        </div>

        {/* Forms grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {forms.map((f) => (
            <div key={f.title} className="rounded-md border bg-white p-6">
              <div className="flex items-start gap-3">
                {f.icon ? <f.icon className="mt-1 h-5 w-5 text-blue-500" /> : null}
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{f.title}</div>
                  </div>
                  {f.req && (
                    <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      Required
                    </span>
                  )}

                  <p className="mt-3 text-sm text-muted-foreground">
                    {/* small descriptive line optional; keep layout aligned with screenshots */}
                  </p>

                  <div className="mt-2 text-sm">
                    <div className="mb-2 font-semibold">Form Includes:</div>
                    <ul className="space-y-2 text-muted-foreground">
                      {f.items.map((i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-500/90 rounded-sm">
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Form (PDF)
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submission Process */}
        <div className="section mt-16">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Form Submission Process</h3>
          <p className="mt-3 text-center text-muted-foreground">
            Follow these simple steps to get started with our ITAD services.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              {
                n: 1,
                color: 'bg-blue-500 text-white',
                t: 'Download Forms',
                d: 'Download and review all required forms for your service type',
              },
              {
                n: 2,
                color: 'bg-emerald-500 text-white',
                t: 'Complete Forms',
                d: 'Fill out all required information accurately and completely',
              },
              {
                n: 3,
                color: 'bg-muted text-foreground/70',
                t: 'Submit Forms',
                d: 'Email completed forms to our team or upload through our secure portal',
              },
              {
                n: 4,
                color: 'bg-blue-500 text-white',
                t: 'Schedule Service',
                d: 'Our team will contact you to confirm details and schedule pickup',
              },
            ].map((s) => (
              <div key={s.t} className="text-center">
                <div
                  className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full text-base font-semibold ${s.color}`}
                >
                  {s.n}
                </div>
                <div className="mt-4 font-semibold">{s.t}</div>
                <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Help CTA */}
        <div className="section mt-20 text-center">
          <h3 className="text-center text-lg md:text-2xl font-semibold tracking-tight">Need Help with Forms?</h3>
          <p className="mt-3 mx-auto max-w-3xl text-muted-foreground">
            Our team is ready to assist you with form completion, service questions, or
            custom requirements. Contact us for personalized support.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              <FileText className="h-4 w-4" />
              Contact Support
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-semibold hover:bg-muted/60 bg-white"
            >
              <Calendar className="h-4 w-4" />
              Schedule Consultation
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
