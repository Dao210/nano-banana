import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Code, Palette, ShoppingCart, Camera, User, Zap } from 'lucide-react';

const Hero = () => {
  // 科技感SVG背景元素
  const TechBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* SVG网格背景 */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
          </pattern>
          <radialGradient id="radial-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="20%" cy="30%" r="120" fill="url(#radial-gradient)" />
        <circle cx="80%" cy="70%" r="100" fill="url(#radial-gradient)" />
        <circle cx="40%" cy="80%" r="80" fill="url(#radial-gradient)" />
      </svg>
      
      {/* 科技感光点 */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* 科技感线条 */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="30%" y2="10%" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="70%" y1="15%" x2="90%" y2="25%" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="20%" y1="80%" x2="40%" y2="90%" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );

  // 类别图标映射
  const categoryIcons = {
    creative: <Palette className="w-5 h-5" />,
    design: <Zap className="w-5 h-5" />,
    ecommerce: <ShoppingCart className="w-5 h-5" />,
    photography: <Camera className="w-5 h-5" />,
    character: <User className="w-5 h-5" />,
    all: <Code className="w-5 h-5" />
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 flex items-center">
      {/* 科技感背景 */}
      <TechBackground />
      
      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 tech-glow tech-gradient px-4 py-2 rounded-full text-sm font-medium text-white mb-6 tech-float">
            <Sparkles className="h-4 w-4" />
            Nano Banana AI Prompt Library
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            10x{' '}
            <span className="tech-text">
              creativity unleashed
            </span>{' '}
            ideas turned into real life 
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;