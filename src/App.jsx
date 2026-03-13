import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Services from './components/Services'
import WhyEyeLevel from './components/WhyEyeLevel'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PainPoints />
        <Services />
        <WhyEyeLevel />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
