"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Encontros semanais ao vivo pelo método socrático",
  "Acesso às gravações de todos os encontros",
  "Textos traduzidos e preparados pelo professor",
  "Comunidade de alunos comprometidos",
  "Currículo estruturado de 4 anos",
  "Formação em Filosofia Clássica e Tradição Perene",
];

const steps = [
  { n: "01", text: "Preencha o formulário de candidatura (5 minutos)" },
  { n: "02", text: "Nossa equipe analisa sua inscrição em até 48h" },
  { n: "03", text: "Apresentamos os detalhes da turma e investimento" },
];

export default function CTAIngresso() {
  return (
    <section
      id="ingresso"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)", position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "radial-gradient(circle 700px at 50% 0px, rgba(200,169,110,0.14), transparent)", pointerEvents: "none" }} />

      <div className="cta-wrap" style={{ width: "1140px", position: "relative", zIndex: 1 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
            Admissões
          </span>
          <h2 className="cta-h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "44px", lineHeight: "112%", letterSpacing: "-0.03em", color: "#F4F5F6", margin: "0 auto", maxWidth: "620px" }}>
            Processo de candidatura ao{" "}
            <span style={{ color: "#c8a96e" }}>Lyceum.</span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{
            display: "grid", gridTemplateColumns: "1fr 1.4fr",
            borderRadius: "24px", overflow: "hidden",
            background: "radial-gradient(100% 100% at 50% 0px, #1A1C1A 0%, #0D0F10 100%)",
            border: "1px solid rgba(244,245,246,0.08)",
          }}
          className="cta-card"
        >
          {/* Left — info + CTA */}
          <div style={{ padding: "48px 40px", borderRight: "1px solid rgba(244,245,246,0.07)", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: "#F4F5F6", lineHeight: "130%" }}>
                Admissão ao Lyceum
              </span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#8A9AA4", margin: 0, lineHeight: "160%" }}>
                Turmas reduzidas.<br />Seleção por candidatura.
              </p>
            </div>

            {/* Vagas badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8a96e", display: "block", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "#c8a96e" }}>Admissão aberta</span>
            </div>

            <Link
              href="https://form.respondi.app/ujRzWMSF?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta btn-cta-apply"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "14px 20px", borderRadius: "12px", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", textDecoration: "none", cursor: "pointer" }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0D0F10" }}>
                Candidatar-se ao Lyceum
              </span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0", borderTop: "1px solid rgba(244,245,246,0.06)", paddingTop: "24px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(138,154,164,0.5)", margin: "0 0 16px" }}>
                Como funciona
              </p>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? "14px" : 0, marginBottom: i < steps.length - 1 ? "14px" : 0, borderBottom: i < steps.length - 1 ? "1px solid rgba(244,245,246,0.05)" : "none" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "11px", color: "rgba(200,169,110,0.4)", flexShrink: 0, paddingTop: "2px" }}>{step.n}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "155%", color: "#8A9AA4" }}>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — features + description */}
          <div style={{ padding: "48px 44px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7.5" stroke="rgba(200,169,110,0.25)" />
                    <path d="M5 8l2 2 4-4" stroke="#c8a96e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#C4D0D6", lineHeight: "150%" }}>
                    {f}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div style={{ borderTop: "1px solid rgba(244,245,246,0.06)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
                O Lyceum admite alunos por processo seletivo. As turmas são pequenas e deliberadamente limitadas para preservar a qualidade da discussão socrática.
              </p>
              <div style={{ borderLeft: "2px solid rgba(200,169,110,0.3)", paddingLeft: "16px" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "165%", color: "rgba(244,245,246,0.45)", margin: "0 0 8px", fontStyle: "italic" }}>
                  "Não haverá renascimento cultural sem homens e mulheres capazes de pensar."
                </p>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(200,169,110,0.6)" }}>
                  Lyceum, Escola de Filosofia Clássica
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .cta-wrap { width: 100% !important; padding: 0 32px !important; } .cta-h2 { font-size: 36px !important; } }
        @media (max-width: 809px) { .cta-card { grid-template-columns: 1fr !important; } .cta-card > div:first-child { border-right: none !important; border-bottom: 1px solid rgba(244,245,246,0.07) !important; } .cta-h2 { font-size: 30px !important; } }
        @media (max-width: 560px) { .cta-wrap { padding: 0 20px !important; } }
      `}</style>
    </section>
  );
}
