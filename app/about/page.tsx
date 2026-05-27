import Link from 'next/link';
import { ServiceImage } from '@/components/service-image';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Built to connect people, process, technology, and growth.</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">Inkami is a modern service partner helping businesses improve execution across operations, digital growth, IT delivery, and workforce upskilling.</p>
      </section>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">Mission</h3>
            <p className="text-gray-400">To help growing businesses achieve measurable outcomes through integrated services that blend operational excellence, digital growth, technical delivery, and workforce capability building.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">What makes Inkami different</h3>
            <ul className="list-disc ml-5 text-gray-400 space-y-2">
              <li>Cross-functional service capability</li>
              <li>Practical, execution-led mindset</li>
              <li>Business-first solutions</li>
              <li>Long-term partnership approach</li>
            </ul>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-3">Our service philosophy</h3>
            <p className="text-gray-400">We prioritize clarity, measurable milestones, and continuous improvement — building solutions that are maintainable, scalable, and tied to business outcomes.</p>
          </div>
        </div>

        <aside className="space-y-8">
          <ServiceImage
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
            alt="Professional team discussing partnership and delivery planning"
            aspect="aspect-[16/10]"
          />

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold mb-3">Leadership & Team</h4>
            <p className="text-gray-400">Experienced delivery teams with backgrounds in enterprise software, digital growth, and global operations. We pair senior leadership oversight with dedicated execution squads.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h4 className="font-bold mb-3">Partners & Tools</h4>
            <p className="text-gray-400">We partner with best-in-class platforms and cloud providers and complement them with our IP to deliver faster, safer, and more reliable outcomes.</p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center">
            <h4 className="font-bold mb-3">Ready to partner?</h4>
            <p className="text-gray-400 mb-4">If you're ready to improve execution or scale teams, let's talk about a practical plan that delivers.</p>
            <Link href="/contact" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-electric-cyan to-hyper-violet px-6 py-3 font-bold text-white inline-block">Request a Consultation</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
