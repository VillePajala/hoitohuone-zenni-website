import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hoitohuone Zenni - Energiahoitoa Lappeenrannassa",
  description: "Hoitohuone Zenni tarjoaa BodyMind energiahoitoa Lappeenrannassa. Varaa aika hoitoon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={`${inter.variable} antialiased`}>
        <Sidebar />
        <MobileNav />

        <main className="min-h-screen bg-white lg:ml-64 pt-16 lg:pt-0">
          <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
