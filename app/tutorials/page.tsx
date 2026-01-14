import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Clock, Filter, BookOpen, Users, ImageIcon, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import dynamic from 'next/dynamic'
import { AdBanner, AdInArticle } from "@/components/ads/AdSenseUnit"

// 动态导入SEO组件以避免ChunkLoadError
const SchemaOrg = dynamic(() => import("@/components/seo-schema").then(mod => ({ default: mod.SchemaOrg })), {
  ssr: true,
  loading: () => null
})

const BreadcrumbSchema = dynamic(() => import("@/components/seo-schema").then(mod => ({ default: mod.BreadcrumbSchema })), {
  ssr: true,
  loading: () => null
})

const CourseSchema = dynamic(() => import("@/components/seo-schema").then(mod => ({ default: mod.CourseSchema })), {
  ssr: true,
  loading: () => null
})
import { link } from "fs"

export const metadata: Metadata = {
  title: "Nano Banana Tutorials - Complete Learning Library | AI Image Editing Guides",
  description:
    "Browse our comprehensive collection of Nano Banana AI tutorials. From beginner guides to advanced techniques, master Google's revolutionary image editing technology.",
  keywords:
    "Nano Banana tutorials, AI image editing guides, Google Gemini tutorials, character consistency, multi-turn editing, image generation tutorials",
  alternates: {
    canonical: "https://nanobanana.fans/tutorials",
  },
  openGraph: {
    title: "Nano Banana Tutorials - Complete Learning Library",
    description:
      "Browse our comprehensive collection of Nano Banana AI tutorials and master Google's revolutionary image editing technology.",
    type: "website",
    url: "https://nanobanana.fans/tutorials",
  },
}

const tutorialCategories = [
  { id: "all", name: "All Tutorials", count: 27 },
  { id: "beginner", name: "Beginner", count: 8 },
  { id: "intermediate", name: "Intermediate", count: 12 },
  { id: "advanced", name: "Advanced", count: 7 },
  { id: "character-consistency", name: "Character Consistency", count: 5 },
  { id: "multi-turn-editing", name: "Multi-turn Editing", count: 4 },
  { id: "api-integration", name: "API Integration", count: 3 },
]

