export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    const pdfModule = await import('pdf-parse');
    const pdfParse =
      // Prefer default export if available
      (pdfModule as { default?: (input: Buffer) => Promise<{ text: string }> })
        .default ??
      // Fallback to the module itself (CommonJS style)
      (pdfModule as unknown as (input: Buffer) => Promise<{ text: string }>);

    const data = await pdfParse(buffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
