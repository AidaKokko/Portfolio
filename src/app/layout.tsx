import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aida Kokko - Portfolio",
  description: "Operations & Events Professional with international experience",
  icons: {
    icon: [
      {
        url: "/Black logo.svg",
        type: "image/svg+xml",
      }
    ],
    apple: [
      {
        url: "/Black logo.svg",
        type: "image/svg+xml",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
