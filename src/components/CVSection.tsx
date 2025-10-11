'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Import react-pdf dynamically with no SSR to avoid server-side rendering issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

export default function CVSection() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isClient, setIsClient] = useState(false);

  // Configure PDF.js worker only on the client side
  useEffect(() => {
    setIsClient(true);
    
    import('react-pdf').then((module) => {
      const { pdfjs } = module;
      pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0));
  const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setScale(1.0);

  // Don't render the PDF until we're on the client
  if (!isClient) {
    return (
      <div className="text-center mb-16 px-4">
        <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Mon CV complet</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-[#000814]">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center mb-16 px-4">
      <h2 className="text-[#FFC300] text-3xl font-bold mb-8">Mon CV complet</h2>
      
      {/* PDF Controls */}
      <div className="max-w-4xl mx-auto mb-4 flex flex-wrap justify-center items-center gap-4 bg-[#001233] p-4 rounded-lg">
        {/* Page Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-[#FFC300] text-[#000814] rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FFD700] transition-colors"
          >
            ← Précédent
          </button>
          <span className="text-white px-4">
            Page {pageNumber} sur {numPages}
          </span>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-[#FFC300] text-[#000814] rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FFD700] transition-colors"
          >
            Suivant →
          </button>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="px-4 py-2 bg-[#003566] text-white rounded-lg font-semibold hover:bg-[#004080] transition-colors"
          >
            -
          </button>
          <span className="text-white px-2 min-w-[80px]">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="px-4 py-2 bg-[#003566] text-white rounded-lg font-semibold hover:bg-[#004080] transition-colors"
          >
            +
          </button>
          <button
            onClick={resetZoom}
            className="px-4 py-2 bg-[#003566] text-white rounded-lg font-semibold hover:bg-[#004080] transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Download Button */}
        <a
          href="/media/Drozd_Damien_CV_FullStack.pdf"
          download="Drozd_Damien_CV_FullStack.pdf"
          className="px-4 py-2 bg-[#FFC300] text-[#000814] rounded-lg font-semibold hover:bg-[#FFD700] transition-colors"
        >
          📥 Télécharger PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-auto">
        <Document
          file="/media/Drozd_Damien_CV_FullStack.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="p-8 text-[#000814]">
              Chargement du CV...
            </div>
          }
          error={
            <div className="p-8 text-red-600">
              Erreur lors du chargement du PDF. Veuillez réessayer.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="mx-auto"
          />
        </Document>
      </div>
    </div>
  );
}
