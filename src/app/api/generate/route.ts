import { NextRequest, NextResponse } from 'next/server';
import { generateQuestions } from '@/lib/geminiService';

export async function POST(req: NextRequest) {
  try {
    const { resumeText, jobDescription } = await req.json();
    const apiKey = req.headers.get('x-api-key') || undefined;

    if (!resumeText) {
      return NextResponse.json({ error: 'Resume text is required' }, { status: 400 });
    }

    const questions = await generateQuestions(resumeText, jobDescription, apiKey);

    return NextResponse.json({
      success: true,
      questions: questions
    });
  } catch (error) {
    console.error('Error in /api/generate:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
