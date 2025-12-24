// @ts-expect-error pdf-parse has no TypeScript types for its ESM entry
import pdf from 'pdf-parse/lib/pdf-parse.js';

export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
