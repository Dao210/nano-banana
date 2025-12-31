import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Script from "next/script"
import { WebVitalsInit } from "@/components/WebVitalsInit"
import { SkipLink } from "@/components/skip-link"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nanobanana.fans"),
  title: {
    default: "Nano Banana - AI Image Editing Prompt & Guides",
    template: "%s | Nano Banana Prompt",
  },
  description:
    "Master Google's Nano Banana AI image editing with comprehensive prompts, step-by-step guides, and expert tips. Learn advanced techniques for AI-powered photo editing, digital art creation, and visual content generation with Nano Banana.",
  keywords: [
    "Nano Banana",
    "Nano AI",
    "AI banana",
    "Gemini AI",
    "nano prompt",
    "Google nano",
    "digital art",
    "photo editing",
    "AI image generation",
    "Google AI",
    "image editing prompts",
    "AI tutorials",
    "visual content creation",
    "AI photography",
    "digital manipulation",
    "AI art tools",
    "image enhancement",
    "creative AI",
    "Google Nano Banana",
    "AI editing techniques"
  ],
  authors: [{ name: "Nano Banana Tutorial Platform", url: "https://nanobanana.fans" }],
  creator: "Nano Banana Tutorial Platform",
  publisher: "Nano Banana Tutorial Platform",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobanana.fans",
    siteName: "Nano Banana Tutorial Platform",
    title: "Nano Banana - AI Image Editing Prompt & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive prompts, step-by-step guides, and expert tips. Learn advanced techniques for AI-powered photo editing and digital art creation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana AI Image Editing Prompt",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nano Banana - AI Image Editing Prompt & Guides",
    description: "Master Google's Nano Banana AI image editing with comprehensive prompts, step-by-step guides, and expert tips. Learn advanced techniques for AI-powered photo editing.",
    images: ["/og-image.jpg"],
    creator: "@nanobananaPrompt",
    site: "@nanobananaPrompt",
  },
  alternates: {
    canonical: "https://nanobanana.fans",
    languages: {
      "en-US": "https://nanobanana.fans",
    },
  },
  category: "Education",
  classification: "AI Image Editing Prompt",
  generator: "nanobanana",
  other: {
    "article:author": "Nano Banana Tutorial Platform",
    "article:publisher": "Nano Banana Tutorial Platform",
    "og:site_name": "Nano Banana Tutorial Platform",
    "twitter:domain": "nanobanana.fans",
    "theme-color": "#164e63",
    "msapplication-TileColor": "#164e63",
    "apple-mobile-web-app-title": "Nano Banana",
    "application-name": "Nano Banana",
    "msapplication-config": "/browserconfig.xml",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#164e63" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name='impact-site-verification' value='e0e82765-9e34-40d1-87f9-a10a6637245e' />
        <link rel="canonical" href="https://nanobanana.fans" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* DNS prefetch and preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google.com" />
        {/* Note: Next.js Fonts automatically handles font preloading, no manual preload needed */}

        {/* ...existing meta/link... */}
        {/* Google Tag Manager - Optimized loading with low priority */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EB226TXP1L"
          strategy="afterInteractive"
          fetchPriority="low"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EB226TXP1L', {
                send_page_view: false,
                anonymize_ip: true,
                allow_google_signals: false
              });
            `
          }}
        />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <WebVitalsInit />
      </body>
    </html>
  )
}
