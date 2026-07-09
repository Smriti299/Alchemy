import useReveal from '../hooks/useReveal'
import ContactForm from '../components/ContactForm'
import ContactInfoCard from '../components/ContactInfoCard'

export default function Contact() {
  const heroRef = useReveal()

  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-28 overflow-hidden bg-brand-gradient-radial">
      <div ref={heroRef} className="reveal relative max-w-3xl mx-auto px-5 sm:px-8 text-center mb-14">
        <span className="eyebrow mb-6 inline-block">Contact Us</span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
          Let&rsquo;s Grow Your Business <span className="gradient-text">Together</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Request your free SEO audit or schedule a strategy call. We&rsquo;ll respond within 24
          hours — no hard sell, ever.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <ContactInfoCard />
        </div>
      </div>
    </section>
  )
}
