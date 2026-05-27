'use client';

import { motion } from 'motion/react';

// IT Solutions Visualizers
export const itDiscoveryVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="gradIT1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <motion.circle
      cx="200" cy="150" r="100"
      fill="none" stroke="url(#gradIT1)" strokeWidth="2" strokeDasharray="10 10"
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.circle
      cx="200" cy="150" r="60"
      fill="none" stroke="#00F2FF" strokeWidth="1"
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M 200 50 L 200 250 M 100 150 L 300 150"
      stroke="rgba(0, 242, 255, 0.3)" strokeWidth="1"
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.circle cx="200" cy="150" r="5" fill="#9D00FF" animate={{ scale: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);

export const itMicroservicesVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    {[
      { x: 200, y: 150 }, { x: 130, y: 110 }, { x: 270, y: 110 },
      { x: 130, y: 190 }, { x: 270, y: 190 }, { x: 200, y: 70 }, { x: 200, y: 230 }
    ].map((pos, i) => (
      <g key={i}>
        <motion.polygon
          points={`${pos.x},${pos.y - 30} ${pos.x + 26},${pos.y - 15} ${pos.x + 26},${pos.y + 15} ${pos.x},${pos.y + 30} ${pos.x - 26},${pos.y + 15} ${pos.x - 26},${pos.y - 15}`}
          fill="none"
          stroke={i === 0 ? "#9D00FF" : "#00F2FF"}
          strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
        />
        {i !== 0 && (
          <motion.line
            x1="200" y1="150" x2={pos.x} y2={pos.y}
            stroke="rgba(0, 242, 255, 0.4)" strokeWidth="1" strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
      </g>
    ))}
  </svg>
);

export const itCICDVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="gradIT3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00F2FF" />
        <stop offset="100%" stopColor="#9D00FF" />
      </linearGradient>
    </defs>
    <rect x="50" y="130" width="300" height="40" rx="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    <motion.rect
      x="50" y="130" width="300" height="40" rx="20"
      fill="url(#gradIT3)"
      initial={{ width: 0 }}
      animate={{ width: 300 }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {[100, 200, 300].map((cx, i) => (
      <motion.circle
        key={i}
        cx={cx} cy="150" r="15"
        fill="#141414" stroke="#00F2FF" strokeWidth="2"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.5 }}
      />
    ))}
    <motion.path
      d="M 50 150 L 350 150"
      stroke="#FFF" strokeWidth="2" strokeDasharray="5 10"
      animate={{ strokeDashoffset: [0, -30] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const itSecurityVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <motion.path
      d="M 200 50 L 300 100 L 300 200 L 200 250 L 100 200 L 100 100 Z"
      fill="none" stroke="#9D00FF" strokeWidth="3"
      animate={{ strokeDasharray: ["0 1000", "1000 0"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M 200 80 L 260 110 L 260 190 L 200 220 L 140 190 L 140 110 Z"
      fill="rgba(0, 242, 255, 0.1)" stroke="#00F2FF" strokeWidth="2"
      animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ transformOrigin: "center" }}
    />
    <motion.circle cx="200" cy="150" r="20" fill="#00F2FF" />
    <motion.path
      d="M 190 150 L 195 155 L 210 140"
      fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
);

export const itDeploymentVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <motion.circle
      cx="200" cy="150" r="80"
      fill="none" stroke="rgba(0, 242, 255, 0.2)" strokeWidth="2"
    />
    <motion.circle
      cx="200" cy="150" r="80"
      fill="none" stroke="#00F2FF" strokeWidth="2" strokeDasharray="20 40"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.ellipse
      cx="200" cy="150" rx="120" ry="40"
      fill="none" stroke="#9D00FF" strokeWidth="1"
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.ellipse
      cx="200" cy="150" rx="40" ry="120"
      fill="none" stroke="#9D00FF" strokeWidth="1"
      animate={{ rotate: -360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    />
    <motion.circle cx="200" cy="150" r="15" fill="#00F2FF" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

// BPO Services Visualizers
export const bpoTalentVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 50 150 C 150 50, 250 250, 350 150"
      fill="none"
      stroke="url(#grad1)"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    {[50, 150, 250, 350].map((cx, i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={i % 2 === 0 ? 150 : (i === 1 ? 80 : 220)}
        r="8"
        fill="#00F2FF"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
    <motion.circle
      r="6"
      fill="#FFF"
      animate={{
        offsetDistance: ["0%", "100%"]
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      style={{ offsetPath: "path('M 50 150 C 150 50, 250 250, 350 150')" } as any}
    />
  </svg>
);

export const bpoTrainingVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9D00FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <rect x="50" y="50" width="300" height="200" rx="10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
    {[0, 1, 2].map((row) => (
      <g key={row}>
        {[0, 1, 2, 3].map((col) => (
          <motion.rect
            key={`${row}-${col}`}
            x={70 + col * 65}
            y={70 + row * 60}
            width="50"
            height="40"
            rx="4"
            fill="url(#grad2)"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: (row * 4 + col) * 0.1 }}
          />
        ))}
      </g>
    ))}
  </svg>
);

export const bpoLeadVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <motion.path
      d="M 200 150 L 100 50 M 200 150 L 300 50 M 200 150 L 50 150 M 200 150 L 350 150 M 200 150 L 100 250 M 200 150 L 300 250"
      stroke="rgba(0, 242, 255, 0.3)"
      strokeWidth="2"
      strokeDasharray="5,5"
      animate={{ strokeDashoffset: [0, -20] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle cx="200" cy="150" r="30" fill="#9D00FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    {[
      { cx: 100, cy: 50 }, { cx: 300, cy: 50 },
      { cx: 50, cy: 150 }, { cx: 350, cy: 150 },
      { cx: 100, cy: 250 }, { cx: 300, cy: 250 }
    ].map((pos, i) => (
      <motion.circle
        key={i}
        cx={pos.cx}
        cy={pos.cy}
        r="15"
        fill="#00F2FF"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </svg>
);

export const bpoOutreachVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00F2FF" />
        <stop offset="100%" stopColor="#9D00FF" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 50 100 Q 200 50 350 150 T 50 200"
      fill="none"
      stroke="url(#grad4)"
      strokeWidth="3"
      strokeDasharray="10,10"
      animate={{ strokeDashoffset: [0, -40] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M 50 200 Q 200 250 350 150 T 50 100"
      fill="none"
      stroke="url(#grad4)"
      strokeWidth="3"
      strokeDasharray="10,10"
      animate={{ strokeDashoffset: [0, 40] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle cx="50" cy="150" r="20" fill="#00F2FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    <motion.circle cx="350" cy="150" r="20" fill="#9D00FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }} />
  </svg>
);

export const bpoROIVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <polyline points="50,250 100,200 150,220 200,150 250,180 300,100 350,50" fill="none" stroke="rgba(0,242,255,0.3)" strokeWidth="4" />
    <motion.polyline
      points="50,250 100,200 150,220 200,150 250,180 300,100 350,50"
      fill="none"
      stroke="#9D00FF"
      strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    {[
      { x: 50, y: 250 }, { x: 100, y: 200 }, { x: 150, y: 220 },
      { x: 200, y: 150 }, { x: 250, y: 180 }, { x: 300, y: 100 }, { x: 350, y: 50 }
    ].map((pt, i) => (
      <motion.circle
        key={i}
        cx={pt.x}
        cy={pt.y}
        r="6"
        fill="#00F2FF"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: i * 0.3, repeat: Infinity, repeatDelay: 2 }}
      />
    ))}
  </svg>
);

// Digital Marketing Visualizers
export const marketingAudienceVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <radialGradient id="gradM1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle cx="200" cy="150" r="100" fill="url(#gradM1)" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />
    {[
      { cx: 150, cy: 100 }, { cx: 250, cy: 100 }, { cx: 120, cy: 180 }, { cx: 280, cy: 180 }, { cx: 200, cy: 220 }
    ].map((pt, i) => (
      <motion.circle
        key={i}
        cx={pt.cx} cy={pt.cy} r="8" fill="#FFF"
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
    <motion.path
      d="M 150 100 L 200 150 M 250 100 L 200 150 M 120 180 L 200 150 M 280 180 L 200 150 M 200 220 L 200 150"
      stroke="rgba(0, 242, 255, 0.5)" strokeWidth="2" strokeDasharray="4 4"
      animate={{ strokeDashoffset: [0, -20] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const marketingCampaignsVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <motion.path
      d="M 50 150 Q 125 50 200 150 T 350 150"
      fill="none" stroke="#9D00FF" strokeWidth="4"
      animate={{ d: ["M 50 150 Q 125 50 200 150 T 350 150", "M 50 150 Q 125 250 200 150 T 350 150"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    />
    <motion.path
      d="M 50 150 Q 125 250 200 150 T 350 150"
      fill="none" stroke="#00F2FF" strokeWidth="4"
      animate={{ d: ["M 50 150 Q 125 250 200 150 T 350 150", "M 50 150 Q 125 50 200 150 T 350 150"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
    />
    {[100, 200, 300].map((cx, i) => (
      <motion.circle
        key={i}
        cx={cx} cy="150" r="10" fill="#FFF"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
  </svg>
);

export const marketingCROVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <rect x="100" y="50" width="200" height="200" rx="10" fill="none" stroke="rgba(0,242,255,0.3)" strokeWidth="2" />
    <motion.rect
      x="120" y="70" width="160" height="40" rx="5" fill="#9D00FF"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.rect
      x="120" y="130" width="160" height="40" rx="5" fill="#00F2FF"
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M 200 250 L 200 200 M 180 220 L 200 200 L 220 220"
      stroke="#FFF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </svg>
);

export const marketingAttributionVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <motion.circle cx="100" cy="150" r="20" fill="#00F2FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="200" cy="100" r="25" fill="#9D00FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
    <motion.circle cx="200" cy="200" r="25" fill="#9D00FF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
    <motion.circle cx="300" cy="150" r="30" fill="#FFF" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
    
    <motion.path
      d="M 120 150 L 175 100 M 120 150 L 175 200 M 225 100 L 270 150 M 225 200 L 270 150"
      stroke="rgba(0, 242, 255, 0.5)" strokeWidth="2" strokeDasharray="5 5"
      animate={{ strokeDashoffset: [0, -20] }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

export const marketingScalingVisualizer = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="gradM5" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#9D00FF" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <motion.path
      d="M 50 250 L 100 200 L 150 220 L 200 150 L 250 180 L 300 100 L 350 50 L 350 250 Z"
      fill="url(#gradM5)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
    />
    <motion.polyline
      points="50,250 100,200 150,220 200,150 250,180 300,100 350,50"
      fill="none" stroke="#FFF" strokeWidth="4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.circle cx="350" cy="50" r="8" fill="#00F2FF" animate={{ scale: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
);
