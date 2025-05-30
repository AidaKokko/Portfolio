'use client';

import React, { useEffect, useState } from 'react';

export default function PDFViewer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <iframe
      src="/files/Aida Kokko-CV.pdf#toolbar=0&navpanes=0"
      className="w-full h-[calc(100vh-12rem)] rounded-lg"
      title="Aida Kokko CV"
    />
  );
} 