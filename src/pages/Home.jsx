import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import PricingPreview from '../components/PricingPreview'
import CTABanner from '../components/CTABanner'

export default function Home() {
  const location = useLocation()

  // Smooth-scroll to a section if arriving with a #hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <>
      <Hero />
      <ServicesPreview />
      <About />
      <Testimonials />
      <PricingPreview />
      <CTABanner />
    </>
  )
}
