import { NextResponse } from 'next/server';
import { answerFromKnowledge } from '@/lib/knowledge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const question = String(body.question || '').trim();

    if (!question) {
      return NextResponse.json({ answer: 'Please enter a question.' }, { status: 400 });
    }

    const answer = answerFromKnowledge(question);
    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ answer: 'Something went wrong. Please try again or contact us directly.' }, { status: 500 });
  }
}
