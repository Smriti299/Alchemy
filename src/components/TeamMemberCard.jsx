import useReveal from '../hooks/useReveal'

export default function TeamMemberCard({ name, role, bio, delay = 0 }) {
  const ref = useReveal()
  const initials = name.split(' ').map((n) => n[0]).join('')

  return (
    <div
      ref={ref}
      className="reveal card p-7 hover:-translate-y-1.5 hover:border-brand-blue/40"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center font-display text-lg text-white mb-5">
        {initials}
      </div>
      <h3 className="text-white font-display text-base mb-1">{name}</h3>
      <p className="text-brand-orange text-xs font-semibold uppercase tracking-wide mb-3">{role}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{bio}</p>
    </div>
  )
}
