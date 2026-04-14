import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-foreground/50 sm:flex-row sm:px-6">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <p className="font-heading text-sm text-foreground/70">Sayyed Shozib Abbas</p>
          <a
            href="mailto:shozibabbas@gmail.com"
            className="text-xs transition-colors hover:text-foreground"
          >
            shozibabbas@gmail.com
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((l) => (
            <Link key={l.label} href={l.href} className="text-xs transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs">© {currentYear} All rights reserved.</p>
      </div>
    </footer>
  )
}
