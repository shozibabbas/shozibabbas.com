import type { Metadata } from 'next'

export const siteUrl = 'https://shozibabbas.com'
export const siteName = 'Sayyed Shozib Abbas'
export const defaultTitle = 'Sayyed Shozib Abbas — Product Engineer'
export const defaultOgTitle = 'Sayyed Shozib Abbas — Product Engineer for SaaS & AI'
export const defaultDescription =
  'I build scalable web apps, dashboards, and SaaS platforms. Helping startups and businesses turn ideas into fast, reliable, and scalable digital products.'
export const defaultOgImage = '/og-thumbnail.png'
export const defaultOgImageAlt =
  'Sayyed Shozib Abbas portfolio preview with product engineering, AI systems, and dashboard interface visuals'

type PageMetadataInput = {
  title?: string
  description?: string
  path?: string
}

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = '/',
}: PageMetadataInput): Metadata {
  const absoluteUrl = path === '/' ? siteUrl : `${siteUrl}${path}`
  const openGraphTitle = title
    ? `${title} | ${siteName} — Product Engineer`
    : defaultOgTitle

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: openGraphTitle,
      description,
      url: absoluteUrl,
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
      title: openGraphTitle,
      description,
      images: [defaultOgImage],
    },
  }
}
