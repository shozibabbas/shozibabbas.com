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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import PROJECTS from '@/data/projects'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const outcomeSignals = [
  {
    signal: 'Stronger product direction',
    evidence: 'Teams moved from scattered requests to focused plans with clear ownership.',
  },
  {
    signal: 'Higher delivery confidence',
    evidence: 'Launches became more predictable with better quality checks and release routines.',
  },
  {
    signal: 'Long-term scalability',
    evidence: 'Platforms were prepared to handle growth without major rework each quarter.',
  },
]

const deliveryPlaybook = [
  {
    title: '1) Clarify the target',
    description: 'Align business goals, user outcomes, and team scope before building.',
  },
  {
    title: '2) Execute with rhythm',
    description: 'Set clear delivery cadence, ownership boundaries, and quality checkpoints.',
  },
  {
    title: '3) Improve continuously',
    description: 'Measure what worked, fix what did not, and strengthen the next release cycle.',
  },
]

export default function Work() {
  return (
    <div className="space-y-14 sm:space-y-16">
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
            <Badge>Case studies</Badge>
            <Badge variant="neutral">Business outcomes</Badge>
            <Badge variant="neutral">Delivery leadership</Badge>
          </div>
          <CardTitle className="text-4xl leading-tight sm:text-5xl">Selected work</CardTitle>
          <CardDescription className="max-w-3xl text-base text-main-foreground sm:text-lg">
            A practical view of how I help organizations turn product goals into consistent delivery and measurable growth.
          </CardDescription>
        </CardHeader>
        <CardFooter className="border-t border-border pt-6">
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
          <h2 className="text-3xl sm:text-4xl">What this work demonstrates</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Beyond features, these projects improved direction, delivery, and long-term scalability.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Signal</TableHead>
              <TableHead>Business evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {outcomeSignals.map((item) => (
              <TableRow key={item.signal}>
                <TableCell className="font-heading">{item.signal}</TableCell>
                <TableCell>{item.evidence}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Case studies</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Selected engagements from my CV, written in business language.
          </p>
        </div>

        <div className="grid gap-6">
          {PROJECTS.map((project) => (
            <Card className="bg-secondary-background" key={project.name}>
              <CardHeader className="border-b border-border">
                <p className="text-xs uppercase tracking-wide text-foreground/60">
                  {project.organization} · {project.timeframe}
                </p>
                <CardTitle className="text-2xl">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="grid gap-6 pt-6 lg:grid-cols-[1fr_1.05fr]">
                <AspectRatio ratio={16 / 10}>
                  <Image
                    alt={project.name}
                    className="h-full w-full rounded-base border-2 border-border object-cover"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={project.previewImage}
                  />
                </AspectRatio>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading">What was needed</h3>
                    <p className="text-sm sm:text-base">Deliver a reliable product experience while supporting growth and team velocity.</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-heading">What I led</h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {project.highlights.map((highlight) => (
                        <li className="flex items-start gap-2.5" key={highlight}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-main" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.focusAreas.map((area) => (
                      <Badge key={area} variant="neutral">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Delivery playbook</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            A repeatable operating model I use to keep teams aligned and delivery outcomes stable.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {deliveryPlaybook.map((step) => (
            <Card className="bg-secondary-background" key={step.title}>
              <CardHeader>
                <CardTitle className="text-xl">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
