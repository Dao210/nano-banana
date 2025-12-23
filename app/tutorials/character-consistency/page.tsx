import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Target,
  Layers,
  ImageIcon,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import { characterConsistencyData } from "@/data/tutorials/character-consistency"
import {
  TutorialLayout,
  TutorialSection,
  ProInsight,
  SectionCard,
  GradientBox,
  MistakeCard,
  BestPracticeCard,
  TutorialNextSteps,
  PracticeChallenge,
} from "@/components/tutorials"

// Generate metadata using the utility function
export const metadata = generateTutorialMetadata(characterConsistencyData)

export default function CharacterConsistencyPage() {
  return (
    <TutorialLayout tutorial={characterConsistencyData}>
      {/* Introduction Section - Why Character Consistency Matters */}
      <TutorialSection
        id="introduction"
        title="Why Character Consistency Matters"
        icon={Users}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Character consistency means preserving a character's unique identity across different edits, scenes, and creative transformations. Nano Banana's advanced AI ensures your characters remain instantly recognizable, whether you're building a comic universe, brand mascot, or visual story.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SectionCard title="Visual Storytelling">
            <p className="text-sm text-muted-foreground">
              Maintain character identity across comic panels, storyboards, and sequential art. Your characters stay recognizable from the first frame to the last.
            </p>
          </SectionCard>

          <SectionCard title="Brand Consistency">
            <p className="text-sm text-muted-foreground">
              Create mascots and brand characters that remain consistent across marketing materials, social media, and promotional content.
            </p>
          </SectionCard>
        </div>

        <ProInsight>
          Character consistency is the foundation of professional visual storytelling. It builds audience connection and trust with your characters over time.
        </ProInsight>
      </TutorialSection>

      {/* Fundamentals Section - Understanding Identity Preservation */}
      <TutorialSection
        id="fundamentals"
        title="Understanding Identity Preservation"
        icon={Target}
        iconBgColor="bg-primary"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Identity preservation is the core technology behind character consistency. It's about teaching the AI which features define your character.
        </p>

        <div className="space-y-6">
          <GradientBox
            gradient="from-blue-50 to-cyan-50"
            borderColor="border-blue-500"
          >
            <h3 className="text-xl font-semibold mb-3">Key Identity Features</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li><strong>Facial Structure:</strong> Eye shape, nose profile, jawline, and overall proportions</li>
              <li><strong>Distinctive Markers:</strong> Scars, birthmarks, freckles, and unique features</li>
              <li><strong>Hair & Color:</strong> Hairstyle, color, texture, and characteristic styling</li>
              <li><strong>Expression Patterns:</strong> Typical smiles, eyebrow positions, and emotional cues</li>
            </ul>
          </GradientBox>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              How Nano Banana Preserves Identity
            </h3>
            <p className="text-sm text-muted-foreground">
              Nano Banana uses advanced neural networks to encode your character's unique features into a latent representation. This allows the AI to reconstruct the same identity even when changing poses, outfits, backgrounds, or artistic styles.
            </p>
          </div>
        </div>
      </TutorialSection>

      {/* Core Techniques Section */}
      <TutorialSection
        id="techniques"
        title="Core Consistency Techniques"
        icon={Layers}
        iconBgColor="bg-indigo-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Master these fundamental techniques to achieve professional-level character consistency in your edits.
        </p>

        <h3 className="text-2xl font-bold mb-4">Step-by-Step Guide</h3>
        <div className="space-y-4 mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">1</div>
              <CardTitle className="text-lg">Start with a Clear Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload a high-quality image that captures your character's defining features. Use Nano Banana's reference input to anchor the likeness.
              </p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                Tip: Choose images with good lighting and clear facial features
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">2</div>
              <CardTitle className="text-lg">Craft Precise Prompts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Be specific about traits—hair color, facial structure, accessories, and style. The more details you provide, the more consistent your results.
              </p>
              <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                Example: "Keep the same brown eyes, wavy auburn hair, and freckles across the nose"
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">3</div>
              <CardTitle className="text-lg">Use Multi-Turn Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Make incremental changes. Nano Banana's multi-turn workflow lets you refine details while preserving the core identity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">4</div>
              <CardTitle className="text-lg">Leverage Style Locking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Apply style transfer and locking to maintain a consistent artistic direction throughout your edits.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">5</div>
              <CardTitle className="text-lg">Iterate and Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Save intermediate results, compare outputs, and adjust prompts as needed. Consistency improves with feedback and iteration.
              </p>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Multi-Reference Strategies Section */}
      <TutorialSection
        id="multi-reference"
        title="Multi-Reference Strategies"
        icon={ImageIcon}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Using multiple reference images can dramatically improve character consistency, especially for complex transformations.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <GradientBox
            gradient="from-amber-50 to-orange-50"
            borderColor="border-amber-500"
            badge="Recommended"
          >
            <h3 className="text-xl font-semibold mb-3">Front + Profile Strategy</h3>
            <p className="text-muted-foreground mb-4">
              Provide both front-facing and profile references to give the AI a complete understanding of your character's facial structure.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Front view for primary features</li>
              <li>Profile for nose, chin, and ear details</li>
              <li>3/4 view for dimensional understanding</li>
            </ul>
          </GradientBox>

          <GradientBox
            gradient="from-orange-50 to-red-50"
            borderColor="border-orange-500"
            badge="Advanced"
            badgeClass="bg-orange-500"
          >
            <h3 className="text-xl font-semibold mb-3">Expression Library</h3>
            <p className="text-muted-foreground mb-4">
              Build a library of expressions to ensure consistency across emotional states.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Neutral expression baseline</li>
              <li>Happy/smiling reference</li>
              <li>Serious/focused expression</li>
            </ul>
          </GradientBox>
        </div>

        <ProInsight>
          Use previous outputs as new references to reinforce likeness. This creates a feedback loop that strengthens character consistency over time.
        </ProInsight>
      </TutorialSection>

      {/* Practical Examples Section */}
      <TutorialSection
        id="practical-examples"
        title="Real-World Applications"
        icon={Lightbulb}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-6">
          See how character consistency applies to real creative projects and professional workflows.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Comic Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Maintain character identity across panels, pages, and entire graphic novel series.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>- Consistent facial features</li>
                <li>- Recognizable expressions</li>
                <li>- Unified art style</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Brand Mascots</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Create mascots that remain consistent across all marketing materials and platforms.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>- Social media posts</li>
                <li>- Print materials</li>
                <li>- Animated content</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-lg">Video Storyboards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Plan video content with consistent character representation across scenes.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>- Scene planning</li>
                <li>- Shot composition</li>
                <li>- Character continuity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Best Practices Section */}
      <TutorialSection
        id="best-practices"
        title="Best Practices & Tips"
        icon={CheckCircle}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <BestPracticeCard
              number={1}
              title="Tag Your Characters"
              description="Use a unique 'Character ID' for persistent identity across sessions and projects."
              color="blue"
            />
            <BestPracticeCard
              number={2}
              title="Build Reference Libraries"
              description="Create and maintain libraries of reference images for each character."
              color="green"
            />
            <BestPracticeCard
              number={3}
              title="Document Key Features"
              description="Keep a written record of your character's defining features for prompt consistency."
              color="purple"
            />
          </div>
          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Use Consistent Lighting"
              description="Reference images with similar lighting conditions produce more consistent results."
              color="orange"
            />
            <BestPracticeCard
              number={5}
              title="Iterate Progressively"
              description="Make small, incremental changes rather than dramatic transformations at once."
              color="red"
            />
            <BestPracticeCard
              number={6}
              title="Join the Community"
              description="Connect with other creators for feedback, inspiration, and shared techniques."
              color="cyan"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3">Community Resources</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Join the <Link href="/community" className="text-primary underline">Nano Banana Community</Link> for feedback, inspiration, and to learn from other creators mastering character consistency.
          </p>
        </div>
      </TutorialSection>

      {/* Common Mistakes Section */}
      <TutorialSection
        id="common-mistakes"
        title="Avoiding Common Mistakes"
        icon={AlertTriangle}
        iconBgColor="bg-red-500"
        gradient="red-pink"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Learn from these common pitfalls to maintain perfect character consistency.
        </p>

        <div className="space-y-6">
          <MistakeCard
            number={1}
            title="Appearance Drift"
            description="Your character starts to look different across edits, losing their distinctive features over time."
            solution="Re-anchor with the original reference and clarify prompt details. Include specific feature descriptions in every prompt."
          />
          <MistakeCard
            number={2}
            title="Style Inconsistency"
            description="The artistic style changes between edits, making the character feel different even if features are similar."
            solution="Use style locking or previous outputs as references to maintain a unified look across all edits."
          />
          <MistakeCard
            number={3}
            title="Loss of Key Features"
            description="Critical distinguishing features like scars, freckles, or unique eye colors disappear in new edits."
            solution="Explicitly mention critical features in your prompt to prevent them from being lost: 'maintain the scar above the left eyebrow.'"
          />
        </div>
      </TutorialSection>

      {/* Next Steps Section */}
      <TutorialSection
        id="next-steps"
        title="Your Learning Journey Continues"
        icon={ArrowRight}
        iconBgColor="bg-violet-500"
        gradient="violet-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Congratulations! You've mastered the fundamentals of character consistency. Continue your learning with these related tutorials.
        </p>

        <TutorialNextSteps
          items={[
            {
              title: "Getting Started",
              description: "New to Nano Banana? Start here for setup and your first edits.",
              href: "/tutorials/getting-started",
              icon: Users,
              iconBgColor: "bg-blue-100",
              iconColor: "text-blue-600",
              buttonText: "Explore Guide",
            },
            {
              title: "Multi-Turn Editing",
              description: "Learn advanced techniques for iterative edits while maintaining image quality.",
              href: "/tutorials/multi-turn-editing",
              icon: Layers,
              iconBgColor: "bg-green-100",
              iconColor: "text-green-600",
              buttonText: "Explore Techniques",
            },
            {
              title: "Prompt Engineering",
              description: "Discover professional prompt strategies for consistent results.",
              href: "/tutorials/prompt-engineering",
              icon: Target,
              iconBgColor: "bg-purple-100",
              iconColor: "text-purple-600",
              buttonText: "Master Prompts",
            },
          ]}
        />

        <PracticeChallenge
          challenges={[
            { level: "Basic", description: "Create three variations of the same character in different outfits while maintaining facial consistency" },
            { level: "Intermediate", description: "Build a comic strip with your character appearing in 4+ panels with different poses and expressions" },
            { level: "Advanced", description: "Transform your character across different art styles (realistic, anime, watercolor) while preserving their identity" },
          ]}
        />
      </TutorialSection>
    </TutorialLayout>
  )
}
