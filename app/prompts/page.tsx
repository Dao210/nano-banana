import type { Metadata } from 'next';
import PromptPageClient from './page.client';

export const metadata: Metadata = {
  title: "Nano Banana Prompts - AI Image Editing Prompt Library",
  description: "Browse our comprehensive collection of Nano Banana AI prompts. Find the perfect prompts for character consistency, style transfer, and advanced image editing techniques.",
  keywords: ["Nano Banana prompts", "AI image editing prompts", "Google Gemini prompts", "character consistency prompts", "style transfer prompts"],
  openGraph: {
    title: "Nano Banana Prompts - AI Image Editing Prompt Library",
    description: "Browse our comprehensive collection of Nano Banana AI prompts for advanced image editing techniques.",
    type: "website",
  },
};

export default function PromptPage() {
  return <PromptPageClient />;
}
