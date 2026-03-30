import "./globals.css";

export const metadata = {
  title: "Nostra Codes",
  description: "Websites, programas e dashboards para empresas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
