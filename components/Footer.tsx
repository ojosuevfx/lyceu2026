export default function Footer() {
  return (
    <footer
      id="footer"
      style={{ width: "100%", borderTop: "1px solid rgba(244,245,246,0.07)", padding: "28px 24px", textAlign: "center" }}
    >
      <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(138,154,164,0.4)", margin: 0 }}>
        © {new Date().getFullYear()} Lyceum, Escola de Filosofia Clássica. Fundado por Lucca de Tomás.
      </p>
    </footer>
  );
}
