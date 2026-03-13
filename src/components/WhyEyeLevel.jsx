import React from 'react'
import { GraduationCap, PanelsTopLeft, CalendarClock, LineChart, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { cardVariants, sectionVariants, sectionViewport, softHover, staggerContainer } from '../lib/motion'

const bullets = [
  {
    icon: GraduationCap,
    title: 'Education-Only Agency',
    desc: 'We work exclusively with schools, colleges, and coaching institutes - no generalist guesswork, ever.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Full-Funnel Admission Campaigns',
    desc: 'YouTube, Instagram, Google Search ads, admission landing pages, WhatsApp nurturing - the complete student acquisition funnel.',
  },
  {
    icon: CalendarClock,
    title: 'Built for Admission Season Timelines',
    desc: 'We know JOSAA counseling, NEET admissions, JEE coaching, and late-season admission push windows. Campaigns launch in 48 hours.',
  },
  {
    icon: LineChart,
    title: 'Transparent ROI Reporting',
    desc: 'Weekly dashboards showing cost per enrollment, student lead quality, and real ROI of education marketing.',
  },
]

const stats = [
  { number: 'Edu', label: 'Sector-Only Focus' },
  { number: 'Fast', label: 'Campaign Setup' },
  { number: 'Clear', label: 'Weekly Reporting' },
  { number: 'Full', label: 'Funnel Coverage' },
]

function WhyEyeLevel() {
  return (
    <motion.section
      className="bg-[#173229] py-[60px] md:py-[88px]"
      id="why-eyelevel"
      aria-label="Why choose EyeLevel Growth Studio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div className="mx-auto mb-[52px] max-w-[680px] text-center" variants={sectionVariants}>
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">
            Chennai&apos;s Specialist Education Marketing Agency
          </h2>
          <p className="text-base leading-7 text-white/65">
            Built for schools, colleges, coaching institutes, and preschools that need a clear admissions marketing system instead of generic campaign management.
          </p>
        </motion.div>
        <div className="grid items-center gap-[32px] lg:grid-cols-2 lg:gap-[52px]">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
            <ul className="list-none">
              {bullets.map((item, i) => (
                <motion.li className="mb-[26px] flex items-start gap-3.5" key={i} variants={cardVariants} whileHover={{ x: 6, transition: { duration: 0.25 } }}>
                  <span className="mt-0.5 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[rgba(226,254,165,0.25)] bg-[rgba(226,254,165,0.12)] text-[#e2fea5]" aria-hidden="true">
                    <item.icon className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h4 className="mb-[5px] text-[0.95rem] font-bold text-white">{item.title}</h4>
                    <p className="text-[0.85rem] leading-[1.6] text-white/65">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {stats.map((s, i) => (
                <motion.div className="transform-gpu will-change-transform rounded-[12px] border border-white/10 bg-[#253e35] p-7 text-center" key={i} variants={cardVariants} whileHover={softHover}>
                  <div className="mb-3 flex justify-center text-[#e2fea5]"><CheckCircle2 className="h-6 w-6" strokeWidth={2.2} /></div>
                  <div className="mb-1.5 font-['Dela_Gothic_One'] text-[2.2rem] leading-none text-[#e2fea5]">{s.number}</div>
                  <div className="text-[0.82rem] font-medium leading-[1.4] text-white/50">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default WhyEyeLevel
