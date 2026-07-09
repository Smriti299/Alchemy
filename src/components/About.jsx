import useReveal from '../hooks/useReveal'
import { IconCheck, IconBolt } from './Icons'

const FEATURES = [
  {
    title: 'Data-driven strategy',
    desc: 'Every decision is backed by analytics, not guesswork.',
  },
  {
    title: 'Dedicated account team',
    desc: 'A real team who knows your brand, not a rotating cast.',
  },
  {
    title: 'Transparent reporting',
    desc: 'Live dashboards so you always know what\u2019s working.',
  },
  {
    title: 'Proven track record',
    desc: '8+ years turning ad spend into measurable growth.',
  },
]

export default function About() {
  const textRef = useReveal()
  const visualRef = useReveal()

  return (
    <section id="about" className="relative py-24 sm:py-28 bg-navy-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text column */}
        <div ref={textRef} className="reveal">
          <span className="eyebrow mb-6 inline-block">Why Choose AdAlchemy</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            Marketing That Feels Less Like Guesswork,{' '}
            <span className="gradient-text">More Like Alchemy</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            We combine creative thinking with rigorous testing to turn every
            campaign dollar into predictable, compounding growth.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center mt-0.5">
                  <IconCheck className="w-4 h-4 text-brand-orange" />
                </span>
                <div>
                  <h4 className="text-white font-semibold font-body mb-1">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column — placeholder graphic instead of a real photo */}
        <div ref={visualRef} className="reveal relative">
          {/* Gradient border wrapper with glows and hover effect */}
          <div className="relative flex items-center justify-center">
            <div
              className="rounded-[24px] p-[2px] group"
              style={{
                background: 'linear-gradient(90deg, rgba(59,130,246,0.45), rgba(245,158,11,0.45))',
                boxShadow: ' -30px 20px 80px rgba(59,130,246,0.18), 30px 20px 80px rgba(245,158,11,0.18)',
                transition: 'box-shadow 0.35s ease, transform 0.35s ease'
              }}
            >
              <div
                className="card relative flex items-center justify-center bg-brand-gradient-radial overflow-hidden rounded-[22px]"
                style={{
                  padding: '15px',
                  border: '2px solid transparent',
                  backdropFilter: 'blur(6px)'
                }}
              >
                {/* dotted/grid overlay constrained to image-size box */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-full h-full max-w-full max-h-full rounded-[20px] z-0"
                    style={{
                      width: 'calc(100% - 30px)',
                      height: 'calc(100% - 30px)',
                      background: 'radial-gradient(circle_at_center, white 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      opacity: 0.35
                    }}
                  />
                </div>

                <div
                  className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden rounded-[20px]"
                  style={{ transformOrigin: 'center', transition: 'transform 0.4s ease, box-shadow 0.4s ease' }}
                >
                  <img
                    src="/growth-image.jpg"
                    alt="Growth visual"
                    className="w-full h-full object-cover rounded-[20px]"
                    style={{
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Hover/interaction layer to apply transform & stronger glow */}
            <style>{`
              .group:hover { transform: translateY(-6px) scale(1.02); box-shadow: -30px 28px 100px rgba(59,130,246,0.28), 30px 28px 100px rgba(245,158,11,0.28); }
              .group:hover .card > .relative { transform: translateY(-6px) scale(1.02); }
            `}</style>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 card px-6 py-5 bg-navy-700 shadow-glow hidden sm:block">
            <p className="text-3xl font-display text-white">4.9/5</p>
            <p className="text-xs text-slate-400 font-medium">Average Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
