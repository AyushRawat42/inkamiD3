'use client';

import { motion } from 'motion/react';
import { Globe, Send, User, Mail, MessageSquare } from 'lucide-react';
import { MagneticButton } from './magnetic-button';

export function LeadGenBPO() {
  return (
    <section className="relative bg-deep-space py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-electric-cyan/10 to-hyper-violet/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Animated Globe Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex h-[500px] w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl overflow-hidden"
          >
            {/* Simulated Globe / Network */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="relative h-[400px] w-[400px] rounded-full border border-electric-cyan/30"
              >
                {/* Nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-hyper-violet shadow-[0_0_15px_#9D00FF]"
                    style={{
                      top: `${(50 + 50 * Math.sin((i * Math.PI) / 6)).toFixed(4)}%`,
                      left: `${(50 + 50 * Math.cos((i * Math.PI) / 6)).toFixed(4)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
                
                {/* Inner Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hyper-violet/30 border-dashed"
                />
                
                {/* Center Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-24 w-24 items-center justify-center rounded-full bg-electric-cyan/20 backdrop-blur-md shadow-[0_0_30px_#00F2FF]">
                  <Globe className="h-12 w-12 text-electric-cyan animate-pulse" />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-md">
              <h4 className="mb-2 text-xl font-bold text-white">Global Reach</h4>
              <p className="text-sm text-gray-400">
                Operating robust inbound and outbound call centers expertly handling international lead generation.
              </p>
            </div>
          </motion.div>

          {/* Right: Glassy Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="glass-panel rounded-3xl p-10"
          >
            <div className="mb-10">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Accelerate Your <span className="text-electric-cyan">Growth</span>
              </h2>
              <p className="text-gray-400">
                Partner with our BPO division for dedicated back-office support and strategic digital marketing.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <User className="h-5 w-5 text-gray-500 group-focus-within:text-electric-cyan transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-xl border border-white/10 bg-white/5 p-4 pl-12 text-white placeholder-gray-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-all"
                  placeholder="Full Name"
                />
              </div>

              <div className="group relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500 group-focus-within:text-hyper-violet transition-colors" />
                </div>
                <input
                  type="email"
                  className="block w-full rounded-xl border border-white/10 bg-white/5 p-4 pl-12 text-white placeholder-gray-500 focus:border-hyper-violet focus:outline-none focus:ring-1 focus:ring-hyper-violet transition-all"
                  placeholder="Corporate Email"
                />
              </div>

              <div className="group relative">
                <div className="absolute top-4 left-0 flex items-start pl-4 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-gray-500 group-focus-within:text-electric-cyan transition-colors" />
                </div>
                <textarea
                  rows={4}
                  className="block w-full rounded-xl border border-white/10 bg-white/5 p-4 pl-12 text-white placeholder-gray-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-all resize-none"
                  placeholder="How can we scale your operations?"
                />
              </div>

              <MagneticButton className="w-full flex items-center justify-center gap-2">
                <span>Initialize Partnership</span>
                <Send className="h-4 w-4" />
              </MagneticButton>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
