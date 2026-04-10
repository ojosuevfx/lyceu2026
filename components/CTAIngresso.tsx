"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reasons = [
  {
    name: "Método Socrático",
    desc: "Nenhuma aula expositiva. Cada encontro é uma discussão guiada pelos textos que você leu, onde sua voz importa tanto quanto a do professor.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
      </svg>
    ),
  },
  {
    name: "Currículo de 4 Anos",
    desc: "Do ponto zero à lógica aristotélica, à filosofia da natureza e à metafísica. Um percurso construído sobre grandes obras. Sem atalhos, sem resumos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Comunidade Intelectual",
    desc: "Você não estuda sozinho. Cada turma é formada por pessoas comprometidas, com quem você vai discutir, discordar e crescer semana após semana.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    name: "Tradição Perene",
    desc: "Platão, Aristóteles, Santo Tomás de Aquino. Não modismos filosóficos, mas os textos que moldaram a civilização ocidental por mais de dois mil anos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
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
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "radial-gradient(circle 700px at 50% 0px, rgba(200,169,110,0.18), transparent)", pointerEvents: "none" }} />

      <div className="cta-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", width: "1140px", alignItems: "start", position: "relative", zIndex: 1 }}>

        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-8%" }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e" }}>
              Processo de Matrícula
            </span>
            <h2 className="cta-h2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "112%", letterSpacing: "-0.03em", color: "#F4F5F6", margin: 0 }}>
              Você chegou até aqui porque sabe que{" "}
              <span style={{ color: "#c8a96e" }}>algo precisa mudar.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
              O Lyceum é o ambiente que você procurava: uma escola real, com método, currículo e comunidade, para quem quer pensar de verdade.
            </p>
          </motion.div>

          <ul style={{ display: "flex", flexDirection: "column", gap: "32px", listStyle: "none", padding: 0, margin: 0 }}>
            {reasons.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-5%" }}
                style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}
              >
                <div style={{ flexShrink: 0, width: "44px", height: "44px", borderRadius: "12px", background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.10)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8a96e" }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#F4F5F6", margin: "0 0 6px", lineHeight: "130%" }}>
                    {item.name}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "165%", color: "#8A9AA4", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right — card */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ position: "sticky", top: "100px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", borderRadius: "24px", overflow: "hidden", background: "radial-gradient(100% 100% at 50% 0px, #1E2424 0%, #0D0F10 100%)", border: "1px solid rgba(244,245,246,0.07)" }}>
            {/* Card top */}
            <div style={{ padding: "40px 40px 32px", borderBottom: "1px solid rgba(244,245,246,0.07)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "22px", color: "#F4F5F6", display: "block", marginBottom: "6px" }}>
                    Matrícula no Lyceum
                  </span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", color: "#8A9AA4", margin: 0 }}>
                    Turma com vagas limitadas. Processo seletivo obrigatório.
                  </p>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8a96e", background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.15)", borderRadius: "200px", padding: "4px 12px", whiteSpace: "nowrap" }}>
                  Vagas abertas
                </span>
              </div>

              <Link
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", padding: "14px 28px", borderRadius: "200px", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", textDecoration: "none", cursor: "pointer" }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "#0D0F10" }}>
                  Quero aplicar para o Lyceum
                </span>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Steps */}
            <div style={{ padding: "32px 40px", display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8A9AA4", margin: "0 0 24px" }}>
                Como funciona
              </p>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start", paddingBottom: i < steps.length - 1 ? "20px" : "0", marginBottom: i < steps.length - 1 ? "20px" : "0", borderBottom: i < steps.length - 1 ? "1px solid rgba(244,245,246,0.06)" : "none" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "13px", color: "rgba(200,169,110,0.4)", flexShrink: 0, width: "24px", paddingTop: "2px" }}>{step.n}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "160%", color: "#8A9AA4" }}>{step.text}</span>
                </div>
              ))}
            </div>

            {/* Quote footer */}
            <div style={{ padding: "24px 40px", borderTop: "1px solid rgba(244,245,246,0.07)", background: "rgba(200,169,110,0.025)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#8A9AA4", margin: 0, fontStyle: "italic" }}>
                "Não haverá renascimento cultural sem homens e mulheres capazes de pensar."
                <br />
                <span style={{ fontStyle: "normal", fontWeight: 500, color: "#c8a96e", fontSize: "12px" }}>Lyceum, Escola de Filosofia Clássica</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .cta-inner { width: 100% !important; padding: 0 32px !important; gap: 48px !important; } .cta-h2 { font-size: 34px !important; } }
        @media (max-width: 809px) { .cta-inner { grid-template-columns: 1fr !important; padding: 0 24px !important; } .cta-h2 { font-size: 30px !important; } }
      `}</style>
    </section>
  );
}
