import type { Metadata } from "next"
import { Cpu, Sparkles, Users, Zap, Target, Globe, ArrowRight, Heart, MessageCircle, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Nano Banana Fans - Your AI Image Editing Community",
  description:
    "Discover Nano Banana Fans, the passionate community of creators mastering Google's revolutionary AI image editing technology. Join us to learn, share, and grow together.",
  keywords:
    "Nano Banana Fans, AI image editing community, Google Gemini users, Nano Banana tutorials, character consistency, multi-turn editing, creative AI",
  alternates: {
    canonical: "https://nanobanana.fans/about",
  },
  openGraph: {
    title: "About Nano Banana Fans - Your AI Image Editing Community",
    description:
      "Discover Nano Banana Fans, the passionate community of creators mastering Google's revolutionary AI image editing technology.",
    url: "https://nanobanana.fans/about",
    siteName: "Nano Banana Fans",
    images: [
      {
        url: "/ai-laboratory-technology-background.png",
        width: 1200,
        height: 630,
        alt: "Nano Banana Fans Community - AI Image Editing Creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nano Banana Fans - Your AI Image Editing Community",
    description:
      "Discover Nano Banana Fans, the passionate community of creators mastering Google's revolutionary AI image editing technology.",
    images: ["/ai-laboratory-technology-background.png"],
  },
}

export default function AboutPage() {
  return (
    <>
      <Header currentPath="/about" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Nano Banana Fans Community
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
                Welcome to the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  Nano Banana Fans
                </span>{" "}
                Community
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                We're a passionate community of creators, artists, and technologists mastering Google's revolutionary 
                Nano Banana AI image editing technology. Together, we're pushing the boundaries of what's possible with AI-powered creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/community">
                    Join Our Community <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tutorials">Explore Tutorials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Community Mission</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                  Empowering creators worldwide to harness the full potential of Nano Banana AI through collaboration, 
                  education, and shared innovation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Target className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Learn & Master</h3>
                    <p className="text-slate-600 text-pretty">
                      From beginner basics to advanced techniques like character consistency and multi-turn editing, 
                      we provide comprehensive resources for every skill level.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Connect & Share</h3>
                    <p className="text-slate-600 text-pretty">
                      Join our vibrant Discord community to share your creations, get feedback, collaborate on projects, 
                      and connect with fellow Nano Banana enthusiasts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Sparkles className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Create & Inspire</h3>
                    <p className="text-slate-600 text-pretty">
                      Showcase your AI-powered artwork, discover inspiring creations from others, and participate in 
                      community challenges to push your creative boundaries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Community Focus */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                    Building the Future of <span className="text-cyan-600">AI Creativity</span>
                  </h2>
                  <p className="text-lg text-slate-600 mb-8 text-pretty">
                    Nano Banana Fans is more than just a tutorial platform - we're a thriving community of creators 
                    who believe in the transformative power of AI image editing. Our focus is on making Google's 
                    revolutionary Nano Banana technology accessible to everyone.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Heart className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Passionate Community</h3>
                        <p className="text-slate-600 text-pretty">
                          Join thousands of creators who share your passion for AI-powered image editing. 
                          From digital artists to photographers, we welcome all skill levels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <MessageCircle className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Active Discussion</h3>
                        <p className="text-slate-600 text-pretty">
                          Engage in meaningful conversations, ask questions, share tips, and get real-time 
                          feedback from experienced Nano Banana users in our Discord community.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Share2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Showcase & Collaborate</h3>
                        <p className="text-slate-600 text-pretty">
                          Display your best work, participate in community challenges, and find collaborators 
                          for exciting projects that push the boundaries of AI creativity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 flex items-center justify-center">
                    <img
                      src="/ai-neural-network-visualization-modern-tech.png"
                      alt="Nano Banana Fans Community - AI Creativity Network"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-600 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Our Community Values</h2>
              <p className="text-lg text-slate-600 mb-12 text-pretty">
                The principles that guide everything we do as the Nano Banana Fans community.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Inclusive Innovation</h3>
                  <p className="text-slate-600 text-pretty">
                    We believe AI creativity should be accessible to everyone, regardless of their background or 
                    experience level. Our tutorials and community support newcomers and experts alike.
                  </p>
                </div>

                <div className="text-left p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Ethical AI Usage</h3>
                  <p className="text-slate-600 text-pretty">
                    We promote responsible and ethical use of AI image editing technology, encouraging transparency 
                    and respect for intellectual property in all creative endeavors.
                  </p>
                </div>

                <div className="text-left p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Collaborative Learning</h3>
                  <p className="text-slate-600 text-pretty">
                    We foster a supportive environment where community members learn from each other, share knowledge, 
                    and grow together through collaboration and constructive feedback.
                  </p>
                </div>

                <div className="text-left p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Continuous Exploration</h3>
                  <p className="text-slate-600 text-pretty">
                    We embrace curiosity and experimentation, constantly exploring new possibilities with Nano Banana AI 
                    and sharing our discoveries with the community to advance collective knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
                Ready to Join the Nano Banana Fans Community?
              </h2>
              <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto text-pretty">
                Connect with thousands of creators, access exclusive tutorials, and be part of the future of AI-powered creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-cyan-50">
                  <Link href="/community">
                    Join Discord Community <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-cyan-600 bg-transparent"
                >
                  <Link href="/tutorials">Explore Tutorials</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}