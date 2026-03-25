'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'BPO Services', href: '/bpo-services' },
    { name: 'Digital Marketing', href: '/digital-marketing' },
    { name: 'IT Education', href: '/it-education' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`glass-panel flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${
            isScrolled ? 'bg-deep-space/80 shadow-lg border-white/10' : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-electric-cyan to-hyper-violet flex items-center justify-center shadow-[0_0_15px_#00F2FF] group-hover:shadow-[0_0_25px_#9D00FF] transition-shadow">
              <span className="font-black text-deep-space">I</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Inkami<span className="text-electric-cyan">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition-colors hover:text-electric-cyan"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/portal/dashboard" className="rounded-full bg-white/10 px-6 py-2 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] border border-white/5 inline-block">
              Client Portal
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-2 px-4 md:hidden"
        >
          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-electric-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/portal/dashboard" className="mt-4 w-full rounded-full bg-gradient-to-r from-electric-cyan to-hyper-violet px-6 py-3 font-bold text-white text-center block">
              Client Portal
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
