import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/admin/",
        "/api/",
        "/_next/",
        "/studio/",
        "/studio/*",
        "/api/*",
        "/admin/*",
        "/private/*"
      ],
      crawlDelay: 1,
    },
    sitemap: "https://nano.theskills.ai/sitemap.xml",
    host: "https://nano.theskills.ai",
  }
}