const featuredTutorials = [
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
    featured: true,
    cover: "/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
    link: "/tutorials/getting-started",
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
    featured: true,
    cover: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
    link: "/tutorials/character-consistency",
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
    featured: false,
    cover: "/Multi-Turn Editing.avif",
    link: "/tutorials/multi-turn-editing",
  },
  {
    id: 4,
    title: "Building Cinematic Universes",
    description:
      "Create cohesive visual narratives by transforming single images into complete cinematic scenes and environments.",
    category: "Advanced",
    readTime: "40 min",
    rating: 4.9,
    views: "5.8k",
    difficulty: "advanced",
    tags: ["Cinematic", "Scenes", "Creative"],
    featured: false,
    cover: "/Cinematic Universes with Nano Banana.jpg",
    link: "/tutorials/building-cinematic-universes",
  },
  {
    id: 5,
    title: "Product Photography with AI",
    description:
      "Transform ordinary product shots into professional marketing materials using Nano Banana's advanced editing capabilities.",
    category: "Intermediate",
    readTime: "20 min",
    rating: 4.6,
    views: "9.3k",
    difficulty: "intermediate",
    tags: ["Product", "Photography", "Marketing"],
    featured: false,
    cover: "/tutorials/Product Photography with AI.jpg",
    link: "/tutorials/product-photography-with-ai",
  },
  {
    id: 6,
    title: "API Integration Guide",
    description:
      "Learn how to integrate Nano Banana into your applications using Google AI Studio and Vertex AI platforms.",
    category: "Advanced",
    readTime: "45 min",
    rating: 4.8,
    views: "4.2k",
    difficulty: "advanced",
    tags: ["API", "Integration", "Development"],
    featured: false,
    cover: "/tutorials/api-integration.jpg",
    link: "/tutorials/api-integration",
  },
  {
    id: 7,
    title: "Style Transfer Techniques",
    description:
      "Apply artistic styles and textures from one image to another while maintaining subject integrity and quality.",
    category: "Intermediate",
    readTime: "30 min",
    rating: 4.7,
    views: "7.1k",
    difficulty: "intermediate",
    tags: ["Style", "Transfer", "Artistic"],
    featured: false,
    cover: "/tutorials/style-transfer-techniques.jpg",
    link: "/tutorials/style-transfer-techniques",
  },
  {
    id: 8,
    title: "Prompt Engineering Mastery",
    description:
      "Master the art of crafting effective prompts that generate exactly what you envision with Nano Banana AI.",
    category: "Advanced",
    readTime: "25 min",
    rating: 4.9,
    views: "12.5k",
    difficulty: "advanced",
    tags: ["Prompt Engineering", "AI Writing", "Advanced Techniques"],
    featured: false,
    cover: "/tutorials/prompt-engineering-cover.jpg",
    link: "/tutorials/prompt-engineering",
  },
  {
    id: 9,
    title: "Advanced Techniques with Nano Banana AI",
    description:
      "Elevate your Nano Banana skills to a professional level with these advanced techniques for complex image editing tasks.",
    category: "Advanced",
    readTime: "28 min",
    rating: 4.9,
    views: "9.8k",
    difficulty: "advanced",
    tags: ["Advanced Techniques", "Professional Workflows", "Creative Editing"],
    featured: false,
    cover: "/tutorials/advanced-techniques-cover.jpg",
    link: "/tutorials/advanced-techniques",
  },
]

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Schema Components */}
      <SchemaOrg
        type="website"
        data={{
          title: "Nano Banana Tutorials - Complete Learning Library",
          description:
            "Browse our comprehensive collection of Nano Banana AI tutorials. From beginner guides to advanced techniques, master Google's revolutionary image editing technology.",
          url: "https://nanobanana.fans/tutorials",
          keywords: ["Nano Banana tutorials", "AI image editing guides", "Google Gemini tutorials", "character consistency", "multi-turn editing", "AI photography"],
        }}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nanobanana.fans/" },
          { name: "Tutorials", url: "https://nanobanana.fans/tutorials" }
        ]}
      />
      
      <CourseSchema
        data={{
          name: "Nano Banana AI Image Editing Mastery Course",
          description: "Comprehensive course covering all aspects of Google's Nano Banana AI image editing technology, from beginner basics to advanced professional techniques.",
          url: "https://nanobanana.fans/tutorials",
          provider: "Nano Banana Tutorial Platform",
          educationalLevel: "Beginner to Advanced",
          inLanguage: "en",
          about: "AI Image Editing with Google's Nano Banana",
          teaches: [
            "Character consistency techniques",
            "Multi-turn editing strategies",
            "Prompt engineering for Nano Banana",
            "Digital art creation with AI",
            "Photo enhancement and manipulation",
            "Style transfer techniques",
            "API integration methods",
            "Cinematic scene creation",
            "Product photography enhancement"
          ],
          duration: "PT3H",
          hasCourseInstance: {
            courseMode: "online",
            instructor: "Nano Banana Tutorial Platform"
          }
        }}
      />

      <Header currentPath="/tutorials" />

      {/* Page Header */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
              Nano Banana Tutorials
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Master Google's revolutionary AI image editing technology with our comprehensive collection of tutorials,
              from beginner basics to advanced professional techniques.
            </p>

            {/* Search and Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search tutorials, techniques, or topics..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
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
                <Select defaultValue="newest">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tutorialCategories.map((category) => (
                    <button
                      key={category.id}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-accent transition-colors ${
                        category.id === "all" ? "bg-accent text-accent-foreground" : ""
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">27</div>
                      <div className="text-sm text-muted-foreground">Total Tutorials</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">15.2k</div>
                      <div className="text-sm text-muted-foreground">Active Learners</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">4.8</div>
                      <div className="text-sm text-muted-foreground">Avg Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Featured Tutorials */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">Featured Tutorials</h2>
                <Badge variant="secondary">Editor's Choice</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {featuredTutorials
                  .filter((t) => t.featured)
                  .map((tutorial) => (
                    <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300">
                      <Link href={tutorial.link || '#'} title={tutorial.title}>
                        <div className="aspect-video rounded-t-lg overflow-hidden relative">
                          <img src={tutorial.cover || "/placeholder.jpg"} alt={tutorial.title} className="w-full h-full object-cover" />
                          <Badge className="absolute top-3 left-3">Featured</Badge>
                        </div>
                      </Link>
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
                        <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                          <Link href={tutorial.link || '#'}>{tutorial.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4 line-clamp-2">{tutorial.description}</CardDescription>
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
                            className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            asChild
                          >
                            <Link href={tutorial.link || '#'}>
                              Read Tutorial
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* AdSense Banner */}
            <div className="container mx-auto py-6">
              <AdBanner />
            </div>

            {/* All Tutorials */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">All Tutorials</h2>
                <div className="text-sm text-muted-foreground">
                  Showing {featuredTutorials.length} of {featuredTutorials.length} tutorials
                </div>
              </div>

              <div className="grid gap-6">
                {featuredTutorials.slice(0, 2).map((tutorial) => (
                  <Card key={tutorial.id} className="group hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <img src={tutorial.cover || "/placeholder.jpg"} alt={tutorial.title} className="w-full h-full object-cover" />
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
                            {tutorial.featured && <Badge variant="secondary">Featured</Badge>}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">{tutorial.title}</CardTitle>
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
                            <Link href={tutorial.link || '#'} title={tutorial.title}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            >
                              Read Tutorial
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </div>

                    </div>
                  </Card>
                ))}

                {/* AdSense In-Article */}
                <div className="container mx-auto py-4">
                  <AdInArticle />
                </div>

                {featuredTutorials.slice(2).map((tutorial) => (
                  <Card key={tutorial.id} className="group hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-48 aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <img src={tutorial.cover || "/placeholder.jpg"} alt={tutorial.title} className="w-full h-full object-cover" />
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
                            {tutorial.featured && <Badge variant="secondary">Featured</Badge>}
                          </div>
                          <CardTitle className="group-hover:text-primary transition-colors">{tutorial.title}</CardTitle>
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
                            <Link href={tutorial.link || '#'} title={tutorial.title}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                            >
                              Read Tutorial
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </div>

                    </div>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Load More Tutorials
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Never Miss a Tutorial
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified when we publish new Nano Banana tutorials and techniques. Join our community of AI image
            editing enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
