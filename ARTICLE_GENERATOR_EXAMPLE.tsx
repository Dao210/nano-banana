// Nano Banana Tutorial Article Generator 使用示例
// 展示如何使用文章生成模板创建新文章

import { generateArticleConfig } from './ARTICLE_GENERATOR_TEMPLATE';

// 示例1：基于关键词生成人物处理教程
export function generateCharacterConsistencyTutorial() {
  const keywords = ["character consistency", "portrait editing", "face preservation"];
  const config = generateArticleConfig(keywords);
  
  console.log('生成的文章配置:', config);
  return config;
}

// 示例2：基于关键词生成产品摄影教程
export function generateProductPhotographyTutorial() {
  const keywords = ["product photography", "ecommerce", "background removal"];
  const config = generateArticleConfig(keywords);
  
  console.log('生成的文章配置:', config);
  return config;
}

// 示例3：基于关键词生成API集成教程
export function generateAPIIntegrationTutorial() {
  const keywords = ["api integration", "development", "programming"];
  const config = generateArticleConfig(keywords);
  
  console.log('生成的文章配置:', config);
  return config;
}

// 示例4：基于关键词生成入门教程
export function generateBeginnerTutorial() {
  const keywords = ["beginner", "getting started", "basic tutorial"];
  const config = generateArticleConfig(keywords);
  
  console.log('生成的文章配置:', config);
  return config;
}

// 示例5：批量生成教程
export function generateMultipleTutorials() {
  const keywordSets = [
    ["character consistency", "multi-turn editing"],
    ["product photography", "commercial imaging"],
    ["cinematic scenes", "background generation"],
    ["api integration", "development guide"],
    ["beginner tutorial", "getting started"],
    ["creative design", "artistic editing"],
  ];
  
  const tutorials = keywordSets.map(keywords => ({
    keywords,
    config: generateArticleConfig(keywords)
  }));
  
  console.log('批量生成的教程:', tutorials);
  return tutorials;
}

// 使用示例
export function exampleUsage() {
  // 生成单个教程
  const characterTutorial = generateCharacterConsistencyTutorial();
  
  // 生成产品摄影教程
  const productTutorial = generateProductPhotographyTutorial();
  
  // 生成API集成教程
  const apiTutorial = generateAPIIntegrationTutorial();
  
  // 批量生成
  const multipleTutorials = generateMultipleTutorials();
  
  return {
    characterTutorial,
    productTutorial,
    apiTutorial,
    multipleTutorials
  };
}

// 文章组件生成函数（简化版，避免TypeScript错误）
export function createTutorialPage(config: any) {
  return {
    // 文件路径
    filePath: `app/tutorials/${config.id}/page.tsx`,
    
    // 文件内容模板
    fileContent: `
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star, Clock, Eye, Share2, Bookmark, ChevronLeft, ChevronRight, ImageIcon, MessageCircle, ThumbsUp, Download, CheckCircle, Sparkles, Target, Lightbulb, AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "${config.title} | Nano Banana Tutorials",
  description: "${config.description}",
  keywords: "${config.seo.keywords}",
  authors: [{ name: "${config.author.name}" }],
  openGraph: {
    title: "${config.title}",
    description: "${config.description}",
    type: "article",
    publishedTime: "${config.stats.publishedAt}",
    modifiedTime: "${config.stats.updatedAt}",
    authors: ["${config.author.name}"],
    tags: ${JSON.stringify(config.seo.tags)},
    images: [
      {
        url: "${config.content.hero.coverImage}",
        width: 1200,
        height: 630,
        alt: "${config.title} Tutorial Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "${config.title}",
    description: "${config.description}",
    images: ["${config.content.hero.coverImage}"],
  },
}

const tutorialData = {
  id: "${config.id}",
  title: "${config.title}",
  description: "${config.description}",
  author: {
    name: "${config.author.name}",
    avatar: "${config.author.avatar || "/placeholder.svg"}",
    bio: "${config.author.bio}",
    followers: "${config.author.followers}",
    expertise: "${config.author.expertise}",
  },
  category: "${config.category}",
  difficulty: "${config.difficulty}",
  readTime: "${config.stats.readTime}",
  rating: ${config.stats.rating},
  ratingCount: ${config.stats.ratingCount},
  views: "${config.stats.views}",
  publishedAt: "${config.stats.publishedAt}",
  updatedAt: "${config.stats.updatedAt}",
  tags: ${JSON.stringify(config.seo.tags)},
  tableOfContents: ${JSON.stringify(config.content.sections.map((section: any) => ({
    id: section.id,
    title: section.title,
    level: 2
  })))},
  relatedTutorials: ${JSON.stringify(config.content.sidebar.relatedTutorials || [])},
}

export default function ${config.id.charAt(0).toUpperCase() + config.id.slice(1)}Page() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="tutorial"
        data={{
          title: tutorialData.title,
          description: tutorialData.description,
          url: "https://nano.theskills.ai/tutorials/${config.id}",
          image: "${config.content.hero.coverImage}",
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
          { name: "Home", url: "https://nano.theskills.ai" },
          { name: "Tutorials", url: "https://nano.theskills.ai/tutorials" },
          { name: tutorialData.title, url: "https://nano.theskills.ai/tutorials/${config.id}" },
        ]}
      />

      <Header currentPath="/tutorials/${config.id}" />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
        <Image
          src="${config.content.hero.coverImage}"
          alt="${config.title} Tutorial Cover"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <${config.content.hero.badge.icon} className="h-3 w-3 mr-1" />
            ${config.content.hero.badge.text}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
            {tutorialData.title}
          </h1>
        </div>
      </div>

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
            <span className="text-foreground">${config.title}</span>
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
                <Badge variant="secondary" className="bg-primary/100 text-primary-800">
                  <${getCategoryIcon(config.category)} className="h-3 w-3 mr-1" />
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

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{tutorialData.description}</p>

              {/* Author and Actions */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-card rounded-lg border">
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={tutorialData.author.avatar} alt={tutorialData.author.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {tutorialData.author.name.split(" ").map((n: string) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">{tutorialData.author.name}</div>
                    <div className="text-sm text-muted-foreground">{tutorialData.author.bio}</div>
                    <div className="text-sm text-muted-foreground">
                      {tutorialData.author.followers} followers • {tutorialData.author.expertise}
                    </div>
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
                {tutorialData.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
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

            {/* Tutorial Content */}
            <div className="prose prose-lg max-w-none space-y-8">
              ${config.content.sections.map((section: any) => generateSectionContent(section)).join('\n              ')}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <Link href="/tutorials">
                <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                  All Tutorials
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button className="flex items-center gap-2">
                  Next Tutorial
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
                  {tutorialData.tableOfContents.map((item: any) => (
                    <a
                      key={item.id}
                      href={\`#\${item.id}\`}
                      className="block text-sm hover:text-primary transition-colors py-1 font-medium"
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
                    <Badge variant="secondary" className="bg-primary/100 text-primary-800">
                      {tutorialData.category}
                    </Badge>
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
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <span className="text-sm font-medium">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Tutorials */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tutorialData.relatedTutorials.map((tutorial: any) => (
                    <Link key={tutorial.id} href={\`/tutorials/\${tutorial.id}\`} className="block">
                      <div className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
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
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Stay Updated
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Get the latest Nano Banana tutorials and tips delivered weekly.
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
      <Footer />
    </div>
  )
}
`
  };
}

