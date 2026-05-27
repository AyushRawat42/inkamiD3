'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen pt-40 pb-20 container mx-auto px-4 grid lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Get in <span className="text-electric-cyan">Touch</span></h1>
        <p className="text-gray-400 mb-12 text-lg">Ready to scale your global operations? Contact our experts today to discuss your enterprise needs.</p>
        
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="glass-panel p-12 rounded-3xl flex flex-col items-center justify-center text-center h-[400px] border border-electric-cyan/50 shadow-[0_0_30px_rgba(0,242,255,0.2)]"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CheckCircle className="w-24 h-24 text-electric-cyan mb-6 drop-shadow-[0_0_15px_rgba(0,242,255,0.8)]" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
            <p className="text-gray-400">Our team will contact you shortly.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            onSubmit={handleSubmit} 
            className="glass-panel p-8 md:p-10 rounded-3xl space-y-8 border border-white/10"
          >
            <div className="relative group">
              <input 
                type="text" 
                id="name" 
                required 
                className="block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-electric-cyan peer" 
                placeholder=" " 
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electric-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Full Name
              </label>
            </div>
            <div className="relative group">
              <input 
                type="email" 
                id="email" 
                required 
                className="block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-electric-cyan peer" 
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electric-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Corporate Email
              </label>
            </div>
            <div className="relative group">
              <label htmlFor="service" className="absolute left-0 top-4 text-gray-500 transition-all text-sm">Select Service</label>
              <select id="service" name="service" className="mt-6 block w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-electric-cyan">
                <option value="bpo">BPO Services</option>
                <option value="marketing">Digital Marketing</option>
                <option value="it">IT Services</option>
                <option value="education">IT Education</option>
                <option value="other">General Inquiry</option>
              </select>
            </div>
            <div className="relative group">
              <textarea 
                id="message" 
                required 
                rows={4} 
                className="block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-electric-cyan peer resize-none" 
                placeholder=" " 
              />
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-electric-cyan peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs"
              >
                How can we scale your operations?
              </label>
            </div>
            <button 
              type="submit" 
              className="w-full py-4 rounded-full bg-gradient-to-r from-electric-cyan to-hyper-violet font-bold text-white hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
            >
              Initialize Contact
            </button>
          </motion.form>
        )}
      </div>

      <div className="relative h-[600px] rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 flex flex-col">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><MapPin className="text-hyper-violet w-8 h-8" /> Global Locations</h3>
        <div className="flex-1 relative bg-deep-space/80 rounded-2xl border border-white/5 overflow-hidden">
          {/* Neon Map Mockup */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #00F2FF 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          
          {/* Delhi Hub */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="absolute top-1/2 left-1/2 w-4 h-4 bg-electric-cyan rounded-full shadow-[0_0_20px_#00F2FF] -translate-x-1/2 -translate-y-1/2" 
          />
          <div className="absolute top-1/2 left-1/2 mt-4 -translate-x-1/2 text-electric-cyan font-bold text-sm tracking-widest drop-shadow-[0_0_5px_#00F2FF]">DELHI HUB</div>
          
          {/* London */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ duration: 3, repeat: Infinity, delay: 1 }} 
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-hyper-violet rounded-full shadow-[0_0_15px_#9D00FF]" 
          />
          <div className="absolute top-1/4 left-1/4 mt-3 -translate-x-1/2 text-hyper-violet text-xs font-semibold">LONDON</div>

          {/* New York */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} 
            className="absolute top-1/3 right-1/4 w-3 h-3 bg-hyper-violet rounded-full shadow-[0_0_15px_#9D00FF]" 
          />
          <div className="absolute top-1/3 right-1/4 mt-3 -translate-x-1/2 text-hyper-violet text-xs font-semibold">NEW YORK</div>

          {/* Sydney */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }} 
            transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }} 
            className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-hyper-violet rounded-full shadow-[0_0_15px_#9D00FF]" 
          />
          <div className="absolute bottom-1/4 right-1/3 mt-3 -translate-x-1/2 text-hyper-violet text-xs font-semibold">SYDNEY</div>
        </div>
      </div>
    </div>
  );
}
