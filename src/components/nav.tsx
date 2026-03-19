'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import clsx from 'clsx'
import { ArrowUpRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  const links = [
    {
      path: '/',
      text: 'Home',
    },
    {
      path: '/about',
      text: 'About',
    },
    {
      path: '/work',
      text: 'Work',
    },
  ]

  return (
    <div className="fixed left-0 top-4 z-50 w-full px-4 sm:px-6">
      <nav className="border-border shadow-shadow rounded-base bg-background/90 mx-auto flex max-w-6xl items-center justify-between gap-2 border-2 p-2 backdrop-blur-md sm:gap-3 sm:p-3">
        <Link
          className="group border-border rounded-base bg-main text-main-foreground inline-flex items-center gap-3 border-2 px-3 py-2 transition-transform hover:-translate-y-0.5"
          href="/"
        >
          <span className="border-border rounded-base bg-background text-foreground inline-flex h-8 w-8 items-center justify-center border-2 text-xs font-heading">
            SSA
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-heading leading-tight">
              Sayyed Shozib Abbas
            </span>
            <span className="block text-[11px] leading-tight opacity-85">
              Visionary Systems Builder
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = path === link.path

            return (
              <Link
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'rounded-base border-2 px-4 py-2 text-sm font-heading transition-all',
                  active
                    ? 'border-border bg-main text-main-foreground shadow-shadow'
                    : 'border-transparent hover:border-border hover:bg-secondary-background',
                )}
                href={link.path}
                key={link.path}
              >
                {link.text}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <Badge className="hidden md:inline-flex" variant="neutral">
            Open to mission-driven roles
          </Badge>
          <ThemeSwitcher />

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="neutral">
                  <Menu />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-main text-main-foreground" side="right">
                <SheetHeader>
                  <SheetTitle>Navigate</SheetTitle>
                  <SheetDescription className="text-main-foreground/80">
                    Explore the story, case studies, and background.
                  </SheetDescription>
                </SheetHeader>

                <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-2">
                  {links.map((link) => {
                    return (
                      <Button
                        asChild
                        className="justify-between"
                        key={link.path}
                        variant={path === link.path ? 'neutral' : 'reverse'}
                      >
                        <Link href={link.path}>
                          {link.text}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    )
                  })}

                  <div className="border-border rounded-base bg-secondary-background mt-2 border-2 p-3 text-sm text-foreground">
                    <p className="font-heading">Available for product impact conversations</p>
                    <p className="mt-1 text-xs">
                      AI platforms, product systems strategy, and execution architecture.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}
