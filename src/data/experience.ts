const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  highlights: string[]
}[] = [
  {
    company: 'Compact Machines',
    role: 'Engineering Strategy and Product Systems',
    description:
      'Shaping HudLink as an AI-powered due diligence platform where product intent, system architecture, and delivery reliability move as one operating model.',
    startDate: 'October 2025',
    endDate: 'Present',
    highlights: [
      'Defined a modular architecture strategy for cloud-native web and AI services that accelerated roadmap execution.',
      'Built queue-driven GPU processing pipelines across AWS, GCP, and on-prem environments for resilient AI throughput.',
      'Led hands-on implementation, review quality, and CI/CD patterns to increase shipping confidence.',
      'Aligned product goals, technical direction, and team rituals into a repeatable execution system.',
    ],
  },
  {
    company: 'AILA',
    role: 'Product and Platform Architect',
    description:
      'Built AILA into a multi-surface product platform by combining scalable architecture, AI-enabled workflows, and disciplined product execution.',
    startDate: 'April 2024',
    endDate: 'September 2025',
    highlights: [
      'Architected a microservices platform with NestJS, MySQL, MongoDB, and Docker for secure growth.',
      'Delivered web, mobile, and desktop experiences with AI-assisted flows using LangChain and Electron.',
      'Integrated OCR, review systems, payments, RBAC, and cloud infrastructure on AWS into one cohesive product.',
      'Created a reliable engineering cadence with standards, CI/CD via Jenkins, and structured mentorship loops.',
    ],
  },
  {
    company: 'siParadigm',
    role: 'Senior Software Engineer, Frontend Systems',
    description:
      'Drove frontend systems architecture and full-stack execution for digital pathology products with precision-first medical workflows.',
    startDate: 'February 2022',
    endDate: 'April 2024',
    highlights: [
      'Built high-performance applications using React, Redux, RTK Query, React Native, and ASP.NET.',
      'Engineered large-image annotation and OCR review systems for clinically complex scenarios.',
      'Introduced monorepo and microfrontend patterns to modernize legacy systems incrementally.',
      'Mentored teams on scalable frontend architecture and dependable API integration practices.',
    ],
  },
  {
    company: 'Alachisoft',
    role: 'Software Engineer, Distributed Systems',
    description:
      'Contributed to distributed caching products and cloud tooling where low latency, interoperability, and operational reliability were critical.',
    startDate: 'July 2018',
    endDate: 'October 2020',
    highlights: [
      'Contributed to NCache, a distributed caching platform for high-throughput .NET workloads.',
      'Built cloud management, monitoring, and administration tooling with ASP.NET Core, Angular, C#, and jQuery.',
      'Extended Java-side tooling and custom serialization layers for deep .NET and Java interoperability.',
      'Enhanced publisher-subscriber behavior and automated operations with PowerShell.',
    ],
  },
]

export default PAST_ROLES
