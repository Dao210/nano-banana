import type { MetadataRoute } from "next"
import { glob } from "fs/promises"
import path from "path"
import { prompts } from "@/data/prompts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nanobanana.fans"
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/prompts`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/figure-generate`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/article-generator-demo`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ]

  // Tutorial pages - dynamically generated from file system
  const tutorialPages = []
  try {
    const tutorialsPath = path.join(process.cwd(), "app", "tutorials")
    const tutorialFiles = glob(`${tutorialsPath}/*/page.tsx`)

    for await (const file of tutorialFiles) {
      const relativePath = path.relative(tutorialsPath, file)
      const slug = path.dirname(relativePath)
      
      tutorialPages.push({
        url: `${baseUrl}/tutorials/${slug}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })
    }
  } catch (error) {
    console.error("Error generating tutorial sitemap:", error)
    // Fallback to hardcoded list
    const tutorialSlugs = [
      "getting-started",
      "character-consistency",
      "multi-turn-editing",
      "building-cinematic-universes",
      "product-photography-with-ai",
      "api-integration",
      "style-transfer-techniques",
      "advanced-techniques",
      "prompt-engineering"
    ]

    tutorialPages.push(...tutorialSlugs.map((slug) => ({
      url: `${baseUrl}/tutorials/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })))
  }

  // Generate prompt detail pages using real data from prompts.ts
  const promptDetailPages = prompts.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...tutorialPages,
    ...promptDetailPages
  ]

  // Sort by priority (highest first)
  return allPages.sort((a, b) => b.priority - a.priority)
}
