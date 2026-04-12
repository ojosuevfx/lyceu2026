"use client";

import { motion } from "framer-motion";

const years = [
  {
    year: "Ano I",
    title: "Filosofia da Razão",
    desc: "Introdução à lógica e à arte do argumento. Leitura dos textos fundadores da tradição filosófica ocidental.",
    topics: ["Lógica aristotélica", "Introdução à filosofia", "Método socrático", "Grandes textos fundadores"],
  },
  {
    year: "Ano II",
    title: "Filosofia da Natureza",
    desc: "O estudo da natureza e da alma segundo os grandes filósofos: o mundo material, o movimento, a vida e o ser humano.",
    topics: ["Filosofia da natureza", "Psicologia filosófica", "Aristóteles", "A alma e o corpo"],
  },
  {
    year: "Ano III",
    title: "Ética e Filosofia Política",
    desc: "A questão do bem, da virtude e da vida em sociedade. O que é uma vida bem vivida e como os homens devem se organizar.",
    topics: ["Ética das virtudes", "Filosofia política", "O bem comum", "Platão e Aristóteles"],
  },
  {
    year: "Ano IV",
    title: "Metafísica",
    desc: "O estudo do ser enquanto ser, a existência de Deus e os fundamentos últimos da realidade segundo a tradição perene.",
    topics: ["Ontologia", "Teologia natural", "Santo Tomás de Aquino", "Ser e essência"],
  },
];

export default function Formation() {
  return (
    <section
      id="formacao"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      <div className="formation-inner" style={{ width: "1140px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ marginBottom: "72px" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", display: "block", marginBottom: "16px" }}>
            Currículo
          </span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "48px" }} className="formation-heading-row">
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0, maxWidth: "440px" }}>
              Formação de quatro anos em Filosofia Clássica.
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "360px", margin: 0, flexShrink: 0 }} className="formation-subtext">
              Cada ano aprofunda o anterior, seguindo a progressão natural da tradição filosófica — da lógica à metafísica.
            </p>
          </div>
        </motion.div>

        {/* Curriculum table */}
        <div style={{ borderTop: "1px solid rgba(244,245,246,0.08)" }}>
          {years.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              className="formation-row"
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr 1fr",
                gap: "48px",
                padding: "40px 0",
                borderBottom: "1px solid rgba(244,245,246,0.06)",
                alignItems: "start",
              }}
            >
              {/* Year */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", opacity: i === 3 ? 1 : 0.6 }}>
                  {item.year}
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", color: "rgba(200,169,110,0.05)", lineHeight: "1", marginTop: "4px" }}>
                  {i + 1}
                </span>
              </div>

              {/* Title + desc */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "130%", letterSpacing: "-0.01em", color: "var(--color-text-primary)", margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: "var(--color-text-muted)", margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Topics */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {item.topics.map((t, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--color-accent)", opacity: 0.4, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "var(--color-text-muted)", opacity: 0.8 }}>
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .formation-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 860px) {
          .formation-heading-row { flex-direction: column !important; align-items: flex-start !important; }
          .formation-subtext { max-width: 100% !important; }
          .formation-row { grid-template-columns: 80px 1fr !important; gap: 24px !important; }
          .formation-row ul { grid-column: 2 !important; }
        }
        @media (max-width: 560px) { .formation-inner { padding: 0 20px !important; } .formation-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
