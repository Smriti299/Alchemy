import useReveal from '../hooks/useReveal'

export default function StatHighlight({ value, label, delay = 0 }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card p-5 sm:p-6 text-center hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-2xl sm:text-3xl font-display text-white mb-1">{value}</p>
      <p className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">{label}</p>
    </div>
  )
}
