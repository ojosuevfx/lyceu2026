"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Coloque aqui os caminhos das imagens quando tiver ───────────────────────
const HERO_IMAGES: string[] = [
  // "/hero/imagem-1.jpg",
  // "/hero/imagem-2.jpg",
  // "/hero/imagem-3.jpg",
];
// ────────────────────────────────────────────────────────────────────────────

const INTERVAL = 5000; // ms entre cada troca

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [current, setCurrent] = useState(0);
  const hasImages = HERO_IMAGES.length > 0;

  useEffect(() => {
    if (!hasImages || HERO_IMAGES.length < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [hasImages]);

  return (
    <section
      ref={ref}
      className="hero-section"
      style={{ position: "relative", width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", borderBottom: "1px solid rgba(244,245,246,0.06)", paddingTop: "80px" }}
    >
      {/* ── Background ── */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y }}>

        {hasImages ? (
          /* Slideshow com fade */
          <>
            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={HERO_IMAGES[current]}
                  alt=""
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </motion.div>
            </AnimatePresence>
            {/* Overlay escuro sobre a foto */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(9,9,11,0.58)" }} />
          </>
        ) : (
          /* Placeholder enquanto não há imagens */
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, #16140F 0%, #0C0A06 50%, #0D0F10 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(200,169,110,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Imagens em breve
            </span>
          </div>
        )}

        {/* Gradiente dourado no topo */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,169,110,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
        {/* Fade para preto na base */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "280px", background: "linear-gradient(to bottom, transparent, #09090B)", pointerEvents: "none" }} />
      </motion.div>

      {/* ── Dots indicator (só aparece quando há imagens) ── */}
      {hasImages && HERO_IMAGES.length > 1 && (
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 3, pointerEvents: "none" }}>
          {HERO_IMAGES.map((_, i) => (
            <div key={i} style={{
              width: i === current ? "20px" : "6px", height: "6px",
              borderRadius: "200px",
              background: i === current ? "#c8a96e" : "rgba(200,169,110,0.3)",
              transition: "width 400ms ease, background 400ms ease",
            }} />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <motion.div
        style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "32px", maxWidth: "860px", padding: "0 24px 100px", textAlign: "center", opacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "200px", border: "1px solid rgba(200,169,110,0.25)", background: "rgba(200,169,110,0.06)" }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8a96e", flexShrink: 0, display: "block" }}
          />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#c8a96e", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            1º Escola de Filosofia Clássica
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="hero-h1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, lineHeight: "108%", letterSpacing: "-0.03em", fontSize: "72px", margin: 0 }}>
          {["Escola de filosofia", "pelo Método Socrático", "de discussão."].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: i === 2 ? "#c8a96e" : "#F4F5F6", display: "block" }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        {/* Lead */}
        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "170%", color: "#8A9AA4", maxWidth: "600px", margin: 0 }}
        >
          O Lyceum é a primeira escola brasileira de filosofia pelo Método Socrático, uma formação intelectual sólida, fundamentada nos grandes clássicos, voltada àqueles que desejam pensar com clareza e profundidade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }} className="hero-cta-row">
            <Link href="#ingresso" className="btn-cta"
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 32px", borderRadius: "200px", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", textDecoration: "none", cursor: "none" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0D0F10" }}>
                Quero ingressar no Lyceum
              </span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link href="#lyceum"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 28px", borderRadius: "200px", border: "1px solid rgba(244,245,246,0.12)", textDecoration: "none", cursor: "none", transition: "border-color 180ms ease" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(244,245,246,0.28)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(244,245,246,0.12)")}
            >
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", color: "#F4F5F6" }}>
                Conhecer o método
              </span>
            </Link>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 1100px) { .hero-h1 { font-size: 56px !important; } }
        @media (max-width: 768px) { .hero-h1 { font-size: 40px !important; letter-spacing: -0.02em !important; } .hero-lead { font-size: 16px !important; } .hero-cta-row { flex-direction: column !important; width: 100% !important; } .hero-cta-row a { width: 100% !important; justify-content: center !important; } }
      `}</style>
    </section>
  );
}
