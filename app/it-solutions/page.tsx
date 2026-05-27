'use client';

import { Search, Hexagon, Code2, ShieldCheck, Globe } from 'lucide-react';
import { IPPipelineLayout, type PipelineStage } from '@/components/ip-pipeline-layout';
import {
  itDiscoveryVisualizer,
  itMicroservicesVisualizer,
  itCICDVisualizer,
  itSecurityVisualizer,
  itDeploymentVisualizer,
} from '@/components/pipeline-visualizers';

const itStages: PipelineStage[] = [
  {
    id: 'stage-1',
    title: 'Discovery & System Mapping',
    icon: Search,
    content: `Our discovery phase transcends traditional requirements gathering. We deploy proprietary automated scanning tools to map your existing infrastructure, identifying legacy bottlenecks and technical debt before a single line of code is written. This 'System Mapping' IP analyzes your current tech stack against industry benchmarks, providing a quantifiable risk assessment and a clear roadmap for modernization. By utilizing automated code analysis and architecture visualization, we uncover hidden dependencies that often derail complex migrations. This rigorous, data-driven discovery ensures that our proposed solutions are not just theoretically sound, but perfectly aligned with your operational realities, reducing project risk by 35% and ensuring a seamless transition to next-generation architectures.`,
    visualizer: itDiscoveryVisualizer
  },
  {
    id: 'stage-2',
    title: 'Microservices Architecture Design',
    icon: Hexagon,
    content: `We architect for resilience and scale using advanced Microservices patterns. Our IP-infused design methodology breaks down monolithic applications into decoupled, independently deployable services. We utilize Domain-Driven Design (DDD) principles to ensure each microservice aligns perfectly with specific business capabilities. This modular approach, orchestrated via Kubernetes, allows for hyper-agile development and zero-downtime deployments. By implementing event-driven architectures with Kafka or RabbitMQ, we ensure asynchronous communication and high availability even under extreme loads. This architectural rigor guarantees that your system can scale horizontally on demand, reducing infrastructure costs by up to 40% while future-proofing your application against rapid technological shifts.`,
    visualizer: itMicroservicesVisualizer
  },
  {
    id: 'stage-3',
    title: 'IP-Infused Development & CI/CD',
    icon: Code2,
    content: `Development is accelerated through our proprietary library of pre-built, secure code components and automated CI/CD pipelines. We don't reinvent the wheel; we assemble proven IP blocks to rapidly construct complex functionalities. Our CI/CD pipelines are integrated with automated IP-scanning and static code analysis (SAST) tools, ensuring that every commit is automatically tested for vulnerabilities and compliance before merging. This 'Shift-Left' security approach identifies flaws early in the development cycle, drastically reducing remediation costs. By automating testing, containerization (Docker), and deployment, we achieve a continuous delivery model that reduces time-to-market by 45%, allowing you to release features faster and more reliably than the competition.`,
    visualizer: itCICDVisualizer
  },
  {
    id: 'stage-4',
    title: 'Automated Security Auditing',
    icon: ShieldCheck,
    content: `Security is not an afterthought; it is continuously verified through our Automated Security Auditing protocols. Beyond standard penetration testing, we deploy dynamic application security testing (DAST) and interactive application security testing (IAST) within the live staging environment. Our proprietary threat-modeling algorithms simulate sophisticated cyber-attacks, identifying zero-day vulnerabilities and logic flaws that traditional scanners miss. We ensure strict compliance with global standards (GDPR, HIPAA, SOC2) through automated policy enforcement checks. This rigorous, continuous auditing process hardens your application against evolving threats, providing a 99.9% secure deployment environment and safeguarding your sensitive data and brand reputation from catastrophic breaches.`,
    visualizer: itSecurityVisualizer
  },
  {
    id: 'stage-5',
    title: 'Global Deployment & Orchestration',
    icon: Globe,
    content: `We execute flawless global rollouts using advanced orchestration and infrastructure-as-code (IaC). Utilizing tools like Terraform and Ansible, we provision and configure cloud environments (AWS, Azure, GCP) with absolute consistency and zero manual error. Our deployment strategy employs Blue-Green or Canary release models, routing a fraction of traffic to the new version to monitor stability before full cutover. This ensures zero-downtime deployments and immediate rollback capabilities if anomalies are detected. Post-deployment, our AI-driven monitoring systems track application performance and resource utilization in real-time, automatically scaling infrastructure to meet demand spikes. This orchestrated approach guarantees 99.99% uptime and a seamless experience for your global user base.`,
    visualizer: itDeploymentVisualizer
  }
];

export default function ITSolutionsPage() {
  return (
    <IPPipelineLayout
      mainClassName="min-h-screen pt-32 pb-20 relative overflow-hidden"
      background={
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTQxNDE0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMDBGMkZGIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20" />
        </div>
      }
      heroTitle={
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet drop-shadow-[0_0_30px_rgba(0,242,255,0.3)]">
          IT Solutions
        </h1>
      }
      heroDescription={
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Architecting the future with IP-infused development. We build scalable, secure, and hyper-agile custom software solutions designed for global enterprise dominance.
        </p>
      }
      stages={itStages}
      ctaTitle="Ready to Modernize Your Stack?"
      ctaDescription="Download our IP Blueprint to discover how our microservices architecture and automated CI/CD pipelines can accelerate your digital transformation."
      ctaButtonText="Download IP Blueprint"
    />
  );
}
