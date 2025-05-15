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
    <div className="relative h-48 sm:h-64 bg-gray-700 overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-500 animate-pulse mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-400 mt-2">Loading preview...</p>
          </div>
        </div>
      )}
      <div className="relative w-full h-full">
        <Image
          src={previewPath}
          alt={`Preview of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain bg-gray-800"
          priority
          onLoadingComplete={() => setIsLoading(false)}
          onError={(e) => {
            console.error('Error loading image:', e);
            setError(true);
            setIsLoading(false);
          }}
        />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="text-center p-4">
              <svg className="w-16 h-16 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-400 mt-2">Preview not available</p>
              <a
                href={pdfPath}
                className="mt-4 inline-block bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPreview; 