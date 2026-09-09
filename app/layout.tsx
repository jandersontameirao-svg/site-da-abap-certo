import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "ABAP | Associação Brasileira de Arqueologia Preventiva", template: "%s | ABAP" },
  description: "Entidade nacional que representa empresas de arqueologia preventiva, promove diálogo institucional, boas práticas e qualificação do setor.",
  icons: { icon: "/logo-abap-oficial.png", shortcut: "/logo-abap-oficial.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
