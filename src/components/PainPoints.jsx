import React from "react";
import {
  AlertTriangle,
  IndianRupee,
  MessageSquareOff,
  SearchX,
  MousePointerSquareDashed,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  staggerContainer,
} from "../lib/motion";

const painPoints = [
  {
    initial: "E",
    title: "Empty Seats During Admission Season",
    desc: "No structured college admissions campaign means competitors fill seats while yours stay empty.",
  },
  {
    initial: "A",
    title: "Ads Running, But Lead Quality is Poor",
    desc: "Facebook ads for educational institutions bring wrong inquiries when run by generalist agencies without education expertise.",
  },
  {
    initial: "N",
    title: "No Structured Inquiry Follow-Up",
    desc: "Without WhatsApp lead nurture for colleges, inquiries go cold within 24 hours.",
  },
  {
    initial: "C",
    title: "Competitors Ranking Higher on Google",
    desc: "Poor local SEO for schools and colleges makes you invisible when parents are ready to decide.",
  },
  {
    initial: "T",
    title: "Traffic Sent to Homepage, Not a Landing Page",
    desc: "Skipping college landing page optimization sends paid traffic to a page that does not convert.",
  },
  {
    initial: "W",
    title: "Working with a Generalist Agency",
    desc: "Agencies that serve every industry never understand admission season timing or student acquisition marketing.",
  },
];

function PainPointCard({ item, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md will-change-transform"
      key={index}
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        backgroundColor: hovered
          ? "rgba(255,255,255,0.08)"
          : "rgba(255,255,255,0.05)",
        borderColor: hovered
          ? "rgba(208,233,153,0.2)"
          : "rgba(255,255,255,0.1)",
      }}
      transition={{ duration: 0.25 }}
      aria-label={item.title}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-4">
          {/* Giant glow initial */}
          <motion.span
            className="select-none font-['Dela_Gothic_One'] text-[6rem] leading-none"
            animate={{
              WebkitTextStroke: hovered
                ? "1px rgba(208,233,153,0.4)"
                : "1px rgba(208,233,153,0.2)",
              color: hovered ? "rgba(208,233,153,0.05)" : "transparent",
            }}
            transition={{ duration: 0.5 }}
          >
            {item.initial}
          </motion.span>

          {/* Accent line + title */}
          <div className="flex flex-col">
            <motion.div
              className="mb-4 h-[2px] bg-[#ff4d4d]"
              animate={{ width: hovered ? "40px" : "0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <h3
              className={`font-['Dela_Gothic_One'] text-[1.05rem] uppercase leading-none transition-colors duration-300 ${
                hovered ? "text-[#d0e999]" : "text-white"
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* Reveal description */}
        <motion.div
          animate={{
            maxHeight: hovered ? "200px" : "0px",
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? "1rem" : "0rem",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <p className="font-['Bricolage_Grotesque'] text-sm font-light leading-relaxed text-[rgba(208,233,153,0.7)]">
            {item.desc}
          </p>
        </motion.div>
      </div>

      {/* Subtle corner glow on hover */}
      <motion.div
        className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#d0e999]"
        animate={{ opacity: hovered ? 0.04 : 0, scale: hovered ? 1 : 0.6 }}
        transition={{ duration: 0.4 }}
        style={{ filter: "blur(24px)" }}
      />
    </motion.article>
  );
}

function PainPoints() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-b from-[#0b1a15] via-[#163027] to-[#0b1a15] py-[60px] md:py-[88px]"
      id="pain-points"
      aria-label="Common challenges educational institutions face"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      {/* Background ambient blobs */}
      <div className="pointer-events-none absolute -right-[5%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#d0e999]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -left-[5%] h-[600px] w-[600px] rounded-full bg-[#253e35]/20 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-[18px] md:px-7">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-[52px] max-w-[680px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-2xl leading-[1.15] tracking-tight text-white md:text-4xl">
            Why Educational Institutions Struggle to Fill Seats
          </h2>
          <p className="text-base leading-7 text-white/65">
            The invisible barriers preventing modern campuses from reaching full
            capacity in an era of digital saturation.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {painPoints.map((item, i) => (
            <PainPointCard key={i} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default PainPoints;
