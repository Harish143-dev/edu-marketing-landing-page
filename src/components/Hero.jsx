import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import InquiryForm from './InquiryForm'
import { cardVariants, sectionVariants, staggerContainer } from '../lib/motion'

function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const trustItems = [
    'Education-Only Focus',
    'Google & Meta Certified',
    'No Long-Term Lock-in',
    'Results in 30 Days',
  ]

  return (
    <section className="relative overflow-hidden bg-[#0d1f1a] pb-[72px] pt-[132px]" id="hero" aria-label="Hero section">
      <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[500px] w-[700px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(226,254,165,0.06)_0%,transparent_70%)]" />
      <div className="relative z-[1] mx-auto grid max-w-[1200px] items-start gap-[52px] px-[18px] md:px-7 lg:grid-cols-[minmax(0,1fr)_400px]">
        <motion.div
          className="max-w-[620px]"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span className="mb-[22px] inline-block rounded-full border border-[rgba(226,254,165,0.25)] bg-[rgba(226,254,165,0.12)] px-[14px] py-[6px] text-[0.78rem] font-semibold uppercase tracking-[0.4px] text-[#e2fea5]" variants={cardVariants}>
            Education Specialist Agency <span className='hidden md:inline'>- Chennai</span>
          </motion.span>
          <motion.h1 variants={sectionVariants}>
            <span className="mb-[22px] block font-['Dela_Gothic_One'] text-[2.1rem] leading-[1.1] text-white md:text-[clamp(2.2rem,5vw,3.6rem)]">
              Stop Losing Admissions.<br />
              <span className="text-[#e2fea5]">Start Filling Seats.</span>
            </span>
          </motion.h1>
          <motion.p className="mb-[34px] max-w-[520px] text-base leading-7 text-white/78 md:text-[1.05rem]" variants={cardVariants}>
            Chennai&apos;s specialist admissions marketing agency for schools, colleges, coaching institutes &amp; preschools.
            We run high-converting admission campaigns that fill seats - every season.
          </motion.p>
          <motion.div className="mb-[38px] flex flex-col gap-3.5 sm:flex-row sm:flex-wrap" variants={cardVariants}>
            {/* <motion.a
              href="#contact-form"
              className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#e2fea5] px-8 py-4 text-base font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a] hover:shadow-[0_4px_16px_rgba(226,254,165,0.25)] sm:w-auto"
              aria-label="Book a free strategy call with EyeLevel"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Free Strategy Call
            </motion.a> */}
            <motion.a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-[8px] border-[1.5px] border-[rgba(226,254,165,0.25)] bg-transparent px-8 py-4 text-base font-semibold text-[#e2fea5] transition hover:border-[#e2fea5] hover:bg-[rgba(226,254,165,0.12)] sm:w-auto"
              aria-label="See how our admission marketing services work"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See How It Works
            </motion.a>
          </motion.div>
          <motion.div className="flex flex-wrap gap-5" aria-label="Trust signals" variants={staggerContainer}>
            {trustItems.map((item) => (
              <motion.span className="flex items-center gap-[7px] text-[0.82rem] font-medium text-white/70" key={item} variants={cardVariants}>
                <span className="text-[0.9rem] font-bold text-[#e2fea5]" aria-hidden="true">&#10003;</span>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div id="contact-form" className="hidden lg:block">
          <motion.div
            className="transform-gpu will-change-transform"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.35, ease: 'easeOut' }
                : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <InquiryForm id="inquiry" animateOnView={false} hoverLift={false} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className=" py-[50px] mt-5 lg:hidden"
        id="contact-form"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
          <InquiryForm id="inquiry-mobile" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
