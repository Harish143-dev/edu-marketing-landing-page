import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  cardVariants,
  sectionVariants,
  sectionViewport,
  softHover,
  staggerContainer,
} from "../lib/motion";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownNarrowWide,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    id: 1,
    question:
      "What admission marketing services does EyeLevel offer to colleges?",
    answer:
      "EyeLevel's admission marketing services for colleges include: Google Ads campaigns targeting students searching for college admissions, Meta Ads for student and parent engagement, student lead generation with landing-page optimization, college social media management (Instagram, YouTube, LinkedIn), campus tour video production, student and alumni testimonial videos, brochure and admission collateral design, WhatsApp broadcast campaigns for lead nurturing, and admission funnel analytics (tracking leads from ad click to enrollment). We specialize in TNEA counselling cycles and Tamil Nadu engineering admission timelines.",
  },
  {
    id: 2,
    question:
      "How does EyeLevel help coaching institutes acquire more students?",
    answer:
      "EyeLevel's coaching institute marketing services include: Google Ads for JEE/NEET/board exam coaching searches (high-intent student queries), Meta Ads targeting students and parents in relevant demographics, Instagram and YouTube content showcasing faculty expertise and student results, result showcase campaigns (toppers, batch results) to build credibility, landing pages optimized for batch inquiry and enrollment, parent engagement campaigns (WhatsApp, Facebook for parent age demographics), competitive exam preparation content for social media, and lead nurturing automation (email and WhatsApp sequences for inquiries that do not convert immediately).",
  },
  {
    id: 3,
    question:
      "When should colleges and coaching institutes start their admission marketing campaigns?",
    answer:
      "Tamil Nadu engineering admission timing: August-September (awareness phase — board exam students begin exploring options), October-November (active lead generation — peak search volume), December-January (conversion phase — 55% of admissions happen in this window), February-March (final push — last counselling round, late admission campaigns). Coaching institutes should start JEE/NEET campaigns in May-June (after board results) and sustain through January. Medical college marketing should align with NEET result dates (typically June-July) with a strong campaign through December. EyeLevel designs campaigns starting 8-10 weeks before your peak enrollment period.",
  },
  {
    id: 4,
    question:
      "What does student lead generation involve for education marketing?",
    answer:
      "Student lead generation involves: (1) Campaign creation — Google Ads, Meta Ads, or YouTube Ads targeting students searching for your course or college. (2) Landing page — a dedicated page capturing student details (name, phone, course interest, city). (3) Lead capture form optimization — minimizing fields to maximize conversions, A/B testing headlines and CTAs. (4) Instant follow-up — WhatsApp or SMS notification to admissions team the moment a lead arrives. (5) Lead nurturing — automated WhatsApp or email sequences guiding students from inquiry to campus visit to enrollment. (6) Lead quality scoring — filtering unqualified leads before they reach your admissions team.",
  },
  {
    id: 5,
    question:
      "How does EyeLevel's education marketing differ from generic digital marketing agencies?",
    answer:
      "Generic digital marketing agencies run education marketing campaigns without understanding: Tamil Nadu-specific counselling systems (TNEA, NEET, KEAM), parent decision-making dynamics in Indian education (mothers make 68% of school selection decisions), fee sensitivity and scholarship messaging requirements, competitive exam cycles and peak search windows, and how institutional credibility (accreditation, placement records, alumni network) drives enrollment decisions. EyeLevel's education marketing team has run campaigns for 50+ educational institutions and understands exactly what messaging, timing, and targeting drives qualified admission inquiries.",
  },
  {
    id: 6,
    question:
      "What campus video production services does EyeLevel offer for colleges?",
    answer:
      "EyeLevel's campus video production for colleges includes: campus tour videos (walkthrough of facilities, hostels, labs, sports grounds), student testimonial videos (current students and alumni sharing authentic experiences), faculty spotlight videos (professor introductions building academic credibility), placement success stories (industry-placed alumni sharing career journeys), open day event coverage, department showcase videos (lab facilities, equipment, research capabilities), and prospectus supplement videos. All campus videos are optimized for YouTube, Instagram Reels, and website embedding.",
  },
  {
    id: 7,
    question:
      "What higher education marketing services does EyeLevel provide for universities?",
    answer:
      "EyeLevel's higher education marketing services include: multi-program admission campaigns (managing separate campaigns per department), international student recruitment marketing, university brand and positioning strategy, LinkedIn marketing for research and academic reputation, student recruitment marketing for PG and PhD programs, scholarship and financial aid communication campaigns, alumni engagement marketing, and university event marketing (convocations, research conferences, open days). We balance institutional credibility messaging alongside enrollment-driven campaigns.",
  },
  {
    id: 8,
    question:
      "How does education digital marketing work for engineering colleges in Tamil Nadu?",
    answer:
      "Engineering college marketing in Tamil Nadu is driven by TNEA counselling cycles and competitive exam scores (JEE, TANCET). EyeLevel's approach: (1) Awareness (Aug-Oct) — Google Ads and Meta Ads targeting students searching for 'engineering colleges in Tamil Nadu', 'best CSE colleges Chennai', etc. (2) Consideration (Nov-Dec) — Content marketing showcasing campus, facilities, placements, faculty. (3) Conversion (Jan-Feb) — Aggressive retargeting of website visitors and lead follow-up. (4) Counselling support (Mar-Apr) — TNEA cutoff rank guidance content, scholarship information. 45,000+ engineering seats go vacant in Tamil Nadu every year — effective digital marketing is the primary solution.",
  },
  {
    id: 9,
    question:
      "What education marketing results can colleges and coaching institutes expect?",
    answer:
      "Expected results: Lead generation — 100-500 qualified admission inquiries per month depending on budget and competition. Cost-per-inquiry — typically Rs 150-600 for engineering colleges, Rs 200-800 for coaching institutes (varies by program, competition, and season). Enrollment conversion — 5-15% of leads convert to enrolled students (depends on admissions team follow-up speed and quality). Seat fill improvement — clients have reported 35-60% improvement in seat fill rate after full-season campaigns. Social media — college Instagram accounts grow 500-2,000 followers/month during active posting. These are directional benchmarks — actual results depend on institution reputation, existing online presence, and campaign budget.",
  },
  {
    id: 10,
    question: "How does EyeLevel approach Google Ads for college admissions?",
    answer:
      "EyeLevel's Google Ads strategy for college admissions involves: Keyword research — identifying high-intent search terms students use ('engineering admission Chennai 2026', 'best BCA college Tamil Nadu', 'MBBS admission process India'). Campaign structure — separate campaigns for each program (CSE, ECE, Civil, Mechanical) to maximize relevance. Ad copy — featuring differentiators (placement rate, facilities, faculty credentials, ranking). Landing pages — dedicated pages per program with fast lead capture forms. Bidding strategy — focus on conversion optimization (lead form submissions) not just clicks. We typically achieve 40-60% lower cost-per-inquiry than industry benchmark within 60 days of campaign launch.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <motion.section
      className="bg-[#173229] py-[60px] md:py-[88px]"
      id="faq"
      aria-label="Frequently asked questions about education marketing"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1200px] px-[18px] md:px-7">
        <motion.div
          className="mx-auto mb-[52px] max-w-[680px] text-center"
          variants={sectionVariants}
        >
          <h2 className="mb-3.5 font-['Dela_Gothic_One'] text-[1.65rem] leading-[1.15] text-white md:text-[clamp(1.75rem,3.5vw,2.4rem)]">
            Frequently Asked Questions About Education Marketing
          </h2>
          <p className="text-base leading-7 text-white/65">
            Everything colleges, schools, and coaching institutes want to know
            about admissions marketing, student lead generation, and enrollment
            growth.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto max-w-[760px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport}
        >
          {faqs.map((faq, i) => (
            <motion.div
              className="transform-gpu will-change-transform mb-2.5 overflow-hidden rounded-[12px] border border-white/10 bg-[#253e35]"
              key={i}
              variants={cardVariants}
              whileHover={softHover}
              layout
            >
              <button
                className="flex w-full items-center justify-between gap-4 bg-transparent px-[22px] py-[18px] text-left text-[0.95rem] font-semibold text-white transition hover:text-[#e2fea5]"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-q-${i}`}
              >
                <span>{faq.question}</span>
                <motion.span
                  className="shrink-0 text-base text-[#e2fea5]"
                  aria-hidden="true"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key={`faq-answer-${i}`}
                    id={`faq-answer-${i}`}
                    className="overflow-hidden"
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-[22px] pb-[18px] text-[0.88rem] leading-7 text-white/65">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FAQ;
