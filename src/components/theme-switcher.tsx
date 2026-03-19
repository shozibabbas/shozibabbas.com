'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

import { cn } from '@/lib/utils'

export function ThemeSwitcher({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <button
      className={cn(
        'border-border bg-background text-foreground hover:bg-main hover:text-main-foreground rounded-base inline-flex size-10 items-center justify-center border-2 transition-colors',
        className,
      )}
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      type="button"
    >
      <Sun className="stroke-main-foreground hidden size-4 sm:size-6 dark:inline" />
      <Moon className="stroke-main-foreground inline size-4 sm:size-6 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
