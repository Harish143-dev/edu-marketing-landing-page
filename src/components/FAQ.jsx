import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  sectionVariants,
  sectionViewport,
  staggerContainer,
  cardVariants,
} from "../lib/motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

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
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <motion.section
      className="bg-[#0d1f1a] py-[60px] md:py-[88px]"
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
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* ── Left column: title + CTA ── */}
          <motion.div
            className="flex flex-col justify-start lg:w-[400px] lg:shrink-0"
            variants={sectionVariants}
          >
            <div>
              <h2 className="mb-6 font-['Dela_Gothic_One'] text-2xl leading-[1.2] text-white md:text-4xl">
                FAQ About Education Marketing
              </h2>
              {/* Divider */}
              <div className="mb-5 h-px w-16 bg-white/20" />
              <p className="text-[0.9rem] leading-relaxed text-white/55">
                At Eyelevel, we don’t just run campaigns—we build growth systems
                for educational brands. From schools to colleges and
                universities, we help institutions consistently increase
                admissions, qualified leads, and brand visibility through
                strategic, performance-driven marketing. Our approach goes
                beyond traditional digital marketing. We craft custom growth
                strategies tailored to your institution’s goals—combining data,
                creativity, and deep market understanding to deliver measurable
                outcomes. Whether it's scaling admissions, improving enquiry
                quality, or strengthening your market presence, Eyelevel acts as
                your long-term growth partner, not just a service provider.
              </p>
            </div>

            <motion.a
              href="#hero"
              className="mt-8 flex w-fit items-center gap-2 rounded-full bg-[#253e35] border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2c4a3e] hover:border-[#d0e999]/30 hover:text-[#d0e999]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
              <MessageCircle className="h-4 w-4 opacity-70" strokeWidth={2} />
            </motion.a>
          </motion.div>

          {/* ── Right column: accordion ── */}
          <motion.div
            className="flex-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={sectionViewport}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                className="border-b border-white/10 last:border-b-0"
                variants={cardVariants}
              >
                <button
                  className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-200"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-q-${i}`}
                >
                  <h3
                    className={`text-[0.93rem] font-semibold leading-snug transition-colors duration-200 ${
                      openIndex === i ? "text-[#d0e999]" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  {/* +/− icon */}
                  <motion.span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border"
                    animate={{
                      borderColor:
                        openIndex === i
                          ? "rgba(208,233,153,0.5)"
                          : "rgba(255,255,255,0.2)",
                      color:
                        openIndex === i ? "#d0e999" : "rgba(255,255,255,0.5)",
                    }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    {openIndex === i ? (
                      <Minus className="h-3 w-3" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-3 w-3" strokeWidth={2.5} />
                    )}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key={`faq-answer-${i}`}
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[0.875rem] leading-7 text-white/55">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default FAQ;
