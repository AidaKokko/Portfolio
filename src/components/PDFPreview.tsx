'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PDFPreviewProps {
  pdfPath: string;
  title: string;
  previewPath: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ pdfPath, title, previewPath }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative h-48 bg-gray-700 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      )}
      <div className="relative w-full h-full">
        <Image
          src={previewPath}
          alt={`Preview of ${title}`}
          fill
          className="object-cover"
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
        />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <svg className="w-16 h-16 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPreview; 