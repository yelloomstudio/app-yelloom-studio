import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Yelloom Studio - Desarrollo Web y Soluciones Digitales',
        short_name: 'Yelloom Studio',
        description: 'Estudio de desarrollo especializado en sitios web modernos, aplicaciones móviles, UX/UI design, e-commerce y consultoría IT.',
        start_url: '/',
        display: 'standalone',
        background_color: '#111827',
        theme_color: '#1f2937',
        orientation: 'portrait-primary',
        categories: ['business', 'technology', 'developer'],
        lang: 'es',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '16x16 32x32 48x48',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        screenshots: [
            {
                src: '/screenshot-desktop.png',
                sizes: '1920x1080',
                type: 'image/png',
                form_factor: 'wide',
                label: 'Yelloom Studio Desktop',
            },
            {
                src: '/screenshot-mobile.png',
                sizes: '390x844',
                type: 'image/png',
                form_factor: 'narrow',
                label: 'Yelloom Studio Mobile',
            },
        ],
    }
} 