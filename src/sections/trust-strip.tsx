const domains = ['Healthcare', 'AI / ML', 'Education', 'Finance', 'Operations']

export default function TrustStrip() {
  return (
    <section className="border-y border-foreground/10 py-8">
      <p className="mb-5 text-center text-sm text-foreground/50">
        Built systems across healthcare, AI, education, and operations
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {domains.map((d) => (
          <span
            key={d}
            className="rounded-full border border-foreground/15 bg-secondary-background px-4 py-1.5 text-sm font-medium text-foreground/70"
          >
            {d}
          </span>
        ))}
      </div>
    </section>
  )
}
