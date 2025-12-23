import type { TutorialData } from "@/types/tutorial"

export const apiIntegrationData: TutorialData = {
  id: "api-integration",
  title: "API Integration: Nano Banana with Google AI Studio & Vertex AI",
  description:
    "Integrate Nano Banana's state-of-the-art AI image editing into your apps. This guide covers authentication, request formats, code examples (Node.js & Python), rate limits, error handling, and production best practices using Google AI Studio and Vertex AI.",
  slug: "api-integration",

  author: {
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist & Google Developer Expert",
    followers: "18.2k",
    expertise: "Applied GenAI, Computer Vision",
  },

  category: "Advanced",
  difficulty: "advanced",
  tags: ["API Integration", "Google AI Studio", "Vertex AI", "Security", "Production"],

  readTime: "15 min",
  rating: 4.8,
  ratingCount: 241,
  views: "9.6k",

  publishedAt: "2024-02-10",
  updatedAt: "2024-03-02",

  tableOfContents: [
    { id: "overview", title: "Overview & When to Use", level: 2 },
    { id: "choose-path", title: "Choose Your Integration Path", level: 2 },
    { id: "auth", title: "Authentication & Setup", level: 2 },
    { id: "requests", title: "Request Format & Media Inputs", level: 2 },
    { id: "code", title: "Quickstart Code (Node & Python)", level: 2 },
    { id: "errors", title: "Errors, Retries & Timeouts", level: 2 },
    { id: "production", title: "Security & Production Checklist", level: 2 },
  ],

  relatedTutorials: [
    { id: "advanced-techniques", title: "Advanced Techniques", category: "Advanced", readTime: "28 min", rating: 4.9 },
    { id: "prompt-engineering", title: "Prompt Engineering Mastery", category: "Advanced", readTime: "25 min", rating: 4.9 },
    { id: "building-cinematic-universes", title: "Building Cinematic Universes", category: "Cinematic", readTime: "16 min", rating: 4.9 },
  ],

  hero: {
    image: "/tutorials/api-integration.jpg",
    imageAlt: "API Integration with Nano Banana AI Tutorial Cover",
    badge: "Advanced Tutorial",
    badgeIcon: "Code",
    gradientColors: "bg-gradient-to-br from-slate-500/20 via-gray-500/20 to-zinc-500/20",
  },

  seo: {
    keywords: "Nano Banana API, Google AI Studio, Vertex AI, API integration, Node.js, Python, authentication, production best practices",
    ogImage: "/tutorials/api-integration.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/advanced-techniques", label: "Advanced Techniques" },
    next: { href: "/tutorials/building-cinematic-universes", label: "Cinematic Universes" },
  },
}
