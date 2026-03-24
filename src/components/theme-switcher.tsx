'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

import { cn } from '@/lib/utils'

export function ThemeSwitcher({
  className,
  showLabel = false,
}: {
  className?: string
  showLabel?: boolean
}) {
  const { setTheme, resolvedTheme } = useTheme()
  const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light'

  return (
    <button
      className={cn(
        'border-border bg-background text-foreground hover:bg-main hover:text-main-foreground rounded-base inline-flex items-center justify-center gap-2 border-2 px-3 transition-colors',
        showLabel ? 'h-11 w-full' : 'size-10',
        className,
      )}
      onClick={() => setTheme(nextTheme)}
      title={`Switch to ${nextTheme} mode`}
      type="button"
    >
      <Sun className="hidden size-4 stroke-current dark:inline" />
      <Moon className="inline size-4 stroke-current dark:hidden" />
      {showLabel ? <span className="font-heading text-sm">Switch to {nextTheme} mode</span> : null}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
