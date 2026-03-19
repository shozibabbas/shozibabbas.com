import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import PROJECTS from '@/data/projects'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const outcomeSignals = [
  {
    signal: 'Architectural Ownership',
    evidence: 'Designed modular systems and technical strategy across web and AI services.',
  },
  {
    signal: 'Execution Reliability',
    evidence: 'Established CI/CD and engineering standards for faster, safer releases.',
  },
  {
    signal: 'Cross-domain Delivery',
    evidence: 'Delivered programs across finance, education, healthcare, and infrastructure.',
  },
]

export default function Work() {
  return (
    <div className="space-y-12 font-base sm:space-y-14">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Work</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-main text-main-foreground">
        <CardHeader className="border-b border-border">
          <div className="flex flex-wrap gap-2">
            <Badge>Selected work</Badge>
            <Badge variant="neutral">AI</Badge>
            <Badge variant="neutral">Healthcare</Badge>
            <Badge variant="neutral">Distributed systems</Badge>
          </div>
          <CardTitle className="text-3xl sm:text-4xl">Selected Work</CardTitle>
          <CardDescription className="max-w-3xl text-base text-main-foreground sm:text-lg">
            A curated set of programs that demonstrate how I turn complex
            technical constraints into reliable business outcomes.
          </CardDescription>
        </CardHeader>
        <CardFooter className="border-t border-border">
          <Button asChild variant="neutral">
            <Link href="/about">
              See background
              <ArrowRight />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Case study preview</h2>
          <p className="text-sm sm:text-base">
            A quick scan of key programs before diving into challenge,
            execution, and outcome.
          </p>
        </div>

        <div className="px-12 py-1">
          <Carousel opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {PROJECTS.map((project) => {
                return (
                  <CarouselItem className="md:basis-1/2 xl:basis-1/3" key={project.name}>
                    <figure
                      className={cn(
                        'w-full overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow',
                      )}
                    >
                      <AspectRatio ratio={4 / 3}>
                        <img
                          alt={project.name}
                          className="h-full w-full object-cover"
                          src={project.previewImage}
                        />
                      </AspectRatio>
                      <figcaption className="border-t-2 text-main-foreground border-border p-4">
                        {project.name} · {project.organization}
                      </figcaption>
                    </figure>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">What these projects prove</h2>
          <p className="text-sm sm:text-base">
            Not just shipped features, but repeatable engineering leverage.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Signal</TableHead>
              <TableHead>Evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {outcomeSignals.map((item) => {
              return (
                <TableRow key={item.signal}>
                  <TableCell className="font-heading">{item.signal}</TableCell>
                  <TableCell>{item.evidence}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </section>

      <Tabs className="space-y-2" defaultValue="featured">
        <TabsList className="grid h-auto w-full grid-cols-3 gap-2">
          <TabsTrigger value="featured">Narrative</TabsTrigger>
          <TabsTrigger value="platforms">Execution style</TabsTrigger>
          <TabsTrigger value="systems">Impact lens</TabsTrigger>
        </TabsList>
        <TabsContent className="pt-1" value="featured">
          <Card className="bg-secondary-background py-4">
            <CardContent className="pt-4 text-sm sm:text-base">
              Every project here follows the same pattern: define the business
              objective, build the right technical system, then institutionalize
              delivery quality.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="pt-1" value="platforms">
          <Card className="bg-secondary-background py-4">
            <CardContent className="pt-4 text-sm sm:text-base">
              I combine architecture design with hands-on execution and team
              enablement so systems continue shipping beyond initial launch.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent className="pt-1" value="systems">
          <Card className="bg-secondary-background py-4">
            <CardContent className="pt-4 text-sm sm:text-base">
              The measure of success is durable velocity: reliable releases,
              maintainable systems, and visible product progress.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-8">
        {PROJECTS.map((project) => {
          return (
            <Card className="bg-secondary-background" key={project.name}>
              <CardHeader className="border-b border-border">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm">{project.organization}</p>
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
                    <CardDescription className="mt-1 text-sm sm:text-base">
                      {project.timeframe}
                    </CardDescription>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="neutral">Open full brief</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{project.name}</DialogTitle>
                        <DialogDescription>
                          {project.organization} · {project.timeframe}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 text-sm sm:text-base">
                        <p>{project.description}</p>
                        <ul className="list-disc space-y-2 pl-5">
                          {project.highlights.map((highlight) => {
                            return <li key={highlight}>{highlight}</li>
                          })}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              <CardContent className="grid gap-6 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <img
                    alt={project.name}
                    className="border-border rounded-base h-auto w-full border-2 bg-background"
                    src={project.previewImage}
                  />
                  <p className="text-sm sm:text-base">
                    <span className="font-heading">Challenge: </span>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.focusAreas.map((area) => {
                      return (
                        <Badge key={area} variant="neutral">
                          {area}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                <Accordion collapsible type="single" defaultValue={`${project.name}-execution`}>
                  <AccordionItem value={`${project.name}-execution`}>
                    <AccordionTrigger>Execution and impact</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc space-y-2 pl-5 text-sm sm:text-base">
                        {project.highlights.map((highlight) => {
                          return <li key={highlight}>{highlight}</li>
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
