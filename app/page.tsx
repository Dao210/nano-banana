'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Icon } from "@/components/ui/icon"
import Link from "next/link"
import { Header } from "@/components/header"
import dynamic from 'next/dynamic'
import { getImageBlurData } from '@/lib/image-blur'
import { performanceMonitor } from '@/lib/performance-monitor'
import { useEffect } from 'react'

// 动态导入SEO组件以避免ChunkLoadError - 保持SSR以确保SEO
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

export default function HomePage() {
  // Initialize performance monitoring on client side
  useEffect(() => {
    performanceMonitor.getMetrics()
  }, [])

  return (
    <div className="min-h-screen bg-background tech-grid">
      {/* SEO Schema Components */}
      <SchemaOrg
        type="website"
        data={{
          title: "Nano Banana - AI Image Editing Tutorials & Guides",
          description:
            "Master Google's Nano Banana AI image editing with comprehensive tutorials, step-by-step guides, and expert tips. Learn advanced techniques for AI-powered photo editing, digital art creation, and visual content generation.",
          url: "https://nanobanana.fans/",
          image: "https://nanobanana.fans/og-image.jpg",
          keywords: ["Nano Banana", "Google AI", "image editing", "AI tutorials", "character consistency", "AI prompts", "digital art", "photo editing"],
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nanobanana.fans/" }
        ]}
      />

      <CourseSchema
        data={{
          name: "Nano Banana AI Image Editing Mastery",
          description: "Comprehensive course covering all aspects of Google's Nano Banana AI image editing technology, from beginner basics to advanced techniques.",
          url: "https://nanobanana.fans/",
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
            "API integration methods"
          ],
          duration: "PT2H",
          hasCourseInstance: {
            courseMode: "online",
            instructor: "Nano Banana Tutorial Platform"
          }
        }}
      />

      <Header currentPath="/" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 tech-gradient opacity-5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 tech-glow tech-gradient-accent text-white border-0">
              <Icon name="sparkles" className="mr-2" size={4} />
              Google&apos;s Latest AI Innovation
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold text-balance mb-6 font-[family-name:var(--font-space-grotesk)]">
              Master <span className="tech-text">Nano Banana</span> AI Image Editing
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed max-w-3xl mx-auto">
              Learn Google&apos;s revolutionary Nano Banana AI with comprehensive tutorials, step-by-step guides, and expert
              techniques. From character consistency to advanced multi-turn editing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 tech-button tech-glow" asChild>
                <Link
                  href="/prompts"
                  title="Browse comprehensive Nano Banana AI image editing prompts"
                >
                  <Icon name="book-open" className="mr-2" size={5} />
                  Explore Prompts
                </Link>
              </Button>
              <Button size="lg" className="text-lg px-8 tech-button tech-glow" variant="outline" asChild>
                <Link
                  href="/tutorials"
                  title="Browse comprehensive Nano Banana AI image editing tutorials"
                >
                  <Icon name="book-open" className="mr-2" size={5} />
                  Explore Tutorials
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 glass tech-glow" asChild>
                <Link href="/community" title="Join the Nano Banana AI image editing community">
                  <Icon name="users" className="mr-2" size={5} />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] tech-text">
              Why Choose Our Platform?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The most comprehensive resource for mastering Google&apos;s Nano Banana AI image editing technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center tech-card hover:tech-float transition-transform duration-300 will-change-transform transform-gpu">
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient rounded-full flex items-center justify-center mb-4 tech-glow">
                  <Icon name="zap" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">Expert Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Step-by-step guides from beginner basics to advanced techniques, all created by AI experts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center tech-card hover:tech-float transition-transform duration-300 will-change-transform transform-gpu">
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient-accent rounded-full flex items-center justify-center mb-4 tech-glow">
                  <Icon name="image" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">Real Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Practical examples with before/after comparisons and detailed explanations of each editing process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center tech-card hover:tech-float transition-transform duration-300 will-change-transform transform-gpu">
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient-secondary rounded-full flex items-center justify-center mb-4 tech-glow">
                  <Icon name="palette" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stay current with the latest Nano Banana features, updates, and best practices as they&apos;re released.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prompt Library (New) */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 tech-gradient-secondary opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Prompt <span className="tech-text">Library</span>
              </h2>
              <p className="text-muted-foreground text-lg">Curated prompt templates for faster, better AI results</p>
            </div>
            <Button className="tech-button tech-glow" asChild>
              <Link href="/prompts" title="Browse all AI prompt templates">Browse Prompts</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/prompt/portrait-enhanced.jpg"
                  alt="AI Portrait Enhancer"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('portrait-enhanced')}
                />
                <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient rounded-full flex items-center justify-center mb-4 tech-glow group-hover:tech-pulse">
                  <Icon name="image" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">AI Portrait Enhancer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transform ordinary portraits into professional headshots with enhanced lighting and composition.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge className="tech-glow">Photography</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient tech-text group-hover:bg-transparent" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/prompt/product-minimal.jpg"
                  alt="Minimalist Product Showcase"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('product-minimal')}
                />
                <div className="absolute inset-0 tech-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient-accent rounded-full flex items-center justify-center mb-4 tech-glow group-hover:tech-pulse">
                  <Icon name="palette" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">Minimalist Product Showcase</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create clean, minimalist product photography with professional studio lighting.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge className="tech-glow">E-commerce</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient-accent tech-text group-hover:bg-transparent" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/prompt/fantasy-character.jpg"
                  alt="Fantasy Character Generator"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('fantasy-character')}
                />
                <div className="absolute inset-0 tech-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="mx-auto w-16 h-16 tech-gradient-secondary rounded-full flex items-center justify-center mb-4 tech-glow group-hover:tech-pulse">
                  <Icon name="sparkles" size={8} className="text-white" />
                </div>
                <CardTitle className="text-xl">Fantasy Character Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Transform portraits into fantasy characters with magical elements and costume design.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge className="tech-glow">Character</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient-secondary tech-text group-hover:bg-transparent" asChild>
                    <Link href="/prompts" title="Open Prompt Library">
                      Explore<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 tech-gradient-accent opacity-5"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">
                Featured <span className="tech-text">Tutorials</span>
              </h2>
              <p className="text-muted-foreground text-lg">Start your Nano Banana journey with these popular guides</p>
            </div>
            <Button className="tech-button tech-glow" asChild>
              <Link href="/tutorials" title="View all Nano Banana AI tutorials">View All Tutorials</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg"
                  alt="Getting Started with Nano Banana"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('getting-started')}
                />
                <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="tech-glow">Beginner</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="star" size={4} className="fill-current text-yellow-500 mr-1" />
                    4.9
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  Getting Started with Nano Banana
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Learn the basics of Google&apos;s Nano Banana AI, from setup to your first image edit. Perfect for complete
                  beginners.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline">15 min read</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient tech-text group-hover:bg-transparent" asChild>
                    <Link
                      href="/tutorials/getting-started"
                      title="Getting started guide for Nano Banana AI image editing"
                    >
                      Start Learning<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/new-tutorial-master-consistent-character-faces-with-nanobanana.webp"
                  alt="Character Consistency with Nano Banana"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('character-consistency')}
                />
                <div className="absolute inset-0 tech-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="tech-glow">Intermediate</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="star" size={4} className="fill-current text-yellow-500 mr-1" />
                    4.8
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  Character Consistency Mastery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Master the art of maintaining character likeness across multiple edits and transformations.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline">25 min read</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient-accent tech-text group-hover:bg-transparent" asChild>
                    <Link
                      href="/tutorials/character-consistency"
                      title="Tutorial on mastering character consistency with Nano Banana AI"
                    >
                      Start Learning<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group tech-card hover:scale-[1.02] transition-all duration-300 will-change-transform transform-gpu">
              <div className="aspect-video rounded-t-lg overflow-hidden relative">
                <Image
                  src="/Multi-Turn Editing.avif"
                  alt="Multi-Turn Editing Techniques"
                  fill
                  priority
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={getImageBlurData('multi-turn-editing')}
                />
                <div className="absolute inset-0 tech-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="tech-glow">Advanced</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="star" size={4} className="fill-current text-yellow-500 mr-1" />
                    4.7
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  Multi-Turn Editing Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced strategies for complex multi-step edits while preserving image quality and consistency.
                </CardDescription>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="outline">35 min read</Badge>
                  <Button variant="ghost" size="sm" className="tech-gradient-secondary tech-text group-hover:bg-transparent" asChild>
                    <Link
                      href="/tutorials/multi-turn-editing"
                      title="Advanced multi-turn editing techniques for Nano Banana AI"
                    >
                      Start Learning<Icon name="arrow-right" size={4} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 tech-gradient"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-white tech-neon">
            Ready to Master Nano Banana?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of creators who are already using Nano Banana to transform their image editing workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 glass tech-glow hover:scale-[1.02] transition-transform will-change-transform transform-gpu" asChild>
              <Link href="/tutorials" title="Start learning Nano Banana AI image editing now">Start Learning Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white/20 text-white hover:bg-white/10 glass tech-glow hover:scale-[1.02] transition-transform will-change-transform transform-gpu"
              asChild
            >
              <Link href="/tutorials" title="Browse all Nano Banana AI image editing tutorials">Browse All Tutorials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 flex items-center justify-center">
                  <Image src="/favicon.ico" alt="Logo" width={32} height={32} className="h-8 w-8" />
                </div>
                <span className="font-bold text-xl text-primary font-[family-name:var(--font-space-grotesk)]">
                  Nano Banana
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                The ultimate resource for mastering Google&apos;s Nano Banana AI image editing technology.
              </p>
              <div className="flex space-x-4">
                <Link href="https://twitter.com/Joe84742708" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white p-2">
                    <Icon name="twitter" size={4} />
                  </Button>
                </Link>

                <Link href="https://veo5.art"
                  target="_blank" rel="dofollow">
                  veo5.art
                </Link>


                <Button variant="ghost" size="sm">
                  Discord
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tutorials</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/tutorials/getting-started"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI getting started tutorial"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/character-consistency"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI character consistency tutorial"
                  >
                    Character Consistency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/advanced-techniques"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI advanced techniques tutorial"
                  >
                    Advanced Techniques
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials/api-integration"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI API integration tutorial"
                  >
                    API Integration
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="https://pinkpfp.com"
                    rel='dofollow'
                    target='_blank'
                    className="hover:text-foreground transition-colors"
                    title="pink pfp generator with Nano Banana AI"
                  >
                    Pink pfp
                  </Link>
                </li>
                <li>
                  <Link
                    href="/examples"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI image editing examples"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI user community"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-foreground transition-colors"
                    title="Nano Banana AI support resources"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">Get the latest tutorials and Nano Banana updates.</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 Nano Banana Fans. All rights reserved.not affiliated with Google.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Nano Banana privacy policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Nano Banana terms of service"
              >
                Terms of Service
              </Link>
              <Link
                href="mailto:idealtop@outlook.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                title="Email Nano Banana team"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}