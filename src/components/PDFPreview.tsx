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
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="animate-pulse w-full h-full bg-gray-700"></div>
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
          quality={100}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
        />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="text-center p-4">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <a
                href={pdfPath}
                className="mt-4 inline-block bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors duration-300 text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PDFPreview; 