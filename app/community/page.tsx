import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Sparkles, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchemaOrg } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Nano Banana Community - Connect, Share & Learn | AI Image Editing Forum",
  description:
    "Join the Nano Banana Community to connect with fellow creators, share AI image editing tips, and stay updated with the latest trends. Collaborate, ask questions, and grow together.",
  keywords:
    "Nano Banana community, AI image editing forum, Google Gemini users, tutorials, tips, collaboration, discussion",
  alternates: {
    canonical: "https://nanobanana.fans/community",
  },
  openGraph: {
    title: "Nano Banana Community - Connect, Share & Learn",
    description:
      "Join the Nano Banana Community to connect with fellow creators, share AI image editing tips, and stay updated with the latest trends.",
    type: "website",
    url: "https://nanobanana.fans/community",
  },
}

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="website"
        data={{
          title: "Nano Banana Community - Connect, Share & Learn",
          description:
            "Join the Nano Banana Community to connect with fellow creators, share AI image editing tips, and stay updated with the latest trends.",
          url: "https://nanobanana.fans/community",
          keywords: [
            "Nano Banana community",
            "AI image editing forum",
            "Google Gemini users",
            "tutorials",
            "tips",
            "collaboration",
            "discussion",
          ],
        }}
      />

      <Header currentPath="/community" />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Join the Community
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Nano Banana Community
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with passionate creators, share your AI image editing experiences, and learn from the best. 
            Collaborate, ask questions, and stay inspired in the world of Nano Banana.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link href="https://discord.gg/nanobanana" target="_blank">
              <Users className="mr-2 h-5 w-5" />
              Join Discord
            </Link>
          </Button>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-center">
            Trending Topics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Tips & Tricks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Discover expert advice, workflow hacks, and creative techniques for mastering Nano Banana AI.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tutorials">Explore Guides</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" />
                  Showcase & Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Share your best edits, get feedback from the community, and inspire others with your creativity.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://discord.gg/nanobanana" target="_blank">Share Work</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Find collaborators for projects, join group challenges, and grow your skills together.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://discord.gg/nanobanana" target="_blank">Find Partners</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ready to Connect & Grow?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of creators, ask questions, share your work, and stay updated with the latest Nano Banana news.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="https://discord.gg/nanobanana" target="_blank">
              <Share2 className="mr-2 h-5 w-5" />
              Join Now
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
}
