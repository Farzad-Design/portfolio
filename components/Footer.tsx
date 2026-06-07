import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact me" },
];

const socials = [
  { label: "in", title: "LinkedIn", href: "#" },
  { label: "ig", title: "Instagram", href: "#" },
  { label: "𝕏", title: "X / Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        padding: "52px 0 28px",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            justifyContent: "space-between",
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 240 }}>
            <div style={{ marginBottom: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/My Logo.svg?v=2"
                alt="DesignHaus Studio"
                style={{ height: 88, width: "auto", display: "block" }}
              />
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 13,
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Creative design focused on modern visuals, strong branding, and
              clear communication.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.title}
                  className="social-btn"
                  style={{ fontSize: 11 }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              Navigation
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: 16,
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:farzad.ksh@gmail.com"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: 13,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                farzad.ksh@gmail.com
              </a>
              <p style={{ color: "var(--text-secondary)", fontSize: 13 }}>
                Germany / Deutschland
              </p>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ marginTop: 6, fontSize: 12, padding: "9px 18px" }}
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>

        <div className="divider" />
        <div
          style={{
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            Designed by @DesignHaus.Studio2026
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12 }}>
            © 2026 Farzad Shahidi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
