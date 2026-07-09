import useReveal from '../hooks/useReveal'
import StatHighlight from '../components/StatHighlight'
import CaseStudyCard from '../components/CaseStudyCard'
import CTABanner from '../components/CTABanner'
import { CASE_STUDY_STATS, CASE_STUDIES } from '../data/caseStudiesData'

export default function CaseStudy() {
  const heroRef = useReveal()

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 overflow-hidden bg-brand-gradient-radial">
        <div ref={heroRef} className="reveal relative max-w-3xl mx-auto px-5 sm:px-8 text-center mb-14">
          <span className="eyebrow mb-6 inline-block">Case Studies</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Real Businesses. <span className="gradient-text">Real Results.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Before-and-after case studies with verified data from businesses we&rsquo;ve helped
            dominate local search.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {CASE_STUDY_STATS.map((s, i) => (
            <StatHighlight key={s.label} {...s} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 sm:py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.client} {...cs} />
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
