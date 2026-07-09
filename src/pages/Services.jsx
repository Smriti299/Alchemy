import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import ServiceQuickNav from '../components/ServiceQuickNav'
import ServiceDetail from '../components/ServiceDetail'
import CTABanner from '../components/CTABanner'
import { SERVICES_DATA } from '../data/servicesData'

export default function Services() {
  const introRef = useReveal()
  const location = useLocation()

  // Smooth-scroll to a specific service section if arriving via #hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <>
      {/* Intro / hero */}
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 overflow-hidden bg-brand-gradient-radial">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl animate-floatSlow" />
        <div ref={introRef} className="reveal relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow mb-6 inline-block">Our Services</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Full-Stack Digital Marketing <span className="gradient-text">Services</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            Every service is designed around one goal: generating measurable growth for your
            business. From local SEO to full digital marketing management — we do it all.
          </p>

          <ServiceQuickNav items={SERVICES_DATA.slice(0, 6)} />
        </div>
      </section>

      {/* Detailed service sections */}
      <div>
        {SERVICES_DATA.map((service, i) => (
          <ServiceDetail key={service.id} {...service} altBg={i % 2 === 1} />
        ))}
      </div>

      <CTABanner />
    </>
  )
}
