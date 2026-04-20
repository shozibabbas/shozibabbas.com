import type { MetadataRoute } from 'next'

const siteUrl = 'https://shozibabbas.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/work']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}