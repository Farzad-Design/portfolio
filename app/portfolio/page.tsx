"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Graphic & Print", "Website Design", "Branding", "3D Design", "Digital Signage"];

type Item = {
  id: number;
  title: string;
  categories: string[];
  image: string;
  url: string;
  video?: string;
};

const items: Item[] = [
  { id: 3, title: "Napoli Nero", categories: ["Website Design"], image: "/images/napoli-nero.jpg", url: "https://napolinero.designhausstudio.studio/" },
  { id: 6, title: "DesignHaus Studio — Digital Agency", categories: ["Website Design"], image: "/images/digital-agency.jpg", url: "https://agency.designhausstudio.studio/" },
  { id: 7, title: "AURUM — Luxury Timepieces", categories: ["Website Design"], image: "/images/luxury-watch.jpg", url: "https://aurum.designhausstudio.studio/" },
  { id: 8, title: "Noir Éclipse — Luxury Perfume", categories: ["Website Design"], image: "/images/noir-eclipse.jpg", url: "https://noir-eclipse.designhausstudio.studio" },
  { id: 12, title: "PRESSHAUS — Industrial Print Studio", categories: ["Website Design", "Graphic & Print"], image: "/images/presshaus.png", url: "https://presshaus.designhausstudio.studio/" },
  { id: 13, title: "LinkedIn Profile", categories: ["Branding"], image: "/images/linkedin.png", url: "https://www.linkedin.com/in/farzad-s-298779119" },
  { id: 1, title: "Aryan Pizza — Digital Menu Board", categories: ["Digital Signage"], image: "/images/cover-pizza.jpg", url: "#", video: "/videos/pizza_web.mp4" },
  { id: 4, title: "Aryan Pasta — Digital Menu Board", categories: ["Digital Signage"], image: "/images/cover-pasta.jpg", url: "#", video: "/videos/pasta_web.mp4" },
  { id: 5, title: "Aryan Snacks — Digital Menu Board", categories: ["Digital Signage"], image: "/images/cover-snacks.jpg", url: "#", video: "/videos/snacks_web.mp4" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = (active === "All" ? items : items.filter((item) => item.categories.includes(active)))
    .sort((a, b) => (a.video ? 1 : 0) - (b.video ? 1 : 0));

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
                <motion.div
                  key={item.id}
                  onClick={() => {
                    if (item.video) setActiveVideo(item.video);
                    else if (item.url !== "#") window.open(item.url, "_blank");
                  }}
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
                    cursor: "pointer",
                    display: "block",
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
                      background: "rgba(0,0,0,0.35)",
                      pointerEvents: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.video && (
                      <div style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                        border: "2px solid rgba(255,255,255,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Video Modal */}
          <AnimatePresence>
            {activeVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.92)",
                  zIndex: 1000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 24,
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: "100%", maxWidth: 1200, position: "relative" }}
                >
                  <button
                    onClick={() => setActiveVideo(null)}
                    style={{
                      position: "absolute",
                      top: -40,
                      right: 0,
                      background: "none",
                      border: "none",
                      color: "white",
                      fontSize: 28,
                      cursor: "pointer",
                      lineHeight: 1,
                    }}
                  >
                    ✕
                  </button>
                  <video
                    src={activeVideo}
                    controls
                    autoPlay
                    style={{
                      width: "100%",
                      borderRadius: 12,
                      display: "block",
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

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
