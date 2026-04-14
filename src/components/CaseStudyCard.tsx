import Image from 'next/image'
import type { ReactNode } from 'react'

type CaseStudyCardProps = {
  title: string
  subtitle: string
  problem: ReactNode
  solution: ReactNode
  build: ReactNode
  tech: ReactNode
  outcome: ReactNode
  image: string
}

export default function CaseStudyCard({
  title,
  subtitle,
  problem,
  solution,
  build,
  tech,
  outcome,
  image,
}: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 shadow-sm sm:p-10">
      <div className="mb-8 space-y-2 sm:mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-main">Case Study</p>
        <h2 className="font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
        <p className="max-w-3xl text-sm text-foreground/65 sm:text-base">{subtitle}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-8">
          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Problem</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{problem}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Solution</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{solution}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">What I Built</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{build}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Tech Stack</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{tech}</div>
          </section>

          <section className="space-y-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-main">Outcome</h3>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/75">{outcome}</div>
          </section>
        </div>

        <div className="mx-auto w-full max-w-xl lg:sticky lg:top-28">
          <div className="group overflow-hidden rounded-xl border border-foreground/10 bg-background shadow-xl">
            <Image
              src={image}
              alt={`${title} screenshot`}
              width={1440}
              height={900}
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </article>
  )
}
