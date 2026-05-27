'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const steps = [
  { title: 'Foundations of Code', desc: 'Mastering basic programming, algorithms, and data structures to build a solid technical base.' },
  { title: 'Advanced Full-Stack Development', desc: 'Building scalable web applications, RESTful APIs, and responsive user interfaces.' },
  { title: 'IP & Security Protocols', desc: 'Understanding how to protect intellectual property and secure digital assets in a global landscape.' },
  { title: 'Global IT Mastery', desc: 'Leading international tech teams, managing enterprise architecture, and driving innovation.' },
];

export default function ITEducationPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ['start center', 'end center'] 
  });
  
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen pt-40 pb-32 container mx-auto px-4" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Practical IT education for students, professionals, and future-ready teams.</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Inkami offers job-oriented IT education focused on practical skills, guided learning, and real-world confidence.
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Background Track */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full -translate-x-1/2" />
        
        {/* Glowing Progress Line */}
        <motion.div 
          className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-electric-cyan to-hyper-violet rounded-full shadow-[0_0_15px_#00F2FF] -translate-x-1/2 origin-top" 
          style={{ height }} 
        />
        
        <div className="space-y-24">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: true, margin: '-100px' }} 
                  className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-deep-space border-4 border-electric-cyan z-10 -translate-x-1/2 shadow-[0_0_15px_#00F2FF]" 
                />
                
                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true, margin: '-100px' }} 
                  className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}
                >
                  <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-hyper-violet/50 transition-all group">
                    <span className="text-sm font-bold text-hyper-violet tracking-widest mb-2 block">PHASE 0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
