/**
 * Sticky-feeling row of quick-jump pills, matching the reference site's
 * anchor-link row under the Services page intro.
 */
export default function ServiceQuickNav({ items }) {
  return (
    <nav aria-label="Jump to service" className="flex flex-wrap justify-center gap-3 mb-4">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="text-xs sm:text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-4 py-2 hover:border-brand-orange/50 hover:text-brand-orange transition-colors"
        >
          {item.navLabel}
        </a>
      ))}
    </nav>
  )
}
