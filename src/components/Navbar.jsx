import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { fadeIn } from "../lib/motion";
import eyelevelLogo from "../assets/logo.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-eyelevel", label: "Why EyeLevel" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowCta(!entry.isIntersecting),
      { root: null, threshold: 0 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[1000] border-b border-white/10 bg-[#0d1f1a]/92 backdrop-blur-[12px]"
        role="banner"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto flex min-h-[72px] w-full justify-between max-w-[1200px] items-center px-[18px] md:px-7">
          {/* ── Logo (fixed left) ── */}
          <motion.a
            href="#hero"
            className="flex shrink-0 items-center gap-2.5 text-[1.15rem] text-white"
            aria-label="EyeLevel Growth Studio home"
            whileHover={{ scale: 1.03 }}
            onClick={handleLinkClick}
          >
            <img
              src={eyelevelLogo}
              alt="EyeLevel Growth Studio Logo"
              className="h-[32px] w-auto md:h-[42px]"
            />
          </motion.a>
          {/* ── Desktop nav ──
              When CTA is hidden (hero visible): justify-end → links sit on the right
              When CTA is shown (hero gone):     justify-center → links center between logo & CTA ── */}
          <nav
            className={`hidden flex-1 md:flex transition-all duration-300 ${showCta ? "justify-center" : "justify-end"}`}
            aria-label="Primary navigation"
          >
            <ul
              className={`flex items-center gap-6 text-[0.92rem] text-white/78 transition-all duration-300`}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#e2fea5]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Right slot ── */}
          <div className=" flex shrink-0 items-center gap-3">
            {/* Desktop CTA — slides in from right when hero exits viewport */}
            <AnimatePresence>
              {showCta && (
                <motion.a
                  href="#contact-form"
                  className="hidden md:inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#e2fea5] px-[18px] py-[9px] text-[0.85rem] font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a] hover:shadow-[0_4px_16px_rgba(226,254,165,0.25)]"
                  aria-label="Get a free consultation for your institution"
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.95 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Consultation
                </motion.a>
              )}
            </AnimatePresence>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-end text-white transition hover:text-[#e2fea5] md:hidden"
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

        {/* ── Mobile nav drawer ── */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-nav"
              className="border-t border-white/10 bg-[#10251f] px-[18px] py-4 md:hidden"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ul className="flex flex-col gap-1 text-[0.95rem] text-white/82">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-[8px] px-3 py-2.5 transition hover:bg-white/5 hover:text-[#e2fea5]"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}

                {/* Mobile CTA — animates in once hero is scrolled past */}
                <AnimatePresence>
                  {showCta && (
                    <motion.li
                      className="pt-3"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                    >
                      <a
                        href="#contact-form"
                        className="inline-flex w-full items-center justify-center rounded-[8px] bg-[#e2fea5] px-[18px] py-[11px] text-[0.9rem] font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a]"
                        onClick={handleLinkClick}
                      >
                        Get Free Consultation
                      </a>
                    </motion.li>
                  )}
                </AnimatePresence>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;
