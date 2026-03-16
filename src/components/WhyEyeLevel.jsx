import React from "react";
import {
  GraduationCap,
  PanelsTopLeft,
  CalendarClock,
  LineChart,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  softHover,
  staggerContainer,
} from "../lib/motion";

function WhyEyeLevel() {
  return (
    <motion.section
      className="bg-[#163027] py-[60px] md:py-[88px]"
      id="why-eyelevel"
      aria-label="Why choose EyeLevel Growth Studio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        {/* Header */}
        <motion.div
          className="mx-auto mb-[52px] max-w-[680px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-2xl leading-[1.15] text-white md:text-4xl">
            Chennai's Specialist Education Marketing Agency
          </h2>
          <p className="text-base leading-7 text-white/65"></p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-12 md:grid-rows-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {/* Large featured block — spans 8 cols, 2 rows */}
          <motion.div
            className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/5 md:col-span-8 md:row-span-2"
            variants={cardVariants}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/whyEyelevel.jpeg')",
              }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-[#163027]/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#163027] via-[#163027]/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-12">
              <h3 className="mb-4 font-['Dela_Gothic_One'] text-sm md:text-base leading-tight text-[#d0e999]">
                Built for schools, colleges, coaching institutes, and preschools
                that need a clear admissions marketing system instead of generic
                campaign management.
              </h3>
            </div>
          </motion.div>
          {/* Card 1 — Education Only */}
          <motion.div
            className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#253e35] p-8 md:col-span-4"
            variants={cardVariants}
            whileHover={softHover}
          >
            <div className="space-y-3">
              <h3 className="font-['Dela_Gothic_One'] text-lg text-[#d0e999]">
                Education-Only Agency
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/65">
                We work exclusively with schools, colleges, and coaching
                institutes — no generalist guesswork, ever.
              </p>
            </div>
            <div className="mt-8 hidden lg:flex justify-end">
              <GraduationCap
                className="h-10 w-10 text-[#d0e999]/40"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* Card 2 — Full Funnel (accent) */}
          <motion.div
            className="flex flex-col justify-between rounded-2xl bg-[#d0e999] p-8 md:col-span-4"
            variants={cardVariants}
            whileHover={softHover}
          >
            <div className="space-y-3">
              <h3 className="font-['Dela_Gothic_One'] text-lg text-[#163027]">
                Full-Funnel Admission Campaigns
              </h3>
              <p className="text-sm font-medium leading-relaxed text-[#163027]/75">
                YouTube, Instagram, Google Search ads, admission landing pages,
                WhatsApp nurturing — the complete student acquisition funnel.
              </p>
            </div>
            <div className="mt-8 hidden lg:flex justify-end">
              <PanelsTopLeft
                className="h-10 w-10 text-[#163027]/20"
                strokeWidth={1.5}
              />
            </div>
          </motion.div>

          {/* Card 3 — Admission Season */}
          <motion.div
            className="flex items-center justify-center rounded-2xl border border-white/5 bg-[#253e35] p-8 md:col-span-6"
            variants={cardVariants}
            whileHover={softHover}
          >
            <div>
              <h3 className="mb-3 font-['Dela_Gothic_One'] text-lg text-[#d0e999]">
                Built for Admission Season Timelines
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                We know JOSAA counseling, NEET admissions, JEE coaching, and
                late-season admission push windows. Campaigns launch in 48
                hours.
              </p>
            </div>
            <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#163027]/50 lg:flex">
              <CalendarClock
                className="h-8 w-8 text-[#d0e999]"
                strokeWidth={1.8}
              />
            </div>
          </motion.div>

          {/* Card 4 — ROI Reporting */}
          <motion.div
            className="flex items-center gap-6 rounded-2xl border border-white/5 bg-[#253e35] p-8 md:col-span-6"
            variants={cardVariants}
            whileHover={softHover}
          >
            <div className="flex-1">
              <h3 className="mb-3 font-['Dela_Gothic_One']  text-lg text-[#d0e999]">
                Transparent ROI Reporting
              </h3>
              <p className="text-sm font-light leading-relaxed text-white/65">
                Weekly dashboards showing cost per enrollment, student lead
                quality, and real ROI of education marketing.
              </p>
            </div>
            <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#163027]/50 lg:flex">
              <LineChart className="h-8 w-8 text-[#d0e999]" strokeWidth={1.8} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default WhyEyeLevel;
