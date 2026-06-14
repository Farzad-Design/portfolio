"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const adobeTools = [
  "Illustrator", "Photoshop", "InDesign",
  "After Effects", "Adobe Substance", "Adobe XD",
];

const webTools = ["WordPress", "Elementor", "Figma"];

const aiTools = ["ChatGPT", "Claude", "Midjourney", "Adobe Firefly", "Runway", "Sora"];

const bio = [
  "With over 20 years of experience in graphic design and visual communication, I specialize in creating modern, functional, and impactful designs across digital and print media.",
  "My background includes packaging design, branding, marketing materials, and creative visual solutions for businesses and products.",
  "I have extensive experience working with Adobe Creative Cloud, including professional workflows for print and digital design. I am also experienced in website design using WordPress and Elementor.",
  "In addition, I am familiar with 3D design and product visualization using Autodesk 3ds Max and Adobe Substance 3D Designer.",
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 100 }}>

      {/* ── Full-screen background section ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <Image
          src="/images/about-photo.jpg"
          alt="Farzad Shahidi"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />

        {/* Overlay — تاریک از راست به چپ */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to left, rgba(8,12,22,0.97) 35%, rgba(8,12,22,0.6) 65%, rgba(8,12,22,0.15) 100%)",
          }}
        />

        {/* Content — راست */}
        <div
          className="site-container"
          style={{ width: "100%", position: "relative", zIndex: 1, display: "flex", justifyContent: "flex-end" }}
        >
          <div style={{ maxWidth: 500 }}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label"
              style={{ display: "block" }}
            >
              About me
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.15,
                marginBottom: 6,
              }}
            >
              Farzad Shahidi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 28,
              }}
            >
              Graphic &amp; Web Designer · DesignHaus Studio
            </motion.p>

            {bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: 1.8,
                  marginBottom: 14,
                }}
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ marginTop: 12 }}
            >
              <a href="/files/cv-farzad-shahidi.pdf" download className="btn-outline">
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          padding: "80px 0",
        }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ textAlign: "center", marginBottom: 56 }}
          >
            <span className="section-label">Expertise</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Tools &amp; Skills
            </h2>
          </motion.div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}
            className="skills-grid"
          >
            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FF4D00", display: "inline-block", flexShrink: 0 }} />
                Adobe Creative Cloud
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {adobeTools.map((tool) => (
                  <span key={tool} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2196F3", display: "inline-block", flexShrink: 0 }} />
                Web Design
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {webTools.map((tool) => (
                  <span key={tool} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 15, color: "#FFFFFF", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#A855F7", display: "inline-block", flexShrink: 0 }} />
                Artificial Intelligence
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {aiTools.map((tool) => (
                  <span key={tool} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 500, color: "var(--text-primary)" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
