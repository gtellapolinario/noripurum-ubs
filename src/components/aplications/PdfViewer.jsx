import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from 'antd';
import { Download, Printer } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function PdfViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'checklist-seguranca.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open(pdfFile, '_blank');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-end gap-2 mb-4">
          <Button 
            onClick={handleDownload}
            icon={<Download className="w-4 h-4" />}
            className="flex items-center gap-2"
          >
            Download
          </Button>
          <Button 
            onClick={handlePrint}
            icon={<Printer className="w-4 h-4" />}
            className="flex items-center gap-2"
          >
            Imprimir
          </Button>
        </div>

        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        
        <div className="mt-4">
          <p className="text-center mb-2">
            Página {pageNumber} de {numPages}
          </p>
          <div className="flex justify-center gap-4">
            <Button disabled={pageNumber === 1} onClick={prevPage}>
              Página Anterior
            </Button>
            <Button disabled={pageNumber === numPages} onClick={nextPage}>
              Próxima Página
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;