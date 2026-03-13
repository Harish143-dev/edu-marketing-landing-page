import React from 'react'
import { MessageCircleMore, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardVariants, sectionVariants, sectionViewport, staggerContainer } from '../lib/motion'

function CTABanner() {
  return (
    <motion.section
      className="relative overflow-hidden border-y border-white/10 bg-[#173229] py-20 text-center"
      id="cta"
      aria-label="Get started with EyeLevel Growth Studio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(226,254,165,0.06)_0%,transparent_70%)]" />
      <motion.div className="relative z-[1] mx-auto max-w-[1200px] px-[18px] md:px-7" variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
        <motion.h2 className="mb-3 font-['Dela_Gothic_One'] text-[1.6rem] text-white md:text-[clamp(1.8rem,4vw,2.6rem)]" variants={cardVariants}>
          Ready to <em className="not-italic text-[#e2fea5]">Fill Every Seat</em> This Admission Season?
        </motion.h2>
        <motion.p className="mx-auto mb-9 max-w-[520px] text-base text-white/78" variants={cardVariants}>
          Talk to our education marketing specialists. We&apos;ll show you exactly how to reduce cost per admission and grow enrollment - free, no commitment.
        </motion.p>
        <motion.div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap" variants={cardVariants}>
          <motion.a
            href="tel:+919789099499"
            className="inline-flex w-full max-w-[300px] items-center justify-center rounded-[8px] bg-white px-8 py-4 text-base font-bold text-[#0d1f1a] transition hover:bg-[#e2fea5] sm:w-auto sm:max-w-none"
            aria-label="Call EyeLevel Growth Studio at +91 97890 99499"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneCall className="mr-2 h-5 w-5" strokeWidth={2.2} />
            Call +91 97890 99499
          </motion.a>
          <motion.a
            href="https://wa.me/919789099499?text=Hi%20EyeLevel%2C%20I%27d%20like%20a%20free%20admission%20marketing%20audit%20for%20my%20institution."
            className="inline-flex w-full max-w-[300px] items-center justify-center rounded-[8px] bg-[#4ade80] px-8 py-4 text-base font-semibold text-[#0d1f1a] transition hover:bg-[#22c55e] sm:w-auto sm:max-w-none"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with EyeLevel on WhatsApp"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircleMore className="mr-2 h-5 w-5" strokeWidth={2.2} />
            WhatsApp Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default CTABanner
