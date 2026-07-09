import useReveal from '../hooks/useReveal'

export default function ValueCard({ icon: Icon, title, desc, delay = 0 }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card p-7 text-center hover:-translate-y-1.5 hover:border-brand-orange/40"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 border border-white/10 flex items-center justify-center mb-5">
        <Icon className="w-7 h-7 text-brand-orange" />
      </div>
      <h3 className="text-white font-display text-base mb-2.5">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
