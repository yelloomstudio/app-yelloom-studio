import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/admin/', '/dashboard/'],
        },
        sitemap: 'https://yelloomstudio.com/sitemap.xml',
    }
} 