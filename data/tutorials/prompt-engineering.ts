import type { TutorialData } from "@/types/tutorial"

export const promptEngineeringData: TutorialData = {
  id: "prompt-engineering",
  title: "Prompt Engineering Mastery",
  description:
    "Unlock the full potential of Nano Banana AI by mastering the art of prompt engineering. This comprehensive guide will teach you how to craft precise, effective prompts that generate exactly the results you envision.",
  slug: "prompt-engineering",

  author: {
    name: "Dr. Michael Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Scientist & Technical Writer",
    followers: "18.2k",
    expertise: "Computer Vision, Advanced AI Techniques",
  },

  category: "Advanced",
  difficulty: "advanced",
  tags: ["Prompt Engineering", "AI Writing", "Advanced Techniques", "Creative Editing", "Professional Results"],

  readTime: "25 min",
  rating: 4.9,
  ratingCount: 189,
  views: "12.5k",

  publishedAt: "2024-03-15",
  updatedAt: "2024-03-20",

  tableOfContents: [
    { id: "introduction", title: "The Power of Effective Prompts", level: 2 },
    { id: "fundamentals", title: "Prompt Engineering Fundamentals", level: 2 },
    { id: "structure", title: "The Perfect Prompt Structure", level: 2 },
    { id: "techniques", title: "Advanced Prompting Techniques", level: 2 },
    { id: "examples", title: "Real-World Prompt Examples", level: 2 },
    { id: "best-practices", title: "Best Practices & Tips", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Mistakes", level: 2 },
    { id: "next-steps", title: "Your Learning Journey Continues", level: 2 },
  ],

  relatedTutorials: [
    { id: "character-consistency", title: "Character Consistency Mastery", category: "Intermediate", readTime: "18 min", rating: 4.8 },
    { id: "multi-turn-editing", title: "Multi-Turn Editing Techniques", category: "Intermediate", readTime: "22 min", rating: 4.7 },
    { id: "api-integration", title: "API Integration Guide", category: "Advanced", readTime: "28 min", rating: 4.9 },
  ],

  hero: {
    image: "/tutorials/prompt-engineering-cover.jpg",
    imageAlt: "Prompt Engineering Mastery with Nano Banana AI Tutorial Cover",
    badge: "Advanced Tutorial",
    badgeIcon: "Wand2",
    gradientColors: "bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },

  seo: {
    keywords: "Nano Banana prompt engineering, AI prompt writing, effective prompts, AI image editing, Google Gemini, tutorial, advanced techniques",
    ogImage: "/tutorials/prompt-engineering-cover.jpg",
  },

  navigation: {
    prev: { href: "/tutorials/getting-started", label: "Getting Started" },
    next: { href: "/tutorials/character-consistency", label: "Character Consistency" },
  },
}
