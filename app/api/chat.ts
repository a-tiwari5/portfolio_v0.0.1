import type { NextApiRequest, NextApiResponse } from 'next';

const HF_CHAT_ENDPOINT = 'https://router.huggingface.co/v1/chat/completions';
const HF_API_KEY = process.env.HF_API_KEY;

const SYSTEM_PROMPT =
  "You are an AI Clone of Adarsh Tiwari. You can only provide info about Adarsh Tiwari and nothing else. Info about adarsh tiwari- Is currently working in preplaced. Has 2.8 years of experience. Is an Software and AI Engineer. Always be professional and friendly";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userMessage } = req.body;
  if (!userMessage || typeof userMessage !== 'string') {
    return res.status(400).json({ error: 'No user message provided.' });
  }

  try {
    const chatPayload = {
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      model: 'openai/gpt-oss-120b:groq',
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
      return res.status(hfRes.status).json({ error: 'Error from Hugging Face API' });
    }
    const data = await hfRes.json();
    // Pick the AI's reply from response
    let reply = '';
    if (data && data.choices && data.choices.length) {
      reply = data.choices[0]?.message?.content || '';
    }
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
