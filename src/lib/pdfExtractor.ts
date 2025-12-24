import { extractText } from 'unpdf';

export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    const uint8Array = new Uint8Array(buffer);
    const result = await extractText(uint8Array);
    // unpdf returns { text: string, pages: string[] } or just string depending on version/config
    if (typeof result === 'string') return result;
    if (result && typeof result === 'object' && 'text' in result) {
      return result.text as string;
    }
    return '';
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
