'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import Link from 'next/link';

interface PromptCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  previewImage: string;
  originalImages?: string[];
}

const PromptCard = ({ id, slug, title, description, prompt, category, previewImage, originalImages }: PromptCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(prompt);
      setIsCopied(true);
      toast({
        title: "Prompt copied!",
        description: "The prompt has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
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

          {/* Category Badge */}
          <Badge className="absolute top-3 left-3 tech-glow tech-gradient text-white border-0">
            {category}
          </Badge>
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
              className={`flex-1 h-10 font-medium transition-all duration-300 ${
                isCopied
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/30'
                  : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-[1.02]'
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
              className="flex-1 h-10 font-medium bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 hover:from-violet-600 hover:via-purple-600 hover:to-fuchsia-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-purple-400/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:scale-[1.02] transition-all duration-300"
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