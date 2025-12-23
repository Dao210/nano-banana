import type { TutorialData } from "@/types/tutorial"

export const advancedTechniquesData: TutorialData = {
  id: "advanced-techniques",
  title: "Advanced Techniques with Nano Banana AI",
  description:
    "Elevate your Nano Banana skills to a professional level with these advanced techniques. This comprehensive guide covers complex workflows, creative approaches, and expert tips for achieving exceptional results in challenging scenarios.",
  slug: "advanced-techniques",

  author: {
    name: "Prof. James Liu",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Systems Architect & API Specialist",
    followers: "25.8k",
    expertise: "Machine Learning, System Integration",
  },

  category: "Advanced",
  difficulty: "advanced",
  tags: ["Advanced Techniques", "Professional Workflows", "Creative Editing", "Expert Tips", "Complex Transformations"],

  readTime: "28 min",
  rating: 4.9,
  ratingCount: 156,
  views: "9.8k",

  publishedAt: "2024-04-10",
  updatedAt: "2024-04-15",

  tableOfContents: [
    { id: "introduction", title: "Mastering Advanced Image Editing", level: 2 },
    { id: "workflows", title: "Professional Editing Workflows", level: 2 },
    { id: "creative-approaches", title: "Creative Transformation Techniques", level: 2 },
    { id: "complex-scenarios", title: "Handling Complex Editing Scenarios", level: 2 },
    { id: "optimization", title: "Performance Optimization", level: 2 },
    { id: "integration", title: "System Integration Strategies", level: 2 },
    { id: "best-practices", title: "Expert Best Practices", level: 2 },
    { id: "common-challenges", title: "Overcoming Common Challenges", level: 2 },
    { id: "next-steps", title: "Your Professional Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "api-integration", title: "API Integration Guide", category: "Advanced", readTime: "15 min", rating: 4.8 },
    { id: "prompt-engineering", title: "Prompt Engineering Mastery", category: "Advanced", readTime: "25 min", rating: 4.9 },
    { id: "building-cinematic-universes", title: "Building Cinematic Universes", category: "Cinematic", readTime: "16 min", rating: 4.9 },
  ],

  hero: {
    image: "/tutorials/advanced-techniques-cover.jpg",
    imageAlt: "Advanced Techniques with Nano Banana AI Tutorial Cover",
    badge: "Expert Tutorial",
    badgeIcon: "Cpu",
    gradientColors: "bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20",
  },

  seo: {
    keywords: "Nano Banana advanced techniques, complex image editing, professional workflows, creative AI editing, expert tips, AI image manipulation, advanced tutorials",
    ogImage: "/tutorials/advanced-techniques-cover.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/building-cinematic-universes", label: "Cinematic Universes" },
    next: { href: "/tutorials/api-integration", label: "API Integration" },
  },
}
