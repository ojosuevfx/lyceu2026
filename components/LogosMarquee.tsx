const thinkers = [
  "Platão", "Aristóteles", "Santo Tomás de Aquino", "Sócrates",
  "Porfírio", "Euclides", "C.S. Lewis", "Agostinho de Hipona",
  "Platão", "Aristóteles", "Santo Tomás de Aquino", "Sócrates",
  "Porfírio", "Euclides", "C.S. Lewis", "Agostinho de Hipona",
];

export default function LogosMarquee() {
  return (
    <section style={{ width: "100%", padding: "28px 0", overflow: "hidden", position: "relative", borderBottom: "1px solid rgba(244,245,246,0.06)" }} aria-label="Autores estudados no Lyceum">
      <div style={{ position: "absolute", left: 0, top: 0, width: "100px", height: "100%", background: "linear-gradient(to right, #09090B 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, width: "100px", height: "100%", background: "linear-gradient(to left, #09090B 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />

      <div className="animate-marquee" style={{ display: "flex", alignItems: "center", width: "max-content" }}>
        {thinkers.map((name, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "14px", color: "#F4F5F6", opacity: 0.28, whiteSpace: "nowrap", padding: "0 32px", letterSpacing: "0.02em" }}>
              {name}
            </span>
            <span style={{ color: "#c8a96e", opacity: 0.35, fontSize: "8px", flexShrink: 0 }}>✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
