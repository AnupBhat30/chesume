import { NextRequest, NextResponse } from 'next/server';
import { getAiGuideResponse } from '@/lib/practice/guideService';

export async function POST(req: NextRequest) {
  try {
    const apiKey = req.headers.get('x-api-key');
    if (!apiKey) {
      return NextResponse.json({ error: 'API key is required' }, { status: 401 });
    }

    const body = await req.json();
    const { context } = body;

    if (!context) {
      return NextResponse.json({ error: 'Context is required' }, { status: 400 });
    }

    const response = await getAiGuideResponse(apiKey, context);

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error('Practice Guide Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to get AI guide response';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
