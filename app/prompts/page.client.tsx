"use client"

import { useMemo, useState, useCallback, useEffect } from "react"
import { Header } from "@/components/header"
import Hero from "./Hero"
import CategoryFilter from "./CategoryFilter"
import PromptGrid from "./PromptGrid"
import { PromptsSchema } from "./schema"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { categories as baseCategories, prompts as dataPrompts } from "@/data/prompts"
import dynamic from 'next/dynamic'

// 动态导入SEO组件以避免ChunkLoadError
const SchemaOrg = dynamic(() => import("@/components/seo-schema").then(mod => ({ default: mod.SchemaOrg })), {
  ssr: true,
  loading: () => null
})

const BreadcrumbSchema = dynamic(() => import("@/components/seo-schema").then(mod => ({ default: mod.BreadcrumbSchema })), {
  ssr: true,
  loading: () => null
})

// 懒加载 Footer 组件以优化初始加载性能
const Footer = dynamic(() => import("@/components/footer"), {
  ssr: true,
  loading: () => <footer className="bg-slate-900 h-[400px]" /> // Placeholder with fixed height to prevent CLS
})

// Custom debounce hook for search optimization
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

const PromptPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [query, setQuery] = useState("")
  const [sortBy, setSortBy] = useState("title-asc")

  // Debounce search query for 300ms to reduce re-renders
  const debouncedQuery = useDebounce(query, 300)

  // Compute category counts dynamically from data
  const categories = useMemo(() => {
    const counts: Record<string, number> = dataPrompts.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const normalized = baseCategories.map((c) => ({
      ...c,
      count: c.id === "all" ? dataPrompts.length : counts[c.id] || 0,
    }))

    // Ensure "all" is first
    normalized.sort((a, b) => (a.id === "all" ? -1 : b.id === "all" ? 1 : 0))
    return normalized
  }, [])

  // Filter by category and search query (using debounced query)
  const filteredPrompts = useMemo(() => {
    const byCategory = activeCategory === "all"
      ? dataPrompts
      : dataPrompts.filter((p) => p.category === activeCategory)

    const normalizedQuery = debouncedQuery.trim().toLowerCase()
    const bySearch = normalizedQuery.length
      ? byCategory.filter(
          (p) =>
            p.title.toLowerCase().includes(normalizedQuery) ||
            p.description.toLowerCase().includes(normalizedQuery) ||
            p.prompt.toLowerCase().includes(normalizedQuery)
        )
      : byCategory

    const sorted = [...bySearch].sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
          return a.title.localeCompare(b.title)
        case "title-desc":
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

    return sorted
  }, [activeCategory, debouncedQuery, sortBy])

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Schema Components */}
      <SchemaOrg
        type="searchResults"
        data={{
          title: "Nano Banana Prompts - AI Image Editing Prompt Library",
          description: "Browse our comprehensive collection of Nano Banana AI prompts. Find the perfect prompts for character consistency, style transfer, and advanced image editing techniques.",
          url: "https://nanobanana.fans/prompts",
          image: "https://nanobanana.fans/og-image.jpg",
          keywords: ["Nano Banana prompts", "AI image editing prompts", "Google Gemini prompts", "character consistency prompts", "style transfer prompts"],
        }}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nanobanana.fans/" },
          { name: "Prompts", url: "https://nanobanana.fans/prompts" }
        ]}
      />
      
      <PromptsSchema />
      <Header currentPath="/prompts" />
      <main>
        <Hero />

        {/* Search & Sort Bar */}
        <section className="border-b bg-card/50">
          <div className="container mx-auto max-w-6xl py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search prompts, keywords, or text..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Sort</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title-asc">Title A→Z</SelectItem>
                  <SelectItem value="title-desc">Title Z→A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Grid */}
        <PromptGrid prompts={filteredPrompts as any} />
      </main>
      <Footer />
    </div>
  )
}

export default PromptPage