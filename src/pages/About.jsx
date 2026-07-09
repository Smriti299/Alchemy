import useReveal from '../hooks/useReveal'
import SectionHeading from '../components/SectionHeading'
import ValueCard from '../components/ValueCard'
import TeamMemberCard from '../components/TeamMemberCard'
import CTABanner from '../components/CTABanner'
import { COMPANY_STATS, VALUES, TEAM } from '../data/aboutData'

export default function About() {
  const heroRef = useReveal()

  return (
    <>
      {/* Hero / mission */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-24 overflow-hidden bg-brand-gradient-radial">
        <div ref={heroRef} className="reveal relative max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <span className="eyebrow mb-6 inline-block">About RankBoost</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              We Help Local Businesses <span className="gradient-text">Win on Google</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-5">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                RankBoost is a USA-based digital marketing agency founded in 2014. Our mission is
                simple: help local businesses dominate Google search and turn online visibility
                into real revenue.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                We specialize in SEO and Google Business Profile optimization — the two
                highest-impact channels for local businesses. Everything else we offer supports
                that core mission.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {COMPANY_STATS.map((s) => (
                <div key={s.label} className="card p-5 text-center">
                  <p className="text-2xl font-display text-white mb-1">{s.value}</p>
                  <p className="text-xs text-slate-400 font-medium leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section className="py-20 sm:py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            subtitle="Everything we do is guided by a commitment to transparency, accountability, and results you can actually see."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} {...v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-20 sm:py-24 bg-navy-800/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet Our Specialists"
            subtitle="Experienced digital marketers who are passionate about one thing: helping local businesses grow."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <TeamMemberCard key={member.name} {...member} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
