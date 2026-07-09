import { Link } from 'react-router-dom'
import { IconBolt, IconMail, IconPhone, IconPin } from './Icons'

const SERVICE_LINKS = [
  { label: 'SEO Services', to: '/services#seo' },
  { label: 'Google Business Profile', to: '/services#gbp' },
  { label: 'PPC / Google Ads', to: '/services#ppc' },
  { label: 'Social Media Marketing', to: '/services#social' },
  { label: 'Web Design', to: '/services#web-design' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Case Studies', to: '/case-study' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
]

const RESOURCE_LINKS = ['Free Guides', 'FAQs', 'Support', 'Blog']

const SOCIALS = ['X', 'In', 'Ig', 'Fb']

export default function Footer() {
  return (
    <footer className="bg-navy-750 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-orange">
                <IconBolt className="w-5 h-5 text-white" />
              </span>
              <span className="font-display text-xl text-white">
                Ad<span className="text-brand-orange">Alchemy</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              We turn digital strategy into measurable growth — for brands
              ready to take their marketing seriously.
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <IconMail className="w-4 h-4 text-brand-orange" /> info@adalchemymarketing.com
              </li>
              <li className="flex items-center gap-2.5">
                <IconPhone className="w-4 h-4 text-brand-orange" /> 9319098456
              </li>
              <li className="flex items-center gap-2.5">
                <IconPin className="w-4 h-4 text-brand-orange" /> Ashok Vihar , Gurugram
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-semibold font-body mb-4">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 text-sm hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white font-semibold font-body mb-4">Company</h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-slate-400 text-sm hover:text-brand-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-white font-semibold font-body mb-4">Resources</h4>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 text-sm hover:text-brand-orange transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} AdAlchemy. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={`Social link ${s}`}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs font-semibold text-slate-400 hover:text-brand-orange hover:border-brand-orange/40 transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
