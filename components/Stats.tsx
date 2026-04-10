const stats = [
  { number: "4 anos", label: "de formação filosófica estruturada" },
  { number: "100%", label: "ao vivo pelo método socrático" },
  { number: "2.500+", label: "anos de tradição revisitada" },
  { number: "Vagas limitadas", label: "por turma para qualidade real" },
];

export default function Stats() {
  return (
    <section style={{ display: "flex", justifyContent: "center", padding: "0", width: "100%" }}>
      <div className="stats-wrapper" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", width: "1140px" }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
            padding: "36px 16px",
            borderRight: i < 3 ? "1px solid rgba(244,245,246,0.06)" : "none",
            borderBottom: "1px solid rgba(244,245,246,0.06)",
            borderTop: "1px solid rgba(244,245,246,0.06)",
          }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "28px", lineHeight: "120%", color: "#c8a96e", textAlign: "center", letterSpacing: "-0.02em" }}>
              {stat.number}
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "150%", color: "#8A9AA4", textAlign: "center" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1199px) { .stats-wrapper { width: 100% !important; } }
        @media (max-width: 640px) { .stats-wrapper { grid-template-columns: 1fr 1fr !important; } .stats-wrapper > div:nth-child(2) { border-right: none !important; } .stats-wrapper > div:nth-child(3) { border-right: 1px solid rgba(244,245,246,0.06) !important; } }
      `}</style>
    </section>
  );
}
