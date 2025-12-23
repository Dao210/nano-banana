import Link from "next/link"
import {
  Layers,
  Target,
  Zap,
  Shield,
  Wand2,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Users,
  Code,
  Lightbulb,
} from "lucide-react"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import { multiTurnEditingData } from "@/data/tutorials/multi-turn-editing"
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Generate metadata using the utility function
export const metadata = generateTutorialMetadata(multiTurnEditingData)

export default function MultiTurnEditingPage() {
  return (
    <TutorialLayout tutorial={multiTurnEditingData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="The Power of Iterative Editing"
        icon={Layers}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Multi-turn editing is the process of refining an image through a series of iterative changes, rather than a single transformation. Nano Banana's advanced workflow allows you to make precise adjustments step-by-step, ensuring each edit builds upon the last for optimal results.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <SectionCard title="Why Iterative Editing?">
            <p className="text-sm text-muted-foreground">
              Complex transformations often fail when attempted in a single step. By breaking edits into smaller, manageable changes, you maintain greater control and achieve more precise results.
            </p>
          </SectionCard>

          <SectionCard title="Preserve What Matters">
            <p className="text-sm text-muted-foreground">
              Each edit can focus on specific elements while preserving others. This approach ensures quality and consistency throughout the transformation process.
            </p>
          </SectionCard>
        </div>

        <ProInsight>
          Multi-turn editing allows you to explore creative directions without committing to irreversible changes. You can always branch or revert to previous versions.
        </ProInsight>
      </TutorialSection>

      {/* Fundamentals Section */}
      <TutorialSection
        id="fundamentals"
        title="Multi-Turn Editing Fundamentals"
        icon={Target}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Before diving into complex edits, master these fundamental principles that form the foundation of successful multi-turn editing.
        </p>

        <div className="space-y-6">
          <GradientBox
            gradient="from-green-50 to-emerald-50"
            borderColor="border-green-500"
            badge="Essential"
          >
            <h3 className="text-xl font-semibold mb-3">Define Your Goal</h3>
            <p className="text-muted-foreground mb-4">
              Clearly outline the desired outcome for your image. Whether it's style change, object addition, or character transformation, a clear goal guides each edit.
            </p>
            <div className="bg-white p-3 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <strong>Example:</strong> "Transform a casual portrait into a professional headshot with formal attire and studio lighting"
              </p>
            </div>
          </GradientBox>

          <GradientBox
            gradient="from-blue-50 to-cyan-50"
            borderColor="border-blue-500"
            badge="Foundation"
            badgeClass="bg-blue-500"
          >
            <h3 className="text-xl font-semibold mb-3">Start with a Strong Base</h3>
            <p className="text-muted-foreground mb-4">
              Use a high-quality reference image as your foundation. This ensures each subsequent edit maintains clarity and detail.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>High resolution (at least 1024px)</li>
              <li>Good lighting and clear subjects</li>
              <li>Minimal compression artifacts</li>
            </ul>
          </GradientBox>
        </div>
      </TutorialSection>

      {/* Workflow Section */}
      <TutorialSection
        id="workflow"
        title="Building Effective Workflows"
        icon={Zap}
        iconBgColor="bg-indigo-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Follow this proven step-by-step workflow to achieve professional results with every multi-turn edit.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">1</div>
              <CardTitle className="text-lg">Apply Incremental Edits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Make one change at a time—adjust color, add elements, or refine features. Avoid drastic transformations in a single step.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">2</div>
              <CardTitle className="text-lg">Review and Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                After each edit, compare the result to your goal and previous versions. Use Nano Banana's comparison tools to spot subtle changes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">3</div>
              <CardTitle className="text-lg">Iterate and Refine</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Continue editing in small steps, saving intermediate results. This iterative process ensures quality and consistency throughout.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Edit History Tips
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
            <li>Use Nano Banana's "Edit History" to revert or branch edits for creative exploration.</li>
            <li>Tag key versions for easy reference and comparison.</li>
            <li>Collaborate with peers in the <Link href="/community" className="text-primary underline">Nano Banana Community</Link> for feedback and inspiration.</li>
          </ul>
        </div>
      </TutorialSection>

      {/* Quality Preservation Section */}
      <TutorialSection
        id="quality-preservation"
        title="Maintaining Quality Across Turns"
        icon={Shield}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          One of the biggest challenges in multi-turn editing is maintaining image quality. Here's how to prevent degradation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-3 text-amber-700">Quality Loss Prevention</h3>
            <p className="text-sm text-muted-foreground mb-4">
              If image quality degrades, revert to a previous version and apply edits more gradually. Each generation introduces subtle artifacts.
            </p>
            <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
              <p className="text-xs text-amber-700">
                <strong>Pro Tip:</strong> Limit to 3-5 major edits per chain before starting fresh with the best result.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="font-semibold mb-3 text-amber-700">Consistent Results</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ensure each prompt is clear and focused. Avoid conflicting instructions between steps that confuse the model.
            </p>
            <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
              <p className="text-xs text-amber-700">
                <strong>Pro Tip:</strong> Keep a record of successful prompts for reuse in similar projects.
              </p>
            </div>
          </div>
        </div>

        <ProInsight>
          Feature drift is a common issue. Regularly compare edits to the original reference to maintain core features and style consistency.
        </ProInsight>
      </TutorialSection>

      {/* Complex Edits Section */}
      <TutorialSection
        id="complex-edits"
        title="Complex Transformation Strategies"
        icon={Wand2}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Master these advanced strategies for tackling complex, multi-element transformations.
        </p>

        <div className="space-y-6">
          <GradientBox
            gradient="from-emerald-50 to-teal-50"
            borderColor="border-emerald-500"
            badge="Advanced"
            badgeClass="bg-emerald-500"
          >
            <h3 className="text-xl font-semibold mb-3">Layered Transformations</h3>
            <p className="text-muted-foreground mb-4">
              Break complex edits into layers: background first, then lighting, then subject modifications. Each layer builds upon the last.
            </p>
            <div className="bg-white p-3 rounded-lg border font-mono text-sm">
              Step 1: "Change background to mountain landscape" <br />
              Step 2: "Add warm sunset lighting from the left" <br />
              Step 3: "Update clothing to hiking gear"
            </div>
          </GradientBox>

          <GradientBox
            gradient="from-teal-50 to-cyan-50"
            borderColor="border-teal-500"
            badge="Strategy"
            badgeClass="bg-teal-500"
          >
            <h3 className="text-xl font-semibold mb-3">Reference-Guided Editing</h3>
            <p className="text-muted-foreground mb-4">
              For complex style transfers, use reference images to guide each editing step. This provides the AI with clear visual context.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Upload style reference alongside your source image</li>
              <li>Describe specific elements to transfer</li>
              <li>Iterate to match the reference progressively</li>
            </ul>
          </GradientBox>
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
              title="Save Intermediate Results"
              description="Download images at each major step. This creates recovery points if later edits go wrong."
              color="blue"
            />
            <BestPracticeCard
              number={2}
              title="Use Specific Prompts"
              description="Vague instructions lead to unpredictable results. Be explicit about what to change and preserve."
              color="green"
            />
            <BestPracticeCard
              number={3}
              title="Maintain Consistency"
              description="Keep similar language and style across prompts to maintain visual coherence."
              color="purple"
            />
          </div>
          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Plan Your Edit Chain"
              description="Sketch out your transformation steps before starting. This prevents wasted iterations."
              color="orange"
            />
            <BestPracticeCard
              number={5}
              title="Test on Duplicates"
              description="Experiment on copies of your image. This preserves your original while exploring options."
              color="red"
            />
            <BestPracticeCard
              number={6}
              title="Learn from Failures"
              description="When edits fail, analyze why. Understanding failure modes improves future prompts."
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
            title="Quality Loss from Over-Editing"
            description="Making too many edits in a single chain causes cumulative quality degradation. Each generation introduces subtle artifacts."
            solution="Limit edit chains to 3-5 major changes. If you need more edits, start a new chain using your best intermediate result."
          />
          <MistakeCard
            number={2}
            title="Inconsistent Instructions"
            description="Giving conflicting prompts between steps confuses the model and produces inconsistent results."
            solution="Maintain consistent terminology and style descriptions across all prompts in your edit chain."
          />
          <MistakeCard
            number={3}
            title="Feature Drift"
            description="Character features slowly change across multiple edits, losing the original likeness."
            solution="Regularly compare edits to the original reference. Include explicit preservation instructions in each prompt."
          />
          <MistakeCard
            number={4}
            title="Skipping Review Steps"
            description="Rushing through edits without careful review leads to compounding errors."
            solution="Take time to examine each result carefully before proceeding. Compare against your goal and previous versions."
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
          You've mastered multi-turn editing fundamentals! Continue your journey with these advanced topics.
        </p>

        <TutorialNextSteps
          items={[
            {
              title: "Getting Started",
              description: "New to Nano Banana? Start here for setup and your first edits.",
              href: "/tutorials/getting-started",
              icon: Layers,
              iconBgColor: "bg-blue-100",
              iconColor: "text-blue-600",
              buttonText: "Explore Guide",
            },
            {
              title: "Character Consistency",
              description: "Learn to maintain reliable character likeness across edits and scenes.",
              href: "/tutorials/character-consistency",
              icon: Users,
              iconBgColor: "bg-green-100",
              iconColor: "text-green-600",
              buttonText: "Master Consistency",
            },
            {
              title: "Prompt Engineering",
              description: "Discover professional prompt strategies for iterative and creative edits.",
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
            { level: "Basic", description: "Transform a portrait through 3 sequential edits: background, lighting, then clothing" },
            { level: "Intermediate", description: "Create a character in 5 different settings while maintaining perfect consistency" },
            { level: "Advanced", description: "Execute a complex 8-step transformation from casual photo to cinematic poster" },
          ]}
        />
      </TutorialSection>
    </TutorialLayout>
  )
}
