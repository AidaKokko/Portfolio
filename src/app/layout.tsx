import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "./favicon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aida Kokko - Portfolio",
  description: "Welcome to my portfolio website showcasing my work and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
