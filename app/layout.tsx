import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from '@/components/Analytics';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Información básica
  title: {
    default: "Yelloom Studio - Desarrollo Web, Apps y Soluciones Digitales",
    template: "%s | Yelloom Studio"
  },
  description: "Estudio de desarrollo especializado en sitios web modernos, aplicaciones móviles, UX/UI design, e-commerce y consultoría IT. Transformamos ideas en soluciones digitales exitosas.",

  // Keywords para SEO
  keywords: [
    "desarrollo web",
    "aplicaciones móviles",
    "UX UI design",
    "e-commerce",
    "consultoría IT",
    "marketing digital",
    "sitios web responsivos",
    "desarrollo personalizado",
    "soluciones digitales",
    "yelloom studio"
  ],

  // Autor y metadatos del sitio
  authors: [{ name: "Yelloom Studio" }],
  creator: "Yelloom Studio",
  publisher: "Yelloom Studio",

  // Configuración del sitio
  metadataBase: new URL("https://yelloomstudio.com"),
  alternates: {
    canonical: "/",
  },

  // Open Graph para redes sociales
  openGraph: {
    title: "Yelloom Studio - Desarrollo Web y Soluciones Digitales",
    description: "Estudio de desarrollo especializado en sitios web modernos, aplicaciones móviles, UX/UI design, e-commerce y consultoría IT. Transformamos ideas en soluciones digitales exitosas.",
    url: "https://yelloomstudio.com",
    siteName: "Yelloom Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Agregar esta imagen después
        width: 1200,
        height: 630,
        alt: "Yelloom Studio - Desarrollo Web y Soluciones Digitales",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Yelloom Studio - Desarrollo Web y Soluciones Digitales",
    description: "Estudio de desarrollo especializado en sitios web modernos, aplicaciones móviles, UX/UI design, e-commerce y consultoría IT.",
    images: ["/og-image.jpg"], // Agregar esta imagen después
  },

  // Configuración de robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificación de sitios
  verification: {
    google: "", // Agregar después cuando configures Google Search Console
    // yandex: "", // Si necesitas otros buscadores
    // bing: "",
  },

  // Configuración de categorías
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Yelloom Studio",
              url: "https://yelloomstudio.com",
              description: "Estudio de desarrollo especializado en sitios web modernos, aplicaciones móviles, UX/UI design, e-commerce y consultoría IT.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "contacto@yelloomstudio.com"
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES"
              },
              sameAs: [
                // Agregar redes sociales después
                // "https://linkedin.com/company/yelloom-studio",
                // "https://instagram.com/yelloomstudio"
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desarrollo Web",
                    description: "Sitios web modernos, responsivos y optimizados para SEO"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Desarrollo de Aplicaciones",
                    description: "Aplicaciones móviles y de escritorio personalizadas"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UX/UI Design",
                    description: "Experiencias de usuario intuitivas y atractivas"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-commerce",
                    description: "Soluciones de comercio electrónico seguras y escalables"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Consultoría IT",
                    description: "Asesoramiento experto para optimizar procesos tecnológicos"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Marketing Digital",
                    description: "Estrategias digitales para aumentar la visibilidad de tu marca"
                  }
                }
              ],
              foundingDate: "2024",
              knowsAbout: [
                "Desarrollo Web",
                "Next.js",
                "React",
                "TypeScript",
                "UX/UI Design",
                "E-commerce",
                "Consultoría IT",
                "Marketing Digital"
              ]
            })
          }}
        />

        {/* Preload de fuentes críticas */}
        <link
          rel="preload"
          href="/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicons - Agregar después */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#1f2937" />
        <meta name="application-name" content="Yelloom Studio" />

        {/* Additional SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
