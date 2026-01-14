import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Star,
  Clock,
  Eye,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  MessageCircle,
  ThumbsUp,
  Download,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import { getTutorialMetadata } from "@/data/tutorials"
import { notFound } from "next/navigation"
import { AdInArticle, AdSidebar } from "@/components/ads/AdSenseUnit"

// This would typically come from a database or CMS
const tutorialData = {
  id: 1,
  title: "Getting Started with Nano Banana AI",
  description:
    "Complete beginner's guide to Google's revolutionary AI image editing tool. Learn setup, basic concepts, and your first edits.",
  content: `
# Getting Started with Nano Banana AI

Welcome to the world of AI-powered image editing! Google's Nano Banana represents a revolutionary leap forward in artificial intelligence image manipulation, offering professional-grade results with unprecedented ease of use.

## What is Nano Banana?

Nano Banana is Google's latest AI image editing model, integrated into the Gemini app and available within Gemini 2.5 Flash. It's considered the top-rated image editing model globally, offering pro-level results in seconds with impressive consistency.

### Key Features

- **Character Consistency**: Maintains a character's likeness across edits
- **Multi-turn Editing**: Allows specific parts of an image to be altered while preserving the rest
- **Style Transfer**: Apply the style of one image to objects in another
- **Professional Results**: Surpasses other tools like Midjourney in consistency and quality

## Getting Access to Nano Banana

There are several ways to access Nano Banana:

### Method 1: Google Gemini App (Recommended)
1. Visit the official Gemini web or mobile application
2. Upload your image and explain what you want to do to it
3. Use natural language instructions like "Edit to change the background to a mountain landscape"
4. Refine and repeat edits as needed

### Method 2: Google AI Studio (Free)
1. Go to aistudio.google.com
2. Click on "Generate media" in the left-hand menu
3. Select "Gemini Native Image"
4. Upload your photos and write detailed prompts
5. Click the run button to generate your new image

### Method 3: Third-party Platforms
- **LMArena**: Access through lmarena.ai with roughly 20% chance per generation
- **Xole AI**: Easiest way with preset prompts and style templates

## Your First Edit

Let's walk through creating your first Nano Banana edit:

### Step 1: Choose Your Image
Start with a high-quality image that has:
- Clear subjects
- Good lighting
- Minimal background clutter

### Step 2: Write Your Prompt
Be specific with your instructions:
- ❌ "Make it better"
- ✅ "Change the background to a sunset beach scene while keeping the person exactly the same"

### Step 3: Review and Refine
- Check the results carefully
- Make small, gradual changes rather than dramatic transformations
- Use multi-turn editing for complex modifications

## Best Practices for Optimal Results

### Prompt Writing Tips
1. **Be Specific**: Detailed descriptions yield better results
2. **Use Reference Images**: Provide multiple images for context when possible
3. **Gradual Changes**: Make small modifications to maintain consistency
4. **Iterate**: Be prepared to retry prompts as results can vary

### Common Mistakes to Avoid
- Using vague or ambiguous language
- Requesting too many changes at once
- Not providing enough context
- Ignoring the original image composition

## Understanding the Technology

Nano Banana uses advanced machine learning algorithms to:
- Analyze image content and structure
- Understand natural language instructions
- Generate realistic modifications
- Maintain visual consistency across edits

### Character Consistency Technology
The model excels at maintaining character likeness by:
- Analyzing facial features and proportions
- Preserving unique characteristics
- Adapting to different poses and expressions
- Ensuring continuity across multiple edits

## Next Steps

Now that you understand the basics, you're ready to:
1. Practice with simple edits
2. Experiment with different prompt styles
3. Explore character consistency features
4. Try multi-turn editing techniques

Continue your learning journey with our intermediate tutorials on character consistency and advanced editing techniques.
  `,
  author: {
    name: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    bio: "AI Research Specialist at Google",
    followers: "12.5k",
  },
  category: "Beginner",
  difficulty: "beginner",
  readTime: "15 min",
  rating: 4.9,
  ratingCount: 234,
  views: "12.5k",
  publishedAt: "2024-01-15",
  updatedAt: "2024-01-20",
  tags: ["Setup", "Basics", "First Steps", "Beginner Guide"],
  tableOfContents: [
    { id: "what-is-nano-banana", title: "What is Nano Banana?", level: 2 },
    { id: "getting-access", title: "Getting Access to Nano Banana", level: 2 },
    { id: "your-first-edit", title: "Your First Edit", level: 2 },
    { id: "best-practices", title: "Best Practices for Optimal Results", level: 2 },
    { id: "understanding-technology", title: "Understanding the Technology", level: 2 },
    { id: "next-steps", title: "Next Steps", level: 2 },
  ],
  relatedTutorials: [
    {
      id: 2,
      title: "Character Consistency Mastery",
      category: "Intermediate",
      readTime: "25 min",
      rating: 4.8,
    },
    {
      id: 5,
      title: "Product Photography with AI",
      category: "Intermediate",
      readTime: "20 min",
      rating: 4.6,
    },
    {
      id: 7,
      title: "Style Transfer Techniques",
      category: "Intermediate",
      readTime: "30 min",
      rating: 4.7,
    },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const tutorial = getTutorialMetadata(slug)

  if (!tutorial) {
    return {
      title: 'Tutorial Not Found | Nano Banana',
    }
  }

  const baseUrl = 'https://nanobanana.fans'
  const tutorialUrl = `${baseUrl}/tutorials/${slug}`

  return {
    title: tutorial.title,
    description: tutorial.description,
    keywords: tutorial.keywords.join(', '),
    authors: [{ name: 'Nano Banana Tutorial Team' }],
    alternates: {
      canonical: tutorialUrl,
    },
    openGraph: {
      title: tutorial.title,
      description: tutorial.description,
      type: 'article',
      publishedTime: '2024-01-01',
      modifiedTime: tutorial.lastModified,
      authors: ['Nano Banana Tutorial Team'],
      tags: tutorial.keywords,
      url: tutorialUrl,
      images: tutorial.ogImage ? [
        {
          url: tutorial.ogImage,
          width: 1200,
          height: 630,
          alt: tutorial.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: tutorial.title,
      description: tutorial.description,
      images: tutorial.ogImage ? [tutorial.ogImage] : [],
    },
  }
}

export default async function TutorialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: `https://nanobanana.fans/tutorials/${slug}`,
          image: "https://nanobanana.fans/og-image.jpg",
          datePublished: tutorialData.publishedAt,
          dateModified: tutorialData.updatedAt,
          author: {
            name: tutorialData.author.name,
            type: "Person",
          },
          keywords: tutorialData.tags,
          category: tutorialData.category,
          difficulty: tutorialData.difficulty,
          readTime: tutorialData.readTime,
          rating: {
            value: tutorialData.rating,
            count: tutorialData.ratingCount,
          },
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nanobanana.fans" },
          { name: "Tutorials", url: "https://nanobanana.fans/tutorials" },
          { name: tutorialData.title, url: `https://nanobanana.fans/tutorials/${slug}` },
        ]}
      />

      {/* Header */}
      <Header currentPath={`/tutorials/${slug}`} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/tutorials" className="hover:text-foreground transition-colors">
              Tutorials
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{tutorialData.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Tutorial Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant={tutorialData.difficulty === "beginner" ? "secondary" : "outline"}>
                  {tutorialData.category}
                </Badge>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                  {tutorialData.rating} ({tutorialData.ratingCount} reviews)
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {tutorialData.readTime}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Eye className="h-4 w-4 mr-1" />
                  {tutorialData.views} views
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance font-[family-name:var(--font-space-grotesk)]">
                {tutorialData.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{tutorialData.description}</p>

              {/* Author and Actions */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-card rounded-lg">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={tutorialData.author.avatar || "/placeholder.svg"}
                      alt={tutorialData.author.name}
                    />
                    <AvatarFallback>
                      {tutorialData.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{tutorialData.author.name}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.bio}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.followers} followers</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tutorialData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <Card className="mb-8">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Reading Progress</span>
                  <span className="text-sm text-muted-foreground">0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </CardContent>
            </Card>

            {/* AdSense In-Article */}
            <div className="mb-8">
              <AdInArticle />
            </div>

            {/* Tutorial Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  What is Nano Banana?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Nano Banana is Google's latest AI image editing model, integrated into the Gemini app and available
                  within Gemini 2.5 Flash. It's considered the top-rated image editing model globally, offering
                  pro-level results in seconds with impressive consistency.
                </p>

                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Character Consistency:</strong> Maintains a character's likeness across edits
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Multi-turn Editing:</strong> Allows specific parts of an image to be altered while
                      preserving the rest
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Style Transfer:</strong> Apply the style of one image to objects in another
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Professional Results:</strong> Surpasses other tools like Midjourney in consistency and
                      quality
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Getting Access to Nano Banana
                </h2>
                <p className="text-muted-foreground mb-6">There are several ways to access Nano Banana:</p>

                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Method 1: Google Gemini App (Recommended)</h3>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Visit the official Gemini web or mobile application</li>
                      <li>Upload your image and explain what you want to do to it</li>
                      <li>
                        Use natural language instructions like "Edit to change the background to a mountain landscape"
                      </li>
                      <li>Refine and repeat edits as needed</li>
                    </ol>
                  </div>

                  <div className="border-l-4 border-secondary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Method 2: Google AI Studio (Free)</h3>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Go to aistudio.google.com</li>
                      <li>Click on "Generate media" in the left-hand menu</li>
                      <li>Select "Gemini Native Image"</li>
                      <li>Upload your photos and write detailed prompts</li>
                      <li>Click the run button to generate your new image</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
                  Your First Edit
                </h2>
                <p className="text-muted-foreground mb-4">Let's walk through creating your first Nano Banana edit:</p>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Step 1: Choose Your Image</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Start with a high-quality image that has clear subjects, good lighting, and minimal background
                        clutter.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Step 2: Write Your Prompt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Be specific with your instructions. Use detailed descriptions rather than vague requests.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Step 3: Review and Refine</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Check results carefully and make gradual changes using multi-turn editing for complex
                        modifications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
                Previous Tutorial
              </Button>
              <Button className="flex items-center gap-2">
                Next Tutorial
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* AdSense In-Article */}
            <div className="my-8">
              <AdInArticle />
            </div>

            {/* Comments Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Comments (12)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-sm">John Doe</span>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Great tutorial! The step-by-step approach made it really easy to follow along. Looking forward
                        to trying the character consistency techniques.
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          <ThumbsUp className="h-3 w-3 mr-1" />5
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Table of Contents</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tutorialData.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm hover:text-primary transition-colors ${
                        item.level === 2 ? "font-medium" : "ml-4 text-muted-foreground"
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Tutorial Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tutorial Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Difficulty</span>
                    <Badge variant="secondary">{tutorialData.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Read Time</span>
                    <span className="text-sm font-medium">{tutorialData.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Views</span>
                    <span className="text-sm font-medium">{tutorialData.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current text-yellow-500" />
                      <span className="text-sm font-medium">{tutorialData.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AdSense Sidebar */}
              <AdSidebar />

              {/* Related Tutorials */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tutorialData.relatedTutorials.map((tutorial) => (
                    <div key={tutorial.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ImageIcon className="h-6 w-6 text-primary/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1">{tutorial.title}</h3>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {tutorial.category}
                          </Badge>
                          <span>{tutorial.readTime}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-current text-yellow-500 mr-1" />
                            {tutorial.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Get the latest Nano Banana tutorials and tips delivered to your inbox.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
