import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IconBolt, IconMenu, IconClose } from './Icons'

// All items now navigate to dedicated routes.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Case Study', to: '/case-study' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-orange shadow-glow group-hover:scale-105 transition-transform">
            <IconBolt className="w-5 h-5 text-white" />
          </span>
          <span className="font-display text-xl sm:text-2xl text-white tracking-wide">
            Ad<span className="text-brand-orange">Alchemy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors ${
                  isActive ? 'text-brand-orange' : 'text-slate-300 hover:text-brand-orange'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
          Get Started
          <span>→</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Gradient divider strip — signature brand element */}
      <div className="h-[3px] w-full bg-brand-gradient" />

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-navy-900/95 backdrop-blur-md ${
          open ? 'max-h-96 border-b border-white/10' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 font-semibold border-b border-white/5 last:border-none ${
                  isActive ? 'text-brand-orange' : 'text-slate-200'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
