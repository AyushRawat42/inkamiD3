'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { MagneticButton } from './magnetic-button';

interface PathData {
  d: string;
  strokeWidth: number;
  duration: number;
  delay: number;
}

function getDeterministicPaths(): PathData[] {
  const paths: PathData[] = [];
  for (let i = 0; i < 20; i++) {
    const seed = i * 10;
    const random = (offset: number) => {
      const x = Math.sin(seed + offset) * 10000;
      return x - Math.floor(x);
    };
    paths.push({
      d: `M${(random(1) * 2000).toFixed(2)},${(random(2) * 1000).toFixed(2)} Q${(random(3) * 2000).toFixed(2)},${(random(4) * 1000).toFixed(2)} ${(random(5) * 2000).toFixed(2)},${(random(6) * 1000).toFixed(2)}`,
      strokeWidth: Number((random(7) * 4 + 1).toFixed(2)),
      duration: Number((random(8) * 10 + 10).toFixed(2)),
      delay: Number((random(9) * 5).toFixed(2)),
    });
  }
  return paths;
}

const STATIC_PATHS = getDeterministicPaths();

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-deep-space pt-20"
    >
      {/* Animated Data Flow SVG Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={{ y, opacity }}
        animate={{
          x: mousePos.x * 50,
          y: mousePos.y * 50,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9D00FF" stopOpacity="0.8" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>
          <g filter="url(#blur)">
            {STATIC_PATHS.map((path, i) => (
              <motion.path
                key={i}
                d={path.d}
                stroke="url(#glow)"
                strokeWidth={path.strokeWidth}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: path.duration,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: path.delay,
                }}
              />
            ))}
          </g>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto max-w-4xl"
        >
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl md:text-8xl">
            <span className="block text-glow">Innovate.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan to-hyper-violet">
              Scale. Dominate.
            </span>
          </h1>
          <p className="mb-10 text-lg text-gray-400 sm:text-xl md:text-2xl">
            We are an <span className="ip-keyword font-semibold text-electric-cyan transition-colors">Intellectual Property</span>-driven technology and BPO powerhouse, engineering global solutions for the modern enterprise.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton>Explore Our IP</MagneticButton>
            <button className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold tracking-wider text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-electric-cyan/50">
              <span className="relative z-10">Contact Sales</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-16 w-8 rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div className="h-2 w-2 rounded-full bg-electric-cyan" />
        </div>
      </motion.div>
    </section>
  );
}
