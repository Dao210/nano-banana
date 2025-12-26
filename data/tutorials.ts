export interface TutorialMetadata {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  lastModified: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const tutorialsMetadata: Record<string, TutorialMetadata> = {
  'getting-started': {
    slug: 'getting-started',
    title: 'Getting Started with Nano Banana AI - Complete Beginner\'s Guide',
    description: 'Learn Google\'s revolutionary Nano Banana AI image editing tool from scratch. Master setup, basic concepts, character consistency, and create your first professional AI-edited images in minutes.',
    keywords: [
      'Nano Banana AI',
      'Google Gemini',
      'AI image editing',
      'getting started',
      'beginner guide',
      'character consistency',
      'AI photo editing',
      'image manipulation'
    ],
    ogImage: '/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg',
    lastModified: '2024-12-20',
    readingTime: '15 min read',
    difficulty: 'Beginner'
  },

  'character-consistency': {
    slug: 'character-consistency',
    title: 'Master Character Consistency with Nano Banana AI - Advanced Techniques',
    description: 'Learn how to maintain perfect character likeness across multiple AI edits. Discover advanced prompt engineering, reference image techniques, and professional workflows for consistent character design.',
    keywords: [
      'character consistency',
      'Nano Banana tutorial',
      'AI character design',
      'multi-turn editing',
      'prompt engineering',
      'Google Gemini AI',
      'character preservation',
      'AI art consistency'
    ],
    ogImage: '/new-tutorial-master-consistent-character-faces-with-nanobanana.webp',
    lastModified: '2024-12-18',
    readingTime: '25 min read',
    difficulty: 'Intermediate'
  },

  'multi-turn-editing': {
    slug: 'multi-turn-editing',
    title: 'Multi-Turn Editing Mastery - Advanced Nano Banana AI Techniques',
    description: 'Master complex multi-step image edits while preserving quality. Learn selective editing, progressive refinement, layer techniques, and professional workflows for advanced AI image manipulation.',
    keywords: [
      'multi-turn editing',
      'Nano Banana AI',
      'advanced image editing',
      'selective editing',
      'progressive refinement',
      'AI layer techniques',
      'Google Gemini',
      'professional AI editing'
    ],
    ogImage: '/Multi-Turn Editing.avif',
    lastModified: '2024-12-15',
    readingTime: '35 min read',
    difficulty: 'Advanced'
  },

  'building-cinematic-universes': {
    slug: 'building-cinematic-universes',
    title: 'Building Cinematic Universes with Nano Banana - Visual Storytelling',
    description: 'Create cohesive visual worlds for films, games, and stories. Learn environment consistency, style unification, character development, and production workflows using Nano Banana AI.',
    keywords: [
      'cinematic universe',
      'visual storytelling',
      'world building',
      'Nano Banana AI',
      'environment design',
      'character development',
      'AI production workflow',
      'film concept art'
    ],
    ogImage: '/tutorials/building-cinematic-universes.jpg',
    lastModified: '2024-12-10',
    readingTime: '40 min read',
    difficulty: 'Advanced'
  },

  'product-photography-with-ai': {
    slug: 'product-photography-with-ai',
    title: 'Product Photography with Nano Banana AI - E-commerce Image Guide',
    description: 'Transform ordinary product photos into professional e-commerce images. Learn lighting techniques, background removal, lifestyle shots, and batch processing for online stores.',
    keywords: [
      'product photography',
      'e-commerce images',
      'Nano Banana AI',
      'professional product photos',
      'background removal',
      'online store photography',
      'AI product enhancement',
      'commercial photography'
    ],
    ogImage: '/tutorials/product-photography.jpg',
    lastModified: '2024-12-08',
    readingTime: '30 min read',
    difficulty: 'Intermediate'
  },

  'api-integration': {
    slug: 'api-integration',
    title: 'Nano Banana API Integration - Developer Guide & Documentation',
    description: 'Complete guide to integrating Nano Banana AI into your applications. Learn API authentication, request handling, batch processing, error management, and best practices for production.',
    keywords: [
      'Nano Banana API',
      'API integration',
      'Google Gemini API',
      'developer guide',
      'AI image processing',
      'batch processing',
      'production deployment',
      'error handling'
    ],
    ogImage: '/tutorials/api-integration.jpg',
    lastModified: '2024-12-05',
    readingTime: '45 min read',
    difficulty: 'Advanced'
  },

  'style-transfer-techniques': {
    slug: 'style-transfer-techniques',
    title: 'Style Transfer Techniques with Nano Banana - AI Art Transformation',
    description: 'Master artistic style transfer using Nano Banana AI. Learn how to apply famous art styles, create consistent aesthetics, blend multiple styles, and transform photos into stunning artwork.',
    keywords: [
      'style transfer',
      'AI art transformation',
      'Nano Banana tutorial',
      'artistic filters',
      'style blending',
      'photo to art',
      'Google Gemini',
      'creative AI editing'
    ],
    ogImage: '/tutorials/style-transfer.jpg',
    lastModified: '2024-12-01',
    readingTime: '35 min read',
    difficulty: 'Intermediate'
  },

  'advanced-techniques': {
    slug: 'advanced-techniques',
    title: 'Advanced Nano Banana Techniques - Professional AI Editing Workflows',
    description: 'Unlock the full potential of Nano Banana AI with expert-level techniques. Learn complex compositions, advanced prompt engineering, professional workflows, and industry secrets for stunning results.',
    keywords: [
      'advanced techniques',
      'Nano Banana AI',
      'professional workflows',
      'expert editing',
      'complex compositions',
      'advanced prompting',
      'AI mastery',
      'professional image editing'
    ],
    ogImage: '/tutorials/advanced-techniques.jpg',
    lastModified: '2024-11-28',
    readingTime: '50 min read',
    difficulty: 'Advanced'
  },

  'prompt-engineering': {
    slug: 'prompt-engineering',
    title: 'Prompt Engineering for Nano Banana - Master AI Image Prompts',
    description: 'Learn the art and science of crafting effective AI prompts. Discover prompt structures, keyword optimization, negative prompting, iterative refinement, and professional techniques for consistent results.',
    keywords: [
      'prompt engineering',
      'AI prompts',
      'Nano Banana tutorial',
      'prompt optimization',
      'keyword strategies',
      'negative prompting',
      'prompt structures',
      'AI communication'
    ],
    ogImage: '/tutorials/prompt-engineering.jpg',
    lastModified: '2024-11-25',
    readingTime: '40 min read',
    difficulty: 'Intermediate'
  }
};

// Helper function to get tutorial metadata
export function getTutorialMetadata(slug: string): TutorialMetadata | undefined {
  return tutorialsMetadata[slug];
}

// Helper function to get all tutorial slugs
export function getAllTutorialSlugs(): string[] {
  return Object.keys(tutorialsMetadata);
}

// Helper function to get tutorials by difficulty
export function getTutorialsByDifficulty(difficulty: TutorialMetadata['difficulty']): TutorialMetadata[] {
  return Object.values(tutorialsMetadata).filter(t => t.difficulty === difficulty);
}
