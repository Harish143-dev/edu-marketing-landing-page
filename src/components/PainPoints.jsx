import React from 'react'
import {
  AlertTriangle,
  IndianRupee,
  MessageSquareOff,
  SearchX,
  MousePointerSquareDashed,
  BriefcaseBusiness,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cardVariants, sectionVariants, sectionViewport, softHover, staggerContainer } from '../lib/motion'

const painPoints = [
  {
    icon: AlertTriangle,
    title: 'Empty Seats During Admission Season',
    desc: 'No structured college admissions campaign means competitors fill seats while yours stay empty.',
  },
  {
    icon: IndianRupee,
    title: 'Ads Running, But Lead Quality is Poor',
    desc: 'Facebook ads for educational institutions bring wrong inquiries when run by generalist agencies without education expertise.',
  },
  {
    icon: MessageSquareOff,
    title: 'No Structured Inquiry Follow-Up',
    desc: 'Without WhatsApp lead nurture for colleges, inquiries go cold within 24 hours.',
  },
  {
    icon: SearchX,
    title: 'Competitors Ranking Higher on Google',
    desc: 'Poor local SEO for schools and colleges makes you invisible when parents are ready to decide.',
  },
  {
    icon: MousePointerSquareDashed,
    title: 'Traffic Sent to Homepage, Not a Landing Page',
    desc: 'Skipping college landing page optimization sends paid traffic to a page that does not convert.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Working with a Generalist Agency',
    desc: 'Agencies that serve every industry never understand admission season timing or student acquisition marketing.',
  },
]

function PainPoints() {
  return (
    <motion.section
      className="bg-[#173229] py-[60px] md:py-[88px]"
      id="pain-points"
      aria-label="Common challenges educational institutions face"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div className="mx-auto mb-[52px] max-w-[680px] text-center" variants={sectionVariants}>
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">Why Educational Institutions Struggle to Fill Seats</h2>
          <p className="text-base leading-7 text-white/65">Most colleges, schools, and coaching institutes face these exact challenges every admission season.</p>
        </motion.div>
        <motion.div className="grid gap-4 xl:grid-cols-2" variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
          {painPoints.map((item, i) => (
            <motion.article className="transform-gpu will-change-transform flex items-start gap-4 rounded-[12px] border border-white/10 border-l-[3px] border-l-[#ef4444] bg-[#253e35] p-6" key={i} variants={cardVariants} whileHover={softHover}>
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[8px] bg-[rgba(239,68,68,0.1)] text-[#f87171]">
                <item.icon className="h-5 w-5" aria-hidden="true" strokeWidth={2.2} />
              </div>
              <div>
                <h3 className="mb-[5px] text-[0.95rem] font-bold text-white">{item.title}</h3>
                <p className="text-[0.85rem] leading-[1.6] text-white/65">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PainPoints
