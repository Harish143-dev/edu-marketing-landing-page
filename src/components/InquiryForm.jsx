import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, XCircle } from "lucide-react";

function InquiryForm({ id, animateOnView = true, hoverLift = true }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    institution: "",
    type: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setShowToast(false);
    try {
      const response = await fetch(
        "https://automate.eyelevelstudio.in/webhook-test/edu-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Show success toast
      setShowToast(true);
      setError(null);
      // Reset form after submission
      setForm({
        name: "",
        institution: "",
        type: "",
        phone: "",
        city: "",
      });
      // Auto-dismiss success toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form. Please try again.");
      setShowToast(true);
      // Auto-dismiss error toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.div
        className="rounded-[12px] border border-white/10 bg-[#253e35] px-[26px] py-[30px]"
        id={id}
        initial={animateOnView ? { opacity: 0, y: 22 } : false}
        whileInView={animateOnView ? { opacity: 1, y: 0 } : undefined}
        viewport={animateOnView ? { once: true, amount: 0.2 } : undefined}
        transition={
          animateOnView ? { duration: 0.55, ease: "easeOut" } : undefined
        }
        whileHover={hoverLift ? { y: -4 } : undefined}
      >
      <AnimatePresence mode="wait">
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="mb-1 text-center font-['Dela_Gothic_One'] text-[1.15rem] font-normal text-white">
            Book a Consultation
          </h3>
          <p className="mb-[22px] text-center text-[0.82rem] text-white/50">
            Find out why your campaigns aren't filling seats.
          </p>
          <form onSubmit={handleSubmit} aria-label="Institution inquiry form">
              <div className="mb-3">
                <label
                  className="mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-white/65"
                  htmlFor={`name-${id}`}
                >
                  Your Name
                </label>
                <input
                  className="w-full rounded-[8px] border border-white/10 bg-[#1a2f28] px-[14px] py-[11px] text-[0.9rem] text-white placeholder:text-white/50 focus:border-[#e2fea5] focus:outline-none focus:ring-3 focus:ring-[rgba(226,254,165,0.08)]"
                  type="text"
                  id={`name-${id}`}
                  name="name"
                  placeholder="e.g. Dr. Rajesh Kumar"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-white/65"
                  htmlFor={`institution-${id}`}
                >
                  Institution Name
                </label>
                <input
                  className="w-full rounded-[8px] border border-white/10 bg-[#1a2f28] px-[14px] py-[11px] text-[0.9rem] text-white placeholder:text-white/50 focus:border-[#e2fea5] focus:outline-none focus:ring-3 focus:ring-[rgba(226,254,165,0.08)]"
                  type="text"
                  id={`institution-${id}`}
                  name="institution"
                  placeholder="e.g. ABC Engineering College"
                  value={form.institution}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-white/65"
                  htmlFor={`type-${id}`}
                >
                  Institution Type
                </label>
                <div className="relative">
                  <select
                    className="w-full rounded-[8px] border-2 border-white/10 bg-[#1a2f28] px-[14px] py-[11px] pr-[40px] text-[0.9rem] text-white appearance-none cursor-pointer transition-all duration-200 hover:border-white/20 focus:border-[#e2fea5] focus:outline-none focus:ring-3 focus:ring-[rgba(226,254,165,0.08)]"
                    id={`type-${id}`}
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select type...
                    </option>
                    <option value="School">School</option>
                    <option value="College / University">
                      College / University
                    </option>
                    <option value="Coaching Institute">Coaching Institute</option>
                    <option value="Preschool / Play School">
                      Preschool / Play School
                    </option>
                    <option value="Ed-Tech / Online Courses">
                      Ed-Tech / Online Courses
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 pointer-events-none text-white/50"
                    strokeWidth={2}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  className="mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-white/65"
                  htmlFor={`phone-${id}`}
                >
                  Phone Number
                </label>
                <input
                  className="w-full rounded-[8px] border border-white/10 bg-[#1a2f28] px-[14px] py-[11px] text-[0.9rem] text-white placeholder:text-white/50 focus:border-[#e2fea5] focus:outline-none focus:ring-3 focus:ring-[rgba(226,254,165,0.08)]"
                  type="tel"
                  id={`phone-${id}`}
                  name="phone"
                  placeholder="+91 98765 43210"
                  pattern="[0-9+\-\s()]{10,}"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="mb-[5px] block text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-white/65"
                  htmlFor={`city-${id}`}
                >
                  City
                </label>
                <input
                  className="w-full rounded-[8px] border border-white/10 bg-[#1a2f28] px-[14px] py-[11px] text-[0.9rem] text-white placeholder:text-white/50 focus:border-[#e2fea5] focus:outline-none focus:ring-3 focus:ring-[rgba(226,254,165,0.08)]"
                  type="text"
                  id={`city-${id}`}
                  name="city"
                  placeholder="e.g. Chennai"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-[8px] bg-[#e2fea5] px-8 py-4 text-base font-semibold text-[#0d1f1a] transition hover:bg-[#c8e88a] hover:shadow-[0_4px_16px_rgba(226,254,165,0.25)] disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Submit inquiry form for a free admission audit"
                whileHover={!isSubmitting ? { y: -2, scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="mr-2 inline-flex h-4 w-4 items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="h-4 w-4 rounded-full border-2 border-[#0d1f1a]/30 border-t-[#0d1f1a]" />
                    </motion.div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Book a Consultation
                    <span className="ml-2 hidden md:inline" aria-hidden="true">
                      <ArrowRight />
                    </span>
                  </>
                )}
              </motion.button>
            </form>
            <p className="mt-2.5 text-center text-[0.75rem] text-white/50">
              No spam. No obligations. Just an honest consultation.
            </p>
          </motion.div>
      </AnimatePresence>
    </motion.div>

    <AnimatePresence>
      {showToast && (
        <motion.div
          role="alert"
          aria-live="assertive"
          className={`mt-3 rounded-[12px] border px-4 py-3 text-[0.9rem] font-semibold shadow-lg ${
            error
              ? "border-red-500/40 bg-red-500/95 text-white"
              : "border-green-500/40 bg-green-500/95 text-white"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            {error ? (
              <XCircle size={20} className="text-red-300 shrink-0 mt-0.5" strokeWidth={2} />
            ) : (
              <CheckCircle2 size={20} className="text-green-300 shrink-0 mt-0.5" strokeWidth={2} />
            )}
            <div>
              {error ? error : "Form submitted successfully! We'll be in touch shortly."}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

export default InquiryForm;
