import { IconCheck } from './Icons'

export default function PricingCard({ name, price, period, description, features, ctaLabel, popular, onCtaClick, ctaHref }) {
  const CTA = ctaHref
    ? 'a'
    : 'button'

  return (
    <div
      className={`card relative p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 ${
        popular ? 'border-brand-orange/60 shadow-glow-orange' : 'hover:border-white/20'
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange text-navy-950 text-xs font-bold uppercase tracking-wide rounded-full px-4 py-1.5">
          Most Popular
        </span>
      )}

      <h3 className="text-lg font-display text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-3xl sm:text-4xl font-black text-white">{price}</span>
        {period && <span className="text-slate-400 text-sm">/{period}</span>}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
            <IconCheck className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>

      <CTA
        href={ctaHref}
        onClick={onCtaClick}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
          popular
            ? 'bg-brand-orange text-navy-950 hover:bg-brand-orangeLight'
            : 'border-2 border-slate-600 text-white hover:border-brand-orange hover:text-brand-orange'
        }`}
      >
        {ctaLabel}
      </CTA>
    </div>
  )
}
