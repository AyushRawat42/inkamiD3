'use client';

import { motion } from 'motion/react';
import { Bot, BrainCircuit, Database, LineChart, Network } from 'lucide-react';
import { IPPipelineLayout, type PipelineStage } from '@/components/ip-pipeline-layout';

const bpoStages: PipelineStage[] = [
  {
    id: 'stage-1',
    title: 'Talent Intelligence & Cognitive Sourcing',
    icon: BrainCircuit,
    content: `Our proprietary 4-layer vetting process redefines BPO recruitment by moving beyond basic resume parsing. We employ linguistic profiling algorithms and domain-specific IQ testing to ensure absolute alignment with US and UK market nuances. This isn't just about finding English speakers; it's about identifying cognitive agility and cultural resonance. Our IP-driven sourcing engine analyzes thousands of candidates against a matrix of 50+ behavioral and technical data points, filtering for emotional intelligence, problem-solving speed, and technical aptitude. By leveraging machine learning models trained on top-performing agent profiles, we reduce attrition by 40% and accelerate the onboarding curve. This rigorous cognitive sourcing guarantees that every agent deployed is not merely a representative, but a strategic extension of your brand, capable of handling complex, high-stakes interactions with native-level fluency and unparalleled professionalism.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-2',
    title: 'IP-Driven Training Matrix',
    icon: Database,
    content: `Before an agent makes their first call, they undergo our 'Global IT Education' integration—a rigorous, IP-driven training matrix. This immersive program goes beyond basic scripting. Agents are deeply trained in complex CRM architecture, mastering platforms like HubSpot and Salesforce to ensure seamless data flow and pipeline management. Furthermore, we embed strict IP-security protocols and compliance standards into their daily workflow, safeguarding your proprietary data. Our training utilizes interactive simulations and AI-driven role-playing scenarios, allowing agents to navigate complex objections and technical inquiries in a risk-free environment. This matrix ensures that upon deployment, our teams are not just operationally ready, but strategically aligned with your tech stack and security posture, reducing ramp-up time by 60% and ensuring immediate, high-quality output from day one.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-3',
    title: 'Predictive Lead Enrichment',
    icon: Network,
    content: `Our Predictive Lead Enrichment process transforms raw data into high-converting intelligence. We deploy proprietary data-scraping IP to cross-reference and verify B2B leads against 15+ distinct data points across platforms like LinkedIn, Lusha, and Apollo. This multi-layered verification process ensures a 95% connectivity rate, eliminating bounced emails and dead numbers. Our algorithms don't just verify contact info; they analyze firmographic data, recent funding rounds, and executive intent signals to score leads based on their propensity to buy. By feeding our outreach teams with this enriched, predictive data, we drastically reduce wasted effort and focus entirely on high-probability targets. This IP-driven approach ensures that every outreach attempt is highly targeted, personalized, and backed by actionable intelligence, increasing meeting booked rates by over 45%.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-4',
    title: 'High-Velocity Omni-Channel Outreach',
    icon: Bot,
    content: `We execute the 'Inkami Flow'—a highly synchronized, omni-channel outreach sequence that maximizes engagement. This isn't isolated cold calling; it's a unified strategy integrating voice, WhatsApp automation, and LinkedIn nurturing into a single, cohesive cadence. Our IP orchestrates these touchpoints based on prospect behavior and engagement triggers. If a prospect opens an email but doesn't reply, the system automatically triggers a personalized LinkedIn connection request, followed by a targeted cold call. This high-velocity approach ensures your brand remains top-of-mind without being intrusive. By leveraging automation for the initial touchpoints and deploying our highly trained cognitive agents for the complex conversations, we achieve a multiplier effect on outreach efficiency. The Inkami Flow guarantees a consistent, multi-platform presence that drives a 60% increase in qualified pipeline generation.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-5',
    title: 'Algorithmic ROI Reporting',
    icon: LineChart,
    content: `Transparency is engineered into our process via the 'Transparency Vault'—a live, algorithmic reporting portal. We don't just send end-of-month spreadsheets; we provide real-time access to conversion data, call recordings, and advanced sentiment analysis. Our IP analyzes call transcripts using Natural Language Processing (NLP) to gauge prospect sentiment, identifying objections and buying signals at scale. This data is visualized in an interactive dashboard, allowing you to track ROI down to the individual lead level. You can monitor campaign health, agent performance, and pipeline velocity in real-time. This algorithmic approach to reporting turns raw activity data into strategic business intelligence, enabling rapid iteration of messaging and targeting. The Transparency Vault ensures complete alignment and provides the actionable insights needed to continuously optimize your sales engine.`,
    visualizer: () => (
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
    )
  }
];

export default function BPOServicesPage() {
  return (
    <IPPipelineLayout
      mainClassName="min-h-screen pt-32 pb-20"
      heroTitle={
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">
          BPO Excellence
        </h1>
      }
      heroDescription={
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Transform your operations with our IP-driven Business Process Outsourcing. We combine cognitive talent sourcing with algorithmic workflows to deliver unparalleled efficiency and ROI.
        </p>
      }
      stages={bpoStages}
      ctaTitle="Ready to Scale Your Operations?"
      ctaDescription="Download our IP Blueprint to see exactly how our cognitive sourcing and algorithmic workflows can transform your business."
      ctaButtonText="Download IP Blueprint"
    />
  );
}
