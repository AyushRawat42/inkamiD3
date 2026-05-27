'use client';

import { Target, Zap, MousePointerClick, Activity, TrendingUp } from 'lucide-react';
import { IPPipelineLayout, type PipelineStage } from '@/components/ip-pipeline-layout';
import {
  marketingAudienceVisualizer,
  marketingCampaignsVisualizer,
  marketingCROVisualizer,
  marketingAttributionVisualizer,
  marketingScalingVisualizer,
} from '@/components/pipeline-visualizers';

const marketingStages: PipelineStage[] = [
  {
    id: 'stage-1',
    title: 'Audience Intelligence & Segmentation',
    icon: Target,
    content: `We abandon broad-stroke marketing in favor of hyper-granular Audience Intelligence. Utilizing our proprietary data-mining IP, we analyze millions of digital footprints to construct deterministic buyer personas. We don't just look at demographics; we analyze psychographics, search intent velocity, and cross-platform behavioral patterns. By integrating first-party CRM data with third-party intent signals (via platforms like Bombora or Clearbit), we create dynamic audience segments that update in real-time based on buying signals. This algorithmic segmentation ensures that your messaging reaches the exact decision-maker at the precise moment of intent, reducing wasted ad spend by up to 40% and dramatically increasing the relevance of your top-of-funnel acquisition strategies.`,
    visualizer: marketingAudienceVisualizer
  },
  {
    id: 'stage-2',
    title: 'IP-Targeted Omnichannel Campaigns',
    icon: Zap,
    content: `We deploy campaigns across search, social, and programmatic networks using an IP-Targeted Omnichannel approach. Our proprietary bidding algorithms interface directly with ad network APIs (Google Ads, LinkedIn Ads, Meta) to optimize bids in real-time based on predictive conversion probability, not just historical CPA. We utilize dynamic creative optimization (DCO) to serve personalized ad variants tailored to the specific micro-segment the user belongs to. Furthermore, our IP-targeting capabilities allow us to serve ads directly to the IP addresses of target accounts (ABM), ensuring your message bypasses gatekeepers and reaches the C-suite directly. This precision-guided deployment maximizes ad relevance and drives a 55% increase in high-intent click-through rates.`,
    visualizer: marketingCampaignsVisualizer
  },
  {
    id: 'stage-3',
    title: 'Algorithmic Conversion Rate Optimization (CRO)',
    icon: MousePointerClick,
    content: `Driving traffic is only half the equation; our Algorithmic CRO process ensures that traffic converts. We deploy proprietary heat-mapping and session-recording scripts to analyze user friction points on your landing pages. Instead of relying on gut feeling, we use Bayesian A/B testing frameworks to statistically validate design and copy changes. Our IP dynamically alters page content (Dynamic Text Replacement) based on the user's search query and geographic location, creating a hyper-personalized landing experience. By continuously testing multivariate combinations of headlines, CTAs, and trust signals, we systematically dismantle conversion barriers. This relentless, data-backed optimization process typically yields a 30-50% uplift in landing page conversion rates within the first 90 days.`,
    visualizer: marketingCROVisualizer
  },
  {
    id: 'stage-4',
    title: 'Multi-Touch Attribution Modeling',
    icon: Activity,
    content: `We eliminate the guesswork of marketing ROI through advanced Multi-Touch Attribution Modeling. Standard 'last-click' attribution is fundamentally flawed for complex B2B sales cycles. Our IP integrates with your CRM and marketing automation platforms to track every single touchpoint a prospect has with your brand—from the first display ad impression to the final webinar attendance before closing. We utilize algorithmic models (like Markov Chains or Shapley Value) to assign fractional credit to each channel based on its actual impact on the conversion. This provides a mathematically rigorous view of your customer journey, allowing us to identify which channels are driving true incremental growth and which are merely taking credit. This clarity enables us to reallocate budget with surgical precision, maximizing total pipeline ROI.`,
    visualizer: marketingAttributionVisualizer
  },
  {
    id: 'stage-5',
    title: 'Predictive Growth Scaling',
    icon: TrendingUp,
    content: `Once we establish a profitable baseline, we initiate Predictive Growth Scaling. We don't just increase budgets blindly; we use machine learning models to forecast the point of diminishing returns for each channel. Our IP analyzes historical performance data against market search volume trends to predict the exact budget allocation required to hit your revenue targets. We automate the scaling process using custom scripts that incrementally increase bids and budgets while strictly maintaining target CPA/ROAS thresholds. This algorithmic approach to scaling ensures that your growth is aggressive yet financially sustainable. By continuously feeding conversion data back into the targeting algorithms, we create a self-optimizing growth loop that consistently drives a 3x to 5x increase in qualified lead volume over a 12-month period.`,
    visualizer: marketingScalingVisualizer
  }
];

export default function DigitalMarketingPage() {
  return (
    <IPPipelineLayout
      mainClassName="min-h-screen pt-32 pb-20 relative overflow-hidden"
      background={
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,242,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(157,0,255,0.15),transparent_50%)]" />
        </div>
      }
      heroTitle={
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-cyan to-hyper-violet drop-shadow-[0_0_30px_rgba(157,0,255,0.3)]">
          Digital Marketing
        </h1>
      }
      heroDescription={
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Dominate your market with algorithmic precision. We leverage predictive data models and IP-targeted omnichannel campaigns to drive exponential, measurable growth.
        </p>
      }
      stages={marketingStages}
      ctaTitle="Ready to Scale Your Growth?"
      ctaDescription="Download our IP Blueprint to see how our algorithmic targeting and multi-touch attribution can transform your marketing ROI."
      ctaButtonText="Download IP Blueprint"
      ctaButtonHoverShadowVariant="hyper-violet"
      visualizerGlowVariant="hyper-violet"
    />
  );
}
