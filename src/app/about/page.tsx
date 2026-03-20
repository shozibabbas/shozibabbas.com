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
import EDUCATION from '@/data/education'
import PAST_ROLES from '@/data/experience'
import SKILLS from '@/data/skills'
import { Layers3 } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    title: 'Clarity over complexity',
    description: 'I keep teams focused on the few decisions that create the biggest business impact.',
  },
  {
    title: 'Execution over noise',
    description: 'I value consistent delivery habits more than one-time heroic effort.',
  },
  {
    title: 'Outcomes over outputs',
    description: 'The target is business progress, not just more features in production.',
  },
]

const capabilityProof = [
  {
    capability: 'Product direction',
    proof: 'Turned broad goals into delivery roadmaps that product and engineering could execute together.',
    chapter: 'Compact Machines, AILA',
  },
  {
    capability: 'Cross-functional delivery',
    proof: 'Led web, mobile, and desktop initiatives while keeping stakeholders aligned and informed.',
    chapter: 'AILA, siParadigm',
  },
  {
    capability: 'Operational reliability',
    proof: 'Improved release quality and team confidence through stronger delivery practices.',
    chapter: 'Compact Machines, AILA',
  },
  {
    capability: 'Domain adaptability',
    proof: 'Delivered successful programs across finance, education, healthcare, and platform tooling.',
    chapter: 'All major roles',
  },
]

const capabilityLabels: Record<string, string> = {
  'Frontend Craft': 'Customer-facing experiences',
  'Backend Systems': 'Business logic and operations',
  'Cloud and Automation': 'Scalability and reliability',
}

export default function About() {
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
            <BreadcrumbPage>About</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="bg-secondary-background">
        <CardHeader className="border-b border-border pb-6">
          <div className="flex flex-wrap gap-2">
            <Badge>About</Badge>
            <Badge variant="neutral">Values</Badge>
            <Badge variant="neutral">Track record</Badge>
          </div>
          <CardTitle className="text-4xl leading-tight sm:text-5xl">A practical builder for business-critical products</CardTitle>
          <CardDescription className="max-w-3xl text-base sm:text-lg">
            My work sits between strategy and delivery: helping teams decide what matters,
            execute it well, and keep improving as they grow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6 text-base sm:text-lg">
          <p>
            I started in engineering and expanded into product leadership. That journey taught me
            how to bridge business goals with day-to-day execution.
          </p>
          <p>
            Today, I help organizations move from complex plans to clear progress that customers and teams can feel.
          </p>
        </CardContent>
      </Card>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Working values</h2>
          <p className="max-w-2xl text-sm text-foreground/70 sm:text-base">
            The principles that shape how I lead projects and support teams.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <Card className="bg-secondary-background" key={value.title}>
              <CardHeader>
                <CardTitle className="text-xl">{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Capabilities and proof</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Evidence from shipped products and real delivery ownership.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Capability</TableHead>
              <TableHead>How it helped the business</TableHead>
              <TableHead>Where it was proven</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {capabilityProof.map((row) => (
              <TableRow key={row.capability}>
                <TableCell className="font-heading">{row.capability}</TableCell>
                <TableCell>{row.proof}</TableCell>
                <TableCell>{row.chapter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Career journey</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Key chapters that built my leadership style and delivery approach.
          </p>
        </div>

        <div className="grid gap-5">
          {PAST_ROLES.map((role) => (
            <Card className="bg-secondary-background" key={`${role.company}-${role.role}`}>
              <CardHeader className="border-b border-border">
                <CardTitle className="text-2xl">{role.role}</CardTitle>
                <CardDescription>
                  {role.company} · {role.startDate} - {role.endDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-5 text-sm sm:text-base">
                <p>{role.description}</p>
                <ul className="space-y-2">
                  {role.highlights.slice(0, 3).map((highlight) => (
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

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">What I can lead</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Technical strengths translated into business-facing value.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SKILLS.map((group) => (
            <Card className="bg-secondary-background" key={group.field}>
              <CardHeader className="border-b border-border">
                <CardTitle className="text-xl">{capabilityLabels[group.field] ?? group.field}</CardTitle>
                <CardDescription>{group.field}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 pt-5">
                {group.skills.map((skill) => (
                  <Badge key={skill.skill} variant="neutral">
                    {skill.skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl">Education</h2>
          <p className="text-sm text-foreground/70 sm:text-base">
            Academic foundation in software engineering and computer science.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {EDUCATION.map((item) => (
            <Card className="bg-secondary-background" key={`${item.degree}-${item.year}`}>
              <CardHeader className="border-b border-border">
                <CardTitle>{item.degree}</CardTitle>
                <CardDescription>{item.institution}</CardDescription>
              </CardHeader>
              <CardContent className="pt-5">
                <Badge variant="neutral">{item.year}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Alert className="bg-main text-main-foreground">
          <Layers3 />
          <AlertTitle>Built for business impact</AlertTitle>
          <AlertDescription>
            My goal is to help teams deliver faster, make better product decisions,
            and build systems that support long-term growth.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  )
}
