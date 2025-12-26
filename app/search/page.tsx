import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Clock, Filter, ImageIcon, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Search Results | Nano Banana Tutorials",
  description:
    "Find the perfect Nano Banana AI tutorial for your needs. Search through our comprehensive library of guides and techniques.",
  robots: "noindex, follow",
  alternates: {
    canonical: "https://nanobanana.fans/search",
  },
}

const searchResults = [
  {
    id: 1,
    title: "Getting Started with Nano Banana AI",
    description:
      "Complete beginner's guide to Google's revolutionary AI image editing tool. Learn setup, basic concepts, and your first edits.",
    category: "Beginner",
    readTime: "15 min",
    rating: 4.9,
    views: "12.5k",
    difficulty: "beginner",
    tags: ["Setup", "Basics", "First Steps"],
    url: "/tutorials/getting-started",
  },
  {
    id: 2,
    title: "Character Consistency Mastery",
    description:
      "Master the art of maintaining character likeness across multiple edits and transformations with advanced techniques.",
    category: "Intermediate",
    readTime: "25 min",
    rating: 4.8,
    views: "8.2k",
    difficulty: "intermediate",
    tags: ["Character", "Consistency", "Advanced"],
    url: "/tutorials/character-consistency",
  },
  {
    id: 3,
    title: "Multi-Turn Editing Techniques",
    description:
      "Advanced strategies for complex multi-step edits while preserving image quality and maintaining consistency.",
    category: "Advanced",
    readTime: "35 min",
    rating: 4.7,
    views: "6.1k",
    difficulty: "advanced",
    tags: ["Multi-turn", "Complex", "Quality"],
    url: "/tutorials/multi-turn-editing",
  },
]

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    category?: string;
    difficulty?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.search || ""
  const category = resolvedSearchParams.category || "all"
  const difficulty = resolvedSearchParams.difficulty || "all"

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath="/search" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
              {query ? `Search Results for "${query}"` : "Search Tutorials"}
            </h1>
            <p className="text-muted-foreground mb-6">
              {query
                ? `Found ${searchResults.length} tutorials matching your search`
                : "Find the perfect tutorial for your needs"}
            </p>

            {/* Search Form */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search tutorials, techniques, or topics..."
                  defaultValue={query}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue={difficulty}>
                  <SelectTrigger className="w-40">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                <Button>Search</Button>
              </div>
            </div>

            {/* Active Filters */}
            {(query || category !== "all" || difficulty !== "all") && (
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {query && <Badge variant="secondary">Search: {query}</Badge>}
                {difficulty !== "all" && <Badge variant="secondary">Level: {difficulty}</Badge>}
                <Link href="/search" className="text-sm text-primary hover:underline">
                  Clear all
                </Link>
              </div>
            )}
          </div>

          {/* Search Results */}
          <div className="space-y-6">
            {searchResults.map((tutorial) => (
              <Card key={tutorial.id} className="group hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-primary/40" />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            tutorial.difficulty === "beginner"
                              ? "secondary"
                              : tutorial.difficulty === "intermediate"
                                ? "outline"
                                : "default"
                          }
                        >
                          {tutorial.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                          {tutorial.rating}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {tutorial.readTime}
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        <Link href={tutorial.url}>{tutorial.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{tutorial.description}</CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tutorial.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{tutorial.views} views</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <Link href={tutorial.url}>
                            Read Tutorial
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {searchResults.length === 0 && query && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">No tutorials found</h2>
              <p className="text-muted-foreground mb-6">
                We couldn&apos;t find any tutorials matching &quot;{query}&quot;. Try adjusting your search terms.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["getting started", "character consistency", "API integration", "multi-turn editing"].map((term) => (
                    <Link
                      key={term}
                      href={`/search?search=${encodeURIComponent(term)}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {term}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {searchResults.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
