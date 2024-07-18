import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/contexts/context";
import Footer from "./components/Footer";
import ReplainWidget from "./components/Replain/ReplainWidget";

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
      <head>
        {/* Заголовок и метаданные */}
        <title>Udev</title>
        <meta name="description" />
      </head>
      <body className={manrope.className}>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* Включение виджета re:plain */}
          <ReplainWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
