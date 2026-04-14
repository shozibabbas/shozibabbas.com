const revenueMetrics = [
  { label: 'Total Revenue', value: '$124K', delta: '+18%' },
  { label: 'Avg Order', value: '$84', delta: '+5%' },
  { label: 'Customers', value: '1,847', delta: '+23%' },
  { label: 'Churn Rate', value: '1.4%', delta: '-0.3%' },
]

const monthlyBars = [28, 42, 38, 55, 48, 65, 72, 58, 80, 74, 88, 92]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const tableRows = [
  { customer: 'Acme Corp', plan: 'Enterprise', status: 'Active' },
  { customer: 'TechFlow', plan: 'Pro', status: 'Active' },
  { customer: 'Skyline', plan: 'Starter', status: 'Trial' },
  { customer: 'NovaLabs', plan: 'Enterprise', status: 'Active' },
  { customer: 'DataSync', plan: 'Pro', status: 'Paused' },
]

const systemServices = [
  { name: 'API Gateway', uptime: '99.98%', ok: true },
  { name: 'Database', uptime: '99.95%', ok: true },
  { name: 'Worker Queue', uptime: '99.90%', ok: true },
  { name: 'File Storage', uptime: '100%', ok: true },
  { name: 'Webhooks', uptime: '98.2%', ok: false },
]

const settingsFields = [
  { label: 'Full Name', value: 'Alex Mercer' },
  { label: 'Email', value: 'alex@acmecorp.com' },
  { label: 'Role', value: 'Admin' },
]

const sprintTasks = [
  { task: 'Auth module', pct: 100 },
  { task: 'Dashboard UI', pct: 80 },
  { task: 'API integration', pct: 60 },
  { task: 'Export reports', pct: 35 },
  { task: 'Mobile layout', pct: 15 },
]

export default function UIPreview() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl">Systems I build look like this</h2>
        <p className="text-sm text-foreground/60 sm:text-base">Clean interfaces for real business logic.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Metric cards */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            Revenue metrics
          </p>
          <div className="grid grid-cols-2 gap-3">
            {revenueMetrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-foreground/10 bg-background/40 p-3">
                <p className="text-[9px] text-foreground/40">{m.label}</p>
                <p className="font-heading text-sm font-bold">{m.value}</p>
                <p className="text-[10px] text-main">{m.delta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bar chart */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            Monthly signups
          </p>
          <div className="flex h-28 items-end gap-1.5">
            {monthlyBars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-main/50 transition-all hover:bg-main/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[9px] text-foreground/25">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            Recent orders
          </p>
          <div className="space-y-2">
            <div className="grid grid-cols-3 text-[9px] font-medium uppercase text-foreground/30">
              <span>Customer</span>
              <span className="text-center">Plan</span>
              <span className="text-right">Status</span>
            </div>
            {tableRows.map((row) => (
              <div
                key={row.customer}
                className="grid grid-cols-3 border-t border-foreground/5 py-1.5 text-[10px]"
              >
                <span className="font-medium text-foreground/80">{row.customer}</span>
                <span className="text-center text-foreground/50">{row.plan}</span>
                <span
                  className={`text-right text-[9px] font-medium ${
                    row.status === 'Active'
                      ? 'text-main'
                      : row.status === 'Trial'
                        ? 'text-yellow-400'
                        : 'text-foreground/40'
                  }`}
                >
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System status */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            System status
          </p>
          <div className="space-y-2.5">
            {systemServices.map((svc) => (
              <div key={svc.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${svc.ok ? 'bg-main' : 'bg-yellow-400'}`} />
                  <span className="text-[11px] text-foreground/70">{svc.name}</span>
                </div>
                <span className="text-[10px] text-foreground/40">{svc.uptime}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Settings form */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            User settings
          </p>
          <div className="space-y-3">
            {settingsFields.map((f) => (
              <div key={f.label}>
                <p className="mb-1 text-[9px] text-foreground/40">{f.label}</p>
                <div className="rounded-lg border border-foreground/15 bg-background/40 px-3 py-2 text-[11px] text-foreground/70">
                  {f.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-main/15 px-3 py-2 text-center text-[10px] font-medium text-main">
              Save changes
            </div>
          </div>
        </div>

        {/* Sprint progress */}
        <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-foreground/40">
            Sprint progress
          </p>
          <div className="space-y-3">
            {sprintTasks.map((t) => (
              <div key={t.task}>
                <div className="mb-1 flex justify-between text-[10px]">
                  <span className="text-foreground/70">{t.task}</span>
                  <span className="text-foreground/40">{t.pct}%</span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/10">
                  <div className="h-full rounded-full bg-main/70" style={{ width: `${t.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
