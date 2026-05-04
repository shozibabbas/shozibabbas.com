import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import CaseStudyCard from '@/components/CaseStudyCard'
import WorkImageLightbox from '@/components/work-image-lightbox'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata({
  title: 'Work',
  description:
    'Selected work by Sayyed Shozib Abbas across digital signage, AI due diligence, healthcare systems, education platforms, and full-stack product engineering.',
  path: '/work',
})

// ─── Case study data ──────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: 'aila',
    label: 'AILA Platform',
    tagline: 'Multi-platform education system',
    domain: 'Education · EdTech',
    period: 'AILA · Apr 2024 – Dec 2025',
    problem:
      'An education organization needed a unified system that worked consistently across web, desktop, and mobile — with different interfaces for students, teachers, and administrators, all backed by the same data layer.',
    solution:
      'Built a full product ecosystem with shared backend services and platform-specific frontends. Students access content on web and mobile; administrators manage everything from a desktop app. All platforms share a single API layer and database, keeping data consistent across every surface.',
    built: [
      'Web application for student learning and content delivery',
      'Electron-based desktop application for administrators',
      'React Native mobile app for students on iOS and Android',
      'Shared NestJS backend with role-based access control',
      'AI-driven study tools and automated academic support workflows',
    ],
    tech: ['React', 'Electron', 'React Native', 'NestJS', 'MongoDB', 'AWS'],
    outcomes: [
      'Single codebase approach reduced cross-platform inconsistencies',
      'Unified backend made feature rollouts simultaneous across platforms',
      'Student engagement metrics improved after mobile launch',
    ],
    screenshot: '/work/aila-cover.png',
    ui: 'aila',
  },
  {
    id: 'pathology',
    label: 'Digital Pathology Suite',
    tagline: 'Clinical workflow system for pathology operations',
    domain: 'Healthcare · Clinical',
    period: 'siParadigm · Feb 2022 – Apr 2024',
    problem:
      'Pathology labs were running fragmented workflows across disconnected systems — sample tracking, image annotation, report generation, and case assignment were all handled separately, creating delays and errors in clinical operations.',
    solution:
      'Built a unified clinical workflow platform that connects sample intake, digital slide viewing, automated image processing, and report generation in a single system. Designed for high reliability and precision — errors in clinical software have direct consequences.',
    built: [
      'High-reliability sample tracking and case management system',
      'Digital slide viewer with annotation tools for pathologists',
      'Automated image processing pipeline with AI-assisted analysis',
      'Report generation workflows with structured output and audit trails',
      'Role-based access for lab staff, pathologists, and administrators',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Docker', 'AWS', 'WebSockets'],
    outcomes: [
      'Case turnaround time reduced significantly across lab operations',
      'Eliminated manual handoffs between disconnected systems',
      'System deployed in production without downtime incidents',
    ],
    screenshot: '/work/pathology-cover.jpg',
    ui: 'pathology',
  },
]

const capabilities = [
  {
    title: 'Building complex systems end-to-end',
    description:
      'From data modelling to deployed product — I handle the full stack without handoff gaps.',
  },
  {
    title: 'Designing scalable architectures',
    description:
      'Systems built to handle growth from day one. Not patched later when things break.',
  },
  {
    title: 'Creating high-performance applications',
    description:
      'Fast load times, efficient data fetching, and UIs that hold up under real usage.',
  },
  {
    title: 'Handling real-world product challenges',
    description:
      'Multi-platform systems, clinical-grade reliability, AI pipelines — products that have real consequences.',
  },
]

// ─── Mock UI panels ───────────────────────────────────────────────────────────

