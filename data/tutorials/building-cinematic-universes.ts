import type { TutorialData } from "@/types/tutorial"

export const cinematicUniversesData: TutorialData = {
  id: "building-cinematic-universes",
  title: "Building Cinematic Universes",
  description:
    "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments. Discover how Nano Banana AI empowers you to craft immersive worlds and cinematic stories from a single frame.",
  slug: "building-cinematic-universes",

  author: {
    name: "Nano Banana Team",
    avatar: "/placeholder-logo.png",
    bio: "AI Visual Storytelling Experts",
    followers: "21.4k",
    expertise: "Cinematic Design, AI Art, Storytelling",
  },

  category: "Cinematic",
  difficulty: "intermediate",
  tags: ["Cinematic", "Storytelling", "Scene Creation", "Environment Design", "AI Image Editing"],

  readTime: "16 min",
  rating: 4.9,
  ratingCount: 412,
  views: "31.2k",

  publishedAt: "2025-09-02",
  updatedAt: "2025-09-02",

  tableOfContents: [
    { id: "introduction", title: "The Art of Cinematic Storytelling", level: 2 },
    { id: "scene-composition", title: "Scene Composition Fundamentals", level: 2 },
    { id: "environment-design", title: "Environment Design Techniques", level: 2 },
    { id: "lighting-mood", title: "Lighting & Mood Creation", level: 2 },
    { id: "character-integration", title: "Character Integration", level: 2 },
    { id: "narrative-flow", title: "Building Narrative Flow", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "next-steps", title: "Your Cinematic Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "style-transfer-techniques", title: "Style Transfer Techniques", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "character-consistency", title: "Character Consistency Mastery", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "advanced-techniques", title: "Advanced Techniques", category: "Advanced", readTime: "28 min", rating: 4.9 },
  ],

  hero: {
    image: "/ai-neural-network-visualization-modern-tech.png",
    imageAlt: "Building Cinematic Universes with Nano Banana AI Tutorial Cover",
    badge: "Cinematic Tutorial",
    badgeIcon: "Film",
    gradientColors: "bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20",
  },

  seo: {
    keywords: "Nano Banana cinematic, visual storytelling, AI image editing, cinematic universe, scene creation, environment design, Google AI, tutorial",
    ogImage: "/ai-neural-network-visualization-modern-tech.png",
  },

  navigation: {
    prev: { href: "/tutorials/product-photography-with-ai", label: "Product Photography" },
    next: { href: "/tutorials/advanced-techniques", label: "Advanced Techniques" },
  },
}
