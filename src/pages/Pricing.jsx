import useReveal from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import PricingCard from '../components/PricingCard'
import FeatureComparisonTable from '../components/FeatureComparisonTable'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import { PLANS, FEATURE_GROUPS, PRICING_FAQS } from '../data/pricingData'

export default function Pricing() {
  const heroRef = useReveal()
  const tableRef = useReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 overflow-hidden bg-brand-gradient-radial">
        <div ref={heroRef} className="reveal relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-6 inline-block">Pricing</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            No hidden fees. No long-term contracts. Cancel anytime. Every plan includes a free
            onboarding call.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-16 sm:py-20 bg-navy-500">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLANS.map((plan) => (
              <PricingCard key={plan.name} {...plan} ctaHref="/contact" />
            ))}
          </div>
        </div>
      </section>

      {/* Full feature comparison */}
      <section className="py-16 sm:py-20 bg-navy-500/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Compare Plans"
            title="Full Feature Comparison"
            subtitle="See exactly what's included in each plan."
          />
          <div ref={tableRef} className="reveal">
            <FeatureComparisonTable groups={FEATURE_GROUPS} planNames={PLANS.map((p) => p.name)} />
            <div className="flex flex-wrap gap-6 mt-6 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-orange/15 inline-block" /> Included
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-blue/15 inline-block" /> Partially included
              </span>
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-white/5 inline-block" /> Not included
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-navy-500 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before getting started."
          />
          <FAQAccordion items={PRICING_FAQS} />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
