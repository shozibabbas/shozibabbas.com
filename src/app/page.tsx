import Links from '@/components/links'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import PAST_ROLES from '@/data/experience'
import PROJECTS from '@/data/projects'
import { ArrowRight, BriefcaseBusiness, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const businessOutcomes = [
  {
    title: 'Clear direction for product teams',
    description:
      'I help teams focus on priorities, remove confusion, and move from ideas to delivery plans quickly.',
  },
  {
    title: 'Faster and safer launches',
    description:
      'I build repeatable delivery habits so releases become more predictable and less stressful.',
  },
  {
    title: 'Scalable growth foundations',
    description:
      'I shape products and platforms that grow with demand without constant rewrites.',
  },
]

const workingModel = [
  {
    title: 'Align',
    description: 'Define goals, customer value, and execution priorities with leadership and product teams.',
  },
  {
    title: 'Build',
    description: 'Translate priorities into practical roadmaps, delivery systems, and cross-team ownership.',
  },
  {
    title: 'Scale',
    description: 'Strengthen quality and team cadence so momentum keeps compounding after launch.',
  },
]

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3)
  const recentChapters = PAST_ROLES.slice(0, 3)

  return (
    <div className="space-y-14 sm:space-y-16">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <Card className="bg-main text-main-foreground">
          <CardHeader className="border-b border-border pb-6">
            <div className="flex flex-wrap gap-2">
              <Badge>Portfolio</Badge>
              <Badge variant="neutral">Product leadership</Badge>
              <Badge variant="neutral">Business-focused execution</Badge>
            </div>
            <CardTitle className="text-4xl leading-tight sm:text-5xl lg:text-6xl">Sayyed Shozib Abbas</CardTitle>
            <CardDescription className="max-w-2xl text-base text-main-foreground sm:text-lg">
              I help businesses turn complex ideas into products people trust, teams can scale,
              and leaders can grow with confidence.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-6 text-base sm:text-lg">
            <p>
              I have led initiatives across finance, education, healthcare, and infrastructure,
              turning strategic goals into measurable delivery.
            </p>
            <p>
              My focus is simple: clear outcomes, strong execution, and products that keep improving
              after launch.
            </p>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-3 border-t border-border pt-6">
            <Button asChild>
              <Link href="/work">
                View selected work
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="neutral">
              <Link href="/about">Read my story</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="flex flex-col gap-5">
          <Links />
          <Alert>
            <ShieldCheck />
            <AlertTitle>What clients get</AlertTitle>
            <AlertDescription>
              A practical partner who can shape direction, improve execution quality,
              and help teams deliver with confidence.
            </AlertDescription>
          </Alert>
          <Card className="bg-secondary-background">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Quick profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-0 text-sm sm:text-base">
              <p>
                <span className="font-heading">Location:</span> Islamabad, Pakistan
              </p>
              <p>
                <span className="font-heading">Focus:</span> Product strategy and execution
              </p>
              <p>
                <span className="font-heading">Domain exposure:</span> Finance, education, healthcare
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Business outcomes</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            The value I am usually hired to create.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {businessOutcomes.map((item) => (
            <Card className="bg-secondary-background" key={item.title}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl">Selected work</h2>
            <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
              A snapshot of projects where strategy, delivery, and outcomes came together.
            </p>
          </div>
          <Button asChild variant="neutral">
            <Link href="/work">
              Open all case studies
              <BriefcaseBusiness />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card className="h-full bg-secondary-background" key={project.name}>
              <CardContent className="space-y-4 pt-6">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    alt={project.name}
                    className="h-full w-full rounded-base border-2 border-border object-cover"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    src={project.previewImage}
                  />
                </AspectRatio>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-foreground/60">
                    {project.organization} · {project.timeframe}
                  </p>
                  <h3 className="text-xl font-heading">{project.name}</h3>
                  <p className="text-sm sm:text-base">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">How I work</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            A simple model that keeps teams aligned and projects moving.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {workingModel.map((step) => (
            <Card className="bg-secondary-background" key={step.title}>
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Career proof</h2>
          <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
            Recent leadership chapters that shaped my approach to product delivery.
          </p>
        </div>
        <div className="grid gap-5">
          {recentChapters.map((role) => (
            <Card className="bg-secondary-background" key={`${role.company}-${role.role}`}>
              <CardHeader className="border-b border-border">
                <CardTitle className="text-2xl">{role.role}</CardTitle>
                <CardDescription>
                  {role.company} · {role.startDate} - {role.endDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-5">
                <p className="text-sm sm:text-base">{role.description}</p>
                <ul className="space-y-2 text-sm sm:text-base">
                  {role.highlights.slice(0, 2).map((highlight) => (
                    <li className="flex items-start gap-2.5" key={highlight}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-main" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Alert className="bg-main text-main-foreground">
          <Sparkles />
          <AlertTitle>Let us build something strong together</AlertTitle>
          <AlertDescription>
            If you are scaling a product or improving delivery quality, I can help connect
            your business goals with practical execution.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  )
}
