import useReveal from '../hooks/useReveal'
import { IconCheck, IconArrowRight } from './Icons'

/**
 * One full detail section for a single service on the Services page.
 * Alternates subtle background shading between sections for rhythm.
 */
export default function ServiceDetail({
  id,
  eyebrow,
  icon: Icon,
  title,
  tagline,
  description,
  whatsIncluded,
  process,
  benefits,
  altBg = false,
}) {
  const headRef = useReveal()
  const leftRef = useReveal()
  const rightRef = useReveal()
  const benefitsRef = useReveal()

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 sm:py-20 border-t border-white/5 ${
        altBg ? 'bg-navy-800/40' : 'bg-navy-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section head */}
        <div ref={headRef} className="reveal max-w-3xl mb-12">
          <span className="eyebrow mb-5 inline-flex items-center gap-2">
            <Icon className="w-3.5 h-3.5" />
            {eyebrow}
          </span>
          <h2
            id={`${id}-heading`}
            className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4 text-white"
          >
            {title}
          </h2>
          <p className="text-lg sm:text-xl font-semibold gradient-text mb-4">{tagline}</p>
          <p className="text-slate-400 text-base leading-relaxed">{description}</p>
        </div>

        {/* Two-column: What's Included / Our Process */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left: What's included */}
          <div ref={leftRef} className="reveal card p-7 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-orange mb-6">
              What&rsquo;s Included
            </h3>
            <ul className="space-y-4">
              {whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Our process */}
          <div ref={rightRef} className="reveal card p-7 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-orange mb-6">
              Our Process
            </h3>
            <ol className="space-y-6">
              {process.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center font-display text-sm text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-1">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Key benefits */}
        <div ref={benefitsRef} className="reveal rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-7 sm:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-5">Key Benefits</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300">
                <IconArrowRight className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
