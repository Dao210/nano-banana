import type { TutorialData } from "@/types/tutorial"

export const productPhotographyData: TutorialData = {
  id: "product-photography-with-ai",
  title: "Product Photography with AI",
  description:
    "A practical, production-ready workflow to transform everyday product shots into studio-grade visuals using Nano Banana. Includes lighting, backgrounds, realistic shadows/reflections, color/brand consistency, and export guidelines.",
  slug: "product-photography-with-ai",

  author: {
    name: "Jane Smith",
    avatar: "/placeholder-user.jpg",
    bio: "AI Content Creator & Product Imaging Specialist",
    followers: "3.4k",
    expertise: "E-commerce imaging, Visual merchandising",
  },

  category: "Marketing",
  difficulty: "beginner",
  tags: ["AI Product Photography", "Background Replacement", "Shadows & Reflections", "Color Consistency", "E-commerce Export"],

  readTime: "14 min",
  rating: 4.8,
  ratingCount: 212,
  views: "9.6k",

  publishedAt: "2024-03-12",
  updatedAt: "2024-11-28",

  tableOfContents: [
    { id: "introduction", title: "Why AI Product Photography?", level: 2 },
    { id: "workflow", title: "Recommended Workflow (Overview)", level: 2 },
    { id: "lighting-backgrounds", title: "Lighting & Backgrounds", level: 2 },
    { id: "shadows-reflections", title: "Realistic Shadows & Reflections", level: 2 },
    { id: "color-brand", title: "Color Consistency & Brand Matching", level: 2 },
    { id: "export", title: "Export for Marketplaces & Web", level: 2 },
    { id: "prompt-recipes", title: "Prompt Recipes (Copy & Paste)", level: 2 },
    { id: "pitfalls", title: "Common Pitfalls (and Fixes)", level: 2 },
  ],

  relatedTutorials: [
    { id: "style-transfer-techniques", title: "Style Transfer Techniques", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "getting-started", title: "Getting Started with Nano Banana", category: "Beginner", readTime: "12 min", rating: 4.9 },
    { id: "prompt-engineering", title: "Prompt Engineering Mastery", category: "Advanced", readTime: "25 min", rating: 4.9 },
  ],

  hero: {
    image: "/tutorials/Product Photography with AI.jpg",
    imageAlt: "Product Photography with AI Tutorial Cover",
    badge: "Marketing Tutorial",
    badgeIcon: "Camera",
    gradientColors: "bg-gradient-to-br from-amber-500/20 via-orange-500/20 to-yellow-500/20",
  },

  seo: {
    keywords: "Nano Banana, AI product photography, e-commerce images, background removal, shadows, color consistency, brand imagery, prompt recipes, Google Gemini",
    ogImage: "/tutorials/Product Photography with AI.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/style-transfer-techniques", label: "Style Transfer" },
    next: { href: "/tutorials/building-cinematic-universes", label: "Cinematic Universes" },
  },
}
