import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Sparkles,
  Target,
  Layers,
  Wand2,
  Lightbulb,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Users,
  Code,
} from "lucide-react"

import { promptEngineeringData } from "@/data/tutorials/prompt-engineering"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
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

export const metadata: Metadata = generateTutorialMetadata(promptEngineeringData)

export default function PromptEngineeringPage() {
  return (
    <TutorialLayout tutorial={promptEngineeringData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="The Power of Effective Prompts"
        icon={Sparkles}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Prompt engineering is the art and science of crafting precise instructions that guide AI models to generate exactly what you envision. With Nano Banana, well-crafted prompts can unlock extraordinary creative possibilities and professional-quality results.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SectionCard title="Precision Through Clarity">
            <Image
              src="/tutorials/prompt-engineering-cover.jpg"
              alt="Before and after: Effective prompt engineering example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Clear, specific prompts yield dramatically better results than vague or generic instructions.
            </p>
          </SectionCard>

          <SectionCard title="Advanced Techniques">
            <Image
              src="/tutorials/prompt-engineering-cover.jpg"
              alt="Advanced prompt techniques example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Mastering prompt engineering techniques enables complex creative transformations and consistent results.
            </p>
          </SectionCard>
        </div>

        <ProInsight>
          {`Nano Banana's advanced understanding of context and nuance makes it particularly responsive to well-crafted prompts, often exceeding results from other AI tools.`}
        </ProInsight>
      </TutorialSection>

      {/* Fundamentals Section */}
      <TutorialSection
        id="fundamentals"
        title="Prompt Engineering Fundamentals"
        icon={Target}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          {`Understanding the core principles of prompt engineering is essential for maximizing Nano Banana's capabilities.`}
        </p>

        <div className="space-y-6">
          <GradientBox gradient="from-blue-50 to-cyan-50" borderColor="border-blue-500">
            <h3 className="text-xl font-semibold mb-3">Clarity and Specificity</h3>
            <p className="text-muted-foreground mb-4">
              The more specific and clear your prompt, the better the AI can understand your intent and generate accurate results.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2 text-red-700">Vague Prompt</h4>
                <p className="text-sm text-muted-foreground">
                  {`"Make it look better"`}
                </p>
                <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                  Unclear intent leads to unpredictable results
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2 text-green-700">Specific Prompt</h4>
                <p className="text-sm text-muted-foreground">
                  {`"Enhance the image with warm lighting, add soft focus to background, and increase color saturation by 20%"`}
                </p>
                <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                  Clear instructions for precise results
                </div>
              </div>
            </div>
          </GradientBox>

          <GradientBox gradient="from-amber-50 to-orange-50" borderColor="border-amber-500">
            <h3 className="text-xl font-semibold mb-3">Context and Constraints</h3>
            <p className="text-muted-foreground mb-4">
              Providing appropriate context and clearly stating constraints helps the AI understand boundaries and produce more accurate results.
            </p>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Elements</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Define the desired outcome clearly</li>
                <li>Specify what should remain unchanged</li>
                <li>Provide stylistic references when helpful</li>
                <li>{`Set boundaries for changes (e.g., "only adjust color, not composition")`}</li>
              </ul>
            </div>
          </GradientBox>
        </div>
      </TutorialSection>

      {/* Structure Section */}
      <TutorialSection
        id="structure"
        title="The Perfect Prompt Structure"
        icon={Layers}
        iconBgColor="bg-indigo-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          A well-structured prompt follows a logical flow that maximizes clarity and effectiveness.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                1
              </div>
              <CardTitle className="text-lg">Action Statement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Begin with a clear verb that defines what you want the AI to do.
              </p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                {`Examples: "Transform", "Enhance", "Replace", "Add"`}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                2
              </div>
              <CardTitle className="text-lg">Detailed Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Provide specific details about what you want to change or create.
              </p>
              <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                Include colors, styles, textures, and other relevant characteristics
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                3
              </div>
              <CardTitle className="text-lg">Preservation Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Clearly state what should remain unchanged in the image.
              </p>
              <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                {`Examples: "Keep facial features identical", "Maintain original composition"`}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-cyan-500" />
            Complete Prompt Template
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use this template to structure your prompts for maximum effectiveness:
          </p>
          <div className="bg-muted p-3 rounded font-mono text-sm">
            {`"[Action] [specific element] to [detailed description], while [preservation instructions]"`}
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            {`Example: "Transform the background to a vibrant sunset beach with warm orange and pink hues, while keeping the person's facial features and clothing exactly the same"`}
          </p>
        </div>
      </TutorialSection>

      {/* Techniques Section */}
      <TutorialSection
        id="techniques"
        title="Advanced Prompting Techniques"
        icon={Wand2}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          {`Master these advanced techniques to unlock Nano Banana's full potential for complex creative tasks.`}
        </p>

        <div className="space-y-6">
          <GradientBox gradient="from-violet-50 to-purple-50" borderColor="border-violet-500">
            <h3 className="text-xl font-semibold mb-3">Layered Instructions</h3>
            <p className="text-muted-foreground mb-4">
              Break complex edits into multiple, sequential instructions for better control and results.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                {`"First, adjust the lighting to create a warm, golden-hour effect. Second, enhance the saturation of the sky while keeping skin tones natural. Third, add a subtle vignette to draw attention to the subject."`}
              </div>
              <p className="text-sm text-muted-foreground">
                This approach allows for precise control over each aspect of the edit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Greater control over individual elements</li>
                  <li>Easier to refine specific aspects</li>
                  <li>Reduced chance of unwanted side effects</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">When to Use</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Complex multi-element transformations</li>
                  <li>When precision is critical</li>
                  <li>For iterative refinement workflows</li>
                </ul>
              </div>
            </div>
          </GradientBox>

          <GradientBox gradient="from-pink-50 to-rose-50" borderColor="border-pink-500">
            <h3 className="text-xl font-semibold mb-3">Reference-Based Prompts</h3>
            <p className="text-muted-foreground mb-4">
              Incorporate visual references to guide the AI toward specific styles or effects.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                {`"Apply the color grading and lighting style similar to the reference image, but maintain the original subject and composition. Reference: [image of a professionally graded photograph]"`}
              </div>
              <p className="text-sm text-muted-foreground">
                This technique is particularly effective for achieving consistent visual styles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Style Matching</h4>
                <p className="text-sm text-muted-foreground">
                  Match specific artistic or photographic styles using reference images.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Color Grading</h4>
                <p className="text-sm text-muted-foreground">
                  Transfer color palettes and grading techniques from reference materials.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Lighting Effects</h4>
                <p className="text-sm text-muted-foreground">
                  Replicate specific lighting conditions or effects from reference images.
                </p>
              </div>
            </div>
          </GradientBox>
        </div>
      </TutorialSection>

      {/* Examples Section */}
      <TutorialSection
        id="examples"
        title="Real-World Prompt Examples"
        icon={Lightbulb}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-6">
          See how professional prompt engineers craft effective prompts for various scenarios.
        </p>

        <div className="space-y-6">
          <SectionCard title="Character Consistency">
            <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
              {`"Transform the background to a cyberpunk cityscape with neon lights and rain-slicked streets, while keeping the character's facial features, hairstyle, and clothing exactly the same. Maintain the original lighting on the character's face."`}
            </div>
            <p className="text-sm text-muted-foreground">
              This prompt ensures character consistency while allowing for dramatic environmental changes.
            </p>
          </SectionCard>

          <SectionCard title="Product Photography">
            <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
              {`"Place the product on a clean white background (#FFFFFF) with soft, even lighting from the front-left. Add a subtle drop shadow directly beneath the product, blur radius 8px, opacity 25%. Keep all product details, textures, and colors unchanged."`}
            </div>
            <p className="text-sm text-muted-foreground">
              This prompt creates professional e-commerce product images with precise specifications.
            </p>
          </SectionCard>

          <SectionCard title="Artistic Style Transfer">
            <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
              {`"Apply the visual style of a Van Gogh painting to the landscape elements only, using bold brushstrokes and vibrant colors. Keep the person in the foreground exactly the same, with natural skin tones and realistic details. Reference: [image of Van Gogh's 'Starry Night']"`}
            </div>
            <p className="text-sm text-muted-foreground">
              This prompt demonstrates selective style transfer with clear preservation instructions.
            </p>
          </SectionCard>
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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <BestPracticeCard
              number={1}
              title="Start with Simple Prompts"
              description="Begin with basic edits before attempting complex transformations. Master fundamentals first."
              color="blue"
            />

            <BestPracticeCard
              number={2}
              title="Be Specific About Preservation"
              description="Always clearly state what should remain unchanged to prevent unwanted alterations."
              color="green"
            />

            <BestPracticeCard
              number={3}
              title="Use Reference Images"
              description="When possible, provide visual references to guide the AI toward your desired outcome."
              color="purple"
            />
          </div>

          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Iterate and Refine"
              description={`Don't expect perfection on the first try. Use follow-up prompts to refine specific aspects.`}
              color="orange"
            />

            <BestPracticeCard
              number={5}
              title="Save Your Progress"
              description="Download intermediate results before making additional changes for fallback options."
              color="red"
            />

            <BestPracticeCard
              number={6}
              title="Experiment with Combinations"
              description="Try combining different techniques and approaches to discover unique creative possibilities."
              color="cyan"
            />
          </div>
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
        <div className="space-y-6">
          <MistakeCard
            number={1}
            title="Vague or Generic Prompts"
            description={`Using unclear or generic descriptions that don't specify what you want often leads to unpredictable or unsatisfactory results.`}
            solution="Be specific about changes, styles, and what should remain unchanged. Use detailed descriptions and clear action statements."
          />

          <MistakeCard
            number={2}
            title="Not Specifying Preservation"
            description="Forgetting to specify what should remain unchanged often results in unwanted alterations to important elements."
            solution={`Always include preservation instructions: "keep facial features exactly the same" or "maintain all important details."`}
          />

          <MistakeCard
            number={3}
            title="Overcomplicating Prompts"
            description="Trying to accomplish too many changes in a single prompt can confuse the AI and lead to suboptimal results."
            solution="Break complex edits into multiple, simpler prompts. Focus on one major change per prompt for better control."
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
          {`Congratulations! You've mastered the fundamentals of prompt engineering with Nano Banana AI. Here's your roadmap to becoming a prompt engineering pro.`}
        </p>

        <TutorialNextSteps
          items={[
            {
              title: "Character Consistency",
              description: "Master advanced techniques for maintaining character likeness across complex transformations and multiple edits.",
              href: "/tutorials/character-consistency",
              icon: Users,
              iconBgColor: "bg-blue-100",
              iconColor: "text-blue-600",
              buttonText: "Start Learning",
            },
            {
              title: "Multi-Turn Editing",
              description: "Learn to make precise, iterative edits while maintaining image quality and achieving complex creative visions.",
              href: "/tutorials/multi-turn-editing",
              icon: Layers,
              iconBgColor: "bg-green-100",
              iconColor: "text-green-600",
              buttonText: "Explore Techniques",
            },
            {
              title: "API Integration",
              description: "Discover how to integrate Nano Banana into your applications and workflows through powerful API capabilities.",
              href: "/tutorials/api-integration",
              icon: Code,
              iconBgColor: "bg-purple-100",
              iconColor: "text-purple-600",
              buttonText: "Integrate Now",
            },
          ]}
        />

        <PracticeChallenge
          challenges={[
            {
              level: "Basic",
              description: "Write 5 prompts for simple background changes with clear preservation instructions",
            },
            {
              level: "Intermediate",
              description: "Create prompts for style transfer that maintain subject integrity",
            },
            {
              level: "Advanced",
              description: "Develop a series of layered prompts for a complex creative transformation",
            },
          ]}
        />
      </TutorialSection>
    </TutorialLayout>
  )
}
