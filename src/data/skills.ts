import {
    SiDocker,
    SiDotnet,
    SiElectron,
    SiGooglecloud,
    SiJavascript,
    SiJenkins,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRedux,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVite,
} from '@icons-pack/react-simple-icons';
import { Cloud } from 'lucide-react';
import type { ComponentType } from 'react';

type SkillIcon = ComponentType<{ className?: string; title?: string }>

const SKILLS: { field: string; skills: { skill: string; icon: SkillIcon }[] }[] =
  [
    {
      field: 'Frontend Craft',
      skills: [
        { skill: 'TypeScript', icon: SiTypescript },
        { skill: 'JavaScript', icon: SiJavascript },
        { skill: 'React', icon: SiReact },
        { skill: 'Next.js', icon: SiNextdotjs },
        { skill: 'Redux', icon: SiRedux },
        { skill: 'Tailwind CSS', icon: SiTailwindcss },
        { skill: 'Vite', icon: SiVite },
        { skill: 'Electron', icon: SiElectron },
      ],
    },
    {
      field: 'Backend Systems',
      skills: [
        {
          skill: 'Node.js',
          icon: SiNodedotjs,
        },
        {
          skill: 'NestJS',
          icon: SiNestjs,
        },
        {
          skill: '.NET',
          icon: SiDotnet,
        },
        {
          skill: 'MongoDB',
          icon: SiMongodb,
        },
        {
          skill: 'MySQL',
          icon: SiMysql,
        },
        {
          skill: 'Docker',
          icon: SiDocker,
        },
      ],
    },
    {
      field: 'Cloud and Automation',
      skills: [
        {
          skill: 'AWS',
          icon: Cloud,
        },
        {
          skill: 'Google Cloud',
          icon: SiGooglecloud,
        },
        {
          skill: 'Jenkins',
          icon: SiJenkins,
        },
        {
          skill: 'Stripe',
          icon: SiStripe,
        },
      ],
    },
  ]

export default SKILLS
