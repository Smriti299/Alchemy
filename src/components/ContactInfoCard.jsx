import { IconMail, IconPhone, IconPin } from './Icons'

const ITEMS = [
  { icon: IconPhone, label: 'Call us', value: '9319098456' },
  { icon: IconMail, label: 'Email us', value: 'info@adalchemymarketing.com' },
  { icon: IconPin, label: 'Visit us', value: 'Ashok Vihar , Phase-3 , Gurugram-122017' },
]

export default function ContactInfoCard() {
  return (
    <div className="card p-7 sm:p-9">
      <h3 className="text-white font-display text-lg mb-6">Get in Touch</h3>
      <ul className="space-y-6 mb-8">
        {ITEMS.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/25 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-brand-orange" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">{item.label}</p>
              <p className="text-slate-200 text-sm leading-relaxed">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/10 pt-6">
        <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-2">Office Hours</p>
        <p className="text-slate-300 text-sm">Mon–Fri, 9:00 AM – 6:00 PM CST</p>
      </div>
    </div>
  )
}
