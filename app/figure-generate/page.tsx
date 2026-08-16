
"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SchemaOrg } from "@/components/seo-schema";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const metadata = {
  title: "Figure Generator with Nano Banana AI | Nano Banana Tutorial Platform",
  description:
    "Generate stunning AI figures instantly using Nano Banana's advanced image generation API. Try the figure generator online and create unique visuals for your projects.",
  keywords: [
    "Nano Banana",
    "AI figure generator",
    "image generation",
    "AI art",
    "figure creation",
    "Nano Banana API",
    "AI image editing",
  ],
  url: "https://nano.theskills.ai/figure-generate",
  openGraph: {
    title: "Figure Generator with Nano Banana AI | Nano Banana Tutorial Platform",
    description:
      "Generate stunning AI figures instantly using Nano Banana's advanced image generation API. Try the figure generator online and create unique visuals for your projects.",
    images: [
      {
        url: "https://nano.theskills.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nano Banana AI Figure Generator",
      },
    ],
  },
};


export default function FigureGeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setImageUrl(null);
    try {
      // Replace with your actual Nano Banana API endpoint and key
      const response = await fetch("https://api.nano.theskills.ai/generate-figure", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Authorization': 'Bearer YOUR_API_KEY', // Uncomment if needed
        },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) throw new Error("Failed to generate image. Please try again.");
      const data = await response.json();
      setImageUrl(data.imageUrl);
    } catch (err: any) {
      setError(err.message || "Unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 py-12">
        <SchemaOrg type="article" data={metadata} />
        <h1 className="text-4xl font-bold mb-4 text-center">AI Figure Generator</h1>
        <Badge variant="outline" className="mb-6 mx-auto block">Powered by Nano Banana</Badge>
        <Card className="p-8 mb-8">
          <form onSubmit={handleGenerate} className="flex flex-col gap-4 items-center">
            <label htmlFor="prompt" className="font-medium text-lg text-center">
              Enter a description for your figure
            </label>
            <Input
              id="prompt"
              type="text"
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="e.g. A futuristic robot in a neon city"
              className="w-full max-w-md"
              required
              minLength={3}
            />
            <Button type="submit" size="lg" className="w-full max-w-md" disabled={loading}>
              {loading ? "Generating..." : "Generate Figure"}
            </Button>
          </form>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </Card>
        {imageUrl && (
          <Card className="p-6 flex flex-col items-center">
            <Image
              src={imageUrl}
              alt="Generated AI Figure"
              width={512}
              height={512}
              className="rounded-lg object-cover mb-4"
            />
            <Button asChild variant="outline" size="sm">
              <a href={imageUrl} download target="_blank" rel="noopener noreferrer">
                Download Image
              </a>
            </Button>
          </Card>
        )}
        <section className="prose prose-lg mx-auto mt-12">
          <h2>About the Figure Generator</h2>
          <p>
            Instantly create unique AI-generated figures for your creative projects, marketing, or inspiration. Powered by Nano Banana’s advanced image generation API, this tool lets you turn your ideas into stunning visuals with just a prompt.
          </p>
          <h2>How It Works</h2>
          <ol>
            <li>Describe the figure you want to generate in the input box above.</li>
            <li>Click <strong>Generate Figure</strong> and let Nano Banana’s AI do the magic.</li>
            <li>Download and use your new AI-generated image anywhere you like.</li>
          </ol>
          <h2>Why Use Nano Banana?</h2>
          <ul>
            <li>State-of-the-art AI image generation</li>
            <li>Fast, reliable, and easy to use</li>
            <li>Perfect for designers, marketers, and creators</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
