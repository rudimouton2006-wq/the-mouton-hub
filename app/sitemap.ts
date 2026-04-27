import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic' // This forces the server to register the route

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://takumitech.co.za'

  const routes = [
    '',
    '/services',
    '/schedule',
    '/engineer',
    '/contact',
    '/shop',
    '/ticket',
    '/terms',
    '/success',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}