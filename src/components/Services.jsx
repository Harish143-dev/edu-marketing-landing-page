import React, { useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  sectionVariants,
  sectionViewport,
  staggerContainer,
  cardVariants,
} from "../lib/motion";

const services = [
  {
    num: "01",
    title: "Admission Campaign Management",
    desc: "Google Search ads for admissions and Meta Ads targeting parents and students - from NEET counseling to MBA batch launches.",
  },
  {
    num: "02",
    title: "Student Lead Generation Funnels",
    desc: "Conversion-optimised admission landing pages that turn ad clicks into qualified student leads.",
  },
  {
    num: "03",
    title: "WhatsApp Inquiry Nurturing",
    desc: "Automated WhatsApp marketing for admissions - instant replies, follow-ups, and campus tour invites.",
  },
  {
    num: "04",
    title: "Parent-Focused Digital Advertising",
    desc: "Instagram and Facebook ads for educational institutions targeting parents by location, age, and interest.",
  },
  {
    num: "05",
    title: "Enrollment Tracking & CRM Integration",
    desc: "Real-time dashboards showing cost per enrollment, lead quality, and admission conversion rate.",
  },
  {
    num: "06",
    title: "Campus Video Production",
    desc: "Campus tour videos, student testimonial videos, and faculty introduction videos that build trust fast.",
  },
  {
    num: "07",
    title: "Local SEO & Google Business",
    desc: "Rank on Google Maps and local search when parents look for colleges or coaching institutes near them.",
  },
  {
    num: "08",
    title: "Brochure & Marketing Collateral",
    desc: "Admission brochures, scholarship announcement campaigns, and open house event materials - print and digital",
  },
];

function ServiceRow({ item, onHover, onLeave, containerRef }) {
  const [hovered, setHovered] = useState(false);
  const rowRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
    // Calculate the vertical center of this row relative to the section container
    if (rowRef.current && containerRef.current) {
      const rowRect = rowRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const topRelative = rowRect.top - containerRect.top + rowRect.height / 2;
      onHover(item.image, topRelative);
    }
  };

  return (
    <motion.article
      ref={rowRef}
      className="group relative flex flex-wrap items-center justify-between border-b border-white/10 px-6 py-9 md:flex-nowrap"
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setHovered(false);
        onLeave();
      }}
      animate={{ backgroundColor: hovered ? "#253e35" : "transparent" }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="flex w-full items-center gap-8 md:w-auto md:gap-16">
        <motion.span
          className="font-['Dela_Gothic_One'] text-3xl md:text-5xl"
          animate={{ color: hovered ? "#d0e999" : "rgba(255,255,255,0.2)" }}
          transition={{ duration: 0.3 }}
        >
          {item.num}
        </motion.span>

        <div className="flex flex-col gap-1.5">
          <motion.h3
            className="text-xl font-bold md:text-2xl"
            animate={{ color: hovered ? "#d0e999" : "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            {item.title}
          </motion.h3>
          <motion.p
            className="max-w-md text-sm leading-relaxed"
            animate={{
              color: hovered
                ? "rgba(255,255,255,0.8)"
                : "rgba(255,255,255,0.5)",
            }}
            transition={{ duration: 0.3 }}
          >
            {item.desc}
          </motion.p>
        </div>
      </div>
    </motion.article>
  );
}

function Services() {
  const sectionRef = useRef(null);

  // IMAGE_HEIGHT / 2 so it's vertically centered on the row
  const IMAGE_HEIGHT = 160;

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-[#0d1f1a] py-[60px] md:py-[88px]"
      id="services"
      aria-label="Admission marketing services"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      {/* Floating image — right edge, vertically aligned to hovered row */}

      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        {/* Header */}
        <motion.div
          className="mx-auto mb-[52px] max-w-[680px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-2xl leading-[1.15] text-white md:text-4xl">
            Admission Marketing Services for Schools, Colleges & Coaching
            Institutes
          </h2>
          <p className="text-base leading-7 text-white/65">
            A complete enrollment growth system built exclusively for
            educational institutions across India.
          </p>
        </motion.div>

        {/* Service rows */}
        <motion.div
          className="overflow-hidden rounded-xl border border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {services.map((item) => (
            <ServiceRow
              key={item.num}
              item={item}
              containerRef={sectionRef}
              onHover={(img, top) => {
                setActiveImage(img);
                setImageTop(top);
              }}
              onLeave={() => setActiveImage(null)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Services;