// 辅助函数：生成章节内容
function generateSectionContent(section: any): string {
  const gradientClass = section.gradient || 'from-gray-50 to-slate-50';
  
  if (section.background === 'gradient') {
    return `
              <section id="${section.id}" className="bg-gradient-to-br ${gradientClass} p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <${section.icon} className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    ${section.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">${section.content}</p>
                ${section.steps ? generateStepsContent(section.steps) : ''}
                ${section.examples ? generateExamplesContent(section.examples) : ''}
                ${section.tips ? generateTipsContent(section.tips) : ''}
                ${section.mistakes ? generateMistakesContent(section.mistakes) : ''}
                ${section.cta ? generateCTAContent(section.cta) : ''}
              </section>`;
  } else {
    return `
              <section id="${section.id}" className="bg-card p-8 rounded-xl border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <${section.icon} className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] m-0">
                    ${section.title}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">${section.content}</p>
                ${section.steps ? generateStepsContent(section.steps) : ''}
                ${section.examples ? generateExamplesContent(section.examples) : ''}
                ${section.tips ? generateTipsContent(section.tips) : ''}
                ${section.mistakes ? generateMistakesContent(section.mistakes) : ''}
                ${section.cta ? generateCTAContent(section.cta) : ''}
              </section>`;
  }
}

function generateStepsContent(steps: string[]): string {
  return `
                <div className="space-y-4">
                  ${steps.map((step: string, index: number) => `
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                        ${index + 1}
                      </div>
                      <p className="text-muted-foreground">${step}</p>
                    </div>
                  `).join('')}
                </div>`;
}

function generateExamplesContent(examples: any[]): string {
  return `
                <div className="grid md:grid-cols-${examples.length} gap-6">
                  ${examples.map((example: any) => `
                    <div className="bg-white p-6 rounded-lg border">
                      <h3 className="font-semibold mb-2">${example.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">${example.description}</p>
                      ${example.image ? `<img src="${example.image}" alt="${example.title}" className="w-full h-32 object-cover rounded-lg" />` : ''}
                    </div>
                  `).join('')}
                </div>`;
}

function generateTipsContent(tips: any[]): string {
  return `
                <div className="space-y-4">
                  ${tips.map((tip: any) => `
                    <div className="bg-${tip.type === 'success' ? 'green' : tip.type === 'warning' ? 'amber' : 'blue'}-50 p-4 rounded-lg border-l-4 border-${tip.type === 'success' ? 'green' : tip.type === 'warning' ? 'amber' : 'blue'}-400">
                      <h4 className="font-semibold mb-2">${tip.title}</h4>
                      <p className="text-sm text-muted-foreground">${tip.content}</p>
                    </div>
                  `).join('')}
                </div>`;
}

function generateMistakesContent(mistakes: any[]): string {
  return `
                <div className="space-y-4">
                  ${mistakes.map((mistake: any) => `
                    <div className="bg-white p-6 rounded-lg border">
                      <h3 className="font-semibold text-red-700 mb-2">🚫 ${mistake.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">${mistake.description}</p>
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                        <p className="text-sm text-green-700">
                          <strong>解决方案:</strong> ${mistake.solution}
                        </p>
                      </div>
                    </div>
                  `).join('')}
                </div>`;
}

function generateCTAContent(cta: any): string {
  return `
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">${cta.title}</h3>
                  <p className="text-muted-foreground mb-6">${cta.description}</p>
                  <Button size="lg" asChild>
                    <Link href="${cta.buttonLink}">${cta.buttonText}</Link>
                  </Button>
                </div>`;
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    "人物处理": "Users",
    "产品摄影": "Camera",
    "场景创建": "Film",
    "技术开发": "Code",
    "基础操作": "Target",
    "创意应用": "Palette",
  };
  return icons[category] || "Sparkles";
}

// 导出使用示例
export default {
  generateCharacterConsistencyTutorial,
  generateProductPhotographyTutorial,
  generateAPIIntegrationTutorial,
  generateBeginnerTutorial,
  generateMultipleTutorials,
  exampleUsage,
  createTutorialPage,
};
