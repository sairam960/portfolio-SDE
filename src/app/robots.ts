import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://sairam960.github.io/portfolio-SDE'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/out/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}