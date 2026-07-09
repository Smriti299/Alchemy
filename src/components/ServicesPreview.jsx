import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import {
  IconSearch,
  IconShare,
  IconTarget,
  IconPen,
  IconMail,
  IconLayout,
  IconArrowRight,
} from './Icons'

const SERVICES = [
  {
    icon: IconSearch,
    title: 'SEO Optimization',
    desc: 'Rank higher, get found faster. We fine-tune your technical, on-page, and content SEO for lasting organic growth.',
  },
  {
    icon: IconShare,
    title: 'Social Media Marketing',
    desc: 'Build a loyal community with scroll-stopping content and a posting strategy tuned to every platform.',
  },
  {
    icon: IconTarget,
    title: 'PPC Advertising',
    desc: 'Paid campaigns engineered for ROI — precise targeting, constant A/B testing, and transparent reporting.',
  },
  {
    icon: IconPen,
    title: 'Content Creation',
    desc: 'From blog posts to video scripts, we craft content that informs, entertains, and converts.',
  },
  {
    icon: IconMail,
    title: 'Email Marketing',
    desc: 'Nurture sequences and campaigns that turn subscribers into repeat customers.',
  },
  {
    icon: IconLayout,
    title: 'Web Design',
    desc: 'Fast, on-brand websites built to convert visitors — designed with your customer journey in mind.',
  },
]

function ServiceCard({ icon: Icon, title, desc, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card p-8 group hover:-translate-y-1.5 hover:border-brand-orange/40 hover:shadow-glow-orange"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-brand-orange" />
      </div>
      <h3 className="text-lg font-display text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed font-body">{desc}</p>
    </div>
  )
}

export default function ServicesPreview() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built To Move The Needle"
          subtitle="A complete toolkit for brands that want to grow with intent — every service is designed to work together."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 border-slate-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5"
          >
            View All Services
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
