import type { Metadata } from "next"
import { Shield, Eye, UserX, Lock, Globe, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy - No Data Collection | nano.theskills.ai",
  description:
    "Our privacy-first approach: We don't collect any personal information, require no registration or login, and respect your complete anonymity while using our AI tutorials.",
  keywords:
    "privacy policy, no data collection, anonymous browsing, privacy-first, no registration, no login, data protection",
  openGraph: {
    title: "Privacy Policy - Complete Privacy Protection",
    description:
      "We don't collect any personal information, require no registration or login, and respect your complete anonymity.",
    url: "https://nano.theskills.ai/privacy",
    siteName: "Nano Banana Fans",
    images: [
      {
        url: "/ai-laboratory-technology-background.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Complete Data Protection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Complete Privacy Protection",
    description:
      "We don't collect any personal information, require no registration or login, and respect your complete anonymity.",
    images: ["/ai-laboratory-technology-background.png"],
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header currentPath="/privacy" />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Privacy First
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 text-balance">
                Your Privacy is{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
                  Completely Protected
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                We believe in absolute privacy. No data collection, no tracking, no registration required. Browse our AI
                tutorials with complete anonymity and peace of mind.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">100% Anonymous Browsing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Privacy Statement */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Privacy Commitment</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                  Simple, transparent, and absolute: We don&apos;t collect, store, or process any of your personal
                  information.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-emerald-50 to-cyan-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                      <UserX className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">No Registration Required</h3>
                    <p className="text-slate-600 text-pretty">
                      Access all our tutorials, guides, and resources without creating an account. No usernames,
                      passwords, or personal details needed—ever.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-cyan-50 to-blue-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                      <Eye className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Zero Tracking</h3>
                    <p className="text-slate-600 text-pretty">
                      We don&apos;t use cookies, analytics, or any tracking mechanisms. Your browsing behavior remains
                      completely private and anonymous.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <CardContent className="p-12 text-center">
                  <Lock className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
                  <h3 className="text-2xl font-bold mb-4">What We DON&apos;T Collect</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Personal information</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Email addresses</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>IP addresses</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Browsing history</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Device information</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Location data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Usage analytics</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <span>Cookies or trackers</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Privacy Policy Details</h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Information Collection</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    We fundamentally believe in your right to privacy. Our platform is designed from the ground up to
                    operate without collecting any personal information whatsoever. When you visit our website, read our
                    tutorials, or use our resources, you do so completely anonymously. We have no databases storing user
                    information, no tracking systems monitoring your behavior, and no mechanisms for identifying
                    individual visitors.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">No Account System</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    Unlike most websites, we deliberately chose not to implement user accounts, registration systems, or
                    login functionality. This means you&apos;ll never be asked to provide your name, email address, phone
                    number, or any other personal details. All content is freely accessible without barriers, ensuring
                    your complete anonymity while learning about AI technologies.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Technical Implementation</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    Our website is built as a static site with no server-side data processing or storage capabilities
                    for personal information. We don&apos;t use Google Analytics, Facebook Pixel, or any third-party tracking
                    services. The site functions entirely through client-side rendering, meaning your interactions
                    remain on your device and are never transmitted to our servers for analysis or storage.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Services</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    We don&apos;t integrate with any third-party services that could potentially collect your data. There are
                    no embedded social media widgets, advertising networks, or external analytics platforms. Any
                    external links in our content lead to other websites that have their own privacy policies, but we
                    don&apos;t share any information with them about your visit to our site.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    Since we don&apos;t collect any data, there&apos;s no personal information to secure or potentially breach.
                    This approach provides the ultimate data security—complete absence of data collection. You can
                    browse our tutorials with confidence, knowing that your privacy is protected by design, not just by
                    policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    Our commitment to privacy is fundamental to our mission. Should we ever consider changing this
                    approach, we would update this policy and clearly communicate any changes. However, our current
                    philosophy of zero data collection aligns with our core values and is unlikely to change.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">
                    If you have questions about this privacy policy or our practices, you can reach out through our
                    public channels. However, please note that we cannot respond to individual privacy requests since we
                    don&apos;t maintain any personal data that could be accessed, modified, or deleted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Globe className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">Privacy by Design, Not by Accident</h2>
              <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto text-pretty">
                Our privacy-first approach isn&apos;t just a policy—it&apos;s built into the very foundation of our platform.
                Enjoy learning about AI with complete peace of mind.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white font-medium">
                  Last Updated:{" "}
                  {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
