import { LucideIcon } from "lucide-react"
import * as LucideIcons from "lucide-react"

// ============================================
// Tutorial Data Types
// ============================================

export interface TutorialAuthor {
  name: string
  avatar: string
  bio: string
  followers: string
  expertise: string
}

export interface TableOfContentsItem {
  id: string
  title: string
  level: 2 | 3
}

export interface RelatedTutorial {
  id: string
  title: string
  category: TutorialCategory
  readTime: string
  rating: number
}

export interface TutorialComment {
  id: string
  author: {
    name: string
    initials: string
    bgColor: string
    textColor: string
  }
  rating: number
  date: string
  content: string
  likes: number
}

export type TutorialCategory = "Beginner" | "Intermediate" | "Advanced" | "Marketing" | "Cinematic"
export type TutorialDifficulty = "beginner" | "intermediate" | "advanced"

// ============================================
// Icon Types - Use string identifiers instead of components
// ============================================

export type IconName = keyof typeof LucideIcons

/**
 * Get a Lucide icon component by name
 */
export function getIconByName(name: IconName): LucideIcon | null {
  const icon = LucideIcons[name]
  if (typeof icon === "function") {
    return icon as LucideIcon
  }
  return null
}

// ============================================
// Tutorial Section Types
// ============================================

export type SectionGradient =
  | "cyan-blue"
  | "indigo-purple"
  | "amber-orange"
  | "emerald-teal"
  | "red-pink"
  | "violet-purple"
  | "blue-cyan"
  | "pink-rose"
  | "card" // No gradient, just card background

export interface TutorialSectionConfig {
  id: string
  title: string
  icon: LucideIcon
  iconBgColor: string // Tailwind class like "bg-cyan-500"
  gradient: SectionGradient
}

// ============================================
// Main Tutorial Data Interface
// ============================================

export interface TutorialData {
  // Basic Info
  id: string
  title: string
  description: string
  slug: string

  // Author
  author: TutorialAuthor

  // Classification
  category: TutorialCategory
  difficulty: TutorialDifficulty
  tags: string[]

  // Stats
  readTime: string
  rating: number
  ratingCount: number
  views: string

  // Dates
  publishedAt: string
  updatedAt: string

  // Navigation
  tableOfContents: TableOfContentsItem[]
  relatedTutorials: RelatedTutorial[]

  // Hero
  hero: {
    image: string
    imageAlt: string
    badge: string
    badgeIcon?: IconName // Use string identifier, e.g., "Sparkles"
    gradientColors: string // Tailwind gradient classes
  }

  // SEO
  seo: {
    keywords: string
    ogImage: string
  }

  // Optional
  comments?: TutorialComment[]

  // Navigation Links
  navigation: {
    prev?: {
      href: string
      label: string
    }
    next?: {
      href: string
      label: string
    }
  }
}

// ============================================
// Gradient Mapping Utility
// ============================================

export const SECTION_GRADIENTS: Record<SectionGradient, string> = {
  "cyan-blue": "bg-gradient-to-br from-cyan-50 to-blue-50",
  "indigo-purple": "bg-gradient-to-br from-indigo-50 to-purple-50",
  "amber-orange": "bg-gradient-to-br from-amber-50 to-orange-50",
  "emerald-teal": "bg-gradient-to-br from-emerald-50 to-teal-50",
  "red-pink": "bg-gradient-to-br from-red-50 to-pink-50",
  "violet-purple": "bg-gradient-to-br from-violet-50 to-purple-50",
  "blue-cyan": "bg-gradient-to-br from-blue-50 to-cyan-50",
  "pink-rose": "bg-gradient-to-br from-pink-50 to-rose-50",
  card: "bg-card",
}

export const CATEGORY_COLORS: Record<TutorialCategory, { bg: string; text: string }> = {
  Beginner: { bg: "bg-green-100", text: "text-green-800" },
  Intermediate: { bg: "bg-blue-100", text: "text-blue-800" },
  Advanced: { bg: "bg-purple-100", text: "text-purple-800" },
  Marketing: { bg: "bg-orange-100", text: "text-orange-800" },
  Cinematic: { bg: "bg-pink-100", text: "text-pink-800" },
}

// ============================================
// Default Values
// ============================================

export const DEFAULT_AUTHOR: TutorialAuthor = {
  name: "Dr. Emily Rodriguez",
  avatar: "/placeholder.svg?height=40&width=40",
  bio: "AI Research Specialist & Google Developer Expert",
  followers: "18.2k",
  expertise: "Computer Vision, AI Image Processing",
}

export const DEFAULT_COMMENTS: TutorialComment[] = [
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
      "This tutorial is absolutely fantastic! The step-by-step approach and real examples made all the difference.",
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
      "Excellent content! This has completely transformed my workflow. Thank you for the detailed explanations!",
    likes: 18,
  },
]
