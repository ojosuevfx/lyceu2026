"use client";

import { motion } from "framer-motion";

const years = [
  {
    year: "Ano 1",
    title: "Filosofia da Razão",
    desc: "Introdução à lógica e à arte do argumento. Leitura dos textos fundadores da tradição filosófica ocidental: como pensar com rigor e precisão.",
    topics: ["Lógica aristotélica", "Introdução à filosofia", "Método socrático", "Grandes textos fundadores"],
  },
  {
    year: "Ano 2",
    title: "Física e Psicologia",
    desc: "O estudo da natureza e da alma. Como os grandes filósofos compreenderam o mundo material, o movimento, a vida e o ser humano enquanto ser vivente.",
    topics: ["Filosofia da natureza", "Psicologia filosófica", "Aristóteles", "A alma e o corpo"],
  },
  {
    year: "Ano 3",
    title: "Ética e Política",
    desc: "A questão do bem, da virtude e da vida em sociedade. O que é uma vida bem vivida e como os homens devem se organizar para florescer juntos.",
    topics: ["Ética das virtudes", "Filosofia política", "O bem comum", "Platão e Aristóteles"],
  },
  {
    year: "Ano 4",
    title: "Metafísica",
    desc: "O ápice da formação filosófica. O estudo do ser enquanto ser, a existência de Deus e os fundamentos últimos da realidade segundo a tradição perene.",
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
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
            Formação de 4 Anos
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 auto 16px", maxWidth: "520px" }}>
            Um percurso completo,{" "}
            <span style={{ color: "#c8a96e" }}>do início ao ápice.</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: "0 auto", maxWidth: "480px" }}>
            Cada ano aprofunda o anterior. Não há atalhos, não há resumos. Só o texto, o método e a comunidade.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="formation-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {years.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                display: "flex", flexDirection: "column", gap: "20px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "radial-gradient(100% 100% at 50% 0%, #1A1C1A 0%, #0D0F10 100%)",
                border: "1px solid rgba(244,245,246,0.07)",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: "28px", right: "28px", height: "1px", background: i === 3 ? "linear-gradient(90deg, #c8a96e, rgba(200,169,110,0.2))" : "linear-gradient(90deg, rgba(200,169,110,0.3), transparent)" }} />

              {/* Year badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8a96e", opacity: i === 3 ? 1 : 0.6 }}>
                  {item.year}
                </span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", color: "rgba(200,169,110,0.06)", lineHeight: "1" }}>
                  {i + 1}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px", lineHeight: "130%", letterSpacing: "-0.01em", color: "#F4F5F6", margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "165%", color: "#8A9AA4", margin: 0 }}>
                  {item.desc}
                </p>
              </div>

              {/* Topics */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                {item.topics.map((t, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c8a96e", opacity: 0.5, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(138,154,164,0.8)" }}>
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
        @media (max-width: 900px) { .formation-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .formation-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
