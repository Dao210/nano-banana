import type { Metadata } from "next"
import type { TutorialData } from "@/types/tutorial"

const BASE_URL = "https://nanobanana.fans"

/**
 * Generates Next.js Metadata for a tutorial page
 * Includes OpenGraph and Twitter card metadata for SEO
 */
export function generateTutorialMetadata(tutorial: TutorialData): Metadata {
  const fullTitle = `${tutorial.title} | Nano Banana Fans`
  const url = `${BASE_URL}/tutorials/${tutorial.slug}`

  return {
    title: fullTitle,
    description: tutorial.description,
    keywords: tutorial.seo.keywords,
    authors: [{ name: tutorial.author.name }],
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      type: "article",
      publishedTime: `${tutorial.publishedAt}T00:00:00.000Z`,
      modifiedTime: `${tutorial.updatedAt}T00:00:00.000Z`,
      authors: [tutorial.author.name],
      tags: tutorial.tags,
      images: [
        {
          url: tutorial.seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${tutorial.title} Tutorial Cover`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tutorial.title,
      description: tutorial.description,
      images: [tutorial.seo.ogImage],
    },
  }
}

/**
 * Generates breadcrumb items for Schema.org
 */
export function generateBreadcrumbItems(tutorial: TutorialData) {
  return [
    { name: "Home", url: BASE_URL },
    { name: "Tutorials", url: `${BASE_URL}/tutorials` },
    { name: tutorial.title, url: `${BASE_URL}/tutorials/${tutorial.slug}` },
  ]
}

/**
 * Generates Schema.org data for tutorial
 */
export function generateSchemaOrgData(tutorial: TutorialData) {
  return {
    title: tutorial.title,
    description: tutorial.description,
    url: `${BASE_URL}/tutorials/${tutorial.slug}`,
    image: tutorial.seo.ogImage,
    datePublished: tutorial.publishedAt,
    dateModified: tutorial.updatedAt,
    author: {
      name: tutorial.author.name,
      type: "Person" as const,
    },
    keywords: tutorial.tags,
    category: tutorial.category,
    difficulty: tutorial.difficulty,
    readTime: tutorial.readTime,
    rating: {
      value: tutorial.rating,
      count: tutorial.ratingCount,
    },
  }
}

/**
 * Format date for display
 */
export function formatTutorialDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
