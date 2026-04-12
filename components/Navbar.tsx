"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#lyceum" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Corpo Docente", href: "#fundador" },
  { label: "Alumni", href: "#depoimentos" },
  { label: "Admissões", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloqueia scroll do body quando menu aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 300ms ease, box-shadow 300ms ease, border-color 300ms ease",
        backgroundColor: scrolled ? "rgba(9,9,11,0.72)" : "rgba(9,9,11,0.2)",
        backdropFilter: "blur(28px) saturate(160%)",
        WebkitBackdropFilter: "blur(28px) saturate(160%)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" : "none",
      }}
    >
      <nav className="nav-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 80px", height: "72px", maxWidth: "1400px", margin: "0 auto" }}>

        {/* Logo */}
        <Link href="/" aria-label="Lyceum — Escola de Filosofia Clássica" style={{ flexShrink: 0 }}>
          <Image src="/logo.webp" alt="Lyceum" width={160} height={44} priority style={{ objectFit: "contain", height: "44px", width: "auto", display: "block" }} />
        </Link>

        {/* Center links — desktop */}
        <ul className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", margin: 0, padding: 0, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "rgba(244,245,246,0.65)", textDecoration: "none", padding: "6px 14px", borderRadius: "8px", whiteSpace: "nowrap", transition: "color 180ms ease, background 180ms ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#F4F5F6"; el.style.background = "rgba(244,245,246,0.06)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(244,245,246,0.65)"; el.style.background = "transparent"; }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <Link
          href="#ingresso"
          className="btn-cta cta-navbar-btn"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 22px", borderRadius: "200px", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", textDecoration: "none", cursor: "pointer", flexShrink: 0 }}
        >
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#0D0F10", whiteSpace: "nowrap" }}>Candidatar-se</span>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "6px", display: "none", color: "#F4F5F6", position: "relative", width: "32px", height: "32px", alignItems: "center", justifyContent: "center" }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.svg
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2 }}
                width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -45 }}
                transition={{ duration: 0.2 }}
                width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
              >
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden", background: "rgba(9,9,11,0.97)", backdropFilter: "blur(28px)", borderTop: "1px solid rgba(244,245,246,0.07)" }}
          >
            <div style={{ padding: "16px 20px 32px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, delay: 0.06 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "17px", color: "rgba(244,245,246,0.75)", textDecoration: "none", padding: "13px 16px", borderRadius: "12px", transition: "color 160ms ease, background 160ms ease" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#F4F5F6"; el.style.background = "rgba(244,245,246,0.05)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "rgba(244,245,246,0.75)"; el.style.background = "transparent"; }}
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="rgba(200,169,110,0.5)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.div>
              ))}

              {/* CTA mobile */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.06 + navLinks.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ marginTop: "12px", paddingTop: "16px", borderTop: "1px solid rgba(244,245,246,0.06)" }}
              >
                <Link
                  href="#ingresso"
                  onClick={() => setMenuOpen(false)}
                  className="btn-cta"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px", borderRadius: "200px", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", textDecoration: "none" }}
                >
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0D0F10" }}>Candidatar-se no Lyceum</span>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1199px) { .nav-inner { padding: 0 32px !important; } .nav-links-desktop { gap: 4px !important; } }
        @media (max-width: 900px) { .nav-links-desktop { display: none !important; } .cta-navbar-btn { display: none !important; } .hamburger-btn { display: flex !important; } }
      `}</style>
    </header>
  );
}
