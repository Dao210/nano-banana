import { prompts } from '@/data/prompts'

export function PromptsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Nano Banana AI Prompt Library",
    "description": "Discover 25+ curated Nano Banana AI prompts for image editing, character consistency, product photography, and creative design. Free prompt templates for beginners and professionals.",
    "url": "https://nanobanana.fans/prompts",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Nano Banana AI Prompts",
      "description": "Curated collection of AI image editing prompts",
      "numberOfItems": prompts.length,
      "itemListElement": prompts.map((prompt, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": prompt.title,
          "description": prompt.description,
          "url": `https://nanobanana.fans/prompts#${prompt.id}`,
          "image": `https://nanobanana.fans${prompt.previewImage}`,
          "about": {
            "@type": "Thing",
            "name": "AI Image Editing"
          },
          "keywords": [
            "Nano Banana",
            "AI prompt",
            "image editing",
            ...prompt.tags,
            "artificial intelligence"
          ].join(", ")
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nanobanana.fans"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Prompts",
          "item": "https://nanobanana.fans/prompts"
        }
      ]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nano Banana Tutorial",
      "url": "https://nanobanana.fans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://nanobanana.fans/placeholder-logo.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "Nano Banana Tutorial"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by/4.0/"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
