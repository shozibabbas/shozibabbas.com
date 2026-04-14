const caseStudies = [
  {
    label: 'Ad Marketplace Platform',
    problem:
      'A growing ad network had no centralized platform for advertisers to manage campaigns, bids, and performance data. Teams tracked everything in spreadsheets.',
    solution:
      'Built a full-stack ad marketplace with campaign management, real-time bidding logic, analytics dashboards, and automated billing — deployed on AWS.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'AWS'],
    outcome:
      'Reduced campaign launch time from 3 days to under 4 hours. Platform handled 10K+ daily events without degradation.',
  },
  {
    label: 'Operations Dashboard',
    problem:
      'An operations team was working from 6 different spreadsheets to track inventory, tasks, and team performance. No single source of truth existed.',
    solution:
      'Designed and built a unified internal dashboard with role-based access, real-time data sync, charts, and export capabilities across all departments.',
    tech: ['React', 'Node.js', 'MySQL', 'Recharts', 'Docker'],
    outcome:
      'Eliminated 3 manual reporting processes. Leadership could pull live operational status in under 30 seconds.',
  },
  {
    label: 'Appointment Scheduling System',
    problem:
      'A healthcare provider was managing bookings manually over phone and email. Double-bookings and missed appointments were a constant issue.',
    solution:
      'Built a scheduling platform with calendar sync, SMS/email reminders, provider availability management, and patient self-booking portal.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Twilio', 'Vercel'],
    outcome:
      'No-show rate dropped by 38%. Provider schedules filled 22% faster after self-booking went live.',
  },
]

export default function FeaturedWork() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl">Featured work</h2>
        <p className="text-sm text-foreground/60 sm:text-base">Real problems. Real solutions. Measurable outcomes.</p>
      </div>

      <div className="grid gap-6">
        {caseStudies.map((cs) => (
          <div
            key={cs.label}
            className="rounded-xl border border-foreground/10 bg-secondary-background p-6 sm:p-8"
          >
            <h3 className="mb-6 font-heading text-xl sm:text-2xl">{cs.label}</h3>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="space-y-1.5">
                <p className="text-xs font-medium uppercase tracking-wider text-main">Problem</p>
                <p className="text-sm text-foreground/70">{cs.problem}</p>
              </div>
              <div className="space-y-1.5">
                <p className="text-xs font-medium uppercase tracking-wider text-main">Solution</p>
                <p className="text-sm text-foreground/70">{cs.solution}</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-medium uppercase tracking-wider text-main">Outcome</p>
                  <p className="text-sm text-foreground/70">{cs.outcome}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-foreground/15 px-2 py-0.5 text-[11px] font-medium text-foreground/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
