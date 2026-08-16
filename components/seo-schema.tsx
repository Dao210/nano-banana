import Script from "next/script"

interface SchemaOrgProps {
  type: "website" | "article" | "tutorial" | "searchResults" | "ContactPage"
  data: {
    title?: string
    headline?: string
    description: string
    url: string
    image?: string
    datePublished?: string
    dateModified?: string
    author?: {
      name: string
      type: "Person" | "Organization"
    }
    publisher?: {
      name: string
      logo: string
    }
    keywords?: string[]
    category?: string
    difficulty?: string
    readTime?: string
    rating?: {
      value: number
      count: number
    }
  }
}

export function SchemaOrg({ type, data }: SchemaOrgProps) {
  const schemaTitle = data.title ?? data.headline ?? "Nano Banana"

  const getSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type":
        type === "website"
          ? "WebSite"
          : type === "article"
            ? "Article"
            : type === "tutorial"
              ? "HowTo"
              : type === "ContactPage"
                ? "ContactPage"
                : "SearchResultsPage",
      name: schemaTitle,
      description: data.description,
      url: data.url,
      image: data.image || "https://nano.theskills.ai/og-image.jpg",
    }

    if (type === "website") {
      return {
        ...baseSchema,
        "@type": "WebSite",
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nano.theskills.ai/logo.png",
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://nano.theskills.ai/search?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      }
    }

    if (type === "tutorial") {
      return {
        ...baseSchema,
        "@type": "HowTo",
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          "@type": data.author?.type || "Person",
          name: data.author?.name || "Nano Banana Tutorial Platform",
        },
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nano.theskills.ai/logo.png",
          },
        },
        keywords: data.keywords?.join(", "),
        about: {
          "@type": "Thing",
          name: "Nano Banana AI Image Editing",
        },
        teaches: "AI Image Editing with Google's Nano Banana",
        educationalLevel: data.difficulty,
        timeRequired: data.readTime,
        aggregateRating: data.rating
          ? {
              "@type": "AggregateRating",
              ratingValue: data.rating.value,
              reviewCount: data.rating.count,
            }
          : undefined,
        mainEntity: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }
    }

    if (type === "article") {
      return {
        ...baseSchema,
        "@type": "Article",
        headline: data.headline ?? schemaTitle,
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        author: {
          "@type": data.author?.type || "Person",
          name: data.author?.name || "Nano Banana Tutorial Platform",
        },
        publisher: {
          "@type": "Organization",
          name: "Nano Banana Tutorial Platform",
          logo: {
            "@type": "ImageObject",
            url: "https://nano.theskills.ai/logo.png",
          },
        },
        keywords: data.keywords?.join(", "),
        articleSection: data.category,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": data.url,
        },
      }
    }

    return baseSchema
  }

  return (
    <>
      <link rel="canonical" href={data.url} />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSchema()),
        }}
      />
    </>
  )
}

// Breadcrumb Schema Component
interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// FAQ Schema Component
interface FAQItem {
  question: string
  answer: string
}

interface FAQSchemaProps {
  faqs: FAQItem[]
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Product Schema Component for prompts/tutorials
interface ProductSchemaProps {
  data: {
    name: string
    description: string
    image?: string
    url: string
    category?: string
    price?: string
    currency?: string
    availability?: string
    brand?: string
    rating?: {
      value: number
      count: number
    }
  }
}

export function ProductSchema({ data }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
    category: data.category,
    brand: {
      "@type": "Brand",
      name: data.brand || "Nano Banana Tutorial Platform",
    },
    offers: data.price ? {
      "@type": "Offer",
      price: data.price,
      priceCurrency: data.currency || "USD",
      availability: data.availability || "https://schema.org/InStock",
    } : undefined,
    aggregateRating: data.rating ? {
      "@type": "AggregateRating",
      ratingValue: data.rating.value,
      reviewCount: data.rating.count,
    } : undefined,
  }

  return (
    <Script
      id="product-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Video Schema Component for tutorials
interface VideoSchemaProps {
  data: {
    name: string
    description: string
    thumbnailUrl: string
    uploadDate: string
    duration?: string
    url: string
    embedUrl?: string
    author?: string
  }
}

export function VideoSchema({ data }: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: data.name,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    uploadDate: data.uploadDate,
    duration: data.duration,
    url: data.url,
    embedUrl: data.embedUrl,
    author: {
      "@type": "Person",
      name: data.author || "Nano Banana Tutorial Platform",
    },
    publisher: {
      "@type": "Organization",
      name: "Nano Banana Tutorial Platform",
      logo: {
        "@type": "ImageObject",
        url: "https://nano.theskills.ai/logo.png",
      },
    },
  }

  return (
    <Script
      id="video-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Local Business Schema Component
interface LocalBusinessSchemaProps {
  data: {
    name: string
    description: string
    url: string
    telephone?: string
    email?: string
    address?: {
      streetAddress: string
      addressLocality: string
      addressRegion: string
      postalCode: string
      addressCountry: string
    }
    openingHours?: string[]
    sameAs?: string[]
  }
}

export function LocalBusinessSchema({ data }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: data.address ? {
      "@type": "PostalAddress",
      ...data.address,
    } : undefined,
    openingHours: data.openingHours,
    sameAs: data.sameAs,
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

// Course Schema Component for tutorials
interface CourseSchemaProps {
  data: {
    name: string
    description: string
    url: string
    provider: string
    educationalLevel?: string
    inLanguage?: string
    about?: string
    teaches?: string[]
    duration?: string
    hasCourseInstance?: {
      courseMode: string
      instructor: string
    }
  }
}

export function CourseSchema({ data }: CourseSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: data.name,
    description: data.description,
    url: data.url,
    provider: {
      "@type": "Organization",
      name: data.provider,
    },
    educationalLevel: data.educationalLevel,
    inLanguage: data.inLanguage || "en",
    about: data.about,
    teaches: data.teaches,
    timeRequired: data.duration,
    hasCourseInstance: data.hasCourseInstance ? {
      "@type": "CourseInstance",
      courseMode: data.hasCourseInstance.courseMode,
      instructor: {
        "@type": "Person",
        name: data.hasCourseInstance.instructor,
      },
    } : undefined,
  }

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
