import React from "react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";

function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 bg-[#0d1f1a] px-0 pb-6 pt-11 text-white/50"
      role="contentinfo"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div
          className="flex flex-col items-center gap-3.5 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          <motion.div
            className="font-['Dela_Gothic_One'] text-[1.25rem] text-white flex items-center gap-5"
            variants={cardVariants}
          >
            <img
              src="/logo.png"
              alt="EyeLevel Growth Studio Logo"
              className="h-[28px] md:h-[32px] md:h-[36px] w-auto"
            />
            <h2>
              EyeLevel <span className="text-[#e2fea5]">Growth Studio</span>
            </h2>
          </motion.div>
          <motion.p
            className="max-w-[460px] text-[0.88rem] text-white/50"
            variants={cardVariants}
          >
            Chennai&apos;s only digital marketing agency built exclusively for
            education - helping schools, colleges, coaching institutes, and
            preschools fill seats every admission season.
          </motion.p>
          <motion.div
            className="mt-1.5 flex flex-wrap justify-center gap-6"
            variants={cardVariants}
          >
            <motion.a
              className="text-[0.88rem] text-white/50 transition hover:text-[#e2fea5]"
              href="mailto:hello@eyelevelstudio.in"
              aria-label="Email EyeLevel Growth Studio"
              whileHover={{ y: -2 }}
            >
              hello@eyelevelstudio.in
            </motion.a>
            <motion.a
              className="text-[0.88rem] text-white/50 transition hover:text-[#e2fea5]"
              href="tel:+919789099499"
              aria-label="Call EyeLevel Growth Studio"
              whileHover={{ y: -2 }}
            >
              +91 97890 99499
            </motion.a>
            <motion.a
              className="text-[0.88rem] text-white/50 transition hover:text-[#e2fea5]"
              href="https://theeyelevelstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit EyeLevel Growth Studio website"
              whileHover={{ y: -2 }}
            >
              theeyelevelstudio.com
            </motion.a>
          </motion.div>
          <motion.div
            className="my-[22px] h-px w-full bg-white/10"
            variants={cardVariants}
          />
          <motion.p
            className="text-center text-[0.78rem] text-white/50"
            variants={cardVariants}
          >
            &copy; {new Date().getFullYear()} EyeLevel Growth Studio. All rights
            reserved. Chennai, India.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
