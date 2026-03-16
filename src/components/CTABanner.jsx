import React from "react";
import { MessageCircleMore, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";

function CTABanner() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#163027] py-[72px] md:py-[100px]"
      id="cta"
      aria-label="Get started with EyeLevel Growth Studio"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(208,233,153,0.07)_0%,transparent_65%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-[18px] md:px-7"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
      >
        {/* Inner card */}
        <div className="mx-auto max-w-[850px] overflow-hidden rounded-[24px] border border-white/10 bg-[#132820] px-8 py-12 text-center md:px-14 md:py-16">
          <motion.h2
            className="mb-4 font-['Dela_Gothic_One'] text-2xl leading-[1.15] text-white md:text-4xl"
            variants={cardVariants}
          >
            Ready to{" "}
            <em className="not-italic text-[#e2fea5]">Fill Every Seat</em> This
            Admission Season?
          </motion.h2>

          <motion.p
            className="mx-auto mb-10 max-w-[460px] text-base leading-7 text-white/55"
            variants={cardVariants}
          >
            Talk to our education marketing specialists. We'll show you exactly
            how to reduce cost per admission and grow enrollment — free, no
            commitment.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
            variants={cardVariants}
          >
            {/* Call button */}
            <motion.a
              href="tel:+919789099499"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-[#d0e999] px-7 py-4 text-[0.95rem] font-bold text-[#0d1f1a] transition-all hover:bg-white sm:w-auto"
              aria-label="Call EyeLevel Growth Studio at +91 97890 99499"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <PhoneCall className="h-4 w-4 shrink-0" strokeWidth={2.3} />
              Call +91 97890 99499
            </motion.a>

            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/919789099499?text=Hi%20EyeLevel%2C%20I%27d%20like%20a%20free%20admission%20marketing%20audit%20for%20my%20institution."
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-[10px] border border-[#4ade80]/25 bg-[#4ade80]/10 px-7 py-4 text-[0.95rem] font-semibold text-[#4ade80] transition-all hover:border-[#4ade80]/50 hover:bg-[#4ade80]/20 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with EyeLevel on WhatsApp"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircleMore
                className="h-4 w-4 shrink-0"
                strokeWidth={2.3}
              />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default CTABanner;
