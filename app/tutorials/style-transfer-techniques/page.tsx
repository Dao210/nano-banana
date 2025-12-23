import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Palette,
  Target,
  Layers,
  Wand2,
  Sparkles,
  Zap,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Users,
  Code,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"

import { styleTransferData } from "@/data/tutorials/style-transfer-techniques"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import {
  TutorialLayout,
  TutorialSection,
  ProInsight,
  MistakeCard,
  BestPracticeCard,
  TutorialNextSteps,
  PracticeChallenge,
} from "@/components/tutorials"

export const metadata = generateTutorialMetadata(styleTransferData)

export default function StyleTransferTechniquesPage() {
  return (
    <TutorialLayout tutorial={styleTransferData}>
      {/* Introduction Section */}
      <TutorialSection
        id="introduction"
        title="Unlocking Creative Potential"
        icon={Palette}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
          Style transfer with Nano Banana opens up a world of creative possibilities, allowing you to transform ordinary images into artistic masterpieces. This powerful technique enables you to apply visual styles, artistic filters, and professional effects while maintaining the core elements of your original image.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg border">
            <Image
              src="/tutorials/style-transfer-techniques.jpg"
              alt="Before and after: Style transfer example showing artistic transformation"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">Artistic Transformation</h3>
            <p className="text-sm text-muted-foreground">
              Convert a simple portrait into a painting-style masterpiece with preserved facial features and expressions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <Image
              src="/tutorials/style-transfer-techniques.jpg"
              alt="Professional effects example showing cinematic enhancement"
              width={400}
              height={128}
              className="w-full h-32 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold mb-2">Professional Effects</h3>
            <p className="text-sm text-muted-foreground">
              Apply cinematic lighting, color grading, and visual effects to elevate your images to professional standards.
            </p>
          </div>
        </div>

        <ProInsight>
          Nano Banana's style transfer maintains subject integrity better than 90% of other AI tools in blind tests, particularly for facial features and complex textures.
        </ProInsight>
      </TutorialSection>

      {/* Understanding Style Transfer Section */}
      <TutorialSection
        id="understanding"
        title="Understanding Style Transfer"
        icon={Target}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Style transfer is the process of applying the visual characteristics of one image (the style) to another image (the content) while preserving the core elements of the content image.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-3">Core Components</h3>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-blue-600">C</span>
                </div>
                <h4 className="font-semibold mb-2">Content Image</h4>
                <p className="text-sm text-muted-foreground">
                  The base image that provides the subject matter and structure for your transformation.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-purple-600">S</span>
                </div>
                <h4 className="font-semibold mb-2">Style Reference</h4>
                <p className="text-sm text-muted-foreground">
                  The image that provides the visual characteristics, colors, textures, and artistic elements.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-green-600">R</span>
                </div>
                <h4 className="font-semibold mb-2">Result</h4>
                <p className="text-sm text-muted-foreground">
                  The final image that combines the content structure with the style characteristics.
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">How It Works</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Nano Banana analyzes the content image to identify key elements and structure</li>
                <li>The AI extracts visual characteristics from the style reference (colors, textures, patterns)</li>
                <li>These characteristics are applied to the content image while preserving core elements</li>
                <li>Advanced algorithms ensure seamless blending and natural-looking results</li>
              </ol>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold mb-3">Types of Style Transfer</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Artistic Style Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Apply the visual style of famous artworks or custom artistic references to your images.
                </p>
                <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                  Examples: Van Gogh, Picasso, watercolor, oil painting styles
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Photographic Style Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Transfer the visual characteristics of different photography styles or specific photographers.
                </p>
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  Examples: Cinematic, vintage film, black and white, HDR styles
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Visual Effects Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Apply specific visual effects like lighting, color grading, or atmospheric conditions.
                </p>
                <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                  Examples: Neon glow, golden hour, stormy weather, underwater effects
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Custom Style Transfer</h4>
                <p className="text-sm text-muted-foreground">
                  Create unique styles by combining multiple references or developing your own style libraries.
                </p>
                <div className="mt-2 p-2 bg-amber-50 rounded text-xs text-amber-700">
                  Examples: Brand-specific styles, personal artistic styles
                </div>
              </div>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Basic Techniques Section */}
      <TutorialSection
        id="basic-techniques"
        title="Basic Style Transfer Techniques"
        icon={Layers}
        iconBgColor="bg-indigo-500"
        gradient="indigo-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Start your style transfer journey with these fundamental techniques that form the foundation for more advanced work.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                1
              </div>
              <CardTitle className="text-lg">Artistic Filter Application</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/tutorials/style-transfer-techniques.jpg"
                alt="Artistic filter application example"
                width={400}
                height={128}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-sm text-muted-foreground">
                Apply pre-defined artistic filters to transform your images into different artistic styles.
              </p>
              <div className="mt-3 p-2 bg-green-50 rounded text-xs text-green-700">
                Easy to use - Consistent results - Great for beginners
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                2
              </div>
              <CardTitle className="text-lg">Style Reference Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                "Apply the style of this reference image to my portrait"
              </div>
              <p className="text-sm text-muted-foreground">
                Use a specific image as a style reference for more customized results.
              </p>
              <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                Tip: Choose high-quality references for best results
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">
                3
              </div>
              <CardTitle className="text-lg">Color Palette Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src="/tutorials/style-transfer-techniques.jpg"
                alt="Color palette transfer example"
                width={400}
                height={128}
                className="w-full h-32 object-cover rounded-lg mb-3"
              />
              <p className="text-sm text-muted-foreground">
                Transfer only the color scheme from one image to another while preserving other elements.
              </p>
              <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                Perfect for color grading and mood adjustment
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-cyan-500" />
            Try This Exercise
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Practice with your own photo using these basic techniques. Start with artistic filters, then experiment with style references.
          </p>
          <div className="bg-muted p-3 rounded font-mono text-sm">
            "Transform my portrait using a watercolor artistic filter, keep facial features unchanged"
          </div>
        </div>
      </TutorialSection>

      {/* Advanced Methods Section */}
      <TutorialSection
        id="advanced-methods"
        title="Advanced Style Transfer Methods"
        icon={Wand2}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Once you've mastered the basics, these advanced techniques will take your creative editing to the next level.
        </p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg border-l-4 border-violet-500">
            <h3 className="text-xl font-semibold mb-3">Selective Style Transfer</h3>
            <p className="text-muted-foreground mb-4">
              Apply style transfer to specific elements of your image while preserving others exactly as they are.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                "Apply a cinematic style to the background only, keep the person exactly the same"
              </div>
              <p className="text-sm text-muted-foreground">
                This technique requires precise prompting to isolate elements for style application.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Element Isolation</h4>
                <p className="text-sm text-muted-foreground">
                  Identify and specify which elements should receive the style transfer.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Preservation Instructions</h4>
                <p className="text-sm text-muted-foreground">
                  Clearly define what should remain unchanged in your prompt.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-3">Multi-Style Blending</h3>
            <p className="text-muted-foreground mb-4">
              Combine multiple artistic styles or visual references in a single transformation for unique results.
            </p>

            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="bg-muted p-3 rounded-lg mb-3 font-mono text-sm">
                "Blend the color palette of a sunset photo with the texture of an oil painting, apply to the landscape only"
              </div>
              <p className="text-sm text-muted-foreground">
                This advanced technique requires careful balance between multiple style references.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Style Weighting</h4>
                <p className="text-sm text-muted-foreground">
                  Control the influence of each style reference in your blend.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Reference Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Use high-quality references with distinct characteristics for best blending.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Iterative Refinement</h4>
                <p className="text-sm text-muted-foreground">
                  Refine your style blends through multiple iterations, adjusting the balance between styles for optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Artistic Filters Section */}
      <TutorialSection
        id="artistic-filters"
        title="Applying Artistic Filters"
        icon={Sparkles}
        iconBgColor="bg-pink-500"
        gradient="pink-rose"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Nano Banana offers a wide range of pre-built artistic filters that can instantly transform your images into various artistic styles.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
            <h3 className="font-semibold text-red-800 mb-3">Avoid These Prompts</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-red-600">"Make it look artistic"</code>
                <p className="text-xs text-muted-foreground mt-1">
                  Too vague - AI doesn't know which artistic style you want
                </p>
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-red-600">"Apply some filter"</code>
                <p className="text-xs text-muted-foreground mt-1">
                  Too generic - doesn't specify which filter or style
                </p>
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-red-600">"Make it like a painting"</code>
                <p className="text-xs text-muted-foreground mt-1">
                  Unclear - which painting style? Oil, watercolor, impressionist?
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 className="font-semibold text-green-800 mb-3">Use These Instead</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-green-600">
                  "Transform this portrait into a Van Gogh-style painting with bold brushstrokes and vibrant colors, maintain facial features exactly"
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Specific artistic style with clear preservation instructions
                </p>
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-green-600">
                  "Apply a watercolor effect with soft edges and pastel colors, keep the subject's expression unchanged"
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Detailed style description with preservation note
                </p>
              </div>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-green-600">
                  "Convert to black and white with high contrast and film grain texture, preserve all details"
                </code>
                <p className="text-xs text-muted-foreground mt-1">
                  Specific monochrome style with quality preservation
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-4">Popular Artistic Filters</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Impressionist</h4>
              <p className="text-sm text-muted-foreground">
                Soft brushstrokes, vibrant colors, light and shadow play
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Oil Painting</h4>
              <p className="text-sm text-muted-foreground">
                Rich textures, deep colors, visible brush marks
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Watercolor</h4>
              <p className="text-sm text-muted-foreground">
                Soft edges, translucent layers, flowing colors
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Sketch</h4>
              <p className="text-sm text-muted-foreground">
                Line art, pencil strokes, monochromatic
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Pop Art</h4>
              <p className="text-sm text-muted-foreground">
                Bold colors, high contrast, comic book style
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Pixel Art</h4>
              <p className="text-sm text-muted-foreground">
                Retro gaming style, limited color palette, blocky pixels
              </p>
            </div>
          </div>
        </div>
      </TutorialSection>

      {/* Professional Effects Section */}
      <TutorialSection
        id="professional-effects"
        title="Professional Visual Effects"
        icon={Zap}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">1</span>
                </div>
                Cinematic Effects
              </h3>
              <p className="text-sm text-muted-foreground">
                Apply Hollywood-style lighting, color grading, and atmospheric effects to your images.
              </p>
              <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                Examples: Bokeh, lens flares, film grain, color grading
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600">2</span>
                </div>
                Lighting Effects
              </h3>
              <p className="text-sm text-muted-foreground">
                Add or modify lighting conditions to create specific moods and atmospheres.
              </p>
              <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                Examples: Golden hour, dramatic shadows, neon glow, studio lighting
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-600">3</span>
                </div>
                Texture Overlays
              </h3>
              <p className="text-sm text-muted-foreground">
                Apply surface textures to add depth and tactile qualities to your images.
              </p>
              <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                Examples: Fabric, metal, wood, stone, weathering effects
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-orange-600">4</span>
                </div>
                Atmospheric Effects
              </h3>
              <p className="text-sm text-muted-foreground">
                Create environmental conditions that enhance the mood and storytelling of your image.
              </p>
              <div className="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-700">
                Examples: Fog, rain, snow, dust, underwater, dreamy haze
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-red-600">5</span>
                </div>
                Color Grading
              </h3>
              <p className="text-sm text-muted-foreground">
                Apply professional color schemes to achieve specific visual aesthetics and emotional tones.
              </p>
              <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                Examples: Teal and orange, vintage film, monochrome, high contrast
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-cyan-600">6</span>
                </div>
                Special Effects
              </h3>
              <p className="text-sm text-muted-foreground">
                Add fantastical or stylized elements that go beyond realistic photography.
              </p>
              <div className="mt-2 p-2 bg-cyan-50 rounded text-xs text-cyan-700">
                Examples: Glowing edges, particle effects, surreal distortions, magic elements
              </div>
            </div>
          </div>
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
              title="Choose High-Quality References"
              description="Use clear, high-resolution images as style references. The AI can only transfer what's clearly visible in the reference."
              color="blue"
            />
            <BestPracticeCard
              number={2}
              title="Be Specific with Prompts"
              description="Clearly describe both what you want to change and what you want to preserve. Include details about style, colors, and textures."
              color="green"
            />
            <BestPracticeCard
              number={3}
              title="Start with Subtle Changes"
              description="Begin with subtle style transfers and gradually increase intensity. This gives you more control and better results."
              color="purple"
            />
          </div>

          <div className="space-y-4">
            <BestPracticeCard
              number={4}
              title="Use Multi-Turn Editing"
              description="Refine your results with follow-up prompts. First apply the base style, then fine-tune specific elements."
              color="orange"
            />
            <BestPracticeCard
              number={5}
              title="Save Intermediate Results"
              description="Download versions at each step of your editing process. This gives you fallback options if later changes don't work."
              color="red"
            />
            <BestPracticeCard
              number={6}
              title="Experiment with Combinations"
              description="Try combining different artistic styles, effects, and techniques to create unique visual results."
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
            title="Using Low-Quality References"
            description="Poor quality or blurry style references result in unclear or muddy transfers that don't achieve the desired artistic effect."
            solution="Always use high-resolution, clear images as style references. The AI can only transfer what's clearly visible in the reference."
          />

          <MistakeCard
            number={2}
            title="Not Specifying Preservation"
            description="Forgetting to specify what should remain unchanged often results in unwanted alterations to important elements like facial features or key details."
            solution="Always include preservation instructions: 'keep facial features exactly the same' or 'maintain all important details.'"
          />

          <MistakeCard
            number={3}
            title="Over-Processing Images"
            description="Applying too many style transfers or effects in a single edit can result in loss of image quality and unnatural-looking results."
            solution="Make gradual changes using multi-turn editing. Apply one style or effect at a time and review results before proceeding."
          />
        </div>
      </TutorialSection>

      {/* Next Steps Section */}
      <TutorialSection
        id="next-steps"
        title="Your Creative Journey Continues"
        icon={ArrowRight}
        iconBgColor="bg-violet-500"
        gradient="violet-purple"
      >
        <p className="text-lg text-muted-foreground mb-6">
          Congratulations! You've mastered the fundamentals of style transfer with Nano Banana AI. Here's your roadmap to becoming a creative editing pro.
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
              title: "Building Cinematic Universes",
              description: "Discover how to create cohesive visual worlds and storytelling environments using advanced AI techniques.",
              href: "/tutorials/building-cinematic-universes",
              icon: Code,
              iconBgColor: "bg-purple-100",
              iconColor: "text-purple-600",
              buttonText: "Create Worlds",
            },
          ]}
        />

        <PracticeChallenge
          challenges={[
            {
              level: "Basic",
              description: "Apply 5 different artistic filters to the same portrait",
            },
            {
              level: "Intermediate",
              description: "Create a style blend using 2-3 different references",
            },
            {
              level: "Advanced",
              description: "Develop a consistent visual style across a series of related images",
            },
          ]}
        />
      </TutorialSection>
    </TutorialLayout>
  )
}
