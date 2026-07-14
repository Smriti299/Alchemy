import { useState } from 'react'
import { IconArrowRight } from './Icons'

const initialState = { name: '', email: '', phone: '', website: '', challenge: '' }
// Apps Script web-app URLs are public client endpoints. Keeping this value here
// ensures every deployment uses the verified endpoint, even if a hosting
// provider has an old VITE_GOOGLE_SHEET_WEBHOOK_URL environment variable.
const webhookUrl = 'https://script.google.com/macros/s/AKfycbxLs7iA6blGdX5Dl3Fsopx5wLmBHsGIgBbJJlYFNHEeg70joh2sIr_p_4YoGwMWcHw/exec'

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!webhookUrl) {
      setError('Contact webhook URL is not configured. Add VITE_GOOGLE_SHEET_WEBHOOK_URL to your .env and restart Vite.')
      return
    }

    try {
      new URL(webhookUrl)
    } catch {
      setError('Configured webhook URL is invalid. Check VITE_GOOGLE_SHEET_WEBHOOK_URL in your .env.')
      return
    }

    setSending(true)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`Request failed: ${response.status} ${text}`)
      }

      let data
      try {
        data = await response.json()
      } catch (parseError) {
        const text = await response.text()
        throw new Error(`Invalid webhook response: ${text || response.status}`)
      }

      if (data.result !== 'success') {
        throw new Error(data.message || 'Google Sheets webhook returned an error.')
      }

      setSubmitted(true)
    } catch (err) {
      console.error('Contact form submission failed', err)
      const message = err?.message || 'Unable to send your request. Please try again later.'
      if (message === 'Failed to fetch' || message.includes('NetworkError')) {
        setError('Unable to reach the webhook endpoint. Check your Apps Script deployment URL, access settings, and CORS permissions.')
      } else {
        setError(message)
      }
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="card p-8 sm:p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-brand-orange/15 flex items-center justify-center mb-5">
          <IconArrowRight className="w-6 h-6 text-brand-orange rotate-[-45deg]" />
        </div>
        <h3 className="text-xl font-display text-white mb-2">Request received!</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Thanks, {form.name.split(' ')[0] || 'there'} — we&rsquo;ll be in touch within 24 hours
          with your free SEO audit.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-7 sm:p-9 space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full rounded-lg bg-navy-600 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full rounded-lg bg-navy-600 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 000-0000"
            className="w-full rounded-lg bg-navy-600 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-semibold text-slate-300 mb-2">
            Website / company
          </label>
          <input
            id="website"
            name="website"
            type="text"
            value={form.website}
            onChange={handleChange}
            placeholder="yourcompany.com"
            className="w-full rounded-lg bg-navy-600 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-sm font-semibold text-slate-300 mb-2">
          What&rsquo;s your biggest marketing challenge?
        </label>
        <textarea
          id="challenge"
          name="challenge"
          rows={4}
          value={form.challenge}
          onChange={handleChange}
          placeholder="Tell us a bit about your goals..."
          className="w-full rounded-lg bg-navy-600 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-orange focus:outline-none transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 text-center">{error}</p>
      )}
      <button type="submit" className="btn-primary w-full" disabled={sending}>
        {sending ? 'Sending…' : 'Get Your Free SEO Audit'}
        <IconArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-slate-500 text-center">
        No spam, ever. We respond within 24 hours — no hard sell.
      </p>
    </form>
  )
}
