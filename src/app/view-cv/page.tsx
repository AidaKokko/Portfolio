'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function ViewCV() {
  const [isChrome, setIsChrome] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsChrome(userAgent.includes('Chrome'));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <iframe
              src="/files/Aida Kokko-CV.pdf#toolbar=0&navpanes=0&view=FitH"
              className="w-full h-[calc(100vh-12rem)] rounded-lg"
              title="Aida Kokko CV"
            />
            <div className="mt-4 text-center">
              <p className="text-white">
                If the PDF doesn't load automatically,{' '}
                <a
                  href="/files/Aida Kokko-CV.pdf"
                  className="text-emerald-400 hover:text-emerald-300 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  click here to view the PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 