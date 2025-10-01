export default function Process() {
  const steps = [
    {
      n: 1,
      t: 'Assessment',
      d: 'Initial evaluation and planning of your ITAD requirements',
      color: 'bg-[#173857]',
    },
    {
      n: 2,
      t: 'Collection',
      d: 'Secure pickup and transportation of your IT assets',
      color: 'bg-emerald-500',
    },
    {
      n: 3,
      t: 'Processing',
      d: 'Data destruction, refurbishment, or recycling as appropriate',
      color: 'bg-[#173857]',
    },
    {
      n: 4,
      t: 'Reporting',
      d: 'Comprehensive documentation and certificates delivery',
      color: 'bg-emerald-500',
    },
  ]

  return (
    <section className="section py-16 bg-gray-50">
      <div className="container-narrow">
        {/* Title + Subtext */}
        <h2 className="h2 text-center">Our Process</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          A proven methodology that ensures security, compliance, and environmental
          responsibility at every step.
        </p>

        {/* Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-white font-semibold ${s.color}`}
              >
                {s.n}
              </div>
              <div className="mt-4 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
