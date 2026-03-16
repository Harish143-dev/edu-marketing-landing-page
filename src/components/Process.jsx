import React from "react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";

const steps = [
  {
    num: "01",
    title: "Free Admission Audit",
    desc: "We review your campaigns and enrollment data, then show you exactly where you're losing inquiries.",
  },
  {
    num: "02",
    title: "Custom Strategy & Launch",
    desc: "Admission landing page, Google Ads, Meta Ads, and WhatsApp workflows — live within 48 hours.",
  },
  {
    num: "03",
    title: "Qualified Leads Flow In",
    desc: "Targeted campaigns reach parents and students. Every inquiry is tracked and nurtured automatically.",
  },
  {
    num: "04",
    title: "Optimize & Scale Enrollment",
    desc: "We optimise based on real cost per enrollment data and scale what fills your seats fastest.",
  },
];

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
        {/* Header */}
        <motion.div
          className="mx-auto mb-16 max-w-[600px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-4 font-['Dela_Gothic_One'] text-2xl leading-[1.1] text-white md:text-4xl">
            From First Call to First Inquiry - Your Enrollment Growth System
          </h2>
          <p className="text-base leading-7 text-white/55">
            How we build your student lead generation funnel and fill seats this
            admission season.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="group relative"
              variants={cardVariants}
            >
              {/* Number + fade overlay stacked */}
              <div className="relative">
                {/* Giant number */}
                <span
                  className="block font-['Dela_Gothic_One'] text-[5.5rem] leading-[1] text-[#d0e999] md:text-[6.5rem] opacity-20"
                  aria-hidden="true"
                >
                  {step.num}
                </span>

                {/* Gradient fade — covers bottom 60% of the number */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%]"
                  style={{
                    background:
                      "linear-gradient(to top, #0d1f1a 30%, transparent 100%)",
                  }}
                />
              </div>

              {/* Text — overlaps slightly over the faded number */}
              <div className="-mt-3 relative z-10">
                <h3 className="mb-3 font-['Dela_Gothic_One'] text-[1.15rem] leading-snug text-white md:text-[1.25rem]">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] leading-[1.75] text-white/55">
                  {step.desc}
                </p>
              </div>

              {/* Bottom divider */}
              <div className="mt-7 h-px w-full bg-white/[0.07]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Process;
