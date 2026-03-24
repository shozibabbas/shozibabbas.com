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
      'I help leadership teams turn broad ambition into focused priorities, decisions, and delivery plans.',
  },
  {
    title: 'Faster and safer launches',
    description:
      'I create repeatable delivery systems so releases feel more predictable, lower-risk, and easier to scale.',
  },
  {
    title: 'Scalable growth foundations',
    description:
      'I shape products and internal systems that can support growth without constant reinvention.',
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
              I work with ambitious businesses to turn complex ideas into clear offers,
              dependable products, and delivery systems that actually hold up as the company grows.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-6 text-base sm:text-lg">
            <p>
              My background spans finance, education, healthcare, and platform products,
              with hands-on leadership across product direction, execution, and team operations.
            </p>
            <p>
              The common thread is simple: make the offer clearer, make delivery stronger,
              and build trust through consistent execution.
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
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl">Selected work</h2>
            <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
              Tangible proof of work across businesses that needed sharper direction, stronger delivery, and better outcomes.
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
          <h2 className="text-3xl sm:text-4xl">Business outcomes</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            The value I am usually hired to create once the work is underway.
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
