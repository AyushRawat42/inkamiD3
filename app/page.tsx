import { Hero } from '@/components/hero';
import { AnimatedValueCards } from '@/components/animated-value-cards';
import { BusinessProcessScroll } from '@/components/business-process-scroll';
import { LeadGenBPO } from '@/components/lead-gen-bpo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AnimatedValueCards />
      <BusinessProcessScroll />
      <LeadGenBPO />
    </div>
  );
}
