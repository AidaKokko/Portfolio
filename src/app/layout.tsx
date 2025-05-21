import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aida Kokko - Portfolio",
  description: "Welcome to my portfolio website showcasing my work and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
