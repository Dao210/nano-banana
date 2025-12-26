import { prompts } from "@/data/prompts"

export async function GET() {
  const baseUrl = "https://nanobanana.fans"

  // Generate image entries for all prompts
  const imageEntries = prompts.map((prompt) => {
    // Ensure previewImage starts with / if it doesn't already
    const imagePath = prompt.previewImage.startsWith("/")
      ? prompt.previewImage
      : `/${prompt.previewImage}`

    return `
    <url>
      <loc>${baseUrl}/prompts/${prompt.slug}</loc>
      <lastmod>2024-12-26</lastmod>
      <image:image>
        <image:loc>${baseUrl}${imagePath}</image:loc>
        <image:title><![CDATA[${prompt.title}]]></image:title>
        <image:caption><![CDATA[${prompt.description}]]></image:caption>
      </image:image>
    </url>`
  }).join("")

  // Add tutorial images
  const tutorialImages = [
    {
      url: `${baseUrl}/tutorials/getting-started`,
      image: "/Google-Nano-Banana-AI-Image-Generator-All-You-Need-To-Know.jpg",
      title: "Getting Started with Nano Banana AI",
      caption: "Complete beginner's guide to Google's revolutionary AI image editing tool",
    },
    {
      url: `${baseUrl}/tutorials/character-consistency`,
      image: "/new-tutorial-master-consistent-character-faces-with-nanobanana.webp",
      title: "Character Consistency Mastery",
      caption: "Master the art of maintaining character likeness across multiple edits",
    },
    {
      url: `${baseUrl}/tutorials/multi-turn-editing`,
      image: "/Multi-Turn Editing.avif",
      title: "Multi-Turn Editing Techniques",
      caption: "Advanced strategies for complex multi-step edits while preserving quality",
    },
  ]

  const tutorialEntries = tutorialImages
    .map((tutorial) => {
      const imagePath = tutorial.image.startsWith("/")
        ? tutorial.image
        : `/${tutorial.image}`

      return `
    <url>
      <loc>${tutorial.url}</loc>
      <lastmod>2024-12-20</lastmod>
      <image:image>
        <image:loc>${baseUrl}${imagePath}</image:loc>
        <image:title><![CDATA[${tutorial.title}]]></image:title>
        <image:caption><![CDATA[${tutorial.caption}]]></image:caption>
      </image:image>
    </url>`
    })
    .join("")

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageEntries}${tutorialEntries}
</urlset>`

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  })
}
