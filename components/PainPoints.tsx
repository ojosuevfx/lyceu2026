"use client";

import { motion } from "motion/react";

const painCards = [
  {
    text: "Lê fragmentos soltos, sem sequência lógica",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    text: "Nunca foi ensinado a analisar um texto com rigor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    text: "Não tem com quem discutir as ideias de verdade",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    text: "Se perde entre opiniões e não distingue o que é sólido",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    text: "Sabe o nome dos filósofos, mas não entende como pensam",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    text: "Conhece as teses, mas não consegue argumentar a partir delas",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
];

export default function PainPoints() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}>
      <div className="pain-content" style={{ display: "grid", gridTemplateColumns: "420px 1fr", alignItems: "start", width: "1140px", gap: "100px" }}>

        {/* Left — sticky */}
        <div className="pain-left" style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "20px" }}>
              O Contexto
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
              A formação intelectual exige mais do que{" "}
              <span style={{ color: "#c8a96e" }}>acesso a conteúdo.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
              Vivemos numa era de abundância informacional e escassez de pensamento. O acesso a ideias não forma pensadores. O método, sim.
            </p>
          </div>

          {/* Quote */}
          <div style={{ position: "relative", padding: "24px 28px", borderRadius: "16px", background: "rgba(200,169,110,0.03)", border: "1px solid rgba(200,169,110,0.08)" }}>
            <div style={{ position: "absolute", top: "24px", left: "-1px", width: "3px", height: "calc(100% - 48px)", background: "linear-gradient(to bottom, #c8a96e, rgba(200,169,110,0.2))", borderRadius: "0 2px 2px 0" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#C4D0D6", margin: "0 0 12px", fontStyle: "italic" }}>
              "A educação não é o preenchimento de um balde, mas o acender de uma chama."
            </p>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#c8a96e", letterSpacing: "0.04em" }}>
              William Butler Yeats
            </span>
          </div>
        </div>

        {/* Right — cards */}
        <div className="pain-grid" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {painCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                padding: "22px 24px", borderRadius: "16px",
                background: "#0F1012",
                border: "1px solid rgba(244,245,246,0.06)",
                transition: "border-color 200ms ease, background 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,169,110,0.12)";
                (e.currentTarget as HTMLElement).style.background = "#111413";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,245,246,0.06)";
                (e.currentTarget as HTMLElement).style.background = "#0F1012";
              }}
            >
              <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "10px", background: "rgba(200,169,110,0.05)", border: "1px solid rgba(200,169,110,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(200,169,110,0.5)", marginTop: "1px" }}>
                {card.icon}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "160%", color: "#8A9AA4", margin: 0, paddingTop: "7px" }}>
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1199px) { .pain-content { width: 100% !important; padding: 0 32px !important; gap: 56px !important; grid-template-columns: 340px 1fr !important; } }
        @media (max-width: 768px) { .pain-content { grid-template-columns: 1fr !important; padding: 0 24px !important; } .pain-left { position: static !important; } }
      `}</style>
    </section>
  );
}
