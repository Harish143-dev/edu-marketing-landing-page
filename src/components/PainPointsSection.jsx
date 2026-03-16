import { useState } from "react";

const painPoints = [
  {
    initial: "E",
    title: "Empty Seats During Admission Season",
    description:
      "No structured college admissions campaign means competitors fill seats while yours stay empty.",
  },
  {
    initial: "A",
    title: "Ads Running, But Lead Quality is Poor",
    description:
      "Facebook ads for educational institutions bring wrong inquiries when run by generalist agencies without education expertise.",
  },
  {
    initial: "N",
    title: "No Structured Inquiry Follow-Up",
    description:
      "Without WhatsApp lead nurture for colleges, inquiries go cold within 24 hours.",
  },
  {
    initial: "C",
    title: "Competitors Ranking Higher on Google",
    description:
      "Poor local SEO for schools and colleges makes you invisible when parents are ready to decide.",
  },
  {
    initial: "T",
    title: "Traffic Sent to Homepage, Not a Landing Page",
    description:
      "Skipping college landing page optimization sends paid traffic to a page that does not convert.",
  },
  {
    initial: "W",
    title: "Working with a Generalist Agency",
    description:
      "Agencies that serve every industry never understand admission season timing or student acquisition marketing.",
  },
];

function PainPointCard({ initial, title, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pain-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "2rem",
        borderRadius: "0.75rem",
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
        border: hovered ? "1px solid rgba(208,233,153,0.2)" : "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
          {/* Giant initial letter */}
          <span
            style={{
              fontFamily: "'Dela Gothic One', cursive",
              fontSize: "6rem",
              lineHeight: 1,
              WebkitTextStroke: hovered
                ? "1px rgba(208,233,153,0.4)"
                : "1px rgba(208,233,153,0.2)",
              color: hovered ? "rgba(208,233,153,0.05)" : "transparent",
              transition: "all 0.5s ease",
              userSelect: "none",
            }}
          >
            {initial}
          </span>

          {/* Title + accent line */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                height: "2px",
                backgroundColor: "#ff4d4d",
                width: hovered ? "40px" : "0px",
                marginBottom: "1rem",
                transition: "width 0.4s ease",
              }}
            />
            <h3
              style={{
                fontFamily: "'Dela Gothic One', cursive",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                lineHeight: 1,
                color: hovered ? "#d0e999" : "#ffffff",
                transition: "color 0.3s ease",
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Reveal text */}
        <div
          style={{
            maxHeight: hovered ? "200px" : "0",
            opacity: hovered ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.5s ease-in-out",
            marginTop: hovered ? "1rem" : "0",
          }}
        >
          <p
            style={{
              color: "rgba(208,233,153,0.7)",
              lineHeight: 1.7,
              fontWeight: 300,
              fontFamily: "'Bricolage Grotesque', sans-serif",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Bricolage+Grotesque:wght@300;400;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <section
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to bottom, #0b1a15, #163027, #0b1a15)",
          fontFamily: "'Bricolage Grotesque', sans-serif",
          color: "#d0e999",
          padding: "4rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background blobs */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background: "rgba(208,233,153,0.05)",
            borderRadius: "50%",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "600px",
            height: "600px",
            background: "rgba(37,62,53,0.2)",
            borderRadius: "50%",
            filter: "blur(150px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "80rem", margin: "0 auto", position: "relative" }}>
          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: "5rem", maxWidth: "48rem", margin: "0 auto 5rem" }}>
            <h2
              style={{
                fontFamily: "'Dela Gothic One', cursive",
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Why Educational Institutions{" "}
              <span style={{ color: "#d0e999" }}>Struggle to Fill Seats</span>
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                opacity: 0.8,
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: "36rem",
                margin: "0 auto",
              }}
            >
              The invisible barriers preventing modern campuses from reaching full capacity in an era
              of digital saturation.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {painPoints.map((point) => (
              <PainPointCard key={point.initial} {...point} />
            ))}
          </div>

          {/* CTA Banner */}
          <div
            style={{
              marginTop: "6rem",
              padding: "3rem",
              borderRadius: "1rem",
              background: "linear-gradient(135deg, #253e35, #163027)",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontFamily: "'Dela Gothic One', cursive",
                fontSize: "1.75rem",
                color: "#ffffff",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              Break the Enrollment Plateau
            </h4>
            <p
              style={{
                maxWidth: "36rem",
                margin: "0 auto 2.5rem",
                color: "rgba(208,233,153,0.8)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Our high-end SaaS framework identifies and eliminates institutional bottlenecks using
              data-driven intelligence.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                style={{
                  background: "#d0e999",
                  color: "#163027",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  fontFamily: "'Dela Gothic One', cursive",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#ffffff")}
                onMouseLeave={(e) => (e.target.style.background = "#d0e999")}
              >
                Request Strategy Session
              </button>
              <button
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "'Dela Gothic One', cursive",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.background = "rgba(255,255,255,0.1)")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
