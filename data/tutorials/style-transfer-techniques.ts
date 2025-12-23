import type { TutorialData } from "@/types/tutorial"

export const styleTransferData: TutorialData = {
  id: "style-transfer-techniques",
  title: "Style Transfer Techniques with Nano Banana AI",
  description:
    "Master the art of creative image transformation with Nano Banana's powerful style transfer capabilities. Learn to apply artistic filters, visual styles, and professional effects to elevate your images.",
  slug: "style-transfer-techniques",

  author: {
    name: "Dr. Michael Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Scientist & Technical Writer",
    followers: "18.2k",
    expertise: "Computer Vision, Advanced AI Techniques",
  },

  category: "Intermediate",
  difficulty: "intermediate",
  tags: ["Style Transfer", "Artistic Editing", "Creative Techniques", "Visual Styles", "Professional Effects"],

  readTime: "18 min",
  rating: 4.8,
  ratingCount: 256,
  views: "18.2k",

  publishedAt: "2024-02-10",
  updatedAt: "2024-02-15",

  tableOfContents: [
    { id: "introduction", title: "Unlocking Creative Potential", level: 2 },
    { id: "understanding", title: "Understanding Style Transfer", level: 2 },
    { id: "basic-techniques", title: "Basic Style Transfer Techniques", level: 2 },
    { id: "advanced-methods", title: "Advanced Style Transfer Methods", level: 2 },
    { id: "artistic-filters", title: "Applying Artistic Filters", level: 2 },
    { id: "professional-effects", title: "Professional Visual Effects", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Creative Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "character-consistency", title: "Character Consistency Mastery", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "multi-turn-editing", title: "Multi-Turn Editing Techniques", category: "Intermediate", readTime: "22 min", rating: 4.7 },
    { id: "building-cinematic-universes", title: "Building Cinematic Universes", category: "Cinematic", readTime: "16 min", rating: 4.9 },
  ],

  hero: {
    image: "/tutorials/style-transfer-techniques.jpg",
    imageAlt: "Style Transfer Techniques with Nano Banana AI Tutorial Cover",
    badge: "Creative Tutorial",
    badgeIcon: "Palette",
    gradientColors: "bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-red-500/20",
  },

  seo: {
    keywords: "Nano Banana style transfer, AI artistic editing, creative image transformation, visual style techniques, artistic filters, AI creative tools",
    ogImage: "/tutorials/style-transfer-techniques.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/multi-turn-editing", label: "Multi-Turn Editing" },
    next: { href: "/tutorials/product-photography-with-ai", label: "Product Photography" },
  },
}
