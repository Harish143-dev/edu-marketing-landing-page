import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeIn } from "../lib/motion";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-eyelevel", label: "Why EyeLevel" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="absolute left-[-9999px] z-[2000] rounded bg-[#e2fea5] px-4 py-2 text-[#0d1f1a] font-semibold focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <motion.header
      className="fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-[#0d1f1a]/92 backdrop-blur-[12px]"
      role="banner"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto grid min-h-[72px] w-full max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-4 px-[18px] md:px-7">
        <div className="flex items-center">
          <motion.a
            href="#hero"
            className="flex items-center gap-2.5 text-[1.15rem] text-white"
            aria-label="EyeLevel Growth Studio home"
            whileHover={{ scale: 1.03 }}
            onClick={handleLinkClick}
          >
            <img
              src="/logo.png"
              alt="EyeLevel Growth Studio Logo"
              className="h-[28px] md:h-[32px] md:h-[36px] w-auto"
            />
          </motion.a>
        </div>

        <nav
          className="hidden justify-self-center md:block"
          aria-label="Primary navigation"
        >
          <ul className="flex items-center justify-center gap-6 text-[0.92rem] text-white/78">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-[#e2fea5]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <motion.a
            href="#contact-form"
            className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#e2fea5] px-[18px] py-[9px] text-[0.85rem] font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a] hover:shadow-[0_4px_16px_rgba(226,254,165,0.25)]"
            aria-label="Get a free consultation for your institution"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
          </motion.a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-[#e2fea5] md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X size={18} strokeWidth={2.2} />
            ) : (
              <Menu size={18} strokeWidth={2.2} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            id="mobile-nav"
            className="border-t border-white/10 bg-[#10251f] px-[18px] py-4 md:hidden"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-3 text-[0.95rem] text-white/82">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-[8px] px-2 py-2 transition hover:bg-white/5 hover:text-[#e2fea5]"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact-form"
                  className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#e2fea5] px-[18px] py-[11px] text-[0.9rem] font-semibold text-[#0d1f1a]"
                  onClick={handleLinkClick}
                >
                  Get Free Consultation
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
    </>
  );
}

export default Navbar;
