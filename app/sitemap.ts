import type { MetadataRoute } from "next"
import { glob } from "fs/promises"
import path from "path"
import { prompts } from "@/data/prompts"
import { staticPagesUpdates, tutorialPagesUpdates } from "@/data/content-updates"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nanobanana.fans"

  // Static pages with actual lastModified dates from content-updates.ts
  const staticPages = staticPagesUpdates.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Tutorial pages with actual lastModified dates
  const tutorialPages = tutorialPagesUpdates.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  // Fallback: dynamically discover tutorial pages if needed
  if (tutorialPages.length === 0) {
    try {
      const tutorialsPath = path.join(process.cwd(), "app", "tutorials")
      const tutorialFiles = glob(`${tutorialsPath}/*/page.tsx`)

      for await (const file of tutorialFiles) {
        const relativePath = path.relative(tutorialsPath, file)
        const slug = path.dirname(relativePath)

        tutorialPages.push({
          url: `${baseUrl}/tutorials/${slug}`,
          lastModified: new Date().toISOString().split('T')[0], // Convert to YYYY-MM-DD format
          changeFrequency: "weekly" as const,
          priority: 0.8,
        })
      }
    } catch (error) {
      console.error("Error generating tutorial sitemap:", error)
    }
  }

  // Generate prompt detail pages using real data from prompts.ts
  // Use recent update date for prompts (last major update: 2025-12-26)
  const promptDetailPages = prompts.map((prompt) => ({
    url: `${baseUrl}/prompts/${prompt.slug}`,
    lastModified: "2025-12-26", // When prompts were last significantly updated
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
