import { openai } from '@ai-sdk/openai'
import { generateText } from 'ai'
import { z } from 'zod'

// Portfolio data context
const portfolioData = {
  name: 'Maryam Faizan',
  title: 'Agentic AI Developer & Full-Stack Innovator',
  email: 'maryam.faizanmianoor@gmail.com',
  phone: '+92 321 3863866',
  location: 'Karachi, Pakistan',
  bio: 'Agentic AI Developer with expertise in multi-agent systems, Python, OpenAI SDK, automation workflows (n8n), RAG pipelines, and prompt engineering.',
  skills: {
    ai: ['Agentic AI', 'OpenAI SDK', 'Prompt Engineering', 'Multi-Agent Systems', 'RAG Pipelines', 'LLM Integration', 'n8n Workflows'],
    frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase', 'Sanity CMS', 'SQL'],
    tools: ['Git & GitHub', 'Vercel', 'CI/CD Pipelines', 'API Integration', 'Docker', 'AWS'],
  },
  experience: [
    {
      company: 'Dev Hub',
      position: 'Internship',
      duration: 'Feb 2023 – Aug 2024',
      achievements: ['Built autonomous multi-agent workflows', 'Developed React/Next.js features', 'Automated workflows using n8n', 'Optimized PostgreSQL queries'],
    },
    {
      company: 'Code Lab',
      position: 'Internship',
      duration: 'May 2024 – Present',
      achievements: ['Developed agent-based AI applications', 'Automated data workflows', 'Integrated AI agents into front-end systems', 'Built RESTful APIs for LLM services'],
    },
  ],
  projects: [
    { name: 'ShopCo – E-Commerce', tech: ['Next.js', 'Stripe', 'Sanity CMS'] },
    { name: 'Geniefy My Finance', tech: ['Next.js', 'OpenAI API', 'MongoDB'] },
    { name: 'AI Fashion Ecommerce', tech: ['Next.js', 'AI/ML', 'Python'] },
    { name: 'Nexus AI Web Agency', tech: ['Next.js', 'Framer Motion', 'TypeScript'] },
  ],
  github: 'https://github.com/maryamfaizan53',
  linkedin: 'https://linkedin.com/in/maryam-faizan',
  portfolio: 'https://portfolio-nextjs-tailwind-flax.vercel.app',
}

const systemPrompt = `You are Maryam's AI Personal Assistant. You are friendly, professional, and knowledgeable about Maryam's work, projects, and expertise.

Here's information about Maryam Faizan:
${JSON.stringify(portfolioData, null, 2)}

Your responsibilities:
1. Greet visitors warmly and introduce yourself as Maryam's AI Assistant
2. Answer questions about Maryam's skills, experience, and projects
3. Provide information about her expertise in AI, automation, and full-stack development
4. Share project details and technical accomplishments
5. Suggest relevant projects based on user interests
6. Provide contact information when requested
7. Be conversational and engaging while maintaining professionalism
8. Offer to help with specific inquiries about potential collaborations

Guidelines:
- Keep responses concise and friendly (2-3 sentences max for casual questions)
- Use technical terminology accurately
- Show enthusiasm about AI and full-stack development
- Always maintain a professional yet approachable tone
- If asked about something not in your knowledge, suggest contacting Maryam directly`

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()

    if (!message || typeof message !== 'string') {
      return Response.json({ error: 'Invalid message' }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Prepare conversation history for context
    const conversationHistory = history?.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    })) || []

    const { text } = await generateText({
      model: openai('gpt-4o-mini'),
      system: systemPrompt,
      messages: [
        ...conversationHistory,
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      maxTokens: 300,
    })

    return Response.json({ reply: text })
  } catch (error) {
    console.error('[v0] Chat error:', error)
    return Response.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    )
  }
}
