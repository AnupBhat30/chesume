import { NextRequest, NextResponse } from 'next/server';
import { generateAnswer } from '@/lib/geminiService';

export async function POST(req: NextRequest) {
  try {
    const { question, type } = await req.json();
    const apiKey = req.headers.get('x-api-key') || undefined;

    if (!question) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 });
    }

    const answer = await generateAnswer(question, type, apiKey);

    return NextResponse.json({
      success: true,
      answer: answer
    });
  } catch (error) {
    console.error('Error in /api/answer:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
