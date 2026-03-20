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
      'A due diligence product that helps teams evaluate opportunities faster with more confidence.',
    previewImage: '/work/hudlink-cover.png',
    focusAreas: ['AI systems', 'Cloud-native architecture', 'CI/CD', 'Full-stack delivery'],
    highlights: [
      'Led product and engineering delivery from strategy to production.',
      'Improved reliability and speed for high-volume analysis workflows.',
      'Set clearer delivery standards so teams could ship faster with fewer incidents.',
    ],
  },
  {
    name: 'AILA Platform',
    organization: 'AILA',
    timeframe: 'Apr 2024 - Sep 2025',
    description:
      'An education platform delivered across web, mobile, and desktop for better student and team experiences.',
    previewImage: '/work/aila-cover.png',
    focusAreas: ['Edtech', 'Electron', 'NestJS', 'AWS'],
    highlights: [
      'Owned delivery from concept to launch across multiple product surfaces.',
      'Unified core platform capabilities into one consistent user experience.',
      'Improved team delivery rhythm with clearer standards and release practices.',
    ],
  },
  {
    name: 'Digital Pathology Suite',
    organization: 'siParadigm',
    timeframe: 'Feb 2022 - Apr 2024',
    description:
      'A clinical product suite designed to improve workflow speed and accuracy in pathology operations.',
    previewImage: '/work/pathology-cover.jpg',
    focusAreas: ['React', 'React Native', 'ASP.NET', 'Microfrontends'],
    highlights: [
      'Delivered web and mobile experiences for high-context clinical teams.',
      'Improved operational accuracy through better image review workflows.',
      'Supported modernization efforts without disrupting live operations.',
    ],
  },
  {
    name: 'NCache Cloud Tooling',
    organization: 'Alachisoft',
    timeframe: 'Jul 2018 - Oct 2020',
    description:
      'Cloud tooling that helped teams monitor, manage, and scale distributed platform operations.',
    previewImage: '/work/ncache-cover.png',
    focusAreas: ['Distributed systems', '.NET', 'Java', 'Cloud tooling'],
    highlights: [
      'Contributed to a core platform used in high-demand production environments.',
      'Built management and monitoring tools for smoother cloud operations.',
      'Improved compatibility for teams working across different tech stacks.',
    ],
  },
]

export default PROJECTS
