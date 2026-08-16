import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Nano Banana - AI Agent Laboratory",
  description:
    "Terms of Service for Nano Banana tutorial platform. Simple, easy-to-use AI learning with daily content updates and community growth.",
  keywords: "terms of service, nano banana, AI tutorials, community guidelines, user agreement",
  openGraph: {
    title: "Terms of Service | Nano Banana",
    description:
      "Terms of Service for Nano Banana tutorial platform. Simple, easy-to-use AI learning with daily content updates.",
    url: "https://nano.theskills.ai/terms",
    siteName: "Nano Banana",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Nano Banana",
    description:
      "Terms of Service for Nano Banana tutorial platform. Simple, easy-to-use AI learning with daily content updates.",
  },
  alternates: {
    canonical: "https://nano.theskills.ai/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple guidelines for our growing community of AI enthusiasts and learners
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-xl p-8 border shadow-sm mb-8">
            <p className="text-muted-foreground mb-6 text-lg">
              <strong>Last updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="space-y-8">
              {/* Welcome */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Welcome to Our Community</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Nano Banana, your AI Agent Laboratory! We&apos;re dedicated to creating simple, beautiful, and
                  accessible AI learning experiences. By using our platform, you&apos;re joining a community committed to
                  growing and progressing together in the exciting world of artificial intelligence.
                </p>
              </section>

              {/* Our Commitment */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to You</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold text-foreground mb-2">Simple & Easy</h3>
                    <p className="text-sm text-muted-foreground">
                      We believe learning AI should be straightforward and enjoyable, not overwhelming or complicated.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold text-foreground mb-2">Daily Updates</h3>
                    <p className="text-sm text-muted-foreground">
                      Fresh content, tutorials, and insights delivered daily to keep you at the forefront of AI
                      innovation.
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-6 border">
                    <h3 className="font-semibold text-foreground mb-2">Growing Together</h3>
                    <p className="text-sm text-muted-foreground">
                      We're all learners here, progressing together as AI technology evolves and expands.
                    </p>
                  </div>
                </div>
              </section>

              {/* Platform Usage */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Platform Usage</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Free Access</h3>
                    <p className="text-muted-foreground">
                      Our platform is completely free to use. No registration, no login required, no barriers to
                      learning.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Educational Purpose</h3>
                    <p className="text-muted-foreground">
                      All content is provided for educational and informational purposes to help you understand and work
                      with AI technologies like Google's Nano Banana.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Community Guidelines</h3>
                    <p className="text-muted-foreground">
                      We encourage respectful learning, sharing knowledge, and supporting fellow AI enthusiasts in their
                      journey of discovery and growth.
                    </p>
                  </div>
                </div>
              </section>

              {/* Content & Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Content & Daily Updates</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Fresh Content Daily</h3>
                    <p className="text-muted-foreground">
                      We strive to publish new tutorials, guides, and insights every day to keep our community informed
                      about the latest developments in AI technology.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Quality & Accuracy</h3>
                    <p className="text-muted-foreground">
                      While we work hard to ensure accuracy, AI technology evolves rapidly. We encourage you to verify
                      information and experiment safely with the techniques we share.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-2">Community Contributions</h3>
                    <p className="text-muted-foreground">
                      We welcome feedback, suggestions, and shared experiences from our community to help everyone learn
                      and grow together.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Our original tutorials and content are created to be shared and learned from. We respect the
                  intellectual property of others, including Google's Nano Banana technology, and provide educational
                  content that helps users understand and work with these tools.
                </p>
                <p className="text-muted-foreground">
                  All third-party trademarks, including "Nano Banana" and "Google," belong to their respective owners.
                </p>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimers</h2>
                <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Educational Purpose:</strong> All content is provided for educational purposes only.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>No Warranties:</strong> We provide content "as is" without warranties of any kind.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>External Links:</strong> We may link to external resources but are not responsible for their
                    content.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Technology Changes:</strong> AI technology evolves rapidly; some information may become
                    outdated.
                  </p>
                </div>
              </section>

              {/* Growing Together */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Growing Together</h2>
                <p className="text-muted-foreground mb-4">
                  At Nano Banana, we believe in the power of community learning. We're all on this AI journey together,
                  discovering new possibilities, sharing insights, and helping each other understand this rapidly
                  evolving technology.
                </p>
                <p className="text-muted-foreground">
                  Whether you're a beginner taking your first steps with AI or an experienced practitioner exploring new
                  techniques, you're part of our growing community of learners and innovators.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to These Terms</h2>
                <p className="text-muted-foreground">
                  As we grow and evolve, we may update these terms to reflect new features, community feedback, or
                  changes in how we operate. We'll always keep these terms simple, clear, and focused on supporting our
                  learning community.
                </p>
              </section>

              {/* Contact */}
              <section className="border-t pt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Questions or Feedback?</h2>
                <p className="text-muted-foreground">
                  We're here to help and always eager to hear from our community. If you have questions about these
                  terms or suggestions for how we can better serve our learning community, we'd love to hear from you.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
