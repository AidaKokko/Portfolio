'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import PDFViewer from '@/components/PDFViewer';

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
            <PDFViewer />
          </div>
        </div>
      </main>
    </div>
  );
} 