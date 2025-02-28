import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Stronami | Profesjonalne Strony Internetowe",
  description:
    "Tworzymy nowoczesne i profesjonalne strony internetowe dla małych firm i jednoosobowych działalności. Responsywność, szybkość i przyjazność dla użytkownika.",
  icons: {
    icon: "/stronami-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.variable}bg-white min-h-screen font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
