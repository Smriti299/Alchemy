import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { IconStar, IconArrowRight } from './Icons'

const TESTIMONIALS = [
  {
    quote:
      'AdAlchemy rebuilt our funnel from the ground up. Within a quarter our cost per lead dropped by half.',
    name: 'Priya Nair',
    role: 'Founder, Bloom & Co.',
  },
  {
    quote:
      'The team feels like an extension of ours. Reporting is clear, and every recommendation is backed by data.',
    name: 'Marcus Webb',
    role: 'CMO, Nova Fitness',
  },
  {
    quote:
      'Our social presence went from an afterthought to our biggest sales channel in under a year.',
    name: 'Elena Ruiz',
    role: 'Owner, Ember Coffee Roasters',
  },
]

function TestimonialCard({ quote, name, role, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card p-8 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-glow"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex gap-1 mb-5 text-brand-orange">
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStar key={i} className="w-4 h-4" />
        ))}
      </div>
      <p className="text-slate-300 leading-relaxed mb-6 font-body">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center font-display text-sm text-white">
          {name.split(' ').map((n) => n[0]).join('')}
        </span>
        <div>
          <p className="text-white font-semibold text-sm font-body">{name}</p>
          <p className="text-slate-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-28 bg-navy-800/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Voices"
          title="Don't Just Take Our Word For It"
          subtitle="Real results, from real teams who trusted us with their growth."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/case-study"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blueLight hover:text-brand-orange transition-colors"
          >
            View All Case Studies <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
