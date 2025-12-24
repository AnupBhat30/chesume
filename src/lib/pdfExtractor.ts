export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    // pdf-parse ships CJS; use dynamic import to access its default export safely in ESM
    const { default: pdfParse } = await import('pdf-parse');
    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
