const PROJECTS: {
  name: string
  organization: string
  timeframe: string
  description: string
  previewImage: string
  focusAreas: string[]
  highlights: string[]
}[] = [
  {
    name: 'HudLink',
    organization: 'Compact Machines',
    timeframe: 'Oct 2025 - Present',
    description:
      'AI-powered due diligence platform engineered for enterprise-grade analysis workflows, reliability, and scale.',
    previewImage: '/work/hudlink-cover.png',
    focusAreas: ['AI systems', 'Cloud-native architecture', 'CI/CD', 'Full-stack delivery'],
    highlights: [
      'Led architecture and engineering execution for modular web and AI services.',
      'Delivered queue-based GPU processing pipelines across AWS, GCP, and on-prem environments.',
      'Standardized delivery and platform practices to support faster, safer releases.',
    ],
  },
  {
    name: 'AILA Platform',
    organization: 'AILA',
    timeframe: 'Apr 2024 - Sep 2025',
    description:
      'Multi-surface academic platform spanning web, mobile, and desktop with AI-assisted workflows and secure operations.',
    previewImage: '/work/aila-cover.png',
    focusAreas: ['Edtech', 'Electron', 'NestJS', 'AWS'],
    highlights: [
      'Owned end-to-end product delivery from concept through production launch.',
      'Integrated AI workflows, payments, identity, and cloud infrastructure into a cohesive platform.',
      'Established engineering standards, CI/CD, and architecture documentation for scale.',
    ],
  },
  {
    name: 'Digital Pathology Suite',
    organization: 'siParadigm',
    timeframe: 'Feb 2022 - Apr 2024',
    description:
      'Enterprise pathology software for image-intensive medical workflows, annotation precision, and modernized clinical interfaces.',
    previewImage: '/work/pathology-cover.jpg',
    focusAreas: ['React', 'React Native', 'ASP.NET', 'Microfrontends'],
    highlights: [
      'Built high-performance web and mobile experiences for complex clinical workflows.',
      'Engineered large-image annotation and OCR review tooling for operational accuracy.',
      'Introduced monorepo and microfrontend patterns to modernize legacy systems incrementally.',
    ],
  },
  {
    name: 'NCache Cloud Tooling',
    organization: 'Alachisoft',
    timeframe: 'Jul 2018 - Oct 2020',
    description:
      'Cloud management and diagnostics tooling for distributed caching systems optimized for low latency and reliability.',
    previewImage: '/work/ncache-cover.png',
    focusAreas: ['Distributed systems', '.NET', 'Java', 'Cloud tooling'],
    highlights: [
      'Contributed to core distributed caching engineering for high-throughput workloads.',
      'Built provisioning, monitoring, and cluster management tooling for cloud deployments.',
      'Improved cross-platform interoperability between .NET and Java clients.',
    ],
  },
]

export default PROJECTS
