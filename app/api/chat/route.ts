import { NextResponse } from 'next/server';

const HF_CHAT_ENDPOINT = 'https://router.huggingface.co/v1/chat/completions';
const HF_API_KEY = process.env.HF_API_KEY;

const SYSTEM_PROMPT =
  "You are an AI Clone of Adarsh Tiwari. You can only provide info about Adarsh Tiwari and nothing else. Info about adarsh tiwari- Is currently working in preplaced. Has 2.8 years of experience. Is an Software and AI Engineer. Always be professional and friendly";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userMessage } = body;

    if (!userMessage || typeof userMessage !== 'string') {
      return NextResponse.json({ error: 'No user message provided.' }, { status: 400 });
    }

    const chatPayload = {
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      model: 'openai/gpt-oss-20b:groq',
      stream: false,
      temperature: 0.0,
    };

    const hfRes = await fetch(HF_CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HF_API_KEY}`,
      },
      body: JSON.stringify(chatPayload),
    });

    if (!hfRes.ok) {
      return NextResponse.json({ error: 'Error from Hugging Face API' }, { status: hfRes.status });
    }

    const data = await hfRes.json();
    // Pick the AI's reply from response
    let reply = '';
    if (data && data.choices && data.choices.length) {
      reply = data.choices[0]?.message?.content || '';
    }
    return NextResponse.json({ reply });
  } catch (e) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
