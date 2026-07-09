import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { IconArrowRight } from './Icons'

export default function CTABanner() {
  const ref = useReveal()

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-brand-gradient opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

      <div ref={ref} className="reveal relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5 text-white">
          Ready To Grow Your Brand?
        </h2>
        <p className="text-white/85 text-base sm:text-lg mb-9 leading-relaxed">
          Let's build a strategy tailored to your goals — book a free consultation
          with our team today.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-8 py-4 font-body font-semibold text-white transition-all duration-300 hover:bg-navy-950 hover:-translate-y-0.5 hover:shadow-2xl"
        >
          Book Free Consultation
          <IconArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
