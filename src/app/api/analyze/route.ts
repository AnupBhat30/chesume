import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromPDF } from '@/lib/pdfExtractor';
import { analyzeResumeQuick } from '@/lib/geminiService';

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const apiKey = req.headers.get('x-api-key') || undefined;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const resumeText = await extractTextFromPDF(buffer);
    console.log('Extracted text type:', typeof resumeText);
    console.log('Extracted text length:', resumeText?.length);
    
    if (typeof resumeText === 'string') {
      console.log('Extracted text preview:', resumeText.substring(0, 200));
    } else {
      console.log('Extracted text is not a string:', resumeText);
    }
    
    const analysisSummary = await analyzeResumeQuick(resumeText, apiKey);
    console.log('Analysis summary:', analysisSummary);

    return NextResponse.json({
      success: true,
      analysis: analysisSummary,
      resumeText
    });
  } catch (error) {
    console.error('Error in /api/analyze:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
