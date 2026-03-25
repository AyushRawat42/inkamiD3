'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';

export function MagneticButton({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative overflow-hidden rounded-full px-8 py-4 font-bold tracking-wider text-white transition-colors duration-300 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-electric-cyan before:to-hyper-violet before:opacity-80 hover:before:opacity-100 ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 drop-shadow-md">{children}</span>
    </motion.button>
  );
}
