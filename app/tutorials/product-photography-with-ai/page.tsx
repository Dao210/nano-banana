import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Camera,
  Target,
  SunMedium,
  Layers,
  Palette,
  Download,
  Code,
  AlertTriangle,
} from "lucide-react"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"
import { productPhotographyData } from "@/data/tutorials/product-photography-with-ai"
import {
  TutorialLayout,
  TutorialSection,
  ProInsight,
  SectionCard,
} from "@/components/tutorials"

// Generate metadata using the utility function
export const metadata = generateTutorialMetadata(productPhotographyData)

export default function ProductPhotographyAIPage() {
  return (
    <TutorialLayout tutorial={productPhotographyData}>
      {/* Introduction */}
      <TutorialSection
        id="introduction"
        title="Why AI Product Photography?"
        icon={Camera}
        iconBgColor="bg-cyan-500"
        gradient="cyan-blue"
      >
        <p className="text-lg text-muted-foreground mb-6">
          AI lets you produce consistent, on-brand product images at scale—without a full studio. With Nano Banana, you can replace backgrounds, match lighting, add realistic shadows, and export in marketplace-ready formats in minutes.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Perfect for E-commerce">
            <p className="text-sm text-muted-foreground">Generate clean, white or lifestyle backgrounds that meet Amazon, Shopify, or marketplace guidelines.</p>
          </SectionCard>
          <SectionCard title="Brand-Ready Output">
            <p className="text-sm text-muted-foreground">Keep your palette, contrast, and mood consistent across SKUs and campaigns.</p>
          </SectionCard>
        </div>
        <div className="mt-6">
          <ProInsight>
            Small, deliberate changes beat one-shot drastic edits. Iterate using follow-ups like "Keep product identical, only adjust background shadows."
          </ProInsight>
        </div>
      </TutorialSection>

      {/* Workflow */}
      <TutorialSection
        id="workflow"
        title="Recommended Workflow (Overview)"
        icon={Target}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">1</div>
              <CardTitle className="text-lg">Source Image</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Shoot or select a clear, sharp product image with neutral lighting and minimal clutter.</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">2</div>
              <CardTitle className="text-lg">Background & Light</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Replace background, set directionality of light, and align color temperature to your brand.</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mb-2">3</div>
              <CardTitle className="text-lg">Shadows & Export</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Add realistic ground shadows/reflections, then export to exact pixel specs.</p>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Lighting & Backgrounds */}
      <TutorialSection
        id="lighting-backgrounds"
        title="Lighting & Backgrounds"
        icon={SunMedium}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <p className="text-muted-foreground mb-6">Guide the model with specific lighting and background instructions.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Prompt Template">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Replace background with clean white (RGB 255,255,255). Left-side softbox lighting, gentle falloff. Keep product edges crisp and geometry identical."</div>
          </SectionCard>
          <SectionCard title="Lifestyle Variant">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Place product on light concrete tabletop, daylight from right, subtle shadow under object. Maintain original product proportions exactly."</div>
          </SectionCard>
        </div>
      </TutorialSection>

      {/* Shadows & Reflections */}
      <TutorialSection
        id="shadows-reflections"
        title="Realistic Shadows & Reflections"
        icon={Layers}
        iconBgColor="bg-indigo-500"
        gradient="indigo-purple"
      >
        <p className="text-muted-foreground mb-6">Ground the product with contact shadows or soft reflections for realism.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Natural Shadow">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Add soft ground shadow directly beneath the product, blur radius 8-12px look, opacity ~25%. Match light direction from left. Keep product unchanged."</div>
          </SectionCard>
          <SectionCard title="Subtle Reflection">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Create faint tabletop reflection (10-15% opacity), 1-2cm below product base, gradually fading. Preserve product geometry exactly."</div>
          </SectionCard>
        </div>
      </TutorialSection>

      {/* Color & Brand */}
      <TutorialSection
        id="color-brand"
        title="Color Consistency & Brand Matching"
        icon={Palette}
        iconBgColor="bg-pink-500"
        gradient="pink-rose"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <SectionCard title="Brand Palette">
            <p className="text-sm text-muted-foreground">Reference hex or Pantone values in prompts to match brand colors and mood.</p>
            <div className="mt-3 bg-muted p-3 rounded font-mono text-sm">"Match background to #F8FAFC, increase contrast slightly, keep product colorimetry unchanged (no hue shift)."</div>
          </SectionCard>
          <SectionCard title="Batch Consistency">
            <p className="text-sm text-muted-foreground">Reuse the same prompt blocks across SKUs and lock lighting direction to keep sets uniform.</p>
          </SectionCard>
        </div>
      </TutorialSection>

      {/* Export */}
      <TutorialSection
        id="export"
        title="Export for Marketplaces & Web"
        icon={Download}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Amazon-Friendly</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>2000px on longest side</li>
                <li>Pure white background</li>
                <li>Centered, fill ~85% frame</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Shopify/Web</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Square 2048x2048 PNG or WebP</li>
                <li>Lossless for detail shots</li>
                <li>Consistent margins</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Social/Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>1080x1350 (IG portrait)</li>
                <li>Warm lighting variants</li>
                <li>Readable negative space</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Prompt Recipes */}
      <TutorialSection
        id="prompt-recipes"
        title="Prompt Recipes (Copy & Paste)"
        icon={Code}
        iconBgColor="bg-cyan-600"
        gradient="card"
      >
        <div className="space-y-4">
          <SectionCard title="Clean White Packshot">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Place the product on pure white background (#FFFFFF). Soft, even lighting from front-left, minimal contrast. Keep product geometry, color, and texture identical. Add soft ground shadow only."</div>
          </SectionCard>
          <SectionCard title="Lifestyle Scene">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Set the product on a wooden kitchen countertop with morning daylight from right. Warm tone, shallow depth of field. Keep product unchanged, add subtle table reflection."</div>
          </SectionCard>
          <SectionCard title="Shadow-Rich Editorial">
            <div className="bg-muted p-3 rounded font-mono text-sm">"Create dramatic, directional shadows from top-left, gradient charcoal background. Maintain product color accuracy; emphasize texture with gentle contrast curve, no warping."</div>
          </SectionCard>
        </div>
      </TutorialSection>

      {/* Pitfalls */}
      <TutorialSection
        id="pitfalls"
        title="Common Pitfalls (and Fixes)"
        icon={AlertTriangle}
        iconBgColor="bg-red-500"
        gradient="red-pink"
      >
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-red-700 mb-2">Warped Logos or Labels</h3>
            <p className="text-sm text-muted-foreground mb-2">If labels warp after heavy edits:</p>
            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add: "Keep all typography, logos, and label geometry exactly the same—no distortion or smearing." Make smaller, iterative background changes.</div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-red-700 mb-2">Incorrect Color Cast</h3>
            <p className="text-sm text-muted-foreground mb-2">Lighting edits can shift product hue:</p>
            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add: "Preserve product colorimetry exactly; do not change hue or saturation. Adjust background/lighting only."</div>
          </div>
          <div className="bg-white p-4 rounded-lg border">
            <h3 className="font-semibold text-red-700 mb-2">Floating Look</h3>
            <p className="text-sm text-muted-foreground mb-2">Missing contact shadows leads to unrealistic results:</p>
            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 text-sm">Add explicit shadow/reflection instructions and match the light direction and softness to the scene.</div>
          </div>
        </div>
      </TutorialSection>
    </TutorialLayout>
  )
}
