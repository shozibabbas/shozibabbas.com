import { LayoutDashboard, Layers, Wrench, Rocket, Network } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'SaaS Products',
    description: 'Full product development from idea to scalable platform',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards',
    description: 'Data-heavy dashboards with real-time insights and controls',
  },
  {
    icon: Wrench,
    title: 'Internal Tools',
    description: 'Custom tools to streamline operations and workflows',
  },
  {
    icon: Rocket,
    title: 'MVP Development',
    description: 'Launch fast with a solid, scalable foundation',
  },
  {
    icon: Network,
    title: 'System Architecture',
    description: 'Design systems that scale with your business',
  },
]

export default function Services() {
  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <h2 className="font-heading text-3xl sm:text-4xl">What I can build for you</h2>
        <p className="text-sm text-foreground/60 sm:text-base">
          Focused on execution, not consulting decks.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-foreground/10 bg-secondary-background p-6 transition-all hover:border-main/30 hover:bg-main/5"
          >
            <s.icon className="mb-4 h-6 w-6 text-main" />
            <h3 className="mb-2 font-heading text-lg">{s.title}</h3>
            <p className="text-sm text-foreground/60">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
