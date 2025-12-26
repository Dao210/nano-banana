import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchemaOrg } from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Contact Us - Nano Banana Tutorial Platform",
  description: "Get in touch with the Nano Banana tutorial team. Ask questions, suggest topics, or report issues.",
  keywords: ["contact", "support", "help", "Nano Banana", "AI image editing"],
  alternates: {
    canonical: "https://nanobanana.fans/contact",
  },
  openGraph: {
    title: "Contact Us - Nano Banana Tutorial Platform",
    description: "Get in touch with the Nano Banana tutorial team. Ask questions, suggest topics, or report issues.",
    type: "website",
    url: "https://nanobanana.fans/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SchemaOrg
        type="ContactPage"
        data={{
          title: "Contact Us - Nano Banana Tutorial Platform",
          description: "Get in touch with the Nano Banana tutorial team.",
          url: "https://nanobanana.fans/contact",
        }}
      />

      <Header currentPath="/contact" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Contact Us
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Have questions about Nano Banana? Want to suggest a tutorial topic? Or found an issue that needs fixing? We&apos;d love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">General Inquiries</h2>
              <p className="text-muted-foreground mb-4">
                For general questions, suggestions, or feedback about our tutorials and platform.
              </p>
              <a 
                href="mailto:hello@nanobanana.fans" 
                className="text-primary hover:underline"
              >
                hello@nanobanana.fans
              </a>
            </div>

            <div className="bg-card p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Technical Support</h2>
              <p className="text-muted-foreground mb-4">
                Need help with specific Nano Banana techniques or tutorial content?
              </p>
              <a 
                href="mailto:support@nanobanana.fans" 
                className="text-primary hover:underline"
              >
                support@nanobanana.fans
              </a>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a topic</option>
                  <option value="tutorial-request">Tutorial Request</option>
                  <option value="technical-help">Technical Help</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug-report">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest Nano Banana tutorials and news
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
