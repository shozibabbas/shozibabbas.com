import { ArrowRight, CheckCircle, Code2, Database, Globe, Layers, Server, Terminal, Zap } from 'lucide-react'

const approach = [
  {
    title: 'Clarity before complexity',
    description:
      'I start by understanding exactly what the product needs to do. Ambiguity early becomes technical debt later.',
  },
  {
    title: 'Strong foundations before scaling',
    description:
      'I build systems designed to grow. The architecture decisions you make at the start determine what is possible at scale.',
  },
  {
    title: 'Execution over ideas',
    description:
      'Good ideas are common. Shipping working software is not. I focus on translating intent into working product, quickly.',
  },
  {
    title: 'Systems over hacks',
    description:
      "Fast fixes create fragile products. I build with long-term maintainability in mind, so you're not rebuilding in six months.",
  },
]

const capabilities = [
  {
    icon: Layers,
    title: 'Design and build SaaS platforms',
    description:
      'From data modelling and API design to frontend and billing — end-to-end ownership of the full product.',
  },
  {
    icon: Globe,
    title: 'Build admin dashboards and internal tools',
    description:
      'Role-based access, real-time data, charts, and exports. Tools that teams actually want to use every day.',
  },
  {
    icon: Server,
    title: 'Architect scalable backend systems',
    description:
      'Microservices, REST APIs, queues, caching, and database design built to handle growth without re-architecture.',
  },
  {
    icon: Code2,
    title: 'Develop full-stack applications',
    description:
      'Tight integration between frontend and backend. Fast, responsive UIs backed by solid data layers.',
  },
  {
    icon: Terminal,
    title: 'Improve existing products and systems',
    description:
      'Identify bottlenecks, reduce technical debt, improve performance — without disrupting what already works.',
  },
]

const experience = [
  {
    label: 'AI / Finance — HudLink',
    company: 'Compact Machines',
    period: 'Oct 2025 – Present',
    outcomes: [
      'Built a scalable AI-powered due diligence platform from the ground up',
      'Designed microservices architecture supporting high-volume document analysis workflows',
      'Engineered GPU-accelerated processing pipelines deployed across AWS and GCP',
    ],
  },
  {
    label: 'Education Platform — AILA',
    company: 'AILA',
    period: 'Apr 2024 – Sep 2025',
    outcomes: [
      'Led full product development from concept through production across web, mobile, and desktop',
      'Built a multi-service backend (NestJS, MySQL, MongoDB) with Stripe billing and AWS infrastructure',
      'Integrated AI-driven workflows using LangChain for automated academic support features',
    ],
  },
  {
    label: 'Healthcare Systems — siParadigm',
    company: 'siParadigm',
    period: 'Feb 2022 – Apr 2024',
    outcomes: [
      'Delivered high-reliability clinical software used in live pathology operations daily',
      'Built complex image annotation systems requiring precision, performance, and uptime',
      'Modernised legacy systems incrementally without disrupting production workflows',
    ],
  },
]

const workingSteps = [
  {
    number: '01',
    title: 'Understand the real problem',
    description:
      "Most briefs describe symptoms. I dig into what the product actually needs to solve and who it's for before writing a line of code.",
  },
  {
    number: '02',
    title: 'Design a system that scales',
    description:
      'I map out architecture, data flows, and integrations before building. The design phase prevents expensive rewrites.',
  },
  {
    number: '03',
    title: 'Build fast with strong foundations',
    description:
      'Speed matters — but not at the cost of correctness. I ship working iterations quickly, with code that holds up.',
  },
  {
    number: '04',
    title: 'Improve continuously',
    description:
      'After launch, I stay close to the product. Features get refined, performance gets tuned, and the system keeps improving.',
  },
]

const clientBenefits = [
  {
    title: 'Clear direction',
    description: 'You always know what is being built, why, and when. No ambiguity, no status-chasing.',
  },
  {
    title: 'Reliable execution',
    description: 'Deadlines are commitments. I ship on time by planning well, not by cutting corners.',
  },
  {
    title: 'Systems that hold under growth',
    description: "Your product won't need a full rebuild at 10× traffic. The architecture accounts for that from day one.",
  },
  {
    title: 'Clean, maintainable code',
    description: 'Well-structured code that your team can extend. Not a black box only one person understands.',
  },
]

