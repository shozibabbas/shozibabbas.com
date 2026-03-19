import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EDUCATION from '@/data/education'
import PAST_ROLES from '@/data/experience'
import SKILLS from '@/data/skills'
import { Layers3 } from 'lucide-react'
import Link from 'next/link'

const capabilityProof = [
  {
    capability: 'Systems Vision',
    proof: 'Designed product architectures that connect business intent with buildable technical direction.',
    chapter: 'Compact Machines, AILA',
  },
  {
    capability: 'AI Product Craft',
    proof: 'Delivered GPU queues, OCR workflows, and AI-enabled product features in production.',
    chapter: 'Compact Machines, AILA, siParadigm',
  },
  {
    capability: 'Cross-surface Delivery',
    proof: 'Built cohesive systems across web, mobile, desktop, and cloud operations.',
    chapter: 'AILA, siParadigm, Alachisoft',
  },
  {
    capability: 'Execution Architecture',
    proof: 'Created release loops, quality standards, and team practices that improved delivery confidence.',
    chapter: 'Compact Machines, AILA',
  },
]

export default function About() {
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
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-secondary-background">
        <CardHeader className="border-b border-border">
          <div className="flex flex-wrap gap-2">
            <Badge>Mission</Badge>
            <Badge variant="neutral">Mindset</Badge>
            <Badge variant="neutral">Proof</Badge>
          </div>
          <CardTitle className="text-3xl sm:text-4xl">About: Mission, Mindset, and Method</CardTitle>
          <CardDescription className="max-w-3xl text-base sm:text-lg">
            I am driven by one question: how do we turn complex ideas into software systems people
            can trust, scale, and build on confidently?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-8">
          <div className="space-y-4 text-base sm:text-lg">
            <p>
              My path started in distributed systems engineering and evolved into end-to-end
              product-system design. The constant has been translating ambiguity into execution.
            </p>
            <p>
              I work where architecture, delivery, and product outcomes overlap: defining direction,
              shaping systems, and helping teams sustain momentum over time.
            </p>
          </div>

          <Tabs defaultValue="mission">
            <TabsList className="grid h-auto w-full grid-cols-3 gap-2">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="method">Method</TabsTrigger>
              <TabsTrigger value="mindset">Mindset</TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <Alert className="bg-main text-main-foreground">
                <Layers3 />
                <AlertTitle>What I optimize for</AlertTitle>
                <AlertDescription>
                  Product systems that are legible to teams, resilient in production,
                  and directly tied to user and business outcomes.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="method">
              <Alert className="bg-main text-main-foreground">
                <Layers3 />
                <AlertTitle>How I work</AlertTitle>
                <AlertDescription>
                  Convert vision into executable architecture, then support it with delivery loops,
                  quality mechanisms, and communication that keeps everyone aligned.
                </AlertDescription>
              </Alert>
            </TabsContent>
            <TabsContent value="mindset">
              <Alert className="bg-main text-main-foreground">
                <Layers3 />
                <AlertTitle>Guiding belief</AlertTitle>
                <AlertDescription>
                  Strong software is not accidental. It is an operating system of decisions,
                  habits, and standards reinforced over time.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Capability mapped to proof</h2>
          <p className="mt-2 text-sm sm:text-base">
            Evidence from real builds, not abstract claims.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Capability</TableHead>
              <TableHead>How it shows up</TableHead>
              <TableHead>Where it was proven</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {capabilityProof.map((row) => {
              return (
                <TableRow key={row.capability}>
                  <TableCell className="font-heading">{row.capability}</TableCell>
                  <TableCell>{row.proof}</TableCell>
                  <TableCell>{row.chapter}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Build chapters</h2>
          <p className="mt-2 text-sm sm:text-base">
            Progression from deep implementation to system-level product orchestration.
          </p>
        </div>

        <div className="grid gap-8">
          {PAST_ROLES.map((role) => {
            return (
              <Card className="bg-secondary-background" key={`${role.company}-${role.role}`}>
                <CardHeader className="border-b border-border">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl">
                        {role.role} · {role.company}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {role.startDate} - {role.endDate}
                      </CardDescription>
                    </div>
                    <Badge variant="neutral">Proof chapter</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 pt-6 text-sm sm:text-base">
                  <p>{role.description}</p>
                  <ul className="list-disc space-y-2 pl-5">
                    {role.highlights.map((highlight) => {
                      return <li key={highlight}>{highlight}</li>
                    })}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Technology fluency</h2>
          <p className="mt-2 text-sm sm:text-base">
            Tools are instruments. The goal is always better systems and better outcomes.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {SKILLS.map((group) => {
            return (
              <Card className="bg-secondary-background" key={group.field}>
                <CardHeader className="border-b border-border">
                  <CardTitle className="text-xl">{group.field}</CardTitle>
                  <CardDescription>
                    Production-proven stack choices used to support mission-level product goals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-6">
                  {group.skills.map((skill) => {
                    return (
                      <Badge key={skill.skill} variant="neutral">
                        {skill.skill}
                      </Badge>
                    )
                  })}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-heading sm:text-3xl">Academic foundation</h2>
          <p className="mt-2 text-sm sm:text-base">
            Formal training that shaped my systems and software engineering fundamentals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {EDUCATION.map((item) => {
            return (
              <Card className="bg-secondary-background" key={`${item.degree}-${item.year}`}>
                <CardHeader className="border-b border-border">
                  <CardTitle>{item.degree}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Badge variant="neutral">{item.year}</Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </div>
  )
}
