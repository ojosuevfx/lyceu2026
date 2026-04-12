"use client";

import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Encontros ao vivo",
    desc: "Semanais, pelo método socrático. Sem palestra — o professor conduz a discussão a partir do texto lido pela turma.",
  },
  {
    n: "02",
    title: "Gravações disponíveis",
    desc: "Todos os encontros ficam gravados para revisão. O acervo acompanha o aluno durante toda a formação.",
  },
  {
    n: "03",
    title: "Textos preparados pelo professor",
    desc: "Selecionados e traduzidos pelo próprio professor para garantir precisão filosófica e fidelidade ao original.",
  },
  {
    n: "04",
    title: "Comunidade de alunos",
    desc: "Um ambiente de pessoas comprometidas com o mesmo percurso intelectual, para além das aulas.",
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", gap: "48px" }}
          className="how-heading-row"
        >
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", display: "block", marginBottom: "16px" }}>
              Estrutura do Programa
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0, maxWidth: "420px" }}>
              Como o Lyceum funciona na prática.
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "380px", margin: 0, flexShrink: 0 }} className="how-subtext">
            Cada elemento da estrutura existe para garantir que a aprendizagem filosófica aconteça com rigor e continuidade.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(244,245,246,0.06)", marginBottom: "0" }} />

        {/* Items list */}
        <div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              className="how-item"
              style={{
                display: "grid", gridTemplateColumns: "56px 1fr 2fr",
                alignItems: "center", gap: "40px",
                padding: "32px 0",
                borderBottom: "1px solid rgba(244,245,246,0.06)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "0.1em", color: "rgba(200,169,110,0.4)" }}>
                {item.n}
              </span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "17px", color: "var(--color-text-primary)", margin: 0, lineHeight: "130%" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "165%", color: "var(--color-text-muted)", margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .how-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) {
          .how-heading-row { flex-direction: column !important; align-items: flex-start !important; }
          .how-subtext { max-width: 100% !important; }
          .how-item { grid-template-columns: 40px 1fr !important; gap: 16px !important; }
          .how-item p { grid-column: 2 !important; }
        }
      `}</style>
    </section>
  );
}
