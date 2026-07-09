import { useState } from 'react'
import useReveal from '../hooks/useReveal'

function FAQItem({ q, a, isOpen, onToggle }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal card overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
      >
        <span className="font-semibold text-white text-sm sm:text-base">{q}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-brand-orange transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <FAQItem
          key={item.q}
          {...item}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
