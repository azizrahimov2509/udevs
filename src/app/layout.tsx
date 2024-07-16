import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/contexts/context";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udevs",
  description:
    "IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={manrope.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <footer>Footer</footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
