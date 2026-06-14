"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Graphic & Print", "Website Design", "Branding", "3D Design"];

const items = [
  { id: 1, title: "Brand Identity System", category: "Branding", image: "/images/portfolio-home.jpg", url: "#" },
  { id: 2, title: "Marketing Brochure", category: "Graphic & Print", image: "/images/Print Design.jpeg", url: "#" },
  { id: 3, title: "Napoli Nero", category: "Website Design", image: "/images/napoli-nero.jpg", url: "https://napolinero.designhausstudio.studio/" },
  { id: 4, title: "Logo & Visual Identity", category: "Branding", image: "/images/Logo & Visual Identity.jpeg", url: "#" },
  { id: 5, title: "Event Poster Design", category: "Graphic & Print", image: "/images/Social Media Design.jpeg", url: "#" },
  { id: 6, title: "DesignHaus Studio — Digital Agency", category: "Website Design", image: "/images/digital-agency.jpg", url: "https://agency.designhausstudio.studio/" },
  { id: 7, title: "AURUM — Luxury Timepieces", category: "Website Design", image: "/images/luxury-watch.jpg", url: "https://aurum.designhausstudio.studio/" },
  { id: 8, title: "Noir Éclipse — Luxury Perfume", category: "Website Design", image: "/images/noir-eclipse.jpg", url: "https://noir-eclipse.designhausstudio.studio" },
  { id: 9, title: "3D Product Render", category: "3D Design", image: "/images/3D Modeling.jpeg", url: "#" },
  { id: 10, title: "Packaging Design", category: "Graphic & Print", image: "/images/Print Design.jpeg", url: "#" },
  { id: 11, title: "3D Visualization", category: "3D Design", image: "/images/3D Modeling.jpeg", url: "#" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filtered = (active === "All" ? items : items.filter((item) => item.category === active))
    .sort((a, b) => (a.url === "#" ? 1 : 0) - (b.url === "#" ? 1 : 0));

  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section className="page-section">
        <div className="site-container">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <span className="section-label">My work</span>
            <h1 className="section-title">Portfolio</h1>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              A selection of projects spanning branding, web design, print, and 3D visualization.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 52,
            }}
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    background: isActive ? "#FFFFFF" : "rgba(255,255,255,0.05)",
                    color: isActive ? "#0A0F1C" : "var(--text-secondary)",
                    border: isActive ? "1px solid #FFFFFF" : "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "8px 18px",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="portfolio-grid"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.url}
                  target={item.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  whileHover="hover"
                  variants={{
                    hover: { y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.6)" },
                  }}
                  style={{
                    position: "relative",
                    borderRadius: 14,
                    overflow: "hidden",
                    aspectRatio: "16 / 9",
                    border: "1px solid transparent",
                    backgroundImage:
                      "linear-gradient(#0a0f1c, #0a0f1c), linear-gradient(135deg, rgba(201,169,110,0.45) 0%, rgba(255,255,255,0.06) 50%, rgba(201,169,110,0.2) 100%)",
                    backgroundOrigin: "border-box",
                    backgroundClip: "padding-box, border-box",
                    cursor: item.url !== "#" ? "pointer" : "default",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.15)",
                      pointerEvents: "none",
                    }}
                  />
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                padding: "60px 0",
              }}
            >
              No items in this category yet.
            </p>
          )}
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 560px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
