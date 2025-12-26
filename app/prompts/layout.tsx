import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nano Banana AI Prompt Library - 25+ Free AI Image Editing Prompts',
  description: 'Discover 25+ curated Nano Banana AI prompts for image editing, character consistency, product photography, and creative design. Free prompt templates for beginners and professionals.',
  keywords: [
    'Nano Banana prompts',
    'AI prompt library',
    'image editing prompts',
    'AI image generation',
    'character consistency prompts',
    'product photography AI',
    'creative AI prompts',
    'awsome AI prompts',
    'Nano Banana tutorial',
    'AI image editing'
  ],
  openGraph: {
    title: 'Nano Banana AI Prompt Library - 25+ Free AI Image Editing Prompts',
    description: 'Access curated AI prompt examples designed for cutting-edge image generation models. Transform your creative workflow with proven prompt templates.',
    url: 'https://nanobanana.fans/prompts',
    siteName: 'Nano Banana Tutorial',
    images: [
      {
        url: '/prompt/hero-brain.jpg',
        width: 1200,
        height: 630,
        alt: 'Nano Banana AI Prompt Library',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nano Banana AI Prompt Library - 25+ Free AI Image Editing Prompts',
    description: 'Discover 25+ curated Nano Banana AI prompts for image editing, character consistency, product photography, and creative design.',
    images: ['/prompt/hero-brain.jpg'],
  },
  alternates: {
    canonical: 'https://nanobanana.fans/prompts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PromptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
