'use client';

import { Bot, BrainCircuit, Database, LineChart, Network } from 'lucide-react';
import { IPPipelineLayout, type PipelineStage } from '@/components/ip-pipeline-layout';
import { ServiceImage } from '@/components/service-image';
import {
  bpoTalentVisualizer,
  bpoTrainingVisualizer,
  bpoLeadVisualizer,
  bpoOutreachVisualizer,
  bpoROIVisualizer,
} from '@/components/pipeline-visualizers';

const bpoStages: PipelineStage[] = [
  {
    id: 'stage-1',
    title: 'Talent Intelligence & Cognitive Sourcing',
    icon: BrainCircuit,
    content: `Our proprietary 4-layer vetting process redefines BPO recruitment by moving beyond basic resume parsing. We employ linguistic profiling algorithms and domain-specific IQ testing to ensure absolute alignment with US and UK market nuances. This isn't just about finding English speakers; it's about identifying cognitive agility and cultural resonance. Our IP-driven sourcing engine analyzes thousands of candidates against a matrix of 50+ behavioral and technical data points, filtering for emotional intelligence, problem-solving speed, and technical aptitude. By leveraging machine learning models trained on top-performing agent profiles, we reduce attrition by 40% and accelerate the onboarding curve. This rigorous cognitive sourcing guarantees that every agent deployed is not merely a representative, but a strategic extension of your brand, capable of handling complex, high-stakes interactions with native-level fluency and unparalleled professionalism.`,
    visualizer: bpoTalentVisualizer
  },
  {
    id: 'stage-2',
    title: 'IP-Driven Training Matrix',
    icon: Database,
    content: `Before an agent makes their first call, they undergo our 'Global IT Education' integration—a rigorous, IP-driven training matrix. This immersive program goes beyond basic scripting. Agents are deeply trained in complex CRM architecture, mastering platforms like HubSpot and Salesforce to ensure seamless data flow and pipeline management. Furthermore, we embed strict IP-security protocols and compliance standards into their daily workflow, safeguarding your proprietary data. Our training utilizes interactive simulations and AI-driven role-playing scenarios, allowing agents to navigate complex objections and technical inquiries in a risk-free environment. This matrix ensures that upon deployment, our teams are not just operationally ready, but strategically aligned with your tech stack and security posture, reducing ramp-up time by 60% and ensuring immediate, high-quality output from day one.`,
    visualizer: bpoTrainingVisualizer
  },
  {
    id: 'stage-3',
    title: 'Predictive Lead Enrichment',
    icon: Network,
    content: `Our Predictive Lead Enrichment process transforms raw data into high-converting intelligence. We deploy proprietary data-scraping IP to cross-reference and verify B2B leads against 15+ distinct data points across platforms like LinkedIn, Lusha, and Apollo. This multi-layered verification process ensures a 95% connectivity rate, eliminating bounced emails and dead numbers. Our algorithms don't just verify contact info; they analyze firmographic data, recent funding rounds, and executive intent signals to score leads based on their propensity to buy. By feeding our outreach teams with this enriched, predictive data, we drastically reduce wasted effort and focus entirely on high-probability targets. This IP-driven approach ensures that every outreach attempt is highly targeted, personalized, and backed by actionable intelligence, increasing meeting booked rates by over 45%.`,
    visualizer: bpoLeadVisualizer
  },
  {
    id: 'stage-4',
    title: 'High-Velocity Omni-Channel Outreach',
    icon: Bot,
    content: `We execute the 'Inkami Flow'—a highly synchronized, omni-channel outreach sequence that maximizes engagement. This isn't isolated cold calling; it's a unified strategy integrating voice, WhatsApp automation, and LinkedIn nurturing into a single, cohesive cadence. Our IP orchestrates these touchpoints based on prospect behavior and engagement triggers. If a prospect opens an email but doesn't reply, the system automatically triggers a personalized LinkedIn connection request, followed by a targeted cold call. This high-velocity approach ensures your brand remains top-of-mind without being intrusive. By leveraging automation for the initial touchpoints and deploying our highly trained cognitive agents for the complex conversations, we achieve a multiplier effect on outreach efficiency. The Inkami Flow guarantees a consistent, multi-platform presence that drives a 60% increase in qualified pipeline generation.`,
    visualizer: bpoOutreachVisualizer
  },
  {
    id: 'stage-5',
    title: 'Algorithmic ROI Reporting',
    icon: LineChart,
    content: `Transparency is engineered into our process via the 'Transparency Vault'—a live, algorithmic reporting portal. We don't just send end-of-month spreadsheets; we provide real-time access to conversion data, call recordings, and advanced sentiment analysis. Our IP analyzes call transcripts using Natural Language Processing (NLP) to gauge prospect sentiment, identifying objections and buying signals at scale. This data is visualized in an interactive dashboard, allowing you to track ROI down to the individual lead level. You can monitor campaign health, agent performance, and pipeline velocity in real-time. This algorithmic approach to reporting turns raw activity data into strategic business intelligence, enabling rapid iteration of messaging and targeting. The Transparency Vault ensures complete alignment and provides the actionable insights needed to continuously optimize your sales engine.`,
    visualizer: bpoROIVisualizer
  }
];

export default function BPOServicesPage() {
  return (
    <IPPipelineLayout
      mainClassName="min-h-screen pt-32 pb-20"
      heroTitle={
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet">
          Reliable BPO services that help your business operate better.
        </h1>
      }
      heroDescription={
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Inkami supports growing businesses with structured BPO solutions including customer support, lead generation, appointment setting, and back-office operations.
        </p>
      }
      heroImage={
        <ServiceImage
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
          alt="Operations team coordinating customer support and business process workflows"
          aspect="aspect-[5/4]"
          priority
        />
      }
      stages={bpoStages}
      ctaTitle="Ready to Scale Your Operations?"
      ctaDescription="Download our IP Blueprint to see exactly how our cognitive sourcing and algorithmic workflows can transform your business."
      ctaButtonText="Download IP Blueprint"
    />
  );
}
