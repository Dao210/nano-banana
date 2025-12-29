import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Copy, Check, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface PromptCardPreviewProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  prompt: string;
  tags: string[];
  previewImage: string;
}

const PromptCardPreview = ({
  id,
  slug,
  title,
  description,
  prompt,
  tags,
  previewImage,
}: PromptCardPreviewProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    // 只阻止事件冒泡，不阻止默认行为，让外层 Link 也能正常工作
    e.stopPropagation();
    // 使用 router.push 确保导航正常工作
    router.push(`/prompts/${slug}`);
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
    <Link href={`/prompts/${slug}`} className="block">
      <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 tech-card hover:scale-105 cursor-pointer pt-0 pb-0 h-full flex flex-col">
        {/* 预览图区域 */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <Image
            src={previewImage}
            alt={title}
            width={640}
            height={480}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 tech-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

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

        {/* 标题和描述 */}
        <CardHeader className="pb-16 px-6 flex-shrink-0">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </CardHeader>

        {/* 操作按钮：桌面端 hover 显示，移动端始终可见 */}
        <div className="absolute inset-x-0 bottom-0 px-4 pb-4 md:px-6 md:pb-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-1.5 md:gap-2 bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg p-2 md:p-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              aria-label={`Copy prompt: ${title}`}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              {isCopied ? (
                <>
                  <Check className="h-3 w-3 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3 mr-1" />
                  Copy Prompt
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetails}
              aria-label={`View details for: ${title}`}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Eye className="h-3 w-3 mr-1" />
              Details
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PromptCardPreview;
