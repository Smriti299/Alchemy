import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import PricingCard from './PricingCard'
import { PLANS } from '../data/pricingData'
import { IconArrowRight } from './Icons'

export default function PricingPreview() {
  const linkRef = useReveal()

  return (
    <section className="relative py-24 sm:py-28 bg-navy-500/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. No long-term contracts. Cancel anytime. Every plan includes a free onboarding call."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.name} {...plan} ctaHref="/contact" />
          ))}
        </div>

        <div ref={linkRef} className="reveal flex justify-center mt-10">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blueLight hover:text-brand-orange transition-colors"
          >
            See full feature comparison <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
