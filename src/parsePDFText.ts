import { PDFExtract, PDFExtractPage, PDFExtractText } from 'pdf.js-extract';

export const parsePDFText = async (url: string) => {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    const pdf = new PDFExtract();
    const pdfData = await pdf.extractBuffer(buffer as Buffer);
    const text = pdfData.pages
        .flatMap((page: PDFExtractPage) => page.content.map((item: PDFExtractText) => item.str))
        .join(' ');

    return text;
};
