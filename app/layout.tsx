import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nostra Codes",
  description: "Websites, programas e dashboards para empresas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
