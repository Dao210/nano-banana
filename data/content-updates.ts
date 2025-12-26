// Content Update Tracking for SEO Sitemap Optimization
// This file tracks the last modified dates for all site content

export interface PageUpdate {
  url: string;
  lastModified: string;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

// Static pages with their actual last modified dates
export const staticPagesUpdates: PageUpdate[] = [
  {
    url: '',
    lastModified: '2025-12-26', // Root page updated to show Prompts
    changeFrequency: 'daily',
    priority: 1.0,
  },
  {
    url: '/home',
    lastModified: '2025-12-26', // Original homepage moved to /home
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/prompts',
    lastModified: '2025-12-26',
    changeFrequency: 'daily',
    priority: 0.9,
  },
  {
    url: '/tutorials',
    lastModified: '2025-12-20',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: '/community',
    lastModified: '2025-12-01',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/figure-generate',
    lastModified: '2025-11-15',
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: '/article-generator-demo',
    lastModified: '2025-11-15',
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  {
    url: '/search',
    lastModified: '2025-12-01',
    changeFrequency: 'daily',
    priority: 0.6,
  },
  {
    url: '/about',
    lastModified: '2025-11-01',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: '/contact',
    lastModified: '2025-11-01',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: '/privacy',
    lastModified: '2025-01-01',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: '/terms',
    lastModified: '2025-01-01',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
];

// Tutorial pages with their actual last modified dates
// These should match the dates in data/tutorials.ts
export const tutorialPagesUpdates: PageUpdate[] = [
  {
    url: '/tutorials/getting-started',
    lastModified: '2025-12-20',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/tutorials/character-consistency',
    lastModified: '2025-12-18',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/tutorials/multi-turn-editing',
    lastModified: '2025-12-15',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/tutorials/building-cinematic-universes',
    lastModified: '2025-12-10',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/tutorials/product-photography-with-ai',
    lastModified: '2025-12-08',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/tutorials/api-integration',
    lastModified: '2025-12-05',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/tutorials/style-transfer-techniques',
    lastModified: '2025-12-01',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/tutorials/advanced-techniques',
    lastModified: '2025-11-28',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/tutorials/prompt-engineering',
    lastModified: '2025-11-25',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
];

// Helper function to get last modified date for a URL
export function getLastModifiedDate(url: string): string {
  const allPages = [...staticPagesUpdates, ...tutorialPagesUpdates]
  const page = allPages.find(p => p.url === url)
  return page?.lastModified || new Date().toISOString().split('T')[0]
}

// Helper function to get change frequency for a URL
export function getChangeFrequency(url: string): PageUpdate['changeFrequency'] {
  const allPages = [...staticPagesUpdates, ...tutorialPagesUpdates]
  const page = allPages.find(p => p.url === url)
  return page?.changeFrequency || 'weekly'
}

// Helper function to get priority for a URL
export function getPriority(url: string): number {
  const allPages = [...staticPagesUpdates, ...tutorialPagesUpdates]
  const page = allPages.find(p => p.url === url)
  return page?.priority || 0.5
}
