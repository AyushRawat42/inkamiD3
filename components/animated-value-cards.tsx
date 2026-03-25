'use client';

import { motion } from 'motion/react';
import { Code, Headphones, TrendingUp, GraduationCap } from 'lucide-react';

const valueCards = [
  {
    title: 'Custom IT Solutions',
    description: 'Comprehensive software development, web & graphic design, and bulk data processing (e.g., payroll management).',
    icon: Code,
    color: 'electric-cyan',
  },
  {
    title: 'Global BPO Operations',
    description: 'Robust inbound and outbound call centers expertly handling international lead generation and back-office support.',
    icon: Headphones,
    color: 'hyper-violet',
  },
  {
    title: 'Strategic Digital Marketing',
    description: 'Data-driven marketing solutions designed to elevate your brand and empower businesses worldwide.',
    icon: TrendingUp,
    color: 'electric-cyan',
  },
  {
    title: 'Global IT Education',
    description: 'Fostering innovation through comprehensive IT education programs to build the next generation of tech leaders.',
    icon: GraduationCap,
    color: 'hyper-violet',
  },
];

export function AnimatedValueCards() {
  return (
    <section className="relative z-10 bg-deep-space py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Our <span className="text-electric-cyan">Core</span> Capabilities
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Driven by innovation, we deliver comprehensive solutions across technology, business process outsourcing, marketing, and education.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {valueCards.map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-all hover:border-electric-cyan/50 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-electric-cyan/20 to-hyper-violet/20 blur-2xl transition-all group-hover:scale-150 group-hover:opacity-100 opacity-50" />
              
              <div className="relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-electric-cyan/10 to-hyper-violet/10 border border-white/10">
                <card.icon className={`h-8 w-8 text-${card.color} group-hover:animate-pulse`} />
              </div>
              
              <h3 className="relative z-10 mb-4 text-xl font-bold text-white group-hover:text-electric-cyan transition-colors">
                {card.title}
              </h3>
              
              <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
                {card.description}
              </p>

              {/* Expandable Tech Depth on Hover */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                whileHover={{ height: 'auto', opacity: 1 }}
                className="relative z-10 mt-4 overflow-hidden text-xs text-electric-cyan/80"
              >
                <div className="pt-4 border-t border-white/10">
                  <span className="ip-keyword font-semibold">IP-Driven Approach:</span> Leveraging proprietary frameworks to accelerate delivery and ensure compliance.
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
