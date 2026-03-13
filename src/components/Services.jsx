import React from 'react'
import {
  Target,
  Funnel,
  MessageCircleMore,
  Users,
  ChartColumnBig,
  Video,
  MapPinned,
  FileText,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { cardVariants, sectionVariants, sectionViewport, softHover, staggerContainer } from '../lib/motion'

const services = [
  {
    icon: Target,
    title: 'Admission Campaign Management',
    desc: 'Google Search ads for admissions and Meta Ads targeting parents and students - from NEET counseling to MBA batch launches.',
  },
  {
    icon: Funnel,
    title: 'Student Lead Generation Funnels',
    desc: 'Conversion-optimised admission landing pages that turn ad clicks into qualified student leads.',
  },
  {
    icon: MessageCircleMore,
    title: 'WhatsApp Inquiry Nurturing',
    desc: 'Automated WhatsApp marketing for admissions - instant replies, follow-ups, and campus tour invites.',
  },
  {
    icon: Users,
    title: 'Parent-Focused Digital Advertising',
    desc: 'Instagram and Facebook ads for educational institutions targeting parents by location, age, and interest.',
  },
  {
    icon: ChartColumnBig,
    title: 'Enrollment Tracking & CRM Integration',
    desc: 'Real-time dashboards showing cost per enrollment, lead quality, and admission conversion rate.',
  },
  {
    icon: Video,
    title: 'Campus Video Production & Testimonials',
    desc: 'Campus tour videos, student testimonial videos, and faculty introduction videos that build trust fast.',
  },
  {
    icon: MapPinned,
    title: 'Local SEO & Google Business Optimization',
    desc: 'Rank on Google Maps and local search when parents look for colleges or coaching institutes near them.',
  },
  {
    icon: FileText,
    title: 'Brochure & Marketing Collateral',
    desc: 'Admission brochures, scholarship announcement campaigns, and open house event materials - print and digital.',
  },
]

function Services() {
  return (
    <motion.section
      className="bg-[#0d1f1a] py-[60px] md:py-[88px]"
      id="services"
      aria-label="Our admission marketing services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div className="mx-auto mb-[52px] max-w-[680px] text-center" variants={sectionVariants}>
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">Admission Marketing Services for Schools, Colleges & Coaching Institutes</h2>
          <p className="text-base leading-7 text-white/65">A complete enrollment growth system built exclusively for educational institutions across India.</p>
        </motion.div>
        <motion.div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={sectionViewport}>
          {services.map((svc, i) => (
            <motion.article className="transform-gpu will-change-transform rounded-[12px] border border-white/10 bg-[#253e35] p-[22px] pt-[26px]" key={i} variants={cardVariants} whileHover={softHover}>
              <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-[8px] border border-[rgba(226,254,165,0.25)] bg-[rgba(226,254,165,0.12)] text-[#e2fea5]">
                <svc.icon className="h-5 w-5" aria-hidden="true" strokeWidth={2.2} />
              </div>
              <h3 className="mb-[7px] text-[0.95rem] font-bold text-white">{svc.title}</h3>
              <p className="text-[0.85rem] leading-[1.6] text-white/65">{svc.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services
