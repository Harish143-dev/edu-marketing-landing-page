import React from 'react'
import { ClipboardCheck, Rocket, UsersRound, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardVariants, sectionVariants, sectionViewport, softHover, staggerContainer } from '../lib/motion'

const steps = [
  {
    num: 1,
    icon: ClipboardCheck,
    title: 'Free Admission Audit',
    desc: 'We review your campaigns and enrollment data, then show you exactly where you\'re losing inquiries.',
  },
  {
    num: 2,
    icon: Rocket,
    title: 'Custom Strategy & Launch',
    desc: 'Admission landing page, Google Ads, Meta Ads, and WhatsApp workflows - live within 48 hours.',
  },
  {
    num: 3,
    icon: UsersRound,
    title: 'Qualified Leads Flow In',
    desc: 'Targeted campaigns reach parents and students. Every inquiry is tracked and nurtured automatically.',
  },
  {
    num: 4,
    icon: TrendingUp,
    title: 'Optimize & Scale Enrollment',
    desc: 'We optimise based on real cost per enrollment data and scale what fills your seats fastest.',
  },
]

function Process() {
  return (
    <motion.section
      className="bg-[#0d1f1a] py-[60px] md:py-[88px]"
      id="process"
      aria-label="How our education marketing process works"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div className="mx-auto mb-[52px] max-w-[680px] text-center" variants={sectionVariants}>
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">
            From First Call to First Inquiry - Your Enrollment Growth System
          </h2>
          <p className="text-base leading-7 text-white/65">How we build your student lead generation funnel and fill seats this admission season.</p>
        </motion.div>
        <motion.div className="relative grid gap-5 md:grid-cols-2 xl:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
          {steps.map((step, i) => (
            <motion.div className="transform-gpu will-change-transform relative rounded-[12px] border border-white/10 bg-[#253e35] p-7 text-center" key={i} variants={cardVariants} whileHover={softHover}>
              <div className="relative z-[2] mx-auto mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#e2fea5] text-[#0d1f1a]" aria-label={`Step ${step.num}`}>
                <step.icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              {i < steps.length - 1 && (
                <span className="absolute right-[-14px] top-1/2 hidden h-px w-[28px] -translate-y-1/2 bg-[rgba(226,254,165,0.22)] xl:block" aria-hidden="true" />
              )}
              <h3 className="mb-2 text-[0.95rem] font-bold text-white">{step.title}</h3>
              <p className="text-[0.83rem] leading-[1.65] text-white/78">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Process
