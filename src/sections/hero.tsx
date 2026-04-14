import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

const bars = [38, 52, 44, 68, 72, 58, 84]

const metrics = [
  { label: 'MRR', value: '$82.4K', delta: '↑ 12%' },
  { label: 'Active Users', value: '1,240', delta: '↑ 8%' },
  { label: 'Uptime', value: '99.9%', delta: '30-day avg' },
]

const transactions = [
  { name: 'Pro Plan — Acme Corp', amount: '$299', status: 'Paid' },
  { name: 'Enterprise — DataFlow Inc', amount: '$2,400', status: 'Paid' },
  { name: 'Starter — NovaBuild', amount: '$49', status: 'Pending' },
]

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-secondary-background shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-background/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        <span className="ml-3 text-[11px] font-medium text-foreground/30">Analytics Platform</span>
      </div>

      <div className="flex gap-0 border-b border-foreground/10 px-4">
        {['Overview', 'Users', 'Revenue', 'Settings'].map((tab, i) => (
          <div
            key={tab}
            className={`px-3 py-2 text-[11px] font-medium ${
              i === 0 ? 'border-b-2 border-main text-main' : 'text-foreground/40'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2.5 p-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-foreground/10 bg-background/40 p-3">
            <p className="text-[10px] text-foreground/40">{m.label}</p>
            <p className="font-heading text-sm font-bold text-foreground">{m.value}</p>
            <p className="text-[10px] text-main">{m.delta}</p>
          </div>
        ))}
      </div>

      <div className="px-4 pb-3">
        <p className="mb-2 text-[10px] text-foreground/40">Revenue — last 7 weeks</p>
        <div className="flex h-16 items-end gap-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-main/50" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-foreground/25">
          {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'].map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-foreground/10 px-4 py-3">
        <p className="mb-2 text-[10px] text-foreground/40">Recent transactions</p>
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div key={tx.name} className="flex items-center justify-between">
              <span className="truncate text-[10px] text-foreground/60">{tx.name}</span>
              <div className="ml-2 flex shrink-0 items-center gap-2">
                <span className="text-[10px] font-medium text-foreground">{tx.amount}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium ${
                    tx.status === 'Paid' ? 'bg-main/20 text-main' : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="pb-8 pt-4 md:pb-16 md:pt-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-main/30 bg-main/10 px-3 py-1.5 text-xs font-medium text-main">
            <Zap className="h-3 w-3" />
            Available for new projects
          </div>

          <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
            I build scalable web apps, dashboards, and SaaS platforms
          </h1>

          <p className="text-base text-foreground/65 sm:text-lg">
            I help startups and businesses turn ideas into fast, reliable, and scalable digital
            products — from MVP to production.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="https://calendly.com/shozibabbas/30min" rel="noreferrer" target="_blank">
                Book a Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="neutral">
              <Link href="/work">View Work</Link>
            </Button>
          </div>
        </div>

        <DashboardMock />
      </div>
    </section>
  )
}
