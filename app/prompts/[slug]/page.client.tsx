'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ArrowLeft, Share2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SchemaOrg, BreadcrumbSchema } from '@/components/seo-schema';

interface PromptDetailClientProps {
  prompt: {
    id: string;
    slug: string;
    title: string;
    description: string;
    prompt: string;
    tags: string[];
    previewImage: string;
    originalImages?: string[];
  };
  relatedPrompts: Array<{
    id: string;
    slug: string;
    title: string;
    description: string;
    tags: string[];
    previewImage: string;
  }>;
  categoryLabel: string;
}

export default function PromptDetailClient({
  prompt,
  relatedPrompts,
  categoryLabel,
}: PromptDetailClientProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setIsCopied(true);
      toast({
        title: 'Prompt copied!',
        description: 'The prompt has been copied to your clipboard.',
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: 'Failed to copy',
        description: 'Please try again or copy manually.',
        variant: 'destructive',
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: prompt.title,
          text: prompt.description,
          url: window.location.href,
        });
      } catch (error) {
        // User canceled sharing
      }
    } else {
      // Fallback: copy URL to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied!',
        description: 'The page link has been copied to your clipboard.',
      });
    }
  };

  return (
    <>
      {/* 结构化数据 */}
      <SchemaOrg
        type="article"
        data={{
          title: prompt.title,
          headline: prompt.title,
          description: prompt.description,
          url: `https://nanobanana.fans/prompts/${prompt.slug}`,
          image: `https://nanobanana.fans${prompt.previewImage}`,
          keywords: [prompt.title, categoryLabel, 'Nano Banana', 'AI prompt', 'image editing', ...prompt.tags],
          category: prompt.tags[0],
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://nanobanana.fans' },
          { name: 'Prompts', url: 'https://nanobanana.fans/prompts' },
          { name: categoryLabel, url: `https://nanobanana.fans/prompts?tag=${prompt.tags[0]}` },
          { name: prompt.title, url: `https://nanobanana.fans/prompts/${prompt.slug}` },
        ]}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header currentPath={`/prompts/${prompt.id}`} />

        {/* 面包屑导航 */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto max-w-6xl px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/prompts" className="hover:text-foreground transition-colors">
                Prompts
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">{prompt.title}</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-8">
          <div className="mb-6">
            <Link href="/prompts">
              <Button variant="ghost" size="sm" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Prompts
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主内容区 */}
            <main className="lg:col-span-2">
              {/* 标题和标签 */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {prompt.tags.map((tag) => {
                    const getTagColor = (tag: string): string => {
                      const tagColors: Record<string, string> = {
                        creative: '#9333ea',
                        design: '#3b82f6',
                        photography: '#10b981',
                        ecommerce: '#f59e0b',
                        character: '#ef4444',
                        logo: '#8b5cf6',
                      };
                      return tagColors[tag] || '#6b7280';
                    };
                    const getTagLabel = (tag: string): string => {
                      return tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
                    };
                    return (
                      <Badge
                        key={tag}
                        className="tech-glow text-white border-0"
                        style={{ backgroundColor: getTagColor(tag) }}
                      >
                        {getTagLabel(tag)}
                      </Badge>
                    );
                  })}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance font-[family-name:var(--font-space-grotesk)]">
                  {prompt.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {prompt.description}
                </p>
              </div>

              {/* 预览图 */}
              <Card className="mb-8 overflow-hidden">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={prompt.previewImage}
                    alt={prompt.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              </Card>

              {/* Prompt 内容 */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Nano Banana AI Prompt</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={handleShare}>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button
                        onClick={handleCopyPrompt}
                        className={`transition-all duration-300 tech-button ${
                          isCopied ? 'tech-gradient text-white' : 'tech-gradient-secondary hover:scale-105'
                        }`}
                        size="sm"
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Prompt
                          </>
                        )}
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="glass rounded-lg p-6 border border-border/50">
                    <p className="text-base text-foreground leading-relaxed whitespace-pre-wrap font-mono">
                      {prompt.prompt}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 使用指南 */}
              <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle>How to Use This Prompt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        1
                      </span>
                      Copy the Prompt
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Click the "Copy Prompt" button above to copy the entire prompt to your clipboard.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        2
                      </span>
                      Open Nano Banana
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Visit{' '}
                      <Link
                        href="https://aistudio.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        Google AI Studio
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Link>{' '}
                      or use the Gemini app.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        3
                      </span>
                      Upload & Apply
                    </h4>
                    <p className="text-sm text-muted-foreground pl-8">
                      Upload your image and paste the prompt. Nano Banana will apply the transformation
                      while maintaining consistency and quality.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* 原始图片 */}
              {prompt.originalImages && prompt.originalImages.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Original Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {prompt.originalImages.map((image, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`Original ${index + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </main>

            {/* 侧边栏 */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* 快速操作 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button
                      onClick={handleCopyPrompt}
                      className={`w-full transition-all duration-300 tech-button ${
                        isCopied ? 'tech-gradient text-white' : 'tech-gradient-secondary hover:scale-105'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Prompt
                        </>
                      )}
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share Prompt
                    </Button>
                  </CardContent>
                </Card>

                {/* 相关 Prompts */}
                {relatedPrompts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        Related {categoryLabel} Prompts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPrompts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/prompts/${related.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={related.previewImage}
                                alt={related.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                                {related.title}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {related.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* 分类信息 */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground block mb-2">Labels</span>
                        <div className="flex flex-wrap gap-1.5">
                          {prompt.tags.map((tag) => {
                            const getTagColor = (tag: string): string => {
                              const tagColors: Record<string, string> = {
                                creative: '#9333ea',
                                design: '#3b82f6',
                                photography: '#10b981',
                                ecommerce: '#f59e0b',
                                character: '#ef4444',
                                logo: '#8b5cf6',
                              };
                              return tagColors[tag] || '#6b7280';
                            };
                            const getTagLabel = (tag: string): string => {
                              return tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, ' ');
                            };
                            return (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                                style={{ borderColor: getTagColor(tag), color: getTagColor(tag) }}
                              >
                                {getTagLabel(tag)}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">ID</span>
                        <span className="text-sm font-mono">#{prompt.id}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
