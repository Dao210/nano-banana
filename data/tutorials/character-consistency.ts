import type { TutorialData } from "@/types/tutorial"

export const characterConsistencyData: TutorialData = {
  id: "character-consistency",
  title: "Character Consistency Mastery",
  description:
    "Achieve flawless character likeness across every edit. This guide reveals Nano Banana's unique approach to identity preservation, empowering you to create consistent, memorable characters for comics, branding, and visual storytelling.",
  slug: "character-consistency",

  author: {
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist & Google Developer Expert",
    followers: "18.2k",
    expertise: "Computer Vision, AI Image Processing",
  },

  category: "Intermediate",
  difficulty: "intermediate",
  tags: ["Character Consistency", "AI Image Editing", "Visual Storytelling", "Identity Preservation", "Multi-Turn Editing"],

  readTime: "18 min",
  rating: 4.8,
  ratingCount: 284,
  views: "18.4k",

  publishedAt: "2024-02-20",
  updatedAt: "2024-03-01",

  tableOfContents: [
    { id: "introduction", title: "Why Character Consistency Matters", level: 2 },
    { id: "fundamentals", title: "Understanding Identity Preservation", level: 2 },
    { id: "techniques", title: "Core Consistency Techniques", level: 2 },
    { id: "multi-reference", title: "Multi-Reference Strategies", level: 2 },
    { id: "practical-examples", title: "Real-World Applications", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Learning Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "multi-turn-editing", title: "Multi-Turn Editing Techniques", category: "Intermediate", readTime: "22 min", rating: 4.7 },
    { id: "prompt-engineering", title: "Prompt Engineering Mastery", category: "Advanced", readTime: "25 min", rating: 4.9 },
    { id: "style-transfer-techniques", title: "Style Transfer Techniques", category: "Intermediate", readTime: "18 min", rating: 4.8 },
  ],

  hero: {
    image: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
    imageAlt: "Nano Banana Character Consistency Mastery Tutorial",
    badge: "Intermediate Tutorial",
    badgeIcon: "Users",
    gradientColors: "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },

  seo: {
    keywords: "Nano Banana, character consistency, AI image editing, Google Gemini, tutorial, likeness, multi-turn editing, visual storytelling, prompt engineering, identity preservation",
    ogImage: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
  },

  navigation: {
    prev: { href: "/tutorials/prompt-engineering", label: "Prompt Engineering" },
    next: { href: "/tutorials/multi-turn-editing", label: "Multi-Turn Editing" },
  },
}
