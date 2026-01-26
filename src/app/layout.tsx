import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "./styles/font";
import { azeretMono } from "./styles/font";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description: "홍찬희의 포트폴리오 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${azeretMono.variable}`}>
      <body
        className={`${pretendard.className} ${azeretMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
