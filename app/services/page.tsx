"use client";

import { motion } from "framer-motion";

const services = [
  {
    image: "/images/UIUX Design.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="16" y="12" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "UI/UX Design",
    subtitle: "Websites & Mobile Apps",
    description:
      "Intuitive, user-centered interfaces that balance aesthetics with seamless functionality across all platforms.",
  },
  {
    image: "/images/Landing Page Design.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="3" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 8h24M8 3v5M20 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 14h6M6 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="16" y="13" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Landing Page & Web Design",
    subtitle: "Responsive & Modern",
    description:
      "High-converting landing pages and full websites built for impact, clarity, and modern visual standards.",
  },
  {
    image: "/images/Brand Identity.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L25 8.5v11L14 25 3 19.5v-11L14 3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 3v22M3 8.5l11 5.5 11-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    title: "Brand Identity",
    subtitle: "Visual Design",
    description:
      "Cohesive brand systems — logos, color palettes, typography — that create a memorable and consistent identity.",
  },
  {
    image: "/images/Social Media Design.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="15" y="2" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="2" y="15" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <rect x="15" y="15" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Social Media Design",
    subtitle: "Marketing Creatives",
    description:
      "Eye-catching social media graphics, ads, and campaign creatives that grow engagement and brand presence.",
  },
  {
    image: "/images/Print Design.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M18 18l6 6M18 24l6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Print Design",
    subtitle: "Flyers, Posters, Brochures",
    description:
      "Professional print materials with precise attention to typography, layout, and print-ready specifications.",
  },
  {
    image: "/images/3D Modeling.jpeg",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 8v12L14 26 2 20V8L14 2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M14 2v24M2 8l12 6 12-6M14 14v12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
      </svg>
    ),
    title: "3D Modeling",
    subtitle: "Product Visualization",
    description:
      "Photorealistic 3D renders using 3ds Max and Adobe Substance 3D — bringing products to life with stunning detail.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicesPage() {
  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>

      {/* Page background */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundImage: "url(/images/1.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          background: "rgba(8,12,22,0.84)",
        }}
      />

      <section className="page-section">
        <div className="site-container">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 16 }}
          >
            <span className="section-label">What I offer</span>
            <h1 className="section-title">Services</h1>
            <p className="section-subtitle">
              I help brands and businesses build strong visual identities and
              modern digital experiences. From concept to final design, I focus
              on clarity, usability, and impact.
            </p>
          </motion.div>

          {/* Cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="services-grid"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="card"
                style={{ padding: service.image ? 0 : undefined, overflow: "hidden" }}
              >
                {/* Card image (only for cards that have one) */}
                {service.image && (
                  <div
                    style={{
                      width: "100%",
                      height: 180,
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "12px 12px 0 0",
                    }}
                  />
                )}

                {/* Card content */}
                <div style={{ padding: service.image ? "20px 24px 24px" : undefined }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      marginBottom: 20,
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "#FFFFFF",
                      marginBottom: 4,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      marginBottom: 14,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className="service-desc"
                    style={{
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "72px 0",
        }}
      >
        <div className="site-container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: 14,
              }}
            >
              Ready to start a project?
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                maxWidth: 420,
                margin: "0 auto 32px",
                lineHeight: 1.7,
              }}
            >
              Let&apos;s turn your vision into a powerful design that stands out and delivers results.
            </p>
            <a href="/contact" className="btn-primary">
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
