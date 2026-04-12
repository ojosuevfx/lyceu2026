"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Formulário de candidatura",
    desc: "Preencha o formulário com informações sobre seu perfil e motivação.",
  },
  {
    n: "02",
    title: "Análise pela equipe",
    desc: "Nossa equipe avalia sua candidatura e entra em contato em até 48 horas úteis.",
  },
  {
    n: "03",
    title: "Confirmação da vaga",
    desc: "Você recebe os detalhes da turma e o prazo para confirmar sua matrícula.",
  },
];

export default function CTAIngresso() {
  return (
    <section
      id="ingresso"
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        width: "100%", padding: "120px 0",
        borderTop: "1px solid rgba(244,245,246,0.06)",
        position: "relative", overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(200,169,110,0.07), transparent)",
        }}
      />

      <div className="cta-wrap" style={{ width: "1140px", position: "relative", zIndex: 1 }}>
        <div className="cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* ── Coluna esquerda — copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8%" }}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <span style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px",
              letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8a96e",
            }}>
              Admissões
            </span>

            <h2 className="cta-h2" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
              fontSize: "46px", lineHeight: "108%", letterSpacing: "-0.03em",
              color: "#F4F5F6", margin: 0,
            }}>
              Candidate-se a uma{" "}
              <span style={{ color: "#c8a96e" }}>formação filosófica</span>{" "}
              séria.
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "16px", lineHeight: "170%", color: "#8A9AA4", margin: 0,
              maxWidth: "400px",
            }}>
              O Lyceum seleciona seus alunos por candidatura. As turmas são pequenas e deliberadamente limitadas para preservar a qualidade da discussão socrática.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 500,
              fontSize: "14px", color: "rgba(244,245,246,0.45)", margin: 0,
              letterSpacing: "0.01em",
            }}>
              Nossa equipe entrará em contato em até 48 horas após o envio.
            </p>
          </motion.div>

          {/* ── Coluna direita — etapas + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8%" }}
            style={{
              display: "flex", flexDirection: "column", gap: "0",
              border: "1px solid rgba(244,245,246,0.08)",
              borderRadius: "20px",
              background: "radial-gradient(100% 100% at 50% 0px, #141618 0%, #0D0F10 100%)",
              overflow: "hidden",
            }}
          >
            {/* Steps */}
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: "20px", alignItems: "flex-start",
                  padding: "24px 28px",
                  borderBottom: i < steps.length - 1 ? "1px solid rgba(244,245,246,0.06)" : "none",
                }}
              >
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                  fontSize: "11px", letterSpacing: "0.1em", color: "rgba(200,169,110,0.45)",
                  flexShrink: 0, paddingTop: "3px",
                }}>
                  {step.n}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
                    fontSize: "14px", color: "#F4F5F6", lineHeight: "130%",
                  }}>
                    {step.title}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif", fontWeight: 400,
                    fontSize: "13px", lineHeight: "155%", color: "#8A9AA4",
                  }}>
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#c8a96e", display: "block", flexShrink: 0 }} />
                <span style={{
                  fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px",
                  letterSpacing: "0.08em", textTransform: "uppercase", color: "#c8a96e",
                }}>
                  Admissão aberta — Turma 2025
                </span>
              </div>

              <Link
                href="https://form.respondi.app/ujRzWMSF?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                  padding: "14px 24px", borderRadius: "200px",
                  background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
                  textDecoration: "none",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0D0F10" }}>
                  Candidatar-se ao Lyceum
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <p style={{
                fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "11px",
                color: "rgba(244,245,246,0.2)", margin: 0, textAlign: "center", letterSpacing: "0.03em",
              }}>
                Turmas reduzidas · Seleção por candidatura
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .cta-wrap { width: 100% !important; padding: 0 32px !important; } .cta-h2 { font-size: 38px !important; } }
        @media (max-width: 860px) { .cta-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .cta-h2 { font-size: 34px !important; } }
        @media (max-width: 560px) { .cta-wrap { padding: 0 20px !important; } .cta-h2 { font-size: 30px !important; } }
      `}</style>
    </section>
  );
}
