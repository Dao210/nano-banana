import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Zap,
  Target,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Users,
  Layers,
  Code,
  Palette,
  Wand2,
  Settings,
  Cpu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { advancedTechniquesData } from "@/data/tutorials/advanced-techniques"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import {
  TutorialLayout,
  TutorialSection,
  BestPracticeCard,
  MistakeCard,
} from "@/components/tutorials"

export const metadata = generateTutorialMetadata(advancedTechniquesData)

export default function AdvancedTechniquesPage() {
  return (
    <TutorialLayout tutorial={advancedTechniquesData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="Mastering Advanced Image Editing"
        icon={Cpu}
        iconBgColor="bg-indigo-500"
        gradient="cyan-blue"
      >
        <p className="text-lg mb-6 leading-relaxed">
          Advanced techniques with Nano Banana AI unlock unprecedented creative possibilities and professional-quality results. This guide will take you beyond basic editing to master complex workflows and creative approaches that distinguish expert users from beginners.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white/80 p-6 rounded-lg border">
            <Image
              src="/tutorials/advanced-techniques-cover.jpg"
              alt="Before and after: Advanced editing techniques example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">Complex Transformations</h3>
            <p className="text-sm text-muted-foreground">
              Master techniques for handling challenging edits that require multiple steps and precise control.
            </p>
          </div>

          <div className="bg-white/80 p-6 rounded-lg border">
            <Image
              src="/tutorials/advanced-techniques-cover.jpg"
              alt="Professional workflow example"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">Professional Workflows</h3>
            <p className="text-sm text-muted-foreground">
              Implement systematic approaches that ensure consistent, high-quality results across projects.
            </p>
          </div>
        </div>

        <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
          <p className="text-sm font-medium mb-1">Expert Insight</p>
          <p className="text-sm text-muted-foreground">
            The key to mastering advanced techniques is understanding Nano Banana&apos;s strengths and limitations, then developing workflows that maximize its capabilities while compensating for its constraints.
          </p>
        </div>
      </TutorialSection>

      {/* Workflows Section */}
      <TutorialSection
        id="workflows"
        title="Professional Editing Workflows"
        icon={Target}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Implementing systematic workflows ensures consistent, high-quality results and efficient use of Nano Banana&apos;s capabilities.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3">Pre-Edit Analysis</h3>
            <p className="text-muted-foreground mb-4">
              Before making any edits, analyze the source image to identify key elements, potential challenges, and optimization opportunities.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Image Quality Assessment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Resolution and sharpness</li>
                  <li>Lighting conditions</li>
                  <li>Color accuracy</li>
                  <li>Composition strengths/weaknesses</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Edit Planning</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Primary objectives</li>
                  <li>Potential challenges</li>
                  <li>Required preservation elements</li>
                  <li>Reference materials needed</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Resource Preparation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Reference images</li>
                  <li>Style guides</li>
                  <li>Prompt templates</li>
                  <li>Backup copies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3">Iterative Refinement Process</h3>
            <p className="text-muted-foreground mb-4">
              Break complex edits into manageable steps, refining each aspect systematically for optimal results.
            </p>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Four-Step Refinement Cycle</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li><strong>Foundation:</strong> Establish core elements and overall composition</li>
                <li><strong>Structure:</strong> Refine major components and relationships</li>
                <li><strong>Details:</strong> Enhance textures, lighting, and fine elements</li>
                <li><strong>Polish:</strong> Final adjustments and quality optimization</li>
              </ol>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Creative Approaches Section */}
      <TutorialSection
        id="creative-approaches"
        title="Creative Transformation Techniques"
        icon={Wand2}
        iconBgColor="bg-purple-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Push the boundaries of creativity with these advanced transformation techniques that maximize Nano Banana&apos;s artistic capabilities.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                1
              </div>
              <CardTitle className="text-lg">Conceptual Blending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Combine disparate concepts to create entirely new visual ideas that transcend source material limitations.
              </p>
              <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                Example: Merging architectural styles with natural elements
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                2
              </div>
              <CardTitle className="text-lg">Narrative-Driven Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Transform images to support specific storylines or emotional themes rather than just visual improvements.
              </p>
              <div className="mt-3 p-2 bg-indigo-50 rounded text-xs text-indigo-700">
                Example: Adjusting mood and atmosphere to match a character&apos;s emotional journey
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-purple-500" />
            Creative Prompt Framework
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use this framework to structure creative prompts that push beyond simple transformations:
          </p>
          <div className="bg-muted p-3 rounded font-mono text-sm">
            &quot;Transform [subject] by [creative concept] to evoke [emotional response], while maintaining [essential elements]&quot;
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Example: &quot;Transform the portrait by merging it with impressionist painting techniques to evoke nostalgia, while maintaining facial recognition and emotional expression&quot;
          </p>
        </div>
      </TutorialSection>

      {/* Complex Scenarios Section */}
      <TutorialSection
        id="complex-scenarios"
        title="Handling Complex Editing Scenarios"
        icon={Layers}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Master techniques for tackling the most challenging editing scenarios that require advanced problem-solving skills.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold mb-3">Multi-Element Transformations</h3>
            <p className="text-muted-foreground mb-4">
              Coordinating changes across multiple elements while maintaining visual harmony and consistency.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                &quot;Transform the interior design by updating the furniture to mid-century modern style, changing wall colors to warm neutrals, and adjusting lighting to create a cozy atmosphere, while ensuring all elements complement each other and maintain realistic proportions.&quot;
              </div>
              <p className="text-sm text-muted-foreground">
                This approach ensures cohesive results when making multiple interconnected changes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Key Principles</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Maintain visual consistency across elements</li>
                  <li>Preserve realistic proportions and relationships</li>
                  <li>Ensure lighting and shadows are coherent</li>
                  <li>Balance changes to avoid overwhelming the composition</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Common Challenges</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Conflicting style requirements</li>
                  <li>Inconsistent lighting directions</li>
                  <li>Disproportionate element sizing</li>
                  <li>Loss of original composition strengths</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold mb-3">Challenging Subject Matter</h3>
            <p className="text-muted-foreground mb-4">
              Techniques for handling subjects that are traditionally difficult for AI image editing tools.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Translucent Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Special considerations for glass, water, and other transparent or semi-transparent elements.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Complex Textures</h4>
                <p className="text-sm text-muted-foreground">
                  Maintaining intricate details in hair, fur, foliage, and fabric patterns.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Reflective Surfaces</h4>
                <p className="text-sm text-muted-foreground">
                  Preserving realistic reflections while making environmental changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Optimization Section */}
      <TutorialSection
        id="optimization"
        title="Performance Optimization"
        icon={Zap}
        iconBgColor="bg-cyan-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Maximize efficiency and quality by optimizing your editing process and resource utilization.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <BestPracticeCard
              number={1}
              title="Image Preparation"
              description="Optimize source images for better AI processing and faster results. Crop tightly, adjust exposure, and remove distractions before editing."
              color="blue"
            />

            <BestPracticeCard
              number={2}
              title="Prompt Efficiency"
              description="Craft concise, targeted prompts that achieve maximum results with minimal processing. Focus on essential changes, avoid redundant instructions."
              color="green"
            />

            <BestPracticeCard
              number={3}
              title="Batch Processing"
              description="Implement systematic approaches for handling multiple images efficiently. Use consistent templates, automate repetitive tasks."
              color="purple"
            />
          </div>

          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Quality vs. Speed Trade-offs"
              description="Balance processing time with output quality based on project requirements. Use lower resolution for previews, full resolution for final output."
              color="orange"
            />

            <BestPracticeCard
              number={5}
              title="Resource Management"
              description="Efficiently utilize computational resources and storage for large projects. Compress intermediate files, archive versions systematically."
              color="red"
            />

            <BestPracticeCard
              number={6}
              title="Error Recovery"
              description="Implement strategies for recovering from processing errors or unsatisfactory results. Maintain version history, use incremental saving."
              color="cyan"
            />
          </div>
        </div>
      </TutorialSection>

      {/* Integration Section */}
      <TutorialSection
        id="integration"
        title="System Integration Strategies"
        icon={Code}
        iconBgColor="bg-emerald-500"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Integrate Nano Banana into professional workflows and automated systems for maximum productivity.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <h3 className="text-xl font-semibold mb-3">API Integration</h3>
            <p className="text-muted-foreground mb-4">
              Leverage Nano Banana&apos;s API capabilities to automate complex editing tasks and integrate with existing systems.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Batch Processing Systems</h4>
                <p className="text-sm text-muted-foreground">
                  Automate large-scale editing projects with consistent parameters and quality control.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Custom Workflow Tools</h4>
                <p className="text-sm text-muted-foreground">
                  Build specialized applications that combine Nano Banana with other image processing tools.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold mb-3">Collaboration Workflows</h3>
            <p className="text-muted-foreground mb-4">
              Implement systems that enable multiple team members to work efficiently with Nano Banana.
            </p>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Components</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Version control for edited images and prompt histories</li>
                <li>Template libraries for consistent styling and approaches</li>
                <li>Review and approval systems for quality control</li>
                <li>Knowledge sharing platforms for technique documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Best Practices Section */}
      <TutorialSection
        id="best-practices"
        title="Expert Best Practices"
        icon={CheckCircle}
        iconBgColor="bg-amber-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <BestPracticeCard
              number={1}
              title="Maintain Version Control"
              description="Keep detailed records of edits, prompts, and intermediate results for complex projects."
              color="blue"
            />

            <BestPracticeCard
              number={2}
              title="Document Your Process"
              description="Create detailed documentation of successful techniques and approaches for future reference."
              color="green"
            />

            <BestPracticeCard
              number={3}
              title="Build Prompt Libraries"
              description="Develop collections of proven prompts organized by use case and subject matter."
              color="purple"
            />
          </div>

          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Test at Multiple Resolutions"
              description="Evaluate edits at different sizes to ensure quality across all intended display contexts."
              color="orange"
            />

            <BestPracticeCard
              number={5}
              title="Validate Results Critically"
              description="Always review outputs carefully for artifacts, inconsistencies, or unintended changes."
              color="red"
            />

            <BestPracticeCard
              number={6}
              title="Stay Updated with Features"
              description="Regularly explore new capabilities and improvements to leverage the latest advancements."
              color="cyan"
            />
          </div>
        </div>
      </TutorialSection>

      {/* Common Challenges Section */}
      <TutorialSection
        id="common-challenges"
        title="Overcoming Common Challenges"
        icon={AlertTriangle}
        iconBgColor="bg-red-500"
        gradient="red-pink"
      >
        <div className="space-y-6">
          <MistakeCard
            number={1}
            title="Maintaining Consistency Across Edits"
            description="Ensuring visual consistency when making multiple edits to the same image or across a series of related images."
            solution="Use reference images and establish consistent parameters for lighting, color grading, and stylistic elements. Save intermediate versions to maintain continuity."
          />

          <MistakeCard
            number={2}
            title="Handling Complex Compositions"
            description="Managing edits in images with intricate compositions, multiple subjects, or complex spatial relationships."
            solution="Break complex edits into focused steps, addressing one element or area at a time. Use precise masking or isolation techniques in your prompts."
          />

          <MistakeCard
            number={3}
            title="Balancing Creative Vision with Technical Limitations"
            description="Achieving ambitious creative goals while working within the constraints of current AI capabilities."
            solution="Develop a deep understanding of Nano Banana's strengths and limitations. Adapt creative approaches to leverage AI capabilities effectively while compensating for constraints through clever prompting and workflow design."
          />
        </div>
      </TutorialSection>

      {/* Next Steps Section */}
      <TutorialSection
        id="next-steps"
        title="Your Professional Journey Continues"
        icon={ArrowRight}
        iconBgColor="bg-violet-500"
        gradient="violet-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Congratulations! You&apos;ve mastered advanced techniques with Nano Banana AI. Here&apos;s your roadmap to becoming a true expert in AI image editing.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Building Cinematic Universes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn to create cohesive visual narratives by transforming single images into complete cinematic scenes and environments.
              </p>
              <Link href="/tutorials/building-cinematic-universes">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Create Worlds
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                <Layers className="h-5 w-5 text-green-600" />
              </div>
              <CardTitle className="text-lg">API Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Discover how to integrate Nano Banana into your applications and workflows through powerful API capabilities.
              </p>
              <Link href="/tutorials/api-integration">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Integrate Now
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                <Code className="h-5 w-5 text-purple-600" />
              </div>
              <CardTitle className="text-lg">System Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Master the technical aspects of building scalable systems that leverage Nano Banana&apos;s capabilities effectively.
              </p>
              <Link href="/tutorials/system-architecture">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Build Systems
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border">
          <h3 className="font-semibold mb-3">Mastery Challenge</h3>
          <p className="text-muted-foreground mb-4">
            Ready to demonstrate your expertise? Complete this comprehensive challenge:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>
              <strong>Project:</strong> Create a cohesive series of 5 images that tell a visual story
            </li>
            <li>
              <strong>Requirements:</strong> Use at least 3 different advanced techniques from this tutorial
            </li>
            <li>
              <strong>Documentation:</strong> Provide detailed explanations of your process, challenges faced, and solutions implemented
            </li>
          </ol>
        </div>
      </TutorialSection>
    </TutorialLayout>
  )
}
