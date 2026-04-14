const steps = [
  {
    number: '01',
    title: 'Understand your problem',
    description:
      "We start with a conversation. I dig into what you're building, why it matters, and what success looks like. No assumptions, no guesswork.",
  },
  {
    number: '02',
    title: 'Design the system',
    description:
      'I map out the architecture, data flows, and component structure before writing code. A clear design means fewer surprises later.',
  },
  {
    number: '03',
    title: 'Build fast',
    description:
      'I ship working software in iterations. You see progress from week one and can give feedback at every step. No black-box development.',
  },
  {
    number: '04',
    title: 'Iterate and scale',
    description:
      "Launch is not the end. I help you refine based on real usage, add features, and make sure the system can handle what comes next.",
  },
]

export default function HowIWork() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl">How I work</h2>
        <p className="text-sm text-foreground/60 sm:text-base">
          A simple, transparent process — no surprises.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="group space-y-4">
            <span className="block font-heading text-4xl font-bold text-main/30 transition-colors group-hover:text-main/60">
              {step.number}
            </span>
            <div className="space-y-2">
              <h3 className="font-heading text-base sm:text-lg">{step.title}</h3>
              <p className="text-sm text-foreground/60">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
