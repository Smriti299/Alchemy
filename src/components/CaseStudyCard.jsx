import useReveal from '../hooks/useReveal'
import { IconStar } from './Icons'

export default function CaseStudyCard({ client, industry, tags, duration, challenge, solution, results, testimonial }) {
  const ref = useReveal()

  return (
    <article ref={ref} className="reveal card p-7 sm:p-10">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-8 border-b border-white/10">
        <div>
          <h3 className="text-xl sm:text-2xl font-display text-white mb-1.5">{client}</h3>
          <p className="text-slate-400 text-sm">{industry}</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold text-brand-orange bg-brand-orange/10 border border-brand-orange/25 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
          <span className="text-xs font-semibold text-slate-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            {duration}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Challenge / Solution */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-2">
              The Challenge
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{challenge}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-2">
              Our Solution
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{solution}</p>
          </div>
        </div>

        {/* Results + testimonial */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wide text-brand-orange mb-4">
              Results
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              {results.map((r) => (
                <div key={r.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <p className="text-lg sm:text-xl font-display text-white mb-1">{r.value}</p>
                  <p className="text-xs text-slate-400 leading-snug">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-navy-800/60 p-5">
            <div className="flex gap-1 mb-3 text-brand-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="w-3.5 h-3.5" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
            <p className="text-white font-semibold text-sm">{testimonial.name}</p>
            <p className="text-slate-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
