import React from "react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";
import eyelevelLogo from "../assets/logo.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Why EyeLevel", href: "#why-eyelevel" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

function Footer() {
  return (
    <motion.footer
      className="border-t border-white/[0.07] bg-[#0d1f1a] pb-8 pt-16"
      role="contentinfo"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div
          className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {/* Left: brand */}
          <motion.div className="max-w-[320px]" variants={cardVariants}>
            <div className="mb-4 flex items-center gap-3">
              <img
                src={eyelevelLogo}
                alt="EyeLevel Growth Studio Logo"
                className="h-[30px] w-auto"
              />
            </div>
            <p className="text-[0.87rem] leading-[1.75] text-white/45">
              Chennai's only digital marketing agency built exclusively for
              education — helping schools, colleges, coaching institutes, and
              preschools fill seats every admission season.
            </p>
          </motion.div>

          {/* Right: nav + contact */}
          <motion.div
            className="flex flex-col gap-10 sm:flex-row sm:gap-16"
            variants={cardVariants}
          >
            {/* Nav links */}
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
                Navigation
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <motion.a
                      href={l.href}
                      className="text-[0.88rem] text-white/50 transition-colors hover:text-[#e2fea5]"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-white/30">
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  {
                    label: "hello@eyelevelstudio.in",
                    href: "mailto:hello@eyelevelstudio.in",
                  },
                  { label: "+91 97890 99499", href: "tel:+919789099499" },
                  {
                    label: "theeyelevelstudio.com",
                    href: "https://theeyelevelstudio.com",
                    external: true,
                  },
                ].map((c) => (
                  <li key={c.label}>
                    <motion.a
                      href={c.href}
                      className="text-[0.88rem] text-white/50 transition-colors hover:text-[#e2fea5]"
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {c.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row"
          variants={cardVariants}
        >
          <p className="text-[0.78rem] text-white/30">
            © {new Date().getFullYear()} EyeLevel Growth Studio. All rights
            reserved.
          </p>
          <p className="text-[0.78rem] text-white/30">Chennai, India</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
