import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* 背景装饰：径向渐隐网格 + 呼吸光晕 */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="tech-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_65%_100%_at_50%_0%,black_30%,transparent_75%)]" />
        <div className="hero-orb hero-orb-primary" />
        <div className="hero-orb hero-orb-secondary" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 pt-9 pb-0">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary">
            <Sparkles className="h-3 w-3" />
            Prompt Library
          </div>
          <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold leading-tight tracking-tight md:text-4xl">
            Unleash <span className="tech-text tech-shimmer">10x creativity</span>, turn ideas into images
          </h1>
        </div>
      </div>

      {/* 底部渐隐分割线 */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
    </section>
  );
};

export default Hero;
