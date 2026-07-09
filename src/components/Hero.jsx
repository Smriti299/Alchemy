import useReveal from '../hooks/useReveal'
import { IconArrowRight, IconBolt } from './Icons'
import { useNavigate } from 'react-router-dom'

const STATS = [
  { value: '150+', label: 'Happy Clients' },
  { value: '320+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
]

export default function Hero() {
  const ref = useReveal()
  const navigate = useNavigate()

  return (
    <section
      id="home"
      className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 min-h-[70vh] lg:min-h-[90vh] overflow-hidden bg-brand-gradient-radial"
    >
      {/* ambient floating shapes */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl animate-floatSlow" />
      <div className="absolute bottom-0 -left-24 w-72 h-72 bg-brand-orange/15 rounded-full blur-3xl animate-floatSlow" style={{ animationDelay: '2s' }} />

      <div ref={ref} className="reveal relative max-w-[min(1500px,92vw)] mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="w-full lg:w-[48%] text-center lg:text-left lg:pr-6">
            <span className="eyebrow mb-6 inline-flex items-center gap-2">
              <IconBolt className="w-3.5 h-3.5" />
              Full-Service Digital Marketing Agency
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-6">
              Transform Your Brand Into A{' '}
              <span className="gradient-text">Digital Powerhouse</span>
            </h1>

            <p className="max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
              AdAlchemy blends data-driven strategy with creative craft to grow your
              reach, your revenue, and your reputation online — one campaign at a time.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-20">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Get Started
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="btn-secondary w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/services')
                }}
              >
                View Our Work
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 max-w-none">
              {STATS.map((s) => (
                <div key={s.label} className="card p-5 hover:-translate-y-1 hover:shadow-glow">
                  <p className="text-2xl sm:text-3xl font-display text-white mb-1">{s.value}</p>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="w-full lg:w-[52%] flex justify-center lg:justify-end items-center">
            <div className="w-full lg:max-w-[720px] lg:h-[580px] relative">
              {/* glow behind image */}
              <div
                className="absolute -inset-6 rounded-[28px] -z-10"
                style={{
                  background: 'radial-gradient(60% 40% at 10% 20%, rgba(59,130,246,0.12), rgba(249,115,22,0.06))',
                  filter: 'blur(40px)'
                }}
              />

              <div className="w-full h-full overflow-hidden rounded-[24px] border border-white/12 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <img
                  src="/hero-image.jpg"
                  alt="Team working in office"
                  className="w-full h-full object-cover transform scale-[1.03]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
