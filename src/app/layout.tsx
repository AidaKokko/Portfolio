import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aida Kokko - Portfolio",
  description: "Welcome to my portfolio website showcasing my work and experience.",
  icons: {
    icon: [
      { url: '/aida-favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: { url: '/favicon.png', type: 'image/png' }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <link rel="icon" href="/aida-favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/aida-favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
