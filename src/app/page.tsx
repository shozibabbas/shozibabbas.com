import AboutPreview from '@/sections/about-preview'
import FeaturedWork from '@/sections/featured-work'
import FinalCTA from '@/sections/final-cta'
import Hero from '@/sections/hero'
import HowIWork from '@/sections/how-i-work'
import Services from '@/sections/services'
import TrustStrip from '@/sections/trust-strip'
import UIPreview from '@/sections/ui-preview'

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-28">
      <Hero />
      <TrustStrip />
      <Services />
      <FeaturedWork />
      <UIPreview />
      <HowIWork />
      <AboutPreview />
      <FinalCTA />
    </div>
  )
}
