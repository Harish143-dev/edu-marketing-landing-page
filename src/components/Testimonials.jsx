import React from "react";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";

const testimonials = [
  {
    quote:
      "We needed a clearer admissions funnel and faster follow-up for parent inquiries. EyeLevel helped structure the campaign and simplify what our admissions team should track each week.",
    name: "Admissions Lead",
    role: "School Client, Chennai",
    initials: "AL",
    // Tilt only on lg+; neutral on mobile so cards stack cleanly
    rotate: "-3.5deg",
    translateY: "12px",
    accentBg: "rgba(208,233,153,0.09)",
    accentBorder: "rgba(208,233,153,0.18)",
    avatarBg: "rgba(208,233,153,0.15)",
    avatarBorder: "rgba(208,233,153,0.35)",
  },
  {
    quote:
      "The biggest improvement was moving away from generic ads to messaging designed around admissions intent. That gave our team a more usable pipeline to work with.",
    name: "Marketing Manager",
    role: "Preschool Group, Tamil Nadu",
    initials: "MM",
    rotate: "0deg",
    translateY: "-20px",
    accentBg: "rgba(255,255,255,0.04)",
    accentBorder: "rgba(255,255,255,0.13)",
    avatarBg: "rgba(255,255,255,0.08)",
    avatarBorder: "rgba(255,255,255,0.2)",
  },
  {
    quote:
      "WhatsApp follow-up and landing page changes made the inquiry process much more organized. Our counselors now spend less time sorting cold leads manually.",
    name: "Program Coordinator",
    role: "College Client, Coimbatore",
    initials: "PC",
    rotate: "3.5deg",
    translateY: "12px",
    accentBg: "rgba(208,233,153,0.07)",
    accentBorder: "rgba(208,233,153,0.14)",
    avatarBg: "rgba(208,233,153,0.12)",
    avatarBorder: "rgba(208,233,153,0.28)",
  },
];

function TestimonialCard({ t, index }) {
  return (
    <motion.article
      variants={cardVariants}
      // On mobile: no tilt (looks broken in single-col stack).
      // On lg+: restore the decorative tilt via CSS custom properties.
      style={{
        background: t.accentBg,
        border: `1px solid ${t.accentBorder}`,
        // CSS vars read by the lg media-query class below
        "--card-rotate": t.rotate,
        "--card-ty": t.translateY,
      }}
      whileHover={{
        rotate: "0deg",
        translateY: "-8px",
        scale: 1.025,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      // `lg-tilt` is a tiny utility defined in the className — we handle
      // the actual tilt via an inline style override at lg via the wrapper.
      className="relative flex cursor-default flex-col overflow-hidden rounded-[18px] p-5 will-change-transform sm:rounded-[22px] sm:p-7"
    >
      {/* Stars */}
      <div className="mb-4 flex gap-0.5 sm:mb-5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star
            key={s}
            className="h-3 w-3 fill-[#e2fea5] text-[#e2fea5] sm:h-3.5 sm:w-3.5"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-5 flex-1 text-sm leading-[1.8] text-white/70 sm:leading-[1.85]">
        "{t.quote}"
      </blockquote>

      {/* Divider */}
      <div className="mb-4 h-px bg-white/[0.07] sm:mb-5" />

      {/* Footer */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-bold text-[#e2fea5] sm:h-[42px] sm:w-[42px] sm:text-[0.85rem]"
          style={{
            background: t.avatarBg,
            border: `1px solid ${t.avatarBorder}`,
          }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <div className="text-[0.88rem] font-semibold text-white sm:text-[0.9rem]">
            {t.name}
          </div>
          <div className="text-[0.75rem] text-white/65 sm:text-[0.78rem]">
            {t.role}
          </div>
        </div>
      </div>

      {/* Decorative quote mark */}
      <span
        className="pointer-events-none absolute -bottom-0 right-5 select-none leading-none"
        style={{ color: "rgba(208,233,153,0.06)" }}
        aria-hidden="true"
      >
        <Quote className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.5} />
      </span>
    </motion.article>
  );
}

function Testimonials() {
  return (
    <motion.section
      className="overflow-hidden bg-[#163027] py-[48px] sm:py-[60px] md:py-[88px]"
      id="testimonials"
      aria-label="Client testimonials and results"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-8 max-w-[680px] text-center sm:mb-10 md:mb-[52px]"
          variants={sectionVariants}
        >
          <h2 className="mb-3 font-['Dela_Gothic_One'] text-[1.5rem] leading-[1.2] text-white sm:text-2xl sm:mb-3.5 md:text-4xl md:leading-[1.15]">
            How Education Teams Describe Working With EyeLevel
          </h2>
          <p className="text-[0.9rem] leading-7 text-white/65 sm:text-base">
            Representative feedback focused on process, clarity, and admissions
            workflow improvements.
          </p>
        </motion.div>

        {/* Cards grid
            - mobile:  single column, no tilt
            - sm/md:   2-col grid, no tilt
            - lg+:     3-col grid with decorative tilt restored inline
        ── */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {testimonials.map((t, i) => (
            // Wrapper applies tilt only at lg+ so the card itself stays
            // layout-agnostic at smaller breakpoints.
            <div
              key={i}
              className="lg:[transform:rotate(var(--card-rotate))_translateY(var(--card-ty))]"
              style={{
                "--card-rotate": t.rotate,
                "--card-ty": t.translateY,
              }}
            >
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
