'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Database, PhoneCall, Globe2 } from 'lucide-react';
import { brandColorClassMap } from '@/lib/utils';

const processes = [
  {
    id: '01',
    title: 'IT Development',
    description: 'Custom software, web/graphic design, and bulk data processing systems.',
    icon: Database,
    color: 'electric-cyan',
  },
  {
    id: '02',
    title: 'BPO Operations',
    description: 'Inbound/outbound call centers, international lead generation, and back-office support.',
    icon: PhoneCall,
    color: 'hyper-violet',
  },
  {
    id: '03',
    title: 'Global Scale',
    description: 'Strategic digital marketing and global IT education empowering businesses worldwide.',
    icon: Globe2,
    color: 'electric-cyan',
  },
];

export function BusinessProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative bg-deep-space py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-24 text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-hyper-violet">IP-Driven</span> Pipeline
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            From architecture to global execution.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Central SVG Pipeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/5 hidden md:block">
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-electric-cyan to-hyper-violet shadow-[0_0_15px_#00F2FF]"
              style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
            />
          </div>

          <div className="space-y-24">
            {processes.map((process, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={process.id} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                  >
                    <div className="glass-panel group relative overflow-hidden rounded-3xl p-10 transition-all hover:border-electric-cyan/50">
                      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-electric-cyan/20 to-hyper-violet/20 blur-3xl transition-all group-hover:scale-150 group-hover:opacity-100 opacity-50" />
                      
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                          {process.id}
                        </span>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:border-electric-cyan/50 transition-colors">
                          <process.icon
                            className={`h-8 w-8 ${brandColorClassMap[process.color] ?? 'text-electric-cyan'}`}
                          />
                        </div>
                      </div>
                      
                      <h3 className="mb-4 text-3xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-lg text-gray-400 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node (Desktop) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="h-8 w-8 rounded-full border-4 border-deep-space bg-electric-cyan shadow-[0_0_20px_#00F2FF]"
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
