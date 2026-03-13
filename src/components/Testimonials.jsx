import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  softHover,
  staggerContainer,
} from "../lib/motion";

const testimonials = [
  {
    quote:
      "We needed a clearer admissions funnel and faster follow-up for parent inquiries. EyeLevel helped structure the campaign and simplify what our admissions team should track each week.",
    name: "Admissions Lead",
    role: "School Client, Chennai",
    initials: "AL",
  },
  {
    quote:
      "The biggest improvement was moving away from generic ads to messaging designed around admissions intent. That gave our team a more usable pipeline to work with.",
    name: "Marketing Manager",
    role: "Preschool Group, Tamil Nadu",
    initials: "MM",
  },
  {
    quote:
      "WhatsApp follow-up and landing page changes made the inquiry process much more organized. Our counselors now spend less time sorting cold leads manually.",
    name: "Program Coordinator",
    role: "College Client, Coimbatore",
    initials: "PC",
  },
];

function Testimonials() {
  return (
    <motion.section
      className="bg-[#0d1f1a] py-[60px] md:py-[88px]"
      id="testimonials"
      aria-label="Client testimonials and results"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div
          className="mx-auto mb-[52px] max-w-[680px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">
            How Education Teams Describe Working With EyeLevel
          </h2>
          <p className="text-base leading-7 text-white/65">
            Representative feedback focused on process, clarity, and admissions
            workflow improvements.
          </p>
        </motion.div>
        <motion.div
          className="grid gap-5 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {testimonials.map((t, i) => (
            <motion.article
              className="transform-gpu will-change-transform rounded-[12px] border border-white/10 bg-[#253e35] p-7"
              key={i}
              variants={cardVariants}
              whileHover={softHover}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div
                  className="flex items-center gap-1 text-[#e2fea5]"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-3.5 w-3.5 fill-current"
                      strokeWidth={1.8}
                    />
                  ))}
                </div>
              </div>
              <blockquote className="mb-5 text-[0.92rem] leading-7 italic text-white/78">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[rgba(226,254,165,0.3)] bg-[rgba(226,254,165,0.12)] text-[0.85rem] font-bold text-[#e2fea5]"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.9rem] font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-[0.78rem] text-white/65">{t.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
