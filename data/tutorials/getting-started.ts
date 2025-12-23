import type { TutorialData } from "@/types/tutorial"
import { DEFAULT_AUTHOR } from "@/types/tutorial"

/**
 * Getting Started Tutorial Data
 *
 * This is an example of how to define tutorial data using the new template system.
 * Each tutorial should have its own data file in this directory.
 */
export const gettingStartedData: TutorialData = {
  // Basic Info
  id: "getting-started",
  title: "Getting Started with Nano Banana AI",
  description:
    "Master Google's revolutionary Nano Banana AI image editing tool from scratch. This comprehensive guide covers everything from initial setup to your first professional-quality edits.",
  slug: "getting-started",

  // Author
  author: DEFAULT_AUTHOR,

  // Classification
  category: "Beginner",
  difficulty: "beginner",
  tags: ["Setup", "Basics", "First Steps", "Beginner Guide", "AI Fundamentals"],

  // Stats
  readTime: "12 min",
  rating: 4.9,
  ratingCount: 347,
  views: "24.8k",

  // Dates
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-20",

  // Navigation
  tableOfContents: [
    { id: "introduction", title: "What Makes Nano Banana Special?", level: 2 },
    { id: "access-methods", title: "Three Ways to Access Nano Banana", level: 2 },
    { id: "first-edit", title: "Your First AI Edit (Step-by-Step)", level: 2 },
    { id: "prompt-mastery", title: "Writing Effective Prompts", level: 2 },
    { id: "best-practices", title: "Professional Tips & Best Practices", level: 2 },
    { id: "common-mistakes", title: "Avoiding Common Beginner Mistakes", level: 2 },
    { id: "next-steps", title: "Your Learning Journey Continues", level: 2 },
  ],
  relatedTutorials: [
    {
      id: "character-consistency",
      title: "Character Consistency Mastery",
      category: "Intermediate",
      readTime: "18 min",
      rating: 4.8,
    },
    {
      id: "multi-turn-editing",
      title: "Multi-Turn Editing Techniques",
      category: "Intermediate",
      readTime: "22 min",
      rating: 4.7,
    },
    {
      id: "prompt-engineering",
      title: "Advanced Prompt Engineering",
      category: "Advanced",
      readTime: "28 min",
      rating: 4.9,
    },
  ],

  // Hero - Use string identifier for icon
  hero: {
    image: "/tutorials/getting-started-hero.png",
    imageAlt: "Nano Banana AI Tutorial - Before and after image editing examples",
    badge: "Featured Tutorial",
    badgeIcon: "Sparkles",
    gradientColors: "bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20",
  },

  // SEO
  seo: {
    keywords:
      "Nano Banana tutorial, Google Gemini AI, image editing beginner guide, AI photo editing, character consistency, multi-turn editing, getting started",
    ogImage: "/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
  },

  // Navigation Links
  navigation: {
    next: {
      href: "/tutorials/character-consistency",
      label: "Character Consistency",
    },
  },

  // Comments (optional - will use defaults if not provided)
  comments: [
    {
      id: "1",
      author: {
        name: "Maria Johnson",
        initials: "MJ",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
      },
      rating: 5,
      date: "3 days ago",
      content:
        "This tutorial is absolutely fantastic! As a complete beginner, I was able to create professional-looking edits within an hour. The step-by-step approach and real examples made all the difference. Already working through the character consistency tutorial!",
      likes: 24,
    },
    {
      id: "2",
      author: {
        name: "David Kim",
        initials: "DK",
        bgColor: "bg-green-100",
        textColor: "text-green-600",
      },
      rating: 5,
      date: "1 week ago",
      content:
        "The prompt formula section is pure gold! I've been struggling with getting consistent results, but following the [Action] + [Details] + [Style] + [Preservation] structure has completely transformed my edits. Thank you Dr. Rodriguez!",
      likes: 18,
    },
  ],
}