function HudLinkUI() {
  const metrics = [
    { label: 'Deals Reviewed', value: '284', delta: '+18%' },
    { label: 'Avg Score', value: '74.2', delta: '+5pts' },
    { label: 'Pipeline Value', value: '$4.1B', delta: '' },
    { label: 'Active Analyses', value: '12', delta: '' },
  ]
  const deals = [
    { name: 'Veridian Capital', stage: 'Due Diligence', score: 81, flag: false },
    { name: 'Arctos Group', stage: 'Initial Review', score: 63, flag: true },
    { name: 'Nexar Ventures', stage: 'Final Report', score: 91, flag: false },
    { name: 'Brightline Partners', stage: 'Due Diligence', score: 74, flag: false },
  ]
  return (
    <div className="space-y-3 rounded-xl border border-foreground/10 bg-secondary-background p-5 text-[11px]">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/40">Deal Pipeline · Q2 2024</p>
        <span className="rounded-full bg-main/15 px-2 py-0.5 text-[9px] font-medium text-main">Live</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-foreground/10 bg-background/40 p-2.5">
            <p className="text-[9px] text-foreground/40">{m.label}</p>
            <p className="font-heading text-sm font-bold">{m.value}</p>
            {m.delta && <p className="text-[9px] text-main">{m.delta}</p>}
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <div className="grid grid-cols-4 text-[9px] font-medium uppercase text-foreground/30">
          <span className="col-span-2">Company</span>
          <span>Stage</span>
          <span className="text-right">Score</span>
        </div>
        {deals.map((d) => (
          <div key={d.name} className="grid grid-cols-4 border-t border-foreground/5 py-1.5">
            <span className="col-span-2 flex items-center gap-1.5 font-medium text-foreground/80">
              {d.flag && <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />}
              {!d.flag && <span className="h-1.5 w-1.5 rounded-full bg-main/50" />}
              {d.name}
            </span>
            <span className="text-foreground/50">{d.stage}</span>
            <span className={`text-right font-medium ${d.score >= 80 ? 'text-main' : d.score < 70 ? 'text-yellow-400' : 'text-foreground/60'}`}>
              {d.score}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AILAUi() {
  const courses = [
    { name: 'Advanced Mathematics', progress: 72, students: 340 },
    { name: 'Physics — Module 4', progress: 55, students: 218 },
    { name: 'English Literature', progress: 91, students: 187 },
  ]
  const activity = [
    { user: 'student_291', action: 'Completed quiz', time: '2m ago' },
    { user: 'student_104', action: 'Submitted assignment', time: '5m ago' },
    { user: 'student_558', action: 'Started new module', time: '9m ago' },
    { user: 'student_073', action: 'Asked AI tutor', time: '12m ago' },
  ]
  return (
    <div className="space-y-3 rounded-xl border border-foreground/10 bg-secondary-background p-5 text-[11px]">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/40">Admin Panel · Course Overview</p>
        <span className="rounded-full bg-main/15 px-2 py-0.5 text-[9px] font-medium text-main">745 Online</span>
      </div>
      <div className="space-y-2">
        {courses.map((c) => (
          <div key={c.name} className="rounded-lg border border-foreground/10 bg-background/40 p-2.5">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-medium text-foreground/80">{c.name}</span>
              <span className="text-[9px] text-foreground/40">{c.students} students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/10">
                <div className="h-full rounded-full bg-main/70" style={{ width: `${c.progress}%` }} />
              </div>
              <span className="text-[9px] text-foreground/40">{c.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5">
        <p className="text-[9px] font-medium uppercase tracking-wider text-foreground/30">Recent Activity</p>
        {activity.map((a) => (
          <div key={a.user} className="flex items-center justify-between border-t border-foreground/5 py-1">
            <span className="text-foreground/50">{a.action}</span>
            <span className="text-[9px] text-foreground/30">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PathologyUI() {
  const cases = [
    { id: 'CASE-4821', tissue: 'Lung biopsy', status: 'Pending Review', priority: 'High' },
    { id: 'CASE-4820', tissue: 'Skin lesion', status: 'In Analysis', priority: 'Normal' },
    { id: 'CASE-4819', tissue: 'Colon tissue', status: 'Report Ready', priority: 'Normal' },
    { id: 'CASE-4818', tissue: 'Lymph node', status: 'Archived', priority: 'Normal' },
  ]
  const services = [
    { name: 'Image Processor', ok: true },
    { name: 'AI Analysis Engine', ok: true },
    { name: 'DICOM Server', ok: true },
    { name: 'Audit Logger', ok: true },
    { name: 'Report Generator', ok: false },
  ]
  return (
    <div className="space-y-3 rounded-xl border border-foreground/10 bg-secondary-background p-5 text-[11px]">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/40">Pathology Workflow · Lab Dashboard</p>
        <span className="rounded-full border border-foreground/10 px-2 py-0.5 text-[9px] text-foreground/50">Dr. S. Abbas</span>
      </div>
      <div className="space-y-1.5">
        <div className="grid grid-cols-4 text-[9px] font-medium uppercase text-foreground/30">
          <span>Case ID</span>
          <span>Tissue Type</span>
          <span>Status</span>
          <span className="text-right">Priority</span>
        </div>
        {cases.map((c) => (
          <div key={c.id} className="grid grid-cols-4 border-t border-foreground/5 py-1.5 text-[10px]">
            <span className="font-mono text-foreground/60">{c.id}</span>
            <span className="text-foreground/70">{c.tissue}</span>
            <span className={`${c.status === 'Report Ready' ? 'text-main' : c.status === 'Pending Review' ? 'text-yellow-400' : 'text-foreground/50'}`}>
              {c.status}
            </span>
            <span className={`text-right ${c.priority === 'High' ? 'font-medium text-red-400' : 'text-foreground/30'}`}>
              {c.priority}
            </span>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 border-t border-foreground/10 pt-2">
        <p className="text-[9px] font-medium uppercase tracking-wider text-foreground/30">System Health</p>
        {services.map((s) => (
          <div key={s.name} className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${s.ok ? 'bg-main' : 'bg-yellow-400'}`} />
              <span className="text-foreground/60">{s.name}</span>
            </div>
            <span className={`text-[9px] ${s.ok ? 'text-main' : 'text-yellow-400'}`}>{s.ok ? 'Operational' : 'Degraded'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual proof panels ──────────────────────────────────────────────────────

const barData = [32, 48, 42, 61, 55, 70, 78, 65, 84, 79, 92, 96]
const barMonths = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

const tableSample = [
  { name: 'Acme Corp', plan: 'Enterprise', mrr: '$4,200', status: 'Active' },
  { name: 'TechFlow', plan: 'Pro', mrr: '$890', status: 'Active' },
  { name: 'Skyline', plan: 'Starter', mrr: '$190', status: 'Trial' },
  { name: 'NovaLabs', plan: 'Enterprise', mrr: '$4,200', status: 'Active' },
]

const sprintTasks = [
  { task: 'Auth module', pct: 100 },
  { task: 'Dashboard UI', pct: 78 },
  { task: 'API layer', pct: 55 },
  { task: 'Reporting', pct: 30 },
  { task: 'Mobile views', pct: 12 },
]

const topMetrics = [
  { label: 'MRR', value: '$128K', delta: '+22%' },
  { label: 'Users', value: '3,941', delta: '+31%' },
  { label: 'Uptime', value: '99.97%', delta: '' },
  { label: 'Churn', value: '1.1%', delta: '-0.4%' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Work() {
  return (
    <div className="space-y-24 sm:space-y-32">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="space-y-5 pt-4">
        <p className="text-sm font-medium text-main">Selected work</p>
        <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-[3.25rem]">
          Real systems built across AI,<br className="hidden sm:block" /> healthcare, and education.
        </h1>
        <p className="max-w-2xl text-base text-foreground/65 sm:text-lg">
          Focused on building products that are reliable, scalable, and used in real environments.
          Each project below is a system I designed and built end-to-end.
        </p>
        <a
          href="https://calendly.com/shozibabbas/30min"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border-2 border-border bg-main px-6 py-3 text-sm font-medium text-main-foreground shadow-shadow transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
        >
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

      {/* ── Case studies ────────────────────────────────────────────────── */}
      <section className="space-y-16">
        <CaseStudyCard
          title="VertBoard — Digital Signage & Ad Marketplace Platform"
          subtitle="Full-scale SaaS platform for managing screens, scheduling content, and monetizing ad inventory"
          problem={
            <>
              <p>
                Businesses with digital screens (TVs, billboards, vehicles) struggle to:
              </p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Manage content across multiple locations</li>
                <li className="list-disc">Schedule playlists efficiently</li>
                <li className="list-disc">Monetize unused screen time</li>
              </ul>
              <p>
                At the same time, advertisers lack access to a unified platform to run targeted campaigns on physical screens.
              </p>
            </>
          }
          solution={
            <>
              <p>Built a full-stack platform that combines:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Digital signage management</li>
                <li className="list-disc">Ad marketplace</li>
                <li className="list-disc">Campaign targeting and analytics</li>
              </ul>
              <p>
                The system allows screen owners to control content and generate revenue, while advertisers can run targeted campaigns across a distributed network.
              </p>
            </>
          }
          build={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Multi-tenant SaaS platform</li>
              <li className="list-disc">Playlist and scheduling engine</li>
              <li className="list-disc">Ad slot monetization system</li>
              <li className="list-disc">Campaign creation and targeting system</li>
              <li className="list-disc">Real-time analytics dashboards</li>
              <li className="list-disc">Wallet and transaction system</li>
              <li className="list-disc">Location-based targeting system</li>
            </ul>
          }
          tech={
            <>
              <div>
                <p className="font-medium text-foreground/80">Frontend:</p>
                <ul className="pl-5">
                  <li className="list-disc">React / Next.js</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Backend:</p>
                <ul className="pl-5">
                  <li className="list-disc">Node.js / NestJS</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Database:</p>
                <ul className="pl-5">
                  <li className="list-disc">MySQL / Firestore</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Infrastructure:</p>
                <ul className="pl-5">
                  <li className="list-disc">Firebase / AWS</li>
                </ul>
              </div>
            </>
          }
          outcome={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Unified platform for screen management and monetization</li>
              <li className="list-disc">Enabled advertisers to run targeted campaigns</li>
              <li className="list-disc">Scalable system supporting multiple locations and screens</li>
              <li className="list-disc">Real-time analytics and reporting</li>
            </ul>
          }
          image="/images/vertboard.png"
        />

        <CaseStudyCard
          title="YouthClub Academy — Multi-Platform LMS Ecosystem"
          subtitle="End-to-end learning platform with role-based admin operations, scalable backend services, and cross-platform student experiences across web and mobile"
          problem={
            <>
              <p>YouthClub Academy needed a unified system to manage the full student lifecycle from discovery to learning, assessment, payments, and support.</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Fragmented experiences across admin, backend, and learner applications</li>
                <li className="list-disc">Secure delivery requirements for videos, files, external links, and assessments</li>
                <li className="list-disc">Role-specific workflows for Super Admin, Admin, Tutor, and Student</li>
                <li className="list-disc">Subscription and payment handling with both gateway and manual review paths</li>
                <li className="list-disc">Need for real-time visibility into enrollments, revenue, assessments, and support load</li>
              </ul>
            </>
          }
          solution={
            <>
              <p>Built a multi-repo LMS ecosystem composed of backend services, admin web operations, student mobile experiences, and browser-based learner access.</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">NestJS + Prisma + PostgreSQL backend with modular domains</li>
                <li className="list-disc">React + TypeScript + Vite admin app for operations and content workflows</li>
                <li className="list-disc">Expo React Native student app with persistent state and rich media support</li>
                <li className="list-disc">Cloud file delivery via AWS S3 and CloudFront signed access</li>
              </ul>
            </>
          }
          build={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Modular LMS backend covering auth, course, student, payment, subscription, support, and dashboards</li>
              <li className="list-disc">JWT auth, Google OAuth, forgot/reset flows, and secure signup + payment-proof path</li>
              <li className="list-disc">Course-topic-material hierarchy with material-level progress and assessment pipelines</li>
              <li className="list-disc">Admin dashboard for revenue, enrollment trends, subscription visibility, and ticket distribution</li>
              <li className="list-disc">Payment and support operations including reminders, triage workflows, and manual activation paths</li>
              <li className="list-disc">Student mobile + web parity for enrollment, learning progress, messaging, and payment actions</li>
              <li className="list-disc">Event-driven workflows, scheduled subscription hygiene jobs, and temp-file cleanup automation</li>
            </ul>
          }
          tech={
            <>
              <div>
                <p className="font-medium text-foreground/80">Admin / Student Web:</p>
                <ul className="pl-5">
                  <li className="list-disc">React 19, TypeScript, Vite, Tailwind CSS, Radix UI</li>
                  <li className="list-disc">Redux Toolkit + RTK Query, React Router</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Mobile:</p>
                <ul className="pl-5">
                  <li className="list-disc">React Native (Expo), Expo Router, AsyncStorage</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Backend:</p>
                <ul className="pl-5">
                  <li className="list-disc">NestJS, Prisma ORM, PostgreSQL, JWT, Joi config validation</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Infrastructure & Integrations:</p>
                <ul className="pl-5">
                  <li className="list-disc">AWS S3, CloudFront, Docker Compose, SMTP email</li>
                  <li className="list-disc">PayFast payment gateway, Google OAuth</li>
                </ul>
              </div>
            </>
          }
          outcome={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Delivered a production-ready LMS backbone across admin, backend, and student channels</li>
              <li className="list-disc">Enabled structured content delivery with robust progress tracking and assessment workflows</li>
              <li className="list-disc">Established monetization and subscription workflows with admin oversight and auditability</li>
              <li className="list-disc">Improved operational decision-making through a consolidated role-aware analytics dashboard</li>
              <li className="list-disc">Created a scalable foundation for future expansion of courses, instructors, and learners</li>
            </ul>
          }
          image="/images/yclms.png"
          imagePosition="left"
          imageSize="large"
        />

        <CaseStudyCard
          title="HudLink — AI-Powered Due Diligence Intelligence Platform"
          subtitle="Private AI infrastructure for transforming financial data into decision-ready intelligence"
          problem={
            <>
              <p>Due diligence in private markets is:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Manual and time-consuming</li>
                <li className="list-disc">Dependent on fragmented data rooms</li>
                <li className="list-disc">Prone to human error</li>
                <li className="list-disc">Limited by generic tools that lack domain intelligence</li>
              </ul>
              <p>At the same time, using public LLMs introduces serious risks:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Data leakage</li>
                <li className="list-disc">Lack of control</li>
                <li className="list-disc">No ownership of intelligence</li>
              </ul>
            </>
          }
          solution={
            <>
              <p>Built a private AI-powered platform that transforms raw data into structured, decision-ready intelligence.</p>
              <p>The system combines:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">AI-driven document understanding</li>
                <li className="list-disc">Structured workflows</li>
                <li className="list-disc">Proprietary intelligence models</li>
              </ul>
              <p>All running in a controlled environment where:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">No data is exposed to public LLMs</li>
                <li className="list-disc">Firms retain full ownership of their data and models</li>
              </ul>
            </>
          }
          build={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">End-to-end due diligence platform</li>
              <li className="list-disc">Data room ingestion and structuring system</li>
              <li className="list-disc">AI-powered analysis pipelines</li>
              <li className="list-disc">Risk detection and reporting engine</li>
              <li className="list-disc">Custom workflow systems for deal teams</li>
              <li className="list-disc">Scalable backend architecture for high-volume data</li>
            </ul>
          }
          highlightTitle="AI & Infrastructure"
          highlightContent={
            <>
              <p>Built around Small Language Models (SLMs) for:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Better control</li>
                <li className="list-disc">Lower latency</li>
                <li className="list-disc">Domain-specific intelligence</li>
              </ul>
              <p>Designed with data sovereignty as a core principle:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Zero reliance on public LLM APIs</li>
                <li className="list-disc">Fully controlled AI environment</li>
              </ul>
              <p>Integrated private model training pipelines:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Models adapt to firm-specific workflows</li>
                <li className="list-disc">Compounding intelligence over time</li>
              </ul>
              <p>Developed intelligence infrastructure layer (Compact Machines):</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Foundation for building custom AI workflows</li>
                <li className="list-disc">Extensible system beyond a single application</li>
              </ul>
            </>
          }
          tech={
            <>
              <div>
                <p className="font-medium text-foreground/80">Frontend:</p>
                <ul className="pl-5">
                  <li className="list-disc">React / Next.js</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Backend:</p>
                <ul className="pl-5">
                  <li className="list-disc">Node.js / NestJS</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">AI Layer:</p>
                <ul className="pl-5">
                  <li className="list-disc">Small Language Models (SLMs)</li>
                  <li className="list-disc">Custom AI pipelines</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Infrastructure:</p>
                <ul className="pl-5">
                  <li className="list-disc">Cloud + private compute environments</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Database:</p>
                <ul className="pl-5">
                  <li className="list-disc">Scalable data systems</li>
                </ul>
              </div>
            </>
          }
          outcome={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Eliminated weeks of manual due diligence work</li>
              <li className="list-disc">Enabled faster, more reliable decision-making</li>
              <li className="list-disc">Maintained full data privacy and control</li>
              <li className="list-disc">Created a scalable intelligence system for private markets</li>
            </ul>
          }
          image="/images/hudlink.png"
          imagePosition="left"
          imageSize="large"
        />

        <CaseStudyCard
          title="BabyDay — Smart Baby Care & Health Tracking Platform"
          subtitle="Mobile parenting companion that delivers trusted baby care guidance, practical tools, and doctor support in one app"
          problem={
            <>
              <p>Parents struggle to:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Track feeding, sleep, diaper changes, and symptom history consistently on mobile</li>
                <li className="list-disc">Get trusted, contextual guidance without jumping across fragmented apps and blogs</li>
                <li className="list-disc">Reach pediatric doctors quickly when they need support on urgent concerns</li>
                <li className="list-disc">Manage routines, medication, and appointment reminders without missing critical events</li>
              </ul>
              <p>
                Most solutions handle only one part of the journey, but parents need one reliable system that combines care tracking, expert guidance, and medical communication.
              </p>
            </>
          }
          solution={
            <>
              <p>Built a mobile-first platform that allows parents to:</p>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">Track baby activity in real time with low-friction logging flows</li>
                <li className="list-disc">Access trusted baby care guidance tailored to age and development stage</li>
                <li className="list-disc">Connect with doctors through in-app support flows</li>
                <li className="list-disc">Receive reminders and actionable care insights generated from activity patterns</li>
              </ul>
              <p>
                The app unifies tracking, guidance, and doctor support into one continuous parenting experience.
              </p>
            </>
          }
          build={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Cross-platform mobile experience for daily baby care workflows</li>
              <li className="list-disc">Structured activity tracker for feeding, sleep, diaper, and wellness events</li>
              <li className="list-disc">Guidance modules with medically reviewed tips and contextual recommendations</li>
              <li className="list-disc">Doctor support and consultation workflows for real-time parent assistance</li>
              <li className="list-disc">Reminder engine for routines, medication, and appointment adherence</li>
              <li className="list-disc">Secure identity, subscription, and family profile management</li>
            </ul>
          }
          tech={
            <>
              <div>
                <p className="font-medium text-foreground/80">Frontend:</p>
                <ul className="pl-5">
                  <li className="list-disc">React / Next.js</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Backend:</p>
                <ul className="pl-5">
                  <li className="list-disc">Node.js</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Database:</p>
                <ul className="pl-5">
                  <li className="list-disc">Scalable data layer for activity timelines and health events</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-foreground/80">Infrastructure:</p>
                <ul className="pl-5">
                  <li className="list-disc">Cloud-based architecture with secure API and notification services</li>
                </ul>
              </div>
            </>
          }
          outcome={
            <ul className="space-y-2 pl-5">
              <li className="list-disc">Unified mobile companion for day-to-day baby care management</li>
              <li className="list-disc">Higher parent confidence through trusted guidance and clearer activity visibility</li>
              <li className="list-disc">Fast doctor support channel embedded directly in the app journey</li>
              <li className="list-disc">Scalable consumer health-tech foundation ready for user growth</li>
            </ul>
          }
          image="/images/babyday/dark-1.jpeg"
          imageGallery={[
            {
              label: 'Dark mode screens',
              images: [
                '/images/babyday/dark-1.jpeg',
                '/images/babyday/dark-2.jpeg',
                '/images/babyday/dark-3.jpeg',
                '/images/babyday/dark-4.jpeg',
                '/images/babyday/dark-5.jpeg',
                '/images/babyday/dark-6.jpeg',
              ],
            },
            {
              label: 'Light mode screens',
              images: [
                '/images/babyday/light/light-1.jpeg',
                '/images/babyday/light/light-2.jpeg',
                '/images/babyday/light/light-3.jpeg',
                '/images/babyday/light/light-4.jpeg',
                '/images/babyday/light/light-5.jpeg',
                '/images/babyday/light/light-6.jpeg',
              ],
            },
          ]}
          imagePosition="right"
          imageSize="large"
        />

        {caseStudies.map((cs, idx) => (
          <div
            key={cs.id}
            className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 sm:p-10"
          >
            {/* Header */}
            <div className="mb-8 flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-foreground/15 px-3 py-0.5 text-xs text-foreground/50">
                    {cs.domain}
                  </span>
                  <span className="text-xs text-foreground/35">{cs.period}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl">{cs.label}</h2>
                <p className="text-sm text-foreground/55">{cs.tagline}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 font-heading text-sm text-foreground/30">
                0{idx + 1}
              </span>
            </div>

            {/* Problem / Solution */}
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-widest text-main">Problem</p>
                <p className="text-sm leading-relaxed text-foreground/70">{cs.problem}</p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-medium uppercase tracking-widest text-main">Solution</p>
                <p className="text-sm leading-relaxed text-foreground/70">{cs.solution}</p>
              </div>
            </div>

            {/* What I Built + Screenshot */}
            <div className="mb-8 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="text-[11px] font-medium uppercase tracking-widest text-main">What I Built</p>
                <ul className="space-y-2.5">
                  {cs.built.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-main/70" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-foreground/15 px-2.5 py-1 text-[11px] font-medium text-foreground/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <WorkImageLightbox
                src={cs.screenshot}
                alt={`${cs.label} screenshot`}
                width={800}
                height={500}
                loading="lazy"
                previewHeightClass="h-56 sm:h-64"
              />
            </div>

            {/* Outcomes */}
            <div className="rounded-xl border border-foreground/10 bg-background/30 p-5">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-main">Outcomes</p>
              <div className="grid gap-2 sm:grid-cols-3">
                {cs.outcomes.map((o) => (
                  <div key={o} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-main/15 text-[9px] font-bold text-main">
                      ✓
                    </span>
                    {o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Visual proof grid ────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">What the interfaces look like</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Clean, data-dense UIs built for real workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Top metrics */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">Platform metrics</p>
            <div className="grid grid-cols-2 gap-3">
              {topMetrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-foreground/10 bg-background/40 p-3">
                  <p className="text-[9px] text-foreground/40">{m.label}</p>
                  <p className="font-heading text-sm font-bold">{m.value}</p>
                  {m.delta && <p className="text-[9px] text-main">{m.delta}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">Monthly revenue</p>
            <div className="flex h-28 items-end gap-1">
              {barData.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-main/50 transition-all hover:bg-main/90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[8px] text-foreground/25">
              {barMonths.map((m) => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Customer table */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">Account list</p>
            <div className="space-y-1.5">
              <div className="grid grid-cols-4 text-[9px] font-medium uppercase text-foreground/30">
                <span className="col-span-2">Company</span>
                <span>MRR</span>
                <span className="text-right">Status</span>
              </div>
              {tableSample.map((r) => (
                <div key={r.name} className="grid grid-cols-4 border-t border-foreground/5 py-1.5 text-[10px]">
                  <span className="col-span-2 font-medium text-foreground/80">{r.name}</span>
                  <span className="text-foreground/50">{r.mrr}</span>
                  <span className={`text-right text-[9px] font-medium ${r.status === 'Active' ? 'text-main' : r.status === 'Trial' ? 'text-yellow-400' : 'text-foreground/40'}`}>
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sprint tracker */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">Sprint progress</p>
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

          {/* System status */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">System health</p>
            <div className="space-y-2.5">
              {[
                { name: 'API Gateway', uptime: '99.98%', ok: true },
                { name: 'Database cluster', uptime: '99.95%', ok: true },
                { name: 'Worker queue', uptime: '99.91%', ok: true },
                { name: 'File storage', uptime: '100%', ok: true },
                { name: 'Email service', uptime: '97.8%', ok: false },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${s.ok ? 'bg-main' : 'bg-yellow-400'}`} />
                    <span className="text-[11px] text-foreground/70">{s.name}</span>
                  </div>
                  <span className="text-[10px] text-foreground/40">{s.uptime}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form / settings panel */}
          <div className="rounded-xl border border-foreground/10 bg-secondary-background p-5">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-wider text-foreground/40">User settings</p>
            <div className="space-y-3">
              {[
                { label: 'Display name', value: 'Alex Mercer' },
                { label: 'Email', value: 'alex@company.com' },
                { label: 'Role', value: 'Admin' },
              ].map((f) => (
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
        </div>
      </section>

      {/* ── Key capabilities ─────────────────────────────────────────────── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl">What this work demonstrates</h2>
          <p className="text-sm text-foreground/60 sm:text-base">
            Consistent patterns across every project.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className="group flex items-start gap-4 rounded-xl border border-foreground/10 bg-secondary-background p-6 transition-all hover:-translate-y-0.5 hover:border-main/30 hover:shadow-shadow"
            >
              <span className="font-heading text-2xl font-bold text-main/30 transition-colors group-hover:text-main">
                0{i + 1}
              </span>
              <div className="space-y-1">
                <p className="font-heading text-base">{c.title}</p>
                <p className="text-sm text-foreground/60">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How this helps you ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-foreground/10 bg-secondary-background p-8 sm:p-10">
        <p className="mb-3 text-sm font-medium text-main">How this translates to your project</p>
        <p className="max-w-2xl text-base text-foreground/80 sm:text-lg">
          I can help you design and build systems like these — whether it&apos;s a SaaS platform,
          internal tool, or data-heavy dashboard. I work best on projects where there&apos;s a real
          product to build and real users who depend on it.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-main transition-opacity hover:opacity-75"
        >
          See how to get in touch →
        </Link>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="rounded-2xl bg-main p-10 text-center sm:p-16">
        <p className="mb-3 text-sm font-medium text-main-foreground/70">Ready to build?</p>
        <h2 className="mb-4 font-heading text-3xl text-main-foreground sm:text-4xl">
          Need something like this built?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-main-foreground/70 sm:text-base">
          Tell me what you&apos;re building. I&apos;ll tell you clearly whether I can help and what that looks like.
        </p>
        <a
          href="https://calendly.com/shozibabbas/30min"
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border-2 border-main-foreground/20 bg-main-foreground/10 px-8 py-3 text-sm font-medium text-main-foreground transition-all hover:bg-main-foreground/20"
        >
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>

    </div>
  )
}
