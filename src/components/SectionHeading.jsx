import useReveal from '../hooks/useReveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const ref = useReveal()
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div ref={ref} className={`reveal max-w-2xl ${alignment} mb-14`}>
      {eyebrow && <span className="eyebrow mb-5 inline-block">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg font-body font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
