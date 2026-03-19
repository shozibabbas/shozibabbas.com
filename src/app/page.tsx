import Links from '@/components/links'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Marquee from '@/components/ui/marquee'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PAST_ROLES from '@/data/experience'
import PROJECTS from '@/data/projects'
import { ArrowRight, BriefcaseBusiness, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'

const operatingPrinciples = [
  {
    title: 'Vision anchored in constraints',
    description:
      'I start with a bold product direction, then shape technical decisions around real constraints like team size, runway, and release pressure.',
  },
  {
    title: 'Systems over heroics',
    description:
      'I optimize for repeatable delivery systems, not one-off wins. Good architecture should make future execution easier.',
  },
  {
    title: 'Proof over promises',
    description:
      'Every roadmap claim should show up as tangible outcomes: cycle-time improvement, reliability gains, and stronger user adoption.',
  },
]

const focusTrack = [
  'Mission-led product systems',
  'AI-assisted software experiences',
  'Cloud-native architecture',
  'Execution operating models',
  'Healthcare and education platforms',
  'Cross-platform delivery',
  'Distributed systems thinking',
  'Sustainable product velocity',
]

const strengths = [
  {
    title: 'Systems Vision',
    score: 95,
    description: 'Turning big product ambition into architecture that teams can build and evolve.',
  },
  {
    title: 'Execution Design',
    score: 92,
    description: 'Designing the rituals, quality loops, and pipelines that keep momentum reliable.',
  },
  {
    title: 'Product Craft Across Surfaces',
    score: 93,
    description: 'Delivering cohesive experiences across web, mobile, desktop, and AI workflows.',
  },
]

export default function Home() {
  return (
    <div className="space-y-14 font-base sm:space-y-16">

      {/* ── Hero ── */}
      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <Card className="bg-main text-main-foreground">
          <CardHeader className="border-b border-border pb-6">
            <div className="flex flex-wrap gap-2">
              <Badge>Visionary systems builder</Badge>
              <Badge variant="neutral">Mission-led execution</Badge>
              <Badge variant="neutral">AI and cloud product architecture</Badge>
            </div>
            <div className="space-y-3 pt-1">
              <CardTitle className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Sayyed Shozib Abbas
              </CardTitle>
              <CardDescription className="max-w-2xl text-base text-main-foreground sm:text-lg">
                I build products that make complexity useful. My work sits at the intersection of
                systems thinking, product intent, and disciplined execution across AI, cloud,
                web, mobile, and desktop platforms.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 pt-6 text-base sm:text-lg">
            <p>
              The mission is simple: design software systems that are trusted by teams,
              valuable to users, and resilient under real-world constraints.
            </p>
            <p>
              Recent work includes AI-powered due diligence, intelligent education tools,
              healthcare workflow software, and distributed systems infrastructure.
            </p>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-3 border-t border-border pt-6">
            <Button asChild>
              <Link href="/work">
                Explore selected work
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="neutral">
              <Link href="/about">See mission and mindset</Link>
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="reverse">Operating manifesto</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How I build</DialogTitle>
                  <DialogDescription>
                    Great products come from clear intent, strong systems, and execution that is
                    both fast and dependable.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-3 text-sm sm:text-base">
                  <p>
                    I align architecture with outcomes so technical decisions are not abstract.
                    They are visible multipliers for product and business progress.
                  </p>
                  <p>
                    The goal is compounding leverage: better systems, stronger teams,
                    and clearer product momentum every cycle.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        {/* Right sidebar */}
        <div className="flex flex-col gap-5">
          <Links />


          <Alert>
            <ShieldCheck />
            <AlertTitle>Current mission</AlertTitle>
            <AlertDescription>
              Build software organizations that can turn difficult ideas into dependable,
              high-velocity product outcomes.
            </AlertDescription>
          </Alert>

        </div>
      </section>

      {/* ── Focus track marquee ── */}
      <Marquee items={focusTrack} />

      {/* ── Signal strengths ── */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-2xl font-heading sm:text-3xl">Signal strengths</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            Three axes where craft and experience create the most leverage for teams and products.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {strengths.map((item) => (
            <Card className="bg-secondary-background" key={item.title}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-0">
                <div className="flex items-center justify-between text-xs font-heading uppercase tracking-wide">
                  <span>Signal</span>
                  <span>{item.score}%</span>
                </div>
                <Progress value={item.score} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Leverage model + Operating principles ── */}
      <section className="grid gap-6 xl:grid-cols-[1fr_1.05fr]">
        <Card className="bg-secondary-background">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">How I create leverage</CardTitle>
            <CardDescription>
              The highest impact appears when mission, architecture, and execution work as one system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="vision">
              <TabsList className="grid h-auto w-full grid-cols-3 gap-1.5">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="execution">Execution</TabsTrigger>
              </TabsList>
              <TabsContent value="vision">
                <div className="space-y-3 pt-5 text-sm sm:text-base">
                  <p>
                    I translate ambitious product goals into focused technical direction so teams
                    understand what matters now and what compounds later.
                  </p>
                  <p>
                    This keeps product strategy connected to engineering reality at every step.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="architecture">
                <div className="space-y-3 pt-5 text-sm sm:text-base">
                  <p>
                    I design modular systems that can adapt to evolving scope while preserving
                    reliability, maintainability, and developer clarity.
                  </p>
                  <p>
                    Architecture should reduce friction for the next feature, not create it.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="execution">
                <div className="space-y-3 pt-5 text-sm sm:text-base">
                  <p>
                    I shape delivery loops: CI/CD, review standards, observability, and planning
                    cadences that make high quality repeatable.
                  </p>
                  <p>
                    Reliable speed is a systems outcome, not an individual effort.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-heading sm:text-3xl">Operating principles</h2>
            <p className="text-sm text-foreground/70">
              The convictions that guide every product decision and technical call I make.
            </p>
          </div>
          <Accordion className="space-y-3" collapsible type="single">
            {operatingPrinciples.map((principle) => (
              <AccordionItem key={principle.title} value={principle.title}>
                <AccordionTrigger>{principle.title}</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  {principle.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Career journey ── */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-2xl font-heading sm:text-3xl">Journey in systems craft</h2>
          <p className="max-w-3xl text-sm text-foreground/70 sm:text-base">
            From distributed systems engineering to product-system architecture,
            each chapter expanded scope while staying grounded in execution.
          </p>
        </div>

        <Accordion className="space-y-3" collapsible type="single">
          {PAST_ROLES.map((role) => (
            <AccordionItem
              key={`${role.company}-${role.role}`}
              value={`${role.company}-${role.role}`}
            >
              <AccordionTrigger>
                <div className="flex flex-col gap-0.5 text-left">
                  <span className="font-heading text-base sm:text-lg">{role.role}</span>
                  <span className="text-sm text-foreground/60">
                    {role.company} · {role.startDate} – {role.endDate}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-1 text-sm sm:text-base">
                  <p>{role.description}</p>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-main" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── Programs and platforms ── */}
      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-heading sm:text-3xl">Programs and platforms</h2>
            <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
              A sample of systems I have shaped across AI, education, healthcare,
              and distributed infrastructure.
            </p>
          </div>
          <Button asChild className="shrink-0" variant="neutral">
            <Link href="/work">
              Full work story
              <BriefcaseBusiness />
            </Link>
          </Button>
        </div>

        <div className="px-12">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {PROJECTS.map((project) => (
                <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={project.name}>
                  <Card className="h-full bg-secondary-background">
                    <CardContent className="space-y-4 pt-6">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          alt={project.name}
                          className="h-full w-full rounded-base border-2 border-border object-cover"
                          src={project.previewImage}
                        />
                      </AspectRatio>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs font-heading uppercase tracking-wide text-foreground/60">
                            {project.organization} · {project.timeframe}
                          </p>
                          <h3 className="mt-0.5 text-lg font-heading">{project.name}</h3>
                        </div>
                        <p className="text-sm sm:text-base">{project.description}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.focusAreas.slice(0, 3).map((area) => (
                            <Badge className="text-xs" key={area} variant="neutral">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* ── North star ── */}
      <section>
        <Alert className="bg-main text-main-foreground">
          <Sparkles />
          <AlertTitle>North star</AlertTitle>
          <AlertDescription>
            Build software ecosystems where people can think bigger because the systems around
            them are clear, resilient, and designed to scale with ambition.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  )
}
