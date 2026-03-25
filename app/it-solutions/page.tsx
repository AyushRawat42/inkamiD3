'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Search, Hexagon, Code2, ShieldCheck, Globe, ArrowRight } from 'lucide-react';

const itStages = [
  {
    id: 'stage-1',
    title: 'Discovery & System Mapping',
    icon: Search,
    content: `Our discovery phase transcends traditional requirements gathering. We deploy proprietary automated scanning tools to map your existing infrastructure, identifying legacy bottlenecks and technical debt before a single line of code is written. This 'System Mapping' IP analyzes your current tech stack against industry benchmarks, providing a quantifiable risk assessment and a clear roadmap for modernization. By utilizing automated code analysis and architecture visualization, we uncover hidden dependencies that often derail complex migrations. This rigorous, data-driven discovery ensures that our proposed solutions are not just theoretically sound, but perfectly aligned with your operational realities, reducing project risk by 35% and ensuring a seamless transition to next-generation architectures.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-2',
    title: 'Microservices Architecture Design',
    icon: Hexagon,
    content: `We architect for resilience and scale using advanced Microservices patterns. Our IP-infused design methodology breaks down monolithic applications into decoupled, independently deployable services. We utilize Domain-Driven Design (DDD) principles to ensure each microservice aligns perfectly with specific business capabilities. This modular approach, orchestrated via Kubernetes, allows for hyper-agile development and zero-downtime deployments. By implementing event-driven architectures with Kafka or RabbitMQ, we ensure asynchronous communication and high availability even under extreme loads. This architectural rigor guarantees that your system can scale horizontally on demand, reducing infrastructure costs by up to 40% while future-proofing your application against rapid technological shifts.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-3',
    title: 'IP-Infused Development & CI/CD',
    icon: Code2,
    content: `Development is accelerated through our proprietary library of pre-built, secure code components and automated CI/CD pipelines. We don't reinvent the wheel; we assemble proven IP blocks to rapidly construct complex functionalities. Our CI/CD pipelines are integrated with automated IP-scanning and static code analysis (SAST) tools, ensuring that every commit is automatically tested for vulnerabilities and compliance before merging. This 'Shift-Left' security approach identifies flaws early in the development cycle, drastically reducing remediation costs. By automating testing, containerization (Docker), and deployment, we achieve a continuous delivery model that reduces time-to-market by 45%, allowing you to release features faster and more reliably than the competition.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-4',
    title: 'Automated Security Auditing',
    icon: ShieldCheck,
    content: `Security is not an afterthought; it is continuously verified through our Automated Security Auditing protocols. Beyond standard penetration testing, we deploy dynamic application security testing (DAST) and interactive application security testing (IAST) within the live staging environment. Our proprietary threat-modeling algorithms simulate sophisticated cyber-attacks, identifying zero-day vulnerabilities and logic flaws that traditional scanners miss. We ensure strict compliance with global standards (GDPR, HIPAA, SOC2) through automated policy enforcement checks. This rigorous, continuous auditing process hardens your application against evolving threats, providing a 99.9% secure deployment environment and safeguarding your sensitive data and brand reputation from catastrophic breaches.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-5',
    title: 'Global Deployment & Orchestration',
    icon: Globe,
    content: `We execute flawless global rollouts using advanced orchestration and infrastructure-as-code (IaC). Utilizing tools like Terraform and Ansible, we provision and configure cloud environments (AWS, Azure, GCP) with absolute consistency and zero manual error. Our deployment strategy employs Blue-Green or Canary release models, routing a fraction of traffic to the new version to monitor stability before full cutover. This ensures zero-downtime deployments and immediate rollback capabilities if anomalies are detected. Post-deployment, our AI-driven monitoring systems track application performance and resource utilization in real-time, automatically scaling infrastructure to meet demand spikes. This orchestrated approach guarantees 99.99% uptime and a seamless experience for your global user base.`,
    visualizer: () => (
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
    )
  }
];

export default function ITSolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Code Rain Background Effect (Simplified for performance) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTQxNDE0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDBGMkZGIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Architecting the future with IP-infused development. We build scalable, secure, and hyper-agile custom software solutions designed for global enterprise dominance.
          </p>
        </motion.div>
      </section>

      {/* Sticky Scroll Tracking Pipeline */}
      <section ref={containerRef} className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 relative">
          
          {/* Left Side: Sticky Process Names */}
          <div className="md:w-1/3 relative">
            <div className="sticky top-32 space-y-8">
              <h2 className="text-3xl font-bold text-white mb-12 border-b border-white/10 pb-4">
                The <span className="text-electric-cyan">IP-Pipeline</span>
              </h2>
              {itStages.map((stage, index) => (
                <div key={stage.id} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center border border-white/10 group-hover:border-electric-cyan transition-colors relative z-10 bg-deep-space">
                    <stage.icon className="w-6 h-6 text-electric-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-400 group-hover:text-white transition-colors">
                    {stage.title}
                  </h3>
                </div>
              ))}
              {/* Vertical Progress Line */}
              <div className="absolute left-6 top-[100px] bottom-0 w-0.5 bg-white/10 z-0">
                <motion.div 
                  className="w-full bg-gradient-to-b from-electric-cyan to-hyper-violet origin-top"
                  style={{ scaleY: scrollYProgress }}
                />
              </div>
            </div>
          </div>

          {/* Right Side: Deep Dives & Visualizers */}
          <div className="md:w-2/3 space-y-32">
            {itStages.map((stage) => (
              <div key={stage.id} className="min-h-[60vh] flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-8 rounded-2xl border border-white/10 hover:border-electric-cyan/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-hyper-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <stage.icon className="w-8 h-8 text-hyper-violet" />
                    {stage.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                    {stage.content}
                  </p>

                  {/* Animated SVG Visualizer */}
                  <div className="h-64 w-full bg-black/40 rounded-xl border border-white/5 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)]" />
                    </div>
                    <stage.visualizer />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-12 rounded-3xl text-center border border-electric-cyan/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/10 to-hyper-violet/10 animate-pulse" />
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Ready to Modernize Your Stack?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Download our IP Blueprint to discover how our microservices architecture and automated CI/CD pipelines can accelerate your digital transformation.
          </p>
          <button className="relative z-10 bg-gradient-to-r from-electric-cyan to-hyper-violet text-white font-bold py-4 px-10 rounded-full text-lg hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all flex items-center gap-3 mx-auto">
            Download IP Blueprint <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
