'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Headphones, TrendingUp, Database, Shield, Smartphone } from 'lucide-react';

const services = [
  { id: 1, title: 'Custom Software Development', category: 'IT', icon: Code, desc: 'Enterprise-grade software solutions tailored to your unique business needs.' },
  { id: 2, title: 'Inbound Call Center', category: 'BPO', icon: Headphones, desc: '24/7 customer support and query resolution by trained professionals.' },
  { id: 3, title: 'SEO & Content Strategy', category: 'Digital Marketing', icon: TrendingUp, desc: 'Data-driven growth to dominate search rankings and engage audiences.' },
  { id: 4, title: 'Bulk Data Processing', category: 'IT', icon: Database, desc: 'Secure and rapid management of large-scale corporate data.' },
  { id: 5, title: 'Cybersecurity Solutions', category: 'IT', icon: Shield, desc: 'Protecting your intellectual property and digital assets from global threats.' },
  { id: 6, title: 'Lead Generation', category: 'BPO', icon: Smartphone, desc: 'High-converting outbound campaigns targeting international markets.' },
];

const categories = ['All', 'IT', 'BPO', 'Digital Marketing'];

export default function ServicesPage() {
  const [active, setActive] = useState('All');
  const filtered = services.filter(s => active === 'All' || s.category === active);

  return (
    <div className="min-h-screen pt-40 pb-20 container mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-electric-cyan">Services</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore our comprehensive suite of IP-driven solutions designed to scale your enterprise globally.
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        {categories.map(c => (
          <button 
            key={c} 
            onClick={() => setActive(c)} 
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              active === c 
                ? 'border-electric-cyan bg-electric-cyan/20 text-white shadow-[0_0_15px_rgba(0,242,255,0.3)]' 
                : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map(s => (
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.8 }} 
              transition={{ duration: 0.3 }} 
              key={s.id} 
              className="glass-panel p-8 rounded-3xl group border border-white/10 hover:border-electric-cyan/50 transition-all"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-electric-cyan/30 transition-colors">
                <s.icon className="w-8 h-8 text-electric-cyan group-hover:animate-pulse drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-electric-cyan transition-colors">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
