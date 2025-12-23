import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  BarChart3,
  Code,
  Terminal,
  Network,
  Lock,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { TutorialLayout, TutorialSection } from "@/components/tutorials"
import { apiIntegrationData } from "@/data/tutorials/api-integration"
import { generateTutorialMetadata } from "@/lib/tutorial-utils"

export const metadata = generateTutorialMetadata(apiIntegrationData)

export default function ApiIntegrationPage() {
  return (
    <TutorialLayout tutorial={apiIntegrationData}>
      {/* Overview */}
      <TutorialSection
        id="overview"
        title="Overview & When to Use"
        icon={Network}
        iconBgColor="bg-primary"
        gradient="blue-cyan"
      >
        <p className="text-lg text-muted-foreground mb-4">
          API integration unlocks automated, repeatable, and scalable Nano Banana workflows for web apps, creative tools,
          and production pipelines. Use it when you need consistent edits at scale, user-facing features, or server-side control.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Batch Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Automate thousands of edits for catalogs and archives.
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Creative Apps</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Embed Nano Banana into editors with user prompts.
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Consistency</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Enforce preservation rules and audit trails.
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Choose Path */}
      <TutorialSection
        id="choose-path"
        title="Choose Your Integration Path"
        icon={BarChart3}
        iconBgColor="bg-secondary"
        gradient="card"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="relative">
            <Badge className="absolute -top-2 left-4 bg-accent">Dev Friendly</Badge>
            <CardHeader className="pt-6">
              <CardTitle className="text-xl">Google AI Studio</CardTitle>
              <CardDescription>Best for prototyping, internal tools, and small-to-medium workloads</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Quick setup, UI playground, generous free tier</li>
                <li>• API keys via AI Studio; simple client SDKs</li>
                <li>• Ideal for prompt development and testing</li>
              </ul>
              <Button className="w-full mt-4">Open AI Studio</Button>
            </CardContent>
          </Card>
          <Card className="relative">
            <Badge className="absolute -top-2 left-4 bg-primary">Production Ready</Badge>
            <CardHeader className="pt-6">
              <CardTitle className="text-xl">Vertex AI</CardTitle>
              <CardDescription>Enterprise-grade platform with governance and scale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• IAM, VPC-SC, CMEK, audit logs</li>
                <li>• Quotas, monitoring, regional control</li>
                <li>• Suitable for regulated environments</li>
              </ul>
              <Button variant="outline" className="w-full mt-4 bg-transparent">Explore Vertex AI</Button>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Auth */}
      <TutorialSection
        id="auth"
        title="Authentication & Setup"
        icon={Lock}
        iconBgColor="bg-emerald-500"
        gradient="emerald-teal"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">AI Studio (API Key)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create an API key in AI Studio</li>
                <li>Store it in an environment variable (never commit keys)</li>
                <li>Use client SDKs to call Gemini Native Image</li>
              </ol>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Vertex AI (Service Account)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create a service account with minimal roles</li>
                <li>Authenticate via ADC or JSON key (server-side only)</li>
                <li>Call the Vertex AI Images API with regional endpoints</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <p className="text-sm font-medium text-primary mb-1">Security Tip</p>
          <p className="text-sm text-muted-foreground">Use per-environment keys, rotate regularly, and proxy calls from your server to avoid exposing credentials in the browser.</p>
        </div>
      </TutorialSection>

      {/* Requests */}
      <TutorialSection
        id="requests"
        title="Request Format & Media Inputs"
        icon={Terminal}
        iconBgColor="bg-cyan-500"
        gradient="card"
      >
        <p className="text-muted-foreground mb-4">Send your instruction and media. Keep prompts explicit about what to change and what to preserve.</p>
        <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre className="text-muted-foreground">{`{
  "model": "gemini-2.5-flash",
  "input": [
    "Change the background to a sunset beach while keeping the person identical",
    { "inlineData": { "data": "<base64 image>", "mimeType": "image/jpeg" } }
  ]
}`}</pre>
        </div>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Supported Inputs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              JPEG/PNG images; URLs or inline base64; multiple references allowed.
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Response</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Image bytes or URL depending on platform and SDK.
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Code */}
      <TutorialSection
        id="code"
        title="Quickstart Code (Node & Python)"
        icon={Code}
        iconBgColor="bg-amber-500"
        gradient="amber-orange"
      >
        <Card>
          <CardHeader>
            <CardTitle>Node.js (AI Studio SDK)</CardTitle>
            <CardDescription>Example calling Gemini 2.5 Flash with an image and instruction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-muted-foreground">{`import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!)
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

export async function editImage(imageBase64: string, prompt: string) {
  const result = await model.generateContent([
    prompt,
    { inlineData: { data: imageBase64, mimeType: 'image/jpeg' } },
  ])
  return result.response
}`}</pre>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Python (Vertex AI)</CardTitle>
              <CardDescription>Server-side example using service account auth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">{`from google.cloud import aiplatform
from vertexai.preview.vision_models import ImageGenerationModel

def edit_image(image_bytes: bytes, prompt: str):
    aiplatform.init(project='YOUR_PROJECT', location='us-central1')
    model = ImageGenerationModel.from_pretrained('imagegeneration@002')
    result = model.edit_image(
        prompt=prompt,
        image=image_bytes,
        mime_type='image/jpeg',
    )
    return result`}</pre>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>cURL (REST)</CardTitle>
              <CardDescription>Useful for smoke tests and automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">{`curl -X POST \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent \\
  -d '{
    "contents": [{
      "parts": [
        {"text": "Change background to a sunset beach; keep the person identical"},
        {"inline_data": {"mime_type": "image/jpeg", "data": "<base64>"}}
      ]
    }]
  }'`}</pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Errors */}
      <TutorialSection
        id="errors"
        title="Errors, Retries & Timeouts"
        icon={AlertTriangle}
        iconBgColor="bg-red-500"
        gradient="red-pink"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Common Errors</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>401 Unauthorized: invalid or missing credentials</p>
              <p>429 Too Many Requests: back off and retry with jitter</p>
              <p>413 Payload Too Large: compress or stream uploads</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Retry Strategy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Use exponential backoff (e.g., 200ms → 400ms → 800ms, cap 5 retries) and client-side timeouts (e.g., 30–60s) for long edits.
            </CardContent>
          </Card>
        </div>
      </TutorialSection>

      {/* Production */}
      <TutorialSection
        id="production"
        title="Security & Production Checklist"
        icon={Shield}
        iconBgColor="bg-violet-500"
        gradient="violet-purple"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Security</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Never expose API keys in the browser</li>
                <li>• Rotate credentials and scope least privilege</li>
                <li>• Validate file types and enforce size limits</li>
                <li>• Log request IDs, not raw media</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Operations</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                <li>• Use regional endpoints close to users</li>
                <li>• Cache non-personal results where allowed</li>
                <li>• Monitor quotas and error rates</li>
                <li>• Add fallbacks for partial outages</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-4 p-4 bg-white rounded-lg border">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Ready for Production
          </h3>
          <p className="text-sm text-muted-foreground">Confirm SLOs, alerts, and data handling policies before launch.</p>
        </div>
      </TutorialSection>
    </TutorialLayout>
  )
}
