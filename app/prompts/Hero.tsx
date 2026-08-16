import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* 背景装饰：顶部径向光 + 渐隐网格 */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_90%_at_50%_-20%,rgba(59,130,246,0.14),transparent_70%)]" />
        <div className="tech-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_100%_at_50%_0%,black_20%,transparent_70%)]" />
        <div className="hero-orb hero-orb-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-8 pb-6 text-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary backdrop-blur-sm">
          <Sparkles className="h-3 w-3" />
          Prompt Library
        </div>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
          Unleash <span className="tech-text tech-shimmer">10x creativity</span>
          <span className="text-muted-foreground"> — turn ideas into images</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
