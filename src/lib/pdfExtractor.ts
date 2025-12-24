import { extractText } from 'unpdf';

export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    const uint8Array = new Uint8Array(buffer);
    const result = await extractText(uint8Array);
    // unpdf returns { text: string, pages: string[] }
    return typeof result === 'string' ? result : result.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
