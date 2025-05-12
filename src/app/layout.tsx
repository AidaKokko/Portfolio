import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/Black logo.svg"
                    alt="Aida Kokko Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-semibold text-gray-900">Aida Kokko</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
