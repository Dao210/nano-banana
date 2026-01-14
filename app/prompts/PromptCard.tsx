'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import Image from 'next/image';
import Link from 'next/link';

interface PromptCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
  previewImage: string;
  originalImages?: string[];
}

const PromptCard = ({ id, slug, title, description, prompt, tags, previewImage, originalImages }: PromptCardProps) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    copyToClipboard(prompt);
  };

  // Prepare tags for display (max 3 tags + "+N more")
  const displayTags = tags.slice(0, 3);
  const remainingTagsCount = Math.max(0, tags.length - 3);

  // Tag color mapping
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
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 tech-card cursor-pointer p-0">
      <Link href={`/prompts/${slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={previewImage}
            alt={title}
            width={640}
            height={360}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Tags */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {displayTags.map((tag) => (
              <Badge
                key={tag}
                className="text-xs px-2 py-0.5 text-white border-0 shadow-sm"
                style={{ backgroundColor: getTagColor(tag) }}
              >
                {getTagLabel(tag)}
              </Badge>
            ))}
            {remainingTagsCount > 0 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5 bg-white/90 backdrop-blur-sm border-border/50">
                +{remainingTagsCount}
              </Badge>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 pb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Bottom Action Buttons - Slide up on hover */}
        <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex gap-3 px-4 pb-4">
            <Button
              onClick={handleCopyPrompt}
              size="sm"
              className={`flex-1 h-10 font-medium transition-all duration-200 ${
                isCopied
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-md'
                  : 'bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg'
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

            <Button
              size="sm"
              className="flex-1 h-10 font-medium bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all duration-200"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default PromptCard;