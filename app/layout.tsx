import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyceum — Escola de Filosofia Clássica pelo Método Socrático | Brasil",
  description:
    "Formação filosófica séria, enraizada nos grandes clássicos e na tradição católica. Método socrático, currículo estruturado de 4 anos, comunidade intelectual real. Vagas limitadas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