const techStack = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Electron'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'NestJS', '.NET / ASP.NET Core'],
  },
  {
    category: 'Database',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Infrastructure',
    icon: Zap,
    items: ['AWS', 'Google Cloud', 'Docker', 'CI/CD', 'Firebase'],
  },
]

export default function About() {
  return (
    <div className="space-y-20 sm:space-y-28">

      {/* 1. HERO */}
      <section className="space-y-5 pt-4">
        <p className="text-sm font-medium text-main">Based in Islamabad — working globally</p>
        <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          I build systems that businesses can actually rely on
        </h1>
        <p className="max-w-2xl text-base text-foreground/65 sm:text-lg">
          From dashboards to full SaaS platforms, I focus on building products that are fast,
          scalable, and built to last.
        </p>
      </section>

      {/* 2. MY APPROACH */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">How I think about building products</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            The principles I apply on every project, regardless of size.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {approach.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-foreground/10 bg-secondary-background p-6"
            >
              <h3 className="mb-2 font-heading text-lg">{item.title}</h3>
              <p className="text-sm text-foreground/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHAT I ACTUALLY DO */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">What I do in practice</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Hands-on work across the full product stack.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group rounded-xl border border-foreground/10 bg-secondary-background p-6 transition-all hover:border-main/30 hover:bg-main/5"
            >
              <cap.icon className="mb-4 h-5 w-5 text-main" />
              <h3 className="mb-2 font-heading text-base">{cap.title}</h3>
              <p className="text-sm text-foreground/60">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">Where this comes from</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Real products, real environments, real stakes.
          </p>
        </div>
        <div className="grid gap-5">
          {experience.map((exp) => (
            <div
              key={exp.label}
              className="rounded-xl border border-foreground/10 bg-secondary-background p-6 sm:p-8"
            >
              <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-heading text-xl">{exp.label}</h3>
                <span className="text-xs text-foreground/40">{exp.company} · {exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-main" />
                    <span className="text-sm text-foreground/70">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HOW I WORK */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">How I work with teams and clients</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            A simple, repeatable process — no surprises.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workingSteps.map((step) => (
            <div key={step.number} className="group space-y-4">
              <span className="block font-heading text-4xl font-bold text-main/30 transition-colors group-hover:text-main/60">
                {step.number}
              </span>
              <div className="space-y-2">
                <h3 className="font-heading text-base">{step.title}</h3>
                <p className="text-sm text-foreground/60">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHAT CLIENTS GET */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">What working with me feels like</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            The things clients tell me they notice most.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {clientBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl border border-foreground/10 bg-secondary-background p-6"
            >
              <h3 className="mb-2 font-heading text-lg">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TECH STACK */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">Technologies I work with</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Tools chosen for reliability and scale, not trend-chasing.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-foreground/10 bg-secondary-background p-5"
            >
              <div className="mb-4 flex items-center gap-2">
                <group.icon className="h-4 w-4 text-main" />
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                  {group.category}
                </p>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-foreground/75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 8. PERSONAL NOTE */}
      <section className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 sm:p-10">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-main">A note</p>
        <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">
          I enjoy building systems that solve real problems. I care about clarity, performance, and
          long-term scalability — not just getting things to work. If you&apos;re building something
          that needs to hold up, I&apos;d like to be part of it.
        </p>
      </section>

      {/* 9. FINAL CTA */}
      <section className="rounded-2xl bg-main px-8 py-14 text-center sm:px-12 sm:py-16">
        <h2 className="mb-3 font-heading text-3xl text-main-foreground sm:text-4xl">
          If you&apos;re building something serious, I can help.
        </h2>
        <p className="mb-8 text-base text-main-foreground/80">
          Let&apos;s talk through what you need and whether I&apos;m the right fit.
        </p>
        <a
          href="https://calendly.com/shozibabbas/30min"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-secondary-background px-6 py-3 text-sm font-medium text-foreground shadow-shadow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

    </div>
  )
}

