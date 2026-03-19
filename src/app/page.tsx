import Links from '@/components/links'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
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
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import Marquee from '@/components/ui/marquee'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PAST_ROLES from '@/data/experience'
import PROJECTS from '@/data/projects'
import { ArrowRight, BriefcaseBusiness, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
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
    <div className="space-y-10 font-base">
      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <Card className="bg-main text-main-foreground">
          <CardHeader className="border-b border-border">
            <div className="flex flex-wrap gap-2">
              <Badge>Visionary systems builder</Badge>
              <Badge variant="neutral">Mission-led execution</Badge>
              <Badge variant="neutral">AI and cloud product architecture</Badge>
            </div>
            <CardTitle className="text-3xl sm:text-5xl">Sayyed Shozib Abbas</CardTitle>
            <CardDescription className="max-w-3xl text-base text-main-foreground sm:text-lg">
              I build products that make complexity useful. My work sits at the intersection of
              systems thinking, product intent, and disciplined execution across AI, cloud,
              web, mobile, and desktop platforms.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="space-y-4 text-base sm:text-lg">
              <p>
                The mission is simple: design software systems that are trusted by teams,
                valuable to users, and resilient under real-world constraints.
              </p>
              <p>
                Recent work includes AI-powered due diligence, intelligent education tools,
                healthcare workflow software, and distributed systems infrastructure.
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-3 border-t border-border">
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

        <div className="space-y-6">
          <Links />

          <div className="space-y-4">
            <Alert>
                <ShieldCheck />
                <AlertTitle>Current mission</AlertTitle>
                <AlertDescription>
                  Build software organizations that can turn difficult ideas into dependable,
                  high-velocity product outcomes.
                </AlertDescription>
              </Alert>
              <div className="border-border rounded-base bg-secondary-background text-foreground space-y-4 border-2 p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="size-14 bg-background">
                    <AvatarFallback className="bg-background text-foreground font-heading">
                      SSA
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-heading text-lg">Systems visionary and builder</p>
                    <p className="text-sm">Architecture, product systems, and practical execution</p>
                  </div>
                </div>

                <HoverCard>
                  <HoverCardTrigger className="border-border rounded-base inline-flex items-center gap-2 border-2 px-3 py-2 text-left font-heading">
                    <MapPin className="h-4 w-4" /> DHA Phase II, Islamabad
                  </HoverCardTrigger>
                  <HoverCardContent>
                    Based in Islamabad and collaborating across distributed product teams,
                    strategic initiatives, and high-context technical programs.
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
        </div>
      </section>

      <Marquee items={focusTrack} />

      <section className="grid gap-6 lg:grid-cols-3">
        {strengths.map((item) => {
          return (
            <Card className="bg-secondary-background" key={item.title}>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-heading">Signal</span>
                  <span>{item.score}%</span>
                </div>
                <Progress value={item.score} />
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_1.05fr]">
        <Card className="bg-secondary-background">
          <CardHeader>
            <CardTitle className="text-2xl">How I create leverage</CardTitle>
            <CardDescription>
              The highest impact appears when mission, architecture, and execution work as one system.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs className="w-full" defaultValue="vision">
              <TabsList className="grid h-auto w-full grid-cols-3 gap-2">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="execution">Execution</TabsTrigger>
              </TabsList>
              <TabsContent value="vision">
                <Card className="bg-background py-4 shadow-none">
                  <CardContent className="space-y-3 pt-4 text-sm sm:text-base">
                    <p>
                      I translate ambitious product goals into focused technical direction so teams
                      understand what matters now and what compounds later.
                    </p>
                    <p>
                      This keeps product strategy connected to engineering reality at every step.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="architecture">
                <Card className="bg-background py-4 shadow-none">
                  <CardContent className="space-y-3 pt-4 text-sm sm:text-base">
                    <p>
                      I design modular systems that can adapt to evolving scope while preserving
                      reliability, maintainability, and developer clarity.
                    </p>
                    <p>
                      Architecture should reduce friction for the next feature, not create it.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="execution">
                <Card className="bg-background py-4 shadow-none">
                  <CardContent className="space-y-3 pt-4 text-sm sm:text-base">
                    <p>
                      I shape delivery loops: CI/CD, review standards, observability, and planning
                      cadences that make high quality repeatable.
                    </p>
                    <p>
                      Reliable speed is a systems outcome, not an individual effort.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-heading sm:text-3xl">Operating principles</h2>
          <Accordion className="space-y-4" collapsible type="single">
            {operatingPrinciples.map((principle) => {
              return (
                <AccordionItem key={principle.title} value={principle.title}>
                  <AccordionTrigger>{principle.title}</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base">
                    {principle.description}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Journey in systems craft</h2>
          <p className="max-w-3xl text-sm sm:text-base">
            From distributed systems engineering to product-system architecture,
            each chapter expanded scope while staying grounded in execution.
          </p>
        </div>

        <Accordion className="space-y-4" collapsible type="single">
          {PAST_ROLES.map((role) => {
            return (
              <AccordionItem key={`${role.company}-${role.role}`} value={`${role.company}-${role.role}`}>
                <AccordionTrigger>
                  <div className="text-left">
                    <div className="text-lg font-heading sm:text-xl">
                      {role.role} · {role.company}
                    </div>
                    <div className="mt-1 text-sm">{role.startDate} - {role.endDate}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 text-sm sm:text-base">
                    <p>{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.highlights.slice(0, 3).map((highlight) => {
                        return (
                          <HoverCard key={highlight}>
                            <HoverCardTrigger asChild>
                              <span className="rounded-base border-2 border-border bg-background px-3 py-1 text-xs font-heading sm:text-sm">
                                {highlight.split(' ')[0]}...
                              </span>
                            </HoverCardTrigger>
                            <HoverCardContent className="text-sm">{highlight}</HoverCardContent>
                          </HoverCard>
                        )
                      })}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-heading sm:text-3xl">Programs and platforms</h2>
            <p className="max-w-2xl text-sm sm:text-base">
              A sample of systems I have shaped across AI, education, healthcare,
              and distributed infrastructure.
            </p>
          </div>
          <Button asChild variant="neutral">
            <Link href="/work">
              Full work story
              <BriefcaseBusiness />
            </Link>
          </Button>
        </div>

        <div className="px-12">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {PROJECTS.map((project) => {
                return (
                  <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={project.name}>
                    <Card className="h-full bg-secondary-background">
                      <CardContent className="space-y-4 pt-6">
                        <AspectRatio ratio={4 / 3}>
                          <img
                            alt={project.name}
                            className="border-border h-full w-full rounded-base border-2 object-cover"
                            src={project.previewImage}
                          />
                        </AspectRatio>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm">{project.organization}</p>
                            <h3 className="text-xl font-heading">{project.name}</h3>
                          </div>
                          <p className="text-sm sm:text-base">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.focusAreas.slice(0, 3).map((area) => {
                              return (
                                <Badge key={area} variant="neutral">
                                  {area}
                                </Badge>
                              )
                            })}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

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
