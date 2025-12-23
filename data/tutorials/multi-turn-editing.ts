import type { TutorialData } from "@/types/tutorial"

export const multiTurnEditingData: TutorialData = {
  id: "multi-turn-editing",
  title: "Multi-Turn Editing Techniques",
  description:
    "Unlock the full power of Nano Banana AI with multi-turn editing. This guide reveals expert strategies for iterative image refinement, enabling you to achieve complex transformations while preserving quality and consistency.",
  slug: "multi-turn-editing",

  author: {
    name: "Dr. Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist & Google Developer Expert",
    followers: "18.2k",
    expertise: "Computer Vision, AI Image Processing",
  },

  category: "Intermediate",
  difficulty: "intermediate",
  tags: ["Multi-Turn Editing", "Iterative Refinement", "AI Image Editing", "Advanced Techniques", "Quality Preservation"],

  readTime: "22 min",
  rating: 4.7,
  ratingCount: 195,
  views: "12.1k",

  publishedAt: "2024-02-25",
  updatedAt: "2024-03-05",

  tableOfContents: [
    { id: "introduction", title: "The Power of Iterative Editing", level: 2 },
    { id: "fundamentals", title: "Multi-Turn Editing Fundamentals", level: 2 },
    { id: "workflow", title: "Building Effective Workflows", level: 2 },
    { id: "quality-preservation", title: "Maintaining Quality Across Turns", level: 2 },
    { id: "complex-edits", title: "Complex Transformation Strategies", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Learning Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "character-consistency", title: "Character Consistency Mastery", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "prompt-engineering", title: "Prompt Engineering Mastery", category: "Advanced", readTime: "25 min", rating: 4.9 },
    { id: "style-transfer-techniques", title: "Style Transfer Techniques", category: "Intermediate", readTime: "18 min", rating: 4.8 },
  ],

  hero: {
    image: "/multi-turn-editing-nano-banana.jpg",
    imageAlt: "Nano Banana Multi-Turn Editing Techniques Tutorial",
    badge: "Intermediate Tutorial",
    badgeIcon: "Layers",
    gradientColors: "bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },

  seo: {
    keywords: "Nano Banana, multi-turn editing, AI image editing, iterative refinement, tutorial, advanced techniques, Google Gemini, image quality, consistency",
    ogImage: "/multi-turn-editing-nano-banana.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/character-consistency", label: "Character Consistency" },
    next: { href: "/tutorials/style-transfer-techniques", label: "Style Transfer" },
  },
}
