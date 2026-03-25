'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, MousePointerClick, Activity, TrendingUp, ArrowRight } from 'lucide-react';

const marketingStages = [
  {
    id: 'stage-1',
    title: 'Audience Intelligence & Segmentation',
    icon: Target,
    content: `We abandon broad-stroke marketing in favor of hyper-granular Audience Intelligence. Utilizing our proprietary data-mining IP, we analyze millions of digital footprints to construct deterministic buyer personas. We don't just look at demographics; we analyze psychographics, search intent velocity, and cross-platform behavioral patterns. By integrating first-party CRM data with third-party intent signals (via platforms like Bombora or Clearbit), we create dynamic audience segments that update in real-time based on buying signals. This algorithmic segmentation ensures that your messaging reaches the exact decision-maker at the precise moment of intent, reducing wasted ad spend by up to 40% and dramatically increasing the relevance of your top-of-funnel acquisition strategies.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-2',
    title: 'IP-Targeted Omnichannel Campaigns',
    icon: Zap,
    content: `We deploy campaigns across search, social, and programmatic networks using an IP-Targeted Omnichannel approach. Our proprietary bidding algorithms interface directly with ad network APIs (Google Ads, LinkedIn Ads, Meta) to optimize bids in real-time based on predictive conversion probability, not just historical CPA. We utilize dynamic creative optimization (DCO) to serve personalized ad variants tailored to the specific micro-segment the user belongs to. Furthermore, our IP-targeting capabilities allow us to serve ads directly to the IP addresses of target accounts (ABM), ensuring your message bypasses gatekeepers and reaches the C-suite directly. This precision-guided deployment maximizes ad relevance and drives a 55% increase in high-intent click-through rates.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-3',
    title: 'Algorithmic Conversion Rate Optimization (CRO)',
    icon: MousePointerClick,
    content: `Driving traffic is only half the equation; our Algorithmic CRO process ensures that traffic converts. We deploy proprietary heat-mapping and session-recording scripts to analyze user friction points on your landing pages. Instead of relying on gut feeling, we use Bayesian A/B testing frameworks to statistically validate design and copy changes. Our IP dynamically alters page content (Dynamic Text Replacement) based on the user's search query and geographic location, creating a hyper-personalized landing experience. By continuously testing multivariate combinations of headlines, CTAs, and trust signals, we systematically dismantle conversion barriers. This relentless, data-backed optimization process typically yields a 30-50% uplift in landing page conversion rates within the first 90 days.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-4',
    title: 'Multi-Touch Attribution Modeling',
    icon: Activity,
    content: `We eliminate the guesswork of marketing ROI through advanced Multi-Touch Attribution Modeling. Standard 'last-click' attribution is fundamentally flawed for complex B2B sales cycles. Our IP integrates with your CRM and marketing automation platforms to track every single touchpoint a prospect has with your brand—from the first display ad impression to the final webinar attendance before closing. We utilize algorithmic models (like Markov Chains or Shapley Value) to assign fractional credit to each channel based on its actual impact on the conversion. This provides a mathematically rigorous view of your customer journey, allowing us to identify which channels are driving true incremental growth and which are merely taking credit. This clarity enables us to reallocate budget with surgical precision, maximizing total pipeline ROI.`,
    visualizer: () => (
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
    )
  },
  {
    id: 'stage-5',
    title: 'Predictive Growth Scaling',
    icon: TrendingUp,
    content: `Once we establish a profitable baseline, we initiate Predictive Growth Scaling. We don't just increase budgets blindly; we use machine learning models to forecast the point of diminishing returns for each channel. Our IP analyzes historical performance data against market search volume trends to predict the exact budget allocation required to hit your revenue targets. We automate the scaling process using custom scripts that incrementally increase bids and budgets while strictly maintaining target CPA/ROAS thresholds. This algorithmic approach to scaling ensures that your growth is aggressive yet financially sustainable. By continuously feeding conversion data back into the targeting algorithms, we create a self-optimizing growth loop that consistently drives a 3x to 5x increase in qualified lead volume over a 12-month period.`,
    visualizer: () => (
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
    )
  }
];

export default function DigitalMarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Data Flow Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,242,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(157,0,255,0.15),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet drop-shadow-[0_0_30px_rgba(157,0,255,0.3)]">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Dominate your market with algorithmic precision. We leverage predictive data models and IP-targeted omnichannel campaigns to drive exponential, measurable growth.
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
              {marketingStages.map((stage, index) => (
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
            {marketingStages.map((stage) => (
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
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(157,0,255,0.1)_0%,transparent_70%)]" />
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
          <h2 className="text-4xl font-bold text-white mb-6 relative z-10">Ready to Scale Your Growth?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Download our IP Blueprint to see how our algorithmic targeting and multi-touch attribution can transform your marketing ROI.
          </p>
          <button className="relative z-10 bg-gradient-to-r from-electric-cyan to-hyper-violet text-white font-bold py-4 px-10 rounded-full text-lg hover:shadow-[0_0_30px_rgba(157,0,255,0.5)] transition-all flex items-center gap-3 mx-auto">
            Download IP Blueprint <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </section>
    </main>
  );
}
