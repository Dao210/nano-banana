import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Film,
  Layers,
  ImageIcon,
  SunMedium,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

import { cinematicUniversesData } from "@/data/tutorials/building-cinematic-universes"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import {
  TutorialLayout,
  TutorialSection,
  TutorialNextSteps,
  PracticeChallenge,
  BestPracticeCard,
  ProInsight,
} from "@/components/tutorials"

export const metadata: Metadata = generateTutorialMetadata(cinematicUniversesData)

export default function BuildingCinematicUniversesPage() {
  return (
    <TutorialLayout tutorial={cinematicUniversesData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="The Art of Cinematic Storytelling"
        icon={Film}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Cinematic universes are more than just a collection of images—they are immersive worlds that tell a story. With Nano Banana AI, you can transform a single image into a complete scene, environment, or even an entire narrative sequence.
        </p>
        <ul className="list-disc pl-6 text-base mb-4">
          <li>Turn static images into dynamic, story-driven visuals</li>
          <li>Design environments that evoke emotion and context</li>
          <li>Connect scenes for seamless visual storytelling</li>
        </ul>
        <Image
          src="/tutorials/nano-banana-before-after-1.png"
          alt="Cinematic scene transformation with Nano Banana AI"
          width={800}
          height={400}
          className="rounded-lg border shadow-md mx-auto"
        />
      </TutorialSection>

      {/* Scene Composition Section */}
      <TutorialSection
        id="scene-composition"
        title="Scene Composition Fundamentals"
        icon={Layers}
        iconBgColor="bg-indigo-500"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Great cinematic scenes begin with thoughtful composition. Understanding how to arrange elements within your frame creates visual hierarchy and guides the viewer's eye through your narrative.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Rule of Thirds</h3>
            <p className="text-sm text-muted-foreground">
              Position key elements along the intersections of a 3x3 grid for natural, balanced compositions that draw attention to your subject.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Leading Lines</h3>
            <p className="text-sm text-muted-foreground">
              Use natural or architectural lines to guide viewers through the scene, creating depth and directing focus to important elements.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Foreground Interest</h3>
            <p className="text-sm text-muted-foreground">
              Add elements in the foreground to create layers of depth and immerse viewers in your cinematic world.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Negative Space</h3>
            <p className="text-sm text-muted-foreground">
              Strategic use of empty space can emphasize your subject and create a sense of scale or isolation.
            </p>
          </div>
        </div>
        <ProInsight>
          When expanding scenes with Nano Banana AI, describe the compositional elements you want in your prompt. For example: "Add a winding path leading toward a distant castle, with wildflowers in the foreground."
        </ProInsight>
      </TutorialSection>

      {/* Environment Design Section */}
      <TutorialSection
        id="environment-design"
        title="Environment Design Techniques"
        icon={ImageIcon}
        iconBgColor="bg-purple-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Environments set the stage for your cinematic universe. Learn how to use Nano Banana AI to create cohesive, immersive worlds that support your narrative vision.
        </p>
        <ol className="list-decimal pl-6 text-base space-y-3 mb-6">
          <li>
            <strong>Start with a Strong Visual Concept:</strong> Choose an image that inspires a story or mood. Think about the environment, characters, and atmosphere you want to convey.
          </li>
          <li>
            <strong>Expand the Scene:</strong> Use Nano Banana AI to add background elements, lighting effects, and environmental details that support your narrative.
          </li>
          <li>
            <strong>Connect Multiple Scenes:</strong> Create a sequence by editing several images with consistent style, color grading, and thematic elements.
          </li>
          <li>
            <strong>Refine for Consistency:</strong> Ensure that each scene feels part of a larger universe by maintaining visual motifs and storytelling cues.
          </li>
        </ol>
        <Image
          src="/tutorials/nano-banana-multi-turn-example.png"
          alt="Multi-scene cinematic editing with Nano Banana AI"
          width={800}
          height={400}
          className="rounded-lg border shadow-md mx-auto"
        />
      </TutorialSection>

      {/* Lighting & Mood Section */}
      <TutorialSection
        id="lighting-mood"
        title="Lighting & Mood Creation"
        icon={SunMedium}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Lighting is the soul of cinematic imagery. The right lighting can transform an ordinary scene into an emotionally resonant moment.
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Golden Hour Magic</h3>
            <p className="text-sm text-muted-foreground">
              Warm, diffused light creates romantic, nostalgic atmospheres. Perfect for scenes conveying hope, warmth, or peaceful moments.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Dramatic Shadows</h3>
            <p className="text-sm text-muted-foreground">
              High contrast lighting with deep shadows adds mystery and tension. Ideal for noir-style scenes or moments of conflict.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Soft Ambient Light</h3>
            <p className="text-sm text-muted-foreground">
              Even, gentle illumination creates calm, introspective moods. Great for intimate scenes or quiet character moments.
            </p>
          </div>
        </div>
        <ProInsight>
          Be specific about lighting in your prompts: "Add dramatic rim lighting from the left" or "Create a golden hour glow with long shadows stretching across the scene."
        </ProInsight>
      </TutorialSection>

      {/* Character Integration Section */}
      <TutorialSection
        id="character-integration"
        title="Character Integration"
        icon={Users}
        iconBgColor="bg-pink-500"
        gradient="pink-rose"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Characters bring life to your cinematic universe. Learn how to seamlessly integrate characters into your scenes while maintaining visual coherence.
        </p>
        <ul className="list-disc pl-6 text-base space-y-2 mb-6">
          <li>
            <strong>Scale and Perspective:</strong> Ensure characters are proportionally correct relative to the environment. Consider sight lines and horizon placement.
          </li>
          <li>
            <strong>Lighting Consistency:</strong> Characters should be lit from the same direction and with the same quality as the environment.
          </li>
          <li>
            <strong>Color Harmony:</strong> Adjust character color tones to match the overall color grading of your scene.
          </li>
          <li>
            <strong>Shadow Integration:</strong> Add appropriate shadows beneath and around characters to ground them in the scene.
          </li>
        </ul>
        <ProInsight>
          Use multi-turn editing with Nano Banana AI to first establish your environment, then add characters in subsequent edits. This allows for better control over placement and integration.
        </ProInsight>
      </TutorialSection>

      {/* Narrative Flow Section */}
      <TutorialSection
        id="narrative-flow"
        title="Building Narrative Flow"
        icon={Sparkles}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-4">
          A cinematic universe tells a story across multiple scenes. Learn how to create visual continuity and narrative progression.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Visual Motifs</h3>
            <p className="text-sm text-muted-foreground">
              Repeat key visual elements across scenes—colors, shapes, or symbols—to create thematic connections.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Consistent Style</h3>
            <p className="text-sm text-muted-foreground">
              Maintain the same artistic style, color grading, and level of detail throughout your universe.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Progression Cues</h3>
            <p className="text-sm text-muted-foreground">
              Use environmental changes—time of day, weather, seasons—to indicate narrative progression.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold mb-2">Emotional Arc</h3>
            <p className="text-sm text-muted-foreground">
              Plan lighting and mood shifts that mirror your story's emotional journey from beginning to end.
            </p>
          </div>
        </div>
      </TutorialSection>

      {/* Best Practices Section */}
      <TutorialSection
        id="best-practices"
        title="Best Practices & Tips"
        icon={CheckCircle}
        iconBgColor="bg-teal-500"
        gradient="emerald-teal"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Follow these SEO-optimized tips and best practices for creating stunning cinematic images with Nano Banana AI.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <BestPracticeCard
            number={1}
            title="Descriptive Alt Text"
            description="Use descriptive alt text for all images (e.g., 'Cinematic scene transformation with Nano Banana AI') to improve accessibility and SEO."
            color="blue"
          />
          <BestPracticeCard
            number={2}
            title="Keyword Integration"
            description="Include relevant keywords in headings and throughout your content naturally to improve discoverability."
            color="green"
          />
          <BestPracticeCard
            number={3}
            title="Structured Content"
            description="Structure your article with clear sections and subheadings to improve readability and search engine understanding."
            color="purple"
          />
          <BestPracticeCard
            number={4}
            title="Internal Linking"
            description="Link to related tutorials and resources for deeper learning and improved site navigation."
            color="orange"
          />
        </div>
        <ProInsight>
          Document your creative process! Screenshot your prompts and intermediate results. This helps you understand what works and creates valuable content for sharing with other creators.
        </ProInsight>
      </TutorialSection>

      {/* Next Steps Section */}
      <TutorialSection
        id="next-steps"
        title="Your Cinematic Journey Continues"
        icon={ArrowRight}
        iconBgColor="bg-violet-500"
        gradient="violet-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Ready to build your own cinematic universe? Start transforming your images into cinematic masterpieces with Nano Banana AI. Explore more tutorials and join our creative community!
        </p>

        <TutorialNextSteps
          items={[
            {
              title: "Character Consistency",
              description: "Learn how to maintain character appearance across multiple scenes and images.",
              href: "/tutorials/character-consistency",
              icon: Users,
              iconBgColor: "bg-pink-100",
              iconColor: "text-pink-600",
              buttonText: "Master Characters",
            },
            {
              title: "Multi-Turn Editing",
              description: "Discover advanced techniques for iterative image editing and refinement.",
              href: "/tutorials/multi-turn-editing",
              icon: Layers,
              iconBgColor: "bg-blue-100",
              iconColor: "text-blue-600",
              buttonText: "Learn Techniques",
            },
            {
              title: "Advanced Techniques",
              description: "Take your skills to the next level with advanced AI editing methods.",
              href: "/tutorials/advanced-techniques",
              icon: Sparkles,
              iconBgColor: "bg-purple-100",
              iconColor: "text-purple-600",
              buttonText: "Go Advanced",
            },
          ]}
        />

        <PracticeChallenge
          challenges={[
            { level: "Basic", description: "Transform a single portrait into a scene with an environmental background." },
            { level: "Intermediate", description: "Create a three-image sequence telling a simple story with consistent lighting." },
            { level: "Advanced", description: "Build a complete cinematic universe with multiple locations, characters, and a narrative arc." },
          ]}
        />

        <div className="mt-8 text-center">
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/tutorials" title="Start learning cinematic image editing with Nano Banana AI">
              Explore More Tutorials
            </Link>
          </Button>
        </div>
      </TutorialSection>
    </TutorialLayout>
  )
}
