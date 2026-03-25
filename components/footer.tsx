'use client';

import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-deep-space py-16 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-gradient-to-t from-electric-cyan/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-electric-cyan to-hyper-violet flex items-center justify-center shadow-[0_0_15px_#00F2FF]">
                <span className="font-black text-deep-space">I</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Inkami<span className="text-electric-cyan">.</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Intellectual Property-driven technology and business process outsourcing (BPO) company.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-electric-cyan hover:text-electric-cyan hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 font-bold text-white">IT Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Custom Software</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Web & Graphic Design</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Bulk Data Processing</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Payroll Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">BPO Operations</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Inbound Call Center</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Outbound Call Center</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">International Lead Gen</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Back-Office Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-white">Global Scale</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">IT Education</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-electric-cyan transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Inkami Global Services Pvt Ltd. All rights reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
