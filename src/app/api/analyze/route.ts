import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromPDF } from '@/lib/pdfExtractor';
import { analyzeResumeQuick } from '@/lib/geminiService';

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
    const analysisSummary = await analyzeResumeQuick(resumeText, apiKey);

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
