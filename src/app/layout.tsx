import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aida Kokko - Portfolio",
  description: "Welcome to my portfolio website showcasing my work and experience.",
  icons: {
    icon: [
      { url: '/api/favicon', sizes: 'any' }
    ],
    apple: { url: '/api/favicon', type: 'image/x-icon' }
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
        <link rel="icon" type="image/x-icon" href="/api/favicon" />
        <link rel="shortcut icon" type="image/x-icon" href="/api/favicon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
