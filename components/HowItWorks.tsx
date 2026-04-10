"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Aulas ao vivo",
    desc: "Encontros semanais pelo método socrático. Não há palestra, há discussão. Você lê o texto, aparece e pensa junto com a turma.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.277A1 1 0 0121 8.68v6.638a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    title: "Aulas gravadas",
    desc: "Todos os encontros ficam disponíveis para revisão. Perdeu uma aula ou quer rever um debate? O acervo fica com você.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" />
      </svg>
    ),
  },
  {
    title: "Textos traduzidos pelo professor",
    desc: "Sem depender de traduções comerciais deficientes. Os textos são selecionados e preparados pelo próprio professor para garantir fidelidade filosófica.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Comunidade de alunos",
    desc: "Um ambiente de pessoas comprometidas com o mesmo percurso. Para discutir, questionar e crescer intelectualmente fora das aulas também.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      <div className="how-inner" style={{ width: "1140px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
            Como Funciona
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 auto 16px", maxWidth: "480px" }}>
            Tudo que você precisa{" "}
            <span style={{ color: "#c8a96e" }}>para estudar de verdade.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: "0 auto", maxWidth: "440px" }}>
            Estrutura simples, sem distrações. Cada recurso existe para garantir que o aprendizado aconteça.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                display: "flex", flexDirection: "column", gap: "18px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(244,245,246,0.07)",
              }}
            >
              {/* Icon */}
              <div style={{
                width: "48px", height: "48px", borderRadius: "14px",
                background: "rgba(200,169,110,0.07)",
                border: "1px solid rgba(200,169,110,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#c8a96e",
              }}>
                {item.icon}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "130%", color: "#F4F5F6", margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "165%", color: "#8A9AA4", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .how-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 900px) { .how-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .how-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
