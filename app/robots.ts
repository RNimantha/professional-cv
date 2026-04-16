import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://nimanthabandara.dev/sitemap.xml',
    host: 'https://nimanthabandara.dev',
  }
}
