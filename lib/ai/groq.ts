import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function enhanceResumeContent(
  content: string,
  type: 'summary' | 'experience' | 'achievement'
): Promise<string> {
  if (!content.trim()) return content;

  const prompts = {
    summary: `Enhance this professional summary to be more compelling and ATS-friendly. Keep it concise but impactful: "${content}"`,
    experience: `Improve this job description to be more professional and achievement-focused. Use action verbs and quantify results where possible: "${content}"`,
    achievement: `Transform this achievement into a powerful, quantified bullet point that demonstrates impact and value: "${content}"`
  };

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a professional resume writer and career coach. Provide enhanced, professional content that is ATS-friendly and compelling to hiring managers.'
        },
        {
          role: 'user',
          content: prompts[type]
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 200,
    });

    return completion.choices[0]?.message?.content || content;
  } catch (error) {
    console.error('Error enhancing content:', error);
    return content;
  }
}

export async function generateResumeSection(
  sectionType: 'skills' | 'summary',
  context: string
): Promise<string> {
  const prompts = {
    skills: `Based on this professional context, suggest 8-10 relevant skills: "${context}"`,
    summary: `Create a professional summary for someone with this background: "${context}"`
  };

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a professional resume writer. Generate high-quality, relevant content for resumes.'
        },
        {
          role: 'user',
          content: prompts[sectionType]
        }
      ],
      model: 'llama3-8b-8192',
      temperature: 0.7,
      max_tokens: 300,
    });

    return completion.choices[0]?.message?.content || '';
  } catch (error) {
    console.error('Error generating content:', error);
    return '';
  }
}
