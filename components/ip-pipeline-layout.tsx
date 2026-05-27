'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export type PipelineStage = {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string;
  visualizer: () => React.ReactNode;
};

export function IPPipelineLayout({
  mainClassName = 'min-h-screen pt-32 pb-20 relative overflow-hidden',
  background,
  heroTitle,
  heroDescription,
  heroImage,
  stages,
  ctaTitle,
  ctaDescription,
  ctaButtonText = 'Download IP Blueprint',
  ctaButtonHoverShadowVariant = 'electric-cyan',
  visualizerGlowVariant = 'electric-cyan',
}: {
  mainClassName?: string;
  background?: React.ReactNode;
  heroTitle: React.ReactNode;
  heroDescription: React.ReactNode;
  heroImage?: React.ReactNode;
  stages: PipelineStage[];
  ctaTitle: React.ReactNode;
  ctaDescription: React.ReactNode;
  ctaButtonText?: React.ReactNode;
  ctaButtonHoverShadowVariant?: 'electric-cyan' | 'hyper-violet';
  visualizerGlowVariant?: 'electric-cyan' | 'hyper-violet';
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const ctaButtonHoverShadowClassMap: Record<
    'electric-cyan' | 'hyper-violet',
    string
  > = {
    'electric-cyan': 'hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]',
    'hyper-violet': 'hover:shadow-[0_0_30px_rgba(157,0,255,0.5)]',
  };

  const visualizerGlowClassMap: Record<'electric-cyan' | 'hyper-violet', string> =
    {
      'electric-cyan':
        "bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)]",
      'hyper-violet':
        "bg-[radial-gradient(circle_at_center,rgba(157,0,255,0.1)_0%,transparent_70%)]",
    };

  return (
    <main className={mainClassName}>
      {background}

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={
            heroImage
              ? 'grid items-center gap-10 lg:grid-cols-[1fr_0.82fr]'
              : 'max-w-4xl mx-auto text-center'
          }
        >
          <div className={heroImage ? 'text-center lg:text-left' : undefined}>
            {heroTitle}
            {heroDescription}
          </div>
          {heroImage}
        </motion.div>
      </section>

      {/* Sticky Scroll Tracking Pipeline */}
      <section ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 relative">
          {/* Left Side: Sticky Process Names */}
          <div className="md:w-1/3 relative">
            <div className="sticky top-32 space-y-8">
              <h2 className="text-3xl font-bold text-white mb-12 border-b border-white/10 pb-4">
                The <span className="text-electric-cyan">IP-Pipeline</span>
              </h2>

              {stages.map((stage) => (
                <div key={stage.id} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:border-electric-cyan transition-colors relative z-10 bg-deep-space">
                    <stage.icon className="w-6 h-6 text-electric-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-400 group-hover:text-white transition-colors">
                    {stage.title}
                  </h3>
                </div>
              ))}

              {/* Vertical Progress Line */}
              <div className="absolute left-6 top-[100px] bottom-0 w-0.5 bg-white/10 z-0">
                <motion.div
                  className="w-full bg-gradient-to-b from-electric-cyan to-hyper-violet origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Deep Dives & Visualizers */}
          <div className="md:w-2/3 space-y-32">
            {stages.map((stage) => (
              <div key={stage.id} className="min-h-[60vh] flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20%' }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-electric-cyan/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-hyper-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <stage.icon className="w-8 h-8 text-hyper-violet" />
                    {stage.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">{stage.content}</p>

                  {/* Animated SVG Visualizer */}
                  <div className="h-64 w-full bg-black/40 rounded-xl border border-white/5 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className={`w-full h-full ${visualizerGlowClassMap[visualizerGlowVariant]}`} />
                    </div>
                    {stage.visualizer()}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-3xl text-center border border-electric-cyan/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/10 to-hyper-violet/10 animate-pulse" />
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">{ctaTitle}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">{ctaDescription}</p>
          <button
            className={`relative z-10 bg-gradient-to-r from-electric-cyan to-hyper-violet text-white font-bold py-4 px-10 rounded-full text-lg transition-all flex items-center gap-3 mx-auto ${ctaButtonHoverShadowClassMap[ctaButtonHoverShadowVariant]}`}
          >
            {ctaButtonText} <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

