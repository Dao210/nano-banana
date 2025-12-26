import { notFound } from 'next/navigation';
import { prompts } from '@/data/prompts';
import type { Metadata } from 'next';
import PromptDetailClient from './page.client';

// ✅ ISR 缓存：24小时重新验证
export const revalidate = 86400;

// ✅ 动态生成元数据（SEO 核心）
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    return {
      title: 'Prompt Not Found',
    };
  }

  const categoryLabel = prompt.tags[0].charAt(0).toUpperCase() + prompt.tags[0].slice(1);

  return {
    title: `${prompt.title} - ${categoryLabel} Nano Banana AI Prompt`,
    description: prompt.description,
    keywords: [
      `${prompt.title}`,
      `${categoryLabel} prompts`,
      'Nano Banana AI',
      'AI image editing',
      'prompt library',
      'image editing prompts',
      ...prompt.tags,
    ],
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      url: `https://nanobanana.fans/prompts/${slug}`,
      siteName: 'Nano Banana',
      images: [
        {
          url: `https://nanobanana.fans${prompt.previewImage}`,
          width: 1200,
          height: 630,
          alt: prompt.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: prompt.title,
      description: prompt.description,
      images: [`https://nanobanana.fans${prompt.previewImage}`],
    },
    alternates: {
      canonical: `https://nanobanana.fans/prompts/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// ✅ 静态生成所有 prompt 页面
export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default async function PromptDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 查找 prompt
  const prompt = prompts.find((p) => p.slug === slug);

  // 404 如果不存在
  if (!prompt) {
    notFound();
  }

  // 查找相关 prompts（有共同标签，排除当前）
  const relatedPrompts = prompts
    .filter((p) => p.tags.some(tag => prompt.tags.includes(tag)) && p.slug !== prompt.slug)
    .slice(0, 4);

  // 查找主分类标签（使用第一个标签作为主分类）
  const categoryLabel = prompt.tags[0].charAt(0).toUpperCase() + prompt.tags[0].slice(1);

  return (
    <PromptDetailClient
      prompt={prompt}
      relatedPrompts={relatedPrompts}
      categoryLabel={categoryLabel}
    />
  );
}
