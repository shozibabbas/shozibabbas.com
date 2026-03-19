import {
  FileText,
  Github,
  Linkedin,
  Mail,
  Phone,
  type LucideIcon,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Links() {
  const links: { icon: LucideIcon; href: string; label: string }[] = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shozibabbas/',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/shozibabbas',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:shozibabbas@gmail.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+923319849845',
      label: 'Call',
    },
    {
      icon: FileText,
      href: '/cv.pdf',
      label: 'Resume',
    },
  ]

  return (
    <Card className="gap-4 bg-secondary-background py-4">
      <CardHeader className="border-b border-border">
        <CardTitle className="text-xl sm:text-2xl">Build Together</CardTitle>
        <CardDescription>
          Open to ambitious product ideas, system design challenges, and collaborative builds.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          return (
            <Button asChild className="justify-start" key={link.label} variant="neutral">
              <a href={link.href} rel="noreferrer" target="_blank" title={link.label}>
                <link.icon className="h-4 w-4" />
                <span>{link.label}</span>
              </a>
            </Button>
          )
        })}
      </CardContent>
    </Card>
  )
}
