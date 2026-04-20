import Footer from '@/components/footer'
import GoogleAnalytics from '@/components/google-analytics'
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import {
  defaultDescription,
  defaultOgImage,
  defaultOgImageAlt,
  defaultOgTitle,
  defaultTitle,
  siteName,
  siteUrl,
} from '@/lib/metadata'
import type { Metadata } from 'next'
import { Manrope, Sora } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' })
const sora = Sora({ subsets: ['latin'], variable: '--font-display' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    'Sayyed Shozib Abbas',
    'product engineer',
    'full-stack engineer',
    'Next.js developer',
    'NestJS developer',
    'SaaS development',
    'AI systems',
    'dashboard development',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultOgTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: defaultOgImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultOgTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${manrope.variable} ${sora.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_31px,rgba(0,0,0,0.05)_32px),linear-gradient(to_bottom,transparent_0,transparent_31px,rgba(0,0,0,0.05)_32px)] bg-[size:32px_32px] opacity-30 dark:opacity-10" />
            <div className="bg-main/25 absolute left-[-10rem] top-20 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-secondary-background absolute right-0 top-0 h-72 w-72 rounded-full border-2 border-border blur-3xl opacity-60 dark:opacity-20" />
          </div>
          <Nav />
          <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
