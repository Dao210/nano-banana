import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Zap,
  Target,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Users,
  Layers,
  Code,
} from "lucide-react"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import { gettingStartedData } from "@/data/tutorials/getting-started"
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
export const metadata = generateTutorialMetadata(gettingStartedData)

export default function GettingStartedPage() {
  return (
    <TutorialLayout tutorial={gettingStartedData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="What Makes Nano Banana Special?"
        icon={Sparkles}
        iconBgColor="bg-primary"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Nano Banana represents a quantum leap in AI image editing technology. Developed by Google and
          integrated into Gemini 2.5 Flash, it's not just another image editor—it's your creative partner that
          understands context, maintains consistency, and delivers professional results in seconds.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SectionCard title="Character Consistency Magic">
            <Image
              src="/tutorials/nano-banana-before-after-1.png"
              alt="Before and after: Character consistency example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Unlike other AI tools, Nano Banana maintains perfect character likeness across edits—change
              outfits, backgrounds, or poses while keeping the person recognizably themselves.
            </p>
          </SectionCard>

          <SectionCard title="Multi-Turn Precision">
            <Image
              src="/tutorials/nano-banana-multi-turn-example.png"
              alt="Multi-turn editing example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Make specific adjustments to individual elements while preserving everything else. It's like
              having a professional editor who understands exactly what you want.
            </p>
          </SectionCard>
        </div>

        <ProInsight>
          Nano Banana consistently outperforms tools like Midjourney and DALL-E in blind tests, particularly
          for character consistency and realistic edits.
        </ProInsight>
      </TutorialSection>

      {/* Access Methods Section */}
      <TutorialSection
        id="access-methods"
        title="Three Ways to Access Nano Banana"
        icon={Zap}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <div className="space-y-6">
          <GradientBox
            gradient="from-green-50 to-emerald-50"
            borderColor="border-green-500"
            badge="Recommended"
          >
            <h3 className="text-xl font-semibold mb-3">Method 1: Google Gemini App</h3>
            <p className="text-muted-foreground mb-4">
              The most user-friendly option with full feature access and seamless integration.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li><strong>Visit</strong> gemini.google.com or download the mobile app</li>
              <li><strong>Upload</strong> your image by clicking the attachment icon</li>
              <li><strong>Describe</strong> your edit in natural language</li>
              <li><strong>Refine</strong> with follow-up prompts for perfect results</li>
            </ol>
          </GradientBox>

          <GradientBox
            gradient="from-blue-50 to-cyan-50"
            borderColor="border-blue-500"
            badge="Free Option"
            badgeClass="bg-blue-500"
          >
            <h3 className="text-xl font-semibold mb-3">Method 2: Google AI Studio</h3>
            <p className="text-muted-foreground mb-4">
              Perfect for developers and power users who want direct API access.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Navigate to <code className="bg-muted px-2 py-1 rounded">aistudio.google.com</code></li>
              <li>Select "Generate media" → "Gemini Native Image"</li>
              <li>Upload your photos and write detailed prompts</li>
              <li>Click "Run" to generate your edited image</li>
            </ol>
          </GradientBox>

          <GradientBox
            gradient="from-purple-50 to-pink-50"
            borderColor="border-purple-500"
          >
            <h3 className="text-xl font-semibold mb-3">Method 3: Third-Party Platforms</h3>
            <p className="text-muted-foreground mb-4">
              Alternative access through specialized platforms with unique features.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Xole AI</h4>
                <p className="text-sm text-muted-foreground">
                  Easiest setup with preset prompts and style templates
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">LMArena</h4>
                <p className="text-sm text-muted-foreground">
                  Compare results with other AI models side-by-side
                </p>
              </div>
            </div>
          </GradientBox>
        </div>
      </TutorialSection>

      {/* First Edit Section */}
      <TutorialSection
        id="first-edit"
        title="Your First AI Edit (Step-by-Step)"
        icon={Target}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Let's create your first professional-quality edit together. We'll transform a simple portrait into
          something extraordinary.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">1</div>
              <CardTitle className="text-lg">Choose Your Image</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Start with a high-quality image featuring clear subjects, good lighting, and minimal background clutter.
              </p>
              <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                Good lighting • Clear subject • High resolution
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">2</div>
              <CardTitle className="text-lg">Write Your Prompt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                "Change the background to a magical forest with soft sunlight filtering through trees, keep the person exactly the same"
              </div>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                Tip: Always specify what should stay the same
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">3</div>
              <CardTitle className="text-lg">Review & Refine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Examine the result and make refinements with follow-up prompts if needed.
              </p>
              <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                Perfect! Character preserved, background transformed
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Try This Exercise
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Practice with your own photo using this exact prompt structure.
          </p>
          <div className="bg-muted p-3 rounded font-mono text-sm">
            "Transform [specific element] to [detailed description], while keeping [what to preserve] exactly the same"
          </div>
        </div>
      </TutorialSection>

      {/* Prompt Mastery Section */}
      <TutorialSection
        id="prompt-mastery"
        title="Writing Effective Prompts"
        icon={MessageCircle}
        iconBgColor="bg-cyan-500"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          The key to amazing results lies in how you communicate with the AI.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold text-red-800 mb-3">Avoid These Prompts</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-red-600">"Make it better"</code>
                <p className="text-xs text-muted-foreground mt-1">Too vague</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-red-600">"Change everything"</code>
                <p className="text-xs text-muted-foreground mt-1">Too broad</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-green-800 mb-3">Use These Instead</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-green-600">
                  "Replace the background with a vibrant sunset, keeping the person's pose and clothing identical"
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">The Perfect Prompt Formula</h3>
          <div className="bg-white p-4 rounded-lg border font-mono text-sm">
            <span className="text-blue-600">[Action]</span> +{" "}
            <span className="text-green-600">[Specific Details]</span> +{" "}
            <span className="text-purple-600">[Style/Mood]</span> +{" "}
            <span className="text-orange-600">[Preservation Instructions]</span>
          </div>
        </div>
      </TutorialSection>

      {/* Best Practices Section */}
      <TutorialSection
        id="best-practices"
        title="Professional Tips & Best Practices"
        icon={CheckCircle}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <BestPracticeCard
              number={1}
              title="Start with High-Quality Images"
              description="Use images with good resolution (at least 1024px), proper lighting, and clear subjects."
              color="blue"
            />
            <BestPracticeCard
              number={2}
              title="Make Gradual Changes"
              description="Instead of dramatic transformations, make small, incremental edits."
              color="green"
            />
            <BestPracticeCard
              number={3}
              title="Use Reference Images"
              description="When possible, provide multiple reference images for context."
              color="purple"
            />
          </div>
          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Iterate and Refine"
              description="Don't expect perfection on the first try. Use multi-turn editing to refine."
              color="orange"
            />
            <BestPracticeCard
              number={5}
              title="Save Your Progress"
              description="Download intermediate results before making additional changes."
              color="red"
            />
            <BestPracticeCard
              number={6}
              title="Experiment with Styles"
              description="Try different artistic styles, lighting conditions, and moods."
              color="cyan"
            />
          </div>
        </div>
      </TutorialSection>

      {/* Common Mistakes Section */}
      <TutorialSection
        id="common-mistakes"
        title="Avoiding Common Beginner Mistakes"
        icon={AlertTriangle}
        iconBgColor="bg-red-500"
        gradient="red-pink"
      >
        <div className="space-y-6">
          <MistakeCard
            number={1}
            title="Overcomplicating First Attempts"
            description="New users often try complex, multi-element changes in their first edit, leading to unpredictable results."
            solution="Start with single-element changes like background replacement or color adjustments before attempting complex transformations."
          />
          <MistakeCard
            number={2}
            title="Ignoring Image Composition"
            description="Using poorly composed or low-quality source images limits the AI's ability to produce professional results."
            solution="Choose images with good lighting, clear subjects, and proper framing. The AI enhances good photos—it can't fix fundamental composition issues."
          />
          <MistakeCard
            number={3}
            title="Not Specifying Preservation"
            description="Forgetting to specify what should remain unchanged often results in unwanted alterations to important elements."
            solution={`Always include preservation instructions: "keep the person's face and expression exactly the same" or "maintain all facial features."`}
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
          Congratulations! You've mastered the fundamentals of Nano Banana AI. Here's your roadmap to becoming a pro.
        </p>

        <TutorialNextSteps
          items={[
            {
              title: "Character Consistency",
              description: "Master advanced techniques for maintaining character likeness across complex transformations.",
              href: "/tutorials/character-consistency",
              icon: Users,
              iconBgColor: "bg-blue-100",
              iconColor: "text-blue-600",
              buttonText: "Start Learning",
            },
            {
              title: "Multi-Turn Editing",
              description: "Learn to make precise, iterative edits while maintaining image quality.",
              href: "/tutorials/multi-turn-editing",
              icon: Layers,
              iconBgColor: "bg-green-100",
              iconColor: "text-green-600",
              buttonText: "Explore Techniques",
            },
            {
              title: "Advanced Prompting",
              description: "Discover professional prompt engineering techniques for specific artistic styles.",
              href: "/tutorials/prompt-engineering",
              icon: Code,
              iconBgColor: "bg-purple-100",
              iconColor: "text-purple-600",
              buttonText: "Master Prompts",
            },
          ]}
        />

        <PracticeChallenge
          challenges={[
            { level: "Basic", description: "Change a portrait's background to three different environments" },
            { level: "Intermediate", description: "Transform the same person into different professional outfits" },
            { level: "Advanced", description: "Create a series showing the person in different time periods while maintaining their identity" },
          ]}
        />
      </TutorialSection>
    </TutorialLayout>
  )
}
