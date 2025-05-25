'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function ViewCV() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 relative">
            <button
              onClick={() => router.push('/')}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full transition-colors z-10"
              aria-label="Close CV viewer"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <object
              data="/files/Aida Kokko-CV.pdf"
              type="application/pdf"
              className="w-full h-[calc(100vh-12rem)] rounded-lg"
            >
              <iframe
                src="/files/Aida Kokko-CV.pdf"
                className="w-full h-[calc(100vh-12rem)] rounded-lg"
                title="Aida Kokko CV"
              >
                <div className="text-center p-8">
                  <p className="text-white mb-4">
                    Unable to display PDF directly. Please use one of the following options:
                  </p>
                  <div className="space-y-4">
                    <a
                      href="/files/Aida Kokko-CV.pdf"
                      className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open PDF in New Tab
                    </a>
                    <br />
                    <a
                      href="/files/Aida Kokko-CV.pdf"
                      download
                      className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </main>
    </div>
  );
} 