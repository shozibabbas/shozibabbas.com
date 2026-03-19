'use client'

import * as React from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  attribute?: 'class'
  disableTransitionOnChange?: boolean
}

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: Exclude<Theme, 'system'>
  setTheme: (theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function getSystemTheme(): Exclude<Theme, 'system'> {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'theme',
  attribute = 'class',
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<Exclude<Theme, 'system'>>(
    'light',
  )

  const disableTransitions = React.useCallback(() => {
    if (!disableTransitionOnChange || typeof document === 'undefined') {
      return
    }

    const style = document.createElement('style')
    style.appendChild(
      document.createTextNode(
        '*{transition:none !important;-webkit-transition:none !important;}',
      ),
    )
    document.head.appendChild(style)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove()
      })
    })
  }, [disableTransitionOnChange])

  const applyTheme = React.useCallback(
    (nextTheme: Theme) => {
      const systemTheme = getSystemTheme()
      const activeTheme = nextTheme === 'system' ? systemTheme : nextTheme

      setResolvedTheme(activeTheme)

      if (typeof document !== 'undefined' && attribute === 'class') {
        disableTransitions()
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(activeTheme)
      }
    },
    [attribute, disableTransitions],
  )

  React.useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey) as Theme | null
    const nextTheme = storedTheme ?? defaultTheme

    setThemeState(nextTheme)
    applyTheme(nextTheme)

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (nextTheme === 'system') {
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [applyTheme, defaultTheme, storageKey])

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      window.localStorage.setItem(storageKey, nextTheme)
      setThemeState(nextTheme)
      applyTheme(nextTheme)
    },
    [applyTheme, storageKey],
  )

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return context
}
