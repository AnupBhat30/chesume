import { extractText } from 'unpdf';

export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    const uint8Array = new Uint8Array(buffer);
    const result = await extractText(uint8Array);
    
    // Handle different return types
    if (typeof result === 'string') return result;
    
    if (result && typeof result === 'object' && 'text' in result) {
      // result.text can be string[] or string
      if (Array.isArray(result.text)) {
        return result.text.join('\n');
      }
      return result.text as string;
    }
    
    return '';
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
