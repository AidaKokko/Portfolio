'use client';

import React, { useEffect, useState } from 'react';

export default function PDFViewer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full h-[calc(100vh-12rem)] flex flex-col items-center justify-center bg-gray-700 rounded-lg p-4">
        <p className="text-white mb-4 text-center">
          To view your CV on mobile, please click the button below:
        </p>
        <div className="space-y-4 w-full max-w-sm">
          <a
            href="/api/cv"
            className="block w-full px-6 py-3 bg-emerald-600 text-white text-center rounded-lg hover:bg-emerald-700 transition-colors"
          >
            View CV
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src="/api/cv"
      className="w-full h-[calc(100vh-12rem)] rounded-lg"
      title="Aida Kokko CV"
    />
  );
} 