import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { SchemaOrg, BreadcrumbSchema } from "@/components/seo-schema"
import { generateSchemaOrgData, generateBreadcrumbItems } from "@/lib/tutorial-utils"
import type { TutorialData } from "@/types/tutorial"

import { TutorialHero } from "./TutorialHero"
import { TutorialBreadcrumb } from "./TutorialBreadcrumb"
import { TutorialHeader } from "./TutorialHeader"
import { TutorialProgress } from "./TutorialProgress"
import { TutorialSidebar } from "./TutorialSidebar"
import { TutorialNav } from "./TutorialNav"
import { TutorialComments } from "./TutorialComments"

interface TutorialLayoutProps {
  tutorial: TutorialData
  children: React.ReactNode
}

/**
 * Main Tutorial Layout Component
 *
 * Usage:
 * ```tsx
 * <TutorialLayout tutorial={tutorialData}>
 *   <TutorialSection id="intro" title="Introduction" icon={Sparkles} iconBgColor="bg-cyan-500" gradient="cyan-blue">
 *     <p>Your content here...</p>
 *   </TutorialSection>
 *   // ... more sections
 * </TutorialLayout>
 * ```
 */
export function TutorialLayout({ tutorial, children }: TutorialLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Schema */}
      <SchemaOrg type="tutorial" data={generateSchemaOrgData(tutorial)} />
      <BreadcrumbSchema items={generateBreadcrumbItems(tutorial)} />

      {/* Header */}
      <Header currentPath={`/tutorials/${tutorial.slug}`} />

      {/* Hero */}
      <TutorialHero tutorial={tutorial} />

      {/* Breadcrumb */}
      <TutorialBreadcrumb tutorial={tutorial} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {/* Tutorial Header */}
            <TutorialHeader tutorial={tutorial} />

            {/* Progress Bar */}
            <TutorialProgress />

            {/* Tutorial Content - Passed as children */}
            <div className="prose prose-lg max-w-none space-y-8">
              {children}
            </div>

            {/* Navigation */}
            <TutorialNav tutorial={tutorial} />

            {/* Comments */}
            <TutorialComments tutorial={tutorial} />
          </main>

          {/* Sidebar */}
          <TutorialSidebar tutorial={tutorial} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
