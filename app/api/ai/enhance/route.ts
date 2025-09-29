import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || 'dummy-key-for-build',
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === 'dummy-key-for-build') {
      return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
    }

    const { content, type } = await request.json();

    if (!content || !type) {
      return NextResponse.json({ error: 'Content and type are required' }, { status: 400 });
    }

    const prompts = {
      summary: `Enhance this professional summary to be more compelling and ATS-friendly. Keep it concise but impactful: "${content}"`,
      experience: `Improve this job description to be more professional and achievement-focused. Use action verbs and quantify results where possible: "${content}"`,
      achievement: `Transform this achievement into a powerful, quantified bullet point that demonstrates impact and value: "${content}"`
    };

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a professional resume writer and career coach. Provide enhanced, professional content that is ATS-friendly and compelling to hiring managers.'
        },
        {
          role: 'user',
          content: prompts[type as keyof typeof prompts]
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 200,
    });

    const enhancedContent = completion.choices[0]?.message?.content || content;

    return NextResponse.json({ enhancedContent });
  } catch (error) {
    console.error('AI enhancement error:', error);
    return NextResponse.json({ error: 'Failed to enhance content' }, { status: 500 });
  }
}
