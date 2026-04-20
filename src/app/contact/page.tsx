import { ArrowUpRight, FileText, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Book a call or contact Sayyed Shozib Abbas for SaaS platforms, internal tools, dashboards, AI systems, and end-to-end product engineering work.',
  path: '/contact',
})

const channels = [
  {
    icon: Mail,
    label: 'Book a Call',
    value: 'calendly.com/shozibabbas/30min',
    href: 'https://calendly.com/shozibabbas/30min',
    description: 'Best for immediate scheduling, project scoping calls, and kickoff conversations.',
    cta: 'Schedule now',
    primary: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'shozibabbas@gmail.com',
    href: 'mailto:shozibabbas@gmail.com?subject=Let%27s%20build%20something',
    description: 'Best for detailed project context, documents, and technical requirements.',
    cta: 'Send an email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sayyed-shozib-abbas',
    href: 'https://linkedin.com/in/sayyed-shozib-abbas',
    description: "Connect professionally. Good for introductions and long-term networking.",
    cta: 'View profile',
  },
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: '+92 331 984 9845',
    href: 'tel:+923319849845',
    description: 'Available for a quick call or WhatsApp message if email feels too slow.',
    cta: 'Call or message',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/shozibabbas',
    href: 'https://github.com/shozibabbas',
    description: 'See the code. Open-source work, projects, and contribution history.',
    cta: 'Browse GitHub',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'View full CV',
    href: '/cv.pdf',
    description: 'Download or read the full CV with detailed experience and timeline.',
    cta: 'Open resume',
  },
]

function isExternalLink(href: string) {
  return href.startsWith('http')
}

function linkTarget(href: string) {
  return isExternalLink(href) ? '_blank' : undefined
}

const goodFits = [
  'You need a SaaS product built from scratch',
  'You have an existing system that needs serious improvement',
  'You need a dashboard or internal tool that your team will actually use',
  'You need a full-stack engineer who owns the whole product, not just a slice',
]

export default function Contact() {
  return (
    <div className="space-y-20 sm:space-y-28">

      {/* Hero */}
      <section className="space-y-5 pt-4">
        <p className="text-sm font-medium text-main">Get in touch</p>
        <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          Let&apos;s build something together
        </h1>
        <p className="max-w-2xl text-base text-foreground/65 sm:text-lg">
          Whether you have a fully scoped project or just an early idea — reach out. I&apos;ll tell
          you clearly whether I can help and what that looks like.
        </p>
        <a
          href="https://calendly.com/shozibabbas/30min"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-main px-6 py-3 text-sm font-medium text-main-foreground shadow-shadow transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          Book a Call
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

      {/* Contact channels */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">Ways to reach me</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Pick whichever channel works best for you.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={linkTarget(channel.href)}
              rel={isExternalLink(channel.href) ? 'noreferrer' : undefined}
              className={`group flex flex-col gap-4 rounded-xl border-2 p-6 transition-all hover:-translate-y-0.5 hover:shadow-shadow ${
                channel.primary
                  ? 'border-main bg-main text-main-foreground'
                  : 'border-foreground/10 bg-secondary-background hover:border-main/30'
              }`}
            >
              <div className="flex items-start justify-between">
                <channel.icon
                  className={`h-5 w-5 ${channel.primary ? 'text-main-foreground' : 'text-main'}`}
                />
                <ArrowUpRight
                  className={`h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 ${
                    channel.primary ? 'text-main-foreground' : 'text-main'
                  }`}
                />
              </div>

              <div className="space-y-1">
                <p className={`font-heading text-base ${channel.primary ? 'text-main-foreground' : ''}`}>
                  {channel.label}
                </p>
                <p className={`text-xs font-mono ${channel.primary ? 'text-main-foreground/70' : 'text-foreground/50'}`}>
                  {channel.value}
                </p>
              </div>

              <p className={`text-sm ${channel.primary ? 'text-main-foreground/80' : 'text-foreground/60'}`}>
                {channel.description}
              </p>

              <p className={`mt-auto text-xs font-medium ${channel.primary ? 'text-main-foreground' : 'text-main'}`}>
                {channel.cta} →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Good fit section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">When to reach out</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            I work best on projects where there&apos;s a real product to build.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {goodFits.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-foreground/10 bg-secondary-background p-5"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-main text-[10px] font-bold text-main-foreground">
                ✓
              </span>
              <p className="text-sm text-foreground/75">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Response time note */}
      <section className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 sm:p-10">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-main">Response time</p>
        <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">
          I typically respond within 24 hours. If your project is time-sensitive, mention that in
          your message and I&apos;ll prioritize accordingly.
        </p>
      </section>

    </div>
  )
}
