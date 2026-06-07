"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "60+", label: "Happy Clients" },
];

const socials = [
  { label: "in", title: "LinkedIn", href: "#" },
  { label: "ig", title: "Instagram", href: "#" },
  { label: "𝕏", title: "X", href: "#" },
];

const projects = [
  {
    title: "Napoli Nero",
    description:
      "Luxury pizza restaurant website with cinematic scroll animations, full-page sections, and a dark elegant aesthetic.",
    category: "Website Design",
    image: "/images/Post Linkedin-Grau-01.png",
    url: "https://napolinero.designhausstudio.studio/",
    tags: ["Next.js", "GSAP", "Framer Motion"],
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".h-greeting", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(".h-name", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.35")
        .fromTo(".h-title", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.65 }, "-=0.45")
        .fromTo(".h-buttons", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".h-socials", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3")
        .fromTo(".h-stat", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 100,
          paddingBottom: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Full-screen background photo */}
        <Image
          src="/images/hero-photo.jpg"
          alt="Farzad Shahidi"
          fill
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
          priority
        />

        {/* Dark gradient overlay */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,12,22,0.55) 0%, rgba(8,12,22,0.45) 40%, rgba(8,12,22,0.85) 75%, rgba(8,12,22,0.98) 100%)",
          }}
        />

        {/* Content */}
        <div className="site-container" style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 520 }}>
          <p className="h-greeting" style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", marginBottom: 8, opacity: 0, letterSpacing: "0.05em" }}>
            Hi, I am
          </p>
          <h1
            className="h-name"
            style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.1, marginBottom: 6, opacity: 0 }}
          >
            Farzad Shahidi
          </h1>
          <h2
            className="h-title"
            style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(2rem, 3.2vw, 3rem)", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, marginBottom: 32, opacity: 0 }}
          >
            Graphic &amp;<br />Web Designer
          </h2>

          <div className="h-buttons" style={{ display: "flex", gap: 14, marginBottom: 28, flexWrap: "wrap", opacity: 0 }}>
            <Link href="/contact" className="btn-primary">Hire Me</Link>
            <a href="/files/cv-farzad-shahidi.pdf" download className="btn-outline">Download CV</a>
          </div>

          <div className="h-socials" style={{ display: "flex", gap: 10, marginBottom: 52, opacity: 0 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} title={s.title} className="social-btn">{s.label}</a>
            ))}
          </div>

          <div style={{ display: "flex", gap: 40, borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: 28, flexWrap: "wrap" }}>
            {stats.map((stat, i) => (
              <div key={i} className="h-stat" style={{ opacity: 0 }}>
                <div style={{ fontFamily: "var(--font-poppins)", fontSize: 34, fontWeight: 800, color: "#FFFFFF", lineHeight: 1, marginBottom: 4 }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500, letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)", padding: "96px 0" }}
      >
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <span className="section-label">My Work</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of websites and digital experiences I have designed and built.
            </p>
          </motion.div>

          {/* Portfolio-style grid */}
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="feat-grid"
          >
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover="hover"
                style={{
                  position: "relative",
                  borderRadius: 14,
                  overflow: "hidden",
                  aspectRatio: "4 / 3",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                />
                {/* Hover overlay */}
                <motion.div
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,12,22,0.95) 0%, rgba(8,12,22,0.35) 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "20px",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>
                    {project.category}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-poppins)", fontWeight: 700, fontSize: 16, color: "#FFFFFF", marginBottom: 8 }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 4, padding: "3px 8px", fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ textAlign: "center", marginTop: 56 }}
          >
            <Link href="/portfolio" className="btn-primary">View All Projects</Link>
          </motion.div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) { .feat-grid { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 560px) { .feat-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </>
  );
}
