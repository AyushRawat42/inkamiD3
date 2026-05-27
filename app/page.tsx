import Link from 'next/link';
import { AnimatedValueCards } from '@/components/animated-value-cards';
import { BusinessProcessScroll } from '@/components/business-process-scroll';
import { LeadGenBPO } from '@/components/lead-gen-bpo';
import { ServiceImage } from '@/components/service-image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-screen pt-28 pb-16 bg-deep-space">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1fr_0.85fr]">
          <div className="text-center lg:text-left">
            <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Growth, operations, technology, and training — delivered by Inkami.
            </h1>
            <p className="mb-8 max-w-3xl mx-auto text-lg text-gray-300 lg:mx-0">
              Inkami helps businesses scale with BPO services, digital marketing, IT solutions, and IT education designed for practical, measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-electric-cyan to-hyper-violet px-6 py-3 font-bold text-white shadow-md">Request a Consultation</Link>
              <Link href="/about" className="w-full sm:w-auto rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300">Learn About Inkami</Link>
            </div>
          </div>
          <ServiceImage
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Business team collaborating around a technology strategy session"
            aspect="aspect-[5/4]"
            priority
          />
        </div>
      </section>

      {/* Why Inkami */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why Inkami</h2>
          <p className="text-gray-400 mb-8">One partner across business growth, customer operations, technology, and training — focused on execution and long-term value.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Execution-Focused</h3>
              <p className="text-gray-400">Practical delivery with measurable milestones and transparent communication.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-400">Flexible teams and systems that grow with your business needs.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Cross-Functional Expertise</h3>
              <p className="text-gray-400">Integrated services across operations, marketing, IT, and training.</p>
            </div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold mb-2">Long-Term Partnership</h3>
              <p className="text-gray-400">We prioritize sustainable value and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/bpo-services" className="glass-panel p-6 rounded-2xl border border-white/10 hover:shadow-lg">
            <h3 className="font-bold mb-2">BPO Services</h3>
            <p className="text-gray-400">Customer support, lead generation, back-office operations, and staffed solutions that scale.</p>
          </Link>
          <Link href="/digital-marketing" className="glass-panel p-6 rounded-2xl border border-white/10 hover:shadow-lg">
            <h3 className="font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-400">SEO, paid, content, and funnel optimization focused on measurable growth.</p>
          </Link>
          <Link href="/it-solutions" className="glass-panel p-6 rounded-2xl border border-white/10 hover:shadow-lg">
            <h3 className="font-bold mb-2">IT Services</h3>
            <p className="text-gray-400">Custom development, integrations, cloud, and maintenance for reliable delivery.</p>
          </Link>
          <Link href="/it-education" className="glass-panel p-6 rounded-2xl border border-white/10 hover:shadow-lg">
            <h3 className="font-bold mb-2">IT Education</h3>
            <p className="text-gray-400">Practical, career-oriented training for individuals and teams.</p>
          </Link>
        </div>
      </section>

      {/* How We Work & Industries */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-4">How We Work</h3>
            <p className="text-gray-400 mb-4">We combine discovery, rapid execution, and continuous optimization with clear milestones and transparent reporting. Our teams integrate with yours to deliver outcomes — not just outputs.</p>
            <ul className="list-disc ml-5 text-gray-400 space-y-2">
              <li>Discovery & alignment</li>
              <li>Structured delivery with SLA-backed teams</li>
              <li>Data-driven optimization and reporting</li>
              <li>Long-term roadmap and support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Industries We Support</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <div className="glass-panel p-4 rounded-xl">SaaS & Tech</div>
              <div className="glass-panel p-4 rounded-xl">FinTech</div>
              <div className="glass-panel p-4 rounded-xl">E-commerce</div>
              <div className="glass-panel p-4 rounded-xl">Healthcare</div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedValueCards />
      <BusinessProcessScroll />
      <LeadGenBPO />

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="glass-panel p-10 rounded-3xl border border-white/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to work with Inkami?</h3>
          <p className="text-gray-400 mb-6">Book a free consultation to discuss how we can help your business grow, operate better, and upskill teams.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-electric-cyan to-hyper-violet px-6 py-3 font-bold text-white">Request Consultation</Link>
            <Link href="/bpo-services" className="w-full sm:w-auto rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-gray-300">Explore Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
