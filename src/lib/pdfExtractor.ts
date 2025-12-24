export const extractTextFromPDF = async (buffer: Buffer): Promise<string> => {
  try {
    // Use require for CommonJS modules in API routes
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pdf = require('pdf-parse');
    const data = await pdf(buffer);
    return data.text;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to extract text from PDF');
  }
};
