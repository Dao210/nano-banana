import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Clock, Eye, Share2, Bookmark, Download, ChevronRight } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo-schema';

interface ArticleHeroProps {
  title: string;
  description: string;
  hero: {
    coverImage: string;
    badge: {
      text: string;
      icon: string;
    };
  };
  category: string;
}

export function ArticleHero({ title, description, hero, category }: ArticleHeroProps) {
  // Generate fallback image URL
  const fallbackImageUrl = `https://picsum.photos/seed/${encodeURIComponent(title)}/1200/630.jpg`;

  return (
    <>
      {/* Schema Org */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://nano.theskills.ai" },
          { name: "Tutorials", url: "https://nano.theskills.ai/tutorials" },
          { name: title, url: `https://nano.theskills.ai/tutorials/${category}` },
        ]}
      />

      {/* Hero Cover Image */}
      <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
        <Image
          src={hero.coverImage}
          alt={`${title} Tutorial Cover`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = fallbackImageUrl;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-2 bg-primary/90 text-primary-foreground">
            <span className="mr-1">{hero.badge.icon}</span>
            {hero.badge.text}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
            {title}
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
            <span className="text-foreground">{title}</span>
          </nav>
        </div>
      </div>
    </>
  );
}
